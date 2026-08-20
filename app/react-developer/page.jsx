import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "Hire React.js Developers | India, UK & Global Teams — Digital Web Weaver" },
  description: "Hire senior React.js developers — React 18, TypeScript, and Next.js engineers for SPAs, dashboards, and enterprise frontends. Matched with 2–3 pre-vetted profiles in 48 hours.",
  alternates: { canonical: "/react-developer/" },
  openGraph: { title: "Hire React.js Developers | India, UK & Global Teams — Digital Web Weaver", description: "Hire senior React.js developers — React 18, TypeScript, and Next.js engineers for SPAs, dashboards, and enterprise frontends. Matched with 2–3 pre-vetted profiles in 48 hours.", url: "/react-developer/", type: "website" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={serviceSchema({ name: "Hire React / Next.js Developers", description: "Hire senior React.js developers — React 18, TypeScript, and Next.js engineers for SPAs, dashboards, and enterprise frontends. Matched with 2–3 pre-vetted profiles in 48 hours.", href: "/react-developer/" })} />
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
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{ color: "var(--teal)" }}>●</span> react-developer.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{ color: "var(--yellow)" }}>●</span> services.ts</button>
        <button className="tab" data-scroll="s-how" data-target="s-how"><span className="tdot" style={{ color: "var(--pink)" }}>●</span> process.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{ color: "var(--green)" }}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// react-developer.ts · React 18 · TypeScript · Next.js</p>
            <span className="badge">REACT DEVELOPMENT</span>
            <h1 className="hero__h1">React developers who <span className="pink">ship fast</span>, scalable UIs</h1>
            <p className="hero__lead">We build performant single-page apps, dashboards, and enterprise frontends with React 18, TypeScript, and the modern ecosystem.</p>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{ color: "var(--pink)" }}>50+</b><span>React projects</span></div>
              <div className="hero__stat"><b style={{ color: "var(--teal)" }}>4yr+</b><span>avg. React experience</span></div>
              <div className="hero__stat"><b style={{ color: "var(--yellow)" }}>98%</b><span>client satisfaction</span></div>
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
              <div className="s1">✓ request received<br />✓ routed to a senior React engineer<br />✓ estimate en route</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll reply within 24 hours.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{ color: "var(--pink)" }}>50+</div><div className="lbl">REACT_PROJECTS</div><div className="sub">▲ shipped to production</div></div>
          <div className="stat-cell"><div className="big" style={{ color: "var(--teal)" }}>4yr+</div><div className="lbl">AVG_EXPERIENCE</div><div className="sub">▲ senior React engineers</div></div>
          <div className="stat-cell"><div className="big" style={{ color: "var(--yellow)" }}>98%</div><div className="lbl">CLIENT_SATISFACTION</div><div className="sub">▲ measured at handover</div></div>
          <div className="stat-cell"><div className="big" style={{ color: "var(--pink)" }}>150+</div><div className="lbl">CLIENTS_TRUSTED</div><div className="sub">▲ India · UK · US · Global</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// what we build with React</span></p>
          <h2 className="title mono">What we build</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Single-page applications</div><p className="svc__body">Fast, fluid SPAs with React Router and code-splitting.</p><div className="svc__foot"><span>spa.tsx</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">React dashboards</div><p className="svc__body">Data-rich admin panels, analytics boards, and CRMs.</p><div className="svc__foot"><span>dashboard.tsx</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Component libraries</div><p className="svc__body">Reusable design systems in Storybook, ready to scale.</p><div className="svc__foot"><span>ui-kit.tsx</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Legacy migration</div><p className="svc__body">Migrate jQuery, AngularJS, or Vue apps to modern React.</p><div className="svc__foot"><span>migrate.sh</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">React Native</div><p className="svc__body">Cross-platform mobile from your existing React codebase.</p><div className="svc__foot"><span>app.native.tsx</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Performance tuning</div><p className="svc__body">Lighthouse scores, bundle analysis, Core Web Vitals.</p><div className="svc__foot"><span>perf.report</span></div></div>
          </div>
        </section>

        <section id="s-capabilities" className="section reveal">
          <p className="eyebrow">// technical depth — our React capabilities</p>
          <h2 className="title mono">Our React capabilities</h2>
          <div className="grid grid-3">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8l4 4-4 4M20 8l-4 4 4 4M14 4l-4 16"></path></svg><span className="cap__title">React 18 &amp; concurrent features</span></div><p className="cap__body">useTransition, Suspense, and streaming SSR — used deliberately, not by default.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M9 12h4M11 12v5M15 16.5c.6.6 3 .8 3-1s-3-1-3-2.5 2.4-1.4 3-.8"></path></svg><span className="cap__title">TypeScript first</span></div><p className="cap__body">Fully typed components, hooks, and APIs — no any-typing shortcuts.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 1 0 9 9"></path><path d="M12 12l5-3"></path></svg><span className="cap__title">State management</span></div><p className="cap__body">Redux Toolkit, Zustand, React Query, and Jotai — chosen per problem, not by default.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg><span className="cap__title">UI systems</span></div><p className="cap__body">Tailwind, CSS Modules, shadcn/ui, MUI, and Radix — assembled into a design system.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="1.6"></circle><path d="M5 8h14M12 8v5m0 0l-3 6m3-6l3 6"></path></svg><span className="cap__title">Testing</span></div><p className="cap__body">Jest, Vitest, React Testing Library, and Playwright on every engagement.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.3A3.5 3.5 0 0 1 17 18z"></path><path d="M12 12v5m0-5l-2 2m2-2l2 2"></path></svg><span className="cap__title">Next.js / Remix</span></div><p className="cap__body">SSR, SSG, ISR — the right rendering strategy chosen per page.</p></div>
          </div>
        </section>

        <section id="s-stack" className="section reveal">
          <p className="eyebrow">import &#123; stack &#125; from "@dww/react" <span className="c">// the React ecosystem we use</span></p>
          <h2 className="title mono">React ecosystem we use</h2>
          <div className="stack-tabs" data-stack>
            <button className="stack-tab" data-cat="Core">Core <span className="n">[5]</span></button>
            <button className="stack-tab" data-cat="State">State <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="UI">UI <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Testing">Testing <span className="n">[4]</span></button>
          </div>
          <div className="stack-grid">
            <div className="stack-cell" data-cat="Core"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "#61dafb" }}>R</span><div className="stack-cell__name">React 18</div><div className="stack-cell__cat">Core</div></div>
            <div className="stack-cell" data-cat="Core"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "#3178c6" }}>TS</span><div className="stack-cell__name">TypeScript</div><div className="stack-cell__cat">Core</div></div>
            <div className="stack-cell" data-cat="Core"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--pink)" }}>Rr</span><div className="stack-cell__name">React Router 6</div><div className="stack-cell__cat">Core</div></div>
            <div className="stack-cell" data-cat="Core"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--yellow)" }}>Vi</span><div className="stack-cell__name">Vite</div><div className="stack-cell__cat">Core</div></div>
            <div className="stack-cell" data-cat="Core"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--teal)" }}>Wp</span><div className="stack-cell__name">webpack</div><div className="stack-cell__cat">Core</div></div>
            <div className="stack-cell" data-cat="State"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--pink)" }}>Rt</span><div className="stack-cell__name">Redux Toolkit</div><div className="stack-cell__cat">State</div></div>
            <div className="stack-cell" data-cat="State"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--teal)" }}>Zu</span><div className="stack-cell__name">Zustand</div><div className="stack-cell__cat">State</div></div>
            <div className="stack-cell" data-cat="State"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--red)" }}>Rq</span><div className="stack-cell__name">React Query</div><div className="stack-cell__cat">State</div></div>
            <div className="stack-cell" data-cat="State"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--yellow)" }}>Jo</span><div className="stack-cell__name">Jotai</div><div className="stack-cell__cat">State</div></div>
            <div className="stack-cell" data-cat="UI"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "#38bdf8" }}>Tw</span><div className="stack-cell__name">Tailwind CSS</div><div className="stack-cell__cat">UI</div></div>
            <div className="stack-cell" data-cat="UI"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--text)" }}>Sh</span><div className="stack-cell__name">shadcn/ui</div><div className="stack-cell__cat">UI</div></div>
            <div className="stack-cell" data-cat="UI"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "#3178c6" }}>Mu</span><div className="stack-cell__name">MUI</div><div className="stack-cell__cat">UI</div></div>
            <div className="stack-cell" data-cat="UI"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--text)" }}>Ra</span><div className="stack-cell__name">Radix UI</div><div className="stack-cell__cat">UI</div></div>
            <div className="stack-cell" data-cat="Testing"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--red)" }}>Je</span><div className="stack-cell__name">Jest</div><div className="stack-cell__cat">Testing</div></div>
            <div className="stack-cell" data-cat="Testing"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--yellow)" }}>Vt</span><div className="stack-cell__name">Vitest</div><div className="stack-cell__cat">Testing</div></div>
            <div className="stack-cell" data-cat="Testing"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--teal)" }}>Rtl</span><div className="stack-cell__name">React Testing Lib</div><div className="stack-cell__cat">Testing</div></div>
            <div className="stack-cell" data-cat="Testing"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--green)" }}>Pw</span><div className="stack-cell__name">Playwright</div><div className="stack-cell__cat">Testing</div></div>
          </div>
        </section>

        <section id="s-how" className="section reveal">
          <p className="eyebrow">function <span style={{ color: "var(--text)" }}>reactProcess</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">Our React development process</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Discovery</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Design system</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Development</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Test &amp; optimise</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04 · ◷ 3–5 days</div><div className="pipe-detail__title">Discovery &amp; architecture</div><p className="pipe-detail__body">We map your requirements, choose the right rendering strategy, and design the component tree before a single line of feature code is written.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Requirements &amp; stack review</span></li><li><span className="ok">✓</span><span>Component tree &amp; routing design</span></li><li><span className="ok">✓</span><span>Itemised estimate within 24h</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww discover --react</div><div className="t2">✓ requirements captured  ✓ component tree mapped  ✓ estimate sent</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04 · ◷ 3–7 days</div><div className="pipe-detail__title">Design system setup</div><p className="pipe-detail__body">Design tokens, a Storybook instance, and reusable primitives are built first — so every feature after this ships from the same visual language.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Design tokens defined</span></li><li><span className="ok">✓</span><span>Storybook instance live</span></li><li><span className="ok">✓</span><span>Reusable primitives ready</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww setup --design-system</div><div className="t2">✓ tokens defined  ✓ Storybook live  ✓ primitives ready</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04 · ◷ ongoing sprints</div><div className="pipe-detail__title">Feature development</div><p className="pipe-detail__body">Two-week sprints with daily builds, PR reviews, and a live staging URL — you see working software every sprint, never a black box.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Fortnightly staging deploys</span></li><li><span className="ok">✓</span><span>PR review on every merge</span></li><li><span className="ok">✓</span><span>Stakeholder demo each sprint</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww ship --sprint</div><div className="t2">✓ staging deployed  ✓ PRs reviewed  ✓ demo shipped</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04 · ◷ launch week</div><div className="pipe-detail__title">Test &amp; optimise</div><p className="pipe-detail__body">Unit tests, end-to-end Playwright coverage, and a Lighthouse CI pass before a zero-downtime deploy to production.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Jest / Vitest + Playwright coverage</span></li><li><span className="ok">✓</span><span>Lighthouse CI passed</span></li><li><span className="ok">✓</span><span>Zero-downtime production deploy</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww deploy --prod</div><div className="t2">✓ tests passing  ✓ Lighthouse 90+  ✓ live · monitored</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">WHAT_YOU_GET</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Figma design source files</span></div><div><span className="plus">+</span><span>Clean, documented codebase</span></div><div><span className="plus">+</span><span>CI/CD pipeline</span></div><div><span className="plus">+</span><span>SEO &amp; analytics setup</span></div><div><span className="plus">+</span><span>Performance report</span></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// why Digital Web Weaver for React</p>
          <h2 className="title mono">Built for outcomes, not templates</h2>
          <div className="grid grid-4 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{ color: "var(--pink)" }}>⚡ FAST</div><div className="cap__title" style={{ marginTop: "10px" }}>Performance-first</div><p className="cap__body">Every app we ship scores 90+ on Core Web Vitals by default.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{ color: "var(--pink)" }}>📘 TYPED</div><div className="cap__title" style={{ marginTop: "10px" }}>TypeScript always</div><p className="cap__body">No any-typing shortcuts — full type safety from day one.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{ color: "var(--pink)" }}>🔁 AGILE</div><div className="cap__title" style={{ marginTop: "10px" }}>Agile delivery</div><p className="cap__body">Two-week sprints with live staging and transparent progress.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{ color: "var(--pink)" }}>🔒 SAFE</div><div className="cap__title" style={{ marginTop: "10px" }}>OWASP secure</div><p className="cap__body">Security baked in, not bolted on — CSP, HTTPS, input sanitisation.</p></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// client words — React engagements</p>
          <div className="grid grid-3 stagger">
            <div className="quote"><div className="stars">★★★★★</div><p>We needed a senior React engineer who could own our design system migration to TypeScript. They matched us with someone in 36 hours who had done exactly this before. The codebase is finally maintainable.</p><div className="quote__who"><div className="quote__avatar">JM</div><div><div className="quote__name">James M.</div><div className="quote__role">CTO · FinTech SaaS · United Kingdom</div></div></div></div>
            <div className="quote"><div className="stars">★★★★★</div><p>Our previous contractor left us with zero tests and no component documentation. Their React developer rebuilt our testing foundation in the first month while shipping features. Exactly what we needed.</p><div className="quote__who"><div className="quote__avatar">PR</div><div><div className="quote__name">Priya R.</div><div className="quote__role">VP Engineering · E-commerce Platform · India</div></div></div></div>
            <div className="quote"><div className="stars">★★★★★</div><p>The Next.js App Router migration was done in 6 weeks without a single production incident. The developer understood our SEO constraints and the Core Web Vitals improved significantly. Highly recommended.</p><div className="quote__who"><div className="quote__avatar">TK</div><div><div className="quote__name">Tom K.</div><div className="quote__role">Head of Product · Media Startup · Canada</div></div></div></div>
          </div>
        </section>

        <section id="s-compare" className="section reveal">
          <p className="eyebrow">// diff — DWW React engineers vs. typical agency headcount</p>
          <h2 className="title mono">Senior React engineers, not agency headcount</h2>
          <div className="compare cols3">
            <div className="compare__head"><div className="c-cap">capability</div><div className="c-dww">Digital Web Weaver</div><div className="c-typ">typical agency</div></div>
            <div className="compare__row"><div className="c-cap">Seniority level</div><div className="c-dww">✓ 4+ yrs React specialists</div><div className="c-typ">✕ Mixed — juniors common</div></div>
            <div className="compare__row"><div className="c-cap">Time to match</div><div className="c-dww">✓ 48 hours</div><div className="c-typ">✕ 2–4 weeks</div></div>
            <div className="compare__row"><div className="c-cap">Type safety</div><div className="c-dww">✓ TypeScript throughout</div><div className="c-typ">✕ Optional or absent</div></div>
            <div className="compare__row"><div className="c-cap">Testing</div><div className="c-dww">✓ Jest, RTL, Playwright standard</div><div className="c-typ">✕ Rarely enforced</div></div>
            <div className="compare__row"><div className="c-cap">Communication</div><div className="c-dww">✓ Direct access, daily updates</div><div className="c-typ">✕ Via account manager</div></div>
            <div className="compare__row"><div className="c-cap">Code ownership</div><div className="c-dww">✓ 100% yours, no lock-in</div><div className="c-typ">✕ Vendor lock-in common</div></div>
          </div>
        </section>

        <section id="s-models" className="section reveal">
          <p className="eyebrow">const engagement = [ <span className="c">// how we can work together</span></p>
          <h2 className="title mono">Ways to hire a React developer</h2>
          <p className="subtitle">Pick the shape that fits your stage — every model comes with senior engineers and full source-code ownership.</p>
          <div className="grid grid-3 stagger">
            <div className="price">
              <div className="price__head"><div className="price__kind" style={{ color: "var(--teal)" }}>01 · FIXED-SCOPE PROJECT</div><div className="price__title">Fixed-scope build</div><p className="price__body">A defined React build with an itemised price. Best when the scope is clear and you want budget certainty.</p><div className="price__amt"><b>Custom quote</b><span>/ scoped to your project</span></div></div>
              <ul className="price__list"><li><span className="ok">✓</span><span>Fixed price &amp; timeline</span></li><li><span className="ok">✓</span><span>Milestone payments</span></li><li><span className="ok">✓</span><span>Full source-code handover</span></li></ul>
              <div className="price__foot"><a className="price__cta btn--ghost" href="#s-contact" data-scroll="s-contact" style={{ display: "block", textAlign: "center", color: "var(--text)" }}>Scope a project ↗</a></div>
            </div>
            <div className="price is-featured">
              <span className="price__badge">MOST POPULAR</span>
              <div className="price__head"><div className="price__kind" style={{ color: "var(--pink)" }}>02 · DEDICATED ENGINEER</div><div className="price__title">Dedicated React engineer</div><p className="price__body">A senior React engineer embedded in your team, billed monthly. Best for evolving products and ongoing roadmaps.</p><div className="price__amt"><b>Monthly</b><span>/ billed as one engineer</span></div></div>
              <ul className="price__list"><li><span className="ok">✓</span><span>Senior React engineer</span></li><li><span className="ok">✓</span><span>Works your hours (overlap)</span></li><li><span className="ok">✓</span><span>Scale up or down anytime</span></li></ul>
              <div className="price__foot"><Link className="price__cta" href="/hire-dedicated-resource/" style={{ display: "block", textAlign: "center", background: "var(--pink)", color: "var(--bg)" }}>Hire a React engineer ↗</Link></div>
            </div>
            <div className="price">
              <div className="price__head"><div className="price__kind" style={{ color: "var(--yellow)" }}>03 · RETAINER</div><div className="price__title">Care &amp; scale retainer</div><p className="price__body">Ongoing support, performance tuning, and feature work after launch. Best for live products that need to stay fast.</p><div className="price__amt"><b>Custom quote</b><span>/ reserved monthly hours</span></div></div>
              <ul className="price__list"><li><span className="ok">✓</span><span>Priority support SLA</span></li><li><span className="ok">✓</span><span>Monitoring &amp; dependency updates</span></li><li><span className="ok">✓</span><span>Reserved monthly dev hours</span></li></ul>
              <div className="price__foot"><a className="price__cta btn--ghost" href="#s-contact" data-scroll="s-contact" style={{ display: "block", textAlign: "center", color: "var(--text)" }}>Talk retainer ↗</a></div>
            </div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// react-developer.faq.md</p>
          <h2 className="title mono">React developer FAQ</h2>
          <p className="subtitle">Common questions about hiring React developers.</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Do you work with Next.js?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — we build with Next.js daily. App Router, Server Components, SSG/ISR, and edge deployments are all in our wheelhouse.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you migrate our legacy codebase?<span className="sign">[+]</span></button><div className="faq__a"><p>Absolutely. We've migrated jQuery, AngularJS, and older React class-component apps to modern functional React with TypeScript.</p></div></div>
            <div className="faq__item"><button className="faq__q">How long does a typical React project take?<span className="sign">[+]</span></button><div className="faq__a"><p>A focused MVP takes 4–8 weeks. An enterprise dashboard or complex SPA typically takes 3–6 months depending on scope.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you write tests?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — unit tests with Jest/Vitest, component tests with RTL, and end-to-end tests with Playwright are part of every engagement.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <a className="svc" href="https://digitalwebweaver.com/web-application-development/"><div className="svc__title" style={{ fontSize: "16px" }}>Web application development</div><p className="svc__body" style={{ fontSize: "13.5px" }}>Complex portals and dashboards built with React.</p><div className="mono" style={{ fontSize: "12px", color: "var(--pink)", marginTop: "12px" }}>open ↗</div></a>
            <Link className="svc" href="/saas-development/"><div className="svc__title" style={{ fontSize: "16px" }}>SaaS development</div><p className="svc__body" style={{ fontSize: "13.5px" }}>End-to-end SaaS product development.</p><div className="mono" style={{ fontSize: "12px", color: "var(--pink)", marginTop: "12px" }}>open ↗</div></Link>
            <Link className="svc" href="/web-development/"><div className="svc__title" style={{ fontSize: "16px" }}>Web development</div><p className="svc__body" style={{ fontSize: "13.5px" }}>Full-stack web development services.</p><div className="mono" style={{ fontSize: "12px", color: "var(--pink)", marginTop: "12px" }}>open ↗</div></Link>
            <Link className="svc" href="/nodejs-developer/"><div className="svc__title" style={{ fontSize: "16px" }}>Hire Node.js developer</div><p className="svc__body" style={{ fontSize: "13.5px" }}>Backend engineers who pair perfectly with React.</p><div className="mono" style={{ fontSize: "12px", color: "var(--pink)", marginTop: "12px" }}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./hire --react-developer<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to hire a React developer?</h2>
          <p className="cta__lead">Tell us your stack, timeline, and budget. We'll match you with 2–3 senior React engineers within 48 hours — all pre-vetted, immediately available, and ready to ship.</p>
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
        <span className="statusbar__spacer">react-developer.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
