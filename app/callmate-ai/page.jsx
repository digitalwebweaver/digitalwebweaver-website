import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "CallMate AI — 24/7 AI Calling Agent for Businesses | Digital Web Weaver" },
  description: "CallMate AI answers inbound calls, qualifies leads, books appointments, and makes follow-up and reminder calls automatically — in your brand's tone, around the clock.",
  alternates: { canonical: "/callmate-ai/" },
  openGraph: { title: "CallMate AI — 24/7 AI Calling Agent for Businesses | Digital Web Weaver", description: "CallMate AI answers inbound calls, qualifies leads, books appointments, and makes follow-up and reminder calls automatically — in your brand's tone, around the clock.", url: "/callmate-ai/", type: "website" }
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
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> callmate-ai.ts</button>
        <button className="tab" data-scroll="s-features" data-target="s-features"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> features.ts</button>
        <button className="tab" data-scroll="s-how" data-target="s-how"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> how-it-works.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// callmate-ai.ts · AI voice calling agent · 24/7</p>
            <span className="badge">CALLMATE AI</span>
            <h1 className="hero__h1">A phone team that <span className="pink">never clocks off</span></h1>
            <p className="hero__lead">CallMate AI answers inbound calls, qualifies leads, books appointments, and makes follow-up and reminder calls automatically — in a natural voice, in your brand's tone, around the clock — so no enquiry waits for someone to be free.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book my demo</a>
              <a className="btn btn--ghost" href="#s-features" data-scroll="s-features">$ view --features</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>24/7</b><span>call coverage</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>3–4 wks</b><span>to go live</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>150+</b><span>clients worldwide</span></div>
            </div>
          </div>
          <div className="formcard" id="demo">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">demo.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE DEMO</p>
              <p className="form__title">See CallMate AI in action</p>
              <p className="form__lead">Book a 30-minute walkthrough — we'll map it to your business and give you a launch timeline.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME</label><input className="input" name="name" placeholder="Your name" /></div>
                <div className="field"><label className="label">WORK EMAIL</label><input className="input" name="email" type="email" placeholder="you@company.com" /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">BUSINESS TYPE</label>
                <select className="select" name="type"><option>Service business / agency</option><option>Clinic, salon or appointment-based</option><option>Real estate / high-value sales</option><option>Delivery, logistics or field service</option><option>Other</option></select>
                </div>
                <div className="field"><label className="label">MONTHLY CALL VOLUME</label>
                <select className="select" name="volume"><option>Under 100</option><option>100–500</option><option>500+</option></select>
                </div>
              </div>
              <button className="form__submit" type="submit">Book a free demo ↗</button>
              <p className="form__micro">No commitment · reply within 24 hours</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww demo --book callmate-ai</div>
              <div className="s1">✓ request received<br />✓ routed to a product specialist<br />✓ demo slot being arranged</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll be in touch within 24 hours to schedule.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>24/7</div><div className="lbl">CALL_COVERAGE</div><div className="sub">▲ never on hold, never off</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>3–4 wks</div><div className="lbl">TIME_TO_LAUNCH</div><div className="sub">▲ kickoff → live</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>↓</div><div className="lbl">MISSED_ENQUIRIES</div><div className="sub">▲ captured automatically</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
        </section>

        <section id="s-features" className="section reveal">
          <p className="eyebrow">const features = [ <span className="c">// what's inside CallMate AI</span></p>
          <h2 className="title mono">What's inside</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Inbound call handling</div><p className="svc__body">Answers every incoming call instantly, any time of day, in a natural voice trained on your business information.</p><div className="svc__foot"><span>inbound.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Lead qualification &amp; routing</div><p className="svc__body">Asks the right questions to qualify callers and routes serious prospects to your team with full call context.</p><div className="svc__foot"><span>qualify.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Appointment booking</div><p className="svc__body">Books and confirms appointments directly into your calendar without any manual coordination.</p><div className="svc__foot"><span>booking.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Outbound follow-up calls</div><p className="svc__body">Places follow-up calls to leads and customers — checking in, confirming details, or re-engaging cold enquiries.</p><div className="svc__foot"><span>outbound.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Reminder calls</div><p className="svc__body">Automated reminder calls for appointments, payments, or renewals — reducing no-shows and missed deadlines.</p><div className="svc__foot"><span>reminders.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">CRM &amp; calendar integration</div><p className="svc__body">Syncs call outcomes, bookings, and lead data directly with your CRM or scheduling system in real time.</p><div className="svc__foot"><span>sync.ts</span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// built for</p>
          <h2 className="title mono">Who CallMate AI is built for</h2>
          <div className="grid grid-4 stagger">
            <div className="cap"><div className="cap__title">Service businesses &amp; agencies</div><p className="cap__body">Capture every enquiry instantly — even outside business hours — and route hot leads straight to your team.</p></div>
            <div className="cap"><div className="cap__title">Clinics, salons &amp; appointment-based businesses</div><p className="cap__body">Automate booking and reminder calls so your front desk can focus on people in front of them.</p></div>
            <div className="cap"><div className="cap__title">Real estate &amp; high-value sales</div><p className="cap__body">Qualify enquiries instantly and ensure no serious buyer waits on hold or gets a callback the next day.</p></div>
            <div className="cap"><div className="cap__title">Delivery, logistics &amp; field-service operators</div><p className="cap__body">Handle booking and status-update calls at scale without growing your call-centre headcount.</p></div>
          </div>
        </section>

        <section id="s-how" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>launchCallMate</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">How it works</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Share info &amp; scripts</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Train &amp; voice</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Connect systems</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Go live</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04</div><div className="pipe-detail__title">Share business information &amp; call scripts</div><p className="pipe-detail__body">You give us your services, pricing, FAQs, and how you'd want a call handled — the raw material the agent is trained on.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Business information &amp; FAQs captured</span></li><li><span className="ok">✓</span><span>Call scripts drafted</span></li><li><span className="ok">✓</span><span>Launch timeline confirmed</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ callmate --intake</div><div className="t2">✓ business info captured  ✓ scripts drafted</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04</div><div className="pipe-detail__title">We train &amp; voice the agent for your business</div><p className="pipe-detail__body">The agent is trained on your scripts and tone so it sounds like your business, not a generic machine.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Voice &amp; tone matched to your brand</span></li><li><span className="ok">✓</span><span>Custom script &amp; FAQ setup</span></li><li><span className="ok">✓</span><span>Test calls reviewed with you</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ callmate --train</div><div className="t2">✓ agent trained  ✓ voice configured</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04</div><div className="pipe-detail__title">Connect to calendar &amp; CRM</div><p className="pipe-detail__body">Call outcomes, bookings, and lead data are wired to sync directly with your existing calendar and CRM in real time.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Calendar integration connected</span></li><li><span className="ok">✓</span><span>CRM integration connected</span></li><li><span className="ok">✓</span><span>Call routing rules set</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ callmate --connect</div><div className="t2">✓ calendar synced  ✓ CRM synced</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04</div><div className="pipe-detail__title">Go live &amp; monitor performance</div><p className="pipe-detail__body">CallMate AI starts answering calls, with a call analytics dashboard and 30 days of post-launch support to fine-tune performance.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Live and answering calls</span></li><li><span className="ok">✓</span><span>Call analytics dashboard</span></li><li><span className="ok">✓</span><span>30 days post-launch support</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ callmate --launch</div><div className="t2">✓ live &amp; answering  ✓ analytics tracking</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div id="s-included" className="panel-note">
            <div className="panel-note__lbl">WHATS_INCLUDED</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Trained AI voice agent</span></div><div><span className="plus">+</span><span>Calendar &amp; CRM integration</span></div><div><span className="plus">+</span><span>Custom script &amp; FAQ setup</span></div><div><span className="plus">+</span><span>Call analytics dashboard</span></div><div><span className="plus">+</span><span>Team onboarding session</span></div><div><span className="plus">+</span><span>30 days of post-launch support</span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// client words</p>
          <div className="grid grid-3">
            <div className="quote"><div className="stars">★★★★★</div><p>Half our enquiries used to come in after hours and just sat in voicemail until the next morning — by which time many callers had already gone elsewhere. Now CallMate AI picks up every time, qualifies them, and our sales team wakes up to a list of warm leads instead of missed calls.</p><div className="quote__who"><div className="quote__avatar">AM</div><div><div className="quote__name">Aakash Mehta</div><div className="quote__role">Director, Mehta Properties &amp; Realty</div></div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// callmate-ai.faq.md</p>
          <h2 className="title mono">Everything you're probably wondering</h2>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Will callers know they're speaking to an AI?<span className="sign">[+]</span></button><div className="faq__a"><p>The agent is trained to sound natural and conversational using your business's tone and information — most callers experience it as a smooth, helpful conversation.</p></div></div>
            <div className="faq__item"><button className="faq__q">What happens with calls it can't fully handle?<span className="sign">[+]</span></button><div className="faq__a"><p>Complex or sensitive calls are transferred to your team with full context, so the caller never has to repeat themselves from scratch.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can it make outbound calls too, or only answer inbound?<span className="sign">[+]</span></button><div className="faq__a"><p>Both — it can handle inbound enquiries and place outbound follow-up, reminder, or re-engagement calls.</p></div></div>
            <div className="faq__item"><button className="faq__q">Does it work in the languages our customers use?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — the agent can be configured for multiple languages based on your customer base.</p></div></div>
            <div className="faq__item"><button className="faq__q">How long before it's live and answering our calls?<span className="sign">[+]</span></button><div className="faq__a"><p>Most businesses are live within 3–4 weeks, including training the agent on your information and connecting it to your systems.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <Link className="svc" href="/chatflow-ai/"><div className="svc__title" style={{"fontSize":"16px"}}>ChatFlow AI</div><p className="svc__body" style={{"fontSize":"13.5px"}}>WhatsApp automation for enquiries and follow-ups.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/clinicvoice-ai/"><div className="svc__title" style={{"fontSize":"16px"}}>ClinicVoice AI</div><p className="svc__body" style={{"fontSize":"13.5px"}}>AI voice agent for clinics — booking, reminders, FAQs.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/rideeasy/"><div className="svc__title" style={{"fontSize":"16px"}}>RideEasy</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Cab booking platform — rider, driver &amp; dispatch apps.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/products/"><div className="svc__title" style={{"fontSize":"16px"}}>All products</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Browse the full catalogue of ready-made products.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./callmate-ai --book-demo<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready for a phone team that never sleeps?</h2>
          <p className="cta__lead">Book a 30-minute demo — we'll walk you through CallMate AI, map it to your business, and give you a fixed launch timeline.</p>
          <div className="cta__btns">
            <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book my demo</a>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free demo</span><span><span className="g">●</span> 24/7 call coverage</span><span><span className="g">●</span> 30 days post-launch support</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">callmate-ai.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
