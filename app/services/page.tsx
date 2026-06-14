import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Software Development Services — Web, Mobile, Cloud & AI",
  description: "Custom software development services from Digital Web Weaver: web apps, mobile apps, APIs, cloud infrastructure, AI automation, and enterprise systems — from MVP to enterprise scale.",
  alternates: { canonical: "/services/" },
  openGraph: { url: "/services/", type: "website" },
};

const SERVICES = [
  { icon: "⚛️", label: "React Development", href: "/react-developer/" },
  { icon: "💚", label: "Node.js Development", href: "/nodejs-developer/" },
  { icon: "🐍", label: "Python Development", href: "/python-developer/" },
  { icon: "📱", label: "Mobile App Development", href: "/mobile-app-development/" },
  { icon: "🤖", label: "AI & Automation", href: "/ai-automation/" },
  { icon: "☁️", label: "Cloud & DevOps", href: "/cloud-devops/" },
  { icon: "🛒", label: "E-Commerce Development", href: "/ecommerce-development/" },
  { icon: "🎨", label: "UI/UX Design", href: "/ui-ux-design/" },
  { icon: "🏗️", label: "Custom Web Apps", href: "/custom-web-apps/" },
  { icon: "🔌", label: "API Development", href: "/services/api-development/" },
  { icon: "🔗", label: "API Integrations", href: "/services/api-integrations/" },
  { icon: "🏢", label: "Corporate Websites", href: "/services/corporate-websites/" },
  { icon: "🗄️", label: "Database Design", href: "/services/database-design/" },
  { icon: "🏛️", label: "Enterprise Applications", href: "/services/enterprise-applications/" },
  { icon: "🧩", label: "Microservices", href: "/services/microservices/" },
  { icon: "⚡", label: "Performance Optimisation", href: "/services/performance-optimization/" },
  { icon: "📲", label: "Progressive Web Apps", href: "/services/progressive-web-apps/" },
  { icon: "🔄", label: "App Modernisation", href: "/services/app-modernization/" },
  { icon: "🚀", label: "MVP Development", href: "/mvp-development/" },
  { icon: "🏗️", label: "SaaS Development", href: "/saas-development/" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="hero sec">
        <div className="wrap">
          <span className="eyebrow">All Services</span>
          <h1>Custom Software Development Services for Every Stage of Your Business</h1>
          <p className="lead">Full-spectrum custom software development — web, mobile, APIs, cloud, and AI — from idea to production.</p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="svc-grid">
            {SERVICES.map((svc) => (
              <Link key={svc.href} href={svc.href} className="svc" style={{ textDecoration: "none" }}>
                <div className="si">{svc.icon}</div>
                <h4>{svc.label}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
