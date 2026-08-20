import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Contact Digital Web Weaver — free consultation in 24h" },
  description: "Get in touch with Digital Web Weaver. Free technical consultation and an itemised estimate from senior engineers within 24 hours. Email, phone, or WhatsApp. Vadodara, India.",
  alternates: { canonical: "/contact/" },
  openGraph: { title: "Contact Digital Web Weaver — free consultation in 24h", description: "Get in touch with Digital Web Weaver. Free technical consultation and an itemised estimate from senior engineers within 24 hours. Email, phone, or WhatsApp. Vadodara, India.", url: "/contact/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections">
      <div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-form" data-target="s-form" title="Get in touch">⌂</button>
      <button className="activitybar__btn" data-scroll="s-connect" data-target="s-connect" title="Contact info">✉</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · South Africa">◍</span>
    </nav>
    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-form" data-target="s-form"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
        <button className="tab" data-scroll="s-connect" data-target="s-connect"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> contact.json</button>
        <button className="tab" data-scroll="s-faq" data-target="s-faq"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> faq.md</button>
      </div>
      <div className="content scroll">

        <section id="s-form" className="section section--split top">
          <div>
            <p className="hero__meta">// contact.sh · let's talk · response &lt; 24h</p>
            <h1 className="hero__h1">Let's build something <span className="pink">together</span>.</h1>
            <p className="hero__lead">Tell us what you're building. You'll get a free technical consultation and a detailed, itemised estimate from senior engineers — within 24 hours. No commitment, NDA on request.</p>
            <ul className="check-list">
              <li><span className="plus">+</span><span>Straight to senior engineers — no sales gatekeeping</span></li>
              <li><span className="plus">+</span><span>Free consultation &amp; fixed estimate within 24 hours</span></li>
            </ul>
            <div className="btn-row" style={{"marginTop":"18px"}}>
              <a className="btn btn--ghost" href="tel:+919712515105">📞 Call now</a>
              <a className="btn btn--ghost green" href="https://wa.me/919722915105">💬 WhatsApp</a>
            </div>
            <p className="form__micro" style={{"textAlign":"left","marginTop":"24px"}}>200+ systems shipped · 15 countries · 4.9★ rating · NDA on request</p>
          </div>
          <div className="formcard">
            <div className="code__head"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> <span className="fn">project.brief</span> <span className="mut">— free consultation</span></div>
            <form data-form className="formcard__pad">
              <div className="field-row">
                <div className="field"><label className="label">YOUR NAME *</label><input className="input" name="name" placeholder="Jane Doe" required /></div>
                <div className="field"><label className="label">WORK EMAIL *</label><input className="input" type="email" name="email" placeholder="you@company.com" required /></div>
              </div>
              <div className="field"><label className="label">COMPANY / PROJECT</label><input className="input" name="company" placeholder="Acme Inc. — optional" /></div>
              <div className="field-row">
                <div className="field"><label className="label">WHAT DO YOU NEED?</label><select className="select" name="service"><option>Web / SaaS platform</option><option>Custom web app</option><option>E-commerce</option><option>Mobile app</option><option>AI &amp; automation</option><option>Cloud &amp; DevOps</option><option>UI / UX design</option><option>Hire dedicated team</option><option>Something else</option></select></div>
                <div className="field"><label className="label">BUDGET RANGE</label><select className="select" name="budget"><option>Not sure yet</option><option>&lt; $5k</option><option>$5k – $15k</option><option>$15k – $50k</option><option>$50k+</option></select></div>
              </div>
              <div className="field"><label className="label">TELL US ABOUT THE PROJECT</label><textarea className="textarea" name="message" rows="4" placeholder="What are you building, and what does success look like?"></textarea></div>
              <button className="form__submit" type="submit">▶ Send &amp; get my estimate</button>
              <p className="form__micro">Free consultation · 24-hour response · NDA on request</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww send --brief</div>
              <div className="s1">✓ brief received<br />✓ routing to a senior engineer<br />✓ estimate being prepared</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll reply within 24 hours with a consultation slot and a first estimate.</div>
              <button className="s-reset">$ new --brief</button>
            </div>
          </div>
        </section>

        <section id="s-connect" className="section section--split reveal">
          <div>
            <p className="eyebrow">// contact.json · however you'd like to talk</p>
            <h2 className="title mono">Every way to reach us</h2>
            <div className="code">
              <div className="code__head"><span className="fn">contact.json</span></div>
              <div className="loc">
                <div className="k">export const <span className="fnn">reach</span> = &#123;</div>
                <div style={{"paddingLeft":"18px"}}>email: <span className="str">"info@digitalwebweaver.com"</span>,</div>
                <div style={{"paddingLeft":"18px"}}>phone: <span className="str">"+91 97125 15105"</span>,</div>
                <div style={{"paddingLeft":"18px"}}>whatsapp: <span className="str">"+91 97229 15105"</span>,</div>
                <div style={{"paddingLeft":"18px"}}>hq: <span className="str">"Vadodara, Gujarat, India"</span>,</div>
                <div style={{"paddingLeft":"18px"}}>hours: <span className="yel">"Mon–Sat · 10:00–19:00 IST"</span>,</div>
                <div style={{"paddingLeft":"18px"}}>alsoServing: [<span className="str">"UK"</span>, <span className="str">"South Africa"</span>, <span className="str">"Ivory Coast"</span>],</div>
                <div className="k">&#125;;</div>
              </div>
            </div>
          </div>
          <div className="code">
            <div className="code__head"><span className="fn">map.embed</span><span className="mut">— Vadodara HQ</span></div>
            <iframe
              title="Digital Web Weaver — Vadodara studio location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=73.1529186%2C22.2755213%2C73.1729186%2C22.2855213&layer=mapnik&marker=22.2805213%2C73.1629186"
              style={{"width":"100%","height":"320px","border":"0","display":"block"}}
              loading="lazy"
            ></iframe>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// contact.faq.md</p>
          <h2 className="title mono">Before you write in</h2>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">How fast will I hear back?<span className="sign">[+]</span></button><div className="faq__a"><p>Within 24 hours on any working day — usually much sooner. A senior engineer, not a bot, reads every brief and replies with next steps.</p></div></div>
            <div className="faq__item"><button className="faq__q">Is the consultation really free?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. The first consultation call and the itemised estimate are completely free, with no obligation to proceed afterwards.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you sign an NDA first?<span className="sign">[+]</span></button><div className="faq__a"><p>Absolutely. If your project is sensitive, tell us in the brief and we'll send an NDA before you share any details.</p></div></div>
          </div>
        </section>

        <Footer />

      </div>
      <div className="statusbar"><span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span><span className="statusbar__spacer">contact.sh</span><span>Shell</span><span>Ln 1, Col 1</span></div>
    </main>

      <Interactions />
    </>
  );
}
