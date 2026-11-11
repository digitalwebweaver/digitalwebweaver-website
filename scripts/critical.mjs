// Extracts first-screen ("critical") CSS. Usage (site running on :3417):  npm i -D playwright-core  &&  CHROME_PATH=/path/to/chrome node scripts/critical.mjs http://localhost:3417
// across page templates and viewport sizes. Output: styles/critical.css (checked in; re-run after big CSS changes).
import fs from 'fs'; import { createRequire } from 'module'; import { chromium } from 'playwright-core';
const require = createRequire(process.cwd() + '/package.json'); const postcss = require('postcss');
const SRC = fs.readFileSync('styles/site.css', 'utf8');
const BASE = process.argv[2] || 'http://localhost:3417';
const PAGES = ['/', '/web-development/', '/services/', '/about/', '/contact/', '/portfolio/', '/blog/', '/blog/website-cost-vadodara-2026/', '/portfolio/proprail/', '/portfolio/nextsense/', '/fabsuite/', '/cost-estimator/', '/privacy-policy/', '/agence-developpement-web-abidjan/', '/products/', '/edtech/', '/authors/kamlesh-nishad/', '/stack/aws/', '/careers/', '/educore/', '/web-design-vadodara/', '/ai-automation/'];
const VIEWPORTS = [{ width: 412, height: 823 }, { width: 820, height: 1100 }, { width: 1350, height: 940 }];

const strip = (sel) => sel
  .replace(/::?(before|after|placeholder|selection|first-line|first-letter|marker|backdrop|-webkit-[a-z-]+|-moz-[a-z-]+)/g, '')
  .replace(/:(hover|focus|focus-visible|focus-within|active|visited|target|checked|disabled|placeholder-shown|-webkit-autofill)\b/g, '')
  .trim();

const root = postcss.parse(SRC);
const selectors = new Set();
root.walkRules((r) => { if (r.parent && r.parent.type === 'atrule' && /keyframes/.test(r.parent.name)) return; r.selectors.forEach((s) => selectors.add(strip(s))); });
// icon shapes and the decorative hero icon stay out of the inlined CSS (they would add ~6 KB to every page); they arrive with the full stylesheet
const list = [...selectors].filter((s) => s && !/^\.ic--|hero-art/.test(s));
// .skip is parked above the screen, so the viewport test never sees it; without its rule it sits in the flow and shifts the page
const matched = new Set([".skip"]);

const br = await chromium.launch({ executablePath: process.env.CHROME_PATH, headless: true });
for (const vp of VIEWPORTS) {
  const ctx = await br.newContext({ viewport: vp }); const pg = await ctx.newPage();
  for (const u of PAGES) {
    const r = await pg.goto(BASE + u, { waitUntil: 'load' }).catch(() => null); if (!r || !r.ok()) { console.log('skip', u); continue; }
    await pg.waitForTimeout(250);
    const hits = await pg.evaluate((sels) => {
      const vh = innerHeight, out = [];
      for (const s of sels) { let els; try { els = document.querySelectorAll(s); } catch (e) { continue; }
        for (const el of els) { const b = el.getBoundingClientRect(); if ((b.top < vh && b.bottom > 0 && (b.width > 0 || b.height > 0)) || el === document.documentElement || el === document.body) { out.push(s); break; } } }
      return out; }, list);
    hits.forEach((h) => matched.add(h));
  }
  await ctx.close();
}
await br.close();

const keyframesNeeded = new Set(); let kept = 0;
const keepRule = (r) => r.selectors.some((s) => matched.has(strip(s)) || /^(:root|html|body|\*)/.test(strip(s)));
root.walkRules((r) => { if (r.parent && r.parent.type === 'atrule' && /keyframes/.test(r.parent.name)) return; if (!keepRule(r)) r.remove(); else { kept++; r.walkDecls(/^animation/, (d) => d.value.split(/[\s,]+/).forEach((w) => keyframesNeeded.add(w))); } });
root.walkAtRules((a) => { if (/keyframes/.test(a.name)) { if (!keyframesNeeded.has(a.params)) a.remove(); } else if (a.name === 'media' || a.name === 'supports') { if (!a.nodes || !a.nodes.length) a.remove(); } });
root.walkAtRules('media', (a) => { if (/print/.test(a.params) || !a.nodes.length) a.remove(); });
const css = root.toString().replace(/\n\s*\n/g, '\n');
fs.writeFileSync('styles/critical.css', css);
console.log('rules kept', kept, '| critical.css', css.length, 'bytes raw | full', SRC.length, '| selectors matched', matched.size, '/', list.length);
