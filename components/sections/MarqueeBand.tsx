const DEFAULT_ITEMS = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Go",
  "PostgreSQL", "Kubernetes", "AWS", "AI / LLM Systems", "React Native", "Docker",
];

export default function MarqueeBand({ items = DEFAULT_ITEMS }: { items?: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
