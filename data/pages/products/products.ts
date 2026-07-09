import type { ServicePageData } from "@/lib/types";

const mk = (title: string, desc: string, eyebrow: string, heading: string, lead: string, svcs: { icon: string; title: string; desc: string }[], marqueeItems?: string[]): ServicePageData => ({
  meta: { title, description: desc },
  hero: { eyebrow, heading, lead, breadcrumbs: [{ label: "Home", href: "/" }, { label: "Apps", href: "/apps/" }, { label: eyebrow }], ...(marqueeItems && { marqueeItems }) },
  services: { variant: "svc", eyebrow: "Core Features", heading: "What's Included", items: svcs },
  cta: { heading: `Get ${eyebrow}`, body: "Contact us for a demo, pricing, or custom development." },
});

export const foodDeliveryApp = mk(
  "Food Delivery App Development Company India | Multi-Vendor",
  "Food delivery app development with customer ordering, restaurant dashboard, and driver app — built in 8 weeks with real-time GPS tracking. Get a free quote.",
  "Food Delivery App", "Custom Food Delivery App — Built in 8 Weeks",
  "We build complete three-sided food delivery ecosystems: customer app, restaurant management dashboard, and delivery partner app with real-time tracking.",
  [
    { icon: "📱", title: "Customer App", desc: "Browse, order, and track delivery in real-time on iOS and Android." },
    { icon: "🍽️", title: "Restaurant Dashboard", desc: "Order management, menu builder, and revenue analytics." },
    { icon: "🛵", title: "Driver App", desc: "Order pickup, navigation, and earnings dashboard for delivery partners." },
    { icon: "💳", title: "Payment Integration", desc: "Stripe, Razorpay, UPI, and cash-on-delivery support." },
    { icon: "📍", title: "Real-Time Tracking", desc: "Live delivery tracking with ETA updates via WebSocket." },
    { icon: "🔔", title: "Push Notifications", desc: "Order status, promo alerts, and driver assignment notifications." },
  ]
,
  ["Customer App","Restaurant Dashboard","Driver App","React Native","Real-time Tracking","Stripe","Razorpay","Google Maps","Firebase","iOS & Android"]);

export const laundryManagementSystem = mk(
  "Laundry Management System | Software for India, UK & UAE",
  "Laundry management system with order tracking, pickup/delivery scheduling, customer app, and admin panel for laundry businesses. Get a free demo in 24 hours.",
  "Laundry Management", "Laundry Management System for Modern Laundry Businesses",
  "We build complete laundry management software: customer booking app, driver tracking, admin panel, and automated notifications.",
  [
    { icon: "👗", title: "Order Management", desc: "Garment tracking from pickup to delivery with barcode labels." },
    { icon: "📅", title: "Pickup & Delivery", desc: "Schedule management with driver assignment and route planning." },
    { icon: "📱", title: "Customer App", desc: "Book, track, and pay for laundry from a mobile app." },
    { icon: "🔔", title: "SMS/WhatsApp Alerts", desc: "Automated updates at each order stage." },
    { icon: "💰", title: "Billing & Invoicing", desc: "Per-item pricing, subscriptions, and GST-compliant invoices." },
    { icon: "📊", title: "Admin Dashboard", desc: "Revenue, order volume, and operations analytics." },
  ]
,
  ["Customer App","Driver App","QR Tracking","React Native","Slot Scheduling","Stripe","Firebase","White-label","Multi-branch"]);

export const inventoryManagementSystem = mk(
  "Inventory Management System | Custom Software India",
  "Inventory management system with real-time stock tracking, purchase orders, multi-warehouse support, and barcode/QR scanning. Get a free quote in 24 hours.",
  "Inventory System", "Custom Inventory Management System for Your Business",
  "We build inventory management systems with real-time stock tracking, purchase orders, barcode scanning, and multi-warehouse support.",
  [
    { icon: "📦", title: "Stock Tracking", desc: "Real-time stock levels across products, variants, and locations." },
    { icon: "🏭", title: "Multi-Warehouse", desc: "Manage stock across multiple locations with transfer workflows." },
    { icon: "📋", title: "Purchase Orders", desc: "Supplier management, PO creation, and receiving workflows." },
    { icon: "🔍", title: "Barcode & QR", desc: "Scan-to-update stock movements with mobile barcode readers." },
    { icon: "📊", title: "Reports & Alerts", desc: "Low-stock alerts, valuation reports, and movement history." },
    { icon: "🔗", title: "Integrations", desc: "Sync with accounting (Tally, QuickBooks) and e-commerce." },
  ]
,
  ["Multi-warehouse","Barcode scanning","QR codes","Shopify sync","WooCommerce","QuickBooks","Purchase orders","ABC analysis","FIFO / LIFO"]);

