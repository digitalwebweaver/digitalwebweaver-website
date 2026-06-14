import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import ServicePage from "@/components/sections/ServicePage";
import { websiteDevelopment as data } from "@/data/pages/services/missing-services";

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/website-development/" },
  openGraph: { url: "/website-development/", type: "website" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Digital Web Weaver",
  description: data.meta.description,
  url: "https://digitalwebweaver.com/website-development/",
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
    "Website Development India",
    "Business Website Development",
    "Professional Website Design India",
    "Corporate Website Development",
    "SME Website India",
    "Landing Page Development",
    "Website Redesign India",
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
