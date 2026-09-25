import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { privacyPolicySchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "Privacy Policy | Digital Web Weaver" },
  description: "How Digital Web Weaver collects, uses, and protects the personal data of clients, website visitors, and prospects.",
  alternates: { canonical: "/privacy-policy/" },
  openGraph: { title: "Privacy Policy | Digital Web Weaver", description: "How Digital Web Weaver collects, uses, and protects the personal data of clients, website visitors, and prospects.", url: "/privacy-policy/", type: "website" },
};

export default function Page() {
  return (
    <>
    <JsonLd data={privacyPolicySchema()} />
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
            <span><b>Last updated:</b> September 25, 2026</span>
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
            <p>We do not run analytics or behavioral tracking on this site. The only automatic collection happens when you submit an enquiry form, at which point we record:</p>
            <ul>
              <li>IP address and an approximate location (city/region level, via a third-party lookup)</li>
              <li>Standard web server request logs kept by our hosting provider (Vercel)</li>
            </ul>
            <h3>Third-party sources</h3>
            <p>LinkedIn, Clutch, referral partners, and professional directories.</p>

            <h2>3. How We Use It</h2>
            <h3>Processing purposes</h3>
            <ul>
              <li>Responding to enquiries submitted through our forms</li>
              <li>Service delivery, communication, and support for clients</li>
              <li>Legal compliance (accounting, tax, data protection)</li>
              <li>Security and fraud prevention</li>
            </ul>
            <p>When you submit an enquiry form, we ask for your explicit, opt-in consent — via an unticked checkbox you must actively select — before we process your details for that enquiry. You are told plainly what we collect and why at the point of collection, and you can withdraw consent at any time (see Section 7).</p>
            <p><strong>Legal bases:</strong> your consent (enquiry forms), contract performance (active client work), legal obligation, and legitimate interests (e.g. security, fraud prevention).</p>

            <h2>4. Sharing Data</h2>
            <p>We do not sell personal data, and we do not run marketing or retargeting campaigns with it. We share it only with the processors that operate this website and our email delivery, and in limited legal circumstances:</p>
            <ul>
              <li>Supabase (database hosting for enquiry records)</li>
              <li>Resend (transactional email delivery, to route your enquiry to our team)</li>
              <li>ipapi.co (approximate IP-based location lookup, for fraud/spam screening)</li>
              <li>Vercel (website hosting infrastructure)</li>
              <li>Business transfers (with advance notice if an acquisition or merger occurs)</li>
              <li>Legal requirements or court orders</li>
              <li>Protection of rights and safety</li>
            </ul>
            <p><strong>Cross-border transfer:</strong> our infrastructure providers may process data outside your home country; where that includes the EEA/UK, we rely on their standard contractual safeguards.</p>

            <h2>5. Cookies &amp; Local Storage</h2>
            <p>This site does not currently set analytics, advertising, or retargeting cookies, and we do not run Google Analytics or any similar tracking. The only browser storage we use is a single <code>localStorage</code> entry to remember your light/dark theme preference on your device — this never leaves your browser and is not personal data. If that changes in the future, we will add a cookie consent banner before any non-essential cookie is set, and update this section accordingly.</p>

            <h2>6. Data Retention</h2>
            <table>
              <thead>
                <tr><th>Data type</th><th>Retention period</th></tr>
              </thead>
              <tbody>
                <tr><td>Client records</td><td>7 years post-project</td></tr>
                <tr><td>Enquiry form submissions</td><td>2 years from last contact</td></tr>
                <tr><td>Security logs</td><td>12 months</td></tr>
              </tbody>
            </table>
            <p>After expiration, data is deleted or anonymized.</p>

            <h2>7. India — Digital Personal Data Protection Act, 2023</h2>
            <p>As an Indian company (registered in Vadodara, Gujarat), we process personal data of Indian users in line with the Digital Personal Data Protection Act, 2023 (DPDP Act).</p>
            <h3>Consent</h3>
            <p>Where we rely on your consent — for example, when you submit an enquiry form — that consent is free, specific, informed, and given through a clear affirmative action: an unticked checkbox you actively select, next to a plain-language notice of what we collect and why, shown at the point of collection. We do not use pre-ticked boxes or bundle consent for unrelated purposes.</p>
            <h3>Withdrawing consent</h3>
            <p>You can withdraw consent at any time by emailing <a href="mailto:info@digitalwebweaver.com">info@digitalwebweaver.com</a>. Withdrawal is as easy as giving consent, and we will stop processing your data for that purpose as soon as we action your request, without affecting anything already lawfully done before withdrawal.</p>
            <h3>Your rights as a Data Principal</h3>
            <ul>
              <li>Obtain a summary of your personal data we hold and how it is being processed</li>
              <li>Correct, complete, or update your personal data</li>
              <li>Request erasure of your personal data once it is no longer needed for the purpose it was collected for</li>
              <li>Withdraw consent, and have any grievance addressed</li>
              <li>Nominate another individual to exercise these rights on your behalf in the event of death or incapacity</li>
            </ul>
            <h3>Grievance redressal</h3>
            <p>For any DPDP-related request or complaint, contact us at <a href="mailto:info@digitalwebweaver.com">info@digitalwebweaver.com</a>. We aim to resolve grievances within 30 days. If you remain unsatisfied, you may file a complaint with the Data Protection Board of India.</p>

            <h2>8. Your Rights (Other Jurisdictions)</h2>
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

            <h2>9. Security</h2>
            <ul>
              <li>TLS 1.3 encryption in transit; AES-256 at rest</li>
              <li>Role-based access control</li>
              <li>Regular security audits</li>
              <li>Employee training</li>
              <li>ISO 27001-aligned incident response</li>
            </ul>
            <p>No system is completely secure. Please report suspected breaches to <a href="mailto:info@digitalwebweaver.com">info@digitalwebweaver.com</a> immediately.</p>

            <h2>10. Children</h2>
            <p>Our services target business professionals and are not directed at users under 18 (India's DPDP Act) or under 16 (other jurisdictions). If we inadvertently collect data from a child, it is deleted immediately upon discovery.</p>

            <h2>11. Changes to This Policy</h2>
            <p>Updates are posted with a revised "Last updated" date. Material changes receive prominent notice (email or banner). Continued use of the site constitutes acceptance of the updated policy.</p>

            <h2>12. Contact Us</h2>
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
                <tr><td>Data classes</td><td>Names, emails, phones, company info, project details, payment data (third-party processed)</td></tr>
                <tr><td>Main service providers</td><td>Supabase, Resend, ipapi.co, Vercel</td></tr>
                <tr><td>Compliance standards</td><td>ISO 27001, SOC 2 Type II, GDPR-aligned, DPDP Act 2023 (India)</td></tr>
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
