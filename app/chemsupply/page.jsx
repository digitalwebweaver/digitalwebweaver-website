import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "ChemSupply — ERP for Chemical Suppliers | Digital Web Weaver" },
  description: "ChemSupply brings batch & expiry tracking, compliance documentation, order management, distributor portals, and multi-warehouse inventory into one connected ERP for chemical suppliers.",
  alternates: { canonical: "/chemsupply/" },
  openGraph: { title: "ChemSupply — ERP for Chemical Suppliers | Digital Web Weaver", description: "ChemSupply brings batch & expiry tracking, compliance documentation, order management, distributor portals, and multi-warehouse inventory into one connected ERP for chemical suppliers.", url: "/chemsupply/", type: "website" }
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
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> chemsupply.ts</button>
        <button className="tab" data-scroll="s-features" data-target="s-features"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> features.ts</button>
        <button className="tab" data-scroll="s-how" data-target="s-how"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> how-it-works.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// chemsupply.ts · chemical supplier ERP · batch traceability</p>
            <span className="badge">CHEMICAL SUPPLIER ERP</span>
            <h1 className="hero__h1">Run your chemical supply business without the <span className="pink">compliance headaches</span></h1>
            <p className="hero__lead">ChemSupply brings inventory with batch and expiry tracking, safety documentation, order management, distributor portals, and compliance reporting into one connected ERP — built for an industry where the paperwork matters as much as the product.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book a demo</a>
              <a className="btn btn--ghost" href="#s-features" data-scroll="s-features">$ view --features</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>6–8wk</b><span>to go live</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>100%</b><span>batch traceability</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>150+</b><span>clients globally</span></div>
            </div>
          </div>
          <div className="formcard" id="demo">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">demo.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE DEMO</p>
              <p className="form__title">See ChemSupply in action</p>
              <p className="form__lead">Book a 30-minute demo — we'll show you exactly how it fits your inventory and compliance workflow.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME</label><input className="input" name="name" placeholder="Your name" /></div>
                <div className="field"><label className="label">WORK EMAIL</label><input className="input" name="email" type="email" placeholder="you@company.com" /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">COMPANY NAME</label><input className="input" name="company" placeholder="Your company" /></div>
                <div className="field"><label className="label">BUSINESS TYPE</label>
                <select className="select" name="type"><option>Industrial chemical distributor</option><option>Specialty / fine chemical supplier</option><option>Agrochemical distributor</option><option>Lab / research chemical supplier</option><option>Other</option></select>
                </div>
              </div>
              <div className="field"><label className="label">BIGGEST COMPLIANCE HEADACHE?</label><textarea className="textarea" name="desc" rows="3" placeholder="Batch traceability, audits, expiry tracking, distributor orders…"></textarea></div>
              <button className="form__submit" type="submit">Book my demo ↗</button>
              <p className="form__micro">Free demo · Fixed price &amp; timeline</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ chemsupply demo --book</div>
              <div className="s1">✓ request received<br />✓ routed to a product specialist<br />✓ demo slot being arranged</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll be in touch within 24 hours to schedule.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>6–8wk</div><div className="lbl">TO_GO_LIVE</div><div className="sub">▲ demo → live</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>1</div><div className="lbl">UNIFIED_SYSTEM</div><div className="sub">▲ stock + compliance</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>100%</div><div className="lbl">BATCH_TRACEABILITY</div><div className="sub">▲ supplier → customer</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
        </section>

        <section id="s-features" className="section reveal">
          <p className="eyebrow">const features = [ <span className="c">// what ChemSupply runs on</span></p>
          <h2 className="title mono">Traceability built in, not bolted on</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Batch &amp; expiry tracking</div><p className="svc__body">Track every product by batch number, manufacturing and expiry dates, with full traceability from supplier to customer.</p><div className="svc__foot"><span>batch.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Compliance documentation</div><p className="svc__body">Attach safety data sheets, certificates of analysis, and regulatory documents directly to products and batches.</p><div className="svc__foot"><span>compliance.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Order &amp; quotation management</div><p className="svc__body">Generate quotes and process orders with automatic compliance checks and document attachments.</p><div className="svc__foot"><span>orders.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Distributor &amp; customer portal</div><p className="svc__body">Give distributors and bulk customers a branded portal to place orders, track shipments, and access documentation.</p><div className="svc__foot"><span>portal.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Multi-warehouse inventory</div><p className="svc__body">Manage stock across multiple warehouses with batch-level visibility and transfer workflows.</p><div className="svc__foot"><span>inventory.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Compliance &amp; sales reporting</div><p className="svc__body">Generate regulatory reports, expiry alerts, and sales analytics for management and audits.</p><div className="svc__foot"><span>reports.ts</span></div></div>
          </div>
        </section>

        <section id="s-how" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>goLive</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">From spreadsheets to a compliant ERP</h2>
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
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04</div><div className="pipe-detail__title">Map inventory &amp; compliance needs</div><p className="pipe-detail__body">We map your warehouses, product ranges, and the regulatory documentation your business is required to keep.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Warehouses &amp; SKUs reviewed</span></li><li><span className="ok">✓</span><span>Compliance requirements documented</span></li><li><span className="ok">✓</span><span>Configuration plan agreed</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ chemsupply map --inventory</div><div className="t2">✓ warehouses mapped  ✓ plan agreed</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04</div><div className="pipe-detail__title">Configure ChemSupply</div><p className="pipe-detail__body">Batch tracking rules, compliance document templates, and the distributor portal configured for your business.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Batch &amp; expiry rules configured</span></li><li><span className="ok">✓</span><span>Compliance templates set up</span></li><li><span className="ok">✓</span><span>Distributor portal branded</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ chemsupply configure --business</div><div className="t2">✓ batch rules set  ✓ portal branded</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04</div><div className="pipe-detail__title">Migrate inventory &amp; client data</div><p className="pipe-detail__body">Existing stock, batch records, and client/distributor data migrated in — nothing starts from a blank slate.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Inventory &amp; batch records migrated</span></li><li><span className="ok">✓</span><span>Client &amp; distributor data imported</span></li><li><span className="ok">✓</span><span>Existing documentation attached</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ chemsupply migrate --inventory</div><div className="t2">✓ stock imported  ✓ docs attached</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04</div><div className="pipe-detail__title">Train &amp; launch</div><p className="pipe-detail__body">Your team trained on the dashboard and distributor portal, then live — with 30 days of go-live support included.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Team training sessions run</span></li><li><span className="ok">✓</span><span>Distributor portal handed over</span></li><li><span className="ok">✓</span><span>30 days of go-live support</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ chemsupply launch --go-live</div><div className="t2">✓ team trained  ✓ live</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">WHATS_INCLUDED</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Inventory &amp; order management dashboard</span></div><div><span className="plus">+</span><span>Branded distributor/customer portal</span></div><div><span className="plus">+</span><span>Compliance document templates</span></div><div><span className="plus">+</span><span>Multi-warehouse configuration</span></div><div><span className="plus">+</span><span>Team training sessions</span></div><div><span className="plus">+</span><span>30 days of go-live support</span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// client words</p>
          <div className="grid grid-3 stagger">
            <div className="quote"><div className="stars">★★★★★</div><p>Audits used to mean two days of digging through files for the right batch certificates. Now everything is attached to the batch record itself — our last inspection took a fraction of the time it used to.</p><div className="quote__who"><div className="quote__avatar">HV</div><div><div className="quote__name">Harshad Vora</div><div className="quote__role">Operations Director, Vora Chemical Industries</div></div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// chemsupply.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Do you provide batch-level traceability for audits?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — with full history from receipt to dispatch, attached directly to the batch record.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can we attach safety data sheets &amp; certificates?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — documents attach at the product/batch level so they travel with the record.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do distributors need special software?<span className="sign">[+]</span></button><div className="faq__a"><p>No — they use a branded web portal that requires no installation.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can it handle different expiry/storage requirements?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — expiry and storage requirements are tracked per batch with automated alerts.</p></div></div>
            <div className="faq__item"><button className="faq__q">What's the implementation timeline?<span className="sign">[+]</span></button><div className="faq__a"><p>Most suppliers go live within 6–8 weeks, including configuration, migration, and training.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-end","gap":"20px","flexWrap":"wrap"}}>
            <p className="eyebrow">// you might also need</p>
            <Link className="mono" href="/products/" style={{"fontSize":"13px","whiteSpace":"nowrap"}}>browse all products ↗</Link>
          </div>
          <div className="grid grid-3">
            <Link className="svc" href="/solarflow/"><div className="svc__title" style={{"fontSize":"16px"}}>SolarFlow</div><p className="svc__body" style={{"fontSize":"13.5px"}}>ERP for solar installers — surveys, quotes, inventory, and AMC scheduling.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/pesttrack/"><div className="svc__title" style={{"fontSize":"16px"}}>PestTrack</div><p className="svc__body" style={{"fontSize":"13.5px"}}>CRM for pest control companies — job scheduling, routing, and AMC contracts.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/insuredesk/"><div className="svc__title" style={{"fontSize":"16px"}}>InsureDesk</div><p className="svc__body" style={{"fontSize":"13.5px"}}>CRM for insurance agencies — lead, policy, and renewal management.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./demo --chemsupply<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready for audits that take an hour, not two days?</h2>
          <p className="cta__lead">Book a free 30-minute demo. We'll show you ChemSupply running against your own product range and give you a fixed price and go-live date.</p>
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
        <span className="statusbar__spacer">chemsupply.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
