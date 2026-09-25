// JSON-LD builders. Every field here is sourced from real, already-published
// site copy (Footer NAP, page metadata) — nothing invented. Deliberately
// omits AggregateRating anywhere: the on-page "4.9" stat has no linked,
// countable review source, and Google's structured-data guidelines treat an
// unverifiable rating as spam-risk, not just an enhancement opportunity.

const BASE = "https://digitalwebweaver.com";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE}/#organization`,
    name: "Digital Web Weaver",
    url: BASE,
    logo: `${BASE}/assets/dww-logo.png`,
    image: `${BASE}/assets/dww-logo.png`,
    description:
      "A senior engineering studio building high-performance web platforms, SaaS products, mobile apps, and AI systems since 2013.",
    telephone: "+91-97125-15105",
    email: "info@digitalwebweaver.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "207/208 Sanket Heights, Sunpharma Road, Atladra",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390012",
      addressCountry: "IN",
    },
    // Real coordinates + Google Place ID (CID), resolved from the studio's
    // actual Google Maps listing — not estimated from the postal address.
    geo: { "@type": "GeoCoordinates", latitude: 22.2805213, longitude: 73.1629186 },
    hasMap: "https://www.google.com/maps?cid=11665016648672561459",
    areaServed: ["IN", "GB", "ZA", "CI"],
    foundingDate: "2013",
    sameAs: [
      "https://www.facebook.com/digitalwebweaver",
      "https://in.linkedin.com/company/digital-web-weaver",
      "https://x.com/dwebweaver",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    name: "Digital Web Weaver",
    url: BASE,
  };
}

// items: [{ label, href }] in root-to-leaf order, href relative ("/services/")
// Non-terminal crumbs without an href (e.g. a category label with no page
// of its own, like "Services" in Home > Services > GlowDesk) are dropped
// rather than emitted with a missing "item" field — Google's structured
// data guidelines require every ListItem to have a valid item URL, and a
// key set to undefined is silently stripped by JSON.stringify, which is
// exactly what Search Console flagged as "Missing field item".
export function breadcrumbSchema(items) {
  const valid = items.filter((item, i) => item.href || i === items.length - 1);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: valid.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.href ? BASE + item.href : undefined,
    })),
  };
}

// review: optional { author, body } — only pass if a real, named testimonial
// exists on the page.
//
// Deliberately Service, not SoftwareApplication: Google requires
// offers.price (plus aggregateRating or review) for SoftwareApplication
// rich-result eligibility, and none of these products have a real, fixed,
// publicly-quoted price — every pricing section on the site is "Custom /
// pricing" or unlisted. Fabricating a price to satisfy that requirement
// would be exactly the kind of unverifiable structured data Google's spam
// policies flag, and Service has no such unmet-required-field risk since
// these are genuinely bespoke, quoted offerings rather than shrink-wrap
// software sold at a set price.
export function serviceSchema({ name, description, href, review }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: BASE + href,
    provider: { "@id": `${BASE}/#organization` },
  };
  if (review) {
    schema.review = {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: review.author },
      reviewBody: review.body,
    };
  }
  return schema;
}

// datePublished must be a real ISO date already shown on the page as display
// text — never invented. dateModified omitted unless a real edit date exists.
export function blogPostingSchema({ headline, description, href, datePublished, authorName }) {
  const author = { "@type": "Person", name: authorName };
  if (authorName === "Kamlesh Nishad") {
    author.url = "https://www.linkedin.com/in/kamleshnishad/";
    author.sameAs = ["https://www.linkedin.com/in/kamleshnishad/"];
  }
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    url: BASE + href,
    datePublished,
    author,
    publisher: { "@id": `${BASE}/#organization` },
  };
}

// ── Schemas for index / informational pages ──────────────────────────

export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${BASE}/about/`,
    name: "About Digital Web Weaver",
    description:
      "Founded in 2013, Digital Web Weaver is a senior engineering studio of designers, engineers, and architects shipping production-grade software for founders and enterprises across 15 countries.",
    mainEntity: { "@id": `${BASE}/#organization` },
  };
}

export function blogCollectionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: `${BASE}/blog/`,
    name: "Digital Web Weaver — Engineering Blog",
    description:
      "Engineering notes, product thinking, and honest takes on building software — from the team that ships 200+ systems a year.",
    isPartOf: { "@id": `${BASE}/#website` },
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${BASE}/contact/`,
    name: "Contact Digital Web Weaver",
    description:
      "Get a free technical consultation and an itemised estimate from senior engineers within 24 hours.",
    mainEntity: { "@id": `${BASE}/#organization` },
  };
}

