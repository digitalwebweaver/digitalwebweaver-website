"use client";

import { useState } from "react";

const FILTERS = [
  "All",
  "Engineering",
  "Product",
  "Design",
  "AI & ML",
  "DevOps",
  "Business",
  "Case studies",
];

export default function BlogFilters() {
  const [active, setActive] = useState("All");

  return (
    <div className="blog-filter reveal">
      {FILTERS.map((f) => (
        <div
          key={f}
          className={`blog-tag${active === f ? " active" : ""}`}
          onClick={() => setActive(f)}
        >
          {f}
        </div>
      ))}
    </div>
  );
}
