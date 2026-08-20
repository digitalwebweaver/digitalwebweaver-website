import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { softwareApplicationSchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "RideEasy — Branded Cab Booking App Suite | Digital Web Weaver" },
  description: "RideEasy bundles a rider app, driver app, and dispatch dashboard into one branded platform — live tracking, fare estimation, and payments. 0% commission, live in 6–8 weeks.",
  alternates: { canonical: "/rideeasy/" },
  openGraph: { title: "RideEasy — Branded Cab Booking App Suite | Digital Web Weaver", description: "RideEasy bundles a rider app, driver app, and dispatch dashboard into one branded platform — live tracking, fare estimation, and payments. 0% commission, live in 6–8 weeks.", url: "/rideeasy/", type: "website" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={softwareApplicationSchema({ name: "RideEasy", description: "RideEasy bundles a rider app, driver app, and dispatch dashboard into one branded platform — live tracking, fare estimation, and payments. 0% commission, live in 6–8 weeks.", href: "/rideeasy/" })} />
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-features" data-target="s-features" title="Features">⚙</button>
      <button className="activitybar__btn" data-scroll="s-how" data-target="s-how" title="How it works">❯</button>
      <button className="activitybar__btn" data-scroll="s-included" data-target="s-included" title="What's included">✓</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> rideeasy.ts</button>
        <button className="tab" data-scroll="s-features" data-target="s-features"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> features.ts</button>
        <button className="tab" data-scroll="s-how" data-target="s-how"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> how-it-works.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// rideeasy.ts · branded cab booking app suite</p>
            <span className="badge">RIDEEASY</span>
            <h1 className="hero__h1">Launch your own cab booking app — <span className="pink">without the cut</span></h1>
            <p className="hero__lead">RideEasy bundles a rider app, driver app, and dispatch dashboard into one branded platform — live tracking, fare estimation, and payments included — so your fleet runs on your brand, not a marketplace's.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Book my demo</a>
              <a className="btn btn--ghost" href="#s-features" data-scroll="s-features">$ view --features</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>0%</b><span>commission</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>6–8 wks</b><span>to go live</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>3</b><span>apps in one suite</span></div>
            </div>
          </div>
          <div className="formcard" id="demo">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">demo.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE DEMO</p>
              <p className="form__title">See RideEasy in action</p>
              <p className="form__lead">Book a 30-minute walkthrough — we'll map it to your fleet and city.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME</label><input className="input" name="name" placeholder="Your name" /></div>
                <div className="field"><label className="label">WORK EMAIL</label><input className="input" name="email" type="email" placeholder="you@fleet.com" /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">FLEET TYPE</label>
                <select className="select" name="type"><option>City taxi / cab operator</option><option>Corporate &amp; employee transport</option><option>Auto-rickshaw / local fleet</option><option>Rental &amp; outstation operator</option><option>Other</option></select>
                </div>
                <div className="field"><label className="label">FLEET SIZE</label>
                <select className="select" name="size"><option>Under 20 vehicles</option><option>20–100 vehicles</option><option>100–500 vehicles</option><option>500+ vehicles</option></select>
                </div>
              </div>
              <button className="form__submit" type="submit">Book a free demo ↗</button>
              <p className="form__micro">No commitment · reply within 24 hours</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww demo --book rideeasy</div>
              <div className="s1">✓ request received<br />✓ routed to a product specialist<br />✓ demo slot being arranged</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll be in touch within 24 hours to schedule.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>0%</div><div className="lbl">COMMISSION</div><div className="sub">▲ to the platform provider</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>6–8 wks</div><div className="lbl">TIME_TO_LAUNCH</div><div className="sub">▲ kickoff → live</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>3</div><div className="lbl">APPS</div><div className="sub">▲ rider · driver · dispatch</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
        </section>

        <section id="s-features" className="section reveal">
          <p className="eyebrow">const features = [ <span className="c">// what's inside RideEasy</span></p>
          <h2 className="title mono">What's inside</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Rider app</div><p className="svc__body">Riders book instantly or schedule rides, see live fare estimates, track drivers in real time, and pay in-app.</p><div className="svc__foot"><span>rider-app.tsx</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Driver app</div><p className="svc__body">Drivers receive ride requests, get optimised navigation, manage availability, and track daily earnings.</p><div className="svc__foot"><span>driver-app.tsx</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Dispatch dashboard</div><p className="svc__body">Operators monitor live rides, manage driver onboarding, assign rides manually when needed, and view fleet analytics.</p><div className="svc__foot"><span>dispatch.tsx</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Live GPS tracking</div><p className="svc__body">Real-time location sharing between rider and driver with accurate ETAs throughout the trip.</p><div className="svc__foot"><span>tracking.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Smart fare estimation</div><p className="svc__body">Distance, time, and demand-based fare calculation shown upfront — fully configurable to your pricing model.</p><div className="svc__foot"><span>fares.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Payments &amp; driver payouts</div><p className="svc__body">UPI, cards, wallets, and cash supported, with automatic fare splits and scheduled driver payouts.</p><div className="svc__foot"><span>payouts.ts</span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// built for</p>
          <h2 className="title mono">Who RideEasy is built for</h2>
          <div className="grid grid-4 stagger">
            <div className="cap"><div className="cap__title">City taxi &amp; cab operators</div><p className="cap__body">Run a full on-demand booking service in your city without paying per-ride commissions to aggregators.</p></div>
            <div className="cap"><div className="cap__title">Corporate &amp; employee transport</div><p className="cap__body">Manage scheduled staff pickups, shift-based bookings, and centralised billing for businesses.</p></div>
            <div className="cap"><div className="cap__title">Auto-rickshaw &amp; local fleets</div><p className="cap__body">Bring smaller, local fleets online with a booking experience riders already expect from bigger platforms.</p></div>
            <div className="cap"><div className="cap__title">Rental &amp; outstation operators</div><p className="cap__body">Support hourly rentals and outstation trips alongside regular point-to-point bookings.</p></div>
          </div>
        </section>

        <section id="s-how" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>launchRideEasy</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">How it works</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Tell us</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Brand the apps</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Onboard drivers</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Launch</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04</div><div className="pipe-detail__title">Tell us about your fleet &amp; city</div><p className="pipe-detail__body">Share fleet size, service areas, vehicle types, and pricing model.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Fleet size &amp; vehicle types</span></li><li><span className="ok">✓</span><span>Service areas defined</span></li><li><span className="ok">✓</span><span>Pricing model captured</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ rideeasy intake --fleet</div><div className="t2">✓ fleet captured  ✓ pricing model set</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04</div><div className="pipe-detail__title">We brand all three apps as yours</div><p className="pipe-detail__body">Configure and brand with your identity and pricing rules across rider, driver, and dispatch apps.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Rider app branded</span></li><li><span className="ok">✓</span><span>Driver app branded</span></li><li><span className="ok">✓</span><span>Pricing rules configured</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ rideeasy brand --all</div><div className="t2">✓ 3 apps branded  ✓ pricing configured</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04</div><div className="pipe-detail__title">Onboard your drivers</div><p className="pipe-detail__body">Register, verify documents, and train drivers before go-live.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Driver registration &amp; verification</span></li><li><span className="ok">✓</span><span>Document checks completed</span></li><li><span className="ok">✓</span><span>Driver training delivered</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ rideeasy onboard --drivers</div><div className="t2">✓ drivers verified  ✓ training complete</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04</div><div className="pipe-detail__title">Launch &amp; start taking direct bookings</div><p className="pipe-detail__body">Go live on the App Store and Play Store with 30 days of post-launch support included.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Live on App Store &amp; Play Store</span></li><li><span className="ok">✓</span><span>Taking direct bookings</span></li><li><span className="ok">✓</span><span>30 days post-launch support</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ rideeasy launch</div><div className="t2">✓ live on stores  ✓ bookings flowing</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div id="s-included" className="panel-note">
            <div className="panel-note__lbl">WHATS_INCLUDED</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Branded rider app (iOS &amp; Android)</span></div><div><span className="plus">+</span><span>Driver app with earnings dashboard</span></div><div><span className="plus">+</span><span>Dispatch &amp; operations dashboard</span></div><div><span className="plus">+</span><span>Payment gateway integration</span></div><div><span className="plus">+</span><span>Driver onboarding support</span></div><div><span className="plus">+</span><span>30 days post-launch support</span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// client words</p>
          <div className="grid grid-3">
            <div className="quote"><div className="stars">★★★★★</div><p>We had forty cars and no way to compete with the big apps for visibility. With our own branded app, we're no longer at the mercy of someone else's commission structure — and our regular riders book direct now.</p><div className="quote__who"><div className="quote__avatar">YS</div><div><div className="quote__name">Yusuf Shaikh</div><div className="quote__role">Fleet Owner, CityLine Cabs</div></div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// rideeasy.faq.md</p>
          <h2 className="title mono">Questions we always get asked</h2>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Can we set our own fare rules and pricing model?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — base fares, per-km and per-minute rates, surge rules, and ride-type pricing are all configurable.</p></div></div>
            <div className="faq__item"><button className="faq__q">How do we get existing drivers onto the platform?<span className="sign">[+]</span></button><div className="faq__a"><p>Bulk driver onboarding, document verification, and hands-on training provided before launch.</p></div></div>
            <div className="faq__item"><button className="faq__q">Does it support both instant and scheduled bookings?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — instant bookings and advance scheduling, plus recurring corporate pickups supported.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can dispatch staff manually assign rides when needed?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — dispatch dashboard allows live ride monitoring and manual assignment/reassignment capabilities.</p></div></div>
            <div className="faq__item"><button className="faq__q">How long until first booking?<span className="sign">[+]</span></button><div className="faq__a"><p>Most fleets go live within 6–8 weeks, including branding, onboarding, and app store approval.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <Link className="svc" href="/quickbite/"><div className="svc__title" style={{"fontSize":"16px"}}>QuickBite</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Food delivery app suite — commission-free.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/callmate-ai/"><div className="svc__title" style={{"fontSize":"16px"}}>CallMate AI</div><p className="svc__body" style={{"fontSize":"13.5px"}}>AI voice agent for handling booking calls.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/chatflow-ai/"><div className="svc__title" style={{"fontSize":"16px"}}>ChatFlow AI</div><p className="svc__body" style={{"fontSize":"13.5px"}}>WhatsApp automation for bookings &amp; updates.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/products/"><div className="svc__title" style={{"fontSize":"16px"}}>All products</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Browse the full catalogue of ready-made products.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./rideeasy --book-demo<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to run your fleet on your own brand?</h2>
          <p className="cta__lead">Book a 30-minute demo — we'll walk you through RideEasy, map it to your fleet, and give you a fixed launch timeline.</p>
          <div className="cta__btns">
            <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book my demo</a>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free demo</span><span><span className="g">●</span> 0% commission</span><span><span className="g">●</span> Live in 6–8 weeks</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">rideeasy.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
