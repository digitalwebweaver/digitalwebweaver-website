import type { ServicePageData } from "@/lib/types";

const crumbs = (name: string) => [
  { label: "Home", href: "/" },
  { label: "Ready Apps", href: "/products/" },
  { label: name },
];

// ───────────────────────────── SalonBook ─────────────────────────────
export const salonbook: ServicePageData = {
  meta: {
    title: "SalonBook — Salon & Spa Management System",
    description:
      "SalonBook is a ready-to-launch salon management system — online booking, staff scheduling, billing, packages, and client follow-ups in one branded platform.",
  },
  hero: {
    eyebrow: "SalonBook",
    heading: "SalonBook Salon Management System — Run Your Salon Like a Brand Clients Keep Coming Back To",
    lead: "SalonBook brings online booking, staff scheduling, billing, service packages, inventory, and automated client follow-ups into one branded system — so your front desk runs as smoothly as your styling chairs.",
    breadcrumbs: crumbs("SalonBook"),
    stats: [
      { value: "3–5 wks", label: "To go live" },
      { value: "↓ no-shows", label: "With reminders" },
      { value: "100%", label: "Branded experience" },
    ],
    marqueeItems: ["Online Booking", "Staff Scheduling", "Billing & Packages", "Inventory", "Loyalty Programs", "Client App", "Automated Reminders", "Multi-Branch"],
    formVariant: "service",
    formTag: "Get a demo",
    formHeading: "See SalonBook run your front desk",
    formSub: "We'll show you booking, staff scheduling, and client follow-ups configured for your salon.",
    formSubmitLabel: "Book my demo",
    formNote: "A real walkthrough using your services and staff.",
  },
  services: {
    eyebrow: "What's Inside",
    heading: "From first booking to loyal regular — handled",
    body: "Salons run on appointments, staff availability, and repeat business. SalonBook is built to make all three effortless.",
    variant: "svc",
    items: [
      { icon: "📅", title: "Online Booking & Scheduling", desc: "Clients book services online with real-time stylist and chair availability — no phone tag required." },
      { icon: "💇", title: "Staff Scheduling & Commission", desc: "Manage stylist shifts, service assignments, and automatic commission calculations on every booking." },
      { icon: "💳", title: "Billing, Packages & Memberships", desc: "Sell service packages, prepaid memberships, and gift cards with integrated billing and balance tracking." },
      { icon: "🧴", title: "Inventory & Retail Sales", desc: "Track product stock for in-salon use and retail sales, with automatic deduction and low-stock alerts." },
      { icon: "🎁", title: "Loyalty & Referral Programs", desc: "Run point-based loyalty programs and referral rewards that bring clients back and bring their friends in." },
      { icon: "🔔", title: "Automated Reminders & Rebooking", desc: "Cut no-shows with appointment reminders, and prompt clients to rebook their next visit automatically." },
    ],
  },
  capabilities: {
    eyebrow: "Built For",
    heading: "Whatever kind of salon or spa you run",
    dark: true,
    items: [
      { icon: "💈", title: "Hair & beauty salons", desc: "Manage stylist-wise bookings, service menus, and retail product sales in one place." },
      { icon: "💆", title: "Spas & wellness centres", desc: "Combine therapy bookings, packages, and membership plans with billing and staff scheduling." },
      { icon: "💅", title: "Nail bars & beauty studios", desc: "Run quick-turnaround bookings with templated services and streamlined checkout." },
      { icon: "🏢", title: "Multi-branch salon chains", desc: "Operate multiple locations from one system with centralised reporting and per-branch staff management." },
    ],
  },
  process: {
    eyebrow: "How It Works",
    heading: "From appointment books to a digital front desk in four steps",
    dark: false,
    steps: [
      { title: "Walk us through your services & team", desc: "Share your service menu, pricing, staff structure, and how clients currently book with you." },
      { title: "We brand & configure SalonBook", desc: "Your services, packages, staff, and branding are set up so it feels like your salon, not generic software." },
      { title: "Migrate client records & history", desc: "Existing client data, preferences, and appointment history are imported so nothing is lost in the switch." },
      { title: "Train your team & launch", desc: "Hands-on training for front desk and stylists, then go live with dedicated support during your first weeks." },
    ],
    deliverables: ["Branded booking website/widget", "Front-desk & staff dashboard", "Client mobile app", "Loyalty & package templates", "Staff onboarding & training", "30 days of post-launch support"],
  },
  why: {
    eyebrow: "Why SalonBook",
    heading: "Because repeat clients are built on convenience and follow-through",
    dark: true,
    items: [
      { icon: "🎨", title: "Looks and feels like your salon", desc: "Branded booking pages and client app put your identity front and centre — not a generic listings app." },
      { icon: "🔁", title: "Designed to bring clients back", desc: "Automated rebooking prompts and loyalty rewards turn one-time visits into standing appointments." },
      { icon: "💰", title: "Connects bookings to revenue", desc: "See which services, staff, and packages actually drive revenue — not just how many chairs were filled." },
      { icon: "🛠️", title: "Extendable as you grow", desc: "Need multi-location reporting or franchise management? Since we built SalonBook, we can build it into yours." },
    ],
  },
  testimonials: [
    {
      text: "We used to lose track of who was due for a colour touch-up or a package renewal. Now SalonBook nudges them automatically — our rebooking rate has visibly gone up since we started using it.",
      name: "Tanvi Acharya",
      role: "Owner, Belle Époque Salon & Spa",
      initials: "TA",
    },
  ],
  faq: {
    eyebrow: "Questions",
    heading: "What salon owners ask before switching to SalonBook",
    items: [
      { q: "Can clients book with a specific stylist they prefer?", a: "Yes — clients can choose their preferred stylist when booking, and the system manages availability accordingly." },
      { q: "Does it handle staff commissions automatically?", a: "Yes — commission rules can be configured per staff member or service, and calculated automatically on completed bookings." },
      { q: "Can we sell packages and memberships through it?", a: "Yes — create prepaid packages, memberships, and gift cards with automatic balance tracking against each client." },
      { q: "Will it work for a salon with multiple branches?", a: "Yes — multi-branch salons get centralised reporting with per-location staff, services, and scheduling." },
      { q: "How soon can we be live and taking online bookings?", a: "Most salons are live within 3–5 weeks, including branding, data migration, and staff training." },
    ],
  },
  cta: {
    eyebrow: "Ready when you are",
    heading: "Give your front desk the polish your styling chairs already have",
    body: "Book a walkthrough configured around your services and team — see exactly how SalonBook would run your salon's daily flow.",
    primaryCta: { label: "Book a free demo", href: "/contact" },
    secondaryCta: { label: "See all Ready Apps", href: "/products" },
    meta: ["Free 30-minute walkthrough", "Live in 3–5 weeks", "Fully branded to your salon"],
  },
  related: [
    { label: "GlowDesk", href: "/glowdesk", desc: "Software for aesthetic and cosmetic clinics." },
    { label: "ClinicFlow", href: "/clinicflow", desc: "Clinic management system for general & multi-specialty practices." },
    { label: "ChatFlow AI", href: "/chatflow-ai", desc: "WhatsApp automation for bookings and reminders." },
  ],
};

