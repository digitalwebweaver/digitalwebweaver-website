import type { ServicePageData } from "@/lib/types";

const mk = (
  slug: string,
  title: string,
  desc: string,
  eyebrow: string,
  heading: string,
  lead: string,
  svcs: { icon: string; title: string; desc: string }[],
  faqItems?: { q: string; a: string }[]
): ServicePageData => ({
  meta: { title, description: desc },
  hero: {
    eyebrow,
    heading,
    lead,
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Services", href: "/services/" }, { label: eyebrow }],
  },
  services: {
    variant: "svc",
    eyebrow: "What We Offer",
    heading: `${eyebrow} Services`,
    items: svcs,
  },
  ...(faqItems?.length ? { faq: { heading: `${eyebrow} FAQ`, items: faqItems } } : {}),
  cta: { heading: `Start Your ${eyebrow} Project`, body: "Let's discuss your requirements and provide a free estimate." },
});

export const apiDevelopment: ServicePageData = {
  meta: { title: "API Development Company India | REST, GraphQL & WebSocket", description: "REST, GraphQL & WebSocket API development company in India with OAuth/JWT auth, OpenAPI docs, versioning & performance tuning. Free quote in 24 hours." },
  hero: { eyebrow: "API Development", heading: "API Development Services for Every Integration — Web to Mobile", lead: "We design and build secure, documented, versioned APIs using REST, GraphQL, and WebSocket patterns — ready for any client to consume.", breadcrumbs: [{ label: "Home", href: "/" }, { label: "Services", href: "/services/" }, { label: "API Development" }] },
  services: { variant: "svc", eyebrow: "What We Build", heading: "API Development Services", items: [{ icon: "🔌", title: "REST APIs", desc: "CRUD-based resource APIs with proper status codes and error handling." }, { icon: "🔷", title: "GraphQL APIs", desc: "Flexible query APIs with schema, resolvers, and subscriptions." }, { icon: "⚡", title: "WebSocket APIs", desc: "Real-time bidirectional APIs for live data and chat." }, { icon: "🔒", title: "Auth & Security", desc: "OAuth 2.0, JWT, API keys, rate limiting, and IP allowlisting." }, { icon: "📖", title: "OpenAPI Docs", desc: "Swagger/Redoc auto-generated documentation with examples." }, { icon: "🔄", title: "API Versioning", desc: "URL, header, and content-type versioning strategies." }] },
  capabilities: { eyebrow: "Technical Depth", heading: "API Capabilities", dark: true, items: [{ icon: "🔌", title: "Express & Fastify", desc: "Production-grade Node.js API frameworks." }, { icon: "🔷", title: "Apollo Server", desc: "GraphQL with resolvers, dataloaders, and subscriptions." }, { icon: "🧪", title: "Contract Testing", desc: "Pact and Dredd for API contract verification." }, { icon: "📊", title: "Performance", desc: "Response caching, pagination, and database query optimisation." }, { icon: "🔒", title: "Security", desc: "Input validation, SQL injection prevention, CORS, and CSP." }, { icon: "📈", title: "Observability", desc: "Structured logging, tracing, and endpoint latency monitoring." }] },
  process: { eyebrow: "How We Work", heading: "API Development Process", steps: [{ title: "Design-First", desc: "OpenAPI spec written and reviewed before any code is written." }, { title: "Core Implementation", desc: "Endpoints, validation, auth, and error handling." }, { title: "Testing", desc: "Unit, integration, and contract tests with 80%+ coverage." }, { title: "Documentation & Deploy", desc: "Swagger docs, rate limits, and production deployment." }] },
  stack: { eyebrow: "Technology Stack", heading: "API Stack", cols: [{ head: "Node.js", items: ["Express", "Fastify", "NestJS", "Hono"] }, { head: "GraphQL", items: ["Apollo Server", "Pothos", "Hasura"] }, { head: "Auth", items: ["JWT", "OAuth 2.0", "Passport.js", "Auth0"] }, { head: "Docs", items: ["Swagger UI", "Redoc", "Stoplight", "Postman"] }] },
  why: { eyebrow: "Why Choose Us", heading: "Why Digital Web Weaver for APIs?", dark: true, items: [{ icon: "📖", title: "Design-First", desc: "API spec reviewed before coding — avoids expensive rework." }, { icon: "🔒", title: "Secure by Default", desc: "Auth, rate limiting, and input validation on every endpoint." }, { icon: "🧪", title: "Contract Tested", desc: "Consumer-driven contract tests prevent breaking changes." }, { icon: "📊", title: "Observable", desc: "Every API ships with logging, tracing, and latency dashboards." }] },
  faq: { heading: "API Development FAQ", items: [{ q: "REST or GraphQL?", a: "REST for simple CRUD and mobile APIs. GraphQL when clients need flexible querying or you're building a data-heavy dashboard." }, { q: "How do you handle API versioning?", a: "URL versioning (/v1/, /v2/) for public APIs. Header versioning for internal APIs. We document the upgrade path for each version." }, { q: "Can you document our existing API?", a: "Yes — we generate OpenAPI specs from existing codebases using swagger-autogen or manual annotation." }, { q: "How do you prevent API abuse?", a: "Rate limiting with Redis, API key management, IP allowlisting, and bot detection via middleware." }] },
  cta: { heading: "Build Your API", body: "Secure, documented, and ready for any client." },
};

