import type { ServicePageData } from "@/lib/types";

const data: ServicePageData = {
  meta: {
    title: "Full Stack Developer — Hire Expert Full Stack Engineers",
    description: "Hire full stack developers who own the entire product — React frontends, Node.js/Python backends, databases, and cloud deployments.",
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
  cta: { heading: "Build Your Product End-to-End", body: "One team, zero handoffs. Let's scope your full stack project." },
};
export default data;
