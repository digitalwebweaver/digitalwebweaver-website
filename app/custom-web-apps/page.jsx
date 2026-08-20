import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "Custom Web Application Development | React & Next.js India — Digital Web Weaver" },
  description: "Custom web apps — portals, dashboards, internal tools, and SaaS products — built with React, Next.js, and Node.js. 80+ web apps delivered for 150+ clients across India, UK & US.",
  alternates: { canonical: "/custom-web-apps/" },
  openGraph: { title: "Custom Web Application Development | React & Next.js India — Digital Web Weaver", description: "Custom web apps — portals, dashboards, internal tools, and SaaS products — built with React, Next.js, and Node.js. 80+ web apps delivered for 150+ clients across India, UK & US.", url: "/custom-web-apps/", type: "website" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={serviceSchema({ name: "Custom Web Apps", description: "Custom web apps — portals, dashboards, internal tools, and SaaS products — built with React, Next.js, and Node.js. 80+ web apps delivered for 150+ clients across India, UK & US.", href: "/custom-web-apps/" })} />
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-build" data-target="s-build" title="What we build">⚙</button>
      <button className="activitybar__btn" data-scroll="s-capabilities" data-target="s-capabilities" title="Capabilities">❮❯</button>
      <button className="activitybar__btn" data-scroll="s-work" data-target="s-work" title="Work">◈</button>
      <button className="activitybar__btn" data-scroll="s-process" data-target="s-process" title="Process">❯</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{color:"var(--teal)"}}>●</span> custom-web-apps.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{color:"var(--yellow)"}}>●</span> services.ts</button>
        <button className="tab" data-scroll="s-work" data-target="s-work"><span className="tdot" style={{color:"var(--pink)"}}>●</span> work.json</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{color:"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// custom-web-apps.ts · React · Next.js · Node.js</p>
            <span className="badge">CUSTOM WEB APPS</span>
            <h1 className="hero__h1">Custom web applications <span className="pink">built</span> to <span className="teal">scale</span></h1>
            <p className="hero__lead">From internal tools and dashboards to customer-facing portals — we build custom web apps that close the gaps commercial software leaves behind. No forced workflows, no monthly per-seat pricing creep.</p>
            <div className="btn-row" style={{marginTop:"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Get free estimate</a>
              <a className="btn btn--ghost" href="#s-work" data-scroll="s-work">$ view --work</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{color:"var(--pink)"}}>80+</b><span>web apps delivered</span></div>
              <div className="hero__stat"><b style={{color:"var(--teal)"}}>150+</b><span>clients served</span></div>
              <div className="hero__stat"><b style={{color:"var(--yellow)"}}>TS</b><span>TypeScript throughout</span></div>
            </div>
          </div>
          <div className="formcard" id="estimate">
            <div className="code__head"><span className="dot dot--red" style={{width:"8px",height:"8px"}}></span><span className="fn">estimate.form</span><span className="mut">— free</span></div>
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
          <div className="stat-cell"><div className="big" style={{color:"var(--pink)"}}>80+</div><div className="lbl">WEB_APPS</div><div className="sub">▲ portals · dashboards · SaaS</div></div>
          <div className="stat-cell"><div className="big" style={{color:"var(--teal)"}}>150+</div><div className="lbl">CLIENTS_SERVED</div><div className="sub">▲ India · UK · US · Global</div></div>
          <div className="stat-cell"><div className="big" style={{color:"var(--yellow)"}}>TS</div><div className="lbl">TYPESCRIPT</div><div className="sub">▲ type-safe, every layer</div></div>
          <div className="stat-cell"><div className="big" style={{color:"var(--pink)"}}>24h</div><div className="lbl">ESTIMATE</div><div className="sub">▲ free · no commitment</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// what we build</span></p>
          <h2 className="title mono">What we build</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Web portals</div><p className="svc__body">Role-based access systems for partners, customers, or staff — each role sees only what it needs.</p><div className="svc__foot"><span>portal.tsx</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Admin dashboards</div><p className="svc__body">Analytics and operational data tools that turn raw data into decisions your team can act on.</p><div className="svc__foot"><span>dashboard.tsx</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Internal tools</div><p className="svc__body">Back-office automation replacing spreadsheets — validation, history, and reporting built in.</p><div className="svc__foot"><span>internal.tsx</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">SaaS products</div><p className="svc__body">Multi-tenant subscription platforms — from zero to your first paying customer.</p><div className="svc__foot"><span>saas.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">API-backed apps</div><p className="svc__body">React frontends wired to third-party integrations — payments, CRMs, ERPs, and more.</p><div className="svc__foot"><span>api.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Legacy replacement</div><p className="svc__body">Modernising outdated systems into a maintainable stack without disrupting the business.</p><div className="svc__foot"><span>migrate.sh</span></div></div>
          </div>
        </section>

        <section id="s-capabilities" className="section reveal">
          <p className="eyebrow">// technical depth — not just CRUD screens</p>
          <h2 className="title mono">Web app capabilities</h2>
          <div className="grid grid-3">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8l4 4-4 4M20 8l-4 4 4 4M14 4l-4 16"></path></svg><span className="cap__title">React &amp; Next.js</span></div><p className="cap__body">SSR, SSG, and client-side rendering — the right strategy chosen per screen, not applied blindly.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg><span className="cap__title">Auth &amp; RBAC</span></div><p className="cap__body">JWT, OAuth, and session management with role-based access control baked into every route.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l2-7 4 14 2-7h6"></path></svg><span className="cap__title">Real-time data</span></div><p className="cap__body">WebSockets, Server-Sent Events, or polling — whichever fits the data freshness your app needs.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M8 12l3 3 5-6"></path></svg><span className="cap__title">E2E testing</span></div><p className="cap__body">Playwright automation covering critical user flows before every release, not just at launch.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 1 0 9 9"></path><path d="M12 12l5-3"></path></svg><span className="cap__title">Performance</span></div><p className="cap__body">Core Web Vitals and lazy loading tuned so dashboards stay fast even with heavy datasets.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.3A3.5 3.5 0 0 1 17 18z"></path><path d="M12 12v5m0-5l-2 2m2-2l2 2"></path></svg><span className="cap__title">Cloud deploy</span></div><p className="cap__body">AWS, GCP, and Vercel with CI/CD pipelines built by GitHub Actions or Docker.</p></div>
          </div>
        </section>

        <section id="s-stack" className="section reveal">
          <p className="eyebrow">import &#123; stack &#125; from "@dww/apps" <span className="c">// the app stack</span></p>
          <h2 className="title mono">Technology stack</h2>
          <div className="stack-tabs" data-stack>
            <button className="stack-tab" data-cat="Frontend">Frontend <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Backend">Backend <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Auth">Auth <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Infra">Infra <span className="n">[4]</span></button>
          </div>
          <div className="stack-grid">
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--text)"}}>N</span><div className="stack-cell__name">Next.js</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"#61dafb"}}>R</span><div className="stack-cell__name">React 18</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"#3178c6"}}>TS</span><div className="stack-cell__name">TypeScript</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--teal)"}}>css</span><div className="stack-cell__name">CSS Modules</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--green)"}}>No</span><div className="stack-cell__name">Node.js</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--yellow)"}}>Py</span><div className="stack-cell__name">Python</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--teal)"}}>Pg</span><div className="stack-cell__name">PostgreSQL</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--pink)"}}>Rd</span><div className="stack-cell__name">Redis</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Auth"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--pink)"}}>A0</span><div className="stack-cell__name">Auth0</div><div className="stack-cell__cat">Auth</div></div>
            <div className="stack-cell" data-cat="Auth"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--teal)"}}>Cl</span><div className="stack-cell__name">Clerk</div><div className="stack-cell__cat">Auth</div></div>
            <div className="stack-cell" data-cat="Auth"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--yellow)"}}>JWT</span><div className="stack-cell__name">JWT</div><div className="stack-cell__cat">Auth</div></div>
            <div className="stack-cell" data-cat="Auth"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"#c99bb4"}}>OA</span><div className="stack-cell__name">OAuth 2.0</div><div className="stack-cell__cat">Auth</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--yellow)"}}>aws</span><div className="stack-cell__name">AWS</div><div className="stack-cell__cat">Infra</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--text)"}}>Dk</span><div className="stack-cell__name">Docker</div><div className="stack-cell__cat">Infra</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--green)"}}>GH</span><div className="stack-cell__name">GitHub Actions</div><div className="stack-cell__cat">Infra</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--text)"}}>▲</span><div className="stack-cell__name">Vercel</div><div className="stack-cell__cat">Infra</div></div>
          </div>
        </section>

        <section id="s-process" className="section reveal">
          <p className="eyebrow">function <span style={{color:"var(--text)"}}>appProcess</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">Development process</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Requirements</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Architecture</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Development</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Test &amp; deploy</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04 · ◷ 1 week</div><div className="pipe-detail__title">Requirements</div><p className="pipe-detail__body">User stories, wireframes, and technical specifications — so the build starts against a precise brief, not a guess.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>User stories &amp; wireframes</span></li><li><span className="ok">✓</span><span>Technical specification</span></li><li><span className="ok">✓</span><span>Itemised estimate within 24h</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww discover --app</div><div className="t2">✓ user stories mapped  ✓ scope approved  ✓ estimate sent</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04 · ◷ 1–2 weeks</div><div className="pipe-detail__title">Architecture</div><p className="pipe-detail__body">Frontend/backend separation, data modeling, API design, and auth flows — signed off before development starts.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Data model &amp; API design</span></li><li><span className="ok">✓</span><span>Auth &amp; role flows mapped</span></li><li><span className="ok">✓</span><span>Frontend / backend split defined</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww design --architecture</div><div className="t2">✓ schema approved  ✓ API contracts set  ✓ auth model locked</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04 · ◷ ongoing sprints</div><div className="pipe-detail__title">Development</div><p className="pipe-detail__body">Two-week sprints with staging deploys and stakeholder reviews — working software on a live URL every sprint.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Fortnightly staging deploys</span></li><li><span className="ok">✓</span><span>Stakeholder review each sprint</span></li><li><span className="ok">✓</span><span>Clean, documented codebase</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww ship --sprint</div><div className="t2">✓ staging deployed  ✓ demo shipped  ✓ tests passing</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04 · ◷ launch week</div><div className="pipe-detail__title">Test &amp; deploy</div><p className="pipe-detail__body">E2E testing, performance audits, and production deployment — with monitoring switched on from day one.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Playwright E2E suite passed</span></li><li><span className="ok">✓</span><span>Performance audit passed</span></li><li><span className="ok">✓</span><span>Production deploy, monitored</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww deploy --prod</div><div className="t2">✓ E2E green  ✓ perf budget met  ✓ live · monitored</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">WHAT_YOU_GET</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Figma design source files</span></div><div><span className="plus">+</span><span>Clean, documented codebase</span></div><div><span className="plus">+</span><span>CI/CD pipeline</span></div><div><span className="plus">+</span><span>SEO &amp; analytics setup</span></div><div><span className="plus">+</span><span>Performance report</span></div></div>
          </div>
        </section>

        <section id="s-work" className="section reveal">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"20px",flexWrap:"wrap"}}>
            <div><p className="eyebrow">// selected web apps — production systems</p><h2 className="title mono">Apps we've built</h2></div>
            <Link className="mono" href="/portfolio/" style={{fontSize:"13px",whiteSpace:"nowrap"}}>view all ↗</Link>
          </div>
          <div className="grid grid-3 stagger">
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">wms.3pl-ops.com</span></div><div className="work__pad"><div className="work__tag">OPERATIONS · 3PL</div><div className="work__title">Warehouse management system</div><p className="work__desc">Custom warehouse management system replacing manual spreadsheets — inbound/outbound tracking and daily reconciliation reports for a 3PL operation.</p><div className="work__metrics"><div className="work__mcell"><b>Daily</b><span>reconciliation reports</span></div><div className="work__mcell"><b>3PL</b><span>logistics operation</span></div></div><div className="work__stack"><span className="tag tag--y">React</span><span className="tag tag--y">Node.js</span><span className="tag tag--y">PostgreSQL</span></div></div></div>
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">portal.lendwise.in</span></div><div className="work__pad"><div className="work__tag">FINTECH · NBFC</div><div className="work__title">Loan management portal</div><p className="work__desc">Multi-role portal for an NBFC lender — separate workflows for applicants, loan officers, and admins across the full loan lifecycle.</p><div className="work__metrics"><div className="work__mcell"><b>3</b><span>user roles</span></div><div className="work__mcell"><b>NBFC</b><span>fintech lending</span></div></div><div className="work__stack"><span className="tag tag--y">Next.js</span><span className="tag tag--y">Laravel</span><span className="tag tag--y">MySQL</span></div></div></div>
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.recruitos.io</span></div><div className="work__pad"><div className="work__tag">HR · SAAS</div><div className="work__title">Recruitment SaaS platform</div><p className="work__desc">Multi-tenant recruitment SaaS taken from zero to its first paying customer in 14 weeks — job pipelines, scorecards, and interview scheduling.</p><div className="work__metrics"><div className="work__mcell"><b>14 wks</b><span>zero to paying customer</span></div><div className="work__mcell"><b>SaaS</b><span>multi-tenant HR</span></div></div><div className="work__stack"><span className="tag tag--y">React</span><span className="tag tag--y">NestJS</span><span className="tag tag--y">PostgreSQL</span></div></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// why DWW for custom web apps</p>
          <h2 className="title mono">Built for your workflow, not a generic one</h2>
          <div className="grid grid-4 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{color:"var(--pink)"}}>🎯 TAILORED</div><div className="cap__title" style={{marginTop:"10px"}}>Business-specific</div><p className="cap__body">Tailored to your actual workflow — no generic templates or drag-and-drop compromises.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{color:"var(--pink)"}}>📘 TYPED</div><div className="cap__title" style={{marginTop:"10px"}}>TypeScript throughout</div><p className="cap__body">Type-safe across every layer — frontend, backend, and shared contracts — so refactors stay safe.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{color:"var(--pink)"}}>⚡ FAST</div><div className="cap__title" style={{marginTop:"10px"}}>Fast, always</div><p className="cap__body">Performance is built in from inception, not bolted on when dashboards start to feel slow.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{color:"var(--pink)"}}>🔒 SAFE</div><div className="cap__title" style={{marginTop:"10px"}}>Secure by design</div><p className="cap__body">OWASP compliance, proper auth, and data isolation between tenants and roles, standard.</p></div>
          </div>
          <div className="panel-note" style={{background:"var(--panel)"}}><p style={{fontSize:"16px",color:"var(--text-2)",lineHeight:"1.65",maxWidth:"960px"}}>We build custom web applications — from internal tools and dashboards to customer-facing portals — for founders and enterprises across India, the UK, the US, and beyond. When a workflow is unique, data is sensitive, or SaaS subscription costs would exceed a custom build within two to three years, a purpose-built app pays for itself. Every project is custom-coded, owned by you, and handed over with a codebase your own team can actually pick up.</p></div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// client words — custom web apps</p>
          <div className="grid grid-3 stagger">
            <div className="quote"><div className="stars">★★★★★</div><p>They replaced four different SaaS tools we were paying for with one custom app. It does exactly what our workflow needs — nothing more, nothing less.</p><div className="quote__who"><div className="quote__avatar">PM</div><div><div className="quote__name">Priya M.</div><div className="quote__role">Operations Director · Logistics · India</div></div></div></div>
            <div className="quote"><div className="stars">★★★★★</div><p>The codebase they handed over was the cleanest I've seen from an external vendor. Our internal team picked it up within a week. Architecture docs included.</p><div className="quote__who"><div className="quote__avatar">TW</div><div><div className="quote__name">Tom W.</div><div className="quote__role">VP Engineering · FinTech · UK</div></div></div></div>
            <div className="quote"><div className="stars">★★★★★</div><p>Our portal handles 8,000 active users daily without issues. The load testing they did pre-launch caught a database bottleneck we'd never have spotted ourselves.</p><div className="quote__who"><div className="quote__avatar">SK</div><div><div className="quote__name">Sneha K.</div><div className="quote__role">CTO · HR SaaS · India</div></div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// custom-web-apps.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">When is a custom web app better than SaaS?<span className="sign">[+]</span></button><div className="faq__a"><p>When workflows are unique, data is sensitive, or SaaS subscription costs would exceed the cost of a custom build within 2–3 years.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you replace our Excel-based process?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — we start with an analysis of the spreadsheets in use, then build a proper web app with validation, history, and reporting.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you build multi-language apps?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — i18n support via next-intl or react-i18next, RTL support, and CMS-managed translations are standard options.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can users customise their own dashboards?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — configurable widgets, saved filters, and user-defined layouts are standard features we build into admin dashboards.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <a className="svc" href="https://digitalwebweaver.com/web-application-development/"><div className="svc__title" style={{fontSize:"16px"}}>Web application development</div><p className="svc__body" style={{fontSize:"13.5px"}}>SaaS platforms, portals, dashboards, and enterprise systems.</p><div className="mono" style={{fontSize:"12px",color:"var(--pink)",marginTop:"12px"}}>open ↗</div></a>
            <Link className="svc" href="/custom-software-development/"><div className="svc__title" style={{fontSize:"16px"}}>Custom software</div><p className="svc__body" style={{fontSize:"13.5px"}}>Bespoke ERP, CRM, portals, and workflow automation.</p><div className="mono" style={{fontSize:"12px",color:"var(--pink)",marginTop:"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/saas-development/"><div className="svc__title" style={{fontSize:"16px"}}>SaaS development</div><p className="svc__body" style={{fontSize:"13.5px"}}>Multi-tenant SaaS with Stripe billing, SSO, and analytics.</p><div className="mono" style={{fontSize:"12px",color:"var(--pink)",marginTop:"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/web-development/"><div className="svc__title" style={{fontSize:"16px"}}>Web development</div><p className="svc__body" style={{fontSize:"13.5px"}}>Marketing sites, portals, and web apps — full stack, one team.</p><div className="mono" style={{fontSize:"12px",color:"var(--pink)",marginTop:"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --web-app<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to build the tool your business actually needs?</h2>
          <p className="cta__lead">Free scoping and a detailed estimate from senior engineers — within 24 hours. Tell us what you need and we'll scope it.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Get free estimate</Link>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Senior engineers</span><span><span className="g">●</span> Fixed price</span><span><span className="g">●</span> You own the code</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">custom-web-apps.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
