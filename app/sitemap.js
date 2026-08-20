import { internalRoutes } from "@/lib/siteNav";

const base = "https://digitalwebweaver.com";

export default function sitemap() {
  return internalRoutes().map((r) => ({
    url: base + r,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "/" ? 1 : 0.8,
  }));
}
