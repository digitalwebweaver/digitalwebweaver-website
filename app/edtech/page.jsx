import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "EdTech Software Development Company | LMS & Learning India — Digital Web Weaver" },
  description: "LMS platforms, live classroom tools, assessment engines, and mobile learning apps for schools, universities, and corporate training. India-based senior team, SCORM/xAPI ready.",
  alternates: { canonical: "/edtech/" },
  openGraph: { title: "EdTech Software Development Company | LMS & Learning India — Digital Web Weaver", description: "LMS platforms, live classroom tools, assessment engines, and mobile learning apps for schools, universities, and corporate training. India-based senior team, SCORM/xAPI ready.", url: "/edtech/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-build" data-target="s-build" title="Solutions">⚙</button>
      <button className="activitybar__btn" data-scroll="s-capabilities" data-target="s-capabilities" title="Capabilities">❮❯</button>
      <button className="activitybar__btn" data-scroll="s-work" data-target="s-work" title="Work">◈</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · UAE">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> edtech.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> solutions.ts</button>
        <button className="tab" data-scroll="s-work" data-target="s-work"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> work.json</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// edtech.ts · LMS · SCORM/xAPI · Live classrooms</p>
            <span className="badge">EDTECH SOFTWARE</span>
            <h1 className="hero__h1">EdTech platforms that teach at <span className="pink">scale</span></h1>
            <p className="hero__lead">We build LMS platforms, live classroom tools, assessment engines, and mobile learning apps for schools, universities, and corporate training.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Get free estimate</a>
              <a className="btn btn--ghost" href="#s-work" data-scroll="s-work">$ view --work</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>150+</b><span>clients trusted</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>1M+</b><span>learner ready</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>SCORM</b><span>compliant</span></div>
            </div>
            <div className="trust">
              <p className="trust__label">// what we build on</p>
              <div className="trust__row">
                <span className="trust__chip">LMS</span>
                <span className="trust__chip">Live classrooms</span>
                <span className="trust__chip">Mobile learning</span>
                <span className="trust__chip">SCORM / xAPI</span>
                <span className="trust__chip">Certification</span>
              </div>
            </div>
          </div>
          <div className="formcard" id="estimate">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">estimate.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE ESTIMATE</p>
              <p className="form__title">What are you building?</p>
              <p className="form__lead">Tell us what you need — scope and estimate in 24 hours, free.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME</label><input className="input" name="name" placeholder="Your name" /></div>
                <div className="field"><label className="label">WORK EMAIL</label><input className="input" name="email" type="email" placeholder="you@company.com" /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">WHAT DO YOU NEED?</label>
                <select className="select" name="need"><option>Web application / portal</option><option>SaaS product</option><option>Mobile app</option><option>Marketing / company website</option><option>AI / automation project</option><option>Other</option></select>
                </div>
                <div className="field"><label className="label">TIMELINE</label>
                <select className="select" name="timeline"><option>ASAP (1–4 weeks)</option><option>Standard (2–3 months)</option><option>Complex (3–6 months)</option><option>Not sure yet</option></select>
                </div>
              </div>
              <div className="field"><label className="label">DESCRIBE YOUR PROJECT</label><textarea className="textarea" name="desc" rows="3" placeholder="What it does, who uses it, any tech preferences…"></textarea></div>
              <button className="form__submit" type="submit">Get free estimate ↗</button>
              <p className="form__micro">No commitment · 24-hour response</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww estimate --submit</div>
              <div className="s1">✓ request received<br />✓ routed to a senior engineer<br />✓ estimate en route</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll reply within 24 hours.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>12+</div><div className="lbl">EDTECH_BUILDS</div><div className="sub">▲ LMS · classrooms · assessment</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>1M+</div><div className="lbl">LEARNER_READY</div><div className="sub">▲ scaled infrastructure</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>SCORM</div><div className="lbl">COMPLIANT</div><div className="sub">▲ SCORM · xAPI · LTI</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// edtech software we build</span></p>
          <h2 className="title mono">EdTech software we build</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">LMS platforms</div><p className="svc__body">Course builders, student dashboards, and completion tracking on SCORM and LTI.</p><div className="svc__foot"><span>lms.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Live class tools</div><p className="svc__body">WebRTC video, interactive whiteboards, and breakout rooms for live teaching.</p><div className="svc__foot"><span>live.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Assessment engines</div><p className="svc__body">Quiz builders, proctoring, and adaptive testing tuned to learner performance.</p><div className="svc__foot"><span>assess.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Learning analytics</div><p className="svc__body">Progress dashboards, engagement metrics, and outcome reporting for instructors.</p><div className="svc__foot"><span>analytics.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Mobile learning</div><p className="svc__body">iOS and Android apps with offline course access for learners on any connection.</p><div className="svc__foot"><span>mobile.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Certification systems</div><p className="svc__body">Digital badges, certificates, and verifiable credentials on course completion.</p><div className="svc__foot"><span>certify.ts</span></div></div>
          </div>
        </section>

        <section id="s-capabilities" className="section reveal">
          <p className="eyebrow">// technical depth — video-first, standards-driven</p>
          <h2 className="title mono">EdTech capabilities</h2>
          <div className="grid grid-3">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3h7l4 4v14H7z"></path><path d="M10 12l2 2 4-4"></path></svg><span className="cap__title">SCORM &amp; xAPI</span></div><p className="cap__body">Standards-based content delivery and tracking so publisher content plugs straight in.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M10 9l5 3-5 3z"></path></svg><span className="cap__title">Video infrastructure</span></div><p className="cap__body">AWS MediaConvert, Cloudinary, and adaptive bitrate streaming for any connection.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"></path></svg><span className="cap__title">AI personalisation</span></div><p className="cap__body">Adaptive learning paths driven by real engagement signals, not fixed curricula.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12"></path><path d="M8 11l4 4 4-4"></path><path d="M5 19h14"></path></svg><span className="cap__title">Offline support</span></div><p className="cap__body">PWA and React Native offline course downloads so bad WiFi never blocks a lesson.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg><span className="cap__title">Content protection</span></div><p className="cap__body">DRM, watermarking, and download restrictions to protect paid course content.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"></path></svg><span className="cap__title">Multi-language</span></div><p className="cap__body">i18n content, RTL support, and subtitle management for global learners.</p></div>
          </div>
        </section>

        <section id="s-work" className="section reveal">
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-end","gap":"20px","flexWrap":"wrap"}}>
            <div><p className="eyebrow">// selected edtech builds — production systems</p><h2 className="title mono">Systems we've built</h2></div>
            <Link className="mono" href="/portfolio/" style={{"fontSize":"13px","whiteSpace":"nowrap"}}>view all ↗</Link>
          </div>
          <div className="grid grid-3 stagger">
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">classroom.uni-campus.ac.uk</span></div><div className="work__pad"><div className="work__tag">EDTECH · UK</div><div className="work__title">University virtual classroom — 50,000 students</div><p className="work__desc">LiveKit-based virtual classroom deployed across 3 UK university campuses. HD video for 200 concurrent users per session, recording to S3, and LMS grade sync.</p><div className="work__metrics"><div className="work__mcell"><b>50,000</b><span>students reached</span></div><div className="work__mcell"><b>200</b><span>concurrent/session</span></div></div><div className="work__stack"><span className="tag tag--y">LiveKit</span><span className="tag tag--y">WebRTC</span><span className="tag tag--y">AWS S3</span></div></div></div>
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.codecamp-lms.in</span></div><div className="work__pad"><div className="work__tag">ONLINE LEARNING · INDIA</div><div className="work__title">B2C coding bootcamp LMS — ₹5 Cr revenue year 1</div><p className="work__desc">Full-stack LMS with video lessons, coding challenges, mentor sessions, and a certificate system. 12,000 active learners in year 1.</p><div className="work__metrics"><div className="work__mcell"><b>₹5 Cr</b><span>revenue year 1</span></div><div className="work__mcell"><b>12,000</b><span>active learners</span></div></div><div className="work__stack"><span className="tag tag--y">React</span><span className="tag tag--y">Node.js</span><span className="tag tag--y">PostgreSQL</span></div></div></div>
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">portal.elearn-suite.ae</span></div><div className="work__pad"><div className="work__tag">CORPORATE L&amp;D · UAE</div><div className="work__title">White-label e-learning platform for 40 enterprises</div><p className="work__desc">SCORM-compatible white-label LMS licensed to 40 enterprise clients for employee onboarding. SAML SSO, custom branding per tenant, xAPI reporting.</p><div className="work__metrics"><div className="work__mcell"><b>40</b><span>enterprise clients</span></div><div className="work__mcell"><b>1</b><span>white-label core</span></div></div><div className="work__stack"><span className="tag tag--y">SCORM</span><span className="tag tag--y">xAPI</span><span className="tag tag--y">SAML SSO</span></div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// edtech.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Can you integrate with existing content libraries?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — SCORM, xAPI (Tin Can), and LTI standards allow content from major publishers to plug in to your LMS.</p></div></div>
            <div className="faq__item"><button className="faq__q">How do you handle video at scale?<span className="sign">[+]</span></button><div className="faq__a"><p>AWS MediaConvert for encoding, CloudFront for global CDN delivery, and adaptive bitrate streaming for variable connections.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you build live proctoring features?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — webcam monitoring, screen recording, and AI-based behaviour analysis integrated via Proctorio or custom builds.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can your platforms handle 10,000+ concurrent students?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — we load-test with 10k concurrent users as standard. Autoscaling handles traffic spikes during exam periods.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-3">
            <Link className="svc" href="/saas-development/"><div className="svc__title" style={{"fontSize":"16px"}}>SaaS development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Multi-tenant LMS SaaS platforms with subscription billing and analytics.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <a className="svc" href="https://digitalwebweaver.com/web-application-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Web application development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Assessment engines, learning dashboards, and certification platforms.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></a>
            <Link className="svc" href="/mobile-app-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Mobile app development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>iOS and Android learning apps with offline-first course downloads.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --edtech-project<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Build your EdTech platform</h2>
          <p className="cta__lead">Scalable, engaging, and built for how people actually learn. Tell us what you're building and we'll map the learner journey with you.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Start a project</Link>
            <Link className="btn btn--ghost" href="/portfolio/">View our work</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Senior engineers only</span><span><span className="g">●</span> 48-hr match</span><span><span className="g">●</span> No lock-in</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">edtech.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
