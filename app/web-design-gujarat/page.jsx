import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Web Design Gujarat | Websites, Apps & ERP Solutions — Digital Web Weaver" },
  description: "Web development company serving Gujarat — senior engineers based in Vadodara building websites, ERP/CRM systems, e-commerce, and mobile apps for Ahmedabad, Surat, Rajkot, and beyond.",
  alternates: { canonical: "/web-design-gujarat/" },
  openGraph: { title: "Web Design Gujarat | Websites, Apps & ERP Solutions — Digital Web Weaver", description: "Web development company serving Gujarat — senior engineers based in Vadodara building websites, ERP/CRM systems, e-commerce, and mobile apps for Ahmedabad, Surat, Rajkot, and beyond.", url: "/web-design-gujarat/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-build" data-target="s-build" title="What we build">⚙</button>
      <button className="activitybar__btn" data-scroll="s-why" data-target="s-why" title="Why Digital Web Weaver">✓</button>
      <button className="activitybar__btn" data-scroll="s-about" data-target="s-about" title="Local context">¶</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="Vadodara · Ahmedabad · Surat · Rajkot">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> web-design-gujarat.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> services.ts</button>
        <button className="tab" data-scroll="s-about" data-target="s-about"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> local.md</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// web-design-gujarat.ts · Vadodara · Ahmedabad · Surat · Rajkot</p>
            <span className="badge">WEB DESIGN GUJARAT</span>
            <h1 className="hero__h1">Web development company serving <span className="pink">Gujarat</span></h1>
            <p className="hero__lead">Senior engineers based in Vadodara, building custom software for businesses across Gujarat — from Ahmedabad's IT startups and GIFT City fintechs to Surat's textile traders, Rajkot's manufacturers, and the state's 3.6 million+ MSMEs.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Send enquiry</a>
              <a className="btn btn--ghost" href="#s-build" data-scroll="s-build">$ view --services</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>200+</b><span>projects delivered</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>8yr</b><span>in business</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>150+</b><span>clients served</span></div>
            </div>
          </div>
          <div className="formcard" id="enquiry">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">enquiry.form</span><span className="mut">— gujarat</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">PROJECT INQUIRY</p>
              <p className="form__title">Tell us about your Gujarat project</p>
              <p className="form__lead">Scope and a written estimate within 24 hours — no commitment.</p>
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
              <div className="s0">$ dww enquiry --gujarat --submit</div>
              <div className="s1">✓ request received<br />✓ routed to a senior engineer<br />✓ estimate en route</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll reply within 24 hours.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>200+</div><div className="lbl">PROJECTS_DELIVERED</div><div className="sub">▲ across Gujarat &amp; beyond</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>8yr</div><div className="lbl">IN_BUSINESS</div><div className="sub">▲ serving Gujarat since 2013</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>150+</div><div className="lbl">CLIENTS_SERVED</div><div className="sub">▲ SMEs to enterprises</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>4</div><div className="lbl">SERVICE_AREAS</div><div className="sub">▲ Vadodara·Ahmedabad·Surat·Rajkot</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// full-spectrum digital solutions across Gujarat</span></p>
          <h2 className="title mono">What we build</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Custom websites &amp; web apps</div><p className="svc__body">Mobile-first websites and web applications for Gujarat businesses — from professional company sites to complex customer portals and SaaS products.</p><div className="svc__foot"><span>web.tsx</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">ERP &amp; CRM systems</div><p className="svc__body">Custom business software replacing spreadsheets and legacy tools — for Gujarat's manufacturers, traders, distributors, and service businesses.</p><div className="svc__foot"><span>erp.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">E-commerce &amp; B2B portals</div><p className="svc__body">Online stores and wholesale portals for Gujarat's textile, diamond, chemical, and consumer goods businesses — with Razorpay, GST, and WhatsApp integration.</p><div className="svc__foot"><span>commerce.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Mobile applications</div><p className="svc__body">iOS and Android apps for Gujarat businesses — field sales, logistics, dealer apps, and consumer-facing applications built for India's mobile-first users.</p><div className="svc__foot"><span>mobile.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">SaaS &amp; product development</div><p className="svc__body">Multi-tenant SaaS platforms for Gujarat startups — from MVP in 8 weeks to enterprise-scale with subscription billing, team management, and an API ecosystem.</p><div className="svc__foot"><span>saas.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">AI &amp; automation</div><p className="svc__body">Intelligent automation for Gujarat's industries — document processing, demand forecasting, chatbots, and AI-powered workflows that cut manual overhead.</p><div className="svc__foot"><span>ai.py</span></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// why Digital Web Weaver</p>
          <h2 className="title mono">A Gujarat-based team that gets Gujarat businesses</h2>
          <div className="grid grid-4 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>01 · LOCAL</div><div className="cap__title" style={{"marginTop":"10px"}}>Built and rooted in Gujarat</div><p className="cap__body">Our studio is in Vadodara, Gujarat. We understand the local business culture, the industries, the pace of decision-making, and the value of trust in a business relationship. We're not a distant vendor — we're your neighbours.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>02 · LANGUAGE</div><div className="cap__title" style={{"marginTop":"10px"}}>We speak your language</div><p className="cap__body">Our team works in Gujarati, Hindi, and English. Business requirements can be explained in the language you think in — not the language you translate into for a vendor.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>03 · IN-HOUSE</div><div className="cap__title" style={{"marginTop":"10px"}}>No juniors, no outsourcing</div><p className="cap__body">100% of our work is done by our in-house senior engineering team. We don't sub-contract. The engineers you meet are the engineers who build your product.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>04 · SINCE 2013</div><div className="cap__title" style={{"marginTop":"10px"}}>Serving Gujarat since 2013</div><p className="cap__body">Over eight years, we've built software for manufacturers, traders, healthcare providers, retailers, and startups across Gujarat — institutional knowledge that makes us faster and more accurate on every project.</p></div>
          </div>
        </section>

        <section id="s-about" className="section reveal">
          <p className="eyebrow">// local-context.md</p>
          <h2 className="title mono">A web development company in Gujarat that builds like a partner</h2>
          <p style={{"fontSize":"16px","color":"var(--text-2)","lineHeight":"1.65","maxWidth":"860px","marginTop":"18px"}}>If you're searching for a web development company in Gujarat that treats your project like more than a ticket, Digital Web Weaver is headquartered right here in Vadodara. We're a genuinely local team — not a distant agency reselling your brief to someone else — building websites, custom software, and apps for businesses across the state. Day-to-day we collaborate remotely over video calls and WhatsApp; for larger projects we travel to your site for the kickoff and key milestones. Whether you're in Ahmedabad, Surat, or Rajkot, you get senior engineers who share your timezone and speak Gujarati, Hindi, and English.</p>
          <div className="grid grid-2" style={{"marginTop":"22px"}}>
            <div className="cap"><div className="cap__title">Full-stack delivery, not just pretty pages</div><p className="cap__body">Most Gujarat businesses don't need a brochure site — they need software that runs the business. Our web development work spans marketing sites, complex custom web apps, and online stores wired for Razorpay, GST, and WhatsApp. If your operations still live in spreadsheets, our CRM and ERP systems replace the manual overhead — with one team owning design, build, and launch, so nothing falls through the cracks between vendors.</p></div>
            <div className="cap"><div className="cap__title">Rooted in Gujarat, ready across the state</div><p className="cap__body">We've built software for manufacturers, textile traders, healthcare providers, and startups from Ahmedabad to Surat and Rajkot, so we understand the industries, the pace of decisions, and the value of trust in a business relationship — knowledge that makes every project faster and more accurate. See the kind of work we ship in our portfolio, or tell us about your project for a free consultation and a written quote within 24 hours.</p></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// web-design-gujarat.faq.md</p>
          <h2 className="title mono">Questions from Gujarat businesses</h2>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Do you serve clients across all of Gujarat or just Vadodara?<span className="sign">[+]</span></button><div className="faq__a"><p>We serve clients across all of Gujarat — Ahmedabad, Surat, Rajkot, Gandhinagar, Bharuch, Anand, Junagadh, Jamnagar, and smaller cities. Day-to-day communication is remote (video calls, WhatsApp, email). For larger projects, we travel to client sites for kickoff meetings and key milestones.</p></div></div>
            <div className="faq__item"><button className="faq__q">What industries in Gujarat do you typically work with?<span className="sign">[+]</span></button><div className="faq__a"><p>Our Gujarat client base spans: manufacturing and engineering goods (Rajkot, Vadodara), textiles and diamonds (Surat), pharmaceutical and chemicals (Vadodara, Ankleshwar), IT and fintech (Ahmedabad, GIFT City), agriculture and food processing (Anand, Junagadh), retail and trading (state-wide), and healthcare. If you're a Gujarat business, we've likely worked with a similar company.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you build software that integrates with Tally, Zoho, or other tools we already use?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. We integrate with Tally ERP, Zoho CRM/Books, IndiaMART, Flipkart Seller, Amazon Seller, Shiprocket, and most other tools that provide an API. If you're on a legacy system, we can often extract and sync data without disrupting your existing workflow.</p></div></div>
            <div className="faq__item"><button className="faq__q">What is your typical project cost and timeline for a Gujarat SME?<span className="sign">[+]</span></button><div className="faq__a"><p>A professional business website costs from ₹30,000–₹80,000 and takes 3–5 weeks. A custom web application or B2B portal costs from ₹1L–₹3L and takes 8–14 weeks. A full ERP system costs from ₹2.5L–₹10L depending on scope and takes 3–6 months. We'll give you a detailed, itemised quote after a free discovery call.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you offer post-launch support and maintenance for Gujarat clients?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. We offer monthly maintenance plans covering bug fixes, security updates, performance monitoring, and minor content changes. For more active products, we offer ongoing development retainers where you get dedicated engineering hours each month. We don't disappear after launch.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <Link className="svc" href="/web-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Web development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Full-stack web development services for Gujarat businesses.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <a className="svc" href="https://digitalwebweaver.com/website-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Website development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Professional business websites built fast and affordably.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></a>
            <Link className="svc" href="/custom-software-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Custom software development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Bespoke software tailored to your unique business processes.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/web-design-vadodara/"><div className="svc__title" style={{"fontSize":"16px"}}>Web design Vadodara</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Creative web design from Gujarat's leading digital agency.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --gujarat-project<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Let's build something great for your Gujarat business</h2>
          <p className="cta__lead">Free technical consultation. Fixed price quote within 48 hours. Senior engineers on every project.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Book a free call</Link>
            <Link className="btn btn--ghost" href="/portfolio/">See our portfolio</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free consultation</span><span><span className="g">●</span> Gujarati-speaking</span><span><span className="g">●</span> Based in Gujarat</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">web-design-gujarat.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