// ───────────────────────────── PestTrack ─────────────────────────────
export const pesttrack: ServicePageData = {
  meta: {
    title: "PestTrack — CRM for Pest Control Service Businesses",
    description:
      "PestTrack is a ready-to-launch CRM for pest control companies — job scheduling, technician routing, service history, contracts, and automated reminders in one platform.",
  },
  hero: {
    eyebrow: "PestTrack",
    heading: "PestTrack CRM — Run Your Pest Control Business Without the Dispatch-Board Chaos",
    lead: "PestTrack brings job scheduling, technician routing, service history, AMC contracts, billing, and automated client reminders into one connected system — so nothing slips through between the call and the completed job.",
    breadcrumbs: crumbs("PestTrack"),
    stats: [
      { value: "3–5 wks", label: "To go live" },
      { value: "100%", label: "Job visibility" },
      { value: "↓ missed visits", label: "With auto-scheduling" },
    ],
    marqueeItems: ["Job Scheduling", "Technician Routing", "Service History", "AMC Contracts", "Billing & Quotes", "Client Reminders", "Mobile Field App", "Reports & Analytics"],
    formVariant: "service",
    formTag: "Get a demo",
    formHeading: "See PestTrack run a job end-to-end",
    formSub: "We'll walk a service request from booking to completion through the system live.",
    formSubmitLabel: "Book my demo",
    formNote: "Configured around your service types and team.",
  },
  services: {
    eyebrow: "What's Inside",
    heading: "From the first call to the next scheduled visit",
    body: "Pest control is a relationship business built on reliability — PestTrack is designed to make sure every job, contract, and follow-up actually happens on time.",
    variant: "svc",
    items: [
      { icon: "📋", title: "Job Scheduling & Dispatch", desc: "Create, assign, and track service jobs with technician calendars and real-time status updates." },
      { icon: "🗺️", title: "Technician Routing", desc: "Optimise daily routes for field technicians and track job progress with a dedicated mobile app." },
      { icon: "📜", title: "Service History & Reports", desc: "Maintain complete treatment history per property, with digital service reports clients can access." },
      { icon: "📑", title: "AMC & Contract Management", desc: "Track annual maintenance contracts with automatic scheduling of recurring visits and renewal alerts." },
      { icon: "💰", title: "Quotes, Billing & Invoicing", desc: "Generate quotes and invoices on the spot, collect payments digitally, and track outstanding dues." },
      { icon: "🔔", title: "Automated Client Reminders", desc: "SMS/WhatsApp reminders for upcoming visits, contract renewals, and post-service feedback requests." },
    ],
  },
  capabilities: {
    eyebrow: "Built For",
    heading: "Whatever kind of pest control operation you run",
    dark: true,
    items: [
      { icon: "🏠", title: "Residential pest control services", desc: "Manage high volumes of one-time and recurring home treatments with templated job types." },
      { icon: "🏢", title: "Commercial & industrial contracts", desc: "Track multi-site contracts, compliance reporting, and scheduled visits for corporate clients." },
      { icon: "🌾", title: "Termite & fumigation specialists", desc: "Manage specialised job types, chemical usage logs, and certification documentation." },
      { icon: "🚐", title: "Multi-technician & franchise operations", desc: "Coordinate larger field teams with route optimisation and centralised reporting across branches." },
    ],
  },
  process: {
    eyebrow: "How It Works",
    heading: "From dispatch boards and call logs to one system in four steps",
    dark: false,
    steps: [
      { title: "Map your current operation", desc: "We learn your service types, technician structure, contract models, and how jobs are currently scheduled." },
      { title: "We configure PestTrack for your business", desc: "Your job types, pricing, contract templates, and reminder schedules are set up to match your operation." },
      { title: "Migrate your clients & contracts", desc: "Existing client records, service history, and active AMC contracts are imported so you start with real data." },
      { title: "Train your team & go live", desc: "Hands-on training for office staff and field technicians, then launch with dedicated support during your first month." },
    ],
    deliverables: ["Office dispatch dashboard", "Mobile app for field technicians", "Contract & quote templates", "Client reminder workflows", "Team training sessions", "30 days of go-live support"],
  },
  why: {
    eyebrow: "Why PestTrack",
    heading: "Because a missed follow-up is a contract you'll lose to a competitor",
    dark: true,
    items: [
      { icon: "📍", title: "Field-first design", desc: "Technicians work from a mobile app built for on-site use — job details, history, and digital reports in one place." },
      { icon: "🔁", title: "Contracts that renew themselves", desc: "AMC schedules and renewal reminders run automatically — no more tracking expiry dates in a spreadsheet." },
      { icon: "🔗", title: "One system, not scattered logs", desc: "Replace separate scheduling boards, call logs, and billing registers with one connected platform." },
      { icon: "📈", title: "Built to scale with your team", desc: "Add technicians, service areas, and branches as you grow — designed for multi-team operations from day one." },
    ],
  },
  testimonials: [
    {
      text: "We were tracking AMC renewals on a whiteboard — and losing contracts because we'd simply forget to follow up. PestTrack reminds us before the client even has to ask. Our renewal rate has noticeably improved.",
      name: "Devendra Rana",
      role: "Director, SafeGuard Pest Solutions",
      initials: "DR",
    },
  ],
  faq: {
    eyebrow: "Questions",
    heading: "What pest control operators ask before switching",
    items: [
      { q: "Can it handle both one-time jobs and recurring AMC contracts?", a: "Yes — PestTrack manages one-off service requests and recurring contract schedules side by side, with automatic visit scheduling for AMCs." },
      { q: "How does it help our field technicians day-to-day?", a: "Technicians get a mobile app with their daily job list, optimised routes, property history, and the ability to log digital service reports on-site." },
      { q: "Can we generate quotes and invoices on the spot?", a: "Yes — technicians or office staff can generate quotes and invoices directly from the job record and collect payment digitally." },
      { q: "Will it remind clients about upcoming visits automatically?", a: "Yes — automated SMS/WhatsApp reminders go out for scheduled visits, contract renewals, and post-service feedback requests." },
      { q: "How long until our team is up and running on PestTrack?", a: "Typically 3–5 weeks from kickoff to go-live, including configuration, data migration, and team training." },
    ],
  },
  cta: {
    eyebrow: "Ready when you are",
    heading: "Stop losing renewals to a missed reminder",
    body: "We'll walk through a real job — from booking to completion to the next scheduled visit — in PestTrack, configured around your operation.",
    primaryCta: { label: "Book a free demo", href: "/contact" },
    secondaryCta: { label: "See all Ready Apps", href: "/products" },
    meta: ["Free workflow walkthrough", "Live in 3–5 weeks", "Field + office in one system"],
  },
  related: [
    { label: "SolarOps", href: "/solarops", desc: "ERP for solar panel installers and EPC companies." },
    { label: "ChemSupply", href: "/chemsupply", desc: "ERP for chemical suppliers and distributors." },
    { label: "CallMate AI", href: "/callmate-ai", desc: "AI voice agent for handling service calls automatically." },
  ],
};

