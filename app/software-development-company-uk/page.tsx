import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import JsonLd from "@/components/seo/JsonLd";
import { unitedKingdom as data } from "@/data/pages/local/city-pages";

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/software-development-company-uk/" },
  openGraph: { url: "/software-development-company-uk/", type: "website" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://digitalwebweaver.com/#localbusiness-uk",
  name: "Digital Web Weaver",
  image: "https://digitalwebweaver.com/icon-512.png",
  url: "https://digitalwebweaver.com/software-development-company-uk/",
  email: "info@digitalwebweaver.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390012",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "City", name: "London" },
  ],
  serviceType: [
    "Software Development UK",
    "Bespoke Software Development London",
    "Outsourced Development Team UK",
    "Dedicated Developers UK",
    "E-commerce Development UK",
  ],
  availableLanguage: ["English"],
  parentOrganization: { "@id": "https://digitalwebweaver.com/#organization" },
};

export default function SoftwareDevelopmentCompanyUkPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <ServicePage data={data} />
    </>
  );
}
