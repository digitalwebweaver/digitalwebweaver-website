"use client";

import { useState } from "react";

const FILTERS = [
  "All projects",
  "SaaS / Web",
  "Mobile",
  "ERP / CRM",
  "AI & Automation",
  "E-commerce",
  "FinTech",
  "EdTech",
  "Logistics",
];

export default function PortfolioFilters() {
  const [active, setActive] = useState("All projects");

  return (
    <div className="port-filter reveal">
      {FILTERS.map((f) => (
        <div
          key={f}
          className={`port-tag${active === f ? " active" : ""}`}
          onClick={() => setActive(f)}
        >
          {f}
        </div>
      ))}
    </div>
  );
}
