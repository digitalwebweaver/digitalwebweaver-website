import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "QuickBite — Branded Food Delivery App Suite | Digital Web Weaver" },
  description: "QuickBite gives restaurants and cloud kitchens a complete delivery ecosystem — customer app, restaurant dashboard, and delivery partner app — 0% commission, live in 6–8 weeks.",
  alternates: { canonical: "/quickbite/" },
  openGraph: { title: "QuickBite — Branded Food Delivery App Suite | Digital Web Weaver", description: "QuickBite gives restaurants and cloud kitchens a complete delivery ecosystem — customer app, restaurant dashboard, and delivery partner app — 0% commission, live in 6–8 weeks.", url: "/quickbite/", type: "website" }
};

export default function Page() {
  return (
    <>
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
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> quickbite.ts</button>
        <button className="tab" data-scroll="s-features" data-target="s-features"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> features.ts</button>
        <button className="tab" data-scroll="s-how" data-target="s-how"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> how-it-works.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// quickbite.ts · branded food delivery app suite</p>
            <span className="badge">QUICKBITE</span>
            <h1 className="hero__h1">Your own food delivery app — <span className="pink">without the cut</span></h1>
            <p className="hero__lead">QuickBite gives restaurants and cloud kitchens a complete delivery ecosystem — customer app, restaurant dashboard, and delivery partner app — all branded as yours, with orders going straight to your business, not a marketplace's cut.</p>
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
              <p className="form__title">See QuickBite in action</p>
              <p className="form__lead">Book a 30-minute walkthrough — we'll map it to your menu and delivery zones.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME</label><input className="input" name="name" placeholder="Your name" /></div>
                <div className="field"><label className="label">WORK EMAIL</label><input className="input" name="email" type="email" placeholder="you@restaurant.com" /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">BUSINESS TYPE</label>
                <select className="select" name="type"><option>Independent restaurant</option><option>Cloud kitchen / multi-brand</option><option>Restaurant chain / franchise</option><option>Delivery-first food brand</option><option>Other</option></select>
                </div>
                <div className="field"><label className="label">ORDERS PER DAY</label>
                <select className="select" name="orders"><option>Under 50</option><option>50–200</option><option>200–500</option><option>500+</option></select>
                </div>
              </div>
              <button className="form__submit" type="submit">Book a free demo ↗</button>
              <p className="form__micro">No commitment · reply within 24 hours</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww demo --book quickbite</div>
              <div className="s1">✓ request received<br />✓ routed to a product specialist<br />✓ demo slot being arranged</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll be in touch within 24 hours to schedule.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>0%</div><div className="lbl">COMMISSION</div><div className="sub">▲ to the company</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>6–8 wks</div><div className="lbl">TIME_TO_LAUNCH</div><div className="sub">▲ kickoff → live</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>3</div><div className="lbl">APPS</div><div className="sub">▲ customer · restaurant · rider</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
        </section>

        <section id="s-features" className="section reveal">
          <p className="eyebrow">const features = [ <span className="c">// what's inside QuickBite</span></p>
          <h2 className="title mono">What's inside</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Customer ordering app</div><p className="svc__body">Branded iOS and Android apps where customers browse menus, customise orders, pay, and track delivery live.</p><div className="svc__foot"><span>customer-app.tsx</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Restaurant dashboard</div><p className="svc__body">Manage incoming orders, build and update menus, track sales, and view performance analytics from one screen.</p><div className="svc__foot"><span>dashboard.tsx</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Delivery partner app</div><p className="svc__body">Drivers receive order pickups, get optimised navigation, and track their earnings — all from a dedicated app.</p><div className="svc__foot"><span>rider-app.tsx</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Real-time order tracking</div><p className="svc__body">Live GPS tracking with accurate ETAs keeps customers informed from kitchen to doorstep.</p><div className="svc__foot"><span>tracking.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Payments &amp; cash-on-delivery</div><p className="svc__body">UPI, cards, net-banking, and COD supported out of the box, with automatic reconciliation and payouts.</p><div className="svc__foot"><span>payments.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Offers, coupons &amp; loyalty</div><p className="svc__body">Run discount codes, first-order offers, and repeat-customer loyalty programs to grow direct orders.</p><div className="svc__foot"><span>loyalty.ts</span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// built for</p>
          <h2 className="title mono">Who QuickBite is built for</h2>
          <div className="grid grid-4 stagger">
            <div className="cap"><div className="cap__title">Independent restaurants</div><p className="cap__body">Take direct orders without losing 25–30% to aggregator commissions on every sale.</p></div>
            <div className="cap"><div className="cap__title">Cloud kitchens &amp; multi-brand operators</div><p className="cap__body">Run multiple virtual brands from one kitchen, each with its own branded ordering app and menu.</p></div>
            <div className="cap"><div className="cap__title">Restaurant chains &amp; franchises</div><p className="cap__body">Centralise menu management and reporting across branches while keeping local delivery operations independent.</p></div>
            <div className="cap"><div className="cap__title">Delivery-first food brands</div><p className="cap__body">Launch a complete delivery operation from day one without building three separate apps from scratch.</p></div>
          </div>
        </section>

        <section id="s-how" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>launchQuickBite</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">How it works</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Tell us</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Brand the apps</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Onboard</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Launch</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04</div><div className="pipe-detail__title">Tell us about your menu &amp; delivery zones</div><p className="pipe-detail__body">Share your menu structure, pricing, and the delivery zones you want to serve from day one.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Menu &amp; pricing captured</span></li><li><span className="ok">✓</span><span>Delivery zones defined</span></li><li><span className="ok">✓</span><span>Launch timeline confirmed</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ quickbite intake --menu</div><div className="t2">✓ menu captured  ✓ zones defined</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04</div><div className="pipe-detail__title">We brand all three apps as yours</div><p className="pipe-detail__body">Customer app, restaurant dashboard, and delivery partner app — all skinned with your logo, colours, and identity.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Customer app branded</span></li><li><span className="ok">✓</span><span>Restaurant dashboard branded</span></li><li><span className="ok">✓</span><span>Rider app branded</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ quickbite brand --all</div><div className="t2">✓ 3 apps branded</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04</div><div className="pipe-detail__title">Onboard your kitchen &amp; riders</div><p className="pipe-detail__body">We help you onboard your existing kitchen staff and delivery riders onto the new apps.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Kitchen staff onboarded</span></li><li><span className="ok">✓</span><span>Riders onboarded onto driver app</span></li><li><span className="ok">✓</span><span>Payment gateway connected</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ quickbite onboard --riders</div><div className="t2">✓ kitchen ready  ✓ riders live</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04</div><div className="pipe-detail__title">Launch &amp; start taking direct orders</div><p className="pipe-detail__body">Go live on the App Store and Play Store with 30 days of post-launch support included.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Live on App Store &amp; Play Store</span></li><li><span className="ok">✓</span><span>Taking direct orders</span></li><li><span className="ok">✓</span><span>30 days post-launch support</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ quickbite launch</div><div className="t2">✓ live on stores  ✓ orders flowing</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div id="s-included" className="panel-note">
            <div className="panel-note__lbl">WHATS_INCLUDED</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Branded customer app (iOS &amp; Android)</span></div><div><span className="plus">+</span><span>Restaurant management dashboard</span></div><div><span className="plus">+</span><span>Delivery partner app</span></div><div><span className="plus">+</span><span>Payment gateway integration</span></div><div><span className="plus">+</span><span>Launch &amp; onboarding support</span></div><div><span className="plus">+</span><span>30 days post-launch support</span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// client words</p>
          <div className="grid grid-3">
            <div className="quote"><div className="stars">★★★★★</div><p>We were paying out almost a third of every order to delivery platforms. Six weeks after going live with our own app, a third of our volume already comes through it directly — commission-free.</p><div className="quote__who"><div className="quote__avatar">KO</div><div><div className="quote__name">Karan Oberoi</div><div className="quote__role">Owner, Spice Trail Kitchens</div></div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// quickbite.faq.md</p>
          <h2 className="title mono">Questions we always get asked</h2>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Do we still need to be listed on aggregator apps too?<span className="sign">[+]</span></button><div className="faq__a"><p>That's entirely your call. Many of our clients keep aggregator listings for discovery while actively pushing repeat customers to their own branded app to avoid commissions on those orders.</p></div></div>
            <div className="faq__item"><button className="faq__q">How do we get our delivery riders using the app?<span className="sign">[+]</span></button><div className="faq__a"><p>We help you onboard your existing riders onto the driver app as part of launch — most teams adapt within a few days.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can we run multiple restaurant brands from one kitchen?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — cloud kitchen operators can run several branded ordering apps and menus from a single restaurant dashboard.</p></div></div>
            <div className="faq__item"><button className="faq__q">What payment methods are supported?<span className="sign">[+]</span></button><div className="faq__a"><p>UPI, debit/credit cards, net-banking, popular wallets, and cash-on-delivery — all with automatic order reconciliation.</p></div></div>
            <div className="faq__item"><button className="faq__q">How long before we can start taking orders through our own app?<span className="sign">[+]</span></button><div className="faq__a"><p>Most restaurants go live within 6–8 weeks, including branding, menu setup, app store approval, and rider onboarding.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <Link className="svc" href="/rideeasy/"><div className="svc__title" style={{"fontSize":"16px"}}>RideEasy</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Cab booking system with live tracking and driver apps.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/chatflow-ai/"><div className="svc__title" style={{"fontSize":"16px"}}>ChatFlow AI</div><p className="svc__body" style={{"fontSize":"13.5px"}}>WhatsApp automation for orders, support, and promotions.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/callmate-ai/"><div className="svc__title" style={{"fontSize":"16px"}}>CallMate AI</div><p className="svc__body" style={{"fontSize":"13.5px"}}>AI voice agent for handling order calls automatically.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/products/"><div className="svc__title" style={{"fontSize":"16px"}}>All products</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Browse the full catalogue of ready-made products.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./quickbite --book-demo<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Stop paying a third of every order to someone else's app</h2>
          <p className="cta__lead">Book a free live walkthrough — live in 6–8 weeks, zero commission to us.</p>
          <div className="cta__btns">
            <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book my demo</a>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free live walkthrough</span><span><span className="g">●</span> Live in 6–8 weeks</span><span><span className="g">●</span> Zero commission to us</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">quickbite.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
