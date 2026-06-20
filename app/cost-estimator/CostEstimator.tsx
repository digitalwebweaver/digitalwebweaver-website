"use client";

import { useMemo, useState } from "react";

export interface CurrencyConfig {
  code: string; // ISO 4217, e.g. "INR", "USD"
  rate: number; // multiply INR amount by this to get target currency
  locale: string; // for Intl formatting
  isHome: boolean; // true when visitor is in India (INR, no conversion note)
}

// Base price ranges in INR (provided by Digital Web Weaver).
const PROJECT_TYPES = [
  { key: "website", label: "Business website (5–8 pages)", min: 19999, max: 49999, icon: "🌐" },
  { key: "corporate", label: "Corporate site + CMS", min: 29999, max: 200000, icon: "🏢" },
  { key: "ecommerce", label: "E-commerce store", min: 39999, max: 300000, icon: "🛒" },
  { key: "webapp", label: "Web app / portal", min: 49999, max: 1500000, icon: "🖥️" },
  { key: "software", label: "Custom software / ERP / CRM", min: 69999, max: 1000000, icon: "⚙️" },
  { key: "saas", label: "SaaS / MVP", min: 49999, max: 1200000, icon: "🚀" },
  { key: "ai", label: "AI / automation", min: 49999, max: 600000, icon: "🤖" },
] as const;

const SCOPES = [
  { key: "small", label: "Small / simple", mult: 0.8 },
  { key: "medium", label: "Medium", mult: 1.0 },
  { key: "large", label: "Large / complex", mult: 1.6 },
] as const;

const FEATURES = [
  { key: "payments", label: "Payments / checkout", pct: 0.15 },
  { key: "login", label: "User login / accounts", pct: 0.1 },
  { key: "dashboard", label: "Admin dashboard", pct: 0.15 },
  { key: "multilang", label: "Multi-language", pct: 0.1 },
  { key: "integrations", label: "Integrations (CRM/ERP/API)", pct: 0.15 },
  { key: "mobile", label: "Mobile app (with web)", pct: 0.3 },
  { key: "ai", label: "AI features", pct: 0.2 },
] as const;

const DESIGNS = [
  { key: "standard", label: "Standard", mult: 1.0 },
  { key: "custom", label: "Custom", mult: 1.2 },
  { key: "premium", label: "Premium", mult: 1.4 },
] as const;

const TIMELINES = [
  { key: "flexible", label: "Flexible", mult: 0.95 },
  { key: "standard", label: "Standard", mult: 1.0 },
  { key: "urgent", label: "Urgent / rush", mult: 1.25 },
] as const;

const FLOOR_INR = 19999; // never show an estimate below this

function niceRound(v: number) {
  if (v >= 100000) return Math.round(v / 10000) * 10000;
  if (v >= 10000) return Math.round(v / 1000) * 1000;
  if (v >= 1000) return Math.round(v / 100) * 100;
  if (v >= 100) return Math.round(v / 10) * 10;
  return Math.round(v);
}

