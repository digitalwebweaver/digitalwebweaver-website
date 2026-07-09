import type { ServicePageData } from "@/lib/types";

const data: ServicePageData = {
  meta: {
    title: "Hire Frontend Developers | React, Vue & Angular Experts",
    description: "Hire frontend developers in India for pixel-perfect, accessible, high-performance UIs in React, Vue, and Angular. Get a free quote in 24 hours.",
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
  cta: { heading: "Build a Frontend That Stands Out", body: "Let's review your designs and scope your frontend project." },
};
export default data;
