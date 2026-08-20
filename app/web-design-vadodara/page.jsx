import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Web Design Vadodara | Digital Web Weaver" },
  description: "Senior engineering studio headquartered in Vadodara — websites, e-commerce, mobile apps and custom web applications for Gujarat's manufacturers, retailers and startups. Free consultation, 24-hour response.",
  alternates: { canonical: "/web-design-vadodara/" },
  openGraph: { title: "Web Design Vadodara | Digital Web Weaver", description: "Senior engineering studio headquartered in Vadodara — websites, e-commerce, mobile apps and custom web applications for Gujarat's manufacturers, retailers and startups. Free consultation, 24-hour response.", url: "/web-design-vadodara/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-build" data-target="s-build" title="What we build">⚙</button>
      <button className="activitybar__btn" data-scroll="s-why" data-target="s-why" title="Why us">✓</button>
      <button className="activitybar__btn" data-scroll="s-about" data-target="s-about" title="Local details">◍</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="Vadodara · Gujarat">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> web-design-vadodara.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> services.ts</button>
        <button className="tab" data-scroll="s-about" data-target="s-about"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> local.md</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// web-design-vadodara.ts · Gujarat · MSME · manufacturers</p>
            <span className="badge">WEB DESIGN VADODARA</span>
            <h1 className="hero__h1">#1 Web design company in <span className="pink">Vadodara</span>, Gujarat</h1>
            <p className="hero__lead">We're a senior engineering studio headquartered in Vadodara — serving local businesses who want a real engineering partner, not a template shop. Our clients get the same quality we deliver to UK and US companies, at Vadodara pricing.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Book free consultation</a>
              <a className="btn btn--ghost" href="#s-build" data-scroll="s-build">↓ what we build</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>200+</b><span>projects delivered</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>12+</b><span>years based in Vadodara</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>12+</b><span>countries served</span></div>
            </div>
            <div className="trust">
              <div className="trust__label">TRUSTED BY VADODARA BUSINESSES</div>
              <div className="trust__row">
                <span className="trust__chip">Local MSME</span>
                <span className="trust__chip">Manufacturers</span>
                <span className="trust__chip">Retailers</span>
                <span className="trust__chip">Startups</span>
              </div>
            </div>
          </div>
          <div className="formcard" id="estimate">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">consult.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE CONSULTATION</p>
              <p className="form__title">Tell us about your business</p>
              <p className="form__lead">In-person at our Vadodara studio, or online — we'll scope your project and reply within 24 hours.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME *</label><input className="input" name="name" placeholder="Your name" required /></div>
                <div className="field"><label className="label">PHONE / WHATSAPP</label><input className="input" name="phone" type="tel" placeholder="+91 …" required /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">BUSINESS TYPE</label>
                <select className="select" name="businessType"><option>Manufacturer / industrial</option><option>Retail / e-commerce</option><option>Service business</option><option>Startup / app idea</option><option>Healthcare / clinic</option></select>
                </div>
                <div className="field"><label className="label">WHAT DO YOU NEED?</label>
                <select className="select" name="need"><option>New website</option><option>Website redesign</option><option>E-commerce store</option><option>Web / mobile app</option><option>Digital marketing site</option></select>
                </div>
              </div>
              <div className="field"><label className="label">TELL US ABOUT YOUR BUSINESS</label><textarea className="textarea" name="desc" rows="3" placeholder="What you sell, who your customers are, what you need online…"></textarea></div>
              <button className="form__submit" type="submit">Request free consultation ↗</button>
              <p className="form__micro">In-person or online · Free · 24-hour response</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww consult --submit</div>
              <div className="s1">✓ request received<br />✓ routed to a senior engineer<br />✓ consultation slot en route</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll reply within 24 hours.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// what we build</span></p>
          <h2 className="title mono">Everything a Vadodara business needs online</h2>
          <p className="subtitle">From a first business website to complex software products — we build it all, to a standard that's unusual for a local studio.</p>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Business websites</div><p className="svc__body">Fast, SEO-optimised company websites for local Vadodara businesses. Google-ready from day one, with a CMS your team can update without us.</p><div className="svc__tags"><span className="tag">SEO-first</span><span className="tag tag--y">CMS</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">E-commerce &amp; online stores</div><p className="svc__body">WooCommerce and Shopify stores for Gujarat retailers and manufacturers — with payment gateway integration (Razorpay, PayU), GST-compliant invoicing, and inventory management.</p><div className="svc__tags"><span className="tag">Razorpay</span><span className="tag tag--y">GST invoicing</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Mobile app development</div><p className="svc__body">Android and iOS apps for local startups, businesses, and field operations. React Native for cost-efficient cross-platform development from a single codebase.</p><div className="svc__tags"><span className="tag">Android</span><span className="tag tag--y">iOS</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Business web applications</div><p className="svc__body">Custom web apps for manufacturing, logistics, and service businesses — inventory management, dealer portals, employee management, and reporting dashboards.</p><div className="svc__tags"><span className="tag">Custom portals</span><span className="tag tag--y">Dashboards</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Website redesign</div><p className="svc__body">Is your current website outdated, slow, or getting no leads? We redesign with a focus on conversion — not just aesthetics. Free performance audit before we start.</p><div className="svc__tags"><span className="tag">CRO-focused</span><span className="tag tag--y">Performance</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">SEO &amp; digital growth</div><p className="svc__body">Technical SEO setup, structured data, site speed optimisation, and local SEO for Google Business — so your Vadodara business ranks when customers search.</p><div className="svc__tags"><span className="tag">Local SEO</span><span className="tag tag--y">Google Business</span></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// why choose us over other Vadodara agencies</p>
          <h2 className="title mono">Why choose Digital Web Weaver over other Vadodara agencies?</h2>
          <div className="grid grid-4 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🌍 GLOBAL</div><div className="cap__title" style={{"marginTop":"10px"}}>Global client experience</div><p className="cap__body">We serve clients in the UK, US, and South Africa. That standard of engineering, communication, and delivery comes to every local project.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🎯 CUSTOM</div><div className="cap__title" style={{"marginTop":"10px"}}>No templates, no shortcuts</div><p className="cap__body">We don't install a theme and call it a website. Every project is custom-designed and engineered — whether it's a ₹50k business site or a ₹5L SaaS product.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>👨‍💻 SENIOR</div><div className="cap__title" style={{"marginTop":"10px"}}>Senior engineers only</div><p className="cap__body">Your project is built by engineers with 5+ years of experience — not handed to a fresher once the deal is signed. The person you talk to is the person who builds it.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🤝 LOCAL</div><div className="cap__title" style={{"marginTop":"10px"}}>In-person meetings available</div><p className="cap__body">Based in Vadodara, we can meet face-to-face. For clients who value direct communication and local accountability, we're your studio.</p></div>
          </div>
        </section>

        <section id="s-about" className="section reveal">
          <p className="eyebrow">// industries.json · Vadodara &amp; Gujarat</p>
          <h2 className="title mono">Industries we serve in Vadodara &amp; Gujarat</h2>
          <p className="subtitle">From heavy industry to local retail — we understand the Gujarat business landscape and the digital challenges each sector faces.</p>
          <div className="grid grid-3 stagger">
            <div className="cap"><div className="cap__title">Manufacturing &amp; industrial</div><p className="cap__body">Dealer portals, product catalogues, B2B order management, and company sites for Vadodara's large manufacturing sector. We understand the MSME export market.</p><div className="svc__tags"><span className="tag">B2B portal</span><span className="tag tag--y">Catalogue</span></div></div>
            <div className="cap"><div className="cap__title">Retail &amp; D2C brands</div><p className="cap__body">Online stores for local Gujarat brands reaching national customers — with Razorpay integration, GST invoicing, and WhatsApp order notifications.</p><div className="svc__tags"><span className="tag">WooCommerce</span><span className="tag tag--y">Razorpay</span></div></div>
            <div className="cap"><div className="cap__title">Healthcare &amp; clinics</div><p className="cap__body">Clinic websites with appointment booking, doctor profiles, and WhatsApp integration. Patient-friendly design that builds trust before the first visit.</p><div className="svc__tags"><span className="tag">Appointment booking</span><span className="tag tag--y">WhatsApp</span></div></div>
            <div className="cap"><div className="cap__title">Real estate &amp; construction</div><p className="cap__body">Property listing sites, project showcase pages, enquiry management, and virtual tour integration for Vadodara builders and real estate agents.</p><div className="svc__tags"><span className="tag">Property listings</span><span className="tag tag--y">Lead capture</span></div></div>
            <div className="cap"><div className="cap__title">Education &amp; coaching</div><p className="cap__body">Course websites, online registration forms, batch management portals, and student progress dashboards for coaching institutes and educational businesses.</p><div className="svc__tags"><span className="tag">Registration</span><span className="tag tag--y">Batch management</span></div></div>
            <div className="cap"><div className="cap__title">Tech startups</div><p className="cap__body">Vadodara has a growing startup scene. We help founders build their first product right — MVP in 8–10 weeks, production-grade architecture, and investor-ready demo.</p><div className="svc__tags"><span className="tag">MVP</span><span className="tag tag--y">Startup-friendly</span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">VADODARA'S MOST EXPERIENCED ENGINEERING STUDIO</div>
            <div className="panel-note__row">
              <div><span className="plus">+</span><span>8 years in Vadodara — we know the local business ecosystem</span></div>
              <div><span className="plus">+</span><span>Hindi, Gujarati &amp; English — work in the language you're comfortable with</span></div>
              <div><span className="plus">+</span><span>Fixed price, no surprises — the quote we give is the price you pay</span></div>
              <div><span className="plus">+</span><span>Long-term relationships — most clients stay with us 3+ years</span></div>
            </div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// vadodara.faq.md</p>
          <h2 className="title mono">Vadodara web design questions</h2>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">How much does a website cost in Vadodara?<span className="sign">[+]</span></button><div className="faq__a"><p>A small business website typically starts at ₹25,000–₹60,000 for a clean, custom-designed site with CMS. A WooCommerce e-commerce store runs ₹50,000–₹1,50,000 depending on products and features. A web application or SaaS product is scoped individually. We give fixed-price quotes — no surprises.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can we meet you in person in Vadodara?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. We're based in Vadodara and welcome in-person meetings at our studio or your office. For the initial consultation, meeting face-to-face often makes scoping faster and clearer. WhatsApp and phone calls work for ongoing communication.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you only work with Vadodara businesses?<span className="sign">[+]</span></button><div className="faq__a"><p>No — around 60% of our clients are outside Vadodara, including companies in the UK, US, and other Indian cities. But we do prioritise serving local Vadodara businesses well and offer in-person project management that remote clients can't get.</p></div></div>
            <div className="faq__item"><button className="faq__q">How long does a website take to build in Vadodara?<span className="sign">[+]</span></button><div className="faq__a"><p>A business website typically takes 3–5 weeks from brief to launch. A WooCommerce store runs 5–8 weeks. A custom web application or mobile app is 10–20+ weeks. We give you a detailed, week-by-week milestone plan before starting.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// also serving businesses across Gujarat</p>
          <h2 className="title mono" style={{"fontSize":"26px"}}>Based in Vadodara, we serve clients statewide</h2>
          <p className="subtitle">Visit our city-specific pages for local context and industry focus.</p>
          <div className="grid grid-4">
            <Link className="svc" href="/web-design-ahmedabad/"><div className="svc__title" style={{"fontSize":"16px"}}>Ahmedabad</div><p className="svc__body" style={{"fontSize":"13.5px"}}>IT firms, startups, GIFT City fintech, textile &amp; pharma.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/web-design-surat/"><div className="svc__title" style={{"fontSize":"16px"}}>Surat</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Diamond traders, textile exporters, e-commerce, SME manufacturers.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/web-design-rajkot/"><div className="svc__title" style={{"fontSize":"16px"}}>Rajkot</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Engineering goods, auto parts, SME manufacturing, export portals.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/web-design-gujarat/"><div className="svc__title" style={{"fontSize":"16px"}}>All of Gujarat</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Serving MSMEs, manufacturers, startups, and traders statewide.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --vadodara<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Based in Vadodara — ready to build a website that actually brings you business?</h2>
          <p className="cta__lead">Free consultation — in person at our Vadodara studio or online. We'll scope your project and give you a fixed-price quote within 24 hours.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Book free consultation</Link>
            <Link className="btn btn--ghost" href="/portfolio/">See our work</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Based in Vadodara</span><span><span className="g">●</span> Fixed price</span><span><span className="g">●</span> In-person available</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">web-design-vadodara.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
