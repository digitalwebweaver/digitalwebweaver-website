import type { ServicePageData } from "@/lib/types";

export const healthcare: ServicePageData = {
  meta: {
    title: "Healthcare Software Development | HIPAA-Compliant India",
    description: "HIPAA-compliant healthcare software: EHR/EMR systems, patient portals, telemedicine apps, HL7/FHIR integrations, and medical device connectivity for clinics.",
  },
  prose: {
    eyebrow: "Healthcare Software Development",
    heading: "A Healthcare Software Development Company Built Around Compliance",
    blocks: [
      { p: ["Digital Web Weaver is a healthcare software development company based in Vadodara, India, delivering EHR systems, patient portals, and telemedicine platforms to clinics and health systems across India, the UK, South Africa, and Ivory Coast. We build for the three groups that actually depend on clinical software — patients, clinicians, and compliance officers — which is why HIPAA safeguards, HL7/FHIR interoperability, and audit trails are architected in from the first sprint rather than bolted on after a failed security review. Our differentiator is engineering discipline: PHI encryption, role-based access control, and de-identified synthetic data in every non-production environment are non-negotiable defaults, not upsells."] },
      { h3: "EHR, Telemedicine, and Interoperable Platforms", p: ["From ", { text: "custom EHR and EMR systems", href: "/custom-software-development/" }, " with role-based access to secure ", { text: "patient-facing web applications", href: "/web-application-development/" }, " for scheduling, lab results, and messaging, we ship software that fits real clinical workflows. Telemedicine builds run on WebRTC video with e-prescription flows, while our ", { text: "HL7 and FHIR API integrations", href: "/services/api-integrations/" }, " connect to Epic, Cerner, and Allscripts through SMART on FHIR R4 endpoints — so patient data moves between systems without vendor lock-in or brittle point-to-point hacks."] },
      { h3: "Compliance-First, Cloud-Ready Engineering", p: ["Every platform runs on HIPAA-eligible infrastructure. Our ", { text: "cloud and DevOps practice", href: "/cloud-devops/" }, " provisions AWS GovCloud, Azure Health, and GCP Healthcare API environments with PHI encrypted at rest using AES-256 and in transit over TLS 1.3, backed by pen testing and a HIPAA checklist sign-off before launch. Backends built in Node.js and Python surface FHIR-powered analytics for clinicians and administrators, and our India base with global delivery keeps costs sane without cutting corners on security. If you are scoping an EHR, a patient portal, or a device-integration platform, ", { text: "tell us what you are building", href: "/contact/" }, " and we will map the compliance and architecture path with you."] },
    ],
  },
  hero: {
    eyebrow: "Healthcare Tech",
    heading: "Healthcare Software Built for Patients, Clinicians & Compliance",
    lead: "We build HIPAA-compliant EHR systems, patient portals, telemedicine apps, and clinical analytics platforms — secure, interoperable, and built for care.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Healthcare" }],
    marqueeItems: ["EHR", "EMR", "HIPAA", "HL7 FHIR", "Telemedicine", "Patient portals", "Medical devices", "Healthcare analytics", "DICOM", "NHS standards", "GDPR"],
    stats: [{ value: "HIPAA", label: "Compliant" }, { value: "HL7/FHIR", label: "Standards" }, { value: "10+", label: "Health Projects" }],
  },
  services: {
    variant: "svc",
    eyebrow: "Solutions",
    heading: "Healthcare Software We Build",
    items: [
      { icon: "🏥", title: "EHR / EMR Systems", desc: "Custom electronic health records with role-based access and audit trails." , tags: ["HIPAA","HL7 FHIR"]},
      { icon: "👤", title: "Patient Portals", desc: "Appointment scheduling, lab results, and secure messaging." , tags: ["React","WebSockets"]},
      { icon: "📹", title: "Telemedicine Apps", desc: "WebRTC video consultations with e-prescription integration." , tags: ["WebRTC","Stripe"]},
      { icon: "🔬", title: "Clinical Analytics", desc: "Population health dashboards and care outcome reporting." , tags: ["Data viz","PostgreSQL"]},
      { icon: "📡", title: "Medical Device Integration", desc: "IoT device data ingestion and real-time monitoring." , tags: ["IoT","REST APIs"]},
      { icon: "💊", title: "Pharmacy Management", desc: "Prescription tracking, inventory, and drug interaction alerts." , tags: ["Node.js","Queues"]},
    ],
  },
  capabilities: {
    eyebrow: "Technical Depth",
    heading: "Healthcare Tech Capabilities",
    dark: true,
    items: [
      { icon: "🔒", title: "HIPAA Compliance", desc: "PHI encryption, audit logging, BAA agreements, and access control." },
      { icon: "🔗", title: "HL7 & FHIR APIs", desc: "Standard healthcare data exchange with EHR vendors." },
      { icon: "📱", title: "iOS HealthKit", desc: "Wearable data integration and Apple Health connectivity." },
      { icon: "☁️", title: "HIPAA-Eligible Cloud", desc: "AWS GovCloud, Azure Healthcare APIs, GCP Healthcare API." },
      { icon: "🛡️", title: "End-to-End Encryption", desc: "Data encrypted at rest (AES-256) and in transit (TLS 1.3)." },
      { icon: "📊", title: "Clinical Dashboards", desc: "FHIR-powered analytics for clinicians and administrators." },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "Healthcare Development Process",
    steps: [
      { title: "Compliance Audit", desc: "HIPAA gap analysis and BAA agreements before coding begins." },
      { title: "Architecture Design", desc: "PHI data flows, access controls, and audit trail design." },
      { title: "Development & Encryption", desc: "Feature builds with encryption at every data layer." },
      { title: "Security Testing", desc: "Pen testing, vulnerability scanning, and HIPAA checklist sign-off." },
    ],
  },
  stack: {
    eyebrow: "Technology Stack",
    heading: "Healthcare Tech Stack",
    cols: [
      { head: "Frontend", items: ["React", "Next.js", "TypeScript", "Radix UI"] },
      { head: "Backend", items: ["Node.js", "Python", "FHIR APIs", "PostgreSQL"] },
      { head: "Cloud", items: ["AWS GovCloud", "Azure Health", "GCP Healthcare API"] },
      { head: "Standards", items: ["HL7 FHIR R4", "DICOM", "SNOMED CT", "ICD-10"] },
    ],
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Why Digital Web Weaver for Healthcare?",
    dark: true,
    items: [
      { icon: "🔒", title: "HIPAA by Default", desc: "Compliance is architected in, not audited in after the fact." },
      { icon: "🔗", title: "FHIR Integrations", desc: "Native FHIR R4 support for interoperability with major EHR vendors." },
      { icon: "📱", title: "Mobile Health Apps", desc: "iOS HealthKit and Android Health Connect integrations." },
      { icon: "⚡", title: "Clinical UX", desc: "Interfaces designed for clinician efficiency, not just aesthetics." },
    ],
  },
  faq: {
    heading: "Healthcare Development FAQ",
    items: [
      { q: "Are you HIPAA compliant as a vendor?", a: "Yes — we sign BAAs, implement required technical safeguards, and train our team on HIPAA privacy and security rules." },
      { q: "Can you integrate with Epic or Cerner?", a: "Yes — via FHIR R4 APIs. Epic, Cerner, and Allscripts all expose SMART on FHIR endpoints we can connect to." },
      { q: "How do you handle PHI in development environments?", a: "De-identified synthetic data only. PHI never leaves production environments. Strict access controls on all environments." },
      { q: "Do you build for FDA-regulated medical devices?", a: "We build companion apps and data platforms. FDA SaMD classification determines what regulatory pathway applies." },
    ],
  },
  cta: { heading: "Build Your Healthcare Platform", body: "HIPAA-compliant, HL7-ready, and built for clinical workflows." },
  related: [
    { label: "Web Application Development", href: "/web-application-development/", desc: "Secure portals, dashboards, and patient-facing web applications." },
    { label: "Custom Software Development", href: "/custom-software-development/", desc: "Bespoke healthcare systems — EHR, clinic management, and patient workflows." },
    { label: "Mobile App Development", href: "/mobile-app-development/", desc: "iOS and Android health apps with HealthKit and offline-first architecture." },
  ],
};

