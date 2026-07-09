"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactClient() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [form, setForm] = useState({
    service: "", budget: "",
    projectName: "", timeline: "", industry: "", description: "",
    firstName: "", lastName: "", email: "", phone: "", country: "", source: "", nda: false,
  });

  function set(field: string, value: string | boolean) {
    setForm((p) => ({ ...p, [field]: value }));
  }

  function showStep(n: number) {
    setCurrentStep(n);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please email us directly at info@digitalwebweaver.com");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="page-hero" style={{ paddingBottom: "40px" }}>
        <div className="wrap">
          <div className="breadcrumb reveal">
            <Link href="/">Home</Link>
            <span className="sep">/</span>Contact
          </div>
          <span className="eyebrow reveal">Get in touch</span>
          <h1 className="reveal" style={{ marginTop: "18px", maxWidth: "760px" }}>
            Let&apos;s build something <span className="accent">extraordinary</span> together.
          </h1>
          <p className="lead reveal" style={{ marginBottom: "0" }}>
            Tell us about your project "” we&apos;ll send you a detailed proposal and fixed estimate within 24 hours. Free,
            no commitment required.
          </p>
        </div>
      </section>

      {/* ===== MAIN CONTACT SECTION ===== */}
      <section className="sec" id="form" style={{ paddingTop: "40px" }}>
        <div className="wrap">
          <div className="contact-layout">

            {/* 3-STEP FORM */}
            <div className="contact-form-wrap reveal">
              <div className="fc-tag" style={{ position: "relative", zIndex: 2 }}>
                ✦ Free consultation "” 24-hour response
              </div>
              <h3
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "1.5rem",
                  color: "var(--on-dark)",
                  fontWeight: 600,
                  letterSpacing: "-.02em",
                  marginBottom: "6px",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Tell us about your project
              </h3>
              <p
                style={{
                  fontSize: "13.5px",
                  color: "var(--on-dark-muted)",
                  marginBottom: "22px",
                  lineHeight: 1.5,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                3 quick steps. No spam. NDA available on request.
              </p>

              {/* Step indicator */}
              <div className="step-bar">
                <button
                  className={`step-btn${currentStep === 0 ? " active" : ""}`}
                  onClick={() => { if (currentStep > 0) showStep(0); }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>{" "}
                  Service
                </button>
                <button
                  className={`step-btn${currentStep === 1 ? " active" : ""}`}
                  onClick={() => { if (currentStep > 1) showStep(1); }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>{" "}
                  Project
                </button>
                <button
                  className={`step-btn${currentStep === 2 ? " active" : ""}`}
                  onClick={() => { if (currentStep > 2) showStep(2); }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>{" "}
                  You
                </button>
              </div>

              {submitted ? (
                <div style={{ padding: "40px 0", textAlign: "center" }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e91e63" strokeWidth="2" style={{ marginBottom: "16px" }}><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="9"/></svg>
                  <h3 style={{ color: "var(--on-dark)", fontFamily: "var(--display)", fontSize: "1.4rem", marginBottom: "8px" }}>Enquiry sent!</h3>
                  <p style={{ color: "var(--on-dark-muted)", fontSize: "14px" }}>We will reply within 24 hours from info@digitalwebweaver.com</p>
                </div>
              ) : (
              <form onSubmit={handleSubmit}>
                {/* Step 1: Service */}
                <div className={`step-panel${currentStep === 0 ? " active" : ""}`}>
                  <div className="fgrid">
                    <div className="field full">
                      <label>What do you need help with?</label>
                      <select value={form.service} onChange={(e) => set("service", e.target.value)}>
                        <option value="">Select a service</option>
                        <option>Web &amp; SaaS platform</option>
                        <option>Mobile app (iOS / Android)</option>
                        <option>ERP or CRM system</option>
                        <option>AI &amp; automation</option>
                        <option>Cloud &amp; DevOps</option>
                        <option>Product design / UI-UX</option>
                        <option>E-commerce development</option>
                        <option>MVP development</option>
                        <option>Hire a dedicated developer</option>
                        <option>Not sure yet "” need guidance</option>
                      </select>
                    </div>
                    <div className="field full">
                      <label>Budget range</label>
                      <select value={form.budget} onChange={(e) => set("budget", e.target.value)}>
                        <option value="">Select budget</option>
                        <option>Under $10k</option>
                        <option>$10k "“ $25k</option>
                        <option>$25k "“ $50k</option>
                        <option>$50k "“ $100k</option>
                        <option>$100k "“ $250k</option>
                        <option>$250k+</option>
                        <option>Flexible / discuss first</option>
                      </select>
                    </div>
                  </div>
                  <div className="step-nav">
                    <button
                      type="button"
                      className="btn btn-primary step-next"
                      onClick={() => showStep(1)}
                    >
                      Next: Project details <span className="arr">↗</span>
                    </button>
                  </div>
                </div>

                {/* Step 2: Project */}
                <div className={`step-panel${currentStep === 1 ? " active" : ""}`}>
                  <div className="fgrid">
                    <div className="field full">
                      <label>Project name (or working title)</label>
                      <input type="text" placeholder="e.g. Acme Logistics Platform" value={form.projectName} onChange={(e) => set("projectName", e.target.value)} />
                    </div>
                    <div className="field">
                      <label>Target timeline</label>
                      <select value={form.timeline} onChange={(e) => set("timeline", e.target.value)}>
                        <option value="">Select timeline</option>
                        <option>ASAP (within 4 weeks)</option>
                        <option>1 "“ 3 months</option>
                        <option>3 "“ 6 months</option>
                        <option>6 "“ 12 months</option>
                        <option>Flexible / phased</option>
                      </select>
                    </div>
                    <div className="field">
                      <label>Industry</label>
                      <select value={form.industry} onChange={(e) => set("industry", e.target.value)}>
                        <option value="">Select industry</option>
                        <option>SaaS / Tech</option>
                        <option>FinTech</option>
                        <option>HealthTech</option>
                        <option>E-commerce / Retail</option>
                        <option>Logistics</option>
                        <option>Manufacturing</option>
                        <option>Real estate</option>
                        <option>EdTech</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="field full">
                      <label>Describe your project</label>
                      <textarea
                        rows={4}
                        placeholder="What are you building? What problem does it solve? What's the current state (idea, MVP, existing system)? Any integrations or specific requirements?"
                      />
                    </div>
                  </div>
                  <div className="step-nav">
                    <button
                      type="button"
                      className="btn btn-ghost step-back"
                      onClick={() => showStep(0)}
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary step-next"
                      onClick={() => showStep(2)}
                    >
                      Next: Your details <span className="arr">↗</span>
                    </button>
                  </div>
                </div>

                {/* Step 3: You */}
                <div className={`step-panel${currentStep === 2 ? " active" : ""}`}>
                  <div className="fgrid">
                    <div className="field">
                      <label>First name</label>
                      <input type="text" placeholder="James" value={form.firstName} onChange={(e) => set("firstName", e.target.value)} />
                    </div>
                    <div className="field">
                      <label>Work email</label>
                      <input type="email" placeholder="james@company.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
                    </div>
                    <div className="field">
                      <label>Last name</label>
                      <input type="text" placeholder="Edwards" value={form.lastName} onChange={(e) => set("lastName", e.target.value)} />
                    </div>
                    <div className="field">
                      <label>Phone / WhatsApp</label>
                      <input type="tel" placeholder="+1 000 000 0000" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                    </div>
                    <div className="field">
                      <label>Country</label>
                      <select value={form.country} onChange={(e) => set("country", e.target.value)}>
                        <option value="">Select country</option>
                        <option>India</option>
                        <option>United Kingdom</option>
                        <option>United States</option>
                        <option>UAE</option>
                        <option>Australia</option>
                        <option>Canada</option>
                        <option>South Africa</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="field">
                      <label>How did you find us?</label>
                      <select value={form.source} onChange={(e) => set("source", e.target.value)}>
                        <option value="">Select</option>
                        <option>Google search</option>
                        <option>Referral / word of mouth</option>
                        <option>LinkedIn</option>
                        <option>Clutch / Upwork</option>
                        <option>GitHub / open source</option>
                        <option>Conference / event</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div
                      className="field full"
                      style={{ flexDirection: "row", alignItems: "center", gap: "10px" }}
                    >
                      <input
                        type="checkbox"
                        id="ndaCheck"
                        checked={form.nda}
                        onChange={(e) => set("nda", e.target.checked)}
                        style={{ width: "auto", borderRadius: "4px", cursor: "pointer", flex: "none", margin: 0 }}
                      />
                      <label
                        htmlFor="ndaCheck"
                        style={{
                          fontFamily: "var(--body)",
                          fontSize: "13.5px",
                          letterSpacing: 0,
                          textTransform: "none",
                          color: "var(--on-dark-muted)",
                          cursor: "pointer",
                        }}
                      >
                        I&apos;d like an NDA signed before discussing further details
                      </label>
                    </div>
                  </div>
                  <div className="step-nav">
                    <button
                      type="button"
                      className="btn btn-ghost step-back"
                      onClick={() => showStep(1)}
                    >
                      ← Back
                    </button>
                    {submitError && <p style={{ color: "#f87171", fontSize: "13px", marginBottom: "12px" }}>{submitError}</p>}
                    <button type="submit" className="btn btn-primary" disabled={submitting}>
                      {submitting ? "Sending…" : <><span>Send enquiry</span> <span className="arr">↗</span></>}
                    </button>
                  </div>
                </div>
              </form>
              )}

              <div className="fc-trust" style={{ position: "relative", zIndex: 2 }}>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>{" "}
                  100% confidential
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>{" "}
                  Reply in 24h
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
                  </svg>{" "}
                  NDA available
                </span>
              </div>
            </div>

            {/* INFO PANEL */}
            <div className="cip reveal">
              <div className="cip-tag">✦ How it works</div>
              <div className="cip-av">AR</div>
              <p className="cip-promise">You&apos;ll hear from a senior engineer within 24 hours.</p>
              <p className="cip-sub">
                We review every submission personally. No automated responses, no sales scripts "” just an honest
                technical conversation about your project.
              </p>

              <div className="cip-item">
                <div className="cip-ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>
                <div>
                  <b>24-hour response</b>
                  <span>Senior engineer reviews &amp; responds to every enquiry</span>
                </div>
              </div>
              <div className="cip-item">
                <div className="cip-ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <b>Free written estimate</b>
                  <span>Detailed proposal with fixed scope &amp; price</span>
                </div>
              </div>
              <div className="cip-item">
                <div className="cip-ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <div>
                  <b>Meet the team</b>
                  <span>Intro call with your dedicated tech lead</span>
                </div>
              </div>
              <div className="cip-item">
                <div className="cip-ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <b>NDA signed first</b>
                  <span>We protect your idea from the first conversation</span>
                </div>
              </div>

              <div style={{ marginTop: "24px", paddingTop: "24px", borderTop: "1px solid var(--line-dark)" }}>
                <p style={{ fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--on-dark-muted)", marginBottom: "14px" }}>
                  Direct contact
                </p>
                <a
                  href="mailto:info@digitalwebweaver.com"
                  style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--on-dark)", marginBottom: "12px", transition: ".25s", textDecoration: "none" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                  info@digitalwebweaver.com
                </a>
                <a
                  href="tel:+919712515105"
                  style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--on-dark)", transition: ".25s", textDecoration: "none" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M5 4h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" strokeLinejoin="round" />
                  </svg>
                  +91 97125 15105
                </a>
                <a
                  href="https://wa.me/919722915105"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--on-dark)", marginTop: "12px", transition: ".25s", textDecoration: "none" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.05 2zm5.8 14.13c-.24.68-1.42 1.3-1.96 1.38-.5.08-1.13.11-1.83-.12-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.17-4.94-4.36-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2.01.88 2.16.07.15.12.32.02.51-.09.2-.14.32-.28.49-.14.17-.29.38-.42.51-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.45.12.61-.07.17-.2.7-.81.89-1.09.18-.28.37-.23.62-.14.26.09 1.62.77 1.9.91.28.14.46.21.53.33.07.12.07.68-.17 1.36z" />
                  </svg>
                  +91 97229 15105 (WhatsApp)
                </a>
              </div>

              <div style={{ marginTop: "24px", paddingTop: "24px", borderTop: "1px solid var(--line-dark)" }}>
                <p style={{ fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--on-dark-muted)", marginBottom: "14px" }}>
                  Offices
                </p>
                <div style={{ fontSize: "13.5px", color: "var(--on-dark-muted)", lineHeight: 1.9 }}>
                  <div>📍 Vadodara, India (HQ)</div>
                  <div>📍 London, United Kingdom</div>
                  <div>📍 Cape Town, South Africa</div>
                  <div>📍 New York, United States</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="sec" style={{ background: "var(--paper-2)", paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="wrap">
          <div className="faq-layout">
            <div className="faq-aside">
              <span className="eyebrow">FAQ</span>
              <h2 style={{ marginTop: "18px", fontSize: "clamp(1.9rem,3.4vw,2.7rem)" }}>
                Common <span className="accent">questions</span>
              </h2>
              <p>Everything you need to know before reaching out.</p>
              <a href="#form" className="btn btn-primary" style={{ marginTop: "8px" }}>
                Send an enquiry <span className="arr">↗</span>
              </a>
            </div>
            <div className="faq-list">
              <details className="faq" open>
                <summary>
                  How quickly will you respond?{" "}
                  <span className="fq-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 6v12M6 12h12" />
                    </svg>
                  </span>
                </summary>
                <div className="fq-body">
                  Every enquiry is reviewed by a senior engineer within 24 hours. You&apos;ll receive a personal email "” not
                  an automated reply "” with an honest assessment and, where applicable, a detailed proposal.
                </div>
              </details>
              <details className="faq">
                <summary>
                  Do you sign NDAs?{" "}
                  <span className="fq-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 6v12M6 12h12" />
                    </svg>
                  </span>
                </summary>
                <div className="fq-body">
                  Yes, always if requested. We understand protecting your idea matters. Check the NDA box in the form and
                  we&apos;ll send a mutual NDA for signing before discussing any project details.
                </div>
              </details>
              <details className="faq">
                <summary>
                  What if I don&apos;t know what I need yet?{" "}
                  <span className="fq-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 6v12M6 12h12" />
                    </svg>
                  </span>
                </summary>
                <div className="fq-body">
                  That&apos;s completely fine "” it&apos;s actually where we do some of our best work. Select &ldquo;Not sure
                  yet&rdquo; in the service type, describe your business problem, and we&apos;ll send back a free technical
                  roadmap with recommended approaches.
                </div>
              </details>
              <details className="faq">
                <summary>
                  What&apos;s the minimum project size?{" "}
                  <span className="fq-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 6v12M6 12h12" />
                    </svg>
                  </span>
                </summary>
                <div className="fq-body">
                  Our sweet spot is $15k+ projects. Smaller budgets are considered for MVPs and focused feature builds "”
                  fill in the form and we&apos;ll give you an honest answer based on what you&apos;re trying to do.
                </div>
              </details>
              <details className="faq">
                <summary>
                  Can I hire a developer directly?{" "}
                  <span className="fq-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 6v12M6 12h12" />
                    </svg>
                  </span>
                </summary>
                <div className="fq-body">
                  Yes. Use the form above, or visit our{" "}
                  <Link href="/hire-dedicated-resource" style={{ color: "var(--accent)" }}>
                    Hire Dedicated Resource
                  </Link>{" "}
                  page to see engagement models (full-time, part-time, hourly) and technologies available.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
