import Head from "next/head";
import { chrome } from "../lib/pages.mjs";

export const config = { unstable_runtimeJS: false };

export function getStaticProps() {
  return { props: { header: chrome.header().replace("{{CTA}}", "/contact/"), footer: chrome.footer() } };
}

export default function NotFound({ header, footer }) {
  const main = `<main id="main"><section class="page-hero page-hero--doc"><div class="container"><div class="page-hero__copy"><span class="prompt"><span class="prompt__path">~/dww</span><span class="prompt__sym">$</span> resolve --route</span><h1 class="h1">404: this page doesn&rsquo;t exist.</h1><p class="lede">It was moved, renamed, or never existed. Try one of these instead.</p><p><a class="btn btn--primary" href="/">Back to home</a> <a class="btn btn--ghost" href="/services/">Services</a> <a class="btn btn--ghost" href="/portfolio/">Portfolio</a> <a class="btn btn--ghost" href="/contact/">Contact</a></p></div></div></section></main>`;
  return (
    <>
      <Head>
        <title>404 | Page Not Found | Digital Web Weaver</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: header + main + footer }} />
    </>
  );
}
