import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Remote Software Engineering Careers | Digital Web Weaver" },
  description: "Join a senior engineering studio, not a ticket factory. Remote-first, async-first, senior-only team building real systems with real ownership. 5 open roles.",
  alternates: { canonical: "/careers/" },
  openGraph: { title: "Remote Software Engineering Careers | Digital Web Weaver", description: "Join a senior engineering studio, not a ticket factory. Remote-first, async-first, senior-only team building real systems with real ownership. 5 open roles.", url: "/careers/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-culture" data-target="s-culture" title="Culture">⚙</button>
      <button className="activitybar__btn" data-scroll="s-roles" data-target="s-roles" title="Open roles">◈</button>
      <button className="activitybar__btn" data-scroll="s-process" data-target="s-process" title="Hiring process">❯</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="Remote-first · India HQ">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> careers.tsx</button>
        <button className="tab" data-scroll="s-culture" data-target="s-culture"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> culture.ts</button>
        <button className="tab" data-scroll="s-roles" data-target="s-roles"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> roles.json</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// careers.tsx · remote-first · senior-only</p>
            <span className="badge">WE'RE HIRING</span>
            <h1 className="hero__h1">Build the future of <span className="pink">software</span> with&nbsp;<span className="teal">us</span></h1>
            <p className="hero__lead">We're a senior engineering studio — not a ticket factory. Everyone here works on real systems, with real responsibility, shipping software that matters.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-roles" data-scroll="s-roles">▶ View open roles</a>
              <a className="btn btn--ghost" href="#s-culture" data-scroll="s-culture">$ why --dww</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>Remote</b><span>-first, always</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>Async</b><span>-first work</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>Senior</b><span>engineers only</span></div>
            </div>
          </div>
          <div className="code">
            <div className="code__head"><span className="fn">hiring.ts</span><span className="mut">— our process</span></div>
            <div className="code__body">
              <span className="ln">1</span><span className="cmt">// no whiteboard algorithms. no trick questions.</span>
              <span className="ln">2</span><span className="kw">export const <span className="fnn">hiring</span> = &#123;</span>
              <span className="ln">3</span><span className="txt">  leetCode: <span className="num">false</span>,</span>
              <span className="ln">4</span><span className="txt">  takeHome: <span className="str">"paid · 4 hrs"</span>,</span>
              <span className="ln">5</span><span className="txt">  realWork: <span className="num">true</span>,</span>
              <span className="ln">6</span><span className="txt">  offerWithin: <span className="str">"5 days"</span>,</span>
              <span className="ln">7</span><span className="kw">&#125;;</span>
              <span className="ln">8</span><span className="cmt">// → clear comp · equity breakdown · start date</span>
              <span className="ln">9</span><span><span className="caret"></span></span>
            </div>
            <div className="code__foot"><span className="live"></span><span>Outcomes over attendance</span></div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>$1.5k</div><div className="lbl">LEARNING_BUDGET</div><div className="sub">▲ /year · courses &amp; books</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>$2k</div><div className="lbl">EQUIPMENT</div><div className="sub">▲ day-one hardware</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>4h</div><div className="lbl">CORE_OVERLAP</div><div className="sub">▲ flexible hours</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>5d</div><div className="lbl">OFFER_TIME</div><div className="sub">▲ intro call → offer</div></div>
        </section>

        <section id="s-culture" className="section reveal">
          <p className="eyebrow">const culture = [ <span className="c">// why people stay at Digital Web Weaver</span></p>
          <h2 className="title mono">High ownership, hard problems, craft as a first principle</h2>
          <div className="grid grid-3 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🔑 OWNERSHIP</div><div className="cap__title" style={{"marginTop":"10px"}}>Real ownership</div><p className="cap__body">You own the architecture and production systems, not just the Jira ticket.</p></div>
            <div className="cap cap--teal"><div className="eyebrow" style={{"color":"var(--teal)"}}>🏗 QUALITY</div><div className="cap__title" style={{"marginTop":"10px"}}>High-quality bar</div><p className="cap__body">We don't ship fast and fix later. Every system is documented, tested, and designed.</p></div>
            <div className="cap cap--green"><div className="eyebrow" style={{"color":"var(--green)"}}>🧩 CHALLENGE</div><div className="cap__title" style={{"marginTop":"10px"}}>Varied, hard problems</div><p className="cap__body">From LLM pipelines to embedded logistics systems — never the same problem twice.</p></div>
            <div className="cap cap--yellow"><div className="eyebrow" style={{"color":"var(--yellow)"}}>🎖 SENIORITY</div><div className="cap__title" style={{"marginTop":"10px"}}>A team of seniors</div><p className="cap__body">No huge junior pyramid below you — you work alongside people who've shipped before.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>⏱ ASYNC</div><div className="cap__title" style={{"marginTop":"10px"}}>Async-first work</div><p className="cap__body">No all-day standups. Outcomes over attendance.</p></div>
            <div className="cap cap--teal"><div className="eyebrow" style={{"color":"var(--teal)"}}>💰 PAY</div><div className="cap__title" style={{"marginTop":"10px"}}>Competitive pay</div><p className="cap__body">Market-leading salaries, benchmarked annually.</p></div>
          </div>
        </section>

        <section id="s-benefits" className="section reveal">
          <p className="eyebrow">// benefits.md</p>
          <h2 className="title mono">Everything you'd expect. Plus some things you won't.</h2>
          <ul className="check-list" style={{"maxWidth":"680px"}}>
            <li><span className="plus">+</span><span><b style={{"color":"var(--text)"}}>Remote-first</b> — work from anywhere.</span></li>
            <li><span className="plus">+</span><span><b style={{"color":"var(--text)"}}>Flexible hours</b> — core overlap of 4 hours for collaboration.</span></li>
            <li><span className="plus">+</span><span><b style={{"color":"var(--text)"}}>Health &amp; wellness</b> — comprehensive health insurance for you and your family.</span></li>
            <li><span className="plus">+</span><span><b style={{"color":"var(--text)"}}>Learning budget</b> — $1,500/year for courses, books, and conferences.</span></li>
            <li><span className="plus">+</span><span><b style={{"color":"var(--text)"}}>Equipment allowance</b> — $2,000 day-one hardware allowance.</span></li>
            <li><span className="plus">+</span><span><b style={{"color":"var(--text)"}}>Profit sharing</b> — annual profit-sharing distribution to all full-time employees.</span></li>
          </ul>
        </section>

        <section id="s-roles" className="section reveal">
          <p className="eyebrow">const openRoles = [ <span className="c">// we're hiring senior engineers</span></p>
          <h2 className="title mono">We're hiring senior engineers</h2>
          <p className="subtitle">No whiteboard algorithms. No trick questions. All roles are full-time and remote.</p>
          <div className="grid grid-3 stagger">
            <div className="price">
              <div className="price__head"><div className="price__kind" style={{"color":"var(--teal)"}}>FULL-TIME · REMOTE</div><div className="price__title">Senior Full-Stack Engineer</div><p className="price__body">React / Node — build and own production SaaS features end-to-end.</p><div className="price__amt"><b>5+ yrs</b><span>experience</span></div></div>
              <ul className="price__list"><li><span className="ok">✓</span><span>Full-time · remote</span></li><li><span className="ok">✓</span><span>React / Node.js</span></li><li><span className="ok">✓</span><span>End-to-end feature ownership</span></li></ul>
              <div className="price__foot"><a className="price__cta" href="mailto:info@digitalwebweaver.com?subject=Application%3A%20Senior%20Full-Stack%20Engineer" style={{"display":"block","textAlign":"center","background":"var(--pink)","color":"var(--bg)"}}>Apply ↗</a></div>
            </div>
            <div className="price">
              <div className="price__head"><div className="price__kind" style={{"color":"var(--pink)"}}>FULL-TIME · REMOTE</div><div className="price__title">Lead Backend Engineer</div><p className="price__body">Python / Django / FastAPI — design and build high-throughput API services.</p><div className="price__amt"><b>6+ yrs</b><span>experience</span></div></div>
              <ul className="price__list"><li><span className="ok">✓</span><span>Full-time · remote</span></li><li><span className="ok">✓</span><span>Python / Django / FastAPI</span></li><li><span className="ok">✓</span><span>High-throughput API design</span></li></ul>
              <div className="price__foot"><a className="price__cta btn--ghost" href="mailto:info@digitalwebweaver.com?subject=Application%3A%20Lead%20Backend%20Engineer" style={{"display":"block","textAlign":"center","color":"var(--text)"}}>Apply ↗</a></div>
            </div>
            <div className="price">
              <div className="price__head"><div className="price__kind" style={{"color":"var(--yellow)"}}>FULL-TIME · REMOTE</div><div className="price__title">Senior Mobile Engineer</div><p className="price__body">React Native — ship production mobile apps to iOS and Android.</p><div className="price__amt"><b>4+ yrs</b><span>experience</span></div></div>
              <ul className="price__list"><li><span className="ok">✓</span><span>Full-time · remote</span></li><li><span className="ok">✓</span><span>React Native</span></li><li><span className="ok">✓</span><span>iOS &amp; Android production apps</span></li></ul>
              <div className="price__foot"><a className="price__cta btn--ghost" href="mailto:info@digitalwebweaver.com?subject=Application%3A%20Senior%20Mobile%20Engineer" style={{"display":"block","textAlign":"center","color":"var(--text)"}}>Apply ↗</a></div>
            </div>
            <div className="price">
              <div className="price__head"><div className="price__kind" style={{"color":"var(--teal)"}}>FULL-TIME · REMOTE</div><div className="price__title">DevOps / Platform Engineer</div><p className="price__body">Build and maintain CI/CD pipelines and Kubernetes clusters.</p><div className="price__amt"><b>4+ yrs</b><span>experience</span></div></div>
              <ul className="price__list"><li><span className="ok">✓</span><span>Full-time · remote</span></li><li><span className="ok">✓</span><span>CI/CD · Kubernetes</span></li><li><span className="ok">✓</span><span>Platform &amp; infra ownership</span></li></ul>
              <div className="price__foot"><a className="price__cta btn--ghost" href="mailto:info@digitalwebweaver.com?subject=Application%3A%20DevOps%20%2F%20Platform%20Engineer" style={{"display":"block","textAlign":"center","color":"var(--text)"}}>Apply ↗</a></div>
            </div>
            <div className="price">
              <div className="price__head"><div className="price__kind" style={{"color":"var(--pink)"}}>FULL-TIME · REMOTE</div><div className="price__title">Product Designer</div><p className="price__body">Figma / Design Systems — design complex product interfaces from user research.</p><div className="price__amt"><b>3+ yrs</b><span>experience</span></div></div>
              <ul className="price__list"><li><span className="ok">✓</span><span>Full-time · remote</span></li><li><span className="ok">✓</span><span>Figma · design systems</span></li><li><span className="ok">✓</span><span>User research → interface design</span></li></ul>
              <div className="price__foot"><a className="price__cta btn--ghost" href="mailto:info@digitalwebweaver.com?subject=Application%3A%20Product%20Designer" style={{"display":"block","textAlign":"center","color":"var(--text)"}}>Apply ↗</a></div>
            </div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">DON'T SEE YOUR ROLE?</div>
            <div className="panel-note__row">
              <div><span className="plus">+</span><span>We're always open to hearing from strong senior engineers.</span></div>
            </div>
            <div style={{"marginTop":"16px"}}><a className="btn btn--ghost" href="mailto:info@digitalwebweaver.com?subject=General%20Application">Send a general application ↗</a></div>
          </div>
        </section>

        <section id="s-process" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>hiringProcess</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">No whiteboard algorithms. No trick questions.</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Intro call</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Take-home</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Team review</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Offer</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04 · ◷ 30 min</div><div className="pipe-detail__title">Intro call</div><p className="pipe-detail__body">A relaxed 30-minute conversation — we learn about you, you learn about us. No trick questions, no pressure.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>30-minute conversation</span></li><li><span className="ok">✓</span><span>We learn about you, you learn about us</span></li><li><span className="ok">✓</span><span>No trivia, no gotchas</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww hire --intro</div><div className="t2">✓ call scheduled  ✓ context shared  ✓ questions answered</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04 · ◷ 4 hrs</div><div className="pipe-detail__title">Paid take-home</div><p className="pipe-detail__body">A realistic problem drawn from our actual work — no LeetCode, no algorithm trivia. You're paid for your time regardless of outcome.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Realistic problem from real work</span></li><li><span className="ok">✓</span><span>Paid — 4 hours</span></li><li><span className="ok">✓</span><span>No LeetCode, no trivia</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww hire --take-home</div><div className="t2">✓ problem sent  ✓ 4h paid  ✓ submitted for review</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04 · ◷ 60 min</div><div className="pipe-detail__title">Team review</div><p className="pipe-detail__body">Walk the team through your solution and your thinking — a conversation about trade-offs, not a whiteboard interrogation.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Walk us through your solution</span></li><li><span className="ok">✓</span><span>Discuss trade-offs &amp; decisions</span></li><li><span className="ok">✓</span><span>Meet the team you'd work with</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww hire --review</div><div className="t2">✓ walkthrough complete  ✓ team feedback collected</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04 · ◷ within 5 days</div><div className="pipe-detail__title">Offer</div><p className="pipe-detail__body">Clear comp, equity breakdown, and a start date — no negotiation games, no radio silence.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Clear compensation breakdown</span></li><li><span className="ok">✓</span><span>Equity details, if applicable</span></li><li><span className="ok">✓</span><span>Offer within 5 days</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww hire --offer</div><div className="t2">✓ comp finalised  ✓ offer sent  ✓ start date set</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// careers.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Is Digital Web Weaver remote-first?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — remote-first with flexible hours and a 4-hour core overlap for collaboration. Work from anywhere.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you do whiteboard coding interviews?<span className="sign">[+]</span></button><div className="faq__a"><p>No. No whiteboard algorithms, no trick questions, no LeetCode. Instead you'll do a paid, 4-hour take-home based on a realistic problem from our actual work.</p></div></div>
            <div className="faq__item"><button className="faq__q">What's the hiring process?<span className="sign">[+]</span></button><div className="faq__a"><p>Intro call (30 min) → paid take-home (4 hrs) → team review (60 min) → offer within 5 days, with a clear comp and equity breakdown.</p></div></div>
            <div className="faq__item"><button className="faq__q">What benefits do you offer?<span className="sign">[+]</span></button><div className="faq__a"><p>Remote-first work, flexible hours, comprehensive health insurance, a $1,500/year learning budget, a $2,000 day-one equipment allowance, and annual profit sharing.</p></div></div>
            <div className="faq__item"><button className="faq__q">I don't see a role that fits — can I still apply?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — send a general application to info@digitalwebweaver.com. We're always open to hearing from strong senior engineers.</p></div></div>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./careers --apply<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Come build with us</h2>
          <p className="cta__lead">Real ownership, hard problems, and a team that treats craft as a first principle. Apply to an open role or send a general application.</p>
          <div className="cta__btns">
            <a className="btn btn--primary" href="mailto:info@digitalwebweaver.com?subject=General%20Application">▶ Send a general application</a>
            <Link className="btn btn--ghost" href="/about/">About the studio</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Remote-first</span><span><span className="g">●</span> Async-first</span><span><span className="g">●</span> Senior-only team</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">careers.tsx</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
