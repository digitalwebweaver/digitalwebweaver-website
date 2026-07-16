import type { Metadata } from "next";
import PartnershipClient from "./PartnershipClient";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Partnership Programme — Digital Web Weaver",
  url: "https://digitalwebweaver.com/partnership/",
  description: "Referral, reseller, and technology partner programmes. Grow your business by connecting clients with a senior software engineering studio.",
  isPartOf: { "@id": "https://digitalwebweaver.com/#website" },
};

export const revalidate = 3600;
export const metadata: Metadata = {
  title: "Partnership Programme",
  description:
    "Partner with Digital Web Weaver. Referral, reseller, and technology partner programmes — grow your business by connecting clients with senior engineering that delivers.",
  alternates: { canonical: "/partnership/" },
  openGraph: { url: "/partnership/", type: "website" },
};

export default function PartnershipPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <PartnershipClient />
    </>
  );
}
