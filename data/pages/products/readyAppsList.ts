export type ReadyAppListing = {
  href: string;
  icon: string;
  category: string;
  name: string;
  desc: string;
  stack: string[];
};

export const readyApps: ReadyAppListing[] = [
  {
    href: "/educore",
    icon: "🎓",
    category: "EdTech",
    name: "EduCore",
    desc: "Ready-to-launch Learning Management System for institutes — courses, live classes, quizzes, certificates, and fee collection in one platform.",
    stack: ["Next.js", "PostgreSQL", "AWS"],
  },
  {
    href: "/solarops",
    icon: "☀️",
    category: "ERP",
    name: "SolarOps",
    desc: "Ready-to-deploy ERP for solar installers — site surveys, quotations, project tracking, inventory, subsidy paperwork, and AMC scheduling.",
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    href: "/glowdesk",
    icon: "✨",
    category: "Clinic Software",
    name: "GlowDesk",
    desc: "Ready-to-launch software for aesthetic and cosmetic clinics — bookings, treatment plans, before/after galleries, billing, and follow-ups.",
    stack: ["React", "Node.js", "MongoDB"],
  },
  {
    href: "/quickbite",
    icon: "🍔",
    category: "Food & F&B",
    name: "QuickBite",
    desc: "Ready-to-launch food delivery app suite — customer ordering app, restaurant dashboard, and delivery partner app with real-time tracking.",
    stack: ["React Native", "Node.js", "Firebase"],
  },
  {
    href: "/rideeasy",
    icon: "🚕",
    category: "Mobility",
    name: "RideEasy",
    desc: "Ready-to-launch cab booking platform — rider app, driver app, and dispatch dashboard with live tracking, fare estimation, and payments.",
    stack: ["React Native", "Node.js", "Google Maps"],
  },
  {
    href: "/schoolhub",
    icon: "🏫",
    category: "EdTech",
    name: "SchoolHub",
    desc: "Ready-to-deploy school management system — admissions, attendance, timetables, fee collection, exams, and parent communication.",
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    href: "/clinicflow",
    icon: "🩺",
    category: "Clinic Software",
    name: "ClinicFlow",
    desc: "Ready-to-launch clinic management system — appointment scheduling, EMR, billing, pharmacy, and patient communication, all branded as yours.",
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    href: "/vetcare",
    icon: "🐾",
    category: "Clinic Software",
    name: "VetCare",
    desc: "Ready-to-launch veterinary practice management system — appointments, patient records, vaccination reminders, billing, and communication.",
    stack: ["React", "Node.js", "MongoDB"],
  },
  {
    href: "/salonbook",
    icon: "💇",
    category: "Booking",
    name: "SalonBook",
    desc: "Ready-to-launch salon management system — online booking, staff scheduling, billing, packages, and client follow-ups.",
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    href: "/pesttrack",
    icon: "🐜",
    category: "Field Service CRM",
    name: "PestTrack",
    desc: "Ready-to-launch CRM for pest control companies — job scheduling, technician routing, service history, contracts, and reminders.",
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    href: "/chemsupply",
    icon: "🧪",
    category: "ERP",
    name: "ChemSupply",
    desc: "Ready-to-deploy ERP for chemical suppliers — inventory with batch/expiry tracking, compliance documentation, orders, and distributor portals.",
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    href: "/clinicvoice-ai",
    icon: "📞",
    category: "AI Voice Agent",
    name: "ClinicVoice AI",
    desc: "Ready-to-deploy AI voice calling agent for clinics — handles appointment booking, reminders, FAQs, and follow-up calls in your clinic's voice.",
    stack: ["AI / LLM", "Node.js", "Twilio"],
  },
  {
    href: "/chatflow-ai",
    icon: "💬",
    category: "AI Automation",
    name: "ChatFlow AI",
    desc: "Ready-to-deploy WhatsApp automation agent — handles enquiries, bookings, order updates, and follow-ups on your business WhatsApp number.",
    stack: ["AI / LLM", "Node.js", "WhatsApp API"],
  },
  {
    href: "/telecare",
    icon: "🩻",
    category: "Telemedicine",
    name: "TeleCare",
    desc: "Ready-to-launch telemedicine platform — video consultations, e-prescriptions, patient records, appointment scheduling, and payments.",
    stack: ["React", "Node.js", "WebRTC"],
  },
  {
    href: "/insuredesk",
    icon: "🛡️",
    category: "CRM",
    name: "InsureDesk",
    desc: "Ready-to-launch CRM for insurance agencies — lead management, policy tracking, renewal reminders, claims follow-up, and communication.",
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    href: "/callmate-ai",
    icon: "📲",
    category: "AI Voice Agent",
    name: "CallMate AI",
    desc: "Ready-to-deploy AI voice agent for businesses — handles inbound enquiries, books appointments, makes follow-up calls, and qualifies leads.",
    stack: ["AI / LLM", "Node.js", "Twilio"],
  },
];
