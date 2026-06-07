import Link from "next/link";
import Breadcrumb, { type Crumb } from "@/components/ui/Breadcrumb";
import FormCard from "./FormCard";

interface Props {
  eyebrow?: string;
  heading: React.ReactNode;
  lead: string;
  breadcrumbs?: Crumb[];
  stats?: { value: string; label: string }[];
  trusted?: string;
  formTag?: string;
  formHeading?: string;
  formSub?: string;
  formSubmitLabel?: string;
  formNote?: string;
  formVariant?: "service" | "hire";
}

export default function ServiceHero({
  eyebrow,
  heading,
  lead,
  breadcrumbs,
  stats,
  trusted = "Trusted by Startups · Scale-ups · Enterprises",
  formTag,
  formHeading = "What are you building?",
  formSub,
  formSubmitLabel,
  formNote,
  formVariant = "service",
}: Props) {
  return (
    <section className="svc-hero">
      <div className="wrap">
        {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
        <div className="svc-hero-grid">
          <div className="shg-left">
            {eyebrow && <span className="eyebrow reveal">{eyebrow}</span>}
            <h1 className="reveal" style={{ marginTop: 18 }}>{heading}</h1>
            <p className="lead reveal">{lead}</p>
            {stats && (
              <div className="hero-stats reveal">
                {stats.map((s) => (
                  <div key={s.label} className="hs">
                    <div className="hn">{s.value}</div>
                    <div className="hl">{s.label}</div>
                  </div>
                ))}
              </div>
            )}
            <div className="usedby reveal">
              <span>Trusted by</span>
              <div className="ub-chips">
                <div className="ub-c">150+ clients</div>
                <div className="ub-c">India</div>
                <div className="ub-c">UK</div>
                <div className="ub-c">US &amp; Global</div>
              </div>
            </div>
          </div>
          <div className="shg-right reveal">
            <FormCard
              tag={formTag}
              heading={formHeading}
              sub={formSub}
              submitLabel={formSubmitLabel}
              note={formNote}
              variant={formVariant}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
