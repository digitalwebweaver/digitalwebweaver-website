import type { Metadata } from "next";
import Link from "next/link";
import CountStat from "@/components/ui/CountStat";

export const metadata: Metadata = {
  title: "Remote Software Engineering Careers",
  description:
    "Join Digital Web Weaver — a senior engineering studio shipping production software across India, UK, and South Africa. Remote-first, async culture.",
  alternates: { canonical: "/careers/" },
  openGraph: { url: "/careers/", type: "website" },
};

const CAREERS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://digitalwebweaver.com/careers/",
  name: "Careers at Digital Web Weaver",
  description: "Senior software engineering jobs at Digital Web Weaver — remote-first, async culture, shipping production software across India, UK, and South Africa.",
  isPartOf: { "@id": "https://digitalwebweaver.com/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://digitalwebweaver.com/" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://digitalwebweaver.com/careers/" },
    ],
  },
};

export default function CareersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CAREERS_SCHEMA) }} />
      {/* ===== HERO ===== */}
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb reveal">
            <Link href="/">Home</Link>
            <span className="sep">/</span>Careers
          </div>
          <span className="eyebrow reveal">Join the team</span>
          <h1 className="reveal" style={{ marginTop: "18px", maxWidth: "820px" }}>
            Build the <span className="accent">future of software</span>
            <br />
            with us
          </h1>
          <p className="lead reveal" style={{ maxWidth: "600px" }}>
            We&apos;re a senior engineering studio — not a ticket factory. Everyone here works on real systems, with real
            responsibility, shipping software that matters.
          </p>
          <div className="hero-stats reveal" style={{ maxWidth: "540px", marginTop: "32px" }}>
            <div className="hs">
              <CountStat target={45} suffix="+" className="hn" />
              <div className="hl">Team members</div>
            </div>
            <div className="hs">
              <CountStat target={8} suffix="" className="hn" />
              <div className="hl">Countries</div>
            </div>
            <div className="hs">
              <CountStat target={94} suffix="%" className="hn" />
              <div className="hl">Retention rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY WORK HERE (dark) ===== */}
      <section className="dark sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow on-dark">Culture</span>
              <h2 style={{ marginTop: "18px", color: "var(--on-dark)" }}>
                Why people stay
                <br />
                at Digital Web Weaver
              </h2>
            </div>
            <p>
              High ownership, hard problems, and a team that treats craft as a first principle — not a bullet point on a
              recruitment page.
            </p>
          </div>
          <div className="why-grid">
            <div className="why reveal">
              <div className="wi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M8 6L3 12l5 6M16 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Real ownership</h3>
              <p>
                You own the architecture and production systems, not just the Jira ticket. Senior engineers here make the
                calls — and are trusted to make them well.
              </p>
            </div>
            <div className="why reveal">
              <div className="wi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>High-quality bar</h3>
              <p>
                We don&apos;t ship fast and fix later. Every system is documented, tested, and designed to be maintained.
                Good engineering is table stakes here.
              </p>
            </div>
            <div className="why reveal">
              <div className="wi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Varied, hard problems</h3>
              <p>
                From LLM pipelines to embedded logistics systems — our work spans industries and stacks, so you&apos;ll
                never plateau doing the same thing twice.
              </p>
            </div>
            <div className="why reveal">
              <div className="wi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
                  <circle cx="10" cy="7" r="4" />
                  <path d="M21 15v2M19 16h4" strokeLinecap="round" />
                </svg>
              </div>
              <h3>A team of seniors</h3>
              <p>
                No huge junior pyramid below you. Our hiring bar is high, which means your team members move as fast as
                you do and the code review is actually useful.
              </p>
            </div>
            <div className="why reveal">
              <div className="wi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 17l6-6 4 4 6-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Async-first work</h3>
              <p>
                No all-day standups. Outcomes over attendance. Our async-first culture means you get uninterrupted blocks
                to do deep work and your best thinking.
              </p>
            </div>
            <div className="why reveal">
              <div className="wi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 17l-5.5 2.8 1-6.3L3 8.9 9 8z" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Competitive pay</h3>
              <p>
                Market-leading salaries benchmarked annually, performance reviews twice a year, and bonuses tied to
                project outcomes — not arbitrary manager discretion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Benefits</span>
              <h2 style={{ marginTop: "18px" }}>
                Everything you&apos;d expect.
                <br />
                Plus some things you won&apos;t.
              </h2>
            </div>
            <p>Perks that are actually useful, not a list of ping-pong tables.</p>
          </div>
          <div className="benefit-grid">
            <div className="benefit reveal">
              <div className="bi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 9l9-6 9 6v9a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <path d="M9 21V13h6v8" />
                </svg>
              </div>
              <div>
                <h4>Remote-first</h4>
                <p>Work from anywhere. We have offices in India, UK, and South Africa but being there is never mandatory.</p>
              </div>
            </div>
            <div className="benefit reveal">
              <div className="bi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="4" width="18" height="18" rx="3" />
                  <path d="M3 10h18M9 4v2M15 4v2" />
                </svg>
              </div>
              <div>
                <h4>Flexible hours</h4>
                <p>Core overlap of 4 hours for collaboration. The other four are yours to structure however you do your best thinking.</p>
              </div>
            </div>
            <div className="benefit reveal">
              <div className="bi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h4>Health &amp; wellness</h4>
                <p>Comprehensive health insurance for you and your family. Mental health coverage included as standard — not an add-on.</p>
              </div>
            </div>
            <div className="benefit reveal">
              <div className="bi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeLinejoin="round" />
                  <path d="M6 12v5c3 2 9 2 12 0v-5" />
                </svg>
              </div>
              <div>
                <h4>Learning budget</h4>
                <p>$1,500/year for courses, books, conferences, or anything that sharpens your craft. No questions asked, no approval needed.</p>
              </div>
            </div>
            <div className="benefit reveal">
              <div className="bi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M8 6L3 12l5 6M16 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h4>Equipment allowance</h4>
                <p>$2,000 day-one hardware allowance. Upgrade after two years. Mac or PC, whichever makes you productive.</p>
              </div>
            </div>
            <div className="benefit reveal">
              <div className="bi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 17l6-6 4 4 6-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h4>Profit sharing</h4>
                <p>Annual profit-sharing distribution to all full-time employees — not just leadership. We do well together or not at all.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OPEN ROLES ===== */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Open positions</span>
              <h2 style={{ marginTop: "18px" }}>
                We&apos;re hiring
                <br />
                senior engineers
              </h2>
            </div>
            <p>All roles are remote-first. We hire for seniority, not headcount.</p>
          </div>
          <div className="job-list">
            <div className="job-card reveal">
              <div>
                <h3>Senior Full-Stack Engineer — React / Node</h3>
                <div className="job-badges">
                  <span className="job-badge">Full-time</span>
                  <span className="job-badge">Remote</span>
                  <span className="job-badge">5+ yrs</span>
                </div>
                <p>
                  Build and own production SaaS features end-to-end. You&apos;ll architect both the API and the UI, write
                  tests, and participate in architecture reviews for new client projects.
                </p>
              </div>
              <div className="job-action">
                <Link href="/contact" className="btn btn-ghost">Apply ↗</Link>
              </div>
            </div>
            <div className="job-card reveal">
              <div>
                <h3>Lead Backend Engineer — Python / Django / FastAPI</h3>
                <div className="job-badges">
                  <span className="job-badge">Full-time</span>
                  <span className="job-badge">Remote</span>
                  <span className="job-badge">6+ yrs</span>
                </div>
                <p>
                  Design and build high-throughput API services for enterprise clients. Experience with asynchronous
                  processing, event-driven architecture, and PostgreSQL at scale required.
                </p>
              </div>
              <div className="job-action">
                <Link href="/contact" className="btn btn-ghost">Apply ↗</Link>
              </div>
            </div>
            <div className="job-card reveal">
              <div>
                <h3>Senior Mobile Engineer — React Native</h3>
                <div className="job-badges">
                  <span className="job-badge">Full-time</span>
                  <span className="job-badge">Remote</span>
                  <span className="job-badge">4+ yrs</span>
                </div>
                <p>
                  Ship production mobile apps to iOS and Android from a single React Native codebase. You&apos;ll work
                  directly with clients and own the full mobile layer including native modules.
                </p>
              </div>
              <div className="job-action">
                <Link href="/contact" className="btn btn-ghost">Apply ↗</Link>
              </div>
            </div>
            <div className="job-card reveal">
              <div>
                <h3>DevOps / Platform Engineer</h3>
                <div className="job-badges">
                  <span className="job-badge">Full-time</span>
                  <span className="job-badge">Remote</span>
                  <span className="job-badge">4+ yrs</span>
                </div>
                <p>
                  Build and maintain CI/CD pipelines, Kubernetes clusters, and IaC across 50+ client environments.
                  Strong AWS/GCP experience, Terraform, and GitHub Actions required.
                </p>
              </div>
              <div className="job-action">
                <Link href="/contact" className="btn btn-ghost">Apply ↗</Link>
              </div>
            </div>
            <div className="job-card reveal">
              <div>
                <h3>Product Designer — Figma / Design Systems</h3>
                <div className="job-badges">
                  <span className="job-badge">Full-time</span>
                  <span className="job-badge">Remote</span>
                  <span className="job-badge">3+ yrs</span>
                </div>
                <p>
                  Design complex product interfaces from user research to polished Figma spec. You&apos;ll work closely with
                  engineering and own the design system for a growing portfolio of clients.
                </p>
              </div>
              <div className="job-action">
                <Link href="/contact" className="btn btn-ghost">Apply ↗</Link>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "48px" }} className="reveal">
            <p style={{ color: "var(--muted)", marginBottom: "18px" }}>
              Don&apos;t see a perfect fit? We always want to hear from exceptional engineers.
            </p>
            <Link href="/contact" className="btn btn-ghost">
              Send a general application ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROCESS / HOW WE HIRE ===== */}
      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="about-layout reveal">
            <div>
              <span className="eyebrow">How we hire</span>
              <h2 style={{ marginTop: "18px" }}>
                No whiteboard algorithms.
                <br />
                No trick questions.
              </h2>
              <p style={{ marginTop: "22px", lineHeight: 1.7 }}>
                We hire engineers by talking to them like adults. Our process is three conversations: an intro call, a
                paid take-home (≤4 hours), and a technical chat with the team. No LeetCode, no trivia.
              </p>
              <p style={{ marginTop: "16px", lineHeight: 1.7, color: "var(--muted)" }}>
                We aim to give everyone a decision within two weeks. If we&apos;re slow, chase us — we&apos;d rather you know
                than wonder.
              </p>
              <div className="psteps" style={{ marginTop: "36px" }}>
                <div className="pstep">
                  <div className="ps-n">01</div>
                  <div>
                    <h4>Intro call — 30 min</h4>
                    <p>We learn about you, you learn about us. No homework in advance.</p>
                  </div>
                </div>
                <div className="pstep">
                  <div className="ps-n">02</div>
                  <div>
                    <h4>Paid take-home — 4 hrs</h4>
                    <p>A realistic problem from our actual work. Compensated regardless of outcome.</p>
                  </div>
                </div>
                <div className="pstep">
                  <div className="ps-n">03</div>
                  <div>
                    <h4>Team review — 60 min</h4>
                    <p>Walk us through your solution. No gotchas — we want to understand your thinking.</p>
                  </div>
                </div>
                <div className="pstep">
                  <div className="ps-n">04</div>
                  <div>
                    <h4>Offer — within 5 days</h4>
                    <p>Clear comp, equity breakdown, and start date. Everything in writing.</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className="page-visual" style={{ width: "100%", maxWidth: "400px" }}>
                <div className="pv-blob"></div>
                <div className="pv-badge" style={{ top: "18%", left: "5%" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
                    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                  <div>
                    <div className="pvb-n">No LeetCode</div>
                  </div>
                </div>
                <div className="pv-badge" style={{ bottom: "22%", right: "5%" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
                    <path d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 17l-5.5 2.8 1-6.3L3 8.9 9 8z" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <div className="pvb-n">Paid trial task</div>
                  </div>
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
              <span className="eyebrow" style={{ color: "rgba(255,255,255,.85)" }}>
                Open roles
              </span>
              <h2 style={{ marginTop: "18px" }}>Ready to build something worth building?</h2>
              <p>Browse current openings or send a general application. We read every message from engineers seriously.</p>
              <div className="cta-actions">
                <Link href="/contact" className="btn btn-primary">
                  Apply now <span className="arr">↗</span>
                </Link>
                <Link href="/about" className="btn btn-ghost">
                  About the studio
                </Link>
              </div>
              <div className="cta-meta">
                <span>● Remote-first</span>
                <span>● Async-friendly</span>
                <span>● 2-week process</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
