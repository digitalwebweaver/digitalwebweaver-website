// Central site map — single source of truth for the sidebar/explorer,
// footer link columns, and sitemap.js. Internal pages use a local path;
// pages not yet rebuilt in this app point at the live site so the menu
// stays complete and correct while each phase ships more local pages.
// When a page is rebuilt locally, flip its href from the live URL to
// the local path — nothing else needs to change.

export const siteNav = {
  root: { label: "Home.tsx", href: "/" },
  groups: [
    {
      id: "engineering",
      label: "engineering/",
      items: [
        { label: "Web Development", href: "/web-development/" },
        { label: "Custom Web Apps", href: "/custom-web-apps/" },
        { label: "E-Commerce", href: "/ecommerce-development/" },
        { label: "UI / UX Design", href: "/ui-ux-design/" },
        { label: "Mobile Apps", href: "/mobile-app-development/" },
        { label: "AI & Automation", href: "/ai-automation/" },
        { label: "Cloud & DevOps", href: "/cloud-devops/" },
        { label: "Progressive Web Apps", href: "/services/progressive-web-apps/" },
        { label: "Custom Software", href: "/custom-software-development/" },
        { label: "All Services", href: "/services/" },
      ],
    },
    {
      id: "hire",
      label: "hire/",
      items: [
        { label: "Hire Dedicated", href: "/hire-dedicated-resource/" },
        { label: "React / Next.js", href: "/react-developer/" },
        { label: "Node.js", href: "/nodejs-developer/" },
        { label: "Laravel / PHP", href: "/laravel-developer/" },
        { label: "Python / Django", href: "/python-developer/" },
        { label: "MySQL / PostgreSQL", href: "/stack/databases/" },
        { label: "AWS / Cloud", href: "/stack/aws/" },
      ],
    },
    {
      id: "solutions",
      label: "solutions/",
      items: [
        { label: "MVP Development", href: "/mvp-development/" },
        { label: "SaaS Products", href: "/saas-development/" },
        { label: "ERP Systems", href: "/crm-erp-systems/" },
        { label: "Business Intelligence", href: "/solutions/business-intelligence/" },
        { label: "Cybersecurity Audit", href: "/solutions/cybersecurity/" },
      ],
    },
    {
      id: "products",
      label: "products/",
      items: [
        { label: "EduCore", href: "/educore/" },
        { label: "Manchify", href: "/manchify/" },
        { label: "GlowDesk", href: "/glowdesk/" },
        { label: "QuickBite", href: "/quickbite/" },
        { label: "RideEasy", href: "/rideeasy/" },
        { label: "SchoolHub", href: "/schoolhub/" },
        { label: "ClinicFlow", href: "/clinicflow/" },
        { label: "VetCare", href: "/vetcare/" },
        { label: "SalonBook", href: "/salonbook/" },
        { label: "PestTrack", href: "/pesttrack/" },
        { label: "ChemSupply", href: "/chemsupply/" },
        { label: "ClinicVoice AI", href: "/clinicvoice-ai/" },
        { label: "ChatFlow AI", href: "/chatflow-ai/" },
        { label: "TeleCare", href: "/telecare/" },
        { label: "InsureDesk", href: "/insuredesk/" },
        { label: "CallMate AI", href: "/callmate-ai/" },
        { label: "SolarFlow", href: "/solarflow/" },
      ],
    },
    {
      id: "industries",
      label: "industries/",
      items: [
        { label: "FinTech", href: "/fintech/" },
        { label: "HealthTech", href: "/healthcare/" },
        { label: "E-commerce", href: "/retail-ecommerce/" },
        { label: "Logistics", href: "/logistics/" },
        { label: "EdTech", href: "/edtech/" },
        { label: "Real Estate", href: "/real-estate/" },
      ],
    },
    {
      id: "locations",
      label: "locations/",
      items: [
        { label: "Vadodara · HQ", href: "/web-design-vadodara/" },
        { label: "Ahmedabad", href: "/web-design-ahmedabad/" },
        { label: "Surat", href: "/web-design-surat/" },
        { label: "Rajkot", href: "/web-design-rajkot/" },
        { label: "Gujarat", href: "/web-design-gujarat/" },
        { label: "United Kingdom", href: "/software-development-company-uk/" },
        { label: "South Africa", href: "/software-development-company-south-africa/" },
        { label: "Abidjan (FR)", href: "/agence-developpement-web-abidjan/" },
      ],
    },
    {
      id: "company",
      label: "company/",
      items: [
        { label: "About us", href: "/about/" },
        { label: "Portfolio", href: "/portfolio/" },
        { label: "Products", href: "/products/" },
        { label: "Cost Estimator", href: "/cost-estimator/" },
        { label: "Blog", href: "/blog/" },
        { label: "Careers", href: "/careers/" },
        { label: "Contact", href: "/contact/" },
        { label: "Privacy Policy", href: "/privacy-policy/" },
      ],
    },
  ],
};

// Individual blog posts aren't curated into the nav tree (only the /blog/
// index is), so internalRoutes() lists them separately — otherwise they're
// invisible to sitemap.js despite being fully indexable pages.
export const blogPosts = [
  "/blog/ai-automation-gujarat-sme/",
  "/blog/choose-web-development-company-vadodara/",
  "/blog/crm-software-sales-teams-vadodara/",
  "/blog/erp-software-gujarat-business/",
  "/blog/from-fast-food-to-fine-dining-the-best-food-delivery-apps-in-south-africa/",
  "/blog/hospital-clinic-software-vadodara/",
  "/blog/mobile-app-development-vadodara/",
  "/blog/saas-development-india-guide/",
  "/blog/school-management-software-gujarat/",
  "/blog/website-cost-vadodara-2026/",
  "/blog/wordpress-vs-custom-website/",
];

// Flattened list of every locally-built (internal) route — used by sitemap.js
// and to decide whether a nav link should render as <Link> (internal, no
// reload) or a plain <a> (external, still points at the live site).
export function internalRoutes() {
  const routes = [siteNav.root.href, ...blogPosts];
  for (const group of siteNav.groups) {
    for (const item of group.items) {
      if (item.href.startsWith("/")) routes.push(item.href);
    }
  }
  return Array.from(new Set(routes));
}
