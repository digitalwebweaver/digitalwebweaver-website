"use client";
import Link from "next/link";

const WEB_DEV = [
  { icon: "⚛️", label: "React Development", desc: "SPA & SSR apps", href: "/react-developer/" },
  { icon: "💚", label: "Node.js Development", desc: "API & backend services", href: "/nodejs-developer/" },
  { icon: "🐍", label: "Python Development", desc: "Scripts, ML & APIs", href: "/python-developer/" },
  { icon: "🌐", label: "PHP Development", desc: "Custom PHP solutions", href: "/php-developer/" },
  { icon: "🎨", label: "Frontend Development", desc: "UI/UX engineering", href: "/frontend-developer/" },
];
const CUSTOM_SW = [
  { icon: "🏗️", label: "Custom Software", desc: "Bespoke systems", href: "/services/custom-software-development/" },
  { icon: "🔌", label: "API Development", desc: "REST & GraphQL", href: "/services/api-development-integration/" },
  { icon: "🤖", label: "AI Development", desc: "ML, LLM & automation", href: "/ai-automation/" },
  { icon: "☁️", label: "Cloud Solutions", desc: "AWS, GCP, Azure", href: "/services/cloud-infrastructure-devops/" },
  { icon: "🔒", label: "Security Audit", desc: "Pen-test & hardening", href: "/services/security-compliance/" },
];
const MOBILE = [
  { icon: "📱", label: "iOS Development", desc: "Swift & native apps", href: "/ios-developer/" },
  { icon: "🤖", label: "Android Development", desc: "Kotlin & Java apps", href: "/android-developer/" },
  { icon: "⚡", label: "React Native", desc: "Cross-platform mobile", href: "/react-native-developer/" },
  { icon: "🦋", label: "Flutter Development", desc: "Dart & Skia engine", href: "/flutter-developer/" },
  { icon: "📲", label: "PWA Development", desc: "Offline-capable web apps", href: "/services/progressive-web-apps/" },
];
const ARCH = [
  { icon: "🏛️", label: "System Architecture", desc: "Scalable design", href: "/services/system-architecture-consulting/" },
  { icon: "🔄", label: "DevOps & CI/CD", desc: "Pipelines & automation", href: "/services/cloud-infrastructure-devops/" },
  { icon: "📊", label: "Performance Audit", desc: "Speed & scalability", href: "/services/performance-optimization/" },
  { icon: "🛡️", label: "Code Review", desc: "Quality & security", href: "/services/security-compliance/" },
  { icon: "🧪", label: "QA & Testing", desc: "End-to-end assurance", href: "/services/qa-testing/" },
];
const HIRE = [
  { icon: "👨‍💻", label: "Hire React Developer", desc: "Full-stack React", href: "/react-developer/" },
  { icon: "🖥️", label: "Hire Full Stack Dev", desc: "End-to-end delivery", href: "/fullstack-developer/" },
  { icon: "📱", label: "Hire Mobile Dev", desc: "iOS/Android/RN", href: "/android-developer/" },
  { icon: "🔧", label: "Hire Backend Dev", desc: "APIs & microservices", href: "/nodejs-developer/" },
  { icon: "🎨", label: "Hire UI/UX Designer", desc: "Figma & design systems", href: "/hire-dedicated/" },
];

const PILLS = [
  { label: "🛍️ App Store Products", href: "/apps/" },
  { label: "🤖 AI Solutions", href: "/ai-automation/" },
  { label: "🚀 Start a Project", href: "/contact/", cta: true },
  { label: "📋 All Services", href: "/services/" },
];

interface ColItem { icon: string; label: string; desc: string; href: string; }

function MegaCol({ head, icon, items }: { head: string; icon: string; items: ColItem[] }) {
  return (
    <div className="mega-col">
      <div className="mega-col-head">
        <span className="icon">{icon}</span>
        {head}
      </div>
      {items.map((it) => (
        <Link key={it.href} href={it.href} className="mega-link">
          <span className="m-icon">{it.icon}</span>
          <span className="m-text">
            <span className="m-label">{it.label}</span>
            <span className="m-desc">{it.desc}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

export default function EngMega() {
  return (
    <div className="eng-mega">
      <div className="mega-body">
        <MegaCol head="Web Development"    icon="🌐" items={WEB_DEV} />
        <MegaCol head="Custom Software"    icon="⚙️" items={CUSTOM_SW} />
        <MegaCol head="Mobile Development" icon="📱" items={MOBILE} />
        <MegaCol head="System Architecture" icon="🏛️" items={ARCH} />
        <MegaCol head="Hire Dedicated"     icon="👥" items={HIRE} />
      </div>
      <div className="mega-footer">
        {PILLS.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className={`mega-pill${p.cta ? " mega-pill-cta" : ""}`}
          >
            {p.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
