import type { Metadata } from "next";
import Link from "next/link";
import ServicesFaq from "./ServicesFaq";

export const metadata: Metadata = {
  title: "Software Development Services — Web, Mobile, AI, Cloud & SaaS | Digital Web Weaver",
  description:
    "Full-spectrum custom software development services: React & Next.js, Node.js, Python, mobile apps, SaaS, MVPs, AI automation, cloud/DevOps, UI/UX design, and enterprise systems — delivered across India, UK, and South Africa.",
  alternates: { canonical: "/services/" },
  openGraph: { url: "/services/", type: "website" },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Software Development Services — Digital Web Weaver",
  description:
    "Full-spectrum custom software development: web, mobile, SaaS, AI, cloud, and design.",
  url: "https://digitalwebweaver.com/services/",
  publisher: { "@id": "https://digitalwebweaver.com/#organization" },
};

// ── Service pillars ──────────────────────────────────────────────────────────
const PILLARS = [
  {
    id: "engineering",
    eyebrow: "Foundation",
    heading: "Engineering & Development",
    blurb:
      "Full-stack web and API engineering — the core of everything we ship. From React frontends to Python microservices, we build software that scales without surprises.",
    alt: false,
    services: [
      {
        icon: "⚛️",
        name: "React / Next.js Development",
        desc: "Performance-first frontends with SSR, SSG, and App Router. We've shipped interfaces serving millions of sessions.",
        tags: ["React", "Next.js", "TypeScript"],
        href: "/react-developer/",
      },
      {
        icon: "💚",
        name: "Node.js & Backend APIs",
        desc: "REST and GraphQL APIs, real-time WebSocket services, and background workers — built to handle production load from day one.",
        tags: ["Node.js", "Express", "PostgreSQL"],
        href: "/nodejs-developer/",
      },
      {
        icon: "🐍",
        name: "Python Development",
        desc: "Data pipelines, Django/FastAPI backends, ML model serving, and scripting automation — wherever Python fits the problem.",
        tags: ["Python", "FastAPI", "Django"],
        href: "/python-developer/",
      },
      {
        icon: "🔌",
        name: "API Development",
        desc: "Designed, documented, and versioned APIs your team will enjoy maintaining. OpenAPI specs and SDK generation included.",
        tags: ["REST", "GraphQL", "OpenAPI"],
        href: "/services/api-development/",
      },
      {
        icon: "🗄️",
        name: "Database Design",
        desc: "Schema design, query optimisation, migration strategies, and indexing — so your data layer is never the bottleneck.",
        tags: ["PostgreSQL", "MySQL", "Redis"],
        href: "/services/database-design/",
      },
      {
        icon: "🧩",
        name: "Microservices",
        desc: "Decompose a monolith or build distributed from the start. Service contracts, event queues, and orchestration patterns handled.",
        tags: ["Docker", "RabbitMQ", "Kafka"],
        href: "/services/microservices/",
      },
    ],
  },
  {
    id: "product",
    eyebrow: "Launch",
    heading: "Product, SaaS & Growth",
    blurb:
      "From zero to shipped. We help founders and product teams validate fast, build right, and grow — whether it's a first MVP or a scaling SaaS platform.",
    alt: true,
    services: [
      {
        icon: "🚀",
        name: "MVP Development",
        desc: "Validate your idea in 6–12 weeks. We scope ruthlessly, build the smallest thing that proves the concept, and ship.",
        tags: ["Rapid Build", "User Testing", "Go-live"],
        href: "/mvp-development/",
      },
      {
        icon: "🏗️",
        name: "SaaS Development",
        desc: "Multi-tenant architecture, subscription billing, role-based auth, and the instrumentation you need to grow MRR.",
        tags: ["Stripe", "Auth", "Multi-tenant"],
        href: "/saas-development/",
      },
      {
        icon: "📱",
        name: "Mobile App Development",
        desc: "iOS and Android — native or cross-platform. Apps that feel native, perform offline, and pass App Store review first time.",
        tags: ["Flutter", "React Native", "iOS/Android"],
        href: "/mobile-app-development/",
      },
      {
        icon: "🛒",
        name: "E-Commerce Development",
        desc: "Custom storefronts, Shopify extensions, headless commerce, and payment integrations across every major gateway.",
        tags: ["Shopify", "WooCommerce", "Headless"],
        href: "/ecommerce-development/",
      },
      {
        icon: "🏛️",
        name: "CRM / ERP Systems",
        desc: "Bespoke business systems that fit your operations — not generic tools your team bends their process around.",
        tags: ["CRM", "ERP", "Workflows"],
        href: "/crm-erp-systems/",
      },
      {
        icon: "📲",
        name: "Progressive Web Apps",
        desc: "Offline-capable, installable, app-store-free. PWAs that close the gap between web and native for a fraction of the cost.",
        tags: ["PWA", "Service Workers", "Offline"],
        href: "/services/progressive-web-apps/",
      },
    ],
  },
  {
    id: "ai",
    eyebrow: "Intelligence",
    heading: "AI, Automation & Cloud",
    blurb:
      "Embed intelligence into your product and infrastructure — automating the repetitive, accelerating the complex, and scaling what matters.",
    alt: false,
    services: [
      {
        icon: "🤖",
        name: "AI & Automation",
        desc: "LLM integrations, agentic workflows, classification pipelines, and document intelligence built to stay reliable in production.",
        tags: ["OpenAI", "LangChain", "Agents"],
        href: "/ai-automation/",
      },
      {
        icon: "☁️",
        name: "Cloud & DevOps",
        desc: "CI/CD pipelines, container orchestration, infrastructure-as-code, and cost-optimised cloud on AWS, GCP, or Azure.",
        tags: ["AWS", "Docker", "Terraform"],
        href: "/cloud-devops/",
      },
      {
        icon: "🔗",
        name: "API Integrations",
        desc: "Connect your stack to any third-party system — Stripe, HubSpot, Salesforce, ERPs, payment gateways, and everything in between.",
        tags: ["Webhooks", "OAuth", "iPaaS"],
        href: "/services/api-integrations/",
      },
      {
        icon: "⚡",
        name: "Performance Optimisation",
        desc: "Lighthouse scores, Core Web Vitals, database query tuning, caching layers, and CDN strategies — visibly faster in days.",
        tags: ["Core Web Vitals", "Redis", "CDN"],
        href: "/services/performance-optimization/",
      },
      {
        icon: "🔄",
        name: "App Modernisation",
        desc: "Legacy system re-architecture. Strangler-fig rewrites, monolith decomposition, and cloud migration — zero-downtime where possible.",
        tags: ["Re-architecture", "Migration", "Legacy"],
        href: "/services/app-modernization/",
      },
      {
        icon: "🏢",
        name: "Enterprise Applications",
        desc: "Custom internal tools, workflow engines, and cross-department platforms built to enterprise security and compliance standards.",
        tags: ["SSO", "RBAC", "Audit Logs"],
        href: "/services/enterprise-applications/",
      },
    ],
  },
  {
    id: "design",
    eyebrow: "Craft",
    heading: "Design & Web Presence",
    blurb:
      "The layer users actually see. We design interfaces that convert, build sites that load fast, and create digital presences that win trust.",
    alt: true,
    services: [
      {
        icon: "🎨",
        name: "UI/UX Design",
        desc: "User research, wireframes, prototypes, and pixel-perfect Figma handoff. Design systems that keep your product consistent at scale.",
        tags: ["Figma", "UX Research", "Design System"],
        href: "/ui-ux-design/",
      },
      {
        icon: "🏗️",
        name: "Custom Web Apps",
        desc: "Complex, interactive web applications — dashboards, portals, booking systems, SaaS UIs — built with no off-the-shelf compromise.",
        tags: ["React", "Data-heavy", "Portals"],
        href: "/custom-web-apps/",
      },
      {
        icon: "🖥️",
        name: "Corporate Websites",
        desc: "Fast, accessible, SEO-optimised company sites that convert visitors into enquiries. CMS-powered and easy for your team to manage.",
        tags: ["CMS", "SEO", "Accessibility"],
        href: "/services/corporate-websites/",
      },
    ],
  },
];

