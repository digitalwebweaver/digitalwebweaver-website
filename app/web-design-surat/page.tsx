import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import JsonLd from "@/components/seo/JsonLd";
import { surat as data } from "@/data/pages/local/city-pages";

export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/web-design-surat/" },
  openGraph: { url: "/web-design-surat/", type: "website" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://digitalwebweaver.com/#localbusiness-surat",
  name: "Digital Web Weaver",
  image: "https://digitalwebweaver.com/icon-512.png",
  url: "https://digitalwebweaver.com/web-design-surat/",
  email: "info@digitalwebweaver.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390012",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Surat" },
    { "@type": "State", name: "Gujarat" },
    { "@type": "Country", name: "India" },
  ],
  serviceType: [
    "Web Development Surat",
    "Website Design Surat",
    "E-commerce Development Surat",
    "B2B Portal Development Gujarat",
    "Diamond Business Software Surat",
  ],
  availableLanguage: ["English", "Hindi", "Gujarati"],
  parentOrganization: { "@id": "https://digitalwebweaver.com/#organization" },
};

export default function WebDesignSuratPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <ServicePage data={data} />
    </>
  );
}