export const apiIntegrations: ServicePageData = mk(
  "api-integrations", "API Integration Company India | Payments, CRM & ERP Systems", "API integration company connecting payment gateways, CRMs, ERPs & third-party apps with custom middleware and webhook management. Free quote in 24 hours.",
  "API Integrations", "API Integration Services That Connect Every System You Rely On",
  "We integrate third-party APIs, payment gateways, CRMs, and ERPs into your applications — reliably, with proper error handling and monitoring.",
  [
    { icon: "💳", title: "Payment Gateways", desc: "Stripe, Razorpay, PayPal, Braintree integration." },
    { icon: "📋", title: "CRM Integration", desc: "Salesforce, HubSpot, and Zoho API connections." },
    { icon: "🔗", title: "ERP Integration", desc: "SAP, Oracle, and Odoo data sync." },
    { icon: "🚚", title: "Shipping APIs", desc: "FedEx, UPS, DHL, and custom courier integration." },
    { icon: "🔔", title: "Webhooks", desc: "Inbound and outbound webhook management with retry logic." },
    { icon: "📊", title: "Analytics APIs", desc: "GA4, Mixpanel, and custom event ingestion." },
  ],
  [
    { q: "Which payment gateways do you integrate?", a: "We integrate Stripe, Razorpay, PayPal, Braintree, and local gateways like CCAvenue. We handle webhooks, refunds, and PCI-compliant flows." },
    { q: "How long does a typical API integration take?", a: "A single gateway integration takes 3–7 days. Complex ERP or multi-system integrations typically take 2–4 weeks depending on the third-party API quality." },
    { q: "How do you handle webhook security?", a: "We validate webhook signatures (e.g. Stripe's Svix or custom HMAC), use queue-based retry logic, and store raw payloads for replay and debugging." },
    { q: "Can you integrate with our legacy ERP?", a: "Yes — we've integrated with SAP, Tally, and custom ERPs using SOAP, REST, and file-based data exchange. We build middleware adapters where needed." },
  ]
);

export const corporateWebsites: ServicePageData = mk(
  "corporate-websites", "Corporate Website Development Company | India & Global", "Corporate website development company building fast, SEO-ready sites with CMS integration, Core Web Vitals & lead-capture design. Free quote in 24 hours.",
  "Corporate Websites", "Corporate Website Development Designed to Convert Visitors into Leads",
  "We build professional, fast, and SEO-optimised corporate websites that represent your brand and capture qualified leads.",
  [
    { icon: "🏢", title: "Company Websites", desc: "Professional presence with CMS for easy content management." },
    { icon: "📋", title: "Lead Capture", desc: "Forms, CTAs, and landing pages optimised for conversion." },
    { icon: "🔍", title: "Technical SEO", desc: "Structured data, sitemap, Core Web Vitals, and meta setup." },
    { icon: "🌍", title: "Multi-Language", desc: "i18n content management for international markets." },
    { icon: "📱", title: "Mobile-First", desc: "Responsive design prioritising mobile user experience." },
    { icon: "⚡", title: "Performance", desc: "90+ Lighthouse scores for speed and conversion impact." },
  ],
  [
    { q: "Which CMS do you use?", a: "We most commonly build with Next.js + headless CMS (Sanity, Contentful, or Strapi) for performance. For marketing-led sites we also deliver WordPress with a custom theme." },
    { q: "How long does a corporate website take?", a: "A standard 10–15 page corporate website typically takes 4–6 weeks from kick-off to launch, including design, development, and content integration." },
    { q: "Is the website mobile-friendly?", a: "Yes — we build mobile-first by default. All sites are tested across iOS, Android, and tablet viewports, and we target 90+ Lighthouse mobile scores." },
    { q: "Do you handle SEO setup?", a: "Yes — every site ships with structured data (JSON-LD), XML sitemap, meta tags, Open Graph, canonical URLs, and Core Web Vitals optimisation included." },
  ]
);

export const databaseDesign: ServicePageData = mk(
  "database-design", "Database Design Company India | Schema & Query Optimisation", "Database design company for relational & NoSQL systems — schema design, indexing, query optimisation, migrations & sharding. Get a free quote in 24 hours.",
  "Database Design", "Database Design & Architecture Built for Scale and Speed",
  "We design database schemas, optimise queries, and architect data layers for performance, integrity, and future scale.",
  [
    { icon: "🗄️", title: "Relational Design", desc: "PostgreSQL and MySQL schema design with normalisation and indexing." },
    { icon: "🍃", title: "NoSQL Architecture", desc: "MongoDB, Redis, and DynamoDB data modelling." },
    { icon: "🔄", title: "Migration Strategy", desc: "Zero-downtime schema migrations with rollback plans." },
    { icon: "⚡", title: "Query Optimisation", desc: "Explain plans, index tuning, and slow query elimination." },
    { icon: "📊", title: "Data Warehousing", desc: "OLAP schema design for analytics and BI workloads." },
    { icon: "🔀", title: "Sharding & Partitioning", desc: "Horizontal scale strategies for high-volume tables." },
  ],
  [
    { q: "PostgreSQL or MySQL — which should I use?", a: "PostgreSQL for most new projects — it has better JSON support, window functions, and extensibility. MySQL remains a good choice for read-heavy workloads with well-understood schemas." },
    { q: "Can you optimise an existing slow database?", a: "Yes — we run EXPLAIN ANALYZE on slow queries, audit missing indexes, identify N+1 patterns, and implement caching layers. Most databases see 3–10× improvement after a tuning engagement." },
    { q: "How do you handle schema migrations without downtime?", a: "We use expand-contract migrations: add columns before removing old ones, use feature flags, and run Flyway or Liquibase with rollback scripts. Online DDL tools like gh-ost handle large table changes." },
    { q: "When should I use NoSQL instead of SQL?", a: "NoSQL (MongoDB, DynamoDB) fits when your data is document-shaped, access patterns are known upfront, or you need horizontal write scaling. For relational data with complex queries, SQL wins every time." },
  ]
);