const PROCESS = [
  {
    n: "01",
    title: "Discover",
    desc: "A focused 1–2 week scoping phase. We map requirements, flag risks, and produce a detailed spec and roadmap — not a vague estimate.",
    highlight: true,
  },
  {
    n: "02",
    title: "Design & Architect",
    desc: "Technical architecture decided before a line of code is written. Wireframes, data models, and API contracts agreed upfront.",
    highlight: false,
  },
  {
    n: "03",
    title: "Build in sprints",
    desc: "Two-week sprints with working demos at every end. You see real progress and give real feedback — no big-bang delivery surprises.",
    highlight: false,
  },
  {
    n: "04",
    title: "Launch & grow",
    desc: "Production deployment, monitoring setup, and a 30-day hypercare window. Ongoing retainers available for teams that want us in their corner.",
    highlight: false,
  },
];

const INDUSTRIES = [
  { icon: "🏥", label: "Healthcare" },
  { icon: "📚", label: "EdTech" },
  { icon: "🛒", label: "Retail & E-Commerce" },
  { icon: "💰", label: "Fintech" },
  { icon: "🚚", label: "Logistics" },
  { icon: "🌞", label: "Clean Energy" },
  { icon: "🏭", label: "Manufacturing" },
  { icon: "🏘️", label: "Real Estate" },
];

