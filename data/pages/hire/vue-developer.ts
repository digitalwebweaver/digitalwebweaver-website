import type { ServicePageData } from "@/lib/types";

const data: ServicePageData = {
  meta: {
    title: "Hire Vue.js Developers | Nuxt 3 Experts, India & UK",
    description: "Hire Vue.js developers in India for progressive web apps, admin dashboards, and Nuxt 3 SSR builds using Vue 3 and TypeScript. Get a free quote in 24 hours.",
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
