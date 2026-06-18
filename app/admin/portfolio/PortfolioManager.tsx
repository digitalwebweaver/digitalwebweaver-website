"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import AdminTopBar from "../AdminTopBar";
import { slugify } from "@/lib/slug";
import type { Project, ProjectMetric } from "@/lib/projects";
import { PORTFOLIO_ICONS, PORTFOLIO_ICON_KEYS, renderIcon } from "@/lib/portfolioIcons";
import ImageUploadField from "../ImageUploadField";

// Categories mirror the public PortfolioFilters tags (minus "All projects").
const CATEGORIES = [
  "SaaS / Web",
  "Mobile",
  "ERP / CRM",
  "AI & Automation",
  "E-commerce",
  "FinTech",
  "EdTech",
  "Logistics",
];

const EMPTY_DRAFT = {
  id: "",
  title: "",
  slug: "",
  tag: "",
  category: "",
  excerpt: "",
  content: "",
  icon: "default",
  color: "c1",
  metrics: [] as ProjectMetric[],
  stack: "",
  coverImage: "",
  clientName: "",
  clientCountry: "",
  status: "draft",
  featured: false,
  sortOrder: 0,
  seoTitle: "",
  seoDescription: "",
};

type Draft = typeof EMPTY_DRAFT;

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

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#1a1813",
  border: "1px solid #2a2620",
  borderRadius: 9,
  padding: "10px 14px",
  color: "#f5f2ed",
  fontSize: 13.5,
  fontFamily: "inherit",
};

const labelStyle: React.CSSProperties = {
  fontSize: 11.5,
  color: "#9b958c",
  textTransform: "uppercase",
  letterSpacing: ".05em",
  marginBottom: 6,
  display: "block",
  fontWeight: 600,
};

// Preview swatches for the color theme picker — approximate the c1/c2/c3 gradients.
const COLOR_SWATCH: Record<string, string> = {
  c1: "linear-gradient(140deg,#dbeafe,#bfdbfe)",
  c2: "linear-gradient(140deg,#fce7f3,#fbcfe8)",
  c3: "linear-gradient(140deg,#dcfce7,#bbf7d0)",
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <span style={labelStyle}>{label}</span>
      {children}
    </div>
  );
}

