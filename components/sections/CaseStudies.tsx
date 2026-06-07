import SectionHead from "@/components/ui/SectionHead";

export interface CaseStudy {
  tag: string;
  title: string;
  desc: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  bgClass?: string;
  bgStyle?: string | React.CSSProperties;
}

const DEFAULT_CASES: CaseStudy[] = [
  {
    tag: "SaaS · Full-stack web app",
    title: "Fleet management SaaS platform",
    desc: "Full-stack web application for fleet management — vehicle tracking dashboard, maintenance scheduling, driver portal, and reporting. Built in 14 weeks.",
    metrics: [{ value: "5,000", label: "Vehicles tracked" }, { value: "14wks", label: "Zero to launch" }],
    stack: ["React", "Node.js", "PostgreSQL"],
    bgClass: "c2",
  },
  {
    tag: "HealthTech · Portal",
    title: "Healthcare provider network portal",
    desc: "Multi-role portal for a network of 200 healthcare providers — appointment booking, patient records, billing, and claims processing.",
    metrics: [{ value: "200+", label: "Provider locations" }, { value: "60%", label: "Admin time saved" }],
    stack: ["Vue.js", "Django", "PostgreSQL"],
    bgStyle: { background: "linear-gradient(140deg,#e0f0e8,#c8e4d4)" },
  },
  {
    tag: "E-commerce · Performance",
    title: "High-traffic e-commerce platform",
    desc: "Complete rebuild of a high-traffic e-commerce platform with headless architecture, sub-2-second LCP, and 40% conversion improvement.",
    metrics: [{ value: "1.4s", label: "LCP (mobile)" }, { value: "+40%", label: "Conversion rate" }],
    stack: ["Next.js", "Shopify", "Cloudflare"],
    bgClass: "c1",
  },
];

interface Props {
  eyebrow?: string;
  heading?: string;
  body?: string;
  cases?: CaseStudy[];
}

export default function CaseStudies({
  eyebrow = "Case studies",
  heading = "Systems we've built",
  body,
  cases = DEFAULT_CASES,
}: Props) {
  return (
    <section className="sec">
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} heading={heading} body={body} />
        <div className="case-grid">
          {cases.map((c) => {
            const style = typeof c.bgStyle === 'string'
              ? { background: c.bgStyle }
              : c.bgStyle;
            return (
              <div key={c.title} className="case reveal">
                <div
                  className={`case-top${c.bgClass ? ` ${c.bgClass}` : ""}`}
                  style={style}
                >
                  <span className="case-tag">{c.tag}</span>
                </div>
                <div className="case-body">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <div className="case-metrics">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="cm-i">
                        <div className="m">{m.value}</div>
                        <div className="ml">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="case-stack">
                    {c.stack.map((s) => <span key={s}>{s}</span>)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
