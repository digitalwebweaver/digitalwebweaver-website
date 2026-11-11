// Runs before `next dev` / `next build` (npm pre-scripts).
//  - minifies styles/site.css and the browser scripts into public/css, public/js (content-hashed names)
//  - minifies styles/critical.css (first-screen CSS, inlined into every page's <head>)
//  - writes lib/assets.json (file names the document template links to)
//  - writes public/sitemap.xml and public/robots.txt from the page list
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import esbuild from "esbuild";
import { urls, lastModified } from "../lib/pages.mjs";

const root = process.cwd();
const rel = (...p) => path.join(root, ...p);
const manifest = {};

const clean = (dir, ext) => { fs.mkdirSync(rel(dir), { recursive: true }); for (const f of fs.readdirSync(rel(dir))) if (f.endsWith(ext)) fs.rmSync(rel(dir, f)); };
clean("public/css", ".css"); clean("public/js", ".js");

// CSS
const css = esbuild.transformSync(fs.readFileSync(rel("styles/site.css"), "utf8"), { loader: "css", minify: true }).code;
const hash = (s) => crypto.createHash("md5").update(s).digest("hex").slice(0, 8);
manifest.css = `/css/site.${hash(css)}.css`;
fs.writeFileSync(rel("public", manifest.css), css);
const critPath = rel("styles/critical.css");
manifest.critical = fs.existsSync(critPath) ? esbuild.transformSync(fs.readFileSync(critPath, "utf8"), { loader: "css", minify: true }).code : "";

// browser JS: one small script for every page + the project-brief modal, loaded on first use
const out = esbuild.buildSync({
  entryPoints: { site: rel("components/boot.js"), modal: rel("components/projectModal.js") },
  bundle: true, minify: true, format: "esm", target: "es2020", write: false, outdir: rel("public/js"), entryNames: "[name].[hash]", metafile: true,
});
for (const f of out.outputFiles) fs.writeFileSync(f.path, f.contents);
for (const o of Object.keys(out.metafile.outputs)) {
  const name = path.basename(o);
  if (name.startsWith("site.")) manifest.js = `/js/${name}`;
  if (name.startsWith("modal.")) manifest.modal = `/js/${name}`;
}
fs.writeFileSync(rel("lib/assets.json"), JSON.stringify(manifest, null, 1));

// sitemap + robots (static files, same content the Next metadata routes produced)
const base = "https://digitalwebweaver.com";
const smap = urls().map((u) => `<url><loc>${base}${u}</loc>${lastModified(u) ? `<lastmod>${lastModified(u)}</lastmod>` : ""}</url>`).join("");
fs.writeFileSync(rel("public/sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${smap}</urlset>\n`);
const bots = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Applebot-Extended"];
fs.writeFileSync(rel("public/robots.txt"), ["User-agent: *\nAllow: /", ...bots.map((b) => `User-agent: ${b}\nAllow: /`)].join("\n\n") + `\n\nSitemap: ${base}/sitemap.xml\n`);

console.log("assets:", manifest.css, manifest.js, manifest.modal, "critical", manifest.critical.length + "B", "| sitemap", urls().length, "urls");
