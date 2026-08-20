import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { softwareApplicationSchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "Manchify — Operations OS for Event Companies | Digital Web Weaver" },
  description: "Manchify is the Operations OS for Indian event companies — leads, quotes, events, vendors, manpower, rentals, and GST invoicing in one connected system.",
  alternates: { canonical: "/manchify/" },
  openGraph: { title: "Manchify — Operations OS for Event Companies | Digital Web Weaver", description: "Manchify is the Operations OS for Indian event companies — leads, quotes, events, vendors, manpower, rentals, and GST invoicing in one connected system.", url: "/manchify/", type: "website" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={softwareApplicationSchema({ name: "Manchify", description: "Manchify is the Operations OS for Indian event companies — leads, quotes, events, vendors, manpower, rentals, and GST invoicing in one connected system.", href: "/manchify/" })} />
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-features" data-target="s-features" title="Modules">⚙</button>
      <button className="activitybar__btn" data-scroll="s-how" data-target="s-how" title="How it works">❯</button>
      <button className="activitybar__btn" data-scroll="s-included" data-target="s-included" title="What's included">✓</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> manchify.ts</button>
        <button className="tab" data-scroll="s-features" data-target="s-features"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> modules.ts</button>
        <button className="tab" data-scroll="s-how" data-target="s-how"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> how-it-works.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// manchify.ts · operations OS for event companies · India-first</p>
            <span className="badge">MANCHIFY</span>
            <h1 className="hero__h1">The <span className="pink">Operations OS</span> for Indian event companies</h1>
            <p className="hero__lead">From the first enquiry to the final rupee — leads, quotes, events, vendors, manpower, rentals, and GST money in one place.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Book my free demo</a>
              <a className="btn btn--ghost" href="#s-features" data-scroll="s-features">$ view --modules</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>10</b><span>modules, one platform</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>60s</b><span>to a GST quote</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>6</b><span>event business types</span></div>
            </div>
          </div>
          <div className="formcard" id="demo">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">demo.form</span><span className="mut">— free trial</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE 14-DAY TRIAL</p>
              <p className="form__title">See Manchify in action</p>
              <p className="form__lead">Book a demo or start free — no credit card required.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME</label><input className="input" name="name" placeholder="Your name" /></div>
                <div className="field"><label className="label">WORK EMAIL</label><input className="input" name="email" type="email" placeholder="you@company.com" /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">BUSINESS TYPE</label>
                <select className="select" name="type"><option>Wedding planning &amp; coordination</option><option>Full-service event agency</option><option>Décor &amp; rental house</option><option>Caterer / banquet hall</option><option>Other</option></select>
                </div>
                <div className="field"><label className="label">TEAM SIZE</label>
                <select className="select" name="size"><option>Under 5</option><option>5–15</option><option>15–50</option><option>50+</option></select>
                </div>
              </div>
              <button className="form__submit" type="submit">Start free — 14-day trial ↗</button>
              <p className="form__micro">No credit card required · reply within 24 hours</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww demo --book manchify</div>
              <div className="s1">✓ request received<br />✓ trial workspace being provisioned<br />✓ onboarding call being arranged</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll be in touch within 24 hours.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>10</div><div className="lbl">MODULES</div><div className="sub">▲ one connected platform</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>60s</div><div className="lbl">GST_QUOTE</div><div className="sub">▲ enquiry → branded quote</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>6</div><div className="lbl">BUSINESS_TYPES</div><div className="sub">▲ presets supported</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
        </section>

        <section id="s-features" className="section reveal">
          <p className="eyebrow">const modules = [ <span className="c">// 10 modules, showing the core 6</span></p>
          <h2 className="title mono">Core modules</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Leads &amp; CRM</div><p className="svc__body">Capture enquiries from web forms and WhatsApp, work a visual pipeline, and never drop a follow-up — all in one inbox.</p><div className="svc__foot"><span>leads.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Quotes &amp; GST invoicing</div><p className="svc__body">Branded quotes with live margins, e-sign approval, and one-click conversion to GST-correct invoices with CGST/SGST/IGST split.</p><div className="svc__foot"><span>quotes.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Events &amp; run-sheets</div><p className="svc__body">A dedicated workspace per event — timeline, tasks, team assignments, and documents — so nothing slips on the day.</p><div className="svc__foot"><span>events.tsx</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Vendors &amp; purchase orders</div><p className="svc__body">Issue POs, maintain a settlement ledger, and get automatic RCM flagging for unregistered vendors so you never lose ITC.</p><div className="svc__foot"><span>vendors.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Manpower &amp; attendance</div><p className="svc__body">Plan headcount, deploy staff, mark mobile attendance offline, and compute wages — no paper, no disputes.</p><div className="svc__foot"><span>manpower.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Rentals &amp; inventory</div><p className="svc__body">Availability-aware bookings, dispatch and return tracking, and damage recording — no double-booking ever again.</p><div className="svc__foot"><span>rentals.ts</span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// built for</p>
          <h2 className="title mono">Who Manchify is built for</h2>
          <div className="grid grid-4 stagger">
            <div className="cap"><div className="cap__title">Wedding planners &amp; coordinators</div><p className="cap__body">Manage dozens of vendors per wedding, keep clients calm with a branded portal, and know your margin per event.</p></div>
            <div className="cap"><div className="cap__title">Full-service event agencies</div><p className="cap__body">Handle leads to logistics for corporate events, product launches, and large-scale productions in one workspace.</p></div>
            <div className="cap"><div className="cap__title">Décor &amp; rental houses</div><p className="cap__body">Track rental inventory availability, dispatch, returns, and damage across concurrent events without spreadsheet chaos.</p></div>
            <div className="cap"><div className="cap__title">Caterers &amp; banquet halls</div><p className="cap__body">Manage catering BOQs, headcount deployment, and per-event food cost alongside your event billing.</p></div>
          </div>
        </section>

        <section id="s-how" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>runAnEvent</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">How it works</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Capture &amp; quote</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Plan &amp; run</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Bill &amp; get paid</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Report</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STAGE 01</div><div className="pipe-detail__title">Capture &amp; quote</div><p className="pipe-detail__body">Leads flow in from your site and WhatsApp. Build a branded GST-correct quote in under 60 seconds and send it for e-sign approval.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Leads captured from site &amp; WhatsApp</span></li><li><span className="ok">✓</span><span>Branded GST quote in 60 seconds</span></li><li><span className="ok">✓</span><span>E-sign approval built in</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ manchify quote --gst</div><div className="t2">✓ lead captured  ✓ quote generated  ✓ sent for e-sign</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STAGE 02</div><div className="pipe-detail__title">Plan &amp; run</div><p className="pipe-detail__body">On approval, the quote becomes a live event workspace — vendors, manpower, rentals, run-sheet, and tasks connected in one view.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Quote converts to event workspace</span></li><li><span className="ok">✓</span><span>Vendors, manpower &amp; rentals connected</span></li><li><span className="ok">✓</span><span>Live run-sheet &amp; task tracking</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ manchify run --event</div><div className="t2">✓ workspace live  ✓ vendors assigned  ✓ tasks tracked</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STAGE 03</div><div className="pipe-detail__title">Bill &amp; get paid</div><p className="pipe-detail__body">Generate a GST invoice, send a payment link, chase milestones automatically, and see your per-event P&amp;L the moment costs land.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>GST invoice generated</span></li><li><span className="ok">✓</span><span>Payment link + milestone chasing</span></li><li><span className="ok">✓</span><span>Live per-event P&amp;L</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ manchify bill --invoice</div><div className="t2">✓ invoice sent  ✓ payment link live  ✓ P&amp;L updated</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STAGE 04</div><div className="pipe-detail__title">Report &amp; scale</div><p className="pipe-detail__body">A live business dashboard shows revenue trends, pipeline health, and vendor spend — permission-scoped for your team, with GSTR-ready exports.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Revenue &amp; pipeline dashboard</span></li><li><span className="ok">✓</span><span>Vendor spend visibility</span></li><li><span className="ok">✓</span><span>GSTR-ready exports</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ manchify report --gstr</div><div className="t2">✓ dashboard live  ✓ export ready</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div id="s-included" className="panel-note">
            <div className="panel-note__lbl">WHY_MANCHIFY</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Built for India — GST &amp; RCM done right</span></div><div><span className="plus">+</span><span>WhatsApp-native quotes &amp; invoices</span></div><div><span className="plus">+</span><span>Mobile-first offline attendance</span></div><div><span className="plus">+</span><span>No-code modules &amp; automations</span></div><div><span className="plus">+</span><span>14-day free trial, no card required</span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// client words</p>
          <div className="grid grid-3">
            <div className="quote"><div className="stars">★★★★★</div><p>We quote in 5 minutes now and never lose a vendor payment. Manchify made our 6-person studio look like an agency.</p><div className="quote__who"><div className="quote__avatar">RS</div><div><div className="quote__name">Rahul Shah</div><div className="quote__role">Mehta Events · Vadodara</div></div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// manchify.faq.md</p>
          <h2 className="title mono">Questions we always get asked</h2>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Can I run multiple event types in one account?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. Manchify supports six business presets and you can toggle the exact modules each team or event type needs.</p></div></div>
            <div className="faq__item"><button className="faq__q">Does it handle Indian GST correctly?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes, and this is a core differentiator. Manchify handles CGST/SGST vs IGST routing automatically, flags unregistered vendor invoices for RCM, tracks ITC-at-risk amounts, and produces GSTR-ready export files.</p></div></div>
            <div className="faq__item"><button className="faq__q">What if my team has no tech experience?<span className="sign">[+]</span></button><div className="faq__a"><p>Manchify is no-code and mobile-first. Setup takes under 10 minutes. Your team marks attendance on their phone, your managers see P&amp;L on a dashboard.</p></div></div>
            <div className="faq__item"><button className="faq__q">How is it different from a spreadsheet or generic CRM?<span className="sign">[+]</span></button><div className="faq__a"><p>A generic CRM handles leads; Manchify handles leads, quotes, vendors, manpower, rentals, invoicing, and GST in one connected system. No data re-entry between stages.</p></div></div>
            <div className="faq__item"><button className="faq__q">What does the free trial include?<span className="sign">[+]</span></button><div className="faq__a"><p>14 days of the Growth plan — 15 seats, vendors, manpower, rentals, WhatsApp sending, and full GST invoicing. No credit card required.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <Link className="svc" href="/solarflow/"><div className="svc__title" style={{"fontSize":"16px"}}>SolarFlow</div><p className="svc__body" style={{"fontSize":"13.5px"}}>ERP + CRM for solar installation companies.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/clinicflow/"><div className="svc__title" style={{"fontSize":"16px"}}>ClinicFlow</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Practice management system for clinics.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/chatflow-ai/"><div className="svc__title" style={{"fontSize":"16px"}}>ChatFlow AI</div><p className="svc__body" style={{"fontSize":"13.5px"}}>AI WhatsApp automation for enquiries &amp; orders.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/products/"><div className="svc__title" style={{"fontSize":"16px"}}>All products</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Browse the full catalogue of ready-made products.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./manchify --book-demo<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to run your events on one system?</h2>
          <p className="cta__lead">Book a demo or start your 14-day free trial — no credit card required, GST handled correctly from day one.</p>
          <div className="cta__btns">
            <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book my free demo</a>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> 14-day free trial</span><span><span className="g">●</span> No credit card required</span><span><span className="g">●</span> GST-ready from day one</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">manchify.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
