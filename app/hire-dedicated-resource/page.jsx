import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "Hire Dedicated Developers India | Digital Web Weaver" },
  description: "Hire dedicated developers from India. Scale your team with vetted full-stack, mobile, AI, and DevOps engineers — flexible 1-to-12 month engagements, deployed in 72 hours.",
  alternates: { canonical: "/hire-dedicated-resource/" },
  openGraph: { title: "Hire Dedicated Developers India | Digital Web Weaver", description: "Hire dedicated developers from India. Scale your team with vetted full-stack, mobile, AI, and DevOps engineers — flexible 1-to-12 month engagements, deployed in 72 hours.", url: "/hire-dedicated-resource/", type: "website" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={serviceSchema({ name: "Hire Dedicated Team", description: "Hire dedicated developers from India. Scale your team with vetted full-stack, mobile, AI, and DevOps engineers — flexible 1-to-12 month engagements, deployed in 72 hours.", href: "/hire-dedicated-resource/" })} />
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-models" data-target="s-models" title="Models &amp; pricing">◈</button>
      <button className="activitybar__btn" data-scroll="s-stack" data-target="s-stack" title="Stack">❮❯</button>
      <button className="activitybar__btn" data-scroll="s-how" data-target="s-how" title="How it works">❯</button>
      <button className="activitybar__btn" data-scroll="s-guarantees" data-target="s-guarantees" title="Guarantees">✓</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> hire-dedicated.ts</button>
        <button className="tab" data-scroll="s-models" data-target="s-models"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> models.ts</button>
        <button className="tab" data-scroll="s-how" data-target="s-how"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> how-it-works.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// hire-dedicated.ts · staff augmentation · from India</p>
            <span className="badge">DEDICATED RESOURCES</span>
            <h1 className="hero__h1">Hire senior <span className="pink">engineers</span> on&nbsp;demand</h1>
            <p className="hero__lead">Staff your team with pre-vetted, production-grade engineers from India — deployed in 72 hours. Full-time dedication, no agency overhead, no risk. You get the talent, we handle the rest.</p>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>72h</b><span>to deploy</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>50+</b><span>engineers on bench</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>97%</b><span>client retention</span></div>
            </div>
            <div className="trust">
              <div className="trust__label">TRUSTED_BY</div>
              <div className="trust__row"><span className="trust__chip">FinanceHub</span><span className="trust__chip">MedTrack</span><span className="trust__chip">FleetBase</span><span className="trust__chip">EdVault</span></div>
            </div>
            <div className="btn-row" style={{"marginTop":"28px"}}>
              <a className="btn btn--ghost" href="#s-models" data-scroll="s-models">$ view --pricing</a>
              <a className="btn btn--ghost teal" href="#s-how" data-scroll="s-how">$ how --it-works</a>
            </div>
          </div>
          <div className="formcard" id="match">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">match.form</span><span className="mut">— free brief</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE BRIEF</p>
              <p className="form__title">Match me with an engineer</p>
              <p className="form__lead">Tell us what you need. We'll shortlist 3 profiles within 24 hours.</p>
              <div className="field-row">
                <div className="field first"><label className="label">YOUR NAME</label><input className="input" name="name" placeholder="Your name" /></div>
                <div className="field first"><label className="label">WORK EMAIL</label><input className="input" name="email" type="email" placeholder="you@company.com" /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">ROLE NEEDED</label>
                <select className="select" name="role"><option>Full-Stack (React / Node)</option><option>Full-Stack (Vue / Laravel)</option><option>Backend (Python / Django)</option><option>Backend (Node.js)</option><option>Mobile (React Native)</option><option>Mobile (Flutter)</option><option>DevOps / Cloud</option><option>AI / ML Engineer</option><option>Product Designer</option><option>Other</option></select>
                </div>
                <div className="field"><label className="label">ENGAGEMENT DURATION</label>
                <select className="select" name="duration"><option>1–3 months</option><option>3–6 months</option><option>6–12 months</option><option>12+ months</option></select>
                </div>
              </div>
              <button className="form__submit" type="submit">See matched profiles ↗</button>
              <p className="form__micro">No commitment · NDA signed first · 24-hour shortlist</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww match --brief</div>
              <div className="s1">✓ brief received<br />✓ searching the bench<br />✓ 3 profiles being shortlisted</div>
              <div className="s2">Thanks<span data-name-slot></span> — you'll have 3 matched profiles within 24 hours.</div>
              <button className="s-reset" type="button">$ new --brief</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>72h</div><div className="lbl">TO_DEPLOY</div><div className="sub">▲ brief → first commit</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>50+</div><div className="lbl">ENGINEERS</div><div className="sub">▲ vetted · 5+ yrs each</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>97%</div><div className="lbl">RETENTION</div><div className="sub">▲ clients who re-hire</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>30d</div><div className="lbl">FREE_TRIAL</div><div className="sub">▲ replace at no cost</div></div>
        </section>

        <section id="s-models" className="section reveal">
          <p className="eyebrow">const engagement = [ <span className="c">// three ways to work with us</span></p>
          <h2 className="title mono">Three ways to work with us</h2>
          <p className="subtitle">From a single specialist to a full embedded squad — pick the model that fits your context. Every model includes senior engineers and full source-code ownership.</p>
          <div className="grid grid-3 stagger">
            <div className="price">
              <div className="price__head"><div className="price__kind" style={{"color":"var(--teal)"}}>01 · SINGLE ENGINEER</div><div className="price__title">Single engineer</div><p className="price__body">One senior engineer fully dedicated to your team. Works in your stack, attends your standups, accountable to your PM.</p><div className="price__amt"><b>$3,800</b><span>/month · full-time</span></div></div>
              <ul className="price__list"><li><span className="ok">✓</span><span>Dedicated 160 hrs / month</span></li><li><span className="ok">✓</span><span>Works in your timezone (±2h)</span></li><li><span className="ok">✓</span><span>Daily async updates</span></li><li><span className="ok">✓</span><span>14-day risk-free trial</span></li></ul>
              <div className="price__foot"><a className="price__cta btn--ghost" href="#s-contact" data-scroll="s-contact" style={{"display":"block","textAlign":"center","color":"var(--text)"}}>Get started ↗</a></div>
            </div>
            <div className="price is-featured">
              <span className="price__badge">MOST POPULAR</span>
              <div className="price__head"><div className="price__kind" style={{"color":"var(--pink)"}}>02 · POD TEAM (2–4)</div><div className="price__title">Pod team</div><p className="price__body">A balanced squad — typically a lead, a specialist, and a QA engineer. Owns a product stream end-to-end from day one.</p><div className="price__amt"><b>$9,500</b><span>/month · full team</span></div></div>
              <ul className="price__list"><li><span className="ok">✓</span><span>2–4 senior engineers</span></li><li><span className="ok">✓</span><span>Dedicated Slack channel</span></li><li><span className="ok">✓</span><span>Weekly sprint reviews</span></li><li><span className="ok">✓</span><span>Tech lead included</span></li></ul>
              <div className="price__foot"><a className="price__cta" href="#s-contact" data-scroll="s-contact" style={{"display":"block","textAlign":"center","background":"var(--pink)","color":"var(--bg)"}}>Get started ↗</a></div>
            </div>
            <div className="price">
              <div className="price__head"><div className="price__kind" style={{"color":"var(--yellow)"}}>03 · EMBEDDED SQUAD (5–12)</div><div className="price__title">Embedded squad</div><p className="price__body">A full cross-functional team inside your org. We bring engineering leadership, establish process, and report into your product org.</p><div className="price__amt"><b>$18,000+</b><span>/month · custom</span></div></div>
              <ul className="price__list"><li><span className="ok">✓</span><span>5–12 engineers + PM</span></li><li><span className="ok">✓</span><span>Dedicated engineering manager</span></li><li><span className="ok">✓</span><span>Your workflows and tools</span></li><li><span className="ok">✓</span><span>Quarterly roadmap planning</span></li></ul>
              <div className="price__foot"><a className="price__cta btn--ghost" href="#s-contact" data-scroll="s-contact" style={{"display":"block","textAlign":"center","color":"var(--text)"}}>Talk to us ↗</a></div>
            </div>
          </div>
        </section>

        <section id="s-stack" className="section reveal">
          <p className="eyebrow">import &#123; engineers &#125; from "@dww/bench" <span className="c">// specialists, never generalists</span></p>
          <h2 className="title mono">Engineers across every major stack</h2>
          <p className="subtitle">We don't place generalists. Every engineer we deploy is a specialist in their domain — filtered by stack below.</p>
          <div className="stack-tabs" data-stack>
            <button className="stack-tab" data-cat="Frontend">Frontend <span className="n">[5]</span></button>
            <button className="stack-tab" data-cat="Backend">Backend <span className="n">[5]</span></button>
            <button className="stack-tab" data-cat="Mobile">Mobile <span className="n">[2]</span></button>
            <button className="stack-tab" data-cat="Cloud &amp; AI">Cloud &amp; AI <span className="n">[6]</span></button>
          </div>
          <div className="stack-grid">
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#61dafb"}}>R</span><div className="stack-cell__name">React</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#42b883"}}>V</span><div className="stack-cell__name">Vue.js</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--red)"}}>Ng</span><div className="stack-cell__name">Angular</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#3178c6"}}>TS</span><div className="stack-cell__name">TypeScript</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>QL</span><div className="stack-cell__name">GraphQL</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--green)"}}>No</span><div className="stack-cell__name">Node.js</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>Py</span><div className="stack-cell__name">Python</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>L</span><div className="stack-cell__name">Laravel</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Fa</span><div className="stack-cell__name">FastAPI</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#61dafb"}}>Go</span><div className="stack-cell__name">Go</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Mobile"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#61dafb"}}>RN</span><div className="stack-cell__name">React Native</div><div className="stack-cell__cat">Mobile</div></div>
            <div className="stack-cell" data-cat="Mobile"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Fl</span><div className="stack-cell__name">Flutter</div><div className="stack-cell__cat">Mobile</div></div>
            <div className="stack-cell" data-cat="Cloud &amp; AI"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>aws</span><div className="stack-cell__name">AWS</div><div className="stack-cell__cat">Cloud &amp; AI</div></div>
            <div className="stack-cell" data-cat="Cloud &amp; AI"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#61dafb"}}>gcp</span><div className="stack-cell__name">GCP</div><div className="stack-cell__cat">Cloud &amp; AI</div></div>
            <div className="stack-cell" data-cat="Cloud &amp; AI"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#61dafb"}}>Dk</span><div className="stack-cell__name">Docker</div><div className="stack-cell__cat">Cloud &amp; AI</div></div>
            <div className="stack-cell" data-cat="Cloud &amp; AI"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>K8</span><div className="stack-cell__name">Kubernetes</div><div className="stack-cell__cat">Cloud &amp; AI</div></div>
            <div className="stack-cell" data-cat="Cloud &amp; AI"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--green)"}}>AI</span><div className="stack-cell__name">AI / ML</div><div className="stack-cell__cat">Cloud &amp; AI</div></div>
            <div className="stack-cell" data-cat="Cloud &amp; AI"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Pg</span><div className="stack-cell__name">PostgreSQL</div><div className="stack-cell__cat">Cloud &amp; AI</div></div>
          </div>
        </section>

        <section id="s-how" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>hiringPipeline</span>() &#123; <span className="c">// brief → first commit in 72h · click a stage</span></p>
          <h2 className="title mono">From brief to first commit in 72 hours</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Brief</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Shortlist</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Select</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Onboard</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04 · ◷ 30 min</div><div className="pipe-detail__title">Tell us</div><p className="pipe-detail__body">A short call to understand your stack, team size, and the role you need to fill. We confirm bench availability within a few hours.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>30-minute discovery call</span></li><li><span className="ok">✓</span><span>Role &amp; stack requirements</span></li><li><span className="ok">✓</span><span>Availability confirmed same day</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww brief --intake</div><div className="t2">✓ stack captured  ✓ role scoped  ✓ availability confirmed</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04 · ◷ 24 hrs</div><div className="pipe-detail__title">Shortlist</div><p className="pipe-detail__body">We pick senior engineers from our bench who match your stack and domain. You get CVs, GitHub links, and a short video intro from each.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>3 matched senior profiles</span></li><li><span className="ok">✓</span><span>CVs, GitHub &amp; code samples</span></li><li><span className="ok">✓</span><span>Short video intro per engineer</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww match --shortlist 3</div><div className="t2">✓ 3 profiles matched  ✓ CVs + GitHub + video sent</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04 · ◷ 48 hrs</div><div className="pipe-detail__title">Interview</div><p className="pipe-detail__body">A brief 30-minute technical chat with each candidate. You choose who joins. If you're not satisfied, we replace them free of charge.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>30-min technical interviews</span></li><li><span className="ok">✓</span><span>You choose who joins</span></li><li><span className="ok">✓</span><span>Free replacement if unsatisfied</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww interview --select</div><div className="t2">✓ interviews booked  ✓ engineer selected</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04 · ◷ 72 hrs</div><div className="pipe-detail__title">Onboard</div><p className="pipe-detail__body">We handle all onboarding admin. Your new engineer is in your Slack, your Jira, and shipping code within three business days.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>All onboarding admin handled</span></li><li><span className="ok">✓</span><span>Access to your tools set up</span></li><li><span className="ok">✓</span><span>First commit within 72 hours</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww onboard --sprint</div><div className="t2">✓ in Slack + Jira  ✓ first PR shipped</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
        </section>

        <section id="s-guarantees" className="section reveal">
          <p className="eyebrow">// zero-risk guarantees — baked into every engagement</p>
          <div className="grid grid-3 stagger">
            <div className="cap cap--green"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path><path d="M3 21v-5h5"></path></svg><span className="cap__title">Free replacement</span></div><p className="cap__body">If it isn't working in the first 30 days, we replace the engineer at no cost — no questions asked.</p></div>
            <div className="cap cap--teal"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg><span className="cap__title">NDA on day one</span></div><p className="cap__body">Every engagement starts with a signed NDA. Your IP, codebase, and business logic are protected from day one.</p></div>
            <div className="cap cap--yellow"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg><span className="cap__title">Time-tracked billing</span></div><p className="cap__body">Transparent daily logs, weekly reports, and end-of-month invoices. You see every hour — no black-box billing.</p></div>
          </div>
        </section>

        <section id="s-compare" className="section reveal">
          <p className="eyebrow">// diff — DWW engineers vs. typical agency headcount</p>
          <h2 className="title mono">Senior engineers, not agency headcount</h2>
          <div className="compare cols3">
            <div className="compare__head"><div className="c-cap">capability</div><div className="c-dww">Digital Web Weaver</div><div className="c-typ">typical agency</div></div>
            <div className="compare__row"><div className="c-cap">Seniority level</div><div className="c-dww">✓ 5+ yrs minimum</div><div className="c-typ">✕ Mixed — juniors common</div></div>
            <div className="compare__row"><div className="c-cap">Time to first deploy</div><div className="c-dww">✓ 72 hours</div><div className="c-typ">✕ 2–4 weeks</div></div>
            <div className="compare__row"><div className="c-cap">Code quality</div><div className="c-dww">✓ PR reviews, typed, tested</div><div className="c-typ">✕ Inconsistent</div></div>
            <div className="compare__row"><div className="c-cap">Communication</div><div className="c-dww">✓ Direct access, daily updates</div><div className="c-typ">✕ Via account manager</div></div>
            <div className="compare__row"><div className="c-cap">Replacement guarantee</div><div className="c-dww">✓ 30-day free replacement</div><div className="c-typ">✕ Paid or unavailable</div></div>
            <div className="compare__row"><div className="c-cap">NDA &amp; IP protection</div><div className="c-dww">✓ Signed on day one</div><div className="c-typ">✕ On request</div></div>
            <div className="compare__row"><div className="c-cap">Billing transparency</div><div className="c-dww">✓ Daily logs + weekly reports</div><div className="c-typ">✕ Monthly black-box</div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// hire.faq.md</p>
          <h2 className="title mono">Questions we always get asked</h2>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Are these engineers full-time dedicated to us?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. When you hire through Digital Web Weaver, the engineer works exclusively on your project during the engagement hours — never split across multiple clients.</p></div></div>
            <div className="faq__item"><button className="faq__q">What if the engineer isn't a good fit?<span className="sign">[+]</span></button><div className="faq__a"><p>We offer a 30-day risk-free trial. If the engineer isn't meeting expectations within the first month, we replace them at no additional cost — no questions asked.</p></div></div>
            <div className="faq__item"><button className="faq__q">Who owns the code and intellectual property?<span className="sign">[+]</span></button><div className="faq__a"><p>You do, 100%. All code written during the engagement is your IP. Our contracts are explicit about this, and the NDA reinforces it from day one.</p></div></div>
            <div className="faq__item"><button className="faq__q">What time zones do your engineers work in?<span className="sign">[+]</span></button><div className="faq__a"><p>We primarily operate on IST (UTC+5:30) with a flexible 4-hour daily overlap with your local time. For US East Coast and UK clients this works seamlessly.</p></div></div>
            <div className="faq__item"><button className="faq__q">What's the minimum engagement length?<span className="sign">[+]</span></button><div className="faq__a"><p>Our minimum is 1 month, though engagements under 3 months rarely see the full benefit of onboarding investment. We recommend a 3-month minimum for best results.</p></div></div>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./hire --this-week<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Need a senior engineer this week?</h2>
          <p className="cta__lead">Tell us what you're building and we'll send three shortlisted profiles within 24 hours — no commitment required.</p>
          <div className="cta__btns">
            <a className="btn btn--primary" href="#match" data-scroll="s-hero">See matched profiles ↗</a>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> 72-hour deployment</span><span><span className="g">●</span> 30-day free replacement</span><span><span className="g">●</span> NDA day one</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">hire-dedicated.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
