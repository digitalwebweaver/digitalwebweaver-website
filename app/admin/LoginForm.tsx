"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (res.ok) {
      router.refresh();
    } else {
      setError("Incorrect password");
    }
  }

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#16140f", fontFamily: "system-ui, sans-serif" }}>
      <form onSubmit={handleSubmit} style={{ width: 320, background: "#211e18", border: "1px solid #34302a", borderRadius: 14, padding: 32 }}>
        <h1 style={{ color: "#f5f2ed", fontSize: 20, marginBottom: 6 }}>Admin Login</h1>
        <p style={{ color: "#9b958c", fontSize: 13, marginBottom: 22 }}>Digital Web Weaver — Inquiries</p>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "1px solid #34302a", background: "#16140f", color: "#f5f2ed", fontSize: 14, marginBottom: 14, outline: "none" }}
        />
        {error && <p style={{ color: "#f87171", fontSize: 13, marginBottom: 12 }}>{error}</p>}
        <button
          type="submit"
          disabled={loading}
          style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "none", background: "#e91e63", color: "#fff", fontWeight: 600, fontSize: 14, cursor: "pointer" }}
        >
          {loading ? "Checking…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
