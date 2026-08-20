import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Digital Web Weaver — Senior software engineering studio" },
  description: "A senior engineering studio building high-performance web platforms, SaaS products, mobile apps, and AI systems since 2013. India · UK · South Africa.",
  alternates: { canonical: "/" },
  openGraph: { title: "Digital Web Weaver — Senior software engineering studio", description: "A senior engineering studio building high-performance web platforms, SaaS products, mobile apps, and AI systems since 2013. India · UK · South Africa.", url: "/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-home" data-target="s-home" title="Home">⌂</button>
      <button className="activitybar__btn" data-scroll="s-services" data-target="s-services" title="Services">⚙</button>
      <button className="activitybar__btn" data-scroll="s-stack" data-target="s-stack" title="Stack">❮❯</button>
      <button className="activitybar__btn" data-scroll="s-work" data-target="s-work" title="Work">◈</button>
      <button className="activitybar__btn" data-scroll="s-process" data-target="s-process" title="Process">❯</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · South Africa">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-home" data-target="s-home"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> Home.tsx</button>
        <button className="tab" data-scroll="s-services" data-target="s-services"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> services.ts</button>
        <button className="tab" data-scroll="s-work" data-target="s-work"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> work.json</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-home" className="section section--split">
          <div>
            <p className="hero__meta">// Home.tsx · senior engineering studio · est. 2013</p>
            <h1 className="hero__h1 big">We build software that <span className="pink">ships()</span> <br />and <span className="teal">scales()</span>.</h1>
            <p className="hero__lead">A small team of senior engineers and designers building production-grade web platforms, SaaS products, and AI systems — for teams who care how things are made.</p>
            <div className="btn-row" style={{"marginTop":"28px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Start a project</a>
              <a className="btn btn--ghost" href="#s-work" data-scroll="s-work">$ view --work</a>
            </div>
            <div className="rating">
              <div className="stars">★★★★★ <b>4.9</b></div>
              <div className="m"><b style={{"color":"var(--text)"}}>200+</b> shipped</div>
              <div className="m"><b style={{"color":"var(--text)"}}>90%</b> retention</div>
            </div>
          </div>
          <div className="code">
            <div className="code__head"><span className="fn">deploy.ts</span><span className="mut">— production</span></div>
            <div className="code__body" data-typewriter>
              <span className="ln">1</span><span className="cmt">// 0 downtime · canary rollout</span>
              <span className="ln">2</span><span className="kw">export async function <span className="fnn">deploy</span>(build) &#123;</span>
              <span className="ln">3</span><span className="txt">  const tests = await <span className="fnn">runSuite</span>(<span className="num">1247</span>);</span>
              <span className="ln">4</span><span className="kw">  if (tests.passing) &#123;</span>
              <span className="ln">5</span><span className="txt">    await <span className="fnn">rollout</span>(&#123; canary: <span className="num">true</span> &#125;);</span>
              <span className="ln">6</span><span className="txt">    return <span className="str">"live in 4.1s ✦"</span>;</span>
              <span className="ln">7</span><span className="txt">  &#125;</span>
              <span className="ln">8</span><span className="kw">&#125;</span>
              <span className="ln">9</span><span className="cmt">// → 99.98% uptime · p95 &lt; 120ms</span>
              <span className="ln">10</span><span><span className="caret"></span></span>
            </div>
            <div className="code__foot"><span className="live"></span><span>2-week sprints · Ship every Friday</span></div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>200+</div><div className="lbl">SYSTEMS_SHIPPED</div><div className="sub">▲ web · mobile · AI · ERP</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>15</div><div className="lbl">COUNTRIES</div><div className="sub">▲ IN · UK · ZA · CI</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>12+</div><div className="lbl">YEARS_LIVE</div><div className="sub">▲ since 2013</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>98%</div><div className="lbl">ON_TIME</div><div className="sub">▲ 90% retention</div></div>
        </section>

        <section id="s-services" className="section reveal">
          <p className="eyebrow">const services = [ <span className="c">// full-spectrum engineering</span></p>
          <h2 className="title mono">One partner for every layer</h2>
          <div className="grid grid-3 stagger">
            <Link className="svc" href="/web-development/"><div className="svc__num">01</div><div className="svc__title">Web &amp; SaaS platforms</div><p className="svc__body">Robust, scalable products on modern stacks — MVP to enterprise systems serving millions.</p><div className="svc__tags"><span className="tag">Next.js</span><span className="tag">Node</span><span className="tag">Postgres</span></div><div className="svc__foot"><span>web.ts</span><span className="open">open ↗</span></div></Link>
            <Link className="svc" href="/mobile-app-development/"><div className="svc__num">02</div><div className="svc__title">Mobile applications</div><p className="svc__body">Native-feeling iOS &amp; Android from one codebase, offline-first sync and real-time updates.</p><div className="svc__tags"><span className="tag">React Native</span><span className="tag">Swift</span></div><div className="svc__foot"><span>mobile.ts</span><span className="open">open ↗</span></div></Link>
            <Link className="svc" href="/ai-automation/"><div className="svc__num">03</div><div className="svc__title">AI &amp; automation</div><p className="svc__body">LLM features, retrieval pipelines, and workflow automation wired safely into real systems.</p><div className="svc__tags"><span className="tag">LLM</span><span className="tag">RAG</span><span className="tag">Agents</span></div><div className="svc__foot"><span>ai.py</span><span className="open">open ↗</span></div></Link>
            <Link className="svc" href="/cloud-devops/"><div className="svc__num">04</div><div className="svc__title">Cloud &amp; DevOps</div><p className="svc__body">CI/CD, infra-as-code, and observability so deploys are boring and uptime stays up.</p><div className="svc__tags"><span className="tag">AWS</span><span className="tag">K8s</span><span className="tag">Terraform</span></div><div className="svc__foot"><span>infra.tf</span><span className="open">open ↗</span></div></Link>
            <Link className="svc" href="/ui-ux-design/"><div className="svc__num">05</div><div className="svc__title">Product design</div><p className="svc__body">Interfaces that feel inevitable — research, design systems, prototypes validated early.</p><div className="svc__tags"><span className="tag">UX</span><span className="tag">Figma</span><span className="tag">Systems</span></div><div className="svc__foot"><span>design.fig</span><span className="open">open ↗</span></div></Link>
            <Link className="svc" href="/hire-dedicated-resource/"><div className="svc__num">06</div><div className="svc__title">Embedded teams</div><p className="svc__body">Drop a senior squad into your org — engineers and a tech lead who own outcomes.</p><div className="svc__tags"><span className="tag">Staff aug</span><span className="tag">Tech lead</span></div><div className="svc__foot"><span>team.sh</span><span className="open">open ↗</span></div></Link>
          </div>
        </section>

        <section id="s-stack" className="section reveal">
          <p className="eyebrow">import &#123; stack &#125; from "@dww/core" <span className="c">// battle-tested in production</span></p>
          <h2 className="title mono">Technologies we specialize in</h2>
          <p className="subtitle">The tools and frameworks we deploy across live systems — chosen per project, never a forced template.</p>
          <div className="stack-tabs" data-stack>
            <button className="stack-tab" data-cat="Frontend">Frontend <span className="n">[5]</span></button>
            <button className="stack-tab" data-cat="Backend">Backend <span className="n">[5]</span></button>
            <button className="stack-tab" data-cat="Database">Database <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Mobile">Mobile <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Cloud/DevOps">Cloud/DevOps <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="AI">AI <span className="n">[4]</span></button>
          </div>
          <div className="stack-grid">
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__logo"><img src="/assets/icons/react.svg" alt="React" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"#61dafb"}}>R</span></span><div><div className="stack-cell__name">React</div><div className="stack-cell__cat">Frontend</div></div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__logo"><img src="/assets/icons/nextdotjs.svg" alt="Next.js" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"var(--text)"}}>N</span></span><div><div className="stack-cell__name">Next.js</div><div className="stack-cell__cat">Frontend</div></div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__logo"><img src="/assets/icons/vuedotjs.svg" alt="Vue.js" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"#42b883"}}>V</span></span><div><div className="stack-cell__name">Vue.js</div><div className="stack-cell__cat">Frontend</div></div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__logo"><img src="/assets/icons/typescript.svg" alt="TypeScript" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"#3178c6"}}>TS</span></span><div><div className="stack-cell__name">TypeScript</div><div className="stack-cell__cat">Frontend</div></div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__logo"><img src="/assets/icons/tailwindcss.svg" alt="Tailwind" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"var(--teal)"}}>Tw</span></span><div><div className="stack-cell__name">Tailwind</div><div className="stack-cell__cat">Frontend</div></div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__logo"><img src="/assets/icons/nodedotjs.svg" alt="Node.js" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"var(--green)"}}>No</span></span><div><div className="stack-cell__name">Node.js</div><div className="stack-cell__cat">Backend</div></div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__logo"><img src="/assets/icons/laravel.svg" alt="Laravel / PHP" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"var(--pink)"}}>L</span></span><div><div className="stack-cell__name">Laravel / PHP</div><div className="stack-cell__cat">Backend</div></div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__logo"><img src="/assets/icons/python.svg" alt="Python" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"var(--yellow)"}}>Py</span></span><div><div className="stack-cell__name">Python</div><div className="stack-cell__cat">Backend</div></div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__logo"><img src="/assets/icons/django.svg" alt="Django" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"var(--teal)"}}>Dj</span></span><div><div className="stack-cell__name">Django</div><div className="stack-cell__cat">Backend</div></div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__logo"><img src="/assets/icons/express.svg" alt="Express" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"var(--text)"}}>Ex</span></span><div><div className="stack-cell__name">Express</div><div className="stack-cell__cat">Backend</div></div></div>
            <div className="stack-cell" data-cat="Database"><span className="stack-cell__logo"><img src="/assets/icons/postgresql.svg" alt="PostgreSQL" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"var(--teal)"}}>Pg</span></span><div><div className="stack-cell__name">PostgreSQL</div><div className="stack-cell__cat">Database</div></div></div>
            <div className="stack-cell" data-cat="Database"><span className="stack-cell__logo"><img src="/assets/icons/mysql.svg" alt="MySQL" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"var(--yellow)"}}>My</span></span><div><div className="stack-cell__name">MySQL</div><div className="stack-cell__cat">Database</div></div></div>
            <div className="stack-cell" data-cat="Database"><span className="stack-cell__logo"><img src="/assets/icons/mongodb.svg" alt="MongoDB" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"var(--green)"}}>M</span></span><div><div className="stack-cell__name">MongoDB</div><div className="stack-cell__cat">Database</div></div></div>
            <div className="stack-cell" data-cat="Database"><span className="stack-cell__logo"><img src="/assets/icons/redis.svg" alt="Redis" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"var(--pink)"}}>Rd</span></span><div><div className="stack-cell__name">Redis</div><div className="stack-cell__cat">Database</div></div></div>
            <div className="stack-cell" data-cat="Mobile"><span className="stack-cell__logo"><img src="/assets/icons/react.svg" alt="React Native" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"#61dafb"}}>RN</span></span><div><div className="stack-cell__name">React Native</div><div className="stack-cell__cat">Mobile</div></div></div>
            <div className="stack-cell" data-cat="Mobile"><span className="stack-cell__logo"><img src="/assets/icons/flutter.svg" alt="Flutter" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"var(--teal)"}}>Fl</span></span><div><div className="stack-cell__name">Flutter</div><div className="stack-cell__cat">Mobile</div></div></div>
            <div className="stack-cell" data-cat="Mobile"><span className="stack-cell__logo"><img src="/assets/icons/swift.svg" alt="Swift" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"var(--pink)"}}>Sw</span></span><div><div className="stack-cell__name">Swift</div><div className="stack-cell__cat">Mobile</div></div></div>
            <div className="stack-cell" data-cat="Mobile"><span className="stack-cell__logo"><img src="/assets/icons/kotlin.svg" alt="Kotlin" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"var(--yellow)"}}>Kt</span></span><div><div className="stack-cell__name">Kotlin</div><div className="stack-cell__cat">Mobile</div></div></div>
            <div className="stack-cell" data-cat="Cloud/DevOps"><span className="stack-cell__logo"><img src="https://cdn.simpleicons.org/amazonwebservices/e3b341" alt="AWS" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"var(--yellow)"}}>aws</span></span><div><div className="stack-cell__name">AWS</div><div className="stack-cell__cat">Cloud/DevOps</div></div></div>
            <div className="stack-cell" data-cat="Cloud/DevOps"><span className="stack-cell__logo"><img src="/assets/icons/docker.svg" alt="Docker" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"#61dafb"}}>Dk</span></span><div><div className="stack-cell__name">Docker</div><div className="stack-cell__cat">Cloud/DevOps</div></div></div>
            <div className="stack-cell" data-cat="Cloud/DevOps"><span className="stack-cell__logo"><img src="/assets/icons/kubernetes.svg" alt="Kubernetes" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"var(--teal)"}}>K8</span></span><div><div className="stack-cell__name">Kubernetes</div><div className="stack-cell__cat">Cloud/DevOps</div></div></div>
            <div className="stack-cell" data-cat="Cloud/DevOps"><span className="stack-cell__logo"><img src="/assets/icons/terraform.svg" alt="Terraform" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"#c99bb4"}}>Tf</span></span><div><div className="stack-cell__name">Terraform</div><div className="stack-cell__cat">Cloud/DevOps</div></div></div>
            <div className="stack-cell" data-cat="AI"><span className="stack-cell__logo"><img src="https://cdn.simpleicons.org/openai/9ad17f" alt="OpenAI" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"var(--green)"}}>AI</span></span><div><div className="stack-cell__name">OpenAI</div><div className="stack-cell__cat">AI</div></div></div>
            <div className="stack-cell" data-cat="AI"><span className="stack-cell__logo"><img src="/assets/icons/langchain.svg" alt="LangChain" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"var(--teal)"}}>LC</span></span><div><div className="stack-cell__name">LangChain</div><div className="stack-cell__cat">AI</div></div></div>
            <div className="stack-cell" data-cat="AI"><span className="stack-cell__logo"><img src="/assets/icons/anthropic.svg" alt="Anthropic" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"var(--text)"}}>An</span></span><div><div className="stack-cell__name">Anthropic</div><div className="stack-cell__cat">AI</div></div></div>
            <div className="stack-cell" data-cat="AI"><span className="stack-cell__logo"><img src="/assets/icons/qdrant.svg" alt="RAG / Vector" width="26" height="26" loading="lazy" decoding="async" /><span className="stack-cell__mono" style={{color:"var(--yellow)"}}>Ve</span></span><div><div className="stack-cell__name">RAG / Vector</div><div className="stack-cell__cat">AI</div></div></div>
          </div>
        </section>

        <section id="s-studio" className="section section--split reveal">
          <div>
            <p className="eyebrow">// README.md · the studio</p>
            <h2 className="title mono" style={{"fontSize":"32px"}}>Not an agency — your engineering partner</h2>
            <p className="hero__lead" style={{"fontSize":"17px","marginTop":"14px"}}>Digital Web Weaver was founded on one belief: software should be built by people who care deeply about the craft. A tight team of senior engineers — no juniors hidden behind the contract, no handoffs to a team you'll never meet.</p>
            <ul className="check-list">
              <li><span className="plus">+</span><span>Senior-only engineers across frontend, backend, mobile &amp; cloud</span></li>
              <li><span className="plus">+</span><span>A dedicated lead and full code ownership every engagement</span></li>
              <li><span className="plus">+</span><span>Transparent weekly progress — always know where things stand</span></li>
              <li><span className="plus">+</span><span>Security-first, standards-aligned delivery</span></li>
            </ul>
          </div>
          <figure className="studio-img">
            <img src="/assets/studio-panorama.webp" alt="Digital Web Weaver studio" width="720" height="480" loading="lazy" decoding="async" />
            <figcaption className="mono">📍 HQ · Vadodara, Gujarat · India</figcaption>
          </figure>
        </section>

        <section id="s-process" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>howWeWork</span>() &#123; <span className="c">// click a stage to inspect the pipeline</span></p>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div>
            <div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Discovery</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Design</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Build</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Launch</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left">
              <div className="pipe-detail__step">STEP 01 / 04 · ◷ 1–2 weeks</div>
              <div className="pipe-detail__title lg">Discovery</div>
              <p className="pipe-detail__body">Deep-dive workshops to map your business, users, and constraints — turning fuzzy goals into a precise, costed blueprint before a single line is written.</p>
              <ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Requirement &amp; user-journey map</span></li><li><span className="ok">✓</span><span>Technical blueprint + architecture brief</span></li><li><span className="ok">✓</span><span>Fixed, itemised estimate within 24h</span></li></ul>
            </div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww discover --scope</div><div className="t2">✓ requirements locked  ✓ blueprint approved  ✓ estimate sent</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left">
              <div className="pipe-detail__step">STEP 02 / 04 · ◷ 2–3 weeks</div>
              <div className="pipe-detail__title lg">Design</div>
              <p className="pipe-detail__body">System architecture, data models, and high-fidelity interface design — all reviewed and signed off with you before development begins, so there are no surprises.</p>
              <ul className="pipe-detail__list"><li><span className="ok">✓</span><span>System architecture &amp; data model</span></li><li><span className="ok">✓</span><span>High-fidelity UI + design system</span></li><li><span className="ok">✓</span><span>Clickable prototype for sign-off</span></li></ul>
            </div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww design --review</div><div className="t2">✓ schema modelled  ✓ hi-fi screens signed off</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left">
              <div className="pipe-detail__step">STEP 03 / 04 · ◷ ongoing sprints</div>
              <div className="pipe-detail__title lg">Build</div>
              <p className="pipe-detail__body">Two-week sprints with live demos, CI/CD pipelines, and automated testing. You see working software every Friday — never a black box.</p>
              <ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Fortnightly working demos</span></li><li><span className="ok">✓</span><span>CI/CD + automated test suite</span></li><li><span className="ok">✓</span><span>Transparent weekly progress reports</span></li></ul>
            </div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww ship --sprint</div><div className="t2">✓ 1247 tests passing  ✓ demo shipped Friday</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left">
              <div className="pipe-detail__step">STEP 04 / 04 · ◷ launch + support</div>
              <div className="pipe-detail__title lg">Launch &amp; scale</div>
              <p className="pipe-detail__body">Production deployment, performance tuning, and monitoring — plus dedicated post-launch support to keep you fast, stable, and ahead of demand.</p>
              <ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Zero-downtime production deploy</span></li><li><span className="ok">✓</span><span>Performance tuning + monitoring</span></li><li><span className="ok">✓</span><span>Dedicated post-launch support</span></li></ul>
            </div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww deploy --prod</div><div className="t2">✓ live in 4.1s  ✓ 99.98% uptime  ✓ monitoring on</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// diff — DWW vs. typical vendor</p>
          <div className="compare cols3b">
            <div className="compare__head"><div className="c-cap">capability</div><div className="c-dww">DWW</div><div className="c-typ">typical</div></div>
            <div className="compare__row"><div className="c-cap">Full source-code ownership</div><div className="c-dww">✓</div><div className="c-typ">✕</div></div>
            <div className="compare__row"><div className="c-cap">Senior-only engineering team</div><div className="c-dww">✓</div><div className="c-typ">~</div></div>
            <div className="compare__row"><div className="c-cap">Dedicated tech lead</div><div className="c-dww">✓</div><div className="c-typ">✕</div></div>
            <div className="compare__row"><div className="c-cap">On-time delivery guarantee</div><div className="c-dww">✓</div><div className="c-typ">rare</div></div>
            <div className="compare__row"><div className="c-cap">Automated testing &amp; CI/CD</div><div className="c-dww">✓</div><div className="c-typ">~</div></div>
            <div className="compare__row"><div className="c-cap">Transparent weekly reporting</div><div className="c-dww">✓</div><div className="c-typ">✕</div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">$ dww install --industries <span className="c">// 12 years of domain depth</span></p>
          <h2 className="title mono">Industries we serve</h2>
          <p className="subtitle">Shipping into regulated, high-stakes sectors — we speak your domain before we write a line.</p>
          <div style={{marginTop:"26px",border:"1px solid var(--border)",background:"#0a0e13",overflow:"hidden",boxShadow:"0 12px 40px -18px rgba(0,0,0,0.7)"}}>
            <div style={{display:"flex",alignItems:"center",gap:"8px",padding:"11px 16px",background:"var(--panel)",borderBottom:"1px solid var(--border)"}}>
              <span style={{display:"flex",gap:"7px"}}><span style={{width:"12px",height:"12px",borderRadius:"50%",background:"#ff5f57"}}></span><span style={{width:"12px",height:"12px",borderRadius:"50%",background:"#febc2e"}}></span><span style={{width:"12px",height:"12px",borderRadius:"50%",background:"#28c840"}}></span></span>
              <span className="mono" style={{marginLeft:"8px",fontSize:"12.5px",color:"var(--muted)"}}>dww@studio: ~/industries</span>
              <span className="mono" style={{marginLeft:"auto",fontSize:"11.5px",color:"var(--muted-2)"}}>zsh</span>
            </div>
            <div className="mono" style={{padding:"20px 22px",fontSize:"13.5px",lineHeight:1.55}}>
              <div style={{color:"var(--text-2)"}}><span style={{color:"var(--teal)"}}>$</span> dww install <span style={{color:"var(--text)"}}>--all-domains</span></div>
              <div style={{color:"var(--muted-2)",marginTop:"4px"}}>resolving <span style={{color:"var(--yellow)"}}>12</span> domain packages from 12 years of shipped work…</div>
              <div className="ind-grid" style={{marginTop:"14px",display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)",gap:"2px 40px"}}>
                <div className="ind-line" style={{display:"flex",alignItems:"baseline",gap:"10px",padding:"4px 8px",borderRadius:"5px",transition:"background 0.13s ease"}}><span style={{color:"var(--green)",flexShrink:0}}>✓</span><span style={{color:"#7ee0d0",whiteSpace:"nowrap"}}>@dww/e-commerce</span><span style={{color:"var(--muted-2)",flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>storefronts &amp; carts</span><span style={{color:"var(--dim)",whiteSpace:"nowrap",flexShrink:0}}>40+ builds</span></div>
                <div className="ind-line" style={{display:"flex",alignItems:"baseline",gap:"10px",padding:"4px 8px",borderRadius:"5px",transition:"background 0.13s ease"}}><span style={{color:"var(--green)",flexShrink:0}}>✓</span><span style={{color:"#7ee0d0",whiteSpace:"nowrap"}}>@dww/healthtech</span><span style={{color:"var(--muted-2)",flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>clinics &amp; hospitals</span><span style={{color:"var(--dim)",whiteSpace:"nowrap",flexShrink:0}}>22 builds</span></div>
                <div className="ind-line" style={{display:"flex",alignItems:"baseline",gap:"10px",padding:"4px 8px",borderRadius:"5px",transition:"background 0.13s ease"}}><span style={{color:"var(--green)",flexShrink:0}}>✓</span><span style={{color:"#7ee0d0",whiteSpace:"nowrap"}}>@dww/fintech</span><span style={{color:"var(--muted-2)",flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>payments &amp; ledgers</span><span style={{color:"var(--dim)",whiteSpace:"nowrap",flexShrink:0}}>31 builds</span></div>
                <div className="ind-line" style={{display:"flex",alignItems:"baseline",gap:"10px",padding:"4px 8px",borderRadius:"5px",transition:"background 0.13s ease"}}><span style={{color:"var(--green)",flexShrink:0}}>✓</span><span style={{color:"#7ee0d0",whiteSpace:"nowrap"}}>@dww/edtech</span><span style={{color:"var(--muted-2)",flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>schools &amp; LMS</span><span style={{color:"var(--dim)",whiteSpace:"nowrap",flexShrink:0}}>18 builds</span></div>
                <div className="ind-line" style={{display:"flex",alignItems:"baseline",gap:"10px",padding:"4px 8px",borderRadius:"5px",transition:"background 0.13s ease"}}><span style={{color:"var(--green)",flexShrink:0}}>✓</span><span style={{color:"#7ee0d0",whiteSpace:"nowrap"}}>@dww/logistics</span><span style={{color:"var(--muted-2)",flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>fleet &amp; dispatch</span><span style={{color:"var(--dim)",whiteSpace:"nowrap",flexShrink:0}}>15 builds</span></div>
                <div className="ind-line" style={{display:"flex",alignItems:"baseline",gap:"10px",padding:"4px 8px",borderRadius:"5px",transition:"background 0.13s ease"}}><span style={{color:"var(--green)",flexShrink:0}}>✓</span><span style={{color:"#7ee0d0",whiteSpace:"nowrap"}}>@dww/real-estate</span><span style={{color:"var(--muted-2)",flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>listings &amp; CRM</span><span style={{color:"var(--dim)",whiteSpace:"nowrap",flexShrink:0}}>24 builds</span></div>
                <div className="ind-line" style={{display:"flex",alignItems:"baseline",gap:"10px",padding:"4px 8px",borderRadius:"5px",transition:"background 0.13s ease"}}><span style={{color:"var(--green)",flexShrink:0}}>✓</span><span style={{color:"#7ee0d0",whiteSpace:"nowrap"}}>@dww/food-retail</span><span style={{color:"var(--muted-2)",flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>POS &amp; delivery</span><span style={{color:"var(--dim)",whiteSpace:"nowrap",flexShrink:0}}>19 builds</span></div>
                <div className="ind-line" style={{display:"flex",alignItems:"baseline",gap:"10px",padding:"4px 8px",borderRadius:"5px",transition:"background 0.13s ease"}}><span style={{color:"var(--green)",flexShrink:0}}>✓</span><span style={{color:"#7ee0d0",whiteSpace:"nowrap"}}>@dww/media-saas</span><span style={{color:"var(--muted-2)",flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>multi-tenant apps</span><span style={{color:"var(--dim)",whiteSpace:"nowrap",flexShrink:0}}>27 builds</span></div>
                <div className="ind-line" style={{display:"flex",alignItems:"baseline",gap:"10px",padding:"4px 8px",borderRadius:"5px",transition:"background 0.13s ease"}}><span style={{color:"var(--green)",flexShrink:0}}>✓</span><span style={{color:"#7ee0d0",whiteSpace:"nowrap"}}>@dww/manufacturing</span><span style={{color:"var(--muted-2)",flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>ERP &amp; shop-floor</span><span style={{color:"var(--dim)",whiteSpace:"nowrap",flexShrink:0}}>12 builds</span></div>
                <div className="ind-line" style={{display:"flex",alignItems:"baseline",gap:"10px",padding:"4px 8px",borderRadius:"5px",transition:"background 0.13s ease"}}><span style={{color:"var(--green)",flexShrink:0}}>✓</span><span style={{color:"#7ee0d0",whiteSpace:"nowrap"}}>@dww/legal-tech</span><span style={{color:"var(--muted-2)",flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>compliance &amp; docs</span><span style={{color:"var(--dim)",whiteSpace:"nowrap",flexShrink:0}}>9 builds</span></div>
                <div className="ind-line" style={{display:"flex",alignItems:"baseline",gap:"10px",padding:"4px 8px",borderRadius:"5px",transition:"background 0.13s ease"}}><span style={{color:"var(--green)",flexShrink:0}}>✓</span><span style={{color:"#7ee0d0",whiteSpace:"nowrap"}}>@dww/green-tech</span><span style={{color:"var(--muted-2)",flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>solar &amp; energy</span><span style={{color:"var(--dim)",whiteSpace:"nowrap",flexShrink:0}}>7 builds</span></div>
                <div className="ind-line" style={{display:"flex",alignItems:"baseline",gap:"10px",padding:"4px 8px",borderRadius:"5px",transition:"background 0.13s ease"}}><span style={{color:"var(--green)",flexShrink:0}}>✓</span><span style={{color:"#7ee0d0",whiteSpace:"nowrap"}}>@dww/analytics</span><span style={{color:"var(--muted-2)",flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>dashboards &amp; BI</span><span style={{color:"var(--dim)",whiteSpace:"nowrap",flexShrink:0}}>33 builds</span></div>
              </div>
              <div style={{marginTop:"16px",color:"var(--green)"}}>+ added 12 industries <span style={{color:"var(--muted-2)"}}>· 0 vulnerabilities · 200+ production builds</span></div>
              <div style={{marginTop:"4px",color:"var(--text-2)"}}><span style={{color:"var(--teal)"}}>$</span> <span className="caret"></span></div>
            </div>
          </div>
        </section>

        <section id="s-work" className="section reveal">
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-end","gap":"20px","flexWrap":"wrap"}}>
            <div>
              <p className="eyebrow">// selected work — real production systems</p>
              <h2 className="title mono">Proof, not promises</h2>
              <p className="subtitle">Live software we designed, built and shipped — from metro-government platforms to factory-floor ERPs.</p>
            </div>
            <Link className="mono" href="/portfolio/" style={{"fontSize":"13px","whiteSpace":"nowrap"}}>view all ↗</Link>
          </div>
          <div className="grid grid-3 stagger">
            <Link className="work" href="/portfolio/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">mhs.tshwane.gov.za</span></div><div className="work__shot"><img src="/assets/mhs-dashboard.webp" alt="Municipal Health Services" width="380" height="188" loading="lazy" decoding="async" /><span className="work__flag">GOVT · SOUTH AFRICA</span></div><div className="work__pad"><div className="work__tag">GOVERNMENT · HEALTH</div><div className="work__title">Municipal Health Services</div><div className="work__metric"><b>1 dept</b><span>complaints → certification</span></div><p className="work__desc">A metro-wide health platform for the City of Tshwane — inspections, R638 certification and disease surveillance across every region, offline-first for field officers.</p><div className="work__stack"><span className="tag tag--y">Laravel</span><span className="tag tag--y">PostgreSQL</span><span className="tag tag--y">PWA</span></div><div className="work__view">View case ↗</div></div></Link>
            <Link className="work" href="/portfolio/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">ehealth.tshwane.gov.za</span></div><div className="work__shot"><img src="/assets/coteHealth-dashboard.webp" alt="COT Primary Health Care" width="380" height="188" loading="lazy" decoding="async" /><span className="work__flag">GOVT · 40+ CLINICS</span></div><div className="work__pad"><div className="work__tag">GOVERNMENT · PRIMARY CARE</div><div className="work__title">COT Primary Health Care</div><div className="work__metric"><b>40+</b><span>govt clinics live</span></div><p className="work__desc">Primary health-care system for the City of Tshwane running across 40+ government clinics — patient records, visits and reporting in one live system.</p><div className="work__stack"><span className="tag tag--y">Laravel</span><span className="tag tag--y">PostgreSQL</span><span className="tag tag--y">AWS</span></div><div className="work__view">View case ↗</div></div></Link>
            <Link className="work" href="/solarflow/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.solarflow.io</span></div><div className="work__shot"><img src="/assets/solarflow-project.webp" alt="SolarFlow ERP + CRM" width="380" height="188" loading="lazy" decoding="async" /></div><div className="work__pad"><div className="work__tag">SAAS · SOLAR</div><div className="work__title">SolarFlow ERP + CRM</div><div className="work__metric"><b>Surya Ghar</b><span>subsidy lifecycle</span></div><p className="work__desc">End-to-end platform for rooftop solar installers — Smart Quote, subsidy tracking and an Underproduction Sentinel that flags underperforming sites.</p><div className="work__stack"><span className="tag tag--y">React</span><span className="tag tag--y">Node</span><span className="tag tag--y">Postgres</span></div><div className="work__view">View case ↗</div></div></Link>
            <Link className="work" href="/portfolio/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">erp.panelos.app</span></div><div className="work__shot"><img src="/assets/pufpanel-dashboard.webp" alt="PanelOS" width="380" height="188" loading="lazy" decoding="async" /></div><div className="work__pad"><div className="work__tag">ERP · MANUFACTURING</div><div className="work__title">PanelOS</div><div className="work__metric"><b>order → cash</b><span>one pipeline</span></div><p className="work__desc">Manufacturing ERP for PUF-panel makers — batches, QC, receivables and order-to-cash inside a single operational system.</p><div className="work__stack"><span className="tag tag--y">Laravel</span><span className="tag tag--y">MySQL</span><span className="tag tag--y">Docker</span></div><div className="work__view">View case ↗</div></div></Link>
            <Link className="work" href="/manchify/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.manchify.com</span></div><div className="work__shot"><img src="/assets/eventos-quote.webp" alt="Manchify / EventOS" width="380" height="188" loading="lazy" decoding="async" /></div><div className="work__pad"><div className="work__tag">CRM · EVENTS</div><div className="work__title">Manchify / EventOS</div><div className="work__metric"><b>lead → settle</b><span>full funnel</span></div><p className="work__desc">Order-management and CRM for event companies — quotes, settlements and operations from first enquiry to final invoice.</p><div className="work__stack"><span className="tag tag--y">Vue</span><span className="tag tag--y">Node</span><span className="tag tag--y">MongoDB</span></div><div className="work__view">View case ↗</div></div></Link>
            <Link className="work" href="/portfolio/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">testbay.local</span></div><div className="work__shot"><img src="/assets/testbayos-dashboard.webp" alt="Test Bay OS" width="380" height="188" loading="lazy" decoding="async" /></div><div className="work__pad"><div className="work__tag">QA · TRANSFORMERS</div><div className="work__title">Test Bay OS</div><div className="work__metric"><b>live</b><span>temp-rise testing</span></div><p className="work__desc">Transformer testing application capturing live temperature-rise runs and QA dashboards for a transformer manufacturer's test bay.</p><div className="work__stack"><span className="tag tag--y">React</span><span className="tag tag--y">Python</span><span className="tag tag--y">WebSockets</span></div><div className="work__view">View case ↗</div></div></Link>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// client words — what teams say after we ship</p>
          <div style={{marginTop:"22px",border:"1px solid var(--border)",background:"var(--bg)"}}>
            <div className="mono" style={{display:"flex",alignItems:"center",gap:"12px",padding:"12px 18px",borderBottom:"1px solid var(--border)",background:"var(--panel)",flexWrap:"wrap"}}>
              <span style={{display:"flex",alignItems:"center",gap:"8px",color:"var(--text)",fontSize:"13.5px",fontWeight:700}}><span style={{color:"var(--teal)"}}>&#402;</span> reviews.json</span>
              <span style={{color:"var(--muted-2)",fontSize:"12.5px"}}>· 200+ entries · all verified</span>
              <span style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:"8px"}}><span style={{color:"var(--yellow)",fontSize:"14px",letterSpacing:"1px"}}>★★★★★</span><span style={{color:"var(--text)",fontWeight:800,fontSize:"14px"}}>4.9</span><span style={{color:"var(--muted-2)",fontSize:"12.5px"}}>avg</span></span>
            </div>
            <div className="reviews-grid">
              <div className="review-cell" style={{padding:"22px",display:"flex",flexDirection:"column",background:"var(--panel)",borderRight:"1px solid var(--border)"}}>
                <div style={{display:"flex",alignItems:"center",gap:"11px"}}>
                  <div className="mono" style={{width:"38px",height:"38px",borderRadius:"50%",background:"var(--border)",color:"var(--pink)",fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"13px",border:"1px solid var(--border-2)",flexShrink:0}}>JE</div>
                  <div style={{minWidth:0}}><div style={{fontWeight:800,fontSize:"14.5px",color:"var(--text)"}}>James E.</div><div className="mono" style={{fontSize:"11.5px",color:"var(--muted-2)"}}>@james-e</div></div>
                  <span className="mono" style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:"5px",fontSize:"11px",fontWeight:700,color:"var(--green)",background:"rgba(var(--green-rgb),0.1)",border:"1px solid rgba(var(--green-rgb),0.25)",borderRadius:"20px",padding:"3px 9px",whiteSpace:"nowrap",flexShrink:0}}>✓ approved</span>
                </div>
                <div style={{color:"var(--yellow)",fontSize:"13px",letterSpacing:"1px",marginTop:"14px"}}>★★★★★</div>
                <p style={{fontSize:"15px",color:"var(--text-2)",lineHeight:1.6,marginTop:"8px",flex:1}}>Delivered our platform on time and under budget. Their team understood our product better than we did.</p>
                <div className="mono" style={{display:"flex",alignItems:"center",gap:"8px",marginTop:"16px",paddingTop:"13px",borderTop:"1px solid var(--border)",fontSize:"11.5px",color:"var(--muted-2)"}}><span style={{color:"var(--teal)"}}>CTO · SaaS scale-up</span><span style={{marginLeft:"auto"}}>reviewed 3w ago</span></div>
              </div>
              <div className="review-cell" style={{padding:"22px",display:"flex",flexDirection:"column",background:"var(--panel)",borderRight:"1px solid var(--border)"}}>
                <div style={{display:"flex",alignItems:"center",gap:"11px"}}>
                  <div className="mono" style={{width:"38px",height:"38px",borderRadius:"50%",background:"var(--border)",color:"var(--pink)",fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"13px",border:"1px solid var(--border-2)",flexShrink:0}}>SA</div>
                  <div style={{minWidth:0}}><div style={{fontWeight:800,fontSize:"14.5px",color:"var(--text)"}}>Sophie A.</div><div className="mono" style={{fontSize:"11.5px",color:"var(--muted-2)"}}>@sophie-a</div></div>
                  <span className="mono" style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:"5px",fontSize:"11px",fontWeight:700,color:"var(--green)",background:"rgba(var(--green-rgb),0.1)",border:"1px solid rgba(var(--green-rgb),0.25)",borderRadius:"20px",padding:"3px 9px",whiteSpace:"nowrap",flexShrink:0}}>✓ approved</span>
                </div>
                <div style={{color:"var(--yellow)",fontSize:"13px",letterSpacing:"1px",marginTop:"14px"}}>★★★★★</div>
                <p style={{fontSize:"15px",color:"var(--text-2)",lineHeight:1.6,marginTop:"8px",flex:1}}>Our custom ERP cut operational overhead by 40%. Responsive and transparent throughout.</p>
                <div className="mono" style={{display:"flex",alignItems:"center",gap:"8px",marginTop:"16px",paddingTop:"13px",borderTop:"1px solid var(--border)",fontSize:"11.5px",color:"var(--muted-2)"}}><span style={{color:"var(--teal)"}}>Ops Director · Manufacturing</span><span style={{marginLeft:"auto"}}>reviewed 1mo ago</span></div>
              </div>
              <div className="review-cell" style={{padding:"22px",display:"flex",flexDirection:"column",background:"var(--panel)",borderRight:"1px solid var(--border)"}}>
                <div style={{display:"flex",alignItems:"center",gap:"11px"}}>
                  <div className="mono" style={{width:"38px",height:"38px",borderRadius:"50%",background:"var(--border)",color:"var(--pink)",fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"13px",border:"1px solid var(--border-2)",flexShrink:0}}>AM</div>
                  <div style={{minWidth:0}}><div style={{fontWeight:800,fontSize:"14.5px",color:"var(--text)"}}>Adnan M.</div><div className="mono" style={{fontSize:"11.5px",color:"var(--muted-2)"}}>@adnan-m</div></div>
                  <span className="mono" style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:"5px",fontSize:"11px",fontWeight:700,color:"var(--green)",background:"rgba(var(--green-rgb),0.1)",border:"1px solid rgba(var(--green-rgb),0.25)",borderRadius:"20px",padding:"3px 9px",whiteSpace:"nowrap",flexShrink:0}}>✓ approved</span>
                </div>
                <div style={{color:"var(--yellow)",fontSize:"13px",letterSpacing:"1px",marginTop:"14px"}}>★★★★★</div>
                <p style={{fontSize:"15px",color:"var(--text-2)",lineHeight:1.6,marginTop:"8px",flex:1}}>From MVP to fully scaled in under twelve months. Their architecture saved us costly rebuilds.</p>
                <div className="mono" style={{display:"flex",alignItems:"center",gap:"8px",marginTop:"16px",paddingTop:"13px",borderTop:"1px solid var(--border)",fontSize:"11.5px",color:"var(--muted-2)"}}><span style={{color:"var(--teal)"}}>Founder · HealthTech</span><span style={{marginLeft:"auto"}}>reviewed 6w ago</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// FAQ.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">What does Digital Web Weaver do?<span className="sign">[+]</span></button><div className="faq__a"><p>A senior software engineering studio. We build custom websites, web apps, mobile apps, SaaS platforms, ERP/CRM systems, and AI automation — idea to production — for businesses in India and worldwide.</p></div></div>
            <div className="faq__item"><button className="faq__q">Where is Digital Web Weaver located?<span className="sign">[+]</span></button><div className="faq__a"><p>Vadodara, Gujarat, India (207/208 Sanket Heights, Sunpharma Road, Atladra, Vadodara 390012), serving clients across India, the UK, South Africa, and Ivory Coast.</p></div></div>
            <div className="faq__item"><button className="faq__q">How much does a website or app cost?<span className="sign">[+]</span></button><div className="faq__a"><p>A business website typically runs ₹25,000–₹2,00,000; web apps and custom software start around ₹2,00,000 and scale with complexity. You get a clear itemised estimate within 24 hours.</p></div></div>
            <div className="faq__item"><button className="faq__q">What technologies do you work with?<span className="sign">[+]</span></button><div className="faq__a"><p>React, Next.js, Node.js, Python, Laravel, Vue, React Native, Flutter, PostgreSQL, AWS, and modern AI/LLM stacks — the right tool per project, never a forced template.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you work with international &amp; remote clients?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — clients across the UK, South Africa, West Africa and beyond, with clear communication, documented code, and full source-code ownership handed to you.</p></div></div>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --free-consultation<span className="caret-pink"></span></p>
          <h2 className="cta__h">Ready to build something extraordinary?</h2>
          <p className="cta__lead">Free technical consultation and a detailed estimate from senior engineers — within 24 hours. No commitment required.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Start a project</Link>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free consultation</span><span><span className="g">●</span> 24-hour response</span><span><span className="g">●</span> NDA signed first</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">● Live · 99.98% uptime</span><span>UTF-8</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
