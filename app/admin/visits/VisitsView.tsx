"use client";

import { useMemo, useState } from "react";
import AdminTopBar from "../AdminTopBar";

interface Visit {
  id: string;
  session_id: string;
  created_at: string;
  last_seen_at: string;
  ip: string | null;
  location: string | null;
  user_agent: string | null;
  browser: string | null;
  os: string | null;
  device: string | null;
  referrer: string | null;
  entry_page: string | null;
  exit_page: string | null;
  page_count: number;
  duration_seconds: number;
}

interface PageView {
  id: string;
  session_id: string;
  path: string;
  title: string | null;
  viewed_at: string;
  duration_seconds: number;
}

type RangeKey = "today" | "week" | "month" | "custom";

const RANGES: { key: RangeKey; label: string }[] = [
  { key: "today", label: "Today" },
  { key: "week", label: "This week" },
  { key: "month", label: "This month" },
  { key: "custom", label: "Custom range" },
];

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

function formatDuration(seconds: number) {
  if (!seconds || seconds < 1) return "—";
  if (seconds < 60) return `${seconds}s`;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m < 60) return s ? `${m}m ${s}s` : `${m}m`;
  const h = Math.floor(m / 60);
  const remM = m % 60;
  return remM ? `${h}h ${remM}m` : `${h}h`;
}

function startOfDay(d: Date) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}
function startOfWeek(d: Date) {
  const x = startOfDay(d);
  const day = x.getDay();
  const diff = day === 0 ? 6 : day - 1;
  x.setDate(x.getDate() - diff);
  return x;
}
function startOfMonth(d: Date) {
  const x = startOfDay(d);
  x.setDate(1);
  return x;
}

function getRangeBounds(range: RangeKey, customFrom: string, customTo: string) {
  const now = new Date();
  if (range === "today") return { start: startOfDay(now), end: now };
  if (range === "week") return { start: startOfWeek(now), end: now };
  if (range === "month") return { start: startOfMonth(now), end: now };
  const start = customFrom ? new Date(`${customFrom}T00:00:00`) : startOfDay(now);
  const end = customTo ? new Date(`${customTo}T23:59:59`) : now;
  return { start, end };
}

function topEntries(items: (string | null | undefined)[], limit = 6) {
  const map = new Map<string, number>();
  for (const it of items) {
    if (!it) continue;
    map.set(it, (map.get(it) || 0) + 1);
  }
  return [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, limit);
}

function referrerLabel(ref: string | null) {
  if (!ref) return "Direct / None";
  try {
    return new URL(ref).hostname.replace(/^www\./, "");
  } catch {
    return ref;
  }
}

const DEVICE_COLOR: Record<string, string> = {
  Desktop: "#60a5fa",
  Mobile: "#34d399",
  Tablet: "#fbbf24",
};

