import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "PestTrack — Pest Control CRM & Field Service Software | Digital Web Weaver" },
  description: "PestTrack integrates job scheduling, technician routing, service history, AMC contracts, billing, and automated client reminders into one connected pest control CRM. Live in 3–5 weeks.",
  alternates: { canonical: "/pesttrack/" },
  openGraph: { title: "PestTrack — Pest Control CRM & Field Service Software | Digital Web Weaver", description: "PestTrack integrates job scheduling, technician routing, service history, AMC contracts, billing, and automated client reminders into one connected pest control CRM. Live in 3–5 weeks.", url: "/pesttrack/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-features" data-target="s-features" title="Features">⚙</button>
      <button className="activitybar__btn" data-scroll="s-how" data-target="s-how" title="How it works">❯</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> pesttrack.ts</button>
        <button className="tab" data-scroll="s-features" data-target="s-features"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> features.ts</button>
        <button className="tab" data-scroll="s-how" data-target="s-how"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> how-it-works.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// pesttrack.ts · field service CRM · dispatch + routing</p>
            <span className="badge">PEST CONTROL CRM</span>
            <h1 className="hero__h1">Run your pest control business without the <span className="pink">dispatch-board chaos</span></h1>
            <p className="hero__lead">PestTrack integrates job scheduling, technician routing, service history, AMC contracts, billing, and automated client reminders into one connected system.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book a demo</a>
              <a className="btn btn--ghost" href="#s-features" data-scroll="s-features">$ view --features</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>3–5wk</b><span>to go live</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>100%</b><span>job visibility</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>150+</b><span>clients globally</span></div>
            </div>
          </div>
          <div className="formcard" id="demo">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">demo.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE DEMO</p>
              <p className="form__title">See PestTrack in action</p>
              <p className="form__lead">Book a 30-minute demo — we'll show you exactly how it fits your dispatch and technician workflow.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME</label><input className="input" name="name" placeholder="Your name" /></div>
                <div className="field"><label className="label">WORK EMAIL</label><input className="input" name="email" type="email" placeholder="you@company.com" /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">COMPANY NAME</label><input className="input" name="company" placeholder="Your company" /></div>
                <div className="field"><label className="label">TEAM SIZE</label>
                <select className="select" name="teamsize"><option>Solo technician</option><option>2–5 technicians</option><option>6–20 technicians</option><option>20+ technicians</option></select>
                </div>
              </div>
              <div className="field"><label className="label">BIGGEST SCHEDULING CHALLENGE?</label><textarea className="textarea" name="desc" rows="3" placeholder="Missed visits, AMC renewals, routing, billing…"></textarea></div>
              <button className="form__submit" type="submit">Book my demo ↗</button>
              <p className="form__micro">Free demo · Fixed price &amp; timeline</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ pesttrack demo --book</div>
              <div className="s1">✓ request received<br />✓ routed to a product specialist<br />✓ demo slot being arranged</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll be in touch within 24 hours to schedule.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>3–5wk</div><div className="lbl">TO_GO_LIVE</div><div className="sub">▲ demo → live</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>100%</div><div className="lbl">JOB_VISIBILITY</div><div className="sub">▲ dispatch to close-out</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>AUTO</div><div className="lbl">FEWER_MISSED_VISITS</div><div className="sub">▲ auto-scheduling reminders</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
        </section>

        <section id="s-features" className="section reveal">
          <p className="eyebrow">const features = [ <span className="c">// what PestTrack runs on</span></p>
          <h2 className="title mono">Everything dispatch needs, connected</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Job scheduling &amp; dispatch</div><p className="svc__body">Create, assign, and track service jobs with technician calendars and real-time status updates.</p><div className="svc__foot"><span>dispatch.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Technician routing</div><p className="svc__body">Optimize daily routes for field technicians and track job progress via a dedicated mobile app.</p><div className="svc__foot"><span>routes.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Service history &amp; reports</div><p className="svc__body">Maintain complete treatment history per property with digital service reports accessible to clients.</p><div className="svc__foot"><span>history.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">AMC &amp; contract management</div><p className="svc__body">Track annual maintenance contracts with automatic visit scheduling and renewal alerts.</p><div className="svc__foot"><span>amc.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Quotes, billing &amp; invoicing</div><p className="svc__body">Generate quotes and invoices on-site, collect digital payments, and track outstanding dues.</p><div className="svc__foot"><span>billing.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Automated client reminders</div><p className="svc__body">SMS/WhatsApp notifications for upcoming visits, contract renewals, and post-service feedback.</p><div className="svc__foot"><span>reminders.ts</span></div></div>
          </div>
        </section>

        <section id="s-how" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>goLive</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">From whiteboard to live in 3–5 weeks</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Map</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Configure</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Migrate</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Train &amp; launch</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04</div><div className="pipe-detail__title">Map your operation</div><p className="pipe-detail__body">We map your current service structure — job types, technician count, contract mix — before any configuration begins.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Current workflow reviewed</span></li><li><span className="ok">✓</span><span>Service structure documented</span></li><li><span className="ok">✓</span><span>Configuration plan agreed</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ pesttrack map --operation</div><div className="t2">✓ structure mapped  ✓ plan agreed</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04</div><div className="pipe-detail__title">Configure PestTrack</div><p className="pipe-detail__body">Dispatch dashboard, contract types, and reminder workflows configured to match your business model exactly.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Dispatch dashboard configured</span></li><li><span className="ok">✓</span><span>AMC &amp; contract types set up</span></li><li><span className="ok">✓</span><span>Reminder workflows built</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ pesttrack configure --business</div><div className="t2">✓ dashboard ready  ✓ workflows built</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04</div><div className="pipe-detail__title">Migrate clients &amp; contracts</div><p className="pipe-detail__body">Existing clients, service history, and active AMC contracts migrated in — nothing starts from a blank slate.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Client &amp; property records migrated</span></li><li><span className="ok">✓</span><span>Active AMC contracts imported</span></li><li><span className="ok">✓</span><span>Service history preserved</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ pesttrack migrate --clients</div><div className="t2">✓ clients imported  ✓ contracts imported</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04</div><div className="pipe-detail__title">Train &amp; launch</div><p className="pipe-detail__body">Office staff and field technicians trained on the dashboard and mobile app, then live with 30 days of go-live support.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Team training sessions run</span></li><li><span className="ok">✓</span><span>Mobile app installed for technicians</span></li><li><span className="ok">✓</span><span>30 days of go-live support</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ pesttrack launch --go-live</div><div className="t2">✓ team trained  ✓ live</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">WHATS_INCLUDED</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Office dispatch dashboard</span></div><div><span className="plus">+</span><span>Mobile app for field technicians</span></div><div><span className="plus">+</span><span>Contract &amp; quote templates</span></div><div><span className="plus">+</span><span>Client reminder workflows</span></div><div><span className="plus">+</span><span>Team training sessions</span></div><div><span className="plus">+</span><span>30 days of go-live support</span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// client words</p>
          <div className="grid grid-3 stagger">
            <div className="quote"><div className="stars">★★★★★</div><p>We were tracking AMC renewals on a whiteboard — and losing contract renewals because of it. Now everything's automated.</p><div className="quote__who"><div className="quote__avatar">DR</div><div><div className="quote__name">Devendra Rana</div><div className="quote__role">Director, SafeGuard Pest Solutions</div></div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// pesttrack.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Can it handle one-time jobs and recurring AMCs?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — PestTrack manages both simultaneously with automatic visit scheduling.</p></div></div>
            <div className="faq__item"><button className="faq__q">What does the field technician experience look like?<span className="sign">[+]</span></button><div className="faq__a"><p>The mobile app provides daily job lists, optimized routes, property history, and digital reporting.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can technicians generate on-site quotes &amp; invoices?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — quotes and invoices are generated directly from job records with digital payment collection.</p></div></div>
            <div className="faq__item"><button className="faq__q">How do client reminders work?<span className="sign">[+]</span></button><div className="faq__a"><p>Automated SMS/WhatsApp notifications go out for upcoming visits, contract renewals, and post-service feedback requests.</p></div></div>
            <div className="faq__item"><button className="faq__q">What's the implementation timeline?<span className="sign">[+]</span></button><div className="faq__a"><p>Typically 3–5 weeks, including configuration, data migration, and team training.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-end","gap":"20px","flexWrap":"wrap"}}>
            <p className="eyebrow">// you might also need</p>
            <Link className="mono" href="/products/" style={{"fontSize":"13px","whiteSpace":"nowrap"}}>browse all products ↗</Link>
          </div>
          <div className="grid grid-3">
            <Link className="svc" href="/solarflow/"><div className="svc__title" style={{"fontSize":"16px"}}>SolarFlow</div><p className="svc__body" style={{"fontSize":"13.5px"}}>ERP for solar installers — surveys, quotes, inventory, and AMC scheduling.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/chemsupply/"><div className="svc__title" style={{"fontSize":"16px"}}>ChemSupply</div><p className="svc__body" style={{"fontSize":"13.5px"}}>ERP for chemical suppliers — batch tracking, compliance, and distributor portals.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/callmate-ai/"><div className="svc__title" style={{"fontSize":"16px"}}>CallMate AI</div><p className="svc__body" style={{"fontSize":"13.5px"}}>AI voice agent that handles inbound service calls and books appointments.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./demo --pesttrack<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to ditch the dispatch whiteboard?</h2>
          <p className="cta__lead">Book a free 30-minute demo. We'll show you PestTrack running against your own job types and give you a fixed price and go-live date.</p>
          <div className="cta__btns">
            <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book a demo</a>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free demo</span><span><span className="g">●</span> Fixed price &amp; timeline</span><span><span className="g">●</span> You own the source code</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">pesttrack.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
