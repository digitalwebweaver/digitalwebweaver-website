"use client";
import { useMemo, useState } from "react";

// Indicative pricing model — not the live site's actual proprietary formula
// (which we don't have access to), but calibrated to land within the same
// ballpark the live page states in its own FAQ ("business website starts
// around ₹19,999"; "web apps / custom software / SaaS range ₹49,999 to
// ₹15,00,000+"). All figures are INR base, then localized for display.
const PROJECT_TYPES = [
  { id: "website", label: "Business website (5–8 pages)", base: 19999 },
  { id: "corporate", label: "Corporate site + CMS", base: 39999 },
  { id: "ecommerce", label: "E-commerce store", base: 59999 },
  { id: "webapp", label: "Web app / portal", base: 99999 },
  { id: "custom", label: "Custom software / ERP / CRM", base: 149999 },
  { id: "saas", label: "SaaS / MVP", base: 199999 },
  { id: "ai", label: "AI / automation", base: 129999 },
];

const SIZES = [
  { id: "small", label: "Small / simple", mult: 1 },
  { id: "medium", label: "Medium", mult: 1.7 },
  { id: "large", label: "Large / complex", mult: 2.8 },
];

const FEATURES = [
  { id: "payments", label: "Payments / checkout", cost: 20000 },
  { id: "login", label: "User login / accounts", cost: 18000 },
  { id: "dashboard", label: "Admin dashboard", cost: 35000 },
  { id: "i18n", label: "Multi-language", cost: 15000 },
  { id: "integrations", label: "Integrations (CRM/ERP/API)", cost: 30000 },
  { id: "mobile", label: "Mobile app (with web)", cost: 120000 },
  { id: "ai", label: "AI features", cost: 70000 },
];

const DESIGN_LEVELS = [
  { id: "standard", label: "Standard", mult: 1 },
  { id: "custom", label: "Custom", mult: 1.3 },
  { id: "premium", label: "Premium", mult: 1.7 },
];

const TIMELINES = [
  { id: "flexible", label: "Flexible", mult: 1 },
  { id: "standard", label: "Standard", mult: 1.05 },
  { id: "urgent", label: "Urgent / rush", mult: 1.35 },
];

// Fixed indicative rates, not a live feed — matches the page's own
// "converted from base INR pricing at indicative rates" language.
const CURRENCIES = [
  { id: "INR", label: "₹ INR", rate: 1, symbol: "₹" },
  { id: "USD", label: "$ USD", rate: 0.012, symbol: "$" },
  { id: "GBP", label: "£ GBP", rate: 0.0095, symbol: "£" },
  { id: "ZAR", label: "R ZAR", rate: 0.22, symbol: "R" },
];

function roundTo(n, step) {
  return Math.round(n / step) * step;
}

function formatAmount(amount, currency) {
  const converted = amount * currency.rate;
  const step = currency.id === "INR" ? 1000 : 10;
  const rounded = roundTo(converted, step);
  return currency.symbol + rounded.toLocaleString(currency.id === "INR" ? "en-IN" : "en-US");
}

