import type { ServicePageData } from "@/lib/types";

const data: ServicePageData = {
  meta: {
    title: "Hire Full Stack Developers | React, Node.js & Global Teams",
    description: "Hire full stack developers who own the product end-to-end — React frontends, Node.js/Python backends, databases, and cloud deployments. Get matched in 48 hours.",
  },
  prose: {
    eyebrow: "Full Stack Development",
    heading: "Hire Full Stack Developers Who Own the Whole Product",
    blocks: [
      { p: ["When you hire full stack developers from Digital Web Weaver, you get engineers who carry a feature from Figma to production without waiting on a separate frontend or backend team. This is for founders and product leaders who are tired of handoff delays and finger-pointing between layers. Our differentiator is simple: one team writes the React UI, the Node.js or Python API, the PostgreSQL schema, and the Docker deployment — with TypeScript shared end-to-end so contract bugs between client and server never make it to staging. We are based in Vadodara, India, and deliver to teams across the UK, South Africa, and Ivory Coast on their working hours."] },
      { h3: "One team, every layer of the stack", p: ["Full stack for us means real depth at each level, not a generalist who dabbles. Our engineers build ", { text: "React and Next.js frontends", href: "/react-developer/" }, " with SSR and design systems, back them with type-safe REST and GraphQL ", { text: "APIs", href: "/services/api-development/" }, ", and design the ", { text: "PostgreSQL and Redis data layer", href: "/services/database-design/" }, " underneath. Because the same team owns infra, cloud and DevOps decisions — AWS, Terraform, GitHub Actions CI/CD — happen alongside the code instead of after it. That unified ownership is why ", { text: "web application development", href: "/web-application-development/" }, " ships faster here: there is no queue between the person who designed the interface and the person deploying it."] },
      { h3: "Built for products that need to scale", p: ["We staff a single developer for focused builds and a small team of two to four engineers for larger platforms — multi-tenant ", { text: "SaaS products", href: "/saas-development/" }, " with auth, Stripe billing, and team management, or custom shops with payments and inventory. Every layer ships with tests, from Jest units to Playwright end-to-end runs, and every release passes a security review against OWASP practices. Our average engineer has seven-plus years of experience, so architecture and trade-offs are discussed openly before scope changes, not after. If you want to see how this works on a real product, ", { text: "tell us what you are building", href: "/contact/" }, " and we will scope it end-to-end."] },
    ],
  },
  hero: {
    eyebrow: "Full Stack Development",
    heading: "Full Stack Developers Who Own the Whole Product",
    lead: "From pixel-perfect UIs to battle-tested APIs and cloud deployments — our full stack engineers deliver end-to-end.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Full Stack Developer" }],
    marqueeItems: ["React","Node.js","TypeScript","PostgreSQL","Redis","Docker","AWS","GraphQL","REST APIs","Prisma"],
    stats: [{ value: "80+", label: "Full Stack Projects" }, { value: "7yr+", label: "Avg Experience" }, { value: "React+Node", label: "Primary Stack" }],
  },
  services: {
    variant: "svc",
    eyebrow: "What We Build",
    heading: "Full Stack Development Services",
    items: [
      { icon: "🌐", title: "Web Applications", desc: "End-to-end apps from Figma to production in one team." , tags: ["React","Next.js"]},
      { icon: "🔌", title: "REST & GraphQL APIs", desc: "Type-safe APIs paired with React/Vue frontends." },
      { icon: "🛒", title: "E-Commerce Platforms", desc: "Custom shops with payments, inventory, and CMS." },
      { icon: "📊", title: "SaaS Products", desc: "Multi-tenant platforms with auth, billing, and teams." , tags: ["Stripe","Auth0"]},
      { icon: "📱", title: "Web + Mobile", desc: "Shared API, React web, React Native mobile." },
      { icon: "🔄", title: "Legacy Modernisation", desc: "Rewrite monoliths with a modern full stack." },
    ],
  },
  capabilities: {
    eyebrow: "Technical Depth",
    heading: "Full Stack Capabilities",
    dark: true,
    items: [
      { icon: "⚛️", title: "React / Next.js Frontend", desc: "SSR, SSG, TypeScript, design systems." },
      { icon: "🔧", title: "Node.js / Python Backend", desc: "REST, GraphQL, queues, cron jobs." },
      { icon: "🗄️", title: "Database Design", desc: "PostgreSQL, MongoDB, Redis, migrations." },
      { icon: "☁️", title: "Cloud & DevOps", desc: "AWS, GCP, Docker, CI/CD pipelines." },
      { icon: "🔒", title: "Auth & Security", desc: "JWT, OAuth 2.0, OWASP compliance." },
      { icon: "🧪", title: "End-to-End Testing", desc: "Playwright, Jest, integration tests." },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "Full Stack Delivery Process",
    steps: [
      { title: "Discovery", desc: "Architecture, tech stack, and delivery roadmap in week 1." },
      { title: "Sprint Development", desc: "Two-week sprints shipping frontend and backend together." },
      { title: "Integration QA", desc: "Full system tests, staging sign-off, and security review." },
      { title: "Launch & Sustain", desc: "Monitoring, on-call support, and iterative improvements." },
    ],
  },
  stack: {
    eyebrow: "Technology Stack",
    heading: "Our Full Stack",
    cols: [
      { head: "Frontend", items: ["React 18", "Next.js", "TypeScript", "Tailwind CSS"] },
      { head: "Backend", items: ["Node.js", "Python", "FastAPI", "PostgreSQL"] },
      { head: "DevOps", items: ["Docker", "AWS", "GitHub Actions", "Terraform"] },
      { head: "Extras", items: ["Redis", "Elasticsearch", "Stripe", "Twilio"] },
    ],
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Why Digital Web Weaver for Full Stack?",
    dark: true,
    items: [
      { icon: "🔄", title: "No Silos", desc: "One team owns frontend, backend, and infra — faster decisions." },
      { icon: "📘", title: "TypeScript End-to-End", desc: "Shared types between frontend and backend eliminate contract bugs." },
      { icon: "⚡", title: "Ship Faster", desc: "Unified team means no handoff delays between layers." },
      { icon: "🛡️", title: "Quality at Every Layer", desc: "Tests from unit to e2e covering the full stack." },
    ],
  },
  faq: {
    heading: "Full Stack Developer FAQ",
    items: [
      { q: "What stack do you prefer?", a: "React + Node.js/TypeScript + PostgreSQL is our default. We also work with Python/Django and Vue depending on project needs." },
      { q: "Can one developer handle the whole project?", a: "For smaller projects yes — for larger ones we staff a small team of 2–4 engineers covering all layers." },
      { q: "Do you handle cloud infrastructure too?", a: "Yes — AWS, GCP, and Vercel. Docker, Terraform, and GitHub Actions CI/CD included in our standard delivery." },
      { q: "How do you manage scope creep?", a: "Formal change requests with impact estimates. We're transparent about trade-offs before touching scope." },
    ],
  },
  related: [
    { label: "Web Application Development", href: "/web-application-development/", desc: "End-to-end web application development." },
    { label: "Web Development", href: "/web-development/", desc: "Full-stack web development services." },
    { label: "SaaS Development", href: "/saas-development/", desc: "End-to-end SaaS product development." },
    { label: "Hire React Developer", href: "/react-developer/", desc: "Frontend specialists to complement your full stack team." },
  ],
  cta: { eyebrow: "Ready to hire", heading: "Ready to hire a full stack developer?", body: "Tell us your product, stack, and timeline. We'll match you with 2–3 senior full stack engineers within 48 hours — all pre-vetted, immediately available, and ready to own your build front to back.", primaryCta: { label: "Start hiring now ↗", href: "/contact/" }, secondaryCta: { label: "See our work", href: "/portfolio/" }, meta: ["Senior engineers only", "48-hr match", "No lock-in"] },
  testimonials: [
    { text: "One engineer owned both our API and the React front end, which killed the endless handoff delays we had juggling two vendors. Shipped our MVP in weeks, not months.", name: "Aditi R.", role: "Founder · HR SaaS · India", initials: "AR" },
    { text: "Their full-stack developer took us from Figma to a working product on Node and Postgres. Clean code, sensible architecture, and honest about trade-offs the whole way through.", name: "Daniel M.", role: "CTO · Logistics Startup · United Kingdom", initials: "DM" },
    { text: "We embedded their engineer with our team and they added value across the stack immediately — database, backend, and UI — with no ramp-up drama.", name: "Kabelo N.", role: "Head of Engineering · MarketplaceCo · South Africa", initials: "KN" },
  ],
};
export default data;
