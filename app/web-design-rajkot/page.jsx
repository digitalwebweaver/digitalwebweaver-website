import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Web Design Rajkot | Websites, ERP & B2B Portals — Digital Web Weaver" },
  description: "Web development company serving Rajkot — manufacturing ERP, B2B dealer portals, and export-ready websites for Saurashtra's engineering, auto-parts and industrial SMEs. Fixed price, free consultation.",
  alternates: { canonical: "/web-design-rajkot/" },
  openGraph: { title: "Web Design Rajkot | Websites, ERP & B2B Portals — Digital Web Weaver", description: "Web development company serving Rajkot — manufacturing ERP, B2B dealer portals, and export-ready websites for Saurashtra's engineering, auto-parts and industrial SMEs. Fixed price, free consultation.", url: "/web-design-rajkot/", type: "website" }
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
      <span className="activitybar__geo" title="Rajkot · Saurashtra">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> web-design-rajkot.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> services.ts</button>
        <button className="tab" data-scroll="s-about" data-target="s-about"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> local.md</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// web-design-rajkot.ts · engineering · auto-parts · Saurashtra</p>
            <span className="badge">WEB DESIGN RAJKOT</span>
            <h1 className="hero__h1">Web development company serving <span className="pink">Rajkot</span></h1>
            <p className="hero__lead">Senior engineers building digital infrastructure for Rajkot's industrial SMEs — from B2B portals and custom inventory ERP for engineering manufacturers to professional websites and mobile apps for Saurashtra's growing businesses.</p>
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
              <p className="form__eyebrow">TELL US ABOUT YOUR RAJKOT PROJECT</p>
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
          <p className="eyebrow">const build = [ <span className="c">// software for Rajkot's industrial &amp; MSME ecosystem</span></p>
          <h2 className="title mono">What we build</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Manufacturing ERP systems</div><p className="svc__body">Custom ERP for Rajkot's engineering and manufacturing businesses — production planning, raw material inventory, machine scheduling, dispatch, and financial reporting in one platform.</p><div className="svc__tags"><span className="tag">Laravel</span><span className="tag tag--y">PostgreSQL</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">B2B dealer &amp; distributor portals</div><p className="svc__body">Wholesale portals for Rajkot's auto parts, engineering goods, and industrial component manufacturers — with catalogue, order management, credit tracking, and GST invoicing.</p><div className="svc__tags"><span className="tag">React</span><span className="tag tag--y">Multi-user</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Business websites</div><p className="svc__body">Professional websites for Rajkot's manufacturers, engineering firms, and service businesses — optimised for Google search so buyers across India and internationally can find you.</p><div className="svc__tags"><span className="tag">Next.js</span><span className="tag tag--y">SEO</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Inventory management systems</div><p className="svc__body">Custom inventory and warehouse management software replacing Excel and manual processes — for multi-location stock, FIFO costing, barcode scanning, and reorder alerts.</p><div className="svc__tags"><span className="tag">Barcode</span><span className="tag tag--y">Multi-location</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Mobile apps for field operations</div><p className="svc__body">Android and iOS apps for field sales teams, delivery tracking, and service engineers — with offline capability for areas with poor connectivity in Saurashtra.</p><div className="svc__tags"><span className="tag">Flutter</span><span className="tag tag--y">Offline-first</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Export &amp; quotation management</div><p className="svc__body">Software for Rajkot exporters to manage international buyers, generate quotations in multiple currencies, track shipments, and manage LC documentation.</p><div className="svc__tags"><span className="tag">Multi-currency</span><span className="tag tag--y">PDF</span></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// built for Rajkot's industrial reality</p>
          <h2 className="title mono">Why Digital Web Weaver</h2>
          <div className="grid grid-4 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🏭 MANUFACTURING</div><div className="cap__title" style={{"marginTop":"10px"}}>Manufacturing expertise</div><p className="cap__body">We have built ERP, inventory, and production tracking systems for industrial businesses. We know how factories work — from BOM and job cards to dispatch and invoicing — and we build software that fits.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🗣️ LANGUAGE</div><div className="cap__title" style={{"marginTop":"10px"}}>Language support</div><p className="cap__body">Our team speaks Gujarati, Hindi, and English. Explain your business process in your own language. We'll translate it into software that works.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>👨‍💻 SENIOR-ONLY</div><div className="cap__title" style={{"marginTop":"10px"}}>Senior-only teams</div><p className="cap__body">Every project is built by senior engineers with 5+ years of experience. The engineer who understands your business builds your software — no handoff to a junior after the sale.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>💰 FIXED</div><div className="cap__title" style={{"marginTop":"10px"}}>Fixed pricing model</div><p className="cap__body">We scope carefully and commit in writing. No scope-creep charges. The quote we give after discovery is the price you pay — even if we underestimate the work.</p></div>
          </div>
        </section>

        <section id="s-about" className="section reveal">
          <p className="eyebrow">// web-design-rajkot.md</p>
          <h2 className="title mono">Web design · Rajkot</h2>
          <p className="subtitle" style={{"maxWidth":"860px"}}>If you run an engineering, auto-parts, or manufacturing business in Saurashtra, you need more than a brochure site — you need digital infrastructure that reflects how you actually work. To be honest about geography: our studio is in Vadodara, and we serve Rajkot clients remotely for day-to-day work, with on-site visits for kickoff and milestone meetings on larger projects. Most manufacturing teams prefer that rhythm — it saves travel and keeps decisions moving.</p>
          <div className="grid grid-2" style={{"marginTop":"26px"}}>
            <div className="panel-note" style={{"marginTop":"0"}}>
              <div className="panel-note__lbl">WEBSITES THAT WIN BUYERS, NOT JUST VISITORS</div>
              <p style={{"fontSize":"15px","color":"var(--text-2)","lineHeight":"1.6","marginTop":"12px"}}>A Rajkot manufacturer's website has one real job: help Indian and international buyers find you and trust you. We design fast, mobile-first sites with clean UI/UX and structured product catalogues, then back them with SEO, compliance documents, and enquiry forms that route straight to your sales team.</p>
            </div>
            <div className="panel-note" style={{"marginTop":"0"}}>
              <div className="panel-note__lbl">SOFTWARE BUILT AROUND YOUR SHOP FLOOR</div>
              <p style={{"fontSize":"15px","color":"var(--text-2)","lineHeight":"1.6","marginTop":"12px"}}>Rajkot's strength is production, so we build custom ERP and CRM systems that handle raw-material inventory, job cards, dispatch, GST invoicing, and multi-currency export quotations — one platform instead of scattered spreadsheets and Tally add-ons.</p>
            </div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// rajkot.faq.md</p>
          <h2 className="title mono">Questions from Rajkot clients</h2>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Can you build custom ERP for a Rajkot manufacturing company?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. Custom ERP is one of our most common projects. We build systems covering production planning, raw material inventory, job cards, quality checks, dispatch, and billing. A custom ERP costs significantly less than SAP or Tally Enterprise and is built exactly for your processes — not adapted from a generic template.</p></div></div>
            <div className="faq__item"><button className="faq__q">We sell auto parts / engineering components. Can you build a B2B dealer portal?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. A B2B dealer portal lets your distributors and dealers place orders online 24/7 — with your product catalogue, their credit limit, real-time stock visibility, and automatic GST invoicing. This replaces phone/WhatsApp ordering and reduces order errors significantly.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you build a website that helps us get international buyers for our Rajkot products?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. We build export-focused websites optimised for Google search — with product catalogues, certificates/compliance documents, enquiry forms, and structured data that helps international buyers find you. We also help with SEO so you rank for "[product] manufacturer India" type searches.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you have an office in Rajkot?<span className="sign">[+]</span></button><div className="faq__a"><p>Our studio is in Vadodara. We serve Rajkot clients remotely for day-to-day communication, with Rajkot visits for kickoff and milestone meetings on larger projects. Most of our manufacturing clients prefer video calls — it saves travel time for their busy teams.</p></div></div>
            <div className="faq__item"><button className="faq__q">What does custom software cost for a Rajkot SME?<span className="sign">[+]</span></button><div className="faq__a"><p>A business website starts from ₹30,000. A B2B dealer portal starts from ₹1L. A custom ERP or inventory system starts from ₹2L depending on scope. Contact us for a free discovery call — we'll give you a detailed estimate within 48 hours.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <Link className="svc" href="/web-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Web development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Full-stack web development services for Rajkot businesses.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/custom-software-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Custom software development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Bespoke software replacing manual processes and spreadsheets.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/crm-erp-systems/"><div className="svc__title" style={{"fontSize":"16px"}}>CRM &amp; ERP systems</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Custom ERP and CRM for Rajkot's manufacturing and trading sectors.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/web-design-vadodara/"><div className="svc__title" style={{"fontSize":"16px"}}>Web design Vadodara</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Creative web design from Gujarat's leading digital agency.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --rajkot<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to digitise your Rajkot business?</h2>
          <p className="cta__lead">Free technical consultation. Fixed price quote within 48 hours. No commitment.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Book a free call</Link>
            <Link className="btn btn--ghost" href="/portfolio/">View our work</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free consultation</span><span><span className="g">●</span> Gujarati-speaking team</span><span><span className="g">●</span> Senior engineers only</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">web-design-rajkot.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
