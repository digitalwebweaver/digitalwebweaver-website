import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "Hire Laravel Developers | PHP Experts for India & UK — Digital Web Weaver" },
  description: "Hire senior Laravel developers — production-grade PHP apps with Laravel 11, Livewire, Filament, and Pest test coverage. Matched with 2–3 pre-vetted profiles fast.",
  alternates: { canonical: "/laravel-developer/" },
  openGraph: { title: "Hire Laravel Developers | PHP Experts for India & UK — Digital Web Weaver", description: "Hire senior Laravel developers — production-grade PHP apps with Laravel 11, Livewire, Filament, and Pest test coverage. Matched with 2–3 pre-vetted profiles fast.", url: "/laravel-developer/", type: "website" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={serviceSchema({ name: "Hire Laravel / PHP Developers", description: "Hire senior Laravel developers — production-grade PHP apps with Laravel 11, Livewire, Filament, and Pest test coverage. Matched with 2–3 pre-vetted profiles fast.", href: "/laravel-developer/" })} />
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-build" data-target="s-build" title="What we build">⚙</button>
      <button className="activitybar__btn" data-scroll="s-capabilities" data-target="s-capabilities" title="Capabilities">❮❯</button>
      <button className="activitybar__btn" data-scroll="s-stack" data-target="s-stack" title="Stack">◈</button>
      <button className="activitybar__btn" data-scroll="s-how" data-target="s-how" title="How we work">❯</button>
      <button className="activitybar__btn" data-scroll="s-why" data-target="s-why" title="Why us">✓</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{ color: "var(--teal)" }}>●</span> laravel-developer.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{ color: "var(--yellow)" }}>●</span> services.ts</button>
        <button className="tab" data-scroll="s-how" data-target="s-how"><span className="tdot" style={{ color: "var(--pink)" }}>●</span> process.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{ color: "var(--green)" }}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// laravel-developer.ts · Laravel 11 · PHP 8.3 · Livewire</p>
            <span className="badge">LARAVEL DEVELOPMENT</span>
            <h1 className="hero__h1">Laravel developers who build <span className="pink">production-grade</span> PHP apps</h1>
            <p className="hero__lead">We build full-stack Laravel applications, APIs, and admin systems — PHP 8.3, Eloquent, and a test-first workflow on every build.</p>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{ color: "var(--pink)" }}>45+</b><span>Laravel projects</span></div>
              <div className="hero__stat"><b style={{ color: "var(--teal)" }}>150+</b><span>clients served</span></div>
              <div className="hero__stat"><b style={{ color: "var(--yellow)" }}>80%+</b><span>min. test coverage</span></div>
            </div>
            <div className="btn-row" style={{ marginTop: "28px" }}>
              <a className="btn btn--ghost" href="#s-stack" data-scroll="s-stack">$ view --stack</a>
              <a className="btn btn--ghost teal" href="#s-how" data-scroll="s-how">$ how --it-works</a>
            </div>
          </div>
          <div className="formcard" id="estimate">
            <div className="code__head"><span className="dot dot--red" style={{ width: "8px", height: "8px" }}></span><span className="fn">estimate.form</span><span className="mut">— free</span></div>
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
              <div className="s1">✓ request received<br />✓ routed to a senior Laravel engineer<br />✓ estimate en route</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll reply within 24 hours.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{ color: "var(--pink)" }}>45+</div><div className="lbl">LARAVEL_PROJECTS</div><div className="sub">▲ shipped to production</div></div>
          <div className="stat-cell"><div className="big" style={{ color: "var(--teal)" }}>150+</div><div className="lbl">CLIENTS_SERVED</div><div className="sub">▲ India · UK · US · Global</div></div>
          <div className="stat-cell"><div className="big" style={{ color: "var(--yellow)" }}>80%+</div><div className="lbl">TEST_COVERAGE</div><div className="sub">▲ minimum, Pest &amp; PHPUnit</div></div>
          <div className="stat-cell"><div className="big" style={{ color: "var(--pink)" }}>IN/UK/US</div><div className="lbl">SERVICE_AREAS</div><div className="sub">▲ &amp; global clients</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// what we build with Laravel</span></p>
          <h2 className="title mono">What we build</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Web applications</div><p className="svc__body">Full-stack apps with Blade, Livewire, or Inertia.js.</p><div className="svc__foot"><span>app.blade.php</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">REST &amp; GraphQL APIs</div><p className="svc__body">Sanctum auth, resource controllers, and API versioning.</p><div className="svc__foot"><span>api.php</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">E-commerce backends</div><p className="svc__body">WooCommerce-alternative shops built on Laravel.</p><div className="svc__foot"><span>shop.php</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Filament admin panels</div><p className="svc__body">Beautiful, powerful admin interfaces with Filament.</p><div className="svc__foot"><span>admin.php</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Queue &amp; job processing</div><p className="svc__body">Laravel Horizon, Redis queues, and scheduled tasks.</p><div className="svc__foot"><span>queue.php</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Legacy PHP migration</div><p className="svc__body">Migrate raw PHP or CodeIgniter apps to Laravel.</p><div className="svc__foot"><span>migrate.sh</span></div></div>
          </div>
        </section>

        <section id="s-capabilities" className="section reveal">
          <p className="eyebrow">// technical depth — our Laravel capabilities</p>
          <h2 className="title mono">Our Laravel capabilities</h2>
          <div className="grid grid-3">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8l4 4-4 4M20 8l-4 4 4 4M14 4l-4 16"></path></svg><span className="cap__title">Laravel 11 features</span></div><p className="cap__body">The latest framework release — a streamlined structure and per-second rate limiting.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M9 12h4M11 12v5M15 16.5c.6.6 3 .8 3-1s-3-1-3-2.5 2.4-1.4 3-.8"></path></svg><span className="cap__title">Livewire &amp; Alpine</span></div><p className="cap__body">Reactive, server-rendered UI without a separate JavaScript build step.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 1 0 9 9"></path><path d="M12 12l5-3"></path></svg><span className="cap__title">Inertia.js + React/Vue</span></div><p className="cap__body">Full SPA feel with Laravel routing and no separate API layer to maintain.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg><span className="cap__title">Telescope &amp; Horizon</span></div><p className="cap__body">Built-in debugging and queue monitoring from day one.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="1.6"></circle><path d="M5 8h14M12 8v5m0 0l-3 6m3-6l3 6"></path></svg><span className="cap__title">Pest &amp; PHPUnit</span></div><p className="cap__body">Elegant, expressive test suites — our minimum bar is 80% coverage.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.3A3.5 3.5 0 0 1 17 18z"></path><path d="M12 12v5m0-5l-2 2m2-2l2 2"></path></svg><span className="cap__title">Sail &amp; Docker</span></div><p className="cap__body">Consistent local and production environments, container-first.</p></div>
          </div>
        </section>

        <section id="s-stack" className="section reveal">
          <p className="eyebrow">import &#123; stack &#125; from "@dww/laravel" <span className="c">// the Laravel ecosystem we use</span></p>
          <h2 className="title mono">Laravel technology stack</h2>
          <div className="stack-tabs" data-stack>
            <button className="stack-tab" data-cat="Core">Core <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Frontend">Frontend <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Admin">Admin <span className="n">[3]</span></button>
            <button className="stack-tab" data-cat="Infra">Infra <span className="n">[4]</span></button>
          </div>
          <div className="stack-grid">
            <div className="stack-cell" data-cat="Core"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--pink)" }}>L</span><div className="stack-cell__name">Laravel 11</div><div className="stack-cell__cat">Core</div></div>
            <div className="stack-cell" data-cat="Core"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "#8892bf" }}>Php</span><div className="stack-cell__name">PHP 8.3</div><div className="stack-cell__cat">Core</div></div>
            <div className="stack-cell" data-cat="Core"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--red)" }}>El</span><div className="stack-cell__name">Eloquent ORM</div><div className="stack-cell__cat">Core</div></div>
            <div className="stack-cell" data-cat="Core"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--green)" }}>Pe</span><div className="stack-cell__name">Pest</div><div className="stack-cell__cat">Core</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--pink)" }}>Lw</span><div className="stack-cell__name">Livewire 3</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--text)" }}>In</span><div className="stack-cell__name">Inertia.js</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--teal)" }}>Al</span><div className="stack-cell__name">Alpine.js</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--yellow)" }}>Bl</span><div className="stack-cell__name">Blade</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Admin"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--yellow)" }}>Fi</span><div className="stack-cell__name">Filament 3</div><div className="stack-cell__cat">Admin</div></div>
            <div className="stack-cell" data-cat="Admin"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--green)" }}>Nv</span><div className="stack-cell__name">Nova</div><div className="stack-cell__cat">Admin</div></div>
            <div className="stack-cell" data-cat="Admin"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "#c99bb4" }}>Bp</span><div className="stack-cell__name">Backpack</div><div className="stack-cell__cat">Admin</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--red)" }}>Fo</span><div className="stack-cell__name">Forge</div><div className="stack-cell__cat">Infra</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--yellow)" }}>Vp</span><div className="stack-cell__name">Vapor</div><div className="stack-cell__cat">Infra</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "#61dafb" }}>Dk</span><div className="stack-cell__name">Docker</div><div className="stack-cell__cat">Infra</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--red)" }}>Rd</span><div className="stack-cell__name">Redis</div><div className="stack-cell__cat">Infra</div></div>
          </div>
        </section>

        <section id="s-how" className="section reveal">
          <p className="eyebrow">function <span style={{ color: "var(--text)" }}>laravelProcess</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">Our Laravel development process</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Domain design</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Development</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Security review</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Deploy &amp; scale</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04 · ◷ 3–5 days</div><div className="pipe-detail__title">Domain design</div><p className="pipe-detail__body">We model your domain — Eloquent relationships, policies, and module boundaries — before writing a single controller.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Domain &amp; DB schema mapped</span></li><li><span className="ok">✓</span><span>Eloquent relationships defined</span></li><li><span className="ok">✓</span><span>Itemised estimate within 24h</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww design --domain</div><div className="t2">✓ schema mapped  ✓ relationships defined  ✓ estimate sent</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04 · ◷ ongoing sprints</div><div className="pipe-detail__title">Feature development</div><p className="pipe-detail__body">Two-week sprints building features in Blade, Livewire, or Inertia — with Pest tests written alongside every feature, not after.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Pest tests on every feature</span></li><li><span className="ok">✓</span><span>Fortnightly staging deploys</span></li><li><span className="ok">✓</span><span>Stakeholder demo each sprint</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww ship --sprint</div><div className="t2">✓ tests passing  ✓ staging deployed  ✓ demo shipped</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04 · ◷ 2–3 days</div><div className="pipe-detail__title">Security review</div><p className="pipe-detail__body">A dedicated security pass — input validation, CSRF, XSS, and dependency audit — before anything reaches production.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Input validation &amp; CSRF checks</span></li><li><span className="ok">✓</span><span>Dependency vulnerability scan</span></li><li><span className="ok">✓</span><span>OWASP checklist signed off</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww audit --security</div><div className="t2">✓ validation checked  ✓ deps scanned  ✓ OWASP passed</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04 · ◷ launch week</div><div className="pipe-detail__title">Deploy &amp; scale</div><p className="pipe-detail__body">Deployed to Forge or Vapor with queues, scheduled tasks, and horizontal scaling configured from day one.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Forge / Vapor deploy configured</span></li><li><span className="ok">✓</span><span>Queues &amp; scheduler live</span></li><li><span className="ok">✓</span><span>Zero-downtime release</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww deploy --prod</div><div className="t2">✓ queues live  ✓ scheduler running  ✓ live · monitored</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">WHAT_YOU_GET</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Figma design source files</span></div><div><span className="plus">+</span><span>Clean, documented codebase</span></div><div><span className="plus">+</span><span>CI/CD pipeline</span></div><div><span className="plus">+</span><span>SEO &amp; analytics setup</span></div><div><span className="plus">+</span><span>Performance report</span></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// why Digital Web Weaver for Laravel</p>
          <h2 className="title mono">A Laravel-first team, not a side skill</h2>
          <div className="grid grid-4 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{ color: "var(--pink)" }}>🔧 PRIMARY</div><div className="cap__title" style={{ marginTop: "10px" }}>Laravel-first team</div><p className="cap__body">Primary framework, not a secondary skill — every engineer lives in Laravel daily.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{ color: "var(--pink)" }}>🧪 TESTED</div><div className="cap__title" style={{ marginTop: "10px" }}>Pest test coverage</div><p className="cap__body">80%+ coverage with elegant, expressive syntax on every build.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{ color: "var(--pink)" }}>🗂 FILAMENT</div><div className="cap__title" style={{ marginTop: "10px" }}>Filament specialists</div><p className="cap__body">Complex admin panels built quickly, without reinventing the wheel.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{ color: "var(--pink)" }}>🔒 SAFE</div><div className="cap__title" style={{ marginTop: "10px" }}>OWASP secure</div><p className="cap__body">Input validation, CSRF, and XSS protection on every form and endpoint.</p></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// client words — Laravel engagements</p>
          <div className="grid grid-3 stagger">
            <div className="quote"><div className="stars">★★★★★</div><p>We inherited a Laravel 8 codebase with no tests, raw SQL queries everywhere, and N+1 issues on every page. Their developer audited it in the first week, presented a prioritised remediation plan, and worked through it systematically. The app is now fast and testable.</p><div className="quote__who"><div className="quote__avatar">KP</div><div><div className="quote__name">Kavitha P.</div><div className="quote__role">Head of Engineering · SaaS Platform · India</div></div></div></div>
            <div className="quote"><div className="stars">★★★★★</div><p>Our Livewire migration from a JavaScript-heavy front-end was a leap of faith. Their Laravel developer made it seamless — real-time features, file uploads, complex form state — all handled without a single page reload.</p><div className="quote__who"><div className="quote__avatar">EW</div><div><div className="quote__name">Emma W.</div><div className="quote__role">CTO · Property Tech · Australia</div></div></div></div>
            <div className="quote"><div className="stars">★★★★★</div><p>The Laravel Vapor deployment cut our server management overhead to almost nothing. Their developer set up the Vapor environment, migrated our queues and scheduled tasks, and automated the whole deployment pipeline. We haven't touched a server since.</p><div className="quote__who"><div className="quote__avatar">RG</div><div><div className="quote__name">Rohan G.</div><div className="quote__role">Founder · EdTech SaaS · United Kingdom</div></div></div></div>
          </div>
        </section>

        <section id="s-compare" className="section reveal">
          <p className="eyebrow">// diff — DWW Laravel engineers vs. typical agency headcount</p>
          <h2 className="title mono">Senior Laravel engineers, not agency headcount</h2>
          <div className="compare cols3">
            <div className="compare__head"><div className="c-cap">capability</div><div className="c-dww">Digital Web Weaver</div><div className="c-typ">typical agency</div></div>
            <div className="compare__row"><div className="c-cap">Seniority level</div><div className="c-dww">✓ Laravel-first specialists</div><div className="c-typ">✕ PHP as a side skill</div></div>
            <div className="compare__row"><div className="c-cap">Time to match</div><div className="c-dww">✓ 48 hours</div><div className="c-typ">✕ 2–4 weeks</div></div>
            <div className="compare__row"><div className="c-cap">Test coverage</div><div className="c-dww">✓ 80%+ with Pest</div><div className="c-typ">✕ Rarely enforced</div></div>
            <div className="compare__row"><div className="c-cap">Admin panels</div><div className="c-dww">✓ Filament specialists</div><div className="c-typ">✕ Ad hoc or bought-in</div></div>
            <div className="compare__row"><div className="c-cap">Communication</div><div className="c-dww">✓ Direct access, daily updates</div><div className="c-typ">✕ Via account manager</div></div>
            <div className="compare__row"><div className="c-cap">Code ownership</div><div className="c-dww">✓ 100% yours, no lock-in</div><div className="c-typ">✕ Vendor lock-in common</div></div>
          </div>
        </section>

        <section id="s-models" className="section reveal">
          <p className="eyebrow">const engagement = [ <span className="c">// how we can work together</span></p>
          <h2 className="title mono">Ways to hire a Laravel developer</h2>
          <p className="subtitle">Pick the shape that fits your stage — every model comes with senior engineers and full source-code ownership.</p>
          <div className="grid grid-3 stagger">
            <div className="price">
              <div className="price__head"><div className="price__kind" style={{ color: "var(--teal)" }}>01 · FIXED-SCOPE PROJECT</div><div className="price__title">Fixed-scope build</div><p className="price__body">A defined Laravel application with an itemised price. Best when the scope is clear and you want budget certainty.</p><div className="price__amt"><b>Custom quote</b><span>/ scoped to your project</span></div></div>
              <ul className="price__list"><li><span className="ok">✓</span><span>Fixed price &amp; timeline</span></li><li><span className="ok">✓</span><span>Milestone payments</span></li><li><span className="ok">✓</span><span>Full source-code handover</span></li></ul>
              <div className="price__foot"><a className="price__cta btn--ghost" href="#s-contact" data-scroll="s-contact" style={{ display: "block", textAlign: "center", color: "var(--text)" }}>Scope a project ↗</a></div>
            </div>
            <div className="price is-featured">
              <span className="price__badge">MOST POPULAR</span>
              <div className="price__head"><div className="price__kind" style={{ color: "var(--pink)" }}>02 · DEDICATED ENGINEER</div><div className="price__title">Dedicated Laravel engineer</div><p className="price__body">A senior Laravel engineer embedded in your team, billed monthly. Best for evolving products and ongoing roadmaps.</p><div className="price__amt"><b>Monthly</b><span>/ billed as one engineer</span></div></div>
              <ul className="price__list"><li><span className="ok">✓</span><span>Senior Laravel engineer</span></li><li><span className="ok">✓</span><span>Works your hours (overlap)</span></li><li><span className="ok">✓</span><span>Scale up or down anytime</span></li></ul>
              <div className="price__foot"><Link className="price__cta" href="/hire-dedicated-resource/" style={{ display: "block", textAlign: "center", background: "var(--pink)", color: "var(--bg)" }}>Hire a Laravel engineer ↗</Link></div>
            </div>
            <div className="price">
              <div className="price__head"><div className="price__kind" style={{ color: "var(--yellow)" }}>03 · RETAINER</div><div className="price__title">Care &amp; scale retainer</div><p className="price__body">Ongoing support, performance tuning, and feature work after launch. Best for live apps that need to stay fast.</p><div className="price__amt"><b>Custom quote</b><span>/ reserved monthly hours</span></div></div>
              <ul className="price__list"><li><span className="ok">✓</span><span>Priority support SLA</span></li><li><span className="ok">✓</span><span>Monitoring &amp; dependency updates</span></li><li><span className="ok">✓</span><span>Reserved monthly dev hours</span></li></ul>
              <div className="price__foot"><a className="price__cta btn--ghost" href="#s-contact" data-scroll="s-contact" style={{ display: "block", textAlign: "center", color: "var(--text)" }}>Talk retainer ↗</a></div>
            </div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// laravel-developer.faq.md</p>
          <h2 className="title mono">Laravel developer FAQ</h2>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Livewire or Inertia.js?<span className="sign">[+]</span></button><div className="faq__a"><p>Livewire for server-centric apps with minimal JS. Inertia when you want React/Vue components with Laravel routing and no separate API.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you deploy to Laravel Vapor?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — serverless Laravel on AWS Lambda with Vapor. We handle environment config, queues, and file storage for serverless deployments.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you build Filament admin panels?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — Filament is our preferred Laravel admin solution. We build custom resources, widgets, and plugins.</p></div></div>
            <div className="faq__item"><button className="faq__q">How long does a Laravel project take?<span className="sign">[+]</span></button><div className="faq__a"><p>A core API with auth and CRUD takes 2–3 weeks. A full-featured SaaS with billing and an admin panel typically takes 2–4 months.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <a className="svc" href="https://digitalwebweaver.com/web-application-development/"><div className="svc__title" style={{ fontSize: "16px" }}>Web application development</div><p className="svc__body" style={{ fontSize: "13.5px" }}>Complex portals and dashboards built with Laravel.</p><div className="mono" style={{ fontSize: "12px", color: "var(--pink)", marginTop: "12px" }}>open ↗</div></a>
            <Link className="svc" href="/custom-software-development/"><div className="svc__title" style={{ fontSize: "16px" }}>Custom software development</div><p className="svc__body" style={{ fontSize: "13.5px" }}>Bespoke ERP, CRM, portals, and workflow automation.</p><div className="mono" style={{ fontSize: "12px", color: "var(--pink)", marginTop: "12px" }}>open ↗</div></Link>
            <Link className="svc" href="/crm-erp-systems/"><div className="svc__title" style={{ fontSize: "16px" }}>CRM &amp; ERP systems</div><p className="svc__body" style={{ fontSize: "13.5px" }}>Business systems built on Laravel and Filament.</p><div className="mono" style={{ fontSize: "12px", color: "var(--pink)", marginTop: "12px" }}>open ↗</div></Link>
            <Link className="svc" href="/nodejs-developer/"><div className="svc__title" style={{ fontSize: "16px" }}>Hire Node.js developer</div><p className="svc__body" style={{ fontSize: "13.5px" }}>Backend engineers for event-driven services.</p><div className="mono" style={{ fontSize: "12px", color: "var(--pink)", marginTop: "12px" }}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./hire --laravel-developer<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to hire a Laravel developer?</h2>
          <p className="cta__lead">Tell us your stack, timeline, and budget. We'll match you with 2–3 senior Laravel engineers within 48 hours — all pre-vetted, immediately available, and ready to ship.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">Start hiring now ↗</Link>
            <Link className="btn btn--ghost" href="/portfolio/">See our work</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Senior engineers only</span><span><span className="g">●</span> 48-hr match</span><span><span className="g">●</span> No lock-in</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">laravel-developer.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
