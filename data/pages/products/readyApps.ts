import type { ServicePageData } from "@/lib/types";

const crumbs = (name: string) => [
  { label: "Home", href: "/" },
  { label: "Our Products", href: "/products/" },
  { label: name },
];

// ───────────────────────────── EduCore ─────────────────────────────
export const educore: ServicePageData = {
  meta: {
    title: "EduCore – Learning Management System Software | India",
    description:
      "EduCore is a ready-to-launch Learning Management System for institutes and academies — courses, quizzes, certificates, and fee collection. Book a free demo today.",
  },
  hero: {
    eyebrow: "EduCore",
    heading: "The Learning Management System your institute can launch this month",
    lead: "EduCore bundles course delivery, live classes, assessments, certificates, and fee collection into one branded platform — so you can stop stitching together five different tools and start teaching.",
    breadcrumbs: crumbs("EduCore"),
    stats: [
      { value: "4–6 wks", label: "To go live" },
      { value: "100%", label: "White-labelled" },
      { value: "0%", label: "Revenue cut" },
    ],
    marqueeItems: ["Course Builder", "Live Classes", "Quizzes & Grading", "Certificates", "Fee Collection", "Mobile Apps", "Progress Tracking", "Multi-Instructor"],
    formVariant: "service",
    formTag: "Get a demo",
    formHeading: "See EduCore on your own courses",
    formSub: "Tell us about your institute and we'll set up a live walkthrough with your branding.",
    formSubmitLabel: "Book my demo",
    formNote: "No commitment — just a 30-minute walkthrough.",
  },
  services: {
    eyebrow: "What's Inside",
    heading: "Everything a modern institute needs to teach online",
    body: "EduCore isn't a stripped-down starter kit — it's the same platform architecture we'd build a custom LMS on, pre-built and ready to brand as yours.",
    variant: "svc",
    items: [
      { icon: "📚", title: "Drag-and-Drop Course Builder", desc: "Structure courses into modules and lessons with video, PDFs, slides, and embedded quizzes — no coding required." },
      { icon: "🎥", title: "Live & Recorded Classes", desc: "Host live sessions with attendance tracking, or upload recordings with adaptive video streaming and resume-from-where-you-left-off." },
      { icon: "📝", title: "Quizzes & Auto-Grading", desc: "Build MCQ, subjective, and timed tests with instant scoring, negative marking, and detailed performance reports." },
      { icon: "🏅", title: "Verifiable Certificates", desc: "Auto-issue branded, shareable certificates with unique verification links the moment a student completes a course." },
      { icon: "💳", title: "Fee Collection & Plans", desc: "Sell one-time courses, subscriptions, or instalment plans with UPI, cards, and net-banking built in." },
      { icon: "📱", title: "Student & Instructor Apps", desc: "Branded iOS and Android apps so your learners can study on the move and instructors can manage classes from anywhere." },
    ],
  },
  capabilities: {
    eyebrow: "Built For",
    heading: "Whoever you teach, EduCore adapts to your model",
    dark: true,
    items: [
      { icon: "🎓", title: "Coaching institutes & academies", desc: "Run batches, track attendance, and sell test series alongside live and recorded courses." },
      { icon: "🏫", title: "Colleges & training centres", desc: "Give every department its own course catalogue, gradebook, and instructor workspace." },
      { icon: "🏢", title: "Corporate L&D teams", desc: "Onboard employees, run compliance training, and track completion with exportable reports for HR." },
      { icon: "👩‍🏫", title: "Independent educators", desc: "Launch your own branded learning platform without paying a 30–50% cut to a marketplace." },
    ],
  },
  process: {
    eyebrow: "How It Works",
    heading: "From sign-up to your first live batch in four steps",
    dark: false,
    steps: [
      { title: "Tell us about your institute", desc: "Share your subjects, batch sizes, and branding — logo, colours, and domain preferences." },
      { title: "We configure & brand EduCore", desc: "Your platform is set up with your identity, course categories, and payment gateway — fully white-labelled." },
      { title: "You upload courses & invite students", desc: "Bulk-import your existing content or record fresh — we help with the first batch migration." },
      { title: "Go live & we keep supporting", desc: "Launch on web and mobile with onboarding training for your instructors, plus ongoing updates and support." },
    ],
    deliverables: ["Branded web platform", "iOS & Android student apps", "Instructor dashboard", "Payment gateway setup", "Onboarding & training session", "30 days of post-launch support"],
  },
  why: {
    eyebrow: "Why EduCore",
    heading: "Built like custom software, priced like a product",
    dark: true,
    items: [
      { icon: "🏷️", title: "You own the brand — and the data", desc: "No marketplace logo, no shared student database, no algorithm deciding your visibility. It's entirely yours." },
      { icon: "⚡", title: "Live in weeks, not months", desc: "Skip the 4–6 month custom-build timeline. EduCore's foundation is production-tested and ready to configure." },
      { icon: "🔧", title: "Customisable when you outgrow defaults", desc: "Need a feature that isn't there yet? Since Digital Web Weaver built EduCore, we can extend it specifically for you." },
      { icon: "🤝", title: "A real engineering team behind it", desc: "Not an anonymous SaaS — direct access to the studio that built and maintains the platform." },
    ],
  },
  testimonials: [
    {
      text: "We were running classes over WhatsApp groups and spreadsheets. Within five weeks of saying yes, we had our own branded app on the Play Store with 400 students migrated over.",
      name: "Ritika Bhatt",
      role: "Director, Horizon Test Prep",
      initials: "RB",
    },
  ],
  faq: {
    eyebrow: "Questions",
    heading: "Everything you're probably wondering about EduCore",
    items: [
      { q: "Is EduCore really white-labelled, or does it carry your branding?", a: "Fully white-labelled. Your logo, your colours, your domain, your app store listing. Nothing identifies Digital Web Weaver to your students unless you want it to." },
      { q: "Can I migrate students and courses from my current setup?", a: "Yes. We help you bulk-import existing course content, student records, and historical progress data as part of onboarding." },
      { q: "Do you take a percentage of the fees we collect?", a: "No. Payments go through your own gateway account directly to your bank. We don't sit between you and your revenue." },
      { q: "What if I need a feature that isn't in the standard package?", a: "Because we built EduCore ourselves, we can scope and build custom additions — gradebooks, integrations, white-label mobile features — as paid extensions." },
      { q: "How long does it take to actually go live?", a: "Most institutes are live within 4–6 weeks of kickoff, including branding setup, content migration, and instructor training." },
    ],
  },
  cta: {
    eyebrow: "Ready when you are",
    heading: "Stop juggling five tools. Start teaching from one platform.",
    body: "Book a live walkthrough on your own course content — no generic demo, no pressure. We'll show you exactly how EduCore would look as your platform.",
    primaryCta: { label: "Book a free demo", href: "/contact" },
    secondaryCta: { label: "See all Our Products", href: "/products" },
    meta: ["Free 30-minute walkthrough", "Live in 4–6 weeks", "100% white-labelled"],
  },
  related: [
    { label: "SchoolHub", href: "/schoolhub", desc: "School management system for K-12 institutions." },
    { label: "ClinicVoice AI", href: "/clinicvoice-ai", desc: "AI voice agent that handles patient calls automatically." },
    { label: "ChatFlow AI", href: "/chatflow-ai", desc: "WhatsApp automation for support and sales." },
  ],
};

