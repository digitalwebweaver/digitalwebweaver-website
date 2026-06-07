import Link from "next/link";

export interface DropItem {
  icon: string;
  label: string;
  href: string;
}

export default function DropMenu({ items }: { items: DropItem[] }) {
  return (
    <div className="drop-menu">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="drop-item">
          <span className="icon">{item.icon}</span>
          {item.label}
        </Link>
      ))}
    </div>
  );
}
