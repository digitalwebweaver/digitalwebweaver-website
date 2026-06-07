import SectionHead from "@/components/ui/SectionHead";

export interface WhyItem {
  icon?: string;
  title: string;
  desc: string;
}

interface Props {
  eyebrow?: string;
  heading: string;
  body?: string;
  items: WhyItem[];
  dark?: boolean;
}

export default function WhyGrid({ eyebrow, heading, body, items, dark = true }: Props) {
  return (
    <section className={dark ? "dark sec" : "sec"}>
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} heading={heading} body={body} dark={dark} />
        <div className="why-grid">
          {items.map((item) => (
            <div key={item.title} className="why reveal">
              <div className="wi">
                {item.icon ? (
                  <span style={{ fontSize: 18 }}>{item.icon}</span>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 22, height: 22 }}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