export const fintech: ServicePageData = {
  meta: {
    title: "FinTech Software Development | PCI-DSS Compliant India",
    description: "FinTech software development for payment processing, lending platforms, KYC/AML, PCI-DSS compliance, open banking APIs, and trading dashboards. Free quote in 24 hrs.",
  },
  prose: {
    eyebrow: "FinTech Solutions",
    heading: "FinTech Software Built to Comply, Built to Scale",
    blocks: [
      { p: ["As a FinTech software development company based in Vadodara, India, with delivery across the UK, South Africa, and Ivory Coast, we build for teams that answer to regulators: payment processors, lenders, and wealth platforms where a failed audit is not an option. What sets us apart is that compliance drives the architecture rather than trailing behind it. We tokenise cardholder data at the edge so it never touches our application servers, targeting PCI-DSS SAQ-A and SAQ-A-EP scope from the first commit, and we map applicable regimes (RBI, FCA, PSD2) during discovery instead of at launch."] },
      { h3: "Payment, Lending, and Open Banking Systems", p: ["We engineer Stripe, Razorpay, and Plaid integrations, loan origination platforms wired into bureau APIs like CIBIL and Experian, and PSD2-compliant open banking flows for account aggregation. Complex trading dashboards and multi-user portals ship as ", { text: "web application development", href: "/web-application-development/" }, " projects, while multi-tenant products with usage-based billing ship as ", { text: "FinTech SaaS platforms", href: "/saas-development/" }, ". When your product must talk to core banking systems such as Mambu or Temenos, our ", { text: "API integration work", href: "/services/api-integrations/" }, " keeps those connections secure, versioned, and fully audited."] },
      { h3: "Real-Time Data and Fraud Prevention", p: ["Financial data moves fast, so we build event-driven backends with WebSocket market feeds, Kafka, and CQRS patterns for sub-second updates on Node.js and Python. Fraud prevention is not bolted on afterwards. We embed ", { text: "ML-powered anomaly detection", href: "/ai-automation/" }, " and rule engines that flag suspicious activity before a transaction settles, backed by VPC isolation, WAF, and immutable audit logging. If you are scoping a compliant payment, lending, or wealth platform, ", { text: "tell us what you are building", href: "/contact/" }, " and we will map the regulatory requirements with you before a line of code is written."] },
    ],
  },
  hero: {
    eyebrow: "FinTech Solutions",
    heading: "FinTech Software Built to Comply, Built to Scale",
    lead: "We engineer PCI-DSS compliant payment systems, lending platforms, KYC/AML pipelines, and trading dashboards for regulated financial environments.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "FinTech" }],
    marqueeItems: ["PCI-DSS", "KYC", "AML", "Open Banking", "Stripe", "Plaid", "ISO 20022", "FCA", "RBI", "PSD2", "SEPA", "OAuth 2.0"],
    stats: [{ value: "PCI-DSS", label: "Compliant" }, { value: "15+", label: "FinTech Apps" }, { value: "SOC 2", label: "Aware" }],
  },
  services: {
    variant: "svc",
    eyebrow: "Solutions",
    heading: "FinTech Software We Build",
    items: [
      { icon: "💳", title: "Payment Processing", desc: "Stripe, Razorpay, and custom payment gateway integrations." , tags: ["Stripe","PCI-DSS"]},
      { icon: "🏦", title: "Lending Platforms", desc: "Loan origination, credit scoring, and repayment management." , tags: ["Node.js","PostgreSQL"]},
      { icon: "🔍", title: "KYC / AML Systems", desc: "Identity verification, document OCR, and sanctions screening." , tags: ["Onfido","AWS"]},
      { icon: "📊", title: "Trading Dashboards", desc: "Real-time market data, portfolio management, and order books." , tags: ["WebSockets","React"]},
      { icon: "🔗", title: "Open Banking APIs", desc: "PSD2-compliant account aggregation and payment initiation." , tags: ["OAuth 2.0","REST"]},
      { icon: "💹", title: "Wealth Management", desc: "Robo-advisor platforms and portfolio analytics tools." , tags: ["Python","ML"]},
    ],
  },
  capabilities: {
    eyebrow: "Technical Depth",
    heading: "FinTech Capabilities",
    dark: true,
    items: [
      { icon: "🔒", title: "PCI-DSS Compliance", desc: "Tokenisation, encryption, and cardholder data environment design." },
      { icon: "🔍", title: "KYC/AML Integration", desc: "Jumio, Onfido, and custom OCR-based identity verification." },
      { icon: "⚡", title: "Real-Time Processing", desc: "WebSocket market feeds, event sourcing, and CQRS patterns." },
      { icon: "🏦", title: "Core Banking APIs", desc: "Integration with Mambu, Temenos, and core banking systems." },
      { icon: "📊", title: "Risk Analytics", desc: "ML-powered fraud detection and credit risk models." },
      { icon: "☁️", title: "Secure Cloud Infra", desc: "VPC isolation, WAF, DDoS protection, and audit logging." },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "FinTech Development Process",
    steps: [
      { title: "Regulatory Review", desc: "Identify applicable regulations (PCI, PSD2, RBI, FCA) upfront." },
      { title: "Architecture", desc: "Data isolation, encryption design, and audit trail planning." },
      { title: "Development", desc: "Feature builds with security scanning at every PR merge." },
      { title: "Compliance Testing", desc: "Penetration testing, audit logging verification, and regulator prep." },
    ],
  },
  stack: {
    eyebrow: "Technology Stack",
    heading: "FinTech Stack",
    cols: [
      { head: "Frontend", items: ["React", "TypeScript", "WebSockets", "Recharts"] },
      { head: "Backend", items: ["Node.js", "Python", "Kafka", "PostgreSQL"] },
      { head: "Payments", items: ["Stripe", "Razorpay", "Braintree", "Plaid"] },
      { head: "Security", items: ["AWS WAF", "Vault", "SAST", "Penetration Testing"] },
    ],
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Why Digital Web Weaver for FinTech?",
    dark: true,
    items: [
      { icon: "🔒", title: "Compliance First", desc: "Security and regulatory requirements drive architecture decisions." },
      { icon: "⚡", title: "Real-Time Systems", desc: "Event-driven architectures for sub-millisecond financial data." },
      { icon: "🔍", title: "Fraud Prevention", desc: "ML-based anomaly detection and rule engines built in." },
      { icon: "📊", title: "Financial UX", desc: "Dashboards designed for financial data density and clarity." },
    ],
  },
  faq: {
    heading: "FinTech Development FAQ",
    items: [
      { q: "Are you experienced with RBI or FCA regulations?", a: "We've built for both RBI-regulated Indian FinTechs and FCA-authorised UK firms. Regulatory mapping is part of discovery." },
      { q: "How do you handle payment card data?", a: "We tokenise at the edge — cardholder data never touches our application servers. PCI-DSS SAQ-A or SAQ-A-EP compliance." },
      { q: "Can you integrate with Open Banking APIs?", a: "Yes — PSD2-compliant account aggregation and payment initiation via TrueLayer, Plaid, and direct bank APIs." },
      { q: "Do you build for crypto or DeFi?", a: "Yes — we build Web3 integrations, smart contract frontends, and crypto payment processing with Coinbase and BitPay." },
    ],
  },
  cta: { heading: "Build Your FinTech Platform", body: "Compliant, scalable, and built for financial data from day one." },
  related: [
    { label: "Web Application Development", href: "/web-application-development/", desc: "Complex fintech portals, trading dashboards, and multi-user platforms." },
    { label: "SaaS Development", href: "/saas-development/", desc: "Multi-tenant fintech SaaS with Stripe billing and SOC 2-ready architecture." },
    { label: "AI & Automation", href: "/ai-automation/", desc: "Fraud detection, document processing, and ML-powered credit scoring." },
  ],
  cases: [
    { tag: "FinTech · UK", title: "BNPL checkout integration for a retail platform", desc: "PCI-DSS-compliant BNPL checkout added to an e-commerce platform serving 120k customers. 3-step credit decision in under 2 seconds.", metrics: [{ value: "120k", label: "Customers served" }, { value: "<2s", label: "Credit decision" }], stack: ["Stripe", "PCI-DSS", "Node.js"], bgClass: "c1" },
    { tag: "Lending · India", title: "MSME lending platform — 10,000 loans disbursed", desc: "Loan origination, scoring, and collections platform for an NBFC. Integrated with bureau APIs (CIBIL, Experian) and bank NACH for auto-debit.", metrics: [{ value: "10,000", label: "Loans disbursed" }, { value: "2 bureaus", label: "CIBIL & Experian" }], stack: ["Node.js", "PostgreSQL", "NACH"], bgClass: "c2" },
    { tag: "Open Banking · UAE", title: "Multi-bank aggregation dashboard for a wealth app", desc: "PSD2/open-banking-style account aggregation for a UAE digital wealth app. 8 bank connections, real-time net-worth view, and spending analytics.", metrics: [{ value: "8", label: "Bank connections" }], stack: ["Plaid", "OAuth 2.0", "React Native"], bgStyle: "linear-gradient(140deg,#dde4f0,#c4cfe0)" },
  ]
};

export const edtech: ServicePageData = {
  meta: {
    title: "EdTech Software Development Company | LMS & Learning India",
    description: "EdTech software development for LMS platforms, live class tools, assessment engines, student analytics, and mobile learning apps for schools and enterprises.",
  },
  prose: {
    eyebrow: "EdTech Solutions",
    heading: "EdTech Software Development Built for How People Learn",
    blocks: [
      { p: ["Digital Web Weaver is an EdTech software development company that builds LMS platforms, live classroom tools, assessment engines, and mobile learning apps for schools, universities, and corporate training teams. Based in Vadodara, India, we deliver to clients across the UK, South Africa, and Ivory Coast. What sets us apart is a video-first, standards-driven approach: SCORM 1.2/2004, xAPI, and LTI are baked in from day one, so content from major publishers plugs straight into your platform. We've shipped virtual classrooms serving 50,000 university students and B2C bootcamp platforms carrying 12,000 active learners — production systems under real exam-day load, not prototypes."] },
      { h3: "Video and live learning that holds up at scale", p: ["Live video is where most learning platforms fall over. We architect around AWS MediaConvert encoding, CloudFront delivery, and adaptive bitrate streaming so a recorded lecture or live session plays cleanly even on patchy rural connections. Live classes run on WebRTC and Agora with interactive whiteboards, breakout rooms, and session recording to S3. Because enrolment and exam periods spike hard, we build on disciplined ", { text: "cloud and DevOps", href: "/cloud-devops/" }, " foundations — autoscaling infrastructure that we load-test to 10,000+ concurrent learners before a single student logs in."] },
      { h3: "Mobile, AI, and platforms built to grow", p: ["Learners aren't tied to a desk, so we build offline-first ", { text: "mobile learning apps", href: "/mobile-app-development/" }, " in React Native and Flutter that let students download courses and sync progress once they reconnect. For platforms serving many institutions at once, our ", { text: "multi-tenant SaaS development", href: "/saas-development/" }, " handles per-tenant branding, SAML SSO, and subscription billing, while ", { text: "AI automation", href: "/ai-automation/" }, " drives adaptive learning paths and personalised recommendations from real engagement signals. Every build ships with granular learning analytics so instructional designers can see exactly where learners stall. Whether you're launching a single course or licensing a white-label LMS to forty enterprises, ", { text: "tell us what you're building", href: "/contact/" }, " and we'll map the learner journey with you."] },
    ],
  },
  hero: {
    eyebrow: "EdTech Solutions",
    heading: "EdTech Platforms That Teach at Scale",
    lead: "We build LMS platforms, live classroom tools, assessment engines, and mobile learning apps for schools, universities, and corporate training.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "EdTech" }],
    marqueeItems: ["LMS", "SCORM", "xAPI", "WebRTC", "AWS", "React", "React Native", "Flutter", "Canvas", "Moodle", "Certificate issuance"],
    stats: [{ value: "SCORM", label: "Compliant" }, { value: "12+", label: "EdTech Builds" }, { value: "1M+", label: "Learner Ready" }],
  },
  services: {
    variant: "svc",
    eyebrow: "Solutions",
    heading: "EdTech Software We Build",
    items: [
      { icon: "📚", title: "LMS Platforms", desc: "Course builders, student dashboards, and completion tracking." , tags: ["SCORM","LTI"]},
      { icon: "🎥", title: "Live Class Tools", desc: "WebRTC video, interactive whiteboards, and breakout rooms." , tags: ["WebRTC","Agora"]},
      { icon: "📝", title: "Assessment Engines", desc: "Quiz builders, proctoring, and adaptive testing." , tags: ["React","Node.js"]},
      { icon: "📊", title: "Learning Analytics", desc: "Progress dashboards, engagement metrics, and outcome reporting." , tags: ["PostgreSQL","Metabase"]},
      { icon: "📱", title: "Mobile Learning", desc: "iOS and Android apps with offline course access." , tags: ["React Native","Offline"]},
      { icon: "🏅", title: "Certification Systems", desc: "Digital badges, certificates, and verifiable credentials." , tags: ["PDF","Blockchain"]},
    ],
  },
  capabilities: {
    eyebrow: "Technical Depth",
    heading: "EdTech Capabilities",
    dark: true,
    items: [
      { icon: "📖", title: "SCORM & xAPI", desc: "Standards-based content delivery and tracking." },
      { icon: "🎥", title: "Video Infrastructure", desc: "AWS MediaConvert, Cloudinary, and adaptive bitrate streaming." },
      { icon: "🤖", title: "AI Personalisation", desc: "Adaptive learning paths using ML engagement signals." },
      { icon: "📱", title: "Offline Support", desc: "PWA and React Native offline course downloads." },
      { icon: "🔒", title: "Content Protection", desc: "DRM, watermarking, and download restrictions." },
      { icon: "🌍", title: "Multi-Language", desc: "i18n content, RTL support, and subtitle management." },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "EdTech Development Process",
    steps: [
      { title: "Learner Journey Design", desc: "Map the full learner flow from enrollment to certification." },
      { title: "Content Architecture", desc: "SCORM packaging, video delivery, and assessment design." },
      { title: "Platform Development", desc: "LMS core, live tools, analytics, and mobile apps." },
      { title: "QA & Load Testing", desc: "Concurrent user load tests — 1000+ simultaneous learners." },
    ],
  },
  stack: {
    eyebrow: "Technology Stack",
    heading: "EdTech Stack",
    cols: [
      { head: "Frontend", items: ["React", "Next.js", "React Native", "VideoJS"] },
      { head: "Backend", items: ["Node.js", "Python", "PostgreSQL", "Redis"] },
      { head: "Video", items: ["AWS MediaConvert", "Cloudinary", "Wowza", "Agora"] },
      { head: "Standards", items: ["SCORM 1.2/2004", "xAPI (Tin Can)", "LTI", "WCAG 2.1"] },
    ],
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Why Digital Web Weaver for EdTech?",
    dark: true,
    items: [
      { icon: "🎥", title: "Video-First Architecture", desc: "CDN delivery and adaptive bitrate for any connection speed." },
      { icon: "📱", title: "Mobile Learning", desc: "Offline-capable apps so learners aren't blocked by bad WiFi." },
      { icon: "🤖", title: "AI-Powered Paths", desc: "Personalised content recommendations and adaptive assessments." },
      { icon: "📊", title: "Deep Analytics", desc: "Granular learner engagement data for instructional designers." },
    ],
  },
  faq: {
    heading: "EdTech Development FAQ",
    items: [
      { q: "Can you integrate with existing content libraries?", a: "Yes — SCORM, xAPI (Tin Can), and LTI standards allow content from major publishers to plug in to your LMS." },
      { q: "How do you handle video at scale?", a: "AWS MediaConvert for encoding, CloudFront for global CDN delivery, and adaptive bitrate streaming for variable connections." },
      { q: "Do you build live proctoring features?", a: "Yes — webcam monitoring, screen recording, and AI-based behaviour analysis integrated via Proctorio or custom builds." },
      { q: "Can your platforms handle 10,000+ concurrent students?", a: "Yes — we load-test with 10k concurrent users as standard. Autoscaling handles traffic spikes during exam periods." },
    ],
  },
  cta: { heading: "Build Your EdTech Platform", body: "Scalable, engaging, and built for how people actually learn." },
  related: [
    { label: "SaaS Development", href: "/saas-development/", desc: "Multi-tenant LMS SaaS platforms with subscription billing and analytics." },
    { label: "Web Application Development", href: "/web-application-development/", desc: "Assessment engines, learning dashboards, and certification platforms." },
    { label: "Mobile App Development", href: "/mobile-app-development/", desc: "iOS and Android learning apps with offline-first course downloads." },
  ],
  cases: [
    { tag: "EdTech · UK", title: "University virtual classroom — 50,000 students", desc: "LiveKit-based virtual classroom deployed across 3 UK university campuses. HD video for 200 concurrent users per session, recording to S3, and LMS grade sync.", metrics: [{ value: "50,000", label: "Students reached" }, { value: "200", label: "Concurrent per session" }], stack: ["LiveKit", "WebRTC", "AWS S3"], bgClass: "c1" },
    { tag: "Online Learning · India", title: "B2C coding bootcamp LMS — ₹5 Cr revenue year 1", desc: "Full-stack LMS with video lessons, coding challenges, mentor sessions, and a certificate system. 12,000 active learners in year 1.", metrics: [{ value: "₹5 Cr", label: "Revenue year 1" }, { value: "12,000", label: "Active learners" }], stack: ["React", "Node.js", "PostgreSQL"], bgClass: "c2" },
    { tag: "Corporate L&D · UAE", title: "White-label e-learning platform for 40 enterprises", desc: "SCORM-compatible white-label LMS licensed to 40 enterprise clients for employee onboarding. SAML SSO, custom branding per tenant, xAPI reporting.", metrics: [{ value: "40", label: "Enterprise clients" }], stack: ["SCORM", "xAPI", "SAML SSO"], bgStyle: "linear-gradient(140deg,#f5eedd,#ecdcc4)" },
  ]
};

export const logistics: ServicePageData = {
  meta: {
    title: "Logistics Software Development | Fleet & Tracking India",
    description: "Custom logistics and supply chain software: fleet management, shipment tracking, warehouse management, route optimisation, and ERP integration.",
  },
  prose: {
    eyebrow: "Logistics Tech",
    heading: "Logistics Software Built for Real-Time Operations",
    blocks: [
      { p: ["As a logistics software development company based in Vadodara, India, Digital Web Weaver builds fleet management, real-time shipment tracking, and route optimisation systems for 3PLs, couriers, and supply chain operators across India, the UK, South Africa, and beyond. What sets us apart is depth in real-time engineering — WebSocket location streaming, Kafka event pipelines, and TimescaleDB time-series storage that handle tens of thousands of GPS events per minute without buckling. We don't bolt a generic dashboard onto your operation; we map your dispatch, warehouse, and last-mile workflows first, then build around exactly how your fleet moves."] },
      { h3: "Driver apps, tracking, and route intelligence", p: ["Our driver apps are offline-first React Native builds with background sync, e-signature capture, and live route updates — engineered for field conditions where mobile connectivity drops out. Behind them, we design ", { text: "custom logistics software", href: "/custom-software-development/" }, " for TMS, WMS, and fleet operations, wiring dispatch consoles and customer-facing tracking portals into a single real-time picture. Route optimisation runs on Google OR-Tools and OSRM, and we apply ", { text: "AI-driven automation", href: "/ai-automation/" }, " to demand forecasting and multi-stop planning that trims empty miles and fuel spend."] },
      { h3: "Integrations and infrastructure built to scale", p: ["Logistics never runs in isolation, so we connect your platform to the wider supply chain through EDI X12, EDIFACT, and modern REST APIs, and integrate ", { text: "ERP systems", href: "/crm-erp-systems/" }, " like SAP and Oracle for inventory, procurement, and finance. Everything ships on ", { text: "scalable cloud infrastructure", href: "/cloud-devops/" }, " — Kubernetes, IoT Core, and event streaming that comfortably absorbs millions of tracking events a day, including cold-chain sensor telemetry with threshold alerting. From our India base we deliver globally, with the same engineers carrying the work from architecture through phased go-live. ", { text: "Tell us how your operation runs", href: "/contact/" }, " and we'll scope the build."] },
    ],
  },
  hero: {
    eyebrow: "Logistics Tech",
    heading: "Logistics Software That Moves as Fast as Your Fleet",
    lead: "We build fleet management, real-time shipment tracking, warehouse management, and route optimisation systems for logistics and supply chain operations.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Logistics" }],
    marqueeItems: ["GPS tracking", "React Native", "Node.js", "WebSockets", "Google Maps", "OSRM", "PostgreSQL", "MongoDB", "Driver apps", "Last-mile", "3PL", "WMS", "TMS"],
    stats: [{ value: "Real-Time", label: "Tracking" }, { value: "GPS", label: "Fleet Control" }, { value: "ERP", label: "Integrated" }],
  },
  services: {
    variant: "svc",
    eyebrow: "Solutions",
    heading: "Logistics Software We Build",
    items: [
      { icon: "🚚", title: "Fleet Management", desc: "GPS tracking, driver management, and vehicle health monitoring." , tags: ["GPS","WebSockets"]},
      { icon: "📦", title: "Shipment Tracking", desc: "Real-time tracking with customer-facing portals and notifications." , tags: ["React Native","SQLite"]},
      { icon: "🏭", title: "Warehouse Management", desc: "Pick-pack-ship workflows, barcode scanning, and inventory control." , tags: ["Node.js","Barcode"]},
      { icon: "🗺️", title: "Route Optimisation", desc: "AI-powered route planning for multi-stop delivery efficiency." , tags: ["OSRM","Python"]},
      { icon: "🔗", title: "ERP Integration", desc: "Connect SAP, Oracle, and custom ERPs to logistics operations." , tags: ["SAP","EDI"]},
      { icon: "📊", title: "Supply Chain Analytics", desc: "Demand forecasting, inventory KPIs, and supplier dashboards." , tags: ["PostgreSQL","Metabase"]},
    ],
  },
  capabilities: {
    eyebrow: "Technical Depth",
    heading: "Logistics Tech Capabilities",
    dark: true,
    items: [
      { icon: "📍", title: "Real-Time GPS", desc: "WebSocket location streaming with sub-5s update frequency." },
      { icon: "🔗", title: "EDI & API Integration", desc: "EDI X12, EDIFACT, and modern REST API shipper integrations." },
      { icon: "🤖", title: "Route Optimisation", desc: "Google OR-Tools and custom TSP solvers for delivery routing." },
      { icon: "📱", title: "Driver Apps", desc: "React Native apps with offline capability and e-signature." },
      { icon: "📊", title: "IoT Telemetry", desc: "Temperature, humidity, and shock sensors for cold-chain." },
      { icon: "☁️", title: "Scalable Infra", desc: "Handle millions of tracking events per day with Kafka + TimescaleDB." },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "Logistics Development Process",
    steps: [
      { title: "Operations Mapping", desc: "Document current workflows, pain points, and integration needs." },
      { title: "System Design", desc: "Data models, real-time architecture, and third-party integrations." },
      { title: "Development", desc: "Core platform + driver apps + customer portal in parallel." },
      { title: "Go-Live & Monitoring", desc: "Phased rollout with live operations monitoring." },
    ],
  },
  stack: {
    eyebrow: "Technology Stack",
    heading: "Logistics Tech Stack",
    cols: [
      { head: "Frontend", items: ["React", "Next.js", "Google Maps API", "Leaflet"] },
      { head: "Backend", items: ["Node.js", "Kafka", "TimescaleDB", "Redis"] },
      { head: "Mobile", items: ["React Native", "Offline Sync", "Barcode Scanner", "GPS"] },
      { head: "Infra", items: ["AWS", "Kubernetes", "IoT Core", "CloudFront"] },
    ],
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Why Digital Web Weaver for Logistics?",
    dark: true,
    items: [
      { icon: "📍", title: "Real-Time Expertise", desc: "WebSocket and event-streaming architectures for live tracking." },
      { icon: "🤖", title: "Route Intelligence", desc: "OR-Tools and ML for delivery optimisation." },
      { icon: "📱", title: "Driver App Specialists", desc: "Offline-capable mobile apps built for field conditions." },
      { icon: "🔗", title: "Deep Integration", desc: "EDI, ERPs, courier APIs — we connect the whole supply chain." },
    ],
  },
  faq: {
    heading: "Logistics Software FAQ",
    items: [
      { q: "Can you integrate with our existing TMS?", a: "Yes — via REST APIs, EDI, or direct database integration depending on what your TMS supports." },
      { q: "How do you handle GPS data at scale?", a: "Event streaming with Kafka, time-series storage with TimescaleDB, and WebSocket delivery to dashboards." },
      { q: "Do you support cold-chain monitoring?", a: "Yes — IoT sensor integration for temperature, humidity, and shock with alerting when thresholds are breached." },
      { q: "Can drivers use the app without internet?", a: "Yes — offline-first React Native with background sync when connectivity is restored." },
    ],
  },
  cta: { heading: "Modernise Your Logistics Operations", body: "Real-time tracking, route intelligence, and ERP integration." },
  related: [
    { label: "Custom Software Development", href: "/custom-software-development/", desc: "Bespoke TMS, WMS, and fleet management software for logistics operations." },
    { label: "CRM & ERP Systems", href: "/crm-erp-systems/", desc: "ERP integration for logistics — inventory, procurement, and finance modules." },
    { label: "Web Application Development", href: "/web-application-development/", desc: "Real-time tracking portals, dispatch dashboards, and driver management apps." },
  ],
  cases: [
    { tag: "3PL · India", title: "Real-time fleet tracking — 600 vehicles", desc: "GPS tracking platform for a pan-India logistics operator. Live vehicle positions, trip history, driver analytics, and dispatch console. Handles 50k events/minute at peak.", metrics: [{ value: "600", label: "Vehicles tracked" }, { value: "50k/min", label: "Peak events" }], stack: ["TimescaleDB", "WebSockets", "React"], bgClass: "c1" },
    { tag: "Last-mile · UK", title: "Courier delivery app — 5,000 active drivers", desc: "React Native driver app with offline-first architecture, ePOD signatures, and live route updates. Customer tracking portal and operations dashboard built in parallel.", metrics: [{ value: "5,000", label: "Active drivers" }], stack: ["React Native", "SQLite", "Node.js"], bgClass: "c2" },
    { tag: "E-commerce · UAE", title: "Same-day delivery platform — launch in 10 weeks", desc: "End-to-end same-day delivery platform: customer app, driver app, merchant portal, and operations dashboard. OSRM route optimisation and Stripe payment integration.", metrics: [{ value: "10 wks", label: "Zero to launch" }], stack: ["OSRM", "React Native", "Stripe"], bgStyle: "linear-gradient(140deg,#e8f0e8,#d0e0d0)" },
  ]
};

export const manufacturing: ServicePageData = {
  meta: {
    title: "Manufacturing Software Development | MES, IoT & Industry 4.0",
    description: "Manufacturing software development: MES/MRP systems, IoT integration, quality control, production scheduling, and Industry 4.0 transformation for factories.",
  },
  prose: {
    eyebrow: "Manufacturing Tech",
    heading: "A Manufacturing Software Development Company Built for the Shop Floor",
    blocks: [
      { p: ["Digital Web Weaver is a manufacturing software development company that builds MES, MRP, quality-control, and IoT platforms for factories moving toward Industry 4.0. We work with automotive, pharma, and FMCG manufacturers who need machine data turned into decisions — not another dashboard nobody trusts. From our base in Vadodara, India, we deliver to plants across India, the UK, South Africa, and the Gulf, pairing ", { text: "custom software development", href: "/custom-software-development/" }, " with real industrial-protocol experience so the system matches how your lines actually run."] },
      { h3: "Machine connectivity that survives the shop floor", p: ["Most manufacturing projects fail at the edge, where PLCs, SCADA, and legacy machines refuse to talk. We integrate over OPC-UA, MQTT, and Modbus, stream telemetry into TimescaleDB or InfluxDB, and surface real-time OEE and downtime root-cause in ", { text: "production web applications", href: "/web-application-development/" }, " designed for gloves, poor lighting, and speed. On top of that data we layer Python and ML models for predictive maintenance — vibration, temperature, and current-signature anomaly detection on rotating machinery — and support on-premise, edge, and air-gapped deployments where the cloud isn't an option."] },
      { h3: "ERP integration, analytics, and traceability", p: ["Shop-floor software only pays off when it closes the loop with the back office. We build bidirectional ", { text: "ERP and MRP integrations", href: "/crm-erp-systems/" }, " — SAP RFC/BAPI for ECC, OData for S/4HANA — syncing material master, production orders, and goods movements, and we add batch traceability robust enough for 21 CFR Part 11 audit trails. Where repetitive planning and reporting drain your team, we introduce ", { text: "AI-driven automation", href: "/ai-automation/" }, " to flag yield drift and schedule capacity before it bites. If you're ready to modernise MES, connect your machines, or tighten ERP sync, ", { text: "tell us about your plant", href: "/contact/" }, " and we'll map a practical path to go-live."] },
    ],
  },
  hero: {
    eyebrow: "Manufacturing Tech",
    heading: "Manufacturing Software for Industry 4.0",
    lead: "We build MES, MRP, quality control, and IoT integration platforms for manufacturers ready to embrace digital transformation.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Manufacturing" }],
    marqueeItems: ["MES", "MRP", "IoT", "SCADA", "OPC-UA", "Modbus", "MQTT", "SAP", "Oracle", "Quality control", "Predictive maintenance", "Industry 4.0"],
    stats: [{ value: "Industry 4.0", label: "Ready" }, { value: "IoT", label: "Connected" }, { value: "OEE", label: "Optimised" }],
  },
  services: {
    variant: "svc",
    eyebrow: "Solutions",
    heading: "Manufacturing Software We Build",
    items: [
      { icon: "🏭", title: "MES Systems", desc: "Manufacturing Execution Systems for shop floor visibility." , tags: ["React","Node.js"]},
      { icon: "📦", title: "MRP / Planning", desc: "Material requirements planning and production scheduling." , tags: ["MQTT","TimescaleDB"]},
      { icon: "🔬", title: "Quality Control", desc: "Inspection management, SPC charts, and non-conformance tracking." , tags: ["Python","ML"]},
      { icon: "📡", title: "IoT Integration", desc: "Machine connectivity, real-time OEE, and predictive maintenance." , tags: ["OPC-UA","MQTT"]},
      { icon: "📊", title: "Production Analytics", desc: "Downtime analysis, yield tracking, and capacity planning." , tags: ["PostgreSQL","React"]},
      { icon: "🔗", title: "ERP Integration", desc: "SAP, Oracle, and custom ERP bidirectional sync.", tags: ["SAP", "RFC"] },
    ],
  },
  capabilities: {
    eyebrow: "Technical Depth",
    heading: "Manufacturing Tech Capabilities",
    dark: true,
    items: [
      { icon: "📡", title: "OPC-UA / MQTT", desc: "Industrial protocol integration for PLC and SCADA connectivity." },
      { icon: "🤖", title: "Predictive Maintenance", desc: "ML anomaly detection on machine telemetry data." },
      { icon: "📊", title: "OEE Dashboards", desc: "Real-time Overall Equipment Effectiveness with downtime root cause." },
      { icon: "🔗", title: "SAP Integration", desc: "RFC, BAPI, and REST-based SAP S/4HANA integration." },
      { icon: "📱", title: "Operator Interfaces", desc: "Ruggedised tablet and barcode scanner-optimised UIs." },
      { icon: "☁️", title: "Edge Computing", desc: "On-premise or edge deployments for air-gapped environments." },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "Manufacturing Development Process",
    steps: [
      { title: "Factory Walk-Through", desc: "Understand production lines, machines, and data flows." },
      { title: "Integration Architecture", desc: "PLC/SCADA connectivity plan and data model design." },
      { title: "Platform Development", desc: "MES core, dashboards, mobile interfaces, and ERP connectors." },
      { title: "Commissioning", desc: "On-site installation, training, and go-live support." },
    ],
  },
  stack: {
    eyebrow: "Technology Stack",
    heading: "Manufacturing Tech Stack",
    cols: [
      { head: "Frontend", items: ["React", "TypeScript", "Chart.js", "Grafana"] },
      { head: "Backend", items: ["Node.js", "Python", "TimescaleDB", "InfluxDB"] },
      { head: "IoT", items: ["OPC-UA", "MQTT", "AWS IoT Core", "Edge Computing"] },
      { head: "Integration", items: ["SAP RFC", "REST APIs", "Apache Kafka", "OData"] },
    ],
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Why Digital Web Weaver for Manufacturing?",
    dark: true,
    items: [
      { icon: "📡", title: "Industrial Protocol Experts", desc: "OPC-UA, MQTT, and Modbus connectivity from real machine experience." },
      { icon: "🤖", title: "ML-Powered OEE", desc: "Predictive maintenance models trained on your production data." },
      { icon: "🔗", title: "SAP-Ready", desc: "Native SAP integration via RFC and REST for seamless ERP sync." },
      { icon: "📱", title: "Shop Floor UX", desc: "Operator interfaces designed for gloves, poor lighting, and speed." },
    ],
  },
  faq: {
    heading: "Manufacturing Software FAQ",
    items: [
      { q: "Can you integrate with our PLCs and SCADA systems?", a: "Yes — via OPC-UA, MQTT, or Modbus. We assess the machine vendor's protocol support during discovery." },
      { q: "Do you deploy on-premise?", a: "Yes — on-premise, edge, and hybrid cloud deployments supported. Air-gapped environments accommodated." },
      { q: "Can you integrate with SAP ERP?", a: "Yes — SAP RFC/BAPI for ECC and SAP S/4HANA OData APIs for Material master, production orders, and goods movements." },
      { q: "What's your experience with predictive maintenance?", a: "We've built vibration, temperature, and current-signature ML models for rotating machinery in industrial environments." },
    ],
  },
  cta: { heading: "Modernise Your Manufacturing Operations", body: "MES, IoT, and Industry 4.0 digital transformation — let's plan yours." },
  related: [
    { label: "CRM & ERP Systems", href: "/crm-erp-systems/", desc: "Custom ERP for manufacturing — production planning, inventory, and finance." },
    { label: "Custom Software Development", href: "/custom-software-development/", desc: "MES, quality control, and IoT integration systems for shop floor operations." },
    { label: "Web Application Development", href: "/web-application-development/", desc: "OEE dashboards, production analytics, and operator interface applications." },
  ],
  cases: [
    { tag: "Automotive parts · India", title: "Real-time OEE dashboard for 8-line factory", desc: "IoT integration collecting data from 45 machines via MQTT, feeding a live OEE dashboard. Downtime categorisation reduced mean time to repair by 38%.", metrics: [{ value: "38%", label: "MTTR reduction" }, { value: "45", label: "Machines connected" }], stack: ["MQTT", "TimescaleDB", "React"], bgClass: "c1" },
    { tag: "Pharma · UK", title: "Batch traceability system for GMP compliance", desc: "Full batch trace from raw material to finished product for a pharmaceutical manufacturer. Supports 21 CFR Part 11 electronic signatures and audit trails.", metrics: [{ value: "21 CFR Pt 11", label: "Compliance standard" }], stack: ["PostgreSQL", "Node.js", "React"], bgClass: "c2" },
    { tag: "FMCG · UAE", title: "MES for 3-shift production facility", desc: "Production order management, machine allocation, and shift handover system for a food manufacturer. Integrated with SAP for material consumption and stock updates.", metrics: [{ value: "3-shift", label: "Production coverage" }], stack: ["SAP", "Node.js", "React"], bgStyle: "linear-gradient(140deg,#f0ece4,#dfd8c8)" },
  ]
};

