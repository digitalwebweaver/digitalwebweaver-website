import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import JsonLd from "@/components/seo/JsonLd";
import { ahmedabad as data } from "@/data/pages/local/city-pages";

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/web-design-ahmedabad/" },
  openGraph: { url: "/web-design-ahmedabad/", type: "website" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://digitalwebweaver.com/#localbusiness-ahmedabad",
  name: "Digital Web Weaver",
  image: "https://digitalwebweaver.com/icon-512.png",
  url: "https://digitalwebweaver.com/web-design-ahmedabad/",
  email: "info@digitalwebweaver.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390012",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Ahmedabad" },
    { "@type": "State", name: "Gujarat" },
    { "@type": "Country", name: "India" },
  ],
  serviceType: [
    "Web Development Ahmedabad",
    "Website Design Ahmedabad",
    "Custom Software Development Gujarat",
    "Mobile App Development Ahmedabad",
    "ERP Development Ahmedabad",
  ],
  availableLanguage: ["English", "Hindi", "Gujarati"],
  parentOrganization: { "@id": "https://digitalwebweaver.com/#organization" },
};

export default function WebDesignAhmedabadPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <ServicePage data={data} />
    </>
  );
}