export const learningManagementSystem = mk(
  "Learning Management System (LMS) Development | India",
  "Learning management system (LMS) with course builder, video hosting, quizzes, certificates, and multi-instructor support. Get a free demo in 24 hours.",
  "LMS Platform", "Custom Learning Management System for Your Training Needs",
  "We build feature-rich LMS platforms with video courses, assessments, progress tracking, certificates, and multi-instructor support.",
  [
    { icon: "📚", title: "Course Builder", desc: "Drag-and-drop course creation with video, text, and quizzes." },
    { icon: "🎥", title: "Video Hosting", desc: "Adaptive bitrate video streaming with progress tracking." },
    { icon: "📝", title: "Assessments", desc: "Quiz builder with multiple question types and auto-grading." },
    { icon: "🏅", title: "Certificates", desc: "Auto-generated, verifiable certificates on course completion." },
    { icon: "👨‍🏫", title: "Multi-Instructor", desc: "Instructor accounts with course management and revenue splits." },
    { icon: "📊", title: "Analytics", desc: "Student progress, engagement, and completion rate dashboards." },
  ],
  ["LMS", "Course builder", "SCORM", "Video hosting", "Certifications", "Multi-instructor", "Gamification", "White-label", "Corporate training", "HLS streaming"]
);

export const codeigniterDevelopment = mk(
  "CodeIgniter Development Company | CI4 Experts India",
  "CodeIgniter development company building custom CI4 apps, REST APIs, and CI2/CI3 legacy migrations for global clients. Get a free quote in 24 hours.",
  "CodeIgniter Development", "CodeIgniter Development — From Legacy to CI4",
  "We build and maintain CodeIgniter applications — from new CI4 projects to legacy CI2/CI3 migration and REST API development.",
  [
    { icon: "🔥", title: "CI4 Development", desc: "New applications built on CodeIgniter 4 with PHP 8." },
    { icon: "🔄", title: "Legacy Migration", desc: "CI2/CI3 to CI4 migration with zero-downtime strategy." },
    { icon: "🔌", title: "REST APIs", desc: "RESTful API development with CodeIgniter 4's resource controller." },
    { icon: "🧩", title: "Custom Modules", desc: "Feature modules and third-party library integration." },
    { icon: "🔒", title: "Security Hardening", desc: "CSRF, XSS filtering, and input validation." },
    { icon: "⚡", title: "Performance", desc: "Query optimisation, caching, and Composer dependency management." },
  ]
,
  ["CodeIgniter 4","CI4 REST API","CI3 migration","PHP 8.2","JWT auth","Query builder","PHPUnit","Docker","Redis cache","CSRF protection"]);

export const wpLogisticsCourierPlugin = mk(
  "CourierPress – WordPress Logistics Tracking Plugin | India",
  "CourierPress WordPress plugin for logistics businesses: shipment tracking, courier assignment, and customer notifications. Get a free demo today.",
  "CourierPress Plugin", "CourierPress — WordPress Logistics Tracking Plugin",
  "CourierPress is our commercial WordPress plugin for logistics and courier businesses — shipment tracking, driver assignment, and customer notifications.",
  [
    { icon: "📦", title: "Shipment Tracking", desc: "Real-time shipment status with customer-facing tracking page." },
    { icon: "🚚", title: "Courier Assignment", desc: "Assign shipments to drivers with status update workflow." },
    { icon: "🔔", title: "Customer Notifications", desc: "Email and SMS alerts at each shipment milestone." },
    { icon: "📊", title: "Admin Dashboard", desc: "Shipment management, driver management, and reporting." },
    { icon: "🔌", title: "WooCommerce Integration", desc: "Auto-create shipments from WooCommerce orders." },
    { icon: "📋", title: "Label Printing", desc: "Generate and print shipping labels from the admin." },
  ]
,
  ["WordPress","WooCommerce","Shipment tracking","Driver assignment","Email/SMS alerts","Admin panel","Label printing","REST API","PHP 8"]);

export const wpCourierTrackingPlugin = mk(
  "WordPress Courier Tracking Plugin | Digital Web Weaver",
  "WordPress courier tracking plugin with an embeddable tracking widget, shipment status pages, and multi-courier API support. Get a free demo today.",
  "Courier Tracking Plugin", "WordPress Courier Tracking Plugin",
  "Our standalone WordPress courier tracking plugin lets customers track shipments directly on your website — no redirect to third-party sites.",
  [
    { icon: "🔍", title: "Tracking Widget", desc: "Embeddable tracking form on any page or post." },
    { icon: "📦", title: "Status Pages", desc: "Beautiful shipment status pages with timeline view." },
    { icon: "🚚", title: "Multi-Courier", desc: "Support for multiple courier APIs via a unified interface." },
    { icon: "🔔", title: "Email Notifications", desc: "Automated emails when shipment status changes." },
    { icon: "🔌", title: "REST API", desc: "JSON API endpoint for custom tracking integrations." },
    { icon: "🎨", title: "Customisable", desc: "Colour, typography, and label customisation options." },
  ]
,
  ["WordPress","Tracking widget","Status pages","Multi-courier","Email notifications","REST API","WooCommerce","PHP 8","Responsive"]);