export const enterpriseApplications: ServicePageData = mk(
  "enterprise-applications", "Enterprise Application Development Company | India & Global", "Enterprise application development company building role-based access, workflow automation, SSO & multi-tenant systems. Free quote in 24 hours.",
  "Enterprise Applications", "Enterprise Application Development That Scales Across Teams and Workflows",
  "We build large-scale enterprise applications with complex role hierarchies, workflow automation, SSO, and multi-tenant architectures.",
  [
    { icon: "🏛️", title: "ERP-Class Systems", desc: "Custom enterprise resource planning and management platforms." },
    { icon: "🔒", title: "Role-Based Access", desc: "Granular RBAC with team, department, and org-level permissions." },
    { icon: "🔄", title: "Workflow Automation", desc: "Approval chains, notifications, and business process automation." },
    { icon: "🔑", title: "SSO & SAML", desc: "Enterprise SSO via Okta, Auth0, or Microsoft Entra." },
    { icon: "🏗️", title: "Multi-Tenant Architecture", desc: "Data isolation, tenant management, and custom branding." },
    { icon: "📋", title: "Audit & Compliance", desc: "Full audit logs, GDPR controls, and compliance reporting." },
  ],
  [
    { q: "Can you integrate with our existing SSO provider?", a: "Yes — we implement SAML 2.0 and OIDC with Okta, Microsoft Entra (Azure AD), Auth0, and Google Workspace. Existing identity providers are connected without disrupting your user accounts." },
    { q: "How do you handle multi-tenant data isolation?", a: "We support row-level isolation (shared schema with tenant_id), schema-per-tenant, and database-per-tenant — each with trade-offs in cost, complexity, and compliance. We recommend based on your regulatory and scale requirements." },
    { q: "What compliance standards do you build for?", a: "We build for GDPR, HIPAA (data handling patterns), SOC 2 Type II logging requirements, and ISO 27001 controls. Compliance is designed into the architecture, not bolted on later." },
    { q: "How long does enterprise application development take?", a: "Most enterprise systems take 4–12 months for the core platform depending on complexity. We deliver in phases — auth and core modules first — so you have working software at every milestone." },
  ]
);

export const iosDevelopment: ServicePageData = mk(
  "ios-development", "iOS App Development Company | Native Swift & SwiftUI, India", "iOS app development company building native Swift & SwiftUI apps with App Store submission, HIPAA & payment integrations. Free quote in 24 hours.",
  "iOS Development", "iOS App Development Built for Performance and App Store Launch",
  "We build polished, App Store-approved iOS apps with Swift and SwiftUI — delivered with TestFlight builds and full submission support.",
  [
    { icon: "📱", title: "Swift & SwiftUI", desc: "Modern declarative UI with native platform feel." },
    { icon: "🛒", title: "App Store Submission", desc: "Screenshots, metadata, and review compliance handled." },
    { icon: "💳", title: "In-App Purchases", desc: "StoreKit 2, subscriptions, and receipt validation." },
    { icon: "🔔", title: "Push Notifications", desc: "APNS, rich notifications, and notification extensions." },
    { icon: "🗺️", title: "Maps & Location", desc: "MapKit, CoreLocation, and geofencing." },
    { icon: "🔄", title: "App Modernisation", desc: "UIKit to SwiftUI migration and Objective-C rewrites." },
  ],
  [
    { q: "Do you build for both iPhone and iPad?", a: "Yes — we design and develop universal apps targeting both form factors with adaptive layouts using SwiftUI's size classes. iPad-specific layouts are included when required." },
    { q: "How long does App Store review take?", a: "Apple's review typically takes 1–3 days for new submissions and 24 hours for updates. We handle all submission materials — screenshots, descriptions, privacy disclosures, and export compliance." },
    { q: "Do you also build the Android version?", a: "Yes — we can build the Android counterpart natively (Kotlin/Jetpack Compose) or cross-platform with React Native. Cross-platform suits most apps; we recommend native when performance or platform-specific features demand it." },
    { q: "Can you integrate HealthKit or ARKit?", a: "Yes — we have experience with HealthKit (health data permissions and HIPAA handling), ARKit (AR features), Core ML (on-device inference), and other Apple frameworks." },
  ]
);

export const microservices: ServicePageData = mk(
  "microservices", "Microservices Architecture Company India | Docker & Kubernetes", "Microservices architecture company designing service decomposition, API gateways, Docker/Kubernetes & event-driven systems. Free quote in 24 hours.",
  "Microservices", "Microservices Architecture for Teams That Ship Fast",
  "We design and build microservices architectures that scale independently, deploy continuously, and recover automatically.",
  [
    { icon: "🧩", title: "Service Decomposition", desc: "Domain-driven design to identify service boundaries." },
    { icon: "🔌", title: "API Gateway", desc: "Kong, AWS API Gateway, or custom routing and auth." },
    { icon: "📨", title: "Event-Driven", desc: "Kafka and RabbitMQ for async service communication." },
    { icon: "🐳", title: "Container Orchestration", desc: "Docker and Kubernetes for service lifecycle management." },
    { icon: "📊", title: "Service Mesh", desc: "Istio or Linkerd for observability and traffic management." },
    { icon: "🔄", title: "Saga Pattern", desc: "Distributed transaction management across services." },
  ],
  [
    { q: "When should I use microservices instead of a monolith?", a: "Start with a monolith. Move to microservices when different parts of the system need to scale independently, teams are working on the same codebase and blocking each other, or deployment frequency requires service-level independence." },
    { q: "Which message broker do you recommend?", a: "Kafka for high-throughput event streaming and audit logs. RabbitMQ for simpler task queues and routing. We help choose based on your message volume, ordering requirements, and operational complexity tolerance." },
    { q: "How do you handle distributed transactions?", a: "We implement the Saga pattern with choreography or orchestration depending on the complexity. Compensating transactions handle rollbacks. We avoid distributed transactions where possible by designing around eventual consistency." },
    { q: "Do you set up the Kubernetes infrastructure?", a: "Yes — we provision and configure Kubernetes clusters (EKS, GKE, or bare-metal), set up Helm charts, ingress controllers, horizontal pod autoscaling, and CI/CD pipelines for each service." },
  ]
);

