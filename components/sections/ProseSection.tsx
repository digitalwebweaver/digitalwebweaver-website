import Link from "next/link";
import type { ProseBlock, ProseInline } from "@/lib/types";

interface Props {
  eyebrow?: string;
  heading: string;
  blocks: ProseBlock[];
  dark?: boolean;
}

function renderInline(runs: ProseInline[]) {
  return runs.map((run, i) =>
    typeof run === "string" ? (
      <span key={i}>{run}</span>
    ) : (
      <Link key={i} href={run.href} className="prose-link">
        {run.text}
      </Link>
    )
  );
}

export default function ProseSection({ eyebrow, heading, blocks, dark }: Props) {
  return (
    <section className={dark ? "dark sec" : "sec"}>
      <div className="wrap">
        <div className="prose-grid">
          <div className="prose-head reveal">
            {eyebrow && <span className={`eyebrow${dark ? " on-dark" : ""}`}>{eyebrow}</span>}
            <h2>{heading}</h2>
          </div>
          <div className="prose-body reveal">
            {blocks.map((block, i) => (
              <div key={i} className="prose-block">
                {block.h3 && <h3>{block.h3}</h3>}
                <p>{renderInline(block.p)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
