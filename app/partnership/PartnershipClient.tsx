"use client";
import Link from "next/link";

export default function PartnershipClient() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb reveal">
            <Link href="/">Home</Link><span className="sep">/</span>Partnership
          </div>
          <span className="eyebrow reveal">Partnership programme</span>
          <h1 className="reveal" style={{ marginTop: 18, maxWidth: 820 }}>
            Grow together —<br /><span className="accent">partner with us</span>
          </h1>
          <p className="lead reveal" style={{ maxWidth: 600 }}>
            We work with consultants, agencies, and technology companies who want to offer world-class engineering to their clients — and get rewarded generously for it.
          </p>
          <div className="hero-stats reveal" style={{ maxWidth: 540, marginTop: 32 }}>
            <div className="hs">
              <div className="hn" data-count="40" data-suffix="+">40+</div>
              <div className="hl">Active partners</div>
            </div>
            <div className="hs">
              <div className="hn" data-count="15" data-suffix="%">15%</div>
              <div className="hl">Revenue share</div>
            </div>
            <div className="hs">
              <div className="hn" data-count="12" data-suffix="">12</div>
              <div className="hl">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARTNER TYPES ===== */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Programme tiers</span>
              <h2 style={{ marginTop: 18 }}>Three ways<br />to partner</h2>
            </div>
            <p>Pick the model that fits how you work with clients.</p>
          </div>
          <div className="partner-grid">
            {/* Referral */}
            <div className="partner-card reveal">
              <div className="pc-num">01</div>
              <div className="pc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21s-8-5-8-11a8 8 0 0116 0c0 6-8 11-8 11z" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>
              <h3>Referral partner</h3>
              <p>You know clients who need engineering. You introduce them to us — we close and deliver the work. You earn a recurring referral fee with zero delivery responsibility.</p>
              <ul className="partner-perks">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" /></svg>
                  10–15% of project value
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" /></svg>
                  Recurring on retainer clients
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" /></svg>
                  Co-branded collateral
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" /></svg>
                  Dedicated partner manager
                </li>
              </ul>
              <div className="partner-earn"><span>Earn up to</span><strong>$12,000</strong><span>per referred project</span></div>
            </div>

            {/* Reseller */}
            <div className="partner-card popular reveal">
              <div className="engage-pop">Most common</div>
              <div className="pc-num">02</div>
              <div className="pc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
                  <circle cx="10" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h3>Reseller partner</h3>
              <p>You sell Digital Web Weaver engineering services to your clients under your own brand. You manage the relationship, we deliver the work. Ideal for consulting firms and boutique agencies.</p>
              <ul className="partner-perks">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" /></svg>
                  20–30% margin on all work
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" /></svg>
                  White-label delivery option
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" /></svg>
                  Priority capacity allocation
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" /></svg>
                  Shared client dashboards
                </li>
              </ul>
              <div className="partner-earn"><span>Margin of</span><strong>20–30%</strong><span>on every project</span></div>
            </div>

            {/* Technology */}
            <div className="partner-card reveal">
              <div className="pc-num">03</div>
              <div className="pc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Technology partner</h3>
              <p>Your platform or tool integrates with systems we build. We co-market, co-refer, and collaborate on technical content. Built for SaaS companies and infrastructure providers.</p>
              <ul className="partner-perks">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" /></svg>
                  Bi-directional referrals
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" /></svg>
                  Joint webinars &amp; content
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" /></svg>
                  Listed as certified integrator
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" /></svg>
                  Co-branded case studies
                </li>
              </ul>
              <div className="partner-earn"><span>Growth via</span><strong>shared</strong><span>pipeline</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DARK BENEFITS ===== */}
      <section className="dark sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow on-dark">Why partner with Digital Web Weaver</span>
              <h2 style={{ marginTop: 18, color: "var(--on-dark)" }}>What you get<br />on day one</h2>
            </div>
            <p>Partner benefits aren&apos;t a promise — they&apos;re in the agreement and active from the day you join.</p>
          </div>
          <div className="why-grid">
            <div className="why reveal">
              <div className="wi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 17l-5.5 2.8 1-6.3L3 8.9 9 8z" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Guaranteed delivery</h3>
              <p>We have a 98% on-time delivery record. Your reputation is safe when you send clients to us — or when we deliver on your behalf.</p>
            </div>
            <div className="why reveal">
              <div className="wi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 17l6-6 4 4 6-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Fast commission payout</h3>
              <p>Referral commissions are paid within 30 days of project completion — not after a 6-month holdback. Monthly statements, no surprises.</p>
            </div>
            <div className="why reveal">
              <div className="wi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Protected leads</h3>
              <p>Every client you refer or introduce is locked to your partner account for 24 months. We never go direct and cut you out of the deal.</p>
            </div>
            <div className="why reveal">
              <div className="wi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M8 6L3 12l5 6M16 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Sales support</h3>
              <p>We&apos;ll join discovery calls, build proposals, and provide technical credibility to help you close. You stay in control; we support from behind the scenes.</p>
            </div>
            <div className="why reveal">
              <div className="wi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Marketing materials</h3>
              <p>Pitch decks, one-pagers, case studies, and co-branded assets — ready to send. We keep them up to date so you don&apos;t have to.</p>
            </div>
            <div className="why reveal">
              <div className="wi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
                  <circle cx="10" cy="7" r="4" />
                  <path d="M21 15v2M19 16h4" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Partner community</h3>
              <p>Access to a private Slack community of 40+ partners. Share leads, swap advice, and co-pitch on larger projects with complementary partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Process</span>
              <h2 style={{ marginTop: 18 }}>From application<br />to first commission</h2>
            </div>
            <p>Simple, fast, and transparent — the whole onboarding takes under a week.</p>
          </div>
          <div className="psteps reveal">
            <div className="ps">
              <div className="ps-n">01</div>
              <div>
                <h4>Apply — 5 minutes</h4>
                <p>Fill in the short form below. Tell us who you are, who your clients are, and which partnership model interests you.</p>
              </div>
            </div>
            <div className="ps">
              <div className="ps-n">02</div>
              <div>
                <h4>Intro call — 30 minutes</h4>
                <p>We&apos;ll learn about your clients and goals. If it&apos;s a good fit, we&apos;ll send you a partner agreement within 48 hours.</p>
              </div>
            </div>
            <div className="ps">
              <div className="ps-n">03</div>
              <div>
                <h4>Onboarding — 1 day</h4>
                <p>Sign the agreement, get your partner portal login, and receive a welcome kit with all the materials you need to start referring.</p>
              </div>
            </div>
            <div className="ps">
              <div className="ps-n">04</div>
              <div>
                <h4>First referral — whenever you&apos;re ready</h4>
                <p>Introduce a client, submit a referral ticket, and we&apos;ll take it from there. Commission tracking starts immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== APPLY FORM ===== */}
      <section className="sec" id="apply">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Apply now</span>
              <h2 style={{ marginTop: 18 }}>Ready to grow<br />together?</h2>
            </div>
            <p>Fill in the form and we&apos;ll be in touch within one business day.</p>
          </div>
          <div className="partner-apply-sec reveal">
            <div className="apply-form-inner">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="fc-row">
                  <div className="fc-group">
                    <label>Your name</label>
                    <input type="text" placeholder="Alex Johnson" required />
                  </div>
                  <div className="fc-group">
                    <label>Work email</label>
                    <input type="email" placeholder="alex@company.com" required />
                  </div>
                </div>
                <div className="fc-group">
                  <label>Company / Organisation</label>
                  <input type="text" placeholder="Acme Consulting Ltd" required />
                </div>
                <div className="fc-group">
                  <label>Website</label>
                  <input type="url" placeholder="https://yourcompany.com" />
                </div>
                <div className="fc-group">
                  <label>Partnership type</label>
                  <select required>
                    <option value="">Select…</option>
                    <option>Referral partner</option>
                    <option>Reseller partner</option>
                    <option>Technology partner</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="fc-group">
                  <label>Tell us about your clients and goals</label>
                  <textarea rows={4} placeholder="Who are your typical clients? What kind of projects are you looking to pass on or collaborate on?" />
                </div>
                <button className="btn btn-primary" type="submit" style={{ width: "100%", justifyContent: "center" }}>
                  Apply to partner programme <span className="arr">↗</span>
                </button>
                <p style={{ fontSize: "12.5px", color: "var(--faint)", textAlign: "center", marginTop: 12, fontFamily: "var(--mono)" }}>
                  Response within 1 business day · NDA available on request
                </p>
              </form>
            </div>
            <div className="partner-apply-info">
              <div className="afc-tag">Partner programme</div>
              <h3>Questions before you apply?</h3>
              <p>Reach out to our partnerships team directly. We&apos;re happy to walk through any of the programme details before you commit to anything.</p>
              <div className="cip-item" style={{ marginTop: 28 }}>
                <div className="cip-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>Email us</div>
                  <div style={{ color: "var(--on-dark-muted)", fontSize: 13.5 }}>info@digitalwebweaver.com</div>
                </div>
              </div>
              <div className="cip-item">
                <div className="cip-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="4" width="18" height="18" rx="3" />
                    <path d="M3 10h18M9 4v2M15 4v2" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>Book a call</div>
                  <div style={{ color: "var(--on-dark-muted)", fontSize: 13.5 }}>30-min intro, no commitment</div>
                </div>
              </div>
              <div className="cip-item">
                <div className="cip-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
                    <circle cx="10" cy="7" r="4" />
                    <path d="M21 15v2M19 16h4" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>40+ active partners</div>
                  <div style={{ color: "var(--on-dark-muted)", fontSize: 13.5 }}>Across 12 countries</div>
                </div>
              </div>
              <div className="cip-item">
                <div className="cip-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 17l-5.5 2.8 1-6.3L3 8.9 9 8z" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>Average commission</div>
                  <div style={{ color: "var(--on-dark-muted)", fontSize: 13.5 }}>$3,200/referred project</div>
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
              <span className="eyebrow" style={{ color: "rgba(255,255,255,.85)" }}>Let&apos;s grow</span>
              <h2 style={{ marginTop: 18 }}>The right engineering partner<br />makes you look great.</h2>
              <p>When your clients see world-class engineering delivered on time, they trust you more. That&apos;s the point of this programme.</p>
              <div className="cta-actions">
                <a href="#apply" className="btn btn-primary">Apply to partner <span className="arr">↗</span></a>
                <Link href="/contact" className="btn btn-ghost">Talk to us first</Link>
              </div>
              <div className="cta-meta">
                <span>● No exclusivity required</span>
                <span>● Commission paid in 30 days</span>
                <span>● Leads protected 24 months</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
