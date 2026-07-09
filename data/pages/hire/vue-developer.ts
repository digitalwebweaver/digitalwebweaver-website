import type { ServicePageData } from "@/lib/types";

const data: ServicePageData = {
  meta: {
    title: "Hire Vue.js Developers | Nuxt 3 Experts, India & UK",
    description: "Hire Vue.js developers in India for progressive web apps, admin dashboards, and Nuxt 3 SSR builds using Vue 3 and TypeScript. Get a free quote in 24 hours.",
  },
  prose: {
    eyebrow: "Vue.js Development",
    heading: "Hire Vue.js Developers Who Ship Maintainable Front Ends",
    blocks: [
      { p: ["Hire Vue.js developers who write Vue 3 the way it was meant to be written — Composition API, script setup, and type-safe Pinia stores, not the legacy Options API patterns you inherit elsewhere. This page is for founders and engineering leads who need a reactive front end that stays maintainable well past its first release: a data-rich admin dashboard, a customer-facing SPA, or a Nuxt-rendered app where SEO actually matters. We are based in Vadodara, India, and deliver to teams across the UK, South Africa, and Ivory Coast — plugging into your Jira, Figma, and Git workflow rather than working around it."] },
      { h3: "Vue 3 and Nuxt 3, tested end to end", p: ["Every build starts with a clear component structure and store design, then moves into feature sprints on live staging. For SEO-critical or content-heavy work we reach for Nuxt 3 — SSR, SSG, and edge rendering through Nitro server routes. When your Vue front end needs a backend, our ", { text: "Node.js developers", href: "/nodejs-developer/" }, " and ", { text: "API integration engineers", href: "/services/api-integrations/" }, " sit alongside it, so REST or GraphQL data layers are built once and built right. Vitest and Playwright cover unit and end-to-end tests on every project, not as an afterthought."] },
      { h3: "Migrations, performance, and honest technology advice", p: ["Inherited a sprawling Vue 2 codebase nobody wants to touch? We run incremental migrations with the @vue/compat bridge, shipping new features in parallel so the business never stalls. If Vue is not the right answer for your case, we will say so — having ", { text: "React developers", href: "/react-developer/" }, " on the same team means the recommendation fits the problem, not our resume. Once you are live, our ", { text: "performance optimisation", href: "/services/performance-optimization/" }, " work keeps bundles lean and interactions fast, the kind of tuning that moves a Lighthouse score from the 50s into the 90s. Tell us your stack, timeline, and budget ", { text: "on the contact page", href: "/contact/" }, " and we will match you with senior Vue engineers who are ready to ship."] },
    ],
  },
  hero: {
    eyebrow: "Vue.js Development",
    heading: "Vue.js Developers for Fast, Elegant Web Apps",
    lead: "We build progressive, maintainable web apps with Vue 3, Nuxt, and the Composition API — from MVPs to enterprise platforms.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Vue Developer" }],
    marqueeItems: ["Vue 3","Nuxt.js","Pinia","TypeScript","Vite","Vitest","Vuetify","Quasar","Vue Router","VueUse"],
    stats: [{ value: "20+", label: "Vue Projects" }, { value: "Vue 3", label: "Composition API" }, { value: "Nuxt 3", label: "SSR/SSG" }],
  },
  services: {
    variant: "svc",
    eyebrow: "What We Build",
    heading: "Vue.js Development Services",
    items: [
      { icon: "💚", title: "Vue 3 SPAs", desc: "Reactive single-page apps with Composition API and Pinia." },
      { icon: "🚀", title: "Nuxt 3 Apps", desc: "SSR, SSG, and hybrid rendering for SEO-ready apps." },
      { icon: "📊", title: "Admin Dashboards", desc: "Data-rich admin panels with Vue + Element Plus or PrimeVue." },
      { icon: "🎨", title: "Component Libraries", desc: "Reusable component systems with Storybook." },
      { icon: "🔄", title: "Vue 2 Migration", desc: "Migrate Vue 2 Options API codebases to Vue 3 Composition API." },
      { icon: "🔌", title: "API Integration", desc: "REST and GraphQL data layers with Vue Query or SWR." },
    ],
  },
  capabilities: {
    eyebrow: "Technical Depth",
    heading: "Vue.js Capabilities",
    dark: true,
    items: [
      { icon: "💚", title: "Vue 3 Composition API", desc: "composables, script setup, and ref/reactive patterns." },
      { icon: "🗃️", title: "Pinia State", desc: "Type-safe stores replacing Vuex for modern Vue 3 apps." },
      { icon: "🚀", title: "Nuxt 3 & Nitro", desc: "SSR, SSG, ISR, edge rendering, and server routes." },
      { icon: "🧪", title: "Testing", desc: "Vitest, Vue Testing Library, Playwright end-to-end." },
      { icon: "🎨", title: "UI Frameworks", desc: "Vuetify 3, PrimeVue, Element Plus, shadcn-vue." },
      { icon: "⚡", title: "Vite Build", desc: "Sub-second HMR and optimised production bundles." },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "Our Vue.js Development Process",
    steps: [
      { title: "Architecture", desc: "Component structure, store design, and routing strategy." },
      { title: "Core Development", desc: "Feature sprints with live staging and daily demos." },
      { title: "Testing & QA", desc: "Unit, component, and e2e Playwright tests." },
      { title: "Deploy & Optimise", desc: "Lighthouse audit, bundle analysis, and CDN deployment." },
    ],
  },
  stack: {
    eyebrow: "Technology Stack",
    heading: "Vue.js Stack We Use",
    cols: [
      { head: "Core", items: ["Vue 3", "TypeScript", "Composition API", "Vite"] },
      { head: "SSR", items: ["Nuxt 3", "Nitro", "Vercel", "Netlify"] },
      { head: "UI", items: ["Vuetify 3", "PrimeVue", "Element Plus", "shadcn-vue"] },
      { head: "Testing", items: ["Vitest", "Vue Testing Library", "Playwright"] },
    ],
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Why Digital Web Weaver for Vue.js?",
    dark: true,
    items: [
      { icon: "💚", title: "Vue 3 Experts", desc: "Deep Composition API knowledge — no legacy Options API patterns." },
      { icon: "🚀", title: "Nuxt Specialists", desc: "Full-stack Nuxt with server routes, middleware, and modules." },
      { icon: "⚡", title: "Vite-Powered", desc: "Sub-second development feedback loops and optimised builds." },
      { icon: "🧪", title: "Tested Code", desc: "Vitest unit tests and Playwright e2e on every project." },
    ],
  },
  faq: {
    heading: "Vue.js Developer FAQ",
    items: [
      { q: "Vue or React for a new project?", a: "Vue for teams that value approachability and a gentler learning curve. React for larger ecosystems and more hiring options." },
      { q: "Options API or Composition API?", a: "Composition API for all new projects — better TypeScript support, better logic reuse, and cleaner composables." },
      { q: "Do you work with Nuxt for SSR?", a: "Yes — Nuxt 3 is our preferred Vue SSR solution. We use it for SEO-critical and content-heavy applications." },
      { q: "Can you migrate our Vue 2 app?", a: "Yes — gradual migration is possible using the @vue/compat bridge. We assess scope and deliver an incremental migration plan." },
    ],
  },
  cta: { eyebrow: "Ready to hire", heading: "Ready to hire a Vue.js developer?", body: "Tell us your stack, timeline, and budget. We'll match you with 2–3 senior Vue.js engineers within 48 hours — all pre-vetted, immediately available, and ready to ship.", primaryCta: { label: "Start hiring now ↗", href: "/contact/" }, secondaryCta: { label: "See our work", href: "/portfolio/" }, meta: ["Senior engineers only", "48-hr match", "No lock-in"] },
  testimonials: [
    { text: "We had a sprawling Vue 2 Options API codebase that nobody wanted to touch. Their developer led our Vue 3 migration incrementally over 3 months while shipping new features in parallel. Genuinely impressive.", name: "Rachel L.", role: "Engineering Manager · Logistics SaaS · Netherlands", initials: "RL" },
    { text: "The Nuxt 3 rebuild improved our Lighthouse score from 58 to 94 and cut our bounce rate significantly. The developer understood SEO constraints as well as the front-end architecture — rare combination.", name: "Arjun S.", role: "Head of Digital · Retail Group · India", initials: "AS" },
    { text: "Their Vue developer integrated into our team in less than a week. Using our Jira, our Figma, our Git workflow. Felt like hiring in-house without any of the HR overhead. We've extended the contract twice.", name: "Ben W.", role: "CTO · HealthTech Platform · Australia", initials: "BW" },
  ]

};
export default data;
