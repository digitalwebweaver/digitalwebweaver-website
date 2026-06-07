import SectionHead from "@/components/ui/SectionHead";

export interface ServiceItem {
  icon?: string;
  title: string;
  desc: string;
  tags?: string[];
}

interface Props {
  eyebrow?: string;
  heading: string;
  body?: string;
  items: ServiceItem[];
  dark?: boolean;
  variant?: "card" | "svc";
}

export default function ServiceGrid({ eyebrow, heading, body, items, dark, variant = "card" }: Props) {
  return (
    <section className={dark ? "dark sec" : "sec"}>
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} heading={heading} body={body} dark={dark} />
        <div className="svc-grid">
          {items.map((item, i) => (
            variant === "card" ? (
              <div key={item.title} className="svc-card reveal">
                <span className="sc-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="sc-ic">
                  {item.icon ? (
                    <span style={{ fontSize: 20 }}>{item.icon}</span>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 22, height: 22 }}>
                      <rect x="3" y="3" width="18" height="18" rx="3" /><path d="M3 9h18" />
                    </svg>
                  )}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                {item.tags && (
                  <div className="sc-tags">
                    {item.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                )}
              </div>
            ) : (
              <div key={item.title} className="svc reveal">
                <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                <div className="si">
                  {item.icon ? (
                    <span style={{ fontSize: 20 }}>{item.icon}</span>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 22, height: 22 }}>
                      <path d="M8 6L3 12l5 6M16 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                {item.tags && (
                  <div className="svc-tags">
                    {item.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                )}
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
