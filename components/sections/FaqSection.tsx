"use client";
import { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

interface Props {
  eyebrow?: string;
  heading: string;
  body?: string;
  items: FaqItem[];
}

export default function FaqSection({ eyebrow = "FAQ", heading, body, items }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 style={{ marginTop: 18 }}>{heading}</h2>
            {body && <p>{body}</p>}
          </div>
        </div>
        <div className="faq-layout">
          <div className="faq-list">
            {items.map((item, i) => (
              <div key={i} className={`faq-item reveal${revealed ? " in" : ""}${open === i ? " open" : ""}`}>
                <button
                  className="faq-q"
                  onClick={() => {
                    setRevealed(true);
                    setOpen(open === i ? null : i);
                  }}
                  aria-expanded={open === i}
                >
                  {item.q}
                  <span className="fq-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: 14, height: 14 }}>
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
