import type { Metadata } from "next";
import Link from "next/link";
import CountStat from "@/components/ui/CountStat";

export const metadata: Metadata = {
  title: "Ready-Made Software Products",
  description:
    "Launch faster with Digital Web Weaver's pre-built software products. Production-ready SaaS templates, ERPs, and apps — customised and deployed in weeks, not months.",
  alternates: { canonical: "/products/" },
  openGraph: { url: "/products/", type: "website" },
};

export default function AppsPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb reveal">
            <Link href="/">Home</Link>
            <span className="sep">/</span>Pre-Built Software
          </div>
          <span className="eyebrow reveal">Products</span>
          <h1 className="reveal" style={{ marginTop: "18px", maxWidth: "820px" }}>
            Launch <span className="accent">faster</span> with
            <br />
            pre-built software
          </h1>
          <p className="lead reveal" style={{ maxWidth: "620px" }}>
            Skip months of boilerplate. Each product is production-ready, built on modern stack, white-label ready, and
            deployed with your branding in 2–4 weeks.
          </p>
          <div className="hero-stats reveal" style={{ maxWidth: "540px", marginTop: "32px" }}>
            <div className="hs">
              <CountStat target={7} suffix="" className="hn" />
              <div className="hl">Products</div>
            </div>
            <div className="hs">
              <div className="hn">2 wks</div>
              <div className="hl">Avg. launch</div>
            </div>
            <div className="hs">
              <CountStat target={60} suffix="%" className="hn" />
              <div className="hl">Cost savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== APPS GRID ===== */}
      <section className="sec" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="apps-grid">
            {/* App 1 */}
            <div className="app-card reveal">
              <div className="app-vis av-1">
                <div className="app-price-tag">From $4,999</div>
                <svg className="app-ic" viewBox="0 0 64 64" fill="none">
                  <rect width="64" height="64" rx="18" fill="rgba(236,65,23,.12)" />
                  <path d="M22 44V24h14M22 34h10" stroke="#ec4117" strokeWidth="2.6" strokeLinecap="round" />
                  <circle cx="42" cy="40" r="5" fill="rgba(236,65,23,.18)" stroke="#ec4117" strokeWidth="2.2" />
                </svg>
              </div>
              <div className="app-body">
                <span className="app-label">ERP &amp; Business OS</span>
                <h3>WebWeaver ERP</h3>
                <p>
                  End-to-end ERP covering HR, payroll, inventory, procurement, production, and executive dashboards.
                  Modular — deploy only the modules you need.
                </p>
                <div className="app-footer">
                  <div className="case-stack">
                    <span>Laravel</span>
                    <span>Vue.js</span>
                    <span>MySQL</span>
                  </div>
                  <Link href="/contact" className="app-cta-link">Get a demo ↗</Link>
                </div>
              </div>
            </div>

            {/* App 2 */}
            <div className="app-card reveal">
              <div className="app-vis av-2">
                <div className="app-price-tag">From $3,499</div>
                <svg className="app-ic" viewBox="0 0 64 64" fill="none">
                  <rect width="64" height="64" rx="18" fill="rgba(43,72,255,.1)" />
                  <path d="M20 44V24l12-6 12 6v20" stroke="#2b48ff" strokeWidth="2.2" strokeLinejoin="round" />
                  <path d="M26 44v-8h8v8" stroke="#2b48ff" strokeWidth="2.2" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="app-body">
                <span className="app-label">Real estate</span>
                <h3>PropNest CRM</h3>
                <p>
                  CRM built for real estate — lead management, automated follow-ups, pipeline tracking, commission
                  calculations, and a white-label buyer portal.
                </p>
                <div className="app-footer">
                  <div className="case-stack">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>PostgreSQL</span>
                  </div>
                  <Link href="/contact" className="app-cta-link">Get a demo ↗</Link>
                </div>
              </div>
            </div>

            {/* App 3 */}
            <div className="app-card reveal">
              <div className="app-vis av-3">
                <div className="app-price-tag">From $3,999</div>
                <svg className="app-ic" viewBox="0 0 64 64" fill="none">
                  <rect width="64" height="64" rx="18" fill="rgba(31,107,77,.12)" />
                  <path
                    d="M32 18c-8 0-13 5-13 10 0 7 13 18 13 18s13-11 13-18c0-5-5-10-13-10z"
                    stroke="#1f6b4d"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                  <circle cx="32" cy="28" r="3.5" stroke="#1f6b4d" strokeWidth="2" />
                </svg>
              </div>
              <div className="app-body">
                <span className="app-label">Logistics</span>
                <h3>LogiCore TMS</h3>
                <p>
                  Transport management system with route optimisation, live GPS tracking, fuel monitoring, driver
                  payroll, and a client dispatch portal. B2B-ready.
                </p>
                <div className="app-footer">
                  <div className="case-stack">
                    <span>React Native</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                  </div>
                  <Link href="/contact" className="app-cta-link">Get a demo ↗</Link>
                </div>
              </div>
            </div>

            {/* App 4 */}
            <div className="app-card reveal">
              <div className="app-vis av-4">
                <div className="app-price-tag">From $5,499</div>
                <svg className="app-ic" viewBox="0 0 64 64" fill="none">
                  <rect width="64" height="64" rx="18" fill="rgba(236,65,23,.08)" />
                  <circle cx="32" cy="32" r="13" stroke="#ec4117" strokeWidth="2" />
                  <path d="M28 26h2v12M34 26h2v6M28 38h8" stroke="#ec4117" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="app-body">
                <span className="app-label">HealthTech</span>
                <h3>MedConnect Telehealth</h3>
                <p>
                  HIPAA-compliant telemedicine platform. Video consultations via WebRTC, e-prescriptions, EHR,
                  appointment scheduling, billing, and a patient portal.
                </p>
                <div className="app-footer">
                  <div className="case-stack">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>WebRTC</span>
                    <span>AWS</span>
                  </div>
                  <Link href="/contact" className="app-cta-link">Get a demo ↗</Link>
                </div>
              </div>
            </div>

            {/* App 5 */}
            <div className="app-card reveal">
              <div className="app-vis av-5">
                <div className="app-price-tag">From $2,999</div>
                <svg className="app-ic" viewBox="0 0 64 64" fill="none">
                  <rect width="64" height="64" rx="18" fill="rgba(43,76,255,.1)" />
                  <path
                    d="M22 10v6M42 10v6M18 22h28M18 16h28a2 2 0 012 2v28a2 2 0 01-2 2H18a2 2 0 01-2-2V18a2 2 0 012-2z"
                    stroke="#2b4cff"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M24 32h6v6h-6zM34 32h6v6h-6z" stroke="#2b4cff" strokeWidth="1.8" />
                </svg>
              </div>
              <div className="app-body">
                <span className="app-label">EdTech</span>
                <h3>LearnVault LMS</h3>
                <p>
                  Full learning management system — live sessions, recorded courses, quizzes, grade tracking,
                  certificates, compliance reporting, and a mobile learner app.
                </p>
                <div className="app-footer">
                  <div className="case-stack">
                    <span>Next.js</span>
                    <span>PostgreSQL</span>
                    <span>AWS</span>
                  </div>
                  <Link href="/contact" className="app-cta-link">Get a demo ↗</Link>
                </div>
              </div>
            </div>

            {/* App 6 */}
            <div className="app-card reveal">
              <div className="app-vis av-6">
                <div className="app-price-tag">From $3,200</div>
                <svg className="app-ic" viewBox="0 0 64 64" fill="none">
                  <rect width="64" height="64" rx="18" fill="rgba(236,65,23,.1)" />
                  <circle cx="24" cy="34" r="6" stroke="#ec4117" strokeWidth="2.2" />
                  <circle cx="40" cy="30" r="6" stroke="#ec4117" strokeWidth="2.2" />
                  <path d="M30 34c1 2 4 3 6 1" stroke="#ec4117" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="app-body">
                <span className="app-label">Food &amp; F&amp;B</span>
                <h3>OrderFlow POS</h3>
                <p>
                  Restaurant POS system with table management, online ordering, kitchen display, loyalty points,
                  multi-branch dashboards, and end-of-day financial reports.
                </p>
                <div className="app-footer">
                  <div className="case-stack">
                    <span>React Native</span>
                    <span>Node.js</span>
                    <span>PostgreSQL</span>
                  </div>
                  <Link href="/contact" className="app-cta-link">Get a demo ↗</Link>
                </div>
              </div>
            </div>

            {/* App 7 */}
            <div className="app-card reveal">
              <div className="app-vis av-7">
                <div className="app-price-tag">From $4,299</div>
                <svg className="app-ic" viewBox="0 0 64 64" fill="none">
                  <rect width="64" height="64" rx="18" fill="rgba(31,107,77,.1)" />
                  <rect x="16" y="20" width="32" height="24" rx="4" stroke="#1f6b4d" strokeWidth="2.2" />
                  <path d="M22 32h20M16 27h32" stroke="#1f6b4d" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="32" cy="38" r="2.5" fill="#1f6b4d" />
                </svg>
              </div>
              <div className="app-body">
                <span className="app-label">FinTech / B2B</span>
                <h3>SettleFlow — Payments</h3>
                <p>
                  B2B payment and invoicing platform. Recurring billing, payment links, PDF invoices, multi-currency,
                  reconciliation, and a client-facing payment portal.
                </p>
                <div className="app-footer">
                  <div className="case-stack">
                    <span>Next.js</span>
                    <span>Python</span>
                    <span>Stripe</span>
                    <span>PostgreSQL</span>
                  </div>
                  <Link href="/contact" className="app-cta-link">Get a demo ↗</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">How it works</span>
              <h2 style={{ marginTop: "18px" }}>
                From demo to live
                <br />
                in under 4 weeks
              </h2>
            </div>
            <p>
              We don&apos;t sell licences. We deploy, customise, and hand over a production system you own entirely.
            </p>
          </div>
          <div className="psteps reveal">
            <div className="pstep">
              <div className="ps-n">01</div>
              <div>
                <h4>Pick your product — 1 day</h4>
                <p>
                  Schedule a 30-minute demo. We walk through the product, identify customisations, and give you a fixed
                  price and timeline.
                </p>
              </div>
            </div>
            <div className="pstep">
              <div className="ps-n">02</div>
              <div>
                <h4>Customisation sprint — 1–2 weeks</h4>
                <p>
                  We brand it, configure your modules, wire in your integrations, and load your seed data. You get daily
                  progress updates.
                </p>
              </div>
            </div>
            <div className="pstep">
              <div className="ps-n">03</div>
              <div>
                <h4>UAT and training — 3–5 days</h4>
                <p>
                  Your team tests everything on a staging environment. We run a training session and fix any outstanding
                  issues.
                </p>
              </div>
            </div>
            <div className="pstep">
              <div className="ps-n">04</div>
              <div>
                <h4>Launch and handover — day 1</h4>
                <p>
                  We deploy to production, configure your domain, and hand over the full source code. You own it
                  outright — no licence fees, ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DARK — WHY PRE-BUILT ===== */}
      <section className="dark sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow on-dark">The case for pre-built</span>
              <h2 style={{ marginTop: "18px", color: "var(--on-dark)" }}>
                Custom speed,
                <br />
                product quality
              </h2>
            </div>
            <p>Pre-built doesn&apos;t mean off-the-shelf. Our products have been battle-tested across 50+ real deployments.</p>
          </div>
          <div className="why-grid">
            <div className="why reveal">
              <div className="wi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="4" width="18" height="18" rx="3" />
                  <path d="M3 10h18M9 4v2M15 4v2" />
                </svg>
              </div>
              <h3>2–4 week deployment</h3>
              <p>
                Skip 4–6 months of custom build. Our products are fully code-complete; your time is spent on
                configuration, not architecture.
              </p>
            </div>
            <div className="why reveal">
              <div className="wi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 17l6-6 4 4 6-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>60% lower cost</h3>
              <p>
                You pay for customisation and deployment, not for rebuilding infrastructure from scratch. The savings
                compound over the project lifecycle.
              </p>
            </div>
            <div className="why reveal">
              <div className="wi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Production-proven</h3>
              <p>
                Every product in this catalogue has been deployed in at least 5 real client environments. The edge cases
                and bugs have already been found.
              </p>
            </div>
            <div className="why reveal">
              <div className="wi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M8 6L3 12l5 6M16 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Full source ownership</h3>
              <p>
                You receive the complete source code at handover. No SaaS subscriptions, no vendor lock-in, no licence
                negotiations. It&apos;s yours.
              </p>
            </div>
            <div className="why reveal">
              <div className="wi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Fully customisable</h3>
              <p>
                Branding, modules, integrations, workflows — everything can be changed. We regularly extend products
                beyond their base configuration.
              </p>
            </div>
            <div className="why reveal">
              <div className="wi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 17l-5.5 2.8 1-6.3L3 8.9 9 8z" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>12-month support</h3>
              <p>
                Every deployment includes 12 months of bug-fix support and a dedicated Slack channel. Extensions and new
                features are quoted separately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section>
        <div className="wrap">
          <div className="cta reveal">
            <div className="cta-inner">
              <span className="eyebrow" style={{ color: "rgba(255,255,255,.85)" }}>
                Get started
              </span>
              <h2 style={{ marginTop: "18px" }}>Ready to see one in action?</h2>
              <p>
                Book a 30-minute product demo. We&apos;ll walk you through the one that fits your use case, answer
                technical questions, and give you a fixed deployment quote.
              </p>
              <div className="cta-actions">
                <Link href="/contact" className="btn btn-primary">
                  Book a product demo <span className="arr">↗</span>
                </Link>
                <Link href="/portfolio" className="btn btn-ghost">
                  See client case studies
                </Link>
              </div>
              <div className="cta-meta">
                <span>● Free demo</span>
                <span>● Fixed price + timeline</span>
                <span>● You own the source code</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
