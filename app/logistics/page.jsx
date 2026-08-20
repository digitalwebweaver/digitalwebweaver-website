import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Logistics Software Development | Fleet & Tracking India — Digital Web Weaver" },
  description: "Fleet management, real-time shipment tracking, warehouse management, and route optimisation software for logistics and supply chain operators. India-based senior team.",
  alternates: { canonical: "/logistics/" },
  openGraph: { title: "Logistics Software Development | Fleet & Tracking India — Digital Web Weaver", description: "Fleet management, real-time shipment tracking, warehouse management, and route optimisation software for logistics and supply chain operators. India-based senior team.", url: "/logistics/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-build" data-target="s-build" title="Solutions">⚙</button>
      <button className="activitybar__btn" data-scroll="s-capabilities" data-target="s-capabilities" title="Capabilities">❮❯</button>
      <button className="activitybar__btn" data-scroll="s-work" data-target="s-work" title="Work">◈</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · UAE">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> logistics.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> solutions.ts</button>
        <button className="tab" data-scroll="s-work" data-target="s-work"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> work.json</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// logistics.ts · Fleet tracking · Route optimisation · WMS</p>
            <span className="badge">LOGISTICS SOFTWARE</span>
            <h1 className="hero__h1">Logistics software that moves as fast as your <span className="pink">fleet</span></h1>
            <p className="hero__lead">We build fleet management, real-time shipment tracking, warehouse management, and route optimisation systems for logistics and supply chain operations.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Get free estimate</a>
              <a className="btn btn--ghost" href="#s-work" data-scroll="s-work">$ view --work</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>150+</b><span>clients trusted</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>&lt;5s</b><span>GPS update frequency</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>24h</b><span>free estimate</span></div>
            </div>
            <div className="trust">
              <p className="trust__label">// what we build on</p>
              <div className="trust__row">
                <span className="trust__chip">GPS tracking</span>
                <span className="trust__chip">Route optimisation</span>
                <span className="trust__chip">WMS</span>
                <span className="trust__chip">ERP integration</span>
                <span className="trust__chip">Driver apps</span>
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
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>600</div><div className="lbl">VEHICLES_TRACKED</div><div className="sub">▲ 3PL fleet · India</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>50k/min</div><div className="lbl">PEAK_GPS_EVENTS</div><div className="sub">▲ real-time streaming</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>24h</div><div className="lbl">ESTIMATE</div><div className="sub">▲ free · no commitment</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// logistics software we build</span></p>
          <h2 className="title mono">Logistics software we build</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Fleet management</div><p className="svc__body">GPS tracking, driver management, and vehicle health monitoring in one live dispatch view.</p><div className="svc__foot"><span>fleet.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Shipment tracking</div><p className="svc__body">Real-time tracking with customer-facing portals and delivery notifications.</p><div className="svc__foot"><span>tracking.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Warehouse management</div><p className="svc__body">Pick-pack-ship workflows, barcode scanning, and inventory control for any warehouse.</p><div className="svc__foot"><span>wms.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Route optimisation</div><p className="svc__body">AI-powered route planning for multi-stop delivery efficiency and lower fuel spend.</p><div className="svc__foot"><span>routes.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">ERP integration</div><p className="svc__body">Connect SAP, Oracle, and custom ERPs to your logistics operations without manual re-entry.</p><div className="svc__foot"><span>erp.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Supply chain analytics</div><p className="svc__body">Demand forecasting, inventory KPIs, and supplier dashboards built on live operational data.</p><div className="svc__foot"><span>analytics.ts</span></div></div>
          </div>
        </section>

        <section id="s-capabilities" className="section reveal">
          <p className="eyebrow">// technical depth — built for real-time operations</p>
          <h2 className="title mono">Logistics tech capabilities</h2>
          <div className="grid grid-3">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"></circle><path d="M12 21c-4-4.5-7-8-7-11a7 7 0 0 1 14 0c0 3-3 6.5-7 11z"></path></svg><span className="cap__title">Real-time GPS</span></div><p className="cap__body">WebSocket location streaming with sub-5s update frequency across the whole fleet.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 15l6-6"></path><path d="M8 13l-2 2a3.5 3.5 0 0 0 5 5l2-2"></path><path d="M16 11l2-2a3.5 3.5 0 0 0-5-5l-2 2"></path></svg><span className="cap__title">EDI &amp; API integration</span></div><p className="cap__body">EDI X12, EDIFACT, and modern REST API integrations with shippers and carriers.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20c3-6 6-2 9-8s3-8 7-8"></path><circle cx="4" cy="20" r="1.6"></circle><circle cx="20" cy="4" r="1.6"></circle></svg><span className="cap__title">Route optimisation</span></div><p className="cap__body">Google OR-Tools and custom TSP solvers for multi-stop delivery routing.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"></rect><path d="M11 18h2"></path></svg><span className="cap__title">Driver apps</span></div><p className="cap__body">React Native apps with offline capability and e-signature for field conditions.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M10 14.5V5a2 2 0 1 1 4 0v9.5a4 4 0 1 1-4 0z"></path></svg><span className="cap__title">IoT telemetry</span></div><p className="cap__body">Temperature, humidity, and shock sensors for cold-chain monitoring and alerting.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.3A3.5 3.5 0 0 1 17 18z"></path><path d="M12 12v5m0-5l-2 2m2-2l2 2"></path></svg><span className="cap__title">Scalable infra</span></div><p className="cap__body">Kafka and TimescaleDB handle millions of tracking events per day without buckling.</p></div>
          </div>
        </section>

        <section id="s-work" className="section reveal">
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-end","gap":"20px","flexWrap":"wrap"}}>
            <div><p className="eyebrow">// selected logistics builds — production systems</p><h2 className="title mono">Systems we've built</h2></div>
            <Link className="mono" href="/portfolio/" style={{"fontSize":"13px","whiteSpace":"nowrap"}}>view all ↗</Link>
          </div>
          <div className="grid grid-3 stagger">
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">fleet.3pl-ops.in</span></div><div className="work__pad"><div className="work__tag">3PL · INDIA</div><div className="work__title">Real-time fleet tracking — 600 vehicles</div><p className="work__desc">GPS tracking platform for a pan-India logistics operator. Live vehicle positions, trip history, driver analytics, and a dispatch console handling 50k events/minute at peak.</p><div className="work__metrics"><div className="work__mcell"><b>600</b><span>vehicles tracked</span></div><div className="work__mcell"><b>50k/min</b><span>peak events</span></div></div><div className="work__stack"><span className="tag tag--y">TimescaleDB</span><span className="tag tag--y">WebSockets</span><span className="tag tag--y">React</span></div></div></div>
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.courierly.co.uk</span></div><div className="work__pad"><div className="work__tag">LAST-MILE · UK</div><div className="work__title">Courier delivery app — 5,000 active drivers</div><p className="work__desc">React Native driver app with offline-first architecture, ePOD signatures, and live route updates. Customer tracking portal and operations dashboard built in parallel.</p><div className="work__metrics"><div className="work__mcell"><b>5,000</b><span>active drivers</span></div><div className="work__mcell"><b>1</b><span>unified platform</span></div></div><div className="work__stack"><span className="tag tag--y">React Native</span><span className="tag tag--y">SQLite</span><span className="tag tag--y">Node.js</span></div></div></div>
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">same-day.dispatch.ae</span></div><div className="work__pad"><div className="work__tag">E-COMMERCE · UAE</div><div className="work__title">Same-day delivery platform — launch in 10 weeks</div><p className="work__desc">End-to-end same-day delivery platform: customer app, driver app, merchant portal, and operations dashboard. OSRM route optimisation and Stripe payments.</p><div className="work__metrics"><div className="work__mcell"><b>10 wks</b><span>zero to launch</span></div><div className="work__mcell"><b>4</b><span>connected apps</span></div></div><div className="work__stack"><span className="tag tag--y">OSRM</span><span className="tag tag--y">React Native</span><span className="tag tag--y">Stripe</span></div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// logistics.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Can you integrate with our existing TMS?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — via REST APIs, EDI, or direct database integration depending on what your TMS supports.</p></div></div>
            <div className="faq__item"><button className="faq__q">How do you handle GPS data at scale?<span className="sign">[+]</span></button><div className="faq__a"><p>Event streaming with Kafka, time-series storage with TimescaleDB, and WebSocket delivery to dashboards.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you support cold-chain monitoring?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — IoT sensor integration for temperature, humidity, and shock with alerting when thresholds are breached.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can drivers use the app without internet?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — offline-first React Native with background sync when connectivity is restored.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-3">
            <Link className="svc" href="/custom-software-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Custom software development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Bespoke TMS, WMS, and fleet management software for logistics operations.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/crm-erp-systems/"><div className="svc__title" style={{"fontSize":"16px"}}>CRM &amp; ERP systems</div><p className="svc__body" style={{"fontSize":"13.5px"}}>ERP integration for logistics — inventory, procurement, and finance modules.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <a className="svc" href="https://digitalwebweaver.com/web-application-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Web application development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Real-time tracking portals, dispatch dashboards, and driver management apps.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></a>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --logistics-project<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Modernise your logistics operations</h2>
          <p className="cta__lead">Real-time tracking, route intelligence, and ERP integration. Tell us how your operation runs and we'll scope the build.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Start a project</Link>
            <Link className="btn btn--ghost" href="/portfolio/">View our work</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Senior engineers only</span><span><span className="g">●</span> 48-hr match</span><span><span className="g">●</span> No lock-in</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">logistics.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
