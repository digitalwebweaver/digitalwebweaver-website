import type { Metadata } from "next";

export const revalidate = 3600;
export const metadata: Metadata = {
  title: { absolute: "SolarFlow — Solar ERP & CRM for Gujarat Installers" },
  description:
    "Solar ERP + CRM for Gujarat installers. Track PM Surya Ghar → GEDA → MGVCL subsidy lifecycle, validate ALMM panels, GST invoicing. Trusted in Vadodara.",
  keywords: [
    "solar ERP software Gujarat",
    "solar CRM Gujarat",
    "PM Surya Ghar software",
    "GEDA solar installer software",
    "MGVCL net metering software",
    "solar subsidy tracker India",
    "ALMM panel validation software",
    "solar installer software Vadodara",
    "solar business management software India",
    "solar company ERP software",
    "solar panel installer CRM",
    "PM Surya Ghar subsidy management",
    "solar ERP Ahmedabad",
    "solar CRM Surat",
    "solar software Rajkot",
    "GEDA empanelled installer software",
    "net metering software Gujarat",
    "solar GST invoicing software India",
  ],
  alternates: { canonical: "/solarflow/" },
  openGraph: {
    url: "https://digitalwebweaver.com/solarflow/",
    type: "website",
    title: "SolarFlow — Solar ERP + CRM for Gujarat Installers",
    description:
      "Never forfeit a ₹78,000 PM Surya Ghar subsidy again. SolarFlow tracks the full GEDA → MGVCL lifecycle with AI-assisted quoting, ALMM validation, and net-meter pre-check.",
    siteName: "Digital Web Weaver",
    images: [
      {
        url: "https://digitalwebweaver.com/og-solarflow.png",
        width: 1200,
        height: 630,
        alt: "SolarFlow ERP + CRM for Solar Installers — Gujarat, India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SolarFlow — Solar ERP + CRM for Gujarat Installers",
    description:
      "Track PM Surya Ghar → GEDA → MGVCL subsidy lifecycle. AI-powered quoting. ALMM validation. GST invoicing. Built for Indian solar installers.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://digitalwebweaver.com/solarflow/#software",
      name: "SolarFlow",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Android, iOS",
      description:
        "All-in-one ERP + CRM for Indian solar installers. Manages the PM Surya Ghar → GEDA → MGVCL subsidy lifecycle with AI-assisted quoting, ALMM panel validation, GST invoicing, and inverter monitoring.",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        offerCount: 3,
        lowPrice: "0",
        description: "Starter, Growth, and Scale plans. Pricing on request.",
      },
      featureList: [
        "PM Surya Ghar subsidy lifecycle tracker",
        "AI-powered Smart Quote from electricity bill photo",
        "ALMM panel validation",
        "Net-Meter Pre-Check for MGVCL compliance",
        "GST-correct invoicing (CGST/SGST/IGST)",
        "Underproduction Sentinel AI",
        "Follow-up Brain AI for lead nurturing",
        "Inventory with real Gujarat market catalogue",
        "Partner portal for channel partners",
        "Mobile-first field app",
        "DPDP compliant",
        "White-label per company",
      ],
      creator: {
        "@type": "Organization",
        "@id": "https://digitalwebweaver.com/#org",
        name: "Digital Web Weaver",
        url: "https://digitalwebweaver.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Vadodara",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
      },
      url: "https://digitalwebweaver.com/solarflow/",
      inLanguage: "en-IN",
      audience: {
        "@type": "Audience",
        audienceType: "Solar installers, GEDA-empanelled contractors, Renewable energy businesses in Gujarat, India",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://digitalwebweaver.com/solarflow/#webpage",
      url: "https://digitalwebweaver.com/solarflow/",
      name: "SolarFlow — Solar ERP + CRM Software for Gujarat Installers",
      description:
        "SolarFlow manages the full PM Surya Ghar → GEDA → MGVCL subsidy lifecycle for solar installers in Gujarat. AI quoting, ALMM validation, GST invoicing, net-meter pre-check.",
      isPartOf: { "@id": "https://digitalwebweaver.com/#website" },
      about: { "@id": "https://digitalwebweaver.com/solarflow/#software" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://digitalwebweaver.com/" },
          { "@type": "ListItem", position: 2, name: "Our Products", item: "https://digitalwebweaver.com/apps/" },
          { "@type": "ListItem", position: 3, name: "SolarFlow", item: "https://digitalwebweaver.com/solarflow/" },
        ],
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", ".lead"],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://digitalwebweaver.com/solarflow/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does SolarFlow work for MGVCL, DGVCL, and PGVCL?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Net-Meter Pre-Check and subsidy lifecycle are built specifically for Gujarat DISCOMs. MGVCL is fully mapped; DGVCL and PGVCL rejection patterns are added as part of onboarding.",
          },
        },
        {
          "@type": "Question",
          name: "What is ALMM validation in SolarFlow?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ALMM (Approved List of Models and Manufacturers) is the MNRE list of subsidy-eligible panels and inverters. SolarFlow flags any non-ALMM panel before you order, preventing the most common PM Surya Ghar subsidy forfeiture.",
          },
        },
        {
          "@type": "Question",
          name: "How does SolarFlow help with PM Surya Ghar subsidy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SolarFlow tracks the complete PM Surya Ghar subsidy lifecycle: Registration → GEDA Approval → MGVCL Feasibility → Installation → Net-Meter Inspection → Subsidy Credited. SLA timers, compliance checklists, and AI pre-checks ensure you never forfeit the ₹30,000–₹78,000 subsidy.",
          },
        },
        {
          "@type": "Question",
          name: "Does SolarFlow handle GST invoicing for solar installations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. SolarFlow auto-applies CGST+SGST for intra-state and IGST for inter-state solar installations. B2B invoices include the buyer's GSTIN for Input Tax Credit.",
          },
        },
      ],
    },
  ],
};

export default function SolarFlowLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