export default function CostEstimator({ currency }: { currency: CurrencyConfig }) {
  const [typeKey, setTypeKey] = useState<string>("webapp");
  const [scope, setScope] = useState<string>("medium");
  const [features, setFeatures] = useState<Set<string>>(new Set(["login"]));
  const [design, setDesign] = useState<string>("custom");
  const [timeline, setTimeline] = useState<string>("standard");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const fmt = (inr: number) => {
    const v = niceRound(inr * currency.rate);
    try {
      return new Intl.NumberFormat(currency.locale, {
        style: "currency",
        currency: currency.code,
        maximumFractionDigits: 0,
      }).format(v);
    } catch {
      return `${currency.code} ${v.toLocaleString()}`;
    }
  };

  const est = useMemo(() => {
    const t = PROJECT_TYPES.find((p) => p.key === typeKey)!;
    const scopeMult = SCOPES.find((s) => s.key === scope)!.mult;
    const featMult = 1 + [...features].reduce((sum, k) => sum + (FEATURES.find((f) => f.key === k)?.pct ?? 0), 0);
    const designMult = DESIGNS.find((d) => d.key === design)!.mult;
    const timeMult = TIMELINES.find((tl) => tl.key === timeline)!.mult;
    const m = scopeMult * featMult * designMult * timeMult;
    let min = Math.max(t.min * m, FLOOR_INR);
    let max = t.max * m;
    if (max < min) max = min * 1.5;
    // "typical" band — most projects land in the lower-to-mid range
    const typLow = min * 1.25;
    const typHigh = Math.min(min * 1.25 + (max - min) * 0.4, max);
    return { min, max, typLow, typHigh, label: t.label };
  }, [typeKey, scope, features, design, timeline]);

  function toggleFeature(k: string) {
    setFeatures((prev) => {
      const next = new Set(prev);
      if (next.has(k)) next.delete(k);
      else next.add(k);
      return next;
    });
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Please add your name and email.");
      return;
    }
    setSubmitting(true);
    setError("");
    const featLabels = [...features].map((k) => FEATURES.find((f) => f.key === k)?.label).filter(Boolean);
    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      service: est.label,
      budget: `${fmt(est.min)} – ${fmt(est.max)} (${currency.code})`,
      timeline: TIMELINES.find((t) => t.key === timeline)?.label,
      description:
        `Cost Estimator request — wants a FREE consultation + wireframe.\n` +
        `Project: ${est.label}\nScope: ${SCOPES.find((s) => s.key === scope)?.label}\n` +
        `Design: ${DESIGNS.find((d) => d.key === design)?.label}\n` +
        `Features: ${featLabels.length ? featLabels.join(", ") : "—"}\n` +
        `Estimate shown: ${fmt(est.min)} – ${fmt(est.max)} (${currency.code})`,
      variant: "service",
      formHeading: "Cost Estimator",
    };
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        setError(d.error || "Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  // ── tiny style helpers (light theme, matches site) ──
  const card: React.CSSProperties = {
    background: "var(--paper)",
    border: "1px solid var(--line)",
    borderRadius: 18,
    padding: "26px 26px",
  };
  const chip = (active: boolean): React.CSSProperties => ({
    padding: "10px 16px",
    borderRadius: 10,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    border: active ? "1.5px solid var(--accent)" : "1px solid var(--line)",
    background: active ? "var(--accent-soft)" : "var(--paper-2)",
    color: active ? "var(--accent)" : "var(--ink)",
    transition: ".15s",
  });
  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--mono)",
    fontSize: 12,
    letterSpacing: ".1em",
    textTransform: "uppercase",
    color: "var(--ink-2)",
    fontWeight: 700,
    marginBottom: 12,
    display: "block",
  };
  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--paper-2)",
    border: "1px solid var(--line)",
    borderRadius: 10,
    padding: "12px 14px",
    color: "var(--ink)",
    fontSize: 15,
    fontFamily: "inherit",
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 20 }}>
      {/* ── Builder ── */}
      <div style={card}>
        <span style={labelStyle}>1 · What are you building?</span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 26 }}>
          {PROJECT_TYPES.map((t) => (
            <button key={t.key} type="button" onClick={() => setTypeKey(t.key)} style={chip(typeKey === t.key)}>
              <span style={{ marginRight: 6 }}>{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>

        <span style={labelStyle}>2 · Project size</span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 26 }}>
          {SCOPES.map((s) => (
            <button key={s.key} type="button" onClick={() => setScope(s.key)} style={chip(scope === s.key)}>
              {s.label}
            </button>
          ))}
        </div>

        <span style={labelStyle}>3 · Features you need</span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 26 }}>
          {FEATURES.map((f) => (
            <button key={f.key} type="button" onClick={() => toggleFeature(f.key)} style={chip(features.has(f.key))}>
              {features.has(f.key) ? "✓ " : "+ "}
              {f.label}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
          <div>
            <span style={labelStyle}>4 · Design level</span>
            <div style={{ display: "flex", gap: 10 }}>
              {DESIGNS.map((d) => (
                <button key={d.key} type="button" onClick={() => setDesign(d.key)} style={chip(design === d.key)}>
                  {d.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <span style={labelStyle}>5 · Timeline</span>
            <div style={{ display: "flex", gap: 10 }}>
              {TIMELINES.map((t) => (
                <button key={t.key} type="button" onClick={() => setTimeline(t.key)} style={chip(timeline === t.key)}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Result + CTA ── */}
      <div style={{ ...card, background: "var(--ink)", color: "var(--on-dark, #fff)", border: "none" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.6)", marginBottom: 10 }}>
          Estimated investment
        </div>
        <div style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: "clamp(28px,5vw,46px)", lineHeight: 1.1, color: "#fff" }}>
          {fmt(est.min)} <span style={{ color: "rgba(255,255,255,.5)" }}>–</span> {fmt(est.max)}
        </div>
        <div style={{ fontSize: 14.5, color: "rgba(255,255,255,.75)", marginTop: 12 }}>
          Most projects like this land around <strong style={{ color: "#fff" }}>{fmt(est.typLow)} – {fmt(est.typHigh)}</strong>.
        </div>
        <div style={{ fontSize: 12.5, color: "rgba(255,255,255,.5)", marginTop: 10 }}>
          Indicative estimate — your exact fixed quote comes after a quick call.
          {!currency.isHome && ` Converted from INR at indicative rates.`}
        </div>

        {/* CTA form */}
        {!submitted ? (
          <form onSubmit={submit} style={{ marginTop: 24, display: "grid", gap: 12 }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#fff" }}>
              Get a <span style={{ color: "var(--accent)" }}>free consultation</span> + a wireframe of your idea
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <input style={inputStyle} placeholder="Your name *" value={name} onChange={(e) => setName(e.target.value)} />
              <input style={inputStyle} placeholder="Email *" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <input style={inputStyle} placeholder="Phone / WhatsApp (optional)" value={phone} onChange={(e) => setPhone(e.target.value)} />
            {error && <div style={{ fontSize: 13.5, color: "#ff9aa8" }}>{error}</div>}
            <button type="submit" className="btn btn-primary" disabled={submitting} style={{ justifyContent: "center", opacity: submitting ? 0.7 : 1 }}>
              {submitting ? "Sending…" : "Get my free consultation + wireframe"} <span className="arr">↗</span>
            </button>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,.55)", textAlign: "center" }}>
              ● Free · ● 24-hour response · ● NDA on request
            </div>
          </form>
        ) : (
          <div style={{ marginTop: 24, background: "rgba(255,255,255,.08)", borderRadius: 12, padding: "20px 22px" }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 6 }}>✅ Got it, {name.split(" ")[0]}!</div>
            <div style={{ fontSize: 14.5, color: "rgba(255,255,255,.8)", lineHeight: 1.6 }}>
              Our team will reach out within 24 hours with a free consultation and a wireframe of your idea. Check your email
              (and WhatsApp if you shared a number).
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
