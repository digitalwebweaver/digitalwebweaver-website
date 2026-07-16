import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import ServicePage from "@/components/sections/ServicePage";
import { customSoftwareDevelopment as data } from "@/data/pages/services/missing-services";

export const revalidate = 3600;
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/custom-software-development/" },
  openGraph: { url: "/custom-software-development/", type: "website" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Digital Web Weaver",
  description: data.meta.description,
  url: "https://digitalwebweaver.com/custom-software-development/",
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
    "Custom Software Development",
    "Bespoke Software India",
    "ERP Development India",
    "CRM Development India",
    "Business Software India",
    "Legacy System Replacement",
    "Workflow Automation Software",
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
