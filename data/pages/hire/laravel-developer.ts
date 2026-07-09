import type { ServicePageData } from "@/lib/types";

const data: ServicePageData = {
  meta: {
    title: "Hire Expert Laravel PHP Developers",
    description: "Hire Laravel developers for web apps, REST APIs, SaaS platforms, and e-commerce backends. Laravel 11, Livewire, Inertia.js, and Filament experts.",
  },
  hero: {
    eyebrow: "Laravel Development",
    heading: "Laravel Developers Who Build Production-Grade PHP Apps",
    lead: "We craft elegant, fast, and testable web applications with Laravel 11 — from REST APIs to full-stack Inertia.js apps and Filament admin panels.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Laravel Developer" }],
    marqueeItems: ["Laravel 11","PHP 8.3","MySQL","Redis","Livewire","Inertia.js","Eloquent","Sanctum","Horizon","Vapor"],
    stats: [{ value: "45+", label: "Laravel Projects" }, { value: "Laravel 11", label: "Latest Version" }, { value: "PHP 8.3", label: "Modern PHP" }],
  },
  services: {
    variant: "svc",
    eyebrow: "What We Build",
    heading: "Laravel Development Services",
    items: [
      { icon: "🏗️", title: "Web Applications", desc: "Full-stack apps with Blade, Livewire, or Inertia.js." , tags: ["Blade","Livewire"]},
      { icon: "🔌", title: "REST & GraphQL APIs", desc: "Sanctum auth, resource controllers, and API versioning." , tags: ["Sanctum","Versioning"]},
      { icon: "🛒", title: "E-Commerce Backends", desc: "WooCommerce alternative shops built on Laravel." , tags: ["Cart","Payments"]},
      { icon: "📊", title: "Filament Admin Panels", desc: "Beautiful, powerful admin interfaces with Filament." , tags: ["Filament","Resources"]},
      { icon: "⚡", title: "Queue & Job Processing", desc: "Laravel Horizon, Redis queues, and scheduled tasks." , tags: ["Horizon","Redis"]},
      { icon: "🔄", title: "Legacy PHP Migration", desc: "Migrate raw PHP or CodeIgniter apps to Laravel." , tags: ["CodeIgniter","Refactor"]},
    ],
  },
  capabilities: {
    eyebrow: "Technical Depth",
    heading: "Laravel Capabilities",
    dark: true,
    items: [
      { icon: "🏗️", title: "Laravel 11 Features", desc: "Streamlined bootstrap, per-second scheduling, typed properties." },
      { icon: "🎭", title: "Livewire & Alpine", desc: "Reactive UI without writing a SPA framework." },
      { icon: "⚛️", title: "Inertia.js + React/Vue", desc: "SPA feel with server-side routing and no separate API." },
      { icon: "🔧", title: "Telescope & Horizon", desc: "Request monitoring, queue visibility, and debugging." },
      { icon: "🧪", title: "Pest & PHPUnit", desc: "Elegant test syntax with parallel test execution." },
      { icon: "🐳", title: "Sail & Docker", desc: "Containerised development and production environments." },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "Our Laravel Development Process",
    steps: [
      { title: "Domain Design", desc: "Eloquent model design, service layer, and repository pattern." },
      { title: "Feature Development", desc: "TDD with Pest, clean controllers, and form requests." },
      { title: "Security Review", desc: "CSRF, SQL injection, mass assignment, and dependency audit." },
      { title: "Deploy & Scale", desc: "Laravel Forge, Vapor, or custom CI/CD deployment." },
    ],
  },
  stack: {
    eyebrow: "Technology Stack",
    heading: "Laravel Stack We Use",
    cols: [
      { head: "Core", items: ["Laravel 11", "PHP 8.3", "Eloquent ORM", "Pest"] },
      { head: "Frontend", items: ["Livewire 3", "Inertia.js", "Alpine.js", "Blade"] },
      { head: "Admin", items: ["Filament 3", "Nova", "Backpack"] },
      { head: "Infra", items: ["Forge", "Vapor", "Docker", "Redis"] },
    ],
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Why Digital Web Weaver for Laravel?",
    dark: true,
    items: [
      { icon: "⚡", title: "Laravel-First Team", desc: "Laravel is our primary PHP framework — not a secondary skill." },
      { icon: "🧪", title: "Pest Test Coverage", desc: "80%+ coverage with elegant Pest syntax on every project." },
      { icon: "📊", title: "Filament Specialists", desc: "Complex admin panels built in days, not weeks." },
      { icon: "🔒", title: "OWASP Secure", desc: "Input validation, CSRF, XSS, and mass-assignment protection." },
    ],
  },
  faq: {
    heading: "Laravel Developer FAQ",
    items: [
      { q: "Livewire or Inertia.js?", a: "Livewire for server-centric apps with minimal JS. Inertia when you want React/Vue components with Laravel routing and no separate API." },
      { q: "Can you deploy to Laravel Vapor?", a: "Yes — serverless Laravel on AWS Lambda with Vapor. We handle environment config, queues, and file storage for serverless deployments." },
      { q: "Do you build Filament admin panels?", a: "Yes — Filament is our preferred Laravel admin solution. We build custom resources, widgets, and plugins." },
      { q: "How long does a Laravel project take?", a: "A core API with auth and CRUD takes 2–3 weeks. Full-featured SaaS with billing and admin panel typically 2–4 months." },
    ],
  },
  related: [
    { label: "Web Application Development", href: "/web-application-development/", desc: "Complex web apps and portals built with Laravel." },
    { label: "Custom Software Development", href: "/custom-software-development/", desc: "Bespoke software tailored to your business processes." },
    { label: "CRM & ERP Systems", href: "/crm-erp-systems/", desc: "Custom ERP and CRM built on robust Laravel backends." },
    { label: "Hire Node.js Developer", href: "/nodejs-developer/", desc: "Backend alternatives for microservices and APIs." },
  ],
  cta: { eyebrow: "Ready to hire", heading: "Ready to hire a Laravel developer?", body: "Tell us your stack, timeline, and budget. We'll match you with 2–3 senior Laravel engineers within 48 hours — all pre-vetted, immediately available, and ready to ship.", primaryCta: { label: "Start hiring now ↗", href: "/contact/" }, secondaryCta: { label: "See our work", href: "/portfolio/" }, meta: ["Senior engineers only", "48-hr match", "No lock-in"] },
  testimonials: [
    { text: "We inherited a Laravel 8 codebase with no tests, raw SQL queries everywhere, and N+1 issues on every page. Their developer audited it in the first week, presented a prioritised remediation plan, and worked through it systematically. The app is now fast and testable.", name: "Kavitha P.", role: "Head of Engineering · SaaS Platform · India", initials: "KP" },
    { text: "Our Livewire migration from a JavaScript-heavy front-end was a leap of faith. Their Laravel developer made it seamless — real-time features, file uploads, complex form state — all handled without a single page reload. Our team now ships front-end features without needing a JS specialist.", name: "Emma W.", role: "CTO · Property Tech · Australia", initials: "EW" },
    { text: "The Laravel Vapor deployment cut our server management overhead to almost nothing. Their developer set up the Vapor environment, migrated our queues and scheduled tasks, and automated the whole deployment pipeline. We haven't touched a server since.", name: "Rohan G.", role: "Founder · EdTech SaaS · United Kingdom", initials: "RG" },
  ]

};
export default data;
