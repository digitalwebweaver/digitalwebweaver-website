import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import CostEstimatorTool from "@/components/CostEstimatorTool";

export const metadata = {
  title: { absolute: "Free Software & App Cost Estimator | Digital Web Weaver" },
  description: "Answer a few quick questions and get an instant ballpark for your website, app, or software project — in your own currency. No sign-up required.",
  alternates: { canonical: "/cost-estimator/" },
  openGraph: { title: "Free Software & App Cost Estimator | Digital Web Weaver", description: "Answer a few quick questions and get an instant ballpark for your website, app, or software project — in your own currency. No sign-up required.", url: "/cost-estimator/", type: "website" },
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-tool" data-target="s-tool" title="Estimator">$</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · South Africa">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{ color: "var(--teal)" }}>●</span> cost-estimator.ts</button>
        <button className="tab" data-scroll="s-tool" data-target="s-tool"><span className="tdot" style={{ color: "var(--yellow)" }}>●</span> estimate.calc</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{ color: "var(--green)" }}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section reveal">
          <p className="hero__meta">// cost-estimator.ts · instant ballpark · no sign-up</p>
          <span className="badge">FREE INSTANT ESTIMATE</span>
          <h1 className="hero__h1">What will your <span className="pink">project</span> <span className="teal">cost</span>?</h1>
          <p className="hero__lead">Answer a few quick questions and get an instant ballpark — in your own currency. No sign-up to see the number; get a free consultation and a wireframe of your idea when you're ready.</p>
        </section>

        <section id="s-tool" className="section reveal">
          <CostEstimatorTool />
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// pricing questions, answered</p>
          <h2 className="title mono">Pricing questions, answered</h2>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">How much does it cost to build a website or app?<span className="sign">[+]</span></button><div className="faq__a"><p>A business website typically starts around ₹19,999, while web apps, custom software, and SaaS platforms range from ₹49,999 to ₹15,00,000+ depending on scope, features, and design.</p></div></div>
            <div className="faq__item"><button className="faq__q">How accurate is this estimate?<span className="sign">[+]</span></button><div className="faq__a"><p>It's an indicative range based on your selections (project type, size, features, design, and timeline). Your exact, fixed quote comes after a short, free consultation where we understand the full scope.</p></div></div>
            <div className="faq__item"><button className="faq__q">What's included in the price?<span className="sign">[+]</span></button><div className="faq__a"><p>Clean custom code, a fast mobile-first build, SEO and analytics setup, testing, and full source-code ownership handed to you. We're a senior team — projects are built to last and scale.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you work with international clients?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. We work with clients across India, the UK, South Africa, the US, and West Africa. The estimate above is shown in your local currency, converted from our INR pricing at indicative rates.</p></div></div>
            <div className="faq__item"><button className="faq__q">What do I get after submitting?<span className="sign">[+]</span></button><div className="faq__a"><p>A free consultation plus a wireframe of your idea, and a clear fixed quote — usually within 24 hours.</p></div></div>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --free-consultation<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Get a free consultation + a wireframe of your idea</h2>
          <p className="cta__lead">No commitment required. We'll turn your ballpark estimate into a clear, fixed quote.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Start a project</Link>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free</span><span><span className="g">●</span> 24-hour response</span><span><span className="g">●</span> NDA on request</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">cost-estimator.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
