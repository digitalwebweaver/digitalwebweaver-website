import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technology Stack — Web, Mobile, AI & Cloud Technologies",
  description:
    "Digital Web Weaver's full technology stack: React, Next.js, Node.js, Python, Flutter, AWS, PostgreSQL, and AI/ML tools. Production-proven technologies chosen for the right reasons on every project.",
  alternates: { canonical: "/stack/" },
  openGraph: { url: "/stack/", type: "website" },
  keywords: [
    "technology stack software development",
    "React Next.js development company India",
    "Node.js Python development",
    "Flutter mobile app development",
    "AWS cloud infrastructure India",
    "PostgreSQL MongoDB database development",
    "AI ML development stack",
    "full stack development India",
  ],
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Technology Stack — Digital Web Weaver",
  description:
    "Full technology matrix used by Digital Web Weaver: frontend, backend, mobile, cloud, databases, and AI/ML — chosen for the right reasons on every project.",
  url: "https://digitalwebweaver.com/stack/",
  publisher: { "@id": "https://digitalwebweaver.com/#organization" },
};

const CATEGORIES = [
  {
    icon: "⚛️",
    label: "Frontend Frameworks",
    eyebrow: "UI & Web",
    desc: "We build fast, accessible, and interactive frontends using battle-tested frameworks. Our default is React / Next.js for most projects — but we match the framework to the use case.",
    items: [
      { name: "React 18", note: "Our primary choice for SPAs, dashboards, and complex UIs" },
      { name: "Next.js 14", note: "SSR, SSG, and App Router — for SEO-critical and performance-first sites" },
      { name: "Vue 3 / Nuxt 3", note: "Preferred when the team or project already has Vue context" },
      { name: "Angular 17", note: "Enterprise portals requiring strict structure and DI" },
      { name: "TypeScript", note: "Mandatory on all frontend work — no untyped JavaScript in production" },
    ],
    href: "/react-developer/",
    cta: "React development →",
  },
  {
    icon: "🔧",
    label: "Backend & APIs",
    eyebrow: "Server & Logic",
    desc: "We build backends that are maintainable, observable, and performant from day one. Language choice depends on team expertise, performance requirements, and data complexity.",
    items: [
      { name: "Node.js / Express / Fastify", note: "Fast APIs, real-time systems, and BFF layers" },
      { name: "Python / FastAPI", note: "AI integrations, data-heavy APIs, and rapid backend iteration" },
      { name: "Django / Django REST", note: "Admin-heavy apps and regulated industries needing ORM depth" },
      { name: "Laravel / PHP", note: "CMS-backed platforms and when the client's team knows PHP" },
      { name: "Go", note: "High-throughput microservices where latency is a hard constraint" },
    ],
    href: "/nodejs-developer/",
    cta: "Backend development →",
  },
  {
    icon: "🗄️",
    label: "Databases & Storage",
    eyebrow: "Data Layer",
    desc: "The right database for the right data shape. We don't default to one solution — we model the data first, then pick the engine.",
    items: [
      { name: "PostgreSQL", note: "Our default relational database — ACID, JSONB, and full-text search built in" },
      { name: "MySQL / MariaDB", note: "Legacy-compatible projects and high-read e-commerce workloads" },
      { name: "MongoDB", note: "Document-heavy apps with rapidly evolving schemas" },
      { name: "Redis", note: "Caching, rate limiting, pub/sub, and session storage" },
      { name: "ClickHouse", note: "Analytics and time-series data requiring sub-second aggregations" },
      { name: "Elasticsearch", note: "Full-text search, log aggregation, and faceted filtering" },
    ],
    href: "/services/database-design/",
    cta: "Database design →",
  },
  {
    icon: "☁️",
    label: "Cloud & DevOps",
    eyebrow: "Infrastructure",
    desc: "We deploy on whichever cloud fits the project — and we build infrastructure that's reproducible, monitored, and cost-efficient from the first deploy.",
    items: [
      { name: "AWS", note: "Primary cloud — EC2, ECS, RDS, S3, CloudFront, Lambda" },
      { name: "GCP", note: "Data-heavy workloads and when BigQuery or Vertex AI is in scope" },
      { name: "Docker", note: "Containerised on every project — local parity with production" },
      { name: "Kubernetes / Helm", note: "Multi-service deployments at scale" },
      { name: "Terraform / Pulumi", note: "Infrastructure-as-code — version-controlled, reproducible envs" },
      { name: "GitHub Actions / GitLab CI", note: "CI/CD on all projects — lint, test, build, deploy on every push" },
    ],
    href: "/cloud-devops/",
    cta: "Cloud & DevOps →",
  },
  {
    icon: "📱",
    label: "Mobile Development",
    eyebrow: "iOS & Android",
    desc: "We deliver mobile apps that feel native, work offline, and pass app store review the first time. Cross-platform when the budget fits; native when performance demands it.",
    items: [
      { name: "Flutter", note: "Our preferred cross-platform framework — one codebase, native performance" },
      { name: "React Native", note: "When the team has React expertise and web/mobile code sharing is a priority" },
      { name: "Swift / SwiftUI", note: "Native iOS when the app demands platform-specific depth" },
      { name: "Kotlin / Jetpack Compose", note: "Native Android for hardware-integration and performance-critical apps" },
    ],
    href: "/mobile-app-development/",
    cta: "Mobile development →",
  },
  {
    icon: "🤖",
    label: "AI & Machine Learning",
    eyebrow: "Intelligence",
    desc: "We integrate AI where it delivers measurable value — not as a feature checkbox. LLM integrations, classification pipelines, document processing, and predictive models all ship with proper evaluation and fallback logic.",
    items: [
      { name: "OpenAI API / GPT-4o", note: "LLM integrations, RAG, structured output, and function calling" },
      { name: "Claude API (Anthropic)", note: "Long-context tasks, document understanding, and safer AI outputs" },
      { name: "LangChain / LlamaIndex", note: "RAG pipelines, agent orchestration, and vector retrieval" },
      { name: "Hugging Face", note: "Open-source model fine-tuning and self-hosted inference" },
      { name: "Pinecone / pgvector", note: "Vector databases for semantic search and embedding storage" },
      { name: "PyTorch / scikit-learn", note: "Custom ML model training and evaluation" },
    ],
    href: "/ai-automation/",
    cta: "AI development →",
  },
];

