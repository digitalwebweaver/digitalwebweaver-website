// JSON-LD builders. Every field here is sourced from real, already-published
// site copy (Footer NAP, page metadata) — nothing invented. Deliberately
// omits AggregateRating anywhere: the on-page "4.9" stat has no linked,
// countable review source, and Google's structured-data guidelines treat an
// unverifiable rating as spam-risk, not just an enhancement opportunity.

const BASE = "https://digitalwebweaver.com";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE}/#organization`,
    name: "Digital Web Weaver",
    url: BASE,
    logo: `${BASE}/assets/dww-logo.png`,
    image: `${BASE}/assets/dww-logo.png`,
    description:
      "A senior engineering studio building high-performance web platforms, SaaS products, mobile apps, and AI systems since 2013.",
    telephone: "+91-97125-15105",
    email: "info@digitalwebweaver.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "207/208 Sanket Heights, Sunpharma Road, Atladra",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390012",
      addressCountry: "IN",
    },
    // Real coordinates + Google Place ID (CID), resolved from the studio's
    // actual Google Maps listing — not estimated from the postal address.
    geo: { "@type": "GeoCoordinates", latitude: 22.2805213, longitude: 73.1629186 },
    hasMap: "https://www.google.com/maps?cid=11665016648672561459",
    areaServed: ["IN", "GB", "ZA", "CI"],
    foundingDate: "2013",
    sameAs: [
      "https://www.facebook.com/digitalwebweaver",
      "https://in.linkedin.com/company/digital-web-weaver",
      "https://x.com/dwebweaver",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    name: "Digital Web Weaver",
    url: BASE,
  };
}

// items: [{ label, href }] in root-to-leaf order, href relative ("/services/")
// Non-terminal crumbs without an href (e.g. a category label with no page
// of its own, like "Services" in Home > Services > GlowDesk) are dropped
// rather than emitted with a missing "item" field — Google's structured
// data guidelines require every ListItem to have a valid item URL, and a
// key set to undefined is silently stripped by JSON.stringify, which is
// exactly what Search Console flagged as "Missing field item".
export function breadcrumbSchema(items) {
  const valid = items.filter((item, i) => item.href || i === items.length - 1);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: valid.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.href ? BASE + item.href : undefined,
    })),
  };
}

// review: optional { author, body } — only pass if a real, named testimonial
// exists on the page.
//
// Deliberately Service, not SoftwareApplication: Google requires
// offers.price (plus aggregateRating or review) for SoftwareApplication
// rich-result eligibility, and none of these products have a real, fixed,
// publicly-quoted price — every pricing section on the site is "Custom /
// pricing" or unlisted. Fabricating a price to satisfy that requirement
// would be exactly the kind of unverifiable structured data Google's spam
// policies flag, and Service has no such unmet-required-field risk since
// these are genuinely bespoke, quoted offerings rather than shrink-wrap
// software sold at a set price.
export function serviceSchema({ name, description, href, review }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: BASE + href,
    provider: { "@id": `${BASE}/#organization` },
  };
  if (review) {
    schema.review = {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: review.author },
      reviewBody: review.body,
    };
  }
  return schema;
}

// datePublished must be a real ISO date already shown on the page as display
// text — never invented. dateModified omitted unless a real edit date exists.
export function blogPostingSchema({ headline, description, href, datePublished, authorName }) {
  const author = { "@type": "Person", name: authorName };
  if (authorName === "Kamlesh Nishad") {
    author.url = "https://www.linkedin.com/in/kamleshnishad/";
    author.sameAs = ["https://www.linkedin.com/in/kamleshnishad/"];
  }
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    url: BASE + href,
    datePublished,
    author,
    publisher: { "@id": `${BASE}/#organization` },
  };
}
