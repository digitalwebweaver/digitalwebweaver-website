"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import { siteNav } from "@/lib/siteNav";

function activeGroupId(pathname) {
  for (const group of siteNav.groups) {
    if (group.items.some((item) => item.href === pathname)) return group.id;
  }
  return null;
}

export default function Shell({ children }) {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [openGroups, setOpenGroups] = useState(() => new Set([activeGroupId(pathname)].filter(Boolean)));

  // Close the mobile drawer whenever the route changes (client-side nav).
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  // Shell mounts once for the whole session (it lives in layout, not in
  // {children}), so this effect binds exactly once. Delegation is used
  // (rather than direct querySelector+addEventListener on the trigger
  // elements) because triggers like [data-scroll] and
  // [data-explorer-toggle] live inside per-page content that remounts on
  // every client-side navigation — a direct bind would go stale after
  // the first page.
  useEffect(() => {
    function onClick(e) {
      const scrollBtn = e.target.closest("[data-scroll]");
      if (scrollBtn) {
        const id = scrollBtn.getAttribute("data-scroll");
        const el = document.getElementById(id);
        const content = document.querySelector(".content");
        if (el && content) {
          e.preventDefault();
          content.scrollTo({ top: el.offsetTop - 8, behavior: "smooth" });
          if (window.matchMedia("(max-width:900px)").matches) setDrawerOpen(false);
        }
        return;
      }
      const toggleBtn = e.target.closest("[data-explorer-toggle]");
      if (toggleBtn) {
        setCollapsed((c) => !c);
        toggleBtn.classList.remove("hint");
        const hint = toggleBtn.parentElement && toggleBtn.parentElement.querySelector(".menu-hint");
        if (hint) hint.classList.add("is-hidden");
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    function onKeydown(e) {
      if ((e.ctrlKey || e.metaKey) && (e.key === "b" || e.key === "B")) {
        e.preventDefault();
        setCollapsed((c) => !c);
      }
    }
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  }, []);

  function toggleGroup(id) {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <div className="ide">
      <header className="topbar">
        <button className="hamburger" aria-label="Open menu" onClick={() => setDrawerOpen((v) => !v)}>☰</button>
        <span className="topbar__lights"><span className="dot dot--red"></span><span className="dot dot--amber"></span><span className="dot dot--green"></span></span>
        <NavLink href="/" style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0, textDecoration: "none" }}>
          <span style={{ width: "9px", height: "9px", borderRadius: "2px", background: "#ff5c8a", transform: "rotate(45deg)", flexShrink: 0 }}></span>
          <span className="mono" style={{ fontSize: "12.5px", fontWeight: 700, letterSpacing: "0.16em", color: "#e6edf3", whiteSpace: "nowrap" }}>DIGITAL WEB WEAVER</span>
        </NavLink>
        <span className="topbar__crumb mono">digital-web-weaver — <b>workspace</b></span>
        <div className="topbar__right mono">
          <nav className="topbar__nav" aria-label="Quick links">
            <NavLink href="/about/">About</NavLink>
            <NavLink href="/portfolio/">Portfolio</NavLink>
          </nav>
          <a className="topbar__phone" href="tel:+919712515105">+91 97125 15105</a>
          <a className="topbar__cta" href="#s-contact" data-scroll="s-contact">▶ Run project</a>
        </div>
      </header>

      <div className="body">
        <aside className={`sidebar scroll${collapsed ? " is-collapsed" : ""}${drawerOpen ? " is-open" : ""}`} aria-label="Explorer">
          <NavLink href="/" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "16px 16px 15px", borderBottom: "1px solid #21262d", textDecoration: "none" }}>
            <img src="/assets/dww-logo.png" alt="Digital Web Weaver" style={{ height: "46px", width: "auto", display: "block" }} />
          </NavLink>
          <div className="sidebar__title">Explorer — DWW</div>
          <nav className="tree">
            <NavLink href={siteNav.root.href} className={`tree__row${pathname === "/" ? " is-active" : ""}`}>
              <span className="ico-file">𝑓</span><span className="lbl">{siteNav.root.label}</span>
            </NavLink>
            {siteNav.groups.map((group) => {
              const isOpen = openGroups.has(group.id);
              return (
                <div key={group.id}>
                  <button className="tree__row" onClick={() => toggleGroup(group.id)}>
                    <span className="ico-folder">{isOpen ? "▾ 📂" : "▸ 📁"}</span>
                    <span className="lbl">{group.label}</span>
                    <span className="tree__badge">{group.items.length}</span>
                  </button>
                  <div className={`tree__children${isOpen ? " is-open" : ""}`}>
                    {group.items.map((item) => (
                      <NavLink key={item.href} href={item.href} className={`tree__child${pathname === item.href ? " is-current" : ""}`}>
                        <span className="arr">›</span><span className="lbl">{item.label}</span>
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>
        </aside>

        {children}
      </div>

      <div className={`backdrop${drawerOpen ? " is-open" : ""}`} onClick={() => setDrawerOpen(false)}></div>
    </div>
  );
}
