import type { NextConfig } from "next";

// NOTE: `redirects()` is NOT supported with `output: "export"`.
// All 301 redirects below must be configured at the hosting/CDN layer:
//
// Nginx:
//   rewrite ^/apps/?$ /products/ permanent;
//   rewrite ^/vue-developer/?$ /vuejs-developer/ permanent;
//   rewrite ^/artificial-intelligence-development/?$ /ai-automation/ permanent;
//   rewrite ^/open-source-development/?$ /wordpress-development/ permanent;
//
// Cloudflare Pages (_redirects file in /out):
//   /apps/*  /products/:splat  301
//   /vue-developer/  /vuejs-developer/  301
//   /artificial-intelligence-development/  /ai-automation/  301
//   /open-source-development/  /wordpress-development/  301

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
};

export default nextConfig;