const TECH = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Flutter",
  "PostgreSQL", "MySQL", "Redis", "MongoDB", "AWS", "GCP", "Docker",
  "Kubernetes", "Terraform", "Stripe", "OpenAI", "LangChain", "Figma",
  "Shopify", "WordPress", "Laravel", "Django", "FastAPI", "React Native",
];

const WHY = [
  {
    icon: "🧠",
    title: "Senior-only delivery",
    body: "No juniors billed at senior rates. Every engagement is led by an engineer with 5+ years shipping products to production at scale.",
  },
  {
    icon: "🔍",
    title: "Transparent throughout",
    body: "Fortnightly demos, a shared project board, and a Slack channel in your workspace from day one. No status-update chasing.",
  },
  {
    icon: "🌍",
    title: "Time-zone flexible",
    body: "Core team spans UK, India, and South Africa — overlapping with business hours wherever you are, without the offshore handover friction.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="hero sec" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <span className="eyebrow">All Services</span>
          <h1
            style={{
              fontSize: "clamp(2.8rem,5.6vw,4.8rem)",
              maxWidth: 820,
              marginTop: 16,
              lineHeight: 1.01,
              letterSpacing: "-0.025em",
            }}
          >
            Build, launch, and scale —{" "}
            <span style={{ fontWeight: 300, fontFamily: "var(--body)" }}>
              from a single focused team
            </span>
          </h1>
          <p className="hero-sub" style={{ maxWidth: 520 }}>
            Digital Web Weaver delivers full-spectrum software development: web, mobile, APIs, cloud, AI, and design — across India, the UK, South Africa, and beyond.
          </p>
          <div className="hero-actions">
            <Link href="/contact/" className="btn btn-primary">
              Start a project <span className="arr">↗</span>
            </Link>
            <Link href="/portfolio/" className="btn btn-ghost">
              See our work
            </Link>
          </div>

          {/* stats strip */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              border: "1px solid var(--line)",
              borderRadius: 16,
              overflow: "hidden",
              maxWidth: 720,
              marginTop: 8,
            }}
          >
            {[
              { n: "8+", l: "Years shipping" },
              { n: "150+", l: "Projects delivered" },
              { n: "20+", l: "Specialist services" },
              { n: "4", l: "Continents served" },
            ].map((s, i) => (
              <div
                key={s.l}
                style={{
                  padding: "22px 20px",
                  borderRight: i < 3 ? "1px solid var(--line)" : undefined,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: "clamp(1.5rem,2.8vw,2.1rem)",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--faint)",
                    marginTop: 6,
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* scrolling tech strip */}
        <div className="marquee" style={{ marginTop: 60 }}>
          <div className="marquee-track">
            <span>{TECH.join("  ·  ")} &nbsp;·&nbsp; </span>
            <span>{TECH.join("  ·  ")} &nbsp;·&nbsp; </span>
          </div>
        </div>
      </section>

      {/* ── Service pillars ──────────────────────────────────────────── */}
      {PILLARS.map((pillar) => (
        <section
          key={pillar.id}
          className="sec"
          style={{ background: pillar.alt ? "var(--paper-2)" : undefined }}
        >
          <div className="wrap">
            <div className="sec-head">
              <div>
                <span className="eyebrow">{pillar.eyebrow}</span>
                <h2 style={{ marginTop: 12 }}>{pillar.heading}</h2>
              </div>
              <p>{pillar.blurb}</p>
            </div>

            <div className="svc-grid">
              {pillar.services.map((svc) => (
                <Link key={svc.href} href={svc.href} className="svc" style={{ textDecoration: "none" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
                    <div className="si" style={{ marginBottom: 0, fontSize: 20 }}>{svc.icon}</div>
                    <span style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--faint)", marginTop: 6, transition: "color .3s" }}>↗</span>
                  </div>
                  <h3 style={{ fontSize: 17.5, marginBottom: 10 }}>{svc.name}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65 }}>{svc.desc}</p>
                  <div className="svc-tags" style={{ marginTop: 20 }}>
                    {svc.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── How we work (dark) ───────────────────────────────────────── */}
      <section className="sec dark">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Our process</span>
              <h2 style={{ marginTop: 12 }}>
                How we turn a brief into a shipped product
              </h2>
            </div>
            <p style={{ color: "var(--on-dark-muted)" }}>
              No black-box development. Every engagement follows the same transparent, milestone-driven process — and you&apos;re involved throughout.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 14,
            }}
          >
            {PROCESS.map((step) => (
              <div
                key={step.n}
                style={{
                  padding: "36px 30px",
                  background: step.highlight ? "var(--accent)" : "var(--ink-2)",
                  border: "1px solid var(--line-dark)",
                  borderRadius: 16,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: step.highlight ? "rgba(255,255,255,.7)" : "var(--accent)",
                    marginBottom: 22,
                  }}
                >
                  {step.n}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: 22,
                    fontWeight: 600,
                    color: step.highlight ? "#fff" : "var(--on-dark)",
                    marginBottom: 12,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: 14.5,
                    color: step.highlight ? "rgba(255,255,255,.85)" : "var(--on-dark-muted)",
                    lineHeight: 1.65,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ────────────────────────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Industries</span>
              <h2 style={{ marginTop: 12 }}>Built for businesses across sectors</h2>
            </div>
            <p>
              We embed deeply in the domain — not just the code. Our team has shipped products in eight distinct verticals.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
              gap: 14,
            }}
          >
            {INDUSTRIES.map((ind) => (
              <div key={ind.label} className="ind">
                <span style={{ fontSize: 28 }}>{ind.icon}</span>
                <span>{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why DWW ───────────────────────────────────────────────────── */}
      <section className="sec" style={{ background: "var(--paper-2)", paddingTop: 0, paddingBottom: 80 }}>
        <div className="wrap">
          <div
            style={{
              border: "1px solid var(--line)",
              borderRadius: 20,
              padding: "52px 44px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 36,
            }}
          >
            {WHY.map((c) => (
              <div key={c.title}>
                <div style={{ fontSize: 30, marginBottom: 18 }}>{c.icon}</div>
                <h4
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: 19,
                    fontWeight: 600,
                    marginBottom: 10,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {c.title}
                </h4>
                <p style={{ fontSize: 14.5, color: "var(--muted)", lineHeight: 1.65 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 36 }}>
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 style={{ marginTop: 12 }}>Common questions</h2>
            </div>
          </div>
          <ServicesFaq />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta">
            <div className="cta-inner">
              <span className="eyebrow" style={{ color: "rgba(255,255,255,.75)" }}>
                Get started
              </span>
              <h2 style={{ marginTop: 14 }}>
                Not sure where to start? Let&apos;s figure it out together.
              </h2>
              <p>
                Tell us what you&apos;re building — or what&apos;s not working. A 30-minute call is usually enough to know whether we&apos;re the right fit, and what the path forward looks like.
              </p>
              <div className="cta-actions">
                <Link href="/contact/" className="btn btn-primary">
                  Book a free call <span className="arr">↗</span>
                </Link>
                <Link href="/portfolio/" className="btn btn-ghost">
                  See our work
                </Link>
              </div>
              <div className="cta-meta">
                <span>✓ No-commitment scoping call</span>
                <span>✓ Fixed-price or retainer options</span>
                <span>✓ Response within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
