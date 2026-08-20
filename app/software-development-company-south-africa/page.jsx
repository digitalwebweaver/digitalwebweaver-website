import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Software Development Company South Africa | Offshore Teams — Digital Web Weaver" },
  description: "An offshore software development partner for South African businesses — bespoke web apps, e-commerce, and dedicated teams from senior engineers, with near-real-time IST/SAST overlap.",
  alternates: { canonical: "/software-development-company-south-africa/" },
  openGraph: { title: "Software Development Company South Africa | Offshore Teams — Digital Web Weaver", description: "An offshore software development partner for South African businesses — bespoke web apps, e-commerce, and dedicated teams from senior engineers, with near-real-time IST/SAST overlap.", url: "/software-development-company-south-africa/", type: "website" }
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
      <span className="activitybar__geo" title="India · South Africa">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> software-dev-sa.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> services.ts</button>
        <button className="tab" data-scroll="s-about" data-target="s-about"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> offshore.md</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// software-dev-sa.ts · offshore partner · IST/SAST overlap</p>
            <span className="badge">🇿🇦 SOFTWARE DEVELOPMENT · SOUTH AFRICA</span>
            <h1 className="hero__h1">Software development company for <span className="pink">South African</span> businesses</h1>
            <p className="hero__lead">An experienced offshore development partner for South African companies — bespoke web applications, custom software, e-commerce platforms, and dedicated development teams, delivered by senior engineers with near-real-time overlap (IST/SAST) at a fraction of local agency rates.</p>
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
                <span className="trust__chip">🇿🇦 Local to you</span>
                <span className="trust__chip">SAST/IST · 3.5h apart</span>
                <span className="trust__chip">ZAR pricing</span>
                <span className="trust__chip">POPIA-aligned</span>
              </div>
            </div>
          </div>
          <div className="formcard" id="enquiry">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">enquiry.form</span><span className="mut">— south africa</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">PROJECT INQUIRY</p>
              <p className="form__title">Tell us about your project</p>
              <p className="form__lead">Free consultation. SAST/IST overlap — just 3.5 hours apart. Response within 24 hours.</p>
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
              <div className="s0">$ dww enquiry --south-africa --submit</div>
              <div className="s1">✓ request received<br />✓ routed to a senior engineer<br />✓ estimate en route</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll reply within 24 hours.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>200+</div><div className="lbl">PROJECTS_DELIVERED</div><div className="sub">▲ for SA &amp; global clients</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>8yr</div><div className="lbl">IN_BUSINESS</div><div className="sub">▲ senior engineers only</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>50-70%</div><div className="lbl">COST_SAVINGS</div><div className="sub">▲ vs local agency rates</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>3.5h</div><div className="lbl">TIMEZONE_GAP</div><div className="sub">▲ IST vs SAST overlap</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// bespoke software, at a fraction of local agency rates</span></p>
          <h2 className="title mono">What we build</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Bespoke software development</div><p className="svc__body">Custom-built software designed around your organisation's exact processes — internal tools, booking systems, management platforms, and workflow automation for South African SMEs and enterprises.</p><div className="svc__foot"><span>custom.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Dedicated development teams</div><p className="svc__body">Hire dedicated developers who work as an extension of your in-house team, with daily standups during South African working hours. Scale up or down without the overhead of permanent hires.</p><div className="svc__foot"><span>team.tsx</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">E-commerce development</div><p className="svc__body">Online stores and marketplaces built for South African retailers — Shopify, WooCommerce, or fully custom platforms with PayFast/Yoco/Stripe payments and ZAR pricing.</p><div className="svc__foot"><span>shop.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">FinTech &amp; SaaS development</div><p className="svc__body">From idea to launch — we help South African founders and startups build and ship FinTech platforms, SaaS products, and MVPs quickly, with a clear roadmap to scale once you've found product-market fit.</p><div className="svc__foot"><span>fintech.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Web &amp; mobile applications</div><p className="svc__body">Professional, mobile-first websites and cross-platform mobile apps for South African businesses — built for performance, accessibility, and search visibility on Google.co.za.</p><div className="svc__foot"><span>app.tsx</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">AI &amp; automation solutions</div><p className="svc__body">Practical AI integrations for South African businesses — chatbots, document processing, workflow automation, and AI-powered tools that reduce manual work and operating costs.</p><div className="svc__foot"><span>ai.py</span></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// why Digital Web Weaver</p>
          <h2 className="title mono">A reliable offshore development partner for South African businesses</h2>
          <div className="grid grid-4 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>01 · SAVINGS</div><div className="cap__title" style={{"marginTop":"10px"}}>Significant cost savings</div><p className="cap__body">Get the same calibre of engineering as a local agency at a fraction of the cost. Most South African clients save 50-70% on development costs without compromising on quality or communication.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>02 · OVERLAP</div><div className="cap__title" style={{"marginTop":"10px"}}>Near-real-time overlap</div><p className="cap__body">South Africa (SAST) is only 3.5 hours behind India (IST), so our team works hours that overlap with your business day — live calls, daily updates, and quick turnarounds, not a wait until tomorrow for every reply.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>03 · ENGLISH</div><div className="cap__title" style={{"marginTop":"10px"}}>Fluent English communication</div><p className="cap__body">All client communication is in clear, professional English. Detailed specifications, regular video calls, and written documentation mean nothing gets lost in translation.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>04 · SENIOR</div><div className="cap__title" style={{"marginTop":"10px"}}>Senior engineers, fixed pricing</div><p className="cap__body">No junior developers learning on your project. Every engagement is scoped and delivered by engineers with 5+ years of experience, with fixed-price quotes agreed upfront.</p></div>
          </div>
        </section>

        <section id="s-about" className="section reveal">
          <p className="eyebrow">// offshore-partnership.md · software development · south africa</p>
          <h2 className="title mono">A software development company South African businesses can rely on</h2>
          <p style={{"fontSize":"16px","color":"var(--text-2)","lineHeight":"1.65","maxWidth":"860px","marginTop":"18px"}}>Looking for a software development company in South Africa that delivers senior-level engineering without the local agency price tag? Digital Web Weaver is an India-based studio that partners with South African businesses remotely — we do not run a Johannesburg or Cape Town office, and we are upfront about that. What you get instead is an offshore team that works in near-real-time with your day: India sits about 3.5 hours ahead of SAST, so most of your afternoon overlaps with ours. This page is for founders, product owners, and operations leads across South Africa who want custom software development built by people who actually pick up the phone.</p>
          <div className="grid grid-2" style={{"marginTop":"22px"}}>
            <div className="cap"><div className="cap__title">How the remote partnership works</div><p className="cap__body">Every conversation happens in clear, professional English, over video calls and shared project tools rather than across a boardroom table. You can engage us for a fixed-scope build or hire dedicated developers who slot into your existing team and join standups during South African working hours. Whether you need a web application to retire a tangle of spreadsheets, an internal tool, or a customer-facing portal, the engineers who scope your project are the ones who write the code — no quiet handoff to juniors once the contract is signed.</p></div>
            <div className="cap"><div className="cap__title">Built for the South African market</div><p className="cap__body">We build with local realities in mind — e-commerce platforms wired to PayFast, Yoco, and Ozow with ZAR pricing, along with SaaS products and FinTech MVPs designed to scale once you have found product-market fit, all aligned to POPIA data-protection practices. Most South African clients save 50–70% against local agency rates while working with engineers who have five or more years behind them.</p></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// software-dev-sa.faq.md</p>
          <h2 className="title mono">Questions from South African clients</h2>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Do you work with South African businesses remotely?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. We work with clients across Johannesburg, Cape Town, Durban, and the wider South Africa entirely remotely, using video calls, project management tools, and regular progress updates. Many of our long-term South African clients have never needed an in-person meeting.</p></div></div>
            <div className="faq__item"><button className="faq__q">How big is the time difference between India and South Africa?<span className="sign">[+]</span></button><div className="faq__a"><p>Only 3.5 hours — South Africa (SAST) is behind India (IST). This means our working day overlaps with yours for most of the afternoon, so you get live calls, daily standups, and same-day responses rather than waiting until the next day.</p></div></div>
            <div className="faq__item"><button className="faq__q">How much cheaper is offshore development compared to a South African agency?<span className="sign">[+]</span></button><div className="faq__a"><p>Typically 50-70% lower than equivalent South African agency rates, while working with senior engineers (5+ years experience). This is because of lower operating costs in India, not lower quality — many of our South African clients have previously worked with local agencies and switched for both cost and responsiveness.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you build e-commerce platforms with South African payment gateways?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. We build e-commerce platforms and internal tools with ZAR pricing and South African payment gateways such as PayFast, Yoco, and Ozow, alongside Stripe for international cards. We can also integrate with local accounting tools.</p></div></div>
            <div className="faq__item"><button className="faq__q">Are you familiar with POPIA and South African data requirements?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. We design systems with data protection best practices aligned to POPIA — including consent management, data minimisation, and secure storage — and can work with your local legal advisors on compliance specifics.</p></div></div>
            <div className="faq__item"><button className="faq__q">What does a project typically cost for a South African business?<span className="sign">[+]</span></button><div className="faq__a"><p>A professional business website starts from R9,000. A custom web application or SaaS MVP starts from R35,000. A dedicated developer starts from R22,000/month. We'll provide an exact fixed-price quote after a free discovery call.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <Link className="svc" href="/hire-dedicated-resource/"><div className="svc__title" style={{"fontSize":"16px"}}>Hire dedicated developers</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Hire dedicated developers who work to your schedule and requirements.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/web-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Web development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Full-stack web development for businesses of every size.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/saas-development/"><div className="svc__title" style={{"fontSize":"16px"}}>SaaS development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>From MVP to scale — SaaS product development for startups and founders.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/ecommerce-development/"><div className="svc__title" style={{"fontSize":"16px"}}>E-commerce development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Online stores and marketplaces with ZAR pricing and local payment gateways.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --south-africa-project<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to build with a development partner South African businesses trust?</h2>
          <p className="cta__lead">Free technical consultation. Fixed-price quote within 48 hours. SAST/IST overlap — just 3.5 hours apart.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Book a free call</Link>
            <Link className="btn btn--ghost" href="/portfolio/">View portfolio</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free consultation</span><span><span className="g">●</span> SAST/IST overlap</span><span><span className="g">●</span> Fixed pricing</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">software-dev-sa.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
