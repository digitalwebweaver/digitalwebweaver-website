/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",        // static HTML export — SEO-friendly, host anywhere
  trailingSlash: true,
  images: { unoptimized: true }
};

export default nextConfig;