// ── SEO: supplementary prose / FAQ / related (appended) ──

foodDeliveryApp.prose = {
  eyebrow: "Food Delivery App",
  heading: "Food Delivery App Development",
  blocks: [
    { p: ["Food delivery app development succeeds or fails on one thing: whether the customer app, restaurant dashboard, and driver app stay in sync under real load. We build all three as a single connected system, not three loosely wired products. From our base in Vadodara, India, we ship complete delivery platforms to founders across the UK, South Africa, and Ivory Coast — customer ordering, live GPS tracking, payments, and dispatch logic that holds up during a Friday-night rush. Our ", { text: "mobile app development", href: "/mobile-app-development/" }, " team pairs native-quality apps with a backend that routes hundreds of concurrent orders without dropping a beat."] },
    { h3: "Three apps, one real-time backbone", p: ["Every order moves through three interfaces at once, so the hard part is state — keeping a customer's ETA, a restaurant's prep queue, and a driver's route consistent in real time. We build the tracking layer on WebSocket-driven updates so location, order status, and dispatch changes propagate instantly. Our ", { text: "React Native developers", href: "/react-developer/" }, " handle the customer and driver apps, while a Node.js backend manages assignment logic, surge routing, and settlement. Payments and mapping stay reliable through careful ", { text: "API integrations", href: "/services/api-integrations/" }, " — Stripe, Razorpay, UPI, and Google Maps — each wrapped with retry and reconciliation so a failed webhook never leaves an order stuck between paid and confirmed."] },
    { h3: "Built to scale past launch", p: ["A working demo is easy; a platform that survives its first thousand daily orders is not. We design the data model, indexing, and queue architecture up front so ", { text: "performance stays predictable", href: "/services/performance-optimization/" }, " as vendors, drivers, and delivery zones multiply. The same foundations extend into wider dispatch logic — zone-based pricing, multi-restaurant routing, and automated driver payouts — when you're ready to expand. Interface polish matters too: we keep customer ordering to a few taps and give restaurant staff a dashboard they can actually run mid-shift. See how we've shipped comparable systems in our ", { text: "portfolio", href: "/portfolio/" }, ", and tell us what you're building."] },
  ],
};
foodDeliveryApp.faq = {
  heading: "Frequently Asked Questions",
  items: [
    { q: "How much does food delivery app development cost?", a: "Pricing depends on scope, but a complete three-app platform — customer app, restaurant dashboard, and driver app — typically starts in the mid five figures. We scope each build against your feature list and target regions, then quote a fixed price with no hidden per-order fees. Contact us for a detailed estimate." },
    { q: "Can the app be customised to our business model?", a: "Everything is custom-built, not a rebranded template. You own the source code, and we tailor menu structures, commission models, payment gateways, and delivery-zone logic to your market — whether that's UPI in India or local processors across Africa and Europe. New features can be added at any stage without fighting a rigid framework." },
    { q: "How long does it take to launch?", a: "A standard food delivery platform ships in about eight weeks, covering all three apps, real-time GPS tracking, and payment integration. Timelines shift with scope — extra vendor tooling or complex dispatch rules add time. We work in weekly milestones so you see working builds throughout, not just a reveal at the end." },
    { q: "Do you provide support after launch?", a: "Yes. After launch we offer maintenance plans covering bug fixes, OS and dependency updates, uptime monitoring, and new feature work. Because we're India-based with global delivery experience, support spans your business hours across the UK, South Africa, and Ivory Coast. You can also hire a dedicated developer for ongoing roadmap work." },
  ],
};
foodDeliveryApp.related = [
  { label: "Mobile App Development", href: "/mobile-app-development/", desc: "Native iOS and Android apps built with React Native for speed and reliability." },
  { label: "API Integrations", href: "/services/api-integrations/", desc: "Connect payments, maps, and messaging with reliable, reconciled third-party integrations." },
  { label: "Logistics Software", href: "/logistics/", desc: "Delivery, dispatch, and tracking software for logistics-driven businesses." },
  { label: "Hire a Dedicated Resource", href: "/hire-dedicated-resource/", desc: "Add a vetted developer to your team for ongoing app roadmap work." },
];

