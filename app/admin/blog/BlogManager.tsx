"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import AdminTopBar from "../AdminTopBar";
import { slugify } from "@/lib/slug";

interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  cover_image: string | null;
  tag: string | null;
  author_name: string | null;
  author_initials: string | null;
  read_minutes: number;
  status: string;
  seo_title: string | null;
  seo_description: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

const EMPTY_DRAFT = {
  id: "",
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  coverImage: "",
  tag: "",
  authorName: "",
  authorInitials: "",
  status: "draft",
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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <span style={labelStyle}>{label}</span>
      {children}
    </div>
  );
}

export default function BlogManager({ posts }: { posts: Post[] }) {
  const router = useRouter();
  const [filter, setFilter] = useState<"all" | "published" | "draft">("all");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [slugTouched, setSlugTouched] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      if (filter !== "all" && p.status !== filter) return false;
      if (search) {
        const q = search.toLowerCase();
        const hay = [p.title, p.slug, p.tag, p.author_name].filter(Boolean).join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [posts, filter, search]);

  const stats = useMemo(
    () => ({
      total: posts.length,
      published: posts.filter((p) => p.status === "published").length,
      draft: posts.filter((p) => p.status === "draft").length,
    }),
    [posts]
  );

  function startCreate() {
    setEditingId("new");
    setDraft({ ...EMPTY_DRAFT });
    setSlugTouched(false);
    setError("");
  }

  function startEdit(p: Post) {
    setEditingId(p.id);
    setDraft({
      id: p.id,
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt || "",
      content: p.content || "",
      coverImage: p.cover_image || "",
      tag: p.tag || "",
      authorName: p.author_name || "",
      authorInitials: p.author_initials || "",
      status: p.status,
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

  async function save(status?: "draft" | "published") {
    if (!draft) return;
    if (!draft.title.trim()) {
      setError("Title is required");
      return;
    }
    setSaving(true);
    setError("");
    const payload = { ...draft, status: status ?? draft.status };
    const isNew = editingId === "new";

    try {
      const res = await fetch("/api/admin/posts", {
        method: isNew ? "POST" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(isNew ? payload : { ...payload, id: editingId }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to save post");
        setSaving(false);
        return;
      }
      setEditingId(null);
      setDraft(null);
      router.refresh();
    } catch {
      setError("Failed to save post. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  async function remove(id: string) {
    if (!confirm("Delete this post permanently? This cannot be undone.")) return;
    await fetch("/api/admin/posts", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (editingId === id) cancelEdit();
    router.refresh();
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0f0e0b", color: "#f5f2ed", fontFamily: "'Hanken Grotesk', system-ui, sans-serif" }}>
      <AdminTopBar subtitle="Blog & Content" />

      <div style={{ padding: "20px 26px 50px" }}>
        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12, marginBottom: 22 }}>
          {[
            { label: "Total posts", value: stats.total, color: "#f5f2ed" },
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
                placeholder="Search posts…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ ...inputStyle, flex: "1 1 160px", maxWidth: 240, padding: "8px 12px" }}
              />
              <button
                onClick={startCreate}
                style={{ marginLeft: "auto", padding: "9px 18px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", border: "none", background: "linear-gradient(135deg,#e91e63,#c2185b)", color: "#fff" }}
              >
                + New post
              </button>
            </div>

            <div style={{ maxHeight: 720, overflowY: "auto" }}>
              {filtered.length === 0 && <div style={{ padding: 24, fontSize: 13, color: "#6e6a62" }}>No posts found.</div>}
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
                        {p.tag && <span style={{ fontSize: 11.5, color: "#9b958c" }}>{p.tag}</span>}
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#f5f2ed", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.title}</div>
                      <div style={{ fontSize: 11.5, color: "#6e6a62", marginTop: 3, fontFamily: "'JetBrains Mono', monospace" }}>
                        /blog/{p.slug} · {p.read_minutes} min · updated {timeAgo(p.updated_at)}
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
                <div style={{ fontSize: 16, fontWeight: 700 }}>{editingId === "new" ? "New post" : "Edit post"}</div>
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
                <Field label="Title">
                  <input style={inputStyle} value={draft.title} onChange={(e) => onTitleChange(e.target.value)} placeholder="How we cut API response time by 70%" />
                </Field>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Field label="URL slug (digitalwebweaver.com/blog/…)">
                    <input
                      style={inputStyle}
                      value={draft.slug}
                      onChange={(e) => {
                        setSlugTouched(true);
                        updateDraft("slug", slugify(e.target.value));
                      }}
                      placeholder="how-we-cut-api-response-time"
                    />
                  </Field>
                  <Field label="Category / tag">
                    <input style={inputStyle} value={draft.tag} onChange={(e) => updateDraft("tag", e.target.value)} placeholder="Engineering" />
                  </Field>
                </div>

                <Field label="Excerpt (shown on cards & used as fallback meta description)">
                  <textarea
                    style={{ ...inputStyle, minHeight: 70, resize: "vertical" }}
                    value={draft.excerpt}
                    onChange={(e) => updateDraft("excerpt", e.target.value)}
                    placeholder="A short, punchy summary of the article — 1 to 2 sentences."
                  />
                </Field>

                <Field label="Cover image URL (optional)">
                  <input style={inputStyle} value={draft.coverImage} onChange={(e) => updateDraft("coverImage", e.target.value)} placeholder="https://…" />
                </Field>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Field label="Author name">
                    <input style={inputStyle} value={draft.authorName} onChange={(e) => updateDraft("authorName", e.target.value)} placeholder="Aryan Rathore" />
                  </Field>
                  <Field label="Author initials">
                    <input style={inputStyle} value={draft.authorInitials} onChange={(e) => updateDraft("authorInitials", e.target.value.toUpperCase().slice(0, 3))} placeholder="AR" />
                  </Field>
                </div>

                <Field label="Content (Markdown supported — # headings, **bold**, lists, links, images, code)">
                  <textarea
                    style={{ ...inputStyle, minHeight: 360, resize: "vertical", fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6 }}
                    value={draft.content}
                    onChange={(e) => updateDraft("content", e.target.value)}
                    placeholder={"## Introduction\n\nWrite your article here using Markdown…"}
                  />
                </Field>

                <div style={{ borderTop: "1px solid #2a2620", paddingTop: 16, display: "grid", gap: 16 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 700, color: "#9b958c", textTransform: "uppercase", letterSpacing: ".05em" }}>SEO overrides (optional)</div>
                  <Field label="SEO title (defaults to post title)">
                    <input style={inputStyle} value={draft.seoTitle} onChange={(e) => updateDraft("seoTitle", e.target.value)} placeholder="Custom <title> for search engines" />
                  </Field>
                  <Field label="SEO meta description (defaults to excerpt)">
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
