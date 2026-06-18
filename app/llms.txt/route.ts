import { getPublishedPosts } from "@/lib/posts";
import { getPublishedProjects } from "@/lib/projects";

export const dynamic = "force-dynamic";

const BASE = "https://digitalwebweaver.com";

// /llms.txt — a curated, plain-text/markdown map of the site for LLMs and AI
// answer engines (the emerging llms.txt standard). Helps Gemini, ChatGPT,
// Perplexity, Claude, etc. understand what the site is and find the best pages.
export async function GET() {
  const [posts, projects] = await Promise.all([
    getPublishedPosts(100),
    getPublishedProjects(100),
  ]);

  const lines: string[] = [];

  lines.push("# Digital Web Weaver");
  lines.push("");
  lines.push(
    "> Senior software engineering studio in Vadodara, Gujarat, India — building " +
      "custom websites, web apps, mobile apps, SaaS platforms, ERP/CRM systems, and " +
      "AI automation for clients across India, the UK, South Africa, and West Africa. " +
      "Established 2013. Honest pricing, full source-code ownership."
  );
  lines.push("");
  lines.push("- Website: " + BASE);
  lines.push("- Contact: info@digitalwebweaver.com · +91-9712515105 · WhatsApp +91-9722915105");
  lines.push("- Location: 207/208 Sanket Heights, Sunpharma Road, Atladra, Vadodara 390012, Gujarat, India");
  lines.push("- Areas served: India, United Kingdom, South Africa, Ivory Coast");
  lines.push("");

  lines.push("## Core services");
  const services: [string, string][] = [
    ["Web development", "/web-development/"],
    ["Custom software development", "/custom-software-development/"],
    ["Website development", "/website-development/"],
    ["Web application development", "/web-application-development/"],
    ["Mobile app development", "/mobile-app-development/"],
    ["E-commerce development", "/ecommerce-development/"],
    ["SaaS development", "/saas-development/"],
    ["AI & automation", "/ai-automation/"],
    ["CRM & ERP systems", "/crm-erp-systems/"],
    ["UI/UX design", "/ui-ux-design/"],
    ["Cloud & DevOps", "/cloud-devops/"],
    ["WordPress development", "/wordpress-development/"],
  ];
  for (const [label, href] of services) lines.push(`- [${label}](${BASE}${href})`);
  lines.push("");

  lines.push("## Key pages");
  const pages: [string, string][] = [
    ["Services overview", "/services/"],
    ["Products (ready-made apps)", "/products/"],
    ["Portfolio & case studies", "/portfolio/"],
    ["About", "/about/"],
    ["Contact", "/contact/"],
    ["Hire dedicated developers", "/hire-dedicated-resource/"],
  ];
  for (const [label, href] of pages) lines.push(`- [${label}](${BASE}${href})`);
  lines.push("");

  lines.push("## Local / regional pages");
  const local: [string, string][] = [
    ["Web design in Vadodara", "/web-design-vadodara/"],
    ["Web design in Gujarat", "/web-design-gujarat/"],
    ["Web design in Ahmedabad", "/web-design-ahmedabad/"],
    ["Web design in Surat", "/web-design-surat/"],
    ["Web design in Rajkot", "/web-design-rajkot/"],
    ["Software development company UK", "/software-development-company-uk/"],
    ["Software development company South Africa", "/software-development-company-south-africa/"],
    ["Agence de développement web Abidjan", "/agence-developpement-web-abidjan/"],
  ];
  for (const [label, href] of local) lines.push(`- [${label}](${BASE}${href})`);
  lines.push("");

  if (projects.length) {
    lines.push("## Portfolio / case studies");
    for (const p of projects) {
      const desc = (p.excerpt || "").replace(/\s+/g, " ").trim();
      lines.push(`- [${p.title}](${BASE}/portfolio/${p.slug}/)${desc ? " — " + desc : ""}`);
    }
    lines.push("");
  }

  if (posts.length) {
    lines.push("## Blog articles");
    for (const b of posts) {
      const desc = (b.excerpt || "").replace(/\s+/g, " ").trim();
      lines.push(`- [${b.title}](${BASE}/blog/${b.slug}/)${desc ? " — " + desc : ""}`);
    }
    lines.push("");
  }

  lines.push("## Sitemap");
  lines.push(`- ${BASE}/sitemap.xml`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