export const performanceOptimization: ServicePageData = mk(
  "performance-optimization", "Performance Optimisation Company India | Core Web Vitals", "Web performance optimisation company fixing Core Web Vitals, slow database queries, Redis caching & image delivery for faster sites. Free quote in 24 hours.",
  "Performance Optimisation", "Performance Optimisation That Turns Slow into Fast",
  "We audit and fix performance bottlenecks — from Core Web Vitals and JavaScript bundles to slow queries and inefficient caching.",
  [
    { icon: "⚡", title: "Core Web Vitals", desc: "LCP, CLS, FID optimisation for Google ranking and UX." },
    { icon: "🗄️", title: "Database Tuning", desc: "Slow query analysis, index optimisation, and N+1 elimination." },
    { icon: "💾", title: "Caching Strategy", desc: "Redis, CDN, and HTTP caching for scalable performance." },
    { icon: "📦", title: "Bundle Optimisation", desc: "Tree-shaking, code splitting, and lazy loading." },
    { icon: "🖼️", title: "Image Optimisation", desc: "WebP conversion, responsive images, and CDN delivery." },
    { icon: "📊", title: "Load Testing", desc: "k6 and Locust load tests to find breaking points." },
  ],
  [
    { q: "What Core Web Vitals score can you achieve?", a: "We target LCP under 2.5s, CLS under 0.1, and INP under 200ms — the thresholds Google considers 'Good'. Most sites reach these after our optimisation engagement." },
    { q: "How do you identify performance bottlenecks?", a: "We start with a Lighthouse audit, WebPageTest waterfall analysis, and database slow-query logs. We profile JavaScript execution with Chrome DevTools and run EXPLAIN ANALYZE on slow queries to find the biggest wins first." },
    { q: "Will optimisation break existing functionality?", a: "No — we use regression tests and staging environments before any changes go live. Optimisations like lazy loading, code splitting, and caching are additive and non-breaking by design." },
    { q: "How long does a performance audit take?", a: "An initial audit report takes 2–3 days. The full optimisation engagement (audit → fix → test → deploy) typically runs 2–4 weeks depending on the number of issues found." },
  ]
);

export const progressiveWebApps: ServicePageData = mk(
  "progressive-web-apps", "Progressive Web App Development Company | PWA Experts, India", "Progressive Web App (PWA) development company building offline mode, push notifications & installable apps with service workers. Free quote in 24 hours.",
  "Progressive Web Apps", "Progressive Web App Development That Feels Native Without a Native Build",
  "We build Progressive Web Apps that install from the browser, work offline, and deliver native-like performance across all platforms.",
  [
    { icon: "📲", title: "Installable PWA", desc: "Web App Manifest and install prompts for home screen placement." },
    { icon: "📴", title: "Offline Mode", desc: "Service worker caching strategies for offline functionality." },
    { icon: "🔔", title: "Push Notifications", desc: "Web Push API with opt-in management and deep linking." },
    { icon: "⚡", title: "App Shell Architecture", desc: "Instant loads with shell caching and dynamic content fetch." },
    { icon: "📱", title: "Cross-Platform", desc: "One codebase for Android, iOS (Safari), and desktop." },
    { icon: "🔬", title: "Lighthouse Targets", desc: "PWA checklist, 90+ performance, and full installability." },
  ],
  [
    { q: "Can a PWA replace a native iOS or Android app?", a: "For most apps — yes. PWAs handle offline mode, push notifications, and home screen install. The exceptions are apps needing deep hardware access (Bluetooth, NFC, background audio) where native is still required." },
    { q: "Do PWAs work on iOS Safari?", a: "Yes, with some limitations. Safari supports service workers, offline caching, and home screen installation. Web Push on iOS requires iOS 16.4+. We design PWAs to degrade gracefully on older Safari versions." },
    { q: "Will my PWA appear in the Google Play Store or App Store?", a: "Google Play accepts PWAs via TWA (Trusted Web Activity) — we package and submit them. Apple's App Store does not accept PWAs directly, but the installed home screen experience on iOS 16.4+ is near-native." },
    { q: "How is a PWA different from a regular responsive website?", a: "A PWA adds a service worker (offline caching, background sync), a Web App Manifest (installability, splash screen), and push notifications. The user can install it to their home screen and use it without internet." },
  ]
);

