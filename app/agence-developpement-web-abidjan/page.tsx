import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import JsonLd from "@/components/seo/JsonLd";
import { ivoryCoast as data } from "@/data/pages/local/city-pages";

export const revalidate = 3600;
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/agence-developpement-web-abidjan/" },
  openGraph: { url: "/agence-developpement-web-abidjan/", type: "website", locale: "fr_FR" },
};

// Geo-targeted Service schema: India-based studio SERVING Ivory Coast, not an
// Abidjan-local business — avoids the LocalBusiness/foreign-address mismatch
// while keeping areaServed + serviceType signals. Provider = the India org.
const geoServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://digitalwebweaver.com/agence-developpement-web-abidjan/#service",
  name: "Agence de Développement Web pour la Côte d'Ivoire",
  url: "https://digitalwebweaver.com/agence-developpement-web-abidjan/",
  provider: { "@id": "https://digitalwebweaver.com/#organization" },
  areaServed: [
    { "@type": "Country", name: "Ivory Coast" },
    { "@type": "City", name: "Abidjan" },
  ],
  serviceType: [
    "Développement Web Côte d'Ivoire",
    "Agence de Développement Web Abidjan",
    "Développement Logiciel Sur Mesure Abidjan",
    "Équipe de Développement Dédiée Côte d'Ivoire",
    "Développement E-commerce Abidjan",
  ],
  availableLanguage: ["French", "English"],
};

export default function AgenceDeveloppementWebAbidjanPage() {
  return (
    <div lang="fr">
      <JsonLd data={geoServiceSchema} />
      <ServicePage data={data} />
    </div>
  );
}
