import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { softwareApplicationSchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "InsureDesk — Insurance Agency CRM Software | Digital Web Weaver" },
  description: "InsureDesk consolidates lead management, policy tracking, renewal reminders, claims follow-up, and client communication into one connected CRM. Live in 4–6 weeks.",
  alternates: { canonical: "/insuredesk/" },
  openGraph: { title: "InsureDesk — Insurance Agency CRM Software | Digital Web Weaver", description: "InsureDesk consolidates lead management, policy tracking, renewal reminders, claims follow-up, and client communication into one connected CRM. Live in 4–6 weeks.", url: "/insuredesk/", type: "website" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={softwareApplicationSchema({ name: "InsureDesk", description: "InsureDesk consolidates lead management, policy tracking, renewal reminders, claims follow-up, and client communication into one connected CRM. Live in 4–6 weeks.", href: "/insuredesk/" })} />
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-features" data-target="s-features" title="Features">⚙</button>
      <button className="activitybar__btn" data-scroll="s-how" data-target="s-how" title="How it works">❯</button>
      <button className="activitybar__btn" data-scroll="s-included" data-target="s-included" title="What's included">✓</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> insuredesk.ts</button>
        <button className="tab" data-scroll="s-features" data-target="s-features"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> features.ts</button>
        <button className="tab" data-scroll="s-how" data-target="s-how"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> how-it-works.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// insuredesk.ts · insurance agency CRM · India</p>
            <span className="badge">INSUREDESK</span>
            <h1 className="hero__h1">Stop losing renewals to a <span className="pink">missed reminder</span></h1>
            <p className="hero__lead">InsureDesk consolidates lead management, policy tracking, renewal reminders, claims follow-up, and client communication into one connected CRM — built for how Indian insurance agencies actually work.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book my demo</a>
              <a className="btn btn--ghost" href="#s-features" data-scroll="s-features">$ view --features</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>4–6 wks</b><span>to go live</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>1</b><span>unified view per client</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>150+</b><span>trusted clients</span></div>
            </div>
          </div>
          <div className="formcard" id="demo">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">demo.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE DEMO</p>
              <p className="form__title">See InsureDesk in action</p>
              <p className="form__lead">Book a 30-minute walkthrough — we'll map it to your agency and give you a launch timeline.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME *</label><input className="input" name="name" placeholder="Your name" required /></div>
                <div className="field"><label className="label">WORK EMAIL *</label><input className="input" name="email" type="email" placeholder="you@agency.com" required /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">AGENCY TYPE</label>
                <select className="select" name="type"><option>Independent agency / brokerage</option><option>Individual agent (POSP/IRDAI)</option><option>Motor &amp; general insurance</option><option>Health &amp; life insurance</option><option>Other</option></select>
                </div>
                <div className="field"><label className="label">AGENT COUNT</label>
                <select className="select" name="agents"><option>Just me</option><option>2–10 agents</option><option>11–50 agents</option><option>50+ agents</option></select>
                </div>
              </div>
              <button className="form__submit" type="submit">Book a free demo ↗</button>
              <p className="form__micro">No commitment · reply within 24 hours</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww demo --book insuredesk</div>
              <div className="s1">✓ request received<br />✓ routed to a product specialist<br />✓ demo slot being arranged</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll be in touch within 24 hours to schedule.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>4–6 wks</div><div className="lbl">TIME_TO_LAUNCH</div><div className="sub">▲ kickoff → live</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>↓</div><div className="lbl">LAPSED_POLICIES</div><div className="sub">▲ auto-reminders reduce lapses</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>1</div><div className="lbl">UNIFIED_VIEW</div><div className="sub">▲ per client, every policy</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
        </section>

        <section id="s-features" className="section reveal">
          <p className="eyebrow">const features = [ <span className="c">// what's inside InsureDesk</span></p>
          <h2 className="title mono">What's inside</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Lead management</div><p className="svc__body">Capture, qualify, and assign leads from multiple sources, with follow-up tracking through to conversion.</p><div className="svc__foot"><span>leads.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Policy tracking</div><p className="svc__body">Maintain a complete record of every client's policies — type, premium, term, and status — in one place.</p><div className="svc__foot"><span>policies.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Automated renewal reminders</div><p className="svc__body">SMS, WhatsApp, and email reminders go out automatically ahead of renewal dates — no more chasing spreadsheets.</p><div className="svc__foot"><span>renewals.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Claims follow-up</div><p className="svc__body">Track claim status from filing to settlement, with reminders so nothing sits waiting on someone's desk.</p><div className="svc__foot"><span>claims.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Commission tracking</div><p className="svc__body">Track commissions earned per policy and agent, with clear, exportable reporting.</p><div className="svc__foot"><span>commission.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Client portal &amp; document vault</div><p className="svc__body">Give clients a branded portal to view policies and download documents whenever they need them.</p><div className="svc__foot"><span>portal.tsx</span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// built for</p>
          <h2 className="title mono">Who InsureDesk is built for</h2>
          <div className="grid grid-4 stagger">
            <div className="cap"><div className="cap__title">Independent agencies &amp; brokerages</div><p className="cap__body">Run every agent, lead, and policy through one connected system instead of scattered spreadsheets.</p></div>
            <div className="cap"><div className="cap__title">Individual agents (POSP/IRDAI)</div><p className="cap__body">Manage your own book of clients and renewals without needing a back office.</p></div>
            <div className="cap"><div className="cap__title">Motor &amp; general insurance specialists</div><p className="cap__body">Track high renewal-volume policies with reminders that don't depend on memory.</p></div>
            <div className="cap"><div className="cap__title">Health &amp; life insurance teams</div><p className="cap__body">Follow long-term policies and claims with a single unified view per client.</p></div>
          </div>
        </section>

        <section id="s-how" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>launchInsureDesk</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">How it works</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Map process</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Configure</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Migrate data</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Train &amp; go live</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04</div><div className="pipe-detail__title">Map your current process</div><p className="pipe-detail__body">We walk through how leads, policies, and renewals move through your agency today — spreadsheets, notebooks, and all — so InsureDesk fits how you actually work.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Lead &amp; renewal process mapped</span></li><li><span className="ok">✓</span><span>Product lines &amp; agent structure captured</span></li><li><span className="ok">✓</span><span>Launch timeline confirmed</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww insuredesk --intake</div><div className="t2">✓ process mapped  ✓ product lines captured</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04</div><div className="pipe-detail__title">We configure InsureDesk for your agency</div><p className="pipe-detail__body">Policy types, renewal reminder templates, and commission structures are set up to match your agency's product mix.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Configurable policy types set up</span></li><li><span className="ok">✓</span><span>Renewal reminder templates configured</span></li><li><span className="ok">✓</span><span>Commission reporting configured</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww insuredesk --configure</div><div className="t2">✓ policy types set  ✓ reminders configured</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04</div><div className="pipe-detail__title">Migrate existing client &amp; policy data</div><p className="pipe-detail__body">Existing client records, active policies, and renewal dates are imported so nothing falls through the gap between systems.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Client &amp; policy records imported</span></li><li><span className="ok">✓</span><span>Renewal dates verified</span></li><li><span className="ok">✓</span><span>Data checked against source</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww insuredesk --migrate</div><div className="t2">✓ policies imported  ✓ renewal dates verified</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04</div><div className="pipe-detail__title">Train your team &amp; go live</div><p className="pipe-detail__body">Team training sessions cover the agency and agent dashboards, then InsureDesk goes live with 30 days of go-live support.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Team training sessions</span></li><li><span className="ok">✓</span><span>Live on your domain</span></li><li><span className="ok">✓</span><span>30 days of go-live support</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww insuredesk --launch</div><div className="t2">✓ live on your domain  ✓ team trained</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div id="s-included" className="panel-note">
            <div className="panel-note__lbl">WHATS_INCLUDED</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Agency &amp; agent CRM dashboard</span></div><div><span className="plus">+</span><span>Branded client portal</span></div><div><span className="plus">+</span><span>Renewal reminder templates</span></div><div><span className="plus">+</span><span>Commission reporting setup</span></div><div><span className="plus">+</span><span>Team training sessions</span></div><div><span className="plus">+</span><span>30 days of go-live support</span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// client words</p>
          <div className="grid grid-3">
            <div className="quote"><div className="stars">★★★★★</div><p>We were tracking renewals across three different spreadsheets and a notebook. Since switching, our lapse rate has dropped noticeably.</p><div className="quote__who"><div className="quote__avatar">PT</div><div><div className="quote__name">Pranav Thakkar</div><div className="quote__role">Principal Officer, Thakkar Insurance Brokers</div></div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// insuredesk.faq.md</p>
          <h2 className="title mono">Everything you're probably wondering</h2>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Do you support multiple product lines?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — InsureDesk supports configurable policy types for motor, health, and life insurance.</p></div></div>
            <div className="faq__item"><button className="faq__q">How do renewal reminders work?<span className="sign">[+]</span></button><div className="faq__a"><p>Reminders are automatically scheduled and sent via SMS, WhatsApp, or email ahead of each renewal date.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can multiple agents use the same system?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — with individual portfolios and commission tracking per agent.</p></div></div>
            <div className="faq__item"><button className="faq__q">What's the data migration process?<span className="sign">[+]</span></button><div className="faq__a"><p>Existing client records, active policies, and renewal dates are imported as part of onboarding.</p></div></div>
            <div className="faq__item"><button className="faq__q">What's the implementation timeline?<span className="sign">[+]</span></button><div className="faq__a"><p>Most agencies go live within 4–6 weeks, including configuration and training.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <Link className="svc" href="/chemsupply/"><div className="svc__title" style={{"fontSize":"16px"}}>ChemSupply</div><p className="svc__body" style={{"fontSize":"13.5px"}}>ERP for chemical suppliers — inventory, compliance, orders.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/telecare/"><div className="svc__title" style={{"fontSize":"16px"}}>TeleCare</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Telemedicine platform — video consultations, e-prescriptions.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/callmate-ai/"><div className="svc__title" style={{"fontSize":"16px"}}>CallMate AI</div><p className="svc__body" style={{"fontSize":"13.5px"}}>AI voice agent — inbound calls, lead qualification, bookings.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/products/"><div className="svc__title" style={{"fontSize":"16px"}}>All products</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Browse the full catalogue of ready-made products.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./insuredesk --book-demo<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to stop losing renewals?</h2>
          <p className="cta__lead">Book a 30-minute demo — we'll walk you through InsureDesk, map it to your agency, and give you a fixed launch timeline.</p>
          <div className="cta__btns">
            <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book my demo</a>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free demo</span><span><span className="g">●</span> Single unified client view</span><span><span className="g">●</span> 30 days go-live support</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">insuredesk.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
