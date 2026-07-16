import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import JsonLd from "@/components/seo/JsonLd";
import { southAfrica as data } from "@/data/pages/local/city-pages";

export const revalidate = 3600;
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/software-development-company-south-africa/" },
  openGraph: { url: "/software-development-company-south-africa/", type: "website" },
};

// Geo-targeted Service schema: India-based studio SERVING South Africa, not a
// ZA-local business — avoids the LocalBusiness/foreign-address mismatch while
// keeping areaServed + serviceType signals. Provider = the India org.
const geoServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://digitalwebweaver.com/software-development-company-south-africa/#service",
  name: "Software Development Company for South African Businesses",
  url: "https://digitalwebweaver.com/software-development-company-south-africa/",
  provider: { "@id": "https://digitalwebweaver.com/#organization" },
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
};

export default function SoftwareDevelopmentCompanySouthAfricaPage() {
  return (
    <>
      <JsonLd data={geoServiceSchema} />
      <ServicePage data={data} />
    </>
  );
}
