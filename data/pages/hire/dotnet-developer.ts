import type { ServicePageData } from "@/lib/types";

const data: ServicePageData = {
  meta: {
    title: "Hire .NET Developers India | C#, ASP.NET Core & Azure",
    description: "Hire .NET developers for enterprise APIs, ASP.NET Core apps, microservices, and cloud-native systems built with C#, EF Core, and Azure. Get matched in 48 hours.",
  },
  prose: {
    eyebrow: "Hire .NET Developers",
    heading: "Hire .NET Developers for Enterprise-Grade Systems",
    blocks: [
      { p: ["Hire .NET developers who ship secure, high-performance systems rather than proof-of-concept code. Digital Web Weaver is a Vadodara, India engineering team delivering to clients across India, the UK, South Africa, and Ivory Coast, and this page is for organisations that need mission-critical backends in C#, ASP.NET Core, and the modern .NET 8 ecosystem. Our differentiator is senior-only engineers working in clean, domain-driven architecture — the kind of code that survives security audits, load spikes, and the next three years of feature work."] },
      { h3: "APIs and Microservices Built to Scale", p: ["Most .NET work we take on lives in the backend: versioned REST and gRPC ", { text: "API development", href: "/services/api-development/" }, ", EF Core and Dapper data layers, and distributed ", { text: "microservices", href: "/services/microservices/" }, " coordinated with .NET Aspire, Dapr, and message queues. We have untangled EF Core N+1 bottlenecks, rewritten data layers with compiled queries, and executed WebForms-to-ASP.NET Core migrations without downtime. Whether you are powering a SaaS product or a heavyweight ", { text: "enterprise application", href: "/services/enterprise-applications/" }, ", the API contracts are documented and the tests — xUnit, integration, and load — are real."] },
      { h3: "Azure-Native and Secure by Design", p: ["We design for the cloud from day one — App Service, Functions, Service Bus, and Cosmos DB — backed by ", { text: "cloud and DevOps", href: "/cloud-devops/" }, " pipelines that ship to Azure through GitHub Actions, with health checks, Serilog, and OpenTelemetry dashboards for observability. Auth, encryption, and OWASP-aligned hardening are built into every layer, not bolted on before launch, and we can maintain or migrate legacy .NET Framework 4.x systems on an incremental strangler-fig path. Tell us your stack, timeline, and budget and we will ", { text: "match you with senior .NET engineers", href: "/contact/" }, " within 48 hours — pre-vetted, immediately available, and ready to ship."] },
    ],
  },
  hero: {
    eyebrow: ".NET Development",
    heading: ".NET Developers Who Build Enterprise-Grade Systems",
    lead: "We engineer secure, high-performance backends and web apps with C#, ASP.NET Core, and the modern .NET ecosystem — from monoliths to microservices.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: ".NET Developer" }],
    marqueeItems: ["C#",".NET 8","ASP.NET Core","Entity Framework","Blazor","Azure","SignalR","xUnit","Dapper","gRPC","Docker","SQL Server"],
    stats: [{ value: "35+", label: ".NET Projects" }, { value: "6yr+", label: ".NET Depth" }, { value: "99.9%", label: "Uptime SLA" }],
  },
  services: {
    variant: "svc",
    eyebrow: "What We Build",
    heading: ".NET Development Services",
    items: [
      { icon: "🌐", title: "ASP.NET Core APIs", desc: "Versioned, documented REST and gRPC APIs for any frontend.", tags: ["ASP.NET Core","gRPC"] },
      { icon: "🏢", title: "Enterprise Web Apps", desc: "Line-of-business apps with Blazor, MVC, and Razor Pages.", tags: ["Blazor","MVC"] },
      { icon: "🧩", title: "Microservices", desc: "Distributed services with .NET Aspire, Dapr, and message queues.", tags: [".NET Aspire","Dapr"] },
      { icon: "🔐", title: "Identity & Auth", desc: "ASP.NET Identity, IdentityServer, OAuth 2.0, and Azure AD.", tags: ["Identity","Azure AD"] },
      { icon: "☁️", title: "Azure Cloud", desc: "App Service, Functions, Service Bus, and Cosmos DB.", tags: ["Azure","Functions"] },
      { icon: "🗄️", title: "Data Layer", desc: "EF Core, Dapper, SQL Server, and PostgreSQL integration.", tags: ["EF Core","SQL Server"] },
    ],
  },
  capabilities: {
    eyebrow: "Technical Depth",
    heading: ".NET Capabilities",
    dark: true,
    items: [
      { icon: "⚡", title: "ASP.NET Core", desc: "Minimal APIs, middleware pipelines, and dependency injection." },
      { icon: "📘", title: "Modern C#", desc: "Records, pattern matching, async/await, and nullable reference types." },
      { icon: "🧪", title: "Testing", desc: "xUnit, NUnit, Moq, integration tests, and load testing." },
      { icon: "📊", title: "Observability", desc: "Serilog, OpenTelemetry, Application Insights dashboards." },
      { icon: "🐳", title: "Docker & K8s", desc: "Containerised .NET deployments with health checks and scaling." },
      { icon: "🔒", title: "Security", desc: "Data protection, input validation, and OWASP-aligned hardening." },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "Our .NET Development Process",
    steps: [
      { title: "Architecture", desc: "Solution structure, domain modelling, API contracts, auth design." },
      { title: "Core Build", desc: "Business logic, EF Core data layer, background workers." },
      { title: "Integration & Testing", desc: "End-to-end tests, load tests, and security scans." },
      { title: "Deploy & Monitor", desc: "CI/CD to Azure, health checks, and alert dashboards." },
    ],
  },
  stack: {
    eyebrow: "Technology Stack",
    heading: ".NET Ecosystem We Use",
    cols: [
      { head: "Runtimes", items: [".NET 8 LTS", "C# 12", ".NET Aspire", "Blazor"] },
      { head: "Frameworks", items: ["ASP.NET Core", "Entity Framework", "Dapper", "SignalR"] },
      { head: "Databases", items: ["SQL Server", "PostgreSQL", "Cosmos DB", "Redis"] },
      { head: "Cloud & Infra", items: ["Azure", "Docker", "Kubernetes", "GitHub Actions"] },
    ],
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Why Digital Web Weaver for .NET?",
    dark: true,
    items: [
      { icon: "🏢", title: "Enterprise Experience", desc: "We've delivered mission-critical .NET systems for regulated industries." },
      { icon: "📘", title: "Clean Architecture", desc: "Domain-driven, testable code with clear separation of concerns." },
      { icon: "☁️", title: "Azure-Native", desc: "We design for the cloud from day one — scalable and cost-efficient." },
      { icon: "🛡️", title: "Secure by Design", desc: "Auth, encryption, and compliance built into every layer." },
    ],
  },
  faq: {
    heading: ".NET Developer FAQ",
    items: [
      { q: "Which .NET version do you build on?", a: "We build on .NET 8 (LTS) by default, and can maintain or migrate legacy .NET Framework 4.x and .NET Core 3.1 projects." },
      { q: "Can you migrate a legacy .NET Framework app?", a: "Yes — we run an incremental strangler-fig migration to ASP.NET Core, keeping the app live throughout the transition." },
      { q: "Do you work with Azure or AWS?", a: "Both. .NET is first-class on Azure, but we also deploy to AWS ECS, Lambda, and containers depending on your infrastructure." },
      { q: "What's a typical delivery timeline?", a: "A core ASP.NET Core API with auth, CRUD, and tests takes 3–5 weeks. A full enterprise platform is 3–5 months." },
    ],
  },
  related: [
    { label: "Enterprise Applications", href: "/services/enterprise-applications/", desc: "Large-scale mission-critical systems." },
    { label: "SaaS Development", href: "/saas-development/", desc: "End-to-end SaaS product development." },
    { label: "API Development", href: "/services/api-development/", desc: "RESTful and gRPC API engineering." },
    { label: "Hire Node.js Developer", href: "/nodejs-developer/", desc: "Backend engineers for real-time systems." },
  ],
  cta: { eyebrow: "Ready to hire", heading: "Ready to hire a .NET developer?", body: "Tell us your stack, timeline, and budget. We'll match you with 2–3 senior .NET engineers within 48 hours — all pre-vetted, immediately available, and ready to ship.", primaryCta: { label: "Start hiring now ↗", href: "/contact/" }, secondaryCta: { label: "See our work", href: "/portfolio/" }, meta: ["Senior engineers only", "48-hr match", "No lock-in"] },
  testimonials: [
    { text: "We needed a developer who could own our ASP.NET Core migration from a legacy WebForms system. Their engineer designed the new architecture, wrote the migration plan, and executed it over 12 weeks without downtime. Exceptional work.", name: "Richard H.", role: "CTO · Insurance Platform · United Kingdom", initials: "RH" },
    { text: "Our EF Core queries were bottlenecking under load. Their .NET developer diagnosed the tracking and N+1 issues in a day, rewrote the data layer with compiled queries, and cut P95 latency from 3.8s to 210ms.", name: "Anita R.", role: "VP Engineering · HealthTech · India", initials: "AR" },
    { text: "The Blazor dashboard was the most complex UI we'd attempted. The developer architected it cleanly with SignalR for live updates and proper state management. Shipped ahead of schedule.", name: "Marcus L.", role: "Head of Product · Logistics SaaS · Germany", initials: "ML" },
  ],
};
export default data;
