import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { caseStudySchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "NextSense LMS — Frontend Rebuild, QA & Security Audit Case Study | Digital Web Weaver" },
  description: "How Digital Web Weaver took NextSense's Learning Management System from static mockups to a production Vue 3 application — with a full QA audit and a security review of the admin backend.",
  keywords: ["LMS frontend rebuild case study", "Vue 3 development case study", "software QA audit case study"],
  alternates: { canonical: "/portfolio/nextsense/" },
  openGraph: { title: "NextSense LMS — Frontend Rebuild, QA & Security Audit Case Study | Digital Web Weaver", description: "How Digital Web Weaver took NextSense's Learning Management System from static mockups to a production Vue 3 application — with a full QA audit and a security review of the admin backend.", url: "/portfolio/nextsense/", type: "article" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={caseStudySchema({ headline: "NextSense LMS — Frontend Rebuild, Full-Stack QA & Security Audit", description: "How Digital Web Weaver took NextSense's Learning Management System from static mockups to a production Vue 3 application, with a full QA audit and a security review of the admin backend.", href: "/portfolio/nextsense/", datePublished: "2026-09-28", image: "/assets/nextsense-account-dashboard.png" })} />
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-challenge" data-target="s-challenge" title="The challenge">⚠</button>
      <button className="activitybar__btn" data-scroll="s-solution" data-target="s-solution" title="The approach">❯</button>
      <span className="activitybar__geo" title="Australia">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> nextsense.tsx</button>
        <button className="tab" data-scroll="s-challenge" data-target="s-challenge"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> challenge.md</button>
        <button className="tab" data-scroll="s-solution" data-target="s-solution"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> approach.md</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// nextsense.tsx · portfolio case study · EdTech / healthcare education</p>
            <span className="badge">CASE STUDY</span>
            <h1 className="hero__h1">From static mockups to a platform worth <span className="pink">trusting</span></h1>
            <p className="hero__lead">NextSense is an Australian organisation delivering cochlear implant, hearing and vision services alongside professional education for clinicians and educators. Digital Web Weaver took their Learning Management System from static design mockups to a production Vue 3 application — then ran a systematic QA and security audit that surfaced and fixed real, previously-invisible bugs and data-integrity gaps across the admin backend.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <Link className="btn btn--primary" href="/contact/">▶ Start a similar project</Link>
              <a className="btn btn--ghost" href="#s-solution" data-scroll="s-solution">$ see --the-approach</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>40+</b><span>admin controllers audited</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>90+</b><span>migrations reviewed</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>12+</b><span>bugs found &amp; fixed</span></div>
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>5</b><span>performance bugs caught before failure</span></div>
            </div>
          </div>
          <div className="code">
            <div className="code__head"><span className="fn">role-scope.json</span><span className="mut">— live</span></div>
            <div className="code__body">
              <span className="ln">1</span><span className="cmt">// NextSense LMS — role &amp; scope</span>
              <span className="ln">2</span><span className="kw">export const <span className="fnn">nextsense</span> = &#123;</span>
              <span className="ln">3</span><span className="txt">  frontend: <span className="str">"Vue 3, Vue Router 4, Pinia"</span>,</span>
              <span className="ln">4</span><span className="txt">  backend: <span className="str">"Laravel 10, MySQL, Sanctum"</span>,</span>
              <span className="ln">5</span><span className="txt">  qa: <span className="str">"Playwright, full-journey audits"</span>,</span>
              <span className="ln">6</span><span className="txt">  audit: <span className="str">"security + data integrity"</span>,</span>
              <span className="ln">7</span><span className="kw">&#125;;</span>
              <span className="ln">8</span><span><span className="caret"></span></span>
            </div>
            <div className="code__foot"><span className="live"></span><span>frontend, backend, QA &amp; security — full stack</span></div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>40+</div><div className="lbl">CONTROLLERS_AUDITED</div><div className="sub">▲ full admin backend review</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>90+</div><div className="lbl">MIGRATIONS_REVIEWED</div><div className="sub">▲ data-integrity audit</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>12+</div><div className="lbl">BUGS_FIXED</div><div className="sub">▲ across the full user journey</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>5</div><div className="lbl">LATENT_BUGS_CAUGHT</div><div className="sub">▲ before they could fail in production</div></div>
        </section>

        <section id="s-challenge" className="section reveal">
          <p className="eyebrow">// the challenge — what the brief actually asked for</p>
          <h2 className="title mono">Three questions, in order</h2>
          <p className="subtitle">The platform had two faces: a public course catalog and checkout flow that needed to match an approved design, and an internal admin panel — already in daily use by staff — that had accumulated years of incremental changes and untracked technical debt.</p>
          <div className="grid grid-3 stagger">
            <div className="cap" style={{"borderTop":"3px solid var(--red)"}}><div className="cap__title">Build it right</div><p className="cap__body">Turn static design mockups into a real, componentized Vue application without losing fidelity to the design or introducing subtle cross-page inconsistencies that static HTML hides until it's wired to real data.</p></div>
            <div className="cap" style={{"borderTop":"3px solid var(--red)"}}><div className="cap__title">Prove it works</div><p className="cap__body">Not just "the code compiles" — a genuine end-to-end audit: does every page render correctly, does every button do what it says, does checkout actually complete for a real user?</p></div>
            <div className="cap" style={{"borderTop":"3px solid var(--red)"}}><div className="cap__title">Make it safe to trust</div><p className="cap__body">Before treating the admin backend as production infrastructure, find out what happens under real scrutiny: bad data, concurrent use, and a security review.</p></div>
          </div>
        </section>

        <section id="s-solution" className="section reveal">
          <p className="eyebrow">// the approach — replacing assumptions with verification</p>
          <h2 className="title mono">Full-stack work, checked end to end</h2>
          <p className="subtitle">I worked across the full stack — converting the design into a componentized Vue 3 application, closing the gap between "looks right" and "works right" through systematic testing, and running a full audit of the Laravel backend that powers both the public site and the internal admin panel.</p>

          <div className="grid grid-2 stagger" style={{"marginTop":"28px"}}>
            <div className="shot">
              <div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">NextSense — public site</span></div>
              <img className="shot__img" src="/assets/nextsense-public-site.png" alt="NextSense's public homepage, an Australian organisation delivering cochlear implant, hearing and vision services alongside professional education" width="1908" height="953" loading="lazy" decoding="async" />
              <p className="shot__caption">NextSense delivers cochlear implant, hearing and vision services alongside professional education for clinicians — the platform this project rebuilt sits behind their public site.</p>
            </div>
            <div className="shot">
              <div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">Student Account Dashboard</span></div>
              <img className="shot__img" src="/assets/nextsense-account-dashboard.png" alt="The rebuilt NextSense student account dashboard, showing enrolled courses, certificates, and recent orders" width="1915" height="948" loading="lazy" decoding="async" />
              <p className="shot__caption">The rebuilt student account dashboard — one of the areas covered by the full QA sweep across the entire student journey.</p>
            </div>
          </div>

          <div className="article" style={{"marginTop":"36px"}}>
            <h3>1. Design-to-code, with an architecture that survives contact with real content</h3>
            <p>The static mockups styled each page independently, which meant a shared component (navigation, footer, modals) could look perfect on the one page it was designed against and break silently on every other page that reused it. I established a standing rule — every shared component owns its own complete styling rather than inheriting from a specific page's CSS block — and rebuilt the shared layout components against it. This class of bug came up repeatedly early on; fixing the architecture instead of each individual symptom stopped it from recurring.</p>

            <h3>2. Systematic QA over spot-checking</h3>
            <p>Rather than testing pages one at a time as they were built, I ran full Playwright-driven sweeps across the entire student journey and the entire admin panel — every page, checking for console errors, failed network requests, broken images, and dead links. This surfaced real, previously-invisible issues, including:</p>
            <ul>
              <li>A session-state bug where a logged-in user could still be sent to the login page from the account menu.</li>
              <li>Course listings silently falling back to a placeholder image instead of showing the real thumbnail.</li>
              <li>A navigation dropdown rendering behind page content on one specific dashboard, caused by a legacy CSS rule from years earlier.</li>
              <li>Two "add material" admin workflows whose file-upload feature was completely non-functional in production — the API route had drifted out of sync with a method rename.</li>
            </ul>
            <p>Each fix was verified by reproducing the actual user flow, not just by reading the code that changed.</p>

            <h3>3. Performance and reliability under real data volume</h3>
            <p>One admin report — a purchase/order listing — was crashing with an opaque server error. I traced it to a query that eagerly loaded several nested relationships across the full table with no upper bound, which worked fine in development and exhausted PHP's memory limit against production-scale data. After fixing it, I used the same diagnostic pattern to proactively check the rest of the codebase and found four more queries with the identical latent issue — fixed before they had the chance to fail the same way in front of a user.</p>

            <h3>4. Turning "it feels broken" into a concrete fix</h3>
            <p>Users reported that actions like checkout and course registration "felt like nothing was happening," even though they were working correctly underneath. I audited every async action across the application and found the pattern: most gave no visual feedback beyond a barely-noticeable text change while a network request was in flight, so a normal 1–2 second wait read as a frozen page. I added consistent loading-state feedback across every one of these actions, closing a real trust gap without touching the underlying visual design.</p>

            <h3>5. A full security and data-integrity audit of the admin backend</h3>
            <p>Before treating the admin system as trustworthy infrastructure, I ran a systematic audit covering authentication coverage, credential handling, file-upload safety, data-referential integrity, and dead/duplicate code — verifying every finding against the running system rather than relying on a read-through alone. This surfaced issues across a full range of severity, from immediately fixable (hardcoded credentials in source, a debug statement left live in a production code path, PII-bearing log files about to be committed to version control) to structural (authentication coverage gaps needing a coordinated, planned fix).</p>
            <p>I fixed every issue that was safe to resolve immediately and produced a written, prioritized report for the rest — distinguishing clearly between "broken and needs fixing," "a real risk that needs a proper plan," and "fine to leave for now" — so the client has an honest, actionable picture rather than either false confidence or an unusable wall of findings.</p>

            <h3>Tech stack</h3>
            <table>
              <thead><tr><th>Layer</th><th>Technologies</th></tr></thead>
              <tbody>
                <tr><td>Frontend</td><td>Vue 3, Vue Router 4, Pinia, Bootstrap 5, SCSS</td></tr>
                <tr><td>Backend</td><td>Laravel 10, MySQL, Laravel Sanctum</td></tr>
                <tr><td>Admin tooling</td><td>jQuery DataTables (Bootstrap 5 integration)</td></tr>
                <tr><td>Testing &amp; QA</td><td>Playwright — automated browser testing, network/console auditing, visual verification</td></tr>
                <tr><td>Practices</td><td>Component-driven architecture, systematic audits over spot-fixes, written technical documentation</td></tr>
              </tbody>
            </table>

            <h3>Outcomes</h3>
            <ul>
              <li>A public course platform rebuilt from static design to a fully functional Vue application, with a documented component architecture to prevent the class of cross-page styling bug that would otherwise keep resurfacing.</li>
              <li>A dozen-plus concrete, previously-invisible bugs found and fixed across the full user journey — session handling, broken images, dead links, and a stacking-context bug affecting every page in the application.</li>
              <li>A production-crashing performance bug diagnosed to root cause and fixed, plus four latent instances of the same issue caught and resolved before they could fail the same way.</li>
              <li>Two admin workflows' file-upload features restored from silently non-functional to working.</li>
              <li>A consistent loading-state pattern applied across every async action, closing a real, user-reported "feels broken" trust gap.</li>
              <li>A full security and data-integrity audit of the admin backend, with immediate fixes applied to every safe-to-fix issue and a clear, prioritized, written remediation plan for the rest.</li>
            </ul>

            <blockquote>The common thread across this engagement was replacing assumptions with verification: instead of trusting that a component "should" look right on every page, checking it on every page; instead of guessing why a report crashed, reproducing it and reading the actual failure; instead of describing a security posture in the abstract, testing it against the running system and reporting exactly what was found.</blockquote>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --start-project<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Need someone to make sure it's actually production-ready?</h2>
          <p className="cta__lead">Design-to-code, full-journey QA, or a security and data-integrity audit of a system you already have — this is the standard we hold the work to, regardless of project size.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Start a project</Link>
            <Link className="btn btn--ghost" href="/portfolio/">$ view --more-work</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Fixed-price quotes</span><span><span className="g">●</span> Senior engineers only</span><span><span className="g">●</span> Full test coverage</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">nextsense.tsx</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
