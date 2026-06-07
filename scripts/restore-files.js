// Restores corrupted multi-export data files to a clean state
// by removing everything after the `cta:` property that doesn't belong
const fs = require('fs');

function decodeHtml(str) {
  return str
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#(\d+);/g, (_, n) => String.fromCharCode(n));
}

// String-aware depth tracker: finds the end of a {...} or [...] block
function findBlockEnd(str, startIdx, openChar, closeChar) {
  let depth = 0, i = startIdx, inStr = false, strChar = '';
  for (; i < str.length; i++) {
    const ch = str[i];
    if (inStr) {
      if (ch === '\\') { i++; continue; }
      if (ch === strChar) inStr = false;
    } else {
      if (ch === '"' || ch === "'") { inStr = true; strChar = ch; }
      else if (ch === openChar) depth++;
      else if (ch === closeChar) { depth--; if (depth === 0) return i; }
    }
  }
  return -1;
}

// Process a single .ts file: for each exported const block,
// find the cta: property and remove everything after it (stray content, dupes)
function cleanFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Find all `export const X:` positions
  const exportRe = /export const \w+:/g;
  const exports = [];
  let m;
  while ((m = exportRe.exec(content)) !== null) {
    exports.push(m.index);
  }
  if (!exports.length) {
    // Single export file: just find `const data:`
    const singleRe = /const data:/g;
    while ((m = singleRe.exec(content)) !== null) {
      exports.push(m.index);
    }
  }
  // Add end sentinel
  exports.push(content.length);

  // Process from end to start so positions remain valid
  for (let ei = exports.length - 2; ei >= 0; ei--) {
    const blockStart = exports[ei];
    const blockNextStart = exports[ei + 1];

    // Find opening { of the object
    const openIdx = content.indexOf('{', blockStart);
    if (openIdx === -1 || openIdx > blockNextStart) continue;

    // Find closing } using string-aware tracker
    const closeIdx = findBlockEnd(content, openIdx, '{', '}');
    if (closeIdx === -1) continue;

    const inner = content.slice(openIdx + 1, closeIdx);

    // Find cta: in the inner content
    const ctaMatch = inner.search(/\n?\s{2}cta:/);
    if (ctaMatch === -1) continue;

    const ctaStart = ctaMatch + (inner[ctaMatch] === '\n' ? 1 : 0);
    const ctaKeywordPos = inner.indexOf('cta:', ctaStart);

    // Find the { that opens the cta value
    const ctaOpenIdx = inner.indexOf('{', ctaKeywordPos);
    if (ctaOpenIdx === -1) continue;

    // Find matching } for the cta value
    const ctaCloseIdx = findBlockEnd(inner, ctaOpenIdx, '{', '}');
    if (ctaCloseIdx === -1) continue;

    // Everything after ctaCloseIdx in inner is potentially corrupt
    const afterCta = inner.slice(ctaCloseIdx + 1);

    // Check if there's anything after the cta that shouldn't be there
    // (stray content, duplicated cases/testimonials, etc.)
    // "Shouldn't be there" = not just whitespace + cases: [...] + testimonials: [...]
    // Strategy: remove cases/testimonials blocks cleanly, then check if there's still garbage
    let afterCtaClean = afterCta.trimEnd().replace(/,+$/, '');

    // Check if afterCta contains anything that looks like corruption
    // (stray content outside of proper array props like cases: [...] or testimonials: [...])
    const hasStray = afterCtaClean.replace(/,?\s*cases:\s*\[[^\]]*(\](?![^\[]*\[))*\]/g, '')
                                   .replace(/,?\s*testimonials:\s*\[[^\]]*(\](?![^\[]*\[))*\]/g, '')
                                   .trim().length > 0;

    // If there's stray content OR duplicate properties, rebuild the inner content
    // with only clean data up to and including the cta
    if (hasStray || afterCta.match(/cases:[\s\S]*cases:/)) {
      const cleanInner = inner.slice(0, ctaCloseIdx + 1);
      const newBlock = '{' + cleanInner + '\n}';
      content = content.slice(0, openIdx) + newBlock + content.slice(closeIdx + 1);
      changed = true;
      console.log(`  Cleaned block ending at ${closeIdx}`);
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
  return changed;
}

const FILES = [
  'd:/dwww/react/data/pages/services/main-services.ts',
  'd:/dwww/react/data/pages/products/products.ts',
  'd:/dwww/react/data/pages/solutions/solutions-pages.ts',
  'd:/dwww/react/data/pages/stack/stack-pages.ts',
];

for (const f of FILES) {
  if (!fs.existsSync(f)) { console.log(`Skip (not found): ${f}`); continue; }
  const changed = cleanFile(f);
  console.log(changed ? `✅ Cleaned: ${f}` : `✓  No changes: ${f}`);
}
