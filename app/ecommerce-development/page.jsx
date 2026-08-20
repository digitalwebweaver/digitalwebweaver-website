import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "E-Commerce Development Company India | WooCommerce & Headless — Digital Web Weaver" },
  description: "High-performance e-commerce storefronts — custom, WooCommerce, or headless — built for conversion. PCI-DSS secure payments, +40% average conversion lift, trusted by 150+ clients.",
  alternates: { canonical: "/ecommerce-development/" },
  openGraph: { title: "E-Commerce Development Company India | WooCommerce & Headless — Digital Web Weaver", description: "High-performance e-commerce storefronts — custom, WooCommerce, or headless — built for conversion. PCI-DSS secure payments, +40% average conversion lift, trusted by 150+ clients.", url: "/ecommerce-development/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-build" data-target="s-build" title="What we build">⚙</button>
      <button className="activitybar__btn" data-scroll="s-capabilities" data-target="s-capabilities" title="Capabilities">❮❯</button>
      <button className="activitybar__btn" data-scroll="s-approach" data-target="s-approach" title="Headless vs WooCommerce">⇄</button>
      <button className="activitybar__btn" data-scroll="s-process" data-target="s-process" title="Process">❯</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{color:"var(--teal)"}}>●</span> ecommerce-development.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{color:"var(--yellow)"}}>●</span> services.ts</button>
        <button className="tab" data-scroll="s-process" data-target="s-process"><span className="tdot" style={{color:"var(--pink)"}}>●</span> process.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{color:"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// ecommerce-development.ts · Next.js · WooCommerce · Headless</p>
            <span className="badge">E-COMMERCE</span>
            <h1 className="hero__h1">E-commerce built to <span className="pink">convert</span>, <span className="teal">scale</span> &amp; integrate</h1>
            <p className="hero__lead">We build high-performance e-commerce storefronts — custom, WooCommerce, or headless — optimised for conversion, not just appearance.</p>
            <div className="btn-row" style={{marginTop:"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Get free estimate</a>
              <a className="btn btn--ghost" href="#s-build" data-scroll="s-build">$ view --services</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{color:"var(--pink)"}}>+40%</b><span>avg conversion lift</span></div>
              <div className="hero__stat"><b style={{color:"var(--teal)"}}>PCI-DSS</b><span>secure payments</span></div>
              <div className="hero__stat"><b style={{color:"var(--yellow)"}}>150+</b><span>clients trust us</span></div>
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
          <div className="stat-cell"><div className="big" style={{color:"var(--teal)"}}>PCI</div><div className="lbl">DSS_SECURE</div><div className="sub">▲ tokenised payments</div></div>
          <div className="stat-cell"><div className="big" style={{color:"var(--yellow)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
          <div className="stat-cell"><div className="big" style={{color:"var(--pink)"}}>24h</div><div className="lbl">ESTIMATE</div><div className="sub">▲ free · no commitment</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// what we build</span></p>
          <h2 className="title mono">E-commerce services</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Custom storefronts</div><p className="svc__body">Bespoke Next.js shops with optimised checkout flows, built for speed and conversion, not a theme.</p><div className="svc__foot"><span>shop.tsx</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">WooCommerce</div><p className="svc__body">Custom themes, plugins, and payment gateway integration on a mature, maintainable stack.</p><div className="svc__foot"><span>woo.php</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Headless commerce</div><p className="svc__body">A Next.js frontend consuming WooCommerce, Shopify, or Medusa through an API — fast and design-free.</p><div className="svc__foot"><span>headless.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Payment integration</div><p className="svc__body">Stripe, Razorpay, PayPal, UPI, and BNPL options wired in and PCI-DSS compliant.</p><div className="svc__foot"><span>pay.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Inventory &amp; orders</div><p className="svc__body">Real-time inventory sync, order management, and returns handling across channels.</p><div className="svc__foot"><span>inventory.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Analytics</div><p className="svc__body">Conversion tracking, basket analysis, and customer LTV reporting built into the store.</p><div className="svc__foot"><span>analytics.ts</span></div></div>
          </div>
        </section>

        <section id="s-capabilities" className="section reveal">
          <p className="eyebrow">// technical depth — engineered for revenue</p>
          <h2 className="title mono">E-commerce capabilities</h2>
          <div className="grid grid-3">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 1 0 9 9"></path><path d="M12 12l5-3"></path></svg><span className="cap__title">Core Web Vitals</span></div><p className="cap__body">LCP under 2.5s, CLS under 0.1, and FID under 100ms enforced on every store page.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="6"></circle><path d="M20 20l-5-5"></path></svg><span className="cap__title">SEO architecture</span></div><p className="cap__body">Server-rendered product pages, schema markup, and sitemaps built for organic discovery.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg><span className="cap__title">Payment security</span></div><p className="cap__body">PCI-DSS tokenisation — no card data ever touches our servers.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"></rect><path d="M11 18h2"></path></svg><span className="cap__title">Mobile commerce</span></div><p className="cap__body">Optimised mobile UX driving 60%+ of sessions on the stores we build.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8"></path><path d="M15 7h6v6"></path></svg><span className="cap__title">Recommendations</span></div><p className="cap__body">ML-powered product recommendations tuned to increase average order value.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg><span className="cap__title">ERP &amp; inventory sync</span></div><p className="cap__body">Real-time stock levels kept consistent across online and physical locations.</p></div>
          </div>
        </section>

        <section id="s-approach" className="section reveal">
          <p className="eyebrow">// how we choose the platform</p>
          <h2 className="title mono">Headless when it earns its keep, WooCommerce when it doesn't</h2>
          <p className="subtitle">For founders and retail teams weighing up which platform to trust, the real decision isn't the platform — it's who owns your conversion rate and page speed once the store is live.</p>
          <div className="grid grid-2 stagger">
            <div className="cap cap--teal"><div className="cap__title">WooCommerce</div><p className="cap__body">Not every store needs a headless rebuild. When you want a fast launch and a mature plugin ecosystem, a well-built WooCommerce store on our WordPress stack ships quickly and stays maintainable.</p></div>
            <div className="cap cap--yellow"><div className="cap__title">Headless commerce</div><p className="cap__body">When product pages need sub-2.5s LCP, custom checkout logic, or a design a theme can't reach, we move to headless — a Next.js frontend consuming WooCommerce, Medusa, or Shopify through an API.</p></div>
          </div>
          <div className="panel-note"><p style={{fontSize:"15.5px",color:"var(--text-2)",lineHeight:"1.65"}}>A storefront is only as strong as the systems feeding it. We wire real-time inventory sync across online and physical locations, connect order and stock data to your CRM and ERP systems, and tokenise payments so no card data ever touches our servers — PCI-DSS by design, with Stripe, Razorpay, PayPal, and UPI. We're a Vadodara-based team delivering to clients across India, the UK, South Africa, and Ivory Coast, and we treat a storefront as an engineered system rather than a theme.</p></div>
        </section>

        <section id="s-stack" className="section reveal">
          <p className="eyebrow">import &#123; stack &#125; from "@dww/commerce" <span className="c">// the commerce stack</span></p>
          <h2 className="title mono">Technology stack</h2>
          <div className="stack-tabs" data-stack>
            <button className="stack-tab" data-cat="Frontend">Frontend <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Commerce">Commerce <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Payments">Payments <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Infra">Infra <span className="n">[4]</span></button>
          </div>
          <div className="stack-grid">
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--text)"}}>N</span><div className="stack-cell__name">Next.js</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"#61dafb"}}>R</span><div className="stack-cell__name">React</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"#3178c6"}}>TS</span><div className="stack-cell__name">TypeScript</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--pink)"}}>$</span><div className="stack-cell__name">Stripe.js</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Commerce"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"#c99bb4"}}>Wc</span><div className="stack-cell__name">WooCommerce</div><div className="stack-cell__cat">Commerce</div></div>
            <div className="stack-cell" data-cat="Commerce"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--green)"}}>Sh</span><div className="stack-cell__name">Shopify API</div><div className="stack-cell__cat">Commerce</div></div>
            <div className="stack-cell" data-cat="Commerce"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--yellow)"}}>Md</span><div className="stack-cell__name">Medusa.js</div><div className="stack-cell__cat">Commerce</div></div>
            <div className="stack-cell" data-cat="Commerce"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--teal)"}}>Cu</span><div className="stack-cell__name">Custom</div><div className="stack-cell__cat">Commerce</div></div>
            <div className="stack-cell" data-cat="Payments"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--pink)"}}>St</span><div className="stack-cell__name">Stripe</div><div className="stack-cell__cat">Payments</div></div>
            <div className="stack-cell" data-cat="Payments"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--teal)"}}>Rz</span><div className="stack-cell__name">Razorpay</div><div className="stack-cell__cat">Payments</div></div>
            <div className="stack-cell" data-cat="Payments"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--yellow)"}}>Pp</span><div className="stack-cell__name">PayPal</div><div className="stack-cell__cat">Payments</div></div>
            <div className="stack-cell" data-cat="Payments"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--text)"}}>Kl</span><div className="stack-cell__name">Klarna</div><div className="stack-cell__cat">Payments</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--text)"}}>▲</span><div className="stack-cell__name">Vercel</div><div className="stack-cell__cat">Infra</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--yellow)"}}>Cf</span><div className="stack-cell__name">AWS CloudFront</div><div className="stack-cell__cat">Infra</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--pink)"}}>Rd</span><div className="stack-cell__name">Redis</div><div className="stack-cell__cat">Infra</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--teal)"}}>El</span><div className="stack-cell__name">Elasticsearch</div><div className="stack-cell__cat">Infra</div></div>
          </div>
        </section>

        <section id="s-process" className="section reveal">
          <p className="eyebrow">function <span style={{color:"var(--text)"}}>storeProcess</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">E-commerce process</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Conversion audit</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Storefront design</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Build &amp; integrate</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Launch &amp; optimise</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04 · ◷ 1 week</div><div className="pipe-detail__title">Conversion audit</div><p className="pipe-detail__body">We analyse your existing funnel, cart abandonment, and UX gaps — so the rebuild fixes what's actually costing you sales.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Funnel &amp; cart abandonment review</span></li><li><span className="ok">✓</span><span>UX gap analysis</span></li><li><span className="ok">✓</span><span>Itemised estimate within 24h</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww audit --funnel</div><div className="t2">✓ funnel mapped  ✓ gaps identified  ✓ estimate sent</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04 · ◷ 1–2 weeks</div><div className="pipe-detail__title">Storefront design</div><p className="pipe-detail__body">Figma designs optimised mobile-first for conversion — reviewed and signed off before a line of storefront code is written.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Mobile-first Figma designs</span></li><li><span className="ok">✓</span><span>Checkout flow signed off</span></li><li><span className="ok">✓</span><span>Component architecture mapped</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww design --storefront</div><div className="t2">✓ Figma signed off  ✓ checkout mapped  ✓ components set</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04 · ◷ ongoing sprints</div><div className="pipe-detail__title">Build &amp; integrate</div><p className="pipe-detail__body">Storefront, payments, inventory, and analytics built in sprints — with staging deploys and stakeholder reviews.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Payments &amp; inventory wired in</span></li><li><span className="ok">✓</span><span>Fortnightly staging deploys</span></li><li><span className="ok">✓</span><span>Clean, documented codebase</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww ship --store</div><div className="t2">✓ payments live on staging  ✓ inventory synced  ✓ tests passing</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04 · ◷ launch week</div><div className="pipe-detail__title">Launch &amp; optimise</div><p className="pipe-detail__body">We A/B test checkout, monitor Core Web Vitals, and iterate against basket analysis once the store is live.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Checkout A/B testing live</span></li><li><span className="ok">✓</span><span>Core Web Vitals monitored</span></li><li><span className="ok">✓</span><span>Zero-downtime production deploy</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww deploy --prod</div><div className="t2">✓ CWV green  ✓ checkout A/B live  ✓ live · monitored</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">WHAT_YOU_GET</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Figma design source files</span></div><div><span className="plus">+</span><span>Clean, documented codebase</span></div><div><span className="plus">+</span><span>CI/CD pipeline</span></div><div><span className="plus">+</span><span>SEO &amp; analytics setup</span></div><div><span className="plus">+</span><span>Performance report</span></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// why DWW for e-commerce</p>
          <h2 className="title mono">Engineered for conversion, not just launch</h2>
          <div className="grid grid-4 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{color:"var(--pink)"}}>⚡ SPEED</div><div className="cap__title" style={{marginTop:"10px"}}>Speed = revenue</div><p className="cap__body">1 second faster page load equals roughly 7% more conversions. We take this seriously.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{color:"var(--pink)"}}>💳 PAYMENTS</div><div className="cap__title" style={{marginTop:"10px"}}>Payment experts</div><p className="cap__body">Multi-gateway, multi-currency, and BNPL implementations across Stripe, Razorpay, and PayPal.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{color:"var(--pink)"}}>🔄 OMNICHANNEL</div><div className="cap__title" style={{marginTop:"10px"}}>Omnichannel</div><p className="cap__body">Online, mobile, and POS kept in sync with real-time inventory across every channel.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{color:"var(--pink)"}}>📊 DATA</div><div className="cap__title" style={{marginTop:"10px"}}>Data-driven</div><p className="cap__body">Conversion funnels, basket analysis, and customer LTV inform every decision, from day one.</p></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// ecommerce-development.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Custom build vs WooCommerce?<span className="sign">[+]</span></button><div className="faq__a"><p>WooCommerce for a quick launch with a mature plugin ecosystem. Custom for unique checkout flows, complex integrations, or performance requirements that exceed WooCommerce's limits.</p></div></div>
            <div className="faq__item"><button className="faq__q">What is headless commerce?<span className="sign">[+]</span></button><div className="faq__a"><p>A Next.js frontend consuming WooCommerce or Shopify via API — faster loads, unlimited design freedom, and better mobile UX than a traditional theme.</p></div></div>
            <div className="faq__item"><button className="faq__q">How do you handle high traffic events?<span className="sign">[+]</span></button><div className="faq__a"><p>Auto-scaling infrastructure, a CDN for static assets, Redis caching, and pre-emptive load testing before peak events like sale days.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you integrate with our warehouse system?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — real-time stock sync with 3PL providers, warehouse management systems, and ERP platforms via REST or EDI.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-3">
            <a className="svc" href="https://digitalwebweaver.com/shopify-development/"><div className="svc__title" style={{fontSize:"16px"}}>Shopify development</div><p className="svc__body" style={{fontSize:"13.5px"}}>Custom Shopify themes with Razorpay, GST invoicing, and conversion-optimised design.</p><div className="mono" style={{fontSize:"12px",color:"var(--pink)",marginTop:"12px"}}>open ↗</div></a>
            <a className="svc" href="https://digitalwebweaver.com/wordpress-development/"><div className="svc__title" style={{fontSize:"16px"}}>WordPress development</div><p className="svc__body" style={{fontSize:"13.5px"}}>Custom WooCommerce stores — no page builders, performance guaranteed.</p><div className="mono" style={{fontSize:"12px",color:"var(--pink)",marginTop:"12px"}}>open ↗</div></a>
            <Link className="svc" href="/retail-ecommerce/"><div className="svc__title" style={{fontSize:"16px"}}>Retail &amp; e-commerce</div><p className="svc__body" style={{fontSize:"13.5px"}}>Omnichannel retail software, loyalty programs, and inventory sync.</p><div className="mono" style={{fontSize:"12px",color:"var(--pink)",marginTop:"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --ecommerce<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to build an online store that performs?</h2>
          <p className="cta__lead">Free technical audit of your existing store, or a scoping session for a new build — in 24 hours.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Get free audit</Link>
            <Link className="btn btn--ghost" href="/portfolio/">See our work</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Platform-agnostic advice</span><span><span className="g">●</span> Fixed price</span><span><span className="g">●</span> CRO-focused</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">ecommerce-development.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
