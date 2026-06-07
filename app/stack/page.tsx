import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tech Stack — Production-Proven Technologies",
  description: "Full technology matrix: frontend, backend, mobile, cloud, databases, and DevOps — chosen for the right reasons on every project.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/stack/" },
};

const STACK = [
  { icon: "⚛️", label: "Frontend Frameworks", items: ["React 18", "Next.js", "Vue 3", "Angular 17", "Nuxt 3"], href: "/stack/" },
  { icon: "🔧", label: "Backend Frameworks", items: ["Node.js / Express", "Fastify", "Python / FastAPI", "Django", "Laravel"], href: "/stack/" },
  { icon: "🗄️", label: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "ClickHouse", "Elasticsearch"], href: "/stack/databases/" },
  { icon: "☁️", label: "Cloud & DevOps", items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform"], href: "/stack/aws/" },
  { icon: "📱", label: "Mobile", items: ["Swift / SwiftUI", "Kotlin / Compose", "React Native", "Flutter"], href: "/stack/" },
  { icon: "🤖", label: "AI & ML", items: ["LangChain", "PyTorch", "Hugging Face", "OpenAI", "Pinecone"], href: "/stack/" },
];

export default function StackPage() {
  return (
    <>
      <section className="hero sec">
        <div className="wrap">
          <span className="eyebrow">Tech Stack</span>
          <h1>Production-Proven Technologies. No Hype. Just Results.</h1>
          <p className="lead">We choose technology based on project requirements — not trends. Here's what we use and why.</p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="stack-cols">
            {STACK.map((cat) => (
              <div key={cat.label} className="stack-col">
                <h5>{cat.icon} {cat.label}</h5>
                <ul>
                  {cat.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <Link href={cat.href} style={{ display: "inline-block", marginTop: "var(--s3)", fontSize: "var(--t-sm)", color: "var(--accent)" }}>Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
