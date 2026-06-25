import type { Metadata } from "next";
import Link from "next/link";
import BlogFilters from "./BlogFilters";
import NewsletterForm from "./NewsletterForm";
import CountStat from "@/components/ui/CountStat";
import { getPublishedPosts, formatPostDate, gradientClass } from "@/lib/posts";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Software Development Blog",
  description:
    "Web development, SaaS, AI, and mobile app insights from the Digital Web Weaver team — practical engineering for founders and product teams.",
  alternates: { canonical: "/blog/" },
  openGraph: { url: "/blog/", type: "website" },
};

export default async function BlogPage() {
  const posts = await getPublishedPosts();
  const [featured, ...rest] = posts;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Digital Web Weaver Blog",
    url: "https://digitalwebweaver.com/blog/",
    publisher: { "@id": "https://digitalwebweaver.com/#organization" },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `https://digitalwebweaver.com/blog/${p.slug}/`,
      datePublished: p.published_at || p.created_at,
      author: { "@type": "Person", name: p.author_name || "Kamlesh Nishad" },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      {/* ===== HERO ===== */}
      <section className="page-hero" style={{ paddingBottom: "56px" }}>
        <div className="wrap">
          <div className="breadcrumb reveal">
            <Link href="/">Home</Link>
            <span className="sep">/</span>Blog
          </div>
          <span className="eyebrow reveal">Ideas &amp; perspectives</span>
          <h1
            className="reveal"
            style={{ marginTop: "18px", maxWidth: "760px" }}
          >
            Ideas &amp; <span className="accent">perspectives</span>
            <br />
            from our team
          </h1>
          <p className="lead reveal" style={{ maxWidth: "580px" }}>
            Engineering notes, product thinking, and honest takes on building
            software — from the team that ships 200+ systems a year.
          </p>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="sec" style={{ paddingTop: "0" }}>
        <div className="wrap">
          {/* Interactive Filters */}
          <BlogFilters />

          {posts.length === 0 ? (
            <div className="reveal" style={{ textAlign: "center", padding: "80px 20px", color: "var(--muted)" }}>
              <p style={{ fontSize: "16px" }}>No articles published yet — check back soon.</p>
            </div>
          ) : (
            <>
              {/* Featured */}
              {featured && (
                <Link href={`/blog/${featured.slug}`} className="blog-featured reveal" style={{ textDecoration: "none", color: "inherit" }}>
                  <div
                    className={`bf-vis ${gradientClass(0)}`}
                    style={featured.cover_image ? { backgroundImage: `url(${featured.cover_image})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
                  ></div>
                  <div className="bf-body">
                    {featured.tag && <span className="bf-label">{featured.tag}</span>}
                    <h2
                      style={{
                        fontSize: "clamp(1.5rem,2.8vw,2.1rem)",
                        fontWeight: 600,
                        lineHeight: 1.15,
                        letterSpacing: "-.02em",
                        margin: "18px 0 16px",
                      }}
                    >
                      {featured.title}
                    </h2>
                    {featured.excerpt && <p>{featured.excerpt}</p>}
                    <div className="bf-meta">
                      <div className="av" style={{ width: "34px", height: "34px", fontSize: "12px" }}>
                        {featured.author_initials || "DW"}
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: "14px" }}>
                          {featured.author_name || "Digital Web Weaver"}
                        </div>
                        <div style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--faint)", letterSpacing: ".08em" }}>
                          {featured.read_minutes} min read &nbsp;·&nbsp; {formatPostDate(featured.published_at)}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* Grid */}
              {rest.length > 0 && (
                <div className="blog-grid" style={{ marginTop: "48px" }}>
                  {rest.map((post, i) => (
                    <Link href={`/blog/${post.slug}`} key={post.id} className="blog-card reveal" style={{ textDecoration: "none", color: "inherit" }}>
                      <div
                        className={`bc-vis ${gradientClass(i + 1)}`}
                        style={post.cover_image ? { backgroundImage: `url(${post.cover_image})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
                      >
                        {post.tag && <span className="bc-tag">{post.tag}</span>}
                      </div>
                      <div className="bc-body">
                        <h3>{post.title}</h3>
                        {post.excerpt && <p>{post.excerpt}</p>}
                        <div className="bc-meta">
                          <span>{post.author_name || "Digital Web Weaver"}</span>
                          <span className="bc-dot"></span>
                          <span>{post.read_minutes} min</span>
                          <span className="bc-dot"></span>
                          <span>{formatPostDate(post.published_at)}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="blog-nl reveal">
            <div className="bn-content">
              <span className="eyebrow">Newsletter</span>
              <h2 style={{ marginTop: "18px" }}>
                Engineering notes, once a month
              </h2>
              <p>
                Real insights from production systems — architecture decisions,
                post-mortems, and the thinking behind the code. No fluff, no
                AI-generated filler. Unsubscribe any time.
              </p>
              <ul className="bn-list">
                <li>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path
                      d="M9 12l2 2 4-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                  One email per month
                </li>
                <li>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path
                      d="M9 12l2 2 4-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                  Written by engineers, not marketers
                </li>
                <li>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path
                      d="M9 12l2 2 4-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                  3,200+ engineers subscribed
                </li>
              </ul>
              {/* Client form component */}
              <NewsletterForm />
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--faint)",
                  marginTop: "14px",
                  fontFamily: "var(--mono)",
                }}
              >
                No spam. Unsubscribe any time.
              </p>
            </div>
            <div className="bn-stat-col">
              <div className="bn-stat">
                <CountStat target={3200} suffix="+" className="bns-n" />
                <div className="bns-l">Subscribers</div>
              </div>
              <div className="bn-stat">
                <CountStat target={48} suffix="" className="bns-n" />
                <div className="bns-l">Issues published</div>
              </div>
              <div className="bn-stat">
                <CountStat target={62} suffix="%" className="bns-n" />
                <div className="bns-l">Open rate</div>
              </div>
              <div className="bn-stat">
                <CountStat target={1} suffix="" className="bns-n" />
                <div className="bns-l">Email / month</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section>
        <div className="wrap">
          <div className="cta reveal">
            <div className="cta-inner">
              <span
                className="eyebrow"
                style={{ color: "rgba(255,255,255,.85)" }}
              >
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
                <Link href="/portfolio" className="btn btn-ghost">
                  See our work
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