export const realEstate: ServicePageData = {
  meta: {
    title: "Real Estate Software Development Company | PropTech India",
    description: "Real estate software development: property listing platforms, agent CRM, virtual tours, lease management, and PropTech mobile apps for agencies and investors.",
  },
  prose: {
    eyebrow: "PropTech Engineering",
    heading: "Real Estate Software That Runs From Listing to Closing",
    blocks: [
      { p: ["Digital Web Weaver is a real estate software development company that builds property technology end to end — from map-based listing search to digital closing. We work with agencies, brokerages, property managers, and investors who need software that handles real MLS and RETS data, RERA-compliant documents, and high-traffic listing pages — not a templated brochure site. Based in Vadodara, India, we deliver globally across the UK, South Africa, and Ivory Coast, pairing genuine PropTech domain knowledge with the engineering depth to wire Mapbox, Elasticsearch, DocuSign, Matterport, and Stripe into a single coherent platform rather than a pile of disconnected plugins."] },
      { h3: "Listing Platforms Built for Search and Scale", p: ["A property portal lives or dies on search. We build ", { text: "web application development", href: "/web-application-development/" }, " around Elasticsearch and geospatial data — polygon draw, map clustering, and sub-second filtering across tens of thousands of listings. Because most buyers arrive from Google, every listing detail page is server-rendered with structured data, and we treat performance optimisation as a core requirement, not an afterthought, so Core Web Vitals hold steady even while live MLS and IDX feeds sync in the background. The same architecture powers virtual tours, saved-search alerts, and lead capture without slowing the map down."] },
      { h3: "CRM, Leasing, and Apps Agents Actually Use", p: ["Closing deals needs more than listings. We build an ", { text: "agent CRM and deal-pipeline system", href: "/crm-erp-systems/" }, " with lead tracking, client communication, and DocuSign-backed lease signing tied to Stripe rent collection and tenant portals. Agents work away from their desks, so we ship ", { text: "iOS and Android apps", href: "/mobile-app-development/" }, " for on-the-go listing management and 360° tours, and layer in ", { text: "AI automation", href: "/ai-automation/" }, " for lead scoring and automated property valuation using comparable-sales data. Tell us what your pipeline looks like and ", { text: "we'll scope the build with you", href: "/contact/" }, "."] },
    ],
  },
  hero: {
    eyebrow: "PropTech Solutions",
    heading: "PropTech Software From Listing to Closing",
    lead: "We build property listing platforms, agent CRMs, virtual tour software, and lease management systems for real estate businesses.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Real Estate" }],
    marqueeItems: ["React", "Node.js", "Mapbox", "Google Maps", "Matterport", "DocuSign", "Stripe", "Salesforce", "MLS", "RERA", "360° tours", "Lease management"],
    stats: [{ value: "PropTech", label: "Specialists" }, { value: "3D Tours", label: "Ready" }, { value: "MLS", label: "Integrated" }],
  },
  services: {
    variant: "svc",
    eyebrow: "Solutions",
    heading: "Real Estate Software We Build",
    items: [
      { icon: "🏠", title: "Property Listing Platforms", desc: "Search, filter, map view, and lead capture for listings." , tags: ["Mapbox","Elasticsearch"]},
      { icon: "👔", title: "Agent CRM", desc: "Lead pipeline, client communication, and deal tracking." , tags: ["React","PostgreSQL"]},
      { icon: "🎥", title: "Virtual Tours", desc: "360° photo tours, 3D Matterport integration, and video walkthroughs." , tags: ["Matterport","WebGL"]},
      { icon: "📋", title: "Lease Management", desc: "Digital lease signing, rent collection, and tenant portals." , tags: ["DocuSign","Stripe"]},
      { icon: "💰", title: "Property Valuation", desc: "AVM tools with comparables analysis and market data." , tags: ["Python","ML"]},
      { icon: "📱", title: "Mobile Apps", desc: "iOS and Android apps for agents and homebuyers." , tags: ["React Native","Mapbox"]},
    ],
  },
  capabilities: {
    eyebrow: "Technical Depth",
    heading: "PropTech Capabilities",
    dark: true,
    items: [
      { icon: "🗺️", title: "Google Maps & GIS", desc: "Map search, polygon draw, and geospatial property data." },
      { icon: "🔗", title: "MLS / RETS Integration", desc: "IDX feeds and RETS data sync for listing aggregation." },
      { icon: "✍️", title: "DocuSign Integration", desc: "Electronic signatures for contracts and lease agreements." },
      { icon: "🎥", title: "Matterport & 360°", desc: "Virtual tour embedding and 3D model integration." },
      { icon: "💳", title: "Payment Processing", desc: "Online rent collection, security deposits, and refunds." },
      { icon: "📊", title: "Market Analytics", desc: "Price trend dashboards and neighbourhood comparison tools." },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "PropTech Development Process",
    steps: [
      { title: "Market Research", desc: "Understand the buyer, seller, and agent journeys." },
      { title: "Data Architecture", desc: "Property schema, MLS integration, and search indexing." },
      { title: "Platform Development", desc: "Listings, maps, CRM, portals, and mobile apps." },
      { title: "Launch & SEO", desc: "Server-side rendering for listing pages, sitemap, and structured data." },
    ],
  },
  stack: {
    eyebrow: "Technology Stack",
    heading: "PropTech Stack",
    cols: [
      { head: "Frontend", items: ["Next.js", "React", "TypeScript", "Google Maps"] },
      { head: "Backend", items: ["Node.js", "PostgreSQL", "Elasticsearch", "Redis"] },
      { head: "Integrations", items: ["MLS/RETS", "DocuSign", "Stripe", "Matterport"] },
      { head: "Mobile", items: ["React Native", "Expo", "Mapbox", "Camera APIs"] },
    ],
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Why Digital Web Weaver for PropTech?",
    dark: true,
    items: [
      { icon: "🗺️", title: "Geo-Search Experts", desc: "Map-based property search with polygon drawing and clustering." },
      { icon: "🔗", title: "MLS Integration", desc: "RETS/IDX data feeds and real-time listing sync." },
      { icon: "📱", title: "Agent Mobile Apps", desc: "iOS and Android apps for listing management on the go." },
      { icon: "⚡", title: "SEO-Optimised Listings", desc: "Server-rendered listing pages with structured data for Google." },
    ],
  },
  faq: {
    heading: "PropTech Development FAQ",
    items: [
      { q: "Can you integrate with MLS listing data?", a: "Yes — RETS and RESO Web API for MLS data feeds. IDX compliance built into the listing display rules." },
      { q: "Do you support virtual tour integration?", a: "Yes — Matterport, Kuula, and custom 360° photo viewers embedded in listing detail pages." },
      { q: "Can you build lease management software?", a: "Yes — digital lease creation, DocuSign integration, rent collection via Stripe, and maintenance request portals." },
      { q: "Do you build property valuation tools?", a: "Yes — AVM models using comparable sales data and market factors for automated property estimates." },
    ],
  },
  cta: { heading: "Build Your PropTech Platform", body: "From listings to closing — we build the software that closes deals." },
  related: [
    { label: "Web Application Development", href: "/web-application-development/", desc: "Property listing platforms, agent CRM, and lease management portals." },
    { label: "Website Development", href: "/website-development/", desc: "Professional real estate agency and developer websites with lead capture." },
    { label: "Mobile App Development", href: "/mobile-app-development/", desc: "iOS and Android apps for property search, agent tools, and virtual tours." },
  ],
  cases: [
    { tag: "PropTech · India", title: "Property marketplace — 80,000 listings", desc: "Full-stack property portal with Elasticsearch-powered search, Mapbox map layers, and a CRM for 200 registered agents. RERA compliance documents auto-generated on listing.", metrics: [{ value: "80,000", label: "Listings" }, { value: "200", label: "Registered agents" }], stack: ["Elasticsearch", "Mapbox", "React"], bgClass: "c1" },
    { tag: "Property management · UK", title: "Multi-tenancy lease management platform", desc: "Digital lease management for a UK property management company with 2,500 tenancies. DocuSign workflows, Stripe rent collection, and automated renewal reminders.", metrics: [{ value: "2,500", label: "Tenancies managed" }], stack: ["DocuSign", "Stripe", "Node.js"], bgClass: "c2" },
    { tag: "Real estate investment · UAE", title: "Investor dashboard for 12-property portfolio", desc: "Portfolio dashboard with live rental yield, occupancy, and maintenance cost tracking for a Dubai-based property investment group. Stripe integration for owner distributions.", metrics: [{ value: "12", label: "Property portfolio" }], stack: ["React", "PostgreSQL", "Stripe"], bgStyle: "linear-gradient(140deg,#ece8e0,#ddd6c8)" },
  ]
};