laundryManagementSystem.prose = {
  eyebrow: "Laundry Management",
  heading: "Laundry Management Software Built for Real Operations",
  blocks: [
    { p: ["Laundry management software should do more than log orders — it should run the whole floor. We build systems that track every garment from pickup to delivery with barcode or QR labels, assign drivers to pickup and drop slots, price per item or by subscription, and push GST-compliant invoices to customers automatically. From our base in Vadodara, India, we deliver to laundry and dry-cleaning businesses across India, the UK, South Africa, and Ivory Coast, and each build is tailored to how your branches actually operate — not a rigid template you bend your workflow around. Whether you run a single storefront or a multi-branch chain, the platform is engineered as a proper ", { text: "custom software development", href: "/custom-software-development/" }, " project with white-label branding, role-based access, and reporting your managers will actually use."] },
    { h3: "A connected system: customer app, driver app, and admin panel", p: ["Most laundry operations lose time in the gaps between counter, van, and back office. We close those gaps with a connected platform. Customers book, track, and pay through a ", { text: "mobile app", href: "/mobile-app-development/" }, " while drivers get route-ready pickup and delivery lists, and your team runs everything from an admin dashboard showing revenue, order volume, and turnaround times. Because we build the backend around clean ", { text: "API development", href: "/services/api-development/" }, ", the pieces stay in sync in real time — a status change at the wash floor reaches the customer's phone instantly. For chains, our ", { text: "enterprise application", href: "/services/enterprise-applications/" }, " experience keeps multi-branch data consistent without slowing anyone down."] },
    { h3: "Automation and integrations that cut manual work", p: ["The features that save the most labour are the quiet ones: SMS and WhatsApp alerts at every order stage, automatic slot reminders, and low-stock warnings on detergents and supplies. We layer in ", { text: "AI automation", href: "/ai-automation/" }, " for demand forecasting and smart route planning, and wire the system into the payment gateways, accounting tools, and messaging services you already use through solid ", { text: "API integrations", href: "/services/api-integrations/" }, ". The result is software that fits your process on day one and scales as you add branches or services. See how we approach builds like this on our ", { text: "portfolio", href: "/portfolio/" }, ", or tell us about your operation and we'll scope it — book a free demo through our ", { text: "contact page", href: "/contact/" }, "."] },
  ],
};
laundryManagementSystem.faq = {
  heading: "Frequently Asked Questions",
  items: [
    { q: "How much does a laundry management system cost?", a: "Pricing depends on scope — a single-branch admin panel with a customer app costs less than a multi-branch, white-label platform with driver routing and AI forecasting. We scope each project against your actual workflow and share a fixed quote before development. Contact us for a demo and a transparent, itemised estimate within 24 hours." },
    { q: "Can the software be customised for my laundry business?", a: "Yes — every build is custom. We adapt per-item pricing, subscription plans, garment tags, branding, and branch structure to how you already work. White-label apps, role-based staff access, and region-specific tax rules like GST are standard. Nothing is a locked template; we shape the system around your operation, not the other way around." },
    { q: "How long does it take to build and launch?", a: "A focused single-branch system with customer app, admin panel, and notifications typically ships in 8 to 10 weeks. Multi-branch chains with driver apps, routing, and integrations take longer. We work in stages so you see a working demo early, then refine before launch rather than waiting until the very end." },
    { q: "What support do you provide after launch?", a: "We offer ongoing maintenance, bug fixes, feature updates, and server monitoring after go-live. Based in India with global delivery to the UK, South Africa, and Ivory Coast, we support clients across time zones. You can start with a launch package and move to a monthly retainer as your order volume and branch count grow." },
  ],
};
laundryManagementSystem.related = [
  { label: "Custom Software Development", href: "/custom-software-development/", desc: "Tailored platforms built around your exact operational workflow." },
  { label: "Mobile App Development", href: "/mobile-app-development/", desc: "Customer and driver apps for iOS and Android." },
  { label: "AI Automation", href: "/ai-automation/", desc: "Demand forecasting, smart routing, and automated alerts." },
  { label: "API Integrations", href: "/services/api-integrations/", desc: "Connect payments, accounting, and messaging tools cleanly." },
];

