"use client";
import { useState } from "react";

const ICONS = {
  react: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="10" ry="4.2"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)"/></svg>,
  next: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="10"/><path d="M8.5 16.5V8l8 11" strokeLinecap="round"/><path d="M15.5 8v5.5" strokeLinecap="round"/></svg>,
  vue: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 4l9 16 9-16" strokeLinejoin="round"/><path d="M7.5 4L12 11l4.5-7" strokeLinejoin="round"/></svg>,
  ts: <svg viewBox="0 0 24 24"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" stroke="currentColor" strokeWidth="1.4"/><text x="12" y="15.5" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="600" textAnchor="middle" fill="currentColor">TS</text></svg>,
  tailwind: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 12c1.3-3.3 3.7-5 7-5 2.5 0 3.7 1.2 4.5 2.5C16.3 11 17 11.5 19 11.5M2 16.5c1.3-3.3 3.7-5 7-5 2.5 0 3.7 1.2 4.5 2.5C14.3 15.5 15 16 17 16" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  node: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 2l8.5 5v10L12 22 3.5 17V7z" strokeLinejoin="round"/><path d="M9 15c0 1 1 1.5 3 1.5s3-.8 3-2-1-1.5-3-2-3-1-3-2 1-1.5 3-1.5 2.6.5 2.8 1.3" strokeLinecap="round"/></svg>,
  python: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 3c-3 0-4 1-4 3v2h5M8 8H6c-2 0-3 1-3 4s1 4 3 4h2v-3c0-2 1-3 3-3h3c2 0 3-1 3-3V6c0-2-1-3-4-3" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 21c3 0 4-1 4-3v-2h-5M16 16h2c2 0 3-1 3-4" strokeLinecap="round" strokeLinejoin="round"/><circle cx="10" cy="6" r=".8" fill="currentColor" stroke="none"/><circle cx="14" cy="18" r=".8" fill="currentColor" stroke="none"/></svg>,
  go: <svg viewBox="0 0 24 24"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" stroke="currentColor" strokeWidth="1.4"/><text x="12" y="15.5" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="600" textAnchor="middle" fill="currentColor">Go</text></svg>,
  db: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.6 3 3 7 3s7-1.4 7-3V6"/><path d="M5 12c0 1.6 3 3 7 3s7-1.4 7-3"/></svg>,
  redis: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 3l9 4-9 4-9-4z" strokeLinejoin="round"/><path d="M3 12l9 4 9-4M3 17l9 4 9-4" strokeLinejoin="round"/></svg>,
  swift: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 5c4 4 8 6 13 6-2 2-5 2.5-8 1.5 2.5 3 6 4 9.5 2.5-2.5 3-8 4.5-13 0" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  kotlin: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 4h16L12 12l8 8H4z" strokeLinejoin="round"/></svg>,
  flutter: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M14 3L5 12l3 3L20 3zM14 11l-6 6 6 6 3-3-3-3 6-6z" strokeLinejoin="round"/></svg>,
  aws: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 11c2 2.7 5 4 8 4s6-1.3 8-4" strokeLinecap="round"/><path d="M17 13.5l2.2.5-.5 2.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 7c1.7-1 3.3-1 5 0" strokeLinecap="round"/></svg>,
  k8s: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M12 2l8.5 4v9L12 22 3.5 15V6z" strokeLinejoin="round"/><circle cx="12" cy="12" r="2.3"/><path d="M12 9.7V4M12 14.3V20M14 13l4 3M10 13l-4 3M14.2 11l4.3-2.5M9.8 11L5.5 8.5" strokeLinecap="round"/></svg>,
  docker: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="3" y="10" width="3" height="3"/><rect x="7" y="10" width="3" height="3"/><rect x="11" y="10" width="3" height="3"/><rect x="7" y="6" width="3" height="3"/><rect x="11" y="6" width="3" height="3"/><path d="M2 13h15c0-1 0-2 1-3 .8 1 1.5 1 2.5.5-.3 4-3.5 7-8.5 7C5 17.5 2.5 15 2 13z" strokeLinejoin="round"/></svg>,
  openai: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="9.5" cy="10" r="5"/><circle cx="14.5" cy="10" r="5"/><circle cx="12" cy="15" r="5"/></svg>,
  anthropic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3v18M4.5 7.5l15 9M19.5 7.5l-15 9" strokeLinecap="round"/></svg>,
};

const STACKS: Record<string, [string, React.ReactNode][]> = {
  frontend: [["React", ICONS.react], ["Next.js", ICONS.next], ["Vue", ICONS.vue], ["TypeScript", ICONS.ts], ["Tailwind CSS", ICONS.tailwind]],
  backend: [["Node.js", ICONS.node], ["Python", ICONS.python], ["Go", ICONS.go], ["PostgreSQL", ICONS.db], ["Redis", ICONS.redis]],
  mobile: [["React Native", ICONS.react], ["Swift", ICONS.swift], ["Kotlin", ICONS.kotlin], ["Flutter", ICONS.flutter]],
  cloud: [["AWS", ICONS.aws], ["Kubernetes", ICONS.k8s], ["Docker", ICONS.docker]],
  ai: [["OpenAI", ICONS.openai], ["Anthropic", ICONS.anthropic]],
};

const TABS = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "mobile", label: "Mobile" },
  { key: "cloud", label: "Cloud & data" },
  { key: "ai", label: "AI" },
];

export default function TechStackTabs() {
  const [active, setActive] = useState("frontend");

  return (
    <>
      <div className="tabs">
        {TABS.map(t => (
          <div key={t.key} className={`tab${active === t.key ? " active" : ""}`} onClick={() => setActive(t.key)}>
            {t.label}
          </div>
        ))}
      </div>
      <div className="chips">
        {(STACKS[active] || []).map(([name, icon]) => (
          <div key={name} className="chip">
            {icon}
            <span>{name}</span>
          </div>
        ))}
      </div>
    </>
  );
}
