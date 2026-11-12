const immutable = [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }];

/** @type {import("next").NextConfig} */
const nextConfig = {
  // no "output: export" — /api/lead needs a server runtime (Vercel provides this)
  trailingSlash: true,
  poweredByHeader: false,
  images: { unoptimized: true },
  // renamed pages: permanent redirects keep old links and search rankings working
  async redirects() {
    return [{ source: "/nivasone/", destination: "/nivasgate/", permanent: true }];
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
