# Digital Web Weaver — Technical Architecture & Developer Guide

> Read this file first. It explains the whole system — folder layout, coding
> conventions, data flow, the database, the APIs, and how to add new pages —
> so a new developer (or Claude Code) can be productive without spelunking
> through the whole codebase.

---

## 1. What this project is

The marketing + lead-generation website for **Digital Web Weaver**, a web /
software / mobile / AI development agency based in Vadodara, Gujarat, India,
serving India, South Africa, the UK and West Africa (Ivory Coast).

- **Production domain:** https://digitalwebweaver.com
- **Hosting:** Vercel (project `react`, see [.vercel/project.json](../.vercel/project.json))
- **Nature of the site:** ~100 SEO landing pages (services, "hire X developer",
  industries, products, local city pages), a Supabase-backed blog, lead-capture
  forms, anonymous visitor analytics, and a password-protected admin panel.

The repository root (`d:\dwww`) also holds SEO planning docs, the old static
HTML/CSS theme (`theme.css`, `theme.js`, `design.md`), and an unrelated
`claude-seo` tooling folder. **The actual app lives in `d:\dwww\react`.** All
paths in this document are relative to `react/`.

---

## 2. Tech stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | **Next.js 16.2.7** (App Router) | ⚠️ Breaking changes vs older Next — see §11 |
| Language | **TypeScript 5** + **React 19** | Strict, `@/*` path alias → repo root |
| Styling | Plain **CSS** (no Tailwind/CSS-in-JS) | Global `styles/theme.css` + `styles/*.css` |
| Fonts | `next/font/google` | Bricolage Grotesque (display), Hanken Grotesk (body), JetBrains Mono (mono) |
| Database | **Supabase** (Postgres) | Server-side only via service-role key |
| Email | **Resend** | Transactional lead/contact emails |
| Markdown | **marked** | Renders blog post body |
| Linting | ESLint 9 + `eslint-config-next` | `npm run lint` |

There is **no test suite** and **no ORM** — Supabase queries are written
inline with `@supabase/supabase-js`.

---

## 3. Top-level folder structure

```
react/
├── app/                  # Next.js App Router — every route lives here
│   ├── layout.tsx        # Root layout: fonts, Organization JSON-LD, <SiteChrome>
│   ├── page.tsx          # Homepage (hand-built, not data-driven)
│   ├── globals.css       # Imports theme.css + page-specific global CSS
│   ├── sitemap.ts        # Dynamic sitemap.xml (force-dynamic, includes blog)
│   ├── robots.ts         # robots.txt
│   ├── manifest.ts       # PWA web manifest
│   ├── api/              # Route handlers (server endpoints) — see §7
│   ├── admin/            # Password-protected admin UI — see §8
│   ├── blog/             # Blog index + /blog/[slug] dynamic post pages
│   └── <100+ folders>/   # One folder per landing page (each has page.tsx)
│
├── components/
│   ├── layout/           # Header (mega-nav, mobile menu), Footer, SiteChrome
│   ├── sections/         # Reusable page sections (Hero, FAQ, CTA, …) — see §6
│   ├── home/             # Homepage-only client components (animations, tabs)
│   ├── seo/JsonLd.tsx    # <script type="application/ld+json"> helper
│   ├── analytics/        # VisitorTracker (client beacon → /api/track)
│   └── ui/               # Small primitives: Button, Breadcrumb, Reveal, etc.
│
├── data/pages/           # Page CONTENT as typed TS objects — see §5
│   ├── hire/             # "Hire a <role> developer" pages
│   ├── services/         # Service catalog data
│   ├── products/         # SaaS product showcase data
│   ├── industries/  local/  solutions/  stack/  sub-services/
│
├── lib/                  # Server/shared helpers — see §9
│   ├── supabase.ts       # supabaseAdmin client (service-role)
│   ├── posts.ts          # Blog queries + Post type
│   ├── adminAuth.ts      # Cookie-based admin auth check
│   ├── geo.ts            # Client IP + IP→location (ipapi.co)
│   ├── userAgent.ts      # UA string → {browser, os, device}
│   ├── slug.ts           # slugify() + estimateReadMinutes()
│   └── types.ts          # ServicePageData + all section interfaces
│
├── hooks/                # Client hooks: useCountUp, useReveal, useStickyHeader
├── styles/               # base / components / nav / theme / variables CSS
├── public/               # Static assets (favicons, og-image, logos)
├── scripts/              # One-off codemod scripts used during the build-out
├── out/                  # Build output (when statically exported)
├── next.config.ts        # Next config — IMPORTANT redirect note, see §10
└── tsconfig.json         # paths: { "@/*": ["./*"] }
```

