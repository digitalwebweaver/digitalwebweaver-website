import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const revalidate = 3600;
export const metadata: Metadata = {
  title: "Free Project Consultation & Quote",
  description:
    "Tell us about your project. Get a free technical consultation and a fixed estimate from a senior Digital Web Weaver engineer within 24 hours.",
  alternates: { canonical: "/contact/" },
  openGraph: { url: "/contact/", type: "website" },
};

const CONTACT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://digitalwebweaver.com/contact/",
  name: "Contact Digital Web Weaver",
  mainEntity: {
    "@type": "Organization",
    "@id": "https://digitalwebweaver.com/#organization",
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@digitalwebweaver.com",
      telephone: "+91-9712515105",
      contactType: "sales",
      areaServed: ["IN", "GB", "ZA", "CI"],
      availableLanguage: ["English", "Hindi", "Gujarati", "French"],
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CONTACT_SCHEMA) }} />
      <ContactClient />
    </>
  );
}
