import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "SolarFlow — Solar ERP & CRM for Gujarat Installers | Digital Web Weaver" },
  description: "SolarFlow manages the entire PM Surya Ghar → GEDA → MGVCL subsidy lifecycle, with AI that quotes, checks compliance, and watches every system you install. Never forfeit a subsidy again.",
  alternates: { canonical: "/solarflow/" },
  openGraph: { title: "SolarFlow — Solar ERP & CRM for Gujarat Installers | Digital Web Weaver", description: "SolarFlow manages the entire PM Surya Ghar → GEDA → MGVCL subsidy lifecycle, with AI that quotes, checks compliance, and watches every system you install. Never forfeit a subsidy again.", url: "/solarflow/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-problem" data-target="s-problem" title="The problem">⚠</button>
      <button className="activitybar__btn" data-scroll="s-workflow" data-target="s-workflow" title="How it works">❯</button>
      <button className="activitybar__btn" data-scroll="s-ai" data-target="s-ai" title="AI assistants">◆</button>
      <button className="activitybar__btn" data-scroll="s-features" data-target="s-features" title="Features">⚙</button>
      <button className="activitybar__btn" data-scroll="s-pricing" data-target="s-pricing" title="Pricing">$</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="Gujarat · India">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> solarflow.ts</button>
        <button className="tab" data-scroll="s-workflow" data-target="s-workflow"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> workflow.ts</button>
        <button className="tab" data-scroll="s-pricing" data-target="s-pricing"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> pricing.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// solarflow.ts · solar ERP + CRM · Gujarat installers</p>
            <span className="badge">SOLARFLOW</span>
            <h1 className="hero__h1">Never forfeit a <span className="pink">₹78,000 subsidy</span> again</h1>
            <p className="hero__lead">SolarFlow is an ERP + CRM built for Indian solar installers that manages the entire PM Surya Ghar → GEDA → MGVCL subsidy lifecycle — with AI that quotes, checks compliance, and watches every system you install.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book a demo ↗</a>
              <a className="btn btn--ghost" href="#s-workflow" data-scroll="s-workflow">$ see --how-it-works</a>
              <a className="btn btn--ghost teal" href="#s-features" data-scroll="s-features">$ explore --features</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>1</b><span>platform, lead → subsidy</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>ALMM</b><span>validated</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>GST</b><span>invoicing built-in</span></div>
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>Web+App</b><span>works on mobile</span></div>
            </div>
            <div className="trust">
              <div className="trust__label">CERTIFIED</div>
              <div className="trust__row"><span className="trust__chip">ISO 27001</span><span className="trust__chip">SOC 2 Type II</span><span className="trust__chip">GDPR aligned</span><span className="trust__chip">4.9/5 Clutch</span></div>
            </div>
          </div>
          <div className="formcard" id="demo">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">demo.form</span><span className="mut">— free · 30 min</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE DEMO</p>
              <p className="form__title">See SolarFlow in action</p>
              <p className="form__lead">Book a 30-minute live demo — we'll map it to your install pipeline and subsidy workflow.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME</label><input className="input" name="name" placeholder="Your name" /></div>
                <div className="field"><label className="label">WORK EMAIL</label><input className="input" name="email" type="email" placeholder="you@installer.com" /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">COMPANY / INSTALLER NAME</label><input className="input" name="company" placeholder="Your company" /></div>
                <div className="field"><label className="label">MONTHLY INSTALL VOLUME</label>
                <select className="select" name="volume"><option>Up to 50 installs / month</option><option>50–200 installs / month</option><option>200+ installs / month</option></select>
                </div>
              </div>
              <button className="form__submit" type="submit">Book a demo ↗</button>
              <p className="form__micro">No commitment · Gujarat solar native</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww demo --book solarflow</div>
              <div className="s1">✓ request received<br />✓ routed to a product specialist<br />✓ demo slot being arranged</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll be in touch within 24 hours to schedule.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>~3 hrs</div><div className="lbl">SAVED_PER_QUOTE</div><div className="sub">▲ pilot result</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>0</div><div className="lbl">NET-METER_REJECTIONS</div><div className="sub">▲ post Pre-Check validation</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>2×</div><div className="lbl">FASTER_SUBSIDY_STAGE</div><div className="sub">▲ progression speed</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>100%</div><div className="lbl">SUBSIDY_ELIGIBILITY</div><div className="sub">▲ pilot eligibility rate</div></div>
        </section>

        <section id="s-problem" className="section reveal">
          <p className="eyebrow">// the problem — why installers lose money on paperwork, not panels</p>
          <h2 className="title mono">Five things quietly costing you money</h2>
          <p className="subtitle">Every one of these shows up as either a forfeited subsidy or a lead that went cold — long before anyone in the office notices.</p>
          <div className="grid grid-3 stagger">
            <div className="cap" style={{"borderTop":"3px solid var(--red)"}}><div className="cap__title">Subsidy forfeiture (₹30k–₹78k)</div><p className="cap__body">Non-compliant panels or a net-metering rejection can eliminate a customer's subsidy entirely — after the system is already installed.</p></div>
            <div className="cap" style={{"borderTop":"3px solid var(--red)"}}><div className="cap__title">Operational chaos</div><p className="cap__body">Leads in group chats. Quotes in spreadsheets. Projects on paper registers. Nothing talks to anything else.</p></div>
            <div className="cap" style={{"borderTop":"3px solid var(--red)"}}><div className="cap__title">Quoting delays</div><p className="cap__body">Manual quoting takes an afternoon per customer, while faster competitors are already following up.</p></div>
            <div className="cap" style={{"borderTop":"3px solid var(--red)"}}><div className="cap__title">Lead atrophy</div><p className="cap__body">Without disciplined follow-up, warm prospects go quiet and sign with whoever calls back first.</p></div>
            <div className="cap" style={{"borderTop":"3px solid var(--red)"}}><div className="cap__title">Silent project stalls</div><p className="cap__body">No visibility into subsidy stage progression means stalls are discovered only when the customer complains.</p></div>
          </div>
        </section>

        <section id="s-workflow" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>solarPipeline</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">Lead to subsidy, in one workflow</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Bill analysis</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Quote generation</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Subsidy tracking</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Lifecycle service</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STAGE 01 / 04</div><div className="pipe-detail__title">Bill analysis</div><p className="pipe-detail__body">"Snap the bill" — a photo upload of the electricity bill is all it takes. AI extracts the consumer data and recommends the appropriate system capacity.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Bill photo upload, no manual entry</span></li><li><span className="ok">✓</span><span>Consumer data extracted automatically</span></li><li><span className="ok">✓</span><span>Recommended system capacity</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ solarflow bill --analyze</div><div className="t2">✓ consumer data extracted  ✓ capacity recommended</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STAGE 02 / 04</div><div className="pipe-detail__title">Quote generation</div><p className="pipe-detail__body">Produces a branded PDF with a full bill of materials, the PM Surya Ghar subsidy, net cost, and EMI options — with compliance validation built in.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Branded PDF with BOM &amp; subsidy</span></li><li><span className="ok">✓</span><span>Net cost &amp; EMI options included</span></li><li><span className="ok">✓</span><span>Compliance validated before it's sent</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ solarflow quote --generate</div><div className="t2">✓ BOM priced  ✓ subsidy calculated  ✓ PDF sent</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STAGE 03 / 04</div><div className="pipe-detail__title">Subsidy tracking</div><p className="pipe-detail__body">A 6-stage state machine tracks every project from GEDA approval through MGVCL net-metering to subsidy credited — with SLA timers on every stage.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>6-stage subsidy state machine</span></li><li><span className="ok">✓</span><span>SLA timers flag stalled stages</span></li><li><span className="ok">✓</span><span>GEDA → MGVCL → credited, tracked</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ solarflow subsidy --track</div><div className="t2">✓ stage logged  ✓ SLA timer running</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STAGE 04 / 04</div><div className="pipe-detail__title">Lifecycle service</div><p className="pipe-detail__body">The Underproduction Sentinel watches every installed system for performance issues, alongside AMC and warranty management for the life of the install.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Underproduction Sentinel monitoring</span></li><li><span className="ok">✓</span><span>AMC contract management</span></li><li><span className="ok">✓</span><span>Warranty tracking</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ solarflow lifecycle --monitor</div><div className="t2">✓ sentinel active  ✓ AMC tracked</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>

          <div className="panel-note" style={{"marginTop":"34px"}}>
            <div className="panel-note__lbl">THE_SUBSIDY_LIFECYCLE · 6 STAGES · PM SURYA GHAR → GEDA → MGVCL</div>
            <ul className="check-list" style={{"marginTop":"16px"}}>
              <li><span className="plus mono">01</span><span>PM Surya Ghar registration</span></li>
              <li><span className="plus mono">02</span><span>GEDA approval</span></li>
              <li><span className="plus mono">03</span><span>MGVCL feasibility (with Net-Meter Pre-Check)</span></li>
              <li><span className="plus mono">04</span><span>Installation &amp; commissioning</span></li>
              <li><span className="plus mono">05</span><span>Net-meter inspection</span></li>
              <li><span className="plus mono">06</span><span>Subsidy credited</span></li>
            </ul>
          </div>
        </section>

        <section id="s-ai" className="section reveal">
          <p className="eyebrow">// four AI assistants wired into daily operations</p>
          <h2 className="title mono">AI that actually does the work</h2>
          <p className="subtitle">Not a chatbot bolted onto the CRM — four assistants embedded directly in the workflow steps where installers lose the most time and money.</p>
          <div className="grid grid-2 stagger">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M8 12h8M8 16h5M9 8h6"></path></svg><span className="cap__title">Smart Quote</span></div><p className="cap__body">Converts bill photos into a subsidy-ready proposal in minutes — extracting the consumer number, sanctioned load, and units, then building a priced BOM with subsidy calculations.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg><span className="cap__title">Net-Meter Pre-Check</span></div><p className="cap__body">Validates the application against known MGVCL rejection reasons — system sizing, ALMM compliance, inverter empanelment, documentation completeness, and earthing requirements.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg><span className="cap__title">Underproduction Sentinel</span></div><p className="cap__body">Continuous monitoring that auto-raises a service ticket the moment a system dips — usually before the customer notices anything is wrong.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8l4 4-4 4M20 8l-4 4 4 4M14 4l-4 16"></path></svg><span className="cap__title">Follow-up Brain</span></div><p className="cap__body">Scores leads by temperature, surfaces today's call list, and drafts WhatsApp nudges — in English, Hindi, or Gujarati.</p></div>
          </div>
        </section>

        <section id="s-features" className="section reveal">
          <p className="eyebrow">const features = [ <span className="c">// full feature tour by category</span></p>
          <h2 className="title mono">Everything SolarFlow runs for you</h2>

          <div style={{"marginTop":"30px"}}>
            <span className="badge" style={{"color":"var(--teal)"}}>CRM &amp; LEADS</span>
            <div className="grid grid-3 stagger" style={{"marginTop":"16px"}}>
              <div className="svc"><div className="svc__num">01</div><div className="svc__title">Multi-source lead inbox</div><p className="svc__body">IndiaMART, JustDial, Meta, referrals, and the PM Surya Ghar portal — every lead lands in one inbox.</p><div className="svc__foot"><span>leads.ts</span></div></div>
              <div className="svc"><div className="svc__num">02</div><div className="svc__title">Kanban pipeline with stage SLAs</div><p className="svc__body">Every lead moves through a visual pipeline with SLA timers on each stage.</p><div className="svc__foot"><span>pipeline.ts</span></div></div>
              <div className="svc"><div className="svc__num">03</div><div className="svc__title">Customer 360</div><p className="svc__body">All projects, quotes, invoices, tickets, and AMCs for a customer in one view.</p><div className="svc__foot"><span>customer360.ts</span></div></div>
              <div className="svc"><div className="svc__num">04</div><div className="svc__title">Referrals &amp; channel partners</div><p className="svc__body">Dedicated portals for referral sources and channel partners to track their pipeline.</p><div className="svc__foot"><span>partners.tsx</span></div></div>
              <div className="svc"><div className="svc__num">05</div><div className="svc__title">DPDP / POPIA compliance</div><p className="svc__body">One-click data export, right-to-erasure, and full audit trails built in.</p><div className="svc__foot"><span>compliance.ts</span></div></div>
            </div>
          </div>

          <div style={{"marginTop":"36px"}}>
            <span className="badge" style={{"color":"var(--yellow)"}}>QUOTING</span>
            <div className="grid grid-3 stagger" style={{"marginTop":"16px"}}>
              <div className="svc"><div className="svc__num">01</div><div className="svc__title">Smart Quote, vision AI</div><p className="svc__body">Bill-photo-to-quote in minutes, powered by the Smart Quote AI assistant.</p><div className="svc__foot"><span>quote.ts</span></div></div>
              <div className="svc"><div className="svc__num">02</div><div className="svc__title">Branded PDF generation</div><p className="svc__body">Professional, branded proposal PDFs generated automatically from every quote.</p><div className="svc__foot"><span>pdf.ts</span></div></div>
              <div className="svc"><div className="svc__num">03</div><div className="svc__title">Net-Meter Pre-Check validation</div><p className="svc__body">Every quote is checked against known MGVCL rejection reasons before it goes out.</p><div className="svc__foot"><span>precheck.ts</span></div></div>
              <div className="svc"><div className="svc__num">04</div><div className="svc__title">EMI options included</div><p className="svc__body">Financing options are built into every quote so the customer sees the real monthly cost.</p><div className="svc__foot"><span>emi.ts</span></div></div>
            </div>
          </div>

          <div style={{"marginTop":"36px"}}>
            <span className="badge" style={{"color":"var(--pink)"}}>SUBSIDY &amp; PROJECTS</span>
            <div className="grid grid-3 stagger" style={{"marginTop":"16px"}}>
              <div className="svc"><div className="svc__num">01</div><div className="svc__title">6-stage subsidy tracker</div><p className="svc__body">Every project's subsidy stage is visible, from registration to credited.</p><div className="svc__foot"><span>subsidy.ts</span></div></div>
              <div className="svc"><div className="svc__num">02</div><div className="svc__title">ALMM validation</div><p className="svc__body">Prevents ordering components that aren't on the government's Approved List of Models and Manufacturers.</p><div className="svc__foot"><span>almm.ts</span></div></div>
              <div className="svc"><div className="svc__num">03</div><div className="svc__title">SLA timers on every stage</div><p className="svc__body">Stalled projects surface automatically instead of waiting for a customer complaint.</p><div className="svc__foot"><span>sla.ts</span></div></div>
              <div className="svc"><div className="svc__num">04</div><div className="svc__title">Compliance checklists</div><p className="svc__body">Structured checklists keep every project's paperwork audit-ready.</p><div className="svc__foot"><span>compliance.ts</span></div></div>
            </div>
          </div>

          <div style={{"marginTop":"36px"}}>
            <span className="badge" style={{"color":"var(--green)"}}>FINANCE</span>
            <div className="grid grid-3 stagger" style={{"marginTop":"16px"}}>
              <div className="svc"><div className="svc__num">01</div><div className="svc__title">GST-compliant invoicing</div><p className="svc__body">Auto CGST + SGST or IGST, calculated correctly depending on the transaction.</p><div className="svc__foot"><span>gst.ts</span></div></div>
              <div className="svc"><div className="svc__num">02</div><div className="svc__title">Payment milestone tracking</div><p className="svc__body">Track advance, milestone, and final payments against every project.</p><div className="svc__foot"><span>payments.ts</span></div></div>
              <div className="svc"><div className="svc__num">03</div><div className="svc__title">Project-level profitability</div><p className="svc__body">See margin and profitability per project, not just at the company level.</p><div className="svc__foot"><span>profit.ts</span></div></div>
              <div className="svc"><div className="svc__num">04</div><div className="svc__title">Margin calculations per quote</div><p className="svc__body">Every quote shows margin before it's sent, not after the job is done.</p><div className="svc__foot"><span>margin.ts</span></div></div>
            </div>
          </div>

          <div style={{"marginTop":"36px"}}>
            <span className="badge" style={{"color":"var(--teal)"}}>INVENTORY</span>
            <div className="grid grid-2 stagger" style={{"marginTop":"16px"}}>
              <div className="svc"><div className="svc__num">01</div><div className="svc__title">Purchase order management</div><p className="svc__body">Create, track, and receive purchase orders against project requirements.</p><div className="svc__foot"><span>po.ts</span></div></div>
              <div className="svc"><div className="svc__num">02</div><div className="svc__title">ALMM-compliant component flagging</div><p className="svc__body">Off-list components are flagged before they're ordered, not after installation.</p><div className="svc__foot"><span>flagging.ts</span></div></div>
            </div>
          </div>

          <div style={{"marginTop":"36px"}}>
            <span className="badge" style={{"color":"var(--yellow)"}}>OPERATIONS &amp; MAINTENANCE</span>
            <div className="grid grid-3 stagger" style={{"marginTop":"16px"}}>
              <div className="svc"><div className="svc__num">01</div><div className="svc__title">Service ticket auto-generation</div><p className="svc__body">Tickets are raised automatically when a system needs attention.</p><div className="svc__foot"><span>tickets.ts</span></div></div>
              <div className="svc"><div className="svc__num">02</div><div className="svc__title">Underproduction Sentinel</div><p className="svc__body">Continuous monitoring flags performance issues the moment they appear.</p><div className="svc__foot"><span>sentinel.ts</span></div></div>
              <div className="svc"><div className="svc__num">03</div><div className="svc__title">AMC contract management</div><p className="svc__body">Manage annual maintenance contracts and renewal schedules per customer.</p><div className="svc__foot"><span>amc.ts</span></div></div>
              <div className="svc"><div className="svc__num">04</div><div className="svc__title">Warranty tracking</div><p className="svc__body">Component and installation warranties tracked against every system.</p><div className="svc__foot"><span>warranty.ts</span></div></div>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// built for every role in a solar business</p>
          <h2 className="title mono">Five people, one platform</h2>
          <div className="grid grid-3 stagger">
            <div className="cap"><div className="cap__title">Director / Owner</div><p className="cap__body">Pipeline visibility, cash flow, subsidy value tracking, and margin analysis across the whole business.</p></div>
            <div className="cap"><div className="cap__title">Sales representative</div><p className="cap__body">Quote speed, follow-up automation, and lead temperature scoring — never guessing who to call next.</p></div>
            <div className="cap"><div className="cap__title">Site surveyor</div><p className="cap__body">Mobile survey capture that feeds directly into the quote and project record — no re-typing in the office.</p></div>
            <div className="cap"><div className="cap__title">Operations / Project manager</div><p className="cap__body">Subsidy stage visibility across every active project, with SLA-breach alerts before customers notice.</p></div>
            <div className="cap"><div className="cap__title">Accountant</div><p className="cap__body">Auto-generated GST invoices, payment tracking, and profitability per project — no manual reconciliation.</p></div>
          </div>
        </section>

        <section id="s-pricing" className="section reveal">
          <p className="eyebrow">const pricing = [ <span className="c">// three tiers, sized by staff &amp; install volume</span></p>
          <h2 className="title mono">Pricing that scales with your business</h2>
          <p className="subtitle">Every tier includes 2FA, audit logs, DPDP/POPIA compliance, and mobile app access. Pricing available upon request.</p>
          <div className="grid grid-3 stagger">
            <div className="price">
              <div className="price__head"><div className="price__kind" style={{"color":"var(--teal)"}}>01 · STARTER</div><div className="price__title">Starter</div><p className="price__body">For smaller installers getting off spreadsheets. 1–10 staff, up to 50 installs a month.</p><div className="price__amt"><b>Custom</b><span>/ pricing on request</span></div></div>
              <ul className="price__list"><li><span className="ok">✓</span><span>CRM &amp; lead inbox</span></li><li><span className="ok">✓</span><span>Smart Quote (AI)</span></li><li><span className="ok">✓</span><span>Subsidy lifecycle tracker</span></li><li><span className="ok">✓</span><span>GST invoicing</span></li><li><span className="ok">✓</span><span>Basic dashboard</span></li><li><span className="ok">✓</span><span>Email support</span></li></ul>
              <div className="price__foot"><a className="price__cta btn--ghost" href="#s-contact" data-scroll="s-contact" style={{"display":"block","textAlign":"center","color":"var(--text)"}}>Book a demo ↗</a></div>
            </div>
            <div className="price is-featured">
              <span className="price__badge">MOST POPULAR</span>
              <div className="price__head"><div className="price__kind" style={{"color":"var(--pink)"}}>02 · GROWTH</div><div className="price__title">Growth</div><p className="price__body">For scaling teams juggling volume. 10–50 staff, up to 200 installs a month.</p><div className="price__amt"><b>Custom</b><span>/ pricing on request</span></div></div>
              <ul className="price__list"><li><span className="ok">✓</span><span>Everything in Starter, plus:</span></li><li><span className="ok">✓</span><span>Net-Meter Pre-Check (AI)</span></li><li><span className="ok">✓</span><span>Inventory &amp; purchase orders</span></li><li><span className="ok">✓</span><span>Partner portal</span></li><li><span className="ok">✓</span><span>Project profitability</span></li><li><span className="ok">✓</span><span>Priority support</span></li></ul>
              <div className="price__foot"><a className="price__cta" href="#s-contact" data-scroll="s-contact" style={{"display":"block","textAlign":"center","background":"var(--pink)","color":"var(--bg)"}}>Book a demo ↗</a></div>
            </div>
            <div className="price">
              <div className="price__head"><div className="price__kind" style={{"color":"var(--yellow)"}}>03 · SCALE</div><div className="price__title">Scale</div><p className="price__body">For multi-branch operators. 50–200 staff, unlimited installs a month.</p><div className="price__amt"><b>Custom</b><span>/ pricing on request</span></div></div>
              <ul className="price__list"><li><span className="ok">✓</span><span>Everything in Growth, plus:</span></li><li><span className="ok">✓</span><span>Underproduction Sentinel (AI)</span></li><li><span className="ok">✓</span><span>Follow-up Brain (AI)</span></li><li><span className="ok">✓</span><span>Custom workflows</span></li><li><span className="ok">✓</span><span>White-label</span></li><li><span className="ok">✓</span><span>Dedicated onboarding</span></li></ul>
              <div className="price__foot"><a className="price__cta btn--ghost" href="#s-contact" data-scroll="s-contact" style={{"display":"block","textAlign":"center","color":"var(--text)"}}>Talk to us ↗</a></div>
            </div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">TECHNICAL_INFRASTRUCTURE</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Multi-tenant isolation, per-company DB scoping</span></div><div><span className="plus">+</span><span>Postgres Row-Level Security</span></div><div><span className="plus">+</span><span>Role-Based Access Control (RBAC)</span></div><div><span className="plus">+</span><span>DPDP &amp; POPIA compliance built-in</span></div><div><span className="plus">+</span><span>Mobile-first field app · 4G / offline capable</span></div><div><span className="plus">+</span><span>White-label customisation</span></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// solarflow.faq.md</p>
          <h2 className="title mono">Everything you're probably wondering</h2>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Is data isolated per tenant / company?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — SolarFlow is multi-tenant with per-company data isolation, enforced with Postgres Row-Level Security.</p></div></div>
            <div className="faq__item"><button className="faq__q">Is it compatible with DISCOMs other than MGVCL, like DGVCL or PGVCL?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — SolarFlow is built to work across MGVCL, DGVCL, and PGVCL.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can it be white-labelled or branded as ours?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — white-label and branding customisation is available, and included in the Scale tier.</p></div></div>
            <div className="faq__item"><button className="faq__q">How is GST handled?<span className="sign">[+]</span></button><div className="faq__a"><p>Automatically — SolarFlow applies CGST + SGST or IGST correctly depending on the transaction.</p></div></div>
            <div className="faq__item"><button className="faq__q">What do field technicians need to use it?<span className="sign">[+]</span></button><div className="faq__a"><p>A mobile-first field app for Android and iOS that works over 4G and stays usable offline.</p></div></div>
            <div className="faq__item"><button className="faq__q">Which AI provider does SolarFlow use?<span className="sign">[+]</span></button><div className="faq__a"><p>Your choice of Claude or OpenAI, connected using your own API key.</p></div></div>
            <div className="faq__item"><button className="faq__q">What is ALMM validation and why does it matter?<span className="sign">[+]</span></button><div className="faq__a"><p>ALMM validation ensures every component ordered is on the government's Approved List of Models and Manufacturers — ordering off-list components is one of the most common ways installers accidentally disqualify a customer's subsidy.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <Link className="svc" href="/chemsupply/"><div className="svc__title" style={{"fontSize":"16px"}}>ChemSupply</div><p className="svc__body" style={{"fontSize":"13.5px"}}>ERP for chemical suppliers — inventory, compliance, orders.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/pesttrack/"><div className="svc__title" style={{"fontSize":"16px"}}>PestTrack</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Field service CRM — job scheduling, technician routing.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/manchify/"><div className="svc__title" style={{"fontSize":"16px"}}>Manchify</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Operations OS for event companies — leads, quotes, GST.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/products/"><div className="svc__title" style={{"fontSize":"16px"}}>All products</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Browse the full catalogue of ready-made products.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./solarflow --run-my-business<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Run your solar business on SolarFlow</h2>
          <p className="cta__lead">Book a 30-minute live demo — no commitment required. Built and supported by a team that's Gujarat solar native.</p>
          <div className="cta__btns">
            <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book a demo ↗</a>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> 30-minute live demo</span><span><span className="g">●</span> No commitment required</span><span><span className="g">●</span> Gujarat solar native</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">solarflow.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
