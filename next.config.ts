import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  compiler: {
    removeConsole: { exclude: ["error", "warn"] },
  },
  // Server-side 301 redirects (consolidates backlink equity; replaces the old
  // client-side JS redirects that served empty pages to crawlers).
  async redirects() {
    return [
      { source: "/apps", destination: "/products/", permanent: true },
      { source: "/vue-developer", destination: "/vuejs-developer/", permanent: true },
      { source: "/artificial-intelligence-development", destination: "/ai-automation/", permanent: true },
      { source: "/open-source-development", destination: "/wordpress-development/", permanent: true },
    ];
  },
};

export default nextConfig;
