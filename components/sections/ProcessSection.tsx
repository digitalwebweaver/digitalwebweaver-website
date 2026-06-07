import SectionHead from "@/components/ui/SectionHead";

export interface ProcessStep {
  title: string;
  desc: string;
}

interface Props {
  eyebrow?: string;
  heading: string;
  body?: string;
  steps: ProcessStep[];
  deliverables?: string[];
  dark?: boolean;
}

export default function ProcessSection({
  eyebrow,
  heading,
  body,
  steps,
  deliverables = ["Figma design source files", "Clean documented codebase", "CI/CD pipeline", "SEO and analytics setup", "Performance report"],
  dark,
}: Props) {
  return (
    <section className={dark ? "dark sec" : "sec"}>
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} heading={heading} body={body} dark={dark} />
        <div className="about-layout">
          <div className="al-steps">
            {steps.map((step, i) => (
              <div key={step.title} className="pstep reveal">
                <div className="ps-n">{String(i + 1).padStart(2, "0")}</div>
                <div className="ps-body">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="al-aside">
            <div className="al-panel">
              <div className="alp-tag">What you get</div>
              <ul className="al-list">
                {deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