export const retailEcommerce: ServicePageData = {
  meta: {
    title: "Retail & E-Commerce Development | Headless Commerce India",
    description: "Custom retail and e-commerce development: omnichannel platforms, POS integration, loyalty programs, recommendation engines, and headless commerce.",
  },
  prose: {
    eyebrow: "Retail & E-Commerce",
    heading: "Retail and E-Commerce Software Built to Sell and Scale",
    blocks: [
      { p: ["Retail and e-commerce software development is what we do for merchants who have outgrown off-the-shelf carts — mid-size retailers running online, mobile, and in-store channels that no longer talk to each other. Our differentiator is engineering, not templates: we build headless Next.js storefronts backed by Shopify, WooCommerce, or Medusa, wired to real-time inventory and POS. We work from a base in Vadodara, India, with delivery across the UK, South Africa, and Ivory Coast, so a store built here holds up under real load and real transaction volume."] },
      { h3: "Headless commerce and omnichannel that stays in sync", p: ["A storefront is only as good as the systems behind it. We connect physical and online stores through POS integrations and keep stock accurate across warehouses so you never oversell. Whether you need a bespoke ", { text: "custom e-commerce build", href: "/ecommerce-development/" }, " or a tailored ", { text: "Shopify store", href: "/shopify-development/" }, ", we handle checkout, payment gateways like Stripe and Razorpay, and the ", { text: "API integrations", href: "/services/api-integrations/" }, " that tie your ERP, marketplaces, and fulfilment into one order flow. That is what turns a good-looking site into an operation that runs itself."] },
      { h3: "Conversion, personalisation, and speed", p: ["Traffic that does not convert is wasted spend, so we design checkout flows to cut abandonment and optimise Core Web Vitals for the page speed that shoppers and search engines both reward. On top of that we layer ", { text: "AI-powered recommendations", href: "/ai-automation/" }, " that measurably lift average order value, plus loyalty programs and mobile commerce apps to keep customers coming back. If you are ready to build a platform that sells more and operates smarter, ", { text: "tell us about your store", href: "/contact/" }, " and we will map the build."] },
    ],
  },
  hero: {
    eyebrow: "Retail & E-Commerce",
    heading: "Retail Software That Sells More and Operates Smarter",
    lead: "We build omnichannel e-commerce platforms, POS integrations, loyalty programs, and recommendation engines for retail businesses.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Retail & E-Commerce" }],
    marqueeItems: ["Headless commerce", "Shopify", "Next.js", "POS integration", "Loyalty programs", "OMS", "Inventory sync", "Omnichannel", "Stripe", "Razorpay"],
    stats: [{ value: "Omnichannel", label: "Ready" }, { value: "Headless", label: "Commerce" }, { value: "+40%", label: "Avg Conversion" }],
  },
  services: {
    variant: "svc",
    eyebrow: "Solutions",
    heading: "Retail & E-Commerce Software We Build",
    items: [
      { icon: "🛒", title: "Custom E-Commerce", desc: "Bespoke stores with checkout flows built around your customers." , tags: ["Next.js","Shopify"]},
      { icon: "💻", title: "Headless Commerce", desc: "Next.js storefronts with Shopify, WooCommerce, or Medusa backends." , tags: ["React","API-First"]},
      { icon: "📱", title: "POS Integration", desc: "Connect physical and online stores with Square, Shopify POS, or custom." , tags: ["Stripe","Square"]},
      { icon: "🏅", title: "Loyalty Programs", desc: "Points, tiers, referrals, and gamified reward systems." , tags: ["Gamification","Points"]},
      { icon: "🤖", title: "Recommendation Engine", desc: "AI-powered product recommendations that increase AOV." , tags: ["ML","Personalisation"]},
      { icon: "📊", title: "Retail Analytics", desc: "Sales dashboards, inventory KPIs, and customer lifetime value." , tags: ["PostgreSQL","Metabase"]},
    ],
  },
  capabilities: {
    eyebrow: "Technical Depth",
    heading: "Retail Tech Capabilities",
    dark: true,
    items: [
      { icon: "🛒", title: "WooCommerce / Shopify", desc: "Custom extensions, themes, and headless storefronts." },
      { icon: "🔗", title: "Inventory Sync", desc: "Real-time stock sync across online, POS, and warehouse." },
      { icon: "💳", title: "Payment Gateways", desc: "Stripe, Razorpay, PayPal, and buy-now-pay-later integrations." },
      { icon: "🤖", title: "ML Personalisation", desc: "Collaborative filtering and content-based recommendation models." },
      { icon: "📱", title: "Mobile Commerce", desc: "React Native shopping apps with push notifications." },
      { icon: "⚡", title: "Performance", desc: "Core Web Vitals-optimised storefronts for conversion impact." },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "Retail Development Process",
    steps: [
      { title: "Commerce Audit", desc: "Analyse current conversion funnel, cart abandonment, and pain points." },
      { title: "Platform Design", desc: "Storefront architecture, checkout flow, and integration plan." },
      { title: "Build & Integrate", desc: "Storefront, payment, inventory, and POS in coordinated sprints." },
      { title: "Launch & Optimise", desc: "A/B test checkout flows and monitor Core Web Vitals." },
    ],
  },
  stack: {
    eyebrow: "Technology Stack",
    heading: "Retail Tech Stack",
    cols: [
      { head: "Frontend", items: ["Next.js", "React", "TypeScript", "Stripe.js"] },
      { head: "Commerce", items: ["WooCommerce", "Shopify", "Medusa.js", "Magento"] },
      { head: "Backend", items: ["Node.js", "PostgreSQL", "Redis", "Elasticsearch"] },
      { head: "Payments", items: ["Stripe", "Razorpay", "PayPal", "Klarna"] },
    ],
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Why Digital Web Weaver for Retail?",
    dark: true,
    items: [
      { icon: "⚡", title: "Conversion-First", desc: "Checkout flows designed to reduce abandonment, not win awards." },
      { icon: "🔗", title: "Omnichannel", desc: "Online, mobile, and POS connected with real-time inventory." },
      { icon: "🤖", title: "AI Recommendations", desc: "Product recommendations that measurably increase AOV." },
      { icon: "📊", title: "Retail Analytics", desc: "Sales, customer, and inventory dashboards built for buyers." },
    ],
  },
  faq: {
    heading: "Retail Software FAQ",
    items: [
      { q: "WooCommerce or Shopify for our store?", a: "Shopify for fast setup with managed hosting. WooCommerce for full ownership, customisation, and no transaction fees." },
      { q: "What is headless commerce?", a: "Headless separates the frontend (Next.js) from the commerce backend (Shopify/WooCommerce API). Faster UX, more design flexibility." },
      { q: "Can you build a loyalty program?", a: "Yes — points and tier systems, referral tracking, birthday rewards, and custom redemption flows." },
      { q: "Do you integrate with ERPs?", a: "Yes — inventory, order, and customer sync with SAP, NetSuite, Odoo, and custom ERPs via REST or EDI." },
    ],
  },
  cta: { heading: "Build Your Retail Platform", body: "Omnichannel, conversion-optimised, and built to scale." },
  related: [
    { label: "E-Commerce Development", href: "/ecommerce-development/", desc: "Custom e-commerce storefronts, WooCommerce, and headless commerce." },
    { label: "Shopify Development", href: "/shopify-development/", desc: "Custom Shopify stores with Razorpay, GST invoicing, and CRO-focused design." },
    { label: "WordPress Development", href: "/wordpress-development/", desc: "WooCommerce stores with Indian payment gateways and custom product types." },
  ],
  cases: [
    { tag: "Omnichannel · India", title: "ShopNest Omnichannel Platform", desc: "Headless Next.js storefront + custom OMS + POS integration for a mid-size fashion retailer. Unified inventory, real-time order routing, and a mobile-first buying experience.", metrics: [{ value: "3-in-1", label: "Storefront, OMS & POS" }], stack: ["Next.js", "Node.js", "Stripe"], bgClass: "c1" },
    { tag: "Inventory · UK", title: "RetailFlow Inventory Sync", desc: "Real-time multi-warehouse inventory across 5 storefronts and 2 marketplaces. Automated reorder logic, webhook-driven updates, and zero overselling across all channels.", metrics: [{ value: "5", label: "Storefronts synced" }, { value: "2", label: "Marketplaces" }], stack: ["Node.js", "PostgreSQL", "AWS"], bgClass: "c2" },
  ]
};

