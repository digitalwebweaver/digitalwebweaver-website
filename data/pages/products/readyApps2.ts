import type { ServicePageData } from "@/lib/types";

const crumbs = (name: string) => [
  { label: "Home", href: "/" },
  { label: "Our Products", href: "/products/" },
  { label: name },
];

// ───────────────────────────── RideEasy ─────────────────────────────
export const rideeasy: ServicePageData = {
  meta: {
    title: "RideEasy — Cab Booking System for Taxi & Fleet Operators",
    description:
      "RideEasy is a ready-to-launch cab booking platform — rider app, driver app, and dispatch dashboard with live tracking, fare estimation, and payments — branded as your own.",
  },
  hero: {
    eyebrow: "RideEasy",
    heading: "Launch your own cab booking app — without the aggregator's cut",
    lead: "RideEasy bundles a rider app, driver app, and dispatch dashboard into one branded platform — live tracking, fare estimation, and payments included — so your fleet runs on your brand, not a marketplace's.",
    breadcrumbs: crumbs("RideEasy"),
    stats: [
      { value: "6–8 wks", label: "To go live" },
      { value: "0%", label: "Commission to us" },
      { value: "3", label: "Apps in one suite" },
    ],
    marqueeItems: ["Rider App", "Driver App", "Dispatch Dashboard", "Live GPS Tracking", "Fare Estimation", "Payments & Wallets", "Ride History", "Driver Earnings"],
    formVariant: "service",
    formTag: "Get a demo",
    formHeading: "See RideEasy run a ride end-to-end",
    formSub: "We'll book a live ride through rider, driver, and dispatch apps so you see the full flow.",
    formSubmitLabel: "Book my demo",
    formNote: "Branded with your fleet's identity for the demo.",
  },
  services: {
    eyebrow: "What's Inside",
    heading: "Everything a fleet needs to run bookings independently",
    body: "RideEasy covers the full booking lifecycle — from a rider opening the app to a driver getting paid out — in one connected suite.",
    variant: "svc",
    items: [
      { icon: "📱", title: "Rider App", desc: "Riders book instantly or schedule rides, see live fare estimates, track drivers in real time, and pay in-app." },
      { icon: "🚖", title: "Driver App", desc: "Drivers receive ride requests, get optimised navigation, manage availability, and track daily earnings." },
      { icon: "🖥️", title: "Dispatch Dashboard", desc: "Operators monitor live rides, manage driver onboarding, assign rides manually when needed, and view fleet analytics." },
      { icon: "📍", title: "Live GPS Tracking", desc: "Real-time location sharing between rider and driver with accurate ETAs throughout the trip." },
      { icon: "🧮", title: "Smart Fare Estimation", desc: "Distance, time, and demand-based fare calculation shown upfront — fully configurable to your pricing model." },
      { icon: "💳", title: "Payments & Driver Payouts", desc: "UPI, cards, wallets, and cash supported, with automatic fare splits and scheduled driver payouts." },
    ],
  },
  capabilities: {
    eyebrow: "Built For",
    heading: "Whatever kind of fleet you run",
    dark: true,
    items: [
      { icon: "🚕", title: "City taxi & cab operators", desc: "Run a full on-demand booking service in your city without paying per-ride commissions to aggregators." },
      { icon: "🏢", title: "Corporate & employee transport", desc: "Manage scheduled staff pickups, shift-based bookings, and centralised billing for businesses." },
      { icon: "🛺", title: "Auto-rickshaw & local fleets", desc: "Bring smaller, local fleets online with a booking experience riders already expect from bigger platforms." },
      { icon: "🚐", title: "Rental & outstation operators", desc: "Support hourly rentals and outstation trips alongside regular point-to-point bookings." },
    ],
  },
  process: {
    eyebrow: "How It Works",
    heading: "From a fleet of drivers to a booking app in four steps",
    dark: false,
    steps: [
      { title: "Tell us about your fleet & city", desc: "Share your fleet size, service areas, vehicle types, and pricing model so we can configure accordingly." },
      { title: "We brand all three apps as yours", desc: "Rider app, driver app, and dispatch dashboard are configured and branded with your identity and pricing rules." },
      { title: "Onboard your drivers", desc: "We help register your drivers, verify documents, and train them on the driver app before launch." },
      { title: "Launch & start taking direct bookings", desc: "Go live on the App Store and Play Store with a launch plan to bring riders onto your own platform." },
    ],
    deliverables: ["Branded rider app (iOS & Android)", "Driver app with earnings dashboard", "Dispatch & operations dashboard", "Payment gateway integration", "Driver onboarding support", "30 days of post-launch support"],
  },
  why: {
    eyebrow: "Why RideEasy",
    heading: "Because every booking through someone else's app is a rider you don't own",
    dark: true,
    items: [
      { icon: "💰", title: "Keep your margins", desc: "No per-ride commission to us — your fleet earns from every trip, minus only your own payment processing costs." },
      { icon: "📇", title: "Own your rider relationships", desc: "Rider data, ride history, and preferences stay with you — build direct loyalty instead of routing through a marketplace." },
      { icon: "🎨", title: "Your brand on every screen", desc: "Booking, tracking, and notifications all carry your fleet's identity — not an aggregator's logo." },
      { icon: "🛠️", title: "Built to extend", desc: "Need ride-sharing, scheduled rentals, or corporate billing? Since we built RideEasy, we can build it into yours." },
    ],
  },
  testimonials: [
    {
      text: "We had forty cars and no way to compete with the big apps for visibility. With our own branded app, we're no longer at the mercy of someone else's commission structure — and our regular riders book direct now.",
      name: "Yusuf Shaikh",
      role: "Fleet Owner, CityLine Cabs",
      initials: "YS",
    },
  ],
  faq: {
    eyebrow: "Questions",
    heading: "What fleet operators ask before switching to RideEasy",
    items: [
      { q: "Can we set our own fare rules and pricing model?", a: "Yes — base fares, per-km and per-minute rates, surge rules, and ride-type pricing are all configurable to match how you operate." },
      { q: "How do we get our existing drivers onto the platform?", a: "We help with bulk driver onboarding, document verification, and hands-on training on the driver app before you launch." },
      { q: "Does it support both instant and scheduled bookings?", a: "Yes — riders can book instantly or schedule rides in advance, and corporate accounts can set up recurring pickups." },
      { q: "Can dispatch staff manually assign rides when needed?", a: "Yes — the dispatch dashboard lets operators monitor live rides and manually assign or reassign drivers when automated matching needs a human touch." },
      { q: "How long until our fleet can take its first booking?", a: "Most fleets go live within 6–8 weeks, including branding, driver onboarding, and app store approval." },
    ],
  },
  cta: {
    eyebrow: "Ready when you are",
    heading: "Stop renting your fleet's visibility from someone else's app",
    body: "We'll walk a live ride through the rider, driver, and dispatch apps — branded with your fleet's identity — so you see exactly what your riders would experience.",
    primaryCta: { label: "Book a free demo", href: "/contact" },
    secondaryCta: { label: "See all Our Products", href: "/products" },
    meta: ["Free live walkthrough", "Live in 6–8 weeks", "Zero commission to us"],
  },
  related: [
    { label: "QuickBite", href: "/quickbite", desc: "Food delivery app suite for restaurants and cloud kitchens." },
    { label: "CallMate AI", href: "/callmate-ai", desc: "AI voice agent for handling booking calls automatically." },
    { label: "ChatFlow AI", href: "/chatflow-ai", desc: "WhatsApp automation for bookings and support." },
  ],
};

