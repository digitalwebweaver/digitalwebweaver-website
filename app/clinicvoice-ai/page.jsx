import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "ClinicVoice AI — AI Voice Agent for Clinics | Digital Web Weaver" },
  description: "ClinicVoice AI answers calls, books appointments, sends reminders, answers common questions, and follows up after visits — automatically, in a natural voice, around the clock.",
  alternates: { canonical: "/clinicvoice-ai/" },
  openGraph: { title: "ClinicVoice AI — AI Voice Agent for Clinics | Digital Web Weaver", description: "ClinicVoice AI answers calls, books appointments, sends reminders, answers common questions, and follows up after visits — automatically, in a natural voice, around the clock.", url: "/clinicvoice-ai/", type: "website" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={serviceSchema({ name: "ClinicVoice AI", description: "ClinicVoice AI answers calls, books appointments, sends reminders, answers common questions, and follows up after visits — automatically, in a natural voice, around the clock.", href: "/clinicvoice-ai/" })} />
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-features" data-target="s-features" title="Features">⚙</button>
      <button className="activitybar__btn" data-scroll="s-how" data-target="s-how" title="How it works">❯</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> clinicvoice.ts</button>
        <button className="tab" data-scroll="s-features" data-target="s-features"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> voice-agent.ts</button>
        <button className="tab" data-scroll="s-how" data-target="s-how"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> how-it-works.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// clinicvoice.ts · AI voice agent · answers every call</p>
            <span className="badge">AI VOICE AGENT · HEALTHCARE</span>
            <h1 className="hero__h1">Never let a patient call go to <span className="pink">voicemail</span> again</h1>
            <p className="hero__lead">ClinicVoice AI answers calls, books appointments, sends reminders, answers common questions, and follows up after visits — automatically, in a natural voice, around the clock.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book a demo</a>
              <a className="btn btn--ghost" href="#s-features" data-scroll="s-features">$ view --agent</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>24/7</b><span>call coverage</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>3–4wk</b><span>to go live</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>150+</b><span>clients globally</span></div>
            </div>
          </div>
          <div className="formcard" id="demo">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">demo.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE DEMO</p>
              <p className="form__title">Hear the agent answer a call</p>
              <p className="form__lead">Book a 30-minute demo — we'll show you the voice agent handling a real call flow for your clinic.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME *</label><input className="input" name="name" placeholder="Your name" required /></div>
                <div className="field"><label className="label">WORK EMAIL *</label><input className="input" name="email" type="email" placeholder="you@clinic.com" required /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">CLINIC / PRACTICE NAME</label><input className="input" name="clinic" placeholder="Your clinic" /></div>
                <div className="field"><label className="label">PRACTICE TYPE</label>
                <select className="select" name="type"><option>Multi-doctor clinic / hospital</option><option>Independent practitioner</option><option>Dental / specialty practice</option><option>Diagnostic centre / polyclinic</option><option>Other</option></select>
                </div>
              </div>
              <div className="field"><label className="label">WHAT'S DRIVING MISSED CALLS?</label><textarea className="textarea" name="desc" rows="3" placeholder="Peak-hour volume, after-hours calls, no-shows…"></textarea></div>
              <button className="form__submit" type="submit">Book my demo ↗</button>
              <p className="form__micro">Free demo · Fixed price &amp; timeline</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ clinicvoice demo --book</div>
              <div className="s1">✓ request received<br />✓ routed to a product specialist<br />✓ demo slot being arranged</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll be in touch within 24 hours to schedule.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>24/7</div><div className="lbl">CALL_COVERAGE</div><div className="sub">▲ nights · weekends · peak hours</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>3–4wk</div><div className="lbl">TO_GO_LIVE</div><div className="sub">▲ demo → live</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>AUTO</div><div className="lbl">MISSED_CALLS_CAPTURED</div><div className="sub">▲ no more voicemail</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
        </section>

        <section id="s-features" className="section reveal">
          <p className="eyebrow">const agent = [ <span className="c">// what the voice agent handles</span></p>
          <h2 className="title mono">A voice agent trained on your clinic</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Automated call answering</div><p className="svc__body">Responds to incoming calls instantly with a natural-sounding voice trained on your clinic's tone.</p><div className="svc__foot"><span>answer.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Appointment booking &amp; rescheduling</div><p className="svc__body">Books and confirms appointments directly into your calendar without a human handoff.</p><div className="svc__foot"><span>booking.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Automated reminder calls</div><p className="svc__body">Places outbound reminder calls to reduce no-shows without staff involvement.</p><div className="svc__foot"><span>reminders.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">FAQ &amp; information handling</div><p className="svc__body">Answers routine questions about timings, services, doctor availability, location, and insurance.</p><div className="svc__foot"><span>faq.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Post-visit follow-up calls</div><p className="svc__body">Places follow-up calls after appointments to check on patients.</p><div className="svc__foot"><span>followup.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">EMR &amp; calendar integration</div><p className="svc__body">Syncs with your scheduling systems and patient records in real-time.</p><div className="svc__foot"><span>sync.ts</span></div></div>
          </div>
        </section>

        <section id="s-how" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>trainAgent</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">Live and answering calls in 3–4 weeks</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Share info</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Train voice</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Connect</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Go live</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04</div><div className="pipe-detail__title">Share clinic information &amp; FAQs</div><p className="pipe-detail__body">You give us your services, timings, doctor availability, and the questions patients ask most.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Services &amp; timings collected</span></li><li><span className="ok">✓</span><span>Common patient FAQs documented</span></li><li><span className="ok">✓</span><span>Call scripts drafted</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ clinicvoice intake --info</div><div className="t2">✓ FAQs collected  ✓ scripts drafted</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04</div><div className="pipe-detail__title">Train and voice the agent</div><p className="pipe-detail__body">The agent is trained on your clinic's tone and scripted for the call flows you actually get.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Voice &amp; tone configured</span></li><li><span className="ok">✓</span><span>Call flows scripted</span></li><li><span className="ok">✓</span><span>Language(s) configured</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ clinicvoice train --agent</div><div className="t2">✓ voice trained  ✓ flows scripted</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04</div><div className="pipe-detail__title">Connect to calendar &amp; systems</div><p className="pipe-detail__body">The agent is wired into your scheduling system and patient records so bookings sync in real time.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Calendar integration connected</span></li><li><span className="ok">✓</span><span>EMR sync configured</span></li><li><span className="ok">✓</span><span>Staff handoff rules set</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ clinicvoice connect --calendar</div><div className="t2">✓ calendar synced  ✓ EMR connected</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04</div><div className="pipe-detail__title">Go live with call analytics</div><p className="pipe-detail__body">The agent starts answering calls, with a call analytics dashboard so you can monitor every interaction from day one.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Agent live on your clinic number</span></li><li><span className="ok">✓</span><span>Call analytics dashboard active</span></li><li><span className="ok">✓</span><span>30 days post-launch support</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ clinicvoice launch --go-live</div><div className="t2">✓ agent live  ✓ analytics streaming</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">WHATS_INCLUDED</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Trained AI voice agent</span></div><div><span className="plus">+</span><span>Calendar &amp; EMR integration</span></div><div><span className="plus">+</span><span>Custom FAQ &amp; script setup</span></div><div><span className="plus">+</span><span>Call analytics dashboard</span></div><div><span className="plus">+</span><span>Team onboarding session</span></div><div><span className="plus">+</span><span>30 days post-launch support</span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// client words</p>
          <div className="grid grid-3 stagger">
            <div className="quote"><div className="stars">★★★★★</div><p>We were losing new-patient enquiries simply because nobody could answer the phone during peak hours. Now every call gets picked up — and a good number of them turn into booked appointments before our staff even sees the notification.</p><div className="quote__who"><div className="quote__avatar">RK</div><div><div className="quote__name">Dr. Renu Kothari</div><div className="quote__role">Founder, Kothari Dental &amp; Wellness</div></div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// clinicvoice.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Will patients realise they're talking to an AI?<span className="sign">[+]</span></button><div className="faq__a"><p>The agent sounds natural and conversational using your clinic's tone — most callers experience smooth dialogue rather than rigid scripting.</p></div></div>
            <div className="faq__item"><button className="faq__q">What happens with calls it genuinely can't handle?<span className="sign">[+]</span></button><div className="faq__a"><p>Complex or sensitive calls transfer to staff with full context, so patients don't have to repeat information.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can it speak the languages our patients use?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — it's configurable for multiple languages based on your patient base.</p></div></div>
            <div className="faq__item"><button className="faq__q">Does it actually book appointments into our existing calendar?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — it integrates directly with your scheduling system, checking real-time availability before confirming.</p></div></div>
            <div className="faq__item"><button className="faq__q">How long does setup take before it can start answering calls?<span className="sign">[+]</span></button><div className="faq__a"><p>Most clinics launch within 3–4 weeks, including agent training and system integration.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-end","gap":"20px","flexWrap":"wrap"}}>
            <p className="eyebrow">// you might also need</p>
            <Link className="mono" href="/products/" style={{"fontSize":"13px","whiteSpace":"nowrap"}}>browse all products ↗</Link>
          </div>
          <div className="grid grid-3">
            <Link className="svc" href="/clinicflow/"><div className="svc__title" style={{"fontSize":"16px"}}>ClinicFlow</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Full clinic management system — scheduling, EMR, billing, and pharmacy.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/telecare/"><div className="svc__title" style={{"fontSize":"16px"}}>TeleCare</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Telemedicine platform — video consultations, e-prescriptions, and payments.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/callmate-ai/"><div className="svc__title" style={{"fontSize":"16px"}}>CallMate AI</div><p className="svc__body" style={{"fontSize":"13.5px"}}>General-purpose AI voice agent for inbound enquiries and lead qualification.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./demo --clinicvoice<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to stop losing calls to voicemail?</h2>
          <p className="cta__lead">Book a free 30-minute demo. We'll show you the agent handling a real call for your clinic and give you a fixed price and go-live date.</p>
          <div className="cta__btns">
            <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book a demo</a>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free demo</span><span><span className="g">●</span> Fixed price &amp; timeline</span><span><span className="g">●</span> You own the source code</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">clinicvoice.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