const PRINCIPLES = [
  {
    n: "01",
    title: "Requirements first, tools second",
    desc: "We never choose a technology because it's new or trending. Every choice is justified by the project's performance, scalability, and team constraints.",
  },
  {
    n: "02",
    title: "Boring is good in production",
    desc: "We favour well-supported, widely-understood tools over cutting-edge ones that haven't been battle-tested. Stability beats novelty when real users are depending on it.",
  },
  {
    n: "03",
    title: "Your team must be able to maintain it",
    desc: "We document architecture decisions and favour technologies your team can hire for after we're done. No black-box frameworks that only we understand.",
  },
  {
    n: "04",
    title: "Observability from day one",
    desc: "Every project ships with logging, error tracking, and metrics. You should never be the last to know when something breaks.",
  },
];

const FAQS = [
  {
    q: "Do you lock clients into a specific technology stack?",
    a: "Never. We recommend a stack based on your requirements, timeline, and team — and we document every architectural decision so you can hire any developer to maintain it after launch.",
  },
  {
    q: "Can you work with our existing tech stack?",
    a: "Yes. If you already have a codebase or preferred languages, we integrate with what you have. We've extended apps built in Laravel, Django, Ruby on Rails, and .NET — whatever the project needs.",
  },
  {
    q: "Do you use open-source or paid/proprietary tools?",
    a: "Both — we use whatever is the right tool. We strongly prefer open-source for core infrastructure (Postgres, Redis, Docker) and are selective about SaaS dependencies that create vendor lock-in.",
  },
  {
    q: "Which cloud provider do you recommend?",
    a: "AWS for most projects due to ecosystem depth and regional availability in India and the UK. GCP when the project involves BigQuery, Vertex AI, or heavy data workloads. We avoid vendor lock-in by using Terraform to keep infrastructure portable.",
  },
];