inventoryManagementSystem.prose = {
  eyebrow: "Inventory System",
  heading: "A Custom Inventory Management System Built Around How You Actually Work",
  blocks: [
    { p: ["An inventory management system is only as good as the data flowing through it. We build custom inventory management software that tracks stock in real time across products, variants, and warehouses, with barcode and QR scanning so every receipt, transfer, and dispatch updates the moment it happens. Instead of forcing your team into a rigid off-the-shelf tool, we scope the system around how your business genuinely receives, stores, and ships goods, and deliver it as ", { text: "custom software development", href: "/custom-software-development/" }, " tailored to your exact workflows. We are based in Vadodara, India, and deliver to clients across the UK, South Africa, and Ivory Coast, so the system fits your locations, currencies, and tax rules rather than a generic template."] },
    { h3: "Built to fit your operations, not the other way around", p: ["Every warehouse runs differently, so we model purchase orders, supplier receiving, stock transfers, and low-stock alerts around your real processes. The system connects to the tools you already run, including accounting platforms like Tally and QuickBooks, through clean ", { text: "API integrations", href: "/services/api-integrations/" }, " that keep stock levels honest across every channel. For retailers selling online, we sync inventory directly with your ", { text: "e-commerce platform", href: "/ecommerce-development/" }, " so a web sale instantly decrements available stock, preventing the overselling and backorders that quietly erode customer trust and margin."] },
    { h3: "Scanning, reporting, and mobile-first control", p: ["Warehouse staff should not be tied to a desk. We pair the core system with a ", { text: "mobile app", href: "/mobile-app-development/" }, " for scan-to-update stock movements, cycle counts, and floor-level receiving, so counts stay accurate without manual data entry. Managers get valuation reports, movement history, low-stock thresholds, and ABC analysis to see exactly where capital is tied up. Whether you run a single stockroom or a multi-branch operation, the system scales without a rebuild. Tell us how your inventory actually moves and we will show you what a system built around it looks like. ", { text: "Start a conversation", href: "/contact/" }, "."] },
  ],
};
inventoryManagementSystem.faq = {
  heading: "Frequently Asked Questions",
  items: [
    { q: "How much does a custom inventory management system cost?", a: "Pricing depends on scope: warehouse count, integrations, and whether you need a mobile scanning app. A focused single-location system starts lower than a multi-warehouse build with accounting and e-commerce sync. We scope your requirements and send a fixed-price quote within 24 hours, with no obligation and no hidden licensing fees." },
    { q: "Can the system be customised to our specific workflows?", a: "Yes, customisation is the whole point. We model your purchase orders, receiving steps, stock-transfer rules, pricing, and approval flows around how you actually operate, not a rigid template. We also add fields, roles, reports, and integrations with tools like Tally, QuickBooks, Shopify, or WooCommerce so the system mirrors your real processes." },
    { q: "How long does it take to build and deploy?", a: "A standard single-warehouse inventory system typically launches in six to eight weeks. Multi-warehouse builds with barcode scanning, mobile apps, and deep accounting or e-commerce integrations take longer. We work in short milestones so you review working software early and often, and we can prioritise a core release first, then extend." },
    { q: "What support and maintenance do you provide after launch?", a: "Every build includes a post-launch support window for fixes and onboarding. Beyond that we offer maintenance plans covering updates, backups, monitoring, and new features as your operation grows. Because we are the team that built it, changes ship fast. We support clients across India, the UK, South Africa, and Ivory Coast." },
  ],
};
inventoryManagementSystem.related = [
  { label: "Custom Software Development", href: "/custom-software-development/", desc: "Bespoke systems built around your exact operational workflows." },
  { label: "E-commerce Development", href: "/ecommerce-development/", desc: "Online stores that sync stock in real time with your inventory." },
  { label: "API Integrations", href: "/services/api-integrations/", desc: "Connect inventory to accounting, POS, and e-commerce platforms." },
  { label: "CRM & ERP Systems", href: "/crm-erp-systems/", desc: "Extend inventory into full order, supplier, and finance management." },
];

