# Digital Web Weaver — React (Next.js) template

An SEO-friendly React port of the Digital Web Weaver IDE-themed marketing site,
built with **Next.js (App Router)**. Four pages — Home, Web Development, Hire
Dedicated, and Contact — share one stylesheet and one behaviour module.

## Requirements
- Node.js 18.17+ (or 20+)

## Run it

```bash
npm install       # install dependencies
npm run dev       # start dev server → http://localhost:3000
```

## Build a static, SEO-ready site

```bash
npm run build     # outputs a fully static site to ./out
npx serve out     # preview the production build locally
```

The build uses `output: "export"`, so `./out` is plain static HTML/CSS/JS you
can drop on any host (Netlify, Vercel, S3, GitHub Pages, nginx…). Every page is
pre-rendered to HTML at build time, so crawlers get full content with no JS.

## Project structure

```
app/
  layout.jsx            root layout + site-wide <head> metadata
  globals.css           the shared stylesheet (design tokens + components)
  page.jsx              Home                      → /
  web-development/      Web Development service    → /web-development
  hire-dedicated/       Hire Dedicated             → /hire-dedicated
  contact/              Contact                    → /contact
  sitemap.js            generates /sitemap.xml
  robots.js             generates /robots.txt
components/
  Interactions.jsx      client component that boots the UI behaviour
  behavior.js           drawer, scrollspy, tabs, pipeline, FAQ, forms, sidebar toggle
public/assets/          images
```

## SEO notes
- Per-page `title`, `description`, canonical URL and Open Graph tags via the
  App Router `metadata` export (see the top of each `page.jsx`).
- Site-wide defaults + `metadataBase`, Twitter card and `robots` live in
  `app/layout.jsx`. **Change the domain** in `layout.jsx`, `sitemap.js` and
  `robots.js` to your own before deploying.
- `sitemap.xml` and `robots.txt` are generated automatically.
- Semantic HTML, descriptive `alt` text, and explicit image dimensions are kept
  from the source for good Core Web Vitals.

## Editing content
Each page's markup lives directly in its `page.jsx` as JSX. Styling is entirely
in `app/globals.css` (CSS custom properties at `:root`). Interactive behaviour
is in `components/behavior.js`.
