import type { Metadata } from "next";
import WebDesignVadodaraClient from "./WebDesignVadodaraClient";
import JsonLd from "@/components/seo/JsonLd";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://digitalwebweaver.com/#localbusiness-vadodara",
  name: "Digital Web Weaver",
  image: "https://digitalwebweaver.com/icon-512.png",
  url: "https://digitalwebweaver.com/web-design-vadodara/",
  email: "info@digitalwebweaver.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "207/208 Sanket Heights, Sunpharma Road, Atladra",
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
    { "@type": "State", name: "Gujarat" },
    { "@type": "Country", name: "India" },
  ],
  priceRange: "₹₹₹",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  hasMap: "https://maps.google.com/?q=Vadodara,Gujarat,India",
  serviceType: [
    "Web Development Vadodara",
    "Website Design Vadodara",
    "Custom Web Application Development",
    "E-commerce Development",
    "Mobile App Development Gujarat",
  ],
  availableLanguage: ["English", "Hindi", "Gujarati"],
  parentOrganization: { "@id": "https://digitalwebweaver.com/#organization" },
};

export const metadata: Metadata = {
  title: "Web Development Company in Vadodara, Gujarat",
  description:
    "Leading web development company in Vadodara. Custom websites, web apps, e-commerce, and mobile apps built by senior engineers for Vadodara businesses and global clients.",
  alternates: { canonical: "/web-design-vadodara/" },
  openGraph: { url: "/web-design-vadodara/", type: "website" },
};

export default function WebDesignVadodaraPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <WebDesignVadodaraClient />
    </>
  );
}
