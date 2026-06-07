import SectionHead from "@/components/ui/SectionHead";

export interface CapItem {
  icon?: string;
  title: string;
  desc: string;
}

interface Props {
  eyebrow?: string;
  heading: string;
  body?: string;
  items: CapItem[];
  dark?: boolean;
  cols?: 2 | 3 | 4;
}

export default function CapGrid({ eyebrow, heading, body, items, dark = true, cols = 4 }: Props) {
  return (
    <section className={dark ? "dark sec" : "sec"}>
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} heading={heading} body={body} dark={dark} />
        <div className="cap-grid" style={cols !== 4 ? { gridTemplateColumns: `repeat(${cols},1fr)` } : undefined}>
          {items.map((item) => (
            <div key={item.title} className="cap reveal">
              <div className="ci">
                {item.icon ? (
                  <span style={{ fontSize: 18 }}>{item.icon}</span>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 20, height: 20 }}>
                    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" />
                  </svg>
                )}
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
