import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Healthcare Software Development | HIPAA-Compliant India — Digital Web Weaver" },
  description: "We build HIPAA-compliant EHR systems, patient portals, telemedicine apps, and clinical analytics platforms — secure, interoperable, and built for care.",
  alternates: { canonical: "/healthcare/" },
  openGraph: { title: "Healthcare Software Development | HIPAA-Compliant India — Digital Web Weaver", description: "We build HIPAA-compliant EHR systems, patient portals, telemedicine apps, and clinical analytics platforms — secure, interoperable, and built for care.", url: "/healthcare/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-build" data-target="s-build" title="Solutions">⚙</button>
      <button className="activitybar__btn" data-scroll="s-capabilities" data-target="s-capabilities" title="Capabilities">❮❯</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{color:"var(--teal)"}}>●</span> healthcare.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{color:"var(--yellow)"}}>●</span> solutions.ts</button>
        <button className="tab" data-scroll="s-capabilities" data-target="s-capabilities"><span className="tdot" style={{color:"var(--pink)"}}>●</span> capabilities.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{color:"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// healthcare.ts · HIPAA · HL7/FHIR · Telemedicine</p>
            <span className="badge">HEALTHCARE TECH</span>
            <h1 className="hero__h1">Healthcare software built for <span className="pink">patients</span>, <span className="teal">clinicians</span> &amp; compliance</h1>
            <p className="hero__lead">We build HIPAA-compliant EHR systems, patient portals, telemedicine apps, and clinical analytics platforms — secure, interoperable, and built for care.</p>
            <div className="btn-row" style={{marginTop:"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Get free estimate</a>
              <a className="btn btn--ghost" href="#s-build" data-scroll="s-build">$ view --solutions</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{color:"var(--pink)"}}>10+</b><span>health projects shipped</span></div>
              <div className="hero__stat"><b style={{color:"var(--teal)"}}>HIPAA</b><span>compliant by design</span></div>
              <div className="hero__stat"><b style={{color:"var(--yellow)"}}>HL7/FHIR</b><span>interoperability</span></div>
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
          <div className="stat-cell"><div className="big" style={{color:"var(--pink)"}}>HIPAA</div><div className="lbl">COMPLIANT</div><div className="sub">▲ BAA-ready by default</div></div>
          <div className="stat-cell"><div className="big" style={{color:"var(--teal)"}}>HL7/FHIR</div><div className="lbl">STANDARDS</div><div className="sub">▲ FHIR R4 interoperability</div></div>
          <div className="stat-cell"><div className="big" style={{color:"var(--yellow)"}}>10+</div><div className="lbl">HEALTH_PROJECTS</div><div className="sub">▲ EHR · portals · telehealth</div></div>
          <div className="stat-cell"><div className="big" style={{color:"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// healthcare software we build</span></p>
          <h2 className="title mono">Healthcare solutions we build</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">EHR / EMR systems</div><p className="svc__body">Custom electronic health records with role-based access and full audit trails.</p><div className="svc__foot"><span>ehr.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Patient portals</div><p className="svc__body">Appointment scheduling, lab results, and secure messaging for patients and staff.</p><div className="svc__foot"><span>portal.tsx</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Telemedicine apps</div><p className="svc__body">WebRTC video consultations with e-prescription integration built in.</p><div className="svc__foot"><span>telehealth.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Clinical analytics</div><p className="svc__body">Population health dashboards and care outcome reporting for administrators.</p><div className="svc__foot"><span>analytics.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Medical device integration</div><p className="svc__body">IoT device data ingestion and real-time patient monitoring pipelines.</p><div className="svc__foot"><span>devices.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Pharmacy management</div><p className="svc__body">Prescription tracking, inventory, and drug interaction alerts.</p><div className="svc__foot"><span>pharmacy.ts</span></div></div>
          </div>
        </section>

        <section id="s-capabilities" className="section reveal">
          <p className="eyebrow">// technical depth — compliance architected in</p>
          <h2 className="title mono">Healthcare tech capabilities</h2>
          <div className="grid grid-3">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg><span className="cap__title">HIPAA compliance</span></div><p className="cap__body">PHI encryption, audit logging, BAA agreements, and access control by default.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1"></path><path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1"></path></svg><span className="cap__title">HL7 &amp; FHIR APIs</span></div><p className="cap__body">Standard healthcare data exchange with Epic, Cerner, and Allscripts.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"></rect><path d="M11 18h2"></path></svg><span className="cap__title">iOS HealthKit</span></div><p className="cap__body">Wearable data integration and Apple Health connectivity for patient apps.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.3A3.5 3.5 0 0 1 17 18z"></path></svg><span className="cap__title">HIPAA-eligible cloud</span></div><p className="cap__body">AWS GovCloud, Azure Healthcare APIs, and GCP Healthcare API environments.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="15" r="3"></circle><path d="M9.5 12.5L20 2M15 7l3 3M18 4l3 3"></path></svg><span className="cap__title">End-to-end encryption</span></div><p className="cap__body">Data encrypted at rest (AES-256) and in transit (TLS 1.3), always.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"></path></svg><span className="cap__title">Clinical dashboards</span></div><p className="cap__body">FHIR-powered analytics for clinicians and administrators.</p></div>
          </div>
          <div className="panel-note"><p style={{fontSize:"15.5px",color:"var(--text-2)",lineHeight:"1.65"}}>We build for the three groups that actually depend on clinical software — patients, clinicians, and compliance officers — which is why HIPAA safeguards, HL7/FHIR interoperability, and audit trails are architected in from the first sprint rather than bolted on after a failed security review. PHI encryption, role-based access control, and de-identified synthetic data in every non-production environment are non-negotiable defaults, not upsells.</p></div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// healthcare.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Are you HIPAA compliant as a vendor?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — we sign BAAs, implement required technical safeguards, and train our team on HIPAA privacy and security rules.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you integrate with Epic or Cerner?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — via FHIR R4 APIs. Epic, Cerner, and Allscripts all expose SMART on FHIR endpoints we can connect to.</p></div></div>
            <div className="faq__item"><button className="faq__q">How do you handle PHI in development environments?<span className="sign">[+]</span></button><div className="faq__a"><p>De-identified synthetic data only. PHI never leaves production environments, and strict access controls apply to all environments.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you build for FDA-regulated medical devices?<span className="sign">[+]</span></button><div className="faq__a"><p>We build companion apps and data platforms. FDA SaMD classification determines what regulatory pathway applies.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-3">
            <a className="svc" href="https://digitalwebweaver.com/web-application-development/"><div className="svc__title" style={{fontSize:"16px"}}>Web application development</div><p className="svc__body" style={{fontSize:"13.5px"}}>Secure portals, dashboards, and patient-facing web applications.</p><div className="mono" style={{fontSize:"12px",color:"var(--pink)",marginTop:"12px"}}>open ↗</div></a>
            <Link className="svc" href="/custom-software-development/"><div className="svc__title" style={{fontSize:"16px"}}>Custom software development</div><p className="svc__body" style={{fontSize:"13.5px"}}>Bespoke healthcare systems — EHR, clinic management, and patient workflows.</p><div className="mono" style={{fontSize:"12px",color:"var(--pink)",marginTop:"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/mobile-app-development/"><div className="svc__title" style={{fontSize:"16px"}}>Mobile app development</div><p className="svc__body" style={{fontSize:"13.5px"}}>iOS and Android health apps with HealthKit and offline-first architecture.</p><div className="mono" style={{fontSize:"12px",color:"var(--pink)",marginTop:"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --healthcare-project<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Build your healthcare platform</h2>
          <p className="cta__lead">HIPAA-compliant, HL7-ready, and built for clinical workflows. Tell us what you're building and we'll map the compliance and architecture path with you.</p>
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
        <span className="statusbar__spacer">healthcare.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
