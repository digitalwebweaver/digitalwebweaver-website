"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Most web apps and SaaS products take 8–20 weeks from signed scope to go-live, depending on complexity. MVPs can be as short as 6 weeks. We'll give you a phased timeline before any work begins.",
  },
  {
    q: "Do you work with early-stage startups or only established businesses?",
    a: "Both. Roughly half our projects are seed-stage founders building their first product; the other half are established SMEs modernising, scaling, or adding new capabilities to existing systems.",
  },
  {
    q: "What's your pricing model — fixed price or time & materials?",
    a: "We offer both. Fixed-price works well for clearly-scoped projects. Time & materials (with a monthly cap) suits evolving products. We'll recommend the right structure after scoping.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Yes — our monthly retainers include hosting oversight, security updates, feature additions, and priority support. Many clients have been on retainer with us for years.",
  },
  {
    q: "Which countries do you work with?",
    a: "We're fully remote-first and work with clients across India, the UK, South Africa, France, and beyond. Our distributed team covers UK, India, and SA time zones.",
  },
];

export default function ServicesFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 14 }}>
      {FAQS.map((faq, i) => (
        <div
          key={i}
          onClick={() => setOpen(open === i ? null : i)}
          style={{
            border: "1px solid var(--line)",
            borderRadius: 14,
            overflow: "hidden",
            background: open === i ? "var(--ink)" : "var(--paper-2)",
            transition: ".3s",
            cursor: "pointer",
          }}
        >
          <div style={{ padding: "22px 24px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
            <h4 style={{ fontFamily: "var(--display)", fontSize: 16.5, fontWeight: 600, letterSpacing: "-0.01em", color: open === i ? "var(--on-dark)" : "var(--ink)", flex: 1, lineHeight: 1.35 }}>
              {faq.q}
            </h4>
            <span style={{ fontFamily: "var(--mono)", fontSize: 18, color: "var(--accent)", flexShrink: 0, marginTop: 1 }}>
              {open === i ? "−" : "+"}
            </span>
          </div>
          {open === i && (
            <div style={{ padding: "0 24px 22px", fontSize: 14.5, color: "var(--on-dark-muted)", lineHeight: 1.65 }}>
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
