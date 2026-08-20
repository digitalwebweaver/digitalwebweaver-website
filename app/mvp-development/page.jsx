import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "MVP Development Company India | Launch in 8-12 Weeks — Digital Web Weaver" },
  description: "Investor-ready MVPs in 8–12 weeks — scope discipline, analytics from day one, and clean architecture ready for technical due diligence. 150+ clients, 4.9/5 average client rating.",
  alternates: { canonical: "/mvp-development/" },
  openGraph: { title: "MVP Development Company India | Launch in 8-12 Weeks — Digital Web Weaver", description: "Investor-ready MVPs in 8–12 weeks — scope discipline, analytics from day one, and clean architecture ready for technical due diligence. 150+ clients, 4.9/5 average client rating.", url: "/mvp-development/", type: "website" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={serviceSchema({ name: "MVP Development", description: "Investor-ready MVPs in 8–12 weeks — scope discipline, analytics from day one, and clean architecture ready for technical due diligence. 150+ clients, 4.9/5 average client rating.", href: "/mvp-development/" })} />
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-build" data-target="s-build" title="What's included">⚙</button>
      <button className="activitybar__btn" data-scroll="s-capabilities" data-target="s-capabilities" title="Capabilities">❮❯</button>
      <button className="activitybar__btn" data-scroll="s-process" data-target="s-process" title="Sprint plan">❯</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> mvp-development.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> included.ts</button>
        <button className="tab" data-scroll="s-process" data-target="s-process"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> sprint.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// mvp-development.ts · Next.js · Stripe · PostHog</p>
            <span className="badge">MVP DEVELOPMENT</span>
            <h1 className="hero__h1">From idea to <span className="pink">investor-ready MVP</span> in <span className="teal">8–12 weeks</span></h1>
            <p className="hero__lead">We build focused, fast MVPs that validate your assumptions, attract early users, and impress investors — without building everything at once.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Get free estimate</a>
              <a className="btn btn--ghost" href="#s-build" data-scroll="s-build">$ view --scope</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>8–12wk</b><span>idea to launch</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>150+</b><span>clients served</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>4.9/5</b><span>average rating</span></div>
            </div>
            <div className="trust">
              <p className="trust__label">// India · UK · US · Global</p>
              <div className="trust__row">
                <span className="trust__chip">Auth from day 1</span>
                <span className="trust__chip">Analytics wired in</span>
                <span className="trust__chip">NDA signed first</span>
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
                <div className="field"><label className="label">NAME *</label><input className="input" name="name" placeholder="Your name" required /></div>
                <div className="field"><label className="label">WORK EMAIL *</label><input className="input" name="email" type="email" placeholder="you@company.com" required /></div>
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
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>8–12wk</div><div className="lbl">DELIVERY</div><div className="sub">▲ idea to investor-ready</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>4.9/5</div><div className="lbl">CLUTCH_RATING</div><div className="sub">▲ verified client reviews</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>24h</div><div className="lbl">ESTIMATE</div><div className="sub">▲ free · no commitment</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const included = [ <span className="c">// what's in every MVP</span></p>
          <h2 className="title mono">What's included</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Discovery sprint</div><p className="svc__body">One week to map goals, users, and the single core flow that proves your value proposition — before any code is written.</p><div className="svc__foot"><span>discovery.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">UX design</div><p className="svc__body">Figma prototypes focused on validating the core flow fast — not full visual polish you'll redesign after user feedback.</p><div className="svc__foot"><span>ux.fig</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Core development</div><p className="svc__body">React, Node.js, and PostgreSQL — building only what's inside the MVP definition, with authentication and payments wired in.</p><div className="svc__foot"><span>core.tsx</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Launch ready</div><p className="svc__body">Production deployment on Vercel and AWS RDS with a CI/CD pipeline — a live URL your first users can actually sign up on.</p><div className="svc__foot"><span>launch.sh</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Analytics setup</div><p className="svc__body">PostHog instrumented across every core flow before launch, so you know what's working from day one — not guessing after.</p><div className="svc__foot"><span>analytics.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Feedback loop</div><p className="svc__body">We stay engaged after launch to help you read the data and respond to real user feedback with the next iteration.</p><div className="svc__foot"><span>feedback.ts</span></div></div>
          </div>
          <div className="panel-note">
            <p style={{"fontSize":"15px","color":"var(--text-2)","lineHeight":"1.6"}}><span className="plus" style={{"color":"var(--pink)","fontFamily":"var(--mono)"}}>#</span> We actively push back on features that aren't in the MVP definition.</p>
          </div>
        </section>

        <section id="s-capabilities" className="section reveal">
          <p className="eyebrow">// technical depth — not a throwaway prototype</p>
          <h2 className="title mono">MVP capabilities</h2>
          <div className="grid grid-3">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 3 4 14h6l-1 7 9-11h-6z"></path></svg><span className="cap__title">Rapid prototyping</span></div><p className="cap__body">Figma prototypes in days, not weeks, so we validate the concept before writing production code.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg><span className="cap__title">Auth from day 1</span></div><p className="cap__body">Auth0-backed sign-up, login, and session handling built in from the first sprint, not bolted on later.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"></path></svg><span className="cap__title">Instrumented launch</span></div><p className="cap__body">PostHog wired into every core flow so you see real usage data from day one, not assumptions.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.3A3.5 3.5 0 0 1 17 18z"></path><path d="M12 12v5m0-5l-2 2m2-2l2 2"></path></svg><span className="cap__title">Production infra</span></div><p className="cap__body">Vercel and AWS RDS from the start — no throwaway prototype infrastructure to migrate off later.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="13" rx="2"></rect><path d="M3 10h18M7 15h4"></path></svg><span className="cap__title">Payments ready</span></div><p className="cap__body">Stripe integrated when the MVP needs to take money — not a placeholder "coming soon" button.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"></rect><path d="M11 18h2"></path></svg><span className="cap__title">Mobile-responsive</span></div><p className="cap__body">Every MVP works cleanly on phone, tablet, and desktop — no separate mobile project needed to launch.</p></div>
          </div>
        </section>

        <section id="s-stack" className="section reveal">
          <p className="eyebrow">import &#123; stack &#125; from "@dww/mvp" <span className="c">// the MVP stack</span></p>
          <h2 className="title mono">MVP tech stack</h2>
          <div className="stack-tabs" data-stack>
            <button className="stack-tab" data-cat="Frontend">Frontend <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Backend">Backend <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Tools">Tools <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Infra">Infra <span className="n">[3]</span></button>
          </div>
          <div className="stack-grid">
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--text)"}}>N</span><div className="stack-cell__name">Next.js</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#61dafb"}}>R</span><div className="stack-cell__name">React</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#3178c6"}}>TS</span><div className="stack-cell__name">TypeScript</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Tw</span><div className="stack-cell__name">Tailwind</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--green)"}}>No</span><div className="stack-cell__name">Node.js</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Pg</span><div className="stack-cell__name">PostgreSQL</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--text)"}}>Pr</span><div className="stack-cell__name">Prisma</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>Rd</span><div className="stack-cell__name">Redis</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Tools"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>$</span><div className="stack-cell__name">Stripe</div><div className="stack-cell__cat">Tools</div></div>
            <div className="stack-cell" data-cat="Tools"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>A0</span><div className="stack-cell__name">Auth0</div><div className="stack-cell__cat">Tools</div></div>
            <div className="stack-cell" data-cat="Tools"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>PH</span><div className="stack-cell__name">PostHog</div><div className="stack-cell__cat">Tools</div></div>
            <div className="stack-cell" data-cat="Tools"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--text)"}}>Re</span><div className="stack-cell__name">Resend</div><div className="stack-cell__cat">Tools</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--text)"}}>▲</span><div className="stack-cell__name">Vercel</div><div className="stack-cell__cat">Infra</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>aws</span><div className="stack-cell__name">AWS RDS</div><div className="stack-cell__cat">Infra</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--green)"}}>GH</span><div className="stack-cell__name">GitHub Actions</div><div className="stack-cell__cat">Infra</div></div>
          </div>
        </section>

        <section id="s-process" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>mvpSprint</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">The 8-week MVP sprint</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Discovery</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Core build</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Polish &amp; features</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Launch</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">WEEK 01 / 08 · ◷ discovery</div><div className="pipe-detail__title">Discovery</div><p className="pipe-detail__body">User stories, a Figma prototype, and API design — turning your idea into a locked, precise scope before any production code is written.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>User stories &amp; core flow defined</span></li><li><span className="ok">✓</span><span>Figma prototype &amp; API design</span></li><li><span className="ok">✓</span><span>Scope locked, features deferred</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww discover --mvp</div><div className="t2">✓ core flow locked  ✓ prototype approved  ✓ scope frozen</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">WEEKS 02–04 / 08 · ◷ core build</div><div className="pipe-detail__title">Core build</div><p className="pipe-detail__body">React and Node.js on PostgreSQL — the core flow, authentication, and payments built together, not layered on at the end.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Core user flow shipped end to end</span></li><li><span className="ok">✓</span><span>Auth0 authentication wired in</span></li><li><span className="ok">✓</span><span>Stripe payments where needed</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww build --core</div><div className="t2">✓ flow shipped  ✓ auth live  ✓ payments wired</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">WEEKS 05–07 / 08 · ◷ polish</div><div className="pipe-detail__title">Polish &amp; features</div><p className="pipe-detail__body">Secondary flows within the agreed MVP scope, UX refinement, and a working CI/CD pipeline so every change ships safely.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Secondary flows within scope</span></li><li><span className="ok">✓</span><span>UX refinement pass</span></li><li><span className="ok">✓</span><span>CI/CD pipeline live</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww polish --scope</div><div className="t2">✓ flows refined  ✓ CI/CD green  ✓ scope respected</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">WEEK 08 / 08 · ◷ launch</div><div className="pipe-detail__title">Launch</div><p className="pipe-detail__body">UAT, PostHog analytics verified end to end, and a production deploy — you leave week 8 with real users on a live URL.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>UAT signed off</span></li><li><span className="ok">✓</span><span>Analytics verified across core flow</span></li><li><span className="ok">✓</span><span>Production launch, live URL</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww launch --mvp</div><div className="t2">✓ UAT passed  ✓ analytics live  ✓ shipped to production</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">WHAT_YOU_GET</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Figma design source files</span></div><div><span className="plus">+</span><span>Clean, documented codebase</span></div><div><span className="plus">+</span><span>CI/CD pipeline</span></div><div><span className="plus">+</span><span>SEO &amp; analytics setup</span></div><div><span className="plus">+</span><span>Performance report</span></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// why DWW for MVPs</p>
          <h2 className="title mono">Validate, then scale</h2>
          <div className="grid grid-4 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🎯 DISCIPLINE</div><div className="cap__title" style={{"marginTop":"10px"}}>Scope discipline</div><p className="cap__body">We actively push back on features that aren't in the MVP definition.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>📊 MEASURED</div><div className="cap__title" style={{"marginTop":"10px"}}>Analytics first</div><p className="cap__body">Every MVP ships with user tracking so you know what's working.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🎓 CLEAN</div><div className="cap__title" style={{"marginTop":"10px"}}>Investor-ready code</div><p className="cap__body">Clean architecture and documentation — ready for technical due diligence.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🔄 ENGAGED</div><div className="cap__title" style={{"marginTop":"10px"}}>Iteration partners</div><p className="cap__body">We stay engaged post-launch to help respond to user feedback.</p></div>
          </div>
          <div className="panel-note" style={{"background":"var(--panel)"}}><p style={{"fontSize":"16px","color":"var(--text-2)","lineHeight":"1.65","maxWidth":"960px"}}>Choosing an MVP development company for startups comes down to one question: will they help you validate fast, or build everything you asked for and call it done? Speed is easy if you skip the parts investors scrutinise — we don't. Every MVP starts with a one-week discovery sprint that locks the one core flow that proves your value proposition, before a line of production code is written. We design MVPs with clean architecture specifically so features can be added later without major rewrites, and we sign NDAs before any project discussion — your idea is protected from the first conversation. If mobile comes up mid-build, we can add a React Native app in weeks 6–8 reusing the same backend API, typically adding 2–3 weeks.</p></div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-3">
            <Link className="svc" href="/saas-development/"><div className="svc__title" style={{"fontSize":"16px"}}>SaaS development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Scale your validated MVP into a full multi-tenant SaaS platform.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <a className="svc" href="https://digitalwebweaver.com/web-application-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Web application development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Complex web apps with enterprise architecture for post-MVP growth.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></a>
            <Link className="svc" href="/react-developer/"><div className="svc__title" style={{"fontSize":"16px"}}>Hire a React developer</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Senior React engineers to accelerate your MVP frontend delivery.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// mvp-development.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">What's included in an MVP?<span className="sign">[+]</span></button><div className="faq__a"><p>Authentication, core user flow (the one thing that proves your value proposition), analytics, basic admin access, and production deployment.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can we add features later?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — we design MVPs with a clean architecture specifically so features can be added without major rewrites.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you sign NDAs?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — we sign NDAs before any project discussions. Your idea is protected from the first conversation.</p></div></div>
            <div className="faq__item"><button className="faq__q">What if we need mobile too?<span className="sign">[+]</span></button><div className="faq__a"><p>We can add a React Native app in weeks 6–8 reusing the same backend API, typically adding 2–3 weeks.</p></div></div>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --mvp-project<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to build your MVP?</h2>
          <p className="cta__lead">Free scoping and a detailed estimate from senior engineers — within 24 hours. Tell us what you're validating and we'll scope it.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Get your MVP scope ↗</Link>
            <Link className="btn btn--ghost" href="/portfolio/">See our work</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> NDA signed first</span><span><span className="g">●</span> 24-hr response</span><span><span className="g">●</span> Scope discipline</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">mvp-development.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