export default function StackPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="hero sec" style={{ paddingBottom: 48 }}>
        <div className="wrap">
          <span className="eyebrow">Tech Stack</span>
          <h1 style={{ fontSize: "clamp(2.6rem,5vw,4.4rem)", maxWidth: 760, marginTop: 16, lineHeight: 1.02 }}>
            Production-proven technologies —{" "}
            <span style={{ fontWeight: 300, fontFamily: "var(--body)" }}>chosen for your project, not ours</span>
          </h1>
          <p className="hero-sub" style={{ maxWidth: 540 }}>
            We pick the right tool for each job — not the trendiest one. Here&apos;s the full stack we use across web, mobile, cloud, and AI projects, and why we chose each one.
          </p>
          <div className="hero-actions">
            <Link href="/contact/" className="btn btn-primary">
              Discuss your stack <span className="arr">↗</span>
            </Link>
            <Link href="/services/" className="btn btn-ghost">All services</Link>
          </div>
        </div>
      </section>

      {/* ── Tech categories ──────────────────────────────────────────── */}
      {CATEGORIES.map((cat, ci) => (
        <section key={cat.label} className="sec" style={{ background: ci % 2 === 1 ? "var(--paper-2)" : undefined }}>
          <div className="wrap">
            <div className="sec-head" style={{ marginBottom: 40 }}>
              <div>
                <span className="eyebrow">{cat.eyebrow}</span>
                <h2 style={{ marginTop: 12, fontSize: "clamp(1.8rem,3.2vw,2.6rem)" }}>
                  {cat.icon} {cat.label}
                </h2>
              </div>
              <p style={{ maxWidth: 400 }}>{cat.desc}</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 14 }}>
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  style={{
                    border: "1px solid var(--line)",
                    borderRadius: 14,
                    padding: "20px 22px",
                    background: ci % 2 === 1 ? "var(--paper)" : "var(--paper-2)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <div style={{ fontFamily: "var(--display)", fontSize: 15.5, fontWeight: 600, letterSpacing: "-0.01em" }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.55 }}>
                    {item.note}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 28 }}>
              <Link href={cat.href} style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--accent)", letterSpacing: ".04em", display: "inline-flex", alignItems: "center", gap: 6 }}>
                {cat.cta}
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* ── How we choose (dark) ─────────────────────────────────────── */}
      <section className="sec dark">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Our philosophy</span>
              <h2 style={{ marginTop: 12 }}>How we choose what to build with</h2>
            </div>
            <p style={{ color: "var(--on-dark-muted)" }}>
              Every technology decision in a project involves trade-offs. Here are the four principles that guide every choice we make.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 14 }}>
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.n}
                style={{
                  padding: "32px 28px",
                  background: i === 0 ? "var(--accent)" : "var(--ink-2)",
                  border: "1px solid var(--line-dark)",
                  borderRadius: 16,
                }}
              >
                <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: i === 0 ? "rgba(255,255,255,.7)" : "var(--accent)", marginBottom: 20 }}>
                  {p.n}
                </div>
                <h3 style={{ fontFamily: "var(--display)", fontSize: 19, fontWeight: 600, color: i === 0 ? "#fff" : "var(--on-dark)", marginBottom: 12, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 14, color: i === 0 ? "rgba(255,255,255,.85)" : "var(--on-dark-muted)", lineHeight: 1.65 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 40 }}>
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 style={{ marginTop: 12 }}>Common questions about our tech choices</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 14, maxWidth: 960 }}>
            {FAQS.map((faq) => (
              <div key={faq.q} style={{ border: "1px solid var(--line)", borderRadius: 14, padding: "24px 26px", background: "var(--paper-2)" }}>
                <h4 style={{ fontFamily: "var(--display)", fontSize: 16.5, fontWeight: 600, marginBottom: 12, letterSpacing: "-0.01em", lineHeight: 1.3 }}>
                  {faq.q}
                </h4>
                <p style={{ fontSize: 14.5, color: "var(--muted)", lineHeight: 1.65 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta">
            <div className="cta-inner">
              <span className="eyebrow" style={{ color: "rgba(255,255,255,.75)" }}>Start a project</span>
              <h2 style={{ marginTop: 14 }}>Have a stack in mind? Or need a recommendation?</h2>
              <p>
                Tell us what you&apos;re building and we&apos;ll recommend the right technology for your requirements, timeline, and budget — no jargon, no upsell.
              </p>
              <div className="cta-actions">
                <Link href="/contact/" className="btn btn-primary">
                  Talk to an engineer <span className="arr">↗</span>
                </Link>
                <Link href="/services/" className="btn btn-ghost">Browse all services</Link>
              </div>
              <div className="cta-meta">
                <span>✓ Free technical consultation</span>
                <span>✓ Architecture advice included</span>
                <span>✓ No commitment required</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