learningManagementSystem.prose = {
  eyebrow: "LMS Platform",
  heading: "Learning Management System (LMS) Development, Engineered to Scale",
  blocks: [
    { p: ["Learning management system (LMS) development sits at the intersection of content, video engineering, and assessment logic — and getting it right takes far more than a course list bolted onto a template. At Digital Web Weaver, our Vadodara team builds LMS platforms as proper multi-tenant ", { text: "SaaS products", href: "/saas-development/" }, ", engineered for the way training programs actually grow: from a single instructor to hundreds of courses and thousands of concurrent learners. Whether you are launching a public course marketplace or a private corporate academy, the architecture decisions made early decide how far the platform can scale. We build for ", { text: "edtech", href: "/edtech/" }, " founders, corporate L&D teams, and coaching businesses across India, the UK, South Africa, and Ivory Coast."] },
    { h3: "Video, assessments, and progress that hold up", p: ["The hard parts of an LMS are the ones learners never notice: adaptive-bitrate video that streams cleanly over a patchy 3G connection, quiz grading that cannot be gamed, and progress tracking that survives a dropped session. We engineer HLS streaming, resumable uploads, and auto-generated certificates that verify against tamper-proof records. Thoughtful ", { text: "UI/UX design", href: "/ui-ux-design/" }, " keeps the drag-and-drop course builder approachable for non-technical instructors, while a hardened backend and sensible caching keep dashboards responsive even as your catalogue and enrolment numbers climb into the tens of thousands."] },
    { h3: "Integrated, mobile-ready, and built to extend", p: ["An LMS rarely lives alone. We connect yours to payment gateways, CRMs, and single sign-on so enrolments, invoices, and learner records stay in sync across your stack. Native ", { text: "mobile apps", href: "/mobile-app-development/" }, " let students download lessons for offline study, and optional AI can power quiz generation, auto-tagging, and personalised learning paths. Everything ships white-label, carrying your brand rather than ours, with the source code handed over so you are never locked in. Tell us about your training goals and we will turn around a working demo in 24 hours — ", { text: "start a conversation", href: "/contact/" }, "."] },
  ],
};
learningManagementSystem.faq = {
  heading: "Frequently Asked Questions",
  items: [
    { q: "How much does LMS development cost?", a: "Pricing depends on scope. A focused MVP with a course builder, video hosting, and payments typically starts in the mid four figures (USD), while multi-instructor marketplaces with white-label tenants, mobile apps, and AI features cost more. We scope your exact feature list first, then give a fixed quote — no open-ended billing." },
    { q: "Can the LMS be fully customised to our workflow?", a: "Yes. We build custom, not off-the-shelf, so every module — course structure, grading rules, certificate design, revenue splits, branding — is shaped around how your organisation actually trains and sells. You own the source code outright, which means the platform can keep evolving with your roadmap long after launch." },
    { q: "How long does it take to build an LMS?", a: "A core LMS with courses, video, quizzes, certificates, and payments usually ships in roughly 8 to 12 weeks. You see a working demo within 24 hours of engaging us and get regular builds throughout. Larger platforms with native mobile apps or complex integrations extend the timeline, which we map out upfront." },
    { q: "What support do you provide after launch?", a: "We offer ongoing maintenance, monitoring, and feature development after go-live. That covers security updates, bug fixes, video-infrastructure tuning, and new modules as your catalogue grows. Our Vadodara team delivers globally across Indian, UK, South African, and Ivory Coast time zones, so support stays responsive wherever your learners are based." },
  ],
};
learningManagementSystem.related = [
  { label: "SaaS Development", href: "/saas-development/", desc: "Multi-tenant, subscription-ready architecture for LMS platforms that serve many organisations." },
  { label: "Mobile App Development", href: "/mobile-app-development/", desc: "Native iOS and Android learner apps with offline lesson downloads and push notifications." },
  { label: "EdTech Solutions", href: "/edtech/", desc: "Purpose-built software for course marketplaces, coaching businesses, and corporate training." },
  { label: "UI/UX Design", href: "/ui-ux-design/", desc: "Course builders and learner dashboards that stay intuitive for non-technical instructors." },
];

codeigniterDevelopment.prose = {
  eyebrow: "CodeIgniter Development",
  heading: "Why teams choose our CodeIgniter development company",
  blocks: [
    { p: ["As a CodeIgniter development company based in Vadodara, India, we build fast, maintainable ", { text: "PHP applications", href: "/php-developer/" }, " for clients across India, the UK, South Africa, and Ivory Coast. CodeIgniter 4's small footprint and explicit structure make it a pragmatic choice when you want a lightweight framework without the overhead of a heavier full-stack platform. Our team ships new CI4 projects on PHP 8, hardens security against CSRF and XSS, tunes the database layer, and keeps hosting costs low — whether you need a customer portal, an internal admin panel, or a REST backend feeding a mobile or single-page front end. You work directly with the engineers writing the code, not an account layer in between."] },
    { h3: "Legacy CI2/CI3 migration without the rewrite", p: ["Many businesses run older CodeIgniter 2 or 3 systems that still function but are hard to secure and extend on modern PHP. We migrate these to CI4 incrementally — mapping controllers, refactoring queries to the query builder, and replacing abandoned libraries with maintained Composer packages — so you keep proven business logic while gaining PHP 8 performance and a supported framework. Migrations are planned around your release schedule to avoid downtime. Where a framework change makes more sense, we can re-platform to ", { text: "Laravel", href: "/laravel-developer/" }, " or plan a broader ", { text: "custom software rebuild", href: "/custom-software-development/" }, " against a clear, agreed spec."] },
    { h3: "APIs, integrations, and scaling", p: ["CodeIgniter 4's resource controllers make it a clean base for RESTful services. We build documented APIs with JWT authentication, connect third-party payment and logistics gateways through solid ", { text: "API integrations", href: "/services/api-integrations/" }, ", and add Redis caching and query optimisation as traffic grows. Every project ships with clear structure, version control, and PHPUnit coverage so the codebase stays easy for your own team to own. When your product outgrows a single framework, the same team scales it end to end. Tell us where you are — a quick ", { text: "call", href: "/contact/" }, " is the fastest way to scope your CodeIgniter project."] },
  ],
};
codeigniterDevelopment.faq = {
  heading: "Frequently Asked Questions",
  items: [
    { q: "How much does CodeIgniter development cost?", a: "Pricing depends on scope — a small CI4 module differs from a full application with APIs and legacy migration. We scope each project against your requirements and share a fixed quote within 24 hours, with no obligation. Most clients choose a milestone-based structure, so you pay against delivered, working features rather than open-ended hours." },
    { q: "Can you customise or extend our existing CodeIgniter app?", a: "Yes. We work on existing CodeIgniter 2, 3, and 4 codebases, adding features, refactoring modules, or integrating third-party services. We start with a short audit of your current code, then agree the changes and their impact up front, so nothing breaks silently and you always know what each change affects." },
    { q: "How long does a CodeIgniter project take?", a: "A focused CI4 module or REST API typically takes two to four weeks, while a full application runs six to twelve weeks depending on scope. Legacy CI2 or CI3 migrations vary with codebase size. After scoping, we give you a milestone plan with dates so you can track progress honestly." },
    { q: "Do you provide support after launch?", a: "Yes. We offer ongoing support and maintenance covering security patches, PHP and dependency updates, bug fixes, and new features. You can retain us on a monthly plan or call us in per change. Because our engineers wrote or reviewed the code, response times stay fast and fixes are grounded in the actual system." },
  ],
};
codeigniterDevelopment.related = [
  { label: "PHP Developers", href: "/php-developer/", desc: "Hire PHP engineers for framework and custom backend work." },
  { label: "Laravel Development", href: "/laravel-developer/", desc: "Move to Laravel or build a new app with our Laravel team." },
  { label: "Web Application Development", href: "/web-application-development/", desc: "End-to-end web application design, build, and delivery." },
  { label: "API Development", href: "/services/api-development/", desc: "Design and build documented REST APIs for your apps." },
];