---

## 4. Two kinds of pages

Understanding this split is the single most important thing in the codebase.

### A) Data-driven landing pages (the majority)

~80 of the route folders are SEO landing pages that all share **one** renderer:
[`components/sections/ServicePage.tsx`](components/sections/ServicePage.tsx).

The route file is tiny — it only imports a content object and wires metadata:

```tsx
// app/laravel-developer/page.tsx
import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import data from "@/data/pages/hire/laravel-developer";

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/laravel-developer/" },
  openGraph: { url: "/laravel-developer/", type: "website" },
};

export default function Page() { return <ServicePage data={data} />; }
```

All the actual content lives in a typed object under `data/pages/`, shaped by
the `ServicePageData` interface in [`lib/types.ts`](lib/types.ts).
`ServicePage` reads each optional section (`hero`, `services`, `capabilities`,
`process`, `stack`, `why`, `faq`, `cta`, `cases`, `testimonials`, `related`)
and renders the matching section component only if present. It also emits
JSON-LD for `BreadcrumbList`, `Service`, and `FAQPage`.

### B) Hand-built pages

The homepage (`app/page.tsx`), blog, admin, contact, etc. are written
directly as React. They don't use `ServicePage` and may have bespoke layout
and client components.

---

## 5. The content data layer (`data/pages/`)

Each landing page's copy is a default-exported `ServicePageData` object.
The interface (full source in [`lib/types.ts`](lib/types.ts)) is roughly:

```ts
ServicePageData = {
  meta: { title, description }              // required → drives <title>/<meta>
  hero: { heading, lead, eyebrow?, breadcrumbs?, stats?, marqueeItems?,
          formVariant?: "service" | "hire", localBadge?, ... }  // required
  services?     { heading, items: ServiceItem[], variant?: "card" | "svc", dark? }
  capabilities? { heading, items: CapItem[] }
  process?      { heading, steps: ProcessStep[], deliverables? }
  stack?        { heading, cols: StackCol[] }
  why?          { heading, items: WhyItem[] }
  faq?          { heading, items: FaqItem[] }   // → FAQPage schema
  cta?          { heading, primaryCta?, secondaryCta? }
  cases?        [{ tag, title, desc, metrics, stack, bgStyle? }]
  testimonials? [{ text, name, role, initials }]
  related?      [{ label, href, desc }]
}
```

**Rule of thumb:** to change wording on a landing page, edit its file in
`data/pages/`, *not* the route or the component. Only structural/visual changes
touch `components/sections/`.

`data/pages/` subfolders:
- `hire/` — "Hire dedicated <role> developer" pages
- `services/` — `main-services.ts`, `sub-services.ts`, `missing-services.ts`
- `products/` — the showcased SaaS products
- `industries/`, `local/` (city pages), `solutions/`, `stack/`, `sub-services/`

---

## 6. Section components (`components/sections/`)

Each maps to one optional block of `ServicePageData`:

| Component | Renders |
|---|---|
| `ServiceHero` | Hero: eyebrow, heading, lead, stats, breadcrumbs, lead form |
| `MarqueeBand` | Scrolling logo/keyword strip |
| `ServiceGrid` / `CapGrid` / `WhyGrid` | Card grids (`services` / `capabilities` / `why`) |
| `ProcessSection` | Numbered steps + deliverables |
| `StackCols` | Tech-stack columns |
| `CaseStudies` | Project case studies with metrics |
| `Testimonials` | Quote cards |
| `FaqSection` | Accordion (emits FAQPage JSON-LD upstream) |
| `RelatedServices` | Internal-linking cards (SEO) |
| `CtaBand` | Closing call-to-action |
| `FormCard` | The lead form used inside the hero |

`components/ui/` holds primitives reused everywhere: `Button`, `Breadcrumb`,
`Eyebrow`, `SectionHead`, `CountStat`, `Reveal` / `RevealObserver`
(scroll-in animations), `WhatsAppFloat`.

`components/seo/JsonLd.tsx` renders a structured-data `<script>`. Org-level
schema lives in `layout.tsx`; page-level schema is built in `ServicePage.tsx`
and `app/page.tsx`.

---

## 7. API routes (`app/api/`)

