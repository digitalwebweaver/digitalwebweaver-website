import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "TeleCare — Telemedicine Platform | Digital Web Weaver" },
  description: "TeleCare brings video consultations, e-prescriptions, patient records, appointment scheduling, and payments into one branded telemedicine platform. Live in 5–7 weeks.",
  alternates: { canonical: "/telecare/" },
  openGraph: { title: "TeleCare — Telemedicine Platform | Digital Web Weaver", description: "TeleCare brings video consultations, e-prescriptions, patient records, appointment scheduling, and payments into one branded telemedicine platform. Live in 5–7 weeks.", url: "/telecare/", type: "website" }
};

export default function Page() {
  return (
    <>
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
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> telecare.ts</button>
        <button className="tab" data-scroll="s-features" data-target="s-features"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> features.ts</button>
        <button className="tab" data-scroll="s-how" data-target="s-how"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> how-it-works.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// telecare.ts · telemedicine platform · branded</p>
            <span className="badge">TELECARE</span>
            <h1 className="hero__h1">Bring your clinic <span className="pink">online</span> without losing the <span className="teal">personal touch</span></h1>
            <p className="hero__lead">TeleCare brings video consultations, e-prescriptions, patient records, appointment scheduling, and payments into one branded telemedicine platform — so virtual visits feel like an extension of your clinic, not a separate app.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book my demo</a>
              <a className="btn btn--ghost" href="#s-features" data-scroll="s-features">$ view --features</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>5–7 wks</b><span>to go live</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>100%</b><span>branded platform</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>150+</b><span>clients worldwide</span></div>
            </div>
          </div>
          <div className="formcard" id="demo">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">demo.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE DEMO</p>
              <p className="form__title">See TeleCare in action</p>
              <p className="form__lead">Book a 30-minute walkthrough — we'll map it to your clinic and give you a launch timeline.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME</label><input className="input" name="name" placeholder="Your name" /></div>
                <div className="field"><label className="label">WORK EMAIL</label><input className="input" name="email" type="email" placeholder="you@clinic.com" /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">PRACTICE TYPE</label>
                <select className="select" name="type"><option>Multi-specialty clinic / hospital</option><option>Independent practice</option><option>Corporate / insurance health program</option><option>Other</option></select>
                </div>
                <div className="field"><label className="label">CONSULTATION VOLUME</label>
                <select className="select" name="volume"><option>Under 50 / week</option><option>50–200 / week</option><option>200+ / week</option></select>
                </div>
              </div>
              <button className="form__submit" type="submit">Book a free demo ↗</button>
              <p className="form__micro">No commitment · reply within 24 hours</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww demo --book telecare</div>
              <div className="s1">✓ request received<br />✓ routed to a product specialist<br />✓ demo slot being arranged</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll be in touch within 24 hours to schedule.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>5–7 wks</div><div className="lbl">TIME_TO_LAUNCH</div><div className="sub">▲ kickoff → live</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>100%</div><div className="lbl">BRANDED</div><div className="sub">▲ your clinic, your app</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>1</div><div className="lbl">UNIFIED_RECORD</div><div className="sub">▲ in-person + virtual</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
        </section>

        <section id="s-features" className="section reveal">
          <p className="eyebrow">const features = [ <span className="c">// what's inside TeleCare</span></p>
          <h2 className="title mono">What's inside</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Secure video consultations</div><p className="svc__body">High-quality, secure video calls between doctors and patients, with waiting room and queue management.</p><div className="svc__foot"><span>video.tsx</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">E-prescriptions</div><p className="svc__body">Generate and share digital prescriptions instantly after a consultation, sent directly to the patient's app.</p><div className="svc__foot"><span>rx.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Shared patient records</div><p className="svc__body">Virtual and in-person visit records live in the same patient history — no information gaps between modes.</p><div className="svc__foot"><span>records.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Appointment scheduling</div><p className="svc__body">Patients book virtual or in-person consultations online with doctor-wise availability and reminders.</p><div className="svc__foot"><span>schedule.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Payments &amp; billing</div><p className="svc__body">Collect consultation fees online before or after the call, with automatic invoicing and payment tracking.</p><div className="svc__foot"><span>billing.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Branded patient app</div><p className="svc__body">Patients book, join consultations, view prescriptions and records, and get reminders — all from your branded app.</p><div className="svc__foot"><span>app.tsx</span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// built for</p>
          <h2 className="title mono">Who TeleCare is built for</h2>
          <div className="grid grid-4 stagger">
            <div className="cap"><div className="cap__title">Multi-specialty clinics &amp; hospitals</div><p className="cap__body">Offer virtual consultations across departments alongside existing in-person services.</p></div>
            <div className="cap"><div className="cap__title">Independent practitioners</div><p className="cap__body">Extend your practice beyond clinic walls without hiring additional staff.</p></div>
            <div className="cap"><div className="cap__title">Practices with remote / NRI patients</div><p className="cap__body">Reach and retain patients across cities or countries with a proper virtual-visit workflow.</p></div>
            <div className="cap"><div className="cap__title">Corporate &amp; insurance health programs</div><p className="cap__body">Offer virtual consultations as an employee wellness or insurance-linked benefit.</p></div>
          </div>
        </section>

        <section id="s-how" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>launchTeleCare</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">How it works</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Map your flow</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Brand &amp; configure</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Migrate records</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Train &amp; launch</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04</div><div className="pipe-detail__title">Walk us through your consultation flow</div><p className="pipe-detail__body">We map how your doctors currently see patients — in-person and virtual — so TeleCare fits your existing workflow instead of forcing a new one.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Doctor &amp; department mapping</span></li><li><span className="ok">✓</span><span>Consultation &amp; billing flow captured</span></li><li><span className="ok">✓</span><span>Launch timeline confirmed</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww telecare --intake</div><div className="t2">✓ flow mapped  ✓ departments captured</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04</div><div className="pipe-detail__title">We brand &amp; configure TeleCare</div><p className="pipe-detail__body">Your identity, doctor and department setup, e-prescription templates, and payment gateway — configured and ready.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Your logo, colours &amp; branded app</span></li><li><span className="ok">✓</span><span>Multi-doctor, multi-department setup</span></li><li><span className="ok">✓</span><span>Payment gateway connected</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww telecare --brand</div><div className="t2">✓ platform branded  ✓ gateway connected</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04</div><div className="pipe-detail__title">Migrate patient records</div><p className="pipe-detail__body">Existing patient history is brought into the same record used for virtual visits, so there's one continuous history per patient from day one.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Existing patient records imported</span></li><li><span className="ok">✓</span><span>Unified record structure verified</span></li><li><span className="ok">✓</span><span>Data checked against source</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww telecare --migrate</div><div className="t2">✓ records imported  ✓ history verified</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04</div><div className="pipe-detail__title">Train your team &amp; launch</div><p className="pipe-detail__body">Staff onboarding covers the doctor and admin dashboards, then TeleCare goes live with 30 days of post-launch support.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Staff onboarding &amp; training</span></li><li><span className="ok">✓</span><span>Live on your domain</span></li><li><span className="ok">✓</span><span>30 days post-launch support</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww telecare --launch</div><div className="t2">✓ live on your domain  ✓ team trained</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div id="s-included" className="panel-note">
            <div className="panel-note__lbl">WHATS_INCLUDED</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Doctor &amp; admin video dashboard</span></div><div><span className="plus">+</span><span>Branded patient mobile app</span></div><div><span className="plus">+</span><span>E-prescription templates</span></div><div><span className="plus">+</span><span>Payment gateway integration</span></div><div><span className="plus">+</span><span>Staff onboarding &amp; training</span></div><div><span className="plus">+</span><span>30 days of post-launch support</span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// client words</p>
          <div className="grid grid-3">
            <div className="quote"><div className="stars">★★★★★</div><p>We were sceptical that virtual visits could feel as complete as in-person ones. With shared records and instant e-prescriptions, our regular patients now book whichever mode suits them — and we haven't lost the continuity of care at all.</p><div className="quote__who"><div className="quote__avatar">VN</div><div><div className="quote__name">Dr. Vikram Nair</div><div className="quote__role">Consultant Physician, Nair Speciality Clinic</div></div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// telecare.faq.md</p>
          <h2 className="title mono">Everything you're probably wondering</h2>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Do virtual and in-person visits share the same patient record?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — every consultation, virtual or in-person, is recorded in the same patient history.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can patients receive prescriptions immediately after a video call?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — e-prescriptions are generated and sent to the patient's app right after the consultation ends.</p></div></div>
            <div className="faq__item"><button className="faq__q">Is the video consultation platform secure?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — consultations run on secure, access-controlled video infrastructure designed with patient privacy in mind.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can it support multiple doctors and specialities?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — TeleCare supports multi-doctor, multi-department setups with individual scheduling and consultation types.</p></div></div>
            <div className="faq__item"><button className="faq__q">How long does it take to launch?<span className="sign">[+]</span></button><div className="faq__a"><p>Most clinics are live within 5–7 weeks, including configuration, data migration, and staff training.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <Link className="svc" href="/clinicflow/"><div className="svc__title" style={{"fontSize":"16px"}}>ClinicFlow</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Full clinic management — scheduling, EMR, billing, pharmacy.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/clinicvoice-ai/"><div className="svc__title" style={{"fontSize":"16px"}}>ClinicVoice AI</div><p className="svc__body" style={{"fontSize":"13.5px"}}>AI voice agent for booking, reminders, and patient FAQs.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/insuredesk/"><div className="svc__title" style={{"fontSize":"16px"}}>InsureDesk</div><p className="svc__body" style={{"fontSize":"13.5px"}}>CRM for insurance agencies — leads, policies, renewals.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/products/"><div className="svc__title" style={{"fontSize":"16px"}}>All products</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Browse the full catalogue of ready-made products.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./telecare --book-demo<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to bring your clinic online?</h2>
          <p className="cta__lead">Book a 30-minute demo — we'll walk you through TeleCare, map it to your clinic, and give you a fixed launch timeline.</p>
          <div className="cta__btns">
            <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book my demo</a>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free demo</span><span><span className="g">●</span> 100% branded platform</span><span><span className="g">●</span> 30 days post-launch support</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">telecare.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
