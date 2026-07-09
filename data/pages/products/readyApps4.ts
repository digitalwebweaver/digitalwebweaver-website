import type { ServicePageData } from "@/lib/types";

const crumbs = (name: string) => [
  { label: "Home", href: "/" },
  { label: "Our Products", href: "/products/" },
  { label: name },
];

// ───────────────────────────── ChatFlow AI ─────────────────────────────
export const chatflowAi: ServicePageData = {
  meta: {
    title: "ChatFlow AI – WhatsApp Business Automation Software",
    description:
      "ChatFlow AI is a ready-to-deploy WhatsApp automation agent that handles enquiries, bookings, and order updates on your business number. Get a free demo.",
  },
  hero: {
    eyebrow: "ChatFlow AI",
    heading: "ChatFlow AI WhatsApp Automation — Turn Your WhatsApp Into a 24/7 Sales and Support Team",
    lead: "ChatFlow AI answers enquiries, books appointments, sends order updates, and follows up with customers automatically — on your business WhatsApp number, in your brand's voice, around the clock.",
    breadcrumbs: crumbs("ChatFlow AI"),
    stats: [
      { value: "24/7", label: "Chat coverage" },
      { value: "2–3 wks", label: "To go live" },
      { value: "↓ response time", label: "From hours to seconds" },
    ],
    marqueeItems: ["Auto-Replies", "Lead Qualification", "Order & Booking Updates", "Catalogue & Payments", "Broadcast Campaigns", "Multi-language", "CRM Integration", "Chat Analytics"],
    formVariant: "service",
    formTag: "Get a demo",
    formHeading: "See ChatFlow AI handle a real conversation",
    formSub: "We'll set up a live chat demo using your business's products and FAQs.",
    formSubmitLabel: "Book my demo",
    formNote: "Try it on a real WhatsApp conversation flow.",
  },
  services: {
    eyebrow: "What's Inside",
    heading: "A WhatsApp agent that does more than auto-reply",
    body: "ChatFlow AI is built to carry real conversations — qualifying leads, completing bookings, and following up — not just bounce back canned responses.",
    variant: "svc",
    items: [
      { icon: "💬", title: "Instant, Natural Replies", desc: "Responds to enquiries immediately in natural language, trained on your products, services, and FAQs." },
      { icon: "🎯", title: "Lead Qualification & Routing", desc: "Asks the right questions to qualify leads and routes hot prospects to your sales team with full context." },
      { icon: "📦", title: "Order & Booking Updates", desc: "Sends automatic order confirmations, status updates, and appointment reminders without manual effort." },
      { icon: "🛍️", title: "Catalogue & In-Chat Payments", desc: "Shares product catalogues and accepts payments directly within the WhatsApp conversation." },
      { icon: "📣", title: "Broadcast & Re-engagement Campaigns", desc: "Send promotions, restock alerts, and win-back messages to segmented customer lists — compliantly." },
      { icon: "🔗", title: "CRM & Order System Integration", desc: "Syncs conversations and customer data with your CRM, order system, or booking platform in real time." },
    ],
  },
  capabilities: {
    eyebrow: "Built For",
    heading: "Wherever your customers already are — on WhatsApp",
    dark: true,
    items: [
      { icon: "🛒", title: "E-commerce & D2C brands", desc: "Handle order enquiries, abandoned cart follow-ups, and post-purchase support automatically." },
      { icon: "🍽️", title: "Restaurants & service businesses", desc: "Take orders, confirm bookings, and send updates without tying up a staff member's phone." },
      { icon: "🏢", title: "Real estate & high-ticket sales", desc: "Qualify enquiries instantly and hand off serious buyers to your sales team with full conversation context." },
      { icon: "🏥", title: "Clinics, salons & service providers", desc: "Automate appointment booking, reminders, and routine question handling around the clock." },
    ],
  },
  process: {
    eyebrow: "How It Works",
    heading: "From a flooded inbox to an automated front line in four steps",
    dark: false,
    steps: [
      { title: "Share your products, services & FAQs", desc: "We gather your catalogue, common questions, booking flows, and the tone you want the agent to use." },
      { title: "We train & configure ChatFlow AI", desc: "The agent is set up with your information, conversation flows, and connected to your WhatsApp Business number." },
      { title: "We connect it to your systems", desc: "Integration with your CRM, order system, or booking platform so conversations sync with real business data." },
      { title: "Go live & track performance", desc: "Launch with a chat analytics dashboard showing volumes, response times, and conversion from chat to sale." },
    ],
    deliverables: ["Trained WhatsApp AI agent", "Catalogue & payment setup", "CRM/order system integration", "Broadcast campaign templates", "Chat analytics dashboard", "30 days of post-launch support"],
  },
  why: {
    eyebrow: "Why ChatFlow AI",
    heading: "Because a slow WhatsApp reply is a lost sale to a faster competitor",
    dark: true,
    items: [
      { icon: "⚡", title: "Replies in seconds, not hours", desc: "Customers get an immediate, helpful response — even at midnight, even on a Sunday, even during your busiest hour." },
      { icon: "🗣️", title: "Sounds like your business, not a bot", desc: "Trained on your actual products, tone, and FAQs — conversations feel natural, not scripted." },
      { icon: "📈", title: "Built to convert, not just respond", desc: "Lead qualification, catalogue sharing, and in-chat payments turn conversations into completed sales." },
      { icon: "🔧", title: "Adaptable to your workflows", desc: "Since we built ChatFlow AI, we can extend its flows and integrations specifically for your business." },
    ],
  },
  testimonials: [
    {
      text: "We were missing orders simply because nobody could reply fast enough during peak hours. Now ChatFlow AI handles the first response, shares the catalogue, and even takes payment — our team only steps in for the conversations that really need a human.",
      name: "Simran Kaur",
      role: "Founder, Indigo & Ivy Home Decor",
      initials: "SK",
    },
  ],
  faq: {
    eyebrow: "Questions",
    heading: "What businesses ask before adopting ChatFlow AI",
    items: [
      { q: "Will it work on our existing WhatsApp Business number?", a: "Yes — ChatFlow AI connects to your existing WhatsApp Business number through the official WhatsApp Business API, so your number and chat history stay intact." },
      { q: "What happens with conversations it can't handle?", a: "Complex or sensitive conversations are handed off to your team with full context, so the customer never has to repeat themselves." },
      { q: "Can it actually take orders and payments, or just answer questions?", a: "It can share catalogues, take orders, and accept payments directly within the chat — not just answer FAQs." },
      { q: "Is it compliant with WhatsApp's messaging policies?", a: "Yes — broadcast and re-engagement messages follow WhatsApp Business API policies and opt-in requirements to keep your number in good standing." },
      { q: "How quickly can we have it running?", a: "Most businesses are live within 2–3 weeks, including training the agent on your catalogue and connecting it to your systems." },
    ],
  },
  cta: {
    eyebrow: "Ready when you are",
    heading: "See it handle a real customer conversation before you decide anything",
    body: "We'll set up a live chat demo using your products, services, and FAQs — so you can see exactly how it would talk to your customers.",
    primaryCta: { label: "Book a free demo", href: "/contact" },
    secondaryCta: { label: "See all Our Products", href: "/products" },
    meta: ["Free live chat demo", "Live in 2–3 weeks", "24/7 customer coverage"],
  },
  related: [
    { label: "CallMate AI", href: "/callmate-ai", desc: "AI voice agent for handling business calls automatically." },
    { label: "QuickBite", href: "/quickbite", desc: "Food delivery app suite for restaurants and cloud kitchens." },
    { label: "InsureDesk", href: "/insuredesk", desc: "CRM for insurance agencies and brokers." },
  ],
};

