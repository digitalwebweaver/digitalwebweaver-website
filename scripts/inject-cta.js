// Extracts CTA content from HTML files and injects into React data files
const fs = require('fs');
const path = require('path');

const HTML_DIR = 'd:/dwww';
const DATA_DIR = 'd:/dwww/react/data/pages';

function decodeHtml(str) {
  return str
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#(\d+);/g, (_, n) => String.fromCharCode(n));
}

const PAGE_MAP = {
  'web-development':    'services/main-services.ts:webDevelopment',
  'saas-development':   'services/main-services.ts:saasDevelopment',
  'crm-erp-systems':    'services/main-services.ts:crmErpSystems',
  'mvp-development':    'services/main-services.ts:mvpDevelopment',
  'mobile-app-development': 'services/main-services.ts:mobileAppDevelopment',
  'custom-web-apps':    'services/main-services.ts:customWebApps',
  'ecommerce-development': 'services/main-services.ts:ecommerceDevelopment',
  'ui-ux-design':       'services/main-services.ts:uiUxDesign',
  'cloud-devops':       'services/main-services.ts:cloudDevOps',
  'ai-automation':      'services/main-services.ts:aiAutomation',
  'open-source-development': 'services/main-services.ts:openSourceDevelopment',
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
  'food-delivery-app':  'products/products.ts:foodDeliveryApp',
  'laundry-management-system': 'products/products.ts:laundryManagementSystem',
  'inventory-management-system': 'products/products.ts:inventoryManagementSystem',
  'learning-management-system': 'products/products.ts:learningManagementSystem',
  'codeigniter-development': 'products/products.ts:codeigniterDevelopment',
  'wordpress-logistics-courier-tracking-plugin': 'products/products.ts:wpLogisticsCourierPlugin',
  'wordpress-courier-tracking-plugin': 'products/products.ts:wpCourierTrackingPlugin',
};

function extractCta(html) {
  // Match the CTA section
  const ctaMatch = html.match(/<div class="cta reveal">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/);
  if (!ctaMatch) return null;
  const cta = ctaMatch[1];

  const eyebrowMatch = cta.match(/<span class="eyebrow"[^>]*>([^<]+)<\/span>/);
  const eyebrow = eyebrowMatch ? decodeHtml(eyebrowMatch[1].trim()) : undefined;

  const headingMatch = cta.match(/<h2[^>]*>([^<]+)<\/h2>/);
  const heading = headingMatch ? decodeHtml(headingMatch[1].trim()) : '';

  const bodyMatch = cta.match(/<p>([^<]+)<\/p>/);
  const body = bodyMatch ? decodeHtml(bodyMatch[1].trim()) : undefined;

  // Primary CTA button - first link in cta-actions
  const actionsMatch = cta.match(/<div class="cta-actions">([\s\S]*?)<\/div>/);
  let primaryLabel = 'Start a project';
  if (actionsMatch) {
    const btnMatch = actionsMatch[1].match(/<a[^>]*class="btn btn-primary"[^>]*>([^<]+)/);
    if (btnMatch) primaryLabel = decodeHtml(btnMatch[1].trim());
  }

  // Meta spans
  const meta = [];
  const metaMatch = cta.match(/<div class="cta-meta">([\s\S]*?)<\/div>/);
  if (metaMatch) {
    const spanRe = /<span>●?\s*([^<]+)<\/span>/g;
    let m;
    while ((m = spanRe.exec(metaMatch[1])) !== null) {
      const text = decodeHtml(m[1].trim());
      if (text) meta.push(text);
    }
  }

  if (!heading) return null;
  return { eyebrow, heading, body, primaryLabel, meta };
}

