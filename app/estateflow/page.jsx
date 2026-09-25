import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "EstateFlow — Real Estate CRM for Builders & Developers | Digital Web Weaver" },
  description: "EstateFlow runs the entire buyer journey for property developers — leads, site visits, negotiation, booking, collections and post-sales — with WhatsApp automation and RERA-aware compliance built in.",
  alternates: { canonical: "/estateflow/" },
  openGraph: { title: "EstateFlow — Real Estate CRM for Builders & Developers | Digital Web Weaver", description: "EstateFlow runs the entire buyer journey for property developers — leads, site visits, negotiation, booking, collections and post-sales — with WhatsApp automation and RERA-aware compliance built in.", url: "/estateflow/", type: "website" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={serviceSchema({ name: "EstateFlow", description: "EstateFlow runs the entire buyer journey for property developers — leads, site visits, negotiation, booking, collections and post-sales — with WhatsApp automation and RERA-aware compliance built in.", href: "/estateflow/" })} />
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-problem" data-target="s-problem" title="The problem">⚠</button>
      <button className="activitybar__btn" data-scroll="s-workflow" data-target="s-workflow" title="How it works">❯</button>
      <button className="activitybar__btn" data-scroll="s-ai" data-target="s-ai" title="WhatsApp & AI">◆</button>
      <button className="activitybar__btn" data-scroll="s-features" data-target="s-features" title="Features">⚙</button>
      <button className="activitybar__btn" data-scroll="s-pricing" data-target="s-pricing" title="Pricing">$</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> estateflow.ts</button>
        <button className="tab" data-scroll="s-workflow" data-target="s-workflow"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> workflow.ts</button>
        <button className="tab" data-scroll="s-pricing" data-target="s-pricing"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> pricing.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// estateflow.ts · real estate CRM · builders &amp; developers</p>
            <span className="badge">ESTATEFLOW</span>
            <h1 className="hero__h1">One CRM for every buyer, from enquiry to <span className="pink">possession</span></h1>
            <p className="hero__lead">EstateFlow is a CRM and sales pipeline built for Indian property developers — leads, site visits, negotiation, booking, collections and post-sales service in one system, with WhatsApp automation and RERA-aware compliance built in from day one.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book a demo ↗</a>
              <a className="btn btn--ghost" href="#s-workflow" data-scroll="s-workflow">$ see --how-it-works</a>
              <a className="btn btn--ghost teal" href="#s-features" data-scroll="s-features">$ explore --features</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>10-stage</b><span>pipeline, lead to possession</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>22</b><span>modules, pre-sales to post-sales</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>3</b><span>languages — Gujarati, Hindi, English</span></div>
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>Multi-entity</b><span>ready for multi-project builders</span></div>
            </div>
            <div className="trust">
              <div className="trust__label">CERTIFIED</div>
              <div className="trust__row"><span className="trust__chip">ISO 27001</span><span className="trust__chip">SOC 2 Type II</span><span className="trust__chip">GDPR aligned</span><span className="trust__chip">DPDP Act aligned</span></div>
            </div>
          </div>
          <div className="formcard" id="demo">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">demo.form</span><span className="mut">— free · 30 min</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE DEMO</p>
              <p className="form__title">See EstateFlow in action</p>
              <p className="form__lead">Book a 30-minute live demo — we'll map it to your sales pipeline and project structure.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME *</label><input className="input" name="name" placeholder="Your name" required /></div>
                <div className="field"><label className="label">WORK EMAIL *</label><input className="input" name="email" type="email" placeholder="you@developer.com" required /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">COMPANY / DEVELOPER NAME</label><input className="input" name="company" placeholder="Your company" /></div>
                <div className="field"><label className="label">ACTIVE PROJECTS</label>
                <select className="select" name="volume"><option>1 project</option><option>2–5 projects</option><option>5+ projects</option></select>
                </div>
              </div>
              <label className="form__consent"><input type="checkbox" name="consent" required /><span>I agree to Digital Web Weaver processing my details to respond to this enquiry, per the <a href="/privacy-policy/" target="_blank" rel="noopener">Privacy Policy</a>.</span></label>
              <button className="form__submit" type="submit">Book a demo ↗</button>
              <p className="form__micro">No commitment · Built for Indian builders</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww demo --book estateflow</div>
              <div className="s1">✓ request received<br />✓ routed to a product specialist<br />✓ demo slot being arranged</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll be in touch within 24 hours to schedule.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>10-stage</div><div className="lbl">PIPELINE</div><div className="sub">▲ lead → possession, gated</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>22</div><div className="lbl">MODULES</div><div className="sub">▲ pre-sales to post-sales</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>3</div><div className="lbl">LANGUAGES</div><div className="sub">▲ Gujarati · Hindi · English</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>RERA S.13</div><div className="lbl">COMPLIANT</div><div className="sub">▲ receipt cap enforced automatically</div></div>
        </section>

        <section id="s-problem" className="section reveal">
          <p className="eyebrow">// the problem — why developers lose buyers to process, not price</p>
          <h2 className="title mono">Five things quietly costing you buyers</h2>
          <p className="subtitle">Every one of these shows up as a lead that went cold, a promise nobody can find, or a dispute at possession — long before a director ever sees it in a report.</p>
          <div className="grid grid-3 stagger">
            <div className="cap" style={{"borderTop":"3px solid var(--red)"}}><div className="cap__title">Leads leak before the first call</div><p className="cap__body">Portal and ad leads wait hours or days in personal phones and spreadsheets; some never reach sales at all.</p></div>
            <div className="cap" style={{"borderTop":"3px solid var(--red)"}}><div className="cap__title">Follow-ups depend on memory</div><p className="cap__body">Executives forget the third and fourth follow-up. Warm buyers go quiet and sign with whoever calls back first.</p></div>
            <div className="cap" style={{"borderTop":"3px solid var(--red)"}}><div className="cap__title">Buyers repeat everything to new staff</div><p className="cap__body">Leave, resignations and stage handoffs break the conversation — buyers start over with every new face.</p></div>
            <div className="cap" style={{"borderTop":"3px solid var(--red)"}}><div className="cap__title">Verbal promises surface at possession</div><p className="cap__body">A discount or a freebie promised months ago by staff who've since left becomes a dispute nobody can settle.</p></div>
            <div className="cap" style={{"borderTop":"3px solid var(--red)"}}><div className="cap__title">Broker disputes over credit</div><p className="cap__body">Two channel partners, or a partner versus a portal lead, both claim the same buyer — with no evidence either way.</p></div>
          </div>
        </section>

        <section id="s-workflow" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>buyerJourney</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">Enquiry to possession, in one pipeline</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Capture &amp; qualify</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Visit &amp; negotiate</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Book &amp; collect</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Serve &amp; retain</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STAGE 01 / 04</div><div className="pipe-detail__title">Capture &amp; qualify</div><p className="pipe-detail__body">Every enquiry — from property portals, Meta/Google ads, the website, hoardings and walk-ins — lands in one place within seconds, is checked for duplicates, scored, and routed with a first-response SLA timer running.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Portal, ad &amp; website leads auto-captured</span></li><li><span className="ok">✓</span><span>Duplicate check across every project</span></li><li><span className="ok">✓</span><span>Auto-scored, routed and SLA-timed</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ estateflow lead --capture</div><div className="t2">✓ deduped  ✓ scored  ✓ routed  ✓ SLA timer started</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STAGE 02 / 04</div><div className="pipe-detail__title">Visit &amp; negotiate</div><p className="pipe-detail__body">Site visits are booked, reminded and OTP-verified, so visit counts are real, not guessed. Inventory holds stop two executives promising the same unit, and every discount request follows the approval matrix with a full paper trail.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>OTP-verified site visit check-in</span></li><li><span className="ok">✓</span><span>Live inventory grid with timed holds</span></li><li><span className="ok">✓</span><span>Discounts routed by approval limit</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ estateflow visit --checkin</div><div className="t2">✓ OTP verified  ✓ hold placed  ✓ cost sheet generated</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STAGE 03 / 04</div><div className="pipe-detail__title">Book &amp; collect</div><p className="pipe-detail__body">Booking, KYC and allotment are paperless and checklist-gated. Receipts are issued under the correct legal entity automatically, and construction-linked demand letters go out the moment a site milestone is marked complete.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>KYC-gated, checklist-complete booking</span></li><li><span className="ok">✓</span><span>Multi-entity receipts, RERA S.13 enforced</span></li><li><span className="ok">✓</span><span>Milestone-linked demand letters &amp; TDS tracking</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ estateflow booking --confirm</div><div className="t2">✓ KYC verified  ✓ entity matched  ✓ allotment issued</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STAGE 04 / 04</div><div className="pipe-detail__title">Serve &amp; retain</div><p className="pipe-detail__body">Buyers track payments, documents and construction progress from a self-serve portal. Possession is blocked until dues and snags are cleared, and happy buyers become a structured referral channel for the next launch.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Self-serve buyer portal &amp; service tickets</span></li><li><span className="ok">✓</span><span>Possession blocked until dues &amp; snags clear</span></li><li><span className="ok">✓</span><span>Structured referral &amp; loyalty programme</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ estateflow possession --handover</div><div className="t2">✓ dues cleared  ✓ snags closed  ✓ referral invite sent</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>

          <div className="panel-note" style={{"marginTop":"34px"}}>
            <div className="panel-note__lbl">THE_BUYER_JOURNEY · 10 STAGES · ENQUIRY → POSSESSION</div>
            <ul className="check-list" style={{"marginTop":"16px"}}>
              <li><span className="plus mono">01</span><span>New — captured, deduped, assigned</span></li>
              <li><span className="plus mono">02</span><span>Contacted — first call or reply logged</span></li>
              <li><span className="plus mono">03</span><span>Qualified — budget, configuration, timeline confirmed</span></li>
              <li><span className="plus mono">04</span><span>Visit scheduled — slot booked, reminders queued</span></li>
              <li><span className="plus mono">05</span><span>Visit done — OTP check-in, feedback captured</span></li>
              <li><span className="plus mono">06</span><span>Negotiation — cost sheet shared, quote validity set</span></li>
              <li><span className="plus mono">07</span><span>Unit blocked — hold converted by token receipt</span></li>
              <li><span className="plus mono">08</span><span>Booked — checklist, KYC and ledger closed</span></li>
              <li><span className="plus mono">09</span><span>Agreement registered — stamp duty &amp; registration recorded</span></li>
              <li><span className="plus mono">10</span><span>Possession — handover sign-off, referral ask</span></li>
            </ul>
          </div>
        </section>

        <section id="s-ai" className="section reveal">
          <p className="eyebrow">// WhatsApp automation and AI wired into daily operations</p>
          <h2 className="title mono">WhatsApp &amp; AI that actually do the work</h2>
          <p className="subtitle">Not a chatbot bolted onto the CRM — automation embedded directly in the steps where developers lose the most leads and the most trust.</p>
          <div className="grid grid-2 stagger">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.5 8.5 0 01-12.45 7.54L3 20l1.05-5.4A8.5 8.5 0 1121 11.5z"></path></svg><span className="cap__title">WhatsApp bot, three layers deep</span></div><p className="cap__body">Buttons and menus answer the common questions instantly. In-chat Flows book visits straight into the CRM. Free-text questions are answered only from an approved knowledge base — in Gujarati, Hindi or English — and the moment a buyer asks about price or a discount, the bot hands over to a person.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg><span className="cap__title">Stage-wise automations</span></div><p className="cap__body">Visit confirmations, day-before and 2-hour reminders, no-show recovery, demand letters and payment reminders send themselves at the right moment — every message logged straight onto the buyer's timeline.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l3 8 4-16 3 8h4"></path></svg><span className="cap__title">Lead scoring &amp; temperature</span></div><p className="cap__body">Every lead gets a 0–100 score from budget fit, timeline and engagement — recalculated daily and shown as Hot, Warm, Cold or Dormant — so hot buyers never wait behind cold ones.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8l4 4-4 4M20 8l-4 4 4 4M14 4l-4 16"></path></svg><span className="cap__title">Auto-generated handover packets</span></div><p className="cap__body">When a buyer moves between staff — a leave, a resignation, a stage change — a packet carries the full conversation, every commitment and every open item with them, so nothing is repeated or lost.</p></div>
          </div>
        </section>

        <section id="s-features" className="section reveal">
          <p className="eyebrow">const features = [ <span className="c">// full feature tour by category</span></p>
          <h2 className="title mono">Everything EstateFlow runs for you</h2>

          <div style={{"marginTop":"30px"}}>
            <span className="badge" style={{"color":"var(--teal)"}}>PRE-SALES</span>
            <div className="grid grid-3 stagger" style={{"marginTop":"16px"}}>
              <div className="svc"><div className="svc__num">01</div><div className="svc__title">Lead capture &amp; source attribution</div><p className="svc__body">Every enquiry from portals, Meta/Google ads, the website, hoardings and walk-ins lands in one place, tagged to its exact source and campaign.</p><div className="svc__foot"><span>capture.ts</span></div></div>
              <div className="svc"><div className="svc__num">02</div><div className="svc__title">Duplicate control &amp; ownership</div><p className="svc__body">One buyer, one record, one accountable owner — re-enquiries are logged as activity, not new leads.</p><div className="svc__foot"><span>dedupe.ts</span></div></div>
              <div className="svc"><div className="svc__num">03</div><div className="svc__title">Qualification &amp; lead scoring</div><p className="svc__body">Budget, configuration, purpose and timeline captured up front, with a 0–100 score recalculated daily.</p><div className="svc__foot"><span>qualify.ts</span></div></div>
              <div className="svc"><div className="svc__num">04</div><div className="svc__title">Assignment, routing &amp; SLA</div><p className="svc__body">Rule-based routing by project, source, language and budget, with a first-response SLA timer and an escalation ladder.</p><div className="svc__foot"><span>route.ts</span></div></div>
              <div className="svc"><div className="svc__num">05</div><div className="svc__title">Follow-up engine</div><p className="svc__body">Every open lead always has a dated next action — the system blocks saving otherwise.</p><div className="svc__foot"><span>followup.ts</span></div></div>
              <div className="svc"><div className="svc__num">06</div><div className="svc__title">Handover &amp; takeover</div><p className="svc__body">Auto-generated handover packets so any staff member can pick up a conversation exactly where it stopped.</p><div className="svc__foot"><span>handover.ts</span></div></div>
              <div className="svc"><div className="svc__num">07</div><div className="svc__title">Communication hub</div><p className="svc__body">Click-to-call, a shared WhatsApp inbox and approved templates — all logged to the lead timeline.</p><div className="svc__foot"><span>comms.ts</span></div></div>
              <div className="svc"><div className="svc__num">08</div><div className="svc__title">WhatsApp automation &amp; bot</div><p className="svc__body">Stage-wise automations plus a bot that answers, books visits and hands over to staff when needed.</p><div className="svc__foot"><span>whatsapp.ts</span></div></div>
            </div>
          </div>

          <div style={{"marginTop":"36px"}}>
            <span className="badge" style={{"color":"var(--yellow)"}}>SALES &amp; CLOSING</span>
            <div className="grid grid-3 stagger" style={{"marginTop":"16px"}}>
              <div className="svc"><div className="svc__num">01</div><div className="svc__title">Site visit management</div><p className="svc__body">Slot booking, reminders and OTP check-in, so visit counts and feedback are real.</p><div className="svc__foot"><span>visit.ts</span></div></div>
              <div className="svc"><div className="svc__num">02</div><div className="svc__title">Inventory, holds &amp; cost sheet</div><p className="svc__body">A live unit grid with timed holds and one-click, always-current quotations.</p><div className="svc__foot"><span>inventory.ts</span></div></div>
              <div className="svc"><div className="svc__num">03</div><div className="svc__title">Negotiation &amp; discount approval</div><p className="svc__body">Discounts follow a role-based limit matrix, with mobile approvals and a floor-price guard.</p><div className="svc__foot"><span>negotiate.ts</span></div></div>
              <div className="svc"><div className="svc__num">04</div><div className="svc__title">Booking &amp; allotment</div><p className="svc__body">Paperless booking and KYC checks, with a checklist that has to be complete before allotment.</p><div className="svc__foot"><span>booking.ts</span></div></div>
            </div>
          </div>

          <div style={{"marginTop":"36px"}}>
            <span className="badge" style={{"color":"var(--pink)"}}>POST-SALES</span>
            <div className="grid grid-3 stagger" style={{"marginTop":"16px"}}>
              <div className="svc"><div className="svc__num">01</div><div className="svc__title">Payment plans, demands &amp; collections</div><p className="svc__body">Construction-linked demand letters generated the moment a milestone is marked, with automatic TDS tracking.</p><div className="svc__foot"><span>collections.ts</span></div></div>
              <div className="svc"><div className="svc__num">02</div><div className="svc__title">Home loan desk</div><p className="svc__body">Every buyer's loan tracked from application to disbursement, so overdue reminders pause when a bank delay is the real cause.</p><div className="svc__foot"><span>loan.ts</span></div></div>
              <div className="svc"><div className="svc__num">03</div><div className="svc__title">Agreement, registration &amp; documents</div><p className="svc__body">A document vault per unit, a registration checklist, and access-controlled KYC files.</p><div className="svc__foot"><span>docs.ts</span></div></div>
              <div className="svc"><div className="svc__num">04</div><div className="svc__title">Customer portal &amp; post-sales service</div><p className="svc__body">Buyers track payments, documents and construction progress, and raise tickets, without calling the office.</p><div className="svc__foot"><span>portal.tsx</span></div></div>
            </div>
          </div>

          <div style={{"marginTop":"36px"}}>
            <span className="badge" style={{"color":"var(--green)"}}>PARTNERS &amp; GROWTH</span>
            <div className="grid grid-2 stagger" style={{"marginTop":"16px"}}>
              <div className="svc"><div className="svc__num">01</div><div className="svc__title">Channel partner management</div><p className="svc__body">Fair, timestamped lead tagging and commissions payable only when the linked stage is reached.</p><div className="svc__foot"><span>cp.ts</span></div></div>
              <div className="svc"><div className="svc__num">02</div><div className="svc__title">Referral &amp; loyalty</div><p className="svc__body">Past buyers become a structured referral channel, with rewards released on the referee's qualifying stage.</p><div className="svc__foot"><span>referral.ts</span></div></div>
            </div>
          </div>

          <div style={{"marginTop":"36px"}}>
            <span className="badge" style={{"color":"var(--teal)"}}>PLATFORM</span>
            <div className="grid grid-3 stagger" style={{"marginTop":"16px"}}>
              <div className="svc"><div className="svc__num">01</div><div className="svc__title">Marketing &amp; campaign ROI</div><p className="svc__body">Cost per lead, per visit and per booking by source, so budget follows bookings, not clicks.</p><div className="svc__foot"><span>marketing.ts</span></div></div>
              <div className="svc"><div className="svc__num">02</div><div className="svc__title">Tasks, calendar &amp; field team</div><p className="svc__body">A daily work plan and an evening activity report for every executive, in the field or at the desk.</p><div className="svc__foot"><span>field.ts</span></div></div>
              <div className="svc"><div className="svc__num">03</div><div className="svc__title">Admin, security &amp; audit</div><p className="svc__body">Multi-entity setup, role-based access, export controls and a full audit log on every sensitive action.</p><div className="svc__foot"><span>admin.ts</span></div></div>
              <div className="svc"><div className="svc__num">04</div><div className="svc__title">Analytics &amp; dashboards</div><p className="svc__body">A live director's view of pipeline, collections and inventory, with a scheduled morning summary.</p><div className="svc__foot"><span>analytics.ts</span></div></div>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// built for every role on a builder's sales team</p>
          <h2 className="title mono">Six roles, one platform</h2>
          <div className="grid grid-3 stagger">
            <div className="cap"><div className="cap__title">Director / MD</div><p className="cap__body">A business-wide view of pipeline, collections and inventory, with final approval on floor prices and large exports.</p></div>
            <div className="cap"><div className="cap__title">Sales Manager</div><p className="cap__body">Routing rules, SLA monitoring, discount approvals within limit, and duplicate merges.</p></div>
            <div className="cap"><div className="cap__title">Pre-sales Executive</div><p className="cap__body">Lead capture, qualification and follow-up, with visit booking — no pricing access.</p></div>
            <div className="cap"><div className="cap__title">Sales / Closing Executive</div><p className="cap__body">Site visits, negotiation, holds and booking, gated by an approved cost sheet.</p></div>
            <div className="cap"><div className="cap__title">Accounts</div><p className="cap__body">Multi-entity receipts, demand letters, TDS tracking and channel partner payouts.</p></div>
            <div className="cap"><div className="cap__title">Channel Partner (external)</div><p className="cap__body">Submits leads, books visits and tracks commission — never sees another partner's leads or internal notes.</p></div>
          </div>
        </section>

        <section id="s-pricing" className="section reveal">
          <p className="eyebrow">const pricing = [ <span className="c">// three tiers, built in phases</span></p>
          <h2 className="title mono">Pricing that scales with your rollout</h2>
          <p className="subtitle">Every tier includes 2FA, audit logs, DPDP-aligned data handling, and mobile app access. Pricing available upon request.</p>
          <div className="grid grid-3 stagger">
            <div className="price">
              <div className="price__head"><div className="price__kind" style={{"color":"var(--teal)"}}>01 · SALES CORE</div><div className="price__title">Sales Core</div><p className="price__body">For a single project getting off spreadsheets and WhatsApp groups.</p><div className="price__amt"><b>Custom</b><span>/ pricing on request</span></div></div>
              <ul className="price__list"><li><span className="ok">✓</span><span>Lead capture &amp; routing</span></li><li><span className="ok">✓</span><span>Follow-up engine &amp; handover packets</span></li><li><span className="ok">✓</span><span>WhatsApp inbox + core automations</span></li><li><span className="ok">✓</span><span>Site visits with OTP check-in</span></li><li><span className="ok">✓</span><span>Inventory &amp; cost sheets</span></li><li><span className="ok">✓</span><span>Email support</span></li></ul>
              <div className="price__foot"><a className="price__cta btn--ghost" href="#s-contact" data-scroll="s-contact" style={{"display":"block","textAlign":"center","color":"var(--text)"}}>Book a demo ↗</a></div>
            </div>
            <div className="price is-featured">
              <span className="price__badge">MOST POPULAR</span>
              <div className="price__head"><div className="price__kind" style={{"color":"var(--pink)"}}>02 · SALES + CLOSING</div><div className="price__title">Sales + Closing</div><p className="price__body">For developers ready to run booking, collections and partners through the CRM.</p><div className="price__amt"><b>Custom</b><span>/ pricing on request</span></div></div>
              <ul className="price__list"><li><span className="ok">✓</span><span>Everything in Sales Core, plus:</span></li><li><span className="ok">✓</span><span>Discount approvals &amp; offer schemes</span></li><li><span className="ok">✓</span><span>Booking, KYC &amp; multi-entity receipts</span></li><li><span className="ok">✓</span><span>Demand letters &amp; TDS tracker</span></li><li><span className="ok">✓</span><span>WhatsApp AI answers &amp; Flows</span></li><li><span className="ok">✓</span><span>Channel partner portal + director dashboard</span></li></ul>
              <div className="price__foot"><a className="price__cta" href="#s-contact" data-scroll="s-contact" style={{"display":"block","textAlign":"center","background":"var(--pink)","color":"var(--bg)"}}>Book a demo ↗</a></div>
            </div>
            <div className="price">
              <div className="price__head"><div className="price__kind" style={{"color":"var(--yellow)"}}>03 · FULL PLATFORM</div><div className="price__title">Full Platform</div><p className="price__body">For multi-project developers running sales through possession and referrals.</p><div className="price__amt"><b>Custom</b><span>/ pricing on request</span></div></div>
              <ul className="price__list"><li><span className="ok">✓</span><span>Everything in Sales + Closing, plus:</span></li><li><span className="ok">✓</span><span>Customer portal &amp; post-sales service</span></li><li><span className="ok">✓</span><span>Home loan desk</span></li><li><span className="ok">✓</span><span>Documents, registration &amp; possession</span></li><li><span className="ok">✓</span><span>Referral programme</span></li><li><span className="ok">✓</span><span>Campaign ROI &amp; dedicated onboarding</span></li></ul>
              <div className="price__foot"><a className="price__cta btn--ghost" href="#s-contact" data-scroll="s-contact" style={{"display":"block","textAlign":"center","color":"var(--text)"}}>Talk to us ↗</a></div>
            </div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">TECHNICAL_INFRASTRUCTURE</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Multi-entity, multi-project data isolation</span></div><div><span className="plus">+</span><span>Role-based access control (RBAC)</span></div><div><span className="plus">+</span><span>DPDP Act-aligned data handling</span></div><div><span className="plus">+</span><span>Mobile-first field app · 4G / offline capable</span></div><div><span className="plus">+</span><span>WhatsApp Business Platform, native</span></div><div><span className="plus">+</span><span>Configurable masters — no code changes needed</span></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// estateflow.faq.md</p>
          <h2 className="title mono">Everything you're probably wondering</h2>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Does EstateFlow enforce RERA Section 13?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — receipts above 10% of the unit cost before a registered agreement are blocked automatically, and every quotation carries the project's RERA number.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can it handle multiple projects under different legal entities?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — each project is mapped to its own legal entity, and receipts, GST and agreements are entity-aware from day one.</p></div></div>
            <div className="faq__item"><button className="faq__q">Does the WhatsApp bot ever quote a price or discount?<span className="sign">[+]</span></button><div className="faq__a"><p>No — pricing and discount questions are always handed to a person. The bot only answers from facts your team has approved in the knowledge base.</p></div></div>
            <div className="faq__item"><button className="faq__q">How are channel partner disputes handled?<span className="sign">[+]</span></button><div className="faq__a"><p>Every lead tag is timestamped with its validity window, and OTP-verified visits lock a partner's credit — disputes are resolved with the same evidence shown to both sides.</p></div></div>
            <div className="faq__item"><button className="faq__q">Does it track TDS on buyer payments?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — for units at or above ₹50 lakh, EstateFlow tracks the 1% TDS under Section 194-IA per instalment and flags missing challans before possession.</p></div></div>
            <div className="faq__item"><button className="faq__q">What languages does it support?<span className="sign">[+]</span></button><div className="faq__a"><p>Gujarati, Hindi and English — across templates, the WhatsApp bot, and the customer portal.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can we start with just the sales pipeline and add collections later?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — EstateFlow is built in phases. Most developers start with the Sales Core tier and add closing, collections and post-sales as they're ready.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <Link className="svc" href="/insuredesk/"><div className="svc__title" style={{"fontSize":"16px"}}>InsureDesk</div><p className="svc__body" style={{"fontSize":"13.5px"}}>CRM for insurance agencies — lead and policy management.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/crm-erp-systems/"><div className="svc__title" style={{"fontSize":"16px"}}>CRM &amp; ERP Systems</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Custom CRM and ERP builds for businesses outside real estate.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/real-estate/"><div className="svc__title" style={{"fontSize":"16px"}}>Real Estate Software</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Listing platforms, virtual tours and lease management, custom-built.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/products/"><div className="svc__title" style={{"fontSize":"16px"}}>Browse all products</div><p className="svc__body" style={{"fontSize":"13.5px"}}>See the full catalog of ready-made software products.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./estateflow --run-my-sales<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Run your buyer journey on EstateFlow</h2>
          <p className="cta__lead">Book a 30-minute live demo — no commitment required. We'll map it to your projects, your entities and your sales team.</p>
          <div className="cta__btns">
            <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book a demo</a>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free demo</span><span><span className="g">●</span> Built in phases</span><span><span className="g">●</span> RERA-aware from day one</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">estateflow.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