// ───────────────────────────── TeleCare ─────────────────────────────
export const telecare: ServicePageData = {
  meta: {
    title: "TeleCare – Telemedicine Platform Software for India",
    description:
      "TeleCare is a ready-to-launch telemedicine platform with video consultations, e-prescriptions, patient records, and appointment scheduling in one branded system.",
  },
  hero: {
    eyebrow: "TeleCare",
    heading: "TeleCare Telemedicine Platform — Bring Your Clinic Online Without Losing the Personal Touch",
    lead: "TeleCare brings video consultations, e-prescriptions, patient records, appointment scheduling, and payments into one branded telemedicine platform — so you can see patients beyond your waiting room, on your own terms.",
    breadcrumbs: crumbs("TeleCare"),
    stats: [
      { value: "5–7 wks", label: "To go live" },
      { value: "100%", label: "Branded platform" },
      { value: "1", label: "Record across in-person & virtual" },
    ],
    marqueeItems: ["Video Consultations", "E-Prescriptions", "Patient Records", "Appointment Scheduling", "Payments & Billing", "Patient App", "Multi-Doctor Support", "Follow-up Reminders"],
    formVariant: "service",
    formTag: "Get a demo",
    formHeading: "See TeleCare run a virtual consultation end-to-end",
    formSub: "We'll walk a video consultation from booking to e-prescription through the system live.",
    formSubmitLabel: "Book my demo",
    formNote: "Configured around your specialities and consultation flow.",
  },
  services: {
    eyebrow: "What's Inside",
    heading: "Virtual care that feels as complete as an in-person visit",
    body: "TeleCare connects every part of a virtual consultation — booking, video, prescription, records, and payment — so nothing feels like an afterthought.",
    variant: "svc",
    items: [
      { icon: "🎥", title: "Secure Video Consultations", desc: "High-quality, secure video calls between doctors and patients, with waiting room and queue management." },
      { icon: "💊", title: "E-Prescriptions", desc: "Generate and share digital prescriptions instantly after a consultation, sent directly to the patient's app." },
      { icon: "🩺", title: "Shared Patient Records", desc: "Virtual and in-person visit records live in the same patient history — no information gaps between modes of care." },
      { icon: "📅", title: "Appointment Scheduling", desc: "Patients book virtual or in-person consultations online with doctor-wise availability and reminders." },
      { icon: "💳", title: "Payments & Billing", desc: "Collect consultation fees online before or after the call, with automatic invoicing and payment tracking." },
      { icon: "📱", title: "Branded Patient App", desc: "Patients book, join consultations, view prescriptions and records, and get reminders — all from your branded app." },
    ],
  },
  capabilities: {
    eyebrow: "Built For",
    heading: "Whoever you care for, wherever they are",
    dark: true,
    items: [
      { icon: "🏥", title: "Multi-specialty clinics & hospitals", desc: "Offer virtual consultations across departments alongside your existing in-person services." },
      { icon: "👨‍⚕️", title: "Independent practitioners", desc: "Extend your practice beyond your clinic's four walls without hiring additional staff." },
      { icon: "🌍", title: "Practices serving remote or NRI patients", desc: "Reach patients who can't visit in person — including those across cities or countries." },
      { icon: "💼", title: "Corporate & insurance health programs", desc: "Offer virtual consultations as part of employee wellness or insurance-linked health benefits." },
    ],
  },
  process: {
    eyebrow: "How It Works",
    heading: "From in-person only to hybrid care in four steps",
    dark: false,
    steps: [
      { title: "Walk us through your consultation flow", desc: "We learn your specialities, doctor schedules, prescription formats, and how virtual visits would fit your practice." },
      { title: "We brand & configure TeleCare", desc: "Your departments, doctors, consultation types, and branding are set up so it feels like an extension of your clinic." },
      { title: "Migrate patient records", desc: "Existing patient histories and appointment data are imported so virtual visits connect to real patient context." },
      { title: "Train your team & launch", desc: "Hands-on training for doctors and front-desk staff, then go live with dedicated support through your first weeks." },
    ],
    deliverables: ["Doctor & admin video consultation dashboard", "Branded patient mobile app", "E-prescription templates", "Payment gateway integration", "Staff onboarding & training", "30 days of post-launch support"],
  },
  why: {
    eyebrow: "Why TeleCare",
    heading: "Because patients now expect care to meet them where they are",
    dark: true,
    items: [
      { icon: "🔗", title: "One record, in-person and virtual", desc: "Every consultation — in your clinic or on video — adds to the same patient history, so care stays consistent." },
      { icon: "🎨", title: "Looks like your clinic, not a marketplace", desc: "Branded video rooms, prescriptions, and patient app carry your identity — not a third-party telehealth platform's." },
      { icon: "🌍", title: "Extends your reach without extra overhead", desc: "See patients beyond your local area without expanding your physical space or front-desk team." },
      { icon: "🔒", title: "Built with healthcare data in mind", desc: "Secure video and access-controlled records appropriate for handling sensitive patient information." },
    ],
  },
  testimonials: [
    {
      text: "We were sceptical that virtual visits could feel as complete as in-person ones. With shared records and instant e-prescriptions, our regular patients now book whichever mode suits them — and we haven't lost the continuity of care at all.",
      name: "Dr. Vikram Nair",
      role: "Consultant Physician, Nair Speciality Clinic",
      initials: "VN",
    },
  ],
  faq: {
    eyebrow: "Questions",
    heading: "What clinics ask before adopting TeleCare",
    items: [
      { q: "Do virtual and in-person visits share the same patient record?", a: "Yes — every consultation, virtual or in-person, is recorded in the same patient history, so doctors always have the full picture." },
      { q: "Can patients receive prescriptions immediately after a video call?", a: "Yes — e-prescriptions are generated and sent to the patient's app right after the consultation ends." },
      { q: "Is the video consultation platform secure?", a: "Yes — consultations run on secure, access-controlled video infrastructure designed with patient privacy in mind." },
      { q: "Can it support multiple doctors and specialities?", a: "Yes — TeleCare supports multi-doctor, multi-department setups with individual scheduling and consultation types." },
      { q: "How long does it take to launch telemedicine alongside our existing practice?", a: "Most clinics are live within 5–7 weeks, including configuration, data migration, and staff training." },
    ],
  },
  cta: {
    eyebrow: "Ready when you are",
    heading: "See a virtual consultation run end-to-end — booking to e-prescription",
    body: "Book a walkthrough configured around your specialities and consultation style — see exactly how TeleCare would extend your practice.",
    primaryCta: { label: "Book a free demo", href: "/contact" },
    secondaryCta: { label: "See all Our Products", href: "/products" },
    meta: ["Free 30-minute walkthrough", "Live in 5–7 weeks", "One record, virtual & in-person"],
  },
  related: [
    { label: "ClinicFlow", href: "/clinicflow", desc: "Clinic management system for doctors & multi-specialty practices." },
    { label: "ClinicVoice AI", href: "/clinicvoice-ai", desc: "AI voice agent that handles patient calls automatically." },
    { label: "InsureDesk", href: "/insuredesk", desc: "CRM for insurance agencies and brokers." },
  ],
};

