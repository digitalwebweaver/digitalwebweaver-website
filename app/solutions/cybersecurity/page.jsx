import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Cybersecurity Audits & Penetration Testing Company India | OWASP, Code Review & Compliance — Digital Web Weaver" },
  description: "Penetration tests, OWASP Top 10 audits, code security reviews, and GDPR/HIPAA compliance checks — a detailed report with prioritised remediation steps. India-based senior team.",
  alternates: { canonical: "/solutions/cybersecurity/" },
  openGraph: { title: "Cybersecurity Audits & Penetration Testing Company India | OWASP, Code Review & Compliance — Digital Web Weaver", description: "Penetration tests, OWASP Top 10 audits, code security reviews, and GDPR/HIPAA compliance checks — a detailed report with prioritised remediation steps. India-based senior team.", url: "/solutions/cybersecurity/", type: "website" }
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
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> cybersecurity.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> services.ts</button>
        <button className="tab" data-scroll="s-work" data-target="s-work"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> work.json</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// cybersecurity.ts · OWASP · Burp Suite · Semgrep</p>
            <span className="badge">CYBERSECURITY</span>
            <h1 className="hero__h1">Cybersecurity audits that find <span className="pink">vulnerabilities</span> before <span className="teal">attackers</span> do</h1>
            <p className="hero__lead">We conduct penetration tests, OWASP audits, code reviews, and compliance checks — delivering a detailed report with prioritised remediation steps.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Book a security audit</a>
              <a className="btn btn--ghost" href="#s-work" data-scroll="s-work">$ view --work</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>150+</b><span>clients trusted</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>10/10</b><span>OWASP Top 10 covered</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>3-5d</b><span>typical pen test</span></div>
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
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>10/10</div><div className="lbl">OWASP_COVERAGE</div><div className="sub">▲ every category tested</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>3-5d</div><div className="lbl">PEN_TEST</div><div className="sub">▲ typical turnaround</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>24h</div><div className="lbl">ESTIMATE</div><div className="sub">▲ free · no commitment</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const offer = [ <span className="c">// what we offer</span></p>
          <h2 className="title mono">Cybersecurity &amp; compliance services</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Penetration testing</div><p className="svc__body">Manual and automated pen testing of web apps and APIs — the same techniques a real attacker uses.</p><div className="svc__foot"><span>pentest.sh</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">OWASP Top 10 audit</div><p className="svc__body">A systematic check against every category in the OWASP Top 10, not a sample of the obvious ones.</p><div className="svc__foot"><span>owasp.sh</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Code security review</div><p className="svc__body">Static analysis plus manual code review to catch the security flaws a scanner alone would miss.</p><div className="svc__foot"><span>review.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Dependency scanning</div><p className="svc__body">CVE scanning of npm, pip, and Maven dependencies before a known exploit becomes your incident.</p><div className="svc__foot"><span>deps.sh</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">GDPR compliance</div><p className="svc__body">Data flow mapping, consent management review, and a full privacy audit against GDPR requirements.</p><div className="svc__foot"><span>gdpr.md</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">HIPAA security review</div><p className="svc__body">PHI data handling audit and technical safeguard assessment for healthcare applications.</p><div className="svc__foot"><span>hipaa.md</span></div></div>
          </div>
        </section>

        <section id="s-capabilities" className="section reveal">
          <p className="eyebrow">// technical depth — real exploitation, not a scanner printout</p>
          <h2 className="title mono">Security testing capabilities</h2>
          <div className="grid grid-3">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="13" r="5"></circle><path d="M9 8V6M15 8V6M5 13H3M21 13h-2M7 17l-2 2M17 17l2 2M9 13h6"></path></svg><span className="cap__title">SAST &amp; DAST</span></div><p className="cap__body">Static and dynamic application security testing tools, run as part of the pipeline, not once a year.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 12 18 8"></path><circle cx="12" cy="12" r="1.4"></circle></svg><span className="cap__title">Network scanning</span></div><p className="cap__body">Port scans, service enumeration, and exposure mapping across your public-facing infrastructure.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg><span className="cap__title">Auth testing</span></div><p className="cap__body">Session management, token validation, and privilege escalation paths tested end to end.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8l4 4-4 4M20 8l-4 4 4 4M14 4l-4 16"></path></svg><span className="cap__title">Injection testing</span></div><p className="cap__body">SQL, NoSQL, XSS, SSTI, and command injection vectors — probed manually, not just fuzzed.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15a8 8 0 1 1 16 0"></path><path d="M12 15l4-4"></path><circle cx="12" cy="15" r="1"></circle></svg><span className="cap__title">Risk scoring</span></div><p className="cap__body">CVSS scoring and business-impact risk prioritisation, so you fix what matters first.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h9l3 3v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"></path><path d="M9 12h6M9 16h6M9 8h3"></path></svg><span className="cap__title">Remediation report</span></div><p className="cap__body">Detailed findings with step-by-step fix instructions your engineers can act on immediately.</p></div>
          </div>
        </section>

        <section id="s-stack" className="section reveal">
          <p className="eyebrow">import &#123; tools &#125; from "@dww/security" <span className="c">// the security testing toolkit</span></p>
          <h2 className="title mono">Security testing tools</h2>
          <div className="stack-tabs" data-stack>
            <button className="stack-tab" data-cat="Scanners">Scanners <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="SAST">SAST <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Dependency">Dependency <span className="n">[3]</span></button>
            <button className="stack-tab" data-cat="Compliance">Compliance <span className="n">[3]</span></button>
          </div>
          <div className="stack-grid">
            <div className="stack-cell" data-cat="Scanners"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>Bp</span><div className="stack-cell__name">Burp Suite Pro</div><div className="stack-cell__cat">Scanners</div></div>
            <div className="stack-cell" data-cat="Scanners"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>Zap</span><div className="stack-cell__name">OWASP ZAP</div><div className="stack-cell__cat">Scanners</div></div>
            <div className="stack-cell" data-cat="Scanners"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Nm</span><div className="stack-cell__name">Nmap</div><div className="stack-cell__cat">Scanners</div></div>
            <div className="stack-cell" data-cat="Scanners"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--text)"}}>Nk</span><div className="stack-cell__name">Nikto</div><div className="stack-cell__cat">Scanners</div></div>
            <div className="stack-cell" data-cat="SAST"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>Sg</span><div className="stack-cell__name">Semgrep</div><div className="stack-cell__cat">SAST</div></div>
            <div className="stack-cell" data-cat="SAST"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#4c4a73"}}>Sn</span><div className="stack-cell__name">Snyk</div><div className="stack-cell__cat">SAST</div></div>
            <div className="stack-cell" data-cat="SAST"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Sq</span><div className="stack-cell__name">SonarQube</div><div className="stack-cell__cat">SAST</div></div>
            <div className="stack-cell" data-cat="SAST"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>Bd</span><div className="stack-cell__name">Bandit (Python)</div><div className="stack-cell__cat">SAST</div></div>
            <div className="stack-cell" data-cat="Dependency"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#cb3837"}}>npm</span><div className="stack-cell__name">npm audit</div><div className="stack-cell__cat">Dependency</div></div>
            <div className="stack-cell" data-cat="Dependency"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>Dc</span><div className="stack-cell__name">OWASP Dependency Check</div><div className="stack-cell__cat">Dependency</div></div>
            <div className="stack-cell" data-cat="Dependency"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Tv</span><div className="stack-cell__name">Trivy</div><div className="stack-cell__cat">Dependency</div></div>
            <div className="stack-cell" data-cat="Compliance"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--green)"}}>Gd</span><div className="stack-cell__name">GDPR Toolkit</div><div className="stack-cell__cat">Compliance</div></div>
            <div className="stack-cell" data-cat="Compliance"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>Hi</span><div className="stack-cell__name">HIPAA Checklist</div><div className="stack-cell__cat">Compliance</div></div>
            <div className="stack-cell" data-cat="Compliance"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--text)"}}>CIS</span><div className="stack-cell__name">CIS Benchmarks</div><div className="stack-cell__cat">Compliance</div></div>
          </div>
        </section>

        <section id="s-process" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>securityAudit</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">Security audit process</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Scope definition</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Reconnaissance</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Active testing</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Report &amp; remediate</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04 · ◷ authorisation</div><div className="pipe-detail__title">Scope definition</div><p className="pipe-detail__body">We define exactly which systems, environments, and endpoints are in scope, agree test boundaries, and get written authorisation before any testing begins.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Target systems &amp; environments defined</span></li><li><span className="ok">✓</span><span>Test boundaries agreed in writing</span></li><li><span className="ok">✓</span><span>Authorisation confirmed before testing</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww scope --security</div><div className="t2">✓ targets defined  ✓ boundaries agreed  ✓ authorised</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04 · ◷ mapping</div><div className="pipe-detail__title">Reconnaissance</div><p className="pipe-detail__body">Information gathering and attack surface mapping — subdomains, exposed services, technology fingerprinting — building the map an attacker would build first.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Attack surface mapped</span></li><li><span className="ok">✓</span><span>Exposed services enumerated</span></li><li><span className="ok">✓</span><span>Technology stack fingerprinted</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww recon --target</div><div className="t2">✓ surface mapped  ✓ services enumerated  ✓ fingerprinted</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04 · ◷ exploitation</div><div className="pipe-detail__title">Active testing</div><p className="pipe-detail__body">Manual and tool-assisted testing across the OWASP Top 10, authentication flows, and injection vectors — the same techniques a real attacker would use.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>OWASP Top 10 systematically tested</span></li><li><span className="ok">✓</span><span>Auth &amp; session flows probed</span></li><li><span className="ok">✓</span><span>Injection vectors tested (SQL, XSS, SSTI)</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww test --active</div><div className="t2">✓ OWASP tested  ✓ auth probed  ✓ injection checked</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04 · ◷ delivery</div><div className="pipe-detail__title">Report &amp; remediate</div><p className="pipe-detail__body">A prioritised findings report with CVSS scores and step-by-step remediation instructions — followed by a free retest to confirm critical and high fixes actually work.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Findings prioritised by CVSS score</span></li><li><span className="ok">✓</span><span>Step-by-step remediation guide</span></li><li><span className="ok">✓</span><span>Free retest on critical/high findings</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww report --remediate</div><div className="t2">✓ findings scored  ✓ report delivered  ✓ retest scheduled</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">WHAT_YOU_GET</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>CVSS-scored findings report</span></div><div><span className="plus">+</span><span>Step-by-step remediation guide</span></div><div><span className="plus">+</span><span>Free retest on critical/high fixes</span></div><div><span className="plus">+</span><span>Executive summary + technical detail</span></div><div><span className="plus">+</span><span>GDPR / HIPAA compliance mapping</span></div></div>
          </div>
        </section>

        <section id="s-work" className="section reveal">
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-end","gap":"20px","flexWrap":"wrap"}}>
            <div><p className="eyebrow">// selected builds — systems we've secured and shipped</p><h2 className="title mono">Systems we've built</h2></div>
            <Link className="mono" href="/portfolio/" style={{"fontSize":"13px","whiteSpace":"nowrap"}}>view all ↗</Link>
          </div>
          <div className="grid grid-3 stagger">
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">erp.manufacturiq.io</span></div><div className="work__pad"><div className="work__tag">MANUFACTURING · ERP</div><div className="work__title">ManufacturIQ — smart ERP</div><p className="work__desc">End-to-end ERP for a mid-size manufacturer — production scheduling, inventory, procurement, HR, and executive dashboards. Replaced a 15-year-old legacy system, hardened and audited before go-live.</p><div className="work__metrics"><div className="work__mcell"><b>15yrs</b><span>legacy system replaced</span></div><div className="work__mcell"><b>40%</b><span>cost reduction</span></div></div><div className="work__stack"><span className="tag tag--y">Laravel</span><span className="tag tag--y">Vue.js</span><span className="tag tag--y">MySQL</span></div></div></div>
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">portal.propnest.io</span></div><div className="work__pad"><div className="work__tag">REAL ESTATE · CRM</div><div className="work__title">PropNest — real estate CRM</div><p className="work__desc">Custom CRM for a 500-agent real estate firm — lead management, automated follow-ups, commission tracking, and a buyer portal, security-reviewed before handling client PII.</p><div className="work__metrics"><div className="work__mcell"><b>500+</b><span>agents served</span></div><div className="work__mcell"><b>60%</b><span>faster closure</span></div></div><div className="work__stack"><span className="tag tag--y">React</span><span className="tag tag--y">Node.js</span><span className="tag tag--y">PostgreSQL</span></div></div></div>
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">fleet.logicore.io</span></div><div className="work__pad"><div className="work__tag">LOGISTICS · ERP</div><div className="work__title">LogiCore — logistics ERP</div><p className="work__desc">Multi-branch ERP for a logistics company — fleet management, route optimisation, driver payroll, fuel tracking, billing, and real-time delivery tracking, audited across every module.</p><div className="work__metrics"><div className="work__mcell"><b>6</b><span>ERP modules built</span></div><div className="work__mcell"><b>1,200</b><span>daily trips tracked</span></div></div><div className="work__stack"><span className="tag tag--y">Node.js</span><span className="tag tag--y">React</span><span className="tag tag--y">PostgreSQL</span></div></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// why DWW for security</p>
          <h2 className="title mono">Findings you can act on, not a scan dump</h2>
          <div className="grid grid-4 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🎯 SCOPED</div><div className="cap__title" style={{"marginTop":"10px"}}>Written authorisation</div><p className="cap__body">Scope and test boundaries are agreed and authorised in writing before we touch a target.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🧑‍💻 MANUAL</div><div className="cap__title" style={{"marginTop":"10px"}}>Manual exploitation</div><p className="cap__body">Automated scans catch the obvious. Our senior engineers manually test what scanners miss.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>📉 PRIORITISED</div><div className="cap__title" style={{"marginTop":"10px"}}>CVSS-scored findings</div><p className="cap__body">Every finding is scored and ranked by business impact, so you fix what matters first.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🔁 VERIFIED</div><div className="cap__title" style={{"marginTop":"10px"}}>Free remediation retest</div><p className="cap__body">Fix a critical or high finding and we retest it at no additional cost, to confirm it's closed.</p></div>
          </div>
          <div className="panel-note" style={{"background":"var(--panel)"}}><p style={{"fontSize":"16px","color":"var(--text-2)","lineHeight":"1.65","maxWidth":"960px"}}>Digital Web Weaver runs penetration tests, OWASP Top 10 audits, code security reviews, and GDPR/HIPAA compliance checks for 150+ clients across India, the UK, the US, and beyond. We use Burp Suite Pro, OWASP ZAP, Semgrep, and Trivy alongside manual exploitation — because a scanner report isn't a security audit. Every engagement ends with a CVSS-scored, prioritised report and step-by-step remediation guidance, and a free retest once critical or high findings are fixed.</p></div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// cybersecurity.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">What's included in a penetration test?<span className="sign">[+]</span></button><div className="faq__a"><p>Recon, automated scanning, manual exploitation of the OWASP Top 10, business logic testing, and a detailed report with CVSS scores and remediation steps.</p></div></div>
            <div className="faq__item"><button className="faq__q">How long does a security audit take?<span className="sign">[+]</span></button><div className="faq__a"><p>Web application pen test: 3–5 days. Full security audit with code review: 1–2 weeks. Depends on application scope.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you provide a remediation retest?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — after you fix reported vulnerabilities, we retest to confirm the fixes are effective. Included at no additional cost for critical/high findings.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you audit our AWS infrastructure?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — cloud configuration review covers IAM policies, S3 bucket permissions, security groups, and CIS Benchmark compliance.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-4">
            <Link className="svc" href="/custom-software-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Custom software</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Bespoke ERP, CRM, portals, and workflow automation — built secure from day one.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/web-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Web development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Secure, accessible websites and web applications, OWASP-aware by default.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/cloud-devops/"><div className="svc__title" style={{"fontSize":"16px"}}>Cloud &amp; DevOps</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Infrastructure hardening, CI/CD security, and cloud architecture review.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/crm-erp-systems/"><div className="svc__title" style={{"fontSize":"16px"}}>CRM &amp; ERP systems</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Secure ERP and CRM builds with role-based access control.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./audit --security<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Book a security audit</h2>
          <p className="cta__lead">Penetration tests, OWASP audits, and compliance checks — scoped and estimated by senior engineers within 24 hours.</p>
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
        <span className="statusbar__spacer">cybersecurity.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
