import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import ServicePage from "@/components/sections/ServicePage";
import { shopifyDevelopment as data } from "@/data/pages/services/missing-services";

export const revalidate = 3600;
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/shopify-development/" },
  openGraph: { url: "/shopify-development/", type: "website" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Digital Web Weaver",
  description: data.meta.description,
  url: "https://digitalwebweaver.com/shopify-development/",
  telephone: "+91-9712515105",
  email: "info@digitalwebweaver.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "207/208 Sanket Heights, Sunpharma Road, Atladra",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390012",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 22.3072, longitude: 73.1812 },
  areaServed: [
    { "@type": "City", name: "Vadodara" },
    { "@type": "State", name: "Gujarat" },
    { "@type": "Country", name: "India" },
  ],
  serviceType: [
    "Shopify Development India",
    "Shopify Developer India",
    "Shopify Plus Development",
    "Custom Shopify Theme India",
    "WooCommerce to Shopify Migration",
    "Shopify App Development",
    "Shopify Store Setup India",
  ],
  priceRange: "₹₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Bank Transfer, UPI, Cheque",
};

export default function Page() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <ServicePage data={data} />
    </>
  );
}
