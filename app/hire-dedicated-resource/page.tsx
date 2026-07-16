import type { Metadata } from "next";
import HireDedicatedClient from "./HireDedicatedClient";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hire Dedicated Developers",
  description: "Hire dedicated software developers from India — full-stack, mobile, AI, and DevOps engineers with flexible 1-to-12 month engagements.",
  provider: { "@id": "https://digitalwebweaver.com/#organization" },
  url: "https://digitalwebweaver.com/hire-dedicated-resource/",
  areaServed: ["India", "United Kingdom", "South Africa"],
};

export const revalidate = 3600;
export const metadata: Metadata = {
  title: "Hire Dedicated Developers India",
  description:
    "Hire dedicated developers from India. Scale your team with vetted full-stack, mobile, AI, and DevOps engineers — flexible 1-to-12 month engagements.",
  alternates: { canonical: "/hire-dedicated-resource/" },
  openGraph: { url: "/hire-dedicated-resource/", type: "website" },
};

export default function HireDedicatedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <HireDedicatedClient />
    </>
  );
}
