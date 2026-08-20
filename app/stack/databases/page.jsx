import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Database Technologies We Use — PostgreSQL, MongoDB, Redis & More | Digital Web Weaver" },
  description: "Database architecture and engineering: PostgreSQL, MongoDB, Redis, Elasticsearch, ClickHouse and SQLite. Schema design, query optimisation, and zero-downtime migrations. India-based senior team.",
  alternates: { canonical: "/stack/databases/" },
  openGraph: { title: "Database Technologies We Use — PostgreSQL, MongoDB, Redis & More | Digital Web Weaver", description: "Database architecture and engineering: PostgreSQL, MongoDB, Redis, Elasticsearch, ClickHouse and SQLite. Schema design, query optimisation, and zero-downtime migrations. India-based senior team.", url: "/stack/databases/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-build" data-target="s-build" title="Databases">⚙</button>
      <button className="activitybar__btn" data-scroll="s-capabilities" data-target="s-capabilities" title="Expertise">❮❯</button>
      <button className="activitybar__btn" data-scroll="s-stack" data-target="s-stack" title="Matrix">▦</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> databases.ts</button>
        <button className="tab" data-scroll="s-stack" data-target="s-stack"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> matrix.ts</button>
        <button className="tab" data-scroll="s-faq" data-target="s-faq"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> faq.md</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// databases.ts · PostgreSQL · MongoDB · Redis · ClickHouse</p>
            <span className="badge">STACK · DATABASES</span>
            <h1 className="hero__h1">Database technologies we use in <span className="pink">production</span></h1>
            <p className="hero__lead">We choose databases based on your data model, query patterns, and scale requirements — not hype. Here's what we use and why.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Get free estimate</a>
              <a className="btn btn--ghost" href="#s-stack" data-scroll="s-stack">$ view --matrix</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>150+</b><span>clients trusted</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>6</b><span>databases in stack</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>2013</b><span>engineering since</span></div>
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
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ trusted since 2013</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>4.9/5</div><div className="lbl">CLUTCH</div><div className="sub">▲ verified reviews</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>6</div><div className="lbl">DATABASES</div><div className="sub">▲ Postgres to ClickHouse</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>24h</div><div className="lbl">ESTIMATE</div><div className="sub">▲ free · no commitment</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const databases = [ <span className="c">// what we run in production</span></p>
          <h2 className="title mono">Our database stack</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">PostgreSQL</div><p className="svc__body">Our default relational database — JSONB, full-text search, and extensions.</p><div className="svc__foot"><span>postgres.sql</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">MongoDB</div><p className="svc__body">Document store for flexible schema and hierarchical data.</p><div className="svc__foot"><span>mongo.js</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Redis</div><p className="svc__body">Caching, sessions, queues, and pub/sub messaging.</p><div className="svc__foot"><span>redis.conf</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Elasticsearch</div><p className="svc__body">Full-text search, log analytics, and faceted filtering.</p><div className="svc__foot"><span>es.json</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">ClickHouse</div><p className="svc__body">Columnar OLAP for analytics and time-series at scale.</p><div className="svc__foot"><span>clickhouse.sql</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">SQLite</div><p className="svc__body">Embedded database for edge functions and serverless.</p><div className="svc__foot"><span>sqlite.db</span></div></div>
          </div>
        </section>

        <section id="s-capabilities" className="section reveal">
          <p className="eyebrow">// what we do with databases — not just install and hope</p>
          <h2 className="title mono">Database expertise</h2>
          <div className="grid grid-3">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="6" rx="1.2"></rect><rect x="4" y="14" width="16" height="6" rx="1.2"></rect></svg><span className="cap__title">Schema design</span></div><p className="cap__body">Normalisation, denormalisation, and JSONB hybrid patterns chosen for your access patterns.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="6.5"></circle><path d="M20 20l-4.5-4.5"></path></svg><span className="cap__title">Query optimisation</span></div><p className="cap__body">Explain plans, index design, and N+1 elimination before it becomes a production incident.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12a8 8 0 0 1 13.5-5.7L20 8M20 12a8 8 0 0 1-13.5 5.7L4 16"></path><path d="M17.5 4v3.5H14M6.5 20v-3.5H10"></path></svg><span className="cap__title">Migrations</span></div><p className="cap__body">Zero-downtime schema migrations with Prisma or Flyway, tested in staging first.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="8" height="16" rx="1.5"></rect><rect x="13" y="4" width="8" height="16" rx="1.5"></rect><path d="M9 12h4"></path></svg><span className="cap__title">Replication</span></div><p className="cap__body">Primary/replica read scaling and cross-region replication for resilience and speed.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect></svg><span className="cap__title">Sharding</span></div><p className="cap__body">Hash and range partitioning for horizontal scale when a single node runs out of room.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg><span className="cap__title">Backup &amp; recovery</span></div><p className="cap__body">Automated backups, point-in-time recovery, and tested restore procedures — not just cron jobs.</p></div>
          </div>
        </section>

        <section id="s-stack" className="section reveal">
          <p className="eyebrow">import &#123; matrix &#125; from "@dww/databases" <span className="c">// when we use each database</span></p>
          <h2 className="title mono">Database matrix</h2>
          <div className="stack-tabs" data-stack>
            <button className="stack-tab" data-cat="Relational">Relational <span className="n">[3]</span></button>
            <button className="stack-tab" data-cat="Document">Document <span className="n">[2]</span></button>
            <button className="stack-tab" data-cat="Cache/Queue">Cache/Queue <span className="n">[2]</span></button>
            <button className="stack-tab" data-cat="Analytics">Analytics <span className="n">[3]</span></button>
          </div>
          <div className="stack-grid">
            <div className="stack-cell" data-cat="Relational"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Pg</span><div className="stack-cell__name">PostgreSQL</div><div className="stack-cell__cat">Relational · default</div></div>
            <div className="stack-cell" data-cat="Relational"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>My</span><div className="stack-cell__name">MySQL</div><div className="stack-cell__cat">Relational · legacy compat</div></div>
            <div className="stack-cell" data-cat="Relational"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--text)"}}>Sq</span><div className="stack-cell__name">SQLite</div><div className="stack-cell__cat">Relational · edge/embedded</div></div>
            <div className="stack-cell" data-cat="Document"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--green)"}}>Mo</span><div className="stack-cell__name">MongoDB</div><div className="stack-cell__cat">Document · flexible schema</div></div>
            <div className="stack-cell" data-cat="Document"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>Fs</span><div className="stack-cell__name">Firestore</div><div className="stack-cell__cat">Document · realtime sync</div></div>
            <div className="stack-cell" data-cat="Cache/Queue"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>Rd</span><div className="stack-cell__name">Redis</div><div className="stack-cell__cat">Cache/Queue · cache + queues</div></div>
            <div className="stack-cell" data-cat="Cache/Queue"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--red)"}}>Vk</span><div className="stack-cell__name">Valkey</div><div className="stack-cell__cat">Cache/Queue · OSS Redis fork</div></div>
            <div className="stack-cell" data-cat="Analytics"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Ch</span><div className="stack-cell__name">ClickHouse</div><div className="stack-cell__cat">Analytics · OLAP</div></div>
            <div className="stack-cell" data-cat="Analytics"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>Bq</span><div className="stack-cell__name">BigQuery</div><div className="stack-cell__cat">Analytics · warehouse</div></div>
            <div className="stack-cell" data-cat="Analytics"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>Rs</span><div className="stack-cell__name">Redshift</div><div className="stack-cell__cat">Analytics · AWS</div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// stack-databases.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">When do you choose PostgreSQL vs MongoDB?<span className="sign">[+]</span></button><div className="faq__a"><p>PostgreSQL for structured relational data, complex queries, and transactions. MongoDB for flexible document data, rapid iteration, and embedded arrays.</p></div></div>
            <div className="faq__item"><button className="faq__q">Why Redis over Memcached?<span className="sign">[+]</span></button><div className="faq__a"><p>Redis supports data structures (lists, sets, sorted sets), pub/sub, persistence, and clustering. Memcached is pure cache with no additional features.</p></div></div>
            <div className="faq__item"><button className="faq__q">When is ClickHouse the right choice?<span className="sign">[+]</span></button><div className="faq__a"><p>When you need analytics over millions of rows — dashboards, time-series reporting, or log analysis. It's 10–100× faster than PostgreSQL for OLAP queries.</p></div></div>
            <div className="faq__item"><button className="faq__q">How do you handle database migrations safely?<span className="sign">[+]</span></button><div className="faq__a"><p>Schema changes via Prisma Migrate or Flyway. Expand-and-contract pattern for zero-downtime. All migrations tested in staging first.</p></div></div>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --database-review<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready for a database architecture review?</h2>
          <p className="cta__lead">Free scoping and a detailed estimate from senior engineers — within 24 hours. Tell us what you're building and we'll scope the right database for it.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Start a project</Link>
            <Link className="btn btn--ghost" href="/portfolio/">View our work</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Senior engineers only</span><span><span className="g">●</span> 48-hr match</span><span><span className="g">●</span> No lock-in</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">databases.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
