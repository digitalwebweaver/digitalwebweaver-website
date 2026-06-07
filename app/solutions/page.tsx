import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions — Built Around Your Goals",
  description: "Industry and domain solutions: cybersecurity, business intelligence, e-commerce, healthcare, fintech, and more.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/solutions/" },
};

const SOLUTIONS = [
  { icon: "🔒", label: "Cybersecurity", desc: "Penetration testing, OWASP audits, and compliance checks.", href: "/solutions/cybersecurity/" },
  { icon: "📊", label: "Business Intelligence", desc: "BI dashboards, data warehouses, and ETL pipelines.", href: "/solutions/business-intelligence/" },
  { icon: "🛒", label: "E-Commerce", desc: "Custom stores, headless commerce, and conversion optimisation.", href: "/ecommerce-development/" },
  { icon: "🏥", label: "Healthcare Tech", desc: "HIPAA-compliant EHR, telemedicine, and patient portals.", href: "/healthcare/" },
  { icon: "💳", label: "FinTech", desc: "Payments, KYC/AML, and PCI-DSS compliant platforms.", href: "/fintech/" },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="hero sec">
        <div className="wrap">
          <span className="eyebrow">Solutions</span>
          <h1>Solutions Built Around Your Goals</h1>
          <p className="lead">Domain and industry-specific software solutions engineered to solve real business problems.</p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="svc-grid">
            {SOLUTIONS.map((sol) => (
              <Link key={sol.href} href={sol.href} className="svc" style={{ textDecoration: "none" }}>
                <div className="si">{sol.icon}</div>
                <h4>{sol.label}</h4>
                <p>{sol.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
