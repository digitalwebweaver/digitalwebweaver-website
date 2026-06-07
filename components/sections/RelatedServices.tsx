import Link from "next/link";
import SectionHead from "@/components/ui/SectionHead";

interface RelatedItem {
  label: string;
  href: string;
  desc: string;
}

export default function RelatedServices({ items }: { items: RelatedItem[] }) {
  return (
    <section className="sec">
      <div className="wrap">
        <SectionHead eyebrow="Related services" heading="You might also need" />
        <div className="rel-grid reveal">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="rel-card">
              <strong className="rel-label">{item.label}</strong>
              <span className="rel-desc">{item.desc}</span>
              <span className="rel-arr" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
