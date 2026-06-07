"use client";
import { useEffect, useRef } from "react";

function StatItem({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const numRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;
    let raf: number;
    const duration = 2000;
    const start = performance.now();

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.max(1, Math.round(eased * target))) + suffix;
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, suffix]);

  return (
    <div className="stat">
      <div className="num" ref={numRef}>{target}{suffix}</div>
      <div className="lab">{label}</div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <div className="stats reveal">
      <StatItem target={200} suffix="+" label="Systems shipped" />
      <StatItem target={15} suffix="" label="Countries served" />
      <StatItem target={12} suffix="+ yrs" label="In operation" />
      <StatItem target={98} suffix="%" label="On-time delivery" />
    </div>
  );
}
