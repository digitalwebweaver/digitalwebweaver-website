import { JetBrains_Mono, Nunito_Sans } from "next/font/google";
import Shell from "@/components/Shell";
import ThemeToggle from "@/components/ThemeToggle";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

// Light is the default (matches the bare :root tokens), so this only ever
// needs to *add* data-theme="dark" when that's what's stored — nothing to
// do on the (default) light path. Runs as the first thing in <body>, which
// blocks parsing of everything after it, so it beats first paint without
// needing a custom <head> injection.
const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('dww-theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark');}catch(e){}})();`;

// Only the weights actually used anywhere in globals.css or inline JSX
// styles are declared here — 500 (mono) and 900 (sans) were shipped as
// full self-hosted font files (every unicode-range subset) despite never
// being applied to any element, adding weight to the render-blocking
// font CSS for nothing.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-mono",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://digitalwebweaver.com"),
  title: { default: "Digital Web Weaver — Senior software engineering studio", template: "%s · Digital Web Weaver" },
  description: "A senior engineering studio building high-performance web platforms, SaaS products, mobile apps, and AI systems since 2013.",
  applicationName: "Digital Web Weaver",
  keywords: ["software development", "web development", "SaaS", "mobile apps", "AI automation", "hire developers", "India"],
  openGraph: {
    siteName: "Digital Web Weaver",
    type: "website",
    locale: "en_US",
    images: [{ url: "/assets/og-cover.png", width: 1200, height: 630, alt: "Digital Web Weaver — Senior software engineering studio" }],
  },
  twitter: { card: "summary_large_image", images: ["/assets/og-cover.png"] },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#ffffff", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${nunitoSans.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Shell>{children}</Shell>
        <ThemeToggle />
      </body>
    </html>
  );
}
