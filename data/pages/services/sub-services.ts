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
  meta: { title: "REST & GraphQL API Development Services", description: "Custom REST, GraphQL, and WebSocket API development with OAuth/JWT auth, OpenAPI documentation, versioning, and performance optimisation." },
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
  "api-integrations", "API & Third-Party Integration Services", "Connect payment gateways, CRMs, ERPs, and third-party APIs with custom middleware, webhook management, and error handling.",
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
  "corporate-websites", "Corporate Website Development Services", "Professional corporate websites designed to convert visitors into leads. CMS integration, SEO structure, performance optimisation.",
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
  "database-design", "Database Design, Schema & Optimisation", "Database design for relational and NoSQL systems: schema design, indexing, query optimisation, migrations, and sharding strategies.",
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
  "enterprise-applications", "Enterprise Application Development", "Enterprise application development: large-scale systems with role-based access, workflow automation, SSO, multi-tenant architecture, and compliance.",
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
  "ios-development", "iOS App Development — Native Swift", "Native iOS app development with Swift, SwiftUI, and App Store submission. HIPAA, payment integrations, and enterprise iOS solutions.",
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
  "microservices", "Microservices Architecture Services", "Microservices design and implementation: service decomposition, API gateway, Docker/Kubernetes, event-driven architecture, and observability.",
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
  "performance-optimization", "Web Performance Optimisation Services", "Web performance optimisation: Core Web Vitals, database query tuning, Redis caching, image optimisation, and load testing.",
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
  "progressive-web-apps", "Progressive Web App (PWA) Development", "PWA development: offline mode, push notifications, installable apps, service worker implementation, and Lighthouse optimisation.",
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
  "app-modernization", "Legacy App Modernisation Services", "Legacy application modernisation: strangler fig pattern, monolith to microservices, database migration, and UI modernisation.",
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