All are App Router **route handlers** (`route.ts`, server-only). Supabase and
Resend are only ever touched server-side.

| Endpoint | Method | Purpose |
|---|---|---|
| `/api/contact` | POST | Full contact form → insert `inquiries` row + Resend email to `info@` |
| `/api/lead` | POST | Shorter hero lead form (same idea, lighter payload) |
| `/api/subscribe` | POST | Newsletter subscribe |
| `/api/track` | POST | Anonymous analytics beacon (pageview + heartbeat ping) |
| `/api/admin/login` | POST / DELETE | Set / clear `admin_session` cookie |
| `/api/admin/inquiries` | — | Read leads for the admin table |
| `/api/admin/posts` | — | Blog CRUD for the admin blog manager |
| `/api/admin/reply` | — | Reply to an inquiry via email |

**Lead flow** (`/api/contact`): validate (`email`+`firstName` required) →
resolve IP via `getClientIp` and location via `getLocation` →
`supabaseAdmin.from("inquiries").insert({...})` → `resend.emails.send(...)`.
The raw request body is stored in the `raw` column for safety.

**Analytics flow** (`/api/track`): the client `VisitorTracker` component
generates a `sessionId` (sessionStorage `dww_sid`), then `navigator.sendBeacon`s
two event types:
- `pageview` → upserts a `visits` row (first hit captures IP/UA/location, later
  hits update `exit_page` + `page_count`) and always inserts a `page_views` row.
- `ping` → calls `increment_durations` RPC to accumulate time-on-page.

Analytics must never throw into the UI — `send()` swallows all errors.

---

## 8. Admin panel (`app/admin/`)

Password-gated dashboard. Auth is a single shared password:

- `POST /api/admin/login` checks `password === process.env.ADMIN_PASSWORD` and
  sets an httpOnly cookie `admin_session` (value = the password, 30-day expiry).
- [`lib/adminAuth.ts`](lib/adminAuth.ts) `isAdminAuthed()` re-checks the cookie
  on server-rendered admin pages.

> ⚠️ The session cookie literally stores the admin password. This is simple but
> low-security — treat `ADMIN_PASSWORD` as a real secret and serve only over
> HTTPS (the cookie is `secure`+`sameSite=lax`).

Admin sections:
- `app/admin/page.tsx` + `InquiriesTable.tsx` — view captured leads
- `app/admin/blog/` (`BlogManager.tsx`) — create/edit/publish blog posts
- `app/admin/visits/` (`VisitsView.tsx`) — visitor analytics dashboard

---

## 9. `lib/` helpers

| File | Exports | Notes |
|---|---|---|
| `supabase.ts` | `supabaseAdmin` | Service-role client, `persistSession:false`. **Server only.** |
| `posts.ts` | `Post`, `getPublishedPosts`, `getPostBySlug`, `formatPostDate` | Blog data access |
| `adminAuth.ts` | `isAdminAuthed()` | Reads `admin_session` cookie |
| `geo.ts` | `getClientIp(req)`, `getLocation(ip)` | Location via `ipapi.co`, 3s timeout, skips localhost/LAN |
| `userAgent.ts` | `parseUserAgent(ua)` | → `{ browser, os, device }` |
| `slug.ts` | `slugify()`, `estimateReadMinutes()` | 200 wpm read estimate |
| `types.ts` | `ServicePageData` + all section types | The content contract |

---

## 10. Blog system

- Posts live in Supabase table `posts` (see schema below), authored via the
  admin blog manager.
- `app/blog/[slug]/page.tsx` is **`force-dynamic`** — it fetches the post by
  slug, renders `content` (markdown) via `marked`, builds metadata + Article
  OpenGraph, and shows related posts.
- The dynamic `sitemap.ts` pulls published posts so they're indexed.

---

## 11. Database (Supabase / Postgres)

No migrations are committed — the schema is inferred from the queries. Tables in use:

**`inquiries`** — lead submissions
`source, name, email, phone, service, budget, timeline, industry,
project_name, description, country, found_via, nda, ip, location, raw (jsonb)`

**`visits`** — one row per analytics session
`session_id, ip, location, user_agent, browser, os, device, referrer,
entry_page, exit_page, page_count, last_seen_at`

**`page_views`** — one row per pageview
`session_id, path, title` (+ duration accumulated via RPC)

**`posts`** — blog
`id, slug, title, excerpt, content, cover_image, tag, author_name,
author_initials, read_minutes, status ('published'|...), seo_title,
seo_description, published_at, created_at, updated_at`

