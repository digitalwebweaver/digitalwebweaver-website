import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "SaaS Development Company India | Multi-Tenant & Cloud-Native — Digital Web Weaver" },
  description: "Multi-tenant SaaS platforms built to scale — subscription billing, SSO, product analytics, and architecture that survives Series A growth. 150+ clients served.",
  alternates: { canonical: "/saas-development/" },
  openGraph: { title: "SaaS Development Company India | Multi-Tenant & Cloud-Native — Digital Web Weaver", description: "Multi-tenant SaaS platforms built to scale — subscription billing, SSO, product analytics, and architecture that survives Series A growth. 150+ clients served.", url: "/saas-development/", type: "website" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={serviceSchema({ name: "SaaS Products", description: "Multi-tenant SaaS platforms built to scale — subscription billing, SSO, product analytics, and architecture that survives Series A growth. 150+ clients served.", href: "/saas-development/" })} />
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-build" data-target="s-build" title="Services">⚙</button>
      <button className="activitybar__btn" data-scroll="s-capabilities" data-target="s-capabilities" title="Capabilities">❮❯</button>
      <button className="activitybar__btn" data-scroll="s-process" data-target="s-process" title="Process">❯</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> saas-development.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> services.ts</button>
        <button className="tab" data-scroll="s-process" data-target="s-process"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> process.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// saas-development.ts · Multi-tenant · Stripe · Auth0</p>
            <span className="badge">SAAS DEVELOPMENT</span>
            <h1 className="hero__h1">SaaS built to <span className="pink">scale</span> from <span className="teal">day one</span></h1>
            <p className="hero__lead">We architect and build multi-tenant SaaS platforms with subscription billing, team management, SSO, and the features that turn trials into paying customers.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Start your SaaS project</a>
              <a className="btn btn--ghost" href="#s-build" data-scroll="s-build">$ view --architecture</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>8–12wk</b><span>MVP delivery</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>150+</b><span>clients served</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>Stripe</b><span>billing built-in</span></div>
            </div>
            <div className="trust">
              <p className="trust__label">// the SaaS tech stack</p>
              <div className="trust__row">
                <span className="trust__chip">Multi-tenancy</span>
                <span className="trust__chip">OAuth 2.0</span>
                <span className="trust__chip">Webhooks</span>
                <span className="trust__chip">Feature flags</span>
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
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>8–12wk</div><div className="lbl">MVP_DELIVERY</div><div className="sub">▲ scoped SaaS core</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>Stripe</div><div className="lbl">BILLING</div><div className="sub">▲ plans · trials · dunning</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>24h</div><div className="lbl">ESTIMATE</div><div className="sub">▲ free · no commitment</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// what we build</span></p>
          <h2 className="title mono">SaaS development services</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Multi-tenant architecture</div><p className="svc__body">Schema isolation, tenant routing, and data partitioning chosen for your compliance and scale needs — not habit.</p><div className="svc__foot"><span>tenant.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Subscription billing</div><p className="svc__body">Stripe Billing plans, trials, coupons, and invoicing — with dunning handled properly, not bolted on.</p><div className="svc__foot"><span>billing.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Auth &amp; SSO</div><p className="svc__body">Auth0, Okta, and SAML enterprise SSO integration for the buyers who demand it.</p><div className="svc__foot"><span>auth.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Product analytics</div><p className="svc__body">Event tracking, funnel analysis, and retention metrics wired in from week one.</p><div className="svc__foot"><span>analytics.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Onboarding flows</div><p className="svc__body">Guided activation, tooltips, and progress gates that turn signups into activated accounts.</p><div className="svc__foot"><span>onboarding.tsx</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Integration layer</div><p className="svc__body">Webhook system, OAuth apps, and an API marketplace so your product connects to the tools customers already use.</p><div className="svc__foot"><span>integrations.ts</span></div></div>
          </div>
        </section>

        <section id="s-capabilities" className="section reveal">
          <p className="eyebrow">// technical depth — the decisions you never see</p>
          <h2 className="title mono">SaaS capabilities</h2>
          <div className="grid grid-3">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="7" height="7" rx="1"></rect><rect x="13" y="4" width="7" height="7" rx="1"></rect><rect x="4" y="13" width="7" height="7" rx="1"></rect><rect x="13" y="13" width="7" height="7" rx="1"></rect></svg><span className="cap__title">Tenant isolation</span></div><p className="cap__body">Row-level security or schema-per-tenant patterns — a decision you make once and live with for years.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="13" rx="2"></rect><path d="M3 10h18M7 15h4"></path></svg><span className="cap__title">Stripe metered billing</span></div><p className="cap__body">Usage-based, flat-rate, and seat-based pricing models — Stripe's edge cases handled without shortcuts.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"></path></svg><span className="cap__title">PostHog / Mixpanel</span></div><p className="cap__body">Product analytics with a custom event taxonomy, making activation, retention, and churn visible from week one.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.5"></circle><circle cx="18" cy="6" r="2.5"></circle><circle cx="12" cy="18" r="2.5"></circle><path d="M8 7.5 16 7.5M7 8.5 11 16M17 8.5 13 16"></path></svg><span className="cap__title">AI feature integration</span></div><p className="cap__body">LLM copilots and smart automation built directly into the product, not treated as a separate bolt-on.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 1 0 9 9"></path><path d="M12 12l5-3"></path></svg><span className="cap__title">Performance SLAs</span></div><p className="cap__body">P99 latency SLAs with auto-scaling and load testing before launch, not after a database bottleneck in production.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg><span className="cap__title">SOC 2 ready</span></div><p className="cap__body">Audit logging, encryption, and compliance controls built in for when enterprise buyers ask.</p></div>
          </div>
        </section>

        <section id="s-stack" className="section reveal">
          <p className="eyebrow">import &#123; stack &#125; from "@dww/saas" <span className="c">// the SaaS tech stack</span></p>
          <h2 className="title mono">SaaS tech stack</h2>
          <div className="stack-tabs" data-stack>
            <button className="stack-tab" data-cat="Frontend">Frontend <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Backend">Backend <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="SaaS">SaaS <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Infra">Infra <span className="n">[4]</span></button>
          </div>
          <div className="stack-grid">
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--text)"}}>N</span><div className="stack-cell__name">Next.js</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#61dafb"}}>R</span><div className="stack-cell__name">React</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#3178c6"}}>TS</span><div className="stack-cell__name">TypeScript</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Tw</span><div className="stack-cell__name">Tailwind</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--green)"}}>No</span><div className="stack-cell__name">Node.js</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Pg</span><div className="stack-cell__name">PostgreSQL</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>Rd</span><div className="stack-cell__name">Redis</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--text)"}}>Pr</span><div className="stack-cell__name">Prisma</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="SaaS"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>$</span><div className="stack-cell__name">Stripe</div><div className="stack-cell__cat">SaaS</div></div>
            <div className="stack-cell" data-cat="SaaS"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>A0</span><div className="stack-cell__name">Auth0</div><div className="stack-cell__cat">SaaS</div></div>
            <div className="stack-cell" data-cat="SaaS"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>PH</span><div className="stack-cell__name">PostHog</div><div className="stack-cell__cat">SaaS</div></div>
            <div className="stack-cell" data-cat="SaaS"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--text)"}}>Re</span><div className="stack-cell__name">Resend</div><div className="stack-cell__cat">SaaS</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>aws</span><div className="stack-cell__name">AWS</div><div className="stack-cell__cat">Infra</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--text)"}}>▲</span><div className="stack-cell__name">Vercel</div><div className="stack-cell__cat">Infra</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#2496ed"}}>Do</span><div className="stack-cell__name">Docker</div><div className="stack-cell__cat">Infra</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--green)"}}>GH</span><div className="stack-cell__name">GitHub Actions</div><div className="stack-cell__cat">Infra</div></div>
          </div>
        </section>

        <section id="s-process" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>saasProcess</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">SaaS development process</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Discovery sprint</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Architecture design</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Iterative sprints</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Launch &amp; grow</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04 · ◷ discovery</div><div className="pipe-detail__title">Discovery sprint</div><p className="pipe-detail__body">We define MVP scope, user personas, and the monetisation model before touching architecture — so billing decisions come from the business model, not the other way around.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>MVP scope &amp; user personas defined</span></li><li><span className="ok">✓</span><span>Monetisation model agreed</span></li><li><span className="ok">✓</span><span>Technical architecture brief within 24h</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww discover --saas</div><div className="t2">✓ scope defined  ✓ monetisation set  ✓ brief sent</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04 · ◷ architecture</div><div className="pipe-detail__title">Architecture design</div><p className="pipe-detail__body">Data model, multi-tenancy strategy, and billing design — the foundations that determine whether the platform scales past its first hundred customers without a rewrite.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Multi-tenancy strategy chosen</span></li><li><span className="ok">✓</span><span>Data model designed</span></li><li><span className="ok">✓</span><span>Billing architecture set</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww design --architecture</div><div className="t2">✓ tenancy chosen  ✓ data model set  ✓ billing designed</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04 · ◷ ongoing sprints</div><div className="pipe-detail__title">Iterative sprints</div><p className="pipe-detail__body">Two-week sprints with weekly demos and stakeholder reviews — you see the platform take shape on a live URL, not in a status report.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Two-week sprint cadence</span></li><li><span className="ok">✓</span><span>Weekly demos</span></li><li><span className="ok">✓</span><span>Stakeholder review each sprint</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww ship --sprint</div><div className="t2">✓ demo shipped  ✓ feedback logged  ✓ tests passing</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04 · ◷ launch</div><div className="pipe-detail__title">Launch &amp; grow</div><p className="pipe-detail__body">An instrumented launch with activation, retention, and churn tracking wired in — so growth decisions are made on real data from day one.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Production launch, instrumented</span></li><li><span className="ok">✓</span><span>Activation &amp; retention tracked</span></li><li><span className="ok">✓</span><span>Churn visibility from day one</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww deploy --saas</div><div className="t2">✓ live · monitored  ✓ metrics tracked  ✓ ready to grow</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">WHAT_YOU_GET</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Figma design source files</span></div><div><span className="plus">+</span><span>Clean, documented codebase</span></div><div><span className="plus">+</span><span>CI/CD pipeline</span></div><div><span className="plus">+</span><span>SEO &amp; analytics setup</span></div><div><span className="plus">+</span><span>Performance report</span></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// why DWW for SaaS</p>
          <h2 className="title mono">SaaS, built right</h2>
          <div className="grid grid-4 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🚀 SAAS-FIRST</div><div className="cap__title" style={{"marginTop":"10px"}}>SaaS-first team</div><p className="cap__body">Every team member has shipped at least one SaaS product.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>💳 BILLING</div><div className="cap__title" style={{"marginTop":"10px"}}>Billing experts</div><p className="cap__body">Stripe Billing complexity handled without shortcuts.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>📊 INSTRUMENTED</div><div className="cap__title" style={{"marginTop":"10px"}}>Growth instrumented</div><p className="cap__body">Analytics and metrics built in from week one.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🏗️ SCALABLE</div><div className="cap__title" style={{"marginTop":"10px"}}>Scalable architecture</div><p className="cap__body">Multi-tenant patterns that handle Series A growth without a rewrite.</p></div>
          </div>
          <div className="panel-note" style={{"background":"var(--panel)"}}><p style={{"fontSize":"16px","color":"var(--text-2)","lineHeight":"1.65","maxWidth":"960px"}}>A SaaS development company earns its keep in the decisions you never see: how tenants are isolated, how billing survives the messy edge cases, and how the product scales past its first hundred customers without a rewrite. We build multi-tenant SaaS platforms for founders and product teams who want those foundations right from day one — often starting with a tightly scoped MVP and growing it into a full platform once the core value is proven. Based in Vadodara and delivering to clients across India, the UK, South Africa, and Ivory Coast, every engineer here has shipped a real SaaS product, so tenant isolation and Stripe's edge cases are familiar ground rather than research projects. We ship on AWS with Docker and GitHub Actions, set P99 latency SLAs, and load-test before launch so a database bottleneck surfaces in staging instead of production.</p></div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <Link className="svc" href="/mvp-development/"><div className="svc__title" style={{"fontSize":"16px"}}>MVP development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Build and validate your core product in 8–12 weeks before scaling.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <a className="svc" href="https://digitalwebweaver.com/web-application-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Web application development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Complex portals, dashboards, and multi-user business web applications.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></a>
            <Link className="svc" href="/ai-automation/"><div className="svc__title" style={{"fontSize":"16px"}}>AI &amp; automation</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Add LLM features, automation pipelines, and intelligent workflows to your SaaS.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/react-developer/"><div className="svc__title" style={{"fontSize":"16px"}}>Hire a React developer</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Senior React engineers to embed in your SaaS product team.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// saas-development.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">How long to build an MVP?<span className="sign">[+]</span></button><div className="faq__a"><p>A focused MVP with auth, core feature, and billing takes 8–12 weeks. We scope this tightly in discovery.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you handle the billing integration?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — Stripe Billing with plans, trials, coupons, invoice generation, and dunning management.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you build enterprise features (SSO, audit logs)?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — Auth0/Okta SAML SSO, role-based access, and SOC 2-aligned audit logging are standard add-ons.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you help with pricing strategy?<span className="sign">[+]</span></button><div className="faq__a"><p>We advise on value-metric alignment (per-seat, usage-based, flat) based on similar SaaS products we've built.</p></div></div>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --saas-project<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to build your SaaS?</h2>
          <p className="cta__lead">Get a free technical architecture brief and fixed-price estimate from a senior engineer within 24 hours. No commitment required.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Start your SaaS project</Link>
            <Link className="btn btn--ghost" href="/portfolio/">See our work</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Fixed price</span><span><span className="g">●</span> 24-hr response</span><span><span className="g">●</span> NDA signed first</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">saas-development.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
