import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import JsonLd from "@/components/seo/JsonLd";
import { gujarat as data } from "@/data/pages/local/city-pages";

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/web-design-gujarat/" },
  openGraph: { url: "/web-design-gujarat/", type: "website" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://digitalwebweaver.com/#localbusiness-gujarat",
  name: "Digital Web Weaver",
  image: "https://digitalwebweaver.com/icon-512.png",
  url: "https://digitalwebweaver.com/web-design-gujarat/",
  email: "info@digitalwebweaver.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390012",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.3072,
    longitude: 73.1812,
  },
  areaServed: [
    { "@type": "City", name: "Vadodara" },
    { "@type": "City", name: "Ahmedabad" },
    { "@type": "City", name: "Surat" },
    { "@type": "City", name: "Rajkot" },
    { "@type": "City", name: "Gandhinagar" },
    { "@type": "State", name: "Gujarat" },
    { "@type": "Country", name: "India" },
  ],
  serviceType: [
    "Web Development Gujarat",
    "Website Design Gujarat",
    "Custom Software Development India",
    "Mobile App Development Gujarat",
    "ERP Software Gujarat",
    "SaaS Development India",
  ],
  availableLanguage: ["English", "Hindi", "Gujarati"],
  parentOrganization: { "@id": "https://digitalwebweaver.com/#organization" },
};

export default function WebDesignGujaratPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <ServicePage data={data} />
    </>
  );
}