wpLogisticsCourierPlugin.prose = {
  eyebrow: "CourierPress Plugin",
  heading: "WordPress Logistics & Courier Tracking Plugin",
  blocks: [
    { p: ["CourierPress is a WordPress logistics courier tracking plugin built for courier firms, freight desks, and last-mile teams that want live shipment tracking on their own site instead of redirecting customers to a third-party portal. Installed on any WordPress or WooCommerce store, it turns a standard site into an operational dispatch hub — shipments, driver assignment, and customer notifications all run from the admin. We built it as a commercial product on top of years of ", { text: "WordPress development", href: "/wordpress-development/" }, " work, so it behaves like real software, not a bolted-on shortcode."] },
    { h3: "What CourierPress does out of the box", p: ["Every shipment gets a real-time status page and a customer-facing tracking page — no login, no redirect. Orders placed through WooCommerce auto-create shipments, so ", { text: "ecommerce fulfilment", href: "/ecommerce-development/" }, " and courier tracking stay in sync without manual re-entry. Dispatchers assign couriers, push status updates, print shipping labels, and trigger email or SMS alerts at each milestone from one dashboard. A REST API exposes tracking data too, so driver and customer apps can pull live status straight from the same source of truth."] },
    { h3: "Built to fit your operation", p: ["Off-the-shelf rarely matches how a courier business actually moves parcels, so CourierPress is designed to be extended. We tailor status workflows, branding, and notification logic, and connect it to carrier APIs, ERPs, or route planners through custom ", { text: "API integrations", href: "/services/api-integrations/" }, ". For ", { text: "logistics operators", href: "/logistics/" }, " with heavier requirements — multi-branch depots, custom SLAs, or a full bespoke backend — the plugin becomes the front end while we build the rest to match. Our India-based team delivers globally across the UK, South Africa, and Ivory Coast. See it in a live demo or tell us what you move — ", { text: "get in touch", href: "/contact/" }, " to start."] },
  ],
};
wpLogisticsCourierPlugin.faq = {
  heading: "Frequently Asked Questions",
  items: [
    { q: "How much does CourierPress cost?", a: "CourierPress is a commercial WordPress plugin licensed per site, with pricing that depends on whether you take the standard build or add custom workflows and integrations. There are no per-shipment fees. We share a fixed quote after a short scoping call, so you know the full cost before any licensing or work begins." },
    { q: "Can the plugin be customised to our courier workflow?", a: "Yes. Status stages, branding, tracking-page layout, and notification triggers are all configurable, and we extend the plugin in code when you need more — custom SLAs, carrier API connections, or multi-branch logic. Because it is our own product, we can shape both the front end and backend around how your operation actually runs." },
    { q: "How long does setup take?", a: "A standard CourierPress install on an existing WordPress or WooCommerce site is typically live within a few days, including branding and notification setup. Custom work — carrier integrations, bespoke dashboards, or a tailored logistics backend — adds time based on scope, and we confirm a clear delivery schedule before we begin." },
    { q: "What support do you provide after launch?", a: "Every install includes onboarding and post-launch support, with WordPress and PHP 8 updates handled so the plugin stays compatible. We offer ongoing maintenance and enhancement retainers for teams that want continuous improvements. Our India-based team supports clients across India, the UK, South Africa, and Ivory Coast in overlapping working hours." },
  ],
};
wpLogisticsCourierPlugin.related = [
  { label: "WordPress Development", href: "/wordpress-development/", desc: "Custom WordPress builds and commercial plugin engineering." },
  { label: "Logistics Software", href: "/logistics/", desc: "Software for courier, freight, and last-mile operations." },
  { label: "Ecommerce Development", href: "/ecommerce-development/", desc: "WooCommerce and storefront builds that plug into fulfilment." },
  { label: "API Integrations", href: "/services/api-integrations/", desc: "Connect carriers, ERPs, and tracking systems via API." },
];

