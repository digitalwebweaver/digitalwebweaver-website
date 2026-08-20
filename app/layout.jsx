import { JetBrains_Mono, Nunito_Sans } from "next/font/google";
import Shell from "@/components/Shell";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-mono",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://digitalwebweaver.com"),
  title: { default: "Digital Web Weaver — Senior software engineering studio", template: "%s · Digital Web Weaver" },
  description: "A senior engineering studio building high-performance web platforms, SaaS products, mobile apps, and AI systems since 2013.",
  applicationName: "Digital Web Weaver",
  keywords: ["software development", "web development", "SaaS", "mobile apps", "AI automation", "hire developers", "India"],
  openGraph: { siteName: "Digital Web Weaver", type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#0d1117", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${nunitoSans.variable}`}>
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
