import type { ServicePageData } from "@/lib/types";

const mk = (
  slug: string,
  title: string,
  desc: string,
  eyebrow: string,
  heading: string,
  lead: string,
  svcs: { icon: string; title: string; desc: string }[]
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
  cta: { heading: `Start Your ${eyebrow} Project`, body: "Let's discuss your requirements and provide a free estimate." },
});

export const apiDevelopment: ServicePageData = {
  meta: { title: "API Development Services — REST & GraphQL APIs", description: "Custom REST, GraphQL, and WebSocket API development with OAuth/JWT auth, OpenAPI documentation, versioning, and performance optimisation." },
  hero: { eyebrow: "API Development", heading: "APIs for Every Integration — Web to Mobile", lead: "We design and build secure, documented, versioned APIs using REST, GraphQL, and WebSocket patterns — ready for any client to consume.", breadcrumbs: [{ label: "Home", href: "/" }, { label: "Services", href: "/services/" }, { label: "API Development" }] },
  services: { variant: "svc", eyebrow: "What We Build", heading: "API Development Services", items: [{ icon: "🔌", title: "REST APIs", desc: "CRUD-based resource APIs with proper status codes and error handling." }, { icon: "🔷", title: "GraphQL APIs", desc: "Flexible query APIs with schema, resolvers, and subscriptions." }, { icon: "⚡", title: "WebSocket APIs", desc: "Real-time bidirectional APIs for live data and chat." }, { icon: "🔒", title: "Auth & Security", desc: "OAuth 2.0, JWT, API keys, rate limiting, and IP allowlisting." }, { icon: "📖", title: "OpenAPI Docs", desc: "Swagger/Redoc auto-generated documentation with examples." }, { icon: "🔄", title: "API Versioning", desc: "URL, header, and content-type versioning strategies." }] },
  capabilities: { eyebrow: "Technical Depth", heading: "API Capabilities", dark: true, items: [{ icon: "🔌", title: "Express & Fastify", desc: "Production-grade Node.js API frameworks." }, { icon: "🔷", title: "Apollo Server", desc: "GraphQL with resolvers, dataloaders, and subscriptions." }, { icon: "🧪", title: "Contract Testing", desc: "Pact and Dredd for API contract verification." }, { icon: "📊", title: "Performance", desc: "Response caching, pagination, and database query optimisation." }, { icon: "🔒", title: "Security", desc: "Input validation, SQL injection prevention, CORS, and CSP." }, { icon: "📈", title: "Observability", desc: "Structured logging, tracing, and endpoint latency monitoring." }] },
  process: { eyebrow: "How We Work", heading: "API Development Process", steps: [{ title: "Design-First", desc: "OpenAPI spec written and reviewed before any code is written." }, { title: "Core Implementation", desc: "Endpoints, validation, auth, and error handling." }, { title: "Testing", desc: "Unit, integration, and contract tests with 80%+ coverage." }, { title: "Documentation & Deploy", desc: "Swagger docs, rate limits, and production deployment." }] },
  stack: { eyebrow: "Technology Stack", heading: "API Stack", cols: [{ head: "Node.js", items: ["Express", "Fastify", "NestJS", "Hono"] }, { head: "GraphQL", items: ["Apollo Server", "Pothos", "Hasura"] }, { head: "Auth", items: ["JWT", "OAuth 2.0", "Passport.js", "Auth0"] }, { head: "Docs", items: ["Swagger UI", "Redoc", "Stoplight", "Postman"] }] },
  why: { eyebrow: "Why Choose Us", heading: "Why Digital Web Weaver for APIs?", dark: true, items: [{ icon: "📖", title: "Design-First", desc: "API spec reviewed before coding — avoids expensive rework." }, { icon: "🔒", title: "Secure by Default", desc: "Auth, rate limiting, and input validation on every endpoint." }, { icon: "🧪", title: "Contract Tested", desc: "Consumer-driven contract tests prevent breaking changes." }, { icon: "📊", title: "Observable", desc: "Every API ships with logging, tracing, and latency dashboards." }] },
  faq: { heading: "API Development FAQ", items: [{ q: "REST or GraphQL?", a: "REST for simple CRUD and mobile APIs. GraphQL when clients need flexible querying or you're building a data-heavy dashboard." }, { q: "How do you handle API versioning?", a: "URL versioning (/v1/, /v2/) for public APIs. Header versioning for internal APIs. We document the upgrade path for each version." }, { q: "Can you document our existing API?", a: "Yes — we generate OpenAPI specs from existing codebases using swagger-autogen or manual annotation." }, { q: "How do you prevent API abuse?", a: "Rate limiting with Redis, API key management, IP allowlisting, and bot detection via middleware." }] },
  cta: { heading: "Build Your API", body: "Secure, documented, and ready for any client." },
};

