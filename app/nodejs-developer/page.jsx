import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "Hire Node.js Developers | India, UK & Global Teams — Digital Web Weaver" },
  description: "Hire senior Node.js developers — event-driven APIs, microservices, and real-time backends with TypeScript. Matched with 2–3 pre-vetted profiles in 48 hours.",
  alternates: { canonical: "/nodejs-developer/" },
  openGraph: { title: "Hire Node.js Developers | India, UK & Global Teams — Digital Web Weaver", description: "Hire senior Node.js developers — event-driven APIs, microservices, and real-time backends with TypeScript. Matched with 2–3 pre-vetted profiles in 48 hours.", url: "/nodejs-developer/", type: "website" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={serviceSchema({ name: "Hire Node.js Developers", description: "Hire senior Node.js developers — event-driven APIs, microservices, and real-time backends with TypeScript. Matched with 2–3 pre-vetted profiles in 48 hours.", href: "/nodejs-developer/" })} />
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
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{ color: "var(--teal)" }}>●</span> nodejs-developer.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{ color: "var(--yellow)" }}>●</span> services.ts</button>
        <button className="tab" data-scroll="s-how" data-target="s-how"><span className="tdot" style={{ color: "var(--pink)" }}>●</span> process.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{ color: "var(--green)" }}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// nodejs-developer.ts · Node.js 20 · TypeScript · Fastify</p>
            <span className="badge">NODE.JS DEVELOPMENT</span>
            <h1 className="hero__h1">Node.js backend developers who build for <span className="pink">scale</span></h1>
            <p className="hero__lead">We craft fast, event-driven APIs and microservices with Node.js, TypeScript, and battle-tested backend patterns.</p>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{ color: "var(--pink)" }}>40+</b><span>API projects</span></div>
              <div className="hero__stat"><b style={{ color: "var(--teal)" }}>5yr+</b><span>Node.js depth</span></div>
              <div className="hero__stat"><b style={{ color: "var(--yellow)" }}>99%</b><span>uptime SLA</span></div>
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
              <div className="s1">✓ request received<br />✓ routed to a senior Node.js engineer<br />✓ estimate en route</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll reply within 24 hours.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{ color: "var(--pink)" }}>40+</div><div className="lbl">API_PROJECTS</div><div className="sub">▲ shipped to production</div></div>
          <div className="stat-cell"><div className="big" style={{ color: "var(--teal)" }}>5yr+</div><div className="lbl">NODE.JS_DEPTH</div><div className="sub">▲ senior backend engineers</div></div>
          <div className="stat-cell"><div className="big" style={{ color: "var(--yellow)" }}>99%</div><div className="lbl">UPTIME_SLA</div><div className="sub">▲ production-grade services</div></div>
          <div className="stat-cell"><div className="big" style={{ color: "var(--pink)" }}>150+</div><div className="lbl">CLIENTS_TRUSTED</div><div className="sub">▲ India · UK · US · Global</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// what we build with Node.js</span></p>
          <h2 className="title mono">What we build</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">REST &amp; GraphQL APIs</div><p className="svc__body">Versioned, documented, rate-limited APIs for any frontend.</p><div className="svc__foot"><span>api.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Real-time apps</div><p className="svc__body">WebSocket and Socket.io for chat, notifications, live data.</p><div className="svc__foot"><span>socket.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Microservices</div><p className="svc__body">Event-driven services with RabbitMQ, Kafka, and Redis.</p><div className="svc__foot"><span>service.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Auth systems</div><p className="svc__body">JWT, OAuth 2.0, session management, and RBAC.</p><div className="svc__foot"><span>auth.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Serverless functions</div><p className="svc__body">AWS Lambda, Vercel Edge, Cloudflare Workers.</p><div className="svc__foot"><span>fn.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Database integration</div><p className="svc__body">PostgreSQL, MongoDB, Redis — ORM and raw query layers.</p><div className="svc__foot"><span>db.ts</span></div></div>
          </div>
        </section>

        <section id="s-capabilities" className="section reveal">
          <p className="eyebrow">// technical depth — our Node.js capabilities</p>
          <h2 className="title mono">Our Node.js capabilities</h2>
          <div className="grid grid-3">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8l4 4-4 4M20 8l-4 4 4 4M14 4l-4 16"></path></svg><span className="cap__title">Express &amp; Fastify</span></div><p className="cap__body">Battle-tested HTTP frameworks — Fastify for schema-validated, high-throughput APIs.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M9 12h4M11 12v5M15 16.5c.6.6 3 .8 3-1s-3-1-3-2.5 2.4-1.4 3-.8"></path></svg><span className="cap__title">TypeScript backend</span></div><p className="cap__body">Typed request handlers, DTOs, and service layers, end to end.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="1.6"></circle><path d="M5 8h14M12 8v5m0 0l-3 6m3-6l3 6"></path></svg><span className="cap__title">Testing frameworks</span></div><p className="cap__body">Vitest and Supertest coverage on every route and service.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 1 0 9 9"></path><path d="M12 12l5-3"></path></svg><span className="cap__title">Observability</span></div><p className="cap__body">Structured logging and OpenTelemetry tracing wired in from day one.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.3A3.5 3.5 0 0 1 17 18z"></path><path d="M12 12v5m0-5l-2 2m2-2l2 2"></path></svg><span className="cap__title">Docker &amp; Kubernetes</span></div><p className="cap__body">Containerised services with health checks, ready for horizontal scale.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg><span className="cap__title">Security measures</span></div><p className="cap__body">OWASP-aligned defaults — rate limiting, input validation, secrets management.</p></div>
          </div>
        </section>

        <section id="s-stack" className="section reveal">
          <p className="eyebrow">import &#123; stack &#125; from "@dww/node" <span className="c">// the Node.js ecosystem we use</span></p>
          <h2 className="title mono">Node.js technology stack</h2>
          <div className="stack-tabs" data-stack>
            <button className="stack-tab" data-cat="Runtimes">Runtimes <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Frameworks">Frameworks <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Databases">Databases <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Infra">Infra <span className="n">[4]</span></button>
          </div>
          <div className="stack-grid">
            <div className="stack-cell" data-cat="Runtimes"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--green)" }}>No</span><div className="stack-cell__name">Node.js 20 LTS</div><div className="stack-cell__cat">Runtimes</div></div>
            <div className="stack-cell" data-cat="Runtimes"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--yellow)" }}>Bn</span><div className="stack-cell__name">Bun</div><div className="stack-cell__cat">Runtimes</div></div>
            <div className="stack-cell" data-cat="Runtimes"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--text)" }}>De</span><div className="stack-cell__name">Deno</div><div className="stack-cell__cat">Runtimes</div></div>
            <div className="stack-cell" data-cat="Runtimes"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "#3178c6" }}>TS</span><div className="stack-cell__name">TypeScript 5</div><div className="stack-cell__cat">Runtimes</div></div>
            <div className="stack-cell" data-cat="Frameworks"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--text)" }}>Ex</span><div className="stack-cell__name">Express.js</div><div className="stack-cell__cat">Frameworks</div></div>
            <div className="stack-cell" data-cat="Frameworks"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--red)" }}>Fa</span><div className="stack-cell__name">Fastify</div><div className="stack-cell__cat">Frameworks</div></div>
            <div className="stack-cell" data-cat="Frameworks"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--pink)" }}>Ns</span><div className="stack-cell__name">NestJS</div><div className="stack-cell__cat">Frameworks</div></div>
            <div className="stack-cell" data-cat="Frameworks"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--teal)" }}>Ho</span><div className="stack-cell__name">Hono</div><div className="stack-cell__cat">Frameworks</div></div>
            <div className="stack-cell" data-cat="Databases"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--teal)" }}>Pg</span><div className="stack-cell__name">PostgreSQL</div><div className="stack-cell__cat">Databases</div></div>
            <div className="stack-cell" data-cat="Databases"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--green)" }}>Mo</span><div className="stack-cell__name">MongoDB</div><div className="stack-cell__cat">Databases</div></div>
            <div className="stack-cell" data-cat="Databases"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--red)" }}>Rd</span><div className="stack-cell__name">Redis</div><div className="stack-cell__cat">Databases</div></div>
            <div className="stack-cell" data-cat="Databases"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--text)" }}>Pr</span><div className="stack-cell__name">Prisma ORM</div><div className="stack-cell__cat">Databases</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "#61dafb" }}>Dk</span><div className="stack-cell__name">Docker</div><div className="stack-cell__cat">Infra</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--teal)" }}>K8</span><div className="stack-cell__name">Kubernetes</div><div className="stack-cell__cat">Infra</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--yellow)" }}>Ec</span><div className="stack-cell__name">AWS ECS</div><div className="stack-cell__cat">Infra</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{ color: "var(--text)" }}>▲</span><div className="stack-cell__name">Vercel</div><div className="stack-cell__cat">Infra</div></div>
          </div>
        </section>

        <section id="s-how" className="section reveal">
          <p className="eyebrow">function <span style={{ color: "var(--text)" }}>nodeProcess</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">Our Node.js development process</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">API design</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Core services</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Integration &amp; testing</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Deploy &amp; monitor</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04 · ◷ 3–5 days</div><div className="pipe-detail__title">API design</div><p className="pipe-detail__body">We design the API contract first — routes, schemas, and versioning — so frontend and backend teams can work in parallel from day one.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Route &amp; schema design</span></li><li><span className="ok">✓</span><span>Auth strategy defined</span></li><li><span className="ok">✓</span><span>OpenAPI spec shared</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww design --api</div><div className="t2">✓ contract defined  ✓ auth strategy set  ✓ spec shared</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04 · ◷ 1–2 weeks</div><div className="pipe-detail__title">Core services</div><p className="pipe-detail__body">Core business logic, database models, and service boundaries are built with full TypeScript coverage.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Service layer implemented</span></li><li><span className="ok">✓</span><span>DB models &amp; migrations</span></li><li><span className="ok">✓</span><span>Typed end to end</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww build --services</div><div className="t2">✓ services scaffolded  ✓ migrations run  ✓ types passing</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04 · ◷ ongoing sprints</div><div className="pipe-detail__title">Integration &amp; testing</div><p className="pipe-detail__body">Integration tests, load testing, and observability are wired in as features land — not bolted on before launch.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Integration + load tests</span></li><li><span className="ok">✓</span><span>OpenTelemetry tracing</span></li><li><span className="ok">✓</span><span>Staging environment live</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww test --integration</div><div className="t2">✓ tests passing  ✓ tracing wired  ✓ staging live</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04 · ◷ launch week</div><div className="pipe-detail__title">Deploy &amp; monitor</div><p className="pipe-detail__body">Containerised deploy with health checks, autoscaling, and monitoring switched on before traffic hits production.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Docker + CI/CD pipeline</span></li><li><span className="ok">✓</span><span>Health checks &amp; autoscaling</span></li><li><span className="ok">✓</span><span>Monitoring &amp; alerting live</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww deploy --prod</div><div className="t2">✓ containers healthy  ✓ autoscaling on  ✓ live · monitored</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">WHAT_YOU_GET</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Figma design source files</span></div><div><span className="plus">+</span><span>Clean, documented codebase</span></div><div><span className="plus">+</span><span>CI/CD pipeline</span></div><div><span className="plus">+</span><span>SEO &amp; analytics setup</span></div><div><span className="plus">+</span><span>Performance report</span></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// why Digital Web Weaver for Node.js</p>
          <h2 className="title mono">Built for throughput, not just endpoints</h2>
          <div className="grid grid-4 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{ color: "var(--pink)" }}>⚡ SCALE</div><div className="cap__title" style={{ marginTop: "10px" }}>High-throughput expertise</div><p className="cap__body">We've built APIs serving 10k+ req/s.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{ color: "var(--pink)" }}>📘 TYPED</div><div className="cap__title" style={{ marginTop: "10px" }}>TypeScript by default</div><p className="cap__body">Every service ships fully typed — no runtime surprises in production.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{ color: "var(--pink)" }}>🔀 EVENT-DRIVEN</div><div className="cap__title" style={{ marginTop: "10px" }}>Event-driven patterns</div><p className="cap__body">Queues and pub/sub over synchronous chains where it counts.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{ color: "var(--pink)" }}>🔒 SAFE</div><div className="cap__title" style={{ marginTop: "10px" }}>OWASP secure APIs</div><p className="cap__body">Input validation, rate limiting, and auth hardening on every endpoint.</p></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// client words — Node.js engagements</p>
          <div className="grid grid-3 stagger">
            <div className="quote"><div className="stars">★★★★★</div><p>We needed someone who could own our NestJS API migration from a legacy PHP monolith...</p><div className="quote__who"><div className="quote__avatar">DM</div><div><div className="quote__name">David M.</div><div className="quote__role">CTO · Logistics Platform · United Kingdom</div></div></div></div>
            <div className="quote"><div className="stars">★★★★★</div><p>Our PostgreSQL queries were timing out under load. Their engineer diagnosed...</p><div className="quote__who"><div className="quote__avatar">ST</div><div><div className="quote__name">Shreya T.</div><div className="quote__role">VP Engineering · FinTech API · India</div></div></div></div>
            <div className="quote"><div className="stars">★★★★★</div><p>The real-time WebSocket feature was the most technically complex thing we'd ever built...</p><div className="quote__who"><div className="quote__avatar">OB</div><div><div className="quote__name">Ollie B.</div><div className="quote__role">Head of Engineering · SaaS Collaboration Tool · Canada</div></div></div></div>
          </div>
        </section>

        <section id="s-compare" className="section reveal">
          <p className="eyebrow">// diff — DWW Node.js engineers vs. typical agency headcount</p>
          <h2 className="title mono">Senior Node.js engineers, not agency headcount</h2>
          <div className="compare cols3">
            <div className="compare__head"><div className="c-cap">capability</div><div className="c-dww">Digital Web Weaver</div><div className="c-typ">typical agency</div></div>
            <div className="compare__row"><div className="c-cap">Seniority level</div><div className="c-dww">✓ 5+ yrs backend specialists</div><div className="c-typ">✕ Mixed — juniors common</div></div>
            <div className="compare__row"><div className="c-cap">Time to match</div><div className="c-dww">✓ 48 hours</div><div className="c-typ">✕ 2–4 weeks</div></div>
            <div className="compare__row"><div className="c-cap">API design</div><div className="c-dww">✓ Typed, versioned, rate-limited</div><div className="c-typ">✕ Ad hoc</div></div>
            <div className="compare__row"><div className="c-cap">Observability</div><div className="c-dww">✓ OpenTelemetry from day one</div><div className="c-typ">✕ Bolted on later</div></div>
            <div className="compare__row"><div className="c-cap">Communication</div><div className="c-dww">✓ Direct access, daily updates</div><div className="c-typ">✕ Via account manager</div></div>
            <div className="compare__row"><div className="c-cap">Code ownership</div><div className="c-dww">✓ 100% yours, no lock-in</div><div className="c-typ">✕ Vendor lock-in common</div></div>
          </div>
        </section>

        <section id="s-models" className="section reveal">
          <p className="eyebrow">const engagement = [ <span className="c">// how we can work together</span></p>
          <h2 className="title mono">Ways to hire a Node.js developer</h2>
          <p className="subtitle">Pick the shape that fits your stage — every model comes with senior engineers and full source-code ownership.</p>
          <div className="grid grid-3 stagger">
            <div className="price">
              <div className="price__head"><div className="price__kind" style={{ color: "var(--teal)" }}>01 · FIXED-SCOPE PROJECT</div><div className="price__title">Fixed-scope build</div><p className="price__body">A defined API or backend system with an itemised price. Best when the scope is clear and you want budget certainty.</p><div className="price__amt"><b>Custom quote</b><span>/ scoped to your project</span></div></div>
              <ul className="price__list"><li><span className="ok">✓</span><span>Fixed price &amp; timeline</span></li><li><span className="ok">✓</span><span>Milestone payments</span></li><li><span className="ok">✓</span><span>Full source-code handover</span></li></ul>
              <div className="price__foot"><a className="price__cta btn--ghost" href="#s-contact" data-scroll="s-contact" style={{ display: "block", textAlign: "center", color: "var(--text)" }}>Scope a project ↗</a></div>
            </div>
            <div className="price is-featured">
              <span className="price__badge">MOST POPULAR</span>
              <div className="price__head"><div className="price__kind" style={{ color: "var(--pink)" }}>02 · DEDICATED ENGINEER</div><div className="price__title">Dedicated Node.js engineer</div><p className="price__body">A senior Node.js engineer embedded in your team, billed monthly. Best for evolving products and ongoing roadmaps.</p><div className="price__amt"><b>Monthly</b><span>/ billed as one engineer</span></div></div>
              <ul className="price__list"><li><span className="ok">✓</span><span>Senior Node.js engineer</span></li><li><span className="ok">✓</span><span>Works your hours (overlap)</span></li><li><span className="ok">✓</span><span>Scale up or down anytime</span></li></ul>
              <div className="price__foot"><Link className="price__cta" href="/hire-dedicated-resource/" style={{ display: "block", textAlign: "center", background: "var(--pink)", color: "var(--bg)" }}>Hire a Node.js engineer ↗</Link></div>
            </div>
            <div className="price">
              <div className="price__head"><div className="price__kind" style={{ color: "var(--yellow)" }}>03 · RETAINER</div><div className="price__title">Care &amp; scale retainer</div><p className="price__body">Ongoing support, performance tuning, and feature work after launch. Best for live services that need to stay fast.</p><div className="price__amt"><b>Custom quote</b><span>/ reserved monthly hours</span></div></div>
              <ul className="price__list"><li><span className="ok">✓</span><span>Priority support SLA</span></li><li><span className="ok">✓</span><span>Monitoring &amp; dependency updates</span></li><li><span className="ok">✓</span><span>Reserved monthly dev hours</span></li></ul>
              <div className="price__foot"><a className="price__cta btn--ghost" href="#s-contact" data-scroll="s-contact" style={{ display: "block", textAlign: "center", color: "var(--text)" }}>Talk retainer ↗</a></div>
            </div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// nodejs-developer.faq.md</p>
          <h2 className="title mono">Node.js developer FAQ</h2>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Express vs Fastify — which do you recommend?<span className="sign">[+]</span></button><div className="faq__a"><p>Fastify for new projects — it's roughly 2× faster than Express and has schema validation built in.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you build a monolith and split it later?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — we design monoliths with clear module boundaries from day one, so extracting a service later is a refactor, not a rewrite.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you handle database migrations?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — Prisma Migrate or Flyway for versioned, reproducible schema changes across every environment.</p></div></div>
            <div className="faq__item"><button className="faq__q">What's your typical API delivery timeline?<span className="sign">[+]</span></button><div className="faq__a"><p>A core REST API with auth, CRUD, and tests takes 2–4 weeks. A full backend platform typically takes 2–4 months.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <a className="svc" href="https://digitalwebweaver.com/web-application-development/"><div className="svc__title" style={{ fontSize: "16px" }}>Web application development</div><p className="svc__body" style={{ fontSize: "13.5px" }}>Complex portals and dashboards backed by Node.js.</p><div className="mono" style={{ fontSize: "12px", color: "var(--pink)", marginTop: "12px" }}>open ↗</div></a>
            <Link className="svc" href="/saas-development/"><div className="svc__title" style={{ fontSize: "16px" }}>SaaS development</div><p className="svc__body" style={{ fontSize: "13.5px" }}>End-to-end SaaS product development.</p><div className="mono" style={{ fontSize: "12px", color: "var(--pink)", marginTop: "12px" }}>open ↗</div></Link>
            <Link className="svc" href="/web-development/"><div className="svc__title" style={{ fontSize: "16px" }}>Web development</div><p className="svc__body" style={{ fontSize: "13.5px" }}>Full-stack web development services.</p><div className="mono" style={{ fontSize: "12px", color: "var(--pink)", marginTop: "12px" }}>open ↗</div></Link>
            <Link className="svc" href="/react-developer/"><div className="svc__title" style={{ fontSize: "16px" }}>Hire React developer</div><p className="svc__body" style={{ fontSize: "13.5px" }}>Frontend engineers who pair perfectly with Node.js.</p><div className="mono" style={{ fontSize: "12px", color: "var(--pink)", marginTop: "12px" }}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./hire --nodejs-developer<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to hire a Node.js developer?</h2>
          <p className="cta__lead">Tell us your stack, timeline, and budget. We'll match you with 2–3 senior Node.js engineers within 48 hours — all pre-vetted, immediately available, and ready to ship.</p>
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
        <span className="statusbar__spacer">nodejs-developer.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
