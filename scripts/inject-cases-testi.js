// Extracts case studies & testimonials from every HTML file and injects into matching data files
const fs = require('fs');
const path = require('path');

const HTML_DIR = 'd:/dwww';
const DATA_DIR = 'd:/dwww/react/data/pages';

// Map from HTML filename (no ext) → data file path
const PAGE_MAP = {
  // Main services
  'web-development':    'services/main-services.ts:webDevelopment',
  'saas-development':   'services/main-services.ts:saas',
  'crm-erp-systems':    'services/main-services.ts:crm',
  'mvp-development':    'services/main-services.ts:mvp',
  'mobile-app-development': 'services/main-services.ts:mobile',
  'custom-web-apps':    'services/main-services.ts:customWebApps',
  'ecommerce-development': 'services/main-services.ts:ecommerce',
  'ui-ux-design':       'services/main-services.ts:uiUxDesign',
  'cloud-devops':       'services/main-services.ts:cloudDevOps',
  'ai-automation':      'services/main-services.ts:aiAutomation',
  'open-source-development': 'services/main-services.ts:openSourceDevelopment',
  // Industries
  'fintech':            'industries/industries.ts:fintech',
  'healthcare':         'industries/industries.ts:healthcare',
  'edtech':             'industries/industries.ts:edtech',
  'logistics':          'industries/industries.ts:logistics',
  'manufacturing':      'industries/industries.ts:manufacturing',
  'real-estate':        'industries/industries.ts:realEstate',
  'retail-ecommerce':   'industries/industries.ts:retailEcommerce',
  'saas-startups':      'industries/industries.ts:saasStartups',
  // Hire developers
  'react-developer':    'hire/react-developer.ts',
  'nodejs-developer':   'hire/nodejs-developer.ts',
  'python-developer':   'hire/python-developer.ts',
  'php-developer':      'hire/php-developer.ts',
  'laravel-developer':  'hire/laravel-developer.ts',
  'vuejs-developer':    'hire/vue-developer.ts',
  'angular-developer':  'hire/angular-developer.ts',
  'react-native-developer': 'hire/react-native-developer.ts',
  'flutter-developer':  'hire/flutter-developer.ts',
  'devops-engineer':    'hire/devops-engineer.ts',
  // Products
  'food-delivery-app':  'products/products.ts:foodDeliveryApp',
  'laundry-management-system': 'products/products.ts:laundryManagementSystem',
  'inventory-management-system': 'products/products.ts:inventoryManagementSystem',
  'learning-management-system': 'products/products.ts:learningManagementSystem',
  'codeigniter-development': 'products/products.ts:codeigniterDevelopment',
  'wordpress-logistics-courier-tracking-plugin': 'products/products.ts:wpLogisticsCourierPlugin',
  'wordpress-courier-tracking-plugin': 'products/products.ts:wpCourierTrackingPlugin',
  // Solutions
  'services-erp':       'solutions/solutions-pages.ts:cybersecurity',
};

// ---- Helpers ----
function decodeHtml(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(n));
}

// ---- Parsers ----

function extractCases(html) {
  const cases = [];
  // Match each case div
  const caseRe = /<div class="case reveal">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g;
  // Simpler approach: find case-grid content
  const gridMatch = html.match(/<div class="case-grid">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/);
  if (!gridMatch) return cases;
  const grid = gridMatch[1];

  // Split on case reveal divs
  const caseBlocks = grid.split(/<div class="case reveal">/);
  caseBlocks.shift(); // remove before first case

  for (const block of caseBlocks) {
    try {
      // bgClass from case-top
      const bgClassMatch = block.match(/class="case-top ([^"]+)"/);
      const bgStyleMatch = block.match(/class="case-top"[^>]*style="([^"]+)"/);
      const bgClass = bgClassMatch ? bgClassMatch[1].trim() : undefined;
      // Extract just the gradient value (strip "background:" prefix)
      const rawStyle = bgStyleMatch ? bgStyleMatch[1].trim() : undefined;
      const bgStyle = rawStyle ? rawStyle.replace(/^background\s*:\s*/i, '') : undefined;

      // tag
      const tagMatch = block.match(/<span class="case-tag">([^<]+)<\/span>/);
      const tag = tagMatch ? decodeHtml(tagMatch[1].trim()) : '';

      // title
      const titleMatch = block.match(/<h3>([^<]+)<\/h3>/);
      const title = titleMatch ? decodeHtml(titleMatch[1].trim()) : '';

      // desc
      const descMatch = block.match(/<p>([^<]+)<\/p>/);
      const desc = descMatch ? decodeHtml(descMatch[1].trim()) : '';

      // metrics
      const metrics = [];
      const metricsBlock = block.match(/<div class="case-metrics">([\s\S]*?)<\/div>/);
      if (metricsBlock) {
        const cmRe = /<div class="m">([^<]+)<\/div>\s*<div class="ml">([^<]+)<\/div>/g;
        let m;
        while ((m = cmRe.exec(metricsBlock[1])) !== null) {
          metrics.push({ value: m[1].trim(), label: m[2].trim() });
        }
      }

      // stack
      const stack = [];
      const stackBlock = block.match(/<div class="case-stack">([\s\S]*?)<\/div>/);
      if (stackBlock) {
        const spanRe = /<span>([^<]+)<\/span>/g;
        let s;
        while ((s = spanRe.exec(stackBlock[1])) !== null) {
          stack.push(s[1].trim());
        }
      }

      if (title && tag) {
        const c = { tag, title, desc, metrics, stack };
        if (bgClass) c.bgClass = bgClass;
        if (bgStyle) c.bgStyle = bgStyle;
        cases.push(c);
      }
    } catch (e) {
      // skip malformed
    }
  }
  return cases;
}