// ───────────────────────────── SolarOps ─────────────────────────────
export const solarops: ServicePageData = {
  meta: {
    title: "SolarOps – Solar Panel Installer ERP Software | India",
    description:
      "SolarOps is a ready-to-deploy ERP for solar installers — site surveys, quotations, inventory, subsidy paperwork, and AMC scheduling. Get a free demo in 24 hours.",
  },
  hero: {
    eyebrow: "SolarOps",
    heading: "SolarOps ERP — Run Your Solar Installation Business Without the Spreadsheet Chaos",
    lead: "From the first site survey to the final commissioning report — SolarOps tracks leads, quotations, inventory, installation crews, subsidy paperwork, and AMC schedules in one connected system.",
    breadcrumbs: crumbs("SolarOps"),
    stats: [
      { value: "5–7 wks", label: "To go live" },
      { value: "1", label: "System, not 6" },
      { value: "100%", label: "Project visibility" },
    ],
    marqueeItems: ["Site Surveys", "Quotation Builder", "Project Tracking", "Inventory & Procurement", "Subsidy Paperwork", "AMC Scheduling", "Crew Management", "Client Portal"],
    formVariant: "service",
    formTag: "Get a demo",
    formHeading: "See SolarOps run a project end-to-end",
    formSub: "We'll walk a real installation — survey to commissioning — through the system live.",
    formSubmitLabel: "Book my demo",
    formNote: "Tailored to your installation workflow.",
  },
  services: {
    eyebrow: "What's Inside",
    heading: "Every stage of an installation, tracked in one place",
    body: "Solar EPC work spans sales, engineering, procurement, and field execution — SolarOps connects all four so nothing falls through the cracks.",
    variant: "svc",
    items: [
      { icon: "📐", title: "Site Survey & Design", desc: "Capture roof measurements, shading data, and load requirements on-site via mobile, then auto-generate system designs and quotes." },
      { icon: "💰", title: "Quotation & Proposal Builder", desc: "Generate branded proposals with payback calculations, subsidy estimates, and financing options in minutes." },
      { icon: "📋", title: "Project & Task Tracking", desc: "Move projects through stages — survey, approval, procurement, installation, commissioning — with crew assignments and deadlines." },
      { icon: "📦", title: "Inventory & Procurement", desc: "Track panels, inverters, mounting structures, and cabling across warehouses with low-stock alerts and supplier POs." },
      { icon: "📄", title: "Subsidy & Compliance Paperwork", desc: "Generate and track net-metering and government subsidy documentation with status reminders so applications don't stall." },
      { icon: "🔧", title: "AMC & Service Scheduling", desc: "Schedule annual maintenance visits, log service tickets, and track performance/output data for every installed system." },
    ],
  },
  capabilities: {
    eyebrow: "Built For",
    heading: "Whatever scale you operate at",
    dark: true,
    items: [
      { icon: "🏠", title: "Residential installers", desc: "Manage high volumes of smaller projects with templated quotes and standardised installation checklists." },
      { icon: "🏭", title: "Commercial & industrial EPC", desc: "Handle multi-phase projects with engineering documentation, multiple stakeholders, and milestone billing." },
      { icon: "🌾", title: "Solar pump & agri-solar dealers", desc: "Track government scheme applications and farmer subsidy paperwork alongside installations." },
      { icon: "🛠️", title: "O&M and AMC service providers", desc: "Run maintenance contracts independently of installation — ticketing, technician routing, and SLA tracking." },
    ],
  },
  process: {
    eyebrow: "How It Works",
    heading: "From spreadsheets to a connected system in four steps",
    dark: false,
    steps: [
      { title: "Map your current workflow", desc: "We sit with your sales, design, and field teams to understand exactly how a project moves today." },
      { title: "Configure SolarOps for your business", desc: "We set up your stages, document templates, pricing rules, and crew structures to match your operation." },
      { title: "Migrate your active projects", desc: "Existing clients, ongoing installations, and inventory data are imported so you don't start from zero." },
      { title: "Train your team & go live", desc: "Hands-on training for office and field staff, then full launch with dedicated support during your first month." },
    ],
    deliverables: ["Web dashboard for office teams", "Mobile app for field crews", "Branded client portal", "Document & quotation templates", "Team training sessions", "30 days of go-live support"],
  },
  why: {
    eyebrow: "Why SolarOps",
    heading: "Purpose-built for solar — not a generic ERP forced to fit",
    dark: true,
    items: [
      { icon: "☀️", title: "Speaks the language of solar", desc: "Panels, inverters, net-metering, subsidy slabs, payback periods — built around how your industry actually works, not retrofitted from generic ERP templates." },
      { icon: "📍", title: "Field-first design", desc: "Survey teams and installation crews work from a mobile app designed for on-site use, with offline support for low-connectivity sites." },
      { icon: "🔗", title: "One system, not six", desc: "Replace your separate quoting tool, spreadsheet trackers, WhatsApp groups, and inventory registers with one connected platform." },
      { icon: "📈", title: "Built to scale with you", desc: "Add branches, crews, and warehouses as you grow — the system is designed for multi-location operations from day one." },
    ],
  },
  testimonials: [
    {
      text: "Subsidy paperwork used to be our biggest bottleneck — applications would just sit in someone's inbox. SolarOps puts a status and a deadline on every single one. We've cut our average approval time nearly in half.",
      name: "Naresh Solanki",
      role: "Operations Head, SunGrid Energy Solutions",
      initials: "NS",
    },
  ],
  faq: {
    eyebrow: "Questions",
    heading: "What installers ask before switching to SolarOps",
    items: [
      { q: "We already use spreadsheets and WhatsApp — how hard is the switch?", a: "We handle the migration of your active projects, contacts, and inventory so your team starts on day one with real data, not a blank system." },
      { q: "Does it work for field teams with patchy internet at installation sites?", a: "Yes — the mobile app supports offline data capture for surveys and installation checklists, syncing automatically once connectivity returns." },
      { q: "Can it handle both residential and commercial project types?", a: "Yes. SolarOps supports configurable project templates so high-volume residential work and complex commercial projects run side by side." },
      { q: "Will it integrate with our accounting software?", a: "We can connect SolarOps to common accounting tools like Tally and QuickBooks as part of setup or as a custom integration." },
      { q: "How long until our team is fully up and running?", a: "Typically 5–7 weeks from kickoff to go-live, including configuration, data migration, and team training." },
    ],
  },
  cta: {
    eyebrow: "Ready when you are",
    heading: "See your next installation tracked from survey to commissioning",
    body: "We'll walk through a real project lifecycle in SolarOps — live, with your workflow in mind. No generic sales demo.",
    primaryCta: { label: "Book a free demo", href: "/contact" },
    secondaryCta: { label: "See all Our Products", href: "/products" },
    meta: ["Free workflow walkthrough", "Live in 5–7 weeks", "Field + office in one system"],
  },
  related: [
    { label: "ChemSupply", href: "/chemsupply", desc: "ERP for chemical suppliers and distributors." },
    { label: "PestTrack", href: "/pesttrack", desc: "CRM built for pest control service businesses." },
    { label: "InsureDesk", href: "/insuredesk", desc: "CRM for insurance agencies and brokers." },
  ],
};