export const appModernization: ServicePageData = mk(
  "app-modernization", "App Modernisation Company India | Legacy to Modern Systems", "Legacy app modernisation company using the strangler fig pattern for monolith-to-microservices migration, database upgrades & UI revamps. Get a free quote.",
  "App Modernisation", "App Modernisation — Modernise Legacy Systems Without the Big-Bang Rewrite",
  "We modernise legacy applications incrementally — using the strangler fig pattern to reduce risk while continuously delivering new value.",
  [
    { icon: "🔄", title: "Strangler Fig Pattern", desc: "Route-by-route migration from legacy to modern system." },
    { icon: "🧩", title: "Monolith to Microservices", desc: "Extract services without disrupting production traffic." },
    { icon: "🗄️", title: "Database Migration", desc: "Schema modernisation and NoSQL-to-SQL migrations." },
    { icon: "🎨", title: "UI Modernisation", desc: "Old PHP/jQuery frontends migrated to React." },
    { icon: "⚡", title: "Zero-Downtime", desc: "Feature flags and parallel-run strategies for safe migration." },
    { icon: "🧪", title: "Regression Testing", desc: "Snapshot tests and e2e coverage before decommissioning legacy." },
  ],
  [
    { q: "Do you rewrite from scratch or migrate incrementally?", a: "Incrementally — almost always. Big-bang rewrites take too long and introduce new bugs. We use the strangler fig pattern to replace legacy routes one by one while the old system stays live, reducing risk at every step." },
    { q: "How do you ensure zero downtime during migration?", a: "We run the old and new systems in parallel, use feature flags to route traffic, and deploy behind a proxy that switches at the route level. The legacy system only goes dark after the new path is proven stable." },
    { q: "Can you modernise a PHP monolith?", a: "Yes — PHP modernisation is one of our most common engagements. We migrate jQuery/Blade UIs to React, refactor business logic from controllers into services, and incrementally extract APIs that mobile or third-party clients can consume." },
    { q: "What is the strangler fig pattern?", a: "It's a migration strategy where a new system is built around the legacy one. New routes go to the new system; legacy routes stay on the old one. Over time, the legacy system is 'strangled' until only the new system remains — no big cutover needed." },
  ]
);

// ── SEO: supplementary prose / FAQ / related (appended) ──

apiDevelopment.prose = {
  eyebrow: "API Development",
  heading: "API Development Company Built Around the Contract, Not the Afterthought",
  blocks: [
    { p: ["As an API development company based in Vadodara, India, and delivering to teams across the UK, South Africa, and Ivory Coast, we treat the API as the contract every other system depends on — not a wrapper bolted onto a finished app. We work design-first, writing and reviewing the OpenAPI spec before a line of implementation exists, so your web frontend, mobile client, and third-party consumers all agree on shape and behaviour before anyone builds against it. Whether the API powers a public product, a partner integration, or the backend for a ", { text: "SaaS platform", href: "/saas-development/" }, ", we build it versioned, documented, and secure by default."] },
    { h3: "REST, GraphQL, and real-time — chosen for the job", p: ["There is no single correct API style, only the right one for your clients. We reach for REST when you need predictable CRUD resources and clean caching, GraphQL when a data-heavy dashboard or app needs to fetch exactly what it renders, and WebSocket patterns when live data, chat, or collaborative editing demand it. Most products end up needing more than one, which is why our engineers work across Express, Fastify, and NestJS, and lean on our ", { text: "Node.js developers", href: "/nodejs-developer/" }, " when a build needs deeper backend firepower. The same endpoints feed our ", { text: "mobile app development", href: "/mobile-app-development/" }, " work, so the client and the API it consumes are designed together rather than stitched up at the end."] },
    { h3: "Secure, observable, and built to keep its promises", p: ["Every endpoint ships with authentication — OAuth 2.0, JWT, or API keys — plus rate limiting, input validation, and CORS configured before launch, not patched in after an incident. Consumer-driven contract tests catch breaking changes before they reach production, and structured logging, tracing, and latency dashboards let you see exactly how each route behaves under load. As your product grows, that discipline scales cleanly into ", { text: "microservices", href: "/services/microservices/" }, " and reaches outward through our ", { text: "API integration", href: "/services/api-integrations/" }, " practice for payment gateways, CRMs, and ERPs. Tell us what needs to talk to what, and we'll ", { text: "scope your API in a free estimate", href: "/contact/" }, "."] },
  ],
};

apiIntegrations.prose = {
  eyebrow: "API Integrations",
  heading: "API Integration Services That Connect Every System You Rely On",
  blocks: [
    { p: ["Our API integration services stitch together the payment gateways, CRMs, ERPs, and third-party platforms your business already runs on — so data moves automatically instead of being re-keyed by hand between systems. From our base in Vadodara we deliver for teams across India, the UK, South Africa, and Ivory Coast, wiring integrations directly into your existing ", { text: "web development", href: "/web-development/" }, " stack rather than forcing a rebuild. Every connection ships with signature validation, idempotency keys, and monitoring, because a silent failure in a payment capture or inventory sync is far more expensive than the integration work itself."] },
    { h3: "Payments, CRMs, and ERPs that stay in sync", p: ["We integrate Stripe, Razorpay, PayPal, Braintree, and local gateways like CCAvenue for checkout, then connect that order data into Salesforce, HubSpot, or Zoho and push it back to your SAP, Oracle, or Odoo ERP. For online stores this keeps stock levels, pricing, and fulfilment status consistent across your ", { text: "ecommerce platform", href: "/ecommerce-development/" }, ", whether you sell on Shopify or a custom cart. Inbound and outbound webhooks are queued with retry and replay logic so a single dropped event never corrupts your records, and long-running syncs run on background workers instead of blocking a user request."] },
    { h3: "Middleware built to survive real-world APIs", p: ["Third-party APIs rate-limit, change their schemas, and go down without warning — so we build middleware adapters that isolate those quirks from your core system. We pair them with dedicated ", { text: "API development", href: "/services/api-development/" }, " when a clean internal contract is needed, or feed incoming events into ", { text: "AI automation", href: "/ai-automation/" }, " pipelines that classify, route, and act on them. Every integration comes with structured logging, alerting, and a replay tool, so your team can debug a failed callback in minutes instead of guessing at what the provider sent. Tell us which systems need to talk to each other and we'll map the data flow, or browse our ", { text: "portfolio", href: "/portfolio/" }, " to see the integrations we've shipped."] },
  ],
};