export const apiIntegrations: ServicePageData = mk(
  "api-integrations", "API Integration Services — Connect Your Business Systems", "Connect payment gateways, CRMs, ERPs, and third-party APIs with custom middleware, webhook management, and error handling.",
  "API Integrations", "APIs That Connect Every System You Rely On",
  "We integrate third-party APIs, payment gateways, CRMs, and ERPs into your applications — reliably, with proper error handling and monitoring.",
  [
    { icon: "💳", title: "Payment Gateways", desc: "Stripe, Razorpay, PayPal, Braintree integration." },
    { icon: "📋", title: "CRM Integration", desc: "Salesforce, HubSpot, and Zoho API connections." },
    { icon: "🔗", title: "ERP Integration", desc: "SAP, Oracle, and Odoo data sync." },
    { icon: "🚚", title: "Shipping APIs", desc: "FedEx, UPS, DHL, and custom courier integration." },
    { icon: "🔔", title: "Webhooks", desc: "Inbound and outbound webhook management with retry logic." },
    { icon: "📊", title: "Analytics APIs", desc: "GA4, Mixpanel, and custom event ingestion." },
  ]
);

export const corporateWebsites: ServicePageData = mk(
  "corporate-websites", "Corporate Website Development — Lead Generation & Brand", "Professional corporate websites designed to convert visitors into leads. CMS integration, SEO structure, performance optimisation.",
  "Corporate Websites", "Corporate Websites Designed to Convert Visitors into Leads",
  "We build professional, fast, and SEO-optimised corporate websites that represent your brand and capture qualified leads.",
  [
    { icon: "🏢", title: "Company Websites", desc: "Professional presence with CMS for easy content management." },
    { icon: "📋", title: "Lead Capture", desc: "Forms, CTAs, and landing pages optimised for conversion." },
    { icon: "🔍", title: "Technical SEO", desc: "Structured data, sitemap, Core Web Vitals, and meta setup." },
    { icon: "🌍", title: "Multi-Language", desc: "i18n content management for international markets." },
    { icon: "📱", title: "Mobile-First", desc: "Responsive design prioritising mobile user experience." },
    { icon: "⚡", title: "Performance", desc: "90+ Lighthouse scores for speed and conversion impact." },
  ]
);

export const databaseDesign: ServicePageData = mk(
  "database-design", "Database Design & Architecture — Scale & Speed", "Database design for relational and NoSQL systems: schema design, indexing, query optimisation, migrations, and sharding strategies.",
  "Database Design", "Database Architecture Built for Scale and Speed",
  "We design database schemas, optimise queries, and architect data layers for performance, integrity, and future scale.",
  [
    { icon: "🗄️", title: "Relational Design", desc: "PostgreSQL and MySQL schema design with normalisation and indexing." },
    { icon: "🍃", title: "NoSQL Architecture", desc: "MongoDB, Redis, and DynamoDB data modelling." },
    { icon: "🔄", title: "Migration Strategy", desc: "Zero-downtime schema migrations with rollback plans." },
    { icon: "⚡", title: "Query Optimisation", desc: "Explain plans, index tuning, and slow query elimination." },
    { icon: "📊", title: "Data Warehousing", desc: "OLAP schema design for analytics and BI workloads." },
    { icon: "🔀", title: "Sharding & Partitioning", desc: "Horizontal scale strategies for high-volume tables." },
  ]
);

export const enterpriseApplications: ServicePageData = mk(
  "enterprise-applications", "Enterprise Application Development — Scale Across Teams", "Enterprise application development: large-scale systems with role-based access, workflow automation, SSO, multi-tenant architecture, and compliance.",
  "Enterprise Applications", "Enterprise Systems That Scale Across Teams and Workflows",
  "We build large-scale enterprise applications with complex role hierarchies, workflow automation, SSO, and multi-tenant architectures.",
  [
    { icon: "🏛️", title: "ERP-Class Systems", desc: "Custom enterprise resource planning and management platforms." },
    { icon: "🔒", title: "Role-Based Access", desc: "Granular RBAC with team, department, and org-level permissions." },
    { icon: "🔄", title: "Workflow Automation", desc: "Approval chains, notifications, and business process automation." },
    { icon: "🔑", title: "SSO & SAML", desc: "Enterprise SSO via Okta, Auth0, or Microsoft Entra." },
    { icon: "🏗️", title: "Multi-Tenant Architecture", desc: "Data isolation, tenant management, and custom branding." },
    { icon: "📋", title: "Audit & Compliance", desc: "Full audit logs, GDPR controls, and compliance reporting." },
  ]
);

export const iosDevelopment: ServicePageData = mk(
  "ios-development", "iOS App Development — Native Swift & SwiftUI", "Native iOS app development with Swift, SwiftUI, and App Store submission. HIPAA, payment integrations, and enterprise iOS solutions.",
  "iOS Development", "Native iOS Apps Built for Performance and App Store Launch",
  "We build polished, App Store-approved iOS apps with Swift and SwiftUI — delivered with TestFlight builds and full submission support.",
  [
    { icon: "📱", title: "Swift & SwiftUI", desc: "Modern declarative UI with native platform feel." },
    { icon: "🛒", title: "App Store Submission", desc: "Screenshots, metadata, and review compliance handled." },
    { icon: "💳", title: "In-App Purchases", desc: "StoreKit 2, subscriptions, and receipt validation." },
    { icon: "🔔", title: "Push Notifications", desc: "APNS, rich notifications, and notification extensions." },
    { icon: "🗺️", title: "Maps & Location", desc: "MapKit, CoreLocation, and geofencing." },
    { icon: "🔄", title: "App Modernisation", desc: "UIKit to SwiftUI migration and Objective-C rewrites." },
  ]
);

