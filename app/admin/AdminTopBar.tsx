"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const TABS = [
  { href: "/admin", label: "Inquiries" },
  { href: "/admin/visits", label: "Visits" },
  { href: "/admin/blog", label: "Blog" },
];

export default function AdminTopBar({ subtitle }: { subtitle: string }) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.refresh();
  }

  return (
    <div style={{ borderBottom: "1px solid #2a2620", padding: "16px 26px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: "linear-gradient(135deg,#e91e63,#c2185b)", display: "grid", placeItems: "center", fontWeight: 700, fontSize: 15 }}>D</div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-.01em" }}>Digital Web Weaver</div>
            <div style={{ fontSize: 12, color: "#9b958c" }}>{subtitle}</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {TABS.map((t) => {
            const isActive = t.href === "/admin" ? pathname === "/admin" : pathname?.startsWith(t.href);
            return (
              <Link
                key={t.href}
                href={t.href}
                style={{
                  padding: "8px 16px",
                  borderRadius: 9,
                  fontSize: 13.5,
                  fontWeight: 600,
                  textDecoration: "none",
                  background: isActive ? "#e91e6318" : "transparent",
                  color: isActive ? "#e91e63" : "#9b958c",
                  border: isActive ? "1px solid #e91e6340" : "1px solid transparent",
                }}
              >
                {t.label}
              </Link>
            );
          })}
        </div>
      </div>
      <button onClick={logout} style={{ padding: "9px 18px", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer", border: "1px solid #3a352d", background: "transparent", color: "#d8d4cd" }}>
        Sign out
      </button>
    </div>
  );
}