export default function PortfolioManager({ projects }: { projects: Project[] }) {
  const router = useRouter();
  const [filter, setFilter] = useState<"all" | "published" | "draft">("all");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [slugTouched, setSlugTouched] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (filter !== "all" && p.status !== filter) return false;
      if (search) {
        const q = search.toLowerCase();
        const hay = [p.title, p.slug, p.tag, p.category, p.client_name].filter(Boolean).join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [projects, filter, search]);

  const stats = useMemo(
    () => ({
      total: projects.length,
      published: projects.filter((p) => p.status === "published").length,
      draft: projects.filter((p) => p.status === "draft").length,
    }),
    [projects]
  );

  function startCreate() {
    setEditingId("new");
    setDraft({ ...EMPTY_DRAFT, metrics: [] });
    setSlugTouched(false);
    setError("");
  }

  function startEdit(p: Project) {
    setEditingId(p.id);
    setDraft({
      id: p.id,
      title: p.title,
      slug: p.slug,
      tag: p.tag || "",
      category: p.category || "",
      excerpt: p.excerpt || "",
      content: p.content || "",
      icon: p.icon || "default",
      color: p.color || "c1",
      metrics: Array.isArray(p.metrics) ? p.metrics : [],
      stack: Array.isArray(p.stack) ? p.stack.join(", ") : "",
      coverImage: p.cover_image || "",
      clientName: p.client_name || "",
      clientCountry: p.client_country || "",
      status: p.status,
      featured: !!p.featured,
      sortOrder: p.sort_order || 0,
      seoTitle: p.seo_title || "",
      seoDescription: p.seo_description || "",
    });
    setSlugTouched(true);
    setError("");
  }

  function cancelEdit() {
    setEditingId(null);
    setDraft(null);
    setError("");
  }

  function updateDraft<K extends keyof Draft>(key: K, value: Draft[K]) {
    setDraft((d) => (d ? { ...d, [key]: value } : d));
  }

  function onTitleChange(value: string) {
    if (!draft) return;
    const next = { ...draft, title: value };
    if (!slugTouched) next.slug = slugify(value);
    setDraft(next);
  }

  // ── Metrics editing (max 3) ──────────────────────────────────────────────
  function addMetric() {
    if (!draft || draft.metrics.length >= 3) return;
    updateDraft("metrics", [...draft.metrics, { value: "", label: "" }]);
  }
  function updateMetric(i: number, key: keyof ProjectMetric, value: string) {
    if (!draft) return;
    const next = draft.metrics.map((m, idx) => (idx === i ? { ...m, [key]: value } : m));
    updateDraft("metrics", next);
  }
  function removeMetric(i: number) {
    if (!draft) return;
    updateDraft("metrics", draft.metrics.filter((_, idx) => idx !== i));
  }

  async function save(status?: "draft" | "published") {
    if (!draft) return;
    if (!draft.title.trim()) {
      setError("Title is required");
      return;
    }
    setSaving(true);
    setError("");
    const payload = {
      ...draft,
      status: status ?? draft.status,
      // server expects stack as an array
      stack: draft.stack.split(",").map((s) => s.trim()).filter(Boolean),
      metrics: draft.metrics.filter((m) => m.value || m.label),
    };
    const isNew = editingId === "new";

    try {
      const res = await fetch("/api/admin/projects", {
        method: isNew ? "POST" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(isNew ? payload : { ...payload, id: editingId }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to save project");
        setSaving(false);
        return;
      }
      setEditingId(null);
      setDraft(null);
      router.refresh();
    } catch {
      setError("Failed to save project. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  async function remove(id: string) {
    if (!confirm("Delete this project permanently? This cannot be undone.")) return;
    await fetch("/api/admin/projects", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (editingId === id) cancelEdit();
    router.refresh();
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0f0e0b", color: "#f5f2ed", fontFamily: "'Hanken Grotesk', system-ui, sans-serif" }}>
      <AdminTopBar subtitle="Portfolio & Case Studies" />

      <div style={{ padding: "20px 26px 50px" }}>
        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12, marginBottom: 22 }}>
          {[
            { label: "Total projects", value: stats.total, color: "#f5f2ed" },
            { label: "Published", value: stats.published, color: "#34d399" },
            { label: "Drafts", value: stats.draft, color: "#fbbf24" },
          ].map((s) => (
            <div key={s.label} style={{ background: "#15130e", border: "1px solid #2a2620", borderRadius: 14, padding: "16px 18px" }}>
              <div style={{ fontSize: 11.5, color: "#9b958c", marginBottom: 6, textTransform: "uppercase", letterSpacing: ".04em" }}>{s.label}</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: s.color, fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}>{s.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: editingId ? "minmax(320px, 420px) 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          {/* List pane */}
          <div style={{ background: "#15130e", border: "1px solid #2a2620", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ padding: "16px 18px", borderBottom: "1px solid #2a2620", display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
              <div style={{ display: "flex", gap: 6 }}>
                {(["all", "published", "draft"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    style={{
                      padding: "7px 14px",
                      borderRadius: 8,
                      fontSize: 12.5,
                      fontWeight: 600,
                      cursor: "pointer",
                      border: filter === f ? "1px solid #e91e6340" : "1px solid #2a2620",
                      background: filter === f ? "#e91e6318" : "transparent",
                      color: filter === f ? "#e91e63" : "#9b958c",
                      textTransform: "capitalize",
                    }}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <input
                type="text"
                placeholder="Search projects…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ ...inputStyle, flex: "1 1 160px", maxWidth: 240, padding: "8px 12px" }}
              />
              <button
                onClick={startCreate}
                style={{ marginLeft: "auto", padding: "9px 18px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", border: "none", background: "linear-gradient(135deg,#e91e63,#c2185b)", color: "#fff" }}
              >
                + New project
              </button>
            </div>

            <div style={{ maxHeight: 720, overflowY: "auto" }}>
              {filtered.length === 0 && <div style={{ padding: 24, fontSize: 13, color: "#6e6a62" }}>No projects found.</div>}
              {filtered.map((p) => {
                const isActive = editingId === p.id;
                return (
                  <div
                    key={p.id}
                    style={{
                      padding: "14px 18px",
                      borderBottom: "1px solid #211f19",
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      background: isActive ? "#e91e6312" : "transparent",
                      borderLeft: isActive ? "3px solid #e91e63" : "3px solid transparent",
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 0, cursor: "pointer" }} onClick={() => startEdit(p)}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                        <span
                          style={{
                            fontSize: 10,
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: ".06em",
                            padding: "3px 8px",
                            borderRadius: 5,
                            background: p.status === "published" ? "#34d39922" : "#fbbf2422",
                            color: p.status === "published" ? "#34d399" : "#fbbf24",
                          }}
                        >
                          {p.status}
                        </span>
                        {p.featured && <span style={{ fontSize: 10.5, color: "#e91e63", fontWeight: 700 }}>★ Featured</span>}
                        {p.tag && <span style={{ fontSize: 11.5, color: "#9b958c" }}>{p.tag}</span>}
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#f5f2ed", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.title}</div>
                      <div style={{ fontSize: 11.5, color: "#6e6a62", marginTop: 3, fontFamily: "'JetBrains Mono', monospace" }}>
                        /portfolio/{p.slug} · updated {timeAgo(p.updated_at)}
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                      <button onClick={() => startEdit(p)} style={{ padding: "7px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", border: "1px solid #3a352d", background: "transparent", color: "#d8d4cd" }}>
                        Edit
                      </button>
                      <button onClick={() => remove(p.id)} style={{ padding: "7px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", border: "1px solid #5c2330", background: "transparent", color: "#f87171" }}>
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Editor pane */}
          {editingId && draft && (
            <div style={{ background: "#15130e", border: "1px solid #2a2620", borderRadius: 14, padding: "22px 26px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{editingId === "new" ? "New project" : "Edit project"}</div>
                <button onClick={cancelEdit} style={{ padding: "7px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", border: "1px solid #3a352d", background: "transparent", color: "#9b958c" }}>
                  Close
                </button>
              </div>

              {error && (
                <div style={{ background: "#3a1d22", border: "1px solid #5c2330", borderRadius: 9, padding: "10px 14px", fontSize: 13, color: "#f87171", marginBottom: 16 }}>
                  {error}
                </div>
              )}

              <div style={{ display: "grid", gap: 16 }}>
                <Field label="Project title">
                  <input style={inputStyle} value={draft.title} onChange={(e) => onTitleChange(e.target.value)} placeholder="ManufacturIQ — smart ERP" />
                </Field>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Field label="URL slug (digitalwebweaver.com/portfolio/…)">
                    <input
                      style={inputStyle}
                      value={draft.slug}
                      onChange={(e) => {
                        setSlugTouched(true);
                        updateDraft("slug", slugify(e.target.value));
                      }}
                      placeholder="manufacturiq-smart-erp"
                    />
                  </Field>
                  <Field label="Category (drives the filter tags)">
                    <select style={inputStyle} value={draft.category} onChange={(e) => updateDraft("category", e.target.value)}>
                      <option value="">— Select —</option>
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Tag line (small label on the card, e.g. “Manufacturing · ERP”)">
                  <input style={inputStyle} value={draft.tag} onChange={(e) => updateDraft("tag", e.target.value)} placeholder="Manufacturing · ERP" />
                </Field>

                <Field label="Card description (the paragraph shown on the card)">
                  <textarea
                    style={{ ...inputStyle, minHeight: 70, resize: "vertical" }}
                    value={draft.excerpt}
                    onChange={(e) => updateDraft("excerpt", e.target.value)}
                    placeholder="End-to-end ERP for a mid-size manufacturer…"
                  />
                </Field>

                {/* Icon picker */}
                <Field label="Card icon">
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {PORTFOLIO_ICON_KEYS.map((key) => {
                      const isSel = draft.icon === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          title={PORTFOLIO_ICONS[key].label}
                          onClick={() => updateDraft("icon", key)}
                          style={{
                            width: 46,
                            height: 46,
                            borderRadius: 10,
                            cursor: "pointer",
                            display: "grid",
                            placeItems: "center",
                            background: isSel ? "#e91e6318" : "#1a1813",
                            border: isSel ? "1.5px solid #e91e63" : "1px solid #2a2620",
                            color: isSel ? "#e91e63" : "#9b958c",
                          }}
                        >
                          <span style={{ width: 22, height: 22, display: "inline-flex" }}>{renderIcon(key)}</span>
                        </button>
                      );
                    })}
                  </div>
                </Field>

                {/* Color picker */}
                <Field label="Card header color">
                  <div style={{ display: "flex", gap: 10 }}>
                    {(["c1", "c2", "c3"] as const).map((c) => {
                      const isSel = draft.color === c;
                      return (
                        <button
                          key={c}
                          type="button"
                          onClick={() => updateDraft("color", c)}
                          style={{
                            width: 64,
                            height: 40,
                            borderRadius: 9,
                            cursor: "pointer",
                            background: COLOR_SWATCH[c],
                            border: isSel ? "2.5px solid #e91e63" : "2px solid #2a2620",
                          }}
                        />
                      );
                    })}
                  </div>
                </Field>

                {/* Metrics */}
                <div>
                  <span style={labelStyle}>Metrics (up to 3 — shown on the card)</span>
                  <div style={{ display: "grid", gap: 8 }}>
                    {draft.metrics.map((m, i) => (
                      <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr auto", gap: 8 }}>
                        <input style={inputStyle} value={m.value} onChange={(e) => updateMetric(i, "value", e.target.value)} placeholder="40%" />
                        <input style={inputStyle} value={m.label} onChange={(e) => updateMetric(i, "label", e.target.value)} placeholder="Cost reduction" />
                        <button onClick={() => removeMetric(i)} style={{ padding: "0 12px", borderRadius: 8, cursor: "pointer", border: "1px solid #5c2330", background: "transparent", color: "#f87171", fontSize: 16 }}>×</button>
                      </div>
                    ))}
                    {draft.metrics.length < 3 && (
                      <button onClick={addMetric} style={{ justifySelf: "start", padding: "8px 14px", borderRadius: 8, fontSize: 12.5, fontWeight: 600, cursor: "pointer", border: "1px dashed #3a352d", background: "transparent", color: "#9b958c" }}>
                        + Add metric
                      </button>
                    )}
                  </div>
                </div>

                <Field label="Tech stack (comma-separated — shown as chips)">
                  <input style={inputStyle} value={draft.stack} onChange={(e) => updateDraft("stack", e.target.value)} placeholder="Laravel, Vue.js, MySQL, Docker" />
                </Field>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Field label="Client name (optional)">
                    <input style={inputStyle} value={draft.clientName} onChange={(e) => updateDraft("clientName", e.target.value)} placeholder="Acme Manufacturing" />
                  </Field>
                  <Field label="Client country (optional)">
                    <input style={inputStyle} value={draft.clientCountry} onChange={(e) => updateDraft("clientCountry", e.target.value)} placeholder="India" />
                  </Field>
                </div>

                <Field label="Full case study (Markdown — shown on the /portfolio/[slug] detail page)">
                  <textarea
                    style={{ ...inputStyle, minHeight: 280, resize: "vertical", fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6 }}
                    value={draft.content}
                    onChange={(e) => updateDraft("content", e.target.value)}
                    placeholder={"## The challenge\n\nDescribe the project in detail using Markdown…"}
                  />
                </Field>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "center" }}>
                  <Field label="Sort order (lower = earlier)">
                    <input
                      type="number"
                      style={inputStyle}
                      value={draft.sortOrder}
                      onChange={(e) => updateDraft("sortOrder", Number(e.target.value) || 0)}
                    />
                  </Field>
                  <label style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 22, cursor: "pointer", fontSize: 13.5, color: "#d8d4cd" }}>
                    <input type="checkbox" checked={draft.featured} onChange={(e) => updateDraft("featured", e.target.checked)} />
                    Feature this project (pin to top)
                  </label>
                </div>

                <Field label="Cover image (optional — paste a URL or upload; used on the detail page)">
                  <ImageUploadField
                    value={draft.coverImage}
                    onChange={(url) => updateDraft("coverImage", url)}
                    folder="portfolio"
                    inputStyle={inputStyle}
                  />
                </Field>

                <div style={{ borderTop: "1px solid #2a2620", paddingTop: 16, display: "grid", gap: 16 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 700, color: "#9b958c", textTransform: "uppercase", letterSpacing: ".05em" }}>SEO overrides (optional)</div>
                  <Field label="SEO title (defaults to project title)">
                    <input style={inputStyle} value={draft.seoTitle} onChange={(e) => updateDraft("seoTitle", e.target.value)} placeholder="Custom <title> for search engines" />
                  </Field>
                  <Field label="SEO meta description (defaults to card description)">
                    <textarea
                      style={{ ...inputStyle, minHeight: 60, resize: "vertical" }}
                      value={draft.seoDescription}
                      onChange={(e) => updateDraft("seoDescription", e.target.value)}
                      placeholder="Custom meta description shown in Google search results"
                    />
                  </Field>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8, gap: 12, flexWrap: "wrap" }}>
                  <div style={{ fontSize: 12, color: "#6e6a62" }}>
                    Status: <strong style={{ color: draft.status === "published" ? "#34d399" : "#fbbf24" }}>{draft.status}</strong>
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <button
                      disabled={saving}
                      onClick={() => save("draft")}
                      style={{ padding: "11px 20px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: saving ? "default" : "pointer", border: "1px solid #3a352d", background: "transparent", color: "#d8d4cd", opacity: saving ? 0.6 : 1 }}
                    >
                      Save as draft
                    </button>
                    <button
                      disabled={saving}
                      onClick={() => save("published")}
                      style={{ padding: "11px 22px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: saving ? "default" : "pointer", border: "none", background: "linear-gradient(135deg,#e91e63,#c2185b)", color: "#fff", opacity: saving ? 0.6 : 1 }}
                    >
                      {saving ? "Saving…" : "Publish"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
