import Document, { Html, Head, Main } from "next/document";
import assets from "../lib/assets.json";

// <NextScript/> is deliberately absent: the pages ship no framework JS. Styles, fonts and the one small
// script are wired here. First-screen CSS is inlined; the full stylesheet is fetched without blocking paint.
export default class SiteDocument extends Document {
  render() {
    const lang = this.props.__NEXT_DATA__?.props?.pageProps?.meta?.lang || "en";
    return (
      <Html lang={lang}>
        <Head>
          <meta name="theme-color" content="#ffffff" />
          <link rel="icon" href="/favicon.ico" sizes="32x32" />
          <link rel="icon" type="image/png" sizes="192x192" href="/assets/favicon-192.png" />
          <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="preload" href="/fonts/bricolage.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          {assets.critical ? (
            <>
              <style dangerouslySetInnerHTML={{ __html: assets.critical }} />
              <link rel="stylesheet" href={assets.css} media="print" id="fullcss" />
              <script dangerouslySetInnerHTML={{ __html: `(function(){var l=document.getElementById("fullcss");function on(){l.media="all"}l.sheet?on():l.addEventListener("load",on)})()` }} />
              <noscript><link rel="stylesheet" href={assets.css} /></noscript>
            </>
          ) : (
            <link rel="stylesheet" href={assets.css} />
          )}
        </Head>
        <body>
          <Main />
          <script dangerouslySetInnerHTML={{ __html: `window.__DWW={modal:${JSON.stringify(assets.modal)}}` }} />
          <script type="module" src={assets.js} />
        </body>
      </Html>
    );
  }
}
