import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Real Estate Software Development Company | PropTech India — Digital Web Weaver" },
  description: "Property listing platforms, agent CRMs, virtual tour software, and lease management systems for real estate businesses. India-based senior team, MLS/RETS integration.",
  alternates: { canonical: "/real-estate/" },
  openGraph: { title: "Real Estate Software Development Company | PropTech India — Digital Web Weaver", description: "Property listing platforms, agent CRMs, virtual tour software, and lease management systems for real estate businesses. India-based senior team, MLS/RETS integration.", url: "/real-estate/", type: "website" }
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
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> real-estate.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> solutions.ts</button>
        <button className="tab" data-scroll="s-work" data-target="s-work"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> work.json</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// real-estate.ts · Listings · MLS/RETS · Lease management</p>
            <span className="badge">PROPTECH SOFTWARE</span>
            <h1 className="hero__h1">PropTech software from listing to <span className="pink">closing</span></h1>
            <p className="hero__lead">We build property listing platforms, agent CRMs, virtual tour software, and lease management systems for real estate businesses.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Get free estimate</a>
              <a className="btn btn--ghost" href="#s-work" data-scroll="s-work">$ view --work</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>150+</b><span>clients trusted</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>4.9/5</b><span>average rating</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>2013</b><span>building since</span></div>
            </div>
            <div className="trust">
              <p className="trust__label">// what we build on</p>
              <div className="trust__row">
                <span className="trust__chip">MLS / RETS</span>
                <span className="trust__chip">Virtual tours</span>
                <span className="trust__chip">Lease management</span>
                <span className="trust__chip">Agent CRM</span>
                <span className="trust__chip">Property valuation</span>
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
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ trusted, India &amp; global</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>80,000</div><div className="lbl">LISTINGS_INDEXED</div><div className="sub">▲ property marketplace · India</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>4.9/5</div><div className="lbl">CLUTCH_RATING</div><div className="sub">▲ verified client reviews</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>2013</div><div className="lbl">BUILDING_SINCE</div><div className="sub">▲ PropTech &amp; beyond</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// real estate software we build</span></p>
          <h2 className="title mono">Real estate software we build</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Property listing platforms</div><p className="svc__body">Search, filter, map view, and lead capture for high-volume listing inventories.</p><div className="svc__foot"><span>listings.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Agent CRM</div><p className="svc__body">Lead pipeline, client communication, and deal tracking built for how agents close.</p><div className="svc__foot"><span>crm.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Virtual tours</div><p className="svc__body">360° photo tours, 3D Matterport integration, and video walkthroughs embedded in listings.</p><div className="svc__foot"><span>tours.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Lease management</div><p className="svc__body">Digital lease signing, rent collection, and tenant portals in one connected system.</p><div className="svc__foot"><span>lease.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Property valuation</div><p className="svc__body">AVM tools with comparables analysis and market data for automated estimates.</p><div className="svc__foot"><span>avm.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Mobile apps</div><p className="svc__body">iOS and Android apps for agents on the move and homebuyers browsing listings.</p><div className="svc__foot"><span>mobile.ts</span></div></div>
          </div>
        </section>

        <section id="s-capabilities" className="section reveal">
          <p className="eyebrow">// technical depth — from map search to digital closing</p>
          <h2 className="title mono">PropTech capabilities</h2>
          <div className="grid grid-3">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"></circle><path d="M12 21c-4-4.5-7-8-7-11a7 7 0 0 1 14 0c0 3-3 6.5-7 11z"></path></svg><span className="cap__title">Google Maps &amp; GIS</span></div><p className="cap__body">Map search, polygon draw, and geospatial property data for fast, precise results.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 15l6-6"></path><path d="M8 13l-2 2a3.5 3.5 0 0 0 5 5l2-2"></path><path d="M16 11l2-2a3.5 3.5 0 0 0-5-5l-2 2"></path></svg><span className="cap__title">MLS / RETS integration</span></div><p className="cap__body">IDX feeds and RETS data sync for listing aggregation across sources.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16"></path><path d="M6 16l10-10 3 3-10 10H6z"></path></svg><span className="cap__title">DocuSign integration</span></div><p className="cap__body">Electronic signatures for contracts and lease agreements, end to end.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 5v10l-9 5-9-5V7z"></path><path d="M3 7l9 5 9-5M12 12v10"></path></svg><span className="cap__title">Matterport &amp; 360°</span></div><p className="cap__body">Virtual tour embedding and 3D model integration on every listing page.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"></rect><path d="M3 10h18"></path></svg><span className="cap__title">Payment processing</span></div><p className="cap__body">Online rent collection, security deposits, and refunds handled reliably.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"></path></svg><span className="cap__title">Market analytics</span></div><p className="cap__body">Price trend dashboards and neighbourhood comparison tools for buyers and investors.</p></div>
          </div>
        </section>

        <section id="s-work" className="section reveal">
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-end","gap":"20px","flexWrap":"wrap"}}>
            <div><p className="eyebrow">// selected PropTech builds — production systems</p><h2 className="title mono">Systems we've built</h2></div>
            <Link className="mono" href="/portfolio/" style={{"fontSize":"13px","whiteSpace":"nowrap"}}>view all ↗</Link>
          </div>
          <div className="grid grid-3 stagger">
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">search.propmarket.in</span></div><div className="work__pad"><div className="work__tag">PROPTECH · INDIA</div><div className="work__title">Property marketplace — 80,000 listings</div><p className="work__desc">Full-stack property portal with Elasticsearch-powered search, Mapbox map layers, and a CRM for 200 registered agents. RERA compliance documents auto-generated on listing.</p><div className="work__metrics"><div className="work__mcell"><b>80,000</b><span>listings</span></div><div className="work__mcell"><b>200</b><span>registered agents</span></div></div><div className="work__stack"><span className="tag tag--y">Elasticsearch</span><span className="tag tag--y">Mapbox</span><span className="tag tag--y">React</span></div></div></div>
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">portal.leasehub.co.uk</span></div><div className="work__pad"><div className="work__tag">PROPERTY MANAGEMENT · UK</div><div className="work__title">Multi-tenancy lease management platform</div><p className="work__desc">Digital lease management for a UK property management company with 2,500 tenancies. DocuSign workflows, Stripe rent collection, and automated renewal reminders.</p><div className="work__metrics"><div className="work__mcell"><b>2,500</b><span>tenancies managed</span></div><div className="work__mcell"><b>1</b><span>unified platform</span></div></div><div className="work__stack"><span className="tag tag--y">DocuSign</span><span className="tag tag--y">Stripe</span><span className="tag tag--y">Node.js</span></div></div></div>
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">invest.dubai-portfolio.ae</span></div><div className="work__pad"><div className="work__tag">REAL ESTATE INVESTMENT · UAE</div><div className="work__title">Investor dashboard for 12-property portfolio</div><p className="work__desc">Portfolio dashboard with live rental yield, occupancy, and maintenance cost tracking for a Dubai-based property investment group. Stripe integration for owner distributions.</p><div className="work__metrics"><div className="work__mcell"><b>12</b><span>property portfolio</span></div><div className="work__mcell"><b>1</b><span>live investor view</span></div></div><div className="work__stack"><span className="tag tag--y">React</span><span className="tag tag--y">PostgreSQL</span><span className="tag tag--y">Stripe</span></div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// real-estate.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Can you integrate with MLS listing data?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — RETS and RESO Web API for MLS data feeds. IDX compliance is built into the listing display rules.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you support virtual tour integration?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — Matterport, Kuula, and custom 360° photo viewers embedded in listing detail pages.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you build lease management software?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — digital lease creation, DocuSign integration, rent collection via Stripe, and maintenance request portals.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you build property valuation tools?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — AVM models using comparable sales data and market factors for automated property estimates.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-3">
            <a className="svc" href="https://digitalwebweaver.com/web-application-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Web application development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Property listing platforms, agent CRM, and lease management portals.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></a>
            <a className="svc" href="https://digitalwebweaver.com/website-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Website development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Professional real estate agency and developer websites with lead capture.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></a>
            <Link className="svc" href="/mobile-app-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Mobile app development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>iOS and Android apps for property search, agent tools, and virtual tours.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --proptech-project<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Build your PropTech platform</h2>
          <p className="cta__lead">From listings to closing — we build the software that closes deals. Tell us what your pipeline looks like and we'll scope the build.</p>
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
        <span className="statusbar__spacer">real-estate.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
