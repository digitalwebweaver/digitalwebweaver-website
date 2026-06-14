import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { getProjectBySlug, getPublishedProjects } from "@/lib/projects";
import { renderIcon } from "@/lib/portfolioIcons";

export const dynamic = "force-dynamic";

const SITE_URL = "https://digitalwebweaver.com";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};

  const title = project.seo_title || project.title;
  const description = project.seo_description || project.excerpt || undefined;
  const url = `/portfolio/${project.slug}/`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      url,
      type: "article",
      title,
      description,
      images: project.cover_image ? [{ url: project.cover_image }] : undefined,
    },
    twitter: {
      card: project.cover_image ? "summary_large_image" : "summary",
      title,
      description,
      images: project.cover_image ? [project.cover_image] : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const html = project.content ? await marked.parse(project.content) : "";
  const all = await getPublishedProjects(50);
  const related = all.filter((p) => p.id !== project.id).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.seo_description || project.excerpt || undefined,
    image: project.cover_image || undefined,
    dateCreated: project.published_at || project.created_at,
    dateModified: project.updated_at,
    creator: { "@type": "Organization", name: "Digital Web Weaver", url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/portfolio/${project.slug}/` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ===== HERO ===== */}
      <section className="page-hero" style={{ paddingBottom: "40px" }}>
        <div className="wrap">
          <div className="breadcrumb reveal">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/portfolio">Portfolio</Link>
            <span className="sep">/</span>
            {project.title}
          </div>
          {(project.tag || project.category) && (
            <span className="eyebrow reveal">{project.tag || project.category}</span>
          )}
          <h1 className="reveal" style={{ marginTop: "18px", maxWidth: "820px" }}>
            {project.title}
          </h1>
          {project.excerpt && (
            <p className="lead reveal" style={{ maxWidth: "640px" }}>
              {project.excerpt}
            </p>
          )}
          {(project.client_name || project.client_country) && (
            <div
              className="reveal"
              style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--faint)", letterSpacing: ".08em", marginTop: "20px" }}
            >
              {[project.client_name, project.client_country].filter(Boolean).join(" · ")}
            </div>
          )}
        </div>
      </section>

      {/* ===== VISUAL ===== */}
      {project.cover_image ? (
        <section className="wrap reveal" style={{ marginBottom: "8px" }}>
          <div
            style={{
              width: "100%",
              minHeight: "320px",
              borderRadius: "18px",
              border: "1px solid var(--line)",
              backgroundImage: `url(${project.cover_image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </section>
      ) : (
        <section className="wrap reveal" style={{ marginBottom: "8px" }}>
          <div
            className={`case-top ${project.color || "c1"}`}
            style={{ borderRadius: "18px", minHeight: "240px", border: "1px solid var(--line)" }}
          >
            {renderIcon(project.icon)}
          </div>
        </section>
      )}

      {/* ===== METRICS + STACK ===== */}
      {(project.metrics?.length > 0 || project.stack?.length > 0) && (
        <section className="sec" style={{ paddingTop: "32px", paddingBottom: "0" }}>
          <div className="wrap" style={{ maxWidth: "760px" }}>
            {project.metrics?.length > 0 && (
              <div className="case-metrics reveal" style={{ marginBottom: "24px" }}>
                {project.metrics.map((m, i) => (
                  <div className="cm-i" key={i}>
                    <div className="m">{m.value}</div>
                    <div className="ml">{m.label}</div>
                  </div>
                ))}
              </div>
            )}
            {project.stack?.length > 0 && (
              <div className="case-stack reveal">
                {project.stack.map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ===== CONTENT ===== */}
      {html && (
        <section className="sec">
          <div className="wrap" style={{ maxWidth: "760px" }}>
            <div className="post-content reveal" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </section>
      )}

      {/* ===== Related ===== */}
      {related.length > 0 && (
        <section className="sec" style={{ background: "var(--paper-2)" }}>
          <div className="wrap">
            <span className="eyebrow reveal">More work</span>
            <h2 className="reveal" style={{ marginTop: "18px", marginBottom: "32px" }}>
              Related projects
            </h2>
            <div className="port-grid">
              {related.map((p) => (
                <Link key={p.id} href={`/portfolio/${p.slug}/`} className="case reveal" style={{ textDecoration: "none", color: "inherit" }}>
                  <div className={`case-top ${p.color || "c1"}`}>
                    <span className="case-tag">{p.tag || p.category || "Case study"}</span>
                    {renderIcon(p.icon)}
                  </div>
                  <div className="case-body">
                    <h3>{p.title}</h3>
                    {p.excerpt && <p>{p.excerpt}</p>}
                    {p.stack?.length > 0 && (
                      <div className="case-stack">
                        {p.stack.map((s, i) => (
                          <span key={i}>{s}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA ===== */}
      <section>
        <div className="wrap">
          <div className="cta reveal">
            <div className="cta-inner">
              <span className="eyebrow" style={{ color: "rgba(255,255,255,.85)" }}>
                Let&apos;s build
              </span>
              <h2 style={{ marginTop: "18px" }}>Ready to become our next case study?</h2>
              <p>
                Get a free technical consultation and a detailed project estimate
                from our senior engineers — within 24 hours. No commitment required.
              </p>
              <div className="cta-actions">
                <Link href="/contact" className="btn btn-primary">
                  Start a project <span className="arr">↗</span>
                </Link>
                <Link href="/portfolio" className="btn btn-ghost">
                  Back to portfolio
                </Link>
              </div>
              <div className="cta-meta">
                <span>● Free consultation</span>
                <span>● 24-hour response</span>
                <span>● NDA signed first</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
