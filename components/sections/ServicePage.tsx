import type { ServicePageData } from "@/lib/types";
import ServiceHero from "./ServiceHero";
import MarqueeBand from "./MarqueeBand";
import ProseSection from "./ProseSection";
import ServiceGrid from "./ServiceGrid";
import CapGrid from "./CapGrid";
import ProcessSection from "./ProcessSection";
import StackCols from "./StackCols";
import CaseStudies from "./CaseStudies";
import WhyGrid from "./WhyGrid";
import Testimonials from "./Testimonials";
import FaqSection from "./FaqSection";
import RelatedServices from "./RelatedServices";
import CtaBand from "./CtaBand";
import JsonLd from "@/components/seo/JsonLd";
import { slugify } from "@/lib/slug";

const BASE = "https://digitalwebweaver.com";

// Countries the studio serves — kept in sync with the Organization schema.
const AREA_SERVED = [
  { "@type": "Country", name: "India" },
  { "@type": "Country", name: "United Kingdom" },
  { "@type": "Country", name: "South Africa" },
  { "@type": "Country", name: "Ivory Coast" },
];

export default function ServicePage({ data }: { data: ServicePageData }) {
  const { hero, prose, services, capabilities, process, stack, why, faq, cta, cases, testimonials, related } = data;

  // ── Product detection ─────────────────────────────────────────────────────
  // Ready-made SaaS product pages carry a "Ready Apps" (/products/) breadcrumb.
  // For those we additionally emit SoftwareApplication schema so search/AI engines
  // recognise them as discrete software products, not generic services.
  const isProduct = (hero.breadcrumbs ?? []).some((c) => c.href === "/products/");
  const productName = isProduct
    ? (hero.breadcrumbs ?? []).filter((c) => !c.href).pop()?.label || hero.eyebrow || data.meta.title
    : null;
  const softwareSchema =
    isProduct && productName
      ? {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: productName,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, iOS, Android",
          description: data.meta.description,
          url: `${BASE}/${slugify(productName)}/`,
          image: `${BASE}/og-image.png`,
          publisher: { "@id": `${BASE}/#organization` },
        }
      : null;

  // ── BreadcrumbList ──────────────────────────────────────────────────────────
  const breadcrumbSchema = hero.breadcrumbs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: hero.breadcrumbs.map((crumb, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: crumb.label,
          ...(crumb.href ? { item: `${BASE}${crumb.href}` } : {}),
        })),
      }
    : null;

  // ── Service ─────────────────────────────────────────────────────────────────
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.meta.title,
    description: data.meta.description,
    provider: { "@id": `${BASE}/#organization` },
    areaServed: AREA_SERVED,
    serviceType: hero.eyebrow ?? "Software Development",
  };

  // ── FAQPage ─────────────────────────────────────────────────────────────────
  const faqSchema = faq?.items?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }
    : null;

  return (
    <>
      {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}
      <JsonLd data={serviceSchema} />
      {softwareSchema && <JsonLd data={softwareSchema} />}
      {faqSchema && <JsonLd data={faqSchema} />}
      <ServiceHero
        eyebrow={hero.eyebrow}
        heading={hero.heading}
        lead={hero.lead}
        breadcrumbs={hero.breadcrumbs}
        stats={hero.stats}
        formVariant={hero.formVariant as "service" | "hire" | undefined}
        formTag={hero.formTag}
        formHeading={hero.formHeading}
        formSub={hero.formSub}
        formSubmitLabel={hero.formSubmitLabel}
        formNote={hero.formNote}
        localBadge={hero.localBadge}
      />
      <MarqueeBand items={hero.marqueeItems} />
      {prose && (
        <ProseSection
          eyebrow={prose.eyebrow}
          heading={prose.heading}
          blocks={prose.blocks}
          dark={prose.dark}
        />
      )}
      {services && (
        <ServiceGrid
          eyebrow={services.eyebrow}
          heading={services.heading}
          body={services.body}
          items={services.items}
          dark={services.dark}
          variant={services.variant as "card" | "svc" | undefined}
        />
      )}
      {capabilities && (
        <CapGrid
          eyebrow={capabilities.eyebrow}
          heading={capabilities.heading}
          body={capabilities.body}
          items={capabilities.items}
          dark={capabilities.dark ?? true}
        />
      )}
      {process && (
        <ProcessSection
          eyebrow={process.eyebrow}
          heading={process.heading}
          body={process.body}
          steps={process.steps}
          deliverables={process.deliverables}
          dark={process.dark}
        />
      )}
      {stack && (
        <StackCols
          eyebrow={stack.eyebrow}
          heading={stack.heading}
          body={stack.body}
          cols={stack.cols}
          dark={stack.dark}
        />
      )}
      {cases && <CaseStudies cases={cases as any} />}
      {why && (
        <WhyGrid
          eyebrow={why.eyebrow}
          heading={why.heading}
          body={why.body}
          items={why.items}
          dark={why.dark ?? true}
        />
      )}
      {testimonials && <Testimonials items={testimonials} />}
      {faq && (
        <FaqSection
          eyebrow={faq.eyebrow}
          heading={faq.heading}
          body={faq.body}
          items={faq.items}
        />
      )}
      {related && <RelatedServices items={related} />}
      {cta && (
        <CtaBand
          eyebrow={cta.eyebrow}
          heading={cta.heading}
          body={cta.body}
          primaryCta={cta.primaryCta}
          secondaryCta={cta.secondaryCta}
          meta={cta.meta}
        />
      )}
    </>
  );
}
