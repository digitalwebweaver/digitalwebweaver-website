import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import SiteChrome from "@/components/layout/SiteChrome";
import JsonLd from "@/components/seo/JsonLd";
import "./globals.css";

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://digitalwebweaver.com/#organization",
      name: "Digital Web Weaver",
      url: "https://digitalwebweaver.com",
      logo: {
        "@type": "ImageObject",
        url: "https://digitalwebweaver.com/icon-512.png",
        width: 512,
        height: 512,
      },
      foundingDate: "2013-03-18",
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@digitalwebweaver.com",
        telephone: "+91-9712515105",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi", "Gujarati"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "207/208 Sanket Heights, Sunpharma Road, Atladra",
        addressLocality: "Vadodara",
        addressRegion: "Gujarat",
        postalCode: "390012",
        addressCountry: "IN",
      },
      areaServed: ["India", "Vadodara", "Gujarat", "Ahmedabad", "Surat", "South Africa", "United Kingdom", "Ivory Coast"],
      description:
        "Expert web development, custom software, mobile apps, and AI solutions. Based in Vadodara, Gujarat, India — serving clients across India, South Africa, the UK, and West Africa.",
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://digitalwebweaver.com/#website",
      url: "https://digitalwebweaver.com",
      name: "Digital Web Weaver",
      publisher: { "@id": "https://digitalwebweaver.com/#organization" },
    },
  ],
};

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Digital Web Weaver — Web Development & Software Agency",
    template: "%s | Digital Web Weaver",
  },
  description:
    "Expert web development, custom software, mobile apps, and AI solutions. 150+ projects delivered. Based in India, serving global clients.",
  metadataBase: new URL("https://digitalwebweaver.com"),
  authors: [{ name: "Digital Web Weaver", url: "https://digitalwebweaver.com" }],
  creator: "Digital Web Weaver",
  publisher: "Digital Web Weaver",
  keywords: [
    "web development company India",
    "custom software development",
    "web development agency Vadodara",
    "mobile app development India",
    "website design Vadodara",
  ],
  openGraph: {
    siteName: "Digital Web Weaver",
    type: "website",
    locale: "en_IN",
    url: "https://digitalwebweaver.com",
    images: [{ url: "https://digitalwebweaver.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@digitalwebweaver",
    creator: "@digitalwebweaver",
  },
  alternates: {
    canonical: "https://digitalwebweaver.com",
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        <JsonLd data={organizationSchema} />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
