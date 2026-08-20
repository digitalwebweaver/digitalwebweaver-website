import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "Custom CRM & ERP Development Company | India & Global — Digital Web Weaver" },
  description: "Custom CRM and ERP systems built around your workflows — sales pipeline, inventory, HR, finance, and BI in one connected system. 150+ clients, operating since 2013.",
  alternates: { canonical: "/crm-erp-systems/" },
  openGraph: { title: "Custom CRM & ERP Development Company | India & Global — Digital Web Weaver", description: "Custom CRM and ERP systems built around your workflows — sales pipeline, inventory, HR, finance, and BI in one connected system. 150+ clients, operating since 2013.", url: "/crm-erp-systems/", type: "website" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={serviceSchema({ name: "ERP Systems", description: "Custom CRM and ERP systems built around your workflows — sales pipeline, inventory, HR, finance, and BI in one connected system. 150+ clients, operating since 2013.", href: "/crm-erp-systems/" })} />
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-build" data-target="s-build" title="Modules">⚙</button>
      <button className="activitybar__btn" data-scroll="s-capabilities" data-target="s-capabilities" title="Capabilities">❮❯</button>
      <button className="activitybar__btn" data-scroll="s-process" data-target="s-process" title="Process">❯</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> crm-erp.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> modules.ts</button>
        <button className="tab" data-scroll="s-process" data-target="s-process"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> process.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// crm-erp.ts · React · PostgreSQL · SAP integration</p>
            <span className="badge">CRM &amp; ERP SYSTEMS</span>
            <h1 className="hero__h1">CRM &amp; ERP systems built around <span className="pink">your</span> <span className="teal">business</span></h1>
            <p className="hero__lead">We build custom CRM and ERP systems tailored to your workflows — eliminating the compromises of off-the-shelf software.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Start a project</a>
              <a className="btn btn--ghost" href="#s-build" data-scroll="s-build">$ view --modules</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>150+</b><span>clients trusted</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>4.9/5</b><span>average rating</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>2013</b><span>building since</span></div>
            </div>
            <div className="trust">
              <p className="trust__label">// modules we build</p>
              <div className="trust__row">
                <span className="trust__chip">Sales pipeline</span>
                <span className="trust__chip">Inventory</span>
                <span className="trust__chip">HR &amp; payroll</span>
                <span className="trust__chip">Finance</span>
                <span className="trust__chip">Reporting &amp; BI</span>
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
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ trusted, India &amp; global</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>4.9/5</div><div className="lbl">CLUTCH_RATING</div><div className="sub">▲ verified client reviews</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>2013</div><div className="lbl">OPERATING_SINCE</div><div className="sub">▲ enterprise systems</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>24h</div><div className="lbl">RESPONSE</div><div className="sub">▲ guaranteed</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// what we build</span></p>
          <h2 className="title mono">CRM &amp; ERP modules</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Sales CRM</div><p className="svc__body">Pipeline management, lead scoring, and deal tracking built around how your sales team actually sells.</p><div className="svc__foot"><span>crm.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Inventory management</div><p className="svc__body">Stock tracking, purchase orders, and supplier management across single or multiple warehouses.</p><div className="svc__foot"><span>inventory.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">HR module</div><p className="svc__body">Employee records, leave management, and payroll integration in one connected system.</p><div className="svc__foot"><span>hr.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Finance module</div><p className="svc__body">Invoicing, accounts payable/receivable, and reporting that ties directly back to sales and inventory data.</p><div className="svc__foot"><span>finance.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">ERP integration</div><p className="svc__body">SAP, Oracle, and Odoo integration so a new CRM or module talks to the infrastructure you already run.</p><div className="svc__foot"><span>integrate.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Business intelligence</div><p className="svc__body">Custom dashboards pulling live data from every module — not a monthly export into a spreadsheet.</p><div className="svc__foot"><span>bi.ts</span></div></div>
          </div>
        </section>

        <section id="s-capabilities" className="section reveal">
          <p className="eyebrow">// technical depth — modular by design</p>
          <h2 className="title mono">Technical capabilities</h2>
          <div className="grid grid-3">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8"></path><path d="M15 7h6v6"></path></svg><span className="cap__title">Custom workflows</span></div><p className="cap__body">A drag-and-drop workflow builder for any approval process, configured to how your teams actually work.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8l4 4-4 4M20 8l-4 4 4 4M14 4l-4 16"></path></svg><span className="cap__title">API-first design</span></div><p className="cap__body">Every module exposes REST APIs for third-party integration — no gluing systems together with brittle scripts.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg><span className="cap__title">Role-based access</span></div><p className="cap__body">Granular permissions per module, feature, and data object — enterprise security from day one.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"></path></svg><span className="cap__title">Custom reports</span></div><p className="cap__body">A user-defined report builder with scheduled email delivery — no waiting on a developer for a new report.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"></rect><path d="M11 18h2"></path></svg><span className="cap__title">Mobile access</span></div><p className="cap__body">Field sales and warehouse mobile apps that stay in sync with the same live data as the desktop system.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="7" height="7" rx="1"></rect><rect x="13" y="4" width="7" height="7" rx="1"></rect><rect x="4" y="13" width="7" height="7" rx="1"></rect><rect x="13" y="13" width="7" height="7" rx="1"></rect></svg><span className="cap__title">Modular architecture</span></div><p className="cap__body">Deploy only the modules you need now, and add more later without a risky big-bang rollout.</p></div>
          </div>
        </section>

        <section id="s-stack" className="section reveal">
          <p className="eyebrow">import &#123; stack &#125; from "@dww/crm-erp" <span className="c">// the CRM/ERP stack</span></p>
          <h2 className="title mono">CRM/ERP tech stack</h2>
          <div className="stack-tabs" data-stack>
            <button className="stack-tab" data-cat="Frontend">Frontend <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Backend">Backend <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Integration">Integration <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Infra">Infra <span className="n">[4]</span></button>
          </div>
          <div className="stack-grid">
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#61dafb"}}>R</span><div className="stack-cell__name">React</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#3178c6"}}>TS</span><div className="stack-cell__name">TypeScript</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>AG</span><div className="stack-cell__name">AG Grid</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Frontend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>Rc</span><div className="stack-cell__name">Recharts</div><div className="stack-cell__cat">Frontend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--green)"}}>No</span><div className="stack-cell__name">Node.js</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Pg</span><div className="stack-cell__name">PostgreSQL</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>Rd</span><div className="stack-cell__name">Redis</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Backend"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>Bq</span><div className="stack-cell__name">BullMQ</div><div className="stack-cell__cat">Backend</div></div>
            <div className="stack-cell" data-cat="Integration"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--text)"}}>Sap</span><div className="stack-cell__name">SAP BAPI</div><div className="stack-cell__cat">Integration</div></div>
            <div className="stack-cell" data-cat="Integration"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Api</span><div className="stack-cell__name">REST APIs</div><div className="stack-cell__cat">Integration</div></div>
            <div className="stack-cell" data-cat="Integration"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>Wh</span><div className="stack-cell__name">Webhooks</div><div className="stack-cell__cat">Integration</div></div>
            <div className="stack-cell" data-cat="Integration"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>Edi</span><div className="stack-cell__name">EDI</div><div className="stack-cell__cat">Integration</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>aws</span><div className="stack-cell__name">AWS</div><div className="stack-cell__cat">Infra</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#2496ed"}}>Do</span><div className="stack-cell__name">Docker</div><div className="stack-cell__cat">Infra</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#326ce5"}}>K8s</span><div className="stack-cell__name">Kubernetes</div><div className="stack-cell__cat">Infra</div></div>
            <div className="stack-cell" data-cat="Infra"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#844fba"}}>Tf</span><div className="stack-cell__name">Terraform</div><div className="stack-cell__cat">Infra</div></div>
          </div>
        </section>

        <section id="s-process" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>crmErpProcess</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">Development process</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Business analysis</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">System design</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Modular development</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Integration &amp; training</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04 · ◷ discovery</div><div className="pipe-detail__title">Business analysis</div><p className="pipe-detail__body">We map your current workflows, identify integration points with existing systems, and define exactly which modules the platform needs — no generic CRM template.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Current workflows mapped</span></li><li><span className="ok">✓</span><span>Integration points identified</span></li><li><span className="ok">✓</span><span>Modules defined, free breakdown sent</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww analyse --workflows</div><div className="t2">✓ workflows mapped  ✓ integrations scoped  ✓ modules defined</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04 · ◷ design</div><div className="pipe-detail__title">System design</div><p className="pipe-detail__body">Data model, permissions architecture, and API design — planned so modules deploy independently and still speak the same data model.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Data model designed</span></li><li><span className="ok">✓</span><span>Permissions architecture set</span></li><li><span className="ok">✓</span><span>API design for every module</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww design --system</div><div className="t2">✓ data model set  ✓ permissions designed  ✓ APIs planned</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04 · ◷ incremental</div><div className="pipe-detail__title">Modular development</div><p className="pipe-detail__body">Modules are built and deployed incrementally with user acceptance testing after each one — deploy the sales CRM first, then add inventory or finance once each earns its keep.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Modules built incrementally</span></li><li><span className="ok">✓</span><span>UAT after every module</span></li><li><span className="ok">✓</span><span>No risky big-bang rollout</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww build --module</div><div className="t2">✓ module shipped  ✓ UAT passed  ✓ next module scheduled</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04 · ◷ go-live</div><div className="pipe-detail__title">Integration &amp; training</div><p className="pipe-detail__body">We connect external systems — legacy databases, SAP BAPI, or file-based EDI — and train your end users on the platform before we call it done.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>External systems connected</span></li><li><span className="ok">✓</span><span>Legacy data migrated</span></li><li><span className="ok">✓</span><span>End users trained</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww integrate --train</div><div className="t2">✓ systems connected  ✓ data migrated  ✓ team trained</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">WHAT_YOU_GET</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Figma design source files</span></div><div><span className="plus">+</span><span>Clean, documented codebase</span></div><div><span className="plus">+</span><span>CI/CD pipeline</span></div><div><span className="plus">+</span><span>SEO &amp; analytics setup</span></div><div><span className="plus">+</span><span>Performance report</span></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// why DWW for CRM &amp; ERP</p>
          <h2 className="title mono">Built around how your business actually runs</h2>
          <div className="grid grid-4 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🎯 BUSINESS-FIRST</div><div className="cap__title" style={{"marginTop":"10px"}}>Business-first</div><p className="cap__body">We model your actual workflows, not generic CRM templates.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🔗 INTEGRATION</div><div className="cap__title" style={{"marginTop":"10px"}}>Integration depth</div><p className="cap__body">SAP, Oracle, and custom ERP connections built correctly.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>📊 REAL-TIME</div><div className="cap__title" style={{"marginTop":"10px"}}>Real-time insights</div><p className="cap__body">Live dashboards across all business modules.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🔒 ENTERPRISE</div><div className="cap__title" style={{"marginTop":"10px"}}>Enterprise security</div><p className="cap__body">Row-level security, audit trails, and SSO from day one.</p></div>
          </div>
          <div className="panel-note" style={{"background":"var(--panel)"}}><p style={{"fontSize":"16px","color":"var(--text-2)","lineHeight":"1.65","maxWidth":"960px"}}>Custom CRM and ERP development is for companies that have outgrown off-the-shelf platforms — where Salesforce license costs balloon, or SAP's rigid modules force you to bend your process around the software instead of the other way around. We model your real workflows: sales pipelines, inventory, HR, and finance built as one connected system rather than a stack of disconnected subscriptions, with role-based access, audit trails, and SSO from day one. We're based in Vadodara, India, and deliver CRM and ERP systems for teams across the UK, South Africa, and Ivory Coast — with multi-branch, multi-currency, and granular permissions that hold up across regions and time zones. Where manual approvals or repetitive data entry slow you down, our AI and automation work removes those steps entirely.</p></div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <Link className="svc" href="/custom-software-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Custom software</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Bespoke business software — portals, internal tools, and workflow automation.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <a className="svc" href="https://digitalwebweaver.com/web-application-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Web application development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Complex web portals, dashboards, and enterprise business applications.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></a>
            <a className="svc" href="https://digitalwebweaver.com/manufacturing/"><div className="svc__title" style={{"fontSize":"16px"}}>Manufacturing</div><p className="svc__body" style={{"fontSize":"13.5px"}}>MES, IoT integration, and Industry 4.0 software for manufacturers.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></a>
            <Link className="svc" href="/laravel-developer/"><div className="svc__title" style={{"fontSize":"16px"}}>Hire a Laravel developer</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Senior Laravel PHP engineers for CRM and ERP backend development.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// crm-erp.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Custom vs off-the-shelf — when to go custom?<span className="sign">[+]</span></button><div className="faq__a"><p>When your workflows are non-standard, integration requirements are complex, or Salesforce/SAP license costs exceed custom build cost.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you integrate our existing systems?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — legacy databases, third-party APIs, and file-based EDI integrations are all part of our CRM/ERP delivery.</p></div></div>
            <div className="faq__item"><button className="faq__q">How long does a CRM build take?<span className="sign">[+]</span></button><div className="faq__a"><p>Core CRM with contacts, pipeline, and reporting: 8–12 weeks. Full ERP with multiple modules: 4–9 months.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can users configure workflows themselves?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — we build workflow configuration UIs so business users can modify approval chains and automation rules without developer involvement.</p></div></div>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --erp-project<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to replace your legacy system?</h2>
          <p className="cta__lead">Talk to a senior engineer for a free module breakdown and a fixed-price estimate within 24 hours.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Start your ERP project</Link>
            <Link className="btn btn--ghost" href="/portfolio/">See our work</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Fixed-price estimate</span><span><span className="g">●</span> 24-hour response</span><span><span className="g">●</span> You own the code</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">crm-erp.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
