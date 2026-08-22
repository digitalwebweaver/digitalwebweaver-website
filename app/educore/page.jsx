import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "EduCore — Learning Management System | Digital Web Weaver" },
  description: "EduCore bundles course delivery, live classes, assessments, certificates, and fee collection into one branded LMS. White-labelled, live in 4–6 weeks, 0% revenue cut.",
  alternates: { canonical: "/educore/" },
  openGraph: { title: "EduCore — Learning Management System | Digital Web Weaver", description: "EduCore bundles course delivery, live classes, assessments, certificates, and fee collection into one branded LMS. White-labelled, live in 4–6 weeks, 0% revenue cut.", url: "/educore/", type: "website" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={serviceSchema({ name: "EduCore", description: "EduCore bundles course delivery, live classes, assessments, certificates, and fee collection into one branded LMS. White-labelled, live in 4–6 weeks, 0% revenue cut.", href: "/educore/" })} />
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
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> educore.ts</button>
        <button className="tab" data-scroll="s-features" data-target="s-features"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> features.ts</button>
        <button className="tab" data-scroll="s-how" data-target="s-how"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> how-it-works.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// educore.ts · learning management system · white-label</p>
            <span className="badge">EDUCORE</span>
            <h1 className="hero__h1">The LMS your institute can <span className="pink">launch this month</span></h1>
            <p className="hero__lead">EduCore bundles course delivery, live classes, assessments, certificates, and fee collection into one branded platform — so you can stop stitching together five different tools and start teaching.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Book my demo</a>
              <a className="btn btn--ghost" href="#s-features" data-scroll="s-features">$ view --features</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>4–6 wks</b><span>to go live</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>100%</b><span>white-labelled</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>0%</b><span>revenue cut</span></div>
            </div>
          </div>
          <div className="formcard" id="demo">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">demo.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE DEMO</p>
              <p className="form__title">See EduCore in action</p>
              <p className="form__lead">Book a 30-minute walkthrough — we'll map it to your institute and give you a launch timeline.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME *</label><input className="input" name="name" placeholder="Your name" required /></div>
                <div className="field"><label className="label">WORK EMAIL *</label><input className="input" name="email" type="email" placeholder="you@institute.com" required /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">INSTITUTE TYPE</label>
                <select className="select" name="type"><option>Coaching institute / academy</option><option>College / training centre</option><option>Corporate L&amp;D team</option><option>Independent educator</option><option>Other</option></select>
                </div>
                <div className="field"><label className="label">STUDENT COUNT</label>
                <select className="select" name="students"><option>Under 100</option><option>100–500</option><option>500–2,000</option><option>2,000+</option></select>
                </div>
              </div>
              <button className="form__submit" type="submit">Book a free demo ↗</button>
              <p className="form__micro">No commitment · reply within 24 hours</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww demo --book educore</div>
              <div className="s1">✓ request received<br />✓ routed to a product specialist<br />✓ demo slot being arranged</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll be in touch within 24 hours to schedule.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>4–6 wks</div><div className="lbl">TIME_TO_LAUNCH</div><div className="sub">▲ kickoff → live</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>100%</div><div className="lbl">WHITE_LABELLED</div><div className="sub">▲ your brand, not ours</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>0%</div><div className="lbl">REVENUE_CUT</div><div className="sub">▲ fees go straight to you</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
        </section>

        <section id="s-features" className="section reveal">
          <p className="eyebrow">const features = [ <span className="c">// what's inside EduCore</span></p>
          <h2 className="title mono">What's inside</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Drag-and-drop course builder</div><p className="svc__body">Structure courses into modules and lessons with video, PDFs, slides, and embedded quizzes — no coding required.</p><div className="svc__foot"><span>course-builder.tsx</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Live &amp; recorded classes</div><p className="svc__body">Host live sessions with attendance tracking, or upload recordings with adaptive streaming and resume-from-where-you-left-off.</p><div className="svc__foot"><span>classes.tsx</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Quizzes &amp; auto-grading</div><p className="svc__body">Build MCQ, subjective, and timed tests with instant scoring, negative marking, and detailed performance reports.</p><div className="svc__foot"><span>assessments.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Verifiable certificates</div><p className="svc__body">Auto-issue branded, shareable certificates with unique verification links the moment a student completes a course.</p><div className="svc__foot"><span>certificates.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Fee collection &amp; plans</div><p className="svc__body">Sell one-time courses, subscriptions, or instalment plans with UPI, cards, and net-banking built in.</p><div className="svc__foot"><span>billing.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Student &amp; instructor apps</div><p className="svc__body">Branded iOS and Android apps so your learners can study on the move and instructors can manage classes from anywhere.</p><div className="svc__foot"><span>apps.tsx</span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// built for</p>
          <h2 className="title mono">Who EduCore is built for</h2>
          <div className="grid grid-4 stagger">
            <div className="cap"><div className="cap__title">Coaching institutes &amp; academies</div><p className="cap__body">Run batches, track attendance, and sell test series alongside live and recorded courses.</p></div>
            <div className="cap"><div className="cap__title">Colleges &amp; training centres</div><p className="cap__body">Give every department its own course catalogue, gradebook, and instructor workspace.</p></div>
            <div className="cap"><div className="cap__title">Corporate L&amp;D teams</div><p className="cap__body">Onboard employees, run compliance training, and track completion with exportable reports for HR.</p></div>
            <div className="cap"><div className="cap__title">Independent educators</div><p className="cap__body">Launch your own branded learning platform without paying a 30–50% cut to a marketplace.</p></div>
          </div>
        </section>

        <section id="s-how" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>launchEduCore</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">How it works</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Tell us</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Configure &amp; brand</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Upload &amp; invite</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Go live</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04</div><div className="pipe-detail__title">Tell us about your institute</div><p className="pipe-detail__body">Share your subjects, batch sizes, and branding preferences — we scope EduCore to how you actually teach.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Subjects &amp; batch structure</span></li><li><span className="ok">✓</span><span>Branding preferences captured</span></li><li><span className="ok">✓</span><span>Launch timeline confirmed</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww educore --intake</div><div className="t2">✓ subjects captured  ✓ branding confirmed</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04</div><div className="pipe-detail__title">We configure &amp; brand EduCore</div><p className="pipe-detail__body">Platform setup with your identity, course categories, and payment gateway — ready for your first course.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Your logo, colours &amp; domain</span></li><li><span className="ok">✓</span><span>Course categories configured</span></li><li><span className="ok">✓</span><span>Payment gateway connected</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww educore --brand</div><div className="t2">✓ platform branded  ✓ gateway connected</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04</div><div className="pipe-detail__title">You upload courses &amp; invite students</div><p className="pipe-detail__body">Bulk-import existing content or record fresh — we assist with your first batch migration.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Bulk course &amp; content import</span></li><li><span className="ok">✓</span><span>First batch migration assistance</span></li><li><span className="ok">✓</span><span>Student invites sent</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww educore --migrate</div><div className="t2">✓ content imported  ✓ students invited</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04</div><div className="pipe-detail__title">Go live &amp; we keep supporting</div><p className="pipe-detail__body">Launch on web and mobile with instructor training and 30 days of post-launch support included.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Live on web &amp; mobile</span></li><li><span className="ok">✓</span><span>Instructor training session</span></li><li><span className="ok">✓</span><span>30 days post-launch support</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww educore --launch</div><div className="t2">✓ live on your domain  ✓ instructors trained</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div id="s-included" className="panel-note">
            <div className="panel-note__lbl">WHATS_INCLUDED</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Branded web platform</span></div><div><span className="plus">+</span><span>iOS &amp; Android student apps</span></div><div><span className="plus">+</span><span>Instructor dashboard</span></div><div><span className="plus">+</span><span>Payment gateway setup</span></div><div><span className="plus">+</span><span>Onboarding &amp; training session</span></div><div><span className="plus">+</span><span>30 days post-launch support</span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// client words</p>
          <div className="grid grid-3">
            <div className="quote"><div className="stars">★★★★★</div><p>We were running classes over WhatsApp groups and spreadsheets. Within five weeks of saying yes, we had our own branded app on the Play Store with 400 students migrated over.</p><div className="quote__who"><div className="quote__avatar">RB</div><div><div className="quote__name">Ritika Bhatt</div><div className="quote__role">Director, Horizon Test Prep</div></div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// educore.faq.md</p>
          <h2 className="title mono">Everything you're probably wondering</h2>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Is EduCore really white-labelled?<span className="sign">[+]</span></button><div className="faq__a"><p>Fully white-labelled. Your logo, your colours, your domain, your app store listing. Nothing identifies Digital Web Weaver to your students unless you want it to.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can I migrate students and courses from my current setup?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. We help you bulk-import existing course content, student records, and historical progress data as part of onboarding.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you take a percentage of fees collected?<span className="sign">[+]</span></button><div className="faq__a"><p>No. Payments go through your own gateway account directly to your bank. We don't sit between you and your revenue.</p></div></div>
            <div className="faq__item"><button className="faq__q">What if I need non-standard features?<span className="sign">[+]</span></button><div className="faq__a"><p>Because we built EduCore ourselves, we can scope and build custom additions as paid extensions.</p></div></div>
            <div className="faq__item"><button className="faq__q">Timeline to go live?<span className="sign">[+]</span></button><div className="faq__a"><p>Most institutes are live within 4–6 weeks of kickoff, including branding setup, content migration, and instructor training.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <Link className="svc" href="/schoolhub/"><div className="svc__title" style={{"fontSize":"16px"}}>SchoolHub</div><p className="svc__body" style={{"fontSize":"13.5px"}}>School management — admissions, attendance, fees, exams.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/chatflow-ai/"><div className="svc__title" style={{"fontSize":"16px"}}>ChatFlow AI</div><p className="svc__body" style={{"fontSize":"13.5px"}}>WhatsApp automation for enquiries and follow-ups.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/products/"><div className="svc__title" style={{"fontSize":"16px"}}>All products</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Browse the full catalogue of ready-made products.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/custom-software-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Custom software</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Need something EduCore doesn't cover? We build bespoke.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./educore --book-demo<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to launch your own LMS?</h2>
          <p className="cta__lead">Book a 30-minute demo — we'll walk you through EduCore, map it to your institute, and give you a fixed launch timeline.</p>
          <div className="cta__btns">
            <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book my demo</a>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free demo</span><span><span className="g">●</span> 100% white-labelled</span><span><span className="g">●</span> 0% revenue cut</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">educore.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
