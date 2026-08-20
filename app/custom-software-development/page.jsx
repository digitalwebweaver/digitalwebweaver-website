import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Custom Software Development Company India | ERP & CRM — Digital Web Weaver" },
  description: "Bespoke ERP, CRM, internal tools, and client portals built around your exact workflow — not a packaged product you bend your team around. Fixed price. 200+ systems built.",
  alternates: { canonical: "/custom-software-development/" },
  openGraph: { title: "Custom Software Development Company India | ERP & CRM — Digital Web Weaver", description: "Bespoke ERP, CRM, internal tools, and client portals built around your exact workflow — not a packaged product you bend your team around. Fixed price. 200+ systems built.", url: "/custom-software-development/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-build" data-target="s-build" title="Services">⚙</button>
      <button className="activitybar__btn" data-scroll="s-why" data-target="s-why" title="Why custom">❮❯</button>
      <button className="activitybar__btn" data-scroll="s-process" data-target="s-process" title="Process">❯</button>
      <button className="activitybar__btn" data-scroll="s-diff" data-target="s-diff" title="Why us">i</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> custom-software.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> services.ts</button>
        <button className="tab" data-scroll="s-process" data-target="s-process"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> process.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// custom-software.ts · Laravel · React · PostgreSQL</p>
            <span className="badge">CUSTOM SOFTWARE</span>
            <h1 className="hero__h1">Bespoke software built around <span className="pink">your</span> <span className="teal">business</span></h1>
            <p className="hero__lead">Off-the-shelf software forces your business into someone else's workflow. We build custom software that fits yours — from ERP systems and internal tools to client portals and full SaaS products.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Book a free scoping call</a>
              <a className="btn btn--ghost" href="#s-build" data-scroll="s-build">$ view --systems</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>200+</b><span>custom systems built</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>Fixed</b><span>price guaranteed</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>150+</b><span>clients trusted</span></div>
            </div>
          </div>
          <div className="formcard" id="estimate">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">scope.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE SCOPING CALL</p>
              <p className="form__title">Describe your custom software need</p>
              <p className="form__lead">Free scoping call. Fixed-price estimate within 48 hours.</p>
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
              <button className="form__submit" type="submit">Start the conversation ↗</button>
              <p className="form__micro">No commitment · 24-hour response</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww scope --submit</div>
              <div className="s1">✓ request received<br />✓ routed to a senior engineer<br />✓ fixed-price estimate en route</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll reply within 24 hours.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>200+</div><div className="lbl">SYSTEMS_BUILT</div><div className="sub">▲ ERP · CRM · portals · HRMS</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>Fixed</div><div className="lbl">PRICE</div><div className="sub">▲ we absorb the overrun</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>48h</div><div className="lbl">ESTIMATE</div><div className="sub">▲ itemised · fixed-price</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// custom software for every layer of your business</span></p>
          <h2 className="title mono">What we build</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Custom ERP systems</div><p className="svc__body">Purpose-built enterprise resource planning software for your specific operations — inventory, purchasing, production, finance, and HR — all in one system you actually own.</p><div className="svc__tags"><span className="tag">Laravel</span><span className="tag">PostgreSQL</span><span className="tag">Multi-module</span></div><div className="svc__foot"><span>erp.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">CRM &amp; sales platforms</div><p className="svc__body">Systems built around your sales process — lead tracking, pipeline management, quotation, follow-up automation, and reporting.</p><div className="svc__tags"><span className="tag">Custom CRM</span><span className="tag">Email automation</span><span className="tag">Reporting</span></div><div className="svc__foot"><span>crm.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Internal tools &amp; admin dashboards</div><p className="svc__body">Operations dashboards and back-office platforms that replace spreadsheets and email threads — with proper permissions, audit logs, and data integrity.</p><div className="svc__tags"><span className="tag">React</span><span className="tag">Node.js</span><span className="tag">RBAC</span></div><div className="svc__foot"><span>admin.tsx</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Client &amp; partner portals</div><p className="svc__body">Branded portals where your clients, partners, or dealers log in, view their data, place orders, track progress, and raise support requests.</p><div className="svc__tags"><span className="tag">Secure login</span><span className="tag">Real-time data</span><span className="tag">Notifications</span></div><div className="svc__foot"><span>portal.tsx</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Workflow &amp; process automation</div><p className="svc__body">Software that automates your manual processes — approval workflows, document generation, status notifications, data sync, and scheduled reporting.</p><div className="svc__tags"><span className="tag">BPMN</span><span className="tag">API integration</span><span className="tag">Webhooks</span></div><div className="svc__foot"><span>flow.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Legacy system replacement</div><p className="svc__body">Modern replacements for ageing software — Access databases, Excel workflows, old PHP systems, or unsupported desktop apps — migrated with your data intact.</p><div className="svc__tags"><span className="tag">Data migration</span><span className="tag">Zero-downtime</span><span className="tag">Training</span></div><div className="svc__foot"><span>migrate.sh</span></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// why custom software is often the right decision</p>
          <h2 className="title mono">Built as an asset, not a subscription</h2>
          <div className="grid grid-3 stagger">
            <div className="cap"><div className="cap__title">You own it completely</div><p className="cap__body">Custom software is an asset, not a subscription. No per-seat fees, no vendor lock-in, no feature requests to a roadmap you can't influence. The code belongs to you.</p></div>
            <div className="cap"><div className="cap__title">Built for your exact workflow</div><p className="cap__body">Off-the-shelf tools are built for the average company. Your company isn't average — custom software is built around how your team actually works.</p></div>
            <div className="cap"><div className="cap__title">Grows as you grow</div><p className="cap__body">We architect for scale from day one. Add modules, users, integrations, and features without switching systems — your software evolves with your business.</p></div>
            <div className="cap"><div className="cap__title">Integrates with everything</div><p className="cap__body">Custom software connects to any tool you already use — Tally, Zoho, WhatsApp, payment gateways, logistics APIs, GST portals — building a single source of truth.</p></div>
            <div className="cap"><div className="cap__title">Security you control</div><p className="cap__body">Your data stays on your infrastructure. No third-party SaaS storing your customer data, business data, or trade secrets on servers you don't control.</p></div>
            <div className="cap"><div className="cap__title">Total cost of ownership</div><p className="cap__body">At scale, custom software almost always costs less per year than SaaS subscriptions. A ₹5L custom system often replaces ₹1.5L/year in SaaS fees — payback in under 4 years.</p></div>
          </div>
        </section>

        <section id="s-process" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>customProcess</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">Our custom software development process</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Discovery</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Architecture</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Development</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Testing &amp; launch</span></button>
              <button className="pipe" data-num="05"><span className="pipe__dot">05</span><span className="pipe__label">Ongoing support</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 05 · ◷ requirements</div><div className="pipe-detail__title">Discovery &amp; requirements</div><p className="pipe-detail__body">We map your business processes, interview stakeholders, document user roles, and define the exact scope — including edge cases and exceptions that off-the-shelf tools miss.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Stakeholder interviews &amp; process maps</span></li><li><span className="ok">✓</span><span>User roles documented</span></li><li><span className="ok">✓</span><span>Edge cases scoped, not skipped</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww discover --custom</div><div className="t2">✓ processes mapped  ✓ scope defined  ✓ estimate sent</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 05 · ◷ blueprint</div><div className="pipe-detail__title">Architecture &amp; design</div><p className="pipe-detail__body">We design the data model, system architecture, and user experience before writing a line of code. You see and approve the blueprint — avoiding expensive rework later.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Data model &amp; system architecture</span></li><li><span className="ok">✓</span><span>UX signed off before code</span></li><li><span className="ok">✓</span><span>Blueprint approved with you</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww design --architecture</div><div className="t2">✓ data model set  ✓ blueprint approved  ✓ no rework risk</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 05 · ◷ sprints</div><div className="pipe-detail__title">Iterative development</div><p className="pipe-detail__body">We build in 2-week sprints with working software at each milestone. You review, test, and provide feedback on real functionality — not mockups.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>2-week sprint cadence</span></li><li><span className="ok">✓</span><span>Working software each milestone</span></li><li><span className="ok">✓</span><span>Feedback on real functionality</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww ship --sprint</div><div className="t2">✓ milestone shipped  ✓ demo reviewed  ✓ feedback logged</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 05 · ◷ go-live</div><div className="pipe-detail__title">Testing &amp; launch</div><p className="pipe-detail__body">Full QA including edge cases, load testing, and user acceptance testing. We deploy with your team, train users, and stay available during go-live.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Edge case &amp; load testing</span></li><li><span className="ok">✓</span><span>User acceptance testing</span></li><li><span className="ok">✓</span><span>Team training through go-live</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww launch --uat</div><div className="t2">✓ QA passed  ✓ UAT signed off  ✓ live with your team</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="4" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 05 / 05 · ◷ retainer or ad-hoc</div><div className="pipe-detail__title">Ongoing support</div><p className="pipe-detail__body">Post-launch maintenance, bug fixes, performance monitoring, and feature additions on a monthly retainer — or ad-hoc when you need us.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Bug fixes &amp; performance monitoring</span></li><li><span className="ok">✓</span><span>Feature additions on retainer</span></li><li><span className="ok">✓</span><span>Ad-hoc support when you need it</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww support --retainer</div><div className="t2">✓ monitoring on  ✓ retainer active  ✓ team on standby</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">WHAT_YOU_GET</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Figma design source files</span></div><div><span className="plus">+</span><span>Clean, documented codebase</span></div><div><span className="plus">+</span><span>CI/CD pipeline</span></div><div><span className="plus">+</span><span>SEO &amp; analytics setup</span></div><div><span className="plus">+</span><span>Performance report</span></div></div>
          </div>
        </section>

        <section id="s-diff" className="section reveal">
          <p className="eyebrow">// senior custom software engineers, not generalists</p>
          <h2 className="title mono">Why Digital Web Weaver</h2>
          <div className="grid grid-4 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🏗️ 200+</div><div className="cap__title" style={{"marginTop":"10px"}}>200+ systems built</div><p className="cap__body">ERP, CRM, HRMS, portals, trading platforms, and healthcare records across manufacturing, trading, healthcare, and fintech.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>💰 FIXED</div><div className="cap__title" style={{"marginTop":"10px"}}>Fixed-price contracts</div><p className="cap__body">A fixed number, not an estimate range. If we underestimate, we absorb it — you never get billed for "extra time".</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🎓 SENIOR</div><div className="cap__title" style={{"marginTop":"10px"}}>No junior developers</div><p className="cap__body">Every engineer has 5+ years building production systems — fewer mistakes, maintainable code, on-time delivery.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🔑 YOURS</div><div className="cap__title" style={{"marginTop":"10px"}}>You own everything</div><p className="cap__body">Source code, database, IP, and documentation — all yours on day one, no licensing fees, no vendor dependency.</p></div>
          </div>
          <div className="panel-note" style={{"background":"var(--panel)"}}><p style={{"fontSize":"16px","color":"var(--text-2)","lineHeight":"1.65","maxWidth":"960px"}}>As a custom software development company India businesses turn to when generic products stop fitting, we build systems for teams that have outgrown spreadsheets, disconnected SaaS subscriptions, and rigid off-the-shelf ERP and CRM tools. What makes our approach different is scope discipline: we map your real processes, including the edge cases vendors ignore, then commit to a fixed price before a line of code is written. We work from Vadodara and deliver to clients across India, the UK, South Africa, and Ivory Coast — Laravel and PostgreSQL for data-heavy back ends, React and Node.js for the interface, deployed to infrastructure you own. If you need to validate an idea first, we can ship a lean MVP before committing to a full build; if you're replacing an ageing system, we migrate your data with zero downtime and train your team through go-live.</p></div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// custom-software.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">How much does custom software development cost in India?<span className="sign">[+]</span></button><div className="faq__a"><p>Costs depend heavily on scope. A simple internal tool or admin panel starts from ₹80,000–₹1.5L. A mid-complexity system (custom CRM, dealer portal, inventory system) typically costs ₹2L–₹8L. A full ERP or multi-module platform costs ₹8L–₹25L+. We provide a detailed, itemised fixed-price quote after a free scoping call.</p></div></div>
            <div className="faq__item"><button className="faq__q">How long does it take to build custom software?<span className="sign">[+]</span></button><div className="faq__a"><p>A simple tool or dashboard takes 6–10 weeks. A medium-complexity system takes 3–5 months. A full ERP or complex platform takes 6–12 months. Timeline depends on scope, integrations, and how quickly you can provide feedback during development.</p></div></div>
            <div className="faq__item"><button className="faq__q">Should we build custom or buy off-the-shelf software?<span className="sign">[+]</span></button><div className="faq__a"><p>Buy off-the-shelf if a product fits your process well (e.g. standard accounting — use Tally/Zoho). Build custom if your process is non-standard, you need deep integration with other systems, you'll exceed SaaS per-seat costs within 3 years, or your competitive advantage depends on a workflow different from competitors using the same tool.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you integrate custom software with existing tools like Tally, Zoho, or WhatsApp?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. We integrate with Tally ERP (via API or database), Zoho CRM/Books, WhatsApp Business API, payment gateways (Razorpay, PayU), GST portals, logistics APIs (Shiprocket, Delhivery), and most tools that expose an API. If a tool doesn't have a standard API, we can often build a connector.</p></div></div>
            <div className="faq__item"><button className="faq__q">Who owns the source code and data?<span className="sign">[+]</span></button><div className="faq__a"><p>You do — completely. All source code, database schemas, documentation, and deployment scripts are handed over at the end of the project. We sign an IP assignment agreement before we start. No ongoing licensing fees, no vendor lock-in.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <Link className="svc" href="/crm-erp-systems/"><div className="svc__title" style={{"fontSize":"16px"}}>CRM &amp; ERP systems</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Custom CRM and ERP systems for sales, inventory, HR, and finance.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <a className="svc" href="https://digitalwebweaver.com/web-application-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Web application development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Complex web portals, dashboards, and multi-user business applications.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></a>
            <Link className="svc" href="/saas-development/"><div className="svc__title" style={{"fontSize":"16px"}}>SaaS development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Turn your custom software into a scalable, multi-tenant SaaS product.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/laravel-developer/"><div className="svc__title" style={{"fontSize":"16px"}}>Hire a Laravel developer</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Senior Laravel PHP engineers for custom backend development.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./scope --custom-project<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Let's scope your project</h2>
          <p className="cta__lead">Tell us what your business needs — we'll build it. Free scoping call, fixed-price estimate within 48 hours.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Book a free scoping call</Link>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Fixed price</span><span><span className="g">●</span> You own the code</span><span><span className="g">●</span> Senior engineers only</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">custom-software.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
