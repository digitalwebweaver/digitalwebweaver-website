import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "FinTech Software Development | PCI-DSS Compliant India — Digital Web Weaver" },
  description: "We engineer PCI-DSS compliant payment systems, lending platforms, KYC/AML pipelines, and trading dashboards for regulated financial environments.",
  alternates: { canonical: "/fintech/" },
  openGraph: { title: "FinTech Software Development | PCI-DSS Compliant India — Digital Web Weaver", description: "We engineer PCI-DSS compliant payment systems, lending platforms, KYC/AML pipelines, and trading dashboards for regulated financial environments.", url: "/fintech/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-build" data-target="s-build" title="Solutions">⚙</button>
      <button className="activitybar__btn" data-scroll="s-capabilities" data-target="s-capabilities" title="Capabilities">❮❯</button>
      <button className="activitybar__btn" data-scroll="s-work" data-target="s-work" title="Work">◈</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{color:"var(--teal)"}}>●</span> fintech.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{color:"var(--yellow)"}}>●</span> solutions.ts</button>
        <button className="tab" data-scroll="s-work" data-target="s-work"><span className="tdot" style={{color:"var(--pink)"}}>●</span> work.json</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{color:"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// fintech.ts · PCI-DSS · KYC/AML · Open Banking</p>
            <span className="badge">FINTECH</span>
            <h1 className="hero__h1">FinTech software built to <span className="pink">comply</span>, built to <span className="teal">scale</span></h1>
            <p className="hero__lead">We engineer PCI-DSS compliant payment systems, lending platforms, KYC/AML pipelines, and trading dashboards for regulated financial environments.</p>
            <div className="btn-row" style={{marginTop:"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Get free estimate</a>
              <a className="btn btn--ghost" href="#s-work" data-scroll="s-work">$ view --work</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{color:"var(--pink)"}}>15+</b><span>FinTech apps shipped</span></div>
              <div className="hero__stat"><b style={{color:"var(--teal)"}}>PCI-DSS</b><span>compliant by design</span></div>
              <div className="hero__stat"><b style={{color:"var(--yellow)"}}>150+</b><span>clients trust us</span></div>
            </div>
          </div>
          <div className="formcard" id="estimate">
            <div className="code__head"><span className="dot dot--red" style={{width:"8px",height:"8px"}}></span><span className="fn">estimate.form</span><span className="mut">— free</span></div>
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
              <div className="s1">✓ request received<br />✓ routed to a senior engineer<br />✓ estimate en route</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll reply within 24 hours.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{color:"var(--pink)"}}>15+</div><div className="lbl">FINTECH_APPS</div><div className="sub">▲ shipped to production</div></div>
          <div className="stat-cell"><div className="big" style={{color:"var(--teal)"}}>PCI-DSS</div><div className="lbl">COMPLIANT</div><div className="sub">▲ tokenised at the edge</div></div>
          <div className="stat-cell"><div className="big" style={{color:"var(--yellow)"}}>SOC 2</div><div className="lbl">AWARE</div><div className="sub">▲ architecture-ready</div></div>
          <div className="stat-cell"><div className="big" style={{color:"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// FinTech software we build</span></p>
          <h2 className="title mono">FinTech solutions we build</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Payment processing</div><p className="svc__body">Stripe, Razorpay, and custom payment gateway integrations built PCI-DSS compliant from the first commit.</p><div className="svc__foot"><span>pay.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Lending platforms</div><p className="svc__body">Loan origination, credit scoring, and repayment management for banks, NBFCs, and lenders.</p><div className="svc__foot"><span>lend.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">KYC / AML systems</div><p className="svc__body">Identity verification, document OCR, and sanctions screening wired into onboarding flows.</p><div className="svc__foot"><span>kyc.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Trading dashboards</div><p className="svc__body">Real-time market data, portfolio management, and order books rendered at sub-second latency.</p><div className="svc__foot"><span>trade.tsx</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Open Banking APIs</div><p className="svc__body">PSD2-compliant account aggregation and payment initiation across connected banks.</p><div className="svc__foot"><span>openbank.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Wealth management</div><p className="svc__body">Robo-advisor platforms and portfolio analytics tools for digital wealth products.</p><div className="svc__foot"><span>wealth.py</span></div></div>
          </div>
        </section>

        <section id="s-capabilities" className="section reveal">
          <p className="eyebrow">// technical depth — compliance-first architecture</p>
          <h2 className="title mono">FinTech capabilities</h2>
          <div className="grid grid-3">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg><span className="cap__title">PCI-DSS compliance</span></div><p className="cap__body">Tokenisation, encryption, and cardholder data environment design targeting SAQ-A / SAQ-A-EP scope.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="6"></circle><path d="M20 20l-5-5"></path></svg><span className="cap__title">KYC / AML integration</span></div><p className="cap__body">Jumio, Onfido, and custom OCR-based identity verification wired into sanctions screening.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L4 14h6l-1 8 9-12h-6z"></path></svg><span className="cap__title">Real-time processing</span></div><p className="cap__body">WebSocket market feeds, event sourcing, and CQRS patterns for sub-second updates.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10l9-6 9 6"></path><path d="M5 10v9M9 10v9M15 10v9M19 10v9"></path><path d="M3 19h18"></path></svg><span className="cap__title">Core banking APIs</span></div><p className="cap__body">Integration with Mambu, Temenos, and core banking systems — secure, versioned, and audited.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"></path></svg><span className="cap__title">Risk analytics</span></div><p className="cap__body">ML-powered fraud detection and credit risk models embedded in the transaction path.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.3A3.5 3.5 0 0 1 17 18z"></path></svg><span className="cap__title">Secure cloud infra</span></div><p className="cap__body">VPC isolation, WAF, DDoS protection, and immutable audit logging as standard.</p></div>
          </div>
          <div className="panel-note"><p style={{fontSize:"15.5px",color:"var(--text-2)",lineHeight:"1.65"}}>We build for teams that answer to regulators — payment processors, lenders, and wealth platforms where a failed audit is not an option. Compliance drives the architecture rather than trailing behind it: cardholder data is tokenised at the edge so it never touches our application servers, and applicable regimes — RBI, FCA, PSD2 — are mapped during discovery, not at launch.</p></div>
        </section>

        <section id="s-work" className="section reveal">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"20px",flexWrap:"wrap"}}>
            <div><p className="eyebrow">// selected FinTech builds — production systems</p><h2 className="title mono">Systems we've built</h2></div>
            <Link className="mono" href="/portfolio/" style={{fontSize:"13px",whiteSpace:"nowrap"}}>view all ↗</Link>
          </div>
          <div className="grid grid-3 stagger">
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">checkout.bnpl-uk.com</span></div><div className="work__pad"><div className="work__tag">FINTECH · UK</div><div className="work__title">BNPL checkout integration</div><p className="work__desc">PCI-DSS-compliant BNPL checkout added to an e-commerce platform serving 120k customers, with a 3-step credit decision in under 2 seconds.</p><div className="work__metrics"><div className="work__mcell"><b>120k</b><span>customers served</span></div><div className="work__mcell"><b>&lt;2s</b><span>credit decision</span></div></div><div className="work__stack"><span className="tag tag--y">Stripe</span><span className="tag tag--y">PCI-DSS</span><span className="tag tag--y">Node.js</span></div></div></div>
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">lending.msme-nbfc.in</span></div><div className="work__pad"><div className="work__tag">LENDING · INDIA</div><div className="work__title">MSME lending platform</div><p className="work__desc">Loan origination, scoring, and collections platform for an NBFC — integrated with bureau APIs (CIBIL, Experian) and bank NACH for auto-debit.</p><div className="work__metrics"><div className="work__mcell"><b>10,000</b><span>loans disbursed</span></div><div className="work__mcell"><b>2</b><span>bureaus (CIBIL &amp; Experian)</span></div></div><div className="work__stack"><span className="tag tag--y">Node.js</span><span className="tag tag--y">PostgreSQL</span><span className="tag tag--y">NACH</span></div></div></div>
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.wealth-uae.io</span></div><div className="work__pad"><div className="work__tag">OPEN BANKING · UAE</div><div className="work__title">Multi-bank aggregation dashboard</div><p className="work__desc">PSD2/open-banking-style account aggregation for a UAE digital wealth app, with real-time net-worth view and spending analytics.</p><div className="work__metrics"><div className="work__mcell"><b>8</b><span>bank connections</span></div><div className="work__mcell"><b>Real-time</b><span>net-worth view</span></div></div><div className="work__stack"><span className="tag tag--y">Plaid</span><span className="tag tag--y">OAuth 2.0</span><span className="tag tag--y">React Native</span></div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// fintech.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Are you experienced with RBI or FCA regulations?<span className="sign">[+]</span></button><div className="faq__a"><p>We've built for both RBI-regulated Indian FinTechs and FCA-authorised UK firms. Regulatory mapping is part of discovery.</p></div></div>
            <div className="faq__item"><button className="faq__q">How do you handle payment card data?<span className="sign">[+]</span></button><div className="faq__a"><p>We tokenise at the edge — cardholder data never touches our application servers. PCI-DSS SAQ-A or SAQ-A-EP compliance.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you integrate with Open Banking APIs?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — PSD2-compliant account aggregation and payment initiation via TrueLayer, Plaid, and direct bank APIs.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you build for crypto or DeFi?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — we build Web3 integrations, smart contract frontends, and crypto payment processing with Coinbase and BitPay.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-3">
            <a className="svc" href="https://digitalwebweaver.com/web-application-development/"><div className="svc__title" style={{fontSize:"16px"}}>Web application development</div><p className="svc__body" style={{fontSize:"13.5px"}}>Complex FinTech portals, trading dashboards, and multi-user platforms.</p><div className="mono" style={{fontSize:"12px",color:"var(--pink)",marginTop:"12px"}}>open ↗</div></a>
            <Link className="svc" href="/saas-development/"><div className="svc__title" style={{fontSize:"16px"}}>SaaS development</div><p className="svc__body" style={{fontSize:"13.5px"}}>Multi-tenant FinTech SaaS with Stripe billing and SOC 2-ready architecture.</p><div className="mono" style={{fontSize:"12px",color:"var(--pink)",marginTop:"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/ai-automation/"><div className="svc__title" style={{fontSize:"16px"}}>AI &amp; automation</div><p className="svc__body" style={{fontSize:"13.5px"}}>Fraud detection, document processing, and ML-powered credit scoring.</p><div className="mono" style={{fontSize:"12px",color:"var(--pink)",marginTop:"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --fintech-project<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Build your FinTech platform</h2>
          <p className="cta__lead">Compliant, scalable, and built for financial data from day one. Tell us what you're building and we'll map the regulatory requirements with you.</p>
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
        <span className="statusbar__spacer">fintech.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