corporateWebsites.prose = {
  eyebrow: "Corporate Websites",
  heading: "A Corporate Site That Earns Trust and Generates Leads",
  blocks: [
    { p: ["As a corporate website development company based in Vadodara and delivering across India, the UK, South Africa, and Ivory Coast, we build sites that do more than look polished — they load fast, rank, and convert. Most corporate sites fail on the fundamentals: bloated themes, weak information architecture, and no clear path to enquiry. We start from your buyer's journey and work backwards, pairing considered ", { text: "UI/UX design", href: "/ui-ux-design/" }, " with disciplined ", { text: "web development", href: "/web-development/" }, " so every page has a job and every CTA has a reason to be clicked."] },
    { h3: "Built for performance and search from day one", p: ["Speed is a ranking factor and a conversion lever, so we treat it as an engineering requirement rather than an afterthought. Our corporate builds ship with server-rendered pages, optimised images, structured data, and clean semantic markup, backed by ongoing ", { text: "performance optimisation", href: "/services/performance-optimization/" }, " to hold 90+ Lighthouse scores and healthy Core Web Vitals. When your site needs to plug into marketing tools, lead pipelines, or a headless CMS, we handle the ", { text: "API integrations", href: "/services/api-integrations/" }, " cleanly so editors publish without touching code."] },
    { h3: "A foundation that grows with your business", p: ["A corporate website is rarely the finish line. As you expand, the same team can extend the platform into gated portals, dashboards, or a ", { text: "custom web application", href: "/custom-web-apps/" }, ", or connect it to your ", { text: "CRM and ERP systems", href: "/crm-erp-systems/" }, " so enquiries flow straight into sales. That continuity means no rebuild, no lost context, and no vendor hand-off when ambitions grow. Whether you need a five-page presence or a multi-language site for international markets, we scope it honestly and build it to last. See how we approach it in our ", { text: "portfolio", href: "/portfolio/" }, ", or tell us what you have in mind and we'll reply with a quote within 24 hours."] },
  ],
};

databaseDesign.prose = {
  eyebrow: "Database Design",
  heading: "Database Design and Optimization Services Built for Scale",
  blocks: [
    { p: ["Our database design and optimization services turn the data layer from a bottleneck into the fastest part of your stack. From our base in Vadodara, India, we design relational schemas in PostgreSQL and MySQL and model document stores in MongoDB, Redis, and DynamoDB for teams across the UK, South Africa, and Ivory Coast. Every engagement starts with the access patterns — how the application actually reads and writes — because a schema that ignores query shape ages badly. We normalise where integrity matters, denormalise where read speed matters, and index deliberately rather than by guesswork. Whether you are launching a ", { text: "custom web app", href: "/custom-web-apps/" }, " or hardening the backend behind a ", { text: "SaaS product", href: "/saas-development/" }, ", the data model is the decision you live with longest, so we get it right early."] },
    { h3: "Optimising Queries and Schemas That Already Exist", p: ["Most teams reach us with a database that has quietly slowed down under real traffic. We run EXPLAIN ANALYZE on the worst offenders, hunt down missing indexes and N+1 patterns, and add caching layers where they earn their keep — tuning that regularly delivers a three-to-ten-times improvement. This work pairs naturally with broader ", { text: "performance optimization", href: "/services/performance-optimization/" }, ", and it feeds the reliability of any ", { text: "API layer", href: "/services/api-development/" }, " sitting on top of your data."] },
    { h3: "Migrations, Sharding, and Scaling Without Downtime", p: ["Growth breaks naive schemas. We handle migrations with an expand-contract approach — adding before removing, guarding changes behind feature flags, and running Flyway or Liquibase with tested rollback scripts, using tools like gh-ost for large tables. When single-node limits arrive, we design partitioning and sharding strategies that keep high-volume tables fast, which matters as much for a ", { text: "microservices", href: "/services/microservices/" }, " architecture as for a monolith carrying years of data. If your database is holding the product back, ", { text: "tell us where it hurts", href: "/contact/" }, " and we will map the fix."] },
  ],
};

enterpriseApplications.prose = {
  eyebrow: "Enterprise Applications",
  heading: "Enterprise Application Development That Scales Across Teams and Workflows",
  blocks: [
    { p: ["As an enterprise application development company based in Vadodara, India, Digital Web Weaver builds the systems large organisations actually run on — role-based platforms, approval workflows, and multi-tenant tools that hold up under real load. We deliver globally across India, the UK, South Africa, and Ivory Coast, treating access control, audit trails, and data isolation as first-class architecture rather than features bolted on after launch. Whether you are replacing a tangle of spreadsheets or consolidating several legacy tools into one governed platform, we design for the org chart you have today and the one you will grow into."] },
    { h3: "Architecture that survives real-world scale", p: ["Enterprise software fails at the seams — where services talk to each other, where tenants share a database, where a permission check gets skipped. We design those seams deliberately, splitting large systems into ", { text: "microservices", href: "/services/microservices/" }, " with clear boundaries and backing them with careful ", { text: "database design", href: "/services/database-design/" }, " that keeps tenant data isolated and query performance predictable. Every connection — payroll, identity providers, ERP, third-party services — runs through hardened ", { text: "API integrations", href: "/services/api-integrations/" }, ", so a change on one side never quietly breaks another. The result is a platform your teams trust and your auditors can follow."] },
    { h3: "Built for the way enterprises actually operate", p: ["Adoption depends on more than a working backend. We connect enterprise applications to the ", { text: "CRM and ERP systems", href: "/crm-erp-systems/" }, " your operations already depend on, automate approval chains and reporting, and deploy on resilient cloud infrastructure with SSO, monitoring, and zero-downtime releases built in. Delivery happens in phases, so authentication and core modules ship first and you have working software at every milestone rather than a risky big-bang cutover. When you are ready, ", { text: "tell us what your teams are wrestling with", href: "/contact/" }, " and we will map the fastest route to a platform that scales."] },
  ],
};

