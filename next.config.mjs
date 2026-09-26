// Legacy paths from the pre-Next.js incarnations of this domain (WordPress
// affiliate blog, domain-finder tool, old design templates) — see
// dead-urls-report.html. /inventory-management-system/ is still actively
// indexed by Google pointing at a 404; the rest are generic paths an old
// bookmark or backlink might still hit. Sources carry the trailing slash
// because trailingSlash:true below already 308s the bare form to this one
// before redirects() ever sees it — a bare-form entry here would be dead code.
const LEGACY_REDIRECTS = [
  ["/inventory-management-system/", "/crm-erp-systems/"],
  ["/about-company/", "/about/"],
  ["/about-our-team/", "/about/"],
  ["/about-us/", "/about/"],
  ["/contact-2/", "/contact/"],
  ["/news/", "/blog/"],
  ["/project/", "/portfolio/"],
  ["/projects/", "/portfolio/"],
  ["/sitemap/", "/"],
  ["/testimonial/", "/about/"],
  ["/testimonials/", "/about/"],
];

/** @type {import("next").NextConfig} */
const nextConfig = {
  // no "output: export" — /api/lead needs a server runtime (Vercel provides this)
  trailingSlash: true,
  images: { unoptimized: true },
  async redirects() {
    return LEGACY_REDIRECTS.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