export default function CostEstimatorTool() {
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0].id);
  const [size, setSize] = useState(SIZES[0].id);
  const [features, setFeatures] = useState([]);
  const [design, setDesign] = useState(DESIGN_LEVELS[0].id);
  const [timeline, setTimeline] = useState(TIMELINES[0].id);
  const [currency, setCurrency] = useState(CURRENCIES[0].id);

  function toggleFeature(id) {
    setFeatures((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));
  }

  const { low, high, mid } = useMemo(() => {
    const type = PROJECT_TYPES.find((t) => t.id === projectType);
    const sizeObj = SIZES.find((s) => s.id === size);
    const designObj = DESIGN_LEVELS.find((d) => d.id === design);
    const timelineObj = TIMELINES.find((t) => t.id === timeline);
    const featureCost = features.reduce((sum, id) => sum + (FEATURES.find((f) => f.id === id)?.cost || 0), 0);

    const subtotal = (type.base * sizeObj.mult + featureCost) * designObj.mult * timelineObj.mult;
    return {
      low: roundTo(subtotal, 1000),
      high: roundTo(subtotal * 1.55, 1000),
      mid: roundTo(subtotal * 1.2, 1000),
    };
  }, [projectType, size, features, design, timeline]);

  const currencyObj = CURRENCIES.find((c) => c.id === currency);

  return (
    <div className="section--split top">
      <div>
        <div className="field first">
          <label className="label">WHAT ARE YOU BUILDING?</label>
          <select className="select" value={projectType} onChange={(e) => setProjectType(e.target.value)}>
            {PROJECT_TYPES.map((t) => (
              <option key={t.id} value={t.id}>{t.label}</option>
            ))}
          </select>
        </div>

        <div className="field-row">
          <div className="field">
            <label className="label">PROJECT SIZE</label>
            <select className="select" value={size} onChange={(e) => setSize(e.target.value)}>
              {SIZES.map((s) => (
                <option key={s.id} value={s.id}>{s.label}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label className="label">DESIGN LEVEL</label>
            <select className="select" value={design} onChange={(e) => setDesign(e.target.value)}>
              {DESIGN_LEVELS.map((d) => (
                <option key={d.id} value={d.id}>{d.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="field">
          <label className="label">FEATURES YOU NEED</label>
          <div className="chip-row">
            {FEATURES.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`chip${features.includes(f.id) ? " is-active" : ""}`}
                onClick={() => toggleFeature(f.id)}
                aria-pressed={features.includes(f.id)}
              >
                {features.includes(f.id) ? "✓ " : "+ "}{f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="field-row">
          <div className="field">
            <label className="label">TIMELINE</label>
            <select className="select" value={timeline} onChange={(e) => setTimeline(e.target.value)}>
              {TIMELINES.map((t) => (
                <option key={t.id} value={t.id}>{t.label}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label className="label">CURRENCY</label>
            <select className="select" value={currency} onChange={(e) => setCurrency(e.target.value)}>
              {CURRENCIES.map((c) => (
                <option key={c.id} value={c.id}>{c.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="code cost-tool__result">
        <div className="code__head"><span className="dot dot--red" style={{ width: "8px", height: "8px" }}></span><span className="fn">estimate.calc</span><span className="mut">— live</span></div>
        <div style={{ padding: "22px", fontFamily: "var(--mono)", fontSize: "13.5px", lineHeight: 1.85 }}>
          <div style={{ color: "var(--text-2)" }}><span style={{ color: "var(--teal)" }}>$</span> dww estimate --calculate</div>
          <div style={{ color: "var(--muted-2)", marginTop: "4px" }}>project: <span style={{ color: "var(--text-3)" }}>{PROJECT_TYPES.find((t) => t.id === projectType).label}</span></div>
          <div style={{ color: "var(--muted-2)" }}>size: <span style={{ color: "var(--text-3)" }}>{SIZES.find((s) => s.id === size).label}</span> · design: <span style={{ color: "var(--text-3)" }}>{DESIGN_LEVELS.find((d) => d.id === design).label}</span></div>
          <div style={{ color: "var(--muted-2)" }}>features: <span style={{ color: "var(--text-3)" }}>{features.length ? `${features.length} selected` : "none"}</span> · timeline: <span style={{ color: "var(--text-3)" }}>{TIMELINES.find((t) => t.id === timeline).label}</span></div>

          <div style={{ marginTop: "18px", paddingTop: "18px", borderTop: "1px solid var(--border)" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.1em", color: "var(--muted-2)" }}>ESTIMATED INVESTMENT RANGE</div>
            <div style={{ fontSize: "30px", fontWeight: 800, color: "var(--pink)", marginTop: "6px" }}>
              {formatAmount(low, currencyObj)} – {formatAmount(high, currencyObj)}
            </div>
            <div style={{ fontSize: "12.5px", color: "var(--green)", marginTop: "8px" }}>Most projects like this land around {formatAmount(mid, currencyObj)}</div>
          </div>

          <div style={{ marginTop: "16px", color: "var(--muted-2)", fontSize: "12px" }}>// indicative estimate — your exact fixed quote comes after a quick call<span className="caret"></span></div>
        </div>
      </div>
    </div>
  );
}
