import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import JsonLd from "@/components/seo/JsonLd";
import { ivoryCoast as data } from "@/data/pages/local/city-pages";

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/agence-developpement-web-abidjan/" },
  openGraph: { url: "/agence-developpement-web-abidjan/", type: "website", locale: "fr_FR" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://digitalwebweaver.com/#localbusiness-ci",
  name: "Digital Web Weaver",
  image: "https://digitalwebweaver.com/icon-512.png",
  url: "https://digitalwebweaver.com/agence-developpement-web-abidjan/",
  email: "info@digitalwebweaver.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390012",
    addressCountry: "IN",
  },
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
  parentOrganization: { "@id": "https://digitalwebweaver.com/#organization" },
};

export default function AgenceDeveloppementWebAbidjanPage() {
  return (
    <div lang="fr">
      <JsonLd data={localBusinessSchema} />
      <ServicePage data={data} />
    </div>
  );
}
