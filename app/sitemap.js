import { internalRoutes } from "@/lib/siteNav";

const base = "https://digitalwebweaver.com";

// lastModified is intentionally omitted: this is a static export with no
// per-page edit-history source of truth, and a fabricated "now" on every
// URL is a worse signal than none. changeFrequency/priority are also
// ignored by Google but harmless to leave for other consumers.
export default function sitemap() {
  return internalRoutes().map((r) => ({
    url: base + r,
    changeFrequency: "monthly",
    priority: r === "/" ? 1 : 0.8,
  }));
}
