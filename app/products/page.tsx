import type { Metadata } from "next";
import Link from "next/link";
import CountStat from "@/components/ui/CountStat";
import { readyApps } from "@/data/pages/products/readyAppsList";

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
              <CountStat target={16} suffix="" className="hn" />
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
            {readyApps.map((app, i) => (
              <Link key={app.href} href={app.href} className="app-card reveal">
                <div className={`app-vis av-${(i % 7) + 1}`}>
                  <div className="app-price-tag">Ready to deploy</div>
                  <span className="app-emoji">{app.icon}</span>
                </div>
                <div className="app-body">
                  <span className="app-label">{app.category}</span>
                  <h3>{app.name}</h3>
                  <p>{app.desc}</p>
                  <div className="app-footer">
                    <div className="case-stack">
                      {app.stack.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                    <span className="app-cta-link">View product ↗</span>
                  </div>
                </div>
              </Link>
            ))}
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
