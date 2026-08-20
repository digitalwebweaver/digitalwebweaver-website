import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Web Development Company India | React & Next.js Experts — Digital Web Weaver" },
  description: "Full-spectrum web development: marketing sites, web portals, web apps, and API backends. React, Next.js, Node.js, and TypeScript. India-based senior team.",
  alternates: { canonical: "/web-development/" },
  openGraph: { title: "Web Development Company India | React & Next.js Experts — Digital Web Weaver", description: "Full-spectrum web development: marketing sites, web portals, web apps, and API backends. React, Next.js, Node.js, and TypeScript. India-based senior team.", url: "/web-development/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-build" data-target="s-build" title="Services">⚙</button>
      <button className="activitybar__btn" data-scroll="s-capabilities" data-target="s-capabilities" title="Capabilities">❮❯</button>
      <button className="activitybar__btn" data-scroll="s-work" data-target="s-work" title="Work">◈</button>
      <button className="activitybar__btn" data-scroll="s-process" data-target="s-process" title="Process">❯</button>
      <button className="activitybar__btn" data-scroll="s-engage" data-target="s-engage" title="Engagement">$</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> web-development.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> services.ts</button>
        <button className="tab" data-scroll="s-work" data-target="s-work"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> work.json</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// web-development.ts · React · Next.js · TypeScript</p>
            <span className="badge">WEB DEVELOPMENT</span>
            <h1 className="hero__h1">High-performance <span className="pink">websites</span> &amp; <span className="teal">web&nbsp;apps</span></h1>
            <p className="hero__lead">From marketing sites to complex web applications — we engineer fast, accessible, and scalable web solutions on a modern stack. React, Next.js, Node.js and TypeScript, end to end.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Get free estimate</a>
              <a className="btn btn--ghost" href="#s-work" data-scroll="s-work">$ view --work</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>150+</b><span>web projects</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>90+</b><span>Core Web Vitals</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>TS</b><span>TypeScript-first</span></div>
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
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">WEB_PROJECTS</div><div className="sub">▲ sites · portals · apps</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>90+</div><div className="lbl">LIGHTHOUSE</div><div className="sub">▲ Core Web Vitals</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>AA</div><div className="lbl">WCAG_2.1</div><div className="sub">▲ accessible by default</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>24h</div><div className="lbl">ESTIMATE</div><div className="sub">▲ free · no commitment</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// what we build</span></p>
          <h2 className="title mono">Web development services</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Marketing websites</div><p className="svc__body">High-converting landing pages and corporate sites — SEO-first, fast, and CMS-managed by your team.</p><div className="svc__foot"><span>site.tsx</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Web applications</div><p className="svc__body">Portals, dashboards, and complex user-facing tools with roles, real-time data, and workflows.</p><div className="svc__foot"><span>app.tsx</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Backend APIs</div><p className="svc__body">REST and GraphQL APIs powering any frontend — typed contracts, auth, and rate limiting built in.</p><div className="svc__foot"><span>api.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">E-commerce</div><p className="svc__body">Custom storefronts and WooCommerce extensions with secure payments and inventory sync.</p><div className="svc__foot"><span>shop.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Progressive web apps</div><p className="svc__body">Installable, app-like web experiences with offline capability and push notifications.</p><div className="svc__foot"><span>pwa.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Legacy modernisation</div><p className="svc__body">Rewrite ageing PHP, jQuery, or old React codebases into a maintainable modern stack.</p><div className="svc__foot"><span>migrate.sh</span></div></div>
          </div>
        </section>

        <section id="s-capabilities" className="section reveal">
          <p className="eyebrow">// technical depth — not just pretty pages</p>
          <h2 className="title mono">Web development capabilities</h2>
          <div className="grid grid-3">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8l4 4-4 4M20 8l-4 4 4 4M14 4l-4 16"></path></svg><span className="cap__title">React &amp; Next.js</span></div><p className="cap__body">SSR, SSG, ISR — the right rendering strategy chosen per page for speed and SEO.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M9 12h4M11 12v5M15 16.5c.6.6 3 .8 3-1s-3-1-3-2.5 2.4-1.4 3-.8"></path></svg><span className="cap__title">TypeScript</span></div><p className="cap__body">Typed end to end — frontend, backend, and shared contracts, so refactors stay safe.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 1 0 9 9"></path><path d="M12 12l5-3"></path></svg><span className="cap__title">Core Web Vitals</span></div><p className="cap__body">LCP, CLS, and INP targets met and monitored in production, not just at launch.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg><span className="cap__title">Security</span></div><p className="cap__body">OWASP Top 10, CSP headers, and continuous dependency scanning as standard.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="1.6"></circle><path d="M5 8h14M12 8v5m0 0l-3 6m3-6l3 6"></path></svg><span className="cap__title">Accessibility</span></div><p className="cap__body">WCAG 2.1 AA with full keyboard navigation and screen-reader support from day one.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.3A3.5 3.5 0 0 1 17 18z"></path><path d="M12 12v5m0-5l-2 2m2-2l2 2"></path></svg><span className="cap__title">Cloud deploy</span></div><p className="cap__body">AWS, GCP, and Vercel with CI/CD pipelines and one-click rollback capability.</p></div>
          </div>
        </section>

        <section id="s-stack" className="section reveal">
          <p className="eyebrow">import &#123; stack &#125; from "@dww/web" <span className="c">// the modern web stack</span></p>
          <h2 className="title mono">Web development stack</h2>
          <div className="stack-tabs" data-stack>
            <button className="stack-tab" data-cat="Frontend">Frontend <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Backend">Backend <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="CMS">CMS <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Infra">Infra <span className="n">[4]</span></button>
          </div>
          <div className="stack-grid">
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--text)"}}>N</span><div className="stack-cell__name">Next.js</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#61dafb"}}>R</span><div className="stack-cell__name">React 18</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#3178c6"}}>TS</span><div className="stack-cell__name">TypeScript</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>css</span><div className="stack-cell__name">CSS Modules</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--green)"}}>No</span><div className="stack-cell__name">Node.js</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>Py</span><div className="stack-cell__name">Python</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Pg</span><div className="stack-cell__name">PostgreSQL</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>Rd</span><div className="stack-cell__name">Redis</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="CMS"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>Sa</span><div className="stack-cell__name">Sanity</div><div className="stack-cell__cat">CMS</div></div>
            <div className="stack-cell" data-cat="CMS"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Cf</span><div className="stack-cell__name">Contentful</div><div className="stack-cell__cat">CMS</div></div>
            <div className="stack-cell" data-cat="CMS"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#61dafb"}}>Wp</span><div className="stack-cell__name">WordPress</div><div className="stack-cell__cat">CMS</div></div>
            <div className="stack-cell" data-cat="CMS"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#c99bb4"}}>St</span><div className="stack-cell__name">Strapi</div><div className="stack-cell__cat">CMS</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>aws</span><div className="stack-cell__name">AWS</div><div className="stack-cell__cat">Infra</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--text)"}}>▲</span><div className="stack-cell__name">Vercel</div><div className="stack-cell__cat">Infra</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>Cf</span><div className="stack-cell__name">Cloudflare</div><div className="stack-cell__cat">Infra</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--green)"}}>GH</span><div className="stack-cell__name">GitHub Actions</div><div className="stack-cell__cat">Infra</div></div>
          </div>
        </section>

        <section id="s-process" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>webProcess</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">Web development process</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Discovery</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Design</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Development</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Launch</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04 · ◷ 1 week</div><div className="pipe-detail__title">Discovery</div><p className="pipe-detail__body">We map goals, users, content strategy, and technical requirements — turning a fuzzy brief into a precise, costed scope before any code is written.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Goals, users &amp; content strategy</span></li><li><span className="ok">✓</span><span>Technical requirements brief</span></li><li><span className="ok">✓</span><span>Itemised estimate within 24h</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww discover --web</div><div className="t2">✓ requirements locked  ✓ scope approved  ✓ estimate sent</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04 · ◷ 1–2 weeks</div><div className="pipe-detail__title">Design &amp; architecture</div><p className="pipe-detail__body">Figma designs, component structure, and API contracts — reviewed and signed off with you so there are no surprises once development starts.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>High-fidelity Figma designs</span></li><li><span className="ok">✓</span><span>Component + page architecture</span></li><li><span className="ok">✓</span><span>REST / GraphQL API contracts</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww design --review</div><div className="t2">✓ Figma signed off  ✓ components mapped  ✓ API contracts set</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04 · ◷ ongoing sprints</div><div className="pipe-detail__title">Development</div><p className="pipe-detail__body">Two-week sprints with staging deploys and stakeholder reviews. You see working software on a live URL every sprint — never a black box.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Fortnightly staging deploys</span></li><li><span className="ok">✓</span><span>Stakeholder review each sprint</span></li><li><span className="ok">✓</span><span>Clean, documented codebase</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww ship --sprint</div><div className="t2">✓ staging deployed  ✓ demo shipped  ✓ tests passing</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04 · ◷ launch week</div><div className="pipe-detail__title">QA &amp; launch</div><p className="pipe-detail__body">Lighthouse audit, accessibility audit, and cross-browser testing before a zero-downtime deploy to production with monitoring switched on.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Lighthouse + a11y audit passed</span></li><li><span className="ok">✓</span><span>Cross-browser QA</span></li><li><span className="ok">✓</span><span>Zero-downtime production deploy</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww deploy --prod</div><div className="t2">✓ Lighthouse 98  ✓ a11y AA  ✓ live · monitored</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">WHAT_YOU_GET</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Figma design source files</span></div><div><span className="plus">+</span><span>Clean, documented codebase</span></div><div><span className="plus">+</span><span>CI/CD pipeline</span></div><div><span className="plus">+</span><span>SEO &amp; analytics setup</span></div><div><span className="plus">+</span><span>Performance report</span></div></div>
          </div>
        </section>

        <section id="s-work" className="section reveal">
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-end","gap":"20px","flexWrap":"wrap"}}>
            <div><p className="eyebrow">// selected web builds — production systems</p><h2 className="title mono">Systems we've built</h2></div>
            <Link className="mono" href="/portfolio/" style={{"fontSize":"13px","whiteSpace":"nowrap"}}>view all ↗</Link>
          </div>
          <div className="grid grid-3 stagger">
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">global-logistics.com</span></div><div className="work__pad"><div className="work__tag">CORPORATE · NEXT.JS</div><div className="work__title">Global logistics website</div><p className="work__desc">Complete redesign and rebuild of a 40-page corporate site in Next.js — SEO-first architecture, a CMS for the marketing team, and multilingual support across 6 languages.</p><div className="work__metrics"><div className="work__mcell"><b>40</b><span>pages rebuilt</span></div><div className="work__mcell"><b>6</b><span>languages</span></div></div><div className="work__stack"><span className="tag tag--y">Next.js</span><span className="tag tag--y">Contentful</span><span className="tag tag--y">Cloudflare</span></div></div></div>
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.fleetos.io</span></div><div className="work__pad"><div className="work__tag">SAAS · FULL-STACK</div><div className="work__title">Fleet management SaaS</div><p className="work__desc">Full-stack web app for a fleet company — vehicle tracking dashboard, maintenance scheduling, a driver portal, and a reporting module. Delivered in 14 weeks.</p><div className="work__metrics"><div className="work__mcell"><b>14 wks</b><span>build time</span></div><div className="work__mcell"><b>4</b><span>core modules</span></div></div><div className="work__stack"><span className="tag tag--y">React</span><span className="tag tag--y">Node.js</span><span className="tag tag--y">PostgreSQL</span></div></div></div>
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">portal.provider.net</span></div><div className="work__pad"><div className="work__tag">HEALTHTECH · PORTAL</div><div className="work__title">Provider network portal</div><p className="work__desc">Multi-role portal for a network of 200 healthcare providers — appointment booking, patient records, billing, and a claims workflow replacing manual spreadsheets.</p><div className="work__metrics"><div className="work__mcell"><b>200+</b><span>providers</span></div><div className="work__mcell"><b>5</b><span>user roles</span></div></div><div className="work__stack"><span className="tag tag--y">Vue.js</span><span className="tag tag--y">Django</span><span className="tag tag--y">PostgreSQL</span></div></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// why DWW for web</p>
          <h2 className="title mono">Built for outcomes, not templates</h2>
          <div className="grid grid-4 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>⚡ FAST</div><div className="cap__title" style={{"marginTop":"10px"}}>Speed obsessed</div><p className="cap__body">Every site we ship scores 90+ on Core Web Vitals — speed is a ranking factor and a conversion lever.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>📘 TYPED</div><div className="cap__title" style={{"marginTop":"10px"}}>TypeScript first</div><p className="cap__body">No JavaScript shortcuts — typed code throughout, so the codebase stays safe to change.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>♿ OPEN</div><div className="cap__title" style={{"marginTop":"10px"}}>Accessible</div><p className="cap__body">WCAG 2.1 AA from day one — built in, not bolted on as a post-launch audit.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🔒 SAFE</div><div className="cap__title" style={{"marginTop":"10px"}}>Secure</div><p className="cap__body">OWASP compliance, dependency audits, and CSP headers standard on every build.</p></div>
          </div>
          <div className="panel-note" style={{"background":"var(--panel)"}}><p style={{"fontSize":"16px","color":"var(--text-2)","lineHeight":"1.65","maxWidth":"960px"}}>Digital Web Weaver is a web development company based in India, delivering websites and web applications for founders and enterprises across India, the UK, South Africa, and beyond. We don't drag-and-drop page builders or ship recycled themes — every project is custom-coded on a modern stack, architected for the traffic, integrations, and growth you actually expect, with the same senior engineers owning it end to end.</p></div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// client words — web builds</p>
          <div className="grid grid-3 stagger">
            <div className="quote"><div className="stars">★★★★★</div><p>They turned a half-page brief into a complete specification and delivered every feature on the agreed date. I've worked with London agencies that couldn't manage that.</p><div className="quote__who"><div className="quote__avatar">MT</div><div><div className="quote__name">Michael T.</div><div className="quote__role">Marketing Director · Logistics · UK</div></div></div></div>
            <div className="quote"><div className="stars">★★★★★</div><p>Our new site went live with a mobile PageSpeed of 97. SEO results came in within the first month — organic leads are up 140% year on year.</p><div className="quote__who"><div className="quote__avatar">PB</div><div><div className="quote__name">Prashant B.</div><div className="quote__role">CEO · Manufacturing · India</div></div></div></div>
            <div className="quote"><div className="stars">★★★★★</div><p>Senior-level engineering at a price that made the project viable. Quality was indistinguishable from our previous US agency at three times the cost.</p><div className="quote__who"><div className="quote__avatar">KL</div><div><div className="quote__name">Kate L.</div><div className="quote__role">VP Product · HealthTech SaaS · US</div></div></div></div>
          </div>
        </section>

        <section id="s-engage" className="section reveal">
          <p className="eyebrow">const engagement = [ <span className="c">// how we can work together</span></p>
          <h2 className="title mono">Engagement models</h2>
          <p className="subtitle">Pick the shape that fits your stage — every model comes with senior engineers and full source-code ownership.</p>
          <div className="grid grid-3 stagger">
            <div className="eng"><div className="eng__tag" style={{"color":"var(--pink)"}}>01 · FIXED PROJECT</div><div className="eng__title">Fixed-scope build</div><p className="eng__body">A defined website or app with an itemised, fixed price. Best when the scope is clear and you want budget certainty.</p><ul className="eng__list"><li><span className="plus">+</span><span>Fixed price &amp; timeline</span></li><li><span className="plus">+</span><span>Milestone payments</span></li><li><span className="plus">+</span><span>Full source-code handover</span></li></ul><a className="eng__cta" href="#s-contact" data-scroll="s-contact">Scope a project ↗</a></div>
            <div className="eng" style={{"borderTopColor":"var(--teal)"}}><div className="eng__tag" style={{"color":"var(--teal)"}}>02 · DEDICATED TEAM</div><div className="eng__title">Dedicated squad</div><p className="eng__body">A senior engineer or full pod embedded in your team, billed monthly. Best for evolving products and ongoing roadmaps.</p><ul className="eng__list"><li><span className="plus">+</span><span>Senior engineers + tech lead</span></li><li><span className="plus">+</span><span>Monthly rolling engagement</span></li><li><span className="plus">+</span><span>Scale up or down anytime</span></li></ul><Link className="eng__cta" href="/hire-dedicated-resource/">Hire a team ↗</Link></div>
            <div className="eng" style={{"borderTopColor":"var(--yellow)"}}><div className="eng__tag" style={{"color":"var(--yellow)"}}>03 · RETAINER</div><div className="eng__title">Care &amp; scale retainer</div><p className="eng__body">Ongoing support, performance tuning, and feature work after launch. Best for live products that need to stay fast.</p><ul className="eng__list"><li><span className="plus">+</span><span>Priority support SLA</span></li><li><span className="plus">+</span><span>Monitoring &amp; security patches</span></li><li><span className="plus">+</span><span>Reserved monthly dev hours</span></li></ul><a className="eng__cta" href="#s-contact" data-scroll="s-contact">Talk retainer ↗</a></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// web-development.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">How long does a website take?<span className="sign">[+]</span></button><div className="faq__a"><p>A marketing site typically takes 3–6 weeks; a web application 2–6 months depending on complexity. We give accurate, itemised estimates in discovery.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you offer content management?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — Sanity, Contentful, or WordPress CMS integrated so your team can manage content without developer involvement.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you take over our existing website?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — we run a code audit and technical assessment first, then decide together whether to maintain, refactor, or rebuild.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you provide hosting?<span className="sign">[+]</span></button><div className="faq__a"><p>We recommend and set up hosting (Vercel, AWS, or Netlify) and configure CI/CD — you own the accounts and infrastructure.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <a className="svc" href="https://digitalwebweaver.com/website-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Website development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Business websites for SMEs — custom design, fast delivery.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></a>
            <a className="svc" href="https://digitalwebweaver.com/web-application-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Web application development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>SaaS platforms, portals, dashboards, and enterprise systems.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></a>
            <Link className="svc" href="/custom-software-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Custom software</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Bespoke ERP, CRM, portals, and workflow automation.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/saas-development/"><div className="svc__title" style={{"fontSize":"16px"}}>SaaS development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Multi-tenant SaaS with Stripe billing, SSO, and analytics.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --web-project<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to build your website or web app?</h2>
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
        <span className="statusbar__spacer">web-development.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
