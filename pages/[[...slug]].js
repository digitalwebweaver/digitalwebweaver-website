import Head from "next/head";
import { urls, getPage, chrome } from "../lib/pages.mjs";

// No React in the browser: every page is plain server-rendered HTML + one small script (see components/boot.js).
export const config = { unstable_runtimeJS: false };

const BASE = "https://digitalwebweaver.com";
const IMAGE = BASE + "/assets/og-cover.png";

export function getStaticPaths() {
  return { paths: urls().map((u) => ({ params: { slug: u === "/" ? [] : u.split("/").filter(Boolean) } })), fallback: false };
}

export function getStaticProps({ params }) {
  const url = params.slug && params.slug.length ? `/${params.slug.join("/")}/` : "/";
  const page = getPage(url);
  const { main, ...meta } = page;
  return { props: { url, meta, html: chrome.header().replace("{{CTA}}", page.cta) + `<main id="main">${main}</main>` + chrome.footer() } };
}

export default function Page({ url, meta, html }) {
  const og = { title: meta.og.title || meta.title, description: meta.og.description || meta.description };
  const canonical = BASE + url;
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={meta.description} />
        <meta name="robots" content={meta.robots} />
        <link rel="canonical" href={canonical} />
        {meta.alts.map(([lang, href]) => <link key={lang} rel="alternate" hrefLang={lang} href={href} />)}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Digital Web Weaver" />
        <meta property="og:locale" content={meta.og.locale || "en_US"} />
        <meta property="og:title" content={og.title} />
        <meta property="og:description" content={og.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={meta.og.alt || meta.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={og.title} />
        <meta name="twitter:description" content={og.description} />
        <meta name="twitter:image" content={IMAGE} />
        {meta.ld.map((j, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: j }} />)}
      </Head>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
