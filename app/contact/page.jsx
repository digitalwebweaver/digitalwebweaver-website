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
      <button className="activitybar__btn" data-scroll="s-channels" data-target="s-channels" title="Channels">✉</button>
      <button className="activitybar__btn" data-scroll="s-office" data-target="s-office" title="Office">◍</button>
      <button className="activitybar__btn" data-scroll="s-next" data-target="s-next" title="What's next">❯</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · South Africa">◍</span>
    </nav>
    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-form" data-target="s-form"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
        <button className="tab" data-scroll="s-channels" data-target="s-channels"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> channels.json</button>
        <button className="tab" data-scroll="s-office" data-target="s-office"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> office.md</button>
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
              <li><span className="plus">+</span><span>NDA on request before you share a single detail</span></li>
            </ul>
            <div className="trust">
              <div className="trust__label">PREFER TO TALK NOW?</div>
              <div className="btn-row" style={{"marginTop":"14px"}}>
                <a className="btn btn--ghost" href="tel:+919712515105">📞 +91 97125 15105</a>
                <a className="btn btn--ghost green" href="https://wa.me/919722915105">💬 WhatsApp</a>
              </div>
            </div>
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

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>&lt;24h</div><div className="lbl">RESPONSE_TIME</div><div className="sub">▲ every enquiry</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>200+</div><div className="lbl">SYSTEMS_SHIPPED</div><div className="sub">▲ since 2013</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>15</div><div className="lbl">COUNTRIES</div><div className="sub">▲ IN · UK · ZA · CI</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>4.9</div><div className="lbl">CLIENT_RATING</div><div className="sub">▲ 90% retention</div></div>
        </section>

        <section id="s-channels" className="section reveal">
          <p className="eyebrow">const channels = [ <span className="c">// reach us however suits you</span></p>
          <h2 className="title mono">Ways to reach us</h2>
          <div className="grid grid-4 stagger">
            <a className="cap cap--teal link" href="mailto:info@digitalwebweaver.com"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg><span className="cap__title">Email us</span></div><div className="cap__body">info@digitalwebweaver.com</div><div className="cap__meta">Best for detailed briefs</div><div className="cap__go">Send email ↗</div></a>
            <a className="cap cap--teal link" href="tel:+919712515105"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"></path></svg><span className="cap__title">Call us</span></div><div className="cap__body">+91 97125 15105</div><div className="cap__meta">Mon–Sat · 10:00–19:00 IST</div><div className="cap__go">Call now ↗</div></a>
            <a className="cap cap--teal link" href="https://wa.me/919722915105"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.8-.8L3 20l1-4.2a8.4 8.4 0 0 1-.8-3.8A8.4 8.4 0 0 1 11.5 3 8.4 8.4 0 0 1 21 11.5z"></path></svg><span className="cap__title">WhatsApp</span></div><div className="cap__body">+91 97229 15105</div><div className="cap__meta">Fastest for quick questions</div><div className="cap__go">Chat now ↗</div></a>
            <a className="cap cap--teal link" href="https://www.google.com/maps?cid=11665016648672561459" target="_blank" rel="noopener"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><span className="cap__title">Visit us</span></div><div className="cap__body">Vadodara, Gujarat, India</div><div className="cap__meta">By appointment</div><div className="cap__go">Get directions ↗</div></a>
          </div>
        </section>

        <section id="s-office" className="section section--split reveal">
          <div>
            <p className="eyebrow">// office.md · come say hi</p>
            <h2 className="title mono" style={{"fontSize":"32px"}}>Headquartered in Vadodara</h2>
            <p className="hero__lead" style={{"fontSize":"17px","marginTop":"14px"}}>Our engineering studio is based in Gujarat, India — serving clients across India, the UK, South Africa, and Ivory Coast with a comfortable daily overlap.</p>
            <ul className="office-list">
              <li><span className="oi" style={{"color":"var(--pink)"}}>◍</span><div><h4>Studio address</h4><p>207/208 Sanket Heights, Sunpharma Road, Atladra, Vadodara 390012, Gujarat, India</p></div></li>
              <li><span className="oi" style={{"color":"var(--teal)"}}>◷</span><div><h4>Working hours</h4><p>Mon–Sat · 10:00–19:00 IST (UTC+5:30) · flexible overlap for UK &amp; US teams</p></div></li>
              <li><span className="oi" style={{"color":"var(--yellow)"}}>✉</span><div><h4>Email &amp; phone</h4><p><a href="mailto:info@digitalwebweaver.com">info@digitalwebweaver.com</a> · <a href="tel:+919712515105">+91 97125 15105</a></p></div></li>
            </ul>
          </div>
          <div className="code">
            <div className="code__head"><span className="fn">locations.json</span></div>
            <div className="loc">
              <div className="k">export const <span className="fnn">offices</span> = [</div>
              <div style={{"paddingLeft":"18px"}}>&#123; region: <span className="str">"Vadodara, India"</span>, mode: <span className="yel">"HQ · on-site"</span> &#125;,</div>
              <div style={{"paddingLeft":"18px"}}>&#123; region: <span className="str">"United Kingdom"</span>, mode: <span className="yel">"remote"</span> &#125;,</div>
              <div style={{"paddingLeft":"18px"}}>&#123; region: <span className="str">"South Africa"</span>, mode: <span className="yel">"remote"</span> &#125;,</div>
              <div style={{"paddingLeft":"18px"}}>&#123; region: <span className="str">"Ivory Coast"</span>, mode: <span className="yel">"remote"</span> &#125;,</div>
              <div className="k">];</div>
              <div className="cmt" style={{"marginTop":"10px"}}>// serving 15 countries · English + Hindi + Gujarati</div>
            </div>
          </div>
          <div className="code" style={{"gridColumn":"1 / -1","marginTop":"8px"}}>
            <div className="code__head"><span className="fn">map.embed</span><span className="mut">— Vadodara HQ</span></div>
            <iframe
              title="Digital Web Weaver — Vadodara studio location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=73.1529186%2C22.2755213%2C73.1729186%2C22.2855213&layer=mapnik&marker=22.2805213%2C73.1629186"
              style={{"width":"100%","height":"320px","border":"0","display":"block"}}
              loading="lazy"
            ></iframe>
          </div>
        </section>

        <section id="s-next" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>whatHappensNext</span>() &#123; <span className="c">// no black box, no sales runaround</span></p>
          <h2 className="title mono">What happens after you reach out</h2>
          <div className="grid grid-3 stagger">
            <div className="cap cap--top"><div className="eng__tag" style={{"color":"var(--pink)"}}>01 · WITHIN 24H</div><div className="cap__title" style={{"marginTop":"10px"}}>We reply &amp; ask the right questions</div><p className="cap__body">A senior engineer reads your brief and comes back with a consultation slot plus any clarifying questions.</p></div>
            <div className="cap cap--teal"><div className="eng__tag" style={{"color":"var(--teal)"}}>02 · FREE CONSULTATION</div><div className="cap__title" style={{"marginTop":"10px"}}>We scope it together</div><p className="cap__body">A 30-minute call to align on goals, constraints, and approach — no obligation, no pressure to sign.</p></div>
            <div className="cap cap--yellow"><div className="eng__tag" style={{"color":"var(--yellow)"}}>03 · ITEMISED ESTIMATE</div><div className="cap__title" style={{"marginTop":"10px"}}>You get a clear plan &amp; price</div><p className="cap__body">A written proposal with scope, timeline, and a fixed, itemised estimate — so you can decide with full clarity.</p></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// contact.faq.md</p>
          <h2 className="title mono">Before you write in</h2>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">How fast will I hear back?<span className="sign">[+]</span></button><div className="faq__a"><p>Within 24 hours on any working day — usually much sooner. A senior engineer, not a bot, reads every brief and replies with next steps.</p></div></div>
            <div className="faq__item"><button className="faq__q">Is the consultation really free?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes. The first consultation call and the itemised estimate are completely free, with no obligation to proceed afterwards.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you sign an NDA first?<span className="sign">[+]</span></button><div className="faq__a"><p>Absolutely. If your project is sensitive, tell us in the brief and we'll send an NDA before you share any details.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you work with clients in my timezone?<span className="sign">[+]</span></button><div className="faq__a"><p>We operate on IST (UTC+5:30) with a flexible daily overlap, and already work smoothly with teams in the UK, Europe, Africa, and the US.</p></div></div>
            <div className="faq__item"><button className="faq__q">What should I include in my message?<span className="sign">[+]</span></button><div className="faq__a"><p>A sentence or two on what you're building, your rough timeline, and any budget range you have in mind. Don't worry if it's still fuzzy — that's what the call is for.</p></div></div>
          </div>
        </section>

        <section className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --free-consultation<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Still reading? Let's just talk.</h2>
          <p className="cta__lead">Fill the brief above, or reach a senior engineer directly on WhatsApp — whichever is faster for you.</p>
          <div className="cta__btns">
            <a className="btn btn--primary" href="#s-form" data-scroll="s-form">▶ Send the brief</a>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free consultation</span><span><span className="g">●</span> 24-hour response</span><span><span className="g">●</span> NDA on request</span></div>
        </section>

        <Footer />

      </div>
      <div className="statusbar"><span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span><span className="statusbar__spacer">contact.sh</span><span>Shell</span><span>Ln 1, Col 1</span></div>
    </main>

      <Interactions />
    </>
  );
}
