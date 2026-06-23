import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VetCare — Veterinary Practice Management Software for South Africa | Loadshedding-Proof, WhatsApp-Native",
  description:
    "VetCare is South Africa's all-in-one veterinary practice management system. SARS 15% VAT invoices, WhatsApp appointment reminders, loadshedding-proof offline mode, FIFO stock control, and SOAP clinical records — built for SA clinics.",
  keywords: [
    "veterinary practice management software South Africa",
    "vet clinic software South Africa",
    "veterinary management system South Africa",
    "vet software loadshedding",
    "SARS compliant vet invoicing software",
    "veterinary WhatsApp reminders South Africa",
    "vet billing software South Africa",
    "SnapScan veterinary invoices",
    "South African veterinary clinic software",
    "vet appointment booking system South Africa",
    "SAVC practice management software",
    "veterinary stock management South Africa",
    "vet software Cape Town",
    "vet software Johannesburg",
    "vet software Durban",
    "vet software Pretoria",
    "PWA veterinary software offline",
    "POPIA compliant vet software",
    "veterinary EMR South Africa",
    "vet practice management system",
  ],
  alternates: { canonical: "/vetcare/" },
  openGraph: {
    url: "https://digitalwebweaver.com/vetcare/",
    type: "website",
    title: "VetCare — Veterinary Practice Management Software for South Africa",
    description:
      "WhatsApp-first, SARS-ready, loadshedding-proof. Appointments, SOAP records, 15% VAT invoicing, stock control, and WhatsApp communication — all in one system built for South African vet clinics.",
    siteName: "Digital Web Weaver",
    images: [
      {
        url: "https://digitalwebweaver.com/og-vetcare.png",
        width: 1200,
        height: 630,
        alt: "VetCare — Veterinary Practice Management Software for South Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VetCare — Vet Practice Management Software for South Africa",
    description:
      "SARS-compliant invoicing, WhatsApp reminders, offline loadshedding mode, FIFO stock control. Built for South African veterinary clinics.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://digitalwebweaver.com/vetcare/#software",
      name: "VetCare",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Veterinary Practice Management Software",
      operatingSystem: "Web, Android, iOS",
      description:
        "All-in-one veterinary practice management system for South African clinics. Manages appointments, SOAP patient records, SARS-compliant 15% VAT invoicing with SnapScan QR, WhatsApp + SMS client communication with quiet hours, FIFO stock control, and role-aware dashboards. Works fully offline during loadshedding.",
      offers: {
        "@type": "Offer",
        priceCurrency: "ZAR",
        description: "Contact for pricing. Runs on standard shared hosting — no expensive cloud infrastructure.",
      },
      featureList: [
        "Loadshedding-proof offline PWA",
        "WhatsApp appointment confirmations and reminders",
        "Automatic SMS fallback",
        "SARS 15% VAT tax invoices",
        "SnapScan QR code on invoices",
        "SOAP consultation notes with vitals and templates",
        "Allergy and chronic-condition banners",
        "Vaccination records with auto next-due dates",
        "24-hour edit lock on clinical notes (medico-legal)",
        "FIFO stock dispensing — expired stock blocked",
        "Auto-dispense from consultation",
        "5 business reports exportable to PDF and Excel",
        "Role-based access control (6 roles, 43 permissions)",
        "Full audit trail",
        "219 automated tests",
        "POPIA-compliant messaging with opt-out",
        "Quiet hours enforcement (20:00–07:00)",
        "SAVC practice and vet number fields",
        "ZAR currency throughout",
        "South African public holidays pre-loaded",
      ],
      creator: {
        "@type": "Organization",
        "@id": "https://digitalwebweaver.com/#org",
        name: "Digital Web Weaver",
        url: "https://digitalwebweaver.com",
      },
      url: "https://digitalwebweaver.com/vetcare/",
      inLanguage: "en-ZA",
      audience: {
        "@type": "Audience",
        audienceType: "Veterinary clinic owners, veterinarians, vet practice managers in South Africa",
        geographicArea: {
          "@type": "Country",
          name: "South Africa",
        },
      },
      countryOfOrigin: {
        "@type": "Country",
        name: "South Africa",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://digitalwebweaver.com/vetcare/#webpage",
      url: "https://digitalwebweaver.com/vetcare/",
      name: "VetCare — Veterinary Practice Management Software for South Africa",
      description:
        "Loadshedding-proof, WhatsApp-native vet practice management. SARS 15% VAT invoicing, SOAP clinical records, FIFO stock, WhatsApp + SMS reminders with quiet hours — built for South African clinics.",
      isPartOf: { "@id": "https://digitalwebweaver.com/#website" },
      about: { "@id": "https://digitalwebweaver.com/vetcare/#software" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://digitalwebweaver.com/" },
          { "@type": "ListItem", position: 2, name: "Our Products", item: "https://digitalwebweaver.com/products/" },
          { "@type": "ListItem", position: 3, name: "VetCare", item: "https://digitalwebweaver.com/vetcare/" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://digitalwebweaver.com/vetcare/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What happens to VetCare during loadshedding?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "VetCare is a Progressive Web App — it keeps running fully offline during loadshedding. It reads cached patient records and queues every new appointment, note, or payment to sync automatically when power and internet return. Nothing is lost.",
          },
        },
        {
          "@type": "Question",
          name: "Are VetCare invoices SARS-compliant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. VetCare generates proper 15% VAT tax invoices with your clinic's VAT number, sequential invoice numbers, and a SnapScan QR code for instant payment. Receipts are also generated. No adjustments needed at tax time.",
          },
        },
        {
          "@type": "Question",
          name: "Can VetCare send WhatsApp messages to clients in South Africa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — VetCare sends appointment confirmations, 24-hour reminders, vaccination-due nudges, invoices, and discharge summaries via WhatsApp with automatic SMS fallback. Quiet hours (20:00–07:00) are enforced automatically. Fully POPIA-compliant with opt-out built in.",
          },
        },
        {
          "@type": "Question",
          name: "Does VetCare work on mobile phones and tablets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — VetCare is fully mobile-responsive and can be installed as an app on any Android or iOS device. It also works on desktop. Because it's a PWA, no app store download is required.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need expensive servers to run VetCare?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. VetCare runs on standard, affordable shared hosting — no expensive cloud subscription or per-user fees. It's lightweight and fast even on slow connections.",
          },
        },
        {
          "@type": "Question",
          name: "Is VetCare suitable for clinics in South Africa treating dogs, cats, and exotic animals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. VetCare supports companion animals (dogs, cats) and exotic species (birds, rabbits, reptiles) with configurable record templates and species-specific fields.",
          },
        },
      ],
    },
  ],
};

export default function VetCareLayout({ children }: { children: React.ReactNode }) {
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
