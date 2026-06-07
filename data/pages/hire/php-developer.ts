import type { ServicePageData } from "@/lib/types";

const data: ServicePageData = {
  meta: {
    title: "PHP Developer — Hire Expert PHP Web Developers",
    description: "Hire PHP developers for Laravel apps, WordPress plugins, e-commerce platforms, and legacy PHP modernisation. Clean, tested, modern PHP 8.",
  },
  hero: {
    eyebrow: "PHP Development",
    heading: "PHP Developers Who Write Modern, Clean Code",
    lead: "We build scalable web applications, APIs, and CMS solutions with PHP 8, Laravel, and Symfony — properly tested and maintained.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "PHP Developer" }],
    marqueeItems: ["PHP 8.3","Laravel","WordPress","MySQL","Redis","Composer","PHPUnit","WooCommerce","Magento","CodeIgniter"],
    stats: [{ value: "60+", label: "PHP Projects" }, { value: "8yr+", label: "PHP Expertise" }, { value: "PHP 8", label: "Modern Standards" }],
  },
  services: {
    variant: "svc",
    eyebrow: "What We Build",
    heading: "PHP Development Services",
    items: [
      { icon: "🏗️", title: "Laravel Applications", desc: "Full-stack apps, APIs, and admin panels with Laravel." },
      { icon: "🌐", title: "WordPress Development", desc: "Custom themes, plugins, and WooCommerce extensions." },
      { icon: "🛒", title: "E-Commerce", desc: "WooCommerce, Magento, and custom PHP shop solutions." , tags: ["Magento 2","WooCommerce"]},
      { icon: "🔄", title: "Legacy Modernisation", desc: "Upgrade PHP 5/7 codebases to PHP 8 with modern patterns." },
      { icon: "🔌", title: "API Development", desc: "REST and GraphQL APIs with Laravel or Symfony." , tags: ["REST","JWT"]},
      { icon: "🧩", title: "CMS Platforms", desc: "WordPress, Drupal, Craft CMS — build and extend." },
    ],
  },
  capabilities: {
    eyebrow: "Technical Depth",
    heading: "PHP Capabilities",
    dark: true,
    items: [
      { icon: "🏗️", title: "Laravel 11", desc: "Eloquent ORM, Queues, Sanctum, Telescope, Octane." },
      { icon: "🎭", title: "Symfony Components", desc: "Dependency injection, routing, forms, and security." },
      { icon: "🛒", title: "WooCommerce", desc: "Custom product types, payment gateways, REST API." },
      { icon: "📘", title: "PHP 8 Features", desc: "Typed properties, match expressions, fibers, enums." },
      { icon: "🧪", title: "Testing", desc: "PHPUnit, Pest, Laravel Dusk for browser automation." },
      { icon: "🐳", title: "DevOps", desc: "Docker, Nginx, PHP-FPM, and Forge/Ploi deployments." },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "Our PHP Development Process",
    steps: [
      { title: "Architecture Review", desc: "Assess existing code, choose framework, design domain model." },
      { title: "Feature Development", desc: "TDD with PHPUnit/Pest, clean service classes and DTOs." },
      { title: "QA & Security", desc: "Static analysis with PHPStan, OWASP checks, pen testing." },
      { title: "Deploy & Scale", desc: "Zero-downtime deploys, queue workers, cache warming." },
    ],
  },
  stack: {
    eyebrow: "Technology Stack",
    heading: "PHP Ecosystem We Use",
    cols: [
      { head: "Frameworks", items: ["Laravel 11", "Symfony 7", "Slim", "WordPress"] },
      { head: "Databases", items: ["MySQL", "PostgreSQL", "Redis", "Elasticsearch"] },
      { head: "Tools", items: ["PHPStan", "Pest", "PHPUnit", "Laravel Horizon"] },
      { head: "Infra", items: ["Docker", "Nginx", "Forge", "AWS EC2"] },
    ],
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Why Digital Web Weaver for PHP?",
    dark: true,
    items: [
      { icon: "📘", title: "PHP 8 Experts", desc: "We use modern PHP features — no legacy coding patterns." },
      { icon: "🧪", title: "Test-Driven", desc: "Every feature built test-first with Pest or PHPUnit." },
      { icon: "🔒", title: "OWASP Compliant", desc: "SQL injection, XSS, CSRF protection as standard." },
      { icon: "🚀", title: "Performance Focus", desc: "Opcache, Redis caching, query optimisation on every project." },
    ],
  },
  faq: {
    heading: "PHP Developer FAQ",
    items: [
      { q: "Laravel or Symfony for my project?", a: "Laravel for rapid development with a rich ecosystem. Symfony when you need a decoupled, enterprise-grade component-based architecture." },
      { q: "Can you modernise our old PHP 5 codebase?", a: "Yes — we've upgraded numerous legacy codebases to PHP 8 with modern tooling. We do it incrementally to reduce risk." },
      { q: "Do you build WordPress plugins?", a: "Absolutely — custom plugins, WooCommerce extensions, REST API integrations, and multisite setups." },
      { q: "What's your PHP project timeline?", a: "A Laravel API with auth and CRUD takes 2–3 weeks. Full-featured web application typically 2–5 months." },
    ],
  },
  cta: { eyebrow: "Start hiring", heading: "Ready to hire a PHP developer?", body: "Get 2–3 matched PHP engineer profiles within 48 hours. No recruitment fee, no long-term lock-in.", primaryCta: { label: "Get matched now ↗", href: "/contact/" }, secondaryCta: { label: "See our work", href: "/portfolio/" }, meta: ["Senior engineers only", "48-hour matching", "14-day free replacement"] },
  testimonials: [
    { text: "The Laravel developer we hired rewrote our multi-tenant billing module in eight weeks. The code is clean, the tests are comprehensive, and our CTO actually enjoyed reading the pull requests. That's rare.", name: "Priya K.", role: "CTO · BuildrSaaS · India", initials: "PK" },
    { text: "We needed someone who understood WooCommerce at the hooks and filters level, not just the admin UI. The developer they matched us with had shipped three custom payment gateways before. Exactly what we needed.", name: "James R.", role: "Head of Engineering · ShopEdge · Australia", initials: "JR" },
    { text: "Our WordPress site was loading in 7 seconds. The PHP engineer they sent identified three N+1 query issues within a day and had us under 800ms by the end of the week. The improvement was dramatic and measurable.", name: "Aisha N.", role: "Product Lead · MediaPulse · UK", initials: "AN" },
  ]

};
export default data;
