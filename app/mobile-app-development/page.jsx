import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "Mobile App Development Company | iOS, Android & React Native — Digital Web Weaver" },
  description: "Native iOS and Android apps, React Native, and Flutter builds profiled for 60fps. 55+ apps shipped, 4.8★ average rating, end-to-end App Store and Play Store submission.",
  alternates: { canonical: "/mobile-app-development/" },
  openGraph: { title: "Mobile App Development Company | iOS, Android & React Native — Digital Web Weaver", description: "Native iOS and Android apps, React Native, and Flutter builds profiled for 60fps. 55+ apps shipped, 4.8★ average rating, end-to-end App Store and Play Store submission.", url: "/mobile-app-development/", type: "website" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={serviceSchema({ name: "Mobile Apps", description: "Native iOS and Android apps, React Native, and Flutter builds profiled for 60fps. 55+ apps shipped, 4.8★ average rating, end-to-end App Store and Play Store submission.", href: "/mobile-app-development/" })} />
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-build" data-target="s-build" title="Services">⚙</button>
      <button className="activitybar__btn" data-scroll="s-capabilities" data-target="s-capabilities" title="Capabilities">❮❯</button>
      <button className="activitybar__btn" data-scroll="s-process" data-target="s-process" title="Process">❯</button>
      <button className="activitybar__btn" data-scroll="s-why" data-target="s-why" title="Why us">i</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> mobile-app.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> services.ts</button>
        <button className="tab" data-scroll="s-process" data-target="s-process"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> process.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// mobile-app.ts · Swift · Kotlin · React Native</p>
            <span className="badge">MOBILE APP DEVELOPMENT</span>
            <h1 className="hero__h1">Mobile apps for iOS &amp; Android at <span className="pink">60fps</span></h1>
            <p className="hero__lead">Native Swift and Kotlin where the platform demands it, React Native or Flutter where shared code and speed matter more — profiled for a smooth 60fps on a mid-range Android as well as the latest iPhone.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Get free estimate</a>
              <a className="btn btn--ghost" href="#s-build" data-scroll="s-build">$ view --apps</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>55+</b><span>apps shipped</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>60fps</b><span>profiled performance</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>4.8★</b><span>avg. store rating</span></div>
            </div>
            <div className="trust">
              <div className="trust__label">BUILT WITH</div>
              <div className="trust__row">
                <span className="trust__chip">React Native</span><span className="trust__chip">Flutter</span><span className="trust__chip">Swift</span><span className="trust__chip">Kotlin</span><span className="trust__chip">Expo</span>
              </div>
            </div>
          </div>
          <div className="formcard" id="estimate">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">estimate.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE ESTIMATE</p>
              <p className="form__title">What are you building?</p>
              <p className="form__lead">Tell us what you need — scope and estimate in 24 hours, free.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME *</label><input className="input" name="name" placeholder="Your name" required /></div>
                <div className="field"><label className="label">WORK EMAIL *</label><input className="input" name="email" type="email" placeholder="you@company.com" required /></div>
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
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>55+</div><div className="lbl">APPS_SHIPPED</div><div className="sub">▲ iOS · Android · cross-platform</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>60fps</div><div className="lbl">PERFORMANCE</div><div className="sub">▲ profiled, no dropped frames</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>4.8★</div><div className="lbl">AVG_RATING</div><div className="sub">▲ App Store · Play Store</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// what we build</span></p>
          <h2 className="title mono">Mobile development services</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">iOS apps</div><p className="svc__body">Native Swift and SwiftUI apps built for the App Store, not a cross-platform compromise.</p><div className="svc__foot"><span>ios.swift</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Android apps</div><p className="svc__body">Native Kotlin and Jetpack Compose for the Play Store, tuned for mid-range devices too.</p><div className="svc__foot"><span>android.kt</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">React Native</div><p className="svc__body">Cross-platform apps with 90%+ shared code, without giving up native feel.</p><div className="svc__foot"><span>app.tsx</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Flutter</div><p className="svc__body">Dart-powered apps for iOS, Android, and web from a single, fast-iterating codebase.</p><div className="svc__foot"><span>app.dart</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Progressive web apps</div><p className="svc__body">Progressive web apps that install like native, when a store submission isn't the goal.</p><div className="svc__foot"><span>pwa.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">App maintenance</div><p className="svc__body">OS updates, bug fixes, and feature additions so a shipped app doesn't quietly rot.</p><div className="svc__foot"><span>maintain.sh</span></div></div>
          </div>
        </section>

        <section id="s-capabilities" className="section reveal">
          <p className="eyebrow">// technical depth — mobile capabilities</p>
          <h2 className="title mono">Built for real-world conditions</h2>
          <div className="grid grid-3">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 3 4 14h6l-1 7 9-11h-6z"></path></svg><span className="cap__title">60fps animations</span></div><p className="cap__body">Profiled with Instruments and Systrace — no dropped frames, on flagship or mid-range hardware.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><path d="M8 10h8M8 14h5"></path></svg><span className="cap__title">Offline mode</span></div><p className="cap__body">SQLite, Room, and MMKV with background sync queues that hold up on real-world connections.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a5 5 0 0 1 5 5v3.5l1.8 3A1 1 0 0 1 18 16H6a1 1 0 0 1-.8-1.6L7 11.5V8a5 5 0 0 1 5-5z"></path><path d="M10 19a2 2 0 0 0 4 0"></path></svg><span className="cap__title">Push notifications</span></div><p className="cap__body">APNS and FCM, rich notifications, and deep links that route users straight into the app.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="13" rx="2"></rect><path d="M3 10h18M7 15h4"></path></svg><span className="cap__title">In-app purchases</span></div><p className="cap__body">StoreKit 2, Play Billing, and subscription management wired up and store-compliant.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg><span className="cap__title">Security</span></div><p className="cap__body">Biometrics, Keychain, Keystore, and certificate pinning standard on every build.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"></path><circle cx="12" cy="10" r="2.5"></circle></svg><span className="cap__title">Maps &amp; location</span></div><p className="cap__body">MapKit, Google Maps, geofencing, and background location handled without draining the battery.</p></div>
          </div>
        </section>

        <section id="s-stack" className="section reveal">
          <p className="eyebrow">import &#123; stack &#125; from "@dww/mobile" <span className="c">// the mobile stack</span></p>
          <h2 className="title mono">Mobile stack</h2>
          <div className="stack-tabs" data-stack>
            <button className="stack-tab" data-cat="iOS">iOS <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Android">Android <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Cross-Platform">Cross-Platform <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Backend">Backend <span className="n">[4]</span></button>
          </div>
          <div className="stack-grid">
            <div className="stack-cell" data-cat="iOS"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--text)"}}>Sw</span><div className="stack-cell__name">Swift 5</div><div className="stack-cell__cat">iOS</div></div>
            <div className="stack-cell" data-cat="iOS"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>Su</span><div className="stack-cell__name">SwiftUI</div><div className="stack-cell__cat">iOS</div></div>
            <div className="stack-cell" data-cat="iOS"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>UI</span><div className="stack-cell__name">UIKit</div><div className="stack-cell__cat">iOS</div></div>
            <div className="stack-cell" data-cat="iOS"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>Xc</span><div className="stack-cell__name">Xcode</div><div className="stack-cell__cat">iOS</div></div>
            <div className="stack-cell" data-cat="Android"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--green)"}}>Kt</span><div className="stack-cell__name">Kotlin</div><div className="stack-cell__cat">Android</div></div>
            <div className="stack-cell" data-cat="Android"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--green)"}}>Jc</span><div className="stack-cell__name">Jetpack Compose</div><div className="stack-cell__cat">Android</div></div>
            <div className="stack-cell" data-cat="Android"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>M3</span><div className="stack-cell__name">Material 3</div><div className="stack-cell__cat">Android</div></div>
            <div className="stack-cell" data-cat="Android"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>Gr</span><div className="stack-cell__name">Gradle</div><div className="stack-cell__cat">Android</div></div>
            <div className="stack-cell" data-cat="Cross-Platform"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#61dafb"}}>RN</span><div className="stack-cell__name">React Native</div><div className="stack-cell__cat">Cross-Platform</div></div>
            <div className="stack-cell" data-cat="Cross-Platform"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--text)"}}>Ex</span><div className="stack-cell__name">Expo</div><div className="stack-cell__cat">Cross-Platform</div></div>
            <div className="stack-cell" data-cat="Cross-Platform"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Fl</span><div className="stack-cell__name">Flutter</div><div className="stack-cell__cat">Cross-Platform</div></div>
            <div className="stack-cell" data-cat="Cross-Platform"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Da</span><div className="stack-cell__name">Dart</div><div className="stack-cell__cat">Cross-Platform</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>Fb</span><div className="stack-cell__name">Firebase</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--green)"}}>Re</span><div className="stack-cell__name">REST APIs</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>GQ</span><div className="stack-cell__name">GraphQL</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--text)"}}>Ws</span><div className="stack-cell__name">WebSockets</div><div className="stack-cell__cat">Backend</div></div>
          </div>
        </section>

        <section id="s-process" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>mobileProcess</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">Mobile development process</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Design &amp; prototype</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Core development</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">QA &amp; device testing</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Store submission</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04 · ◷ prototype</div><div className="pipe-detail__title">Design &amp; prototype</div><p className="pipe-detail__body">Platform-native Figma designs and clickable TestFlight builds — so you're testing the feel of the app, not a static mockup.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Platform-native Figma designs</span></li><li><span className="ok">✓</span><span>Clickable TestFlight build</span></li><li><span className="ok">✓</span><span>Scope locked before sprint one</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww design --mobile</div><div className="t2">✓ designs approved  ✓ TestFlight build live  ✓ scope locked</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04 · ◷ sprints</div><div className="pipe-detail__title">Core development</div><p className="pipe-detail__body">Feature sprints with daily builds on physical devices — not just a simulator — so performance issues surface early.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Daily builds on physical devices</span></li><li><span className="ok">✓</span><span>Feature sprints with clear scope</span></li><li><span className="ok">✓</span><span>Offline-first from the first build</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww build --device</div><div className="t2">✓ daily build shipped  ✓ device-tested  ✓ perf profiled</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04 · ◷ device matrix</div><div className="pipe-detail__title">QA &amp; device testing</div><p className="pipe-detail__body">A 20+ device matrix via Firebase Test Lab, profiled with Instruments and Systrace to kill dropped frames before launch.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>20+ device matrix, Firebase Test Lab</span></li><li><span className="ok">✓</span><span>Instruments / Systrace profiling</span></li><li><span className="ok">✓</span><span>Zero dropped-frame regressions</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww test --devices 20</div><div className="t2">✓ matrix passed  ✓ 60fps confirmed  ✓ no crashes</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04 · ◷ launch</div><div className="pipe-detail__title">Store submission</div><p className="pipe-detail__body">End-to-end App Store and Play Store submission management, so policy rejections don't blindside your launch date.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>App Review &amp; Play Policy compliance</span></li><li><span className="ok">✓</span><span>Store listing &amp; assets prepared</span></li><li><span className="ok">✓</span><span>Submission managed end to end</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww submit --stores</div><div className="t2">✓ App Store approved  ✓ Play Store live  ✓ monitored</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">WHAT_YOU_GET</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Figma design source files</span></div><div><span className="plus">+</span><span>Clean, documented codebase</span></div><div><span className="plus">+</span><span>CI/CD pipeline</span></div><div><span className="plus">+</span><span>SEO &amp; analytics setup</span></div><div><span className="plus">+</span><span>Performance report</span></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// why DWW for mobile</p>
          <h2 className="title mono">Native depth or cross-platform reach — decided by the work</h2>
          <div className="grid grid-4 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>✅ STORES</div><div className="cap__title" style={{"marginTop":"10px"}}>Store submission experts</div><p className="cap__body">We handle App Review and Play Policy compliance to avoid rejections.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>⚡ FAST</div><div className="cap__title" style={{"marginTop":"10px"}}>Performance-first</div><p className="cap__body">60fps profiled — no jank in any of our apps, on flagship or mid-range hardware.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>📴 OFFLINE</div><div className="cap__title" style={{"marginTop":"10px"}}>Offline-first</div><p className="cap__body">Designed for real-world connectivity, not ideal lab Wi-Fi conditions.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🔒 SECURE</div><div className="cap__title" style={{"marginTop":"10px"}}>Security built-in</div><p className="cap__body">Biometrics, certificate pinning, and secure storage standard on every build.</p></div>
          </div>
          <div className="panel-note" style={{"background":"var(--panel)"}}><p style={{"fontSize":"16px","color":"var(--text-2)","lineHeight":"1.65","maxWidth":"960px"}}>Choosing a mobile app development company is really a bet on two things: whether the app runs at a smooth 60fps on a mid-range Android as well as the latest iPhone, and whether it clears App Review and Play policy without weeks of back-and-forth. We reach for SwiftUI and Jetpack Compose when you need deep hardware access — BLE, background location, StoreKit 2 subscriptions — and React Native when 90% shared code and faster iteration outweigh native gains. Either way, the app is offline-first from day one, with SQLite or MMKV and background sync queues. Most apps also need a backend, and we build that in the same team — a scalable SaaS platform with the APIs and webhooks your app talks to, rather than handing you a client that points at nothing. If you have an existing app in trouble, we audit the codebase first and tell you honestly whether to modernise or rewrite.</p></div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// mobile-app-development.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Native or cross-platform?<span className="sign">[+]</span></button><div className="faq__a"><p>Native for maximum performance and platform-specific features. React Native or Flutter when cost-efficiency and code sharing outweigh native advantages.</p></div></div>
            <div className="faq__item"><button className="faq__q">How long does a mobile app take?<span className="sign">[+]</span></button><div className="faq__a"><p>Simple app: 6–10 weeks. Complex app with backend: 3–5 months. We scope in week one.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you maintain apps after launch?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — we offer retainer plans for OS updates, bug fixes, and feature iterations.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you take over an existing app?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — we do code audits, then either modernise or rewrite depending on the state of the codebase.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <Link className="svc" href="/saas-development/"><div className="svc__title" style={{"fontSize":"16px"}}>SaaS development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>The backend SaaS platform your mobile app needs to scale.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <a className="svc" href="https://digitalwebweaver.com/web-application-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Web application development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Web companion portals and admin dashboards for your mobile product.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></a>
            <a className="svc" href="https://digitalwebweaver.com/react-native-developer/"><div className="svc__title" style={{"fontSize":"16px"}}>Hire a React Native developer</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Senior React Native engineers for cross-platform mobile development.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></a>
            <a className="svc" href="https://digitalwebweaver.com/flutter-developer/"><div className="svc__title" style={{"fontSize":"16px"}}>Hire a Flutter developer</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Flutter engineers for beautiful, performant iOS and Android apps.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></a>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --mobile-project<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to ship your mobile app?</h2>
          <p className="cta__lead">Get a free scoping brief and fixed-price estimate from a senior mobile engineer within 24 hours.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Start your app project</Link>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Cross-platform or native</span><span><span className="g">●</span> Fixed price</span><span><span className="g">●</span> App Store handled</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">mobile-app.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
