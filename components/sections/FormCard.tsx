"use client";
import { useState } from "react";

interface Props {
  tag?: string;
  heading: string;
  sub?: string;
  submitLabel?: string;
  note?: string;
  variant?: "service" | "hire";
}

export default function FormCard({
  tag = "Free estimate",
  heading,
  sub = "Tell us what you need — scope and estimate in 24 hours, free.",
  submitLabel = "Get free estimate",
  note = "No commitment · 24-hour response",
  variant = "service",
}: Props) {
  const [fields, setFields] = useState({
    name: "", email: "", phone: "",
    service: "", timeline: "", budget: "", description: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  function set(k: string, v: string) {
    setFields((p) => ({ ...p, [k]: v }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, variant, formHeading: heading }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="form-card">
        <div style={{ padding: "40px 20px", textAlign: "center" }}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#e91e63" strokeWidth="2" style={{ marginBottom: "14px" }}>
            <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="9"/>
          </svg>
          <h3 style={{ fontFamily: "var(--display)", color: "var(--on-dark)", fontSize: "1.2rem", marginBottom: "8px" }}>
            Got it — we'll be in touch!
          </h3>
          <p style={{ color: "var(--on-dark-muted)", fontSize: "13.5px" }}>
            Expect a reply within 24 hours at {fields.email}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      <div className="fc-head">
        <div className="fc-tag">{tag}</div>
        <h3>{heading}</h3>
        <p>{sub}</p>
      </div>
      <form onSubmit={handleSubmit}>
        {variant === "service" ? (
          <>
            <div className="fc-row">
              <div className="fc-group">
                <label>Name</label>
                <input type="text" placeholder="Your name" required value={fields.name} onChange={(e) => set("name", e.target.value)} />
              </div>
              <div className="fc-group">
                <label>Work email</label>
                <input type="email" placeholder="you@company.com" required value={fields.email} onChange={(e) => set("email", e.target.value)} />
              </div>
            </div>
            <div className="fc-group">
              <label>What do you need?</label>
              <select value={fields.service} onChange={(e) => set("service", e.target.value)}>
                <option>Web application / portal</option>
                <option>SaaS product</option>
                <option>Mobile app</option>
                <option>Marketing / company website</option>
                <option>AI / automation project</option>
                <option>Other</option>
              </select>
            </div>
            <div className="fc-group">
              <label>Timeline</label>
              <select value={fields.timeline} onChange={(e) => set("timeline", e.target.value)}>
                <option>ASAP (1–4 weeks)</option>
                <option>Standard (2–3 months)</option>
                <option>Complex (3–6 months)</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div className="fc-group">
              <label>Describe your project</label>
              <textarea rows={3} placeholder="What it does, who uses it, any tech preferences..." value={fields.description} onChange={(e) => set("description", e.target.value)} />
            </div>
          </>
        ) : (
          <>
            <div className="fc-row">
              <div className="fc-group">
                <label>Full name</label>
                <input type="text" placeholder="Alex Johnson" required value={fields.name} onChange={(e) => set("name", e.target.value)} />
              </div>
              <div className="fc-group">
                <label>Work email</label>
                <input type="email" placeholder="alex@company.com" required value={fields.email} onChange={(e) => set("email", e.target.value)} />
              </div>
            </div>
            <div className="fc-group">
              <label>Phone / WhatsApp</label>
              <input type="tel" placeholder="+91 00000 00000" value={fields.phone} onChange={(e) => set("phone", e.target.value)} />
            </div>
            <div className="fc-group">
              <label>Engagement type</label>
              <select value={fields.service} onChange={(e) => set("service", e.target.value)}>
                <option>Full-time (160 hrs/month)</option>
                <option>Part-time (80 hrs/month)</option>
                <option>Hourly (pay-as-you-go)</option>
              </select>
            </div>
            <div className="fc-group">
              <label>Monthly budget (USD)</label>
              <select value={fields.budget} onChange={(e) => set("budget", e.target.value)}>
                <option>Under $2,000</option>
                <option>$2,000–$3,500</option>
                <option>$3,500–$6,000</option>
                <option>$6,000+</option>
                <option>Not sure — advise me</option>
              </select>
            </div>
            <div className="fc-group">
              <label>Project / role brief</label>
              <textarea rows={3} placeholder="What will this developer work on?" value={fields.description} onChange={(e) => set("description", e.target.value)} />
            </div>
          </>
        )}
        {status === "error" && (
          <p style={{ color: "#f87171", fontSize: "12px", marginBottom: "8px" }}>
            Something went wrong. Email us at info@digitalwebweaver.com
          </p>
        )}
        <button className="btn btn-primary" type="submit" disabled={status === "loading"} style={{ width: "100%", justifyContent: "center", marginTop: 8 }}>
          {status === "loading" ? "Sending…" : <>{submitLabel} <span className="arr">↗</span></>}
        </button>
        <p style={{ fontSize: 12, color: "var(--on-dark-muted)", textAlign: "center", marginTop: 12, fontFamily: "var(--mono)" }}>
          {note}
        </p>
      </form>
    </div>
  );
}
