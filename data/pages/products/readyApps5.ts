import type { ServicePageData } from "@/lib/types";

const crumbs = (name: string) => [
  { label: "Home", href: "/" },
  { label: "Our Products", href: "/products/" },
  { label: name },
];

// ───────────────────────────── Manchify ─────────────────────────────
export const manchify: ServicePageData = {
  meta: {
    title: "Manchify — Operations CRM & ERP for Event Management Companies",
    description:
      "Manchify is the all-in-one operations platform for Indian event companies — leads, quotes, vendors, manpower, rentals, and GST invoicing in one place. WhatsApp-native, no-code, mobile-first.",
  },
  hero: {
    eyebrow: "Manchify",
    heading: "Manchify — The Operations OS for Indian Event Companies",
    lead: "From the first enquiry to the final rupee — leads, quotes, events, vendors, manpower, rentals, and GST money in one place. Stop stitching together WhatsApp, Excel, and five apps.",
    breadcrumbs: crumbs("Manchify"),
    stats: [
      { value: "10", label: "Modules, one platform" },
      { value: "60s", label: "To a branded GST quote" },
      { value: "6", label: "Event business types" },
    ],
    marqueeItems: [
      "Leads & CRM",
      "GST Invoicing",
      "Vendor POs",
      "Manpower Attendance",
      "Rental Inventory",
      "Event Run-Sheets",
      "WhatsApp-Native",
      "Per-Event P&L",
      "Client Portal",
      "GSTR-Ready Exports",
    ],
    formVariant: "service",
    formTag: "Get a demo",
    formHeading: "See Manchify run your next event end-to-end",
    formSub: "We'll walk through a real event workflow — from lead to GST invoice — live on your screen.",
    formSubmitLabel: "Book my free demo",
    formNote: "No credit card. 14-day free trial included.",
  },
  services: {
    eyebrow: "What's Inside",
    heading: "10 modules that talk to each other — no re-entering data",
    body: "Every module in Manchify connects to the next — so a quote converts to an event, a vendor PO settles against the event budget, and your P&L is live before the invoice goes out.",
    variant: "svc",
    items: [
      { icon: "🎯", title: "Leads & CRM", desc: "Capture enquiries from web forms and WhatsApp, work a visual pipeline, and never drop a follow-up — all in one inbox." },
      { icon: "📄", title: "Quotes & GST Invoicing", desc: "Branded quotes with live margins, e-sign approval, and one-click conversion to GST-correct invoices with CGST/SGST/IGST split." },
      { icon: "📅", title: "Events & Run-Sheets", desc: "A dedicated workspace per event — timeline, tasks, team assignments, and documents — so nothing slips on the day." },
      { icon: "🤝", title: "Vendors & Purchase Orders", desc: "Issue POs, maintain a settlement ledger, and get automatic RCM flagging for unregistered vendors so you never lose ITC." },
      { icon: "👥", title: "Manpower & Attendance", desc: "Plan headcount, deploy staff, mark mobile attendance offline, and compute wages — no paper, no disputes." },
      { icon: "📦", title: "Rentals & Inventory", desc: "Availability-aware bookings, dispatch and return tracking, and damage recording — no double-booking ever again." },
      { icon: "💰", title: "Money, P&L & GST Centre", desc: "Per-event profit tracking, collection milestones, payment links, and a GST centre with GSTR-ready exports." },
      { icon: "📊", title: "Reports & Analytics", desc: "A live business dashboard showing revenue trends, pipeline health, and vendor spend — permission-scoped for your team." },
      { icon: "📱", title: "Client & Field Portals", desc: "A branded portal for clients to pay and approve; a mobile PWA for your ground teams working offline at the venue." },
    ],
  },
  capabilities: {
    eyebrow: "Built For",
    heading: "One platform, every type of event business",
    dark: true,
    items: [
      { icon: "💍", title: "Wedding planners & coordinators", desc: "Manage dozens of vendors per wedding, keep clients calm with a branded portal, and know your margin per event." },
      { icon: "🎪", title: "Full-service event agencies", desc: "Handle leads to logistics for corporate events, product launches, and large-scale productions in one connected workspace." },
      { icon: "🎨", title: "Décor & rental houses", desc: "Track rental inventory availability, dispatch, returns, and damage across concurrent events without spreadsheet chaos." },
      { icon: "🍽️", title: "Caterers & banquet halls", desc: "Manage catering BOQs, headcount deployment, and per-event food cost alongside your event billing — all in one place." },
    ],
  },
  process: {
    eyebrow: "How It Works",
    heading: "From first enquiry to paid invoice in three moves",
    dark: false,
    steps: [
      { title: "Capture & quote", desc: "Leads flow in from your site and WhatsApp. Build a branded GST-correct quote in under 60 seconds and send it for e-sign approval." },
      { title: "Plan & run", desc: "On approval, the quote becomes a live event workspace — vendors, manpower, rentals, run-sheet, and tasks connected in one view." },
      { title: "Bill & get paid", desc: "Generate a GST invoice, send a payment link, chase milestones automatically, and see your per-event P&L the moment costs land." },
    ],
    deliverables: [
      "Configured Manchify workspace for your business type",
      "Leads & CRM with WhatsApp integration",
      "GST invoicing with your tax profile",
      "Vendor, manpower & rental modules active",
      "Team onboarding & training",
      "14-day free trial on Growth plan",
    ],
  },
  why: {
    eyebrow: "Why Manchify",
    heading: "Because Excel quietly bleeds your event margin",
    dark: true,
    items: [
      { icon: "🇮🇳", title: "Built for India first", desc: "GST done right — CGST/SGST vs IGST, RCM for unregistered vendors, ITC tracking, and GSTR-ready exports. Not bolted on." },
      { icon: "💬", title: "WhatsApp-native, not an afterthought", desc: "Quotes, invoices, and payment reminders go out on WhatsApp — the channel your clients and vendors actually use." },
      { icon: "📲", title: "Mobile-first for on-ground teams", desc: "Your manpower marks attendance offline at the venue via a mobile PWA — no connectivity required, syncs when back online." },
      { icon: "🔧", title: "No-code, shaped to how you work", desc: "Toggle modules, add custom fields, design your pipeline, and set automations — without touching a line of code." },
    ],
  },
  testimonials: [
    {
      text: "We quote in 5 minutes now and never lose a vendor payment. Manchify made our 6-person studio look like an agency.",
      name: "Rahul Shah",
      role: "Mehta Events · Vadodara",
      initials: "RS",
    },
  ],
  faq: {
    eyebrow: "Questions",
    heading: "What event companies ask before switching to Manchify",
    items: [
      { q: "Can I run multiple event types — weddings, corporate, and rentals — in one account?", a: "Yes. Manchify supports six business presets and you can toggle the exact modules each team or event type needs. One platform, shaped to how you work." },
      { q: "Does it actually handle Indian GST correctly — RCM, ITC, CGST/SGST?", a: "Yes, and this is a core differentiator. Manchify handles CGST/SGST vs IGST routing automatically, flags unregistered vendor invoices for RCM, tracks ITC-at-risk amounts, and produces GSTR-ready export files." },
      { q: "What if my team has no tech experience?", a: "Manchify is no-code and mobile-first. Setup takes under 10 minutes. Your team marks attendance on their phone, your managers see P&L on a dashboard. No training week required." },
      { q: "How is it different from a spreadsheet or generic CRM?", a: "A generic CRM handles leads; Manchify handles leads, quotes, vendors, manpower, rentals, invoicing, and GST in one connected system. No data re-entry between stages. Per-event profit is live — not calculated by your CA three weeks later." },
      { q: "What does the free trial include?", a: "14 days of the Growth plan — 15 seats, vendors, manpower, rentals, WhatsApp sending, and full GST invoicing. No credit card required." },
    ],
  },
  cta: {
    eyebrow: "Ready when you are",
    heading: "Your next quote could be in Manchify today",
    body: "Set up in under 10 minutes. Pick your event business type, switch on the right modules, and send your first GST-correct quote within the hour.",
    primaryCta: { label: "Start free — 14-day trial", href: "https://manchify.vercel.app/signup" },
    secondaryCta: { label: "See all Our Products", href: "/products" },
    meta: ["No credit card to start", "GST-ready out of the box", "Live in under 10 minutes"],
  },
  related: [
    { label: "SolarFlow", href: "/solarflow", desc: "ERP + CRM built for solar installation companies." },
    { label: "ClinicFlow", href: "/clinicflow", desc: "Practice management system for clinics and hospitals." },
    { label: "ChatFlow AI", href: "/chatflow-ai", desc: "AI WhatsApp automation for business enquiries and bookings." },
  ],
};
