import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Privacy Policy | Digital Web Weaver" },
  description: "How Digital Web Weaver collects, uses, and protects the personal data of clients, website visitors, and prospects.",
  alternates: { canonical: "/privacy-policy/" },
  openGraph: { title: "Privacy Policy | Digital Web Weaver", description: "How Digital Web Weaver collects, uses, and protects the personal data of clients, website visitors, and prospects.", url: "/privacy-policy/", type: "website" },
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-policy" data-target="s-policy" title="Policy">𝑓</button>
      <button className="activitybar__btn" data-scroll="s-contact" data-target="s-contact" title="Contact">✉</button>
      <span className="activitybar__geo" title="India · UK · South Africa">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{ color: "var(--teal)" }}>●</span> privacy-policy.md</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{ color: "var(--green)" }}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section reveal">
          <p className="hero__meta">// privacy-policy.md · legal</p>
          <span className="badge">PRIVACY POLICY</span>
          <h1 className="hero__h1">Privacy <span className="pink">Policy</span></h1>
          <div className="article__meta">
            <span><b>Effective:</b> June 1, 2024</span>
            <span><b>Last updated:</b> June 1, 2026</span>
          </div>
        </section>

        <section id="s-policy" className="section reveal">
          <div className="article">
            <h2>1. Overview</h2>
            <p>Digital Web Weaver commits to protecting privacy for clients, website visitors, and prospects. This policy covers information collected via digitalwebweaver.com and related services. By using this website, you agree to these terms; if you disagree, please do not use the site.</p>

            <h2>2. What We Collect</h2>
            <h3>Directly provided information</h3>
            <ul>
              <li>Name, job title, email, phone number</li>
              <li>Company details (name, size, industry)</li>
              <li>Project details and communications</li>
              <li>Payment data (processed by third parties; card details are not stored by us)</li>
            </ul>
            <h3>Automatically collected data</h3>
            <ul>
              <li>IP address and approximate location (country/city level)</li>
              <li>Browser, device, and OS information</li>
              <li>Page visit patterns, referral sources, click behavior, scroll depth</li>
            </ul>
            <h3>Third-party sources</h3>
            <p>LinkedIn, Clutch, referral partners, and professional directories.</p>

            <h2>3. How We Use It</h2>
            <h3>Processing purposes</h3>
            <ul>
              <li>Service delivery</li>
              <li>Communication and support</li>
              <li>Marketing (newsletters, case studies — opt-out available)</li>
              <li>Analytics and site improvement</li>
              <li>Legal compliance (accounting, tax, data protection)</li>
              <li>Security and fraud prevention</li>
            </ul>
            <p><strong>Legal bases:</strong> contract performance, legitimate interests, legal obligation, and consent.</p>

            <h2>4. Sharing Data</h2>
            <p>We do not sell personal data. We share it in limited circumstances with:</p>
            <ul>
              <li>Service providers: AWS, Google Analytics, HubSpot, Stripe, Mailchimp</li>
              <li>Business transfers (with advance notice if an acquisition or merger occurs)</li>
              <li>Legal requirements or court orders</li>
              <li>Protection of rights and safety</li>
            </ul>
            <p><strong>Cross-border transfer:</strong> data is not transferred outside the EEA without safeguards such as Standard Contractual Clauses.</p>

            <h2>5. Cookies</h2>
            <p>We use three types of cookies:</p>
            <ul>
              <li>Essential (required; non-negotiable)</li>
              <li>Analytics (Google Analytics; consent-based)</li>
              <li>Marketing (retargeting; consent-based)</li>
            </ul>
            <p>Cookies are managed via our cookie banner or your browser settings. Disabling some cookies may degrade your experience on the site.</p>

            <h2>6. Data Retention</h2>
            <table>
              <thead>
                <tr><th>Data type</th><th>Retention period</th></tr>
              </thead>
              <tbody>
                <tr><td>Client records</td><td>7 years post-project</td></tr>
                <tr><td>Prospective inquiries</td><td>2 years from last contact</td></tr>
                <tr><td>Newsletter subscribers</td><td>Until unsubscribe</td></tr>
                <tr><td>Analytics</td><td>26 months</td></tr>
                <tr><td>Security logs</td><td>12 months</td></tr>
              </tbody>
            </table>
            <p>After expiration, data is deleted or anonymized.</p>

            <h2>7. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the data we hold about you</li>
              <li>Correct inaccurate information</li>
              <li>Request erasure ("right to be forgotten")</li>
              <li>Restrict processing</li>
              <li>Request data portability</li>
              <li>Object to processing</li>
              <li>Withdraw consent</li>
            </ul>
            <p>We respond within <strong>30 days</strong>. Contact <a href="mailto:info@digitalwebweaver.com">info@digitalwebweaver.com</a>. EEA residents may lodge complaints with their national data protection authority.</p>

            <h2>8. Security</h2>
            <ul>
              <li>TLS 1.3 encryption in transit; AES-256 at rest</li>
              <li>Role-based access control</li>
              <li>Regular security audits</li>
              <li>Employee training</li>
              <li>ISO 27001-aligned incident response</li>
            </ul>
            <p>No system is completely secure. Please report suspected breaches to <a href="mailto:info@digitalwebweaver.com">info@digitalwebweaver.com</a> immediately.</p>

            <h2>9. Children</h2>
            <p>Our services target business professionals and are not directed at users under 16. If we inadvertently collect data from a child, it is deleted immediately upon discovery.</p>

            <h2>10. Changes to This Policy</h2>
            <p>Updates are posted with a revised "Last updated" date. Material changes receive prominent notice (email or banner). Continued use of the site constitutes acceptance of the updated policy.</p>

            <h2>11. Contact Us</h2>
            <p><strong>Data protection inquiries:</strong></p>
            <ul>
              <li>Email: <a href="mailto:info@digitalwebweaver.com">info@digitalwebweaver.com</a></li>
              <li>Phone: <a href="tel:+919712515105">+91 97125 15105</a></li>
              <li>Registered office: 207/208 Sanket Heights, Sunpharma Road, Vadodara 390012, Gujarat, India</li>
            </ul>
            <p><strong>EU/EEA:</strong> you have the right to complain to your local supervisory authority if unsatisfied with our response.</p>

            <h2>Key Data-Related Reference</h2>
            <table>
              <thead>
                <tr><th>Category</th><th>Details</th></tr>
              </thead>
              <tbody>
                <tr><td>Primary contact</td><td>info@digitalwebweaver.com</td></tr>
                <tr><td>Data classes</td><td>Names, emails, phones, company info, project details, payment data (third-party processed), technical metrics</td></tr>
                <tr><td>Main service providers</td><td>AWS, Google Analytics, HubSpot, Stripe, Mailchimp</td></tr>
                <tr><td>Compliance standards</td><td>ISO 27001, SOC 2 Type II, GDPR-aligned</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --data-inquiry<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Questions about your data?</h2>
          <p className="cta__lead">Reach our data protection team directly — we respond to every inquiry within 30 days.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Contact us</Link>
            <a className="btn btn--ghost" href="mailto:info@digitalwebweaver.com">Email info@digitalwebweaver.com</a>
          </div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">privacy-policy.md</span><span>Markdown</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
