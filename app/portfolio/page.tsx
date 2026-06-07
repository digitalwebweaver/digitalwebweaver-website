import type { Metadata } from "next";
import Link from "next/link";
import PortfolioFilters from "./PortfolioFilters";
import CountStat from "@/components/ui/CountStat";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "200+ systems built. Explore Digital Web Weaver's portfolio of real projects — SaaS platforms, ERPs, mobile apps, AI systems, and enterprise software.",
  alternates: { canonical: "/portfolio/" },
  openGraph: { url: "/portfolio/", type: "website" },
};

export default function PortfolioPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb reveal">
            <Link href="/">Home</Link>
            <span className="sep">/</span>Portfolio
          </div>
          <span className="eyebrow reveal">Selected work</span>
          <h1
            className="reveal"
            style={{ marginTop: "18px", maxWidth: "820px" }}
          >
            <span className="accent">200+</span> systems built.
            <br />
            Real results. Real clients.
          </h1>
          <p className="lead reveal" style={{ marginBottom: "32px" }}>
            From two-person startups to global enterprises — every system we
            ship is production-grade, documented, and built to last.
          </p>
          <div className="hero-stats reveal" style={{ maxWidth: "600px" }}>
            <div className="hs">
              <CountStat target={200} suffix="+" className="hn" />
              <div className="hl">Systems shipped</div>
            </div>
            <div className="hs">
              <CountStat target={15} suffix="" className="hn" />
              <div className="hl">Countries</div>
            </div>
            <div className="hs">
              <CountStat target={8} suffix="+" className="hn" />
              <div className="hl">Industries</div>
            </div>
            <div className="hs">
              <CountStat target={98} suffix="%" className="hn" />
              <div className="hl">On-time delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECT GRID ===== */}
      <section className="sec" style={{ paddingTop: "32px" }}>
        <div className="wrap">
          {/* Interactive Filters */}
          <PortfolioFilters />

          {/* Cards */}
          <div className="port-grid">
            {/* Row 1 */}
            <div className="case reveal">
              <div className="case-top c3">
                <span className="case-tag">Manufacturing · ERP</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <path
                    d="M3 21V9l6 4V9l6 4V9l6 4v8z"
                    strokeLinejoin="round"
                  />
                  <path d="M7 21v-3M12 21v-3M17 21v-3" />
                </svg>
              </div>
              <div className="case-body">
                <h3>ManufacturIQ — smart ERP</h3>
                <p>
                  End-to-end ERP for a mid-size manufacturer. Replaced a
                  15-year-old legacy system with production scheduling,
                  inventory, procurement, HR, and executive dashboards.
                </p>
                <div className="case-metrics">
                  <div className="cm-i">
                    <div className="m">40%</div>
                    <div className="ml">Cost reduction</div>
                  </div>
                  <div className="cm-i">
                    <div className="m">3×</div>
                    <div className="ml">Faster reports</div>
                  </div>
                  <div className="cm-i">
                    <div className="m">India</div>
                    <div className="ml">Client</div>
                  </div>
                </div>
                <div className="case-stack">
                  <span>Laravel</span>
                  <span>Vue.js</span>
                  <span>MySQL</span>
                  <span>Docker</span>
                </div>
              </div>
            </div>

            <div className="case reveal">
              <div className="case-top c1">
                <span className="case-tag">Mobile · Logistics</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <rect x="1" y="6" width="14" height="11" rx="1" />
                  <path d="M15 9h4l3 3v5h-7" strokeLinejoin="round" />
                  <circle cx="6" cy="18" r="1.6" />
                  <circle cx="17" cy="18" r="1.6" />
                </svg>
              </div>
              <div className="case-body">
                <h3>Fleet dispatch platform</h3>
                <p>
                  Real-time booking and GPS tracking for a B2B cab operator.
                  Cut dispatch time by 40% across 2,000 daily trips with React
                  Native apps for drivers and dispatchers.
                </p>
                <div className="case-metrics">
                  <div className="cm-i">
                    <div className="m">40%</div>
                    <div className="ml">Dispatch time cut</div>
                  </div>
                  <div className="cm-i">
                    <div className="m">2,000</div>
                    <div className="ml">Daily trips</div>
                  </div>
                  <div className="cm-i">
                    <div className="m">India</div>
                    <div className="ml">Client</div>
                  </div>
                </div>
                <div className="case-stack">
                  <span>React Native</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>

            <div className="case reveal">
              <div className="case-top c2">
                <span className="case-tag">SaaS · EdTech</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <path
                    d="M22 10v6M2 10l10-5 10 5-10 5z"
                    strokeLinejoin="round"
                  />
                  <path d="M6 12v5c3 2 9 2 12 0v-5" />
                </svg>
              </div>
              <div className="case-body">
                <h3>Learning management system</h3>
                <p>
                  Full LMS with live sessions, grade tracking, and compliance
                  reporting. Serving 50k students across three regions with
                  real-time video, assignments, and progress dashboards.
                </p>
                <div className="case-metrics">
                  <div className="cm-i">
                    <div className="m">50k</div>
                    <div className="ml">Students</div>
                  </div>
                  <div className="cm-i">
                    <div className="m">3</div>
                    <div className="ml">Regions</div>
                  </div>
                  <div className="cm-i">
                    <div className="m">UK</div>
                    <div className="ml">Client</div>
                  </div>
                </div>
                <div className="case-stack">
                  <span>Next.js</span>
                  <span>PostgreSQL</span>
                  <span>AWS</span>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="case reveal">
              <div
                className="case-top"
                style={{
                  background: "linear-gradient(140deg,#fde8d8,#fbd0b8)",
                }}
              >
                <span className="case-tag">FinTech · Web</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <path d="M3 21V10l9-7 9 7v11" strokeLinejoin="round" />
                  <path d="M9 21v-6h6v6" />
                </svg>
              </div>
              <div className="case-body">
                <h3>B2B lending platform</h3>
                <p>
                  Loan origination, KYC/AML automation, credit scoring engine,
                  and a borrower portal for a UK fintech startup. Fully PCI-DSS
                  and FCA compliant from day one.
                </p>
                <div className="case-metrics">
                  <div className="cm-i">
                    <div className="m">£2M+</div>
                    <div className="ml">Loans processed</div>
                  </div>
                  <div className="cm-i">
                    <div className="m">98%</div>
                    <div className="ml">Uptime</div>
                  </div>
                  <div className="cm-i">
                    <div className="m">UK</div>
                    <div className="ml">Client</div>
                  </div>
                </div>
                <div className="case-stack">
                  <span>React</span>
                  <span>Python</span>
                  <span>PostgreSQL</span>
                  <span>AWS</span>
                </div>
              </div>
            </div>

            <div className="case reveal">
              <div
                className="case-top"
                style={{
                  background: "linear-gradient(140deg,#e2ddec,#d6cfe4)",
                }}
              >
                <span className="case-tag">CRM · Real estate</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <path d="M3 4h18l-7 8v7l-4 2v-9z" />
                </svg>
              </div>
              <div className="case-body">
                <h3>PropNest — real estate CRM</h3>
                <p>
                  Custom CRM for a 500-agent real estate firm. Lead management,
                  automated follow-ups, commission tracking, and a buyer portal
                  that cut sales closure time by 60%.
                </p>
                <div className="case-metrics">
                  <div className="cm-i">
                    <div className="m">500+</div>
                    <div className="ml">Agents</div>
                  </div>
                  <div className="cm-i">
                    <div className="m">60%</div>
                    <div className="ml">Faster closure</div>
                  </div>
                  <div className="cm-i">
                    <div className="m">UAE</div>
                    <div className="ml">Client</div>
                  </div>
                </div>
                <div className="case-stack">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>PostgreSQL</span>
                </div>
              </div>
            </div>

            <div className="case reveal">
              <div
                className="case-top"
                style={{
                  background: "linear-gradient(140deg,#ddeee4,#c4e0d0)",
                }}
              >
                <span className="case-tag">AI · Automation</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path
                    d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="case-body">
                <h3>Document AI pipeline</h3>
                <p>
                  LLM-powered document processing system for an insurance firm.
                  Extracts, classifies, and validates 10,000+ claims documents
                  per day with 97% accuracy, replacing a 15-person manual team.
                </p>
                <div className="case-metrics">
                  <div className="cm-i">
                    <div className="m">97%</div>
                    <div className="ml">Accuracy</div>
                  </div>
                  <div className="cm-i">
                    <div className="m">10k/day</div>
                    <div className="ml">Documents</div>
                  </div>
                  <div className="cm-i">
                    <div className="m">AU</div>
                    <div className="ml">Client</div>
                  </div>
                </div>
                <div className="case-stack">
                  <span>Python</span>
                  <span>OpenAI</span>
                  <span>FastAPI</span>
                  <span>AWS</span>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="case reveal">
              <div className="case-top c2">
                <span className="case-tag">E-commerce · Web</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <circle cx="9" cy="20" r="1.5" />
                  <circle cx="18" cy="20" r="1.5" />
                  <path
                    d="M2 3h3l2.5 12h11"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="case-body">
                <h3>Headless commerce platform</h3>
                <p>
                  Full headless e-commerce rebuild for a fashion brand. Custom
                  Shopify frontend, PIM integration, same-day inventory sync,
                  and a 2.8× conversion rate improvement post-launch.
                </p>
                <div className="case-metrics">
                  <div className="cm-i">
                    <div className="m">2.8×</div>
                    <div className="ml">Conversion rate</div>
                  </div>
                  <div className="cm-i">
                    <div className="m">99%</div>
                    <div className="ml">Uptime</div>
                  </div>
                  <div className="cm-i">
                    <div className="m">UK</div>
                    <div className="ml">Client</div>
                  </div>
                </div>
                <div className="case-stack">
                  <span>Next.js</span>
                  <span>Shopify API</span>
                  <span>Node.js</span>
                </div>
              </div>
            </div>

            <div className="case reveal">
              <div className="case-top c1">
                <span className="case-tag">Healthcare · SaaS</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <path
                    d="M12 21s-7-4.5-9-9a5 5 0 019-3 5 5 0 019 3c-2 4.5-9 9-9 9z"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="case-body">
                <h3>Telemedicine platform</h3>
                <p>
                  HIPAA-compliant telehealth platform with video consultations,
                  e-prescriptions, patient records, and appointment scheduling.
                  Scaled to 8,000 consultations per month in year one.
                </p>
                <div className="case-metrics">
                  <div className="cm-i">
                    <div className="m">8k</div>
                    <div className="ml">Consults/month</div>
                  </div>
                  <div className="cm-i">
                    <div className="m">HIPAA</div>
                    <div className="ml">Compliant</div>
                  </div>
                  <div className="cm-i">
                    <div className="m">US</div>
                    <div className="ml">Client</div>
                  </div>
                </div>
                <div className="case-stack">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>AWS</span>
                  <span>WebRTC</span>
                </div>
              </div>
            </div>

            <div className="case reveal">
              <div className="case-top c3">
                <span className="case-tag">Logistics · ERP</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <path
                    d="M9 7V3M15 7V3M7 7h10v4a5 5 0 01-10 0z"
                    strokeLinejoin="round"
                  />
                  <path d="M12 16v5" />
                </svg>
              </div>
              <div className="case-body">
                <h3>LogiCore — logistics ERP</h3>
                <p>
                  Multi-branch ERP for a logistics company. Fleet management,
                  route optimisation, driver payroll, fuel tracking, billing,
                  and real-time delivery tracking for 1,200 daily trips.
                </p>
                <div className="case-metrics">
                  <div className="cm-i">
                    <div className="m">25%</div>
                    <div className="ml">Fuel savings</div>
                  </div>
                  <div className="cm-i">
                    <div className="m">1,200</div>
                    <div className="ml">Daily trips</div>
                  </div>
                  <div className="cm-i">
                    <div className="m">India</div>
                    <div className="ml">Client</div>
                  </div>
                </div>
                <div className="case-stack">
                  <span>Node.js</span>
                  <span>React</span>
                  <span>PostgreSQL</span>
                  <span>AWS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="load-more-wrap reveal">
            <Link href="/contact" className="btn btn-ghost">
              Load more projects ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Industry depth</span>
              <h2 style={{ marginTop: "18px" }}>
                Domain expertise
                <br />
                across sectors
              </h2>
            </div>
            <p>
              Eight years of shipping into regulated, high-stakes industries.
            </p>
          </div>
          <div className="ind-grid reveal">
            <div className="ind">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <circle cx="9" cy="20" r="1.5" />
                <circle cx="18" cy="20" r="1.5" />
                <path
                  d="M2 3h3l2.5 12h11"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>E-commerce</span>
            </div>
            <div className="ind">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path
                  d="M12 21s-7-4.5-9-9a5 5 0 019-3 5 5 0 019 3c-2 4.5-9 9-9 9z"
                  strokeLinejoin="round"
                />
              </svg>
              <span>HealthTech</span>
            </div>
            <div className="ind">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M3 21V10l9-7 9 7v11" strokeLinejoin="round" />
                <path d="M9 21v-6h6v6" />
              </svg>
              <span>FinTech</span>
            </div>
            <div className="ind">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path
                  d="M22 10v6M2 10l10-5 10 5-10 5z"
                  strokeLinejoin="round"
                />
                <path d="M6 12v5c3 2 9 2 12 0v-5" />
              </svg>
              <span>EdTech</span>
            </div>
            <div className="ind">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <rect x="1" y="6" width="14" height="11" rx="1" />
                <path d="M15 9h4l3 3v5h-7" strokeLinejoin="round" />
                <circle cx="6" cy="18" r="1.6" />
                <circle cx="17" cy="18" r="1.6" />
              </svg>
              <span>Logistics</span>
            </div>
            <div className="ind">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M3 21V8l7-5 7 5v13" strokeLinejoin="round" />
                <path d="M10 21v-5h4v5M21 21H3" />
              </svg>
              <span>Real estate</span>
            </div>
            <div className="ind">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path
                  d="M6 2v6a6 6 0 0012 0V2M9 2v5M15 2v5M12 14v8"
                  strokeLinecap="round"
                />
              </svg>
              <span>Food &amp; retail</span>
            </div>
            <div className="ind">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <rect x="3" y="4" width="18" height="14" rx="2" />
                <path d="M8 21h8M12 18v3" />
              </svg>
              <span>Media &amp; SaaS</span>
            </div>
            <div className="ind">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path
                  d="M3 6h18M7 6V4h10v2M5 6l1 14h12l1-14"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Manufacturing</span>
            </div>
            <div className="ind">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path
                  d="M4 17l6-6 4 4 6-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 8h6v6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Analytics</span>
            </div>
            <div className="ind">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <circle cx="12" cy="12" r="3" />
                <path
                  d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"
                  strokeLinecap="round"
                />
              </svg>
              <span>AI &amp; ML</span>
            </div>
            <div className="ind">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path
                  d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Legal tech</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS (dark) ===== */}
      <section className="dark sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow on-dark">Client words</span>
              <h2 style={{ marginTop: "18px", color: "var(--on-dark)" }}>
                Trusted by leaders
                <br />
                worldwide
              </h2>
            </div>
            <p>
              The same teams keep coming back — that&apos;s the metric we care
              about most.
            </p>
          </div>
          <div className="testi-grid">
            <div className="quote reveal">
              <div className="stars">★★★★★</div>
              <p>
                Digital Web Weaver delivered our platform on time and under budget. Their
                team understood our product better than we did — a truly
                professional partner.
              </p>
              <div className="who">
                <div className="av">JE</div>
                <div>
                  <b>James E.</b>
                  <span>CTO · SaaS scale-up · UK</span>
                </div>
              </div>
            </div>
            <div className="quote reveal">
              <div className="stars">★★★★★</div>
              <p>
                Our custom ERP cut operational overhead by 40%. The team was
                responsive and transparent throughout, and delivered exactly
                what was promised.
              </p>
              <div className="who">
                <div className="av">RS</div>
                <div>
                  <b>Rajesh S.</b>
                  <span>COO · Precision Parts · India</span>
                </div>
              </div>
            </div>
            <div className="quote reveal">
              <div className="stars">★★★★★</div>
              <p>
                From an MVP to a fully scaled product in under twelve months.
                Their architectural decisions saved us from costly rebuilds —
                they think long-term.
              </p>
              <div className="who">
                <div className="av">AM</div>
                <div>
                  <b>Adnan M.</b>
                  <span>Founder · HealthTech · UAE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section>
        <div className="wrap">
          <div className="cta reveal">
            <div className="cta-inner">
              <span
                className="eyebrow"
                style={{ color: "rgba(255,255,255,.85)" }}
              >
                Let&apos;s build
              </span>
              <h2 style={{ marginTop: "18px" }}>
                Ready to become our next case study?
              </h2>
              <p>
                Get a free technical consultation and a detailed project
                estimate from our senior engineers — within 24 hours. No
                commitment required.
              </p>
              <div className="cta-actions">
                <Link href="/contact" className="btn btn-primary">
                  Start a project <span className="arr">↗</span>
                </Link>
                <Link href="/about" className="btn btn-ghost">
                  Meet the team
                </Link>
              </div>
              <div className="cta-meta">
                <span>● Free consultation</span>
                <span>● 24-hour response</span>
                <span>● NDA signed first</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