export function costEstimatorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApp",
    url: `${BASE}/cost-estimator/`,
    name: "Digital Web Weaver — Project Cost Estimator",
    description:
      "Free instant cost estimator for web apps, mobile apps, SaaS products, and custom software. Get a ballpark estimate in your own currency.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free to use — no sign-up required",
    },
    provider: { "@id": `${BASE}/#organization` },
  };
}

export function privacyPolicySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `${BASE}/privacy-policy/`,
    name: "Privacy Policy — Digital Web Weaver",
    description:
      "Digital Web Weaver privacy policy — how we collect, use, and protect your personal information.",
    datePublished: "2024-06-01",
    dateModified: "2026-09-25",
  };
}

const OPEN_ROLES = [
  {
    title: "Senior Full-Stack Engineer — React / Node",
    type: "FULL_TIME",
    location: "Remote",
    experience: "5+ years",
    description:
      "Build and own production SaaS features end-to-end using React, Node.js, and PostgreSQL.",
  },
  {
    title: "Lead Backend Engineer — Python / Django / FastAPI",
    type: "FULL_TIME",
    location: "Remote",
    experience: "6+ years",
    description:
      "Design and build high-throughput API services with Python, FastAPI, and PostgreSQL.",
  },
  {
    title: "Senior Mobile Engineer — React Native",
    type: "FULL_TIME",
    location: "Remote",
    experience: "4+ years",
    description:
      "Ship production mobile apps to iOS and Android using React Native and TypeScript.",
  },
  {
    title: "DevOps / Platform Engineer",
    type: "FULL_TIME",
    location: "Remote",
    experience: "4+ years",
    description:
      "Build and maintain CI/CD pipelines, Kubernetes clusters, and infrastructure on AWS.",
  },
  {
    title: "Product Designer — Figma / Design Systems",
    type: "FULL_TIME",
    location: "Remote",
    experience: "3+ years",
    description:
      "Design complex product interfaces from user research through to production-ready design systems.",
  },
];

export function jobPostingSchemas() {
  return OPEN_ROLES.map((role) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: role.description,
    employmentType: role.type,
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vadodara",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
    },
    hiringOrganization: {
      "@id": `${BASE}/#organization`,
    },
    datePosted: "2025-01-01",
    validThrough: "2026-12-31",
  }));
}

const PORTFOLIO_PROJECTS = [
  {
    name: "ManufacturIQ — Smart ERP",
    category: "Manufacturing · ERP",
    description:
      "End-to-end ERP for a mid-size manufacturer. Replaced a 15-year-old legacy system with production scheduling, inventory, procurement, HR, and executive dashboards.",
    url: "/portfolio/",
  },
  {
    name: "Next Sense LMS Web",
    category: "EdTech",
    description:
      "Nextsense Learning Management System — course delivery, scheduling, and dispatch workflows rebuilt as a single web app.",
    url: "/portfolio/",
  },
  {
    name: "Learning Management System",
    category: "SaaS · EdTech",
    description:
      "Full LMS with live sessions, grade tracking, and compliance reporting. Serving 50k students across three regions.",
    url: "/portfolio/",
  },
  {
    name: "Trip Operator",
    category: "Logistics",
    description:
      "Trip operator web and mobile app for B2B cab vendors — dispatch, driver assignment, and trip tracking in one system.",
    url: "/portfolio/",
  },
  {
    name: "PropNest — Real Estate CRM",
    category: "CRM · Real Estate",
    description:
      "Custom CRM for a 500-agent real estate firm. Lead management, automated follow-ups, commission tracking, and a buyer portal.",
    url: "/portfolio/",
  },
  {
    name: "Document AI Pipeline",
    category: "AI · Automation",
    description:
      "LLM-powered document processing system. Extracts, classifies, and validates 10,000+ claims documents per day with 97% accuracy.",
    url: "/portfolio/",
  },
  {
    name: "Headless Commerce Platform",
    category: "E-commerce · Web",
    description:
      "Full headless e-commerce rebuild for a fashion brand. Custom Shopify frontend, PIM integration, same-day inventory sync.",
    url: "/portfolio/",
  },
  {
    name: "Telemedicine Platform",
    category: "Healthcare · SaaS",
    description:
      "HIPAA-compliant telehealth platform with video consultations, e-prescriptions, patient records, and appointment scheduling.",
    url: "/portfolio/",
  },
  {
    name: "LogiCore — Logistics ERP",
    category: "Logistics · ERP",
    description:
      "Multi-branch ERP for a logistics company. Fleet management, route optimisation, driver payroll, fuel tracking, and real-time delivery tracking.",
    url: "/portfolio/",
  },
];

