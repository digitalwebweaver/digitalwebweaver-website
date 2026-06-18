import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import JsonLd from "@/components/seo/JsonLd";
import { southAfrica as data } from "@/data/pages/local/city-pages";

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/software-development-company-south-africa/" },
  openGraph: { url: "/software-development-company-south-africa/", type: "website" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://digitalwebweaver.com/#localbusiness-za",
  name: "Digital Web Weaver",
  image: "https://digitalwebweaver.com/icon-512.png",
  url: "https://digitalwebweaver.com/software-development-company-south-africa/",
  email: "info@digitalwebweaver.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390012",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "Country", name: "South Africa" },
    { "@type": "City", name: "Johannesburg" },
    { "@type": "City", name: "Cape Town" },
  ],
  serviceType: [
    "Software Development South Africa",
    "Bespoke Software Development Johannesburg",
    "Outsourced Development Team South Africa",
    "Dedicated Developers South Africa",
    "E-commerce Development South Africa",
  ],
  availableLanguage: ["English"],
  parentOrganization: { "@id": "https://digitalwebweaver.com/#organization" },
};

export default function SoftwareDevelopmentCompanySouthAfricaPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <ServicePage data={data} />
    </>
  );
}
