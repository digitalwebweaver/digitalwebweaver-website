import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 3600;
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Digital Web Weaver. How we collect, use, and protect your data.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section style={{ padding: "80px 0 40px" }}>
        <div className="wrap">
          <div className="breadcrumb reveal">
            <Link href="/">Home</Link><span className="sep">/</span>Privacy Policy
          </div>
          <span className="eyebrow reveal">Legal</span>
          <h1 className="reveal" style={{ marginTop: 18, maxWidth: 600 }}>Privacy Policy</h1>
          <div className="policy-meta reveal" style={{ marginTop: 18 }}>
            <span>Effective date: <strong>1 June 2024</strong></span>
            <span>Last updated: <strong>1 June 2026</strong></span>
          </div>
        </div>
      </section>

      {/* ===== POLICY LAYOUT ===== */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="policy-layout">
            {/* Sidebar nav */}
            <nav className="policy-nav">
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".13em", textTransform: "uppercase", color: "var(--faint)", fontWeight: 500, marginBottom: 16 }}>
                Contents
              </div>
              <a href="#overview">Overview</a>
              <a href="#collect">What we collect</a>
              <a href="#use">How we use it</a>
              <a href="#share">Sharing data</a>
              <a href="#cookies">Cookies</a>
              <a href="#retention">Data retention</a>
              <a href="#rights">Your rights</a>
              <a href="#security">Security</a>
              <a href="#children">Children</a>
              <a href="#changes">Changes</a>
              <a href="#contact-us">Contact us</a>
            </nav>

            {/* Body content */}
            <div className="policy-body">
              <section id="overview">
                <h2>Overview</h2>
                <p>Digital Web Weaver (&ldquo;Digital Web Weaver&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting the privacy of our clients, website visitors, and prospective clients. This Privacy Policy explains what information we collect, why we collect it, how we use and protect it, and what rights you have in relation to it.</p>
                <p>This policy applies to information collected through our website at <strong>digitalwebweaver.com</strong> and any related services, sales, marketing, or events.</p>
                <p>By using our website or engaging with our services, you agree to the terms of this Privacy Policy. If you do not agree, please do not use our website or services.</p>
              </section>

              <section id="collect">
                <h2>What we collect</h2>
                <h3>Information you provide directly</h3>
                <p>When you contact us, complete a form, subscribe to our newsletter, or engage our services, we may collect:</p>
                <ul>
                  <li>Name and job title</li>
                  <li>Email address and phone number</li>
                  <li>Company name, size, and industry</li>
                  <li>Project details and requirements you share with us</li>
                  <li>Communications, messages, and attachments you send to us</li>
                  <li>Payment information (processed securely through our payment provider — we do not store card details)</li>
                </ul>
                <h3>Information collected automatically</h3>
                <p>When you visit our website, we automatically collect certain technical information, including:</p>
                <ul>
                  <li>IP address and approximate location (country/city level)</li>
                  <li>Browser type and version</li>
                  <li>Device type and operating system</li>
                  <li>Pages visited, time on page, and referral source</li>
                  <li>Click behaviour and scroll depth (via analytics tools)</li>
                </ul>
                <h3>Information from third parties</h3>
                <p>We may receive information about you from third parties such as LinkedIn, Clutch, referral partners, or public professional directories when you engage with our content or are introduced to us.</p>
              </section>

              <section id="use">
                <h2>How we use it</h2>
                <p>We use the information we collect for the following purposes:</p>
                <ul>
                  <li><strong>Providing services</strong> — to deliver the software development and consulting services you have engaged us for.</li>
                  <li><strong>Communication</strong> — to respond to enquiries, send project updates, and provide support.</li>
                  <li><strong>Marketing</strong> — to send newsletters, case studies, and service updates to contacts who have opted in or have a legitimate interest. You can opt out at any time.</li>
                  <li><strong>Analytics and improvement</strong> — to understand how our website is used and improve its content and performance.</li>
                  <li><strong>Legal compliance</strong> — to meet our obligations under applicable laws, including accounting, tax, and data protection regulations.</li>
                  <li><strong>Security</strong> — to detect, prevent, and respond to fraud, abuse, or security threats.</li>
                </ul>
                <p>Our legal bases for processing personal data (under GDPR and applicable law) are: contract performance, legitimate interests, legal obligation, and consent.</p>
              </section>

              <section id="share">
                <h2>Sharing data</h2>
                <p>We do not sell, rent, or trade your personal data to third parties. We may share your data in the following limited circumstances:</p>
                <ul>
                  <li><strong>Service providers</strong> — trusted vendors who help us operate our business, such as cloud hosting (AWS), analytics (Google Analytics), CRM (HubSpot), payment processing (Stripe), and email marketing (Mailchimp). These providers process data only on our behalf and under contract.</li>
                  <li><strong>Business transfers</strong> — if Digital Web Weaver is acquired, merged, or undergoes a significant structural change, client data may be transferred as part of that transaction. We will notify affected parties in advance.</li>
                  <li><strong>Legal requirements</strong> — when required by law, court order, or regulatory request.</li>
                  <li><strong>Protection of rights</strong> — to protect the rights, property, or safety of Digital Web Weaver, our clients, or the public.</li>
                </ul>
                <p>We do not transfer personal data outside the European Economic Area (EEA) without appropriate safeguards such as Standard Contractual Clauses or equivalent adequacy decisions.</p>
              </section>

              <section id="cookies">
                <h2>Cookies</h2>
                <p>Our website uses cookies and similar tracking technologies. We use the following types:</p>
                <ul>
                  <li><strong>Essential cookies</strong> — required for the website to function correctly. Cannot be disabled.</li>
                  <li><strong>Analytics cookies</strong> — help us understand how visitors interact with our site (e.g. Google Analytics). Disabled unless you consent.</li>
                  <li><strong>Marketing cookies</strong> — used for retargeting and measuring advertising effectiveness. Disabled unless you consent.</li>
                </ul>
                <p>You can manage your cookie preferences at any time via the cookie banner on our site, or by adjusting your browser settings. Note that disabling certain cookies may affect your experience on our website.</p>
              </section>

              <section id="retention">
                <h2>Data retention</h2>
                <p>We retain personal data only for as long as necessary for the purposes described in this policy, or as required by law. Our standard retention periods are:</p>
                <ul>
                  <li><strong>Client records</strong> — 7 years after the end of a project (for legal and accounting purposes)</li>
                  <li><strong>Prospective client enquiries</strong> — 2 years from last contact</li>
                  <li><strong>Newsletter subscribers</strong> — until you unsubscribe</li>
                  <li><strong>Website analytics</strong> — 26 months (Google Analytics default)</li>
                  <li><strong>Security logs</strong> — 12 months</li>
                </ul>
                <p>After these periods, data is deleted or anonymised.</p>
              </section>

              <section id="rights">
                <h2>Your rights</h2>
                <p>Depending on your location, you may have the following rights regarding your personal data:</p>
                <ul>
                  <li><strong>Access</strong> — request a copy of the personal data we hold about you.</li>
                  <li><strong>Rectification</strong> — request correction of inaccurate or incomplete data.</li>
                  <li><strong>Erasure</strong> — request deletion of your data (&ldquo;right to be forgotten&rdquo;) in certain circumstances.</li>
                  <li><strong>Restriction</strong> — request that we limit the processing of your data in certain circumstances.</li>
                  <li><strong>Portability</strong> — request your data in a structured, machine-readable format.</li>
                  <li><strong>Objection</strong> — object to processing based on legitimate interests or for direct marketing.</li>
                  <li><strong>Withdraw consent</strong> — where processing is based on consent, withdraw it at any time without affecting prior processing.</li>
                </ul>
                <p>To exercise any of these rights, contact us at <a href="mailto:info@digitalwebweaver.com">info@digitalwebweaver.com</a>. We will respond within 30 days. If you are in the EEA, you also have the right to lodge a complaint with your national data protection authority.</p>
              </section>

              <section id="security">
                <h2>Security</h2>
                <p>We take the security of your data seriously. Our measures include:</p>
                <ul>
                  <li>Encryption of data in transit (TLS 1.3) and at rest (AES-256)</li>
                  <li>Role-based access control to personal data</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Employee security awareness training</li>
                  <li>Incident response procedures aligned with ISO 27001</li>
                </ul>
                <p>Despite these measures, no system is completely secure. If you believe your data has been compromised, please contact us immediately at <a href="mailto:info@digitalwebweaver.com">info@digitalwebweaver.com</a>.</p>
              </section>

              <section id="children">
                <h2>Children</h2>
                <p>Our website and services are directed at business professionals and are not intended for children under the age of 16. We do not knowingly collect personal data from children. If we become aware that we have inadvertently collected such data, we will delete it immediately.</p>
              </section>

              <section id="changes">
                <h2>Changes to this policy</h2>
                <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. We will post the revised policy on this page with a new &ldquo;Last updated&rdquo; date.</p>
                <p>For material changes, we will provide more prominent notice (such as an email to registered users or a banner on our website) prior to the change taking effect.</p>
                <p>Your continued use of our website or services after the updated policy becomes effective constitutes your acceptance of the revised terms.</p>
              </section>

              <section id="contact-us">
                <h2>Contact us</h2>
                <p>If you have questions about this Privacy Policy or how we handle your personal data, please contact us:</p>
                <div style={{ background: "var(--paper-2)", border: "1px solid var(--line)", borderRadius: 14, padding: "26px 28px", marginTop: 22 }}>
                  <strong>Digital Web Weaver</strong><br />
                  Data Protection enquiries<br />
                  <a href="mailto:info@digitalwebweaver.com">info@digitalwebweaver.com</a><br /><br />
                  Registered office:<br />
                  Digital Web Weaver<br />
                  [Registered address to be completed before launch]
                </div>
                <p style={{ marginTop: 22 }}>If you are in the EU/EEA and are not satisfied with our response, you have the right to complain to your local supervisory authority.</p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
