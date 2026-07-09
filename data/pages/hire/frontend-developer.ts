import type { ServicePageData } from "@/lib/types";

const data: ServicePageData = {
  meta: {
    title: "Hire Frontend Developers | React, Vue & Angular Experts",
    description: "Hire frontend developers in India for pixel-perfect, accessible, high-performance UIs in React, Vue, and Angular. Get a free quote in 24 hours.",
  },
  prose: {
    eyebrow: "Frontend Development",
    heading: "Hire Frontend Developers Who Ship Interfaces That Perform",
    blocks: [
      { p: ["When you hire frontend developers from Digital Web Weaver, you get engineers who treat the browser as an engineering problem, not a coat of paint. We are a Vadodara-based team delivering to India, the UK, South Africa, and Ivory Coast, and we build pixel-perfect, accessible interfaces in React 18, Vue 3, and Next.js with TypeScript throughout. This page is for product teams, agencies, and founders who have a Figma file or a slow legacy UI and need it turned into something fast, maintainable, and correct. Our differentiator is measurable: 95+ average Lighthouse scores and WCAG 2.1 AA compliance are the baseline we start from, not a stretch goal we bolt on at the end."] },
      { h3: "From Figma handoff to a real design system", p: ["We take Figma as the source of truth, extract tokens for spacing and typography, and build component libraries in Storybook with Chromatic visual regression and Vitest interaction tests. That means your buttons, forms, and layouts behave consistently across every screen instead of drifting over time. When the frontend is the surface of something larger, our developers sit alongside our ", { text: "web application development", href: "/web-application-development/" }, " team, and if you want the interaction design refined before a line of code, our ", { text: "UI/UX design", href: "/ui-ux-design/" }, " practice can shape the flows first. Need a single framework specialist instead of a full pod? You can hire a dedicated ", { text: "React developer", href: "/react-developer/" }, " directly."] },
      { h3: "Performance and accessibility as standard practice", p: ["Every build ships through Lighthouse CI with Core Web Vitals budgets, lazy loading, and bundle splitting via Vite, so users on slow connections in any of our delivery regions get a fast first paint. Accessibility is built in from the first component: ARIA, keyboard navigation, and contrast are audited, not assumed. If you already have a live product bleeding conversions to a sluggish interface, our ", { text: "performance optimisation", href: "/services/performance-optimization/" }, " work targets the exact bottlenecks with real profiling data. Send us your designs or your current URL and we will scope the frontend work and quote within 24 hours — start a ", { text: "conversation with us", href: "/contact/" }, " whenever you are ready."] },
    ],
  },
  hero: {
    eyebrow: "Frontend Development",
    heading: "Frontend Developers Who Make UIs That Delight",
    lead: "We engineer pixel-perfect, accessible, blazing-fast user interfaces with modern frameworks and a performance-first mindset.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Frontend Developer" }],
    marqueeItems: ["React","Vue 3","TypeScript","CSS Modules","Tailwind","Figma","Storybook","Vite","Playwright","WCAG 2.1"],
    stats: [{ value: "70+", label: "UI Projects" }, { value: "95+", label: "Avg Lighthouse" }, { value: "WCAG 2.1", label: "Accessible" }],
  },
  services: {
    variant: "svc",
    eyebrow: "What We Build",
    heading: "Frontend Development Services",
    items: [
      { icon: "⚛️", title: "React & Next.js", desc: "Component-driven UIs with SSR, SSG, and Suspense." },
      { icon: "💚", title: "Vue & Nuxt", desc: "Composable Vue 3 apps with the Options and Composition API." },
      { icon: "🎨", title: "Design System Engineering", desc: "Storybook, tokens, accessible primitives at scale." },
      { icon: "📱", title: "Responsive Interfaces", desc: "Mobile-first layouts that work flawlessly on any device." },
      { icon: "♿", title: "Accessibility (a11y)", desc: "WCAG 2.1 AA audits, ARIA, keyboard navigation." },
      { icon: "⚡", title: "Performance Optimisation", desc: "Core Web Vitals, lazy loading, bundle splitting." , tags: ["Lighthouse","Web Vitals"]},
    ],
  },
  capabilities: {
    eyebrow: "Technical Depth",
    heading: "Frontend Capabilities",
    dark: true,
    items: [
      { icon: "⚛️", title: "React 18 & TypeScript", desc: "Concurrent features, Server Components, strict typing." },
      { icon: "🎨", title: "CSS Architecture", desc: "CSS Modules, Tailwind, CSS-in-JS, BEM methodology." },
      { icon: "🧪", title: "Testing", desc: "Vitest, Playwright, Storybook interaction tests, Chromatic." },
      { icon: "📊", title: "Analytics & Tracking", desc: "GA4, GTM, Mixpanel, cookie consent integration." },
      { icon: "⚡", title: "Build Tools", desc: "Vite, Turbopack, webpack, Rollup, tree-shaking." },
      { icon: "🔒", title: "Security", desc: "CSP headers, XSS prevention, Subresource Integrity." },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "Our Frontend Development Process",
    steps: [
      { title: "Design Handoff", desc: "Figma to code — extract tokens, spacing, and typography." },
      { title: "Component Architecture", desc: "Atomic design, shared primitives, Storybook setup." },
      { title: "Feature Implementation", desc: "Iterative builds with live preview and daily commits." },
      { title: "Audit & Ship", desc: "Lighthouse CI, a11y audit, cross-browser testing, deploy." },
    ],
  },
  stack: {
    eyebrow: "Technology Stack",
    heading: "Frontend Stack We Use",
    cols: [
      { head: "Frameworks", items: ["React 18", "Next.js 15", "Vue 3", "Nuxt 3"] },
      { head: "Styling", items: ["Tailwind CSS", "CSS Modules", "shadcn/ui", "MUI"] },
      { head: "Testing", items: ["Vitest", "Playwright", "Storybook", "Chromatic"] },
      { head: "Tooling", items: ["Vite", "TypeScript", "ESLint", "Prettier"] },
    ],
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Why Digital Web Weaver for Frontend?",
    dark: true,
    items: [
      { icon: "⚡", title: "95+ Lighthouse Scores", desc: "Performance optimisation is standard practice, not an afterthought." },
      { icon: "♿", title: "Accessible by Default", desc: "WCAG 2.1 AA compliance built in from the first component." },
      { icon: "🎨", title: "Pixel-Perfect", desc: "We match Figma designs to within 1px without compromise." },
      { icon: "📱", title: "Mobile-First", desc: "Every layout designed for mobile, progressively enhanced for desktop." },
    ],
  },
  faq: {
    heading: "Frontend Developer FAQ",
    items: [
      { q: "Can you work from our Figma designs?", a: "Yes — we take Figma as the source of truth, extract tokens, and implement pixel-perfect responsive components." },
      { q: "Do you build design systems?", a: "Yes — Storybook component libraries with design tokens, documentation, and a11y testing are a core offering." },
      { q: "Can you audit and improve our existing frontend?", a: "Absolutely — we run Lighthouse, bundle analysis, and a11y audits then implement targeted improvements." },
      { q: "React or Vue for a new project?", a: "React for larger teams and ecosystem breadth. Vue for smaller teams who value approachability and gentle learning curves." },
    ],
  },
  related: [
    { label: "Web Development", href: "/web-development/", desc: "Full-stack web development services." },
    { label: "UI/UX Design", href: "/ui-ux-design/", desc: "User experience design that drives conversions." },
    { label: "Web Application Development", href: "/web-application-development/", desc: "Complex web apps with polished frontends." },
    { label: "Hire React Developer", href: "/react-developer/", desc: "React specialists for component-heavy UIs." },
  ],
  cta: { eyebrow: "Ready to hire", heading: "Ready to hire a frontend developer?", body: "Tell us your stack, designs, and timeline. We'll match you with 2–3 senior frontend engineers within 48 hours — all pre-vetted, immediately available, and ready to ship pixel-perfect, accessible UI.", primaryCta: { label: "Start hiring now ↗", href: "/contact/" }, secondaryCta: { label: "See our work", href: "/portfolio/" }, meta: ["Senior engineers only", "48-hr match", "No lock-in"] },
  testimonials: [
    { text: "The developer they placed rebuilt our dashboard in React and finally made it feel fast. Clean component architecture, proper accessibility, and an interface that matched our Figma exactly. Our internal team picked up the codebase without friction.", name: "Neha K.", role: "Product Lead · Analytics SaaS · India", initials: "NK" },
    { text: "We needed someone senior to own our migration to Next.js. Their engineer led it end to end — no juniors, no hand-holding — and our Lighthouse scores climbed across the board.", name: "James P.", role: "Engineering Manager · FinTech · United Kingdom", initials: "JP" },
    { text: "Pixel-perfect implementation and genuinely useful in design reviews — they flagged UX issues we'd missed and shipped a polished, responsive interface right on schedule.", name: "Ravi S.", role: "Founder · D2C Marketplace · India", initials: "RS" },
  ],
};
export default data;