function serializeCta(cta, slug) {
  const href = '/contact/';
  const parts = [];
  if (cta.eyebrow) parts.push(`eyebrow: ${JSON.stringify(cta.eyebrow)}`);
  parts.push(`heading: ${JSON.stringify(cta.heading)}`);
  if (cta.body) parts.push(`body: ${JSON.stringify(cta.body)}`);
  parts.push(`primaryCta: { label: ${JSON.stringify(cta.primaryLabel + ' ↗')}, href: ${JSON.stringify(href)} }`);
  parts.push(`secondaryCta: { label: "See our work", href: "/portfolio/" }`);
  if (cta.meta && cta.meta.length) {
    parts.push(`meta: [${cta.meta.map(m => JSON.stringify(m)).join(', ')}]`);
  }
  return `  cta: { ${parts.join(', ')} }`;
}

// Replace the cta property in content (single or multi-export)
function replaceCta(content, varName, ctaStr) {
  // Find the block start
  let blockContent = content;
  let blockOffset = 0;

  if (varName) {
    const blockStart = content.indexOf(`const ${varName}:`);
    if (blockStart === -1) return content;
    // Find opening { and track to closing }
    let depth = 0;
    let i = content.indexOf('{', blockStart);
    const objStart = i;
    let inStr = false, strChar = '';
    for (; i < content.length; i++) {
      const ch = content[i];
      if (inStr) {
        if (ch === '\\') { i++; continue; }
        if (ch === strChar) inStr = false;
      } else {
        if (ch === '"' || ch === "'") { inStr = true; strChar = ch; }
        else if (ch === '{' || ch === '[') depth++;
        else if (ch === '}' || ch === ']') {
          depth--;
          if (depth === 0) { blockContent = content.slice(objStart, i + 1); blockOffset = objStart; break; }
        }
      }
    }
  }

  // Replace cta: { ... } in blockContent
  // Find `cta:` then track to its closing `}`
  const ctaIdx = blockContent.indexOf('  cta:');
  if (ctaIdx === -1) return content;

  let i = blockContent.indexOf('{', ctaIdx);
  if (i === -1) return content;
  let depth = 0, inStr = false, strChar = '';
  for (; i < blockContent.length; i++) {
    const ch = blockContent[i];
    if (inStr) {
      if (ch === '\\') { i++; continue; }
      if (ch === strChar) inStr = false;
    } else {
      if (ch === '"' || ch === "'") { inStr = true; strChar = ch; }
      else if (ch === '{' || ch === '[') depth++;
      else if (ch === '}' || ch === ']') {
        depth--;
        if (depth === 0) break;
      }
    }
  }
  // i is at the closing `}` of the cta object
  const ctaEnd = i + 1; // position after the closing `}`

  // Rebuild: everything up to `  cta:`, then new cta, then everything after old cta end
  const before = blockContent.slice(0, ctaIdx).trimEnd();
  const after = blockContent.slice(ctaEnd);
  const newBlock = before + ',\n' + ctaStr + after;

  return content.slice(0, blockOffset) + newBlock + content.slice(blockOffset + blockContent.length);
}

let processed = 0, skipped = 0;

for (const [slug, dataRef] of Object.entries(PAGE_MAP)) {
  const htmlPath = path.join(HTML_DIR, slug + '.html');
  if (!fs.existsSync(htmlPath)) { console.log(`⚠️  No HTML: ${slug}`); skipped++; continue; }

  const html = fs.readFileSync(htmlPath, 'utf8');
  const cta = extractCta(html);
  if (!cta) { console.log(`⚠️  No CTA found: ${slug}`); skipped++; continue; }

  const ctaStr = serializeCta(cta, slug);
  const [file, varName] = dataRef.split(':');
  const filePath = path.join(DATA_DIR, file);
  if (!fs.existsSync(filePath)) { console.log(`⚠️  No data file: ${file}`); skipped++; continue; }

  let content = fs.readFileSync(filePath, 'utf8');
  const updated = replaceCta(content, varName, ctaStr);
  if (updated === content) { console.log(`⚠️  CTA not replaced in: ${slug}`); skipped++; continue; }

  fs.writeFileSync(filePath, updated, 'utf8');
  console.log(`✅ ${slug}: "${cta.heading}"`);
  processed++;
}

console.log(`\nDone: ${processed} processed, ${skipped} skipped`);
