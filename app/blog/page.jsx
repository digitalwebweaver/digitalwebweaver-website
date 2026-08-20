import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Software Development Blog | Digital Web Weaver" },
  description: "Engineering notes, product thinking, and honest takes on building software — from the team that ships 200+ systems a year. Web development, ERP, SaaS, AI automation, and more.",
  alternates: { canonical: "/blog/" },
  openGraph: { title: "Software Development Blog | Digital Web Weaver", description: "Engineering notes, product thinking, and honest takes on building software — from the team that ships 200+ systems a year. Web development, ERP, SaaS, AI automation, and more.", url: "/blog/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-posts" data-target="s-posts" title="Posts">◈</button>
      <button className="activitybar__btn" data-scroll="s-contact" data-target="s-contact" title="Contact">$</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> blog.tsx</button>
        <button className="tab" data-scroll="s-posts" data-target="s-posts"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> posts.json</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section top">
          <p className="hero__meta">// blog.tsx · 11 posts · engineering notes</p>
          <span className="badge">BLOG</span>
          <h1 className="hero__h1">Ideas &amp; perspectives from our team</h1>
          <p className="hero__lead">Engineering notes, product thinking, and honest takes on building software — from the team that ships 200+ systems a year.</p>
        </section>

        <section id="s-posts" className="section reveal">
          <p className="eyebrow">const posts = [ <span className="c">// 11 posts, newest first</span></p>
          <h2 className="title mono">Latest posts</h2>
          <div className="grid grid-3 stagger">

            <Link className="work" href="/blog/from-fast-food-to-fine-dining-the-best-food-delivery-apps-in-south-africa/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">june 2026 · 11 min</span></div><div className="work__pad"><div className="work__tag">SOUTH AFRICA</div><div className="work__title">From Fast Food to Fine Dining: The Best Food Delivery Apps in South Africa</div><p className="work__desc">Uber Eats, Mr D Food, Bolt Food, Checkers Sixty60 — we compare South Africa's top food delivery apps on price, coverage, load shedding resilience, and rewards.</p><div className="work__view">Kamlesh Nishad → Read post ↗</div></div></Link>

            <Link className="work" href="/blog/website-cost-vadodara-2026/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">june 2026 · 5 min</span></div><div className="work__pad"><div className="work__tag">WEB DEVELOPMENT</div><div className="work__title">What Does a Website Actually Cost in Vadodara? A 2026 Reality Check</div><p className="work__desc">Confused by ₹8,000 to ₹8,00,000 website quotes in Vadodara? Here's an honest 2026 breakdown of what websites actually cost and what drives the price.</p><div className="work__view">Kamlesh Nishad → Read post ↗</div></div></Link>

            <Link className="work" href="/blog/hospital-clinic-software-vadodara/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">june 2026 · 4 min</span></div><div className="work__pad"><div className="work__tag">HEALTHCARE SOFTWARE</div><div className="work__title">Still Running Your Clinic on Paper Files? It's Costing You More Than You Think</div><p className="work__desc">Paper files and registers are quietly costing Vadodara clinics time and money. Here's how hospital management software fixes it — features, cost, and a free demo.</p><div className="work__view">Kamlesh Nishad → Read post ↗</div></div></Link>

            <Link className="work" href="/blog/choose-web-development-company-vadodara/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">june 2026 · 5 min</span></div><div className="work__pad"><div className="work__tag">WEB DEVELOPMENT</div><div className="work__title">How to Pick a Web Development Company in Vadodara Without Getting Burned</div><p className="work__desc">Dozens of web development companies in Vadodara, wildly different quotes. Here's how to choose the right one — the questions to ask and the red flags to run from.</p><div className="work__view">Kamlesh Nishad → Read post ↗</div></div></Link>

            <Link className="work" href="/blog/erp-software-gujarat-business/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">june 2026 · 5 min</span></div><div className="work__pad"><div className="work__tag">ERP &amp; CRM</div><div className="work__title">Your Business Outgrew Tally. Here's What an ERP Can Actually Do for It</div><p className="work__desc">Your business outgrew Tally and spreadsheets. Here's what ERP software really does for Gujarat SMEs, what it costs in 2026, and custom vs ready-made.</p><div className="work__view">Kamlesh Nishad → Read post ↗</div></div></Link>

            <Link className="work" href="/blog/mobile-app-development-vadodara/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">june 2026 · 5 min</span></div><div className="work__pad"><div className="work__tag">MOBILE APPS</div><div className="work__title">Thinking of Building an App in Vadodara? Here's What It Really Takes (and Costs)</div><p className="work__desc">Thinking of building a mobile app in Vadodara? Here's what the process really involves, what it costs in 2026, and how to avoid wasting your budget.</p><div className="work__view">Kamlesh Nishad → Read post ↗</div></div></Link>

            <Link className="work" href="/blog/school-management-software-gujarat/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">june 2026 · 4 min</span></div><div className="work__pad"><div className="work__tag">EDUCATION SOFTWARE</div><div className="work__title">Why Gujarat Schools Are Finally Ditching Registers for School Management Software</div><p className="work__desc">Attendance registers, paper report cards, fee chaos. Here's why Gujarat schools are switching to school management software — features, GSEB/CBSE fit, and cost.</p><div className="work__view">Kamlesh Nishad → Read post ↗</div></div></Link>

            <Link className="work" href="/blog/saas-development-india-guide/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">june 2026 · 5 min</span></div><div className="work__pad"><div className="work__tag">SAAS</div><div className="work__title">Got a SaaS Idea? Here's How to Build It in India Without Burning Your Budget</div><p className="work__desc">Have a SaaS idea? Here's how to build a SaaS product in India in 2026 — the real process, what it costs, MVP-first strategy, and mistakes that waste money.</p><div className="work__view">Kamlesh Nishad → Read post ↗</div></div></Link>

            <Link className="work" href="/blog/wordpress-vs-custom-website/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">june 2026 · 5 min</span></div><div className="work__pad"><div className="work__tag">WEB DEVELOPMENT</div><div className="work__title">WordPress or Custom-Built? The Honest Answer for Your Business Website</div><p className="work__desc">WordPress or a custom-coded website? Here's the honest comparison — cost, speed, security, and scale — so you pick the right one for your business in 2026.</p><div className="work__view">Kamlesh Nishad → Read post ↗</div></div></Link>

            <Link className="work" href="/blog/ai-automation-gujarat-sme/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">june 2026 · 5 min</span></div><div className="work__pad"><div className="work__tag">AI &amp; AUTOMATION</div><div className="work__title">AI Isn't Just for Big Tech: Practical Automation for Gujarat Businesses</div><p className="work__desc">AI automation isn't only for big companies. Here are practical, affordable ways Gujarat SMEs can use AI in 2026 to cut busywork and save real hours each week.</p><div className="work__view">Kamlesh Nishad → Read post ↗</div></div></Link>

            <Link className="work" href="/blog/crm-software-sales-teams-vadodara/"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">june 2026 · 5 min</span></div><div className="work__pad"><div className="work__tag">ERP &amp; CRM</div><div className="work__title">Losing Deals to Forgotten Follow-Ups? A CRM Might Be the Fix Your Sales Team Needs</div><p className="work__desc">If leads slip through the cracks and follow-ups get forgotten, a CRM is the fix. Here's what CRM software does for sales teams in Vadodara, and what it costs.</p><div className="work__view">Kamlesh Nishad → Read post ↗</div></div></Link>

          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./subscribe --updates<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Have a project in mind?</h2>
          <p className="cta__lead">Free scoping and a detailed estimate from senior engineers — within 24 hours. Tell us what you need and we'll scope it.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Get free estimate</Link>
            <Link className="btn btn--ghost" href="/portfolio/">$ view --work</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Senior engineers</span><span><span className="g">●</span> Fixed price</span><span><span className="g">●</span> You own the code</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">blog.tsx</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
