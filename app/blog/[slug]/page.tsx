import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { getPostBySlug, getPublishedPosts, formatPostDate } from "@/lib/posts";

export const dynamic = "force-dynamic";

const SITE_URL = "https://digitalwebweaver.com";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const title = post.seo_title || post.title;
  const description = post.seo_description || post.excerpt || undefined;
  const url = `/blog/${post.slug}/`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      url,
      type: "article",
      title,
      description,
      images: post.cover_image ? [{ url: post.cover_image }] : undefined,
      publishedTime: post.published_at || undefined,
      authors: post.author_name ? [post.author_name] : undefined,
    },
    twitter: {
      card: post.cover_image ? "summary_large_image" : "summary",
      title,
      description,
      images: post.cover_image ? [post.cover_image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const rawHtml = await marked.parse(post.content || "");

  // Build a table of contents from the article's <h2> headings and give each
  // heading an id so the sidebar links can jump to it.
  const slugifyHeading = (s: string) =>
    s
      .toLowerCase()
      .replace(/<[^>]+>/g, "")
      .replace(/&[^;]+;/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  const toc: { id: string; text: string }[] = [];
  const html = rawHtml.replace(/<h2>([\s\S]*?)<\/h2>/g, (_m, inner) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    const id = slugifyHeading(text);
    if (id) toc.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });

  const allPosts = await getPublishedPosts(4);
  const related = allPosts.filter((p) => p.id !== post.id).slice(0, 3);

  // ── Extract FAQs from the article body for FAQPage schema (AEO / AI answers) ──
  // Markdown pattern: a "## ...FAQ/Frequently asked questions" heading, then
  // **Question?** lines each followed by an answer paragraph.
  const stripMd = (s: string) =>
    s
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // links -> text
      .replace(/[*_`#>]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  function extractFaqs(md: string) {
    const faqs: { q: string; a: string }[] = [];
    const sec = md.match(/^#{2,3}\s+.*(?:frequently asked questions|faqs?).*$([\s\S]*?)(?=^#{2,3}\s|$(?![\s\S]))/im);
    const block = sec ? sec[1] : "";
    if (!block) return faqs;
    const re = /\*\*(.+?)\*\*\s*\n+([\s\S]*?)(?=\n\s*\*\*|\n*$)/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(block)) !== null) {
      const q = stripMd(m[1]);
      const a = stripMd(m[2]);
      if (q && a) faqs.push({ q, a });
    }
    return faqs;
  }
  const faqs = extractFaqs(post.content || "");
  const wordCount = (post.content || "").trim().split(/\s+/).filter(Boolean).length;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    name: post.title,
    description: post.seo_description || post.excerpt || undefined,
    image: post.cover_image || `${SITE_URL}/og-image.png`,
    datePublished: post.published_at || post.created_at,
    dateModified: post.updated_at,
    wordCount,
    inLanguage: "en",
    articleSection: post.tag || undefined,
    keywords: post.tag || undefined,
    url: `${SITE_URL}/blog/${post.slug}/`,
    author: {
      "@type": "Person",
      name: post.author_name || "Kamlesh Nishad",
      url: "https://www.linkedin.com/in/kamleshnishad/",
      sameAs: ["https://www.linkedin.com/in/kamleshnishad/"],
      worksFor: { "@type": "Organization", name: "Digital Web Weaver", url: SITE_URL },
    },
    publisher: {
      "@type": "Organization",
      name: "Digital Web Weaver",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon-512.png`,
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}/`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}/` },
    ],
  };

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* ===== HERO ===== */}
      <section className="page-hero" style={{ paddingBottom: "40px" }}>
        <div className="wrap">
          <div className="breadcrumb reveal">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/blog">Blog</Link>
            <span className="sep">/</span>
            {post.title}
          </div>
          {post.tag && <span className="eyebrow reveal">{post.tag}</span>}
          <h1 className="reveal" style={{ marginTop: "18px", maxWidth: "820px" }}>
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="lead reveal" style={{ maxWidth: "640px" }}>
              {post.excerpt}
            </p>
          )}
          <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "28px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                fontSize: "13px",
                borderRadius: "50%",
                background: "var(--accent)",
                color: "#fff",
                display: "grid",
                placeItems: "center",
                fontWeight: 700,
                fontFamily: "var(--display)",
                flex: "none",
              }}
            >
              {post.author_initials || "DW"}
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: "14px" }}>
                <a
                  href="https://www.linkedin.com/in/kamleshnishad/"
                  target="_blank"
                  rel="author noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {post.author_name || "Kamlesh Nishad"}
                </a>
              </div>
              <div style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--faint)", letterSpacing: ".08em" }}>
                {post.read_minutes} min read &nbsp;·&nbsp; {formatPostDate(post.published_at)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ marginBottom: "8px" }}>
        {post.cover_image ? (
          <div
            style={{
              width: "100%",
              minHeight: "320px",
              borderRadius: "18px",
              border: "1px solid var(--line)",
              backgroundImage: `url(${post.cover_image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ) : (
          // Branded fallback banner when a post has no cover image
          <div
            style={{
              width: "100%",
              minHeight: "240px",
              borderRadius: "18px",
              border: "1px solid var(--line)",
              background:
                "linear-gradient(135deg, var(--accent-soft) 0%, var(--paper) 52%, #dde9ff 100%)",
              display: "grid",
              placeItems: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12.5px",
                letterSpacing: ".22em",
                textTransform: "uppercase",
                color: "var(--ink-2)",
                opacity: 0.7,
              }}
            >
              {post.tag || "Digital Web Weaver"}
            </span>
          </div>
        )}
      </section>

      {/* ===== CONTENT + SIDEBAR ===== */}
      <section className="sec" style={{ paddingTop: "48px" }}>
        <div className="wrap">
          <div className="post-layout">
            <article className="post-content" dangerouslySetInnerHTML={{ __html: html }} />

            <aside className="post-side">
              {toc.length >= 3 && (
                <nav className="post-toc">
                  <span className="eyebrow">On this page</span>
                  <ul>
                    {toc.map((h) => (
                      <li key={h.id}>
                        <a href={`#${h.id}`}>{h.text}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}

              <div className="post-cta-card">
                <span className="eyebrow">Let&apos;s build</span>
                <h3>Have a project in mind?</h3>
                <p>Get a free consultation and a clear estimate from our senior engineers — within 24 hours.</p>
                <Link href="/contact/" className="btn btn-primary">
                  Start a project <span className="arr">↗</span>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ===== Related ===== */}
      {related.length > 0 && (
        <section className="sec" style={{ background: "var(--paper-2)" }}>
          <div className="wrap">
            <span className="eyebrow reveal">Keep reading</span>
            <h2 className="reveal" style={{ marginTop: "18px", marginBottom: "32px" }}>
              More from the blog
            </h2>
            <div className="blog-grid">
              {related.map((p) => (
                <Link href={`/blog/${p.slug}`} key={p.id} className="blog-card reveal" style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="bc-vis bc-2" style={p.cover_image ? { backgroundImage: `url(${p.cover_image})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}>
                    {p.tag && <span className="bc-tag">{p.tag}</span>}
                  </div>
                  <div className="bc-body">
                    <h3>{p.title}</h3>
                    {p.excerpt && <p>{p.excerpt}</p>}
                    <div className="bc-meta">
                      <span>{p.author_name || "Digital Web Weaver"}</span>
                      <span className="bc-dot"></span>
                      <span>{p.read_minutes} min</span>
                      <span className="bc-dot"></span>
                      <span>{formatPostDate(p.published_at)}</span>
                    </div>
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
              <h2 style={{ marginTop: "18px" }}>
                Like what you&apos;re reading?
                <br />
                Let&apos;s work together.
              </h2>
              <p>
                See how the thinking in these posts becomes shipped software.
                Get a free consultation from the team behind the articles.
              </p>
              <div className="cta-actions">
                <Link href="/contact" className="btn btn-primary">
                  Start a project <span className="arr">↗</span>
                </Link>
                <Link href="/blog" className="btn btn-ghost">
                  Back to blog
                </Link>
              </div>
              <div className="cta-meta">
                <span>● Free consultation</span>
                <span>● 24-hour response</span>
                <span>● No commitment</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
