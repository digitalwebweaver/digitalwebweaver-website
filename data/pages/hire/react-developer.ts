import type { ServicePageData } from "@/lib/types";

const data: ServicePageData = {
  meta: {
    title: "React Developer — Hire Expert React.js Developers",
    description:
      "Hire experienced React developers for SPAs, dashboards, and enterprise apps. Fast, scalable, modern frontends built with React 18+ and TypeScript.",
  },
  hero: {
    eyebrow: "React Development",
    heading: "React Developers Who Ship Fast, Scalable UIs",
    lead:
      "We build performant single-page apps, dashboards, and enterprise frontends with React 18, TypeScript, and the modern ecosystem.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "React Developer" },
    ],
    marqueeItems: ["React 18","TypeScript","Next.js","Redux Toolkit","Zustand","React Query","Vite","Storybook","Jest","RTL","Cypress","GraphQL"],
    stats: [
      { value: "50+", label: "React Projects" },
      { value: "4yr+", label: "React Experience" },
      { value: "98%", label: "Client Satisfaction" },
    ],
  },
  services: {
    variant: "svc",
    eyebrow: "What We Build",
    heading: "React Development Services",
    body: "From MVPs to large-scale enterprise apps — we cover the full React spectrum.",
    items: [
      { icon: "⚛️", title: "Single-Page Applications", desc: "Fast, fluid SPAs with React Router and code-splitting." , tags: ["React 18","React Router"]},
      { icon: "🖥️", title: "React Dashboards", desc: "Data-rich admin panels, analytics boards, and CRMs." , tags: ["AG Grid","Recharts"]},
      { icon: "🔧", title: "Component Libraries", desc: "Reusable design systems in Storybook, ready to scale." , tags: ["Storybook","Design tokens"]},
      { icon: "🔄", title: "Legacy Migration", desc: "Migrate jQuery, AngularJS, or Vue apps to modern React." , tags: ["jQuery","AngularJS"]},
      { icon: "📱", title: "React Native", desc: "Cross-platform mobile from your existing React codebase." , tags: ["Expo","Cross-platform"]},
      { icon: "⚡", title: "Performance Tuning", desc: "Lighthouse scores, bundle analysis, Core Web Vitals." , tags: ["Web Vitals","Lighthouse"]},
    ],
  },
  capabilities: {
    eyebrow: "Technical Depth",
    heading: "Our React Capabilities",
    body: "Every layer of the modern React stack, done right.",
    dark: true,
    items: [
      { icon: "⚛️", title: "React 18 & Concurrent Features", desc: "useTransition, Suspense, streaming SSR." },
      { icon: "📘", title: "TypeScript First", desc: "Fully typed components, hooks, and APIs." },
      { icon: "🗃️", title: "State Management", desc: "Redux Toolkit, Zustand, React Query, Jotai." },
      { icon: "🎨", title: "UI Systems", desc: "Tailwind, CSS Modules, shadcn/ui, MUI, Radix." },
      { icon: "🧪", title: "Testing", desc: "Jest, Vitest, React Testing Library, Playwright." },
      { icon: "🚀", title: "Next.js / Remix", desc: "SSR, SSG, ISR — the right rendering strategy." },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "Our React Development Process",
    steps: [
      { title: "Discovery & Architecture", desc: "Understand requirements, choose stack, design component tree." },
      { title: "Design System Setup", desc: "Tokens, Storybook, reusable primitives before writing features." },
      { title: "Feature Development", desc: "Iterative sprints with daily builds and PR reviews." },
      { title: "Test & Optimise", desc: "Unit tests, e2e Playwright, Lighthouse CI, bundle analysis." },
    ],
  },
  stack: {
    eyebrow: "Technology Stack",
    heading: "React Ecosystem We Use",
    cols: [
      { head: "Core", items: ["React 18", "TypeScript", "React Router 6", "Vite / webpack"] },
      { head: "State", items: ["Redux Toolkit", "Zustand", "React Query", "Jotai"] },
      { head: "UI", items: ["Tailwind CSS", "shadcn/ui", "MUI", "Radix UI"] },
      { head: "Testing", items: ["Jest", "Vitest", "RTL", "Playwright"] },
    ],
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Why Digital Web Weaver for React?",
    dark: true,
    items: [
      { icon: "⚡", title: "Performance-First", desc: "Every app we ship scores 90+ on Core Web Vitals by default." },
      { icon: "📘", title: "TypeScript Always", desc: "No any-typing shortcuts — full type safety from day one." },
      { icon: "🔄", title: "Agile Delivery", desc: "Two-week sprints with live staging and transparent progress." },
      { icon: "🛡️", title: "OWASP Secure", desc: "Security baked in, not bolted on. CSP, HTTPS, input sanitisation." },
    ],
  },
  faq: {
    heading: "React Developer FAQ",
    body: "Common questions about hiring React developers.",
    items: [
      { q: "Do you work with Next.js?", a: "Yes — we build with Next.js daily. App Router, Server Components, SSG/ISR, and edge deployments are all in our wheelhouse." },
      { q: "Can you migrate our legacy codebase?", a: "Absolutely. We've migrated jQuery, AngularJS, and older React class-component apps to modern functional React with TypeScript." },
      { q: "How long does a typical React project take?", a: "A focused MVP takes 4–8 weeks. Enterprise dashboard or complex SPA typically 3–6 months depending on scope." },
      { q: "Do you write tests?", a: "Yes — unit tests with Jest/Vitest, component tests with RTL, and end-to-end with Playwright are part of every engagement." },
    ],
  },
  related: [
    { label: "Web Application Development", href: "/web-application-development/", desc: "Complex portals and dashboards built with React." },
    { label: "SaaS Development", href: "/saas-development/", desc: "End-to-end SaaS product development." },
    { label: "Web Development", href: "/web-development/", desc: "Full-stack web development services." },
    { label: "Hire Node.js Developer", href: "/nodejs-developer/", desc: "Backend engineers who pair perfectly with React." },
  ],
  cta: { eyebrow: "Ready to hire", heading: "Ready to hire a React developer?", body: "Tell us your stack, timeline, and budget. We'll match you with 2–3 senior React engineers within 48 hours — all pre-vetted, immediately available, and ready to ship.", primaryCta: { label: "Start hiring now ↗", href: "/contact/" }, secondaryCta: { label: "See our work", href: "/portfolio/" }, meta: ["Senior engineers only", "48-hr match", "No lock-in"] },
  testimonials: [
    { text: "We needed a senior React engineer who could own our design system migration to TypeScript. They matched us with someone in 36 hours who had done exactly this before. The codebase is finally maintainable.", name: "James M.", role: "CTO · FinTech SaaS · United Kingdom", initials: "JM" },
    { text: "Our previous contractor left us with zero tests and no component documentation. The their React developer rebuilt our testing foundation in the first month while shipping features. Exactly what we needed.", name: "Priya R.", role: "VP Engineering · E-commerce Platform · India", initials: "PR" },
    { text: "The Next.js App Router migration was done in 6 weeks without a single production incident. The developer understood our SEO constraints and the Core Web Vitals improved significantly. Highly recommended.", name: "Tom K.", role: "Head of Product · Media Startup · Canada", initials: "TK" },
  ]

};

export default data;