iosDevelopment.prose = {
  eyebrow: "iOS Development",
  heading: "A Native iOS App Development Company Built Around Swift",
  blocks: [
    { p: ["As an ", { text: "iOS app development company", href: "/mobile-app-development/" }, " based in Vadodara and delivering to teams across India, the UK, South Africa, and Ivory Coast, we build native apps in Swift and SwiftUI that feel like they belong on the platform. Every project ships with TestFlight builds, a clean architecture, and full App Store submission support — screenshots, privacy disclosures, and export compliance handled by us, not left on your plate. We treat the iPhone and iPad as first-class targets, using SwiftUI size classes for adaptive layouts rather than stretching a phone screen onto a tablet. Whether you need a standalone app or an iOS front end for an existing ", { text: "SaaS product", href: "/saas-development/" }, ", we start from your real users and the App Store review guidelines, not a template."] },
    { h3: "Engineering that goes past the UI", p: ["A good app is only as strong as what it talks to. We wire StoreKit 2 subscriptions, APNS push, MapKit, and Core ML on-device inference into a backend that holds up under load — connected through clean ", { text: "API development", href: "/services/api-development/" }, " or ", { text: "third-party integrations", href: "/services/api-integrations/" }, " so data stays consistent between device and server. For regulated work like HealthKit and HIPAA-sensitive data, we design permission and storage patterns into the architecture from day one. Inheriting an older codebase is common too, and our ", { text: "app modernisation", href: "/services/app-modernization/" }, " work covers UIKit-to-SwiftUI migration and Objective-C rewrites without a risky big-bang rebuild."] },
    { h3: "From first build to launch and beyond", p: ["We keep the loop tight: design reviews, weekly TestFlight builds, and App Store submission handled end to end, with Apple review typically clearing in one to three days. When the roadmap calls for it, we pair the iOS app with a matching Android build or a shared ", { text: "React Native", href: "/react-developer/" }, " codebase, and thoughtful ", { text: "UI/UX design", href: "/ui-ux-design/" }, " so the whole product reads as one system. You get senior engineers, honest timelines, and code you actually own. See how we work in our ", { text: "portfolio", href: "/portfolio/" }, ", or tell us about your app and we will scope it — free quote within 24 hours."] },
  ],
};

microservices.prose = {
  eyebrow: "Microservices",
  heading: "Microservices Architecture for Teams That Ship Fast",
  blocks: [
    { p: ["Our microservices architecture services help engineering teams break a slow, tangled monolith into independently deployable services that scale, ship, and recover on their own schedule. From our base in Vadodara, we work with product teams across India, the UK, South Africa, and Ivory Coast to define clean service boundaries with domain-driven design — so a payments service and a search service can grow at different rates without one blocking the other. We handle the parts most teams underestimate: ", { text: "API gateways", href: "/services/api-development/" }, ", async messaging with Kafka or RabbitMQ, distributed transactions via the Saga pattern, and the observability you need to debug a request that crosses six services."] },
    { h3: "Decomposition without the downtime", p: ["Most of our engagements start with an existing system, not a blank slate. We use the strangler fig pattern to extract services from a running monolith one bounded context at a time, keeping production traffic stable as we go — the same discipline we bring to full ", { text: "app modernisation", href: "/services/app-modernization/" }, " work. Before any split, we model the data: shared tables become owned schemas, and we design each service's ", { text: "database", href: "/services/database-design/" }, " around its own consistency needs rather than forcing a distributed transaction where eventual consistency will do. The result is a set of services your teams can reason about, test in isolation, and deploy without a release-train bottleneck."] },
    { h3: "Built to run in production", p: ["A microservice is only as good as the platform it runs on, so we ship each service in Docker containers orchestrated by Kubernetes, wired into the CI/CD pipelines and observability we set up through our ", { text: "cloud and DevOps", href: "/cloud-devops/" }, " practice. Service meshes like Istio give you traffic control, retries, and distributed tracing without touching application code, while API gateways handle auth, rate limiting, and routing at the edge. Whether you're scaling a SaaS platform or a mission-critical enterprise system, we design for failure first — health checks, circuit breakers, and graceful degradation are built in, not bolted on. Tell us where your monolith hurts and we'll map the path out. ", { text: "Start a conversation.", href: "/contact/" }] },
  ],
};

