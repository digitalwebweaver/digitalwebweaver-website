import Link from "next/link";

interface Props {
  eyebrow?: string;
  heading: string;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  meta?: string[];
}

export default function CtaBand({
  eyebrow,
  heading,
  body,
  primaryCta = { label: "Start a project", href: "/contact/" },
  secondaryCta = { label: "View our work", href: "/portfolio/" },
  meta = ["Senior engineers only", "48-hr match", "No lock-in"],
}: Props) {
  return (
    <section>
      <div className="wrap">
        <div className="cta reveal">
          <div className="cta-inner">
            {eyebrow && <span className="eyebrow" style={{ color: "rgba(255,255,255,.85)" }}>{eyebrow}</span>}
            <h2 style={{ marginTop: 18 }}>{heading}</h2>
            {body && <p>{body}</p>}
            <div className="cta-actions">
              <Link href={primaryCta.href} className="btn btn-primary">
                {primaryCta.label} <span className="arr">↗</span>
              </Link>
              <Link href={secondaryCta.href} className="btn btn-ghost">
                {secondaryCta.label}
              </Link>
            </div>
            <div className="cta-meta">
              {meta.map((m) => (
                <span key={m}>● {m}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