wpCourierTrackingPlugin.prose = {
  eyebrow: "WordPress Courier Tracking Plugin",
  heading: "Track shipments on your own site, not someone else's",
  blocks: [
    { p: ["Our WordPress courier tracking plugin lets your customers track parcels without ever leaving your website — no redirect to a third-party courier page, no dropped sessions, no lost trust at the exact moment a buyer is anxious about a delivery. Built in India and deployed for logistics and retail teams across the UK, South Africa, and Ivory Coast, it drops an embeddable tracking widget onto any page or post, renders a clean timeline-style status page, and ties multiple courier APIs together behind one unified interface. It sits comfortably inside an existing ", { text: "WordPress build", href: "/wordpress-development/" }, " or a WooCommerce store and starts working the same day."] },
    { h3: "Built for logistics teams, not just a lookup box", p: ["Most tracking tools stop at a search field. Ours is engineered like production software: a documented REST API endpoint for custom integrations, status-change hooks, and automated email notifications when a shipment moves. If you run a serious ", { text: "logistics operation", href: "/logistics/" }, ", we connect it to carrier systems through proper ", { text: "API integrations", href: "/services/api-integrations/" }, " rather than brittle screen-scraping, so a courier changing its site never breaks your tracking. Order data and delivery status share one source of truth, and your support team stops fielding \"where is my parcel\" emails."] },
    { h3: "Customisable, and backed by real engineers", p: ["Colour, typography, and label options let the widget match your brand out of the box, and because it is built on clean, extensible PHP 8, our team can shape it around your exact workflow — extra courier providers, multilingual status pages, or a fully branded customer portal. Whether you need a light install or a deeper custom build handled by our ", { text: "PHP developers", href: "/php-developer/" }, ", we deliver from our Vadodara base with support that overlaps your working hours. ", { text: "Get in touch", href: "/contact/" }, " for a free demo and we will show it running against a live courier."] },
  ],
};
wpCourierTrackingPlugin.faq = {
  heading: "Frequently Asked Questions",
  items: [
    { q: "How much does the WordPress courier tracking plugin cost?", a: "Pricing depends on scope. A standard install with the tracking widget, status pages, and one courier integration is a fixed one-time fee. Adding multiple carrier APIs, custom branding, or ongoing support shifts it to a small project quote. Contact us for a free demo and a transparent, itemised estimate." },
    { q: "Can the plugin be customised to our couriers and branding?", a: "Yes. Colour, typography, and labels are configurable out of the box, and the PHP 8 codebase is built to extend. We routinely add extra courier APIs, multilingual status pages, WooCommerce hooks, and branded customer portals so the tracking experience matches your site and workflow exactly, not a generic template." },
    { q: "How long does it take to set up?", a: "A standard install with one courier integration typically goes live within a few days. Multi-courier setups, custom status-page designs, or deeper API integrations usually take one to three weeks depending on carrier documentation. We scope timelines upfront during the demo so there are no surprises once work begins." },
    { q: "What support do you provide after launch?", a: "We provide post-launch support from our India base with hours that overlap the UK, South Africa, and Ivory Coast. That covers bug fixes, WordPress and PHP updates, courier API changes, and feature additions. Ongoing maintenance plans are available, or you can engage us per change as your needs evolve." },
  ],
};
wpCourierTrackingPlugin.related = [
  { label: "WordPress Development", href: "/wordpress-development/", desc: "Custom WordPress builds, plugins, and integrations engineered like production software." },
  { label: "Logistics Software", href: "/logistics/", desc: "Tracking, dispatch, and fleet tools built for courier and logistics operations." },
  { label: "API Integrations", href: "/services/api-integrations/", desc: "Reliable connections to courier, payment, and third-party systems without brittle scraping." },
  { label: "Hire PHP Developers", href: "/php-developer/", desc: "Senior PHP 8 engineers to extend your plugin or build custom modules." },
];