// ───────────────────────────── ChemSupply ─────────────────────────────
export const chemsupply: ServicePageData = {
  meta: {
    title: "ChemSupply — ERP for Chemical Suppliers & Distributors",
    description:
      "ChemSupply is a ready-to-deploy ERP for chemical suppliers — inventory with batch/expiry tracking, compliance documentation, order management, and distributor portals.",
  },
  hero: {
    eyebrow: "ChemSupply",
    heading: "ChemSupply ERP — Run Your Chemical Supply Business Without the Compliance Headaches",
    lead: "ChemSupply brings inventory with batch and expiry tracking, safety documentation, order management, distributor portals, and compliance reporting into one connected ERP — built for an industry where the paperwork matters as much as the product.",
    breadcrumbs: crumbs("ChemSupply"),
    stats: [
      { value: "6–8 wks", label: "To go live" },
      { value: "1", label: "System for stock & compliance" },
      { value: "100%", label: "Batch traceability" },
    ],
    marqueeItems: ["Batch & Expiry Tracking", "Compliance Documentation", "Order Management", "Distributor Portal", "Multi-Warehouse", "Purchase Orders", "Safety Data Sheets", "Reports & Analytics"],
    formVariant: "service",
    formTag: "Get a demo",
    formHeading: "See ChemSupply track an order end-to-end",
    formSub: "We'll walk an order from purchase to dispatch — with batch and compliance data — through the system.",
    formSubmitLabel: "Book my demo",
    formNote: "Configured around your product categories and compliance needs.",
  },
  services: {
    eyebrow: "What's Inside",
    heading: "Built for an industry where traceability isn't optional",
    body: "Chemical distribution carries regulatory weight that generic inventory tools weren't built for — ChemSupply treats compliance as a core feature, not an afterthought.",
    variant: "svc",
    items: [
      { icon: "🧪", title: "Batch & Expiry Tracking", desc: "Track every product by batch number, manufacturing and expiry dates, with full traceability from supplier to customer." },
      { icon: "📄", title: "Compliance Documentation", desc: "Attach safety data sheets, certificates of analysis, and regulatory documents directly to products and batches." },
      { icon: "📋", title: "Order & Quotation Management", desc: "Generate quotes and process orders with automatic compliance checks and document attachments." },
      { icon: "🌐", title: "Distributor & Customer Portal", desc: "Give distributors and bulk customers a branded portal to place orders, track shipments, and access documentation." },
      { icon: "🏭", title: "Multi-Warehouse Inventory", desc: "Manage stock across multiple warehouses with batch-level visibility and transfer workflows." },
      { icon: "📊", title: "Compliance & Sales Reporting", desc: "Generate regulatory reports, expiry alerts, and sales analytics for management and audits." },
    ],
  },
  capabilities: {
    eyebrow: "Built For",
    heading: "Whatever part of the chemical supply chain you operate in",
    dark: true,
    items: [
      { icon: "🏭", title: "Industrial chemical distributors", desc: "Manage bulk orders, batch traceability, and compliance documentation for industrial clients." },
      { icon: "🧴", title: "Speciality & fine chemical suppliers", desc: "Track smaller, higher-value batches with detailed certificates and customer-specific documentation." },
      { icon: "🌾", title: "Agrochemical distributors", desc: "Manage seasonal demand, dealer networks, and regulatory documentation for agricultural inputs." },
      { icon: "🧫", title: "Lab & research chemical suppliers", desc: "Track small-batch, high-value products with strict expiry and storage condition monitoring." },
    ],
  },
  process: {
    eyebrow: "How It Works",
    heading: "From spreadsheets and paper files to a connected ERP in four steps",
    dark: false,
    steps: [
      { title: "Map your inventory & compliance needs", desc: "We learn your product categories, batch tracking requirements, and the documentation your business must maintain." },
      { title: "We configure ChemSupply for your business", desc: "Your warehouses, product categories, compliance templates, and distributor structure are set up to match your operation." },
      { title: "Migrate your inventory & client data", desc: "Existing stock records, customer accounts, and compliance documents are imported so you start with real data." },
      { title: "Train your team & go live", desc: "Hands-on training for warehouse, sales, and compliance staff, then launch with dedicated support during your first month." },
    ],
    deliverables: ["Inventory & order management dashboard", "Branded distributor/customer portal", "Compliance document templates", "Multi-warehouse configuration", "Team training sessions", "30 days of go-live support"],
  },
  why: {
    eyebrow: "Why ChemSupply",
    heading: "Because in this industry, a missing certificate can stop a shipment",
    dark: true,
    items: [
      { icon: "🔍", title: "Traceability built in, not bolted on", desc: "Every batch is traceable from supplier to customer — critical for audits, recalls, and regulatory inspections." },
      { icon: "📁", title: "Documentation that travels with the product", desc: "Safety data sheets and certificates are attached at the batch level, so the right paperwork is always with the right stock." },
      { icon: "🌐", title: "A portal that reduces order-desk calls", desc: "Distributors and bulk buyers place orders and pull documentation themselves — freeing your team from routine queries." },
      { icon: "🔧", title: "Adaptable to your regulatory environment", desc: "Since we built ChemSupply, we can extend it with region-specific compliance workflows as your requirements evolve." },
    ],
  },
  testimonials: [
    {
      text: "Audits used to mean two days of digging through files for the right batch certificates. Now everything is attached to the batch record itself — our last inspection took a fraction of the time it used to.",
      name: "Harshad Vora",
      role: "Operations Director, Vora Chemical Industries",
      initials: "HV",
    },
  ],
  faq: {
    eyebrow: "Questions",
    heading: "What suppliers ask before switching to ChemSupply",
    items: [
      { q: "Can it handle batch-level traceability for audits and recalls?", a: "Yes — every product is tracked at the batch level with full history from receipt to dispatch, making audits and recall scenarios far faster to manage." },
      { q: "Can we attach safety data sheets and certificates to products?", a: "Yes — compliance documents are attached directly at the product or batch level and travel with the stock through the system." },
      { q: "Do our distributors need special software to place orders?", a: "No — they use a branded web portal to place orders, track shipments, and access documentation, with no extra installation needed." },
      { q: "How does it handle products with different expiry and storage requirements?", a: "ChemSupply tracks expiry dates and storage conditions per batch, with automated alerts as products approach expiry." },
      { q: "How long does implementation typically take?", a: "Most chemical suppliers go live within 6–8 weeks, including configuration, data migration, and compliance template setup." },
    ],
  },
  cta: {
    eyebrow: "Ready when you are",
    heading: "Put traceability and compliance at the centre of your operations",
    body: "We'll walk through an order — from purchase to dispatch, with batch and compliance data attached — in ChemSupply, configured around your product categories.",
    primaryCta: { label: "Book a free demo", href: "/contact" },
    secondaryCta: { label: "See all Ready Apps", href: "/products" },
    meta: ["Free workflow walkthrough", "Live in 6–8 weeks", "Built-in batch traceability"],
  },
  related: [
    { label: "SolarOps", href: "/solarops", desc: "ERP for solar panel installers and EPC companies." },
    { label: "PestTrack", href: "/pesttrack", desc: "CRM built for pest control service businesses." },
    { label: "InsureDesk", href: "/insuredesk", desc: "CRM for insurance agencies and brokers." },
  ],
};

