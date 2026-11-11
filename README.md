# Digital Web Weaver: new design (Next.js)

Next.js 14 (Pages Router) port of the new "Editor Light" design, built for page speed: every page is
server-rendered static HTML with **no React in the browser**. Same URLs (trailing slashes), `/api/lead`
(Supabase + Resend) and env vars as `../react-app`. `html/` is the original static prototype, kept for reference.

```bash
npm install
npm run dev     # http://localhost:3000   (runs scripts/build-assets.mjs first)
npm run build && npm start
```

## How it works
- `content/pages.json` / `pages-extra.json`: per-URL `<head>` data (title, description, robots, OG, JSON-LD).
- `content/pages/<file>.html`: the `<main>` markup of each page. **Edit page copy here.**
- `content/header.html`, `content/footer.html`: shared chrome (`{{CTA}}` = the header button target).
- `pages/[[...slug]].js`: renders every URL listed in the JSON; `pages/404.js`; `pages/api/lead.js`.
- `pages/_document.js`: inlines the first-screen CSS, loads the full stylesheet without blocking, preloads the font.
- `styles/site.css`: the full stylesheet. `styles/critical.css`: the first-screen subset (see below).
- `components/boot.js` -> `behavior.js`: menus, tabs, estimator, forms (-> `/api/lead/`); `router.js` is a tiny client-side router
  (no reload: fetches the next static page, swaps it in place, syncs title/meta/canonical/JSON-LD, crossfades with View Transitions,
  warms pages on hover; any failure falls back to a normal page load);
  `projectModal.js` is fetched the first time someone opens the "Start a project" brief.
- `lib/icons.mjs`: gives every card (window cards, capabilities, benefits, related links) a line icon at build time, chosen
  from the card title by keyword rules. The page gets one empty `<span class="ic ic--name">`; the shapes are CSS masks in
  `styles/site.css` (Lucide, ISC licence). To add an icon: add a rule in `lib/icons.mjs`, then run
  `npm i --no-save lucide-static && node scripts/build-icons.mjs`, which also rewrites the review list
  `digitalwebweaver-audit/card-icons.csv`.
- `lib/layout.mjs`: layout variety per page group, also at build time: dark capabilities band and a 2x2 lead card on service
  pages, a module map on product pages, a map card on location pages, a side diagram on "approach" sections and a faint hero
  icon everywhere. It only adds classes and decorative `aria-hidden` elements (labels are `data-t` attributes drawn by CSS, so
  page text is unchanged); the styles are the "layout variety" block in `styles/site.css`, all desktop-only extras.
- `components/motion.js` + the "motion" block at the end of `styles/site.css`: hover and scroll effects. Keep them free of
  layout reads at start-up (they would force layout of the off-screen sections that `content-visibility` skips).
- `scripts/build-assets.mjs` (runs before dev/build): minifies CSS/JS into `public/css`, `public/js` with content
  hashes, writes `lib/assets.json`, `public/sitemap.xml` and `public/robots.txt`.
- `next.config.mjs` sets long cache headers for `/css`, `/js`, `/fonts`, `/assets`.

## After changing styles/site.css
`styles/critical.css` is generated from the real pages (rules that style anything visible on the first screen at
phone/tablet/desktop sizes). Regenerate it after big CSS or layout changes: start the site, then run the
extractor: `npm i -D playwright-core && CHROME_PATH=<chrome> node scripts/critical.mjs http://localhost:3000` (a dev-time tool, not part of the build, so Vercel needs no browser).
Stale critical CSS only affects the first paint; the full stylesheet is always loaded afterwards.

## Adding a page
Add its entry to `content/pages-extra.json`, its markup to `content/pages/`, and (optionally) a link in the header/footer.
`public/sitemap.xml` is regenerated on every build.
