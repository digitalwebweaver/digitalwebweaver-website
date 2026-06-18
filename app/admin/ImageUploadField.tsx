"use client";

import { useRef, useState } from "react";

interface Props {
  value: string;
  onChange: (url: string) => void;
  folder: string; // "portfolio" | "blog" — used as the storage subfolder
  inputStyle: React.CSSProperties;
  placeholder?: string;
}

// Cover-image field: paste a URL OR upload a file (→ Supabase Storage → public URL).
export default function ImageUploadField({ value, onChange, folder, inputStyle, placeholder }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [err, setErr] = useState("");

  async function handleFile(f: File) {
    setErr("");
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", f);
      fd.append("folder", folder);
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) setErr(data.error || "Upload failed");
      else onChange(data.url);
    } catch {
      setErr("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          style={{ ...inputStyle, flex: 1 }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder || "https://…  or upload →"}
        />
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          style={{
            padding: "0 16px",
            borderRadius: 9,
            fontSize: 13,
            fontWeight: 600,
            cursor: uploading ? "default" : "pointer",
            border: "1px solid #3a352d",
            background: "transparent",
            color: "#d8d4cd",
            whiteSpace: "nowrap",
            opacity: uploading ? 0.6 : 1,
          }}
        >
          {uploading ? "Uploading…" : "⬆ Upload"}
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) handleFile(f);
            e.target.value = "";
          }}
        />
      </div>
      {err && <div style={{ fontSize: 12, color: "#f87171", marginTop: 6 }}>{err}</div>}
      {value && (
        // eslint-disable-next-line @next/next/no-img-element
        <div style={{ marginTop: 10 }}>
          <img
            src={value}
            alt="cover preview"
            style={{ maxHeight: 120, maxWidth: "100%", borderRadius: 8, border: "1px solid #2a2620", display: "block" }}
          />
        </div>
      )}
    </div>
  );
}
