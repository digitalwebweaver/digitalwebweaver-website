"use client";
import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import AdminTopBar from "./AdminTopBar";

interface Inquiry {
  id: string;
  created_at: string;
  source: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  service: string | null;
  budget: string | null;
  timeline: string | null;
  industry: string | null;
  project_name: string | null;
  description: string | null;
  country: string | null;
  ip: string | null;
  location: string | null;
  status: string;
  form_heading: string | null;
}

interface Reply {
  id: string;
  inquiry_id: string;
  created_at: string;
  to_email: string;
  subject: string | null;
  message: string;
  attachments: { filename: string }[] | null;
}

interface Attachment {
  filename: string;
  content: string;
  size: number;
}

const SOURCE_LABEL: Record<string, string> = {
  contact: "Contact form",
  lead: "Product lead",
  subscribe: "Newsletter",
};

const SOURCE_COLOR: Record<string, string> = {
  contact: "#60a5fa",
  lead: "#e91e63",
  subscribe: "#a3e635",
};

const STATUS_COLOR: Record<string, { bg: string; fg: string }> = {
  new: { bg: "#e91e6322", fg: "#e91e63" },
  read: { bg: "#60a5fa22", fg: "#60a5fa" },
  replied: { bg: "#a3e63522", fg: "#a3e635" },
};

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

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(",")[1] ?? "");
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function InquiriesTable({ inquiries, replies }: { inquiries: Inquiry[]; replies: Reply[] }) {
  const [filter, setFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState<string | null>(inquiries[0]?.id ?? null);
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const stats = useMemo(() => {
    const byStatus = (s: string) => inquiries.filter((i) => i.status === s).length;
    const bySource = (s: string) => inquiries.filter((i) => i.source === s).length;
    return {
      total: inquiries.length,
      new: byStatus("new"),
      contact: bySource("contact"),
      lead: bySource("lead"),
      subscribe: bySource("subscribe"),
    };
  }, [inquiries]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return inquiries.filter((i) => {
      if (filter !== "all" && i.source !== filter) return false;
      if (statusFilter !== "all" && i.status !== statusFilter) return false;
      if (q) {
        const hay = `${i.name ?? ""} ${i.email ?? ""} ${i.service ?? ""} ${i.project_name ?? ""} ${i.form_heading ?? ""}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [inquiries, filter, statusFilter, query]);

  const active = useMemo(() => inquiries.find((i) => i.id === activeId) ?? null, [inquiries, activeId]);
  const thread = useMemo(() => replies.filter((r) => r.inquiry_id === activeId), [replies, activeId]);

  async function setStatus(id: string, status: string) {
    await fetch("/api/admin/inquiries", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    router.refresh();
  }

  function selectInquiry(inq: Inquiry) {
    setActiveId(inq.id);
    setMessage("");
    setAttachments([]);
    setSendError("");
    if (inq.status === "new") setStatus(inq.id, "read");
  }

  async function handleFiles(files: FileList | null) {
    if (!files) return;
    const list = Array.from(files);
    const converted = await Promise.all(
      list.map(async (f) => ({ filename: f.name, content: await fileToBase64(f), size: f.size }))
    );
    setAttachments((prev) => [...prev, ...converted]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function removeAttachment(idx: number) {
    setAttachments((prev) => prev.filter((_, i) => i !== idx));
  }

  async function sendReply() {
    if (!active?.email || !message.trim()) return;
    setSending(true);
    setSendError("");
    try {
      const res = await fetch("/api/admin/reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inquiryId: active.id,
          to: active.email,
          subject: `Re: ${active.form_heading || active.service || active.project_name || "Your enquiry"} — Digital Web Weaver`,
          message,
          attachments: attachments.map((a) => ({ filename: a.filename, content: a.content })),
        }),
      });
      if (!res.ok) throw new Error("failed");
      setMessage("");
      setAttachments([]);
      router.refresh();
    } catch {
      setSendError("Failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0f0e0b", color: "#f5f2ed", fontFamily: "'Hanken Grotesk', system-ui, sans-serif" }}>
      <AdminTopBar subtitle="Lead & Inquiry Inbox" />

      {/* Stat cards */}
      <div style={{ padding: "20px 26px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12, marginBottom: 20 }}>
          {[
            { label: "Total inquiries", value: stats.total, color: "#f5f2ed" },
            { label: "New / unread", value: stats.new, color: "#e91e63" },
            { label: "Contact form", value: stats.contact, color: "#60a5fa" },
            { label: "Product leads", value: stats.lead, color: "#e91e63" },
            { label: "Newsletter", value: stats.subscribe, color: "#a3e635" },
          ].map((s) => (
            <div key={s.label} style={{ background: "#18160f", border: "1px solid #2a2620", borderRadius: 12, padding: "14px 18px" }}>
              <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-.02em", color: s.color, fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "#9b958c", marginTop: 3 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Two-pane inbox */}
      <div style={{ display: "flex", height: "calc(100vh - 178px)", borderTop: "1px solid #2a2620", margin: "0 26px 26px", border: "1px solid #2a2620", borderRadius: 14, overflow: "hidden" }}>
        {/* List pane */}
        <div style={{ width: 380, flexShrink: 0, borderRight: "1px solid #2a2620", display: "flex", flexDirection: "column", background: "#15130e" }}>
          <div style={{ padding: 16, borderBottom: "1px solid #2a2620", display: "flex", flexDirection: "column", gap: 10 }}>
            <input
              placeholder="Search name, email, service…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ background: "#0f0e0b", color: "#f5f2ed", border: "1px solid #2a2620", borderRadius: 9, fontSize: 13, padding: "9px 14px", outline: "none", width: "100%" }}
            />
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {["all", "contact", "lead", "subscribe"].map((s) => (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  style={{
                    padding: "6px 12px", borderRadius: 100, fontSize: 12, fontWeight: 500, cursor: "pointer",
                    border: filter === s ? "1px solid #e91e63" : "1px solid #2a2620",
                    background: filter === s ? "#e91e6318" : "transparent",
                    color: filter === s ? "#e91e63" : "#9b958c",
                  }}
                >
                  {s === "all" ? "All" : SOURCE_LABEL[s]}
                </button>
              ))}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                style={{ marginLeft: "auto", background: "#0f0e0b", color: "#9b958c", border: "1px solid #2a2620", borderRadius: 100, fontSize: 12, padding: "6px 10px" }}
              >
                <option value="all">All status</option>
                <option value="new">New</option>
                <option value="read">Read</option>
                <option value="replied">Replied</option>
              </select>
            </div>
          </div>

          <div style={{ overflowY: "auto", flex: 1 }}>
            {filtered.length === 0 && (
              <div style={{ padding: "50px 20px", textAlign: "center", color: "#7d786f", fontSize: 13.5 }}>
                {inquiries.length === 0 ? "No inquiries yet." : "No results match your filters."}
              </div>
            )}
            {filtered.map((inq) => {
              const sc = STATUS_COLOR[inq.status] ?? STATUS_COLOR.new;
              const isActive = inq.id === activeId;
              return (
                <div
                  key={inq.id}
                  onClick={() => selectInquiry(inq)}
                  style={{
                    padding: "14px 16px", cursor: "pointer", borderBottom: "1px solid #1d1a15",
                    background: isActive ? "#211e17" : "transparent",
                    borderLeft: isActive ? "3px solid #e91e63" : "3px solid transparent",
                    transition: ".12s",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5, gap: 8 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, color: SOURCE_COLOR[inq.source] ?? "#9b958c", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".04em" }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: SOURCE_COLOR[inq.source] ?? "#9b958c" }} />
                      {SOURCE_LABEL[inq.source] ?? inq.source}
                    </span>
                    <span style={{ fontSize: 11, color: "#7d786f", flexShrink: 0 }}>{timeAgo(inq.created_at)}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{inq.name || inq.email || "—"}</div>
                      <div style={{ fontSize: 12.5, color: "#9b958c", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginTop: 2 }}>
                        {inq.service || inq.project_name || inq.form_heading || inq.email || "—"}
                      </div>
                    </div>
                    <span style={{ background: sc.bg, color: sc.fg, borderRadius: 6, fontSize: 10.5, fontWeight: 600, padding: "3px 7px", textTransform: "capitalize", flexShrink: 0 }}>
                      {inq.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail / thread pane */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
          {!active ? (
            <div style={{ flex: 1, display: "grid", placeItems: "center", color: "#7d786f", fontSize: 14 }}>Select an inquiry to view</div>
          ) : (
            <>
              {/* Header */}
              <div style={{ padding: "20px 26px", borderBottom: "1px solid #2a2620" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: 14 }}>
                  <div>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 12, color: SOURCE_COLOR[active.source] ?? "#9b958c", fontWeight: 600, marginBottom: 6 }}>
                      <span style={{ width: 7, height: 7, borderRadius: "50%", background: SOURCE_COLOR[active.source] ?? "#9b958c" }} />
                      {SOURCE_LABEL[active.source] ?? active.source}
                    </span>
                    <h2 style={{ fontSize: 19, fontWeight: 700, fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}>{active.name || active.email || "Inquiry"}</h2>
                    <p style={{ fontSize: 12.5, color: "#7d786f", marginTop: 4 }}>{new Date(active.created_at).toLocaleString("en-IN", { dateStyle: "full", timeStyle: "short" })}</p>
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    {["new", "read", "replied"].map((s) => (
                      <button
                        key={s}
                        onClick={() => setStatus(active.id, s)}
                        style={{
                          padding: "7px 13px", borderRadius: 100, fontSize: 12, fontWeight: 600, cursor: "pointer", textTransform: "capitalize",
                          border: active.status === s ? `1px solid ${STATUS_COLOR[s].fg}` : "1px solid #2a2620",
                          background: active.status === s ? STATUS_COLOR[s].bg : "transparent",
                          color: active.status === s ? STATUS_COLOR[s].fg : "#9b958c",
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Meta grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "10px 24px" }}>
                  {[
                    ["Email", active.email, active.email ? `mailto:${active.email}` : null],
                    ["Phone", active.phone, active.phone ? `tel:${active.phone}` : null],
                    ["Service", active.service],
                    ["Project", active.project_name],
                    ["Budget", active.budget],
                    ["Timeline", active.timeline],
                    ["Industry", active.industry],
                    ["Country", active.country],
                    ["Location (IP-based)", active.location],
                    ["IP address", active.ip],
                  ].filter(([, v]) => v).map(([label, value, href]) => (
                    <div key={label as string}>
                      <div style={{ fontSize: 11, color: "#7d786f", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 3 }}>{label}</div>
                      {href ? (
                        <a href={href} style={{ fontSize: 13, color: "#e91e63", textDecoration: "none" }}>{value}</a>
                      ) : (
                        <div style={{ fontSize: 13, color: "#d8d4cd", fontFamily: label === "IP address" ? "'JetBrains Mono', monospace" : undefined }}>{value}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Thread (scrollable) */}
              <div style={{ flex: 1, overflowY: "auto", padding: "22px 26px", display: "flex", flexDirection: "column", gap: 16 }}>
                {/* Original message */}
                <div style={{ background: "#18160f", border: "1px solid #2a2620", borderRadius: 12, padding: 18, maxWidth: 620 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                    <span style={{ fontSize: 12.5, fontWeight: 600, color: "#d8d4cd" }}>{active.name || active.email}</span>
                    <span style={{ fontSize: 11.5, color: "#7d786f" }}>{timeAgo(active.created_at)}</span>
                  </div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "#d8d4cd", whiteSpace: "pre-wrap" }}>
                    {active.description || "No message provided."}
                  </p>
                </div>

                {/* Replies */}
                {thread.map((r) => (
                  <div key={r.id} style={{ background: "#e91e6312", border: "1px solid #e91e6330", borderRadius: 12, padding: 18, maxWidth: 620, alignSelf: "flex-end" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                      <span style={{ fontSize: 12.5, fontWeight: 600, color: "#e91e63" }}>You replied</span>
                      <span style={{ fontSize: 11.5, color: "#7d786f" }}>{timeAgo(r.created_at)}</span>
                    </div>
                    <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "#d8d4cd", whiteSpace: "pre-wrap" }}>{r.message}</p>
                    {r.attachments && r.attachments.length > 0 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
                        {r.attachments.map((a, i) => (
                          <span key={i} style={{ fontSize: 11.5, color: "#9b958c", border: "1px solid #34302a", borderRadius: 6, padding: "4px 9px", display: "inline-flex", alignItems: "center", gap: 5 }}>
                            📎 {a.filename}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Composer */}
              {active.email && (
                <div style={{ borderTop: "1px solid #2a2620", padding: "16px 26px 20px", background: "#15130e" }}>
                  <textarea
                    placeholder={`Reply to ${active.name || active.email}…`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    style={{ width: "100%", background: "#0f0e0b", color: "#f5f2ed", border: "1px solid #2a2620", borderRadius: 10, padding: "12px 14px", fontSize: 13.5, fontFamily: "inherit", outline: "none", resize: "vertical", lineHeight: 1.6 }}
                  />
                  {attachments.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 }}>
                      {attachments.map((a, i) => (
                        <span key={i} style={{ fontSize: 12, color: "#d8d4cd", border: "1px solid #34302a", borderRadius: 7, padding: "6px 10px", display: "inline-flex", alignItems: "center", gap: 8 }}>
                          📎 {a.filename} <span style={{ color: "#7d786f" }}>({formatSize(a.size)})</span>
                          <button onClick={() => removeAttachment(i)} style={{ background: "none", border: "none", color: "#7d786f", cursor: "pointer", fontSize: 14, lineHeight: 1, padding: 0 }}>×</button>
                        </span>
                      ))}
                    </div>
                  )}
                  {sendError && <p style={{ color: "#f87171", fontSize: 12.5, marginTop: 8 }}>{sendError}</p>}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "9px 14px", borderRadius: 9, fontSize: 12.5, fontWeight: 500, cursor: "pointer", border: "1px solid #2a2620", background: "transparent", color: "#9b958c" }}
                    >
                      📎 Attach files
                    </button>
                    <input ref={fileInputRef} type="file" multiple onChange={(e) => handleFiles(e.target.files)} style={{ display: "none" }} />
                    <button
                      onClick={sendReply}
                      disabled={sending || !message.trim()}
                      style={{
                        padding: "10px 22px", borderRadius: 9, fontSize: 13.5, fontWeight: 600, cursor: sending || !message.trim() ? "default" : "pointer",
                        border: "none", background: sending || !message.trim() ? "#3a352d" : "#e91e63", color: sending || !message.trim() ? "#7d786f" : "#fff",
                      }}
                    >
                      {sending ? "Sending…" : "Send reply ↗"}
                    </button>
                  </div>
                  <p style={{ fontSize: 11.5, color: "#7d786f", marginTop: 8 }}>
                    Sends from info@digitalwebweaver.com to {active.email}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
