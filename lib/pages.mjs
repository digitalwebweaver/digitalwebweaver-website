import fs from "fs";
import path from "path";
import { addIcons } from "./icons.mjs";
import { addLayout } from "./layout.mjs";

// Page data lives in content/: pages.json (+ pages-extra.json) holds each
// route's <head> data, content/pages/<file>.html the <main> markup, and
// header.html / footer.html the shared chrome.
const dir = path.join(process.cwd(), "content");
const read = (f) => fs.readFileSync(path.join(dir, f), "utf8");
const readJson = (f) => (fs.existsSync(path.join(dir, f)) ? JSON.parse(read(f)) : {});

const pages = { ...readJson("pages.json"), ...readJson("pages-extra.json") };

export const urls = () => Object.keys(pages);

export function getPage(url) {
  const p = pages[url];
  if (!p) return null;
  // blog posts get the reading-progress bar (styled in site.css, scroll-driven, no JS)
  const bar = url.startsWith("/blog/") && url !== "/blog/" ? `<div class="read-progress" aria-hidden="true"></div>` : "";
  return { ...p, main: bar + addLayout(addIcons(read(`pages/${p.file}.html`)), p.file) };
}

// Latest dateModified/datePublished found in the page's JSON-LD (real dates only); undefined if none.
export function lastModified(url) {
  const dates = [...pages[url].ld.join("").matchAll(/"date(?:Modified|Published)":"([0-9]{4}-[0-9]{2}-[0-9]{2})"/g)].map((m) => m[1]);
  return dates.sort().pop();
}

export const chrome = {
  header: () => read("header.html"),
  footer: () => read("footer.html"),
};

export function metadataFor(url) {
  const p = pages[url];
  const m = (p.robots || "").split(",").map((s) => s.trim());
  const robots = { index: !m.includes("noindex"), follow: !m.includes("nofollow") };
  for (const t of m) {
    const [k, v] = t.split(":");
    if (v !== undefined) robots[k] = /^-?\d+$/.test(v) ? Number(v) : v;
  }
  const og = { title: p.og.title || p.title, description: p.og.description || p.description };
  return {
    title: { absolute: p.title },
    description: p.description,
    alternates: {
      canonical: url,
      ...(p.alts.length && { languages: Object.fromEntries(p.alts) }),
    },
    robots,
    openGraph: {
      ...og, url, siteName: "Digital Web Weaver", type: "website", locale: p.og.locale || "en_US",
      images: [{ url: "/assets/og-cover.png", width: 1200, height: 630, alt: p.og.alt || p.title }],
    },
    twitter: { card: "summary_large_image", ...og, images: ["/assets/og-cover.png"] },
  };
}