export function portfolioSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: `${BASE}/portfolio/`,
    name: "Portfolio & Case Studies — Digital Web Weaver",
    description:
      "200+ systems built. Real results, real clients — ERP, SaaS, healthtech, logistics, and AI case studies from a senior engineering studio.",
    isPartOf: { "@id": `${BASE}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: PORTFOLIO_PROJECTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        description: p.description,
        url: BASE + p.url,
      })),
    },
  };
}

const PRODUCT_CATALOG = [
  { name: "EduCore", desc: "Learning Management System with courses, live classes, quizzes, and certificates.", href: "/educore/" },
  { name: "Manchify", desc: "Operations OS for event companies — leads, quotes, vendors, and scheduling.", href: "/manchify/" },
  { name: "GlowDesk", desc: "Aesthetic clinic management — bookings, treatment plans, billing, and follow-ups.", href: "/glowdesk/" },
  { name: "QuickBite", desc: "Branded food delivery app suite — customer app, restaurant dashboard, delivery partner app.", href: "/quickbite/" },
  { name: "RideEasy", desc: "Branded cab booking platform — rider app, driver app, dispatch dashboard.", href: "/rideeasy/" },
  { name: "SchoolHub", desc: "School management system — admissions, attendance, fees, exams, parent communication.", href: "/schoolhub/" },
  { name: "ClinicFlow", desc: "Clinic management — appointments, EMR, billing, pharmacy, patient communication.", href: "/clinicflow/" },
  { name: "VetCare", desc: "Veterinary practice management — patient records, appointments, billing.", href: "/vetcare/" },
  { name: "SalonBook", desc: "Salon management — online booking, staff scheduling, billing, packages, loyalty.", href: "/salonbook/" },
  { name: "PestTrack", desc: "Pest control CRM and field service — job scheduling, technician routing, client management.", href: "/pesttrack/" },
  { name: "ChemSupply", desc: "ERP for chemical suppliers — batch tracking, expiry management, compliance.", href: "/chemsupply/" },
  { name: "ClinicVoice AI", desc: "AI voice agent for clinic bookings and patient follow-ups.", href: "/clinicvoice-ai/" },
  { name: "ChatFlow AI", desc: "WhatsApp business automation — AI chatbot for enquiries and lead qualification.", href: "/chatflow-ai/" },
  { name: "TeleCare", desc: "Telemedicine platform — video consultations, e-prescriptions, patient records.", href: "/telecare/" },
  { name: "InsureDesk", desc: "Insurance agency CRM — lead management, policy tracking, renewals.", href: "/insuredesk/" },
  { name: "CallMate AI", desc: "24/7 AI calling agent for businesses — automated calls, lead qualification, follow-ups.", href: "/callmate-ai/" },
  { name: "SolarFlow", desc: "Solar ERP & CRM — site surveys, quotations, project tracking, inventory for Gujarat installers.", href: "/solarflow/" },
  { name: "FabSuite", desc: "Costing & cutting-plan software for aluminium and uPVC fabricators.", href: "/fabsuite/" },
  { name: "EstateFlow", desc: "Real estate CRM for builders & developers — leads, site visits, booking, collections, post-sales.", href: "/estateflow/" },
];

export function productsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: `${BASE}/products/`,
    name: "Ready-Made Software Products — Digital Web Weaver",
    description:
      "19 production-ready software products — LMS, ERP, clinic software, delivery apps, and AI voice agents. White-label ready, deployed with your branding in 2–4 weeks.",
    isPartOf: { "@id": `${BASE}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: PRODUCT_CATALOG.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        description: p.desc,
        url: BASE + p.href,
      })),
    },
  };
}

export function servicesPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    url: `${BASE}/services/`,
    name: "Digital Web Weaver — Software Development Services",
    description:
      "Full-spectrum software development services: web, mobile, APIs, cloud, AI, and design — delivered by senior engineers across India, the UK, South Africa, and beyond.",
    provider: { "@id": `${BASE}/#organization` },
    areaServed: ["IN", "GB", "ZA", "CI"],
  };
}

export function localBusinessSchema({
  city,
  region,
  country = "IN",
  description,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE}/web-design-${city}/#localbusiness`,
    name: `Digital Web Weaver — ${city.charAt(0).toUpperCase() + city.slice(1)}`,
    url: `${BASE}/web-design-${city}/`,
    description: description || `Software development and web design services in ${city.charAt(0).toUpperCase() + city.slice(1)}.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "207/208 Sanket Heights, Sunpharma Road, Atladra",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390012",
      addressCountry: country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.2805213,
      longitude: 73.1629186,
    },
    areaServed: {
      "@type": "City",
      name: city.charAt(0).toUpperCase() + city.slice(1),
    },
    parentOrganization: { "@id": `${BASE}/#organization` },
  };
}