// ───────────────────────────── InsureDesk ─────────────────────────────
export const insuredesk: ServicePageData = {
  meta: {
    title: "InsureDesk – Insurance Agency CRM Software for India",
    description:
      "InsureDesk is a ready-to-launch CRM for insurance agencies with policy tracking, renewal reminders, and claims follow-up in one platform. Get a free demo.",
  },
  hero: {
    eyebrow: "InsureDesk",
    heading: "InsureDesk Insurance CRM — Stop Losing Renewals to a Missed Reminder",
    lead: "InsureDesk brings lead management, policy tracking, renewal reminders, claims follow-up, and client communication into one connected CRM — so every policy, every renewal, and every client conversation has somewhere to live.",
    breadcrumbs: crumbs("InsureDesk"),
    stats: [
      { value: "4–6 wks", label: "To go live" },
      { value: "↓ lapsed policies", label: "With auto-reminders" },
      { value: "1", label: "View per client" },
    ],
    marqueeItems: ["Lead Management", "Policy Tracking", "Renewal Reminders", "Claims Follow-up", "Commission Tracking", "Client Portal", "Document Vault", "Reports & Analytics"],
    formVariant: "service",
    formTag: "Get a demo",
    formHeading: "See InsureDesk track a policy end-to-end",
    formSub: "We'll walk a policy from lead to renewal reminder through the system, configured for your agency.",
    formSubmitLabel: "Book my demo",
    formNote: "Configured around your product lines and team.",
  },
  services: {
    eyebrow: "What's Inside",
    heading: "Every policy, every renewal, every conversation — tracked",
    body: "Insurance is a relationship business that runs on timely follow-through. InsureDesk is built to make sure nothing — and no one — gets forgotten.",
    variant: "svc",
    items: [
      { icon: "🎯", title: "Lead Management", desc: "Capture, qualify, and assign leads from multiple sources, with follow-up tracking through to conversion." },
      { icon: "📑", title: "Policy Tracking", desc: "Maintain a complete record of every client's policies — type, premium, term, and status — in one place." },
      { icon: "🔔", title: "Automated Renewal Reminders", desc: "SMS/WhatsApp/email reminders go out automatically ahead of renewal dates, to clients and agents alike." },
      { icon: "📋", title: "Claims Follow-up", desc: "Track claim status from filing to settlement, with reminders so nothing stalls in someone's inbox." },
      { icon: "💰", title: "Commission Tracking", desc: "Track commissions earned per policy and agent, with clear reporting for payouts and performance reviews." },
      { icon: "🌐", title: "Client Portal & Document Vault", desc: "Give clients a branded portal to view policies, download documents, and track claims themselves." },
    ],
  },
  capabilities: {
    eyebrow: "Built For",
    heading: "Whatever kind of insurance business you run",
    dark: true,
    items: [
      { icon: "🏢", title: "Independent agencies & brokerages", desc: "Manage multiple product lines, carriers, and client portfolios from one connected system." },
      { icon: "👤", title: "Individual agents (POSP/IRDAI)", desc: "Run your entire book of business — leads, policies, renewals — without hiring extra support staff." },
      { icon: "🚗", title: "Motor & general insurance specialists", desc: "Handle high renewal volumes with templated reminders and streamlined documentation." },
      { icon: "🏥", title: "Health & life insurance teams", desc: "Track longer policy cycles, nominee details, and claims with structured, audit-ready records." },
    ],
  },
  process: {
    eyebrow: "How It Works",
    heading: "From scattered spreadsheets to a connected book of business in four steps",
    dark: false,
    steps: [
      { title: "Map your current process", desc: "We learn your product lines, lead sources, renewal cycles, and how your team currently tracks clients and policies." },
      { title: "We configure InsureDesk for your agency", desc: "Your product types, reminder schedules, commission rules, and branding are set up to match your operation." },
      { title: "Migrate your client & policy data", desc: "Existing client records, active policies, and renewal dates are imported so you start with real, working data." },
      { title: "Train your team & go live", desc: "Hands-on training for agents and support staff, then launch with dedicated support during your first month." },
    ],
    deliverables: ["Agency & agent CRM dashboard", "Branded client portal", "Renewal reminder templates", "Commission reporting setup", "Team training sessions", "30 days of go-live support"],
  },
  why: {
    eyebrow: "Why InsureDesk",
    heading: "Because a lapsed policy is a relationship a competitor will pick up",
    dark: true,
    items: [
      { icon: "🔔", title: "Renewals that don't depend on memory", desc: "Automated reminders run on schedule — no more relying on someone remembering to follow up before a policy lapses." },
      { icon: "📇", title: "One view of every client", desc: "All policies, conversations, and claims for a client live in one record — no digging through old emails or notebooks." },
      { icon: "💰", title: "Commission clarity, built in", desc: "See exactly what's owed, to whom, and for which policy — without a separate spreadsheet to reconcile." },
      { icon: "🔧", title: "Adaptable to your product mix", desc: "Since we built InsureDesk, we can extend it with workflows specific to the product lines you sell." },
    ],
  },
  testimonials: [
    {
      text: "We were tracking renewals across three different spreadsheets and a notebook. Since switching, our lapse rate has dropped noticeably — the system reminds clients and agents well before a policy is due, not after it's already lapsed.",
      name: "Pranav Thakkar",
      role: "Principal Officer, Thakkar Insurance Brokers",
      initials: "PT",
    },
  ],
  faq: {
    eyebrow: "Questions",
    heading: "What agency owners ask before switching to InsureDesk",
    items: [
      { q: "Can it handle multiple product lines — motor, health, life — together?", a: "Yes — InsureDesk supports configurable policy types so different product lines can be tracked with the fields and timelines relevant to each." },
      { q: "How do renewal reminders actually work?", a: "Once a policy is logged, reminders are automatically scheduled and sent via SMS/WhatsApp/email to clients and agents ahead of the renewal date." },
      { q: "Can multiple agents work from the same system?", a: "Yes — agencies can manage multiple agents with individual portfolios, lead assignments, and commission tracking under one account." },
      { q: "How are our existing client and policy records migrated?", a: "We help import your existing client records, active policies, and renewal dates as part of onboarding." },
      { q: "How long before our team is fully up and running?", a: "Most agencies are live within 4–6 weeks, including configuration, data migration, and team training." },
    ],
  },
  cta: {
    eyebrow: "Ready when you are",
    heading: "InsureDesk Insurance CRM — Stop Losing Renewals to a Missed Reminder",
    body: "We'll walk through a real policy lifecycle — from lead to renewal — in InsureDesk, configured around your agency's product lines and team.",
    primaryCta: { label: "Book a free demo", href: "/contact" },
    secondaryCta: { label: "See all Our Products", href: "/products" },
    meta: ["Free workflow walkthrough", "Live in 4–6 weeks", "Automated renewal reminders"],
  },
  related: [
    { label: "ChemSupply", href: "/chemsupply", desc: "ERP for chemical suppliers and distributors." },
    { label: "TeleCare", href: "/telecare", desc: "Telemedicine platform for clinics and hospitals." },
    { label: "CallMate AI", href: "/callmate-ai", desc: "AI voice agent for handling client calls automatically." },
  ],
};