export const saasStartups: ServicePageData = {
  meta: {
    title: "SaaS & Startup Software Development | MVP Experts India",
    description: "SaaS and startup development: lean MVP delivery, multi-tenant architecture, subscription billing, growth features, and investor-ready products.",
  },
  prose: {
    eyebrow: "SaaS & Startups",
    heading: "Software Development for SaaS Startups",
    blocks: [
      { p: ["Software development for SaaS startups is a different discipline from building a brochure site — the architecture you choose in week one either survives your Series A or forces a painful rewrite. We build for founders and small product teams who need an investor-ready product fast: our team ships a working ", { text: "MVP", href: "/mvp-development/" }, " in 8–12 weeks, instrumented for product analytics from day one and structured so it scales instead of stalls. We are based in Vadodara, India, and deliver to startups across the UK, South Africa, and Ivory Coast — with the timezone overlap and weekly demos that keep a lean roadmap honest."] },
      { h3: "Multi-tenant architecture and billing that scale", p: ["The unglamorous decisions are what decide whether your SaaS survives growth. We design proper tenant isolation — schema-per-tenant or row-level security — before your first user signs up, and wire Stripe Billing for flat-rate, per-seat, usage-based, or hybrid pricing. Our ", { text: "SaaS development", href: "/saas-development/" }, " practice pairs that with deliberate ", { text: "database design", href: "/services/database-design/" }, " and auto-scaling infrastructure, so you are not firefighting Postgres or rate limits the week your traffic finally arrives. Next.js, Node.js, Auth0, and PostHog are the defaults — chosen because they let a small team move fast without technical debt."] },
      { h3: "From MVP to measured growth", p: ["Speed only counts if you can measure what happens next. We ship with event tracking baked in, then iterate on real activation and retention data rather than guesswork. When your roadmap calls for smarter features, we fold in ", { text: "AI automation", href: "/ai-automation/" }, " — LLM assistants, enrichment pipelines, and workflow automation — the same way we built a pitch-deck analyser and a lead-enrichment platform for founders abroad. See how those shipped in our ", { text: "portfolio", href: "/portfolio/" }, ", or tell us what you're building and we'll scope your MVP."] },
    ],
  },
  hero: {
    eyebrow: "SaaS & Startups",
    heading: "Build Your SaaS Faster Than Your Competitors",
    lead: "We partner with founders and product teams to ship investor-ready MVPs, scalable SaaS platforms, and growth-ready software — fast.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "SaaS & Startups" }],
    marqueeItems: ["MVP development", "SaaS architecture", "Multi-tenant", "Stripe billing", "AI features", "OpenAI", "LangChain", "RBAC", "Product analytics", "Series A", "Next.js"],
    stats: [{ value: "8–12wk", label: "MVP Delivery" }, { value: "Multi-Tenant", label: "Architecture" }, { value: "Stripe", label: "Billing Ready" }],
  },
  services: {
    variant: "svc",
    eyebrow: "What We Build",
    heading: "SaaS & Startup Software",
    items: [
      { icon: "🚀", title: "MVP Development", desc: "Core feature set shipped and investor-ready in 8–12 weeks." , tags: ["8–12 weeks","Full-stack"]},
      { icon: "🏗️", title: "SaaS Architecture", desc: "Multi-tenant, subscription billing, and team management." , tags: ["Multi-tenant","RBAC"]},
      { icon: "💳", title: "Billing & Subscriptions", desc: "Stripe Billing, usage-based pricing, and dunning management." , tags: ["Stripe","Payments"]},
      { icon: "📊", title: "Analytics & Growth", desc: "Product analytics, funnel tracking, and A/B testing." , tags: ["PostHog","Mixpanel"]},
      { icon: "🤝", title: "Onboarding Flows", desc: "Guided onboarding, in-app tours, and activation metrics." , tags: ["Activation","UX"]},
      { icon: "🔗", title: "Integration Marketplace", desc: "Webhooks, OAuth apps, and partner integrations." , tags: ["Webhooks","OAuth"]},
    ],
  },
  capabilities: {
    eyebrow: "Technical Depth",
    heading: "SaaS Capabilities",
    dark: true,
    items: [
      { icon: "🏗️", title: "Multi-Tenancy", desc: "Schema-per-tenant or shared-schema isolation patterns." },
      { icon: "💳", title: "Stripe Billing", desc: "Plans, coupons, trials, invoicing, and metered billing." },
      { icon: "🔒", title: "SSO & SAML", desc: "Enterprise SSO via Auth0, Okta, or custom SAML providers." },
      { icon: "📊", title: "Product Analytics", desc: "Mixpanel, PostHog, or custom event tracking pipelines." },
      { icon: "🤖", title: "AI Features", desc: "LLM integrations, AI assistants, and smart automation." },
      { icon: "⚡", title: "Scalable Infra", desc: "Auto-scaling, rate limiting, and global CDN from day one." },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "Startup Development Process",
    steps: [
      { title: "Lean Discovery", desc: "1-week sprint to validate scope, define MVP, and set milestones." },
      { title: "MVP Sprint", desc: "8–12 week MVP with weekly demos and investor-ready deliverables." },
      { title: "Launch & Measure", desc: "Ship, instrument, and measure user activation and retention." },
      { title: "Growth Iteration", desc: "Feature velocity based on user data and product metrics." },
    ],
  },
  stack: {
    eyebrow: "Technology Stack",
    heading: "SaaS Stack We Use",
    cols: [
      { head: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind"] },
      { head: "Backend", items: ["Node.js", "PostgreSQL", "Redis", "Prisma"] },
      { head: "SaaS Tools", items: ["Stripe", "Auth0", "PostHog", "Resend"] },
      { head: "Infra", items: ["Vercel", "AWS", "Docker", "GitHub Actions"] },
    ],
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Why Digital Web Weaver for Startups?",
    dark: true,
    items: [
      { icon: "🚀", title: "Startup Velocity", desc: "We ship MVPs in 8–12 weeks — not 6 months." },
      { icon: "💡", title: "Product Thinking", desc: "We challenge scope, not just execute requirements." },
      { icon: "📊", title: "Instrumented from Day 1", desc: "Analytics and event tracking built in before users arrive." },
      { icon: "🏗️", title: "Scale-Ready Architecture", desc: "Multi-tenant SaaS patterns that survive Series A growth." },
    ],
  },
  faq: {
    heading: "SaaS & Startup FAQ",
    items: [
      { q: "What's included in an 8-week MVP?", a: "Core user flows, auth, billing setup, one primary feature vertical, basic analytics, and a public-facing landing page." },
      { q: "How do you price SaaS billing?", a: "We integrate Stripe Billing — flat-rate plans, per-seat, usage-based, or hybrid pricing models all supported." },
      { q: "Can you build an enterprise-grade multi-tenant system?", a: "Yes — we design proper tenant isolation from the start. Schema-per-tenant for data isolation, or row-level security for shared schemas." },
      { q: "Do you help with product strategy?", a: "Yes — we offer product discovery sprints, competitive analysis, and feature prioritisation as part of our startup engagement." },
    ],
  },
  cta: { heading: "Build Your SaaS Product", body: "From idea to investor-ready in 8–12 weeks. Let's scope your MVP." },
  related: [
    { label: "SaaS Development", href: "/saas-development/", desc: "Multi-tenant SaaS architecture with Stripe billing, SSO, and analytics." },
    { label: "MVP Development", href: "/mvp-development/", desc: "Ship a validated product in 8–12 weeks — investor-ready from day one." },
    { label: "Web Application Development", href: "/web-application-development/", desc: "Complex web apps for post-MVP growth — portals, dashboards, and APIs." },
  ],
  cases: [
    { tag: "AI SaaS · Global", title: "Launchpad AI — Pitch Deck Analyser", desc: "AI-powered pitch deck analyser built from 0 to launch in 9 weeks. Raised $1.2M seed using the product demo. Stack: Next.js, Python, OpenAI, PostgreSQL.", metrics: [{ value: "9 wks", label: "Zero to launch" }, { value: "$1.2M", label: "Seed raised" }], stack: ["Next.js", "Python", "OpenAI"], bgClass: "c1" },
    { tag: "B2B SaaS · UK", title: "Growlabs — Lead Enrichment SaaS", desc: "Lead enrichment SaaS with usage-based billing, Stripe metering, and API for 3rd-party integrations. 10× API throughput improvement over initial prototype.", metrics: [{ value: "10x", label: "API throughput" }], stack: ["Node.js", "Stripe", "PostgreSQL"], bgClass: "c2" },
  ]
};
