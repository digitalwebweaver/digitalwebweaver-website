"use client";
import { useState } from "react";
import Link from "next/link";

export default function WebDesignVadodaraClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      {/* ===== SVC HERO ===== */}
      <section className="svc-hero">
        <div className="wrap">
          <div className="breadcrumb reveal">
            <Link href="/">Home</Link><span className="sep">/</span>
            <Link href="/#services">Services</Link><span className="sep">/</span>Web Design Vadodara
          </div>
          <div className="svc-hero-grid">
            <div className="shg-left">
              <span className="eyebrow reveal">Web design company in Vadodara, Gujarat</span>
              <h1 className="reveal" style={{ marginTop: 18 }}>
                #1 Web Design Company in <span className="accent">Vadodara, Gujarat</span>
              </h1>
              <p className="lead reveal">
                We&apos;re a senior engineering studio headquartered in Vadodara — serving local businesses who want a real engineering partner, not a template shop. Our clients get the same quality we deliver to UK and US companies, at Vadodara pricing.
              </p>
              <div className="hero-stats reveal">
                <div className="hs">
                  <div className="hn" data-count="200" data-suffix="+">200+</div>
                  <div className="hl">Projects delivered</div>
                </div>
                <div className="hs">
                  <div className="hn" data-count="12" data-suffix="+ yrs">12+ yrs</div>
                  <div className="hl">Based in Vadodara</div>
                </div>
                <div className="hs">
                  <div className="hn" data-count="12" data-suffix="+">12+</div>
                  <div className="hl">Countries served</div>
                </div>
              </div>
              <div className="usedby reveal">
                <span>Trusted by Vadodara businesses</span>
                <div className="ub-chips">
                  <div className="ub-c">Local MSME</div>
                  <div className="ub-c">Manufacturers</div>
                  <div className="ub-c">Retailers</div>
                  <div className="ub-c">Startups</div>
                </div>
              </div>
            </div>
            <div className="shg-right reveal">
              <div className="form-card">
                <div className="fc-head">
                  <div className="fc-tag">Vadodara studio</div>
                  <h3>Talk to a local team</h3>
                  <p>In-person meetings available. Free consultation for Vadodara businesses.</p>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="fc-group">
                    <label>Name</label>
                    <input type="text" placeholder="Your name" required />
                  </div>
                  <div className="fc-group">
                    <label>Phone / WhatsApp</label>
                    <input type="tel" placeholder="+91 98XXX XXXXX" required />
                  </div>
                  <div className="fc-group">
                    <label>Business type</label>
                    <select>
                      <option>Manufacturer / industrial</option>
                      <option>Retail / e-commerce</option>
                      <option>Service business</option>
                      <option>Startup / app idea</option>
                      <option>Healthcare / clinic</option>
                    </select>
                  </div>
                  <div className="fc-group">
                    <label>What do you need?</label>
                    <select>
                      <option>New website</option>
                      <option>Website redesign</option>
                      <option>E-commerce store</option>
                      <option>Web / mobile app</option>
                      <option>Digital marketing site</option>
                    </select>
                  </div>
                  <div className="fc-group">
                    <label>Tell us about your business</label>
                    <textarea rows={3} placeholder="What your business does and what you want from a website..." />
                  </div>
                  <button className="btn btn-primary" type="submit" style={{ width: "100%", justifyContent: "center", marginTop: 8 }}>
                    Request free consultation <span className="arr">↗</span>
                  </button>
                  <p style={{ fontSize: 12, color: "var(--on-dark-muted)", textAlign: "center", marginTop: 12, fontFamily: "var(--mono)" }}>
                    In-person or online · Free · 24-hour response
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="marquee">
        <div className="marquee-track">
          <span>Website design</span><span>Web development</span><span>Mobile apps</span><span>E-commerce</span><span>WordPress</span><span>WooCommerce</span><span>React</span><span>Next.js</span><span>SEO</span><span>Vadodara</span><span>Gujarat</span><span>India</span>
          <span>Website design</span><span>Web development</span><span>Mobile apps</span><span>E-commerce</span><span>WordPress</span><span>WooCommerce</span><span>React</span><span>Next.js</span><span>SEO</span><span>Vadodara</span><span>Gujarat</span><span>India</span>
        </div>
      </div>

      {/* ===== WHAT WE BUILD ===== */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">What we build</span>
              <h2 style={{ marginTop: 18 }}>Everything a Vadodara<br />business needs online</h2>
            </div>
            <p>From a first business website to complex software products — we build it all, to a standard that&apos;s unusual for a local studio.</p>
          </div>
          <div className="svc-grid">
            <div className="svc-card reveal">
              <div className="sc-num">01</div>
              <div className="sc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="3" /><path d="M3 9h18" />
                </svg>
              </div>
              <h3>Business websites</h3>
              <p>Fast, SEO-optimised company websites for local Vadodara businesses. Google-ready from day one, with a CMS your team can update without us.</p>
              <div className="sc-tags"><span>SEO-first</span><span>CMS</span></div>
            </div>
            <div className="svc-card reveal">
              <div className="sc-num">02</div>
              <div className="sc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="9" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" />
                  <path d="M2 3h3l2.5 12h11" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>E-commerce &amp; online stores</h3>
              <p>WooCommerce and Shopify stores for Gujarat retailers and manufacturers — with payment gateway integration (Razorpay, PayU), GST-compliant invoicing, and inventory management.</p>
              <div className="sc-tags"><span>Razorpay</span><span>GST invoicing</span></div>
            </div>
            <div className="svc-card reveal">
              <div className="sc-num">03</div>
              <div className="sc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="6" y="2" width="12" height="20" rx="3" /><path d="M11 18h2" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Mobile app development</h3>
              <p>Android and iOS apps for local startups, businesses, and field operations. React Native for cost-efficient cross-platform development from a single codebase.</p>
              <div className="sc-tags"><span>Android</span><span>iOS</span></div>
            </div>
            <div className="svc-card reveal">
              <div className="sc-num">04</div>
              <div className="sc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                </svg>
              </div>
              <h3>Business web applications</h3>
              <p>Custom web apps for manufacturing, logistics, and service businesses — inventory management, dealer portals, employee management, and reporting dashboards.</p>
              <div className="sc-tags"><span>Custom portals</span><span>Dashboards</span></div>
            </div>
            <div className="svc-card reveal">
              <div className="sc-num">05</div>
              <div className="sc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Website redesign</h3>
              <p>Is your current website outdated, slow, or getting no leads? We redesign with a focus on conversion — not just aesthetics. Free performance audit before we start.</p>
              <div className="sc-tags"><span>CRO-focused</span><span>Performance</span></div>
            </div>
            <div className="svc-card reveal">
              <div className="sc-num">06</div>
              <div className="sc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 17l6-6 4 4 6-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>SEO &amp; digital growth</h3>
              <p>Technical SEO setup, structured data, site speed optimisation, and local SEO for Google Business — so your Vadodara business ranks when customers search.</p>
              <div className="sc-tags"><span>Local SEO</span><span>Google Business</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY FORGE DARK ===== */}
      <section className="dark sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow on-dark">Local presence, global standards</span>
              <h2 style={{ marginTop: 18, color: "var(--on-dark)" }}>Why choose Digital Web Weaver<br />over other Vadodara agencies?</h2>
            </div>
          </div>
          <div className="cap-grid">
            <div className="cap reveal">
              <div className="cp-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h4>Global client experience</h4>
              <p>We serve clients in the UK, US, and South Africa. That standard of engineering, communication, and delivery comes to every local project.</p>
            </div>
            <div className="cap reveal">
              <div className="cp-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <h4>No templates, no shortcuts</h4>
              <p>We don&apos;t install a theme and call it a website. Every project is custom-designed and engineered — whether it&apos;s a ₹50k business site or a ₹5L SaaS product.</p>
            </div>
            <div className="cap reveal">
              <div className="cp-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" />
                </svg>
              </div>
              <h4>Senior engineers only</h4>
              <p>Your project is built by engineers with 5+ years of experience — not handed to a fresher once the deal is signed. The person you talk to is the person who builds it.</p>
            </div>
            <div className="cap reveal">
              <div className="cp-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 9l9-6 9 6v9a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M9 21V13h6v8" />
                </svg>
              </div>
              <h4>In-person meetings available</h4>
              <p>Based in Vadodara, we can meet face-to-face. For clients who value direct communication and local accountability, we&apos;re your studio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">For Vadodara businesses</span>
              <h2 style={{ marginTop: 18 }}>Industries we serve<br />in Vadodara &amp; Gujarat</h2>
            </div>
            <p>From heavy industry to local retail — we understand the Gujarat business landscape and the digital challenges each sector faces.</p>
          </div>
          <div className="svc-grid">
            <div className="svc-card reveal">
              <div className="sc-num">◆</div>
              <div className="sc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="8" width="18" height="12" rx="2" /><path d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2" />
                </svg>
              </div>
              <h3>Manufacturing &amp; industrial</h3>
              <p>Dealer portals, product catalogues, B2B order management, and company sites for Vadodara&apos;s large manufacturing sector. We understand the MSME export market.</p>
              <div className="sc-tags"><span>B2B portal</span><span>Catalogue</span></div>
            </div>
            <div className="svc-card reveal">
              <div className="sc-num">◆</div>
              <div className="sc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="9" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" />
                  <path d="M2 3h3l2.5 12h11" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Retail &amp; D2C brands</h3>
              <p>Online stores for local Gujarat brands reaching national customers — with Razorpay integration, GST invoicing, and WhatsApp order notifications.</p>
              <div className="sc-tags"><span>WooCommerce</span><span>Razorpay</span></div>
            </div>
            <div className="svc-card reveal">
              <div className="sc-num">◆</div>
              <div className="sc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21s-7-4.5-9-9a5 5 0 019-3 5 5 0 019 3c-2 4.5-9 9-9 9z" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Healthcare &amp; clinics</h3>
              <p>Clinic websites with appointment booking, doctor profiles, and WhatsApp integration. Patient-friendly design that builds trust before the first visit.</p>
              <div className="sc-tags"><span>Appointment booking</span><span>WhatsApp</span></div>
            </div>
            <div className="svc-card reveal">
              <div className="sc-num">◆</div>
              <div className="sc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 21V10l9-7 9 7v11" strokeLinejoin="round" /><path d="M9 21v-6h6v6" />
                </svg>
              </div>
              <h3>Real estate &amp; construction</h3>
              <p>Property listing sites, project showcase pages, enquiry management, and virtual tour integration for Vadodara builders and real estate agents.</p>
              <div className="sc-tags"><span>Property listings</span><span>Lead capture</span></div>
            </div>
            <div className="svc-card reveal">
              <div className="sc-num">◆</div>
              <div className="sc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3>Education &amp; coaching</h3>
              <p>Course websites, online registration forms, batch management portals, and student progress dashboards for coaching institutes and educational businesses.</p>
              <div className="sc-tags"><span>Registration</span><span>Batch management</span></div>
            </div>
            <div className="svc-card reveal">
              <div className="sc-num">◆</div>
              <div className="sc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M8 6L3 12l5 6M16 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Tech startups</h3>
              <p>Vadodara has a growing startup scene. We help founders build their first product right — MVP in 8–10 weeks, production-grade architecture, and investor-ready demo.</p>
              <div className="sc-tags"><span>MVP</span><span>Startup-friendly</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY FORGE DARK 2 ===== */}
      <section className="dark sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow on-dark">Why Digital Web Weaver</span>
              <h2 style={{ marginTop: 18, color: "var(--on-dark)" }}>Vadodara&apos;s most experienced<br />engineering studio</h2>
            </div>
          </div>
          <div className="why-grid">
            <div className="why reveal">
              <div className="wi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 17l6-6 4 4 6-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>8 years in Vadodara</h3>
              <p>We know the local business ecosystem. We&apos;ve worked with manufacturers, retailers, healthcare providers, and startups across Gujarat — and we understand what matters locally.</p>
            </div>
            <div className="why reveal">
              <div className="wi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <h3>Hindi, Gujarati &amp; English</h3>
              <p>We work in the language you&apos;re comfortable with. Technical discussions in English, client conversations in Hindi or Gujarati — whichever works for you.</p>
            </div>
            <div className="why reveal">
              <div className="wi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Fixed price, no surprises</h3>
              <p>We scope carefully and commit in writing. No &ldquo;scope creep&rdquo; charges, no sudden cost increases. The price we quote is the price you pay.</p>
            </div>
            <div className="why reveal">
              <div className="wi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 9l9-6 9 6v9a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M9 21V13h6v8" />
                </svg>
              </div>
              <h3>Long-term relationships</h3>
              <p>Most of our Vadodara clients have been with us for 3+ years. We&apos;re not a vendor — we&apos;re your technology partner. When your business grows, we grow with you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="sec">
        <div className="wrap">
          <div className="testi-grid">
            <div className="quote reveal">
              <div className="stars">★★★★★</div>
              <p>We&apos;re a chemical manufacturer in GIDC Vadodara. Digital Web Weaver built us a B2B dealer portal that replaced our email-based order system. Our distributors love it and our order errors dropped to zero.</p>
              <div className="who">
                <div className="av">HM</div>
                <div><b>Hitesh M.</b><span>MD · Chemical Manufacturer · Vadodara</span></div>
              </div>
            </div>
            <div className="quote reveal">
              <div className="stars">★★★★★</div>
              <p>Local studio, but delivery like a Mumbai agency. They understood exactly what a Vadodara retailer going online needs — Razorpay, GST invoicing, WhatsApp orders — and built it all in 6 weeks.</p>
              <div className="who">
                <div className="av">SP</div>
                <div><b>Sneha P.</b><span>Owner · Textile Retail · Vadodara</span></div>
              </div>
            </div>
            <div className="quote reveal">
              <div className="stars">★★★★★</div>
              <p>Best web development company in Vadodara, without question. They&apos;ve been building and maintaining our clinic website and app for 4 years. Patients actually use the booking system — that&apos;s rare.</p>
              <div className="who">
                <div className="av">DA</div>
                <div><b>Dr. A. Desai</b><span>Director · Multi-Speciality Clinic · Vadodara</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 style={{ marginTop: 18 }}>Vadodara web design questions</h2>
            </div>
          </div>
          <div className="faq-layout">
            <div className="faq-list">
              {[
                {
                  q: "How much does a website cost in Vadodara?",
                  a: "A small business website typically starts at ₹25,000–₹60,000 for a clean, custom-designed site with CMS. A WooCommerce e-commerce store runs ₹50,000–₹1,50,000 depending on products and features. A web application or SaaS product is scoped individually. We give fixed-price quotes — no surprises.",
                },
                {
                  q: "Can we meet you in person in Vadodara?",
                  a: "Yes. We're based in Vadodara and welcome in-person meetings at our studio or your office. For the initial consultation, meeting face-to-face often makes scoping faster and clearer. WhatsApp and phone calls work for ongoing communication.",
                },
                {
                  q: "Do you only work with Vadodara businesses?",
                  a: "No — around 60% of our clients are outside Vadodara, including companies in the UK, US, and other Indian cities. But we do prioritise serving local Vadodara businesses well and offer in-person project management that remote clients can't get.",
                },
                {
                  q: "How long does a website take to build in Vadodara?",
                  a: "A business website typically takes 3–5 weeks from brief to launch. A WooCommerce store runs 5–8 weeks. A custom web application or mobile app is 10–20+ weeks. We give you a detailed, week-by-week milestone plan before starting.",
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

      {/* ===== ALSO SERVING GUJARAT ===== */}
      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Service area</span>
              <h2 style={{ marginTop: 18 }}>Also serving businesses across Gujarat</h2>
              <p style={{ marginTop: 14, color: "var(--body-muted)", maxWidth: 560 }}>
                Based in Vadodara, we serve clients across the state. Visit our city-specific pages for local context and industry focus.
              </p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginTop: 32 }}>
            {[
              { city: "Ahmedabad", desc: "IT firms, startups, GIFT City fintech, textile & pharma", href: "/web-design-ahmedabad/" },
              { city: "Surat", desc: "Diamond traders, textile exporters, e-commerce, SME manufacturers", href: "/web-design-surat/" },
              { city: "Rajkot", desc: "Engineering goods, auto parts, SME manufacturing, export portals", href: "/web-design-rajkot/" },
              { city: "All of Gujarat", desc: "Serving MSMEs, manufacturers, startups, and traders statewide", href: "/web-design-gujarat/" },
            ].map(({ city, desc, href }) => (
              <Link
                key={city}
                href={href}
                style={{
                  display: "block",
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: 14,
                  padding: "22px 24px",
                  textDecoration: "none",
                  transition: ".2s",
                }}
              >
                <div style={{ fontWeight: 600, fontSize: 16, color: "var(--heading)", marginBottom: 8 }}>
                  {city} →
                </div>
                <div style={{ fontSize: 14, color: "var(--body-muted)", lineHeight: 1.5 }}>{desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section>
        <div className="wrap">
          <div className="cta reveal">
            <div className="cta-inner">
              <span className="eyebrow" style={{ color: "rgba(255,255,255,.85)" }}>Based in Vadodara</span>
              <h2 style={{ marginTop: 18 }}>Ready to build a website that actually brings you business?</h2>
              <p>Free consultation — in person at our Vadodara studio or online. We&apos;ll scope your project and give you a fixed-price quote within 24 hours.</p>
              <div className="cta-actions">
                <Link href="/contact" className="btn btn-primary">Book free consultation <span className="arr">↗</span></Link>
                <Link href="/portfolio" className="btn btn-ghost">See our work</Link>
              </div>
              <div className="cta-meta">
                <span>● Based in Vadodara</span>
                <span>● Fixed price</span>
                <span>● In-person available</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
