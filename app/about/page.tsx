import type { Metadata } from "next";
import Link from "next/link";
import CountStat from "@/components/ui/CountStat";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "We're a senior engineering studio that's been building high-performance software, SaaS platforms, and AI systems since 2013. Meet the team.",
  alternates: { canonical: "/about/" },
  openGraph: { url: "/about/", type: "website" },
};

const ABOUT_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      url: "https://digitalwebweaver.com/about/",
      name: "About Digital Web Weaver",
      mainEntity: { "@id": "https://digitalwebweaver.com/#organization" },
    },
    {
      "@type": "Person",
      "@id": "https://digitalwebweaver.com/#kamlesh",
      name: "Kamlesh Nishad",
      jobTitle: "CEO & Founder",
      worksFor: { "@id": "https://digitalwebweaver.com/#organization" },
      url: "https://www.linkedin.com/in/kamleshnishad/",
      sameAs: ["https://www.linkedin.com/in/kamleshnishad/"],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUT_SCHEMA) }} />
      {/* ===== HERO ===== */}
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb reveal">
            <Link href="/">Home</Link>
            <span className="sep">/</span>About
          </div>
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow reveal">The studio</span>
              <h1 className="reveal">
                We build software that{" "}
                <span className="accent">actually works</span> at scale.
              </h1>
              <p className="lead reveal">
                Founded in 2013, Digital Web Weaver is a senior engineering studio of
                designers, engineers, and architects who&apos;ve spent over twelve
                years shipping production-grade software for founders and
                enterprises across 15 countries.
              </p>
              <div className="hero-actions reveal">
                <Link href="/contact" className="btn btn-primary">
                  Work with us <span className="arr">↗</span>
                </Link>
                <Link href="/#work" className="btn btn-ghost">
                  See our work
                </Link>
              </div>
            </div>
            <div className="page-visual reveal">
              <div className="pv-blob"></div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
              >
                <path
                  d="M8 6L3 12l5 6M16 6l5 6-5 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="pv-badge">
                <div className="pvb-n">8+</div>
                <div className="pvb-l">Years building</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <div className="wrap">
        <div className="stats reveal">
          <div className="stat">
            <CountStat target={200} suffix="+" className="num" />
            <div className="lab">Systems shipped</div>
          </div>
          <div className="stat">
            <CountStat target={50} suffix="+" className="num" />
            <div className="lab">Expert engineers</div>
          </div>
          <div className="stat">
            <CountStat target={15} suffix="" className="num" />
            <div className="lab">Countries served</div>
          </div>
          <div className="stat">
            <CountStat target={90} suffix="%" className="num" />
            <div className="lab">Client retention</div>
          </div>
        </div>
      </div>

      {/* ===== FOUNDING STORY ===== */}
      <section className="sec" id="story">
        <div className="wrap">
          <div className="about">
            <div className="about-visual reveal">
              <div className="blob"></div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path
                  d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 17l-5.5 2.8 1-6.3L3 8.9 9 8z"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="about-badge">
                <div className="bn">2013</div>
                <div className="bl">Est. Vadodara</div>
              </div>
            </div>
            <div className="about-copy reveal">
              <span className="eyebrow">Our story</span>
              <h2 style={{ marginTop: "18px" }}>
                Started with a belief —{" "}
                <br />
                craft over <span className="accent">shortcuts</span>
              </h2>
              <p className="lead">
                Digital Web Weaver began as a two-person partnership with a single operating
                rule: never ship code we wouldn&apos;t stake our own reputation
                on. Every client was a referral. Every project was
                over-delivered.
              </p>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "15.5px",
                  lineHeight: "1.7",
                  marginBottom: "26px",
                }}
              >
                Eight years on, that principle has never changed. We&apos;ve
                grown to a senior team of fifty-plus engineers, designers, and
                architects. We work across mobile, cloud, AI, and enterprise —
                but we still take every engagement as if our name is on the
                line. Because it is.
              </p>
              <ul className="checklist">
                <li>
                  <span className="ck">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        d="M5 12l5 5L20 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  Senior-only team — no juniors hidden behind the contract
                </li>
                <li>
                  <span className="ck">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        d="M5 12l5 5L20 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  Every project has a dedicated tech lead and full code ownership
                </li>
                <li>
                  <span className="ck">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        d="M5 12l5 5L20 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  Transparent weekly progress — you always know where things
                  stand
                </li>
                <li>
                  <span className="ck">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        d="M5 12l5 5L20 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  90% of clients return for their next project
                </li>
              </ul>
              <div className="pills">
                <span>SaaS experts</span>
                <span>Cloud-native</span>
                <span>AI-ready</span>
                <span>Full-stack</span>
                <span>Mobile</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION / VISION / VALUES (dark) ===== */}
      <section className="dark sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow on-dark">What drives us</span>
              <h2 style={{ marginTop: "18px", color: "var(--on-dark)" }}>
                Mission, vision &amp;
                <br />
                values
              </h2>
            </div>
            <p>
              Three ideas that define how we think, how we work, and what we
              won&apos;t compromise on.
            </p>
          </div>
          <div className="why-grid reveal">
            <div className="why">
              <div className="wi">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <h4>Our mission</h4>
              <p>
                To make world-class software engineering accessible to every
                ambitious team — from a two-person startup to a global enterprise
                — without the overhead of a large consultancy.
              </p>
            </div>
            <div className="why">
              <div className="wi">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 17l6-6 4 4 6-7" />
                  <path d="M14 8h6v6" />
                </svg>
              </div>
              <h4>Our vision</h4>
              <p>
                A world where software is built with the same pride and
                permanence as great architecture — systems that outlast trends,
                scale without compromise, and earn the teams that rely on them.
              </p>
            </div>
            <div className="why">
              <div className="wi">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h4>Our values</h4>
              <p>
                Craft over shortcuts. Honesty over comfort. Ownership over
                excuses. We write code as if the next engineer who reads it is a
                senior we respect — because they probably are.
              </p>
            </div>
            <div className="why">
              <div className="wi">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h4>Our people</h4>
              <p>
                Every engineer we hire has shipped production systems. No
                bootcamp hires on client projects. Our team reviews every
                engagement — which is why clients keep coming back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="sec" id="team">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">The people</span>
              <h2 style={{ marginTop: "18px" }}>
                Senior engineers &amp;
                <br />
                designers behind the work
              </h2>
            </div>
            <p>
              No junior engineers behind the curtain. Every person you work with
              has shipped in production.
            </p>
          </div>
          <div className="team-grid">
            <div className="team-card reveal">
              <div className="team-av">KA</div>
              <div className="tc-role">CEO &amp; Founder</div>
              <h3>Kamlesh</h3>
              <p>
                Founded Digital Web Weaver to bring senior-level engineering to
                businesses that deserve better than templated agencies. Leads
                strategy, client partnerships, and the studio&apos;s long-term
                vision.
              </p>
            </div>
            <div className="team-card reveal">
              <div className="team-av">AN</div>
              <div className="tc-role">Full Stack Developer</div>
              <h3>Aniket</h3>
              <p>
                Builds end-to-end web applications across the modern stack —
                comfortable owning a feature from database schema to polished
                UI, and shipping it without hand-holding.
              </p>
            </div>
            <div className="team-card reveal">
              <div className="team-av">AJ</div>
              <div className="tc-role">Full Stack Developer · Node.js</div>
              <h3>Ajay</h3>
              <p>
                Node.js specialist focused on APIs, services, and backend
                architecture that stay fast and reliable as products scale from
                first users to high traffic.
              </p>
            </div>
            <div className="team-card reveal">
              <div className="team-av">HA</div>
              <div className="tc-role">Full Stack Developer · Laravel</div>
              <h3>Harsh</h3>
              <p>
                Laravel and PHP backend engineer who builds clean, maintainable
                systems — from custom CRMs and ERPs to client portals that teams
                actually enjoy using.
              </p>
            </div>
            <div className="team-card reveal">
              <div className="team-av">SW</div>
              <div className="tc-role">Full Stack Developer · PHP</div>
              <h3>Swati</h3>
              <p>
                PHP full-stack developer covering both sides of the stack,
                turning project requirements into working software with an eye
                for detail and code that&apos;s easy to extend.
              </p>
            </div>
            <div className="team-card reveal">
              <div className="team-av">AR</div>
              <div className="tc-role">Business Development Executive</div>
              <h3>Arvind</h3>
              <p>
                First point of contact for new partnerships — understands a
                client&apos;s goals early and connects them with the right team
                and approach to get there.
              </p>
            </div>
            <div className="team-card reveal">
              <div className="team-av">MA</div>
              <div className="tc-role">Regional Sales</div>
              <h3>Maxime</h3>
              <p>
                Builds and manages regional client relationships, helping
                businesses outside India navigate working with an offshore team
                smoothly and confidently.
              </p>
            </div>
            <div className="team-card reveal">
              <div className="team-av">SA</div>
              <div className="tc-role">Business Operations</div>
              <h3>Sanjita</h3>
              <p>
                Keeps projects, timelines, and internal operations running
                smoothly behind the scenes, so engineering teams can focus on
                shipping quality work.
              </p>
            </div>
            <div className="team-card reveal">
              <div className="team-av">RA</div>
              <div className="tc-role">Business Analyst</div>
              <h3>Rahul</h3>
              <p>
                Bridges client requirements and engineering execution — turning
                business goals into clear specs that the development team can
                build against with confidence.
              </p>
            </div>
          </div>
          <p
            className="reveal"
            style={{
              marginTop: "32px",
              fontFamily: "var(--mono)",
              fontSize: "13px",
              letterSpacing: ".06em",
              color: "var(--faint)",
              textTransform: "uppercase",
            }}
          >
            + 10 more engineers, designers, and specialists across the team
          </p>
        </div>
      </section>

      {/* ===== CULTURE ===== */}
      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="about about-reverse">
            <div className="about-copy reveal">
              <span className="eyebrow">How we work</span>
              <h2 style={{ marginTop: "18px" }}>
                A culture built on <span className="accent">ownership</span>
                <br />
                and deep craft
              </h2>
              <p className="lead">
                We don&apos;t have project managers chasing engineers for status
                updates. Everyone owns their work end-to-end — from architecture
                to deployment to post-launch monitoring.
              </p>
              <ul className="checklist">
                <li>
                  <span className="ck">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        d="M5 12l5 5L20 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  Asynchronous-first communication — documentation over meetings
                </li>
                <li>
                  <span className="ck">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        d="M5 12l5 5L20 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  Code review on every PR — standards maintained, always
                </li>
                <li>
                  <span className="ck">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        d="M5 12l5 5L20 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  20% time each week for learning and open-source contribution
                </li>
                <li>
                  <span className="ck">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        d="M5 12l5 5L20 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  Remote-first, timezone-flexible with offices in India &amp; UK
                </li>
              </ul>
              <div className="pills">
                <span>Remote-first</span>
                <span>Code reviews</span>
                <span>Async culture</span>
                <span>Learning budget</span>
              </div>
              <Link
                href="/careers"
                className="btn btn-primary"
                style={{ marginTop: "8px" }}
              >
                We&apos;re hiring <span className="arr">↗</span>
              </Link>
            </div>
            <div className="about-visual reveal">
              <div className="blob"></div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
              <div className="about-badge">
                <div className="bn">50+</div>
                <div className="bl">Engineers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="sec" id="journey">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">The journey</span>
              <h2 style={{ marginTop: "18px" }}>
                Eight years of <span className="accent">focused work</span>
              </h2>
            </div>
            <p>
              From a two-person team to a global studio — built one great project
              at a time.
            </p>
          </div>
          <div className="tl-layout">
            <div className="timeline reveal">
              <div className="tl-item">
                <div className="yr">2013 · The beginning</div>
                <h3>Two people, one rule</h3>
                <p>
                  Started as a freelance pair with a single principle: never ship
                  code we wouldn&apos;t run ourselves. First 20 projects, all
                  referred. Zero advertising.
                </p>
              </div>
              <div className="tl-item">
                <div className="yr">2015 · First enterprise client</div>
                <h3>Going beyond MVPs</h3>
                <p>
                  Landed our first enterprise engagement — a custom ERP for a
                  mid-size manufacturer. Grew the team to six. Established the
                  code review and architecture review processes we still use
                  today.
                </p>
              </div>
              <div className="tl-item">
                <div className="yr">2017 · Going full-stack</div>
                <h3>A real studio</h3>
                <p>
                  Expanded to a senior team of designers and engineers serving
                  clients across four continents. Team grew to fifteen. Moved
                  into dedicated offices in Vadodara and London.
                </p>
              </div>
              <div className="tl-item">
                <div className="yr">2020 · SaaS &amp; AI focus</div>
                <h3>Deeper, not wider</h3>
                <p>
                  Doubled down on product engineering. Shipped our 100th platform
                  and our first AI features into production systems. Established
                  specialist tracks for mobile, cloud, and AI/ML.
                </p>
              </div>
              <div className="tl-item">
                <div className="yr">2026 · Today</div>
                <h3>A global partner</h3>
                <p>
                  200+ systems shipped. 50+ engineers. 15 countries — with an
                  active presence in South Africa, London, and Abidjan
                  alongside our Vadodara base. A 90% client-retention rate and
                  zero failed delivery timelines. Still growing — still
                  senior-only.
                </p>
              </div>
            </div>
            <div className="tl-stats reveal">
              <div className="tl-stat">
                <div className="n">
                  200<span style={{ fontSize: "1.4rem" }}>+</span>
                </div>
                <div className="l">Systems shipped</div>
              </div>
              <div className="tl-stat fill">
                <div className="n">15</div>
                <div className="l">Countries served</div>
              </div>
              <div className="tl-stat">
                <div className="n">
                  90<span style={{ fontSize: "1.4rem" }}>%</span>
                </div>
                <div className="l">Client retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AWARDS ===== */}
      <section
        className="sec"
        style={{
          background: "var(--paper-2)",
          paddingTop: "48px",
          paddingBottom: "64px",
        }}
      >
        <div className="wrap">
          <div className="award-row reveal">
            <span className="ar-label">Recognition</span>
            <div className="award">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 17l-5.5 2.8 1-6.3L3 8.9 9 8z"
                  strokeLinejoin="round"
                />
              </svg>{" "}
              4.9 / 5 on Clutch
            </div>
            <div className="award">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"
                  strokeLinejoin="round"
                />
                <path d="M9 12l2 2 4-4" strokeLinecap="round" />
              </svg>{" "}
              ISO 27001 aligned
            </div>
            <div className="award">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M9 12l2 2 4-4" strokeLinecap="round" />
              </svg>{" "}
              SOC 2 Type II
            </div>
            <div className="award">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="4" y="4" width="16" height="16" rx="3" />
                <path d="M9 12l2 2 4-4" strokeLinecap="round" />
              </svg>{" "}
              GDPR aligned
            </div>
            <div className="award">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
              </svg>{" "}
              Top 1% on Toptal
            </div>
            <div className="award">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M8 6L3 12l5 6M16 6l5 6-5 6"
                  strokeLinecap="round"
                />
              </svg>{" "}
              AWS Partner
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
                What our clients
                <br />
                say about us
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
                Digital Web Weaver delivered our platform on time and under budget. Their team
                understood our product better than we did — a truly professional
                partner.
              </p>
              <div className="who">
                <div className="av">JE</div>
                <div>
                  <b>James E.</b>
                  <span>CTO · SaaS scale-up</span>
                </div>
              </div>
            </div>
            <div className="quote reveal">
              <div className="stars">★★★★★</div>
              <p>
                Our custom ERP cut operational overhead by 40%. The team was
                responsive and transparent throughout, and delivered exactly what
                was promised.
              </p>
              <div className="who">
                <div className="av">SA</div>
                <div>
                  <b>Sophie A.</b>
                  <span>Ops Director · Manufacturing</span>
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
                  <span>Founder · HealthTech</span>
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
                Ready to work with a team that actually delivers?
              </h2>
              <p>
                Get a free technical consultation from a senior engineer —
                we&apos;ll map your problem and send a fixed estimate within 24
                hours. No commitment required.
              </p>
              <div className="cta-actions">
                <Link href="/contact" className="btn btn-primary">
                  Start a project <span className="arr">↗</span>
                </Link>
                <Link href="/careers" className="btn btn-ghost">
                  We&apos;re hiring
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
