import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "Progressive Web App Development Company | PWA Experts, India — Digital Web Weaver" },
  description: "Installable, offline-first Progressive Web Apps with service worker caching, a Web App Manifest, and app-shell architecture. 90+ Lighthouse PWA scores. India-based senior team.",
  alternates: { canonical: "/services/progressive-web-apps/" },
  openGraph: { title: "Progressive Web App Development Company | PWA Experts, India — Digital Web Weaver", description: "Installable, offline-first Progressive Web Apps with service worker caching, a Web App Manifest, and app-shell architecture. 90+ Lighthouse PWA scores. India-based senior team.", url: "/services/progressive-web-apps/", type: "website" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={serviceSchema({ name: "Progressive Web Apps", description: "Installable, offline-first Progressive Web Apps with service worker caching, a Web App Manifest, and app-shell architecture. 90+ Lighthouse PWA scores. India-based senior team.", href: "/services/progressive-web-apps/" })} />
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-build" data-target="s-build" title="Features">⚙</button>
      <button className="activitybar__btn" data-scroll="s-capabilities" data-target="s-capabilities" title="Capabilities">❮❯</button>
      <button className="activitybar__btn" data-scroll="s-why" data-target="s-why" title="Why PWA">i</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> progressive-web-apps.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> features.ts</button>
        <button className="tab" data-scroll="s-faq" data-target="s-faq"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> faq.md</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// progressive-web-apps.ts · Service Worker · Web App Manifest · Offline-first</p>
            <span className="badge">PROGRESSIVE WEB APPS</span>
            <h1 className="hero__h1">PWAs that feel <span className="pink">native</span> — without a <span className="teal">native build</span></h1>
            <p className="hero__lead">We build Progressive Web Apps that install from the browser, work offline, and deliver native-like performance across all platforms — one codebase, no app-store gatekeeping.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Get free estimate</a>
              <a className="btn btn--ghost" href="#s-build" data-scroll="s-build">$ view --features</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>150+</b><span>clients trusted</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>90+</b><span>Lighthouse PWA score</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>0</b><span>app-store friction</span></div>
            </div>
          </div>
          <div className="formcard" id="estimate">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">estimate.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE ESTIMATE</p>
              <p className="form__title">What are you building?</p>
              <p className="form__lead">Tell us what you need — scope and estimate in 24 hours, free.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME</label><input className="input" name="name" placeholder="Your name" /></div>
                <div className="field"><label className="label">WORK EMAIL</label><input className="input" name="email" type="email" placeholder="you@company.com" /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">WHAT DO YOU NEED?</label>
                <select className="select" name="need"><option>Web application / portal</option><option>SaaS product</option><option>Mobile app</option><option>Marketing / company website</option><option>AI / automation project</option><option>Other</option></select>
                </div>
                <div className="field"><label className="label">TIMELINE</label>
                <select className="select" name="timeline"><option>ASAP (1–4 weeks)</option><option>Standard (2–3 months)</option><option>Complex (3–6 months)</option><option>Not sure yet</option></select>
                </div>
              </div>
              <div className="field"><label className="label">DESCRIBE YOUR PROJECT</label><textarea className="textarea" name="desc" rows="3" placeholder="What it does, who uses it, any tech preferences…"></textarea></div>
              <button className="form__submit" type="submit">Get free estimate ↗</button>
              <p className="form__micro">No commitment · 24-hour response</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww estimate --submit</div>
              <div className="s1">✓ request received<br />✓ routed to a senior engineer<br />✓ estimate en route</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll reply within 24 hours.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>90+</div><div className="lbl">LIGHTHOUSE_PWA</div><div className="sub">▲ full installability</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>100%</div><div className="lbl">OFFLINE_READY</div><div className="sub">▲ installable · works offline</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>24h</div><div className="lbl">ESTIMATE</div><div className="sub">▲ free · no commitment</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const features = [ <span className="c">// PWA features &amp; services</span></p>
          <h2 className="title mono">Progressive web app features</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Installable PWA</div><p className="svc__body">Web App Manifest and install prompts that put your product on the user's home screen — no store required.</p><div className="svc__foot"><span>manifest.json</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Offline mode</div><p className="svc__body">Service worker caching strategies keep the app usable — and useful — with no connection at all.</p><div className="svc__foot"><span>sw.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Push notifications</div><p className="svc__body">Web Push API with opt-in management and deep linking back into the app that installed it.</p><div className="svc__foot"><span>push.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">App shell architecture</div><p className="svc__body">Instant loads with a cached shell and dynamic content fetched on top — first paint in milliseconds.</p><div className="svc__foot"><span>shell.tsx</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Cross-platform</div><p className="svc__body">One codebase behaving like a native app on Android, iOS Safari, and desktop.</p><div className="svc__foot"><span>cross.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Lighthouse targets</div><p className="svc__body">Full PWA checklist plus 90+ performance scores — verified before launch, not assumed.</p><div className="svc__foot"><span>lighthouse.ts</span></div></div>
          </div>
        </section>

        <section id="s-capabilities" className="section reveal">
          <p className="eyebrow">// technical depth — caching strategy, chosen deliberately</p>
          <h2 className="title mono">Offline-first, installable, genuinely fast</h2>
          <div className="grid grid-3">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="13" height="13" rx="2"></rect><path d="M9 20h9a2 2 0 0 0 2-2V9"></path></svg><span className="cap__title">Cache-first shell</span></div><p className="cap__body">The app shell is cache-first, so the interface itself never waits on a network round trip.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8.5a15 15 0 0 1 20 0M5.5 12a10 10 0 0 1 13 0M9 15.5a5 5 0 0 1 6 0"></path><circle cx="12" cy="19" r="1.2"></circle></svg><span className="cap__title">Network-first data</span></div><p className="cap__body">Live data is network-first, so what users see reflects your real, current back end.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12a8 8 0 0 1 13.5-5.7L20 8M20 12a8 8 0 0 1-13.5 5.7L4 16"></path><path d="M17.5 4v3.5H14M6.5 20v-3.5H10"></path></svg><span className="cap__title">Background sync</span></div><p className="cap__body">Actions taken offline queue up and sync automatically the moment connectivity returns.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"></rect><path d="M9 3v4h6V3M12 12v5m-2.5-2.5L12 17l2.5-2.5"></path></svg><span className="cap__title">Manifest &amp; install</span></div><p className="cap__body">A Web App Manifest with icons and splash screens drives clean install prompts on every platform.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="12" r="3"></circle><circle cx="17" cy="12" r="3"></circle><path d="M10 12h4"></path></svg><span className="cap__title">Clean API integrations</span></div><p className="cap__body">Predictable sync and clear error states connecting to your commerce, SaaS, or internal systems.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg><span className="cap__title">Lighthouse checklist</span></div><p className="cap__body">Every build is measured against the full Lighthouse PWA checklist before we call it done.</p></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// why a PWA, and why DWW builds it</p>
          <h2 className="title mono">Built to connect to your real systems</h2>
          <div className="panel-note" style={{"background":"var(--panel)"}}><p style={{"fontSize":"16px","color":"var(--text-2)","lineHeight":"1.65","maxWidth":"960px"}}>Our progressive web app development turns a single codebase into an installable, offline-capable product that behaves like a native app on Android, iOS Safari, and desktop — no app store gatekeeping required. From our base in Vadodara, India, we deliver PWAs for teams across the UK, South Africa, and Ivory Coast, pairing service worker caching, a Web App Manifest, and an app-shell architecture so the first meaningful paint happens in milliseconds. A PWA is only as useful as the data behind it, so we build clean API integrations into your existing back end — commerce catalogues, SaaS platforms, or internal tooling — with predictable sync and clear error states.</p></div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// progressive-web-apps.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Can a PWA replace a native iOS or Android app?<span className="sign">[+]</span></button><div className="faq__a"><p>For most apps — yes. PWAs handle offline mode, push notifications, and home screen install. The exceptions are apps needing deep hardware access (Bluetooth, NFC, background audio) where native is still required.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do PWAs work on iOS Safari?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes, with some limitations. Safari supports service workers, offline caching, and home screen installation. Web Push on iOS requires iOS 16.4+. We design PWAs to degrade gracefully on older Safari versions.</p></div></div>
            <div className="faq__item"><button className="faq__q">Will my PWA appear in the Google Play Store or App Store?<span className="sign">[+]</span></button><div className="faq__a"><p>Google Play accepts PWAs via TWA (Trusted Web Activity) — we package and submit them. Apple's App Store does not accept PWAs directly, but the installed home screen experience on iOS 16.4+ is near-native.</p></div></div>
            <div className="faq__item"><button className="faq__q">How is a PWA different from a regular responsive website?<span className="sign">[+]</span></button><div className="faq__a"><p>A PWA adds a service worker (offline caching, background sync), a Web App Manifest (installability, splash screen), and push notifications. The user can install it to their home screen and use it without internet.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <a className="svc" href="https://digitalwebweaver.com/web-application-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Web application development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>SaaS platforms, portals, dashboards, and enterprise systems.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></a>
            <Link className="svc" href="/mobile-app-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Mobile app development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Native iOS, Android, React Native, and Flutter builds.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/custom-software-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Custom software</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Bespoke ERP, CRM, portals, and workflow automation.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/saas-development/"><div className="svc__title" style={{"fontSize":"16px"}}>SaaS development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Multi-tenant SaaS with Stripe billing, SSO, and analytics.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --pwa-project<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to ship an installable, offline-first PWA?</h2>
          <p className="cta__lead">Free scoping and a detailed estimate from senior engineers — within 24 hours. Tell us what you're building and we'll scope it.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Get free estimate</Link>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Senior engineers only</span><span><span className="g">●</span> 48-hr match</span><span><span className="g">●</span> No lock-in</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">progressive-web-apps.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