export const microservices: ServicePageData = mk(
  "microservices", "Microservices Architecture — For Teams That Ship Fast", "Microservices design and implementation: service decomposition, API gateway, Docker/Kubernetes, event-driven architecture, and observability.",
  "Microservices", "Microservices Architecture for Teams That Ship Fast",
  "We design and build microservices architectures that scale independently, deploy continuously, and recover automatically.",
  [
    { icon: "🧩", title: "Service Decomposition", desc: "Domain-driven design to identify service boundaries." },
    { icon: "🔌", title: "API Gateway", desc: "Kong, AWS API Gateway, or custom routing and auth." },
    { icon: "📨", title: "Event-Driven", desc: "Kafka and RabbitMQ for async service communication." },
    { icon: "🐳", title: "Container Orchestration", desc: "Docker and Kubernetes for service lifecycle management." },
    { icon: "📊", title: "Service Mesh", desc: "Istio or Linkerd for observability and traffic management." },
    { icon: "🔄", title: "Saga Pattern", desc: "Distributed transaction management across services." },
  ]
);

export const performanceOptimization: ServicePageData = mk(
  "performance-optimization", "Performance Optimisation — Make Your App Fast", "Web performance optimisation: Core Web Vitals, database query tuning, Redis caching, image optimisation, and load testing.",
  "Performance Optimisation", "Performance Optimisation That Turns Slow into Fast",
  "We audit and fix performance bottlenecks — from Core Web Vitals and JavaScript bundles to slow queries and inefficient caching.",
  [
    { icon: "⚡", title: "Core Web Vitals", desc: "LCP, CLS, FID optimisation for Google ranking and UX." },
    { icon: "🗄️", title: "Database Tuning", desc: "Slow query analysis, index optimisation, and N+1 elimination." },
    { icon: "💾", title: "Caching Strategy", desc: "Redis, CDN, and HTTP caching for scalable performance." },
    { icon: "📦", title: "Bundle Optimisation", desc: "Tree-shaking, code splitting, and lazy loading." },
    { icon: "🖼️", title: "Image Optimisation", desc: "WebP conversion, responsive images, and CDN delivery." },
    { icon: "📊", title: "Load Testing", desc: "k6 and Locust load tests to find breaking points." },
  ]
);

export const progressiveWebApps: ServicePageData = mk(
  "progressive-web-apps", "Progressive Web App Development — Native Feel Without Native Build", "PWA development: offline mode, push notifications, installable apps, service worker implementation, and Lighthouse optimisation.",
  "Progressive Web Apps", "PWAs That Feel Native Without a Native Build",
  "We build Progressive Web Apps that install from the browser, work offline, and deliver native-like performance across all platforms.",
  [
    { icon: "📲", title: "Installable PWA", desc: "Web App Manifest and install prompts for home screen placement." },
    { icon: "📴", title: "Offline Mode", desc: "Service worker caching strategies for offline functionality." },
    { icon: "🔔", title: "Push Notifications", desc: "Web Push API with opt-in management and deep linking." },
    { icon: "⚡", title: "App Shell Architecture", desc: "Instant loads with shell caching and dynamic content fetch." },
    { icon: "📱", title: "Cross-Platform", desc: "One codebase for Android, iOS (Safari), and desktop." },
    { icon: "🔬", title: "Lighthouse Targets", desc: "PWA checklist, 90+ performance, and full installability." },
  ]
);

export const appModernization: ServicePageData = mk(
  "app-modernization", "App Modernisation — Legacy to Modern Without Big-Bang Rewrite", "Legacy application modernisation: strangler fig pattern, monolith to microservices, database migration, and UI modernisation.",
  "App Modernisation", "Modernise Legacy Systems Without the Big-Bang Rewrite",
  "We modernise legacy applications incrementally — using the strangler fig pattern to reduce risk while continuously delivering new value.",
  [
    { icon: "🔄", title: "Strangler Fig Pattern", desc: "Route-by-route migration from legacy to modern system." },
    { icon: "🧩", title: "Monolith to Microservices", desc: "Extract services without disrupting production traffic." },
    { icon: "🗄️", title: "Database Migration", desc: "Schema modernisation and NoSQL-to-SQL migrations." },
    { icon: "🎨", title: "UI Modernisation", desc: "Old PHP/jQuery frontends migrated to React." },
    { icon: "⚡", title: "Zero-Downtime", desc: "Feature flags and parallel-run strategies for safe migration." },
    { icon: "🧪", title: "Regression Testing", desc: "Snapshot tests and e2e coverage before decommissioning legacy." },
  ]
);
