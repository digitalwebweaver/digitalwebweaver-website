import type { ServicePageData } from "@/lib/types";

const data: ServicePageData = {
  meta: {
    title: "Hire Node.js Developers | India, UK & Global Teams",
    description: "Hire Node.js developers for REST APIs, microservices, and real-time apps built with TypeScript, Express, and Fastify. Get a free quote in 24 hours.",
  },
  prose: {
    eyebrow: "Backend Engineering Depth",
    heading: "Hire Node.js Developers Who Understand the Whole System",
    blocks: [
      { p: ["When teams hire Node.js developers, they usually need more than someone who can wire up an Express route — they need an engineer who reasons about event loops, backpressure, and database contention under real traffic. That is where we focus. Our Vadodara-based engineers deliver to clients across India, the UK, South Africa, and Ivory Coast, and every service ships fully typed in TypeScript with tests, structured logging, and an OpenAPI contract from day one. This suits founders shipping an ", { text: "MVP", href: "/mvp-development/" }, " as much as it suits established teams migrating a legacy monolith toward ", { text: "microservices", href: "/services/microservices/" }, " without a risky rewrite."] },
      { h3: "APIs Built for the Frontend That Consumes Them", p: ["A Node.js backend rarely lives alone. We design ", { text: "REST and GraphQL APIs", href: "/services/api-development/" }, " with the client in mind — versioned, rate-limited, and documented so a ", { text: "React frontend", href: "/react-developer/" }, " team or a mobile app can integrate without guesswork. Whether the goal is a ", { text: "SaaS platform", href: "/saas-development/" }, " with multi-tenant auth or a real-time layer using WebSockets and Redis pub/sub for horizontal scaling, we build the data contracts first and let the implementation follow. That discipline is why our services drop cleanly into existing products instead of forcing everything around them."] },
      { h3: "Performance, Security, and Operations Included", p: ["Fast code that falls over in production is not fast. Our engineers profile hot paths, fix indexing and connection-pooling issues, and instrument services with OpenTelemetry so you can see where time goes. Security is standard, not an add-on — input validation, JWT and OAuth 2.0 auth, and OWASP-aligned defences ship by default. We containerise with Docker and Kubernetes, wire up CI/CD, and hand over dashboards your team can actually read. If you want to see the range of ", { text: "custom software", href: "/custom-software-development/" }, " we have delivered, browse our ", { text: "portfolio", href: "/portfolio/" }, ", or ", { text: "tell us about your stack", href: "/contact/" }, " and we will map out the right approach."] },
    ],
  },
  hero: {
    eyebrow: "Node.js Development",
    heading: "Node.js Backend Developers Who Build for Scale",
    lead: "We craft fast, event-driven APIs and microservices with Node.js, TypeScript, and battle-tested backend patterns.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Node.js Developer" }],
    marqueeItems: ["Node.js","NestJS","TypeScript","PostgreSQL","MongoDB","Redis","Docker","GraphQL","JWT","WebSockets","Fastify","Express"],
    stats: [{ value: "40+", label: "API Projects" }, { value: "5yr+", label: "Node.js Depth" }, { value: "99%", label: "Uptime SLA" }],
  },
  services: {
    variant: "svc",
    eyebrow: "What We Build",
    heading: "Node.js Development Services",
    items: [
      { icon: "🔌", title: "REST & GraphQL APIs", desc: "Versioned, documented, rate-limited APIs for any frontend." , tags: ["Express","Apollo"]},
      { icon: "⚡", title: "Real-Time Apps", desc: "WebSocket and Socket.io for chat, notifications, live data." , tags: ["WebSockets","Socket.io"]},
      { icon: "🧩", title: "Microservices", desc: "Event-driven services with RabbitMQ, Kafka, and Redis." , tags: ["Docker","Kubernetes"]},
      { icon: "🔐", title: "Auth Systems", desc: "JWT, OAuth 2.0, session management, and RBAC." , tags: ["JWT","OAuth 2.0"]},
      { icon: "☁️", title: "Serverless Functions", desc: "AWS Lambda, Vercel Edge, Cloudflare Workers." , tags: ["Lambda","Edge"]},
      { icon: "🗄️", title: "Database Integration", desc: "PostgreSQL, MongoDB, Redis — ORM and raw query layers." , tags: ["PostgreSQL","Redis"]},
    ],
  },
  capabilities: {
    eyebrow: "Technical Depth",
    heading: "Node.js Capabilities",
    dark: true,
    items: [
      { icon: "⚡", title: "Express & Fastify", desc: "Production-grade routing, middleware, and plugin architecture." },
      { icon: "📘", title: "TypeScript Backend", desc: "Typed services, DTOs, and repository patterns." },
      { icon: "🧪", title: "Testing", desc: "Jest, Supertest, contract tests, and load testing with k6." },
      { icon: "📊", title: "Observability", desc: "Structured logging, OpenTelemetry, Grafana dashboards." },
      { icon: "🐳", title: "Docker & K8s", desc: "Containerised deployments with health checks and auto-scaling." },
      { icon: "🔒", title: "Security", desc: "Input validation, SQL injection prevention, helmet.js, CORS." },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "Our Node.js Development Process",
    steps: [
      { title: "API Design", desc: "OpenAPI spec first — routes, schemas, auth, error codes." },
      { title: "Core Services", desc: "Business logic, DB layer, background jobs." },
      { title: "Integration & Testing", desc: "End-to-end tests, load tests, security scans." },
      { title: "Deploy & Monitor", desc: "CI/CD pipeline, health checks, alert dashboards." },
    ],
  },
  stack: {
    eyebrow: "Technology Stack",
    heading: "Node.js Ecosystem We Use",
    cols: [
      { head: "Runtimes", items: ["Node.js 20 LTS", "Bun", "Deno", "TypeScript 5"] },
      { head: "Frameworks", items: ["Express.js", "Fastify", "NestJS", "Hono"] },
      { head: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM"] },
      { head: "Infra", items: ["Docker", "Kubernetes", "AWS ECS", "Vercel"] },
    ],
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Why Digital Web Weaver for Node.js?",
    dark: true,
    items: [
      { icon: "⚡", title: "High-Throughput Expertise", desc: "We've built APIs serving 10k+ req/s with Node.js." },
      { icon: "📘", title: "TypeScript by Default", desc: "Every service fully typed — no runtime surprises in prod." },
      { icon: "🔄", title: "Event-Driven Patterns", desc: "Queues, pub/sub, and event sourcing done properly." },
      { icon: "🛡️", title: "OWASP Secure APIs", desc: "Rate limiting, auth, and input validation as standard." },
    ],
  },
  faq: {
    heading: "Node.js Developer FAQ",
    items: [
      { q: "Express vs Fastify — which do you recommend?", a: "Fastify for new projects — it's 2× faster and has schema validation built in. We use Express for legacy migration compatibility." },
      { q: "Can you build a monolith and split it later?", a: "Yes — we design monoliths with clear module boundaries so they can be extracted into microservices incrementally." },
      { q: "Do you handle database migrations?", a: "Yes — Prisma Migrate or Flyway for versioned, reproducible schema changes across environments." },
      { q: "What's your typical API delivery timeline?", a: "A core REST API with auth, CRUD, and tests takes 2–4 weeks. Full backend platform 2–4 months." },
    ],
  },
  related: [
    { label: "Web Application Development", href: "/web-application-development/", desc: "Scalable web apps built on Node.js backends." },
    { label: "SaaS Development", href: "/saas-development/", desc: "End-to-end SaaS product development." },
    { label: "Web Development", href: "/web-development/", desc: "Full-stack web development services." },
    { label: "Hire React Developer", href: "/react-developer/", desc: "Frontend engineers who complement Node.js backends." },
  ],
  cta: { eyebrow: "Ready to hire", heading: "Ready to hire a Node.js developer?", body: "Tell us your stack, timeline, and budget. We'll match you with 2–3 senior Node.js engineers within 48 hours — all pre-vetted, immediately available, and ready to ship.", primaryCta: { label: "Start hiring now ↗", href: "/contact/" }, secondaryCta: { label: "See our work", href: "/portfolio/" }, meta: ["Senior engineers only", "48-hr match", "No lock-in"] },
  testimonials: [
    { text: "We needed someone who could own our NestJS API migration from a legacy PHP monolith. Their developer designed the new service layer, wrote the migration plan, and executed it over 10 weeks without a single incident. Outstanding.", name: "David M.", role: "CTO · Logistics Platform · United Kingdom", initials: "DM" },
    { text: "Our PostgreSQL queries were timing out under load. Their engineer diagnosed the indexing issues within a day, rewrote the worst three queries, and added connection pooling. P95 response time dropped from 4.2s to 180ms.", name: "Shreya T.", role: "VP Engineering · FinTech API · India", initials: "ST" },
    { text: "The real-time WebSocket feature was the most technically complex thing we'd ever built. The developer architected it correctly from the start — Redis pub/sub for horizontal scaling, proper disconnect handling, reconnect logic. Shipped in 3 weeks.", name: "Ollie B.", role: "Head of Engineering · SaaS Collaboration Tool · Canada", initials: "OB" },
  ]

};
export default data;
