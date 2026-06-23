"use client";
import { useState } from "react";
import Link from "next/link";

const SECTIONS = [
  {
    id: "engineering",
    head: "Engineering",
    links: [
      { label: "Web Development", href: "/web-development/" },
      { label: "Custom Software / SaaS", href: "/saas-development/" },
      { label: "Mobile Apps", href: "/mobile-app-development/" },
      { label: "Cloud & DevOps", href: "/cloud-devops/" },
      { label: "AI & Automation", href: "/ai-automation/" },
      { label: "API Development", href: "/services/api-development/" },
    ],
  },
  {
    id: "hire",
    head: "Hire Developers",
    links: [
      { label: "React Developer", href: "/react-developer/" },
      { label: "Node.js Developer", href: "/nodejs-developer/" },
      { label: "Laravel Developer", href: "/laravel-developer/" },
      { label: "PHP Developer", href: "/php-developer/" },
      { label: "Angular Developer", href: "/angular-developer/" },
    ],
  },
  {
    id: "apps",
    head: "Our Products",
    links: [
      { label: "EduCore — Learning Management System", href: "/educore" },
      { label: "SolarOps — ERP for Solar Panel Installer", href: "/solarops" },
      { label: "GlowDesk — Software for Aesthetic Clinic", href: "/glowdesk" },
      { label: "QuickBite — Food Delivery App", href: "/quickbite" },
      { label: "RideEasy — Cab Booking System", href: "/rideeasy" },
      { label: "SchoolHub — School Management System", href: "/schoolhub" },
      { label: "ClinicFlow — Clinic Management System", href: "/clinicflow" },
      { label: "VetCare — Veterinary Clinic Management System", href: "/vetcare" },
      { label: "SalonBook — Salon Management System", href: "/salonbook" },
      { label: "PestTrack — Pest Control CRM", href: "/pesttrack" },
      { label: "ChemSupply — ERP for Chemical Supplier", href: "/chemsupply" },
      { label: "ClinicVoice AI — AI Voice Calling for Clinics", href: "/clinicvoice-ai" },
      { label: "ChatFlow AI — AI Agent WhatsApp Automation", href: "/chatflow-ai" },
      { label: "TeleCare — Telemedicine for Clinics / Hospitals", href: "/telecare" },
      { label: "InsureDesk — Insurance Management CRM", href: "/insuredesk" },
      { label: "CallMate AI — AI Voice Calling for Business", href: "/callmate-ai" },
      { label: "SolarFlow — ERP + CRM for Solar Installers", href: "/solarflow/" },
    ],
  },
  {
    id: "stack",
    head: "Stack & Solutions",
    links: [
      { label: "Tech Stack Overview", href: "/stack/" },
      { label: "Databases", href: "/stack/databases/" },
      { label: "Business Intelligence", href: "/solutions/business-intelligence/" },
      { label: "Cybersecurity Audit", href: "/solutions/cybersecurity/" },
    ],
  },
  {
    id: "company",
    head: "Company",
    links: [
      { label: "About Us", href: "/about/" },
      { label: "Our Work", href: "/portfolio/" },
      { label: "Blog & Insights", href: "/blog/" },
      { label: "Careers", href: "/careers/" },
    ],
  },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: Props) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({ engineering: true });
  const toggle = (id: string) => setOpenSections((p) => ({ ...p, [id]: !p[id] }));

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: "64px 0 0",
        background: "var(--paper, #f5f2ed)",
        overflowY: "auto",
        zIndex: 999,
        borderTop: "1px solid var(--line, #e5e2dc)",
        padding: "0 20px 40px",
      }}
    >
      {SECTIONS.map((sec) => {
        const isOpen = !!openSections[sec.id];
        return (
          <div
            key={sec.id}
            style={{ borderBottom: "1px solid var(--line, #e5e2dc)" }}
          >
            {/* Section header / toggle */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => toggle(sec.id)}
              onKeyDown={(e) => e.key === "Enter" && toggle(sec.id)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 0",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--faint, #999)",
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              <span>{sec.head}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                style={{
                  flexShrink: 0,
                  transition: "transform 0.2s ease",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Collapsible links */}
            {isOpen && (
              <div style={{ paddingBottom: "10px" }}>
                {sec.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "9px 12px",
                      fontSize: "15px",
                      color: "var(--ink-2, #333)",
                      textDecoration: "none",
                      borderRadius: "6px",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent-soft, #fce4ec)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent, #e91e63)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--ink-2, #333)";
                    }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}

      {/* CTA */}
      <Link
        href="/contact/"
        onClick={onClose}
        style={{
          display: "block",
          textAlign: "center",
          marginTop: "28px",
          padding: "14px",
          background: "var(--ink, #111)",
          color: "#fff",
          borderRadius: "8px",
          fontWeight: 600,
          fontSize: "15px",
          textDecoration: "none",
        }}
      >
        Start a project ↗
      </Link>
    </div>
  );
}
