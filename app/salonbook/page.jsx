import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "SalonBook — Salon Management System | Digital Web Weaver" },
  description: "SalonBook brings online booking, staff scheduling, billing, service packages, inventory, and automated client follow-ups into one branded system. Live in 3–5 weeks.",
  alternates: { canonical: "/salonbook/" },
  openGraph: { title: "SalonBook — Salon Management System | Digital Web Weaver", description: "SalonBook brings online booking, staff scheduling, billing, service packages, inventory, and automated client follow-ups into one branded system. Live in 3–5 weeks.", url: "/salonbook/", type: "website" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={serviceSchema({ name: "SalonBook", description: "SalonBook brings online booking, staff scheduling, billing, service packages, inventory, and automated client follow-ups into one branded system. Live in 3–5 weeks.", href: "/salonbook/" })} />
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-features" data-target="s-features" title="Features">⚙</button>
      <button className="activitybar__btn" data-scroll="s-how" data-target="s-how" title="How it works">❯</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> salonbook.ts</button>
        <button className="tab" data-scroll="s-features" data-target="s-features"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> features.ts</button>
        <button className="tab" data-scroll="s-how" data-target="s-how"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> how-it-works.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// salonbook.ts · salon management system · SaaS product</p>
            <span className="badge">SALON MANAGEMENT</span>
            <h1 className="hero__h1">Run your salon like a <span className="pink">brand</span> clients <span className="teal">keep coming back to</span></h1>
            <p className="hero__lead">SalonBook brings online booking, staff scheduling, billing, service packages, inventory, and automated client follow-ups into one branded system.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book a demo</a>
              <a className="btn btn--ghost" href="#s-features" data-scroll="s-features">$ view --features</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>3–5 wks</b><span>to go live</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>100%</b><span>branded experience</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>150+</b><span>clients worldwide</span></div>
            </div>
          </div>
          <div className="formcard" id="demo">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">demo.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE PRODUCT DEMO</p>
              <p className="form__title">See SalonBook in action</p>
              <p className="form__lead">Book a 30-minute demo — we'll walk through the fit for your salon and give you a fixed timeline.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME *</label><input className="input" name="name" placeholder="Your name" required /></div>
                <div className="field"><label className="label">WORK EMAIL *</label><input className="input" name="email" type="email" placeholder="you@salon.com" required /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">BUSINESS TYPE</label>
                <select className="select" name="type"><option>Hair &amp; beauty salon</option><option>Spa / wellness centre</option><option>Nail bar / beauty studio</option><option>Multi-branch salon chain</option><option>Other</option></select>
                </div>
                <div className="field"><label className="label">NUMBER OF STAFF</label>
                <select className="select" name="size"><option>1–5</option><option>6–15</option><option>16–40</option><option>40+</option></select>
                </div>
              </div>
              <button className="form__submit" type="submit">Book my demo ↗</button>
              <p className="form__micro">Free demo · No commitment</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww demo --book salonbook</div>
              <div className="s1">✓ request received<br />✓ best-fit setup identified<br />✓ demo slot being arranged</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll be in touch within 24 hours to schedule.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>3–5 wks</div><div className="lbl">TO_GO_LIVE</div><div className="sub">▲ demo → live platform</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>↓</div><div className="lbl">NO-SHOWS</div><div className="sub">▲ with automated reminders</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>100%</div><div className="lbl">BRANDED</div><div className="sub">▲ your salon's identity</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
        </section>

        <section id="s-features" className="section reveal">
          <p className="eyebrow">const features = [ <span className="c">// what SalonBook replaces</span></p>
          <h2 className="title mono">Everything a salon runs on</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Online Booking &amp; Scheduling</div><p className="svc__body">Clients book services online with real-time stylist and chair availability — no phone tag required.</p><div className="svc__foot"><span>booking.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Staff Scheduling &amp; Commission</div><p className="svc__body">Manage stylist shifts, service assignments, and automatic commission calculations on every booking.</p><div className="svc__foot"><span>staff.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Billing, Packages &amp; Memberships</div><p className="svc__body">Sell service packages, prepaid memberships, and gift cards with integrated billing and balance tracking.</p><div className="svc__foot"><span>billing.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Inventory &amp; Retail Sales</div><p className="svc__body">Track product stock for in-salon use and retail sales, with automatic deduction and low-stock alerts.</p><div className="svc__foot"><span>inventory.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Loyalty &amp; Referral Programs</div><p className="svc__body">Run point-based loyalty programs and referral rewards that bring clients back.</p><div className="svc__foot"><span>loyalty.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Automated Reminders &amp; Rebooking</div><p className="svc__body">Cut no-shows with appointment reminders, and prompt clients to rebook automatically.</p><div className="svc__foot"><span>reminders.ts</span></div></div>
          </div>
        </section>

        <section id="s-how" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>salonbookRollout</span>() &#123; <span className="c">// demo to live in 3–5 weeks</span></p>
          <h2 className="title mono">From demo to live in 3–5 weeks</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Share details</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Configure &amp; brand</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Migrate records</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Train &amp; launch</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04 · ◷ week 1</div><div className="pipe-detail__title">Share your details</div><p className="pipe-detail__body">You share your service menu, pricing, staff structure, and current booking methods so we can plan the rollout.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Service menu &amp; pricing captured</span></li><li><span className="ok">✓</span><span>Staff structure mapped</span></li><li><span className="ok">✓</span><span>Rollout plan confirmed</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww discover --salon</div><div className="t2">✓ menu captured  ✓ staff mapped  ✓ plan confirmed</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04 · ◷ weeks 2–3</div><div className="pipe-detail__title">Configure &amp; brand</div><p className="pipe-detail__body">SalonBook is branded and configured with your services, packages, memberships, and loyalty program templates.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Salon branding applied</span></li><li><span className="ok">✓</span><span>Services &amp; packages configured</span></li><li><span className="ok">✓</span><span>Loyalty templates set up</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww configure --brand</div><div className="t2">✓ branded  ✓ services configured  ✓ loyalty ready</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04 · ◷ weeks 3–4</div><div className="pipe-detail__title">Migrate records</div><p className="pipe-detail__body">Existing client records and appointment history are migrated into SalonBook so nothing is lost in the switch.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Client records migrated</span></li><li><span className="ok">✓</span><span>Appointment history migrated</span></li><li><span className="ok">✓</span><span>Data verified against source</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww migrate --records</div><div className="t2">✓ records migrated  ✓ verified</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04 · ◷ weeks 4–5</div><div className="pipe-detail__title">Train &amp; launch</div><p className="pipe-detail__body">Your team is trained and SalonBook goes live, backed by dedicated support through the transition.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Team trained end to end</span></li><li><span className="ok">✓</span><span>Live on your domain</span></li><li><span className="ok">✓</span><span>30 days post-launch support</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww launch --salon</div><div className="t2">✓ team trained  ✓ live  ✓ support active</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">WHATS_INCLUDED</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Branded booking website / widget</span></div><div><span className="plus">+</span><span>Front-desk &amp; staff dashboard</span></div><div><span className="plus">+</span><span>Client mobile app</span></div><div><span className="plus">+</span><span>Loyalty &amp; package templates</span></div><div><span className="plus">+</span><span>Staff onboarding &amp; training</span></div><div><span className="plus">+</span><span>30 days post-launch support</span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// what salon owners say</p>
          <div className="quote" style={{"maxWidth":"640px","margin":"0 auto"}}>
            <div className="stars">★★★★★</div>
            <p>We used to lose track of who was due for a colour touch-up or package renewal. Now SalonBook nudges them automatically.</p>
            <div className="quote__who"><div className="quote__avatar">TA</div><div><div className="quote__name">Tanvi Acharya</div><div className="quote__role">Owner · Belle Époque Salon &amp; Spa</div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// salonbook.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Can clients book with a specific stylist?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — clients can choose their preferred stylist when booking, and the system manages availability accordingly.</p></div></div>
            <div className="faq__item"><button className="faq__q">Does it handle staff commissions automatically?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — commission rules can be configured per staff member or service, and calculated automatically.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can we sell packages and memberships?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — create prepaid packages, memberships, and gift cards with automatic balance tracking.</p></div></div>
            <div className="faq__item"><button className="faq__q">Is multi-branch supported?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — multi-branch salons get centralised reporting with per-location staff, services, and scheduling.</p></div></div>
            <div className="faq__item"><button className="faq__q">What's the timeline to go live?<span className="sign">[+]</span></button><div className="faq__a"><p>Most salons are live within 3–5 weeks, including branding, data migration, and staff training.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// related products</p>
          <div className="grid grid-4">
            <Link className="svc" href="/glowdesk/"><div className="svc__title" style={{"fontSize":"16px"}}>GlowDesk</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Software for aesthetic and cosmetic clinics — bookings and treatment plans.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/clinicflow/"><div className="svc__title" style={{"fontSize":"16px"}}>ClinicFlow</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Clinic management system for doctors — scheduling, EMR, and billing.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/chatflow-ai/"><div className="svc__title" style={{"fontSize":"16px"}}>ChatFlow AI</div><p className="svc__body" style={{"fontSize":"13.5px"}}>WhatsApp automation agent for enquiries, bookings, and follow-ups.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/products/"><div className="svc__title" style={{"fontSize":"16px"}}>Browse all products</div><p className="svc__body" style={{"fontSize":"13.5px"}}>See the full catalog of ready-made software products.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./demo --book salonbook<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to run your salon like a brand?</h2>
          <p className="cta__lead">Book a 30-minute demo. We'll walk you through SalonBook, answer your questions, and give you a fixed launch timeline.</p>
          <div className="cta__btns">
            <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book a demo</a>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free demo</span><span><span className="g">●</span> 3–5 week launch</span><span><span className="g">●</span> 30 days post-launch support</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">salonbook.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