function extractTestimonials(html) {
  const testis = [];
  const quoteBlocks = html.split(/<div class="quote reveal">/);
  quoteBlocks.shift();

  for (const block of quoteBlocks) {
    try {
      // text
      const textMatch = block.match(/<p>"?([\s\S]*?)"?<\/p>/);
      const text = textMatch ? textMatch[1].replace(/"/g, '"').replace(/"/g, '"').trim() : '';

      // initials
      const initialsMatch = block.match(/<div class="av">([^<]+)<\/div>/);
      const initials = initialsMatch ? initialsMatch[1].trim() : '';

      // name
      const nameMatch = block.match(/<b>([^<]+)<\/b>/);
      const name = nameMatch ? nameMatch[1].trim() : '';

      // role
      const roleMatch = block.match(/<span>([^<]+)<\/span>/);
      const role = roleMatch ? roleMatch[1].trim() : '';

      if (name && text) {
        testis.push({ text, name, role, initials });
      }
    } catch (e) {
      // skip
    }
  }
  return testis;
}

// ---- Injection helpers ----

// Remove a top-level array property like `cases: [...]` or `testimonials: [...]`
// using bracket-depth tracking (safe with nested arrays/objects in strings)
function removeArrayProp(str, propName) {
  const key = propName + ':';
  let result = str;
  let searchFrom = 0;
  while (true) {
    // Find the property key
    const keyIdx = result.indexOf(key, searchFrom);
    if (keyIdx === -1) break;
    // Find the opening `[`
    const arrStart = result.indexOf('[', keyIdx + key.length);
    if (arrStart === -1) break;
    // Track depth to find matching `]`
    let depth = 0;
    let i = arrStart;
    let inStr = false;
    let strChar = '';
    for (; i < result.length; i++) {
      const ch = result[i];
      if (inStr) {
        if (ch === '\\') { i++; continue; } // skip escaped char
        if (ch === strChar) inStr = false;
      } else {
        if (ch === '"' || ch === "'") { inStr = true; strChar = ch; }
        else if (ch === '[' || ch === '{') depth++;
        else if (ch === ']' || ch === '}') {
          depth--;
          if (depth === 0) break;
        }
      }
    }
    // i is at the closing `]`
    // Remove from any preceding comma to after the closing `]` (and optional trailing comma)
    let start = keyIdx;
    // Walk backwards to eat any preceding comma and whitespace
    let before = result.slice(0, start).trimEnd();
    if (before.endsWith(',')) before = before.slice(0, -1);
    // After closing `]`, eat optional comma and whitespace
    let after = result.slice(i + 1);
    if (after.trimStart().startsWith(',')) after = after.trimStart().slice(1);
    result = before + after;
    searchFrom = before.length;
  }
  return result;
}

// ---- Inject into data file ----

function serializeCases(cases) {
  if (!cases.length) return null;
  const items = cases.map(c => {
    const parts = [];
    parts.push(`tag: ${JSON.stringify(c.tag)}`);
    parts.push(`title: ${JSON.stringify(c.title)}`);
    parts.push(`desc: ${JSON.stringify(c.desc)}`);
    parts.push(`metrics: [${c.metrics.map(m => `{ value: ${JSON.stringify(m.value)}, label: ${JSON.stringify(m.label)} }`).join(', ')}]`);
    parts.push(`stack: [${c.stack.map(s => JSON.stringify(s)).join(', ')}]`);
    if (c.bgClass) parts.push(`bgClass: ${JSON.stringify(c.bgClass)}`);
    if (c.bgStyle) parts.push(`bgStyle: ${JSON.stringify(c.bgStyle)}`);
    return `    { ${parts.join(', ')} }`;
  });
  return `  cases: [\n${items.join(',\n')},\n  ]`;
}

function serializeTestimonials(testis) {
  if (!testis.length) return null;
  const items = testis.map(t => {
    return `    { text: ${JSON.stringify(t.text)}, name: ${JSON.stringify(t.name)}, role: ${JSON.stringify(t.role)}, initials: ${JSON.stringify(t.initials)} }`;
  });
  return `  testimonials: [\n${items.join(',\n')},\n  ]`;
}

function injectIntoSingleExport(content, casesStr, testiStr) {
  const closingIdx = content.lastIndexOf('\n};');
  if (closingIdx === -1) return content;

  let inner = content.slice(0, closingIdx);
  inner = removeArrayProp(inner, 'cases');
  inner = removeArrayProp(inner, 'testimonials');
  inner = inner.trimEnd().replace(/,+$/, '');

  const toInsert = [];
  if (casesStr) toInsert.push(casesStr);
  if (testiStr) toInsert.push(testiStr);
  if (!toInsert.length) return content;

  return inner + ',\n' + toInsert.join(',\n') + '\n' + content.slice(closingIdx);
}

function injectIntoMultiExport(content, varName, casesStr, testiStr) {
  // Multi-export files use const varName: ServicePageData = { ... };
  // Find the block for this variable
  const blockStart = content.indexOf(`const ${varName}:`);
  if (blockStart === -1) {
    // Try without type annotation
    return content;
  }
  // Find the closing `};` for this block
  let depth = 0;
  let i = content.indexOf('{', blockStart);
  const objStart = i;
  for (; i < content.length; i++) {
    if (content[i] === '{') depth++;
    else if (content[i] === '}') {
      depth--;
      if (depth === 0) break;
    }
  }
  // i is at the closing `}`
  const blockEnd = i; // position of `}`

  let inner = content.slice(objStart + 1, blockEnd);
  inner = removeArrayProp(inner, 'cases');
  inner = removeArrayProp(inner, 'testimonials');
  inner = inner.trimEnd().replace(/,+$/, '');

  const toInsert = [];
  if (casesStr) toInsert.push(casesStr);
  if (testiStr) toInsert.push(testiStr);
  if (!toInsert.length) return content;

  const newBlock = '{' + inner + ',\n' + toInsert.join(',\n') + '\n}';
  return content.slice(0, objStart) + newBlock + content.slice(blockEnd + 1);
}

// ---- Main ----

const htmlFiles = fs.readdirSync(HTML_DIR).filter(f => f.endsWith('.html') && f !== 'index.html');
let processed = 0;
let skipped = 0;

for (const [slug, dataRef] of Object.entries(PAGE_MAP)) {
  const htmlPath = path.join(HTML_DIR, slug + '.html');
  if (!fs.existsSync(htmlPath)) {
    console.log(`⚠️  HTML not found: ${slug}.html`);
    skipped++;
    continue;
  }

  const html = fs.readFileSync(htmlPath, 'utf8');
  const cases = extractCases(html);
  const testis = extractTestimonials(html);

  if (!cases.length && !testis.length) {
    console.log(`⚠️  Nothing extracted from ${slug}.html`);
    skipped++;
    continue;
  }

  const casesStr = serializeCases(cases);
  const testiStr = serializeTestimonials(testis);

  const [file, varName] = dataRef.split(':');
  const filePath = path.join(DATA_DIR, file);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  Data file not found: ${file}`);
    skipped++;
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  if (varName) {
    content = injectIntoMultiExport(content, varName, casesStr, testiStr);
  } else {
    content = injectIntoSingleExport(content, casesStr, testiStr);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ ${slug}: ${cases.length} cases, ${testis.length} testimonials`);
  processed++;
}

console.log(`\nDone: ${processed} processed, ${skipped} skipped`);