// ───────────────────────────── GlowDesk ─────────────────────────────
export const glowdesk: ServicePageData = {
  meta: {
    title: "GlowDesk – Aesthetic Clinic Management Software | India",
    description:
      "GlowDesk is ready-to-launch software for aesthetic clinics — booking, treatment plans, before/after galleries, billing, and follow-ups. Book a free demo.",
  },
  hero: {
    eyebrow: "GlowDesk",
    heading: "GlowDesk Clinic Management Software — Run Your Aesthetic Clinic Like the Premium Brand It Is",
    lead: "GlowDesk brings booking, treatment plans, before/after galleries, consent forms, billing, and automated client follow-ups into one elegant system — so your front desk feels as polished as your treatment rooms.",
    breadcrumbs: crumbs("GlowDesk"),
    stats: [
      { value: "4–5 wks", label: "To go live" },
      { value: "↓ no-shows", label: "With reminders" },
      { value: "100%", label: "Branded experience" },
    ],
    marqueeItems: ["Online Booking", "Treatment Plans", "Before/After Gallery", "Digital Consent Forms", "Billing & Packages", "Automated Reminders", "Client App", "Staff Scheduling"],
    formVariant: "service",
    formTag: "Get a demo",
    formHeading: "See GlowDesk run your front desk",
    formSub: "We'll show you booking, treatment tracking, and follow-ups configured for your clinic.",
    formSubmitLabel: "Book my demo",
    formNote: "A real walkthrough, not a canned video.",
  },
  services: {
    eyebrow: "What's Inside",
    heading: "From first booking to repeat client — handled",
    body: "Aesthetic clinics live and die by experience and follow-through. GlowDesk is built to make both effortless for your team.",
    variant: "svc",
    items: [
      { icon: "📅", title: "Online Booking & Scheduling", desc: "Clients book treatments and consultations online with real-time staff and room availability — no back-and-forth calls." },
      { icon: "💉", title: "Treatment Plans & Records", desc: "Build multi-session treatment plans, log products used, and track progress with structured clinical notes." },
      { icon: "📸", title: "Before/After Photo Galleries", desc: "Capture and organise progress photos securely against each client's record — great for results tracking and consultations." },
      { icon: "📝", title: "Digital Consent & Intake Forms", desc: "Replace paper forms with digital consent, medical history, and intake forms clients fill before arriving." },
      { icon: "💳", title: "Billing, Packages & Memberships", desc: "Sell treatment packages, memberships, and gift vouchers with integrated billing and automatic balance tracking." },
      { icon: "🔔", title: "Automated Reminders & Follow-ups", desc: "Cut no-shows with SMS/WhatsApp reminders, and bring clients back with automated post-treatment and re-booking nudges." },
    ],
  },
  capabilities: {
    eyebrow: "Built For",
    heading: "Designed around how aesthetic practices actually run",
    dark: true,
    items: [
      { icon: "✨", title: "Skin & laser clinics", desc: "Track multi-session packages, device settings per session, and progress photos in one client timeline." },
      { icon: "💆", title: "Med-spas & wellness centres", desc: "Combine aesthetic treatments with spa services, memberships, and retail product sales." },
      { icon: "🦷", title: "Cosmetic dental & dermatology practices", desc: "Manage consultations, treatment plans, and recall schedules alongside billing and insurance notes." },
      { icon: "🏢", title: "Multi-branch clinic chains", desc: "Run multiple locations from one system with centralised reporting and per-branch staff scheduling." },
    ],
  },
  process: {
    eyebrow: "How It Works",
    heading: "From paper diaries to a polished digital front desk",
    dark: false,
    steps: [
      { title: "Walk us through your client journey", desc: "From the first enquiry to the loyalty follow-up — we map exactly how your clinic currently operates." },
      { title: "We brand & configure GlowDesk", desc: "Your services, packages, staff, rooms, and branding are set up so it looks and feels like your clinic, not generic software." },
      { title: "Migrate client records & history", desc: "Existing client data, treatment history, and appointment records are imported so nothing is lost in the switch." },
      { title: "Train your team & launch", desc: "Hands-on training for front desk and clinical staff, then go live with dedicated support during your first weeks." },
    ],
    deliverables: ["Branded booking website/widget", "Front-desk & clinical dashboard", "Client mobile app", "Digital forms & consent templates", "Staff onboarding & training", "30 days of post-launch support"],
  },
  why: {
    eyebrow: "Why GlowDesk",
    heading: "Because your brand deserves better than a generic booking app",
    dark: true,
    items: [
      { icon: "🎨", title: "Looks and feels like your clinic", desc: "Fully branded booking pages, client app, and communications — clients experience your brand, not ours or a marketplace's." },
      { icon: "📷", title: "Built for visual, progress-driven care", desc: "Before/after galleries and treatment timelines aren't bolted on — they're core to how the system is designed." },
      { icon: "🔁", title: "Designed to bring clients back", desc: "Automated, branded follow-up sequences turn one-time visitors into repeat clients without manual chasing." },
      { icon: "🔒", title: "Privacy-conscious by default", desc: "Sensitive client photos and medical history are stored with access controls appropriate for aesthetic practice data." },
    ],
  },
  testimonials: [
    {
      text: "Our no-show rate used to eat into nearly a fifth of our schedule. The automated reminders alone paid for the system in the first month — and the before/after galleries have become a real selling point in consultations.",
      name: "Dr. Anjali Mistry",
      role: "Founder, Lumière Aesthetic Studio",
      initials: "AM",
    },
  ],
  faq: {
    eyebrow: "Questions",
    heading: "What clinic owners usually ask first",
    items: [
      { q: "Can it handle multi-session treatment packages?", a: "Yes — build packages with a set number of sessions, track redemptions, and automatically prompt clients to book their next visit." },
      { q: "Is client photo and medical data stored securely?", a: "Yes. Photos and health records are stored with access-controlled permissions, visible only to authorised staff against each client's record." },
      { q: "Can clients book and pay online without calling the front desk?", a: "Yes — your branded booking page shows real-time availability, and clients can pay deposits or full amounts online during booking." },
      { q: "Will it work across multiple clinic branches?", a: "Yes. Multi-branch clinics get centralised reporting with per-location scheduling, staff, and inventory." },
      { q: "How soon can we be live and taking bookings?", a: "Most clinics are live within 4–5 weeks, including branding, data migration, and staff training." },
    ],
  },
  cta: {
    eyebrow: "Ready when you are",
    heading: "Give your front desk the same polish as your treatment rooms",
    body: "Book a walkthrough configured around your services and client journey — see exactly how GlowDesk would run your clinic.",
    primaryCta: { label: "Book a free demo", href: "/contact" },
    secondaryCta: { label: "See all Our Products", href: "/products" },
    meta: ["Free 30-minute walkthrough", "Live in 4–5 weeks", "Fully branded to your clinic"],
  },
  related: [
    { label: "ClinicFlow", href: "/clinicflow", desc: "Clinic management system for general & multi-specialty practices." },
    { label: "SalonBook", href: "/salonbook", desc: "Salon management system for booking, staff & billing." },
    { label: "TeleCare", href: "/telecare", desc: "Telemedicine platform for clinics and hospitals." },
  ],
};

