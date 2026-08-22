import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "ChatFlow AI — WhatsApp Business Automation Software | Digital Web Weaver" },
  description: "ChatFlow AI answers enquiries, books appointments, sends order updates, and follows up with customers automatically — on your business WhatsApp number, in your brand's voice, around the clock.",
  alternates: { canonical: "/chatflow-ai/" },
  openGraph: { title: "ChatFlow AI — WhatsApp Business Automation Software | Digital Web Weaver", description: "ChatFlow AI answers enquiries, books appointments, sends order updates, and follows up with customers automatically — on your business WhatsApp number, in your brand's voice, around the clock.", url: "/chatflow-ai/", type: "website" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={serviceSchema({ name: "ChatFlow AI", description: "ChatFlow AI answers enquiries, books appointments, sends order updates, and follows up with customers automatically — on your business WhatsApp number, in your brand's voice, around the clock.", href: "/chatflow-ai/" })} />
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-features" data-target="s-features" title="Features">⚙</button>
      <button className="activitybar__btn" data-scroll="s-how" data-target="s-how" title="How it works">❯</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> chatflow.ts</button>
        <button className="tab" data-scroll="s-features" data-target="s-features"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> chat-agent.ts</button>
        <button className="tab" data-scroll="s-how" data-target="s-how"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> how-it-works.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// chatflow.ts · AI WhatsApp agent · answers every chat</p>
            <span className="badge">AI AUTOMATION · WHATSAPP</span>
            <h1 className="hero__h1">Turn your WhatsApp into a 24/7 <span className="pink">sales &amp; support team</span></h1>
            <p className="hero__lead">ChatFlow AI answers enquiries, books appointments, sends order updates, and follows up with customers automatically — on your business WhatsApp number, in your brand's voice, around the clock.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book a demo</a>
              <a className="btn btn--ghost" href="#s-features" data-scroll="s-features">$ view --agent</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>24/7</b><span>chat coverage</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>2–3wk</b><span>to go live</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>150+</b><span>clients globally</span></div>
            </div>
          </div>
          <div className="formcard" id="demo">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">demo.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE DEMO</p>
              <p className="form__title">See the agent chat live</p>
              <p className="form__lead">Book a 30-minute demo — we'll show you the agent handling a real enquiry on WhatsApp.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME *</label><input className="input" name="name" placeholder="Your name" required /></div>
                <div className="field"><label className="label">WORK EMAIL *</label><input className="input" name="email" type="email" placeholder="you@company.com" required /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">BUSINESS NAME</label><input className="input" name="business" placeholder="Your business" /></div>
                <div className="field"><label className="label">BUSINESS TYPE</label>
                <select className="select" name="type"><option>E-commerce / D2C brand</option><option>Restaurant / service business</option><option>Real estate / high-ticket sales</option><option>Clinic, salon or service provider</option><option>Other</option></select>
                </div>
              </div>
              <div className="field"><label className="label">WHAT ARE YOU MISSING TODAY?</label><textarea className="textarea" name="desc" rows="3" placeholder="Slow replies, missed orders, no follow-up…"></textarea></div>
              <button className="form__submit" type="submit">Book my demo ↗</button>
              <p className="form__micro">Free demo · Fixed price &amp; timeline</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ chatflow demo --book</div>
              <div className="s1">✓ request received<br />✓ routed to a product specialist<br />✓ demo slot being arranged</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll be in touch within 24 hours to schedule.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>24/7</div><div className="lbl">CHAT_COVERAGE</div><div className="sub">▲ always answering</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>2–3wk</div><div className="lbl">TO_GO_LIVE</div><div className="sub">▲ demo → live</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>secs</div><div className="lbl">RESPONSE_TIME</div><div className="sub">▲ down from hours</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
        </section>

        <section id="s-features" className="section reveal">
          <p className="eyebrow">const agent = [ <span className="c">// what the chat agent handles</span></p>
          <h2 className="title mono">An agent trained on your business</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Instant, natural replies</div><p className="svc__body">Responds to enquiries immediately in natural language, trained on your products, services, and FAQs.</p><div className="svc__foot"><span>reply.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Lead qualification &amp; routing</div><p className="svc__body">Asks the right questions to qualify leads and routes hot prospects to your sales team with full context.</p><div className="svc__foot"><span>qualify.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Order &amp; booking updates</div><p className="svc__body">Sends automatic order confirmations, status updates, and appointment reminders without manual effort.</p><div className="svc__foot"><span>updates.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Catalogue &amp; in-chat payments</div><p className="svc__body">Shares product catalogues and accepts payments directly within the WhatsApp conversation.</p><div className="svc__foot"><span>catalogue.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Broadcast &amp; re-engagement</div><p className="svc__body">Sends promotions, restock alerts, and win-back messages to segmented customer lists — compliantly.</p><div className="svc__foot"><span>broadcast.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">CRM &amp; order system integration</div><p className="svc__body">Syncs conversations and customer data with your CRM, order system, or booking platform in real time.</p><div className="svc__foot"><span>sync.ts</span></div></div>
          </div>
        </section>

        <section id="s-how" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>trainAgent</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">Live and chatting in 2–3 weeks</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Share info</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Train agent</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Connect</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Go live</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04</div><div className="pipe-detail__title">Share products, services &amp; FAQs</div><p className="pipe-detail__body">You give us your catalogue, service list, and the questions customers ask most often.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Products &amp; services collected</span></li><li><span className="ok">✓</span><span>Common customer FAQs documented</span></li><li><span className="ok">✓</span><span>Conversation flows drafted</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ chatflow intake --info</div><div className="t2">✓ FAQs collected  ✓ flows drafted</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04</div><div className="pipe-detail__title">Train &amp; configure ChatFlow AI</div><p className="pipe-detail__body">The agent is trained on your brand's tone and scripted for the conversations you actually get.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Brand tone configured</span></li><li><span className="ok">✓</span><span>Conversation flows scripted</span></li><li><span className="ok">✓</span><span>Catalogue &amp; payments configured</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ chatflow train --agent</div><div className="t2">✓ tone trained  ✓ flows scripted</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04</div><div className="pipe-detail__title">Connect to business systems</div><p className="pipe-detail__body">The agent is wired into your existing WhatsApp Business number, CRM, and order or booking system.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>WhatsApp Business API connected</span></li><li><span className="ok">✓</span><span>CRM / order system synced</span></li><li><span className="ok">✓</span><span>Handoff rules to your team set</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ chatflow connect --systems</div><div className="t2">✓ WhatsApp connected  ✓ CRM synced</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04</div><div className="pipe-detail__title">Go live with analytics</div><p className="pipe-detail__body">The agent starts answering chats, with an analytics dashboard so you can monitor every conversation from day one.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Agent live on your WhatsApp number</span></li><li><span className="ok">✓</span><span>Chat analytics dashboard active</span></li><li><span className="ok">✓</span><span>30 days post-launch support</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ chatflow launch --go-live</div><div className="t2">✓ agent live  ✓ analytics streaming</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">WHATS_INCLUDED</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Trained WhatsApp AI agent</span></div><div><span className="plus">+</span><span>Catalogue &amp; payment setup</span></div><div><span className="plus">+</span><span>CRM/order system integration</span></div><div><span className="plus">+</span><span>Broadcast campaign templates</span></div><div><span className="plus">+</span><span>Chat analytics dashboard</span></div><div><span className="plus">+</span><span>30 days post-launch support</span></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// client words</p>
          <div className="grid grid-3 stagger">
            <div className="quote"><div className="stars">★★★★★</div><p>We were missing orders simply because nobody could reply fast enough during peak hours. Now ChatFlow AI handles the first response, shares the catalogue, and even takes payment — our team only steps in for the conversations that really need a human.</p><div className="quote__who"><div className="quote__avatar">SK</div><div><div className="quote__name">Simran Kaur</div><div className="quote__role">Founder, Indigo &amp; Ivy Home Decor</div></div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// chatflow.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Does it work with our existing WhatsApp Business number?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — it works with your existing WhatsApp Business number via the official WhatsApp Business API.</p></div></div>
            <div className="faq__item"><button className="faq__q">How are complex conversations handled?<span className="sign">[+]</span></button><div className="faq__a"><p>The agent hands off to your team with full conversation context preserved, so customers don't repeat themselves.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can it take orders and payments?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — it can share catalogues, take orders, and accept payments directly in-chat.</p></div></div>
            <div className="faq__item"><button className="faq__q">Is it compliant with WhatsApp policies?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — it adheres to WhatsApp Business API messaging policies and opt-in requirements.</p></div></div>
            <div className="faq__item"><button className="faq__q">What's the timeline?<span className="sign">[+]</span></button><div className="faq__a"><p>Most businesses are live within 2–3 weeks, including agent training and system integration.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-end","gap":"20px","flexWrap":"wrap"}}>
            <p className="eyebrow">// you might also need</p>
            <Link className="mono" href="/products/" style={{"fontSize":"13px","whiteSpace":"nowrap"}}>browse all products ↗</Link>
          </div>
          <div className="grid grid-3">
            <Link className="svc" href="/callmate-ai/"><div className="svc__title" style={{"fontSize":"16px"}}>CallMate AI</div><p className="svc__body" style={{"fontSize":"13.5px"}}>AI voice agent for inbound enquiries, bookings, and follow-up calls.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/quickbite/"><div className="svc__title" style={{"fontSize":"16px"}}>QuickBite</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Food delivery app suite — ordering, restaurant dashboard, and delivery tracking.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/insuredesk/"><div className="svc__title" style={{"fontSize":"16px"}}>InsureDesk</div><p className="svc__body" style={{"fontSize":"13.5px"}}>CRM for insurance agencies — lead, policy, and renewal management.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./demo --chatflow<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to stop replying to WhatsApp manually?</h2>
          <p className="cta__lead">Book a free 30-minute demo. We'll show you the agent handling a real conversation for your business and give you a fixed price and go-live date.</p>
          <div className="cta__btns">
            <a className="btn btn--primary" href="#demo" data-scroll="s-hero">▶ Book a demo</a>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Free demo</span><span><span className="g">●</span> Fixed price &amp; timeline</span><span><span className="g">●</span> You own the source code</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">chatflow.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
