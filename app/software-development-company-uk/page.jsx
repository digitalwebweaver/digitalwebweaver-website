import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Software Development Company UK | Offshore Dev Teams — Digital Web Weaver" },
  description: "An offshore software development partner for UK businesses — bespoke web apps, e-commerce, and dedicated development teams from senior engineers, at 50-70% less than UK agency rates.",
  alternates: { canonical: "/software-development-company-uk/" },
  openGraph: { title: "Software Development Company UK | Offshore Dev Teams — Digital Web Weaver", description: "An offshore software development partner for UK businesses — bespoke web apps, e-commerce, and dedicated development teams from senior engineers, at 50-70% less than UK agency rates.", url: "/software-development-company-uk/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-build" data-target="s-build" title="What we build">⚙</button>
      <button className="activitybar__btn" data-scroll="s-why" data-target="s-why" title="Why Digital Web Weaver">✓</button>
      <button className="activitybar__btn" data-scroll="s-about" data-target="s-about" title="Offshore partnership">¶</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · United Kingdom">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> software-dev-uk.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> services.ts</button>
        <button className="tab" data-scroll="s-about" data-target="s-about"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> offshore.md</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// software-dev-uk.ts · offshore partner · GMT/BST overlap</p>
            <span className="badge">🇬🇧 SOFTWARE DEVELOPMENT · UK</span>
            <h1 className="hero__h1">Software development company for <span className="pink">UK</span> businesses</h1>
            <p className="hero__lead">An experienced offshore development partner for UK companies — bespoke web applications, custom software, e-commerce platforms, and dedicated development teams, delivered by senior engineers at significantly lower cost than UK-based agencies.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Send enquiry</a>
              <a className="btn btn--ghost" href="#s-build" data-scroll="s-build">$ view --services</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>200+</b><span>projects delivered</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>Sr</b><span>senior engineers only</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>8yr</b><span>in business</span></div>
            </div>
            <div className="trust">
              <p className="trust__label">// coverage</p>
              <div className="trust__row">
                <span className="trust__chip">🇬🇧 Local to you</span>
                <span className="trust__chip">UK hours overlap</span>
                <span className="trust__chip">GBP pricing</span>
                <span className="trust__chip">NDA on request</span>
              </div>
            </div>
          </div>
          <div className="formcard" id="enquiry">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">enquiry.form</span><span className="mut">— uk</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">PROJECT INQUIRY</p>
              <p className="form__title">Tell us about your project</p>
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
              <div className="s0">$ dww enquiry --uk --submit</div>
              <div className="s1">✓ request received<br />✓ routed to a senior engineer<br />✓ estimate en route</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll reply within 24 hours.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>200+</div><div className="lbl">PROJECTS_DELIVERED</div><div className="sub">▲ for UK &amp; global clients</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>8yr</div><div className="lbl">IN_BUSINESS</div><div className="sub">▲ senior engineers only</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>50-70%</div><div className="lbl">COST_SAVINGS</div><div className="sub">▲ vs UK agency rates</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>GMT</div><div className="lbl">HOURS_OVERLAP</div><div className="sub">▲ GMT/BST working hours</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// bespoke software, at a fraction of local agency rates</span></p>
          <h2 className="title mono">What we build</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Bespoke software development</div><p className="svc__body">Custom-built software designed around your organisation's exact processes — internal tools, booking systems, management platforms, and workflow automation for UK SMEs and enterprises.</p><div className="svc__foot"><span>custom.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Dedicated development teams</div><p className="svc__body">Hire dedicated developers who work as an extension of your in-house team, with daily standups during UK working hours. Scale up or down without the overhead of permanent hires.</p><div className="svc__foot"><span>team.tsx</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">E-commerce development</div><p className="svc__body">Online stores and marketplaces built for UK retailers — Shopify, WooCommerce, or fully custom platforms with Stripe payments, VAT-compliant invoicing, and multi-currency support.</p><div className="svc__foot"><span>shop.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">SaaS &amp; MVP development</div><p className="svc__body">From idea to launch — we help UK founders and startups build and ship SaaS products and MVPs quickly, with a clear roadmap to scale once you've found product-market fit.</p><div className="svc__foot"><span>saas.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Web &amp; mobile applications</div><p className="svc__body">Professional, mobile-first websites and cross-platform mobile apps for UK businesses — built for performance, accessibility, and search visibility on Google.co.uk.</p><div className="svc__foot"><span>app.tsx</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">AI &amp; automation solutions</div><p className="svc__body">Practical AI integrations for UK businesses — chatbots, document processing, workflow automation, and AI-powered tools that reduce manual work and operating costs.</p><div className="svc__foot"><span>ai.py</span></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// why Digital Web Weaver</p>
          <h2 className="title mono">A reliable offshore development partner for UK businesses</h2>
          <div className="grid grid-4 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>01 · SAVINGS</div><div className="cap__title" style={{"marginTop":"10px"}}>Significant cost savings</div><p className="cap__body">Get the same calibre of engineering as a UK agency at a fraction of the cost. Most UK clients save 50-70% on development costs without compromising on quality or communication.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>02 · OVERLAP</div><div className="cap__title" style={{"marginTop":"10px"}}>Working hours overlap</div><p className="cap__body">Our team works hours that overlap with UK business hours (GMT/BST), so you get live calls, daily updates, and quick turnarounds — not a 12-hour wait for every reply.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>03 · ENGLISH</div><div className="cap__title" style={{"marginTop":"10px"}}>Fluent English communication</div><p className="cap__body">All client communication is in clear, professional English. Detailed specifications, regular video calls, and written documentation mean nothing gets lost in translation.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>04 · SENIOR</div><div className="cap__title" style={{"marginTop":"10px"}}>Senior engineers, fixed pricing</div><p className="cap__body">No junior developers learning on your project. Every engagement is scoped and delivered by engineers with 5+ years of experience, with fixed-price quotes agreed upfront.</p></div>
          </div>
        </section>

        <section id="s-about" className="section reveal">
          <p className="eyebrow">// offshore-partnership.md · software development · united kingdom</p>
          <h2 className="title mono">A software development partner built for UK businesses</h2>
          <p style={{"fontSize":"16px","color":"var(--text-2)","lineHeight":"1.65","maxWidth":"860px","marginTop":"18px"}}>If you are searching for a software development company that serves the UK without London agency price tags, here is the honest version: Digital Web Weaver is based in Vadodara, India — not the UK. We work as an offshore development partner for UK founders, agencies, and SMEs, and we are upfront about it because it is exactly why our clients choose us. Our working hours overlap comfortably with GMT and BST, our engineers are fluent English communicators, and we have shipped web applications, internal tools, and SaaS products for British companies who wanted senior talent at 50-70% less than a local studio charges.</p>
          <div className="grid grid-2" style={{"marginTop":"22px"}}>
            <div className="cap"><div className="cap__title">What an offshore partner should feel like</div><p className="cap__body">Distance only becomes a problem when communication is an afterthought. We run daily standups during UK hours, keep a live project board, and give you a single point of contact who actually knows your codebase — not a rotating support queue. Whether you need a custom web app for an internal process, a mobile app to sit alongside it, or dedicated developers who plug into your existing team, you get the same calibre of engineering you would expect from a UK agency, minus the overhead that inflates their day rates.</p></div>
            <div className="cap"><div className="cap__title">Built for how UK companies actually operate</div><p className="cap__body">We understand the practical details that matter here — VAT-compliant invoicing, GBP and multi-currency payments, Stripe and PayPal integration, and connections to tools like Xero and QuickBooks. That grounding runs through everything from e-commerce platforms for retailers to AI-powered automation that trims manual work out of your operations. NDAs and fixed-price contracts are standard, so you always know what you are committing to before a line of code is written.</p></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// software-dev-uk.faq.md</p>
          <h2 className="title mono">Questions from UK clients</h2>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Do you work with UK businesses remotely?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. We work with clients across London and the wider UK entirely remotely, using video calls, project management tools, and regular progress updates. Many of our long-term UK clients have never needed an in-person meeting.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can your team overlap with UK working hours?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. Our team can adjust working hours to overlap with GMT/BST for daily standups, calls, and urgent communication, so your project moves at the pace you expect.</p></div></div>
            <div className="faq__item"><button className="faq__q">How much cheaper is offshore development compared to a UK agency?<span className="sign">[+]</span></button><div className="faq__a"><p>Typically 50-70% lower than equivalent UK agency rates, while working with senior engineers (5+ years experience). This is because of lower operating costs in India, not lower quality — many of our UK clients have previously worked with local agencies and switched for both cost and responsiveness.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you build VAT-compliant e-commerce and invoicing for UK businesses?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. We build e-commerce platforms and internal tools with UK VAT handling, GBP pricing, Stripe/PayPal integration, and invoicing that meets UK requirements. We can also integrate with UK accounting tools such as Xero and QuickBooks.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you sign contracts and NDAs for UK clients?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. We're happy to sign NDAs before any discussion of your project, and provide a clear contract covering scope, timelines, payment milestones, and IP ownership before work begins.</p></div></div>
            <div className="faq__item"><button className="faq__q">What does a project typically cost for a UK business?<span className="sign">[+]</span></button><div className="faq__a"><p>A professional business website starts from £500. A custom web application or SaaS MVP starts from £2,000. A dedicated developer starts from £1,200/month. We'll provide an exact fixed-price quote after a free discovery call.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <Link className="svc" href="/hire-dedicated-resource/"><div className="svc__title" style={{"fontSize":"16px"}}>Hire dedicated developers</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Hire dedicated developers who work to your schedule and requirements.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/web-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Web development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Full-stack web development for businesses of every size.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/saas-development/"><div className="svc__title" style={{"fontSize":"16px"}}>SaaS development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>From MVP to scale — SaaS product development for startups and founders.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/ecommerce-development/"><div className="svc__title" style={{"fontSize":"16px"}}>E-commerce development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Online stores and marketplaces with VAT-ready invoicing and Stripe payments.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --uk-project<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to build with a development partner UK businesses trust?</h2>
          <p className="cta__lead">Free technical consultation. Fixed-price quote within 48 hours. UK working-hours overlap available.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Book a free call</Link>
            <Link className="btn btn--ghost" href="/portfolio/">View portfolio</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free consultation</span><span><span className="g">●</span> UK hours overlap</span><span><span className="g">●</span> Fixed pricing</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">software-dev-uk.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
