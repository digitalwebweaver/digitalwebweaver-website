import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Web Design Ahmedabad | Websites, Apps & ERP Systems — Digital Web Weaver" },
  description: "Web development company serving Ahmedabad — business websites, e-commerce, custom ERP/CRM, mobile apps, and SaaS for SG Highway, GIDC, GIFT City and Naroda businesses. Free enquiry, reply in 24h.",
  alternates: { canonical: "/web-design-ahmedabad/" },
  openGraph: { title: "Web Design Ahmedabad | Websites, Apps & ERP Systems — Digital Web Weaver", description: "Web development company serving Ahmedabad — business websites, e-commerce, custom ERP/CRM, mobile apps, and SaaS for SG Highway, GIDC, GIFT City and Naroda businesses. Free enquiry, reply in 24h.", url: "/web-design-ahmedabad/", type: "website" }
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
      <span className="activitybar__geo" title="Ahmedabad · Gujarat">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> web-design-ahmedabad.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> services.ts</button>
        <button className="tab" data-scroll="s-about" data-target="s-about"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> local.md</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// web-design-ahmedabad.ts · SG Highway · GIDC · GIFT City</p>
            <span className="badge">WEB DESIGN AHMEDABAD</span>
            <h1 className="hero__h1">Web development company serving <span className="pink">Ahmedabad</span></h1>
            <p className="hero__lead">If you run a business in Ahmedabad — a textile export house in Naroda, an IT firm on SG Highway, a fintech startup in GIFT City, or an MSME manufacturer in GIDC — you want a partner who understands the technology and the local market. Our studio is in Vadodara, ~110 km away, close enough for in-person meetings, remote day to day. We speak English, Hindi, and Gujarati.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Send enquiry</a>
              <a className="btn btn--ghost" href="#s-build" data-scroll="s-build">↓ what we build</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>200+</b><span>projects delivered</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>12yrs</b><span>years in business</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>4.9</b><span>average rating</span></div>
            </div>
          </div>
          <div className="formcard" id="estimate">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">enquiry.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">TELL US ABOUT YOUR AHMEDABAD PROJECT</p>
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
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>150+</div><div className="lbl">TRUSTED_CLIENTS</div><div className="sub">▲ repeat &amp; referral</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>4.9</div><div className="lbl">CLUTCH_RATING</div><div className="sub">▲ verified reviews</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// full-stack digital solutions for Ahmedabad businesses</span></p>
          <h2 className="title mono">What we build</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Business websites &amp; landing pages</div><p className="svc__body">Custom-designed, mobile-first websites that convert visitors into leads — built for Ahmedabad's professional services, retail, and B2B sectors.</p><div className="svc__tags"><span className="tag">Next.js</span><span className="tag tag--y">SEO-ready</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">E-commerce platforms</div><p className="svc__body">Scalable online stores for Ahmedabad's textile traders, fashion labels, and consumer brands — with Razorpay, GST invoicing, and WhatsApp order integration.</p><div className="svc__tags"><span className="tag">Shopify</span><span className="tag tag--y">Razorpay</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Custom ERP &amp; CRM systems</div><p className="svc__body">Purpose-built ERP and CRM software replacing spreadsheets and legacy tools — for manufacturing, trading, and distribution businesses in Ahmedabad.</p><div className="svc__tags"><span className="tag">Laravel</span><span className="tag tag--y">PostgreSQL</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Mobile applications</div><p className="svc__body">iOS and Android apps for Ahmedabad's growing consumer and enterprise market — field service, logistics, retail, and on-demand platforms.</p><div className="svc__tags"><span className="tag">Flutter</span><span className="tag tag--y">React Native</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">SaaS &amp; fintech products</div><p className="svc__body">Scalable multi-tenant SaaS platforms for Ahmedabad startups and GIFT City fintech companies — with subscription billing, compliance hooks, and investor-ready architecture.</p><div className="svc__tags"><span className="tag">Multi-tenant</span><span className="tag tag--y">Stripe</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">AI &amp; automation solutions</div><p className="svc__body">Document processing, chatbots, predictive analytics, and workflow automation that eliminate repetitive work — for pharma, logistics, and trading businesses.</p><div className="svc__tags"><span className="tag">OpenAI</span><span className="tag tag--y">LangChain</span></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// why Digital Web Weaver</p>
          <h2 className="title mono">Why Digital Web Weaver</h2>
          <div className="grid grid-4 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🗣️ GUJARATI</div><div className="cap__title" style={{"marginTop":"10px"}}>Gujarati-speaking team</div><p className="cap__body">We communicate in English, Hindi, and Gujarati — whichever you prefer. Technical depth meets local understanding, with no translation barriers.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>📍 100KM</div><div className="cap__title" style={{"marginTop":"10px"}}>Based 100 km from Ahmedabad</div><p className="cap__body">Our studio is in Vadodara. We make regular visits to Ahmedabad for client meetings, discovery workshops, and project reviews — in person when it matters.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>👨‍💻 SENIOR</div><div className="cap__title" style={{"marginTop":"10px"}}>Senior engineers, not freshers</div><p className="cap__body">Every project is built by engineers with 5+ years of experience. The person you speak with is the person who builds your product.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>💰 FIXED</div><div className="cap__title" style={{"marginTop":"10px"}}>Fixed-price projects, no surprises</div><p className="cap__body">We scope carefully and commit in writing. No scope-creep charges, no surprise invoices. The price we quote is the price you pay.</p></div>
          </div>
        </section>

        <section id="s-about" className="section reveal">
          <p className="eyebrow">// serving Ahmedabad businesses since 2013</p>
          <h2 className="title mono">Full-stack solutions, scoped honestly</h2>
          <p className="subtitle" style={{"maxWidth":"860px"}}>Most Ahmedabad clients start with a fast, mobile-first business website, then grow into deeper work. We build conversion-focused sites and handle full web development when a marketing site is not enough. For textile traders and D2C brands, our e-commerce development ships stores with Razorpay, GST invoicing, and WhatsApp order flows. For manufacturers and distributors drowning in spreadsheets, we design custom ERP and CRM systems built exactly around your purchase, inventory, and production processes — at a fraction of SAP or Oracle cost.</p>
          <div className="panel-note" style={{"marginTop":"26px"}}>
            <div className="panel-note__lbl">DESIGN THAT RESPECTS YOUR USERS AND YOUR BUDGET</div>
            <p style={{"fontSize":"15.5px","color":"var(--text-2)","lineHeight":"1.65","marginTop":"14px","maxWidth":"900px"}}>Good design is not decoration; it is how a visitor decides to trust you. Our UI/UX design work starts with your actual customers — a wholesale buyer comparing MOQs, a patient booking an appointment, an investor reviewing a GIFT City fintech product — and shapes every screen around that decision. Pricing is fixed and quoted upfront, so there are no surprises after kickoff. Whether you need a five-page site or a multi-crore platform, you get senior engineers, honest timelines, and a team you can actually meet.</p>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// ahmedabad.faq.md</p>
          <h2 className="title mono">Questions from Ahmedabad clients</h2>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Do you have an office in Ahmedabad?<span className="sign">[+]</span></button><div className="faq__a"><p>Our studio is based in Vadodara, 100 km from Ahmedabad. We serve Ahmedabad clients remotely day-to-day, with in-person meetings at your office or a co-working space when needed. Many of our long-term clients prefer the remote model — it keeps costs down without sacrificing quality or communication.</p></div></div>
            <div className="faq__item"><button className="faq__q">What types of Ahmedabad businesses do you typically work with?<span className="sign">[+]</span></button><div className="faq__a"><p>We work with a wide range: textile traders and exporters, pharmaceutical companies, IT firms on SG Highway, MSME manufacturers in GIDC, real-estate developers, fintech startups in GIFT City, and retail/D2C brands. Our work spans from ₹50k business websites to multi-crore enterprise systems.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you build e-commerce platforms for Ahmedabad textile exporters?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. We have experience building B2B wholesale portals and B2C e-commerce platforms for textile and apparel businesses — with features like MOQ pricing, GST invoicing, fabric catalogue management, and WhatsApp order integration. We can also integrate with IndiaMART or export marketplaces if needed.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you build custom ERP systems for Ahmedabad manufacturers?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. We build custom ERP and CRM systems for manufacturing, trading, and distribution companies — including inventory, purchase orders, production tracking, and financial reporting. Custom ERP costs significantly less than SAP or Oracle and is built exactly for your processes.</p></div></div>
            <div className="faq__item"><button className="faq__q">How long does a typical project take and what does it cost?<span className="sign">[+]</span></button><div className="faq__a"><p>A business website typically takes 3–5 weeks and starts from ₹40,000. A custom web application or e-commerce platform takes 8–14 weeks and starts from ₹1.5L. Custom ERP systems take 3–6 months depending on scope. We'll give you a detailed estimate after a free discovery call.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <Link className="svc" href="/web-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Web development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Full-stack web development services for Ahmedabad businesses.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <a className="svc" href="https://digitalwebweaver.com/website-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Website development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Professional business websites built fast and affordably.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></a>
            <Link className="svc" href="/custom-software-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Custom software development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Bespoke ERP, CRM, portals, and workflow automation.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/web-design-vadodara/"><div className="svc__title" style={{"fontSize":"16px"}}>Web design Vadodara</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Creative web design from Gujarat's leading digital agency.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --ahmedabad<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Let's build something great for your Ahmedabad business</h2>
          <p className="cta__lead">Free discovery call and a detailed estimate from senior engineers — within 24 hours. Tell us what you need and we'll scope it.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Start a project</Link>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Book a free call</a>
            <Link className="btn btn--ghost" href="/portfolio/">See our work</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Gujarati-speaking team</span><span><span className="g">●</span> Fixed-price projects</span><span><span className="g">●</span> Senior engineers only</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">web-design-ahmedabad.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