// ───────────────────────────── SchoolHub ─────────────────────────────
export const schoolhub: ServicePageData = {
  meta: {
    title: "SchoolHub — School Management System for K-12 Institutions",
    description:
      "SchoolHub is a ready-to-deploy school management system — admissions, attendance, timetables, fee collection, exams, and parent communication in one branded platform.",
  },
  hero: {
    eyebrow: "SchoolHub",
    heading: "SchoolHub School Management System — Run Your Entire School From One Connected Platform",
    lead: "SchoolHub brings admissions, attendance, timetables, fee collection, exams, report cards, and parent communication into one system — so your staff stop juggling registers, spreadsheets, and group chats.",
    breadcrumbs: crumbs("SchoolHub"),
    stats: [
      { value: "5–7 wks", label: "To go live" },
      { value: "100%", label: "Branded to your school" },
      { value: "1", label: "App for staff & parents" },
    ],
    marqueeItems: ["Admissions", "Attendance", "Timetable & Substitutions", "Fee Collection", "Exams & Report Cards", "Parent App", "Staff Management", "Notices & Circulars"],
    formVariant: "service",
    formTag: "Get a demo",
    formHeading: "See SchoolHub run your school's daily routine",
    formSub: "We'll walk through admissions, attendance, fees, and parent communication configured for your school.",
    formSubmitLabel: "Book my demo",
    formNote: "A real walkthrough using your school's structure.",
  },
  services: {
    eyebrow: "What's Inside",
    heading: "Every part of school administration, connected",
    body: "SchoolHub replaces the registers, spreadsheets, and scattered group chats schools usually run on — with one system everyone actually uses.",
    variant: "svc",
    items: [
      { icon: "📝", title: "Admissions & Enquiries", desc: "Online enquiry forms, admission workflows, document collection, and seat allocation tracking." },
      { icon: "✅", title: "Attendance & Leave", desc: "Mark attendance digitally for students and staff, with automated absence alerts to parents." },
      { icon: "📅", title: "Timetable & Substitutions", desc: "Build class timetables and handle teacher substitutions with automatic conflict checks." },
      { icon: "💰", title: "Fee Collection & Reminders", desc: "Online fee payment with instalment plans, receipts, dues tracking, and automated reminder messages." },
      { icon: "📊", title: "Exams & Report Cards", desc: "Configure exam schedules, enter marks, and auto-generate report cards in your school's format." },
      { icon: "📣", title: "Parent & Staff Communication", desc: "Push notices, circulars, homework, and event updates straight to a branded parent and staff app." },
    ],
  },
  capabilities: {
    eyebrow: "Built For",
    heading: "Whatever kind of institution you run",
    dark: true,
    items: [
      { icon: "🏫", title: "K-12 schools", desc: "Manage multi-grade structures, subject-wise timetables, and parent communication at scale." },
      { icon: "🌱", title: "Pre-schools & play schools", desc: "Track daily routines, milestones, and parent updates with simpler workflows suited to early years." },
      { icon: "🏢", title: "School groups & trusts", desc: "Run multiple branches from one system with centralised reporting and per-branch administration." },
      { icon: "📖", title: "Tuition & coaching chains", desc: "Combine batch management, attendance, and fee collection across multiple centres." },
    ],
  },
  process: {
    eyebrow: "How It Works",
    heading: "From registers and group chats to one system in four steps",
    dark: false,
    steps: [
      { title: "Map your school's structure", desc: "We learn your grades, sections, subjects, fee structure, and how staff and parents currently communicate." },
      { title: "We brand & configure SchoolHub", desc: "Your classes, timetables, fee plans, exam formats, and branding are set up to match how your school runs." },
      { title: "Migrate student & staff records", desc: "Existing student data, attendance history, and fee records are imported so you start with real information." },
      { title: "Train your staff & launch", desc: "Hands-on training for teachers and admin staff, then go live with dedicated support through your first term." },
    ],
    deliverables: ["Admin & staff dashboard", "Branded parent mobile app", "Fee payment gateway setup", "Report card & circular templates", "Staff onboarding & training", "30 days of post-launch support"],
  },
  why: {
    eyebrow: "Why SchoolHub",
    heading: "Because parents judge a school by how organised it feels",
    dark: true,
    items: [
      { icon: "🏷️", title: "Looks like your school, not generic software", desc: "Branded parent app, report cards, and notices carry your school's identity — building trust with every interaction." },
      { icon: "📲", title: "One app parents actually open", desc: "Replace scattered WhatsApp groups and paper notices with a single branded channel parents check daily." },
      { icon: "⏱️", title: "Saves real administrative hours", desc: "Attendance, fee reminders, and report cards that used to take days run in minutes — freeing staff for actual teaching support." },
      { icon: "🔧", title: "Adaptable to your way of working", desc: "Since we built SchoolHub, we can extend it with custom workflows specific to your school's processes." },
    ],
  },
  testimonials: [
    {
      text: "Fee follow-ups used to mean phone calls every single week. Now reminders go out automatically, parents pay online, and our accounts team finally has time for actual planning instead of chasing dues.",
      name: "Meena Pillai",
      role: "Principal, Greenfield Public School",
      initials: "MP",
    },
  ],
  faq: {
    eyebrow: "Questions",
    heading: "What school administrators ask first",
    items: [
      { q: "Can it match our existing report card and fee structure?", a: "Yes — exam formats, grading systems, and fee plans are configured to match exactly how your school already operates." },
      { q: "Will our teachers need a lot of training to use it?", a: "Most staff are comfortable within their first week. We run hands-on training sessions and provide simple guides for daily tasks like attendance and marks entry." },
      { q: "How do parents receive updates — do they need to download an app?", a: "Parents use a branded mobile app for notices, attendance alerts, fee reminders, and report cards — designed to be simpler than a WhatsApp group to follow." },
      { q: "Can it handle multiple branches under one school group?", a: "Yes — school groups and trusts can run multiple branches from one system with centralised oversight and branch-level administration." },
      { q: "How long does it take to get our school live on SchoolHub?", a: "Most schools are live within 5–7 weeks, including data migration, configuration, and staff training — ideally timed before a new term." },
    ],
  },
  cta: {
    eyebrow: "Ready when you are",
    heading: "Give your school the organised, connected feel parents notice",
    body: "Book a walkthrough configured around your school's grades, fee structure, and communication style — see exactly how SchoolHub would run your day-to-day.",
    primaryCta: { label: "Book a free demo", href: "/contact" },
    secondaryCta: { label: "See all Our Products", href: "/products" },
    meta: ["Free 30-minute walkthrough", "Live in 5–7 weeks", "Branded parent & staff app"],
  },
  related: [
    { label: "EduCore", href: "/educore", desc: "Learning management system for institutes & academies." },
    { label: "TeleCare", href: "/telecare", desc: "Telemedicine platform for clinics and hospitals." },
    { label: "ChatFlow AI", href: "/chatflow-ai", desc: "WhatsApp automation for parent communication." },
  ],
};

