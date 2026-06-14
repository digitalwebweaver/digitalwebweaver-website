import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Digital Web Weaver",
    short_name: "Digital Web Weaver",
    description:
      "Expert web development, custom software, mobile apps, and AI solutions. 200+ projects delivered. Based in India, serving global clients.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f0f0f",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
