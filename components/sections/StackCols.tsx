import SectionHead from "@/components/ui/SectionHead";

export interface StackCol {
  head: string;
  items: string[];
}

interface Props {
  eyebrow?: string;
  heading: string;
  body?: string;
  cols: StackCol[];
  dark?: boolean;
}

export default function StackCols({ eyebrow, heading, body, cols, dark }: Props) {
  return (
    <section className={dark ? "dark sec" : "sec"} style={!dark ? { background: "var(--paper-2)" } : undefined}>
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} heading={heading} body={body} dark={dark} />
        <div className="stack-cols">
          {cols.map((col) => (
            <div key={col.head} className="stack-col reveal">
              <div className="stc-label">{col.head}</div>
              <div className="stc-chips">
                {col.items.map((item) => (
                  <span key={item} className="stc-chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