performanceOptimization.prose = {
  eyebrow: "Performance Optimisation",
  heading: "Web Performance Optimization Services That Turn Slow into Fast",
  blocks: [
    { p: ["Our web performance optimization services start where guesswork ends — with measurement. We run Lighthouse, capture WebPageTest waterfalls, and read production slow-query logs before touching a single line of code. From our Vadodara base we tune sites and applications for teams across India, the UK, South Africa, and Ivory Coast, profiling JavaScript execution, trimming render-blocking assets, and pushing Core Web Vitals (LCP, CLS, INP) into Google's 'Good' band. What you get back is a fix list ranked by real-world impact, not a generic checklist of things that might help."] },
    { h3: "Faster Backends, Not Just Faster Paints", p: ["Most slowness lives below the fold, in the request. We profile the API layer, eliminate N+1 queries, add the indexes that actually get used, and right-size connection pools — the same discipline we bring to every ", { text: "custom web app", href: "/custom-web-apps/" }, " and SaaS build. Caching is layered deliberately: Redis for hot data, a CDN for static assets, HTTP headers for the browser. When one endpoint drags an entire monolith, we isolate the hot path. Our work in ", { text: "database design", href: "/services/database-design/" }, " and ", { text: "API development", href: "/services/api-development/" }, " is what lets each request do less work under load."] },
    { h3: "Optimisation That Survives Your Next Release", p: ["Speed that regresses on the next deploy is worthless, so we make it durable. We wire performance budgets into CI, run k6 and Locust load tests to find breaking points before your users do, and cover every change with regression tests on staging first. Whether the target is a high-traffic ", { text: "ecommerce store", href: "/ecommerce-development/" }, " or a content-heavy corporate website, the goal is the same — measurable gains you can see in real-user metrics, not just synthetic scores. See how we have done it in our ", { text: "portfolio", href: "/portfolio/" }, ", or ", { text: "tell us where your app slows down", href: "/contact/" }, " and we will begin with an audit."] },
  ],
};

progressiveWebApps.prose = {
  eyebrow: "Progressive Web Apps",
  heading: "Progressive Web App Development That Installs, Works Offline, and Loads Instantly",
  blocks: [
    { p: ["Our progressive web app (PWA) development turns a single codebase into an installable, offline-capable product that behaves like a native app on Android, iOS Safari, and desktop — no app store gatekeeping required. From our base in Vadodara, India, we deliver PWAs for teams across the UK, South Africa, and Ivory Coast, pairing service worker caching, a Web App Manifest, and an app-shell architecture so the first meaningful paint happens in milliseconds. Whether you are shipping a new front end or retrofitting PWA capabilities onto an existing ", { text: "web application", href: "/web-application-development/" }, " or ", { text: "custom web app", href: "/custom-web-apps/" }, ", we engineer for real network conditions — flaky mobile data, dead zones, and low-end devices — not just the demo on office WiFi."] },
    { h3: "Offline-first, installable, and genuinely fast", p: ["We choose caching strategies deliberately: cache-first for the shell, network-first for live data, and background sync for actions taken offline. The result installs from the browser to the home screen, opens without a connection, and passes the Lighthouse PWA checklist with 90+ performance scores. We wire up Web Push (including iOS 16.4+), package Android builds as Trusted Web Activities for Google Play, and treat ", { text: "performance optimisation", href: "/services/performance-optimization/" }, " as a first-class concern rather than an afterthought. Thoughtful ", { text: "UI/UX design", href: "/ui-ux-design/" }, " keeps the experience feeling deliberate on every screen size."] },
    { h3: "Built to connect to your real systems", p: ["A PWA is only as useful as the data behind it, so we build clean ", { text: "API integrations", href: "/services/api-integrations/" }, " into your existing back end — commerce catalogues, ", { text: "SaaS platforms", href: "/saas-development/" }, ", or internal tooling — with predictable sync and clear error states. When a native shell is genuinely required for hardware access, we are candid about it and can extend into ", { text: "mobile app development", href: "/mobile-app-development/" }, " instead of overselling the web. Tell us what your users need in the field, and we will scope a PWA that ships fast and holds up. See the ", { text: "portfolio", href: "/portfolio/" }, " or start a conversation on our ", { text: "contact", href: "/contact/" }, " page."] },
  ],
};

appModernization.prose = {
  eyebrow: "Legacy Modernisation",
  heading: "Legacy Application Modernization Services That De-Risk the Rewrite",
  blocks: [
    { p: ["Our legacy application modernization services replace ageing systems the way that actually survives contact with production: one route at a time, never in a single high-stakes cutover. We use the strangler fig pattern to stand a modern application up around your existing one, redirect traffic feature by feature, and retire the old paths only once the new ones are proven. That means a PHP monolith or a decade-old ", { text: ".NET back office", href: "/custom-software-development/" }, " keeps serving users while we modernise underneath it — no frozen roadmap, no ", { text: "big-bang rewrite", href: "/services/enterprise-applications/" }, ", and no month where the business runs on hope."] },
    { h3: "How the incremental migration actually works", p: ["We start by mapping your domain and putting a proxy in front of the legacy app so traffic can be switched at the route level with feature flags. New endpoints move to a clean service layer — often extracted into ", { text: "microservices", href: "/services/microservices/" }, " only where they earn their keep — while the rest stays untouched. Tired ", { text: "jQuery and Blade frontends", href: "/php-developer/" }, " get rebuilt as maintainable ", { text: "React interfaces", href: "/react-developer/" }, ", and old schemas are migrated with parallel-run and backfill strategies so the ", { text: "database", href: "/services/database-design/" }, " modernises without a maintenance window. Every migrated path ships behind regression and end-to-end tests before the legacy code is decommissioned."] },
    { h3: "What you gain beyond a fresh coat of paint", p: ["Modernisation is only worth it if the numbers improve, so we treat ", { text: "performance and cost", href: "/services/performance-optimization/" }, " as first-class goals — faster page loads, lower infrastructure bills, and a codebase your team can actually change. Clean, documented ", { text: "APIs", href: "/services/api-development/" }, " open the door to the mobile apps and integrations the old architecture blocked. We run this from our Vadodara base for clients across India, the UK, South Africa, and Ivory Coast, with delivery hours that overlap your working day. See how we have modernised systems in our ", { text: "portfolio", href: "/portfolio/" }, ", or ", { text: "tell us what is holding your legacy app back", href: "/contact/" }, " and we will map the first migration step."] },
  ],
};
