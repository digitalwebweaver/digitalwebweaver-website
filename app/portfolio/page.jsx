import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Portfolio & Case Studies | Digital Web Weaver" },
  description: "200+ systems built. Real results, real clients — ERP, SaaS, healthtech, logistics, and AI case studies from a senior engineering studio. From two-person startups to global enterprises.",
  alternates: { canonical: "/portfolio/" },
  openGraph: { title: "Portfolio & Case Studies | Digital Web Weaver", description: "200+ systems built. Real results, real clients — ERP, SaaS, healthtech, logistics, and AI case studies from a senior engineering studio. From two-person startups to global enterprises.", url: "/portfolio/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-work" data-target="s-work" title="Work">◈</button>
      <button className="activitybar__btn" data-scroll="s-industries" data-target="s-industries" title="Industries">❮❯</button>
      <button className="activitybar__btn" data-scroll="s-reviews" data-target="s-reviews" title="Reviews">★</button>
      <span className="activitybar__geo" title="India · UK · US · UAE · Australia">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> portfolio.tsx</button>
        <button className="tab" data-scroll="s-work" data-target="s-work"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> work.json</button>
        <button className="tab" data-scroll="s-industries" data-target="s-industries"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> industries.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// portfolio.tsx · 9 featured builds · production systems</p>
            <span className="badge">PORTFOLIO</span>
            <h1 className="hero__h1">Selected <span className="pink">work</span></h1>
            <p className="hero__lead">200+ systems built. Real results, real clients. From two-person startups to global enterprises — every system we ship is production-grade, documented, and built to last.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <Link className="btn btn--primary" href="/contact/">▶ Start a project</Link>
              <a className="btn btn--ghost" href="#s-work" data-scroll="s-work">$ view --work</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>200+</b><span>systems shipped</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>15</b><span>countries</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>98%</b><span>on-time delivery</span></div>
            </div>
          </div>
          <div className="code">
            <div className="code__head"><span className="fn">case-studies.json</span><span className="mut">— live</span></div>
            <div className="code__body">
              <span className="ln">1</span><span className="cmt">// selected work — verified client outcomes</span>
              <span className="ln">2</span><span className="kw">export const <span className="fnn">portfolio</span> = &#123;</span>
              <span className="ln">3</span><span className="txt">  systems_shipped: <span className="num">200</span>,</span>
              <span className="ln">4</span><span className="txt">  countries: <span className="num">15</span>,</span>
              <span className="ln">5</span><span className="txt">  industries: <span className="num">12</span>,</span>
              <span className="ln">6</span><span className="txt">  on_time_delivery: <span className="str">"98%"</span>,</span>
              <span className="ln">7</span><span className="kw">&#125;;</span>
              <span className="ln">8</span><span className="cmt">// → 9 case studies below</span>
              <span className="ln">9</span><span><span className="caret"></span></span>
            </div>
            <div className="code__foot"><span className="live"></span><span>9 case studies · all client-verified</span></div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>200+</div><div className="lbl">SYSTEMS_SHIPPED</div><div className="sub">▲ web · mobile · AI · ERP</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>15</div><div className="lbl">COUNTRIES</div><div className="sub">▲ IN · UK · US · UAE · AU</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>12+</div><div className="lbl">INDUSTRIES</div><div className="sub">▲ regulated · high-stakes</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>98%</div><div className="lbl">ON_TIME</div><div className="sub">▲ delivery record</div></div>
        </section>

        <section id="s-work" className="section reveal">
          <p className="eyebrow">const projects = [ <span className="c">// 9 featured case studies</span></p>
          <h2 className="title mono">Systems we've built</h2>
          <div className="grid grid-3 stagger">

            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">erp.manufacturiq.io</span></div><div className="work__pad"><div className="work__tag">MANUFACTURING · INDIA</div><div className="work__title">ManufacturIQ — Smart ERP</div><p className="work__desc">End-to-end ERP for a mid-size manufacturer. Replaced a 15-year-old legacy system with production scheduling, inventory, procurement, HR, and executive dashboards.</p><div className="work__metrics"><div className="work__mcell"><b>40%</b><span>cost reduction</span></div><div className="work__mcell"><b>3×</b><span>faster reports</span></div></div><div className="work__stack"><span className="tag tag--y">Laravel</span><span className="tag tag--y">Vue.js</span><span className="tag tag--y">MySQL</span><span className="tag tag--y">Docker</span></div></div></div>

            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.nextsense.edu.au</span></div><div className="work__pad"><div className="work__tag">EDTECH · AUSTRALIA</div><div className="work__title">Next Sense LMS Web</div><p className="work__desc">Nextsense Learning Management System — course delivery, scheduling, and dispatch workflows rebuilt as a single web app.</p><div className="work__metrics"><div className="work__mcell"><b>40%</b><span>dispatch time cut</span></div><div className="work__mcell"><b>3</b><span>core technologies</span></div></div><div className="work__stack"><span className="tag tag--y">React Native</span><span className="tag tag--y">Node.js</span><span className="tag tag--y">MongoDB</span></div></div></div>

            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">learn.eduplatform.co.uk</span></div><div className="work__pad"><div className="work__tag">SAAS · UK</div><div className="work__title">Learning Management System</div><p className="work__desc">Full LMS with live sessions, grade tracking, and compliance reporting. Serving 50k students across three regions with real-time video, assignments, and progress dashboards.</p><div className="work__metrics"><div className="work__mcell"><b>50k</b><span>students</span></div><div className="work__mcell"><b>3</b><span>regions</span></div></div><div className="work__stack"><span className="tag tag--y">Next.js</span><span className="tag tag--y">PostgreSQL</span><span className="tag tag--y">AWS</span></div></div></div>

            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.tripoperator.io</span></div><div className="work__pad"><div className="work__tag">LOGISTICS · INDIA</div><div className="work__title">Trip Operator</div><p className="work__desc">Trip operator web and mobile app for B2B cab vendors — dispatch, driver assignment, and trip tracking in one system.</p><div className="work__metrics"><div className="work__mcell"><b>98%</b><span>uptime</span></div><div className="work__mcell"><b>4</b><span>core technologies</span></div></div><div className="work__stack"><span className="tag tag--y">React</span><span className="tag tag--y">Python</span><span className="tag tag--y">PostgreSQL</span><span className="tag tag--y">AWS</span></div></div></div>

            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.propnest.ae</span></div><div className="work__pad"><div className="work__tag">CRM · UAE</div><div className="work__title">PropNest — Real Estate CRM</div><p className="work__desc">Custom CRM for a 500-agent real estate firm. Lead management, automated follow-ups, commission tracking, and a buyer portal that cut sales closure time by 60%.</p><div className="work__metrics"><div className="work__mcell"><b>500+</b><span>agents</span></div><div className="work__mcell"><b>60%</b><span>faster closure</span></div></div><div className="work__stack"><span className="tag tag--y">React</span><span className="tag tag--y">Node.js</span><span className="tag tag--y">PostgreSQL</span></div></div></div>

            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">pipeline.docai.dev</span></div><div className="work__pad"><div className="work__tag">AI · AUTOMATION · AUSTRALIA</div><div className="work__title">Document AI Pipeline</div><p className="work__desc">LLM-powered document processing system for an insurance firm. Extracts, classifies, and validates 10,000+ claims documents per day with 97% accuracy, replacing a 15-person manual team.</p><div className="work__metrics"><div className="work__mcell"><b>97%</b><span>accuracy</span></div><div className="work__mcell"><b>10k</b><span>docs / day</span></div></div><div className="work__stack"><span className="tag tag--y">Python</span><span className="tag tag--y">OpenAI</span><span className="tag tag--y">FastAPI</span><span className="tag tag--y">AWS</span></div></div></div>

            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">shop.headlesscommerce.io</span></div><div className="work__pad"><div className="work__tag">E-COMMERCE · UK</div><div className="work__title">Headless Commerce Platform</div><p className="work__desc">Full headless e-commerce rebuild for a fashion brand. Custom Shopify frontend, PIM integration, same-day inventory sync, and a 2.8× conversion rate improvement post-launch.</p><div className="work__metrics"><div className="work__mcell"><b>2.8×</b><span>conversion rate</span></div><div className="work__mcell"><b>99%</b><span>uptime</span></div></div><div className="work__stack"><span className="tag tag--y">Next.js</span><span className="tag tag--y">Shopify API</span><span className="tag tag--y">Node.js</span></div></div></div>

            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.telehealth.us</span></div><div className="work__pad"><div className="work__tag">HEALTHCARE · US</div><div className="work__title">Telemedicine Platform</div><p className="work__desc">HIPAA-compliant telehealth platform with video consultations, e-prescriptions, patient records, and appointment scheduling. Scaled to 8,000 consultations per month in year one.</p><div className="work__metrics"><div className="work__mcell"><b>8k</b><span>consults / month</span></div><div className="work__mcell"><b>HIPAA</b><span>compliant</span></div></div><div className="work__stack"><span className="tag tag--y">React</span><span className="tag tag--y">Node.js</span><span className="tag tag--y">AWS</span><span className="tag tag--y">WebRTC</span></div></div></div>

            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">erp.logicore.in</span></div><div className="work__pad"><div className="work__tag">LOGISTICS · INDIA</div><div className="work__title">LogiCore — Logistics ERP</div><p className="work__desc">Multi-branch ERP for a logistics company. Fleet management, route optimisation, driver payroll, fuel tracking, billing, and real-time delivery tracking for 1,200 daily trips.</p><div className="work__metrics"><div className="work__mcell"><b>25%</b><span>fuel savings</span></div><div className="work__mcell"><b>1,200</b><span>daily trips</span></div></div><div className="work__stack"><span className="tag tag--y">Node.js</span><span className="tag tag--y">React</span><span className="tag tag--y">PostgreSQL</span><span className="tag tag--y">AWS</span></div></div></div>

          </div>
        </section>

        <section id="s-industries" className="section reveal">
          <p className="eyebrow">// industries served — regulated, high-stakes sectors</p>
          <h2 className="title mono">Industry depth</h2>
          <p className="subtitle">Twelve years of shipping into regulated, high-stakes industries — domain expertise across sectors.</p>
          <div className="btn-row" style={{"marginTop":"22px","gap":"8px"}}>
            <span className="tag">E-commerce</span>
            <span className="tag">HealthTech</span>
            <span className="tag">FinTech</span>
            <span className="tag">EdTech</span>
            <span className="tag">Logistics</span>
            <span className="tag">Real estate</span>
            <span className="tag">Food &amp; retail</span>
            <span className="tag">Media &amp; SaaS</span>
            <span className="tag">Manufacturing</span>
            <span className="tag">Analytics</span>
            <span className="tag">AI &amp; ML</span>
            <span className="tag">Legal tech</span>
          </div>
        </section>

        <section id="s-reviews" className="section reveal">
          <p className="eyebrow">// client words — trusted by leaders worldwide</p>
          <h2 className="title mono">Client words</h2>
          <p className="subtitle">The same teams keep coming back — that's the metric we care about most.</p>
          <div className="grid grid-3 stagger">
            <div className="quote"><div className="stars">★★★★★</div><p>Digital Web Weaver delivered our platform on time and under budget. Their team understood our product better than we did — a truly professional partner.</p><div className="quote__who"><div className="quote__avatar">JE</div><div><div className="quote__name">James E.</div><div className="quote__role">CTO · SaaS scale-up · UK</div></div></div></div>
            <div className="quote"><div className="stars">★★★★★</div><p>Our custom ERP cut operational overhead by 40%. The team was responsive and transparent throughout, and delivered exactly what was promised.</p><div className="quote__who"><div className="quote__avatar">RS</div><div><div className="quote__name">Rajesh S.</div><div className="quote__role">COO · Precision Parts · India</div></div></div></div>
            <div className="quote"><div className="stars">★★★★★</div><p>From an MVP to a fully scaled product in under twelve months. Their architectural decisions saved us from costly rebuilds — they think long-term.</p><div className="quote__who"><div className="quote__avatar">AM</div><div><div className="quote__name">Adnan M.</div><div className="quote__role">Founder · HealthTech · UAE</div></div></div></div>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./portfolio --next-case-study<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to become our next case study?</h2>
          <p className="cta__lead">Get a free technical consultation and a detailed project estimate from our senior engineers — within 24 hours. No commitment required.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Start a project</Link>
            <Link className="btn btn--ghost" href="/about/">Meet the team</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free consultation</span><span><span className="g">●</span> 24-hour response</span><span><span className="g">●</span> NDA signed first</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">portfolio.tsx</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
