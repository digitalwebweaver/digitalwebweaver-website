import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/posts";
import { getPublishedProjects } from "@/lib/projects";

export const dynamic = "force-dynamic";

const base = "https://digitalwebweaver.com";

type Entry = {
  url: string;
  lastModified: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

function url(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly"
): Entry {
  return {
    url: `${base}${path}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency,
    priority,
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublishedPosts();
  const postEntries: Entry[] = posts.map((p) => ({
    url: `${base}/blog/${p.slug}/`,
    lastModified: new Date(p.updated_at).toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const projects = await getPublishedProjects();
  const projectEntries: Entry[] = projects.map((p) => ({
    url: `${base}/portfolio/${p.slug}/`,
    lastModified: new Date(p.updated_at).toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    // ── Homepage ──────────────────────────────────────────────────────────────
    url("/", 1.0, "weekly"),

    // ── Tools / lead magnets ──────────────────────────────────────────────────
    url("/cost-estimator/", 0.85, "monthly"),

    // ── Primary local + core service pages ───────────────────────────────────
    url("/web-design-vadodara/", 0.9),
    url("/web-design-gujarat/", 0.9),
    url("/web-design-ahmedabad/", 0.85),
    url("/web-design-surat/", 0.85),
    url("/web-design-rajkot/", 0.85),
    url("/software-development-company-uk/", 0.85),
    url("/software-development-company-south-africa/", 0.85),
    url("/agence-developpement-web-abidjan/", 0.85),
    url("/web-development/", 0.9),

    // ── Core service pages ────────────────────────────────────────────────────
    url("/saas-development/", 0.85),
    url("/mobile-app-development/", 0.85),
    url("/ai-automation/", 0.85),
    url("/mvp-development/", 0.85),
    url("/ecommerce-development/", 0.85),
    url("/crm-erp-systems/", 0.85),
    url("/custom-web-apps/", 0.8),
    url("/ui-ux-design/", 0.8),
    url("/cloud-devops/", 0.8),

    // ── Hire dedicated resource pages ─────────────────────────────────────────
    url("/hire-dedicated-resource/", 0.85),
    url("/react-developer/", 0.8),
    url("/nodejs-developer/", 0.8),
    url("/laravel-developer/", 0.8),
    url("/php-developer/", 0.8),
    url("/python-developer/", 0.8),
    url("/flutter-developer/", 0.75),
    url("/react-native-developer/", 0.75),
    url("/android-developer/", 0.75),
    url("/ios-developer/", 0.75),
    url("/vuejs-developer/", 0.75),
    url("/angular-developer/", 0.75),
    url("/frontend-developer/", 0.75),
    url("/fullstack-developer/", 0.75),
    url("/devops-engineer/", 0.7),
    url("/codeigniter-development/", 0.7),

    // ── Industry pages ────────────────────────────────────────────────────────
    url("/fintech/", 0.75),
    url("/healthcare/", 0.75),
    url("/edtech/", 0.7),
    url("/logistics/", 0.7),
    url("/manufacturing/", 0.7),
    url("/real-estate/", 0.7),
    url("/retail-ecommerce/", 0.7),
    url("/saas-startups/", 0.7),

    // ── Ready-made product / system pages ────────────────────────────────────
    url("/food-delivery-app/", 0.7),
    url("/inventory-management-system/", 0.7),
    url("/laundry-management-system/", 0.7),
    url("/learning-management-system/", 0.7),
    url("/wordpress-courier-tracking-plugin/", 0.65),
    url("/wordpress-logistics-courier-tracking-plugin/", 0.65),

    // ── Ready Apps (product line) ─────────────────────────────────────────────
    url("/educore/", 0.65),
    url("/solarops/", 0.65),
    url("/glowdesk/", 0.65),
    url("/quickbite/", 0.65),
    url("/rideeasy/", 0.65),
    url("/schoolhub/", 0.65),
    url("/clinicflow/", 0.65),
    url("/vetcare/", 0.75),
    url("/salonbook/", 0.65),
    url("/pesttrack/", 0.65),
    url("/chemsupply/", 0.65),
    url("/clinicvoice-ai/", 0.65),
    url("/chatflow-ai/", 0.65),
    url("/telecare/", 0.65),
    url("/insuredesk/", 0.65),
    url("/callmate-ai/", 0.65),
    url("/solarflow/", 0.8),

    // ── New service pages (Phase 6) ───────────────────────────────────────────
    url("/custom-software-development/", 0.85),
    url("/website-development/", 0.85),
    url("/web-application-development/", 0.85),
    url("/wordpress-development/", 0.8),
    url("/shopify-development/", 0.8),

    // ── Sub-service pages ─────────────────────────────────────────────────────
    url("/services/", 0.7),
    url("/services/api-development/", 0.65),
    url("/services/api-integrations/", 0.65),
    url("/services/app-modernization/", 0.65),
    url("/services/corporate-websites/", 0.65),
    url("/services/database-design/", 0.65),
    url("/services/enterprise-applications/", 0.65),
    url("/services/ios-development/", 0.65),
    url("/services/microservices/", 0.65),
    url("/services/performance-optimization/", 0.65),
    url("/services/progressive-web-apps/", 0.65),

    // ── Company pages ─────────────────────────────────────────────────────────
    url("/about/", 0.7),
    url("/stack/", 0.6),
    url("/portfolio/", 0.75, "weekly"),
    url("/blog/", 0.7, "weekly"),
    url("/contact/", 0.7, "yearly"),
    url("/products/", 0.65),
    url("/manchify/", 0.7),
    url("/partnership/", 0.6),
    url("/careers/", 0.6),

    // EXCLUDED (noindex): /privacy-policy/, /solutions/*

    ...projectEntries,
    ...postEntries,
  ];
}