function BreakdownCard({ title, rows, total }: { title: string; rows: [string, number][]; total: number }) {
  return (
    <div style={{ background: "#15130e", border: "1px solid #2a2620", borderRadius: 14, padding: 18 }}>
      <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 14, color: "#f5f2ed" }}>{title}</div>
      {rows.length === 0 && <div style={{ fontSize: 12.5, color: "#6e6a62" }}>No data for this range</div>}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {rows.map(([label, count]) => {
          const pct = total ? Math.round((count / total) * 100) : 0;
          return (
            <div key={label}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, marginBottom: 4 }}>
                <span style={{ color: "#d8d4cd", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 180 }}>{label}</span>
                <span style={{ color: "#9b958c", fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5 }}>{count} · {pct}%</span>
              </div>
              <div style={{ height: 6, borderRadius: 4, background: "#1f1c16", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${pct}%`, background: "linear-gradient(90deg,#e91e63,#c2185b)", borderRadius: 4 }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function VisitsView({ visits, pageViews }: { visits: Visit[]; pageViews: PageView[] }) {
  const [range, setRange] = useState<RangeKey>("today");
  const [customFrom, setCustomFrom] = useState("");
  const [customTo, setCustomTo] = useState("");
  const [search, setSearch] = useState("");
  const [activeId, setActiveId] = useState<string | null>(null);

  const { start, end } = useMemo(() => getRangeBounds(range, customFrom, customTo), [range, customFrom, customTo]);

  const filteredVisits = useMemo(() => {
    const startMs = start.getTime();
    const endMs = end.getTime();
    return visits.filter((v) => {
      const t = new Date(v.created_at).getTime();
      if (t < startMs || t > endMs) return false;
      if (search) {
        const q = search.toLowerCase();
        const hay = [v.location, v.ip, v.browser, v.os, v.device, v.entry_page, v.referrer]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [visits, start, end, search]);

  const sessionIdSet = useMemo(() => new Set(filteredVisits.map((v) => v.session_id)), [filteredVisits]);
  const filteredPageViews = useMemo(
    () => pageViews.filter((pv) => sessionIdSet.has(pv.session_id)),
    [pageViews, sessionIdSet]
  );

  const stats = useMemo(() => {
    const total = filteredVisits.length;
    const uniqueIps = new Set(filteredVisits.map((v) => v.ip).filter(Boolean)).size;
    const totalDuration = filteredVisits.reduce((sum, v) => sum + (v.duration_seconds || 0), 0);
    const avgDuration = total ? Math.round(totalDuration / total) : 0;
    const bounced = filteredVisits.filter((v) => (v.page_count || 0) <= 1).length;
    const bounceRate = total ? Math.round((bounced / total) * 100) : 0;
    return { total, uniqueIps, avgDuration, bounceRate, pageViews: filteredPageViews.length };
  }, [filteredVisits, filteredPageViews]);

  const chartData = useMemo(() => {
    const map = new Map<string, number>();
    for (const v of filteredVisits) {
      const day = new Date(v.created_at).toISOString().slice(0, 10);
      map.set(day, (map.get(day) || 0) + 1);
    }
    const entries = [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
    const max = entries.reduce((m, [, c]) => Math.max(m, c), 0);
    return { entries, max };
  }, [filteredVisits]);

  const topPages = useMemo(() => topEntries(filteredPageViews.map((pv) => pv.path)), [filteredPageViews]);
  const topLocations = useMemo(() => topEntries(filteredVisits.map((v) => v.location)), [filteredVisits]);
  const topDevices = useMemo(() => topEntries(filteredVisits.map((v) => v.device)), [filteredVisits]);
  const topBrowsers = useMemo(() => topEntries(filteredVisits.map((v) => v.browser)), [filteredVisits]);
  const topReferrers = useMemo(
    () => topEntries(filteredVisits.map((v) => referrerLabel(v.referrer))),
    [filteredVisits]
  );

  const active = useMemo(() => filteredVisits.find((v) => v.session_id === activeId) ?? null, [filteredVisits, activeId]);
  const journey = useMemo(() => {
    if (!active) return [];
    return filteredPageViews
      .filter((pv) => pv.session_id === active.session_id)
      .sort((a, b) => new Date(a.viewed_at).getTime() - new Date(b.viewed_at).getTime());
  }, [filteredPageViews, active]);

  const fmtDate = (d: Date) => d.toISOString().slice(0, 10);

  return (
    <div style={{ minHeight: "100vh", background: "#0f0e0b", color: "#f5f2ed", fontFamily: "'Hanken Grotesk', system-ui, sans-serif" }}>
      <AdminTopBar subtitle="Visitor Analytics" />

      <div style={{ padding: "20px 26px 40px" }}>
        {/* Filter bar */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, marginBottom: 22 }}>
          <div style={{ display: "flex", gap: 6, background: "#15130e", border: "1px solid #2a2620", borderRadius: 11, padding: 4 }}>
            {RANGES.map((r) => (
              <button
                key={r.key}
                onClick={() => setRange(r.key)}
                style={{
                  padding: "8px 16px",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "none",
                  background: range === r.key ? "#e91e63" : "transparent",
                  color: range === r.key ? "#fff" : "#9b958c",
                }}
              >
                {r.label}
              </button>
            ))}
          </div>

          {range === "custom" && (
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input
                type="date"
                value={customFrom}
                max={fmtDate(new Date())}
                onChange={(e) => setCustomFrom(e.target.value)}
                style={{ background: "#15130e", border: "1px solid #2a2620", borderRadius: 9, padding: "8px 12px", color: "#f5f2ed", fontSize: 13 }}
              />
              <span style={{ color: "#6e6a62", fontSize: 13 }}>to</span>
              <input
                type="date"
                value={customTo}
                max={fmtDate(new Date())}
                onChange={(e) => setCustomTo(e.target.value)}
                style={{ background: "#15130e", border: "1px solid #2a2620", borderRadius: 9, padding: "8px 12px", color: "#f5f2ed", fontSize: 13 }}
              />
            </div>
          )}

          <input
            type="text"
            placeholder="Search location, IP, browser, page…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ flex: "1 1 220px", maxWidth: 320, background: "#15130e", border: "1px solid #2a2620", borderRadius: 9, padding: "9px 14px", color: "#f5f2ed", fontSize: 13 }}
          />

          <div style={{ marginLeft: "auto", fontSize: 12, color: "#6e6a62", fontFamily: "'JetBrains Mono', monospace" }}>
            {fmtDate(start)} → {fmtDate(end)}
          </div>
        </div>

        {/* Stat cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12, marginBottom: 22 }}>
          {[
            { label: "Total visits", value: stats.total, color: "#f5f2ed" },
            { label: "Unique visitors (by IP)", value: stats.uniqueIps, color: "#e91e63" },
            { label: "Page views", value: stats.pageViews, color: "#60a5fa" },
            { label: "Avg. time on site", value: formatDuration(stats.avgDuration), color: "#34d399" },
            { label: "Bounce rate", value: `${stats.bounceRate}%`, color: "#fbbf24" },
          ].map((s) => (
            <div key={s.label} style={{ background: "#15130e", border: "1px solid #2a2620", borderRadius: 14, padding: "16px 18px" }}>
              <div style={{ fontSize: 11.5, color: "#9b958c", marginBottom: 6, textTransform: "uppercase", letterSpacing: ".04em" }}>{s.label}</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: s.color, fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Trend chart */}
        <div style={{ background: "#15130e", border: "1px solid #2a2620", borderRadius: 14, padding: 18, marginBottom: 22 }}>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 16 }}>Visits over time</div>
          {chartData.entries.length === 0 ? (
            <div style={{ fontSize: 12.5, color: "#6e6a62" }}>No visits recorded for this range</div>
          ) : (
            <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 120 }}>
              {chartData.entries.map(([day, count]) => {
                const h = chartData.max ? Math.max(4, Math.round((count / chartData.max) * 100)) : 4;
                return (
                  <div key={day} title={`${day}: ${count} visits`} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                    <div style={{ fontSize: 10.5, color: "#9b958c", fontFamily: "'JetBrains Mono', monospace" }}>{count}</div>
                    <div style={{ width: "100%", maxWidth: 28, height: h, borderRadius: 5, background: "linear-gradient(180deg,#e91e63,#c2185b)" }} />
                    <div style={{ fontSize: 10, color: "#6e6a62" }}>{day.slice(5)}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Breakdown panels */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14, marginBottom: 22 }}>
          <BreakdownCard title="Top pages" rows={topPages} total={stats.pageViews} />
          <BreakdownCard title="Locations" rows={topLocations} total={stats.total} />
          <BreakdownCard title="Devices" rows={topDevices} total={stats.total} />
          <BreakdownCard title="Browsers" rows={topBrowsers} total={stats.total} />
          <BreakdownCard title="Traffic sources" rows={topReferrers} total={stats.total} />
        </div>

        {/* Sessions: list + journey detail */}
        <div style={{ display: "grid", gridTemplateColumns: "minmax(320px, 420px) 1fr", gap: 14, alignItems: "start" }}>
          <div style={{ background: "#15130e", border: "1px solid #2a2620", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ padding: "16px 18px", borderBottom: "1px solid #2a2620", fontSize: 13, fontWeight: 700 }}>
              Sessions <span style={{ color: "#6e6a62", fontWeight: 500 }}>({filteredVisits.length})</span>
            </div>
            <div style={{ maxHeight: 640, overflowY: "auto" }}>
              {filteredVisits.length === 0 && (
                <div style={{ padding: 24, fontSize: 13, color: "#6e6a62" }}>No visits in this range yet.</div>
              )}
              {filteredVisits.map((v) => {
                const isActive = v.session_id === activeId;
                return (
                  <button
                    key={v.id}
                    onClick={() => setActiveId(v.session_id)}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      padding: "14px 18px",
                      borderBottom: "1px solid #211f19",
                      background: isActive ? "#e91e6312" : "transparent",
                      borderLeft: isActive ? "3px solid #e91e63" : "3px solid transparent",
                      cursor: "pointer",
                      color: "inherit",
                      font: "inherit",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                      <span style={{ fontSize: 13.5, fontWeight: 700, color: "#f5f2ed" }}>{v.location || "Unknown location"}</span>
                      <span style={{ fontSize: 11, color: "#6e6a62", fontFamily: "'JetBrains Mono', monospace" }}>{timeAgo(v.created_at)}</span>
                    </div>
                    <div style={{ fontSize: 12, color: "#9b958c", marginBottom: 6 }}>
                      {v.ip || "—"} · {v.device || "Unknown"} · {v.browser || "Unknown"}
                    </div>
                    <div style={{ display: "flex", gap: 14, fontSize: 11.5, color: "#7d786f" }}>
                      <span>{v.page_count} {v.page_count === 1 ? "page" : "pages"}</span>
                      <span>{formatDuration(v.duration_seconds)}</span>
                      <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>via {referrerLabel(v.referrer)}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ background: "#15130e", border: "1px solid #2a2620", borderRadius: 14, minHeight: 360 }}>
            {!active ? (
              <div style={{ display: "grid", placeItems: "center", height: 360, color: "#6e6a62", fontSize: 13.5 }}>
                Select a session to see the full visitor journey
              </div>
            ) : (
              <div>
                <div style={{ padding: "20px 24px", borderBottom: "1px solid #2a2620" }}>
                  <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{active.location || "Unknown location"}</div>
                  <div style={{ fontSize: 12.5, color: "#9b958c" }}>
                    First seen {new Date(active.created_at).toLocaleString("en-IN")} · Last active {timeAgo(active.last_seen_at)}
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16, padding: "20px 24px", borderBottom: "1px solid #2a2620" }}>
                  {[
                    { label: "IP address", value: active.ip || "—" },
                    { label: "Device", value: active.device || "—" },
                    { label: "Browser", value: active.browser || "—" },
                    { label: "OS", value: active.os || "—" },
                    { label: "Pages viewed", value: String(active.page_count) },
                    { label: "Time on site", value: formatDuration(active.duration_seconds) },
                    { label: "Entry page", value: active.entry_page || "—" },
                    { label: "Exit page", value: active.exit_page || "—" },
                    { label: "Referrer", value: referrerLabel(active.referrer) },
                  ].map((f) => (
                    <div key={f.label}>
                      <div style={{ fontSize: 11, color: "#9b958c", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 4 }}>{f.label}</div>
                      <div style={{ fontSize: 13.5, color: "#f5f2ed", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.value}</div>
                    </div>
                  ))}
                </div>

                <div style={{ padding: "20px 24px" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 14 }}>Page-by-page journey</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {journey.map((pv, i) => (
                      <div key={pv.id} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                        <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#1f1c16", border: "1px solid #2a2620", display: "grid", placeItems: "center", fontSize: 11, fontWeight: 700, color: "#9b958c", flexShrink: 0 }}>
                          {i + 1}
                        </div>
                        <div style={{ flex: 1, background: "#1a1813", border: "1px solid #2a2620", borderRadius: 10, padding: "12px 16px" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                            <span style={{ fontSize: 13.5, fontWeight: 600, color: "#f5f2ed", fontFamily: "'JetBrains Mono', monospace" }}>{pv.path}</span>
                            <span style={{ fontSize: 11.5, color: "#9b958c", flexShrink: 0 }}>{formatDuration(pv.duration_seconds)}</span>
                          </div>
                          <div style={{ fontSize: 12, color: "#7d786f", marginTop: 4 }}>
                            {pv.title || ""} · {new Date(pv.viewed_at).toLocaleTimeString("en-IN")}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