// ───────────────────────────── ClinicFlow ─────────────────────────────
export const clinicflow: ServicePageData = {
  meta: {
    title: "ClinicFlow — Clinic Management System for Doctors & Multi-Specialty Practices",
    description:
      "ClinicFlow is a ready-to-launch clinic management system — appointment scheduling, EMR, billing, pharmacy, and patient communication in one branded platform.",
  },
  hero: {
    eyebrow: "ClinicFlow",
    heading: "ClinicFlow Clinic Management System — Run Your Clinic on One System, Not Five Disconnected Tools",
    lead: "ClinicFlow brings appointment scheduling, electronic medical records, billing, pharmacy, lab orders, and patient communication into one platform — so your front desk, doctors, and back office finally work from the same data.",
    breadcrumbs: crumbs("ClinicFlow"),
    stats: [
      { value: "5–6 wks", label: "To go live" },
      { value: "1", label: "Record per patient" },
      { value: "100%", label: "Branded to your clinic" },
    ],
    marqueeItems: ["Appointment Scheduling", "Electronic Medical Records", "Billing & Insurance", "Pharmacy & Inventory", "Lab Order Integration", "Patient App", "Multi-Doctor Support", "Reports & Analytics"],
    formVariant: "service",
    formTag: "Get a demo",
    formHeading: "See ClinicFlow handle a patient visit end-to-end",
    formSub: "We'll walk a visit from booking to billing through the system, configured for your clinic.",
    formSubmitLabel: "Book my demo",
    formNote: "Configured around your specialities and workflow.",
  },
  services: {
    eyebrow: "What's Inside",
    heading: "From booking to billing — one connected record",
    body: "ClinicFlow is built so that the person at the front desk, the doctor in the consultation room, and the accountant at month-end are all looking at the same up-to-date information.",
    variant: "svc",
    items: [
      { icon: "📅", title: "Appointment Scheduling", desc: "Online and walk-in booking with doctor-wise calendars, automated reminders, and waitlist management." },
      { icon: "🩺", title: "Electronic Medical Records", desc: "Structured patient histories, prescriptions, vitals, and visit notes accessible securely across visits and doctors." },
      { icon: "💳", title: "Billing & Insurance Claims", desc: "Generate invoices, track payments, apply package pricing, and manage insurance claim documentation." },
      { icon: "💊", title: "Pharmacy & Inventory", desc: "Manage in-house pharmacy stock, dispense against prescriptions, and get low-stock alerts automatically." },
      { icon: "🧪", title: "Lab Order Integration", desc: "Order tests, track results, and attach reports directly to a patient's record for the consulting doctor." },
      { icon: "📱", title: "Patient App & Reminders", desc: "Patients book appointments, view prescriptions and reports, and get visit reminders from a branded app." },
    ],
  },
  capabilities: {
    eyebrow: "Built For",
    heading: "Whatever kind of practice you run",
    dark: true,
    items: [
      { icon: "🏥", title: "Multi-specialty clinics", desc: "Manage multiple departments, doctors, and specialities under one system with role-based access." },
      { icon: "👨‍⚕️", title: "Independent practitioners", desc: "Run your entire practice — scheduling, records, billing — without hiring extra administrative staff." },
      { icon: "🏢", title: "Diagnostic & polyclinic chains", desc: "Centralise patient records and billing across multiple branches with consolidated reporting." },
      { icon: "💉", title: "Speciality practices", desc: "Configure speciality-specific templates for visit notes, prescriptions, and follow-up protocols." },
    ],
  },
  process: {
    eyebrow: "How It Works",
    heading: "From paper files to a connected clinic in four steps",
    dark: false,
    steps: [
      { title: "Walk us through your clinic's flow", desc: "From the first call to the final bill — we map exactly how patients move through your clinic today." },
      { title: "We configure & brand ClinicFlow", desc: "Your departments, doctors, visit templates, billing rules, and branding are set up to match your practice." },
      { title: "Migrate patient records", desc: "Existing patient histories, appointment records, and billing data are imported so nothing is lost." },
      { title: "Train your team & go live", desc: "Hands-on training for front desk, doctors, and accounts staff, then full launch with ongoing support." },
    ],
    deliverables: ["Clinic & doctor dashboards", "Branded patient mobile app", "Billing & insurance templates", "Pharmacy & lab modules", "Staff onboarding & training", "30 days of post-launch support"],
  },
  why: {
    eyebrow: "Why ClinicFlow",
    heading: "Because disconnected tools cost you time — and patient trust",
    dark: true,
    items: [
      { icon: "🔗", title: "One record, every department", desc: "Front desk, doctors, pharmacy, and billing all work from the same patient record — no re-entering data, no version mismatches." },
      { icon: "🎨", title: "Looks like your clinic", desc: "Branded patient app, invoices, and prescriptions carry your clinic's identity, building a more professional patient experience." },
      { icon: "📊", title: "Decisions backed by real data", desc: "See patient volumes, revenue trends, and doctor-wise performance — not guesses from memory or scattered registers." },
      { icon: "🔒", title: "Built with patient data in mind", desc: "Access-controlled medical records with audit trails appropriate for healthcare data handling." },
    ],
  },
  testimonials: [
    {
      text: "Our biggest pain was patients repeating their history every visit because records were scattered across paper files and an old billing tool. With ClinicFlow, every doctor sees the same record — and our front desk finally isn't drowning in paperwork.",
      name: "Dr. Sameer Joshi",
      role: "Medical Director, Wellpoint Multi-Speciality Clinic",
      initials: "SJ",
    },
  ],
  faq: {
    eyebrow: "Questions",
    heading: "What clinic owners ask before switching to ClinicFlow",
    items: [
      { q: "Can it support multiple doctors and specialities under one clinic?", a: "Yes — ClinicFlow supports multi-doctor, multi-department setups with role-based access and speciality-specific templates." },
      { q: "How are existing patient records migrated?", a: "We help import your existing patient histories, appointment data, and billing records as part of onboarding, so you don't start from scratch." },
      { q: "Does it support insurance billing and claims?", a: "Yes — generate insurance-ready invoices and track claim status alongside regular billing and payment workflows." },
      { q: "Is patient data stored securely?", a: "Yes — medical records are access-controlled by role, with audit trails appropriate for healthcare data handling." },
      { q: "How long before our clinic can go live?", a: "Most clinics are live within 5–6 weeks, including configuration, data migration, and staff training." },
    ],
  },
  cta: {
    eyebrow: "Ready when you are",
    heading: "See a patient visit move from booking to billing — in one system",
    body: "Book a walkthrough configured around your clinic's departments and workflow — see exactly how ClinicFlow would run your daily operations.",
    primaryCta: { label: "Book a free demo", href: "/contact" },
    secondaryCta: { label: "See all Our Products", href: "/products" },
    meta: ["Free 30-minute walkthrough", "Live in 5–6 weeks", "One record across your clinic"],
  },
  related: [
    { label: "GlowDesk", href: "/glowdesk", desc: "Software for aesthetic and cosmetic clinics." },
    { label: "TeleCare", href: "/telecare", desc: "Telemedicine platform for clinics and hospitals." },
    { label: "ClinicVoice AI", href: "/clinicvoice-ai", desc: "AI voice agent that handles patient calls automatically." },
  ],
};

