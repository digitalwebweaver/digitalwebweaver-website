import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "SchoolHub — School Management System | Digital Web Weaver" },
  description: "SchoolHub consolidates admissions, attendance, timetables, fee collection, exams, report cards, and parent communication into one branded platform. Live in 5–7 weeks.",
  alternates: { canonical: "/schoolhub/" },
  openGraph: { title: "SchoolHub — School Management System | Digital Web Weaver", description: "SchoolHub consolidates admissions, attendance, timetables, fee collection, exams, report cards, and parent communication into one branded platform. Live in 5–7 weeks.", url: "/schoolhub/", type: "website" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={serviceSchema({ name: "SchoolHub", description: "SchoolHub consolidates admissions, attendance, timetables, fee collection, exams, report cards, and parent communication into one branded platform. Live in 5–7 weeks.", href: "/schoolhub/" })} />
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-features" data-target="s-features" title="Features">⚙</button>
      <button className="activitybar__btn" data-scroll="s-how" data-target="s-how" title="How it works">❯</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> schoolhub.ts</button>
        <button className="tab" data-scroll="s-features" data-target="s-features"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> features.ts</button>
        <button className="tab" data-scroll="s-how" data-target="s-how"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> how-it-works.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// schoolhub.ts · school management system · SaaS product</p>
            <span className="badge">SCHOOL MANAGEMENT</span>
            <h1 className="hero__h1">Run your <span className="pink">entire school</span> from <span className="teal">one platform</span></h1>
            <p className="hero__lead">SchoolHub consolidates admissions, attendance, timetables, fee collection, exams, report cards, and parent communication into one unified system — eliminating manual registers and scattered spreadsheets.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book a demo</a>
              <a className="btn btn--ghost" href="#s-features" data-scroll="s-features">$ view --features</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>5–7 wks</b><span>to go live</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>100%</b><span>branded to your school</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>150+</b><span>clients worldwide</span></div>
            </div>
          </div>
          <div className="formcard" id="demo">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">demo.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE PRODUCT DEMO</p>
              <p className="form__title">See SchoolHub in action</p>
              <p className="form__lead">Book a 30-minute demo — we'll walk through the fit for your school and give you a fixed timeline.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME *</label><input className="input" name="name" placeholder="Your name" required /></div>
                <div className="field"><label className="label">WORK EMAIL *</label><input className="input" name="email" type="email" placeholder="you@school.edu" required /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">SCHOOL TYPE</label>
                <select className="select" name="type"><option>K-12 school</option><option>Pre-school / play school</option><option>School group / trust (multiple branches)</option><option>Tuition / coaching chain</option><option>Other</option></select>
                </div>
                <div className="field"><label className="label">NUMBER OF STUDENTS</label>
                <select className="select" name="size"><option>Under 200</option><option>200–500</option><option>500–1,500</option><option>1,500+</option></select>
                </div>
              </div>
              <button className="form__submit" type="submit">Book my demo ↗</button>
              <p className="form__micro">Free demo · No commitment</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww demo --book schoolhub</div>
              <div className="s1">✓ request received<br />✓ best-fit setup identified<br />✓ demo slot being arranged</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll be in touch within 24 hours to schedule.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>5–7 wks</div><div className="lbl">TO_GO_LIVE</div><div className="sub">▲ demo → live platform</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>100%</div><div className="lbl">BRANDED</div><div className="sub">▲ your school's identity</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>1</div><div className="lbl">APP_FOR_ALL</div><div className="sub">▲ staff &amp; parents, one app</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
        </section>

        <section id="s-features" className="section reveal">
          <p className="eyebrow">const features = [ <span className="c">// what SchoolHub replaces</span></p>
          <h2 className="title mono">Everything a school office runs on</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Admissions &amp; Enquiries</div><p className="svc__body">Online admission forms, structured workflows, document collection, and seat allocation tracking — no more paper files at the front desk.</p><div className="svc__foot"><span>admissions.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Attendance &amp; Leave</div><p className="svc__body">Digital attendance marking for students and staff, with automated absence alerts sent straight to parents.</p><div className="svc__foot"><span>attendance.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Timetable &amp; Substitutions</div><p className="svc__body">Build class timetables with automatic conflict detection, and cover teacher substitutions without a whiteboard scramble.</p><div className="svc__foot"><span>timetable.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Fee Collection &amp; Reminders</div><p className="svc__body">Online payments with instalment plans, receipt generation, dues tracking, and automated reminders to parents.</p><div className="svc__foot"><span>fees.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Exams &amp; Report Cards</div><p className="svc__body">Exam scheduling, mark entry, and auto-generated report cards formatted to match your school's existing structure.</p><div className="svc__foot"><span>exams.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Parent &amp; Staff Communication</div><p className="svc__body">Push notifications for notices, circulars, homework, and event updates — delivered through your school's branded app.</p><div className="svc__foot"><span>comms.ts</span></div></div>
            <div className="svc"><div className="svc__num">07</div><div className="svc__title">Staff Management</div><p className="svc__body">Staff records, role assignments, and leave balances in one place — payroll-ready without a separate spreadsheet.</p><div className="svc__foot"><span>staff.ts</span></div></div>
          </div>
        </section>

        <section id="s-how" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>schoolhubRollout</span>() &#123; <span className="c">// demo to live in 5–7 weeks</span></p>
          <h2 className="title mono">From demo to live in 5–7 weeks</h2>
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
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04 · ◷ week 1</div><div className="pipe-detail__title">Discovery</div><p className="pipe-detail__body">We map your admissions, attendance, and fee-collection workflows, and capture your existing report card and fee structures.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Current workflows mapped</span></li><li><span className="ok">✓</span><span>Report card &amp; fee formats captured</span></li><li><span className="ok">✓</span><span>Rollout plan confirmed</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww discover --school</div><div className="t2">✓ workflows mapped  ✓ formats captured  ✓ plan confirmed</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04 · ◷ weeks 2–3</div><div className="pipe-detail__title">Configure &amp; brand</div><p className="pipe-detail__body">SchoolHub is branded to your school, your fee payment gateway is connected, and report card and circular templates are set up.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>School branding applied</span></li><li><span className="ok">✓</span><span>Fee payment gateway connected</span></li><li><span className="ok">✓</span><span>Report card &amp; circular templates set up</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww configure --brand</div><div className="t2">✓ branded  ✓ gateway connected  ✓ templates ready</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04 · ◷ weeks 3–5</div><div className="pipe-detail__title">Migrate &amp; train</div><p className="pipe-detail__body">Student and staff records are migrated, and your admin and teaching staff go through hands-on training sessions.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Student &amp; staff records migrated</span></li><li><span className="ok">✓</span><span>Hands-on staff training</span></li><li><span className="ok">✓</span><span>Parent app rollout prepared</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww migrate --train</div><div className="t2">✓ records migrated  ✓ staff trained</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04 · ◷ weeks 5–7</div><div className="pipe-detail__title">Launch &amp; support</div><p className="pipe-detail__body">SchoolHub goes live for staff and parents, backed by 30 days of post-launch support to iron out any rollout questions.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Live for staff &amp; parents</span></li><li><span className="ok">✓</span><span>30 days post-launch support</span></li><li><span className="ok">✓</span><span>Full source-code handover</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww launch --school</div><div className="t2">✓ live  ✓ parents onboarded  ✓ support active</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">WHATS_INCLUDED</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Admin &amp; staff dashboard</span></div><div><span className="plus">+</span><span>Branded parent mobile app</span></div><div><span className="plus">+</span><span>Fee payment gateway setup</span></div><div><span className="plus">+</span><span>Report card &amp; circular templates</span></div><div><span className="plus">+</span><span>Staff onboarding &amp; training</span></div><div><span className="plus">+</span><span>30 days post-launch support</span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// what schools say</p>
          <div className="quote" style={{"maxWidth":"640px","margin":"0 auto"}}>
            <div className="stars">★★★★★</div>
            <p>Fee follow-ups used to mean phone calls every single week. Now reminders go out automatically, parents pay online, and our accounts team finally has time for actual planning instead of chasing dues.</p>
            <div className="quote__who"><div className="quote__avatar">MP</div><div><div className="quote__name">Meena Pillai</div><div className="quote__role">Principal · Greenfield Public School</div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// schoolhub.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Can it match our existing report card and fee structures?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — SchoolHub is configured to match your school's existing report card formats and fee structures.</p></div></div>
            <div className="faq__item"><button className="faq__q">What are the teacher training requirements?<span className="sign">[+]</span></button><div className="faq__a"><p>Most staff are comfortable within the first week. We run hands-on training sessions as part of the rollout.</p></div></div>
            <div className="faq__item"><button className="faq__q">How do parents receive updates?<span className="sign">[+]</span></button><div className="faq__a"><p>Through a branded mobile app that delivers notices, absence alerts, fee reminders, and report cards.</p></div></div>
            <div className="faq__item"><button className="faq__q">Does it support multiple branches?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — school groups and trusts with multiple branches get centralised oversight across all of them.</p></div></div>
            <div className="faq__item"><button className="faq__q">How long does it take to go live?<span className="sign">[+]</span></button><div className="faq__a"><p>5–7 weeks, including data migration and staff training.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// related products</p>
          <div className="grid grid-4">
            <Link className="svc" href="/educore/"><div className="svc__title" style={{"fontSize":"16px"}}>EduCore</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Learning management system — courses, live classes, quizzes, and certificates.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/telecare/"><div className="svc__title" style={{"fontSize":"16px"}}>TeleCare</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Telemedicine platform — video consultations, e-prescriptions, and scheduling.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/chatflow-ai/"><div className="svc__title" style={{"fontSize":"16px"}}>ChatFlow AI</div><p className="svc__body" style={{"fontSize":"13.5px"}}>WhatsApp automation agent for enquiries, bookings, and follow-ups.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/products/"><div className="svc__title" style={{"fontSize":"16px"}}>Browse all products</div><p className="svc__body" style={{"fontSize":"13.5px"}}>See the full catalog of ready-made software products.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./demo --book schoolhub<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to run your school on one platform?</h2>
          <p className="cta__lead">Book a 30-minute demo. We'll walk you through SchoolHub, answer your questions, and give you a fixed launch timeline.</p>
          <div className="cta__btns">
            <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book a demo</a>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free demo</span><span><span className="g">●</span> 5–7 week launch</span><span><span className="g">●</span> 30 days post-launch support</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">schoolhub.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
