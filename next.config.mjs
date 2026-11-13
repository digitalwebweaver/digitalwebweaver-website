const immutable = [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }];

/** @type {import("next").NextConfig} */
const nextConfig = {
  // no "output: export" — /api/lead needs a server runtime (Vercel provides this)
  trailingSlash: true,
  poweredByHeader: false,
  images: { unoptimized: true },
  // renamed pages: permanent redirects keep old links and search rankings working
  async redirects() {
    // old URLs still reported as 404 in Search Console (Coverage export 2026-11-12) -> closest live page
    const old = {
      "/nivasone/": "/nivasgate/",
      "/contact-us/": "/contact/",
      "/contact-us-5/": "/contact/",
      "/about-us/": "/about/",
      "/our-clients/": "/portfolio/",
      "/hire-nodejs-developer/": "/nodejs-developer/",
      "/hire-php-developers/": "/laravel-developer/",
      "/laravel-development/": "/laravel-developer/",
      "/python-development-company/": "/python-developer/",
      "/hire-devops-engineer/": "/cloud-devops/",
      "/devops-engineer/": "/cloud-devops/",
      "/fullstack-developer/": "/hire-dedicated-resource/",
      "/frontend-developer/": "/hire-dedicated-resource/",
      "/dotnet-developer/": "/hire-dedicated-resource/",
      "/android-developer/": "/mobile-app-development/",
      "/android-app-development/": "/mobile-app-development/",
      "/react-native-app-developement/": "/mobile-app-development/",
      "/mobile-app-development-company-in-vadodara/": "/mobile-app-development/",
      "/custom-crm-development/": "/crm-erp-systems/",
      "/ecommerce-development-company-in-vadodara/": "/ecommerce-development/",
      "/food-delivery-app/": "/quickbite/",
      "/food-delivery-app-development/": "/quickbite/",
      "/from-fast-food-to-fine-dining-the-best-food-delivery-apps-in-south-africa/": "/quickbite/",
      "/library-management-system/": "/schoolhub/",
      "/vehicle-management-system/": "/logistics/",
      "/wordpress-logistics-courier-tracking-plugin/": "/logistics/",
      "/portfolio/logicore-logistics-erp/": "/logistics/",
      "/portfolio/nextsensems/": "/portfolio/nextsense/",
      "/portfolio/trip-operator/": "/portfolio/",
      "/services/enterprise-applications/": "/custom-software-development/",
      "/services/app-modernization/": "/custom-software-development/",
      "/services/database-design/": "/stack/databases/",
      "/services/api-integrations/": "/web-development/",
      "/services/performance-optimization/": "/web-development/",
      "/wordpress-development/": "/web-development/",
      "/category/website-designing/": "/web-development/",
      "/advance-seo-company-vadodara/": "/web-design-vadodara/",
    };
    return [
      ...Object.entries(old).map(([source, destination]) => ({ source, destination, permanent: true })),
      { source: "/project/:slug*/", destination: "/portfolio/", permanent: true },
      { source: "/portfolio-category/:slug*/", destination: "/portfolio/", permanent: true },
    ];
  },
  async headers() {
    return [
      // content-hashed by scripts/build-assets.mjs, so safe to cache forever
      { source: "/css/:path*", headers: immutable },
      { source: "/js/:path*", headers: immutable },
      { source: "/fonts/:path*", headers: immutable },
      { source: "/assets/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }] },
    ];
  },
};

export default nextConfig;
