import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import ServicePage from "@/components/sections/ServicePage";
import { wordpressDevelopment as data } from "@/data/pages/services/missing-services";

export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/wordpress-development/" },
  openGraph: { url: "/wordpress-development/", type: "website" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Digital Web Weaver",
  description: data.meta.description,
  url: "https://digitalwebweaver.com/wordpress-development/",
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
    "WordPress Development India",
    "WordPress Developer India",
    "WooCommerce Development India",
    "Custom WordPress Theme Development",
    "WordPress Plugin Development",
    "Headless WordPress Development",
    "WordPress Performance Optimisation",
  ],
  priceRange: "₹₹",
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
