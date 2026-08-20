import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Software Development Services | Web, Mobile, AI & Cloud — Digital Web Weaver" },
  description: "Full-spectrum software development: web, mobile, APIs, cloud, AI, and design. 20+ specialist services from one senior team across India, the UK, and South Africa.",
  alternates: { canonical: "/services/" },
  openGraph: { title: "Software Development Services | Web, Mobile, AI & Cloud — Digital Web Weaver", description: "Full-spectrum software development: web, mobile, APIs, cloud, AI, and design. 20+ specialist services from one senior team across India, the UK, and South Africa.", url: "/services/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-foundation" data-target="s-foundation" title="Engineering">⚙</button>
      <button className="activitybar__btn" data-scroll="s-launch" data-target="s-launch" title="Product &amp; SaaS">◆</button>
      <button className="activitybar__btn" data-scroll="s-intelligence" data-target="s-intelligence" title="AI &amp; Cloud">✦</button>
      <button className="activitybar__btn" data-scroll="s-craft" data-target="s-craft" title="Design">❖</button>
      <button className="activitybar__btn" data-scroll="s-process" data-target="s-process" title="Process">❯</button>
      <button className="activitybar__btn" data-scroll="s-why" data-target="s-why" title="Why DWW">✓</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · South Africa">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> services.ts</button>
        <button className="tab" data-scroll="s-foundation" data-target="s-foundation"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> catalog.ts</button>
        <button className="tab" data-scroll="s-process" data-target="s-process"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> process.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// services.ts · 20+ specialist services · one senior team</p>
            <span className="badge">ALL SERVICES</span>
            <h1 className="hero__h1">Build, launch, and <span className="pink">scale</span> — from a <span className="teal">single</span> focused team</h1>
            <p className="hero__lead">Digital Web Weaver delivers full-spectrum software development: web, mobile, APIs, cloud, AI, and design — across India, the UK, South Africa, and beyond.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Start a project</a>
              <a className="btn btn--ghost" href="#s-foundation" data-scroll="s-foundation">$ browse --catalog</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>8+</b><span>years shipping</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>150+</b><span>projects delivered</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>20+</b><span>specialist services</span></div>
            </div>
          </div>
          <div className="formcard" id="scope">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">scope.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE SCOPING CALL</p>
              <p className="form__title">What are you building?</p>
              <p className="form__lead">Tell us what you need — a detailed scope and estimate within 24 hours, free.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME</label><input className="input" name="name" placeholder="Your name" /></div>
                <div className="field"><label className="label">WORK EMAIL</label><input className="input" name="email" type="email" placeholder="you@company.com" /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">WHICH SERVICE?</label>
                <select className="select" name="need"><option>Web app / portal</option><option>Mobile app</option><option>SaaS product</option><option>AI / automation project</option><option>Cloud / DevOps</option><option>UI/UX design</option><option>Not sure yet</option></select>
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
              <div className="s0">$ dww scope --submit</div>
              <div className="s1">✓ request received<br />✓ routed to a senior engineer<br />✓ scope en route</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll reply within 24 hours.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>8+</div><div className="lbl">YEARS_SHIPPING</div><div className="sub">▲ since 2013</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>150+</div><div className="lbl">PROJECTS</div><div className="sub">▲ delivered end to end</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>20+</div><div className="lbl">SERVICES</div><div className="sub">▲ across 4 disciplines</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>4</div><div className="lbl">CONTINENTS</div><div className="sub">▲ India · UK · ZA · beyond</div></div>
        </section>

        <section id="s-foundation" className="section reveal">
          <p className="eyebrow">const foundation = [ <span className="c">// engineering &amp; development</span></p>
          <h2 className="title mono">Engineering &amp; development</h2>
          <div className="grid grid-3 stagger">
            <Link className="svc" href="/react-developer/"><div className="svc__num">01</div><div className="svc__title">React / Next.js Development</div><p className="svc__body">Performance-first frontends with SSR, SSG, and App Router — interfaces that have served millions of sessions.</p><div className="svc__tags"><span className="tag">React</span><span className="tag">Next.js</span><span className="tag">TypeScript</span></div><div className="svc__foot"><span>react.tsx</span><span className="open">open ↗</span></div></Link>
            <Link className="svc" href="/nodejs-developer/"><div className="svc__num">02</div><div className="svc__title">Node.js &amp; Backend APIs</div><p className="svc__body">REST and GraphQL APIs, real-time WebSocket services, and background workers built for production load.</p><div className="svc__tags"><span className="tag">Node.js</span><span className="tag">Express</span><span className="tag">PostgreSQL</span></div><div className="svc__foot"><span>api.ts</span><span className="open">open ↗</span></div></Link>
            <Link className="svc" href="/python-developer/"><div className="svc__num">03</div><div className="svc__title">Python Development</div><p className="svc__body">Data pipelines, Django/FastAPI backends, ML model serving, and automation scripting wherever Python fits.</p><div className="svc__tags"><span className="tag">Python</span><span className="tag">FastAPI</span><span className="tag">Django</span></div><div className="svc__foot"><span>main.py</span><span className="open">open ↗</span></div></Link>
            <a className="svc" href="https://digitalwebweaver.com/api-development/"><div className="svc__num">04</div><div className="svc__title">API Development</div><p className="svc__body">Designed, documented, and versioned APIs your team will enjoy maintaining — OpenAPI specs and SDKs included.</p><div className="svc__tags"><span className="tag">REST</span><span className="tag">GraphQL</span><span className="tag">OpenAPI</span></div><div className="svc__foot"><span>spec.yaml</span><span className="open">open ↗</span></div></a>
            <Link className="svc" href="/stack/databases/"><div className="svc__num">05</div><div className="svc__title">Database Design</div><p className="svc__body">Schema design, query optimisation, migration strategies, and indexing — so your data layer is never the bottleneck.</p><div className="svc__tags"><span className="tag">PostgreSQL</span><span className="tag">MySQL</span><span className="tag">Redis</span></div><div className="svc__foot"><span>schema.sql</span><span className="open">open ↗</span></div></Link>
            <a className="svc" href="https://digitalwebweaver.com/microservices-development/"><div className="svc__num">06</div><div className="svc__title">Microservices</div><p className="svc__body">Decompose a monolith or build distributed from the start — service contracts, event queues, and orchestration handled.</p><div className="svc__tags"><span className="tag">Docker</span><span className="tag">RabbitMQ</span><span className="tag">Kafka</span></div><div className="svc__foot"><span>services.yml</span><span className="open">open ↗</span></div></a>
          </div>
        </section>

        <section id="s-launch" className="section reveal">
          <p className="eyebrow">const launch = [ <span className="c">// product, SaaS &amp; growth</span></p>
          <h2 className="title mono">Product, SaaS &amp; growth</h2>
          <div className="grid grid-3 stagger">
            <Link className="svc" href="/mvp-development/"><div className="svc__num">01</div><div className="svc__title">MVP Development</div><p className="svc__body">Validate your idea in 6–12 weeks. We scope ruthlessly, build the smallest thing that proves the concept, and ship.</p><div className="svc__tags"><span className="tag">Rapid build</span><span className="tag">User testing</span></div><div className="svc__foot"><span>mvp.ts</span><span className="open">open ↗</span></div></Link>
            <Link className="svc" href="/saas-development/"><div className="svc__num">02</div><div className="svc__title">SaaS Development</div><p className="svc__body">Multi-tenant architecture, subscription billing, role-based auth, and the instrumentation you need to grow MRR.</p><div className="svc__tags"><span className="tag">Stripe</span><span className="tag">Auth</span><span className="tag">Multi-tenant</span></div><div className="svc__foot"><span>saas.ts</span><span className="open">open ↗</span></div></Link>
            <Link className="svc" href="/mobile-app-development/"><div className="svc__num">03</div><div className="svc__title">Mobile App Development</div><p className="svc__body">iOS and Android — native or cross-platform. Apps that feel native, work offline, and pass App Store review first time.</p><div className="svc__tags"><span className="tag">Flutter</span><span className="tag">React Native</span></div><div className="svc__foot"><span>mobile.ts</span><span className="open">open ↗</span></div></Link>
            <Link className="svc" href="/ecommerce-development/"><div className="svc__num">04</div><div className="svc__title">E-Commerce Development</div><p className="svc__body">Custom storefronts, Shopify extensions, headless commerce, and payment integrations across every major gateway.</p><div className="svc__tags"><span className="tag">Shopify</span><span className="tag">WooCommerce</span></div><div className="svc__foot"><span>shop.ts</span><span className="open">open ↗</span></div></Link>
            <Link className="svc" href="/crm-erp-systems/"><div className="svc__num">05</div><div className="svc__title">CRM / ERP Systems</div><p className="svc__body">Bespoke business systems that fit your operations — not generic tools your team bends its process around.</p><div className="svc__tags"><span className="tag">CRM</span><span className="tag">ERP</span><span className="tag">Workflows</span></div><div className="svc__foot"><span>erp.ts</span><span className="open">open ↗</span></div></Link>
            <Link className="svc" href="/services/progressive-web-apps/"><div className="svc__num">06</div><div className="svc__title">Progressive Web Apps</div><p className="svc__body">Offline-capable, installable, app-store-free — closing the gap between web and native for a fraction of the cost.</p><div className="svc__tags"><span className="tag">PWA</span><span className="tag">Service workers</span></div><div className="svc__foot"><span>pwa.ts</span><span className="open">open ↗</span></div></Link>
          </div>
        </section>

        <section id="s-intelligence" className="section reveal">
          <p className="eyebrow">const intelligence = [ <span className="c">// AI, automation &amp; cloud</span></p>
          <h2 className="title mono">AI, automation &amp; cloud</h2>
          <div className="grid grid-3 stagger">
            <Link className="svc" href="/ai-automation/"><div className="svc__num">01</div><div className="svc__title">AI &amp; Automation</div><p className="svc__body">LLM integrations, agentic workflows, classification pipelines, and document intelligence built to stay reliable in production.</p><div className="svc__tags"><span className="tag">OpenAI</span><span className="tag">LangChain</span><span className="tag">Agents</span></div><div className="svc__foot"><span>ai.py</span><span className="open">open ↗</span></div></Link>
            <Link className="svc" href="/cloud-devops/"><div className="svc__num">02</div><div className="svc__title">Cloud &amp; DevOps</div><p className="svc__body">CI/CD pipelines, container orchestration, infrastructure-as-code, and cost-optimised cloud on AWS, GCP, or Azure.</p><div className="svc__tags"><span className="tag">AWS</span><span className="tag">Docker</span><span className="tag">Terraform</span></div><div className="svc__foot"><span>infra.tf</span><span className="open">open ↗</span></div></Link>
            <a className="svc" href="https://digitalwebweaver.com/api-integrations/"><div className="svc__num">03</div><div className="svc__title">API Integrations</div><p className="svc__body">Connect your stack to any third-party system — Stripe, HubSpot, Salesforce, ERPs, and payment gateways included.</p><div className="svc__tags"><span className="tag">Webhooks</span><span className="tag">OAuth</span><span className="tag">iPaaS</span></div><div className="svc__foot"><span>webhook.ts</span><span className="open">open ↗</span></div></a>
            <a className="svc" href="https://digitalwebweaver.com/performance-optimization/"><div className="svc__num">04</div><div className="svc__title">Performance Optimisation</div><p className="svc__body">Lighthouse scores, Core Web Vitals, database query tuning, caching layers, and CDN strategies — visibly faster in days.</p><div className="svc__tags"><span className="tag">Core Web Vitals</span><span className="tag">Redis</span></div><div className="svc__foot"><span>perf.ts</span><span className="open">open ↗</span></div></a>
            <a className="svc" href="https://digitalwebweaver.com/app-modernization/"><div className="svc__num">05</div><div className="svc__title">App Modernisation</div><p className="svc__body">Legacy system re-architecture — strangler-fig rewrites, monolith decomposition, and cloud migration, zero-downtime where possible.</p><div className="svc__tags"><span className="tag">Re-architecture</span><span className="tag">Migration</span></div><div className="svc__foot"><span>migrate.sh</span><span className="open">open ↗</span></div></a>
            <a className="svc" href="https://digitalwebweaver.com/enterprise-applications/"><div className="svc__num">06</div><div className="svc__title">Enterprise Applications</div><p className="svc__body">Custom internal tools, workflow engines, and cross-department platforms built to enterprise security and compliance standards.</p><div className="svc__tags"><span className="tag">SSO</span><span className="tag">RBAC</span><span className="tag">Audit logs</span></div><div className="svc__foot"><span>enterprise.ts</span><span className="open">open ↗</span></div></a>
          </div>
        </section>

        <section id="s-craft" className="section reveal">
          <p className="eyebrow">const craft = [ <span className="c">// design &amp; web presence</span></p>
          <h2 className="title mono">Design &amp; web presence</h2>
          <div className="grid grid-3 stagger">
            <Link className="svc" href="/ui-ux-design/"><div className="svc__num">01</div><div className="svc__title">UI/UX Design</div><p className="svc__body">User research, wireframes, prototypes, and pixel-perfect Figma handoff — design systems that keep your product consistent at scale.</p><div className="svc__tags"><span className="tag">Figma</span><span className="tag">UX research</span></div><div className="svc__foot"><span>design.fig</span><span className="open">open ↗</span></div></Link>
            <Link className="svc" href="/custom-web-apps/"><div className="svc__num">02</div><div className="svc__title">Custom Web Apps</div><p className="svc__body">Complex, interactive web applications — dashboards, portals, booking systems, SaaS UIs — built with no off-the-shelf compromise.</p><div className="svc__tags"><span className="tag">React</span><span className="tag">Portals</span></div><div className="svc__foot"><span>app.tsx</span><span className="open">open ↗</span></div></Link>
            <a className="svc" href="https://digitalwebweaver.com/website-development/"><div className="svc__num">03</div><div className="svc__title">Corporate Websites</div><p className="svc__body">Fast, accessible, SEO-optimised company sites that convert visitors into enquiries — CMS-powered and easy for your team to manage.</p><div className="svc__tags"><span className="tag">CMS</span><span className="tag">SEO</span></div><div className="svc__foot"><span>site.tsx</span><span className="open">open ↗</span></div></a>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// industries.json — where we build</p>
          <div className="trust">
            <div className="trust__label">INDUSTRIES_SERVED</div>
            <div className="trust__row"><span className="trust__chip">Healthcare</span><span className="trust__chip">EdTech</span><span className="trust__chip">Retail &amp; E-Commerce</span><span className="trust__chip">Fintech</span><span className="trust__chip">Logistics</span><span className="trust__chip">Clean Energy</span><span className="trust__chip">Manufacturing</span><span className="trust__chip">Real Estate</span></div>
          </div>
        </section>

        <section id="s-process" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>shipProduct</span>() &#123; <span className="c">// how a brief becomes a shipped product</span></p>
          <h2 className="title mono">How we turn a brief into a shipped product</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Discover</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Design &amp; architect</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Build in sprints</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Launch &amp; grow</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04 · ◷ 1–2 weeks</div><div className="pipe-detail__title">Discover</div><p className="pipe-detail__body">A focused scoping phase. We map requirements, flag risks, and produce a detailed spec and roadmap — not a vague estimate.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Requirements mapped &amp; risks flagged</span></li><li><span className="ok">✓</span><span>Detailed spec &amp; roadmap</span></li><li><span className="ok">✓</span><span>Itemised estimate, not a guess</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww discover --scope</div><div className="t2">✓ requirements mapped  ✓ risks flagged  ✓ spec delivered</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04 · ◷ 1–2 weeks</div><div className="pipe-detail__title">Design &amp; architect</div><p className="pipe-detail__body">Technical architecture decided before a line of code is written. Wireframes, data models, and API contracts agreed upfront.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Wireframes &amp; data models</span></li><li><span className="ok">✓</span><span>API contracts agreed upfront</span></li><li><span className="ok">✓</span><span>Architecture signed off with you</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww design --architect</div><div className="t2">✓ data models set  ✓ contracts agreed  ✓ architecture signed off</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04 · ◷ ongoing sprints</div><div className="pipe-detail__title">Build in sprints</div><p className="pipe-detail__body">Two-week sprints with working demos at every end. You see real progress and give real feedback — no big-bang delivery surprises.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Working demo every sprint</span></li><li><span className="ok">✓</span><span>Real feedback, no surprises</span></li><li><span className="ok">✓</span><span>Clean, documented codebase</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww ship --sprint</div><div className="t2">✓ demo shipped  ✓ feedback logged  ✓ tests passing</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04 · ◷ launch + 30 days</div><div className="pipe-detail__title">Launch &amp; grow</div><p className="pipe-detail__body">Production deployment, monitoring setup, and a 30-day hypercare window. Ongoing retainers available for teams that want us in their corner.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Production deployment &amp; monitoring</span></li><li><span className="ok">✓</span><span>30-day hypercare window</span></li><li><span className="ok">✓</span><span>Optional ongoing retainer</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww deploy --prod</div><div className="t2">✓ live · monitored  ✓ hypercare active</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// why teams choose DWW</p>
          <h2 className="title mono">Key differentiators</h2>
          <div className="grid grid-3 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🧠 SENIOR-ONLY</div><div className="cap__title" style={{"marginTop":"10px"}}>Senior-only delivery</div><p className="cap__body">No juniors billed at senior rates. Every engagement is led by an engineer with 5+ years shipping products to production at scale.</p></div>
            <div className="cap cap--top" style={{"borderTopColor":"var(--teal)"}}><div className="eyebrow" style={{"color":"var(--teal)"}}>🔍 TRANSPARENT</div><div className="cap__title" style={{"marginTop":"10px"}}>Transparent throughout</div><p className="cap__body">Fortnightly demos, a shared project board, and a Slack channel in your workspace from day one. No status-update chasing.</p></div>
            <div className="cap cap--top" style={{"borderTopColor":"var(--yellow)"}}><div className="eyebrow" style={{"color":"var(--yellow)"}}>🌍 TIME-ZONE FLEXIBLE</div><div className="cap__title" style={{"marginTop":"10px"}}>Time-zone flexible</div><p className="cap__body">Core team spans UK, India, and South Africa — overlapping with business hours wherever you are, without the offshore handover friction.</p></div>
          </div>
          <div className="panel-note"><p style={{"fontSize":"16px","color":"var(--text-2)","lineHeight":"1.65","maxWidth":"960px"}}>Digital Web Weaver is a software engineering studio, not a template shop. Every one of the 20+ services above is delivered by the same senior team — no outsourced sub-contractors, no juniors hidden behind a contract — so the engineers who scope your project are the ones who ship it.</p></div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// services.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">How long does a typical project take?<span className="sign">[+]</span></button><div className="faq__a"><p>A focused MVP typically ships in 6–12 weeks; full products and platforms run 3–6 months depending on scope. Every estimate is itemised during a 1–2 week discovery phase, not guessed upfront.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you work with early-stage startups or only established businesses?<span className="sign">[+]</span></button><div className="faq__a"><p>Both. We've shipped first-time MVPs for pre-seed founders and mission-critical systems for enterprises — the process flexes, the senior-engineer standard doesn't.</p></div></div>
            <div className="faq__item"><button className="faq__q">What's your pricing model — fixed price or time &amp; materials?<span className="sign">[+]</span></button><div className="faq__a"><p>Either. Well-scoped projects get a fixed price and timeline; evolving products run on a monthly dedicated-team or retainer model. We recommend the right fit during discovery.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you provide ongoing support after launch?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — every project includes a 30-day hypercare window post-launch, with optional monthly retainers for feature work, monitoring, and security patches.</p></div></div>
            <div className="faq__item"><button className="faq__q">Which countries do you work with?<span className="sign">[+]</span></button><div className="faq__a"><p>Clients across India, the UK, South Africa, and beyond. Our core team spans those time zones, so you get real overlap with your working hours.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// need something more specific</p>
          <div className="grid grid-4">
            <Link className="svc" href="/web-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Web development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Marketing sites, web portals, and web apps — React, Next.js, Node.js.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/custom-software-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Custom software</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Bespoke ERP, CRM, portals, and workflow automation.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/hire-dedicated-resource/"><div className="svc__title" style={{"fontSize":"16px"}}>Hire dedicated engineers</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Staff your team with senior engineers, deployed in 72 hours.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/portfolio/"><div className="svc__title" style={{"fontSize":"16px"}}>See our work</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Production systems we've designed, built, and shipped.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --not-sure-where-to-start<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Not sure where to start? Let's figure it out together.</h2>
          <p className="cta__lead">Tell us what you're building — or what's not working. A 30-minute call is usually enough to know whether we're the right fit, and what the path forward looks like.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Start a project</Link>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> No-commitment scoping call</span><span><span className="g">●</span> Fixed-price or retainer options</span><span><span className="g">●</span> Response within 24 hours</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">services.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
