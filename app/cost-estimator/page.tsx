import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import CostEstimator, { type CurrencyConfig } from "./CostEstimator";

export const dynamic = "force-dynamic";

const SITE = "https://digitalwebweaver.com";

export const revalidate = 3600;
export const metadata: Metadata = {
  title: "Free Software & App Cost Estimator",
  description:
    "Use our free calculator for an instant software, website, or app estimate in your currency — then get a free consultation and a wireframe of your idea.",
  alternates: { canonical: "/cost-estimator/" },
  openGraph: { url: "/cost-estimator/", type: "website" },
};

// Map visitor country → display currency (rate = INR × rate).
function currencyFor(country: string): CurrencyConfig {
  const C = (code: string, rate: number, locale: string, isHome = false): CurrencyConfig => ({ code, rate, locale, isHome });
  const EUR = ["DE", "FR", "IT", "ES", "NL", "BE", "IE", "PT", "AT", "FI", "GR", "LU", "SK", "SI", "EE", "LV", "LT", "CY", "MT"];
  switch (country) {
    case "IN": return C("INR", 1, "en-IN", true);
    case "US": return C("USD", 0.012, "en-US");
    case "GB": return C("GBP", 0.0095, "en-GB");
    case "ZA": return C("ZAR", 0.22, "en-ZA");
    case "AE": return C("AED", 0.044, "en-AE");
    case "CA": return C("CAD", 0.0164, "en-CA");
    case "AU": return C("AUD", 0.018, "en-AU");
    case "SG": return C("SGD", 0.016, "en-SG");
    case "CI": case "SN": case "BJ": case "BF": case "ML": case "TG": case "NE":
      return C("XOF", 7.3, "fr-CI");
    case "NG": return C("NGN", 18, "en-NG");
    default:
      if (EUR.includes(country)) return C("EUR", 0.011, "en-IE");
      return C("USD", 0.012, "en-US");
  }
}

const FAQ = [
  {
    q: "How much does it cost to build a website or app?",
    a: "A business website typically starts around ₹19,999, while web apps, custom software, and SaaS platforms range from ₹49,999 to ₹15,00,000+ depending on scope, features, and design. Use the calculator above for an instant estimate tailored to your project.",
  },
  {
    q: "How accurate is this estimate?",
    a: "It's an indicative range based on your selections (project type, size, features, design, and timeline). Your exact, fixed quote comes after a short, free consultation where we understand the full scope.",
  },
  {
    q: "What's included in the price?",
    a: "Clean custom code, a fast mobile-first build, SEO and analytics setup, testing, and full source-code ownership handed to you. We're a senior team — projects are built to last and scale.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We work with clients across India, the UK, South Africa, the US, and West Africa. The estimate above is shown in your local currency, converted from our INR pricing at indicative rates.",
  },
  {
    q: "What do I get after submitting?",
    a: "A free consultation plus a wireframe of your idea, and a clear fixed quote — usually within 24 hours.",
  },
];

export default async function CostEstimatorPage() {
  const h = await headers();
  const country = (h.get("x-vercel-ip-country") || "IN").toUpperCase();
  const currency = currencyFor(country);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Cost Estimator", item: `${SITE}/cost-estimator/` },
    ],
  };
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Project Cost Estimator",
    url: `${SITE}/cost-estimator/`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@id": `${SITE}/#organization` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      {/* ===== HERO ===== */}
      <section className="page-hero" style={{ paddingBottom: 24 }}>
        <div className="wrap">
          <div className="breadcrumb reveal">
            <Link href="/">Home</Link>
            <span className="sep">/</span>Cost Estimator
          </div>
          <span className="eyebrow reveal">Free instant estimate</span>
          <h1 className="reveal" style={{ marginTop: 18, maxWidth: 820 }}>
            What will your project <span className="accent">cost</span>?
          </h1>
          <p className="lead reveal" style={{ maxWidth: 640 }}>
            Answer a few quick questions and get an instant ballpark — in your own currency. No sign-up to see the
            number; get a free consultation and a wireframe of your idea when you&apos;re ready.
          </p>
        </div>
      </section>

      {/* ===== ESTIMATOR ===== */}
      <section className="sec" style={{ paddingTop: 8 }}>
        <div className="wrap" style={{ maxWidth: 900 }}>
          <CostEstimator currency={currency} />
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <span className="eyebrow reveal">FAQ</span>
          <h2 className="reveal" style={{ marginTop: 18, marginBottom: 28 }}>
            Pricing questions, answered
          </h2>
          <div className="reveal" style={{ display: "grid", gap: 18 }}>
            {FAQ.map((f, i) => (
              <div key={i} style={{ borderBottom: "1px solid var(--line)", paddingBottom: 18 }}>
                <h3 style={{ fontSize: 17, marginBottom: 8 }}>{f.q}</h3>
                <p style={{ color: "var(--ink-2)", lineHeight: 1.65 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
