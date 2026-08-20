import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { softwareApplicationSchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "GlowDesk — Aesthetic Clinic Management Software | Digital Web Weaver" },
  description: "GlowDesk brings booking, treatment plans, before/after galleries, consent forms, billing, and automated follow-ups into one branded system for aesthetic clinics.",
  alternates: { canonical: "/glowdesk/" },
  openGraph: { title: "GlowDesk — Aesthetic Clinic Management Software | Digital Web Weaver", description: "GlowDesk brings booking, treatment plans, before/after galleries, consent forms, billing, and automated follow-ups into one branded system for aesthetic clinics.", url: "/glowdesk/", type: "website" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={softwareApplicationSchema({ name: "GlowDesk", description: "GlowDesk brings booking, treatment plans, before/after galleries, consent forms, billing, and automated follow-ups into one branded system for aesthetic clinics.", href: "/glowdesk/", review: { author: "Dr. Anjali Mistry", body: "Our no-show rate used to eat into nearly a fifth of our schedule. The automated reminders alone paid for the system in the first month — and the before/after galleries have become a real selling point in consultations." } })} />
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
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> glowdesk.ts</button>
        <button className="tab" data-scroll="s-features" data-target="s-features"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> features.ts</button>
        <button className="tab" data-scroll="s-how" data-target="s-how"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> how-it-works.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// glowdesk.ts · aesthetic clinic management software</p>
            <span className="badge">GLOWDESK</span>
            <h1 className="hero__h1">Run your aesthetic clinic like the <span className="pink">premium brand</span> it is</h1>
            <p className="hero__lead">GlowDesk brings booking, treatment plans, before/after galleries, consent forms, billing, and automated client follow-ups into one elegant system — so your front desk feels as polished as your treatment rooms.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Book my demo</a>
              <a className="btn btn--ghost" href="#s-features" data-scroll="s-features">$ view --features</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>4–5 wks</b><span>to launch</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>↓</b><span>no-show reduction</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>100%</b><span>branded experience</span></div>
            </div>
          </div>
          <div className="formcard" id="demo">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">demo.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE DEMO</p>
              <p className="form__title">See GlowDesk in action</p>
              <p className="form__lead">Book a 30-minute walkthrough mapped to your clinic's client journey.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME *</label><input className="input" name="name" placeholder="Your name" required /></div>
                <div className="field"><label className="label">WORK EMAIL *</label><input className="input" name="email" type="email" placeholder="you@clinic.com" required /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">CLINIC TYPE</label>
                <select className="select" name="type"><option>Skin &amp; laser clinic</option><option>Med-spa / wellness centre</option><option>Cosmetic dental / dermatology</option><option>Multi-branch clinic chain</option><option>Other</option></select>
                </div>
                <div className="field"><label className="label">BRANCHES</label>
                <select className="select" name="branches"><option>1 location</option><option>2–5 locations</option><option>6+ locations</option></select>
                </div>
              </div>
              <button className="form__submit" type="submit">Book a free demo ↗</button>
              <p className="form__micro">No commitment · reply within 24 hours</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww demo --book glowdesk</div>
              <div className="s1">✓ request received<br />✓ routed to a product specialist<br />✓ demo slot being arranged</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll be in touch within 24 hours to schedule.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>4–5 wks</div><div className="lbl">TIME_TO_LAUNCH</div><div className="sub">▲ kickoff → live</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>↓</div><div className="lbl">NO_SHOWS</div><div className="sub">▲ automated reminders</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>100%</div><div className="lbl">BRANDED</div><div className="sub">▲ your brand, not ours</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
        </section>

        <section id="s-features" className="section reveal">
          <p className="eyebrow">const features = [ <span className="c">// core GlowDesk features</span></p>
          <h2 className="title mono">Core features</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Online booking &amp; scheduling</div><p className="svc__body">Clients book treatments and consultations online with real-time staff and room availability — no back-and-forth calls.</p><div className="svc__foot"><span>booking.tsx</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Treatment plans &amp; records</div><p className="svc__body">Build multi-session treatment plans, log products used, and track progress with structured clinical notes.</p><div className="svc__foot"><span>treatments.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Before/after photo galleries</div><p className="svc__body">Capture and organise progress photos securely against each client's record — great for results tracking and consultations.</p><div className="svc__foot"><span>gallery.tsx</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Digital consent &amp; intake forms</div><p className="svc__body">Replace paper forms with digital consent, medical history, and intake forms clients fill before arriving.</p><div className="svc__foot"><span>forms.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Billing, packages &amp; memberships</div><p className="svc__body">Sell treatment packages, memberships, and gift vouchers with integrated billing and automatic balance tracking.</p><div className="svc__foot"><span>billing.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Automated reminders &amp; follow-ups</div><p className="svc__body">Cut no-shows with SMS/WhatsApp reminders, and bring clients back with automated post-treatment and re-booking nudges.</p><div className="svc__foot"><span>reminders.ts</span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// built for</p>
          <h2 className="title mono">Who GlowDesk is built for</h2>
          <div className="grid grid-4 stagger">
            <div className="cap"><div className="cap__title">Skin &amp; laser clinics</div><p className="cap__body">Track multi-session packages, device settings per session, and progress photos in one client timeline.</p></div>
            <div className="cap"><div className="cap__title">Med-spas &amp; wellness centres</div><p className="cap__body">Combine aesthetic treatments with spa services, memberships, and retail product sales.</p></div>
            <div className="cap"><div className="cap__title">Cosmetic dental &amp; dermatology</div><p className="cap__body">Manage consultations, treatment plans, and recall schedules alongside billing and insurance notes.</p></div>
            <div className="cap"><div className="cap__title">Multi-branch clinic chains</div><p className="cap__body">Run multiple locations from one system with centralised reporting and per-branch staff scheduling.</p></div>
          </div>
        </section>

        <section id="s-how" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>launchGlowDesk</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">Implementation process</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Discovery</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Configuration</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Migration</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Launch</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04</div><div className="pipe-detail__title">Discovery</div><p className="pipe-detail__body">Walk us through your client journey — we map current operations before configuring anything.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Client journey mapped</span></li><li><span className="ok">✓</span><span>Current operations reviewed</span></li><li><span className="ok">✓</span><span>Launch timeline confirmed</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ glowdesk discover</div><div className="t2">✓ journey mapped  ✓ timeline confirmed</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04</div><div className="pipe-detail__title">Configuration</div><p className="pipe-detail__body">We brand and configure GlowDesk — services, staff, and branding customised to your clinic.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Services &amp; staff configured</span></li><li><span className="ok">✓</span><span>Branding applied</span></li><li><span className="ok">✓</span><span>Booking rules set</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ glowdesk brand --configure</div><div className="t2">✓ services set  ✓ branding applied</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04</div><div className="pipe-detail__title">Migration</div><p className="pipe-detail__body">We migrate client records and history — importing existing data so nothing is lost in the switch.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Client records imported</span></li><li><span className="ok">✓</span><span>Treatment history migrated</span></li><li><span className="ok">✓</span><span>Data verified</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ glowdesk migrate --clients</div><div className="t2">✓ records imported  ✓ history verified</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04</div><div className="pipe-detail__title">Launch</div><p className="pipe-detail__body">Train your team and launch — onboarding and support included from day one.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Team trained</span></li><li><span className="ok">✓</span><span>Live &amp; taking bookings</span></li><li><span className="ok">✓</span><span>30 days post-launch support</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ glowdesk launch</div><div className="t2">✓ live on your domain  ✓ team trained</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div id="s-included" className="panel-note">
            <div className="panel-note__lbl">WHATS_INCLUDED</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Branded booking website/widget</span></div><div><span className="plus">+</span><span>Front-desk &amp; clinical dashboard</span></div><div><span className="plus">+</span><span>Client mobile app</span></div><div><span className="plus">+</span><span>Digital forms &amp; consent templates</span></div><div><span className="plus">+</span><span>Staff onboarding &amp; training</span></div><div><span className="plus">+</span><span>30 days post-launch support</span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// client words</p>
          <div className="grid grid-3">
            <div className="quote"><div className="stars">★★★★★</div><p>Our no-show rate used to eat into nearly a fifth of our schedule. The automated reminders alone paid for the system in the first month — and the before/after galleries have become a real selling point in consultations.</p><div className="quote__who"><div className="quote__avatar">AM</div><div><div className="quote__name">Dr. Anjali Mistry</div><div className="quote__role">Founder, Lumière Aesthetic Studio</div></div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// glowdesk.faq.md</p>
          <h2 className="title mono">Questions we always get asked</h2>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Can it handle multi-session treatment packages?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — build packages with a set number of sessions, track redemptions, and automatically prompt clients to book their next visit.</p></div></div>
            <div className="faq__item"><button className="faq__q">Is client photo and medical data stored securely?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. Photos and health records are stored with access-controlled permissions, visible only to authorised staff against each client's record.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can clients book and pay online without calling the front desk?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — your branded booking page shows real-time availability, and clients can pay deposits or full amounts online during booking.</p></div></div>
            <div className="faq__item"><button className="faq__q">Will it work across multiple clinic branches?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. Multi-branch clinics get centralised reporting with per-location scheduling, staff, and inventory.</p></div></div>
            <div className="faq__item"><button className="faq__q">How soon can we be live and taking bookings?<span className="sign">[+]</span></button><div className="faq__a"><p>Most clinics are live within 4–5 weeks, including branding, data migration, and staff training.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <Link className="svc" href="/clinicflow/"><div className="svc__title" style={{"fontSize":"16px"}}>ClinicFlow</div><p className="svc__body" style={{"fontSize":"13.5px"}}>General &amp; multi-specialty clinic management.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/salonbook/"><div className="svc__title" style={{"fontSize":"16px"}}>SalonBook</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Salon management — booking, staff, billing.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/telecare/"><div className="svc__title" style={{"fontSize":"16px"}}>TeleCare</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Telemedicine platform — video consults &amp; e-prescriptions.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/products/"><div className="svc__title" style={{"fontSize":"16px"}}>All products</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Browse the full catalogue of ready-made products.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./glowdesk --book-demo<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to run your clinic on one system?</h2>
          <p className="cta__lead">Book a 30-minute demo — we'll walk you through GlowDesk, map it to your client journey, and give you a fixed launch timeline.</p>
          <div className="cta__btns">
            <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book my demo</a>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free demo</span><span><span className="g">●</span> 100% branded experience</span><span><span className="g">●</span> Live in 4–5 weeks</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">glowdesk.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