// ───────────────────────────── VetCare ─────────────────────────────
export const vetcare: ServicePageData = {
  meta: {
    title: "VetCare — Veterinary Practice Management System for South African Clinics",
    description:
      "VetCare is an all-in-one practice management system built for South African veterinary clinics. Appointments, patient records, SARS-compliant billing, WhatsApp communication, stock control — and it keeps working through loadshedding.",
  },
  hero: {
    eyebrow: "VetCare",
    heading: "Practice management built for South African vets — WhatsApp-first, SARS-ready, loadshedding-proof.",
    lead: "Appointments, patient records, stock, billing, and client WhatsApp — in one affordable system designed for South African veterinary clinics. Works on any device, and keeps working when the power doesn't.",
    breadcrumbs: crumbs("VetCare"),
    stats: [
      { value: "4–6 wks", label: "To go live" },
      { value: "219", label: "Automated tests" },
      { value: "100%", label: "Offline-capable" },
    ],
    marqueeItems: [
      "Loadshedding-Proof PWA",
      "WhatsApp + SMS",
      "SARS 15% VAT Invoices",
      "SnapScan QR Payments",
      "SOAP Clinical Notes",
      "FIFO Stock Dispensing",
      "Appointment Reminders",
      "Role-Based Access",
      "5 Business Reports",
      "Vaccination Certificates",
      "Quiet Hours Messaging",
      "POPIA-Friendly",
    ],
    formVariant: "service",
    formTag: "Book a demo",
    formHeading: "See VetCare run your whole clinic",
    formSub: "We'll walk a consultation from booking to WhatsApp invoice — configured for your practice.",
    formSubmitLabel: "Book my demo",
    formNote: "No commitment. 30-minute walkthrough.",
  },
  services: {
    eyebrow: "What's Inside",
    heading: "Your whole practice. One screen.",
    body: "Eight fully-built modules that replace the paper files, spreadsheets, personal WhatsApp, and separate billing tool most SA clinics currently run on.",
    variant: "svc",
    items: [
      {
        icon: "📅",
        title: "Appointments & Scheduling",
        desc: "Day calendar + list view per vet. Real-time availability so no double-booking. Public online booking link clients use themselves. Live Kanban status board: Pending → Confirmed → Arrived → In Consultation → Completed. Automatic WhatsApp confirmation the moment a booking is made or changed.",
      },
      {
        icon: "🐾",
        title: "Patient Records (EMR)",
        desc: "Owner and pet profiles with photos — multiple pets per owner. Allergy and chronic-condition banners flagged on every record. SOAP consultation notes with vitals, diagnoses, and ready-made clinical templates. Vaccination records with auto-calculated next-due dates. 24-hour edit lock for medico-legal integrity. Full patient timeline: every visit, vaccine, prescription, and file in order.",
      },
      {
        icon: "🧾",
        title: "SARS-Compliant Billing",
        desc: "Invoices auto-created from a consultation — no double entry. Proper 15% VAT calculation, sequential invoice numbers, and a SnapScan QR code for instant payment. Record cash, card, EFT, and SnapScan payments. Track partial payments and outstanding balances. Void with reason and full audit trail. Send invoice to client via WhatsApp in one click.",
      },
      {
        icon: "💬",
        title: "WhatsApp-Native Communication",
        desc: "WhatsApp gateway with automatic SMS fallback. 10+ editable message templates: confirmations, 24-hour reminders, vaccine-due nudges, invoices, discharge summaries. Automated reminders run hands-off. Broadcast to all clients or a segment (dog owners, cat owners). Full message log with delivery status. Quiet hours (20:00–07:00) enforced automatically — no late-night messages. POPIA opt-out built in.",
      },
      {
        icon: "💊",
        title: "Inventory & Stock Control",
        desc: "Product catalogue with suppliers, batch numbers, and expiry tracking. FIFO dispensing — oldest stock goes first; expired stock is blocked from dispensing. Auto-dispense straight from a consultation: stock decrements when a drug is prescribed. Low-stock alerts with reorder levels and an expiry monitor so nothing gets wasted or runs out mid-day.",
      },
      {
        icon: "📊",
        title: "Dashboards & Reports",
        desc: "Role-aware dashboards for owners, vets, and receptionists — each seeing what matters to them. Live KPIs: today's revenue, active patients, low-stock count, outstanding balances. 6-month revenue trend, appointments-by-day, patients-by-species, and top-services charts. Five exportable business reports (PDF + Excel): appointment summary, revenue by category, aged outstanding invoices, stock movement, and overdue vaccinations.",
      },
    ],
  },
  capabilities: {
    eyebrow: "Why SA Clinics Choose VetCare",
    heading: "Built for how South African clinics actually work",
    dark: true,
    items: [
      {
        icon: "⚡",
        title: "Loadshedding-resilient",
        desc: "VetCare is a full PWA — it installs like a native app, reads cached records offline, and queues every change (appointments, notes, stock) to sync automatically when power returns. Nothing is lost during Stage 6.",
      },
      {
        icon: "💬",
        title: "WhatsApp-native — where SA clients live",
        desc: "Appointment confirmations, 24-hour reminders, vaccination nudges, invoices, and broadcasts go straight to WhatsApp with automatic SMS fallback. Quiet hours (20:00–07:00) enforced automatically — no 2 a.m. pings.",
      },
      {
        icon: "🧾",
        title: "SARS-compliant from day one",
        desc: "Proper 15% VAT tax invoices with your VAT number, sequential invoice numbers, and a SnapScan QR code. No scrambling at tax time. Every invoice is print-ready and SARS-compliant out of the box.",
      },
      {
        icon: "🇿🇦",
        title: "South Africa built-in",
        desc: "SAVC practice and vet numbers, all 9 SA provinces, South African public holidays pre-loaded into scheduling, ZAR currency throughout. Not a foreign product adapted for SA — built for SA from the ground up.",
      },
    ],
  },
  process: {
    eyebrow: "How It Works",
    heading: "From paper files to a connected practice in four steps",
    dark: false,
    steps: [
      {
        title: "Walk us through your practice",
        desc: "We learn your services, vet schedules, species mix, and how you currently handle records, billing, and client communication.",
      },
      {
        title: "We configure & brand VetCare",
        desc: "Your services, VAT number, SAVC number, reminder schedules, messaging templates, and branding colour are set up to match exactly how your practice runs.",
      },
      {
        title: "Migrate patient & owner records",
        desc: "Existing pet histories, owner contacts, vaccination records, and outstanding balances are imported so you start with real data on day one.",
      },
      {
        title: "Train your team & go live",
        desc: "Hands-on training for vets, nurses, receptionists, and accountants. Go live with dedicated support through your first weeks of operation.",
      },
    ],
    deliverables: [
      "Role-aware dashboards (owner, vet, reception, nurse, accountant)",
      "Branded professional PDF documents",
      "WhatsApp + SMS communication setup",
      "SARS-compliant billing & SnapScan QR",
      "Stock catalogue with FIFO dispensing",
      "Staff onboarding & training",
      "30 days of post-launch support",
    ],
  },
  why: {
    eyebrow: "Why VetCare",
    heading: "Most vet software ignores how South Africa works. VetCare doesn't.",
    dark: true,
    items: [
      {
        icon: "🔌",
        title: "Works through loadshedding",
        desc: "No internet? No power? VetCare keeps running offline and queues every change to sync when you reconnect. Your clinic doesn't stop because Eskom does.",
      },
      {
        icon: "💰",
        title: "Affordable to run",
        desc: "Runs on standard shared hosting — no expensive cloud subscription, no per-user fees that spiral as your team grows. Built to stay affordable for a 1–10 vet practice.",
      },
      {
        icon: "🔒",
        title: "Enterprise security, clinic price",
        desc: "Bank-grade data isolation per clinic, 6 roles and 43 fine-grained permissions, full audit trail on every action, and 219 automated tests covering every permission boundary.",
      },
      {
        icon: "🐾",
        title: "Built around the full patient story",
        desc: "Every visit, vaccination, prescription, and lab result connects into one ongoing record per pet — with allergy banners and chronic-condition flags visible on every screen, not buried in paper files.",
      },
    ],
  },
  testimonials: [
    {
      text: "Vaccination follow-ups used to depend on someone remembering to call. Now the reminders go out automatically on WhatsApp — and we're seeing pets come back for boosters who would have otherwise been missed completely.",
      name: "Dr. Farah Engineer",
      role: "Owner, PawCare Veterinary Hospital",
      initials: "FE",
    },
  ],
  faq: {
    eyebrow: "Questions",
    heading: "What SA practice owners ask before switching to VetCare",
    items: [
      {
        q: "What happens to our records during loadshedding?",
        a: "Nothing is lost. VetCare is a Progressive Web App — it keeps running fully offline, reads cached patient records, and queues every new appointment, note, or payment to sync automatically the moment power and internet return.",
      },
      {
        q: "Are the invoices really SARS-compliant?",
        a: "Yes. VetCare generates proper 15% VAT tax invoices with your clinic's VAT number, sequential invoice numbers, and a SnapScan QR code for instant payment. Receipts too. No adjustments needed at tax time.",
      },
      {
        q: "Can it send WhatsApp to our clients?",
        a: "Yes — with automatic SMS fallback if WhatsApp isn't available. You get 10+ editable message templates, automated 24-hour appointment reminders, vaccination-due nudges, and broadcast messaging to client segments. Quiet hours (20:00–07:00) are enforced automatically so no messages go out at night.",
      },
      {
        q: "Is my clients' data safe and private?",
        a: "Each clinic's data is completely isolated from every other clinic at the database layer. Access is role-controlled (6 roles, 43 permissions) so a receptionist can't see clinical notes and a nurse can't void invoices. Every action is audit-logged.",
      },
      {
        q: "Do I need expensive servers or cloud infrastructure?",
        a: "No. VetCare runs on standard, affordable shared hosting — no expensive cloud bill, no per-seat pricing that scales badly. It's lightweight and fast even on slower connections.",
      },
      {
        q: "Will it work on phones and tablets at the practice?",
        a: "Yes — VetCare is mobile-ready and can be installed as an app on any Android or iOS device. Vets can update notes on a tablet in the consultation room; reception can check in arrivals on a phone.",
      },
      {
        q: "Can it handle dogs, cats, birds, rabbits, and reptiles?",
        a: "Yes. VetCare supports companion animals (dogs, cats) and exotics (birds, rabbits, reptiles) with configurable record templates and species-specific fields.",
      },
    ],
  },
  cta: {
    eyebrow: "Ready when you are",
    heading: "Run your whole practice from one screen — even through loadshedding.",
    body: "Book a free 30-minute walkthrough and we'll show VetCare handling a live consultation: booking, SOAP notes, stock dispensing, SARS invoice, and WhatsApp to the client — all from one screen, configured for your practice.",
    primaryCta: { label: "Book a free demo", href: "/contact" },
    secondaryCta: { label: "See all Our Products", href: "/products" },
    meta: ["Free 30-minute walkthrough", "Live in 4–6 weeks", "WhatsApp-first, loadshedding-proof"],
  },
  related: [
    { label: "ClinicFlow", href: "/clinicflow", desc: "Clinic management system for doctors & multi-specialty practices." },
    { label: "ChatFlow AI", href: "/chatflow-ai", desc: "WhatsApp automation for client communication." },
    { label: "ClinicVoice AI", href: "/clinicvoice-ai", desc: "AI voice agent that handles appointment calls automatically." },
  ],
};
