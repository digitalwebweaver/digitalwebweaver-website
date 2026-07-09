import type { ServicePageData } from "@/lib/types";

const data: ServicePageData = {
  meta: {
    title: "Hire Angular Developers | Enterprise Apps, India & UK",
    description: "Hire Angular developers in India for enterprise SPAs, dashboards, and large-scale apps using Angular 17+, RxJS, and NgRx. Get a free quote in 24 hours.",
  },
  prose: {
    eyebrow: "Angular Development",
    heading: "Hire Angular Developers Who Build for Scale",
    blocks: [
      { p: ["When you hire Angular developers, you are usually not chasing a quick prototype — you are committing to a framework built for structure, and you need engineers who respect that. Our team in Vadodara, India delivers Angular work to clients across the UK, South Africa, and Ivory Coast, and we specialise in the projects Angular was designed for: large ", { text: "enterprise applications", href: "/services/enterprise-applications/" }, " with strict TypeScript, dependency injection, and a module tree planned before the first feature is written. If your codebase needs to survive team turnover and years of change, that discipline is the differentiator."] },
      { h3: "State, reactivity, and testing done properly", p: ["Angular 17+ Signals, RxJS, and NgRx are where most projects live or die, and it is where our engineers go deep. We design feature stores, effects, selectors, and entity adapters so state stays predictable and time-travel debugging actually works. For data-heavy admin panels and ", { text: "CRM and ERP dashboards", href: "/crm-erp-systems/" }, ", we build role-based access, data grids, and HTTP interceptors that handle JWT refresh and errors consistently. Every deliverable ships with Jest unit tests and Cypress e2e coverage — typically 80%+ — because untested Angular is a liability, not a shortcut."] },
      { h3: "Migration, SSR, and micro-frontends", p: ["Legacy AngularJS apps are a common reason teams call us. We use the ngUpgrade bridge and a strangler-fig approach to migrate incrementally, keeping the app in production the whole way. We also handle Angular Universal SSR for SEO and ", { text: "first-paint performance", href: "/services/performance-optimization/" }, ", and module federation for ", { text: "micro-frontend architectures", href: "/services/microservices/" }, " that let multiple teams ship independently. If you are still weighing frameworks, our ", { text: "React developers", href: "/react-developer/" }, " can talk through the trade-offs honestly. Tell us your stack and timeline on the ", { text: "contact page", href: "/contact/" }, " and we will match you with senior Angular engineers within 48 hours."] },
    ],
  },
  hero: {
    eyebrow: "Angular Development",
    heading: "Angular Developers for Enterprise-Scale Applications",
    lead: "We build robust, maintainable enterprise frontends with Angular 17+, RxJS, and NgRx — the framework built for teams that need structure.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Angular Developer" }],
    marqueeItems: ["Angular 17","TypeScript","RxJS","NgRx","Angular Material","Karma","Jasmine","Nx monorepo","Angular CDK","Signals"],
    stats: [{ value: "18+", label: "Angular Projects" }, { value: "Angular 17", label: "Latest Version" }, { value: "NgRx", label: "State Experts" }],
  },
  services: {
    variant: "svc",
    eyebrow: "What We Build",
    heading: "Angular Development Services",
    items: [
      { icon: "🔴", title: "Enterprise SPAs", desc: "Large-scale Angular apps with strict typing and DI." },
      { icon: "📊", title: "Admin Dashboards", desc: "Data grids, charts, and role-based access control panels." },
      { icon: "🔄", title: "AngularJS Migration", desc: "Migrate AngularJS 1.x apps to modern Angular 17+." },
      { icon: "🎨", title: "Angular Material UI", desc: "Pixel-perfect Material Design 3 component builds." },
      { icon: "🔌", title: "REST & GraphQL", desc: "Angular HTTP client with interceptors and error handling." },
      { icon: "🧩", title: "Micro-Frontend", desc: "Angular module federation for large multi-team apps." },
    ],
  },
  capabilities: {
    eyebrow: "Technical Depth",
    heading: "Angular Capabilities",
    dark: true,
    items: [
      { icon: "🔴", title: "Angular 17+ Signals", desc: "New reactive primitives for fine-grained change detection." },
      { icon: "🔄", title: "RxJS & Observables", desc: "Complex async data flows with operators and subjects." },
      { icon: "🗃️", title: "NgRx State", desc: "Feature stores, effects, selectors, and entity adapters." },
      { icon: "🧪", title: "Karma & Jasmine / Jest", desc: "Unit and e2e tests with solid coverage targets." },
      { icon: "🚀", title: "Angular Universal", desc: "Server-side rendering for SEO and first-paint speed." },
      { icon: "🔒", title: "Auth Guards & Interceptors", desc: "JWT refresh, RBAC guards, and HTTP error handling." },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "Our Angular Development Process",
    steps: [
      { title: "Architecture", desc: "Feature module structure, lazy loading, and state design." },
      { title: "Development", desc: "Strict TypeScript, Angular style guide, automated linting." },
      { title: "Testing", desc: "Jest unit tests, Cypress e2e, and code coverage gates." },
      { title: "Deploy", desc: "Angular Universal SSR, Nginx, and CI/CD pipeline." },
    ],
  },
  stack: {
    eyebrow: "Technology Stack",
    heading: "Angular Stack We Use",
    cols: [
      { head: "Core", items: ["Angular 17", "TypeScript 5", "RxJS 7", "Signals"] },
      { head: "State", items: ["NgRx", "Akita", "ComponentStore", "NGXS"] },
      { head: "UI", items: ["Angular Material", "PrimeNG", "NG-ZORRO", "Tailwind"] },
      { head: "Testing", items: ["Jest", "Cypress", "Testing Library", "Storybook"] },
    ],
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Why Digital Web Weaver for Angular?",
    dark: true,
    items: [
      { icon: "🏗️", title: "Architecture First", desc: "We design the module tree before writing features." },
      { icon: "🔒", title: "Strict Mode", desc: "Strict TypeScript and Angular compiler checks enforced." },
      { icon: "🧪", title: "High Coverage", desc: "80%+ test coverage on all Angular deliverables." },
      { icon: "🔄", title: "Migration Experts", desc: "AngularJS to Angular 17 migrations completed safely." },
    ],
  },
  faq: {
    heading: "Angular Developer FAQ",
    items: [
      { q: "Angular or React for an enterprise project?", a: "Angular for large teams requiring enforced structure, DI patterns, and full-stack TypeScript discipline. React for smaller teams or when UI flexibility is paramount." },
      { q: "Do you support Angular Universal SSR?", a: "Yes — Angular Universal with Express for SSR, hydration, and transfer state for full SEO support." },
      { q: "Can you migrate our AngularJS app?", a: "Yes — we use the ngUpgrade bridge and a strangler fig pattern to incrementally migrate without big-bang rewrites." },
      { q: "Do you use Angular Signals?", a: "Yes — we use Signals for local reactive state in Angular 17+, alongside NgRx for complex shared state." },
    ],
  },
  cta: { eyebrow: "Ready to hire", heading: "Ready to hire an Angular developer?", body: "Tell us your stack, timeline, and budget. We'll match you with 2–3 senior Angular engineers within 48 hours — all pre-vetted, immediately available, and ready to ship.", primaryCta: { label: "Start hiring now ↗", href: "/contact/" }, secondaryCta: { label: "See our work", href: "/portfolio/" }, meta: ["Senior engineers only", "48-hr match", "No lock-in"] },
  testimonials: [
    { text: "We had an Angular 8 codebase with zero tests, Options-style services, and Promises everywhere instead of Observables. Their engineer refactored it incrementally over 4 months while keeping the app in production. Exceptional work.", name: "Marcus H.", role: "VP Engineering · InsurTech Platform · Germany", initials: "MH" },
    { text: "The NgRx migration from a chaotic service-based state model was exactly what we needed. State is now predictable, time-travel debugging actually works, and new engineers can understand what's happening without a two-hour walkthrough.", name: "Neha K.", role: "Engineering Lead · Banking Portal · India", initials: "NK" },
    { text: "Their Angular developer passed our internal technical bar on the first interview — which our own senior engineers set. That doesn't happen often with remote placements. They've been on our team for 14 months now.", name: "Chris F.", role: "CTO · Enterprise SaaS · United States", initials: "CF" },
  ]

};
export default data;
