"use client";

import { useState } from "react";
import Link from "next/link";
import { renderIcon } from "@/lib/portfolioIcons";
import type { Project } from "@/lib/projects";

// Filter tags — "All projects" plus the categories used in the admin.
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

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("All projects");

  const visible =
    active === "All projects" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Interactive Filters — markup identical to the original PortfolioFilters */}
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

      {/* Cards */}
      <div className="port-grid">
        {visible.length === 0 && (
          <p className="lead" style={{ gridColumn: "1 / -1", color: "var(--ink-2)" }}>
            No projects in this category yet.
          </p>
        )}

        {visible.map((p) => (
          <Link key={p.id} href={`/portfolio/${p.slug}/`} className="case reveal" style={{ textDecoration: "none", color: "inherit" }}>
            <div className={`case-top ${p.color || "c1"}`}>
              <span className="case-tag">{p.tag || p.category || "Case study"}</span>
              {renderIcon(p.icon)}
            </div>
            <div className="case-body">
              <h3>{p.title}</h3>
              {p.excerpt && <p>{p.excerpt}</p>}
              {p.metrics?.length > 0 && (
                <div className="case-metrics">
                  {p.metrics.map((m, i) => (
                    <div className="cm-i" key={i}>
                      <div className="m">{m.value}</div>
                      <div className="ml">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}
              {p.stack?.length > 0 && (
                <div className="case-stack">
                  {p.stack.map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
