import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Software Engineering Studio, India | Digital Web Weaver" },
  description: "Founded in 2013, Digital Web Weaver is a senior engineering studio of designers, engineers, and architects shipping production-grade software for founders and enterprises across 15 countries.",
  alternates: { canonical: "/about/" },
  openGraph: { title: "Software Engineering Studio, India | Digital Web Weaver", description: "Founded in 2013, Digital Web Weaver is a senior engineering studio of designers, engineers, and architects shipping production-grade software for founders and enterprises across 15 countries.", url: "/about/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-story" data-target="s-story" title="Our story">⚙</button>
      <button className="activitybar__btn" data-scroll="s-team" data-target="s-team" title="Team">◈</button>
      <button className="activitybar__btn" data-scroll="s-journey" data-target="s-journey" title="Journey">❯</button>
      <span className="activitybar__geo" title="Vadodara · UK · South Africa · Abidjan">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> about.tsx</button>
        <button className="tab" data-scroll="s-story" data-target="s-story"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> story.ts</button>
        <button className="tab" data-scroll="s-team" data-target="s-team"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> team.json</button>
        <button className="tab" data-scroll="s-journey" data-target="s-journey"><span className="tdot" style={{"color":"var(--green)"}}>●</span> journey.md</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// about.tsx · senior engineering studio · est. 2013</p>
            <span className="badge">ABOUT DIGITAL WEB WEAVER</span>
            <h1 className="hero__h1">We build software that actually <span className="pink">works</span> at <span className="teal">scale</span>.</h1>
            <p className="hero__lead">Founded in 2013, Digital Web Weaver is a senior engineering studio of designers, engineers, and architects who've spent over twelve years shipping production-grade software for founders and enterprises across 15 countries.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <Link className="btn btn--primary" href="/contact/">▶ Start a project</Link>
              <Link className="btn btn--ghost" href="/careers/">We're hiring</Link>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>8+</b><span>years building</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>200+</b><span>systems shipped</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>50+</b><span>expert engineers</span></div>
            </div>
          </div>
          <div className="code">
            <div className="code__head"><span className="fn">team.ts</span><span className="mut">— since 2013</span></div>
            <div className="code__body">
              <span className="ln">1</span><span className="kw">const <span className="fnn">team</span> = <span className="num">50+</span> engineers;</span>
              <span className="ln">2</span><span className="kw">const <span className="fnn">shipped</span> = <span className="num">200+</span> systems;</span>
              <span className="ln">3</span><span className="cmt">// since 2013, Vadodara → world</span>
              <span className="ln">4</span><span className="kw">export default <span className="fnn">craft</span>();</span>
              <span className="ln">5</span><span><span className="caret"></span></span>
            </div>
            <div className="code__foot"><span className="live"></span><span>Senior-only, since 2013</span></div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>15</div><div className="lbl">COUNTRIES_SERVED</div><div className="sub">▲ India · UK · Africa · beyond</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>90%</div><div className="lbl">CLIENT_RETENTION</div><div className="sub">▲ same teams return</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>2013</div><div className="lbl">EST._VADODARA</div><div className="sub">▲ senior team, no juniors</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>20%</div><div className="lbl">LEARNING_TIME</div><div className="sub">▲ weekly, for growth</div></div>
        </section>

        <section id="s-story" className="section reveal">
          <p className="eyebrow">// our-story.md <span className="c">// craft over shortcuts</span></p>
          <h2 className="title mono">Started with a belief — craft over shortcuts</h2>
          <p className="subtitle" style={{"maxWidth":"760px"}}>Digital Web Weaver began as a two-person partnership with a single operating rule: never ship code we wouldn't stake our own reputation on. Every client was a referral. Every project was over-delivered.</p>
          <p className="subtitle" style={{"maxWidth":"760px","marginTop":"14px"}}>Eight years on, that principle has never changed. We've grown to a senior team of fifty-plus engineers, designers, and architects. We work across mobile, cloud, AI, and enterprise — but we still take every engagement as if our name is on the line. Because it is.</p>
          <ul className="check-list" style={{"maxWidth":"680px"}}>
            <li><span className="plus">+</span><span>Senior-only team — no juniors hidden behind the contract</span></li>
            <li><span className="plus">+</span><span>Every project has a dedicated tech lead and full code ownership</span></li>
            <li><span className="plus">+</span><span>Transparent weekly progress — you always know where things stand</span></li>
            <li><span className="plus">+</span><span>90% of clients return for their next project</span></li>
          </ul>
          <div style={{"display":"flex","gap":"8px","flexWrap":"wrap","marginTop":"22px"}}>
            <span className="tag">SaaS experts</span><span className="tag">Cloud-native</span><span className="tag">AI-ready</span><span className="tag">Full-stack</span><span className="tag">Mobile</span>
          </div>
        </section>

        <section id="s-mission" className="section reveal">
          <p className="eyebrow">// mission.md <span className="c">// what drives us</span></p>
          <h2 className="title mono">Mission, vision &amp; values</h2>
          <div className="grid grid-2 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🎯 MISSION</div><div className="cap__title" style={{"marginTop":"10px"}}>Our mission</div><p className="cap__body">To make world-class software engineering accessible to every ambitious team — from a two-person startup to a global enterprise — without the overhead of a large consultancy.</p></div>
            <div className="cap cap--teal"><div className="eyebrow" style={{"color":"var(--teal)"}}>🔭 VISION</div><div className="cap__title" style={{"marginTop":"10px"}}>Our vision</div><p className="cap__body">A world where software is built with the same pride and permanence as great architecture — systems that outlast trends, scale without compromise, and earn the teams that rely on them.</p></div>
            <div className="cap cap--green"><div className="eyebrow" style={{"color":"var(--green)"}}>⚖ VALUES</div><div className="cap__title" style={{"marginTop":"10px"}}>Our values</div><p className="cap__body">Craft over shortcuts. Honesty over comfort. Ownership over excuses. We write code as if the next engineer who reads it is a senior we respect — because they probably are.</p></div>
            <div className="cap cap--yellow"><div className="eyebrow" style={{"color":"var(--yellow)"}}>👥 PEOPLE</div><div className="cap__title" style={{"marginTop":"10px"}}>Our people</div><p className="cap__body">Every engineer we hire has shipped production systems. No bootcamp hires on client projects. Our team reviews every engagement — which is why clients keep coming back.</p></div>
          </div>
        </section>

        <section id="s-team" className="section reveal">
          <p className="eyebrow">// team.json <span className="c">// senior engineers &amp; designers behind the work</span></p>
          <h2 className="title mono">Senior engineers &amp; designers behind the work</h2>
          <p className="subtitle">No junior engineers behind the curtain. Every person you work with has shipped in production.</p>
          <div className="grid grid-3 stagger">
            <div className="cap"><div style={{"display":"flex","alignItems":"center","gap":"13px"}}><div className="quote__avatar" style={{"background":"var(--pink)"}}>KA</div><div><div className="cap__title" style={{"fontSize":"16px"}}>Kamlesh</div><div className="mono" style={{"fontSize":"12px","color":"var(--muted-2)","marginTop":"2px"}}>CEO &amp; Founder</div></div></div><p className="cap__body">Founded Digital Web Weaver to bring senior-level engineering to businesses that deserve better than templated agencies. Leads strategy, client partnerships, and the studio's long-term vision.</p></div>
            <div className="cap"><div style={{"display":"flex","alignItems":"center","gap":"13px"}}><div className="quote__avatar" style={{"background":"var(--teal)"}}>AN</div><div><div className="cap__title" style={{"fontSize":"16px"}}>Aniket</div><div className="mono" style={{"fontSize":"12px","color":"var(--muted-2)","marginTop":"2px"}}>Full Stack Developer</div></div></div><p className="cap__body">Builds end-to-end web applications across the modern stack — comfortable owning a feature from database schema to polished UI, and shipping it without hand-holding.</p></div>
            <div className="cap"><div style={{"display":"flex","alignItems":"center","gap":"13px"}}><div className="quote__avatar" style={{"background":"var(--yellow)"}}>AJ</div><div><div className="cap__title" style={{"fontSize":"16px"}}>Ajay</div><div className="mono" style={{"fontSize":"12px","color":"var(--muted-2)","marginTop":"2px"}}>Full Stack Developer · Node.js</div></div></div><p className="cap__body">Node.js specialist focused on APIs, services, and backend architecture that stay fast and reliable as products scale from first users to high traffic.</p></div>
            <div className="cap"><div style={{"display":"flex","alignItems":"center","gap":"13px"}}><div className="quote__avatar" style={{"background":"var(--green)"}}>HA</div><div><div className="cap__title" style={{"fontSize":"16px"}}>Harsh</div><div className="mono" style={{"fontSize":"12px","color":"var(--muted-2)","marginTop":"2px"}}>Full Stack Developer · Laravel</div></div></div><p className="cap__body">Laravel and PHP backend engineer who builds clean, maintainable systems — from custom CRMs and ERPs to client portals that teams actually enjoy using.</p></div>
            <div className="cap"><div style={{"display":"flex","alignItems":"center","gap":"13px"}}><div className="quote__avatar" style={{"background":"var(--pink)"}}>SW</div><div><div className="cap__title" style={{"fontSize":"16px"}}>Swati</div><div className="mono" style={{"fontSize":"12px","color":"var(--muted-2)","marginTop":"2px"}}>Full Stack Developer · PHP</div></div></div><p className="cap__body">PHP full-stack developer covering both sides of the stack, turning project requirements into working software with an eye for detail and code that's easy to extend.</p></div>
            <div className="cap"><div style={{"display":"flex","alignItems":"center","gap":"13px"}}><div className="quote__avatar" style={{"background":"var(--teal)"}}>AR</div><div><div className="cap__title" style={{"fontSize":"16px"}}>Arvind</div><div className="mono" style={{"fontSize":"12px","color":"var(--muted-2)","marginTop":"2px"}}>Business Development Executive</div></div></div><p className="cap__body">First point of contact for new partnerships — understands a client's goals early and connects them with the right team and approach to get there.</p></div>
            <div className="cap"><div style={{"display":"flex","alignItems":"center","gap":"13px"}}><div className="quote__avatar" style={{"background":"var(--yellow)"}}>MA</div><div><div className="cap__title" style={{"fontSize":"16px"}}>Maxime</div><div className="mono" style={{"fontSize":"12px","color":"var(--muted-2)","marginTop":"2px"}}>Regional Sales</div></div></div><p className="cap__body">Builds and manages regional client relationships, helping businesses outside India navigate working with an offshore team smoothly and confidently.</p></div>
            <div className="cap"><div style={{"display":"flex","alignItems":"center","gap":"13px"}}><div className="quote__avatar" style={{"background":"var(--green)"}}>SA</div><div><div className="cap__title" style={{"fontSize":"16px"}}>Sanjita</div><div className="mono" style={{"fontSize":"12px","color":"var(--muted-2)","marginTop":"2px"}}>Business Operations</div></div></div><p className="cap__body">Keeps projects, timelines, and internal operations running smoothly behind the scenes, so engineering teams can focus on shipping quality work.</p></div>
            <div className="cap"><div style={{"display":"flex","alignItems":"center","gap":"13px"}}><div className="quote__avatar" style={{"background":"var(--pink)"}}>RA</div><div><div className="cap__title" style={{"fontSize":"16px"}}>Rahul</div><div className="mono" style={{"fontSize":"12px","color":"var(--muted-2)","marginTop":"2px"}}>Business Analyst</div></div></div><p className="cap__body">Bridges client requirements and engineering execution — turning business goals into clear specs that the development team can build against with confidence.</p></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">+ 10 MORE</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>10 more engineers, designers, and specialists across the team</span></div></div>
          </div>
        </section>

        <section id="s-culture" className="section reveal">
          <p className="eyebrow">// culture.md <span className="c">// how we work</span></p>
          <h2 className="title mono">A culture built on ownership and deep craft</h2>
          <p className="subtitle" style={{"maxWidth":"760px"}}>We don't have project managers chasing engineers for status updates. Everyone owns their work end-to-end — from architecture to deployment to post-launch monitoring.</p>
          <ul className="check-list" style={{"maxWidth":"680px"}}>
            <li><span className="plus">+</span><span>Asynchronous-first communication — documentation over meetings</span></li>
            <li><span className="plus">+</span><span>Code review on every PR — standards maintained, always</span></li>
            <li><span className="plus">+</span><span>20% time each week for learning and open-source contribution</span></li>
            <li><span className="plus">+</span><span>Remote-first, timezone-flexible with offices in India &amp; UK</span></li>
          </ul>
          <div style={{"display":"flex","gap":"8px","flexWrap":"wrap","marginTop":"22px"}}>
            <span className="tag">Remote-first</span><span className="tag">Code reviews</span><span className="tag">Async culture</span><span className="tag">Learning budget</span>
          </div>
        </section>

        <section id="s-journey" className="section reveal">
          <p className="eyebrow">// journey.md <span className="c">// eight years of focused work</span></p>
          <h2 className="title mono">Eight years of focused work</h2>
          <p className="subtitle">From a two-person team to a global studio — built one great project at a time.</p>
          <div className="gitlog">
            <div className="gitlog__commit">
              <span className="gitlog__dot"></span>
              <div className="gitlog__meta"><span className="gitlog__hash">a3f9c21</span><span className="gitlog__date">2013 · the beginning</span></div>
              <div className="gitlog__title">Two people, one rule</div>
              <p className="gitlog__body">Started as a freelance pair with a single principle: never ship code we wouldn't run ourselves. First 20 projects, all referred. Zero advertising.</p>
            </div>
            <div className="gitlog__commit">
              <span className="gitlog__dot"></span>
              <div className="gitlog__meta"><span className="gitlog__hash">7b2e841</span><span className="gitlog__date">2015 · first enterprise client</span></div>
              <div className="gitlog__title">Going beyond MVPs</div>
              <p className="gitlog__body">Landed our first enterprise engagement — a custom ERP for a mid-size manufacturer. Grew the team to six. Established the code review and architecture review processes we still use today.</p>
            </div>
            <div className="gitlog__commit">
              <span className="gitlog__dot"></span>
              <div className="gitlog__meta"><span className="gitlog__hash">e91d3f0</span><span className="gitlog__date">2017 · going full-stack</span></div>
              <div className="gitlog__title">A real studio</div>
              <p className="gitlog__body">Expanded to a senior team of designers and engineers serving clients across four continents. Team grew to fifteen. Moved into dedicated offices in Vadodara and London.</p>
            </div>
            <div className="gitlog__commit">
              <span className="gitlog__dot"></span>
              <div className="gitlog__meta"><span className="gitlog__hash">c4a8b62</span><span className="gitlog__date">2020 · SaaS &amp; AI focus</span></div>
              <div className="gitlog__title">Deeper, not wider</div>
              <p className="gitlog__body">Doubled down on product engineering. Shipped our 100th platform and our first AI features into production systems. Established specialist tracks for mobile, cloud, and AI/ML.</p>
            </div>
            <div className="gitlog__commit is-head">
              <span className="gitlog__dot"></span>
              <div className="gitlog__meta"><span className="gitlog__hash">HEAD</span><span className="gitlog__branch">main</span><span className="gitlog__date">2026 · today</span></div>
              <div className="gitlog__title">A global partner</div>
              <p className="gitlog__body">200+ systems shipped. 50+ engineers. 15 countries — with an active presence in South Africa, London, and Abidjan alongside our Vadodara base. A 90% client-retention rate and zero failed delivery timelines. Still growing — still senior-only.</p>
            </div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">THE_JOURNEY_SO_FAR</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>200+ systems shipped</span></div><div><span className="plus">+</span><span>15 countries served</span></div><div><span className="plus">+</span><span>90% client retention</span></div></div>
          </div>
        </section>

        <section id="s-recognition" className="section reveal">
          <p className="eyebrow">// recognition.md</p>
          <h2 className="title mono">Recognition</h2>
          <div className="mono" style={{ marginTop: "22px", display: "flex", alignItems: "center", flexWrap: "wrap", gap: 0, fontSize: "13px", color: "var(--text-2)", border: "1px solid var(--border)", borderRadius: "7px", overflow: "hidden" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "7px", background: "var(--yellow)", color: "#2b2205", fontWeight: 700, padding: "10px 16px" }}>★ 4.9/5 Clutch</span>
            <span style={{ padding: "10px 16px", borderRight: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "7px" }}><span style={{ color: "var(--teal)" }}>✓</span>ISO 27001 aligned</span>
            <span style={{ padding: "10px 16px", borderRight: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "7px" }}><span style={{ color: "var(--teal)" }}>✓</span>SOC 2 Type II</span>
            <span style={{ padding: "10px 16px", borderRight: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "7px" }}><span style={{ color: "var(--teal)" }}>✓</span>GDPR aligned</span>
            <span style={{ padding: "10px 16px", borderRight: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "7px" }}><span style={{ color: "var(--green)" }}>◆</span>Top 1% on Toptal</span>
            <span style={{ padding: "10px 16px", display: "flex", alignItems: "center", gap: "7px" }}><span style={{ color: "var(--green)" }}>◆</span>AWS Partner</span>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// client words</p>
          <h2 className="title mono">What our clients say about us</h2>
          <p className="subtitle">The same teams keep coming back — that's the metric we care about most.</p>
          <div className="grid grid-3 stagger">
            <div className="quote"><div className="stars">★★★★★</div><p>Digital Web Weaver delivered our platform on time and under budget. Their team understood our product better than we did — a truly professional partner.</p><div className="quote__who"><div className="quote__avatar">JE</div><div><div className="quote__name">James E.</div><div className="quote__role">CTO · SaaS scale-up</div></div></div></div>
            <div className="quote"><div className="stars">★★★★★</div><p>Our custom ERP cut operational overhead by 40%. The team was responsive and transparent throughout, and delivered exactly what was promised.</p><div className="quote__who"><div className="quote__avatar">SA</div><div><div className="quote__name">Sophie A.</div><div className="quote__role">Ops Director · Manufacturing</div></div></div></div>
            <div className="quote"><div className="stars">★★★★★</div><p>From an MVP to a fully scaled product in under twelve months. Their architectural decisions saved us from costly rebuilds — they think long-term.</p><div className="quote__who"><div className="quote__avatar">AM</div><div><div className="quote__name">Adnan M.</div><div className="quote__role">Founder · HealthTech</div></div></div></div>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./about --lets-build<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Let's build</h2>
          <p className="cta__lead">Ready to work with a team that actually delivers? Get a free technical consultation from a senior engineer — we'll map your problem and send a fixed estimate within 24 hours. No commitment required.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Start a project</Link>
            <Link className="btn btn--ghost" href="/careers/">We're hiring</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free consultation</span><span><span className="g">●</span> 24-hour response</span><span><span className="g">●</span> NDA signed first</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">about.tsx</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
