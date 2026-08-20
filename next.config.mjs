/** @type {import("next").NextConfig} */
const nextConfig = {
  // no "output: export" — /api/lead needs a server runtime (Vercel provides this)
  trailingSlash: true,
  images: { unoptimized: true }
};

export default nextConfig;