**Postgres RPC functions** (must exist in the DB):
- `increment_page_count(sid)` — bump a visit's `page_count`
- `increment_durations(pv_id, sid, secs)` — accumulate time-on-page

---

## 12. Environment variables

Set these in Vercel (and `.env.local` for dev). All are **server-side**
(no `NEXT_PUBLIC_` vars are used):

| Variable | Used by | Purpose |
|---|---|---|
| `SUPABASE_URL` | `lib/supabase.ts` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | `lib/supabase.ts` | Service-role key (full DB access — keep secret) |
| `RESEND_API_KEY` | `/api/contact`, `/api/lead` | Resend email API key |
| `CONTACT_EMAIL` | `/api/contact` | Recipient (default `info@digitalwebweaver.com`) |
| `ADMIN_PASSWORD` | admin auth | Single shared admin password |

---

## 13. Routing & redirects ⚠️

`next.config.ts` uses `trailingSlash: true` — **every URL ends in `/`**. Keep
canonical URLs and internal links trailing-slashed.

`redirects()` is **not** configured in Next because the project may be exported
statically. The required 301s are documented as comments in
[`next.config.ts`](next.config.ts) and **must be set at the host/CDN layer**:

```
/apps/*                                 → /products/:splat          301
/vue-developer/                         → /vuejs-developer/          301
/artificial-intelligence-development/   → /ai-automation/            301
/open-source-development/               → /wordpress-development/    301
```

`robots.ts` disallows `/stack/`, `/solutions/`, `/privacy-policy/`.

---

## 14. Styling conventions

- **No utility framework.** Global CSS in `styles/` (`variables.css`,
  `base.css`, `components.css`, `nav.css`, `theme.css`). `app/globals.css`
  imports `theme.css` and adds nav/page-specific rules.
- Design tokens are CSS custom properties: `--accent`, `--ink`, `--paper`,
  `--line`, `--mono`, etc. Use these instead of hard-coded colors.
- Fonts are wired in `layout.tsx` via `next/font` and exposed as
  `--font-display / --font-body / --font-mono`.
- **Do not** split, remove, or restructure `theme.css` or change fonts/colors/
  spacing/animations without explicit approval (see [`SPEED.md`](SPEED.md)).

---

## 15. Performance conventions

From [`SPEED.md`](SPEED.md):
- Code-split heavy client components with `next/dynamic()` so HTML still renders
  server-side (no layout shift) while JS loads lazily.
  ```tsx
  const TechStackTabs = dynamic(() => import("@/components/home/TechStackTabs"));
  ```
- Keep page-specific animations in small client components (e.g.
  `CodePanelAnimator`) instead of running global hooks on every page.

---

## 16. How to add a new landing page

1. Create `data/pages/<category>/<slug>.ts` exporting a `ServicePageData` object
   (copy the closest existing file as a template).
2. Create `app/<slug>/page.tsx` following the data-driven pattern in §4A —
   import the data, set `metadata` with a trailing-slash canonical, render
   `<ServicePage data={data} />`.
3. Add the URL to `app/sitemap.ts`.
4. Add internal links (nav in `components/layout/Header/`, and `related[]` in
   relevant data files) so the page is reachable and SEO-linked.

## How to add a section type

1. Add the interface + field to `ServicePageData` in `lib/types.ts`.
2. Build the component in `components/sections/`.
3. Render it conditionally in `components/sections/ServicePage.tsx`.

---

## 17. Local development

```bash
cd react
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

Create `.env.local` with the variables from §12 (the contact/track APIs and
admin/blog need Supabase + Resend to function locally).

---

## 18. Gotchas / conventions to respect

- **This Next.js version has breaking changes** vs older releases. Per
  [`AGENTS.md`](AGENTS.md): consult `node_modules/next/dist/docs/` before
  writing framework code; don't assume old APIs.
- `params` in dynamic routes is a **Promise** — `const { slug } = await params;`.
- Route handlers / dynamic pages that hit Supabase use
  `export const dynamic = "force-dynamic"` (e.g. blog, sitemap).
- Trailing slashes everywhere (§13).
- Never let analytics errors surface to users (`/api/track` + `VisitorTracker`).
- Edit copy in `data/pages/`, structure in `components/`.
- `@/` import alias = repo root (`tsconfig.json`).
- Treat `SUPABASE_SERVICE_ROLE_KEY` and `ADMIN_PASSWORD` as real secrets.
