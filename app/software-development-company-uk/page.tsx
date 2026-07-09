import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import JsonLd from "@/components/seo/JsonLd";
import { unitedKingdom as data } from "@/data/pages/local/city-pages";

export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/software-development-company-uk/" },
  openGraph: { url: "/software-development-company-uk/", type: "website" },
};

// Geo-targeted Service schema: we are an India-based studio SERVING the UK, not
// a UK-local business — this avoids the LocalBusiness/foreign-address mismatch
// while keeping areaServed + serviceType signals. Provider = the India org.
const geoServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://digitalwebweaver.com/software-development-company-uk/#service",
  name: "Software Development Company for UK Businesses",
  serviceType: "Software Development",
  url: "https://digitalwebweaver.com/software-development-company-uk/",
  provider: { "@id": "https://digitalwebweaver.com/#organization" },
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "City", name: "London" },
  ],
  availableLanguage: ["English"],
};

export default function SoftwareDevelopmentCompanyUkPage() {
  return (
    <>
      <JsonLd data={geoServiceSchema} />
      <ServicePage data={data} />
    </>
  );
}