// ───────────────────────────── ClinicVoice AI ─────────────────────────────
export const clinicvoiceAi: ServicePageData = {
  meta: {
    title: "ClinicVoice AI — AI Voice Agent for Clinics & Hospitals",
    description:
      "ClinicVoice AI is a ready-to-deploy AI voice calling agent for clinics — handles appointment booking, reminders, FAQs, and follow-up calls automatically, in your clinic's voice.",
  },
  hero: {
    eyebrow: "ClinicVoice AI",
    heading: "ClinicVoice AI Voice Agent — Never Let a Patient Call Go to Voicemail Again",
    lead: "ClinicVoice AI answers calls, books appointments, sends reminders, answers common questions, and follows up after visits — automatically, in a natural voice, around the clock — so your front desk can focus on the patients standing in front of them.",
    breadcrumbs: crumbs("ClinicVoice AI"),
    stats: [
      { value: "24/7", label: "Call coverage" },
      { value: "3–4 wks", label: "To go live" },
      { value: "↓ missed calls", label: "Captured automatically" },
    ],
    marqueeItems: ["Appointment Booking", "Call Answering", "Reminder Calls", "FAQ Handling", "Follow-up Calls", "Multi-language", "EMR Integration", "Call Analytics"],
    formVariant: "service",
    formTag: "Get a demo",
    formHeading: "Hear ClinicVoice AI handle a real call",
    formSub: "We'll set up a live call demo using your clinic's services and FAQs.",
    formSubmitLabel: "Book my demo",
    formNote: "Hear it answer in your clinic's voice and tone.",
  },
  services: {
    eyebrow: "What's Inside",
    heading: "A voice agent that actually understands clinic conversations",
    body: "ClinicVoice AI isn't a generic chatbot wearing a phone number — it's trained specifically to handle the calls clinics receive every day.",
    variant: "svc",
    items: [
      { icon: "📞", title: "Automated Call Answering", desc: "Answers incoming calls instantly, any time of day, in a natural-sounding voice trained on your clinic's tone." },
      { icon: "📅", title: "Appointment Booking & Rescheduling", desc: "Books, confirms, and reschedules appointments directly into your calendar — no human handoff required." },
      { icon: "🔔", title: "Automated Reminder Calls", desc: "Places outbound reminder calls ahead of appointments, cutting no-shows without staff having to dial." },
      { icon: "❓", title: "FAQ & Information Handling", desc: "Answers common questions — timings, services, doctor availability, location, insurance — accurately and consistently." },
      { icon: "📋", title: "Post-Visit Follow-up Calls", desc: "Places follow-up calls after appointments to check on patients and prompt next-visit bookings." },
      { icon: "🔗", title: "EMR & Calendar Integration", desc: "Syncs directly with your scheduling system and patient records so bookings reflect real-time availability." },
    ],
  },
  capabilities: {
    eyebrow: "Built For",
    heading: "Wherever the phone keeps ringing",
    dark: true,
    items: [
      { icon: "🏥", title: "Multi-doctor clinics & hospitals", desc: "Handle high call volumes across departments without expanding your front-desk headcount." },
      { icon: "👨‍⚕️", title: "Independent practitioners", desc: "Never miss a new-patient enquiry again — even outside clinic hours." },
      { icon: "🦷", title: "Dental & speciality practices", desc: "Automate routine booking and reminder calls so your team focuses on chairside care." },
      { icon: "🏢", title: "Diagnostic centres & polyclinics", desc: "Manage appointment volumes across multiple test types and locations consistently." },
    ],
  },
  process: {
    eyebrow: "How It Works",
    heading: "From missed calls to full coverage in four steps",
    dark: false,
    steps: [
      { title: "Share your clinic's information & FAQs", desc: "We gather your services, doctor schedules, common questions, and the tone you want the agent to use." },
      { title: "We train & voice the agent for your clinic", desc: "ClinicVoice AI is configured with your information and a natural voice that matches your brand's personality." },
      { title: "We connect it to your calendar & systems", desc: "The agent is integrated with your appointment scheduling and patient records so bookings sync in real time." },
      { title: "Go live & monitor performance", desc: "Launch with call analytics so you can see exactly how many calls are handled, booked, and followed up." },
    ],
    deliverables: ["Trained AI voice agent", "Calendar & EMR integration", "Custom FAQ & script setup", "Call analytics dashboard", "Team onboarding session", "30 days of post-launch support"],
  },
  why: {
    eyebrow: "Why ClinicVoice AI",
    heading: "Because every unanswered call is a patient who calls someone else",
    dark: true,
    items: [
      { icon: "⏰", title: "Always on, never on hold", desc: "Patients get an answer at 8pm on a Sunday exactly as reliably as at 11am on a Tuesday." },
      { icon: "🗣️", title: "Sounds like your clinic, not a robot", desc: "Trained on your information and tone — patients experience a natural conversation, not a rigid script." },
      { icon: "📉", title: "Cuts no-shows without extra staff", desc: "Automated reminder calls reduce missed appointments without adding to your front desk's workload." },
      { icon: "📊", title: "Gives you visibility into every call", desc: "See call volumes, booking conversion, and common questions — insight your front desk alone can't easily provide." },
    ],
  },
  testimonials: [
    {
      text: "We were losing new-patient enquiries simply because nobody could answer the phone during peak hours. Now every call gets picked up — and a good number of them turn into booked appointments before our staff even sees the notification.",
      name: "Dr. Renu Kothari",
      role: "Founder, Kothari Dental & Wellness",
      initials: "RK",
    },
  ],
  faq: {
    eyebrow: "Questions",
    heading: "What clinic owners ask before adopting ClinicVoice AI",
    items: [
      { q: "Will patients realise they're talking to an AI?", a: "The agent is trained to sound natural and conversational using your clinic's tone and information — most callers experience it as a smooth, helpful conversation rather than a rigid script." },
      { q: "What happens with calls it genuinely can't handle?", a: "Complex or sensitive calls are transferred to your staff with full context, so patients never have to repeat themselves." },
      { q: "Can it speak the languages our patients use?", a: "Yes — the agent can be configured for multiple languages based on your patient base." },
      { q: "Does it actually book appointments into our existing calendar?", a: "Yes — it integrates directly with your scheduling system, checking real-time availability before confirming a slot." },
      { q: "How long does setup take before it can start answering calls?", a: "Most clinics are live within 3–4 weeks, including training the agent on your information and connecting it to your systems." },
    ],
  },
  cta: {
    eyebrow: "Ready when you are",
    heading: "Hear it handle a real patient call before you decide anything",
    body: "We'll set up a live demo call using your clinic's actual services and FAQs — so you can hear exactly how it would sound to your patients.",
    primaryCta: { label: "Book a free demo", href: "/contact" },
    secondaryCta: { label: "See all Ready Apps", href: "/products" },
    meta: ["Free live call demo", "Live in 3–4 weeks", "24/7 patient call coverage"],
  },
  related: [
    { label: "ClinicFlow", href: "/clinicflow", desc: "Clinic management system for doctors & multi-specialty practices." },
    { label: "TeleCare", href: "/telecare", desc: "Telemedicine platform for clinics and hospitals." },
    { label: "CallMate AI", href: "/callmate-ai", desc: "AI voice agent for handling business calls automatically." },
  ],
};
