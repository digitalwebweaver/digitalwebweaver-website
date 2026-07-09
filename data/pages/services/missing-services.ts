import type { ServicePageData } from "@/lib/types";

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM SOFTWARE DEVELOPMENT
// Target: "custom software development company India", "bespoke software"
// Differentiator vs /web-development/: focus on replacing off-the-shelf tools,
// business-process-specific builds, not just websites or apps
// ─────────────────────────────────────────────────────────────────────────────
export const customSoftwareDevelopment: ServicePageData = {
  meta: {
    title: "Custom Software Development Company India | ERP & CRM",
    description:
      "Custom software development company in India. We build bespoke ERP, CRM, portals, and SaaS that fit your workflow exactly. Fixed price, senior engineers only.",
  },
  prose: {
    eyebrow: "Bespoke Software",
    heading: "A custom software development company India teams trust to replace off-the-shelf tools",
    blocks: [
      { p: ["As a custom software development company India businesses turn to when generic products stop fitting, we build systems for teams that have outgrown spreadsheets, disconnected SaaS subscriptions, and rigid ", { text: "off-the-shelf ERP and CRM tools", href: "/crm-erp-systems/" }, ". This service is for founders and operations leaders who need software shaped around their exact workflow — not a packaged product they have to bend their team around. What makes our approach different is scope discipline: we map your real processes, including the edge cases and exceptions that vendors ignore, then commit to a fixed price before a line of code is written. Every project is staffed with senior engineers only, and you own the source code, database, and IP outright."] },
      { h3: "When bespoke beats buying", p: ["Custom software earns its cost when your process is non-standard or depends on deep integration. We build systems around how your sales, inventory, and finance teams actually work, then connect them to the tools you already run — Tally, Zoho, WhatsApp, payment gateways, and GST portals — consolidating everything into one source of truth. For products aimed at your own customers, that same engineering extends into ", { text: "multi-tenant SaaS platforms", href: "/saas-development/" }, " with subscription billing and role-based access, or ", { text: "complex web applications and portals", href: "/web-application-development/" }, " where clients, partners, and dealers log in to transact. The goal is always the same: replace manual work and fragmented subscriptions with software you fully control."] },
      { h3: "India base, global delivery", p: ["We work from Vadodara and deliver to clients across India, the UK, South Africa, and Ivory Coast, building on a stack we choose for the job — Laravel and PostgreSQL for data-heavy back ends, React and Node.js for the interface, deployed to infrastructure you own. If you need to validate an idea first, we can ship a lean MVP before committing to a full build; if you are replacing an ageing system, we migrate your data with zero downtime and train your team through go-live. Every engineer on your project has years of production experience, so you get maintainable code and honest timelines rather than surprises. ", { text: "Tell us what your business needs", href: "/contact/" }, " and we will scope it, or see the kind of ", { text: "systems we have already built", href: "/portfolio/" }, "."] },
    ],
  },
  hero: {
    eyebrow: "Custom Software Development",
    heading: "Bespoke Software Built Around Your Business",
    lead:
      "Off-the-shelf software forces your business into someone else's workflow. We build custom software that fits yours — from ERP systems and internal tools to client portals and full SaaS products.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Custom Software Development" },
    ],
    marqueeItems: [
      "Custom ERP",
      "CRM Systems",
      "Business Portals",
      "Workflow Automation",
      "Internal Tools",
      "SaaS Products",
      "API Integration",
      "Data Dashboards",
      "Legacy Replacement",
      "Process Automation",
      "Multi-user Systems",
      "Role-based Access",
    ],
    stats: [
      { value: "200+", label: "Custom Systems Built" },
      { value: "Senior", label: "Engineers Only" },
      { value: "Fixed", label: "Price Guaranteed" },
    ],
    formVariant: "service",
    formTag: "Custom Software",
    formHeading: "Describe your custom software need",
    formSub: "Free scoping call. Fixed-price estimate within 48 hours.",
    formSubmitLabel: "Start the conversation",
  },
  services: {
    eyebrow: "What we build",
    heading: "Custom software for every layer of your business",
    items: [
      {
        title: "Custom ERP Systems",
        desc: "Purpose-built enterprise resource planning software for your specific operations — inventory, purchasing, production, finance, and HR — all in one system you actually own.",
        tags: ["Laravel", "PostgreSQL", "Multi-module", "Role-based access"],
      },
      {
        title: "CRM & Sales Platforms",
        desc: "Customer relationship management systems built around your sales process — lead tracking, pipeline management, quotation, follow-up automation, and reporting.",
        tags: ["Custom CRM", "Email automation", "Pipeline", "Reporting"],
      },
      {
        title: "Internal Tools & Admin Dashboards",
        desc: "Operations dashboards, back-office tools, and internal platforms that replace spreadsheets and email threads — with proper permissions, audit logs, and data integrity.",
        tags: ["React", "Node.js", "RBAC", "Audit logs"],
      },
      {
        title: "Client & Partner Portals",
        desc: "Branded portals where your clients, partners, or dealers can log in, view their data, place orders, track progress, and raise support requests — reducing your team's manual workload.",
        tags: ["Secure login", "Real-time data", "Notifications", "File uploads"],
      },
      {
        title: "Workflow & Process Automation",
        desc: "Software that automates your manual processes — approval workflows, document generation, status notifications, data sync between systems, and scheduled reporting.",
        tags: ["BPM", "API integration", "Webhooks", "Scheduled jobs"],
      },
      {
        title: "Legacy System Replacement",
        desc: "Modern replacements for ageing software — Access databases, Excel workflows, old PHP systems, or unsupported desktop applications — migrated with your data intact.",
        tags: ["Data migration", "Modern stack", "Zero-downtime", "Training"],
      },
    ],
    variant: "card",
  },
  capabilities: {
    eyebrow: "How we approach it",
    heading: "Why custom software is often the right decision",
    dark: true,
    items: [
      {
        title: "You own it completely",
        desc: "Custom software is an asset, not a subscription. No per-seat fees, no vendor lock-in, no feature requests to a roadmap you can't influence. The code belongs to you.",
      },
      {
        title: "Built for your exact workflow",
        desc: "Off-the-shelf tools are built for the average company. Your company isn't average. Custom software is built around how your team actually works — not how a software vendor thinks you should.",
      },
      {
        title: "Grows as you grow",
        desc: "We architect for scale from day one. Add modules, users, integrations, and features without switching systems — your software evolves with your business.",
      },
      {
        title: "Integrates with everything",
        desc: "Custom software can connect to any tool you already use — Tally, Zoho, WhatsApp, payment gateways, logistics APIs, GST portals — building a single source of truth.",
      },
      {
        title: "Security you control",
        desc: "Your data stays on your infrastructure. No third-party SaaS storing your customer data, business data, or trade secrets on servers you don't control.",
      },
      {
        title: "Total cost of ownership",
        desc: "At scale, custom software almost always costs less per year than SaaS subscriptions. A ₹5L custom system often replaces ₹1.5L/year in SaaS fees — payback in under 4 years.",
      },
    ],
  },
  process: {
    eyebrow: "How we work",
    heading: "Our custom software development process",
    steps: [
      {
        title: "Discovery & requirements",
        desc: "We map your business processes, interview stakeholders, document user roles, and define the exact scope — including edge cases and exceptions that off-the-shelf tools miss.",
      },
      {
        title: "Architecture & design",
        desc: "We design the data model, system architecture, and user experience before writing a line of code. You see and approve the blueprint — avoiding expensive rework later.",
      },
      {
        title: "Iterative development",
        desc: "We build in 2-week sprints with working software at each milestone. You review, test, and provide feedback on real functionality — not mockups.",
      },
      {
        title: "Testing & launch",
        desc: "Full QA including edge cases, load testing, and user acceptance testing. We deploy with your team, train users, and stay available during go-live.",
      },
      {
        title: "Ongoing support",
        desc: "Post-launch maintenance, bug fixes, performance monitoring, and feature additions on a monthly retainer — or ad-hoc when you need us.",
      },
    ],
  },
  why: {
    eyebrow: "Why Digital Web Weaver",
    heading: "Senior custom software engineers, not generalists",
    dark: true,
    items: [
      {
        title: "We've built 200+ custom systems",
        desc: "ERP, CRM, HRMS, portals, trading platforms, healthcare records, logistics systems, and more. Across manufacturing, trading, healthcare, fintech, and education. We've likely built something similar to what you need.",
      },
      {
        title: "Fixed-price contracts",
        desc: "We scope carefully and give you a fixed price. Not an estimate range — a fixed number. If we underestimate, we absorb it. You never get a bill for 'extra time'.",
      },
      {
        title: "No junior developers",
        desc: "Every engineer on your project has 5+ years of experience building production systems. Senior engineers make fewer mistakes, write maintainable code, and deliver on time.",
      },
      {
        title: "You own everything",
        desc: "Source code, database, IP, documentation — all yours on day one. No licensing fees, no vendor dependency, no negotiation if you want to move to a different team.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Custom software development questions",
    items: [
      {
        q: "How much does custom software development cost in India?",
        a: "Custom software costs depend heavily on scope. A simple internal tool or admin panel starts from ₹80,000–₹1.5L. A mid-complexity system (custom CRM, dealer portal, inventory system) typically costs ₹2L–₹8L. A full ERP or multi-module platform costs ₹8L–₹25L+. We provide a detailed, itemised fixed-price quote after a free scoping call.",
      },
      {
        q: "How long does it take to build custom software?",
        a: "A simple tool or dashboard takes 6–10 weeks. A medium-complexity system takes 3–5 months. A full ERP or complex platform takes 6–12 months. Timeline depends on scope, integrations, and how quickly you can provide feedback during development.",
      },
      {
        q: "Should we build custom or buy off-the-shelf software?",
        a: "Buy off-the-shelf if a product fits your process well (e.g. standard accounting — use Tally/Zoho). Build custom if: your process is non-standard, you need deep integration with other systems, you'll exceed SaaS per-seat costs within 3 years, or competitive advantage depends on your workflow being different from competitors who use the same tool.",
      },
      {
        q: "Do you integrate custom software with existing tools like Tally, Zoho, or WhatsApp?",
        a: "Yes. We integrate with Tally ERP (via API or database), Zoho CRM/Books, WhatsApp Business API, payment gateways (Razorpay, PayU), GST portals, logistics APIs (Shiprocket, Delhivery), and most tools that expose an API. If a tool doesn't have a standard API, we can often build a connector.",
      },
      {
        q: "Who owns the source code and data?",
        a: "You do — completely. All source code, database schemas, documentation, and deployment scripts are handed over at the end of the project. We sign an IP assignment agreement before we start. No ongoing licensing fees, no vendor lock-in.",
      },
    ],
  },
  related: [
    { label: "CRM & ERP Systems", href: "/crm-erp-systems/", desc: "Custom CRM and ERP systems for sales, inventory, HR, and finance." },
    { label: "Web Application Development", href: "/web-application-development/", desc: "Complex web portals, dashboards, and multi-user business applications." },
    { label: "SaaS Development", href: "/saas-development/", desc: "Turn your custom software into a scalable, multi-tenant SaaS product." },
    { label: "Hire a Laravel Developer", href: "/laravel-developer/", desc: "Senior Laravel PHP engineers for custom backend development." },
  ],
  cta: {
    eyebrow: "Let's scope your project",
    heading: "Tell us what your business needs — we'll build it",
    body: "Free scoping call. Fixed-price quote within 48 hours. Senior engineers on every project.",
    primaryCta: { label: "Book a free scoping call ↗", href: "/contact/" },
    secondaryCta: { label: "View custom software projects", href: "/portfolio/" },
    meta: ["Fixed price", "You own the code", "Senior engineers only"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// WEBSITE DEVELOPMENT
// Target: "website development company India", "professional website development"
// Differentiator vs /web-development/: SME/business focus, affordability,
// speed, non-technical buyer language, marketing/branding angle
// ─────────────────────────────────────────────────────────────────────────────
export const websiteDevelopment: ServicePageData = {
  meta: {
    title: "Website Development Company India | Fast, Custom Sites",
    description:
      "Website development company in India. We build fast, custom business websites that rank on Google — no templates. Starting from ₹30,000, get a free quote.",
  },
  prose: {
    eyebrow: "Why it works",
    heading: "What to expect from a website development company in India that engineers, not assembles",
    blocks: [
      { p: ["As a website development company in India, we work mostly with founders and marketing leads who are tired of template sites that look generic and load slowly. What makes our approach different is that a business website is engineered, not assembled — every page is coded from an approved Figma design, tuned for a sub-two-second load, and structured so Google can read it from launch day. We are based in Vadodara and deliver for clients across India, the UK, South Africa, and Ivory Coast, which means your project is handled by senior people who treat a marketing site with the same rigour as a production application."] },
      { h3: "The same engineering discipline as our larger builds", p: ["Because we also handle heavier ", { text: "web development", href: "/web-development/" }, " — React, Next.js, and API-driven front ends — your website inherits that discipline: clean, maintainable code with no proprietary page-builder lock-in. When a content team needs to publish without touching code, we wire in a CMS, and for content-first sites we build custom ", { text: "WordPress without Elementor or bloated themes", href: "/wordpress-development/" }, ". That means the site you launch now can grow with the business instead of trapping you in a rebuild the moment your needs change."] },
      { h3: "Design, speed, and a site you actually own", p: ["Every build starts with real ", { text: "UI/UX design", href: "/ui-ux-design/" }, " rather than a stock layout, mapped to your brand and the way your customers actually buy — more than 70% of them on a phone. For businesses in Gujarat we also offer local ", { text: "web design in Vadodara", href: "/web-design-vadodara/" }, " with the on-page and technical SEO that helps you surface in nearby searches. You own the code, the CMS, and the domain outright, so changing developers is never a hostage situation. When you are ready, ", { text: "tell us what you need", href: "/contact/" }, " and we will send a fixed-price quote within 24 hours."] },
    ],
  },
  hero: {
    eyebrow: "Website Development",
    heading: "Website Development for Professional Websites That Win You Business",
    lead:
      "A great website is your best salesperson — working 24/7, building trust before the first call. We build custom business websites that look professional, load in under 2 seconds, and rank on Google.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Website Development" },
    ],
    marqueeItems: [
      "Business Websites",
      "Corporate Sites",
      "Landing Pages",
      "Portfolio Sites",
      "Service Websites",
      "Company Websites",
      "GST Invoicing Ready",
      "WhatsApp Integration",
      "Google Analytics",
      "SEO Optimised",
      "Mobile-First",
      "Fast Loading",
    ],
    stats: [
      { value: "150+", label: "Websites Launched" },
      { value: "< 2s", label: "Target Load Time" },
      { value: "3–5wk", label: "Typical Delivery" },
    ],
    formVariant: "service",
    formTag: "Website Development",
    formHeading: "Tell us about your website project",
    formSub: "Free consultation. Detailed quote within 24 hours.",
    formSubmitLabel: "Get a free quote",
  },
  services: {
    eyebrow: "Website types we build",
    heading: "The right website for every business type",
    items: [
      {
        title: "Business & Corporate Websites",
        desc: "Professional multi-page websites for established businesses — about us, services, team, testimonials, and contact — designed to build credibility and generate enquiries.",
        tags: ["Custom design", "CMS", "SEO", "Mobile-first"],
      },
      {
        title: "Service Business Websites",
        desc: "Lead-generation websites for consultants, agencies, clinics, law firms, and professional services — with enquiry forms, WhatsApp integration, and local SEO.",
        tags: ["Lead capture", "WhatsApp", "Google Maps", "Local SEO"],
      },
      {
        title: "Landing Pages & Campaign Sites",
        desc: "High-converting single-page or mini-sites for product launches, campaigns, and specific services — optimised for paid ads and organic search.",
        tags: ["Conversion focus", "A/B ready", "Fast load", "Analytics"],
      },
      {
        title: "Portfolio & Showcase Websites",
        desc: "Visually impressive portfolio websites for architects, designers, photographers, and creative businesses — with galleries, case studies, and contact flows.",
        tags: ["Visual focus", "Gallery", "Case studies", "Fast CDN"],
      },
      {
        title: "Informational & Directory Sites",
        desc: "Content-rich websites, directories, and resource hubs — with search functionality, category filtering, and CMS for ongoing content updates.",
        tags: ["CMS", "Search", "Filterable", "SEO content"],
      },
      {
        title: "Websites with Booking & Inquiry Systems",
        desc: "Business websites with integrated appointment booking, consultation scheduling, quotation request forms, and CRM connection — turning visitors into booked clients.",
        tags: ["Booking system", "CRM", "Notifications", "Calendar sync"],
      },
    ],
    variant: "card",
  },
  capabilities: {
    eyebrow: "What makes our websites different",
    heading: "Built for real business results — not just good looks",
    dark: true,
    items: [
      {
        title: "Custom design, no templates",
        desc: "Every website we build starts from scratch — your brand, your colours, your messaging. No themes, no Elementor, no recognisable template layouts that make you look like every other business.",
      },
      {
        title: "Loads in under 2 seconds",
        desc: "A slow website loses visitors and ranks lower on Google. Every website we build is performance-optimised — compressed images, clean code, CDN delivery, and Lighthouse score 90+.",
      },
      {
        title: "Ranks on Google from day one",
        desc: "Built with SEO best practices: structured data, meta tags, canonical URLs, sitemap, clean URL structure, and local SEO for Indian businesses. You won't need to rebuild it to rank.",
      },
      {
        title: "Works perfectly on every device",
        desc: "Over 70% of Indian internet users are on mobile. Every website we build is mobile-first — tested on real devices across screen sizes, not just resized in a browser window.",
      },
      {
        title: "You can update it yourself",
        desc: "We integrate a CMS (Sanity, WordPress, or Contentful) so your team can update content, add blog posts, and change images without touching code or calling us.",
      },
      {
        title: "Built to last",
        desc: "We write clean, maintainable code. No proprietary builders, no black-box plugins. If you ever want to change developers, any good engineer can pick up the work — no vendor lock-in.",
      },
    ],
  },
  process: {
    eyebrow: "How we build it",
    heading: "From brief to live website in 3–5 weeks",
    steps: [
      {
        title: "Discovery call",
        desc: "We understand your business, your audience, your competitors, and what you want the website to achieve — leads, credibility, e-commerce, or all three.",
      },
      {
        title: "Sitemap & wireframes",
        desc: "We plan the page structure, content flow, and user journey before designing. You approve the blueprint before we invest time in visual design.",
      },
      {
        title: "Design in Figma",
        desc: "Custom designs in Figma with your brand guidelines. You see the full website before a line of code is written. Two rounds of design revisions included.",
      },
      {
        title: "Development & content",
        desc: "We build in Next.js or WordPress, integrate your content, set up forms, analytics, and CMS. Staged on a preview URL for your review before launch.",
      },
      {
        title: "Launch & handover",
        desc: "We deploy to your domain, submit to Google Search Console, test on real devices, and walk you through the CMS. You're live and in control.",
      },
    ],
  },
  why: {
    eyebrow: "Why Digital Web Weaver",
    heading: "Websites that make your business look like it deserves to win",
    dark: true,
    items: [
      {
        title: "Senior designers and developers",
        desc: "Your website is built by professionals with 5+ years of experience — not a junior web designer working from a template. The quality difference is immediately visible.",
      },
      {
        title: "Fixed price, no hidden costs",
        desc: "We quote a fixed price upfront. No 'extra costs for revisions', no surprise hosting bills, no add-on fees. The price we quote is the price you pay.",
      },
      {
        title: "Fast delivery",
        desc: "Most business websites launch in 3–5 weeks. We've helped clients go from brief to live in 10 days for urgent projects. We move at business speed.",
      },
      {
        title: "Based in India, built for India",
        desc: "We understand Indian business contexts — GST invoicing, Razorpay, WhatsApp integration, local SEO, Hindi/Gujarati language support, and the Indian mobile internet experience.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Website development questions",
    items: [
      {
        q: "How much does a business website cost in India?",
        a: "A professional 5–8 page business website with custom design costs ₹30,000–₹70,000. A corporate website with 15–25 pages, CMS, and advanced features costs ₹70,000–₹1.5L. E-commerce websites start from ₹80,000. We give a fixed quote after a free discovery call — no vague 'starting from' ranges.",
      },
      {
        q: "How long does it take to build a website?",
        a: "A standard business website takes 3–5 weeks from kickoff to launch. An e-commerce site takes 5–8 weeks. Complex portals or large corporate sites take 8–14 weeks. Timeline depends on how quickly you can provide content (text, images, logo) and feedback on designs.",
      },
      {
        q: "Will my website rank on Google?",
        a: "We build with SEO best practices built in — proper meta tags, structured data (JSON-LD), canonical URLs, sitemap.xml, robots.txt, fast loading speed, and mobile optimisation. These are the technical foundations. Ranking for competitive keywords also requires ongoing content and link-building — we can advise on a strategy after launch.",
      },
      {
        q: "Do I need to provide content, or will you write it?",
        a: "We can do either. If you have existing content, we'll structure and optimise it for the web. If you need content written, we can write it based on a brief you provide about your business and services — for an additional cost. Most clients provide their own content and we polish and structure it.",
      },
      {
        q: "Can you redesign or improve my existing website?",
        a: "Yes. We offer full redesigns (keeping your domain and content, rebuilding the design and structure) and incremental improvements (adding pages, improving speed, fixing SEO issues). We'll review your current site and recommend whether a redesign or targeted improvements makes more sense.",
      },
    ],
  },
  related: [
    { label: "Web Development", href: "/web-development/", desc: "Technical web engineering — React, Next.js, APIs, and full-stack development." },
    { label: "WordPress Development", href: "/wordpress-development/", desc: "Custom WordPress themes and WooCommerce stores built without page builders." },
    { label: "UI/UX Design", href: "/ui-ux-design/", desc: "Research-led product design — wireframes, prototypes, and design systems." },
    { label: "Web Design Vadodara", href: "/web-design-vadodara/", desc: "Local web design services for Vadodara and Gujarat businesses." },
  ],
  cta: {
    eyebrow: "Let's build your website",
    heading: "Get a professional website that works as hard as you do",
    body: "Free consultation. Custom design. Fixed price. Launched in 3–5 weeks.",
    primaryCta: { label: "Get a free quote ↗", href: "/contact/" },
    secondaryCta: { label: "See our website work", href: "/portfolio/" },
    meta: ["Custom design", "3–5 week delivery", "Fixed price"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// WEB APPLICATION DEVELOPMENT
// Target: "web application development company India", "web app development"
// Differentiator vs /web-development/: focus on complex apps (portals, dashboards,
// multi-user systems, business logic) not marketing sites
// ─────────────────────────────────────────────────────────────────────────────
export const webApplicationDevelopment: ServicePageData = {
  meta: {
    title: "Web Application Development Company | India & Global",
    description:
      "Web application development company in India. We build SaaS platforms, dashboards, and enterprise web apps with senior engineers at a fixed price.",
  },
  prose: {
    eyebrow: "Web Application Development",
    heading: "A web application development company built for real business complexity",
    blocks: [
      { p: ["As a web application development company based in Vadodara, we build the software layer where your business logic actually lives — multi-tenant platforms, role-based portals, and data-heavy dashboards, not brochure sites. This service is for founders and operations teams whose product or internal system has outgrown a simple website and now needs authentication, real workflows, and the ability to scale. Our differentiator is senior-only staffing and architecture discipline: we design for the load you will carry in two years — proper database indexing, caching layers, and horizontal scaling — before a line of code is written, then commit to a fixed price on a defined scope."] },
      { h3: "Engineering for genuine complexity", p: ["The applications we ship handle permissions, concurrency, and security the way production actually demands. We build ", { text: "multi-tenant SaaS platforms", href: "/saas-development/" }, " with subscription billing and feature flags, and connect them to the wider ecosystem through ", { text: "REST and GraphQL API backends", href: "/services/api-development/" }, ". Real-time features — live dashboards, notifications, collaborative editing — run on WebSockets and Redis pub/sub. Our engineers work across React and Node.js on the front and back end, with Python and PostgreSQL behind data-intensive tools, and OWASP-aligned validation, structured logging, and Sentry error tracking configured before launch rather than bolted on afterwards."] },
      { h3: "India base, global delivery", p: ["We work from India and deliver to clients across the UK, South Africa, and Ivory Coast, deploying to cloud infrastructure you own — AWS, GCP, or Azure — with ", { text: "CI/CD pipelines and staging environments", href: "/cloud-devops/" }, " in place from the first sprint. If you are still validating the idea, we can ship a ", { text: "lean MVP in a matter of weeks", href: "/mvp-development/" }, " before committing to the full build; if you are inheriting an ageing codebase, we start with an audit and extend rather than rewrite. Every project is staffed with senior engineers and a direct line to the person building it — no layers, no finger-pointing. ", { text: "Tell us what you are planning to build", href: "/contact/" }, " and we will review the architecture with you."] },
    ],
  },
  hero: {
    eyebrow: "Web Application Development",
    heading: "Complex Web Applications Built by Senior Engineers",
    lead:
      "From multi-tenant SaaS platforms and business portals to real-time dashboards and enterprise applications — we design, build, and deploy web applications that handle real business complexity at scale.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Web Application Development" },
    ],
    marqueeItems: [
      "SaaS Platforms",
      "Business Portals",
      "Admin Dashboards",
      "Multi-user Systems",
      "Real-time Apps",
      "Enterprise Software",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "Role-based Access",
      "Data-heavy Apps",
      "Workflow Engines",
    ],
    stats: [
      { value: "100+", label: "Web Apps Shipped" },
      { value: "Multi-tenant", label: "SaaS Architecture" },
      { value: "Senior", label: "Engineers Only" },
    ],
    formVariant: "service",
    formTag: "Web App Development",
    formHeading: "Describe your web application",
    formSub: "Free technical consultation. Architecture review included.",
    formSubmitLabel: "Get a technical review",
  },
  services: {
    eyebrow: "What we build",
    heading: "Web applications for every level of complexity",
    items: [
      {
        title: "SaaS Platform Development",
        desc: "Multi-tenant SaaS products with subscription billing, team management, feature flags, onboarding flows, and the infrastructure to grow from 10 to 100,000 users without a rewrite.",
        tags: ["Multi-tenant", "Stripe billing", "SSO", "Feature flags"],
      },
      {
        title: "Business Portals & Dashboards",
        desc: "Secure portals for your clients, partners, dealers, or employees — with role-based access, real-time data, document management, and workflow automation.",
        tags: ["RBAC", "Real-time", "Secure", "Notifications"],
      },
      {
        title: "Enterprise Web Applications",
        desc: "Large-scale applications for enterprise teams — complex business logic, approval workflows, audit trails, reporting engines, and integrations with existing enterprise systems.",
        tags: ["Enterprise-grade", "LDAP/SSO", "Audit logs", "ERP integration"],
      },
      {
        title: "Data-Intensive Applications",
        desc: "Reporting tools, analytics dashboards, data ingestion pipelines, and data visualisation platforms — handling millions of records with sub-second query response times.",
        tags: ["PostgreSQL", "Redis", "Charts", "Export to Excel/PDF"],
      },
      {
        title: "Real-time & Collaborative Apps",
        desc: "Applications with live updates — chat, notifications, collaborative editing, live tracking, and real-time status boards — using WebSockets and event-driven architecture.",
        tags: ["WebSockets", "Socket.io", "Redis Pub/Sub", "Live updates"],
      },
      {
        title: "API Platforms & Integrations",
        desc: "REST and GraphQL API backends, webhook systems, third-party integration platforms, and middleware that connects your web app to the rest of your technology ecosystem.",
        tags: ["REST", "GraphQL", "Webhooks", "OAuth 2.0"],
      },
    ],
    variant: "card",
  },
  capabilities: {
    eyebrow: "Technical depth",
    heading: "Built for production, not just demos",
    dark: true,
    items: [
      {
        title: "Scalable architecture from day one",
        desc: "We design for the load you'll have in two years, not just today. Proper database indexing, connection pooling, caching layers, and horizontal scaling — so growth doesn't mean rewriting.",
      },
      {
        title: "Security by design",
        desc: "Authentication, authorisation, input validation, SQL injection prevention, CSRF protection, rate limiting, and OWASP compliance baked in — not added as an afterthought.",
      },
      {
        title: "Observability built in",
        desc: "Structured logging, error tracking (Sentry), performance monitoring, and alerting configured before launch — so you know about problems before users do.",
      },
      {
        title: "Tested and maintainable",
        desc: "Unit tests, integration tests, and end-to-end tests for critical paths. Clean architecture that a developer joining your team 2 years from now can understand without a 3-month onboarding.",
      },
      {
        title: "CI/CD from the start",
        desc: "Automated deployment pipelines with staging environments, branch previews, automated testing gates, and one-click production releases — shipping safely and frequently.",
      },
      {
        title: "You own the infrastructure",
        desc: "Deployed to your AWS/GCP/Azure account. No proprietary hosting, no shared resources, no dependency on our infrastructure. Your application, your data, your control.",
      },
    ],
  },
  process: {
    eyebrow: "How we work",
    heading: "From architecture to production in structured phases",
    steps: [
      {
        title: "Technical discovery",
        desc: "We understand your functional requirements, integration needs, user roles, data models, and non-functional requirements (performance, security, compliance) before any design.",
      },
      {
        title: "Architecture design",
        desc: "System design document: tech stack decisions, data model, API contracts, third-party integrations, and infrastructure plan. You review and approve before development begins.",
      },
      {
        title: "Sprint development",
        desc: "2-week sprints with working, tested software at each milestone. Deployed to staging for your review. No big-bang delivery — continuous progress you can see and test.",
      },
      {
        title: "QA & hardening",
        desc: "Load testing, security review, end-to-end test suite, browser compatibility, and edge case testing before any production release.",
      },
      {
        title: "Launch & handover",
        desc: "Production deployment, monitoring setup, documentation handover, and a 30-day post-launch support period to address any issues that emerge in real-world use.",
      },
    ],
  },
  why: {
    eyebrow: "Why Digital Web Weaver",
    heading: "Senior web application engineers who've seen it all",
    dark: true,
    items: [
      {
        title: "100+ web applications shipped",
        desc: "We've built everything from 2-person startup MVPs to 50,000-user enterprise platforms. We know the pitfalls, the architectural decisions that age poorly, and how to avoid them.",
      },
      {
        title: "Full-stack ownership",
        desc: "We take end-to-end responsibility — frontend, backend, database, infrastructure, and deployment. One team. No finger-pointing between 'frontend' and 'backend' when something breaks.",
      },
      {
        title: "Fixed price on defined scope",
        desc: "After a thorough discovery, we commit to a fixed price. For evolving scope, we offer time-and-materials sprints — always with full transparency on what's being built and what it costs.",
      },
      {
        title: "Transparent communication",
        desc: "Weekly progress reports, staging deployments every sprint, and a direct line to the senior engineer on your project. No project managers creating distance between you and the people building your product.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Web application development questions",
    items: [
      {
        q: "What is the difference between a website and a web application?",
        a: "A website is primarily informational — it presents content (about us, services, contact). A web application has business logic: users log in, interact with data, perform actions, and see personalised content. Examples: a SaaS dashboard, a client portal, an order management system, or a booking platform.",
      },
      {
        q: "How much does web application development cost in India?",
        a: "A simple web app (CRUD operations, user auth, basic workflows) costs ₹2L–₹5L. A medium-complexity app (multi-tenant, complex business logic, integrations) costs ₹5L–₹15L. A complex enterprise application or SaaS platform costs ₹15L–₹50L+. We provide a fixed-price quote after a detailed technical discovery session.",
      },
      {
        q: "How long does it take to build a web application?",
        a: "A simple web app takes 3–5 months. A medium-complexity product takes 5–9 months. An enterprise application takes 9–18 months. Timelines are driven by complexity, integration needs, and the feedback cycle speed. We can also build an MVP in 8–12 weeks if you want to validate the product concept first.",
      },
      {
        q: "What tech stack do you use for web applications?",
        a: "We choose the stack based on requirements, not preference. Most commonly: React or Next.js (frontend), Node.js/Express or Python/Django/FastAPI (backend), PostgreSQL or MySQL (database), Redis (caching), AWS or GCP (infrastructure). For real-time features, we add WebSockets. For background jobs, we use queues (Bull, Celery). We'll recommend the right stack for your specific needs.",
      },
      {
        q: "Can you build on top of our existing web application?",
        a: "Yes. We regularly take over existing codebases — inheriting a React/Node.js app, a PHP/Laravel system, or a Python/Django application. We start with a code audit to understand what we're working with, then plan whether to extend, refactor, or incrementally replace problem areas. We don't recommend rewrites unless genuinely necessary.",
      },
    ],
  },
  related: [
    { label: "Web Development", href: "/web-development/", desc: "Full-spectrum web engineering — marketing sites, APIs, and performance-first builds." },
    { label: "SaaS Development", href: "/saas-development/", desc: "Multi-tenant SaaS platforms with Stripe billing, SSO, and growth analytics." },
    { label: "Custom Software Development", href: "/custom-software-development/", desc: "Bespoke software for business-specific processes — ERP, CRM, portals." },
    { label: "Hire a React Developer", href: "/react-developer/", desc: "Senior React engineers for complex frontend web application development." },
  ],
  cta: {
    eyebrow: "Let's design your application",
    heading: "Tell us what your web application needs to do",
    body: "Free technical consultation. Architecture review included. Fixed-price estimate within 48 hours.",
    primaryCta: { label: "Book a technical review ↗", href: "/contact/" },
    secondaryCta: { label: "See our web app work", href: "/portfolio/" },
    meta: ["Free architecture review", "Senior engineers", "Fixed price"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// WORDPRESS DEVELOPMENT
// Target: "wordpress development company India", "wordpress developer India"
// Differentiator: CMS/content focus, WooCommerce, headless WP, custom plugins
// ─────────────────────────────────────────────────────────────────────────────
export const wordpressDevelopment: ServicePageData = {
  meta: {
    title: "WordPress Development Company India | Custom Themes",
    description:
      "WordPress development company in India. Custom WordPress sites, WooCommerce stores, and headless builds — no templates, no page builders, ever.",
  },
  prose: {
    eyebrow: "Why it works",
    heading: "What you get from a WordPress development company in India that codes themes by hand",
    blocks: [
      { p: ["As a WordPress development company in India, we work with founders, marketing teams, and agencies who are done fighting slow, plugin-heavy sites and want WordPress built the way an engineer would build it. The differentiator is simple: no Divi, no Elementor, no ThemeForest template. Every theme is hand-coded in OOP PHP with custom Gutenberg blocks, so your editors can publish freely while the front end stays lean enough to clear 90+ on Core Web Vitals. We are based in Vadodara and deliver for clients across India, the UK, South Africa, and Ivory Coast, with senior developers on every project rather than juniors assembling page builders."] },
      { h3: "WooCommerce, custom plugins, and headless when it fits", p: ["Most of our WordPress work splits into three shapes. For stores, we build ", { text: "WooCommerce and wider ecommerce systems", href: "/ecommerce-development/" }, " with Razorpay, PayU, and Stripe checkout, GST-compliant invoicing, and custom product types instead of a pile of paid add-ons. When the plugin directory has nothing that fits, we write purpose-built plugins in clean, secure code. And when the front end needs to be faster than PHP templating allows, we run WordPress headless as a CMS behind a Next.js or React app — the same ", { text: "modern web development", href: "/web-development/" }, " stack we use on our larger builds, powered by the WP REST API or WPGraphQL."] },
      { h3: "Fast, secure, and yours to keep", p: ["Speed is treated as an engineering requirement, not a plugin you install and hope for. We handle image optimisation, critical CSS, deferred JavaScript, caching, and CDN setup as part of the build, and offer standalone ", { text: "performance and Core Web Vitals work", href: "/services/performance-optimization/" }, " for slow or compromised sites that need rescuing. Security is hardened the same way — minimal plugins, forced 2FA, locked-down permissions, and a documented, commented codebase any developer can pick up in an afternoon. You own the theme, the code, and the hosting outright. When you are ready, ", { text: "tell us about your WordPress project", href: "/contact/" }, " and we will send an honest estimate within 24 hours."] },
    ],
  },
  hero: {
    eyebrow: "WordPress Development",
    heading: "Custom WordPress Development — No Templates, No Shortcuts",
    lead:
      "WordPress powers 43% of the web because it works. We build custom WordPress websites, WooCommerce stores, and headless WordPress applications that are fast, secure, and built to scale — not patched together from third-party plugins.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "WordPress Development" },
    ],
    marqueeItems: [
      "WordPress",
      "WooCommerce",
      "Custom Themes",
      "Custom Plugins",
      "Headless WP",
      "Block Editor",
      "ACF Pro",
      "Multisite",
      "REST API",
      "Performance Audit",
      "Security Hardening",
      "WP Maintenance",
    ],
    stats: [
      { value: "80+", label: "WordPress Projects" },
      { value: "Custom", label: "Themes Only" },
      { value: "90+", label: "Lighthouse Score" },
    ],
    formVariant: "service",
    formTag: "WordPress Development",
    formHeading: "Tell us about your WordPress project",
    formSub: "Free consultation. Estimate within 24 hours.",
    formSubmitLabel: "Get a free quote",
  },
  services: {
    eyebrow: "What we build",
    heading: "Full-spectrum WordPress development",
    items: [
      {
        title: "Custom WordPress Websites",
        desc: "Business websites built on a custom WordPress theme — no Divi, no Elementor, no page builder bloat. Hand-coded themes that load fast, rank well, and are easy to maintain.",
        tags: ["Custom theme", "Block editor", "ACF", "SEO-ready"],
      },
      {
        title: "WooCommerce Stores",
        desc: "E-commerce stores built on WooCommerce with custom product types, payment gateways (Razorpay, PayU, Stripe), GST invoicing, and the specific features your store needs.",
        tags: ["WooCommerce", "Razorpay", "GST", "Custom checkout"],
      },
      {
        title: "Custom WordPress Plugins",
        desc: "Purpose-built WordPress plugins for features that don't exist in the plugin directory — or to replace bloated paid plugins with lean, secure, purpose-built code.",
        tags: ["OOP PHP", "WordPress hooks", "REST API", "Secure"],
      },
      {
        title: "Headless WordPress",
        desc: "WordPress as a CMS powering a Next.js or React frontend — combining WordPress's content management flexibility with a modern, blazing-fast frontend.",
        tags: ["WP REST API", "GraphQL (WPGraphQL)", "Next.js", "ISR"],
      },
      {
        title: "WordPress Multisite",
        desc: "Multi-site WordPress networks for agencies, franchises, and businesses managing content across multiple domains from a single WordPress installation.",
        tags: ["Multisite network", "Shared themes", "Subdomain/subfolder"],
      },
      {
        title: "WordPress Performance & Security",
        desc: "Speed audits, image optimisation, plugin cleanup, caching configuration, security hardening, malware removal, and hosting migration for slow or compromised WordPress sites.",
        tags: ["Core Web Vitals", "CDN", "Security scan", "Plugin audit"],
      },
    ],
    variant: "card",
  },
  capabilities: {
    eyebrow: "Why our WordPress sites are different",
    heading: "WordPress done right — not done fast",
    dark: true,
    items: [
      {
        title: "No page builders",
        desc: "Elementor, Divi, and Visual Composer add massive bloat — 200+ database queries per page, megabytes of unused CSS, and chronic performance problems. We write clean, hand-coded themes.",
      },
      {
        title: "Minimal plugin philosophy",
        desc: "Most WordPress security issues come from poorly maintained plugins. We use as few plugins as possible, prefer well-maintained ones, and build custom code where others would install another plugin.",
      },
      {
        title: "Core Web Vitals 90+",
        desc: "Every WordPress site we build hits 90+ on Lighthouse. Optimised images, deferred JavaScript, critical CSS, proper caching headers, and a CDN — not a plugin that promises '100 PageSpeed'.",
      },
      {
        title: "Block editor first",
        desc: "We build with Gutenberg blocks — including custom blocks for your specific content types — so your editors can create pages without touching code or needing a page builder.",
      },
      {
        title: "WordPress security hardened",
        desc: "No admin username, forced 2FA, file permission lockdown, WAF configuration, limited login attempts, and regular security scans — not just installing Wordfence and hoping for the best.",
      },
      {
        title: "Maintainable long-term",
        desc: "We document the theme, comment the custom code, and hand over a clear guide for your team. A developer you hire in 2 years will understand the codebase in an afternoon.",
      },
    ],
  },
  process: {
    eyebrow: "How we work",
    heading: "WordPress development process",
    steps: [
      {
        title: "Discovery & scope",
        desc: "Content types, user roles, required plugins, integrations, design brief, and performance targets. We define the full scope before any design or development begins.",
      },
      {
        title: "Custom theme design",
        desc: "Figma designs for every key page template. Custom block designs for the content editor. Approved before a line of PHP is written.",
      },
      {
        title: "Theme & plugin development",
        desc: "Custom theme in OOP PHP, custom Gutenberg blocks in React, any required custom plugins. No third-party page builder involved at any stage.",
      },
      {
        title: "Content migration & QA",
        desc: "Content import, redirect mapping, Lighthouse audit, cross-browser and cross-device testing, and SEO verification before launch.",
      },
      {
        title: "Launch & handover",
        desc: "DNS switch, SSL, caching configuration, Google Search Console submission, and a walkthrough of the WordPress admin for your content team.",
      },
    ],
  },
  why: {
    eyebrow: "Why Digital Web Weaver",
    heading: "WordPress specialists who think beyond the plugin directory",
    dark: true,
    items: [
      {
        title: "80+ WordPress projects delivered",
        desc: "Business websites, WooCommerce stores, multisite networks, headless WordPress apps, and plugin development. We've seen and fixed every class of WordPress problem.",
      },
      {
        title: "No templates, ever",
        desc: "Every WordPress site we build is custom — designed for your brand, coded to your requirements. You'll never see another site that looks like yours.",
      },
      {
        title: "Performance obsessed",
        desc: "A slow WordPress site is an engineering failure. Every site we build scores 90+ on Core Web Vitals. We achieve this with proper code, not plugins that claim to fix it.",
      },
      {
        title: "Ongoing maintenance plans available",
        desc: "Monthly WordPress maintenance plans covering plugin updates, security scans, uptime monitoring, performance checks, and minor content updates — so your site stays fast and secure.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "WordPress development questions",
    items: [
      {
        q: "How much does a custom WordPress website cost in India?",
        a: "A custom WordPress business website (5–10 pages, custom theme, no page builder) costs ₹40,000–₹90,000. A WooCommerce store costs ₹60,000–₹1.5L depending on the number of product types, payment gateways, and custom features. Custom WordPress plugin development starts from ₹30,000 depending on complexity.",
      },
      {
        q: "Why shouldn't I just use a premium theme from ThemeForest?",
        a: "Premium themes come with hundreds of features you'll never use, 50+ plugin dependencies, and generic layouts that make every site look the same. They're bloated, slow, and difficult to customise without breaking things. A custom theme gives you exactly what you need, nothing more — and it'll be faster, more secure, and easier to maintain.",
      },
      {
        q: "Can you fix or improve my existing WordPress website?",
        a: "Yes. We do WordPress audits — assessing performance, security, code quality, and SEO — and then make targeted improvements. We can also migrate a slow shared-hosting WordPress site to a faster server, remove malware, update a neglected codebase, or redesign the frontend without changing the backend.",
      },
      {
        q: "Do you build WooCommerce stores with Indian payment gateways?",
        a: "Yes. We integrate Razorpay, PayU, Instamojo, CCAvenue, and PhonePe for WooCommerce. We also add GST-compliant invoice generation, HSN code management, and state-specific tax rules — so your store is ready for Indian commerce from day one.",
      },
      {
        q: "What is headless WordPress and when should I use it?",
        a: "Headless WordPress means using WordPress only as a CMS (for content management) while powering the frontend with a modern framework like Next.js. You get WordPress's familiar admin interface and content editing, but the public-facing website is a React application — 3–5x faster, much more flexible, and better for complex interactive features.",
      },
    ],
  },
  related: [
    { label: "Website Development", href: "/website-development/", desc: "Professional business website development — custom design, fast delivery, fixed price." },
    { label: "E-Commerce Development", href: "/ecommerce-development/", desc: "WooCommerce, headless commerce, and custom storefronts for Indian online stores." },
    { label: "Shopify Development", href: "/shopify-development/", desc: "Custom Shopify stores with Razorpay, GST invoicing, and conversion-focused design." },
    { label: "UI/UX Design", href: "/ui-ux-design/", desc: "Research-led design for websites — wireframes, Figma handoff, and design systems." },
  ],
  cta: {
    eyebrow: "Let's build it right",
    heading: "A WordPress website worth having — built from scratch",
    body: "Free consultation. Custom design. No page builders. Fast, secure, and fully yours.",
    primaryCta: { label: "Get a free quote ↗", href: "/contact/" },
    secondaryCta: { label: "See our WordPress work", href: "/portfolio/" },
    meta: ["Custom themes only", "Performance guaranteed", "Fixed price"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SHOPIFY DEVELOPMENT
// Target: "shopify development company India", "shopify developer India"
// Differentiator: Shopify-platform-specific, conversion focus, Shopify Plus
// ─────────────────────────────────────────────────────────────────────────────
export const shopifyDevelopment: ServicePageData = {
  meta: {
    title: "Shopify Development Company India | Custom Themes & Apps",
    description:
      "Shopify development company in India. Custom Shopify themes, apps, and Shopify Plus builds designed to convert. Get a free store audit today.",
  },
  prose: {
    eyebrow: "Shopify Development",
    heading: "A Shopify Development Company India Trusts to Convert",
    blocks: [
      { p: ["As a Shopify development company in India serving founders across India, the UK, South Africa, and Ivory Coast, we build for brands that treat their storefront as a revenue engine — not a checkbox. The differentiator is simple: every store ships with a bespoke Liquid theme designed around your products and margins, not a lightly edited free theme that a thousand competitors also run. If you have outgrown a template or a slow, app-bloated store, this is ", { text: "conversion-focused ecommerce development", href: "/ecommerce-development/" }, " done by engineers who read your analytics before they touch a line of code."] },
      { h3: "Built for the Indian checkout, ready for global sales", p: ["We set up Razorpay natively so your customers pay the way they actually pay in India — UPI, net banking, wallets, cards, EMI, and COD — with proper GST invoicing, order webhooks, and clean refund handling wired in from day one. Because most Shopify stores lose buyers to load time, we pair that with disciplined ", { text: "page speed and Core Web Vitals work", href: "/services/performance-optimization/" }, " and thoughtful ", { text: "product-page and checkout UX", href: "/ui-ux-design/" }, ", so the store feels fast on the mid-range Android phones that dominate Indian traffic and converts across every market you sell into."] },
      { h3: "From custom apps to Shopify Plus and beyond", p: ["When an off-the-shelf app cannot handle your workflow, we build private and public Shopify apps in Node.js with Polaris and webhooks — the same ", { text: "Node.js engineering", href: "/nodejs-developer/" }, " we apply to any integration-heavy build. For high-volume brands we implement Shopify Plus: checkout extensibility, Shopify Functions for custom discount and shipping logic, B2B wholesale, and Flow automation. We also handle full WooCommerce and Magento migrations with 301 redirect mapping that protects your search rankings. If you want a store built to scale, ", { text: "tell us about your project", href: "/contact/" }, " or ", { text: "see the stores we have shipped", href: "/portfolio/" }, "."] },
    ],
  },
  hero: {
    eyebrow: "Shopify Development",
    heading: "Shopify Stores Built to Convert and Scale",
    lead:
      "Shopify is the world's best e-commerce platform — but most Shopify stores are generic, slow, and losing sales. We build custom Shopify stores that are fast, differentiated, and designed around one goal: converting more visitors into buyers.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Shopify Development" },
    ],
    marqueeItems: [
      "Shopify",
      "Shopify Plus",
      "Custom Themes",
      "Liquid Templates",
      "Shopify Apps",
      "Razorpay",
      "International Markets",
      "Metafields",
      "Checkout Extensibility",
      "Shopify Functions",
      "B2B Wholesale",
      "D2C Brands",
    ],
    stats: [
      { value: "60+", label: "Shopify Stores Built" },
      { value: "Custom", label: "Themes — No Defaults" },
      { value: "Shopify", label: "Plus Certified" },
    ],
    formVariant: "service",
    formTag: "Shopify Development",
    formHeading: "Tell us about your Shopify project",
    formSub: "Free consultation. Detailed proposal within 24 hours.",
    formSubmitLabel: "Start the conversation",
  },
  services: {
    eyebrow: "What we build",
    heading: "Shopify development services from store launch to scale",
    items: [
      {
        title: "Custom Shopify Theme Development",
        desc: "Bespoke Shopify themes built in Liquid, HTML, and JavaScript — designed around your brand and products, not a modified version of Dawn or another free theme that every competitor also uses.",
        tags: ["Liquid", "Custom sections", "Dawn-free", "Mobile-first"],
      },
      {
        title: "New Shopify Store Setup",
        desc: "Complete Shopify store setup for new brands — theme, products, collections, payment gateways (Razorpay for India), shipping, taxes, GST invoicing, and analytics — ready to sell from day one.",
        tags: ["Store setup", "Razorpay", "GST", "Analytics"],
      },
      {
        title: "Shopify App Development",
        desc: "Custom Shopify apps for features that no off-the-shelf app handles — private apps for your specific workflow, or public apps for the Shopify App Store.",
        tags: ["Shopify API", "Node.js", "Polaris UI", "Webhooks"],
      },
      {
        title: "Shopify Plus Development",
        desc: "Shopify Plus implementation for high-volume brands — checkout extensibility, custom checkout flows, B2B wholesale, Shopify Functions, Launchpad, and Flow automation.",
        tags: ["Checkout UI extensions", "B2B", "Flow", "Functions"],
      },
      {
        title: "WooCommerce to Shopify Migration",
        desc: "Full migration from WooCommerce (or Magento, BigCommerce, or a custom store) to Shopify — products, customers, order history, SEO redirects, and custom feature parity.",
        tags: ["Data migration", "301 redirects", "SEO continuity", "Zero downtime"],
      },
      {
        title: "Shopify Conversion Optimisation",
        desc: "CRO audit and implementation for existing Shopify stores — improving product pages, checkout flow, cart recovery, page speed, and mobile UX to increase conversion rate.",
        tags: ["CRO audit", "A/B testing", "Checkout", "Mobile UX"],
      },
    ],
    variant: "card",
  },
  capabilities: {
    eyebrow: "What makes our Shopify stores different",
    heading: "Built for conversion, not just aesthetics",
    dark: true,
    items: [
      {
        title: "Custom theme — not a reskinned default",
        desc: "Most Shopify agencies sell you a ₹2,000 theme and charge ₹1L to install it. We build a genuinely custom Liquid theme — optimised for your specific product types and brand.",
      },
      {
        title: "Conversion-first design decisions",
        desc: "Every design decision is justified by conversion impact: product image size, add-to-cart button placement, trust signals, upsell positioning, and checkout flow simplicity.",
      },
      {
        title: "Sub-2-second load time",
        desc: "A 1-second delay reduces conversions by 7%. We optimise image delivery, JavaScript loading, and Liquid rendering to hit sub-2-second load times on mobile — where most Indian shoppers browse.",
      },
      {
        title: "India-ready from day one",
        desc: "Razorpay integration (UPI, net banking, wallets, cards), GST-compliant invoicing, Indian state tax rules, COD support, and WhatsApp order notifications — all standard.",
      },
      {
        title: "Analytics and attribution",
        desc: "GA4, Meta Pixel, Google Ads conversion tracking, and enhanced e-commerce events set up correctly — so you know where your sales are coming from and can scale what works.",
      },
      {
        title: "App stack review",
        desc: "Most Shopify stores have 20+ apps running, each adding load time and monthly cost. We audit your app stack and replace bloat apps with lean custom code where appropriate.",
      },
    ],
  },
  process: {
    eyebrow: "How we work",
    heading: "From brief to live Shopify store",
    steps: [
      {
        title: "Store audit or brief",
        desc: "For new stores: understand your products, brand, target customer, and competitors. For existing stores: audit current performance, conversion rate, and technical issues.",
      },
      {
        title: "Design in Figma",
        desc: "Full Shopify theme design — homepage, collection pages, product pages, cart, and checkout. Designed for your brand, reviewed and approved before development.",
      },
      {
        title: "Liquid theme development",
        desc: "Custom Liquid theme built to the Figma designs. Custom sections for flexibility. App integrations. Payment gateway testing. Cross-browser and mobile QA.",
      },
      {
        title: "Data setup & migration",
        desc: "Product import, collections setup, metafield configuration, discount rules, shipping zones, tax rules, and migration of existing data if applicable.",
      },
      {
        title: "Launch & optimise",
        desc: "DNS cutover, SSL, speed verification, analytics verification, and a 30-day post-launch support period. We monitor conversion metrics and fix anything that underperforms.",
      },
    ],
  },
  why: {
    eyebrow: "Why Digital Web Weaver",
    heading: "Shopify developers who think like e-commerce business owners",
    dark: true,
    items: [
      {
        title: "60+ Shopify stores built",
        desc: "Fashion, D2C FMCG, B2B industrial, jewellery, electronics, home goods, and more. We've seen what converts and what doesn't across categories.",
      },
      {
        title: "India-specialist Shopify developers",
        desc: "Most Shopify tutorials are written for US/UK markets. We know Razorpay, Indian GST rules, COD workflows, and the UPI-dominant Indian checkout experience.",
      },
      {
        title: "No cookie-cutter themes",
        desc: "We don't sell you a premium theme and charge to install it. Every store is built with a custom Liquid theme — your store looks like yours, not like 10,000 other Shopify stores.",
      },
      {
        title: "Post-launch support",
        desc: "Monthly Shopify maintenance plans — app updates, speed monitoring, conversion tracking, and feature additions. We stay with your store as your business grows.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Shopify development questions",
    items: [
      {
        q: "How much does a custom Shopify store cost in India?",
        a: "A custom Shopify theme (built from scratch) costs ₹60,000–₹1.2L. A complete store setup with custom theme, Razorpay integration, and data import costs ₹80,000–₹1.8L. Shopify Plus projects (custom checkout, B2B features, Shopify Functions) start from ₹2.5L. We'll quote a fixed price after understanding your requirements.",
      },
      {
        q: "Shopify or WooCommerce — which should I choose?",
        a: "Choose Shopify if: you want a fully hosted, maintained platform, you're selling products (not services), you expect growth, and you don't want to manage hosting, security, and WordPress updates. Choose WooCommerce if: you need deep WordPress content integration, you have complex custom product types that Shopify can't handle, or you already have a WordPress site. For most e-commerce businesses in India, Shopify is the better long-term platform.",
      },
      {
        q: "Can you integrate Razorpay with Shopify for Indian customers?",
        a: "Yes. Razorpay has a native Shopify integration that supports UPI, net banking, wallets, credit/debit cards, and EMI — all the payment methods Indian customers expect. We set it up correctly with proper GST invoicing, order confirmation webhooks, and refund handling.",
      },
      {
        q: "Can you migrate our WooCommerce store to Shopify without losing SEO?",
        a: "Yes. A proper WooCommerce-to-Shopify migration includes: product/customer/order data migration, 301 redirect mapping (every old URL to its Shopify equivalent), Google Search Console verification of the new site, and SEO metadata transfer. Done correctly, you maintain most of your existing search rankings within a few weeks.",
      },
      {
        q: "Do you work with Shopify Plus for high-volume stores?",
        a: "Yes. Shopify Plus unlocks checkout extensibility (custom checkout UI), Shopify Functions (custom discount and shipping logic), B2B wholesale features, Launchpad for sale events, and Flow for automation. We've implemented all of these for high-volume brands. Plus starts at $2,300/month — it makes sense once your store exceeds $1M ARR.",
      },
    ],
  },
  related: [
    { label: "E-Commerce Development", href: "/ecommerce-development/", desc: "Platform-agnostic e-commerce — WooCommerce, headless, and custom storefronts." },
    { label: "WordPress Development", href: "/wordpress-development/", desc: "Custom WooCommerce stores and WordPress themes — no page builders." },
    { label: "Retail & E-Commerce", href: "/retail-ecommerce/", desc: "Omnichannel retail software, loyalty programs, and POS integrations." },
    { label: "UI/UX Design", href: "/ui-ux-design/", desc: "Conversion-focused design for product pages, checkout flows, and storefronts." },
  ],
  cta: {
    eyebrow: "Let's build your Shopify store",
    heading: "A Shopify store that converts visitors into loyal customers",
    body: "Custom theme. India-ready payments. Conversion-optimised. Fixed price.",
    primaryCta: { label: "Get a free Shopify consultation ↗", href: "/contact/" },
    secondaryCta: { label: "See our Shopify work", href: "/portfolio/" },
    meta: ["Custom Liquid themes", "Razorpay integrated", "Fixed price"],
  },
};
