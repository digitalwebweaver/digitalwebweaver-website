import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Ready-Made Software Products | Launch in 2–4 Weeks — Digital Web Weaver" },
  description: "17 production-ready software products — LMS, ERP, clinic software, delivery apps, and AI voice agents. White-label ready, deployed with your branding in 2–4 weeks.",
  alternates: { canonical: "/products/" },
  openGraph: { title: "Ready-Made Software Products | Launch in 2–4 Weeks — Digital Web Weaver", description: "17 production-ready software products — LMS, ERP, clinic software, delivery apps, and AI voice agents. White-label ready, deployed with your branding in 2–4 weeks.", url: "/products/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-catalog" data-target="s-catalog" title="Catalog">▤</button>
      <button className="activitybar__btn" data-scroll="s-process" data-target="s-process" title="Process">❯</button>
      <button className="activitybar__btn" data-scroll="s-value" data-target="s-value" title="Why pre-built">✓</button>
      <span className="activitybar__geo" title="India · UK · South Africa">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> products.ts</button>
        <button className="tab" data-scroll="s-catalog" data-target="s-catalog"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> catalog.json</button>
        <button className="tab" data-scroll="s-process" data-target="s-process"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> process.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// products.ts · 17 ready-made products · deploy in weeks</p>
            <span className="badge">PRODUCT CATALOG</span>
            <h1 className="hero__h1">Launch faster with <span className="pink">pre-built</span> <span className="teal">software</span></h1>
            <p className="hero__lead">Skip months of boilerplate. Each product is production-ready, built on a modern stack, white-label ready, and deployed with your branding in 2–4 weeks.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Book a product demo</a>
              <a className="btn btn--ghost" href="#s-catalog" data-scroll="s-catalog">$ browse --catalog</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>17</b><span>ready-made products</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>2 wks</b><span>avg. launch</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>60%</b><span>cost savings</span></div>
            </div>
          </div>
          <div className="formcard" id="demo">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">demo.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE PRODUCT DEMO</p>
              <p className="form__title">See a product in action</p>
              <p className="form__lead">Book a 30-minute demo — we'll walk you through the fit and give you a fixed deployment quote.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME *</label><input className="input" name="name" placeholder="Your name" required /></div>
                <div className="field"><label className="label">WORK EMAIL *</label><input className="input" name="email" type="email" placeholder="you@company.com" required /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">WHICH PRODUCT INTERESTS YOU?</label>
                <select className="select" name="product"><option>Not sure — show me a few</option><option>Healthcare &amp; clinics</option><option>Education (EduCore / SchoolHub)</option><option>AI voice &amp; automation agents</option><option>Field service &amp; ERP</option><option>Food, mobility &amp; booking</option><option>Sales &amp; CRM (InsureDesk)</option></select>
                </div>
                <div className="field"><label className="label">COMPANY / ORGANISATION</label><input className="input" name="company" placeholder="Your company" /></div>
              </div>
              <button className="form__submit" type="submit">Book a demo ↗</button>
              <p className="form__micro">Free demo · Fixed price + timeline</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww demo --book</div>
              <div className="s1">✓ request received<br />✓ best-fit product identified<br />✓ demo slot being arranged</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll be in touch within 24 hours to schedule.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>17</div><div className="lbl">PRODUCTS</div><div className="sub">▲ ready to deploy</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>2 wks</div><div className="lbl">AVG_LAUNCH</div><div className="sub">▲ demo → live</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>60%</div><div className="lbl">COST_SAVINGS</div><div className="sub">▲ vs. custom build</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>50+</div><div className="lbl">DEPLOYMENTS</div><div className="sub">▲ battle-tested live</div></div>
        </section>

        <section id="s-catalog" className="section reveal">
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-end","gap":"20px","flexWrap":"wrap"}}>
            <div>
              <p className="eyebrow">const catalog = [ <span className="c">// 17 products across 6 categories</span></p>
              <h2 className="title mono">The product catalog</h2>
              <p className="subtitle">Custom speed, product quality. Every product below has been deployed in at least 5 real client environments — the edge cases are already found.</p>
            </div>
            <Link className="mono" href="/portfolio/" style={{"fontSize":"13px","whiteSpace":"nowrap"}}>see client case studies ↗</Link>
          </div>

          <div style={{marginTop:"26px",border:"1px solid var(--border)",background:"#0a0e13",overflow:"hidden",boxShadow:"0 12px 40px -18px rgba(0,0,0,0.7)"}}>
            <div style={{display:"flex",alignItems:"center",gap:"8px",padding:"11px 16px",background:"var(--panel)",borderBottom:"1px solid var(--border)"}}>
              <span style={{display:"flex",gap:"7px"}}><span style={{width:"12px",height:"12px",borderRadius:"50%",background:"#ff5f57"}}></span><span style={{width:"12px",height:"12px",borderRadius:"50%",background:"#febc2e"}}></span><span style={{width:"12px",height:"12px",borderRadius:"50%",background:"#28c840"}}></span></span>
              <span className="mono" style={{marginLeft:"8px",fontSize:"12.5px",color:"var(--muted)"}}>dww@studio: ~/products</span>
              <span className="mono" style={{marginLeft:"auto",fontSize:"11.5px",color:"var(--muted-2)"}}>zsh</span>
            </div>
            <div className="mono" style={{padding:"20px 22px",fontSize:"13.5px",lineHeight:1.55}}>
              <div style={{color:"var(--text-2)"}}><span style={{color:"var(--teal)"}}>$</span> dww search <span style={{color:"var(--text)"}}>--catalog</span></div>
              <div style={{color:"var(--muted-2)",marginTop:"4px"}}>resolving <span style={{color:"var(--yellow)"}}>17</span> products across 6 categories…</div>
              <div style={{marginTop:"14px",display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)",gap:"2px 40px"}}>
                <div style={{display:"flex",alignItems:"baseline",gap:"10px",padding:"4px 8px"}}><span style={{color:"var(--green)",flexShrink:0}}>✓</span><span style={{color:"#7ee0d0",whiteSpace:"nowrap"}}>healthcare-clinics</span><span style={{color:"var(--muted-2)",flex:1,textAlign:"right",whiteSpace:"nowrap"}}>5 products</span></div>
                <div style={{display:"flex",alignItems:"baseline",gap:"10px",padding:"4px 8px"}}><span style={{color:"var(--green)",flexShrink:0}}>✓</span><span style={{color:"#7ee0d0",whiteSpace:"nowrap"}}>education</span><span style={{color:"var(--muted-2)",flex:1,textAlign:"right",whiteSpace:"nowrap"}}>2 products</span></div>
                <div style={{display:"flex",alignItems:"baseline",gap:"10px",padding:"4px 8px"}}><span style={{color:"var(--green)",flexShrink:0}}>✓</span><span style={{color:"#7ee0d0",whiteSpace:"nowrap"}}>ai-agents</span><span style={{color:"var(--muted-2)",flex:1,textAlign:"right",whiteSpace:"nowrap"}}>2 products</span></div>
                <div style={{display:"flex",alignItems:"baseline",gap:"10px",padding:"4px 8px"}}><span style={{color:"var(--green)",flexShrink:0}}>✓</span><span style={{color:"#7ee0d0",whiteSpace:"nowrap"}}>field-service-erp</span><span style={{color:"var(--muted-2)",flex:1,textAlign:"right",whiteSpace:"nowrap"}}>4 products</span></div>
                <div style={{display:"flex",alignItems:"baseline",gap:"10px",padding:"4px 8px"}}><span style={{color:"var(--green)",flexShrink:0}}>✓</span><span style={{color:"#7ee0d0",whiteSpace:"nowrap"}}>food-mobility</span><span style={{color:"var(--muted-2)",flex:1,textAlign:"right",whiteSpace:"nowrap"}}>3 products</span></div>
                <div style={{display:"flex",alignItems:"baseline",gap:"10px",padding:"4px 8px"}}><span style={{color:"var(--green)",flexShrink:0}}>✓</span><span style={{color:"#7ee0d0",whiteSpace:"nowrap"}}>sales-crm</span><span style={{color:"var(--muted-2)",flex:1,textAlign:"right",whiteSpace:"nowrap"}}>1 product</span></div>
              </div>
              <div style={{marginTop:"16px",color:"var(--green)"}}>+ 17 products indexed <span style={{color:"var(--muted-2)"}}>· 0 vulnerabilities · white-label ready</span></div>
              <div style={{marginTop:"4px",color:"var(--text-2)"}}><span style={{color:"var(--teal)"}}>$</span> <span className="caret"></span></div>
            </div>
          </div>

          <div style={{"marginTop":"36px"}}>
            <span className="badge" style={{"color":"var(--teal)"}}>HEALTHCARE &amp; CLINICS</span>
            <div className="grid grid-3 stagger" style={{"marginTop":"18px"}}>
              <Link className="work" href="/glowdesk/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.glowdesk.io</span></div><div className="work__pad"><div className="work__tag">CLINIC SOFTWARE · AESTHETIC</div><div className="work__title">GlowDesk</div><p className="work__desc">Ready-to-launch software for aesthetic and cosmetic clinics — bookings, treatment plans, before/after galleries, billing, and follow-ups.</p><div className="work__stack"><span className="tag tag--y">React</span><span className="tag tag--y">Node.js</span><span className="tag tag--y">MongoDB</span></div><div className="work__view">Open product ↗</div></div></Link>
              <Link className="work" href="/clinicflow/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.clinicflow.io</span></div><div className="work__pad"><div className="work__tag">CLINIC SOFTWARE</div><div className="work__title">ClinicFlow</div><p className="work__desc">Ready-to-launch clinic management system — appointment scheduling, EMR, billing, pharmacy, and patient communication, all branded as yours.</p><div className="work__stack"><span className="tag tag--y">React</span><span className="tag tag--y">Node.js</span><span className="tag tag--y">PostgreSQL</span></div><div className="work__view">Open product ↗</div></div></Link>
              <Link className="work" href="/vetcare/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.vetcare.io</span></div><div className="work__pad"><div className="work__tag">CLINIC SOFTWARE · VETERINARY</div><div className="work__title">VetCare</div><p className="work__desc">Ready-to-launch veterinary practice management system — appointments, patient records, vaccination reminders, billing, and communication.</p><div className="work__stack"><span className="tag tag--y">React</span><span className="tag tag--y">Node.js</span><span className="tag tag--y">MongoDB</span></div><div className="work__view">Open product ↗</div></div></Link>
              <Link className="work" href="/telecare/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.telecare.io</span></div><div className="work__pad"><div className="work__tag">TELEMEDICINE</div><div className="work__title">TeleCare</div><p className="work__desc">Ready-to-launch telemedicine platform — video consultations, e-prescriptions, patient records, appointment scheduling, and payments.</p><div className="work__stack"><span className="tag tag--y">React</span><span className="tag tag--y">Node.js</span><span className="tag tag--y">WebRTC</span></div><div className="work__view">Open product ↗</div></div></Link>
              <Link className="work" href="/clinicvoice-ai/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.clinicvoice.ai</span></div><div className="work__pad"><div className="work__tag">AI VOICE AGENT · HEALTHCARE</div><div className="work__title">ClinicVoice AI</div><p className="work__desc">Ready-to-deploy AI voice calling agent for clinics — handles appointment booking, reminders, FAQs, and follow-up calls in your clinic's voice.</p><div className="work__stack"><span className="tag tag--y">AI/LLM</span><span className="tag tag--y">Node.js</span><span className="tag tag--y">Twilio</span></div><div className="work__view">Open product ↗</div></div></Link>
            </div>
          </div>

          <div style={{"marginTop":"36px"}}>
            <span className="badge" style={{"color":"var(--yellow)"}}>EDUCATION</span>
            <div className="grid grid-3 stagger" style={{"marginTop":"18px"}}>
              <Link className="work" href="/educore/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.educore.io</span></div><div className="work__pad"><div className="work__tag">EDTECH · LMS</div><div className="work__title">EduCore</div><p className="work__desc">Ready-to-launch Learning Management System for institutes — courses, live classes, quizzes, certificates, and fee collection in one platform.</p><div className="work__stack"><span className="tag tag--y">Next.js</span><span className="tag tag--y">PostgreSQL</span><span className="tag tag--y">AWS</span></div><div className="work__view">Open product ↗</div></div></Link>
              <Link className="work" href="/schoolhub/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.schoolhub.io</span></div><div className="work__pad"><div className="work__tag">EDTECH · SCHOOL MANAGEMENT</div><div className="work__title">SchoolHub</div><p className="work__desc">Ready-to-deploy school management system — admissions, attendance, timetables, fee collection, exams, and parent communication.</p><div className="work__stack"><span className="tag tag--y">React</span><span className="tag tag--y">Node.js</span><span className="tag tag--y">PostgreSQL</span></div><div className="work__view">Open product ↗</div></div></Link>
            </div>
          </div>

          <div style={{"marginTop":"36px"}}>
            <span className="badge" style={{"color":"var(--pink)"}}>AI AGENTS &amp; AUTOMATION</span>
            <div className="grid grid-3 stagger" style={{"marginTop":"18px"}}>
              <Link className="work" href="/chatflow-ai/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.chatflow.ai</span></div><div className="work__pad"><div className="work__tag">AI AUTOMATION · WHATSAPP</div><div className="work__title">ChatFlow AI</div><p className="work__desc">Ready-to-deploy WhatsApp automation agent — handles enquiries, bookings, order updates, and follow-ups on your business WhatsApp number.</p><div className="work__stack"><span className="tag tag--y">AI/LLM</span><span className="tag tag--y">Node.js</span><span className="tag tag--y">WhatsApp API</span></div><div className="work__view">Open product ↗</div></div></Link>
              <Link className="work" href="/callmate-ai/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.callmate.ai</span></div><div className="work__pad"><div className="work__tag">AI VOICE AGENT</div><div className="work__title">CallMate AI</div><p className="work__desc">Ready-to-deploy AI voice agent for businesses — handles inbound enquiries, books appointments, makes follow-up calls, and qualifies leads.</p><div className="work__stack"><span className="tag tag--y">AI/LLM</span><span className="tag tag--y">Node.js</span><span className="tag tag--y">Twilio</span></div><div className="work__view">Open product ↗</div></div></Link>
            </div>
          </div>

          <div style={{"marginTop":"36px"}}>
            <span className="badge" style={{"color":"var(--green)"}}>FIELD SERVICE, ERP &amp; OPERATIONS</span>
            <div className="grid grid-3 stagger" style={{"marginTop":"18px"}}>
              <Link className="work" href="/solarflow/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.solarflow.io</span></div><div className="work__pad"><div className="work__tag">ERP · SOLAR</div><div className="work__title">SolarFlow</div><p className="work__desc">Ready-to-deploy ERP for solar installers — site surveys, quotations, project tracking, inventory, subsidy paperwork, and AMC scheduling.</p><div className="work__stack"><span className="tag tag--y">React</span><span className="tag tag--y">Node.js</span><span className="tag tag--y">PostgreSQL</span></div><div className="work__view">Open product ↗</div></div></Link>
              <Link className="work" href="/chemsupply/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.chemsupply.io</span></div><div className="work__pad"><div className="work__tag">ERP · CHEMICAL SUPPLY</div><div className="work__title">ChemSupply</div><p className="work__desc">Ready-to-deploy ERP for chemical suppliers — inventory with batch/expiry tracking, compliance documentation, orders, and distributor portals.</p><div className="work__stack"><span className="tag tag--y">React</span><span className="tag tag--y">Node.js</span><span className="tag tag--y">PostgreSQL</span></div><div className="work__view">Open product ↗</div></div></Link>
              <Link className="work" href="/pesttrack/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.pesttrack.io</span></div><div className="work__pad"><div className="work__tag">FIELD SERVICE CRM</div><div className="work__title">PestTrack</div><p className="work__desc">Ready-to-launch CRM for pest control companies — job scheduling, technician routing, service history, contracts, and reminders.</p><div className="work__stack"><span className="tag tag--y">React</span><span className="tag tag--y">Node.js</span><span className="tag tag--y">PostgreSQL</span></div><div className="work__view">Open product ↗</div></div></Link>
              <Link className="work" href="/manchify/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.manchify.com</span></div><div className="work__pad"><div className="work__tag">OPERATIONS OS · EVENTS</div><div className="work__title">Manchify</div><p className="work__desc">Operations OS for Indian event companies — leads, quotes, vendors, manpower, rentals, and GST invoicing in one connected system.</p><div className="work__stack"><span className="tag tag--y">Vue.js</span><span className="tag tag--y">Node.js</span><span className="tag tag--y">MongoDB</span></div><div className="work__view">Open product ↗</div></div></Link>
            </div>
          </div>

          <div style={{"marginTop":"36px"}}>
            <span className="badge" style={{"color":"var(--teal)"}}>FOOD, MOBILITY &amp; BOOKING</span>
            <div className="grid grid-3 stagger" style={{"marginTop":"18px"}}>
              <Link className="work" href="/quickbite/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.quickbite.io</span></div><div className="work__pad"><div className="work__tag">FOOD &amp; F&amp;B</div><div className="work__title">QuickBite</div><p className="work__desc">Ready-to-launch food delivery app suite — customer ordering app, restaurant dashboard, and delivery partner app with real-time tracking.</p><div className="work__stack"><span className="tag tag--y">React Native</span><span className="tag tag--y">Node.js</span><span className="tag tag--y">Firebase</span></div><div className="work__view">Open product ↗</div></div></Link>
              <Link className="work" href="/rideeasy/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.rideeasy.io</span></div><div className="work__pad"><div className="work__tag">MOBILITY</div><div className="work__title">RideEasy</div><p className="work__desc">Ready-to-launch cab booking platform — rider app, driver app, and dispatch dashboard with live tracking, fare estimation, and payments.</p><div className="work__stack"><span className="tag tag--y">React Native</span><span className="tag tag--y">Node.js</span><span className="tag tag--y">Google Maps</span></div><div className="work__view">Open product ↗</div></div></Link>
              <Link className="work" href="/salonbook/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.salonbook.io</span></div><div className="work__pad"><div className="work__tag">BOOKING</div><div className="work__title">SalonBook</div><p className="work__desc">Ready-to-launch salon management system — online booking, staff scheduling, billing, packages, and client follow-ups.</p><div className="work__stack"><span className="tag tag--y">React</span><span className="tag tag--y">Node.js</span><span className="tag tag--y">PostgreSQL</span></div><div className="work__view">Open product ↗</div></div></Link>
            </div>
          </div>

          <div style={{"marginTop":"36px"}}>
            <span className="badge" style={{"color":"var(--pink)"}}>SALES &amp; CRM</span>
            <div className="grid grid-3 stagger" style={{"marginTop":"18px"}}>
              <Link className="work" href="/insuredesk/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.insuredesk.io</span></div><div className="work__pad"><div className="work__tag">CRM · INSURANCE</div><div className="work__title">InsureDesk</div><p className="work__desc">Ready-to-launch CRM for insurance agencies — lead management, policy tracking, renewal reminders, claims follow-up, and communication.</p><div className="work__stack"><span className="tag tag--y">React</span><span className="tag tag--y">Node.js</span><span className="tag tag--y">PostgreSQL</span></div><div className="work__view">Open product ↗</div></div></Link>
            </div>
          </div>
        </section>

        <section id="s-process" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>demoToLive</span>() &#123; <span className="c">// from demo to live in under 4 weeks</span></p>
          <h2 className="title mono">From demo to live in under 4 weeks</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Pick a product</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Customise</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">UAT &amp; training</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Launch</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04 · ◷ 1 day</div><div className="pipe-detail__title">Pick your product</div><p className="pipe-detail__body">Schedule a 30-minute demo. We walk through the product, identify customisations, and give you a fixed price and timeline.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>30-minute product walkthrough</span></li><li><span className="ok">✓</span><span>Customisations identified</span></li><li><span className="ok">✓</span><span>Fixed price &amp; timeline</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww demo --book</div><div className="t2">✓ product matched  ✓ quote generated</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04 · ◷ 1–2 weeks</div><div className="pipe-detail__title">Customisation sprint</div><p className="pipe-detail__body">We brand it, configure your modules, wire in your integrations, and load your seed data. You get daily progress updates.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Branding &amp; module configuration</span></li><li><span className="ok">✓</span><span>Integrations wired in</span></li><li><span className="ok">✓</span><span>Daily progress updates</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww customise --sprint</div><div className="t2">✓ branded  ✓ modules configured  ✓ seed data loaded</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04 · ◷ 3–5 days</div><div className="pipe-detail__title">UAT &amp; training</div><p className="pipe-detail__body">Your team tests everything on a staging environment. We run a training session and fix any outstanding issues.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Staging environment for testing</span></li><li><span className="ok">✓</span><span>Team training session</span></li><li><span className="ok">✓</span><span>Outstanding issues fixed</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww uat --staging</div><div className="t2">✓ tests passed  ✓ training complete</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04 · ◷ day 1</div><div className="pipe-detail__title">Launch &amp; handover</div><p className="pipe-detail__body">We deploy to production, configure your domain, and hand over the full source code. You own it outright — no licence fees, ever.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Production deploy on your domain</span></li><li><span className="ok">✓</span><span>Full source-code handover</span></li><li><span className="ok">✓</span><span>No licence fees, ever</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww launch --handover</div><div className="t2">✓ live on your domain  ✓ source code handed over</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
        </section>

        <section id="s-value" className="section reveal">
          <p className="eyebrow">// the case for pre-built</p>
          <h2 className="title mono">Custom speed, product quality</h2>
          <p className="subtitle">Pre-built doesn't mean off-the-shelf. Our products have been battle-tested across 50+ real deployments.</p>
          <div className="grid grid-3 stagger">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg><span className="cap__title">2–4 week deployment</span></div><p className="cap__body">Skip 4–6 months of custom build. Our products are fully code-complete; your time is spent on configuration, not architecture.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M17 7.5c0-1.9-2.2-3-5-3s-5 1.4-5 3 2.2 2.6 5 3 5 1.1 5 3-2.2 3-5 3-5-1.1-5-3"></path></svg><span className="cap__title">60% lower cost</span></div><p className="cap__body">You pay for customisation and deployment, not for rebuilding infrastructure from scratch. Savings compound over the project lifecycle.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg><span className="cap__title">Production-proven</span></div><p className="cap__body">Every product in this catalogue has been deployed in at least 5 real client environments. The edge cases and bugs have already been found.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8l4 4-4 4M20 8l-4 4 4 4M14 4l-4 16"></path></svg><span className="cap__title">Full source ownership</span></div><p className="cap__body">You receive the complete source code at handover. No SaaS subscriptions, no vendor lock-in, no licence negotiations. It's yours.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M9 12h4M11 12v5M15 16.5c.6.6 3 .8 3-1s-3-1-3-2.5 2.4-1.4 3-.8"></path></svg><span className="cap__title">Fully customisable</span></div><p className="cap__body">Branding, modules, integrations, workflows — everything can be changed. We regularly extend products beyond their base configuration.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.3A3.5 3.5 0 0 1 17 18z"></path><path d="M12 12v5m0-5l-2 2m2-2l2 2"></path></svg><span className="cap__title">12-month support</span></div><p className="cap__body">Every deployment includes 12 months of bug-fix support and a dedicated Slack channel. Extensions and new features are quoted separately.</p></div>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./demo --book<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to see one in action?</h2>
          <p className="cta__lead">Book a 30-minute product demo. We'll walk you through the one that fits your use case, answer technical questions, and give you a fixed deployment quote.</p>
          <div className="cta__btns">
            <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book a product demo</a>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free demo</span><span><span className="g">●</span> Fixed price + timeline</span><span><span className="g">●</span> You own the source code</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">products.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
