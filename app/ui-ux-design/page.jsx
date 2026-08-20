import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "UI/UX Design Company India | Figma & Product Design Experts — Digital Web Weaver" },
  description: "UI/UX design grounded in user research and business goals — wireframes, prototypes, design systems, and developer handoffs. WCAG 2.1 AA, 95+ usability score, 150+ clients.",
  alternates: { canonical: "/ui-ux-design/" },
  openGraph: { title: "UI/UX Design Company India | Figma & Product Design Experts — Digital Web Weaver", description: "UI/UX design grounded in user research and business goals — wireframes, prototypes, design systems, and developer handoffs. WCAG 2.1 AA, 95+ usability score, 150+ clients.", url: "/ui-ux-design/", type: "website" }
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
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{color:"var(--teal)"}}>●</span> ui-ux-design.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{color:"var(--yellow)"}}>●</span> services.ts</button>
        <button className="tab" data-scroll="s-work" data-target="s-work"><span className="tdot" style={{color:"var(--pink)"}}>●</span> work.json</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{color:"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// ui-ux-design.ts · Figma · design systems · prototyping</p>
            <span className="badge">UI/UX DESIGN</span>
            <h1 className="hero__h1">UI/UX design <span className="pink">users love</span> — and <span className="teal">businesses can measure</span></h1>
            <p className="hero__lead">We design interfaces grounded in user research and business goals — from wireframes and prototypes to full design systems and developer handoffs.</p>
            <div className="btn-row" style={{marginTop:"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Book free design review</a>
              <a className="btn btn--ghost" href="#s-work" data-scroll="s-work">$ view --work</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{color:"var(--pink)"}}>95+</b><span>usability score</span></div>
              <div className="hero__stat"><b style={{color:"var(--teal)"}}>AA</b><span>WCAG 2.1 accessible</span></div>
              <div className="hero__stat"><b style={{color:"var(--yellow)"}}>150+</b><span>clients trust us</span></div>
            </div>
            <div className="trust">
              <div className="trust__label">CAPABILITIES</div>
              <div className="trust__row"><span className="trust__chip">User research</span><span className="trust__chip">Figma</span><span className="trust__chip">Design systems</span><span className="trust__chip">Prototyping</span><span className="trust__chip">Accessibility (WCAG)</span><span className="trust__chip">A/B testing</span></div>
            </div>
          </div>
          <div className="formcard" id="estimate">
            <div className="code__head"><span className="dot dot--red" style={{width:"8px",height:"8px"}}></span><span className="fn">estimate.form</span><span className="mut">— free</span></div>
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
          <div className="stat-cell"><div className="big" style={{color:"var(--pink)"}}>95+</div><div className="lbl">USABILITY_SCORE</div><div className="sub">▲ average across projects</div></div>
          <div className="stat-cell"><div className="big" style={{color:"var(--teal)"}}>AA</div><div className="lbl">WCAG_2.1</div><div className="sub">▲ accessible by default</div></div>
          <div className="stat-cell"><div className="big" style={{color:"var(--yellow)"}}>Figma</div><div className="lbl">DELIVERED</div><div className="sub">▲ dev-mode handoff, always</div></div>
          <div className="stat-cell"><div className="big" style={{color:"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// what we design</span></p>
          <h2 className="title mono">UI/UX design services</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">🔍 UX research</div><p className="svc__body">User interviews, persona creation, and journey mapping — evidence before pixels.</p><div className="svc__foot"><span>research.md</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">🗺️ Information architecture</div><p className="svc__body">Site maps, user flows, and navigation structure that make a product easy to learn.</p><div className="svc__foot"><span>ia.md</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">✏️ Wireframing</div><p className="svc__body">Low and mid-fidelity wireframes for rapid concept validation before visual polish.</p><div className="svc__foot"><span>wireframe.fig</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">🎨 Visual design</div><p className="svc__body">High-fidelity UI with brand-aligned design tokens, built to scale across screens.</p><div className="svc__foot"><span>visual.fig</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">🖱️ Interactive prototypes</div><p className="svc__body">Clickable Figma prototypes for stakeholder sign-off and real user testing.</p><div className="svc__foot"><span>prototype.fig</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">📖 Design systems</div><p className="svc__body">Component libraries, Storybook documentation, and design-to-code handoff.</p><div className="svc__foot"><span>system.fig</span></div></div>
          </div>
        </section>

        <section id="s-capabilities" className="section reveal">
          <p className="eyebrow">// design depth — not just mockups</p>
          <h2 className="title mono">Design capabilities</h2>
          <div className="grid grid-3">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="3"></circle><circle cx="15" cy="7" r="3"></circle><circle cx="9" cy="13" r="3"></circle><circle cx="9" cy="19" r="3"></circle></svg><span className="cap__title">Figma expertise</span></div><p className="cap__body">Components, variants, auto-layout, and dev-mode handoff done properly.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="1.6"></circle><path d="M5 8h14M12 8v5m0 0l-3 6m3-6l3 6"></path></svg><span className="cap__title">Accessibility (a11y)</span></div><p className="cap__body">WCAG 2.1 AA audit, ARIA patterns, and keyboard navigation baked into every file.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="14" height="10" rx="1"></rect><rect x="17" y="9" width="5" height="9" rx="1"></rect></svg><span className="cap__title">Responsive design</span></div><p className="cap__body">Mobile-first layouts that scale cleanly up to widescreen, never the reverse.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L4 14h6l-1 8 9-12h-6z"></path></svg><span className="cap__title">Micro-interactions</span></div><p className="cap__body">Lottie animations and motion design that guide users, not distract them.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M8 12l3 3 5-6"></path></svg><span className="cap__title">Usability testing</span></div><p className="cap__body">Moderated and unmoderated tests with Maze or Useberry, before code is written.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"></path></svg><span className="cap__title">Analytics-informed</span></div><p className="cap__body">Heatmaps, session recordings, and conversion data drive every design decision.</p></div>
          </div>
        </section>

        <section id="s-stack" className="section reveal">
          <p className="eyebrow">import &#123; tools &#125; from "@dww/design" <span className="c">// the design toolkit</span></p>
          <h2 className="title mono">Design tools we use</h2>
          <div className="stack-tabs" data-stack>
            <button className="stack-tab" data-cat="Design">Design <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Research">Research <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Collaboration">Collaboration <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Handoff">Handoff <span className="n">[4]</span></button>
          </div>
          <div className="stack-grid">
            <div className="stack-cell" data-cat="Design"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--pink)"}}>Fi</span><div className="stack-cell__name">Figma</div><div className="stack-cell__cat">Design</div></div>
            <div className="stack-cell" data-cat="Design"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--teal)"}}>Fj</span><div className="stack-cell__name">FigJam</div><div className="stack-cell__cat">Design</div></div>
            <div className="stack-cell" data-cat="Design"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--yellow)"}}>Sb</span><div className="stack-cell__name">Storybook</div><div className="stack-cell__cat">Design</div></div>
            <div className="stack-cell" data-cat="Design"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--text)"}}>Fr</span><div className="stack-cell__name">Framer</div><div className="stack-cell__cat">Design</div></div>
            <div className="stack-cell" data-cat="Research"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--green)"}}>Mz</span><div className="stack-cell__name">Maze</div><div className="stack-cell__cat">Research</div></div>
            <div className="stack-cell" data-cat="Research"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--yellow)"}}>Hj</span><div className="stack-cell__name">Hotjar</div><div className="stack-cell__cat">Research</div></div>
            <div className="stack-cell" data-cat="Research"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--teal)"}}>Fs</span><div className="stack-cell__name">FullStory</div><div className="stack-cell__cat">Research</div></div>
            <div className="stack-cell" data-cat="Research"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--pink)"}}>Ui</span><div className="stack-cell__name">User Interviews</div><div className="stack-cell__cat">Research</div></div>
            <div className="stack-cell" data-cat="Collaboration"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--text)"}}>No</span><div className="stack-cell__name">Notion</div><div className="stack-cell__cat">Collaboration</div></div>
            <div className="stack-cell" data-cat="Collaboration"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--pink)"}}>Li</span><div className="stack-cell__name">Linear</div><div className="stack-cell__cat">Collaboration</div></div>
            <div className="stack-cell" data-cat="Collaboration"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--teal)"}}>Lo</span><div className="stack-cell__name">Loom</div><div className="stack-cell__cat">Collaboration</div></div>
            <div className="stack-cell" data-cat="Collaboration"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"#61dafb"}}>Sl</span><div className="stack-cell__name">Slack</div><div className="stack-cell__cat">Collaboration</div></div>
            <div className="stack-cell" data-cat="Handoff"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--pink)"}}>Dm</span><div className="stack-cell__name">Figma Dev Mode</div><div className="stack-cell__cat">Handoff</div></div>
            <div className="stack-cell" data-cat="Handoff"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--yellow)"}}>Ze</span><div className="stack-cell__name">Zeplin</div><div className="stack-cell__cat">Handoff</div></div>
            <div className="stack-cell" data-cat="Handoff"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--teal)"}}>Sn</span><div className="stack-cell__name">Supernova</div><div className="stack-cell__cat">Handoff</div></div>
            <div className="stack-cell" data-cat="Handoff"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{color:"var(--green)"}}>Sb</span><div className="stack-cell__name">Storybook</div><div className="stack-cell__cat">Handoff</div></div>
          </div>
        </section>

        <section id="s-process" className="section reveal">
          <p className="eyebrow">function <span style={{color:"var(--text)"}}>designProcess</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">Design process</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Research &amp; discovery</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Information architecture</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Design sprints</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Developer handoff</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04 · ◷ 1 week</div><div className="pipe-detail__title">Research &amp; discovery</div><p className="pipe-detail__body">User interviews, competitor analysis, and a heuristic audit — evidence, not aesthetics, decides what to keep, fix, and cut.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>User interviews &amp; personas</span></li><li><span className="ok">✓</span><span>Competitor &amp; heuristic audit</span></li><li><span className="ok">✓</span><span>Itemised estimate within 24h</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww research --users</div><div className="t2">✓ interviews complete  ✓ audit shipped  ✓ estimate sent</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04 · ◷ 1 week</div><div className="pipe-detail__title">Information architecture</div><p className="pipe-detail__body">Flows, sitemaps, and content hierarchy — the structural skeleton signed off before any screen is drawn.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>User flows &amp; sitemaps</span></li><li><span className="ok">✓</span><span>Content hierarchy defined</span></li><li><span className="ok">✓</span><span>Navigation structure signed off</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww design --ia</div><div className="t2">✓ flows mapped  ✓ sitemap approved  ✓ nav signed off</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04 · ◷ 2–4 weeks</div><div className="pipe-detail__title">Design sprints</div><p className="pipe-detail__body">Wireframes → feedback → hi-fi screens → prototype → test — with real users completing tasks before development starts.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Hi-fi screens &amp; clickable prototype</span></li><li><span className="ok">✓</span><span>Moderated usability testing</span></li><li><span className="ok">✓</span><span>Stakeholder review each sprint</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww test --prototype</div><div className="t2">✓ prototype tested  ✓ feedback incorporated  ✓ hi-fi approved</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04 · ◷ handoff week</div><div className="pipe-detail__title">Developer handoff</div><p className="pipe-detail__body">Figma dev mode, design tokens, and spec documentation — files developers can actually build from.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Figma dev-mode handoff</span></li><li><span className="ok">✓</span><span>Design tokens documented</span></li><li><span className="ok">✓</span><span>Spec documentation delivered</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww handoff --dev</div><div className="t2">✓ tokens exported  ✓ dev mode live  ✓ specs delivered</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">WHAT_YOU_GET</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Figma design source files</span></div><div><span className="plus">+</span><span>Clean, documented codebase</span></div><div><span className="plus">+</span><span>CI/CD pipeline</span></div><div><span className="plus">+</span><span>SEO &amp; analytics setup</span></div><div><span className="plus">+</span><span>Performance report</span></div></div>
          </div>
        </section>

        <section id="s-work" className="section reveal">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"20px",flexWrap:"wrap"}}>
            <div><p className="eyebrow">// selected design work — systems we've built</p><h2 className="title mono">Systems we've designed</h2></div>
            <Link className="mono" href="/portfolio/" style={{fontSize:"13px",whiteSpace:"nowrap"}}>view all ↗</Link>
          </div>
          <div className="grid grid-3 stagger">
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">app.lendwise.in</span></div><div className="work__pad"><div className="work__tag">FINTECH · SAAS REDESIGN</div><div className="work__title">Loan management platform redesign</div><p className="work__desc">Complete UX overhaul of a complex multi-role platform serving loan officers, applicants, and admins — reduced average task completion time by 45%.</p><div className="work__metrics"><div className="work__mcell"><b>45%</b><span>task time cut</span></div><div className="work__mcell"><b>3</b><span>user roles covered</span></div></div><div className="work__stack"><span className="tag tag--y">Figma</span><span className="tag tag--y">React</span><span className="tag tag--y">Design system</span></div></div></div>
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">care.telavo.health</span></div><div className="work__pad"><div className="work__tag">HEALTHTECH · NEW PRODUCT</div><div className="work__title">Telemedicine patient app</div><p className="work__desc">Full UX research and design for a HIPAA-compliant telemedicine app — tested with 30 real patients before development started.</p><div className="work__metrics"><div className="work__mcell"><b>30</b><span>patients tested</span></div><div className="work__mcell"><b>Zero</b><span>post-launch UX changes</span></div></div><div className="work__stack"><span className="tag tag--y">Figma</span><span className="tag tag--y">Flutter</span><span className="tag tag--y">Prototypes</span></div></div></div>
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">shop.d2c-brand.com</span></div><div className="work__pad"><div className="work__tag">E-COMMERCE · DESIGN SYSTEM</div><div className="work__title">D2C brand design system</div><p className="work__desc">Built a shared design system for a D2C brand spanning their web store, mobile app, and marketing site — full responsive and dark-mode support.</p><div className="work__metrics"><div className="work__mcell"><b>200+</b><span>components built</span></div><div className="work__mcell"><b>3</b><span>platforms covered</span></div></div><div className="work__stack"><span className="tag tag--y">Figma</span><span className="tag tag--y">Design tokens</span><span className="tag tag--y">Storybook</span></div></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// why DWW for UI/UX</p>
          <h2 className="title mono">Design that ships, not design debt</h2>
          <div className="grid grid-4 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{color:"var(--pink)"}}>📊 DATA</div><div className="cap__title" style={{marginTop:"10px"}}>Data-driven design</div><p className="cap__body">Every design decision is backed by user research or analytics data, not opinion.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{color:"var(--pink)"}}>♿ OPEN</div><div className="cap__title" style={{marginTop:"10px"}}>Accessible first</div><p className="cap__body">WCAG 2.1 AA compliance woven into every design file, from the first wireframe.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{color:"var(--pink)"}}>🔗 SHIPPABLE</div><div className="cap__title" style={{marginTop:"10px"}}>Dev-ready handoff</div><p className="cap__body">Figma files that developers can actually build from — no design debt after handoff.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{color:"var(--pink)"}}>📱 MOBILE</div><div className="cap__title" style={{marginTop:"10px"}}>Mobile-first</div><p className="cap__body">Every design starts mobile and scales up, never the reverse.</p></div>
          </div>
          <div className="panel-note" style={{background:"var(--panel)"}}><p style={{fontSize:"16px",color:"var(--text-2)",lineHeight:"1.65",maxWidth:"960px"}}>Choosing a UI/UX design company in India usually comes down to one worry: will the polished Figma file survive contact with real engineering, or will developers quietly rebuild it from scratch? Our differentiator is plain — we implement our own designs. From our base in Vadodara, delivering to clients across India, the UK, South Africa, and Ivory Coast, the same team that runs user research and builds the design system also writes the code, so nothing gets lost in a handoff.</p></div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// client words — UI/UX work</p>
          <div className="grid grid-3 stagger">
            <div className="quote"><div className="stars">★★★★★</div><p>They interviewed 15 of our users before touching Figma. The resulting design solved problems we didn't even know we had. Our support tickets dropped 30% after launch.</p><div className="quote__who"><div className="quote__avatar">NP</div><div><div className="quote__name">Nisha P.</div><div className="quote__role">Product Manager · HR SaaS · India</div></div></div></div>
            <div className="quote"><div className="stars">★★★★★</div><p>The design system they built saved us 40% of developer time on our next three features. Every team member knows exactly which component to use and why.</p><div className="quote__who"><div className="quote__avatar">MW</div><div><div className="quote__name">Mark W.</div><div className="quote__role">Head of Engineering · E-commerce · UK</div></div></div></div>
            <div className="quote"><div className="stars">★★★★★</div><p>What surprised me was how closely the final product matched the Figma designs. Usually there's always "design debt". Not with these guys — they built what they designed.</p><div className="quote__who"><div className="quote__avatar">AS</div><div><div className="quote__name">Ameera S.</div><div className="quote__role">CTO · HealthTech · India</div></div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// ui-ux-design.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Can you redesign our existing product?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — we start with a heuristic audit and user research to identify what to keep, improve, and remove before designing anything new.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you build design systems?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — component libraries with tokens, documentation, and Storybook integration are a core offering.</p></div></div>
            <div className="faq__item"><button className="faq__q">How do you validate designs before development?<span className="sign">[+]</span></button><div className="faq__a"><p>Moderated usability tests with Maze or Useberry — real users complete tasks on the Figma prototype before a single line of code is written.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you work with our existing brand guidelines?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — we extend your brand guidelines into a full UI component system consistent with your visual identity.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-3">
            <Link className="svc" href="/web-development/"><div className="svc__title" style={{fontSize:"16px"}}>Web development</div><p className="svc__body" style={{fontSize:"13.5px"}}>We implement our own designs — design and development in one team.</p><div className="mono" style={{fontSize:"12px",color:"var(--pink)",marginTop:"12px"}}>open ↗</div></Link>
            <a className="svc" href="https://digitalwebweaver.com/web-application-development/"><div className="svc__title" style={{fontSize:"16px"}}>Web application development</div><p className="svc__body" style={{fontSize:"13.5px"}}>Complex web apps designed and engineered end-to-end.</p><div className="mono" style={{fontSize:"12px",color:"var(--pink)",marginTop:"12px"}}>open ↗</div></a>
            <Link className="svc" href="/saas-development/"><div className="svc__title" style={{fontSize:"16px"}}>SaaS development</div><p className="svc__body" style={{fontSize:"13.5px"}}>Product design for SaaS onboarding, dashboards, and growth flows.</p><div className="mono" style={{fontSize:"12px",color:"var(--pink)",marginTop:"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --design-review<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to build a product your users love?</h2>
          <p className="cta__lead">Free 45-minute design review. We'll identify your top UX issues and what it would take to fix them.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Book free design review</Link>
            <Link className="btn btn--ghost" href="/portfolio/">See our work</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Research-led design</span><span><span className="g">●</span> We implement our own designs</span><span><span className="g">●</span> Figma files included</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">ui-ux-design.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
