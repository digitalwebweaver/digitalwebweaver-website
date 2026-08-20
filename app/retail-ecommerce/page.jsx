import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Retail & E-Commerce Development | Headless Commerce India — Digital Web Weaver" },
  description: "Custom e-commerce, headless storefronts, POS integration, and retail analytics engineered for conversion. +40% average conversion lift, trusted by 150+ clients.",
  alternates: { canonical: "/retail-ecommerce/" },
  openGraph: { title: "Retail & E-Commerce Development | Headless Commerce India — Digital Web Weaver", description: "Custom e-commerce, headless storefronts, POS integration, and retail analytics engineered for conversion. +40% average conversion lift, trusted by 150+ clients.", url: "/retail-ecommerce/", type: "website" }
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
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{color:"var(--teal)"}}>●</span> retail-ecommerce.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{color:"var(--yellow)"}}>●</span> solutions.ts</button>
        <button className="tab" data-scroll="s-work" data-target="s-work"><span className="tdot" style={{color:"var(--pink)"}}>●</span> work.json</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{color:"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// retail-ecommerce.ts · headless · POS · loyalty</p>
            <span className="badge">RETAIL &amp; E-COMMERCE</span>
            <h1 className="hero__h1">Retail software that <span className="pink">sells more</span> and <span className="teal">operates smarter</span></h1>
            <p className="hero__lead">Custom storefronts, headless commerce, POS integration, and retail analytics — engineered for conversion and built to run your operations, not just your checkout.</p>
            <div className="btn-row" style={{marginTop:"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Get free estimate</a>
              <a className="btn btn--ghost" href="#s-work" data-scroll="s-work">$ view --work</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{color:"var(--pink)"}}>+40%</b><span>avg conversion lift</span></div>
              <div className="hero__stat"><b style={{color:"var(--teal)"}}>150+</b><span>clients trust us</span></div>
              <div className="hero__stat"><b style={{color:"var(--yellow)"}}>4.9/5</b><span>average rating</span></div>
            </div>
          </div>
          <div className="formcard" id="estimate">
            <div className="code__head"><span className="dot dot--red" style={{width:"8px",height:"8px"}}></span><span className="fn">estimate.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE ESTIMATE</p>
              <p className="form__title">What are you building?</p>
              <p className="form__lead">Tell us what you need — scope and estimate in 24 hours, free.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME</label><input className="input" name="name" placeholder="Your name" /></div>
                <div className="field"><label className="label">WORK EMAIL</label><input className="input" name="email" type="email" placeholder="you@company.com" /></div>
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
          <div className="stat-cell"><div className="big" style={{color:"var(--pink)"}}>+40%</div><div className="lbl">AVG_CONVERSION</div><div className="sub">▲ vs pre-engagement baseline</div></div>
          <div className="stat-cell"><div className="big" style={{color:"var(--teal)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
          <div className="stat-cell"><div className="big" style={{color:"var(--yellow)"}}>ISO 27001</div><div className="lbl">ALIGNED</div><div className="sub">▲ secure by design</div></div>
          <div className="stat-cell"><div className="big" style={{color:"var(--pink)"}}>4.9/5</div><div className="lbl">CLUTCH_RATING</div><div className="sub">▲ client-reviewed</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// retail &amp; e-commerce software we build</span></p>
          <h2 className="title mono">Retail solutions we build</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Custom e-commerce</div><p className="svc__body">Bespoke stores with checkout flows built around your customers, not a theme.</p><div className="svc__foot"><span>shop.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Headless commerce</div><p className="svc__body">Next.js storefronts with Shopify, WooCommerce, or Medusa backends.</p><div className="svc__foot"><span>headless.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">POS integration</div><p className="svc__body">Connect physical and online stores with Square, Shopify POS, or a custom bridge.</p><div className="svc__foot"><span>pos.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Loyalty programs</div><p className="svc__body">Points, tiers, referrals, and gamified reward systems that bring customers back.</p><div className="svc__foot"><span>loyalty.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Recommendation engine</div><p className="svc__body">AI-powered product recommendations tuned to increase average order value.</p><div className="svc__foot"><span>recs.py</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Retail analytics</div><p className="svc__body">Sales dashboards, inventory KPIs, and customer lifetime value reporting.</p><div className="svc__foot"><span>analytics.ts</span></div></div>
          </div>
        </section>

        <section id="s-capabilities" className="section reveal">
          <p className="eyebrow">// technical depth — engineered for revenue</p>
          <h2 className="title mono">Retail tech capabilities</h2>
          <div className="grid grid-3">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8l4 4-4 4M20 8l-4 4 4 4M14 4l-4 16"></path></svg><span className="cap__title">WooCommerce / Shopify</span></div><p className="cap__body">Custom customization of both platforms — no drag-and-drop theme shortcuts.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8"></path><path d="M15 7h6v6"></path></svg><span className="cap__title">Real-time inventory sync</span></div><p className="cap__body">Stock levels kept consistent across every storefront, marketplace, and warehouse.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><path d="M2 10h20"></path></svg><span className="cap__title">Payment gateway integrations</span></div><p className="cap__body">Stripe, Razorpay, PayPal, UPI, and BNPL options wired in, PCI-DSS compliant.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="12" r="5"></circle><circle cx="12" cy="12" r="1"></circle></svg><span className="cap__title">Machine learning personalization</span></div><p className="cap__body">Recommendation models tuned on real purchase behaviour, not generic rules.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"></rect><path d="M11 18h2"></path></svg><span className="cap__title">Mobile commerce apps</span></div><p className="cap__body">Native and PWA mobile shopping experiences built for conversion.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L4 14h6l-1 8 9-12h-6z"></path></svg><span className="cap__title">Performance optimization</span></div><p className="cap__body">Sub-2.5s LCP storefronts — every second of load time is a conversion lever.</p></div>
          </div>
        </section>

        <section id="s-work" className="section reveal">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"20px",flexWrap:"wrap"}}>
            <div><p className="eyebrow">// selected retail builds — production systems</p><h2 className="title mono">Systems we've built</h2></div>
            <Link className="mono" href="/portfolio/" style={{fontSize:"13px",whiteSpace:"nowrap"}}>view all ↗</Link>
          </div>
          <div className="grid grid-2 stagger">
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">shopnest.store</span></div><div className="work__pad"><div className="work__tag">FASHION RETAIL · OMNICHANNEL</div><div className="work__title">ShopNest omnichannel platform</div><p className="work__desc">Headless Next.js storefront plus a custom OMS and POS integration for a mid-size fashion retailer — unified inventory and real-time order routing across channels.</p><div className="work__metrics"><div className="work__mcell"><b>3-in-1</b><span>storefront, OMS &amp; POS</span></div><div className="work__mcell"><b>Real-time</b><span>order routing</span></div></div><div className="work__stack"><span className="tag tag--y">Next.js</span><span className="tag tag--y">Node.js</span><span className="tag tag--y">Stripe</span></div></div></div>
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.retailflow.io</span></div><div className="work__pad"><div className="work__tag">MULTI-WAREHOUSE · INVENTORY SYNC</div><div className="work__title">RetailFlow inventory sync</div><p className="work__desc">Real-time multi-warehouse inventory across 5 storefronts and 2 marketplaces — automated reorder logic and webhook-driven updates with zero overselling.</p><div className="work__metrics"><div className="work__mcell"><b>5</b><span>storefronts synced</span></div><div className="work__mcell"><b>2</b><span>marketplaces</span></div></div><div className="work__stack"><span className="tag tag--y">Node.js</span><span className="tag tag--y">PostgreSQL</span><span className="tag tag--y">AWS</span></div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// retail-ecommerce.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">WooCommerce or Shopify for our store?<span className="sign">[+]</span></button><div className="faq__a"><p>Shopify when you want speed and a managed platform; WooCommerce when you want full ownership of the codebase and hosting.</p></div></div>
            <div className="faq__item"><button className="faq__q">What is headless commerce?<span className="sign">[+]</span></button><div className="faq__a"><p>It separates the frontend from the commerce backend — a Next.js storefront consuming Shopify, WooCommerce, or Medusa through an API for speed and design freedom.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you build a loyalty program?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — points, tiers, referrals, and gamified reward systems, integrated directly into checkout and account flows.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you integrate with ERPs?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — SAP, NetSuite, and Odoo, keeping orders, stock, and customer data in sync with your storefront.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-3">
            <a className="svc" href="https://digitalwebweaver.com/web-application-development/"><div className="svc__title" style={{fontSize:"16px"}}>Web application development</div><p className="svc__body" style={{fontSize:"13.5px"}}>Retail portals, OMS dashboards, and multi-role back-office tools.</p><div className="mono" style={{fontSize:"12px",color:"var(--pink)",marginTop:"12px"}}>open ↗</div></a>
            <Link className="svc" href="/ecommerce-development/"><div className="svc__title" style={{fontSize:"16px"}}>E-commerce development</div><p className="svc__body" style={{fontSize:"13.5px"}}>Custom storefronts, WooCommerce, and headless commerce builds.</p><div className="mono" style={{fontSize:"12px",color:"var(--pink)",marginTop:"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/custom-software-development/"><div className="svc__title" style={{fontSize:"16px"}}>Custom software development</div><p className="svc__body" style={{fontSize:"13.5px"}}>Bespoke OMS, loyalty, and inventory systems built around your operations.</p><div className="mono" style={{fontSize:"12px",color:"var(--pink)",marginTop:"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --retail-project<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Build software that sells more</h2>
          <p className="cta__lead">Free scoping and a detailed estimate from senior engineers — within 24 hours. Tell us what you're building and we'll scope it.</p>
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
        <span className="statusbar__spacer">retail-ecommerce.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
