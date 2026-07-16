import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import JsonLd from "@/components/seo/JsonLd";
import { wpCourierTrackingPlugin as data } from "@/data/pages/products/products";
export const revalidate = 3600;
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/wordpress-courier-tracking-plugin/" },
  openGraph: { url: "/wordpress-courier-tracking-plugin/", type: "website" },
};

// SoftwareApplication schema so search/AI engines recognise this as a discrete
// WordPress product. Price/rating intentionally omitted until real values exist
// (fabricated aggregateRating would violate Google's structured-data policy).
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "WordPress Courier Tracking Plugin",
  applicationCategory: "BusinessApplication",
  operatingSystem: "WordPress",
  description: data.meta.description,
  url: "https://digitalwebweaver.com/wordpress-courier-tracking-plugin/",
  image: "https://digitalwebweaver.com/og-image.png",
  publisher: { "@id": "https://digitalwebweaver.com/#organization" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={softwareSchema} />
      <ServicePage data={data} />
    </>
  );
}
