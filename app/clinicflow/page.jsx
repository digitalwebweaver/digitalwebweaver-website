import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { softwareApplicationSchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "ClinicFlow — Clinic Management System | Digital Web Weaver" },
  description: "ClinicFlow brings appointment scheduling, EMR, billing, pharmacy, lab orders, and patient communication into one branded platform. Live in 5–6 weeks.",
  alternates: { canonical: "/clinicflow/" },
  openGraph: { title: "ClinicFlow — Clinic Management System | Digital Web Weaver", description: "ClinicFlow brings appointment scheduling, EMR, billing, pharmacy, lab orders, and patient communication into one branded platform. Live in 5–6 weeks.", url: "/clinicflow/", type: "website" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={softwareApplicationSchema({ name: "ClinicFlow", description: "ClinicFlow brings appointment scheduling, EMR, billing, pharmacy, lab orders, and patient communication into one branded platform. Live in 5–6 weeks.", href: "/clinicflow/" })} />
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-features" data-target="s-features" title="Features">⚙</button>
      <button className="activitybar__btn" data-scroll="s-how" data-target="s-how" title="How it works">❯</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> clinicflow.ts</button>
        <button className="tab" data-scroll="s-features" data-target="s-features"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> features.ts</button>
        <button className="tab" data-scroll="s-how" data-target="s-how"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> how-it-works.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// clinicflow.ts · clinic management system · SaaS product</p>
            <span className="badge">CLINIC MANAGEMENT</span>
            <h1 className="hero__h1">Run your clinic on <span className="pink">one system</span>, not <span className="teal">five</span></h1>
            <p className="hero__lead">ClinicFlow brings appointment scheduling, electronic medical records, billing, pharmacy, lab orders, and patient communication into one platform — so your front desk, doctors, and back office finally work from the same data.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book a demo</a>
              <a className="btn btn--ghost" href="#s-features" data-scroll="s-features">$ view --features</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>5–6 wks</b><span>to go live</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>1</b><span>record per patient</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>150+</b><span>clients worldwide</span></div>
            </div>
          </div>
          <div className="formcard" id="demo">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">demo.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE PRODUCT DEMO</p>
              <p className="form__title">See ClinicFlow in action</p>
              <p className="form__lead">Book a 30-minute demo — we'll walk through the fit for your clinic and give you a fixed timeline.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME</label><input className="input" name="name" placeholder="Your name" /></div>
                <div className="field"><label className="label">WORK EMAIL</label><input className="input" name="email" type="email" placeholder="you@clinic.com" /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">CLINIC TYPE</label>
                <select className="select" name="type"><option>Multi-specialty clinic</option><option>Independent practitioner</option><option>Diagnostic / polyclinic chain</option><option>Speciality practice</option><option>Other</option></select>
                </div>
                <div className="field"><label className="label">NUMBER OF DOCTORS</label>
                <select className="select" name="size"><option>1–2</option><option>3–10</option><option>11–30</option><option>30+</option></select>
                </div>
              </div>
              <button className="form__submit" type="submit">Book my demo ↗</button>
              <p className="form__micro">Free demo · No commitment</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww demo --book clinicflow</div>
              <div className="s1">✓ request received<br />✓ best-fit setup identified<br />✓ demo slot being arranged</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll be in touch within 24 hours to schedule.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>5–6 wks</div><div className="lbl">TO_GO_LIVE</div><div className="sub">▲ demo → live platform</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>1</div><div className="lbl">RECORD_PER_PATIENT</div><div className="sub">▲ every doctor, same data</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>100%</div><div className="lbl">BRANDED</div><div className="sub">▲ your clinic's identity</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
        </section>

        <section id="s-features" className="section reveal">
          <p className="eyebrow">const features = [ <span className="c">// what ClinicFlow replaces</span></p>
          <h2 className="title mono">One system for the whole clinic</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Appointment Scheduling</div><p className="svc__body">Online and walk-in booking with doctor-wise calendars, automated reminders, and waitlist management.</p><div className="svc__foot"><span>appointments.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Electronic Medical Records</div><p className="svc__body">Structured patient histories, prescriptions, vitals, and visit notes — accessible securely across visits and doctors.</p><div className="svc__foot"><span>emr.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Billing &amp; Insurance Claims</div><p className="svc__body">Generate invoices, track payments, apply package pricing, and manage insurance claim documentation.</p><div className="svc__foot"><span>billing.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Pharmacy &amp; Inventory</div><p className="svc__body">Manage in-house pharmacy stock, dispense against prescriptions, and get low-stock alerts automatically.</p><div className="svc__foot"><span>pharmacy.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Lab Order Integration</div><p className="svc__body">Order tests, track results, and attach reports directly to a patient's record for the consulting doctor.</p><div className="svc__foot"><span>labs.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Patient App &amp; Reminders</div><p className="svc__body">Patients book appointments, view prescriptions and reports, and get visit reminders from a branded app.</p><div className="svc__foot"><span>patient-app.ts</span></div></div>
          </div>
        </section>

        <section id="s-how" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>clinicflowRollout</span>() &#123; <span className="c">// demo to live in 5–6 weeks</span></p>
          <h2 className="title mono">From demo to live in 5–6 weeks</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Map workflow</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Configure &amp; brand</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Migrate records</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Train &amp; launch</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04 · ◷ week 1</div><div className="pipe-detail__title">Map the clinic's workflow</div><p className="pipe-detail__body">We map your clinic's existing patient flow — from front desk to consultation to billing — before any configuration begins.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Patient flow mapped end to end</span></li><li><span className="ok">✓</span><span>Departments &amp; roles identified</span></li><li><span className="ok">✓</span><span>Rollout plan confirmed</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww discover --clinic</div><div className="t2">✓ flow mapped  ✓ roles identified  ✓ plan confirmed</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04 · ◷ weeks 2–3</div><div className="pipe-detail__title">Configure &amp; brand</div><p className="pipe-detail__body">ClinicFlow is configured and branded to your clinic — departments, doctor calendars, billing rules, and pharmacy catalogue set up.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Clinic branding applied</span></li><li><span className="ok">✓</span><span>Doctor calendars configured</span></li><li><span className="ok">✓</span><span>Billing &amp; pharmacy set up</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww configure --brand</div><div className="t2">✓ branded  ✓ calendars set  ✓ billing configured</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04 · ◷ weeks 3–4</div><div className="pipe-detail__title">Migrate patient records</div><p className="pipe-detail__body">Existing patient records are migrated into ClinicFlow so every doctor and department starts from the same data.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Patient records migrated</span></li><li><span className="ok">✓</span><span>Data verified against source</span></li><li><span className="ok">✓</span><span>Access controls applied</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww migrate --records</div><div className="t2">✓ records migrated  ✓ verified  ✓ access controlled</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04 · ◷ weeks 5–6</div><div className="pipe-detail__title">Train &amp; launch</div><p className="pipe-detail__body">Your team is trained and ClinicFlow goes live, backed by 30 days of post-launch support.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Team trained end to end</span></li><li><span className="ok">✓</span><span>Live on your domain</span></li><li><span className="ok">✓</span><span>30 days post-launch support</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww launch --clinic</div><div className="t2">✓ team trained  ✓ live  ✓ support active</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">WHY_CLINICS_SWITCH</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>One record, every department</span></div><div><span className="plus">+</span><span>Looks like your clinic</span></div><div><span className="plus">+</span><span>Decisions backed by real data</span></div><div><span className="plus">+</span><span>Access-controlled with audit trails</span></div><div><span className="plus">+</span><span>30 days post-launch support</span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// what clinics say</p>
          <div className="quote" style={{"maxWidth":"640px","margin":"0 auto"}}>
            <div className="stars">★★★★★</div>
            <p>Our biggest pain was patients repeating their history every visit because records were scattered across paper files and an old billing tool. With ClinicFlow, every doctor sees the same record — and our front desk finally isn't drowning in paperwork.</p>
            <div className="quote__who"><div className="quote__avatar">SJ</div><div><div className="quote__name">Dr. Sameer Joshi</div><div className="quote__role">Medical Director · Wellpoint Multi-Speciality Clinic</div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// clinicflow.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Does it support multiple doctors and specialities?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — ClinicFlow supports multiple doctors and specialities, with doctor-wise calendars and records built for multi-specialty clinics and polyclinic chains.</p></div></div>
            <div className="faq__item"><button className="faq__q">How are existing patient records migrated?<span className="sign">[+]</span></button><div className="faq__a"><p>Existing patient records are migrated as part of the implementation process, before your team is trained and the system goes live.</p></div></div>
            <div className="faq__item"><button className="faq__q">Does it support insurance billing?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — ClinicFlow includes insurance claim documentation alongside invoicing and payment tracking.</p></div></div>
            <div className="faq__item"><button className="faq__q">Is patient data stored securely?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — ClinicFlow is built with patient data in mind, with access controls and full audit trails.</p></div></div>
            <div className="faq__item"><button className="faq__q">What is the timeline to go live?<span className="sign">[+]</span></button><div className="faq__a"><p>Most clinics go live within 5–6 weeks, including configuration, migration, and training.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// related products</p>
          <div className="grid grid-4">
            <Link className="svc" href="/glowdesk/"><div className="svc__title" style={{"fontSize":"16px"}}>GlowDesk</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Software for aesthetic and cosmetic clinics — bookings and treatment plans.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/vetcare/"><div className="svc__title" style={{"fontSize":"16px"}}>VetCare</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Veterinary practice management — appointments, records, and billing.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/salonbook/"><div className="svc__title" style={{"fontSize":"16px"}}>SalonBook</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Salon management system — booking, staff scheduling, and billing.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/products/"><div className="svc__title" style={{"fontSize":"16px"}}>Browse all products</div><p className="svc__body" style={{"fontSize":"13.5px"}}>See the full catalog of ready-made software products.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./demo --book clinicflow<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to run your clinic on one system?</h2>
          <p className="cta__lead">Book a 30-minute demo. We'll walk you through ClinicFlow, answer your questions, and give you a fixed launch timeline.</p>
          <div className="cta__btns">
            <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book a demo</a>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free demo</span><span><span className="g">●</span> 5–6 week launch</span><span><span className="g">●</span> 30 days post-launch support</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">clinicflow.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
