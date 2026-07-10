"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [subEmail, setSubEmail] = useState("");
  const [subState, setSubState] = useState<"idle"|"loading"|"done"|"error">("idle");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!subEmail.includes("@")) return;
    setSubState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: subEmail }),
      });
      setSubState(res.ok ? "done" : "error");
    } catch {
      setSubState("error");
    }
  }

  return (
    <footer>
      <div className="wrap">

        {/* Newsletter */}
        <div className="foot-news">
          <div>
            <h3>Build something that lasts.</h3>
            <p>Engineering notes, case studies, and hiring news — once a month, no noise.</p>
          </div>
          {subState === "done" ? (
            <p style={{ color: "#a3e635", fontWeight: 600, fontSize: "15px" }}>✓ Subscribed! Watch your inbox.</p>
          ) : (
          <form className="news-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="you@company.com"
              aria-label="Email address"
              value={subEmail}
              onChange={(e) => setSubEmail(e.target.value)}
              required
            />
            <button className="btn btn-primary" type="submit" disabled={subState === "loading"}>
              {subState === "loading" ? "…" : <><span>Subscribe</span> <span className="arr">↗</span></>}
            </button>
          </form>
          )}
          {subState === "error" && <p style={{ color: "#f87171", fontSize: "13px", marginTop: "8px" }}>Something went wrong. Try again.</p>}
        </div>

        {/* Main grid */}
        <div className="foot-top">
          <div className="foot-brand">
            <Link href="/" className="brand brand-logo brand-logo-dark">
              <Image src="/logo.png" alt="Digital Web Weaver" width={391} height={152} />
            </Link>
            <p>A senior engineering studio building high-performance software, SaaS platforms, and AI systems for ambitious teams since 2013.</p>
            <p><strong>Office:</strong> 207/208 Sanket Heights, Sunpharma Road, Vadodara 390012, Gujarat, India</p>
            <div className="foot-contact">
              <a href="mailto:info@digitalwebweaver.com">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                info@digitalwebweaver.com
              </a>
              <a href="tel:+919712515105">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 4h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" strokeLinejoin="round"/></svg>
                +91 97125 15105
              </a>
              <a className="wa-lnk" href="https://wa.me/919722915105" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.05 2zm5.8 14.13c-.24.68-1.42 1.3-1.96 1.38-.5.08-1.13.11-1.83-.12-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.17-4.94-4.36-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2.01.88 2.16.07.15.12.32.02.51-.09.2-.14.32-.28.49-.14.17-.29.38-.42.51-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.45.12.61-.07.17-.2.7-.81.89-1.09.18-.28.37-.23.62-.14.26.09 1.62.77 1.9.91.28.14.46.21.53.33.07.12.07.68-.17 1.36z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
            <div className="socials">
              <a href="#" aria-label="X/Twitter"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h3l-7 8 8 12h-6l-5-7-5 7H-.5l8-9L0 2h6l4 6z"/></svg></a>
              <a href="#" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4a2 2 0 110 4 2 2 0 010-4zM3 9h2v12H3zM9 9h2v2c.5-1 2-2 3.5-2 3 0 3.5 2 3.5 4.5V21h-2v-6c0-1.5-.5-2.5-2-2.5s-2 1-2 2.5v6H9z"/></svg></a>
              <a href="#" aria-label="GitHub"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-3 19.5c.5 0 .7-.2.7-.5v-2c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.4-1.1-1.4-.9-.6 0-.6 0-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1 2.9.8 0-.7.4-1 .6-1.3-2.2-.2-4.5-1.1-4.5-5 0-1 .4-1.9 1-2.5 0-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9 9 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.1 2.3.1 2.6.6.6 1 1.5 1 2.5 0 3.9-2.3 4.8-4.5 5 .4.3.7.9.7 1.8v2.7c0 .3.2.5.7.5A10 10 0 0012 2z"/></svg></a>
            </div>
          </div>

          <div className="foot-col">
            <h5>Services</h5>
            <Link href="/web-development/"><span className="tagdot"></span>Web &amp; SaaS</Link>
            <Link href="/custom-software-development/"><span className="tagdot"></span>Custom software</Link>
            <Link href="/mobile-app-development/"><span className="tagdot"></span>Mobile apps</Link>
            <Link href="/ai-automation/"><span className="tagdot"></span>AI &amp; automation</Link>
            <Link href="/cloud-devops/"><span className="tagdot"></span>Cloud &amp; DevOps</Link>
            <Link href="/ui-ux-design/"><span className="tagdot"></span>Product design</Link>
          </div>

          <div className="foot-col">
            <h5>Industries</h5>
            <Link href="/fintech/"><span className="tagdot"></span>FinTech</Link>
            <Link href="/healthcare/"><span className="tagdot"></span>HealthTech</Link>
            <Link href="/retail-ecommerce/"><span className="tagdot"></span>E-commerce</Link>
            <Link href="/logistics/"><span className="tagdot"></span>Logistics</Link>
            <Link href="/edtech/"><span className="tagdot"></span>EdTech</Link>
            <Link href="/real-estate/"><span className="tagdot"></span>Real estate</Link>
          </div>

          <div className="foot-col">
            <h5>Locations</h5>
            <Link href="/web-design-vadodara/"><span className="tagdot"></span>Vadodara</Link>
            <Link href="/web-design-ahmedabad/"><span className="tagdot"></span>Ahmedabad</Link>
            <Link href="/web-design-surat/"><span className="tagdot"></span>Surat</Link>
            <Link href="/web-design-rajkot/"><span className="tagdot"></span>Rajkot</Link>
            <Link href="/web-design-gujarat/"><span className="tagdot"></span>Gujarat</Link>
            <Link href="/software-development-company-uk/"><span className="tagdot"></span>United Kingdom</Link>
            <Link href="/software-development-company-south-africa/"><span className="tagdot"></span>South Africa</Link>
            <Link href="/agence-developpement-web-abidjan/"><span className="tagdot"></span>Abidjan (FR)</Link>
          </div>

          <div className="foot-col">
            <h5>Company</h5>
            <Link href="/about/"><span className="tagdot"></span>About us</Link>
            <Link href="/portfolio/"><span className="tagdot"></span>Our work</Link>
            <Link href="/products/"><span className="tagdot"></span>Our Products</Link>
            <Link href="/cost-estimator/"><span className="tagdot"></span>Cost estimator</Link>
            <Link href="/blog/"><span className="tagdot"></span>Blog</Link>
            <Link href="/careers/"><span className="tagdot"></span>Careers</Link>
            <Link href="/contact/"><span className="tagdot"></span>Contact</Link>
          </div>
        </div>

        {/* Offices */}
        <div className="foot-offices">
          <span className="fo-label">Our Offices</span>
          <div className="fo-grid">
            <a className="fo-card" href="tel:+919712515105">
              <span className="fo-flag" aria-hidden="true">🇮🇳</span>
              <span className="fo-info">
                <span className="fo-country">India <em>Development Studio</em></span>
                <span className="fo-addr">207/208 Sanket Heights, Sunpharma Road, Atladra, Vadodara 390012, Gujarat</span>
                <span className="fo-phone">+91 97125 15105</span>
              </span>
            </a>
            <a className="fo-card" href="tel:+27760460763">
              <span className="fo-flag" aria-hidden="true">🇿🇦</span>
              <span className="fo-info">
                <span className="fo-country">South Africa <em>Sales</em></span>
                <span className="fo-phone">+27 76 046 0763</span>
              </span>
            </a>
            <a className="fo-card" href="tel:+2550757876064">
              <span className="fo-flag" aria-hidden="true">🇨🇮</span>
              <span className="fo-info">
                <span className="fo-country">Ivory Coast <em>Sales</em></span>
                <span className="fo-phone">+255 0757876064</span>
              </span>
            </a>
          </div>
        </div>

        {/* Certifications */}
        <div className="foot-certs">
          <span className="cl">Compliance</span>
          <div className="cert"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg> ISO 27001</div>
          <div className="cert"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg> SOC 2 Type II</div>
          <div className="cert"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg> GDPR aligned</div>
          <div className="cert"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 17l-5.5 2.8 1-6.3L3 8.9 9 8z" strokeLinejoin="round"/></svg> 4.9 / 5 Clutch</div>
        </div>

        {/* Bottom */}
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Digital Web Weaver. All rights reserved.</span>
          <div className="foot-legal">
            <Link href="/privacy-policy/">Privacy</Link>
            <Link href="/contact/">Contact</Link>
            <a href="#">Terms</a>
            <a href="#">Security</a>
          </div>
          <div className="foot-region">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>
            <span className="locs">India · UK · South Africa · US</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
