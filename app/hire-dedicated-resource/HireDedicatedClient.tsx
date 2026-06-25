"use client";
import { useState } from "react";
import Link from "next/link";

export default function HireDedicatedClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      {/* ===== SVC HERO ===== */}
      <section className="svc-hero">
        <div className="wrap">
          <div className="breadcrumb reveal">
            <Link href="/">Home</Link><span className="sep">/</span>
            <Link href="/#services">Services</Link><span className="sep">/</span>Hire Engineers
          </div>
          <div className="svc-hero-grid">
            <div className="shg-left">
              <span className="eyebrow reveal">Dedicated resources</span>
              <h1 className="reveal" style={{ marginTop: 18 }}>
                Hire senior engineers <span className="accent">on demand</span>
              </h1>
              <p className="lead reveal">
                Staff your team with pre-vetted, production-grade engineers from India — in 72 hours. Full-time dedication, no agency overhead, no risk. You get the talent, we handle the rest.
              </p>
              <div className="hero-stats reveal">
                <div className="hs">
                  <div className="hn" data-count="72" data-suffix="h">72h</div>
                  <div className="hl">To deploy</div>
                </div>
                <div className="hs">
                  <div className="hn" data-count="50" data-suffix="+">50+</div>
                  <div className="hl">Engineers</div>
                </div>
                <div className="hs">
                  <div className="hn" data-count="97" data-suffix="%">97%</div>
                  <div className="hl">Retention</div>
                </div>
              </div>
              <div className="usedby reveal">
                <span>Trusted by</span>
                <div className="ub-chips">
                  <div className="ub-c">FinanceHub</div>
                  <div className="ub-c">MedTrack</div>
                  <div className="ub-c">FleetBase</div>
                  <div className="ub-c">EdVault</div>
                </div>
              </div>
            </div>
            <div className="shg-right reveal">
              <div className="form-card">
                <div className="fc-head">
                  <div className="fc-tag">Free brief</div>
                  <h3>Match me with an engineer</h3>
                  <p>Tell us what you need. We&apos;ll shortlist 3 profiles within 24 hours.</p>
                </div>
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
                    <label>Role needed</label>
                    <select>
                      <option value="">Select a role…</option>
                      <option>Full-Stack (React / Node)</option>
                      <option>Full-Stack (Vue / Laravel)</option>
                      <option>Backend (Python / Django)</option>
                      <option>Backend (Node.js)</option>
                      <option>Mobile (React Native)</option>
                      <option>Mobile (Flutter)</option>
                      <option>DevOps / Cloud</option>
                      <option>AI / ML Engineer</option>
                      <option>Product Designer</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="fc-group">
                    <label>Engagement duration</label>
                    <select defaultValue="6–12 months">
                      <option>1–3 months</option>
                      <option>3–6 months</option>
                      <option>6–12 months</option>
                      <option>12+ months</option>
                    </select>
                  </div>
                  <button className="btn btn-primary" type="submit" style={{ width: "100%", justifyContent: "center", marginTop: 8 }}>
                    See matched profiles <span className="arr">↗</span>
                  </button>
                  <p style={{ fontSize: "12.5px", color: "var(--on-dark-muted)", textAlign: "center", marginTop: 12, fontFamily: "var(--mono)" }}>
                    No commitment · NDA signed first · 24-hour shortlist
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="marquee" style={{ margin: 0 }}>
        <div className="marquee-track">
          <span>React</span><span>Vue.js</span><span>Angular</span><span>Node.js</span><span>Python</span><span>Laravel</span><span>FastAPI</span><span>React Native</span><span>Flutter</span><span>DevOps</span><span>AWS</span><span>GCP</span><span>PostgreSQL</span><span>MongoDB</span><span>TypeScript</span><span>Docker</span><span>Kubernetes</span><span>Go</span><span>AI / ML</span><span>GraphQL</span>
          <span>React</span><span>Vue.js</span><span>Angular</span><span>Node.js</span><span>Python</span><span>Laravel</span><span>FastAPI</span><span>React Native</span><span>Flutter</span><span>DevOps</span><span>AWS</span><span>GCP</span><span>PostgreSQL</span><span>MongoDB</span><span>TypeScript</span><span>Docker</span><span>Kubernetes</span><span>Go</span><span>AI / ML</span><span>GraphQL</span>
        </div>
      </div>

      {/* ===== ENGAGEMENT MODELS ===== */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Engagement models</span>
              <h2 style={{ marginTop: 18 }}>Three ways to<br />work with us</h2>
            </div>
            <p>From a single specialist to a full embedded squad — pick the model that fits your context.</p>
          </div>
          <div className="engage-grid">
            <div className="engage-card reveal">
              <div className="ec-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="7" r="4" />
                  <path d="M3 21v-2a7 7 0 0114 0v2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Single engineer</h3>
              <p>One senior engineer, fully dedicated to your team. Works in your stack, attends your standups, and is accountable to your PM.</p>
              <div className="engage-price">
                <span className="ep-n">From $3,800</span><span className="ep-note">/month, full-time</span>
              </div>
              <ul className="engage-perks">
                <li>Dedicated 160 hrs/month</li>
                <li>Works in your timezone (±2h)</li>
                <li>Daily async updates</li>
                <li>14-day risk-free trial</li>
              </ul>
              <Link href="/contact" className="btn btn-ghost" style={{ width: "100%", justifyContent: "center" }}>
                Get started ↗
              </Link>
            </div>
            <div className="engage-card popular reveal">
              <div className="engage-pop">Most popular</div>
              <div className="ec-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
                  <circle cx="10" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h3>Pod team (2–4)</h3>
              <p>A balanced squad — typically a lead, a specialist, and a QA engineer. Can own a product stream end-to-end from day one.</p>
              <div className="engage-price">
                <span className="ep-n">From $9,500</span><span className="ep-note">/month, full team</span>
              </div>
              <ul className="engage-perks">
                <li>2–4 senior engineers</li>
                <li>Dedicated Slack channel</li>
                <li>Weekly sprint reviews</li>
                <li>Tech lead included</li>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Get started ↗
              </Link>
            </div>
            <div className="engage-card reveal">
              <div className="ec-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 6h18M7 6V4h10v2M5 6l1 14h12l1-14" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Embedded squad (5–12)</h3>
              <p>A full cross-functional team embedded inside your org. We bring engineering leadership, establish process, and report directly into your product org.</p>
              <div className="engage-price">
                <span className="ep-n">Custom pricing</span><span className="ep-note">from $18,000/mo</span>
              </div>
              <ul className="engage-perks">
                <li>5–12 engineers + PM</li>
                <li>Dedicated engineering manager</li>
                <li>Your workflows and tools</li>
                <li>Quarterly roadmap planning</li>
              </ul>
              <Link href="/contact" className="btn btn-ghost" style={{ width: "100%", justifyContent: "center" }}>
                Talk to us ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECH CHIPS ===== */}
      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Tech expertise</span>
              <h2 style={{ marginTop: 18 }}>Engineers across<br />every major stack</h2>
            </div>
            <p>We don&apos;t place generalists. Every engineer we deploy is a specialist in their domain.</p>
          </div>
          <div className="chips reveal">
            <div className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M9 8h2v8M13 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" /></svg>React</div>
            <div className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6 12l6-6 6 6-6 6z" /></svg>Vue.js</div>
            <div className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinejoin="round" /></svg>Angular</div>
            <div className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M8 6L3 12l5 6M16 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round" /></svg>Node.js</div>
            <div className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 17l-5.5 2.8 1-6.3L3 8.9 9 8z" strokeLinejoin="round" /></svg>Python</div>
            <div className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M9 9h6M9 12h6M9 15h4" strokeLinecap="round" /></svg>Laravel</div>
            <div className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M11 18h2" strokeLinecap="round" /></svg>React Native</div>
            <div className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" strokeLinejoin="round" /></svg>Flutter</div>
            <div className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 9l9-6 9 6v9a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M9 21V13h6v8" /></svg>AWS</div>
            <div className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></svg>DevOps</div>
            <div className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" strokeLinecap="round" /></svg>AI / ML</div>
            <div className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v6c0 1.7 4 3 9 3s9-1.3 9-3V5M3 11v6c0 1.7 4 3 9 3s9-1.3 9-3v-6" /></svg>PostgreSQL</div>
            <div className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4" strokeLinecap="round"/></svg>TypeScript</div>
            <div className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>Docker</div>
            <div className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 6v6l4 2" strokeLinecap="round"/></svg>FastAPI</div>
            <div className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round"/></svg>GraphQL</div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">How it works</span>
              <h2 style={{ marginTop: 18 }}>From brief to first<br />commit in 72 hours</h2>
            </div>
            <p>We&apos;ve built a pipeline that gets vetted senior engineers productive on your codebase fast.</p>
          </div>
          <div className="psteps reveal">
            <div className="pstep">
              <h4>Tell us what you need — 30 min</h4>
              <p>A short call to understand your stack, team size, and the role you need to fill. We confirm availability within a few hours.</p>
            </div>
            <div className="pstep">
              <h4>We shortlist 3 profiles — 24 hrs</h4>
              <p>We pick senior engineers from our bench who match your tech stack and domain. You get CVs, GitHub links, and a short video intro from each.</p>
            </div>
            <div className="pstep">
              <h4>You interview and select — 48 hrs</h4>
              <p>Brief 30-minute technical chat with each candidate. You choose who joins. If you&apos;re not satisfied, we replace them free of charge.</p>
            </div>
            <div className="pstep">
              <h4>Onboarding and first sprint — 72 hrs</h4>
              <p>We handle all onboarding admin. Your new engineer is in your Slack, your Jira, and shipping code within three business days.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: 54, background: "var(--ink)", borderRadius: 18, padding: "32px 36px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 0 }}>
            {[
              { icon: <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />, extra: <circle cx="12" cy="12" r="9" />, title: "Free replacement", body: "If it isn't working in the first 30 days, we replace the engineer at no cost — no questions asked." },
              { icon: <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" strokeLinejoin="round" />, extra: null, title: "NDA on day one", body: "Every engagement starts with a signed NDA. Your IP, codebase, and business logic are protected from day one." },
              { icon: <path d="M4 17l6-6 4 4 6-7" strokeLinecap="round" strokeLinejoin="round" />, extra: null, title: "Time-tracked billing", body: "Transparent daily logs, weekly reports, and end-of-month invoices. You see every hour — no black-box billing." },
            ].map((s, i) => (
              <div key={s.title} style={{ padding: "20px 28px", borderRight: i < 2 ? "1px solid var(--line-dark)" : undefined }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(236,23,99,.15)", display: "grid", placeItems: "center", color: "var(--accent)", marginBottom: 14 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={18} height={18}>{s.icon}{s.extra}</svg>
                </div>
                <div style={{ fontFamily: "var(--display)", fontSize: 16, fontWeight: 600, color: "var(--on-dark)", marginBottom: 8 }}>{s.title}</div>
                <p style={{ fontSize: 13.5, color: "var(--on-dark-muted)", lineHeight: 1.6 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPARISON ===== */}
      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Why Digital Web Weaver vs alternatives</span>
              <h2 style={{ marginTop: 18 }}>Senior engineers, not<br />agency headcount</h2>
            </div>
          </div>
          <div className="cmp reveal">
            <div className="cmp-row cmp-head">
              <div className="cmp-cell feat"></div>
              <div className="cmp-cell mid">Digital Web Weaver</div>
              <div className="cmp-cell right">Typical agency</div>
            </div>
            {[
              { feat: "Seniority level", us: "5+ yrs minimum", them: "Mixed — juniors common" },
              { feat: "Time to first deploy", us: "72 hours", them: "2–4 weeks" },
              { feat: "Code quality", us: "PR reviews, typed, tested", them: "Inconsistent" },
              { feat: "Communication", us: "Direct access, daily updates", them: "Via account manager" },
              { feat: "Replacement guarantee", us: "30-day free replacement", them: "Often paid or unavailable" },
              { feat: "NDA & IP protection", us: "Signed on day one", them: "Sometimes, on request" },
              { feat: "Billing transparency", us: "Daily logs + weekly reports", them: "Monthly black-box invoice" },
            ].map((r) => (
              <div key={r.feat} className="cmp-row">
                <div className="cmp-cell feat">{r.feat}</div>
                <div className="cmp-cell mid"><span className="yes">✓</span> {r.us}</div>
                <div className="cmp-cell right"><span className="no">✗</span> {r.them}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 style={{ marginTop: 18 }}>Questions we always<br />get asked</h2>
            </div>
          </div>
          <div className="faq-layout">
            <div className="faq-list">
              {[
                {
                  q: "Are these engineers full-time dedicated to us?",
                  a: "Yes. When you hire through Digital Web Weaver, the engineer works exclusively on your project during the engagement hours. They're not split across multiple clients.",
                },
                {
                  q: "What if the engineer isn't a good fit?",
                  a: "We offer a 30-day risk-free trial. If the engineer isn't meeting expectations within the first month, we replace them at no additional cost. No questions asked.",
                },
                {
                  q: "Who owns the code and intellectual property?",
                  a: "You do, 100%. All code written during the engagement is your IP. Our contracts are explicit about this, and the NDA reinforces it from day one.",
                },
                {
                  q: "What time zones do your engineers work in?",
                  a: "We primarily operate on IST (UTC+5:30) but our engineers are flexible on 4 hours of daily overlap with your local time. For US East Coast and UK clients, this works seamlessly.",
                },
                {
                  q: "What's the minimum engagement length?",
                  a: "Our minimum is 1 month, though we find that engagements under 3 months rarely see the full benefit of onboarding investment. We recommend a 3-month minimum for best results.",
                },
              ].map((item, i) => (
                <div key={item.q} className={`faq-item reveal${openFaq === i ? " open" : ""}`}>
                  <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {item.q}
                    <svg className="fq-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div className="faq-a"><p>{item.a}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section>
        <div className="wrap">
          <div className="cta reveal">
            <div className="cta-inner">
              <span className="eyebrow" style={{ color: "rgba(255,255,255,.85)" }}>Get started</span>
              <h2 style={{ marginTop: 18 }}>Need a senior engineer this week?</h2>
              <p>Tell us what you&apos;re building, and we&apos;ll send you three shortlisted profiles within 24 hours — no commitment required.</p>
              <div className="cta-actions">
                <Link href="/contact" className="btn btn-primary">See matched profiles <span className="arr">↗</span></Link>
                <Link href="/portfolio" className="btn btn-ghost">See our work</Link>
              </div>
              <div className="cta-meta">
                <span>● 72-hour deployment</span>
                <span>● 30-day free replacement</span>
                <span>● NDA day one</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
