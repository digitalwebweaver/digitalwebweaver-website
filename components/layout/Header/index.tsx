"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  SiReact, SiNodedotjs, SiPhp, SiLaravel, SiVuedotjs, SiAngular,
  SiDotnet, SiPython, SiApple, SiAndroid,
} from "react-icons/si";
import {
  LuGlobe, LuCode, LuShoppingCart, LuPenTool, LuSmartphone,
  LuBuilding2, LuContact, LuCloud, LuWorkflow, LuBraces,
  LuLayers, LuRefreshCw, LuServer, LuBoxes, LuDatabase, LuWaypoints, LuGauge,
  LuBrainCircuit,
} from "react-icons/lu";
import MobileMenu from "./MobileMenu";

/* ── Engineering service categories & links ── */
const ENG_CATS = [
  {
    id: "web",
    label: "Web Development",
    items: [
      { Icon: LuGlobe,        name: "Corporate Websites",      desc: "Business presence & brand sites",       href: "/web-development/" },
      { Icon: LuCode,         name: "Custom Web Apps",         desc: "Bespoke application builds",             href: "/custom-web-apps/" },
      { Icon: LuShoppingCart, name: "E-Commerce Development",  desc: "Shopify, WooCommerce & custom stores",  href: "/ecommerce-development/" },
      { Icon: LuPenTool,      name: "UI / UX Design",          desc: "Research-driven interface design",       href: "/ui-ux-design/" },
      { Icon: LuSmartphone,   name: "Progressive Web Apps",    desc: "App-like web experiences",              href: "/services/progressive-web-apps/" },
    ],
  },
  {
    id: "software",
    label: "Custom Software",
    items: [
      { Icon: LuBuilding2, name: "Enterprise Applications", desc: "Large-scale mission-critical systems",   href: "/services/enterprise-applications/" },
      { Icon: LuContact,   name: "CRM / ERP Systems",       desc: "Operations & relationship management",   href: "/crm-erp-systems/" },
      { Icon: LuCloud,     name: "SaaS App Development",    desc: "Multi-tenant product development",       href: "/saas-development/" },
      { Icon: LuWorkflow,  name: "Business Automation",     desc: "Workflow & process automation",          href: "/ai-automation/" },
      { Icon: LuBraces,    name: "API Development",         desc: "RESTful & GraphQL interfaces",           href: "/services/api-development/" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile Development",
    items: [
      { Icon: SiApple,     name: "iOS Applications",        desc: "Swift & SwiftUI native apps",            href: "/mobile-app-development/" },
      { Icon: SiAndroid,   name: "Android Applications",    desc: "Kotlin & Jetpack Compose",              href: "/mobile-app-development/" },
      { Icon: LuLayers,    name: "Cross-Platform Apps",     desc: "Flutter & React Native builds",          href: "/react-native-developer/" },
      { Icon: LuRefreshCw, name: "App Modernization",       desc: "Legacy rebuild & migration",             href: "/services/app-modernization/" },
    ],
  },
  {
    id: "arch",
    label: "System Architecture",
    items: [
      { Icon: LuServer,    name: "Cloud-Native Systems",    desc: "AWS, GCP & Azure architecture",          href: "/cloud-devops/" },
      { Icon: LuBoxes,     name: "Microservices",           desc: "Distributed system design",              href: "/services/microservices/" },
      { Icon: LuDatabase,  name: "Database Design",         desc: "Schema, indexing & optimization",        href: "/stack/databases/" },
      { Icon: LuWaypoints, name: "API Integrations",        desc: "Third-party service connections",        href: "/services/api-integrations/" },
      { Icon: LuGauge,     name: "Performance Optimization",desc: "Audit, tuning & scaling",               href: "/services/performance-optimization/" },
    ],
  },
  {
    id: "hire",
    label: "Hire Dedicated",
    items: [
      { Icon: SiNodedotjs, name: "Node.js Developer",       desc: "Backend & real-time systems",            href: "/nodejs-developer/" },
      { Icon: SiPhp,       name: "PHP Developer",           desc: "WordPress, Laravel & Symfony",           href: "/php-developer/" },
      { Icon: SiAngular,   name: "Angular Developer",       desc: "Enterprise front-end builds",            href: "/angular-developer/" },
      { Icon: SiReact,     name: "React Developer",         desc: "Modern UI development",                  href: "/react-developer/" },
      { Icon: SiLaravel,   name: "Laravel Developer",       desc: "Elegant PHP framework expert",           href: "/laravel-developer/" },
      { Icon: SiVuedotjs,  name: "Vue.js Developer",        desc: "Progressive framework builds",           href: "/vuejs-developer/" },
      { Icon: SiDotnet,    name: ".NET Developer",          desc: "C# & ASP.NET Core systems",              href: "/dotnet-developer/" },
      { Icon: SiPython,    name: "Python Developer",        desc: "Django, FastAPI & data apps",            href: "/python-developer/" },
      { Icon: LuBrainCircuit, name: "AI Engineer",          desc: "LLM, RAG & ML systems",                  href: "/ai-engineer/" },
    ],
  },
];

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [engOpen,     setEngOpen]     = useState(false);
  const [activeCat,   setActiveCat]   = useState("web");
  const engRef = useRef<HTMLDivElement>(null);

  /* scroll → glassy header */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ESC + click-outside to close Engineering dropdown */
  useEffect(() => {
    if (!engOpen) return;
    const onKey   = (e: KeyboardEvent)  => { if (e.key === "Escape") setEngOpen(false); };
    const onClick = (e: MouseEvent) => {
      if (engRef.current && !engRef.current.contains(e.target as Node)) setEngOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [engOpen]);

  const chevSvg = (
    <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const currentCat = ENG_CATS.find(c => c.id === activeCat)!;
  const closeEng = () => setEngOpen(false);

  return (
    <>
      <header id="hdr" className={scrolled ? "scrolled" : ""}>
        {/* ── Utility top bar (collapses on scroll) ── */}
        <div className="topbar">
          <div className="wrap topbar-inner">
            <div className="topbar-links">
              <Link href="/portfolio/">Case Studies</Link>
              <Link href="/careers/">Careers</Link>
              <Link href="/hire-dedicated-resource/">Hire an Expert <span className="tb-arr">↗</span></Link>
            </div>
            <div className="topbar-contact">
              <a href="tel:+919712515105" className="tb-phone">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/></svg>
                +91 97125 15105
              </a>
              <Link href="/contact/" className="tb-contact-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                Contact Us
              </Link>
              <a href="https://wa.me/919722915105" className="tb-wa" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.05 2zm5.8 14.13c-.24.68-1.42 1.3-1.96 1.38-.5.08-1.13.11-1.83-.12-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.17-4.94-4.36-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2.01.88 2.16.07.15.12.32.02.51-.09.2-.14.32-.28.49-.14.17-.29.38-.42.51-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.45.12.61-.07.17-.2.7-.81.89-1.09.18-.28.37-.23.62-.14.26.09 1.62.77 1.9.91.28.14.46.21.53.33.07.12.07.68-.17 1.36z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="wrap">
          <nav className="nav">
            {/* ── Logo ── */}
            <Link href="/" className="brand brand-logo">
              <Image src="/logo.png" alt="Digital Web Weaver" width={391} height={152} priority />
            </Link>

            <div className="nav-links">

              {/* ── ENGINEERING → tabbed dropdown ── */}
              <div
                className="nav-item eng-nav-item"
                ref={engRef}
                onMouseEnter={() => setEngOpen(true)}
                onMouseLeave={() => setEngOpen(false)}
              >
                <button
                  className="eng-trigger"
                  aria-expanded={engOpen}
                  aria-haspopup="dialog"
                >
                  Engineering {chevSvg}
                </button>

                {/* Dropdown sits inside nav-item, absolutely positioned below button */}
                <div
                  className={`eng-drop${engOpen ? " open" : ""}`}
                  role="dialog"
                  aria-modal="true"
                  aria-label="Engineering services"
                  aria-hidden={!engOpen}
                >
                  <div className="eng-drop-body">
                    <div className="eng-vtabs">
                      {ENG_CATS.map(cat => (
                        <button
                          key={cat.id}
                          className={`eng-vtab${activeCat === cat.id ? " active" : ""}`}
                          onMouseEnter={() => setActiveCat(cat.id)}
                          onClick={() => setActiveCat(cat.id)}
                        >
                          {cat.label}
                          <svg className="eng-vtab-arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M2 6h8M7 3l3 3-3 3"/>
                          </svg>
                        </button>
                      ))}
                    </div>
                    <div className="eng-vcontent">
                      <div key={activeCat} className="eng-items-grid">
                        {currentCat.items.map(item => (
                          <Link key={item.href + item.name} className="eng-item" href={item.href} onClick={closeEng}>
                            <span className="eng-item-ic" aria-hidden="true"><item.Icon /></span>
                            <span className="eng-item-txt">
                              <span className="eng-item-name">{item.name}</span>
                              <span className="eng-item-desc">{item.desc}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="eng-drop-bar">
                    <Link className="eng-fs-pill" href="/products/"      onClick={closeEng}>Products →</Link>
                    <Link className="eng-fs-pill" href="/ai-automation/" onClick={closeEng}>AI Solutions →</Link>
                    <Link className="eng-fs-pill" href="/services/"      onClick={closeEng}>All Services →</Link>
                    <Link className="eng-fs-pill primary" href="/contact/" onClick={closeEng}>Start a Project ↗</Link>
                  </div>
                </div>
              </div>

              {/* ── STACK dropdown ── */}
              <div className="nav-item has-drop">
                <a href="/stack/">Stack {chevSvg}</a>
                <div className="drop-menu">
                  <Link className="drop-lnk" href="/react-developer/"><div className="drop-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="4"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)"/></svg></div>React / Next.js</Link>
                  <Link className="drop-lnk" href="/nodejs-developer/"><div className="drop-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 3L4 7v5c0 5 3.6 9.7 8 10.9C16.4 21.7 20 17 20 12V7z"/></svg></div>Node.js</Link>
                  <Link className="drop-lnk" href="/laravel-developer/"><div className="drop-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M8 6L3 12l5 6M16 6l5 6-5 6"/></svg></div>Laravel / PHP</Link>
                  <Link className="drop-lnk" href="/python-developer/"><div className="drop-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18"/></svg></div>Python / Django</Link>
                  <div className="drop-divider"/>
                  <Link className="drop-lnk" href="/stack/databases/"><div className="drop-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.6 3 3 7 3s7-1.4 7-3V6"/><path d="M5 12c0 1.6 3 3 7 3s7-1.4 7-3"/></svg></div>MySQL / PostgreSQL</Link>
                  <Link className="drop-lnk" href="/stack/aws/"><div className="drop-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg></div>AWS / Cloud</Link>
                  <Link className="drop-lnk" href="/cloud-devops/"><div className="drop-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 20h8M12 18v2"/></svg></div>Docker / DevOps</Link>
                </div>
              </div>

              {/* ── SOLUTIONS dropdown ── */}
              <div className="nav-item has-drop">
                <a href="/solutions/">Solutions {chevSvg}</a>
                <div className="drop-menu">
                  <Link className="drop-lnk" href="/mvp-development/"><div className="drop-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg></div>MVP Development</Link>
                  <Link className="drop-lnk" href="/saas-development/"><div className="drop-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18"/></svg></div>SaaS Products</Link>
                  <Link className="drop-lnk" href="/crm-erp-systems/"><div className="drop-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg></div>ERP Systems</Link>
                  <div className="drop-divider"/>
                  <Link className="drop-lnk" href="/solutions/business-intelligence/"><div className="drop-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 3v18h18"/><path d="M7 15l3-3 3 2 4-5"/></svg></div>Business Intelligence</Link>
                  <Link className="drop-lnk" href="/solutions/cybersecurity/"><div className="drop-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></svg></div>Cybersecurity Audit</Link>
                </div>
              </div>

              {/* ── OUR PRODUCTS dropdown ── */}
              <div className="nav-item has-drop">
                <a href="#">Our Products {chevSvg}</a>
                <div className="drop-menu apps-menu">
                  <Link className="apps-lnk" href="/educore"><div className="apps-lnk-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3L2 8l10 5 10-5-10-5z"/><path d="M6 10v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/></svg></div><div className="apps-lnk-txt"><span className="apps-lnk-short">EduCore</span><span className="apps-lnk-full">Learning Management System</span></div></Link>
                  <Link className="apps-lnk" href="/manchify"><div className="apps-lnk-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg></div><div className="apps-lnk-txt"><span className="apps-lnk-short">Manchify</span><span className="apps-lnk-full">CRM + ERP for Event Companies</span></div></Link>
                  <Link className="apps-lnk" href="/glowdesk"><div className="apps-lnk-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2 5 5 .8-3.6 3.6.9 5.6L12 14.5 7.7 17l.9-5.6L5 7.8 10 7z"/></svg></div><div className="apps-lnk-txt"><span className="apps-lnk-short">GlowDesk</span><span className="apps-lnk-full">Software for Aesthetic Clinic</span></div></Link>
                  <Link className="apps-lnk" href="/quickbite"><div className="apps-lnk-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 2v8a2 2 0 01-4 0V2M5 10v12M19 2c-2 0-3.5 2-3.5 5.5S17 13 19 13v9"/></svg></div><div className="apps-lnk-txt"><span className="apps-lnk-short">QuickBite</span><span className="apps-lnk-full">Food Delivery App</span></div></Link>
                  <Link className="apps-lnk" href="/rideeasy"><div className="apps-lnk-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17V12l2.5-5h13L21 12v5"/><path d="M5 17a2 2 0 11-4 .01A2 2 0 015 17zM23 17a2 2 0 11-4 .01 2 2 0 014-.01zM5 17h14"/></svg></div><div className="apps-lnk-txt"><span className="apps-lnk-short">RideEasy</span><span className="apps-lnk-full">Cab Booking System</span></div></Link>
                  <Link className="apps-lnk" href="/schoolhub"><div className="apps-lnk-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6"/></svg></div><div className="apps-lnk-txt"><span className="apps-lnk-short">SchoolHub</span><span className="apps-lnk-full">School Management System</span></div></Link>
                  <Link className="apps-lnk" href="/clinicflow"><div className="apps-lnk-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 8v8M8 12h8"/></svg></div><div className="apps-lnk-txt"><span className="apps-lnk-short">ClinicFlow</span><span className="apps-lnk-full">Clinic Management System</span></div></Link>
                  <Link className="apps-lnk" href="/vetcare"><div className="apps-lnk-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="7" r="1.6"/><circle cx="12" cy="5" r="1.6"/><circle cx="17" cy="7" r="1.6"/><circle cx="19" cy="12" r="1.6"/><path d="M9 21c-2 0-3.5-1.6-3.5-3.5S8 14 12 14s6.5 1.6 6.5 3.5S14 21 12 21z"/></svg></div><div className="apps-lnk-txt"><span className="apps-lnk-short">VetCare</span><span className="apps-lnk-full">Veterinary Clinic Management System</span></div></Link>
                  <Link className="apps-lnk" href="/salonbook"><div className="apps-lnk-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.5 15.5M8.5 8.5L20 20"/></svg></div><div className="apps-lnk-txt"><span className="apps-lnk-short">SalonBook</span><span className="apps-lnk-full">Salon Management System</span></div></Link>
                  <Link className="apps-lnk" href="/pesttrack"><div className="apps-lnk-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="13" r="5"/><path d="M9 9L7 6M15 9l2-3M9 18l-2 3M15 18l2 3M4 13H1M23 13h-3"/></svg></div><div className="apps-lnk-txt"><span className="apps-lnk-short">PestTrack</span><span className="apps-lnk-full">Pest Control CRM</span></div></Link>
                  <Link className="apps-lnk" href="/chemsupply"><div className="apps-lnk-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2v6L4 18a2 2 0 002 3h12a2 2 0 002-3l-5-10V2"/><path d="M9 2h6M6 16h12"/></svg></div><div className="apps-lnk-txt"><span className="apps-lnk-short">ChemSupply</span><span className="apps-lnk-full">ERP for Chemical Supplier</span></div></Link>
                  <Link className="apps-lnk" href="/clinicvoice-ai"><div className="apps-lnk-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/><path d="M16 3c1.5 1 2.5 2.5 2.5 4.5"/></svg></div><div className="apps-lnk-txt"><span className="apps-lnk-short">ClinicVoice AI</span><span className="apps-lnk-full">AI Agent Voice Calling for Clinics</span></div></Link>
                  <Link className="apps-lnk" href="/chatflow-ai"><div className="apps-lnk-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/><path d="M8 10h8M8 13h5"/></svg></div><div className="apps-lnk-txt"><span className="apps-lnk-short">ChatFlow AI</span><span className="apps-lnk-full">AI Agent WhatsApp Automation</span></div></Link>
                  <Link className="apps-lnk" href="/telecare"><div className="apps-lnk-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="14" height="12" rx="2"/><path d="M16 9l6-3.5v11L16 13"/></svg></div><div className="apps-lnk-txt"><span className="apps-lnk-short">TeleCare</span><span className="apps-lnk-full">Telemedicine for Clinics / Hospitals</span></div></Link>
                  <Link className="apps-lnk" href="/insuredesk"><div className="apps-lnk-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></svg></div><div className="apps-lnk-txt"><span className="apps-lnk-short">InsureDesk</span><span className="apps-lnk-full">Insurance Management CRM</span></div></Link>
                  <Link className="apps-lnk" href="/callmate-ai"><div className="apps-lnk-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/><circle cx="18" cy="6" r="3"/></svg></div><div className="apps-lnk-txt"><span className="apps-lnk-short">CallMate AI</span><span className="apps-lnk-full">AI Voice Calling for Business</span></div></Link>
                  <Link className="apps-lnk" href="/solarflow/"><div className="apps-lnk-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></svg></div><div className="apps-lnk-txt"><span className="apps-lnk-short">SolarFlow</span><span className="apps-lnk-full">ERP + CRM for Solar Installers</span></div></Link>
                </div>
              </div>

              {/* ── ABOUT dropdown ── */}
              <div className="nav-item has-drop">
                <a href="/about/">About {chevSvg}</a>
                <div className="drop-menu">
                  <Link className="drop-lnk" href="/about/"><div className="drop-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>Who We Are</Link>
                  <Link className="drop-lnk" href="/about/"><div className="drop-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></div>Our Mission</Link>
                  <Link className="drop-lnk" href="/about/"><div className="drop-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg></div>Our Team</Link>
                  <div className="drop-divider"/>
                  <Link className="drop-lnk" href="/portfolio/"><div className="drop-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 17l-5.5 2.8 1-6.3L3 8.9 9 8z"/></svg></div>Awards &amp; Recognition</Link>
                  <Link className="drop-lnk" href="/blog/"><div className="drop-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 7h6M9 11h6M9 15h4"/></svg></div>Blog &amp; Insights</Link>
                  <Link className="drop-lnk" href="/careers/"><div className="drop-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg></div>Careers</Link>
                </div>
              </div>

              <div className="nav-item"><Link href="/portfolio/">Work</Link></div>

            </div>

            <div className="nav-cta">
              <Link href="/contact/" className="btn btn-primary">Start a project <span className="arr">↗</span></Link>
              <button className="hamburger" id="burger" aria-label="Menu" onClick={() => setMobileOpen(v => !v)}>
                <span/><span/><span/>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
