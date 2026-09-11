import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "FabSuite — Costing & Cutting-Plan Software for Fabricators | Digital Web Weaver" },
  description: "FabSuite turns a customer's window/door measurements into a costed quotation and an optimized aluminium cutting plan — in minutes, not an evening with Excel. Built for aluminium & uPVC fabrication shops.",
  alternates: { canonical: "/fabsuite/" },
  openGraph: { title: "FabSuite — Costing & Cutting-Plan Software for Fabricators | Digital Web Weaver", description: "FabSuite turns a customer's window/door measurements into a costed quotation and an optimized aluminium cutting plan — in minutes, not an evening with Excel. Built for aluminium & uPVC fabrication shops.", url: "/fabsuite/", type: "website" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={serviceSchema({ name: "FabSuite", description: "FabSuite turns a customer's window/door measurements into a costed quotation and an optimized aluminium cutting plan — in minutes, not an evening with Excel. Built for aluminium & uPVC fabrication shops.", href: "/fabsuite/" })} />
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-problem" data-target="s-problem" title="The problem">⚠</button>
      <button className="activitybar__btn" data-scroll="s-workflow" data-target="s-workflow" title="How it works">❯</button>
      <button className="activitybar__btn" data-scroll="s-screens" data-target="s-screens" title="Inside FabSuite">▦</button>
      <button className="activitybar__btn" data-scroll="s-coverage" data-target="s-coverage" title="What it covers">◈</button>
      <button className="activitybar__btn" data-scroll="s-features" data-target="s-features" title="Features">⚙</button>
      <button className="activitybar__btn" data-scroll="s-pricing" data-target="s-pricing" title="Pricing">$</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="Aluminium & uPVC fabricators · India">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> fabsuite.ts</button>
        <button className="tab" data-scroll="s-workflow" data-target="s-workflow"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> workflow.ts</button>
        <button className="tab" data-scroll="s-pricing" data-target="s-pricing"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> pricing.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// fabsuite.ts · costing + cutting-plan software · aluminium &amp; uPVC fabricators</p>
            <span className="badge">FABSUITE</span>
            <h1 className="hero__h1">From measurements to a <span className="pink">costed quotation</span> in minutes, not an evening with Excel</h1>
            <p className="hero__lead">FabSuite is built specifically for aluminium and uPVC window/door fabrication shops. Set up your profile catalog, cutting formulas, and pricing once — every job after that gets accurate live costing, an optimized cutting plan, and a shop-branded PDF quotation automatically.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#trial" data-scroll="s-hero">▶ Start your 30-day free trial</a>
              <a className="btn btn--ghost" href="#s-workflow" data-scroll="s-workflow">$ see --how-it-works</a>
              <a className="btn btn--ghost teal" href="#s-features" data-scroll="s-features">$ explore --features</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>₹999</b><span>/month, flat — every feature</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>30 days</b><span>free, no card required</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>5</b><span>opening types, one engine</span></div>
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>Web</b><span>desktop or shop-floor phone</span></div>
            </div>
          </div>
          <div className="formcard" id="trial">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">trial.form</span><span className="mut">— 30 days free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE 30-DAY TRIAL</p>
              <p className="form__title">Start using FabSuite today</p>
              <p className="form__lead">No credit card required. Your shop's private workspace is created instantly.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME *</label><input className="input" name="name" placeholder="Your name" required /></div>
                <div className="field"><label className="label">WORK EMAIL *</label><input className="input" name="email" type="email" placeholder="you@fabricator.com" required /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">SHOP / COMPANY NAME</label><input className="input" name="company" placeholder="Your shop name" /></div>
                <div className="field"><label className="label">WHAT DO YOU FABRICATE?</label>
                <select className="select" name="fabricates"><option>Aluminium windows &amp; doors</option><option>uPVC windows &amp; doors</option><option>Both aluminium &amp; uPVC</option><option>Curtain wall / facades</option><option>Frameless glass</option></select>
                </div>
              </div>
              <button className="form__submit" type="submit">Start free trial ↗</button>
              <p className="form__micro">30-day free trial · No card required · Cancel any time</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww trial --start fabsuite</div>
              <div className="s1">✓ workspace created<br />✓ 30-day trial activated<br />✓ setup guide on its way</div>
              <div className="s2">Thanks<span data-name-slot></span> — check your inbox to log in and set up your catalog.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>₹999</div><div className="lbl">FLAT_PRICE</div><div className="sub">▲ one plan, every feature</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>30d</div><div className="lbl">FREE_TRIAL</div><div className="sub">▲ no card required</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>5</div><div className="lbl">OPENING_TYPES</div><div className="sub">▲ plain to curtain wall</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>2</div><div className="lbl">ROLES</div><div className="sub">▲ owner sees margins, staff don't</div></div>
        </section>

        <section id="s-problem" className="section reveal">
          <p className="eyebrow">// the problem — why shops lose money on paperwork, not fabrication</p>
          <h2 className="title mono">Three ways shops lose money today</h2>
          <p className="subtitle">None of these show up as a single bad day — they quietly cost real money, job after job, until nobody remembers a time it was different.</p>
          <div className="grid grid-3 stagger">
            <div className="cap" style={{"borderTop":"3px solid var(--red)"}}><div className="cap__title">Manual costing in Excel or on paper</div><p className="cap__body">Slow, error-prone, no live recalculation when a rate changes, no way to see cutting wastage before you cut, and a quote that looks like a spreadsheet — not a professional proposal.</p></div>
            <div className="cap" style={{"borderTop":"3px solid var(--red)"}}><div className="cap__title">An expensive, rigid legacy tool</div><p className="cap__body">The established desktop tools in this space are powerful but costly, desktop-only, and built for cutting plans alone — not for a shop that also wants to run its sales pipeline.</p></div>
            <div className="cap" style={{"borderTop":"3px solid var(--red)"}}><div className="cap__title">Nothing for the business side</div><p className="cap__body">No way to track a lead from first inquiry through site visit, quotation, and negotiation to a won job — so real opportunities quietly fall through the cracks.</p></div>
          </div>
        </section>

        <section id="s-workflow" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>fabQuote</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">Measurement to quotation, in one workflow</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Set up once</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Design &amp; cost</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Cutting plan</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Send the quote</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STAGE 01 / 04</div><div className="pipe-detail__title">Set up your shop's catalog</div><p className="pipe-detail__body">Enter your profile catalog, your own cutting formulas per window type, and your rate card — once. This is your shop's real, calibrated know-how, captured in the system instead of a notebook.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Profile catalog — bars you actually stock</span></li><li><span className="ok">✓</span><span>Your own cutting formulas, not a fixed template</span></li><li><span className="ok">✓</span><span>Rate card — every edit versioned, never rewrites an old quote</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ fabsuite setup --catalog</div><div className="t2">✓ profiles added  ✓ systems calibrated  ✓ rates saved</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STAGE 02 / 04</div><div className="pipe-detail__title">Design &amp; cost every opening</div><p className="pipe-detail__body">Add a plain window, a composite multi-section frame, a folding door, a curtain-wall bay, or frameless glass — each gets a real to-scale technical drawing automatically, and live costing down to the paisa as you build it.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>All 5 opening types, one designer</span></li><li><span className="ok">✓</span><span>Automatic technical drawing, no manual sketching</span></li><li><span className="ok">✓</span><span>Profile, accessory, glazing &amp; finish cost — live</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ fabsuite opening --add</div><div className="t2">✓ drawing generated  ✓ cost computed live</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STAGE 03 / 04</div><div className="pipe-detail__title">See the cutting plan before you cut</div><p className="pipe-detail__body">FabSuite bin-packs every required cut length against your real stock bar length — honoring the saw's kerf and end-trim — grouped by profile code across the whole project, so you see exactly how much material gets wasted before a single bar is cut.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Optimized against your real stock bar length</span></li><li><span className="ok">✓</span><span>Planned across the entire project, not window by window</span></li><li><span className="ok">✓</span><span>Wastage % shown per profile and for the whole job</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ fabsuite cutting --plan</div><div className="t2">✓ bars optimized  ✓ wastage calculated</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STAGE 04 / 04</div><div className="pipe-detail__title">Send a professional quotation</div><p className="pipe-detail__body">One click produces a shop-branded customer PDF — cover letter, per-window technical drawing, itemized pricing, terms, and a signature page — plus internal-only reports for the owner: cutting schedule, bill of quantities, and cost breakdowns.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Shop-branded, professional customer PDF</span></li><li><span className="ok">✓</span><span>Internal reports kept away from staff</span></li><li><span className="ok">✓</span><span>Finalized numbers frozen — a later rate change never moves an old quote</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ fabsuite quote --generate</div><div className="t2">✓ PDF generated  ✓ reports ready</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>

          <div className="panel-note" style={{"marginTop":"34px"}}>
            <div className="panel-note__lbl">OPTIONAL · RUN THE SALES PIPELINE TOO</div>
            <p style={{"marginTop":"12px","fontSize":"14.5px",color:"var(--text-2)"}}>Capture a lead (phone, WhatsApp, walk-in, referral), log site-visit measurements, and track it through New Inquiry → Contacted → Site Visit → Quotation Sent → Negotiation → Won/Lost — with automatic follow-up reminders so nothing is forgotten. Convert a won lead straight into a project with one click.</p>
          </div>
        </section>

        <section id="s-screens" className="section reveal">
          <p className="eyebrow">// what your team actually sees</p>
          <h2 className="title mono">Inside FabSuite</h2>
          <p className="subtitle">Real screens from the live product — not mockups.</p>
          <div className="grid grid-2 stagger">
            <div className="shot">
              <div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">Window &amp; Opening Designer</span></div>
              <img className="shot__img" src="/assets/fabsuite-window-designer.png" alt="FabSuite's window and opening designer, showing a live to-scale technical drawing as a folding door is configured" width="1907" height="928" loading="lazy" decoding="async" />
              <p className="shot__caption">Every opening gets a real, to-scale technical drawing automatically — no manual sketching.</p>
            </div>
            <div className="shot">
              <div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">Cost Summary</span></div>
              <img className="shot__img" src="/assets/fabsuite-cost-summary.png" alt="FabSuite's cost summary screen, showing profiles, accessories, glazing, labour, overhead, margin, and GST itemized to the paisa" width="1910" height="948" loading="lazy" decoding="async" />
              <p className="shot__caption">Live, to-the-paisa costing — every category itemized, nothing hidden in a single total.</p>
            </div>
            <div className="shot">
              <div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">Cutting Plan</span></div>
              <img className="shot__img" src="/assets/fabsuite-cutting-plan.png" alt="FabSuite's cutting plan screen, showing bin-packed aluminium bars per profile code with a wastage percentage for each" width="1899" height="949" loading="lazy" decoding="async" />
              <p className="shot__caption">Wastage you can actually see, bar by bar, before a single cut is made.</p>
            </div>
            <div className="shot">
              <div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">Documents</span></div>
              <img className="shot__img" src="/assets/fabsuite-documents.png" alt="FabSuite's documents screen, showing a downloadable customer quotation PDF and a list of internal-only reports" width="1900" height="947" loading="lazy" decoding="async" />
              <p className="shot__caption">A shop-branded customer PDF, plus internal reports kept away from staff.</p>
            </div>
          </div>
        </section>

        <section id="s-coverage" className="section reveal">
          <p className="eyebrow">// built for every job you take — not just plain windows</p>
          <h2 className="title mono">One engine, every opening type</h2>
          <p className="subtitle">Most costing tools handle a plain sliding window and stop there. FabSuite costs and cutting-plans all five, through the same engine.</p>
          <div className="grid grid-3 stagger">
            <div className="cap cap--top"><div className="cap__title">Plain windows &amp; doors</div><p className="cap__body">Sliding, casement, tilt &amp; turn, and fixed lights — any of your shop's own systems.</p></div>
            <div className="cap cap--teal"><div className="cap__title">Composite / multi-section</div><p className="cap__body">One outer frame, several sections side by side — a fixed light next to a casement, or a 3-part "Chicago" window.</p></div>
            <div className="cap cap--yellow"><div className="cap__title">Folding / bi-fold doors</div><p className="cap__body">2 to 12 leaves, with correct per-junction hinge-stile and per-leaf hardware costing.</p></div>
            <div className="cap cap--green"><div className="cap__title">Curtain-wall facades</div><p className="cap__body">A mullion/transom grid of any size — cells individually marked vision glass, spandrel, vent, or infill panel.</p></div>
            <div className="cap cap--top"><div className="cap__title">Frameless glass doors</div><p className="cap__body">Glass and patch fittings, no aluminium frame to cut — costed and drawn the same way as everything else.</p></div>
          </div>
        </section>

        <section id="s-features" className="section reveal">
          <p className="eyebrow">const features = [ <span className="c">// full feature tour by module</span></p>
          <h2 className="title mono">Everything FabSuite runs for you</h2>

          <div style={{"marginTop":"30px"}}>
            <span className="badge" style={{"color":"var(--teal)"}}>CATALOG &amp; SYSTEMS</span>
            <div className="grid grid-3 stagger" style={{"marginTop":"16px"}}>
              <div className="svc"><div className="svc__num">01</div><div className="svc__title">Your own cutting formulas</div><p className="svc__body">Cutting-formula templates per window/door type, with a live preview against a test size before you save.</p><div className="svc__foot"><span>systems.ts</span></div></div>
              <div className="svc"><div className="svc__num">02</div><div className="svc__title">Calibration mode</div><p className="svc__body">Enter a real historical job's known-correct cut lengths and see exactly how far off the current formula is — with the fix applied inline.</p><div className="svc__foot"><span>calibrate.ts</span></div></div>
              <div className="svc"><div className="svc__num">03</div><div className="svc__title">Accessory &amp; hardware packages</div><p className="svc__body">Flat, per-sq.ft, or per-leaf quantities per system, with brand/colour labels that print on the customer quote.</p><div className="svc__foot"><span>hardware.ts</span></div></div>
            </div>
          </div>

          <div style={{"marginTop":"36px"}}>
            <span className="badge" style={{"color":"var(--yellow)"}}>COSTING ENGINE</span>
            <div className="grid grid-3 stagger" style={{"marginTop":"16px"}}>
              <div className="svc"><div className="svc__num">01</div><div className="svc__title">Live, to-the-paisa costing</div><p className="svc__body">Profile, accessory, glazing, finish, and motorised-automation cost — computed the same way, every time.</p><div className="svc__foot"><span>cost.ts</span></div></div>
              <div className="svc"><div className="svc__num">02</div><div className="svc__title">Fair overhead allocation</div><p className="svc__body">Powder-coating, labour, wastage allowance, and any flat project charge spread fairly across every opening by area.</p><div className="svc__foot"><span>overhead.ts</span></div></div>
              <div className="svc"><div className="svc__num">03</div><div className="svc__title">Frozen, final numbers</div><p className="svc__body">Once a project is finalized, the price is locked — a later rate-card change never silently moves a customer's quote.</p><div className="svc__foot"><span>freeze.ts</span></div></div>
            </div>
          </div>

          <div style={{"marginTop":"36px"}}>
            <span className="badge" style={{"color":"var(--pink)"}}>CUTTING OPTIMIZATION</span>
            <div className="grid grid-3 stagger" style={{"marginTop":"16px"}}>
              <div className="svc"><div className="svc__num">01</div><div className="svc__title">Bin-packed cutting plan</div><p className="svc__body">Optimized against your real stock bar length, honoring saw kerf and end-trim allowance.</p><div className="svc__foot"><span>binpack.ts</span></div></div>
              <div className="svc"><div className="svc__num">02</div><div className="svc__title">Whole-project planning</div><p className="svc__body">Grouped by profile code across the entire project, not window by window — where the real efficiency gain comes from.</p><div className="svc__foot"><span>plan.ts</span></div></div>
              <div className="svc"><div className="svc__num">03</div><div className="svc__title">Wastage you can actually see</div><p className="svc__body">A clear wastage % per profile and for the whole project — and anything too long to fit any bar is flagged, never silently mis-packed.</p><div className="svc__foot"><span>wastage.ts</span></div></div>
            </div>
          </div>

          <div style={{"marginTop":"36px"}}>
            <span className="badge" style={{"color":"var(--green)"}}>QUOTATIONS &amp; REPORTS</span>
            <div className="grid grid-3 stagger" style={{"marginTop":"16px"}}>
              <div className="svc"><div className="svc__num">01</div><div className="svc__title">Shop-branded customer PDF</div><p className="svc__body">Cover letter, per-window technical drawing, itemized pricing, terms &amp; conditions, and a signature page.</p><div className="svc__foot"><span>pdf.ts</span></div></div>
              <div className="svc"><div className="svc__num">02</div><div className="svc__title">Internal-only reports</div><p className="svc__body">Cost summary, cutting schedule, bill of quantities, and category cost breakdowns — kept away from staff who shouldn't see margins.</p><div className="svc__foot"><span>reports.ts</span></div></div>
              <div className="svc"><div className="svc__num">03</div><div className="svc__title">Completeness check</div><p className="svc__body">Catches anything missing — a section with no glass, an operable sash with no hardware — before a project can be locked.</p><div className="svc__foot"><span>check.ts</span></div></div>
            </div>
          </div>

          <div style={{"marginTop":"36px"}}>
            <span className="badge" style={{"color":"var(--teal)"}}>SALES PIPELINE (OPTIONAL)</span>
            <div className="grid grid-3 stagger" style={{"marginTop":"16px"}}>
              <div className="svc"><div className="svc__num">01</div><div className="svc__title">Lead capture &amp; stages</div><p className="svc__body">Phone, WhatsApp, walk-in, or referral — tracked through New Inquiry → Contacted → Site Visit → Quotation Sent → Negotiation → Won/Lost.</p><div className="svc__foot"><span>leads.ts</span></div></div>
              <div className="svc"><div className="svc__num">02</div><div className="svc__title">Automatic follow-up reminders</div><p className="svc__body">A two-touch schedule after a quote goes out, tied to your own quote-validity period — plus a "My Follow-ups" view so nothing slips.</p><div className="svc__foot"><span>reminders.ts</span></div></div>
              <div className="svc"><div className="svc__num">03</div><div className="svc__title">Owner-only analytics</div><p className="svc__body">Revenue trend, sales funnel, product mix, margin composition, and repeat-customer rate — from real finalized-project data.</p><div className="svc__foot"><span>analytics.ts</span></div></div>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// two roles, one workspace</p>
          <h2 className="title mono">Your margins stay yours</h2>
          <div className="grid grid-2 stagger">
            <div className="cap"><div className="cap__title">Owner</div><p className="cap__body">Full access — rate card, margins, team, billing, and every internal cost report. Sees the whole business, not just the jobs.</p></div>
            <div className="cap"><div className="cap__title">Staff</div><p className="cap__body">Builds and manages projects, leads, and quotes freely — but never sees the shop's internal cost rates, margins, or billing.</p></div>
          </div>
        </section>

        <section id="s-pricing" className="section reveal">
          <p className="eyebrow">const pricing = [ <span className="c">// one plan, everything included</span></p>
          <h2 className="title mono">One plan. No tiers to navigate.</h2>
          <p className="subtitle">Every feature on this page is included from day one — there's no upsell ladder waiting for you later.</p>
          <div className="grid grid-3 stagger">
            <div className="price is-featured" style={{"gridColumn":"span 1"}}>
              <span className="price__badge">EVERYTHING INCLUDED</span>
              <div className="price__head"><div className="price__kind" style={{"color":"var(--pink)"}}>FABSUITE</div><div className="price__title">₹999 / month</div><p className="price__body">Flat. One shop, one price — full catalog, costing engine, cutting optimization, quotations, and the optional sales pipeline.</p><div className="price__amt"><b>30 days</b><span>free trial, no card required</span></div></div>
              <ul className="price__list"><li><span className="ok">✓</span><span>Unlimited profiles, systems &amp; rate cards</span></li><li><span className="ok">✓</span><span>All 5 opening types, one engine</span></li><li><span className="ok">✓</span><span>Live costing &amp; cutting optimization</span></li><li><span className="ok">✓</span><span>Branded PDF quotations &amp; internal reports</span></li><li><span className="ok">✓</span><span>Sales pipeline &amp; owner-only analytics</span></li><li><span className="ok">✓</span><span>Owner + staff roles, team invites</span></li></ul>
              <div className="price__foot"><a className="price__cta" href="#trial" data-scroll="s-hero" style={{"display":"block","textAlign":"center","background":"var(--pink)","color":"var(--bg)"}}>Start free trial ↗</a></div>
            </div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">TRUST &amp; SECURITY</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Your shop's data lives in its own fully isolated workspace</span></div><div><span className="plus">+</span><span>Server-side validation on every action</span></div><div><span className="plus">+</span><span>Every sensitive action is audit-logged</span></div><div><span className="plus">+</span><span>Billing handled securely through Razorpay</span></div><div><span className="plus">+</span><span>Cancel any time</span></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// fabsuite.faq.md</p>
          <h2 className="title mono">Before you write in</h2>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Do I need to install anything?<span className="sign">[+]</span></button><div className="faq__a"><p>No — FabSuite is a web app. It works from a browser on a desktop in the office or a phone on the shop floor. Nothing to install, always the latest version.</p></div></div>
            <div className="faq__item"><button className="faq__q">What if I already have my own cutting formulas?<span className="sign">[+]</span></button><div className="faq__a"><p>That's exactly how it's built to work. FabSuite doesn't assume how a shop cuts — you enter your own formulas per window type once, and calibration mode lets you check them against a real historical job before you rely on them.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can my staff use it without seeing my margins?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. Staff accounts can build and manage projects, leads, and quotes, but never see your rate card, margins, or billing — that's Owner-only.</p></div></div>
            <div className="faq__item"><button className="faq__q">What happens to a quote if my rates change later?<span className="sign">[+]</span></button><div className="faq__a"><p>Nothing — a finalized project's numbers are frozen the moment you lock it. Editing your rate card later never retroactively changes a price you already quoted.</p></div></div>
            <div className="faq__item"><button className="faq__q">Is my data safe from other shops using FabSuite?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — every shop gets its own fully isolated workspace. There's no cross-shop visibility, ever.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <Link className="svc" href="/crm-erp-systems/"><div className="svc__title" style={{"fontSize":"16px"}}>ERP Systems</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Custom business systems built to fit how you actually operate.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/custom-software-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Custom Software</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Bespoke tools when nothing off-the-shelf fits your workflow.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/hire-dedicated-resource/"><div className="svc__title" style={{"fontSize":"16px"}}>Hire Dedicated Resource</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Senior engineers embedded with your team, on demand.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/products/"><div className="svc__title" style={{"fontSize":"16px"}}>All products</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Browse the full catalogue of ready-made products.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./fabsuite --start-trial<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Quote your next job in minutes</h2>
          <p className="cta__lead">Start your 30-day free trial — no credit card required. Set up your catalog once, and every job after that gets accurate costing and a cutting plan automatically.</p>
          <div className="cta__btns">
            <a className="btn btn--primary" href="#trial" data-scroll="s-hero">▶ Start your 30-day free trial</a>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> 30-day free trial</span><span><span className="g">●</span> No card required</span><span><span className="g">●</span> Cancel any time</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">fabsuite.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