// ───────────────────────────── CallMate AI ─────────────────────────────
export const callmateAi: ServicePageData = {
  meta: {
    title: "CallMate AI – 24/7 AI Calling Agent for Businesses",
    description:
      "CallMate AI is a ready-to-deploy AI voice agent for businesses that answers calls, books appointments, and qualifies leads automatically, 24/7. Get a free demo.",
  },
  hero: {
    eyebrow: "CallMate AI",
    heading: "CallMate AI Voice Calling Agent — Give Your Business a Phone Team That Never Clocks Off",
    lead: "CallMate AI answers inbound calls, qualifies leads, books appointments, and makes follow-up and reminder calls automatically — in a natural voice, in your brand's tone, around the clock — so no enquiry waits for someone to be free.",
    breadcrumbs: crumbs("CallMate AI"),
    stats: [
      { value: "24/7", label: "Call coverage" },
      { value: "3–4 wks", label: "To go live" },
      { value: "↓ missed enquiries", label: "Captured automatically" },
    ],
    marqueeItems: ["Inbound Call Handling", "Lead Qualification", "Appointment Booking", "Follow-up Calls", "Reminder Calls", "Multi-language", "CRM Integration", "Call Analytics"],
    formVariant: "service",
    formTag: "Get a demo",
    formHeading: "Hear CallMate AI handle a real call",
    formSub: "We'll set up a live call demo using your business's information and common questions.",
    formSubmitLabel: "Book my demo",
    formNote: "Hear it answer in your business's voice and tone.",
  },
  services: {
    eyebrow: "What's Inside",
    heading: "A voice agent built to carry real business conversations",
    body: "CallMate AI isn't an IVR maze of button-presses — it's trained to have natural conversations that actually move your business forward.",
    variant: "svc",
    items: [
      { icon: "📞", title: "Inbound Call Handling", desc: "Answers every incoming call instantly, any time of day, in a natural voice trained on your business information." },
      { icon: "🎯", title: "Lead Qualification & Routing", desc: "Asks the right questions to qualify callers and routes serious prospects to your team with full call context." },
      { icon: "📅", title: "Appointment Booking", desc: "Books and confirms appointments directly into your calendar without any manual coordination." },
      { icon: "🔁", title: "Outbound Follow-up Calls", desc: "Places follow-up calls to leads and customers — checking in, confirming details, or re-engaging cold enquiries." },
      { icon: "🔔", title: "Reminder Calls", desc: "Automated reminder calls for appointments, payments, or renewals — reducing no-shows and missed deadlines." },
      { icon: "🔗", title: "CRM & Calendar Integration", desc: "Syncs call outcomes, bookings, and lead data directly with your CRM or scheduling system in real time." },
    ],
  },
  capabilities: {
    eyebrow: "Built For",
    heading: "Wherever the phone is your front line",
    dark: true,
    items: [
      { icon: "🏢", title: "Service businesses & agencies", desc: "Capture every enquiry instantly — even outside business hours — and route hot leads straight to your team." },
      { icon: "🏥", title: "Clinics, salons & appointment-based businesses", desc: "Automate booking and reminder calls so your front desk can focus on people in front of them." },
      { icon: "🏠", title: "Real estate & high-value sales", desc: "Qualify enquiries instantly and ensure no serious buyer waits on hold or gets a callback the next day." },
      { icon: "🚖", title: "Delivery, logistics & field-service operators", desc: "Handle booking and status-update calls at scale without growing your call-centre headcount." },
    ],
  },
  process: {
    eyebrow: "How It Works",
    heading: "From missed calls to full coverage in four steps",
    dark: false,
    steps: [
      { title: "Share your business information & call scripts", desc: "We gather your services, FAQs, booking flows, and the tone you want the agent to use on calls." },
      { title: "We train & voice the agent for your business", desc: "CallMate AI is configured with your information and a natural voice that matches your brand's personality." },
      { title: "We connect it to your calendar & CRM", desc: "Integration with your scheduling and customer systems so call outcomes and bookings sync automatically." },
      { title: "Go live & monitor performance", desc: "Launch with a call analytics dashboard showing volumes, booking conversion, and common enquiry types." },
    ],
    deliverables: ["Trained AI voice agent", "Calendar & CRM integration", "Custom script & FAQ setup", "Call analytics dashboard", "Team onboarding session", "30 days of post-launch support"],
  },
  why: {
    eyebrow: "Why CallMate AI",
    heading: "Because every unanswered call is an enquiry your competitor picks up",
    dark: true,
    items: [
      { icon: "⏰", title: "Always available, never on hold", desc: "Callers get a helpful answer at any hour — no voicemail, no \"please call back during business hours.\"" },
      { icon: "🗣️", title: "Sounds like your business, not a machine", desc: "Trained on your information and tone, so conversations feel natural rather than scripted or robotic." },
      { icon: "📈", title: "Built to qualify and convert", desc: "Goes beyond answering — qualifies leads, books appointments, and routes serious prospects to your team." },
      { icon: "📊", title: "Gives you visibility you didn't have before", desc: "See call volumes, booking rates, and common questions — insight that's hard to gather from human-only call handling." },
    ],
  },
  testimonials: [
    {
      text: "Half our enquiries used to come in after hours and just sat in voicemail until the next morning — by which time many callers had already gone elsewhere. Now CallMate AI picks up every time, qualifies them, and our sales team wakes up to a list of warm leads instead of missed calls.",
      name: "Aakash Mehta",
      role: "Director, Mehta Properties & Realty",
      initials: "AM",
    },
  ],
  faq: {
    eyebrow: "Questions",
    heading: "What businesses ask before adopting CallMate AI",
    items: [
      { q: "Will callers know they're speaking to an AI?", a: "The agent is trained to sound natural and conversational using your business's tone and information — most callers experience it as a smooth, helpful conversation." },
      { q: "What happens with calls it can't fully handle?", a: "Complex or sensitive calls are transferred to your team with full context, so the caller never has to repeat themselves from scratch." },
      { q: "Can it make outbound calls too, or only answer inbound?", a: "Both — it can handle inbound enquiries and place outbound follow-up, reminder, or re-engagement calls." },
      { q: "Does it work in the languages our customers use?", a: "Yes — the agent can be configured for multiple languages based on your customer base." },
      { q: "How long before it's live and answering our calls?", a: "Most businesses are live within 3–4 weeks, including training the agent on your information and connecting it to your systems." },
    ],
  },
  cta: {
    eyebrow: "Ready when you are",
    heading: "Hear it handle a real business call before you decide anything",
    body: "We'll set up a live demo call using your business's actual information and FAQs — so you can hear exactly how it would sound to your customers.",
    primaryCta: { label: "Book a free demo", href: "/contact" },
    secondaryCta: { label: "See all Our Products", href: "/products" },
    meta: ["Free live call demo", "Live in 3–4 weeks", "24/7 call coverage"],
  },
  related: [
    { label: "ChatFlow AI", href: "/chatflow-ai", desc: "WhatsApp automation for support and sales." },
    { label: "ClinicVoice AI", href: "/clinicvoice-ai", desc: "AI voice agent that handles patient calls automatically." },
    { label: "RideEasy", href: "/rideeasy", desc: "Cab booking system with live tracking and driver apps." },
  ],
};
