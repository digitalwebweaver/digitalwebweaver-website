import type { ServicePageData } from "@/lib/types";

const crumbs = (name: string) => [
  { label: "Home", href: "/" },
  { label: "Ready Apps", href: "/products/" },
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
    secondaryCta: { label: "See all Ready Apps", href: "/products" },
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
    heading: "Run your entire school from one connected platform",
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
    secondaryCta: { label: "See all Ready Apps", href: "/products" },
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
    heading: "Run your clinic on one system — not five disconnected tools",
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
    secondaryCta: { label: "See all Ready Apps", href: "/products" },
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
    title: "VetCare — Veterinary Clinic Management System",
    description:
      "VetCare is a ready-to-launch veterinary practice management system — appointments, patient records, vaccination reminders, billing, and pet-owner communication in one platform.",
  },
  hero: {
    eyebrow: "VetCare",
    heading: "Everything your veterinary practice needs — in one connected system",
    lead: "VetCare brings appointment scheduling, patient and pet records, vaccination tracking, billing, pharmacy, and pet-owner communication into one platform — built around how veterinary practices actually run.",
    breadcrumbs: crumbs("VetCare"),
    stats: [
      { value: "4–6 wks", label: "To go live" },
      { value: "1", label: "Record per pet" },
      { value: "↓ missed shots", label: "With reminders" },
    ],
    marqueeItems: ["Appointment Scheduling", "Pet Medical Records", "Vaccination Reminders", "Billing & Invoicing", "Pharmacy & Inventory", "Pet-Owner App", "Multi-Vet Support", "Boarding & Grooming"],
    formVariant: "service",
    formTag: "Get a demo",
    formHeading: "See VetCare handle a clinic visit end-to-end",
    formSub: "We'll walk a pet's visit from booking to vaccination reminders through the system.",
    formSubmitLabel: "Book my demo",
    formNote: "Configured around your practice's services.",
  },
  services: {
    eyebrow: "What's Inside",
    heading: "Built around the pet, not just the appointment",
    body: "VetCare keeps every pet's history — vaccinations, treatments, weight, allergies — connected in one record, so your team always has the full picture.",
    variant: "svc",
    items: [
      { icon: "📅", title: "Appointment Scheduling", desc: "Online and walk-in booking with vet-wise calendars, service types, and automated reminders for owners." },
      { icon: "🐾", title: "Pet Medical Records", desc: "Complete pet histories — vaccinations, treatments, allergies, weight trends, and visit notes — in one place." },
      { icon: "💉", title: "Vaccination & Follow-up Reminders", desc: "Automated SMS/WhatsApp reminders for upcoming vaccinations, deworming, and follow-up visits." },
      { icon: "💳", title: "Billing & Invoicing", desc: "Generate invoices for consultations, procedures, boarding, and products with integrated payment collection." },
      { icon: "💊", title: "Pharmacy & Inventory", desc: "Track medicines, vaccines, and pet-care products with expiry alerts and low-stock notifications." },
      { icon: "📱", title: "Pet-Owner App", desc: "Owners book appointments, view medical records and vaccination history, and receive care reminders." },
    ],
  },
  capabilities: {
    eyebrow: "Built For",
    heading: "Whatever kind of practice you run",
    dark: true,
    items: [
      { icon: "🏥", title: "Veterinary clinics & hospitals", desc: "Manage multi-vet schedules, procedures, and patient records across small and large animal practices." },
      { icon: "🐶", title: "Pet care & grooming centres", desc: "Combine medical visits with grooming, boarding, and daycare bookings in one system." },
      { icon: "🐄", title: "Mixed & farm animal practices", desc: "Track herd and individual animal records alongside scheduled farm visits and treatments." },
      { icon: "🏢", title: "Multi-branch veterinary chains", desc: "Run multiple locations from one system with centralised records and reporting." },
    ],
  },
  process: {
    eyebrow: "How It Works",
    heading: "From paper charts to a connected practice in four steps",
    dark: false,
    steps: [
      { title: "Walk us through your practice", desc: "We learn your services, vet schedules, common procedures, and how you currently track patient records." },
      { title: "We configure & brand VetCare", desc: "Your services, pricing, reminder schedules, and branding are set up to match how your practice runs." },
      { title: "Migrate patient & owner records", desc: "Existing pet histories, owner contacts, and appointment data are imported so you start with real information." },
      { title: "Train your team & launch", desc: "Hands-on training for vets and front-desk staff, then go live with dedicated support through your first weeks." },
    ],
    deliverables: ["Clinic & vet dashboards", "Branded pet-owner app", "Vaccination reminder templates", "Billing & invoicing setup", "Staff onboarding & training", "30 days of post-launch support"],
  },
  why: {
    eyebrow: "Why VetCare",
    heading: "Because pet owners remember who reminded them — and who didn't",
    dark: true,
    items: [
      { icon: "🔔", title: "Reminders that build loyalty", desc: "Automated vaccination and follow-up reminders bring pets back for care — and owners back to your practice." },
      { icon: "🐾", title: "Built around the pet's full story", desc: "Every visit, vaccination, and treatment connects into one ongoing record — not isolated entries in a register." },
      { icon: "🎨", title: "Looks like your practice", desc: "Branded owner app, invoices, and reminders carry your clinic's identity — not generic veterinary software." },
      { icon: "🔧", title: "Adaptable to your services", desc: "Since we built VetCare, we can extend it with grooming, boarding, or farm-visit modules specific to you." },
    ],
  },
  testimonials: [
    {
      text: "Vaccination follow-ups used to depend on someone remembering to call. Now the reminders go out automatically — and we're seeing pets come back for boosters who would have otherwise slipped through.",
      name: "Dr. Farah Engineer",
      role: "Owner, PawCare Veterinary Hospital",
      initials: "FE",
    },
  ],
  faq: {
    eyebrow: "Questions",
    heading: "What practice owners ask before switching to VetCare",
    items: [
      { q: "Can it handle both small animal and large/farm animal practices?", a: "Yes — VetCare supports configurable record templates for companion animals as well as herd or farm-visit based practices." },
      { q: "How do vaccination reminders actually work?", a: "Once a vaccination is logged, VetCare automatically schedules and sends SMS/WhatsApp reminders to the owner ahead of the next due date." },
      { q: "Can we combine medical visits with grooming or boarding bookings?", a: "Yes — practices that offer grooming, boarding, or daycare can manage those bookings alongside medical appointments in the same system." },
      { q: "How are existing pet and owner records migrated?", a: "We help import your existing patient histories, owner contacts, and appointment records as part of onboarding." },
      { q: "How long before our practice can go live?", a: "Most practices are live within 4–6 weeks, including configuration, data migration, and staff training." },
    ],
  },
  cta: {
    eyebrow: "Ready when you are",
    heading: "Give every pet a connected record — and every owner a reason to return",
    body: "Book a walkthrough configured around your practice's services and patient flow — see exactly how VetCare would run your daily operations.",
    primaryCta: { label: "Book a free demo", href: "/contact" },
    secondaryCta: { label: "See all Ready Apps", href: "/products" },
    meta: ["Free 30-minute walkthrough", "Live in 4–6 weeks", "Automated vaccination reminders"],
  },
  related: [
    { label: "ClinicFlow", href: "/clinicflow", desc: "Clinic management system for doctors & multi-specialty practices." },
    { label: "GlowDesk", href: "/glowdesk", desc: "Software for aesthetic and cosmetic clinics." },
    { label: "PestTrack", href: "/pesttrack", desc: "CRM built for pest control service businesses." },
  ],
};
