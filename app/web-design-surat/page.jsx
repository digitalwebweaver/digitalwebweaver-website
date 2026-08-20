import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Web Design Surat | Websites, E-commerce & ERP Systems — Digital Web Weaver" },
  description: "Web development company serving Surat — B2B wholesale portals for diamond and textile traders, e-commerce for D2C brands, and custom ERP for SME manufacturers. Fixed price, free consultation.",
  alternates: { canonical: "/web-design-surat/" },
  openGraph: { title: "Web Design Surat | Websites, E-commerce & ERP Systems — Digital Web Weaver", description: "Web development company serving Surat — B2B wholesale portals for diamond and textile traders, e-commerce for D2C brands, and custom ERP for SME manufacturers. Fixed price, free consultation.", url: "/web-design-surat/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-build" data-target="s-build" title="What we build">⚙</button>
      <button className="activitybar__btn" data-scroll="s-why" data-target="s-why" title="Why us">✓</button>
      <button className="activitybar__btn" data-scroll="s-about" data-target="s-about" title="Local details">◍</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="Surat · Gujarat">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> web-design-surat.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> services.ts</button>
        <button className="tab" data-scroll="s-about" data-target="s-about"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> local.md</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// web-design-surat.ts · diamond · textile · trading</p>
            <span className="badge">WEB DESIGN SURAT</span>
            <h1 className="hero__h1">Web development company serving <span className="pink">Surat</span></h1>
            <p className="hero__lead">Senior engineers building custom digital solutions for Surat's trading community — from B2B wholesale portals for diamond and textile businesses to consumer e-commerce platforms and custom ERP for SME manufacturers.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Send enquiry</a>
              <a className="btn btn--ghost" href="#s-build" data-scroll="s-build">↓ what we build</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>200+</b><span>projects delivered</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>12yrs</b><span>in business</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>150+</b><span>trusted clients</span></div>
            </div>
          </div>
          <div className="formcard" id="estimate">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">enquiry.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">TELL US ABOUT YOUR SURAT PROJECT</p>
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
              <button className="form__submit" type="submit">Send enquiry ↗</button>
              <p className="form__micro">No commitment · 24-hour response</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww enquiry --submit</div>
              <div className="s1">✓ request received<br />✓ routed to a senior engineer<br />✓ estimate en route</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll reply within 24 hours.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>200+</div><div className="lbl">PROJECTS_DELIVERED</div><div className="sub">▲ since 2013</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>SR</div><div className="lbl">ENGINEER_LEVEL</div><div className="sub">▲ senior only</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>12yrs</div><div className="lbl">IN_BUSINESS</div><div className="sub">▲ since 2013</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">TRUSTED_CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// digital solutions for Surat's trading &amp; manufacturing ecosystem</span></p>
          <h2 className="title mono">What we build</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">B2B wholesale portals</div><p className="svc__body">Dealer portals and wholesale platforms for Surat's diamond, textile, and chemical traders — with catalogue management, tiered pricing, order tracking, and GST-compliant invoicing.</p><div className="svc__tags"><span className="tag">Laravel</span><span className="tag tag--y">React</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">E-commerce &amp; D2C stores</div><p className="svc__body">Online stores for Surat's fashion labels, saree traders, and consumer brands — with Razorpay payment, GST invoicing, WhatsApp integration, and catalogue management.</p><div className="svc__tags"><span className="tag">Shopify</span><span className="tag tag--y">Razorpay</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Custom ERP &amp; inventory systems</div><p className="svc__body">ERP software built for Surat's trading and manufacturing operations — purchase orders, inventory, production, dispatch, and financial reporting in one system.</p><div className="svc__tags"><span className="tag">PostgreSQL</span><span className="tag tag--y">Multi-user</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Business websites</div><p className="svc__body">Professional websites for Surat's businesses — diamond exporters, textile mills, manufacturers, and service providers — optimised for local Google search.</p><div className="svc__tags"><span className="tag">Next.js</span><span className="tag tag--y">Mobile-first</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Mobile applications</div><p className="svc__body">iOS and Android apps for field sales, logistics tracking, dealer ordering, and customer service — for Surat's growing mobile-first market.</p><div className="svc__tags"><span className="tag">Flutter</span><span className="tag tag--y">React Native</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Diamond &amp; jewellery software</div><p className="svc__body">Specialised software for diamond and jewellery businesses — rough tracking, polish inventory, client memo management, and international quotation tools.</p><div className="svc__tags"><span className="tag">Node.js</span><span className="tag tag--y">PDF generation</span></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// the right engineering partner for Surat's fast-moving businesses</p>
          <h2 className="title mono">Why Digital Web Weaver</h2>
          <div className="grid grid-4 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>📦 TRADING</div><div className="cap__title" style={{"marginTop":"10px"}}>We understand trading businesses</div><p className="cap__body">We have built B2B portals, wholesale platforms, and trading ERP systems. We understand the workflows of India's traders — catalogues, bulk pricing, credit limits, GST, and fast turnaround.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🗣️ GUJARATI</div><div className="cap__title" style={{"marginTop":"10px"}}>Gujarati-speaking team</div><p className="cap__body">Our team speaks Gujarati and Hindi fluently. You can explain your business requirements in your own language — no translation friction, no misunderstood briefs.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>⚡ FAST</div><div className="cap__title" style={{"marginTop":"10px"}}>Fast delivery on fixed price</div><p className="cap__body">Surat businesses move fast. We do too. Most websites launch in 3–4 weeks. Complex platforms in 8–12 weeks. All at a fixed price agreed upfront.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>👨‍💻 SENIOR</div><div className="cap__title" style={{"marginTop":"10px"}}>Senior engineers on every project</div><p className="cap__body">No juniors, no handoffs. Your project is built by engineers with 5+ years of experience. The same person who scopes your project builds it.</p></div>
          </div>
        </section>

        <section id="s-about" className="section reveal">
          <p className="eyebrow">// web-design-surat.md</p>
          <h2 className="title mono">Web development company serving Surat</h2>
          <p className="subtitle" style={{"maxWidth":"860px"}}>If you run a diamond trading house, a textile or saree label, or an SME manufacturing unit in Surat, you need a partner that understands how fast your business moves and how your buyers actually place orders. We are a Vadodara-based studio of senior engineers, serving Surat clients primarily remotely — video calls, screen-sharing, and shared boards for day-to-day work — with on-site visits for kickoff and key milestones on larger projects.</p>
          <div className="grid grid-2" style={{"marginTop":"26px"}}>
            <div className="panel-note" style={{"marginTop":"0"}}>
              <div className="panel-note__lbl">BUILT FOR HOW SURAT TRADES</div>
              <p style={{"fontSize":"15px","color":"var(--text-2)","lineHeight":"1.6","marginTop":"12px"}}>Surat runs on wholesale relationships and high catalogue volume, so we design around that. For diamond and textile traders we build dealer and B2B portals with tiered pricing, order tracking, and GST-compliant invoicing. For fashion and saree brands going direct to consumer, we build e-commerce stores with Razorpay, COD, WhatsApp order alerts, and large fabric catalogues — on Shopify when speed matters, or fully custom when you need tighter control.</p>
            </div>
            <div className="panel-note" style={{"marginTop":"0"}}>
              <div className="panel-note__lbl">ONE PARTNER, FROM WEBSITE TO BACK OFFICE</div>
              <p style={{"fontSize":"15px","color":"var(--text-2)","lineHeight":"1.6","marginTop":"12px"}}>Many Surat SMEs outgrow their website and start needing purchase orders, inventory, dispatch, and reporting in one place — so we also build custom ERP and CRM systems that plug into the same platform. Most websites launch in three to four weeks and complex platforms in eight to twelve, all at a fixed price agreed upfront.</p>
            </div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// surat.faq.md</p>
          <h2 className="title mono">Questions from Surat clients</h2>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Can you build a B2B portal for our diamond or textile business?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. We build B2B wholesale portals with features like product catalogues, tiered pricing, dealer login, order management, dispatch tracking, and GST invoicing. These replace email and WhatsApp-based ordering with a proper system — reducing errors and saving hours per day.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you build e-commerce websites for Surat's saree and textile sellers?<span className="sign">[+]</span></button><div className="faq__a"><p>Absolutely. We build e-commerce platforms for Surat's fashion and textile businesses — with fabric/saree catalogues, COD support, Razorpay integration, GST invoices, and WhatsApp order notifications. We can build on Shopify for speed or fully custom for more control.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you build diamond business software — inventory, memo, client tracking?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. We have built diamond business software including rough and polish inventory, client memo management, international quotation generation, and commission tracking. If you have a specific workflow, we'll build exactly to it.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you have an office in Surat?<span className="sign">[+]</span></button><div className="faq__a"><p>Our studio is in Vadodara. We serve Surat clients primarily remotely, with video calls and screen-sharing for day-to-day work. For larger projects, we visit Surat for kickoff meetings and key milestones.</p></div></div>
            <div className="faq__item"><button className="faq__q">What does a custom website or portal cost for a Surat business?<span className="sign">[+]</span></button><div className="faq__a"><p>A professional business website starts from ₹35,000. A B2B dealer portal starts from ₹1.2L. A custom ERP or trading management system starts from ₹2.5L. We'll give you an exact quote after a free 30-minute discovery call.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <Link className="svc" href="/web-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Web development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Full-stack web development services for Surat businesses.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <a className="svc" href="https://digitalwebweaver.com/website-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Website development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Professional business websites built fast and affordably.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></a>
            <Link className="svc" href="/ecommerce-development/"><div className="svc__title" style={{"fontSize":"16px"}}>E-commerce development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Online stores and B2B portals for Gujarat's textile and diamond trade.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/web-design-vadodara/"><div className="svc__title" style={{"fontSize":"16px"}}>Web design Vadodara</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Creative web design from Gujarat's leading digital agency.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --surat<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to build your Surat business online?</h2>
          <p className="cta__lead">Free technical consultation. Fixed quote within 48 hours. No commitment required.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Book a free call</Link>
            <Link className="btn btn--ghost" href="/portfolio/">View portfolio</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free consultation</span><span><span className="g">●</span> Gujarati-speaking team</span><span><span className="g">●</span> Fixed pricing</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">web-design-surat.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
