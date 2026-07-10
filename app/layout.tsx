import type { Metadata, Viewport } from "next";
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
      founder: {
        "@type": "Person",
        name: "Kamlesh Nishad",
        jobTitle: "CEO & Founder",
        url: "https://www.linkedin.com/in/kamleshnishad/",
        sameAs: ["https://www.linkedin.com/in/kamleshnishad/"],
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@digitalwebweaver.com",
        telephone: "+91-9712515105",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi", "Gujarati", "French"],
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
      sameAs: [
        "https://www.facebook.com/digitalwebweaver",
        "https://in.linkedin.com/company/digital-web-weaver",
        "https://x.com/dwebweaver",
        "https://maps.app.goo.gl/nWGopWEYkMKYQP1D9",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://digitalwebweaver.com/#website",
      url: "https://digitalwebweaver.com",
      name: "Digital Web Weaver",
      publisher: { "@id": "https://digitalwebweaver.com/#organization" },
    },
    {
      "@type": "SiteNavigationElement",
      "@id": "https://digitalwebweaver.com/#sitenav",
      name: ["Services", "Products", "Portfolio", "About", "Contact"],
      url: [
        "https://digitalwebweaver.com/services/",
        "https://digitalwebweaver.com/products/",
        "https://digitalwebweaver.com/portfolio/",
        "https://digitalwebweaver.com/about/",
        "https://digitalwebweaver.com/contact/",
      ],
    },
  ],
};

// Display + mono use `optional`: the browser shows the real font when it loads
// in time (preloaded, so it usually does) or a size-matched fallback with NO
// jarring mid-render swap. Prevents the heading/eyebrow "flash to wrong font"
// on first (uncached) load. Body stays `swap` so paragraph text is never hidden.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "optional",
  weight: ["600", "700"],
  preload: true,
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500"],
  preload: true,
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "optional",
  weight: ["400", "600"],
  preload: false, // minor label font — not worth an extra preload request
});

export const metadata: Metadata = {
  title: {
    // Custom/hub pages set short titles and rely on this brand suffix.
    // Data-driven service pages set their own 50-60 char SEO titles via
    // `title: { absolute: ... }`, which bypasses this template so the brand
    // isn't double-appended past the ~60-char SERP truncation point.
    default: "Digital Web Weaver — Web Development & Software Agency",
    template: "%s | Digital Web Weaver",
  },
  description:
    "Expert web development, custom software, mobile apps, and AI solutions. 200+ projects delivered. Based in India, serving global clients.",
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
