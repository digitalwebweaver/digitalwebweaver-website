import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Business Intelligence & Data Analytics Company India | BI Dashboards, ETL & Data Warehousing — Digital Web Weaver" },
  description: "BI dashboards, data warehouses, and ETL pipelines that give decision-makers real-time visibility into the metrics that matter. Metabase, dbt, Airflow, Snowflake. India-based senior team.",
  alternates: { canonical: "/solutions/business-intelligence/" },
  openGraph: { title: "Business Intelligence & Data Analytics Company India | BI Dashboards, ETL & Data Warehousing — Digital Web Weaver", description: "BI dashboards, data warehouses, and ETL pipelines that give decision-makers real-time visibility into the metrics that matter. Metabase, dbt, Airflow, Snowflake. India-based senior team.", url: "/solutions/business-intelligence/", type: "website" }
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
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> business-intelligence.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> services.ts</button>
        <button className="tab" data-scroll="s-work" data-target="s-work"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> work.json</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// business-intelligence.ts · dbt · Airflow · Snowflake</p>
            <span className="badge">BUSINESS INTELLIGENCE</span>
            <h1 className="hero__h1">Business intelligence that turns <span className="pink">data</span> into <span className="teal">decisions</span></h1>
            <p className="hero__lead">We build BI dashboards, data warehouses, and ETL pipelines that give decision-makers real-time visibility into the metrics that matter.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Get free estimate</a>
              <a className="btn btn--ghost" href="#s-work" data-scroll="s-work">$ view --work</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>150+</b><span>clients trusted</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>sub-min</b><span>dashboard refresh</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>2-3wks</b><span>to first dashboard</span></div>
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
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>sub-min</div><div className="lbl">STREAM_REFRESH</div><div className="sub">▲ Kafka → ClickHouse</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>2-3wks</div><div className="lbl">FIRST_DASHBOARD</div><div className="sub">▲ single data source</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>24h</div><div className="lbl">ESTIMATE</div><div className="sub">▲ free · no commitment</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// what we build</span></p>
          <h2 className="title mono">Business intelligence &amp; analytics services</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Custom dashboards</div><p className="svc__body">Executive, operational, and product dashboards with live data — built in React or Metabase.</p><div className="svc__foot"><span>dashboard.tsx</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Data warehouse</div><p className="svc__body">BigQuery, Redshift, or Snowflake warehouse design and build — schema first, dashboards second.</p><div className="svc__foot"><span>warehouse.sql</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">ETL pipelines</div><p className="svc__body">Extract, transform, and load from any source into your warehouse, on a reliable schedule.</p><div className="svc__foot"><span>etl.py</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">KPI tracking</div><p className="svc__body">Define, instrument, and visualise the metrics that actually drive your business decisions.</p><div className="svc__foot"><span>kpi.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Automated reporting</div><p className="svc__body">Scheduled reports delivered straight to Slack, email, or Google Sheets — no manual exports.</p><div className="svc__foot"><span>report.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Data integration</div><p className="svc__body">Connect CRMs, ERPs, ad platforms, and databases into a single source of truth.</p><div className="svc__foot"><span>sync.ts</span></div></div>
          </div>
        </section>

        <section id="s-capabilities" className="section reveal">
          <p className="eyebrow">// technical depth — not just charts on a page</p>
          <h2 className="title mono">BI &amp; analytics capabilities</h2>
          <div className="grid grid-3">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="12" width="4" height="8"></rect><rect x="10" y="7" width="4" height="13"></rect><rect x="16" y="3" width="4" height="17"></rect></svg><span className="cap__title">Metabase &amp; Superset</span></div><p className="cap__body">Open-source BI tools deployed and customised for your team, not a generic default install.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7l8-4 8 4-8 4-8-4z"></path><path d="M4 12l8 4 8-4M4 7v10M20 7v10"></path></svg><span className="cap__title">dbt (data build tool)</span></div><p className="cap__body">A SQL-based transformation layer with version control, so your metrics logic is reviewable code.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.5"></circle><circle cx="18" cy="6" r="2.5"></circle><circle cx="12" cy="18" r="2.5"></circle><path d="M8 7.5 16 7.5M7 8.5 11 16M17 8.5 13 16"></path></svg><span className="cap__title">Apache Airflow</span></div><p className="cap__body">Pipeline orchestration with scheduling and monitoring, so a broken source gets caught early.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg><span className="cap__title">Data quality</span></div><p className="cap__body">Great Expectations and dbt tests catch data integrity problems before they reach a dashboard.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="1"></rect><path d="M8 20h8M12 16v4"></path></svg><span className="cap__title">Looker Studio</span></div><p className="cap__body">Google-native dashboards connected directly to BigQuery for teams already on Google's stack.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"></path></svg><span className="cap__title">Real-time streaming</span></div><p className="cap__body">Kafka piped into ClickHouse for sub-minute dashboard refresh rates when daily batches aren't enough.</p></div>
          </div>
        </section>

        <section id="s-stack" className="section reveal">
          <p className="eyebrow">import &#123; stack &#125; from "@dww/bi" <span className="c">// the BI &amp; analytics stack</span></p>
          <h2 className="title mono">BI technology stack</h2>
          <div className="stack-tabs" data-stack>
            <button className="stack-tab" data-cat="Warehouse">Warehouse <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Transform">Transform <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Orchestration">Orchestration <span className="n">[3]</span></button>
            <button className="stack-tab" data-cat="Visualisation">Visualisation <span className="n">[4]</span></button>
          </div>
          <div className="stack-grid">
            <div className="stack-cell" data-cat="Warehouse"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#4285f4"}}>BQ</span><div className="stack-cell__name">BigQuery</div><div className="stack-cell__cat">Warehouse</div></div>
            <div className="stack-cell" data-cat="Warehouse"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#29b5e8"}}>Sf</span><div className="stack-cell__name">Snowflake</div><div className="stack-cell__cat">Warehouse</div></div>
            <div className="stack-cell" data-cat="Warehouse"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>Rs</span><div className="stack-cell__name">Redshift</div><div className="stack-cell__cat">Warehouse</div></div>
            <div className="stack-cell" data-cat="Warehouse"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--text)"}}>Ch</span><div className="stack-cell__name">ClickHouse</div><div className="stack-cell__cat">Warehouse</div></div>
            <div className="stack-cell" data-cat="Transform"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#ff694b"}}>dbt</span><div className="stack-cell__name">dbt Core</div><div className="stack-cell__cat">Transform</div></div>
            <div className="stack-cell" data-cat="Transform"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>Sp</span><div className="stack-cell__name">Apache Spark</div><div className="stack-cell__cat">Transform</div></div>
            <div className="stack-cell" data-cat="Transform"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Py</span><div className="stack-cell__name">Python / pandas</div><div className="stack-cell__cat">Transform</div></div>
            <div className="stack-cell" data-cat="Transform"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--text)"}}>SQL</span><div className="stack-cell__name">SQL</div><div className="stack-cell__cat">Transform</div></div>
            <div className="stack-cell" data-cat="Orchestration"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#017cee"}}>Af</span><div className="stack-cell__name">Apache Airflow</div><div className="stack-cell__cat">Orchestration</div></div>
            <div className="stack-cell" data-cat="Orchestration"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>Pf</span><div className="stack-cell__name">Prefect</div><div className="stack-cell__cat">Orchestration</div></div>
            <div className="stack-cell" data-cat="Orchestration"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#ff694b"}}>dbt</span><div className="stack-cell__name">dbt Cloud</div><div className="stack-cell__cat">Orchestration</div></div>
            <div className="stack-cell" data-cat="Visualisation"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#509ee3"}}>Mb</span><div className="stack-cell__name">Metabase</div><div className="stack-cell__cat">Visualisation</div></div>
            <div className="stack-cell" data-cat="Visualisation"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>Ss</span><div className="stack-cell__name">Superset</div><div className="stack-cell__cat">Visualisation</div></div>
            <div className="stack-cell" data-cat="Visualisation"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Lk</span><div className="stack-cell__name">Looker Studio</div><div className="stack-cell__cat">Visualisation</div></div>
            <div className="stack-cell" data-cat="Visualisation"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#f2c811"}}>BI</span><div className="stack-cell__name">Power BI</div><div className="stack-cell__cat">Visualisation</div></div>
          </div>
        </section>

        <section id="s-process" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>biProcess</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">BI implementation process</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Data audit</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Warehouse design</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Pipeline build</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Dashboard delivery</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04 · ◷ discovery</div><div className="pipe-detail__title">Data audit</div><p className="pipe-detail__body">We map every existing data source — CRMs, ERPs, spreadsheets, ad platforms — along with quality issues and how your team currently defines each metric, before any schema is designed.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Data sources mapped end to end</span></li><li><span className="ok">✓</span><span>Quality issues &amp; gaps flagged</span></li><li><span className="ok">✓</span><span>Metric definitions agreed with stakeholders</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww audit --data</div><div className="t2">✓ sources mapped  ✓ quality checked  ✓ metrics defined</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04 · ◷ schema design</div><div className="pipe-detail__title">Warehouse design</div><p className="pipe-detail__body">Star schema, dimension tables, and a slowly changing dimension (SCD) strategy — designed for the reporting questions your team actually asks, not a generic template.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Star schema &amp; fact tables designed</span></li><li><span className="ok">✓</span><span>Dimension tables &amp; SCD strategy set</span></li><li><span className="ok">✓</span><span>Warehouse platform selected</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww design --warehouse</div><div className="t2">✓ star schema set  ✓ dimensions mapped  ✓ SCD chosen</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04 · ◷ build &amp; schedule</div><div className="pipe-detail__title">Pipeline build</div><p className="pipe-detail__body">ETL/ELT pipelines extract, transform, and load data on a schedule, with error alerting so a broken source gets caught before a dashboard goes stale.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>ETL/ELT pipelines built &amp; scheduled</span></li><li><span className="ok">✓</span><span>Error alerting wired to Slack/email</span></li><li><span className="ok">✓</span><span>dbt tests validate every run</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww build --pipeline</div><div className="t2">✓ ETL scheduled  ✓ alerts wired  ✓ tests passing</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04 · ◷ sign-off</div><div className="pipe-detail__title">Dashboard delivery</div><p className="pipe-detail__body">Dashboards and visualisations are reviewed with stakeholders in working sessions and iterated until every number on screen is trusted, not just technically correct.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Dashboards reviewed with stakeholders</span></li><li><span className="ok">✓</span><span>Visualisations iterated to sign-off</span></li><li><span className="ok">✓</span><span>Automated reports scheduled</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww ship --dashboards</div><div className="t2">✓ visuals reviewed  ✓ signed off  ✓ live</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">WHAT_YOU_GET</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Figma design source files</span></div><div><span className="plus">+</span><span>Clean, documented codebase</span></div><div><span className="plus">+</span><span>CI/CD pipeline</span></div><div><span className="plus">+</span><span>SEO &amp; analytics setup</span></div><div><span className="plus">+</span><span>Performance report</span></div></div>
          </div>
        </section>

        <section id="s-work" className="section reveal">
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-end","gap":"20px","flexWrap":"wrap"}}>
            <div><p className="eyebrow">// selected BI builds — dashboards in production</p><h2 className="title mono">Systems we've built</h2></div>
            <Link className="mono" href="/portfolio/" style={{"fontSize":"13px","whiteSpace":"nowrap"}}>view all ↗</Link>
          </div>
          <div className="grid grid-3 stagger">
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">erp.manufacturiq.io</span></div><div className="work__pad"><div className="work__tag">MANUFACTURING · EXECUTIVE DASHBOARDS</div><div className="work__title">ManufacturIQ — smart ERP</div><p className="work__desc">End-to-end ERP for a mid-size manufacturer — production scheduling, inventory, procurement, HR, and executive dashboards replacing a 15-year-old legacy system's paper reports.</p><div className="work__metrics"><div className="work__mcell"><b>3×</b><span>faster reports</span></div><div className="work__mcell"><b>40%</b><span>cost reduction</span></div></div><div className="work__stack"><span className="tag tag--y">Laravel</span><span className="tag tag--y">Vue.js</span><span className="tag tag--y">MySQL</span></div></div></div>
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">progress.lms-platform.io</span></div><div className="work__pad"><div className="work__tag">EDTECH · PROGRESS DASHBOARDS</div><div className="work__title">Learning management system</div><p className="work__desc">Full LMS with live sessions, grade tracking, and compliance reporting — serving 50k students across three regions with real-time progress dashboards for administrators.</p><div className="work__metrics"><div className="work__mcell"><b>50k</b><span>students tracked</span></div><div className="work__mcell"><b>3</b><span>regions</span></div></div><div className="work__stack"><span className="tag tag--y">Next.js</span><span className="tag tag--y">PostgreSQL</span><span className="tag tag--y">AWS</span></div></div></div>
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">fleet.logicore.io</span></div><div className="work__pad"><div className="work__tag">LOGISTICS · REAL-TIME TRACKING</div><div className="work__title">LogiCore — logistics ERP</div><p className="work__desc">Multi-branch ERP for a logistics company — fleet management, route optimisation, fuel tracking, billing, and real-time delivery-tracking dashboards for 1,200 daily trips.</p><div className="work__metrics"><div className="work__mcell"><b>25%</b><span>fuel savings</span></div><div className="work__mcell"><b>1,200</b><span>daily trips tracked</span></div></div><div className="work__stack"><span className="tag tag--y">Node.js</span><span className="tag tag--y">React</span><span className="tag tag--y">PostgreSQL</span></div></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// why DWW for BI</p>
          <h2 className="title mono">Metrics your team actually trusts</h2>
          <div className="grid grid-4 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>📊 GROUNDED</div><div className="cap__title" style={{"marginTop":"10px"}}>Definitions agreed first</div><p className="cap__body">Every metric is defined and agreed with stakeholders before a single chart gets built.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🔍 TESTED</div><div className="cap__title" style={{"marginTop":"10px"}}>Data quality checked</div><p className="cap__body">dbt tests and Great Expectations validate every pipeline run, not just the first one.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>⚡ FAST</div><div className="cap__title" style={{"marginTop":"10px"}}>Real-time when it matters</div><p className="cap__body">Kafka to ClickHouse streaming gets you sub-minute refresh, not next-morning batch.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🧩 OPEN</div><div className="cap__title" style={{"marginTop":"10px"}}>No vendor lock-in</div><p className="cap__body">Open-source Metabase and Superset, or Looker Studio and Power BI — your call, your data.</p></div>
          </div>
          <div className="panel-note" style={{"background":"var(--panel)"}}><p style={{"fontSize":"16px","color":"var(--text-2)","lineHeight":"1.65","maxWidth":"960px"}}>Digital Web Weaver builds BI dashboards, data warehouses, and ETL pipelines for teams across India, the UK, the US, and beyond — 150+ clients who needed real-time visibility into the metrics that actually run their business, not a slide deck that's stale by the time it's presented. We work with the tools that fit your stack: Metabase or Superset for self-service analytics, dbt for version-controlled transformation, Airflow for orchestration, and Kafka → ClickHouse when daily batches aren't fast enough. Every engagement starts with a data audit and a free, itemised estimate within 24 hours.</p></div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// business-intelligence.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">What BI tool do you recommend?<span className="sign">[+]</span></button><div className="faq__a"><p>Metabase for self-service analytics with a business-friendly UI. Superset for more control. Power BI for Microsoft-integrated enterprises.</p></div></div>
            <div className="faq__item"><button className="faq__q">How do you handle data quality?<span className="sign">[+]</span></button><div className="faq__a"><p>dbt tests validate row counts, uniqueness, referential integrity, and custom business rules at every pipeline run.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you integrate our CRM and sales data?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — Salesforce, HubSpot, Pipedrive, and custom CRMs all have API or Fivetran connector support for warehouse ingestion.</p></div></div>
            <div className="faq__item"><button className="faq__q">How long does a BI implementation take?<span className="sign">[+]</span></button><div className="faq__a"><p>Basic dashboard with one data source: 2–3 weeks. Full warehouse with multiple sources and automated reporting: 2–3 months.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <Link className="svc" href="/ai-automation/"><div className="svc__title" style={{"fontSize":"16px"}}>AI &amp; automation</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Predictive analytics and ML models built on your BI data foundation.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/custom-software-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Custom software</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Bespoke ERP, CRM, portals, and workflow automation.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <a className="svc" href="https://digitalwebweaver.com/web-application-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Web application development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>SaaS platforms, portals, dashboards, and enterprise systems.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></a>
            <Link className="svc" href="/cloud-devops/"><div className="svc__title" style={{"fontSize":"16px"}}>Cloud &amp; DevOps</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Infrastructure to run your warehouse, pipelines, and dashboards reliably.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./build --bi-platform<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Build your BI platform, end to end</h2>
          <p className="cta__lead">From raw data to executive dashboards — free scoping and a detailed estimate from senior engineers within 24 hours.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Start a project</Link>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Senior engineers only</span><span><span className="g">●</span> 48-hr match</span><span><span className="g">●</span> No lock-in</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">business-intelligence.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
