"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import MegaMenu from "./MegaMenu";
import { siteNav } from "@/lib/siteNav";

const SERVICES_MENU = [
  {
    title: "Web & Design",
    items: [
      { label: "Web Development", href: "/web-development/", icon: "code", desc: "Marketing sites to complex web apps" },
      { label: "Custom Web Apps", href: "/custom-web-apps/", icon: "layers", desc: "Portals, dashboards, internal tools" },
      { label: "E-Commerce", href: "/ecommerce-development/", icon: "cart", desc: "Storefronts built to convert" },
      { label: "UI / UX Design", href: "/ui-ux-design/", icon: "palette", desc: "Research, systems, prototypes" },
    ],
  },
  {
    title: "Platform & Cloud",
    items: [
      { label: "Mobile Apps", href: "/mobile-app-development/", icon: "phone", desc: "Native iOS, Android, cross-platform" },
      { label: "AI & Automation", href: "/ai-automation/", icon: "cpu", desc: "LLM features & workflow automation" },
      { label: "Cloud & DevOps", href: "/cloud-devops/", icon: "cloud", desc: "CI/CD, infra-as-code, uptime" },
      { label: "Progressive Web Apps", href: "/services/progressive-web-apps/", icon: "wifi", desc: "Installable, offline-capable web apps" },
      { label: "Custom Software", href: "/custom-software-development/", icon: "box", desc: "Bespoke ERP, CRM & portals" },
    ],
  },
  {
    title: "Solutions",
    items: [
      { label: "MVP Development", href: "/mvp-development/", icon: "zap", desc: "Validate your idea in weeks" },
      { label: "SaaS Products", href: "/saas-development/", icon: "layers", desc: "Multi-tenant, billing, growth-ready" },
      { label: "ERP Systems", href: "/crm-erp-systems/", icon: "database", desc: "Business systems that fit your ops" },
      { label: "Business Intelligence", href: "/solutions/business-intelligence/", icon: "chart", desc: "Dashboards & data pipelines" },
      { label: "Cybersecurity Audit", href: "/solutions/cybersecurity/", icon: "shield", desc: "Infra hardening & compliance review" },
    ],
  },
];

const HIRE_MENU = [
  {
    title: "Engagement",
    items: [
      { label: "Hire Dedicated Team", href: "/hire-dedicated-resource/", icon: "users", desc: "Senior engineers, embedded with you" },
    ],
  },
  {
    title: "By stack",
    items: [
      { label: "React / Next.js", href: "/react-developer/", badge: "teal" },
      { label: "Node.js", href: "/nodejs-developer/", badge: "green" },
      { label: "Laravel / PHP", href: "/laravel-developer/", badge: "pink" },
      { label: "Python / Django", href: "/python-developer/", badge: "yellow" },
      { label: "MySQL / PostgreSQL", href: "/stack/databases/", badge: "teal" },
      { label: "AWS / Cloud", href: "/stack/aws/", badge: "yellow" },
    ],
  },
];

const PRODUCTS_MENU = [
  { title: "Healthcare & Clinics", items: [
    { label: "GlowDesk", href: "/glowdesk/", badge: "teal", desc: "Bookings, treatment plans & billing" },
    { label: "ClinicFlow", href: "/clinicflow/", badge: "teal", desc: "Appointments, EMR, billing & pharmacy" },
    { label: "VetCare", href: "/vetcare/", badge: "teal", desc: "Records for veterinary practices" },
    { label: "TeleCare", href: "/telecare/", badge: "teal", desc: "Video consults & e-prescriptions" },
    { label: "ClinicVoice AI", href: "/clinicvoice-ai/", badge: "teal", desc: "AI voice agent for clinic bookings" },
  ] },
  { title: "Education", items: [
    { label: "EduCore", href: "/educore/", badge: "yellow", desc: "LMS with courses & certificates" },
    { label: "SchoolHub", href: "/schoolhub/", badge: "yellow", desc: "Admissions, attendance, fees & exams" },
  ] },
  { title: "AI Agents", items: [
    { label: "ChatFlow AI", href: "/chatflow-ai/", badge: "pink", desc: "WhatsApp automation for enquiries" },
    { label: "CallMate AI", href: "/callmate-ai/", badge: "pink", desc: "AI voice agent for calls & leads" },
  ] },
  { title: "Field Service & ERP", items: [
    { label: "SolarFlow", href: "/solarflow/", badge: "green", desc: "ERP for solar installers" },
    { label: "ChemSupply", href: "/chemsupply/", badge: "green", desc: "Batch/expiry tracking & compliance" },
    { label: "PestTrack", href: "/pesttrack/", badge: "green", desc: "Job scheduling & technician routing" },
    { label: "Manchify", href: "/manchify/", badge: "green", desc: "Leads, quotes & vendors for events" },
  ] },
  { title: "Food & Mobility", items: [
    { label: "QuickBite", href: "/quickbite/", badge: "teal", desc: "Food delivery app suite" },
    { label: "RideEasy", href: "/rideeasy/", badge: "teal", desc: "Cab booking, rider to dispatch" },
    { label: "SalonBook", href: "/salonbook/", badge: "teal", desc: "Online booking & staff scheduling" },
  ] },
  { title: "Sales & CRM", items: [
    { label: "InsureDesk", href: "/insuredesk/", badge: "pink", desc: "Lead & policy management" },
  ] },
];

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
        <span className="topbar__crumb mono">digital-web-weaver — <b>workspace</b></span>
        <div className="topbar__right mono">
          <nav className="topbar__nav" aria-label="Quick links">
            <MegaMenu label="Services" href="/services/" columns={SERVICES_MENU} footerLabel="View all services" footerHref="/services/" />
            <MegaMenu label="Products" href="/products/" columns={PRODUCTS_MENU} footerLabel="View all products" footerHref="/products/" />
            <MegaMenu label="Hire Resource" href="/hire-dedicated-resource/" columns={HIRE_MENU} footerLabel="Talk to us" footerHref="/hire-dedicated-resource/" />
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
          {/* Desktop has the topbar mega menu for this; on the mobile drawer
              that's hidden, so give touch users a same jump to the 4 pages
              people actually look for, instead of only the full folder tree. */}
          <nav className="sidebar__quick" aria-label="Quick links">
            <NavLink href="/services/" className="chip">Services</NavLink>
            <NavLink href="/products/" className="chip">Products</NavLink>
            <NavLink href="/hire-dedicated-resource/" className="chip">Hire</NavLink>
            <NavLink href="/contact/" className="chip">Contact</NavLink>
          </nav>
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