// ───────────────────────────── QuickBite ─────────────────────────────
export const quickbite: ServicePageData = {
  meta: {
    title: "QuickBite – Food Delivery App Software | Zero Commission",
    description:
      "QuickBite is a ready-to-launch food delivery app suite — customer app, restaurant dashboard, and driver app with live tracking. Launch your own branded app today.",
  },
  hero: {
    eyebrow: "QuickBite",
    heading: "Your own food delivery app — without the 25–30% commission",
    lead: "QuickBite gives restaurants and cloud kitchens a complete delivery ecosystem — customer app, restaurant dashboard, and delivery partner app — all branded as yours, with orders going straight to your business, not a marketplace's cut.",
    breadcrumbs: crumbs("QuickBite"),
    stats: [
      { value: "0%", label: "Commission to us" },
      { value: "6–8 wks", label: "To go live" },
      { value: "3", label: "Apps in one suite" },
    ],
    marqueeItems: ["Customer App", "Restaurant Dashboard", "Driver App", "Live Order Tracking", "Menu Builder", "Payments & COD", "Push Notifications", "Loyalty & Offers"],
    formVariant: "service",
    formTag: "Get a demo",
    formHeading: "See QuickBite run an order end-to-end",
    formSub: "We'll place a live order through customer, restaurant, and driver apps so you see the full flow.",
    formSubmitLabel: "Book my demo",
    formNote: "Branded with your restaurant's identity for the demo.",
  },
  services: {
    eyebrow: "What's Inside",
    heading: "A complete three-sided delivery ecosystem",
    body: "QuickBite isn't just a customer-facing app — it's the full operational stack restaurants need to run delivery independently.",
    variant: "svc",
    items: [
      { icon: "📱", title: "Customer Ordering App", desc: "Branded iOS and Android apps where customers browse menus, customise orders, pay, and track delivery live." },
      { icon: "🍽️", title: "Restaurant Dashboard", desc: "Manage incoming orders, build and update menus, track sales, and view performance analytics from one screen." },
      { icon: "🛵", title: "Delivery Partner App", desc: "Drivers receive order pickups, get optimised navigation, and track their earnings — all from a dedicated app." },
      { icon: "📍", title: "Real-Time Order Tracking", desc: "Live GPS tracking with accurate ETAs keeps customers informed from kitchen to doorstep." },
      { icon: "💳", title: "Payments & Cash-on-Delivery", desc: "UPI, cards, net-banking, and COD supported out of the box, with automatic reconciliation and payouts." },
      { icon: "🎁", title: "Offers, Coupons & Loyalty", desc: "Run discount codes, first-order offers, and repeat-customer loyalty programs to grow direct orders." },
    ],
  },
  capabilities: {
    eyebrow: "Built For",
    heading: "Whether you run one kitchen or fifty",
    dark: true,
    items: [
      { icon: "🍳", title: "Independent restaurants", desc: "Take direct orders without losing 25–30% to aggregator commissions on every sale." },
      { icon: "👨‍🍳", title: "Cloud kitchens & multi-brand operators", desc: "Run multiple virtual brands from one kitchen, each with its own branded ordering app and menu." },
      { icon: "🏪", title: "Restaurant chains & franchises", desc: "Centralise menu management and reporting across branches while keeping local delivery operations independent." },
      { icon: "🚀", title: "New delivery-first food brands", desc: "Launch a complete delivery operation from day one without building three separate apps from scratch." },
    ],
  },
  process: {
    eyebrow: "How It Works",
    heading: "From kitchen to doorstep — live in four steps",
    dark: false,
    steps: [
      { title: "Tell us about your menu & delivery zones", desc: "Share your menu structure, pricing, delivery radius, and how your kitchen and riders currently operate." },
      { title: "We brand all three apps as yours", desc: "Customer app, restaurant dashboard, and driver app are configured and branded with your identity and menu." },
      { title: "Onboard your kitchen & riders", desc: "We help set up your restaurant dashboard, train your staff, and onboard your delivery partners onto the driver app." },
      { title: "Launch & start taking direct orders", desc: "Go live on the App Store and Play Store with a launch plan to migrate customers from aggregator apps to yours." },
    ],
    deliverables: ["Branded customer app (iOS & Android)", "Restaurant management dashboard", "Delivery partner app", "Payment gateway integration", "Launch & onboarding support", "30 days of post-launch support"],
  },
  why: {
    eyebrow: "Why QuickBite",
    heading: "Because every order through an aggregator is a customer you don't own",
    dark: true,
    items: [
      { icon: "💰", title: "Keep what you earn", desc: "No 25–30% commission per order — direct orders mean direct revenue, with only your payment processing costs." },
      { icon: "📇", title: "Own your customer relationships", desc: "Customer data, order history, and contact details belong to you — build direct loyalty instead of feeding a marketplace's database." },
      { icon: "🎨", title: "Your brand, not a logo in someone else's app", desc: "Every screen — ordering, tracking, notifications — carries your restaurant's identity, not an aggregator's." },
      { icon: "🛠️", title: "Extendable as you grow", desc: "Need table reservations, catering orders, or a loyalty wallet? Since we built QuickBite, we can build it into yours." },
    ],
  },
  testimonials: [
    {
      text: "We were paying out almost a third of every order to delivery platforms. Six weeks after going live with our own app, a third of our volume already comes through it directly — commission-free.",
      name: "Karan Oberoi",
      role: "Owner, Spice Trail Kitchens",
      initials: "KO",
    },
  ],
  faq: {
    eyebrow: "Questions",
    heading: "What restaurant owners ask before switching",
    items: [
      { q: "Do we still need to be listed on aggregator apps too?", a: "That's entirely your call. Many of our clients keep aggregator listings for discovery while actively pushing repeat customers to their own branded app to avoid commissions on those orders." },
      { q: "How do we get our delivery riders using the app?", a: "We help you onboard your existing riders onto the driver app as part of launch — most teams adapt within a few days." },
      { q: "Can we run multiple restaurant brands from one kitchen?", a: "Yes — cloud kitchen operators can run several branded ordering apps and menus from a single restaurant dashboard." },
      { q: "What payment methods are supported?", a: "UPI, debit/credit cards, net-banking, popular wallets, and cash-on-delivery — all with automatic order reconciliation." },
      { q: "How long before we can start taking orders through our own app?", a: "Most restaurants go live within 6–8 weeks, including branding, menu setup, app store approval, and rider onboarding." },
    ],
  },
  cta: {
    eyebrow: "Ready when you are",
    heading: "Stop paying a third of every order to someone else's app",
    body: "We'll walk a live order through the customer, restaurant, and driver apps — branded with your restaurant's identity — so you can see exactly what your customers would experience.",
    primaryCta: { label: "Book a free demo", href: "/contact" },
    secondaryCta: { label: "See all Our Products", href: "/products" },
    meta: ["Free live walkthrough", "Live in 6–8 weeks", "Zero commission to us"],
  },
  related: [
    { label: "RideEasy", href: "/rideeasy", desc: "Cab booking system with live tracking and driver apps." },
    { label: "ChatFlow AI", href: "/chatflow-ai", desc: "WhatsApp automation for orders, support, and promotions." },
    { label: "CallMate AI", href: "/callmate-ai", desc: "AI voice agent for handling order calls automatically." },
  ],
};
