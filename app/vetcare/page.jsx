import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "VetCare — Veterinary Practice Management (South Africa) | Digital Web Weaver" },
  description: "VetCare: appointments, patient records, stock, billing, and client WhatsApp in one affordable system — WhatsApp-first, SARS-ready, loadshedding-proof for South African vets.",
  alternates: { canonical: "/vetcare/" },
  openGraph: { title: "VetCare — Veterinary Practice Management (South Africa) | Digital Web Weaver", description: "VetCare: appointments, patient records, stock, billing, and client WhatsApp in one affordable system — WhatsApp-first, SARS-ready, loadshedding-proof for South African vets.", url: "/vetcare/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-features" data-target="s-features" title="Features">⚙</button>
      <button className="activitybar__btn" data-scroll="s-how" data-target="s-how" title="How it works">❯</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="South Africa">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> vetcare.ts</button>
        <button className="tab" data-scroll="s-features" data-target="s-features"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> features.ts</button>
        <button className="tab" data-scroll="s-how" data-target="s-how"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> how-it-works.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// vetcare.ts · veterinary practice management · South Africa</p>
            <span className="badge">VETERINARY PRACTICE</span>
            <h1 className="hero__h1">Built for <span className="pink">South African</span> vets — <span className="teal">WhatsApp-first</span></h1>
            <p className="hero__lead">Appointments, patient records, stock, billing, and client WhatsApp — in one affordable system designed for South African veterinary clinics. WhatsApp-first, SARS-ready, loadshedding-proof.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book a demo</a>
              <a className="btn btn--ghost" href="#s-features" data-scroll="s-features">$ view --features</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>4–6 wks</b><span>to go live</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>219</b><span>automated tests</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>100%</b><span>offline-capable</span></div>
            </div>
          </div>
          <div className="formcard" id="demo">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">demo.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE PRODUCT DEMO</p>
              <p className="form__title">See VetCare in action</p>
              <p className="form__lead">Book a 30-minute demo — we'll walk through the fit for your practice and give you a fixed timeline.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME</label><input className="input" name="name" placeholder="Your name" /></div>
                <div className="field"><label className="label">WORK EMAIL</label><input className="input" name="email" type="email" placeholder="you@practice.co.za" /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">PRACTICE TYPE</label>
                <select className="select" name="type"><option>Companion animal practice</option><option>Exotic animal practice</option><option>Mixed practice</option><option>Other</option></select>
                </div>
                <div className="field"><label className="label">NUMBER OF VETS</label>
                <select className="select" name="size"><option>1–2</option><option>3–5</option><option>6–10</option><option>10+</option></select>
                </div>
              </div>
              <button className="form__submit" type="submit">Book my demo ↗</button>
              <p className="form__micro">Free demo · No commitment</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww demo --book vetcare</div>
              <div className="s1">✓ request received<br />✓ best-fit setup identified<br />✓ demo slot being arranged</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll be in touch within 24 hours to schedule.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>4–6 wks</div><div className="lbl">TO_GO_LIVE</div><div className="sub">▲ demo → live platform</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>219</div><div className="lbl">AUTOMATED_TESTS</div><div className="sub">▲ battle-tested platform</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>100%</div><div className="lbl">OFFLINE_CAPABLE</div><div className="sub">▲ loadshedding-proof PWA</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">TRUSTED_CLIENTS</div><div className="sub">▲ across South Africa</div></div>
        </section>

        <section id="s-features" className="section reveal">
          <p className="eyebrow">const features = [ <span className="c">// built for South African vet practices</span></p>
          <h2 className="title mono">Everything your practice runs on</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Appointments &amp; Scheduling</div><p className="svc__body">Calendar and list views per vet, real-time availability that prevents double-booking, a public online booking link, and automatic WhatsApp confirmations.</p><div className="svc__foot"><span>appointments.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Patient Records (EMR)</div><p className="svc__body">Owner and pet profiles with photos, allergy and chronic-condition flags, SOAP consultation notes, and vaccination records with auto-calculated due dates.</p><div className="svc__foot"><span>emr.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">SARS-Compliant Billing</div><p className="svc__body">Auto-generated invoices with proper 15% VAT calculation, sequential invoice numbers, SnapScan QR codes, and full payment tracking.</p><div className="svc__foot"><span>billing.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">WhatsApp-Native Communication</div><p className="svc__body">A WhatsApp gateway with SMS fallback, editable message templates, automated reminders, and client segment broadcasting — with quiet hours enforced.</p><div className="svc__foot"><span>whatsapp.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Inventory &amp; Stock Control</div><p className="svc__body">Product catalogue with suppliers and batch numbers, FIFO dispensing, expiry tracking, and low-stock alerts with reorder levels.</p><div className="svc__foot"><span>inventory.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Dashboards &amp; Reports</div><p className="svc__body">Role-aware dashboards with live KPIs — daily revenue, active patients, low-stock counts — plus exportable reports in PDF and Excel.</p><div className="svc__foot"><span>reports.ts</span></div></div>
          </div>
        </section>

        <section id="s-how" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>vetcareRollout</span>() &#123; <span className="c">// demo to live in 4–6 weeks</span></p>
          <h2 className="title mono">From demo to live in 4–6 weeks</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Discovery</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Configure &amp; brand</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Migrate &amp; train</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Launch</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04 · ◷ week 1</div><div className="pipe-detail__title">Discovery</div><p className="pipe-detail__body">We map your appointment, stock, and billing workflow, and confirm your WhatsApp and SnapScan setup requirements.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Practice workflow mapped</span></li><li><span className="ok">✓</span><span>WhatsApp &amp; SnapScan requirements confirmed</span></li><li><span className="ok">✓</span><span>Rollout plan agreed</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww discover --practice</div><div className="t2">✓ workflow mapped  ✓ integrations confirmed</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04 · ◷ weeks 2–3</div><div className="pipe-detail__title">Configure &amp; brand</div><p className="pipe-detail__body">VetCare is branded to your practice — SARS-compliant billing and SnapScan QR set up, WhatsApp and SMS connected, stock catalogue loaded.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Practice branding applied</span></li><li><span className="ok">✓</span><span>SARS billing &amp; SnapScan configured</span></li><li><span className="ok">✓</span><span>WhatsApp + SMS connected</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww configure --brand</div><div className="t2">✓ branded  ✓ billing configured  ✓ WhatsApp connected</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04 · ◷ weeks 3–5</div><div className="pipe-detail__title">Migrate &amp; train</div><p className="pipe-detail__body">Owner, pet, and stock records are migrated, and your staff are trained on the platform, including offline use during loadshedding.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Patient &amp; stock records migrated</span></li><li><span className="ok">✓</span><span>Staff onboarding &amp; training</span></li><li><span className="ok">✓</span><span>Offline / PWA use covered</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww migrate --train</div><div className="t2">✓ records migrated  ✓ staff trained</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04 · ◷ weeks 4–6</div><div className="pipe-detail__title">Launch &amp; support</div><p className="pipe-detail__body">VetCare goes live on standard hosting, with 30 days of post-launch support to iron out any rollout questions.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Live on standard hosting</span></li><li><span className="ok">✓</span><span>30 days post-launch support</span></li><li><span className="ok">✓</span><span>Full source-code handover</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww launch --practice</div><div className="t2">✓ live  ✓ support active</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">WHATS_INCLUDED</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Role-aware dashboards</span></div><div><span className="plus">+</span><span>Branded professional PDF documents</span></div><div><span className="plus">+</span><span>WhatsApp + SMS setup</span></div><div><span className="plus">+</span><span>SARS-compliant billing &amp; SnapScan QR</span></div><div><span className="plus">+</span><span>Stock catalogue with FIFO dispensing</span></div><div><span className="plus">+</span><span>Staff onboarding &amp; training</span></div><div><span className="plus">+</span><span>30 days post-launch support</span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// what vets say</p>
          <div className="quote" style={{"maxWidth":"640px","margin":"0 auto"}}>
            <div className="stars">★★★★★</div>
            <p>Vaccination follow-ups used to depend on someone remembering to call. Now the reminders go out automatically on WhatsApp — and we're seeing pets come back for boosters who would have otherwise been missed.</p>
            <div className="quote__who"><div className="quote__avatar">FE</div><div><div className="quote__name">Dr. Farah Engineer</div><div className="quote__role">Owner · PawCare Veterinary Hospital</div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// vetcare.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">What happens during loadshedding?<span className="sign">[+]</span></button><div className="faq__a"><p>Your data remains safe. VetCare is a full PWA — it installs like a native app, reads cached records offline, and queues every change until you're back online.</p></div></div>
            <div className="faq__item"><button className="faq__q">Is billing SARS-compliant?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — VetCare generates proper 15% VAT invoices with sequential numbers and SnapScan QR codes.</p></div></div>
            <div className="faq__item"><button className="faq__q">Does it support WhatsApp?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — with SMS fallback, editable message templates, automated reminders, and quiet-hours enforcement.</p></div></div>
            <div className="faq__item"><button className="faq__q">How is data kept secure?<span className="sign">[+]</span></button><div className="faq__a"><p>Clinic-level database isolation, 6 roles with 43 permissions, and full audit logging.</p></div></div>
            <div className="faq__item"><button className="faq__q">What infrastructure is required?<span className="sign">[+]</span></button><div className="faq__a"><p>VetCare runs on standard shared hosting — no expensive cloud subscriptions required.</p></div></div>
            <div className="faq__item"><button className="faq__q">Is it mobile compatible?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — VetCare is mobile-ready and installable as an app on Android and iOS devices.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// related products</p>
          <div className="grid grid-4">
            <Link className="svc" href="/clinicflow/"><div className="svc__title" style={{"fontSize":"16px"}}>ClinicFlow</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Clinic management system for doctors — scheduling, EMR, and billing.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/chatflow-ai/"><div className="svc__title" style={{"fontSize":"16px"}}>ChatFlow AI</div><p className="svc__body" style={{"fontSize":"13.5px"}}>WhatsApp automation agent for enquiries, bookings, and follow-ups.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/clinicvoice-ai/"><div className="svc__title" style={{"fontSize":"16px"}}>ClinicVoice AI</div><p className="svc__body" style={{"fontSize":"13.5px"}}>AI voice agent for appointment booking, reminders, and follow-up calls.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/products/"><div className="svc__title" style={{"fontSize":"16px"}}>Browse all products</div><p className="svc__body" style={{"fontSize":"13.5px"}}>See the full catalog of ready-made software products.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./demo --book vetcare<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to run your practice on one system?</h2>
          <p className="cta__lead">Book a 30-minute demo. We'll walk you through VetCare, answer your questions, and give you a fixed launch timeline.</p>
          <div className="cta__btns">
            <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book a demo</a>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free demo</span><span><span className="g">●</span> 4–6 week launch</span><span><span className="g">●</span> 30 days post-launch support</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">vetcare.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
