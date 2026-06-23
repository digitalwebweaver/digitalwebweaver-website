"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const DEMO_HREF = "/contact/";

const SUBSIDY_STAGES = [
  { n: "01", label: "PM Surya Ghar\nRegistration", note: "Portal + DISCOM docs" },
  { n: "02", label: "GEDA\nApproval", note: "SLA tracked" },
  { n: "03", label: "MGVCL\nFeasibility", note: "Net-meter pre-check ⚡" },
  { n: "04", label: "Installation\n& Commissioning", note: "ALMM validation" },
  { n: "05", label: "Net-Meter\nInspection", note: "Documents verified" },
  { n: "06", label: "Subsidy\nCredited", note: "₹30k–₹78k protected" },
];

const AI_CARDS = [
  {
    icon: "⚡",
    name: "Smart Quote",
    tagline: "Bill photo → subsidy-ready proposal in minutes",
    kills: "Hours of manual quoting. Lost deals from slow turnaround.",
    detail: "Upload a photo or PDF of the customer's electricity bill. Vision AI extracts consumer number, sanctioned load, and average units — recommends the right kW, builds a priced BOM with PM Surya Ghar subsidy, net cost, and EMI. Always confirms extracted fields before sending.",
  },
  {
    icon: "🛡️",
    name: "Net-Meter Pre-Check",
    tagline: "Catch a DISCOM rejection before it happens",
    kills: "Post-install net-metering rejections — the #1 ops failure.",
    detail: "Validates your application against known MGVCL rejection reasons: system size vs sanctioned load, ALMM panel listing, MNRE inverter empanelment, document completeness, earthing. Returns a red / amber / green report with concrete fixes before you submit.",
  },
  {
    icon: "📡",
    name: "Underproduction Sentinel",
    tagline: "Know a system is underperforming before your customer does",
    kills: "Angry customers discovering dead systems before you do.",
    detail: "Watches inverter generation vs expected output continuously. Auto-raises a service ticket the moment a system dips — so your team acts before the phone rings. The 'quality guarantee' differentiator no other Gujarat installer can offer.",
  },
  {
    icon: "💬",
    name: "Follow-up Brain",
    tagline: "Never let a hot lead go cold again",
    kills: "Leads dying from zero day-2 / day-5 / day-12 follow-up.",
    detail: "Scores leads by temperature, surfaces today's call list, and drafts WhatsApp nudges in English, Hindi, or Gujarati. Human-in-the-loop — you review before anything reaches the customer.",
  },
];

const PERSONAS = [
  { role: "Director / Owner", icon: "🏢", win: "Full visibility into pipeline, cash flow, margin and every live subsidy — no more end-of-month surprises." },
  { role: "Sales Rep", icon: "📱", win: "Quote in minutes, not hours. Follow-up Brain surfaces who to call today, with the message ready to send." },
  { role: "Site Surveyor", icon: "🔧", win: "Survey on mobile, data feeds directly into the quote — no WhatsApp photos, no re-entry." },
  { role: "Operations / PM", icon: "📋", win: "Every project's subsidy stage on one screen with SLA breach alerts before they become problems." },
  { role: "Accountant", icon: "🧾", win: "GST-correct invoices auto-generated, payment milestones tracked, profitability per project visible." },
];

const FEATURES = [
  {
    id: "crm",
    label: "CRM & Leads",
    icon: "🎯",
    items: [
      { h: "Multi-source lead inbox", d: "IndiaMART, JustDial, Meta, referrals, walk-ins and PM Surya Ghar portal — colour-tagged by source so you know where every lead came from." },
      { h: "Kanban pipeline with stage SLAs", d: "Hot leads never sit ignored. Configure SLA timers per stage; the system alerts when a lead is about to go cold." },
      { h: "Customer 360", d: "Every project, quote, invoice, ticket and AMC for a customer in one screen — no hunting across WhatsApp and Excel." },
      { h: "Referrals & channel partners", d: "Partners get their own portal to submit leads and track commission — no manual tracking on your end." },
      { h: "DPDP / POPIA compliant", d: "One-click data export and right-to-erasure built in. Audit trail on every data access." },
    ],
  },
  {
    id: "quote",
    label: "Quoting",
    icon: "📄",
    items: [
      { h: "Smart Quote (AI)", d: "Snap the electricity bill — AI sizes the system, calculates the PM Surya Ghar subsidy, and builds a branded GST-ready proposal. Bill to quote in minutes." },
      { h: "Customisable BOM builder", d: "Editable line-by-line bill of materials. Toggle subsidy on/off (not every customer qualifies). Add EMI/financing, discounts, validity." },
      { h: "Professional branded PDF", d: "Your logo, GSTIN, business details — looks like a premium installer, not an Excel printout." },
      { h: "Individual vs B2B customers", d: "B2B customers get a proper GST tax invoice with their GSTIN for Input Tax Credit — differentiated from the lead stage." },
    ],
  },
  {
    id: "subsidy",
    label: "Subsidy & Projects",
    icon: "🏛️",
    items: [
      { h: "6-stage subsidy state machine", d: "PM Surya Ghar → GEDA → MGVCL → Install → Net-meter → Subsidy credited. Every stage tracked with SLA timers and a 'needs attention' alert list." },
      { h: "ALMM panel validation", d: "The system flags any non-ALMM panel before you order — preventing the single most common subsidy forfeiture." },
      { h: "Net-Meter Pre-Check (AI)", d: "Red / amber / green compliance report with fixes before you submit. Eliminates post-install DISCOM rejections." },
      { h: "Compliance document checklist", d: "Every required document listed per stage. Tick them off as you collect them — nothing slips through." },
      { h: "Subsidy disbursement tracking", d: "Track from approval to credit. Know exactly which customers' ₹78,000 is still outstanding and why." },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    icon: "💰",
    items: [
      { h: "GST-correct invoicing", d: "Auto CGST+SGST (intra-state) or IGST (inter-state), place-of-supply aware. B2B invoices carry buyer's GSTIN for Input Tax Credit." },
      { h: "Payment milestones", d: "Advance / post-install / final — each recorded separately. Razorpay-ready for online collection." },
      { h: "Project profitability", d: "Cost vs revenue per project. Director sees margin, not just revenue." },
    ],
  },
  {
    id: "inventory",
    label: "Inventory",
    icon: "📦",
    items: [
      { h: "Full stock management", d: "Brand / model / wattage / HSN / warranty. Serial number tracking and a complete stock-movement ledger." },
      { h: "Real Vadodara-market catalogue", d: "Pre-seeded with Waaree, Adani, Vikram, Growatt, Sungrow and more — so you're not starting from scratch." },
      { h: "Purchase orders & GRN", d: "Professional POs to suppliers with goods-receipt flow. Reorder alerts so you never go out of stock mid-project." },
      { h: "Usage analytics per item", d: "See how fast each panel or inverter model moves, 6-month trend, and where each unit was allocated." },
    ],
  },
  {
    id: "om",
    label: "O&M",
    icon: "🔧",
    items: [
      { h: "Underproduction Sentinel (AI)", d: "Continuous inverter monitoring. Auto-raises a service ticket when generation drops — before the customer notices." },
      { h: "Service tickets & maintenance", d: "Full ticket lifecycle — raised, assigned, resolved. Schedule preventive maintenance and track it to completion." },
      { h: "AMC & warranty tracking", d: "Contract expiry alerts, renewal prompts, warranty claims tracked per unit serial number." },
    ],
  },
];

const FAQS = [
  { q: "Is my data separate from other companies?", a: "Yes — hard boundary. SolarFlow is multi-tenant with per-company database scoping and Postgres Row-Level Security. One company can never see another's data, even in a shared infrastructure setup." },
  { q: "Does it work for my DISCOM (MGVCL / DGVCL / PGVCL)?", a: "The Net-Meter Pre-Check and subsidy lifecycle are built specifically for Gujarat DISCOMs. MGVCL is fully mapped; DGVCL and PGVCL rejection patterns are added as part of onboarding." },
  { q: "Can I use my own logo and branding?", a: "Yes — white-label per company. Swap your logo, accent colour, and business details. Quotation PDFs and customer-facing documents carry your brand, not ours." },
  { q: "Does it handle GST correctly?", a: "Yes. Invoices automatically apply CGST+SGST for intra-state transactions and IGST for inter-state. B2B invoices include the buyer's GSTIN snapshot for their Input Tax Credit claim." },
  { q: "Do field technicians need a laptop?", a: "No. The field app is mobile-first — survey capture, site photos, and job completion on any Android or iOS phone. Works on 4G or offline." },
  { q: "Which AI provider does it use?", a: "Your choice — Claude (Anthropic) or OpenAI, switchable per company with your own API key. You control the cost and the model. AI features are human-in-the-loop: nothing reaches a customer without your review." },
  { q: "What does 'ALMM validation' mean?", a: "ALMM (Approved List of Models and Manufacturers) is the MNRE list of subsidy-eligible panels and inverters. Using a non-ALMM item forfeits the customer's PM Surya Ghar subsidy. SolarFlow flags any off-list item before you order." },
];

export default function SolarFlowPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState("crm");
  const [activeStage, setActiveStage] = useState(0);
  const [stageAuto, setStageAuto] = useState(true);
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formCompany, setFormCompany] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const activeTab = FEATURES.find(f => f.id === activeFeature)!;

  useEffect(() => {
    if (!stageAuto) return;
    const t = setInterval(() => {
      setActiveStage(s => (s + 1) % SUBSIDY_STAGES.length);
    }, 1800);
    return () => clearInterval(t);
  }, [stageAuto]);

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormSubmitted(true);
  }

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="page-hero" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="breadcrumb reveal">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/apps/">Our Products</Link>
            <span className="sep">/</span>SolarFlow
          </div>

          {/* Trust strip */}
          <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", background: "var(--accent-soft, rgba(236,65,23,.08))", padding: "4px 10px", borderRadius: 4 }}>Built for GEDA-empanelled installers</span>
            <span style={{ fontSize: 13, color: "var(--muted)" }}>Gujarat · India-first · PM Surya Ghar native</span>
          </div>

          <div className="page-hero-grid">
            <div>
              <span className="eyebrow reveal">SolarFlow ERP + CRM</span>
              <h1 className="reveal" style={{ maxWidth: 680 }}>
                Never forfeit a{" "}
                <span className="accent">₹78,000 subsidy</span>{" "}
                again.
              </h1>
              <p className="lead reveal" style={{ maxWidth: 560 }}>
                The all-in-one ERP + CRM built for Indian solar installers. Runs the entire PM Surya Ghar → GEDA → MGVCL subsidy lifecycle — with AI that quotes, checks compliance, and watches every system you install.
              </p>
              <div className="hero-actions reveal">
                <Link href={DEMO_HREF} className="btn btn-primary">
                  Book a demo <span className="arr">↗</span>
                </Link>
                <a href="#how-it-works" className="btn btn-ghost">
                  See how it works
                </a>
              </div>
              <div className="reveal" style={{ display: "flex", gap: 24, marginTop: 28, flexWrap: "wrap" }}>
                {["Lead to subsidy in one platform", "ALMM validated", "GST invoicing built-in", "Works on mobile"].map(t => (
                  <span key={t} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13.5, color: "var(--muted)", fontWeight: 500 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5"><path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Lead form */}
            <div className="reveal" style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px 28px", boxShadow: "0 8px 40px rgba(0,0,0,.08)", alignSelf: "flex-start" }}>
              {formSubmitted ? (
                <div style={{ textAlign: "center", padding: "20px 0" }}>
                  <div style={{ fontSize: 44, marginBottom: 16 }}>✅</div>
                  <h3 style={{ marginBottom: 8, color: "var(--ink)" }}>We'll reach out within 24 hours</h3>
                  <p style={{ color: "var(--muted)", fontSize: 14 }}>Our team will contact you at <strong>{formPhone}</strong> to schedule your demo.</p>
                </div>
              ) : (
                <>
                  <div style={{ fontWeight: 700, fontSize: 19, color: "var(--ink)", marginBottom: 4 }}>Book a free demo</div>
                  <p style={{ fontSize: 13.5, color: "var(--muted)", marginBottom: 22, lineHeight: 1.5 }}>See the subsidy tracker, Smart Quote &amp; AI assistants live. No commitment.</p>
                  <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--ink-2)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>Your name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Kamlesh Patel"
                        value={formName}
                        onChange={e => setFormName(e.target.value)}
                        style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--line)", borderRadius: 8, fontSize: 14, color: "var(--ink)", background: "var(--paper-2)", outline: "none", boxSizing: "border-box" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--ink-2)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>WhatsApp / Phone *</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formPhone}
                        onChange={e => setFormPhone(e.target.value)}
                        style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--line)", borderRadius: 8, fontSize: 14, color: "var(--ink)", background: "var(--paper-2)", outline: "none", boxSizing: "border-box" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--ink-2)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>Company name</label>
                      <input
                        type="text"
                        placeholder="Meetsun Renewables"
                        value={formCompany}
                        onChange={e => setFormCompany(e.target.value)}
                        style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--line)", borderRadius: 8, fontSize: 14, color: "var(--ink)", background: "var(--paper-2)", outline: "none", boxSizing: "border-box" }}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 4, fontSize: 15 }}>
                      Book my demo ↗
                    </button>
                    <p style={{ fontSize: 12, color: "var(--muted)", textAlign: "center", margin: 0 }}>No spam. We'll contact you within 24 hours.</p>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Stat strip */}
          <div className="stats reveal" style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--line)" }}>
            <div className="stat"><div className="num">6</div><div className="lab">Subsidy stages tracked</div></div>
            <div className="stat"><div className="num">4</div><div className="lab">AI assistants</div></div>
            <div className="stat"><div className="num">0</div><div className="lab">ALMM slips missed</div></div>
            <div className="stat"><div className="num">1</div><div className="lab">Platform, end to end</div></div>
          </div>
        </div>
      </section>

      {/* ── THE PAIN ─────────────────────────────────────────────── */}
      <section className="dark sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow on-dark">The problem</span>
              <h2 style={{ marginTop: 18, color: "var(--on-dark)" }}>
                Selling solar in Gujarat isn't the hard part.
                <br />
                <span style={{ color: "var(--accent)" }}>Surviving the subsidy lifecycle is.</span>
              </h2>
            </div>
            <p style={{ color: "rgba(255,255,255,.65)" }}>One mistake in the PM Surya Ghar → GEDA → MGVCL chain costs real money — and the installer eats the blame.</p>
          </div>
          <div className="why-grid reveal">
            {[
              { icon: "💸", h: "₹30k–₹78k forfeited", d: "One non-ALMM panel or a net-metering rejection and the customer's entire PM Surya Ghar subsidy is gone. Your reputation goes with it." },
              { icon: "📋", h: "WhatsApp + Excel chaos", d: "Leads in group chats. Quotes in spreadsheets. Projects on paper registers. Nothing connected. Nothing tracked." },
              { icon: "🕐", h: "Hours lost to quoting", d: "Manual BOM in Excel. Subsidy calculation from memory. Professional PDF takes an afternoon. Meanwhile the lead calls a competitor." },
              { icon: "🔕", h: "Leads going cold", d: "Nobody followed up on day 2, 5, or 12. The hot lead from last Tuesday is now a signed contract with someone else." },
              { icon: "⚠️", h: "Projects stalling silently", d: "GEDA approved. MGVCL feasibility pending. Nobody tracking the clock. Customer calls — nobody knows the status." },
              { icon: "😤", h: "Complaints before you notice", d: "Underperforming system discovered only when the customer's bill doesn't drop. You should have known weeks ago." },
            ].map(c => (
              <div key={c.h} className="why">
                <div className="wi" style={{ fontSize: 24 }}>{c.icon}</div>
                <h4>{c.h}</h4>
                <p>{c.d}</p>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ marginTop: 48, padding: "28px 32px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 12, textAlign: "center" }}>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,.9)", lineHeight: 1.6, maxWidth: 640, margin: "0 auto" }}>
              <strong style={{ color: "var(--accent)" }}>Every existing solar CRM is either US-built and expensive</strong> (Sunbase, JobNimbus) or a thin Indian lead tracker. None model the subsidy lifecycle.{" "}
              <strong style={{ color: "#fff" }}>In Gujarat, that lifecycle <em>is</em> the business.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── THE PROMISE ──────────────────────────────────────────── */}
      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="reveal" style={{ maxWidth: 700, margin: "0 auto" }}>
            <span className="eyebrow">The solution</span>
            <h2 style={{ marginTop: 18 }}>
              One platform that makes the subsidy lifecycle{" "}
              <span className="accent">impossible to drop.</span>
            </h2>
            <p className="lead" style={{ color: "var(--muted)", marginTop: 16 }}>
              Lead to subsidy to after-sales — finally in one place. Built for PM Surya Ghar, GEDA and MGVCL. Not adapted from an American CRM.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 28, flexWrap: "wrap" }}>
              <Link href={DEMO_HREF} className="btn btn-primary">Book a demo ↗</Link>
              <a href="#features" className="btn btn-ghost">Explore features</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="sec" id="how-it-works" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }} className="reveal">
            <span className="eyebrow">How it works</span>
            <h2 style={{ marginTop: 14, maxWidth: 600, margin: "14px auto 0" }}>From bill snap to subsidy credited</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="reveal">
            {[
              { n: "01", icon: "📸", h: "Snap the bill", d: "Upload the customer's electricity bill photo. AI extracts consumer number, sanctioned load, and units — recommends the right kW, calculates PM Surya Ghar subsidy, builds the proposal. You confirm and send." },
              { n: "02", icon: "📄", h: "Get a subsidy-ready quote signed", d: "Branded PDF with BOM, PM Surya Ghar subsidy, net cost, and EMI options. Net-Meter Pre-Check validates compliance before you survey. Win the job before competitors finish quoting." },
              { n: "03", icon: "📊", h: "Track every subsidy stage", d: "6-stage state machine from GEDA approval to MGVCL net-metering to subsidy credited. SLA timers on every stage. ALMM validation. Compliance checklist. Nothing drops." },
              { n: "04", icon: "🔧", h: "Service it for life", d: "Underproduction Sentinel watches every system. Auto-raises a ticket before the customer notices. AMC contracts, service tickets, and warranty — all in one place." },
            ].map((s, i) => (
              <div key={s.n} style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: 14, padding: "28px 24px", display: "flex", gap: 18, alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: i === 0 || i === 2 ? "var(--ink)" : "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{s.icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, fontFamily: "var(--mono)", color: "var(--muted)", marginTop: 8, textAlign: "center" }}>{s.n}</div>
                </div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--ink)", marginBottom: 10, lineHeight: 1.3 }}>{s.h}</h3>
                  <p style={{ margin: 0, fontSize: 14, color: "var(--muted)", lineHeight: 1.65 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE PILLARS ─────────────────────────────────────────── */}
      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Why SolarFlow</span>
              <h2 style={{ marginTop: 18 }}>Four things no other Gujarat solar platform does</h2>
            </div>
          </div>
          <div className="why-grid reveal">
            {[
              { icon: "🏆", h: "Win the subsidy, every time", d: "The PM Surya Ghar → GEDA → MGVCL lifecycle is a tracked, SLA-driven state machine with a compliance checklist — not a memory game. ₹78,000 per customer, never forfeited." },
              { icon: "⚡", h: "Quote in minutes, not hours", d: "Snap the electricity bill — AI sizes the system, calculates the subsidy, and builds a branded GST-ready proposal. What used to take an afternoon now takes minutes." },
              { icon: "🤖", h: "AI in the back office, not just chat", d: "Smart Quote, Net-Meter Pre-Check, Underproduction Sentinel, Follow-up Brain — four assistants wired into operations. Human-in-the-loop. No chatbot gimmicks." },
              { icon: "🔗", h: "One system, end to end", d: "Lead → survey → quote → subsidy → install → GST invoice → payment → after-sales. Replacing WhatsApp + Excel + register chaos with one connected workflow." },
            ].map(p => (
              <div key={p.h} className="why">
                <div className="wi" style={{ fontSize: 28 }}>{p.icon}</div>
                <h4>{p.h}</h4>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBSIDY LIFECYCLE ──────────────────────────────────────── */}
      <section className="dark sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow on-dark">The wedge feature</span>
              <h2 style={{ marginTop: 18, color: "var(--on-dark)" }}>
                The subsidy lifecycle —{" "}
                <span style={{ color: "var(--accent)" }}>tracked to the rupee</span>
              </h2>
            </div>
            <p style={{ color: "rgba(255,255,255,.65)" }}>Six stages. SLA timers on every one. A 'needs attention' alert list so nothing stalls in silence.</p>
          </div>

          {/* Animated pipeline */}
          <div className="reveal" style={{ overflowX: "auto", paddingBottom: 8 }}>
            <div style={{ display: "flex", gap: 0, minWidth: 600, position: "relative" }}>
              {SUBSIDY_STAGES.map((s, i) => {
                const isActive = i === activeStage;
                const isPast = i < activeStage;
                return (
                  <div key={s.n} style={{ flex: 1, position: "relative", cursor: "pointer" }}
                    onClick={() => { setActiveStage(i); setStageAuto(false); }}>
                    {/* Connector line */}
                    {i < SUBSIDY_STAGES.length - 1 && (
                      <div style={{ position: "absolute", top: 27, left: "50%", width: "100%", height: 2, zIndex: 0,
                        background: isPast || isActive ? "var(--accent)" : "rgba(255,255,255,.12)",
                        transition: "background 0.5s ease" }} />
                    )}
                    <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 8px" }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: "50%", margin: "0 auto 12px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 13, fontWeight: 700, fontFamily: "var(--mono)",
                        transition: "all 0.4s ease",
                        background: isActive ? "var(--accent)" : isPast ? "rgba(236,65,23,.25)" : "rgba(255,255,255,.06)",
                        border: "2px solid " + (isActive ? "var(--accent)" : isPast ? "rgba(236,65,23,.5)" : "rgba(255,255,255,.18)"),
                        color: isActive ? "#fff" : isPast ? "rgba(236,65,23,.9)" : "rgba(255,255,255,.55)",
                        boxShadow: isActive ? "0 0 0 6px rgba(236,65,23,.2)" : "none",
                        transform: isActive ? "scale(1.12)" : "scale(1)",
                      }}>
                        {isPast && !isActive ? "✓" : s.n}
                      </div>
                      <div style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.4, whiteSpace: "pre-line", marginBottom: 6, transition: "color 0.4s",
                        color: isActive ? "var(--accent)" : isPast ? "rgba(255,255,255,.7)" : "rgba(255,255,255,.45)" }}>{s.label}</div>
                      <div style={{ fontSize: 11, color: isActive ? "rgba(255,255,255,.7)" : "rgba(255,255,255,.3)", lineHeight: 1.3, transition: "color 0.4s" }}>{s.note}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Active stage detail */}
            <div style={{ marginTop: 28, padding: "18px 24px", background: "rgba(236,65,23,.1)", border: "1px solid rgba(236,65,23,.3)", borderRadius: 10, minHeight: 56, transition: "all 0.3s ease" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#fff", flexShrink: 0 }}>{SUBSIDY_STAGES[activeStage].n}</div>
                <div>
                  <div style={{ fontWeight: 700, color: "#fff", fontSize: 14 }}>{SUBSIDY_STAGES[activeStage].label.replace("\n", " ")}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,.6)", marginTop: 2 }}>{SUBSIDY_STAGES[activeStage].note} · Click any stage to explore</div>
                </div>
              </div>
            </div>
          </div>

          {/* Net-Meter Pre-Check callout */}
          <div className="reveal" style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(236,65,23,.3)", borderRadius: 12, padding: "24px 28px" }}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 10 }}>⚡ Net-Meter Pre-Check (AI)</div>
              <p style={{ color: "rgba(255,255,255,.8)", fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                Before you submit to MGVCL, SolarFlow validates system size vs sanctioned load, ALMM panel listing, MNRE inverter empanelment, and document completeness. Returns a <strong style={{ color: "#fff" }}>red / amber / green report with fixes</strong> — not a rejection letter three weeks later.
              </p>
            </div>
            <div style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 12, padding: "24px 28px" }}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: 10 }}>🔒 ALMM Validation</div>
              <p style={{ color: "rgba(255,255,255,.8)", fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                The system flags any non-ALMM panel before you order. Using an off-list panel forfeits the customer's entire PM Surya Ghar subsidy. <strong style={{ color: "#fff" }}>SolarFlow makes it impossible to order the wrong panel.</strong>
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href={DEMO_HREF} className="btn btn-primary">See the subsidy tracker in action ↗</Link>
          </div>
        </div>
      </section>

      {/* ── AI SHOWCASE ───────────────────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">AI assistants</span>
              <h2 style={{ marginTop: 18 }}>
                Four AI assistants wired into your{" "}
                <span className="accent">back office</span>
              </h2>
            </div>
            <p>Not a chatbot bolted on. Each assistant is human-in-the-loop and runs on Claude or OpenAI — your key, your cost, your choice.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }} className="reveal">
            {AI_CARDS.map(card => (
              <div key={card.name} style={{ background: "var(--paper-2)", border: "1px solid var(--line)", borderRadius: 14, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: "var(--accent-soft, rgba(236,65,23,.08))", border: "1px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{card.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 16, color: "var(--ink)" }}>{card.name}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent)" }}>AI ⚡</div>
                  </div>
                </div>
                <p style={{ fontWeight: 600, fontSize: 15, color: "var(--ink)", margin: 0, lineHeight: 1.4 }}>{card.tagline}</p>
                <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>{card.detail}</p>
                <div style={{ marginTop: "auto", paddingTop: 14, borderTop: "1px solid var(--line)", fontSize: 13, color: "var(--muted)" }}>
                  <span style={{ fontWeight: 600, color: "var(--ink-2)" }}>Kills: </span>{card.kills}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE TOUR ─────────────────────────────────────────── */}
      <section className="sec" id="features" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Full feature tour</span>
              <h2 style={{ marginTop: 18 }}>Everything your solar business needs, in one place</h2>
            </div>
          </div>

          {/* Tab bar */}
          <div className="reveal" style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 32 }}>
            {FEATURES.map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFeature(f.id)}
                style={{
                  padding: "8px 16px", borderRadius: 8, border: "1px solid",
                  borderColor: activeFeature === f.id ? "var(--accent)" : "var(--line)",
                  background: activeFeature === f.id ? "var(--accent)" : "transparent",
                  color: activeFeature === f.id ? "#fff" : "var(--ink-2)",
                  fontWeight: 600, fontSize: 13.5, cursor: "pointer", transition: ".2s",
                  display: "flex", alignItems: "center", gap: 6,
                }}
              >
                <span>{f.icon}</span>{f.label}
              </button>
            ))}
          </div>

          {/* Active tab content */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {activeTab.items.map(item => (
              <div key={item.h} style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: 12, padding: "22px 20px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 2 }}><path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <h4 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "var(--ink)", lineHeight: 1.4 }}>{item.h}</h4>
                </div>
                <p style={{ margin: 0, fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROI / OUTCOMES ───────────────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Outcomes</span>
              <h2 style={{ marginTop: 18 }}>What changes when you run on SolarFlow</h2>
            </div>
            <p>Directional results from the Meetsun Renewable Technology pilot, Vadodara.</p>
          </div>
          <div className="stats reveal" style={{ marginBottom: 48 }}>
            <div className="stat"><div className="num">~3 hrs</div><div className="lab">saved per quote</div></div>
            <div className="stat"><div className="num">0</div><div className="lab">Net-metering rejections post Pre-Check</div></div>
            <div className="stat"><div className="num">2×</div><div className="lab">faster subsidy stage progression</div></div>
            <div className="stat"><div className="num">100%</div><div className="lab">subsidy eligibility rate</div></div>
          </div>
          <div className="why-grid reveal">
            {[
              { icon: "⏱️", h: "Hours back per quote", d: "Smart Quote turns a 3-hour BOM-in-Excel exercise into a sub-10-minute workflow. Your sales rep closes faster than competitors even finish quoting." },
              { icon: "💰", h: "Every subsidy claimed", d: "ALMM validation and Net-Meter Pre-Check make it structurally impossible to forfeit a customer's PM Surya Ghar subsidy. That's ₹78,000 per installation protected." },
              { icon: "📞", h: "Fewer angry calls", d: "Underproduction Sentinel catches degraded systems before customers notice. Your service desk becomes proactive — not reactive." },
              { icon: "📈", h: "Pipeline you can actually see", d: "Director-level dashboard: active leads, open subsidy value, SLA breaches, and 6-month revenue trend. No more end-of-month surprises." },
            ].map(o => (
              <div key={o.h} className="why">
                <div className="wi" style={{ fontSize: 24 }}>{o.icon}</div>
                <h4>{o.h}</h4>
                <p>{o.d}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href={DEMO_HREF} className="btn btn-primary">Book a demo to see the numbers ↗</Link>
          </div>
        </div>
      </section>

      {/* ── BUILT RIGHT ──────────────────────────────────────────── */}
      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Built right</span>
              <h2 style={{ marginTop: 18 }}>Enterprise-grade. Solar-native. Mobile-first.</h2>
            </div>
            <p>The infrastructure decisions made up front so you never have to worry about them.</p>
          </div>
          <div className="why-grid reveal">
            {[
              { icon: "🏛️", h: "Multi-tenant isolation", d: "Strict per-company database scoping + Postgres Row-Level Security. One company can never see another's data. Shared infrastructure, hard boundaries." },
              { icon: "🔒", h: "RBAC on every screen", d: "Role-based access control — Director, Sales, Surveyor, PM, Accountant. Every screen and action gated. Junior staff can't access margins or full customer data." },
              { icon: "📋", h: "DPDP & POPIA ready", d: "India's Digital Personal Data Protection Act and South Africa's POPIA compliance built in. Audit trail (who/what/when/IP), data export, right-to-erasure." },
              { icon: "🧾", h: "GST-compliant invoicing", d: "Auto CGST+SGST or IGST based on place of supply. B2B invoices carry buyer GSTIN. Zero manual tax calculation." },
              { icon: "📱", h: "Mobile-first field app", d: "Site surveys, job completion, and photo uploads on any Android or iOS phone. Works on 4G and offline — no laptop needed in the field." },
              { icon: "🎨", h: "White-label per company", d: "Your logo, accent colour, and business details. Custom fields, custom workflows, modules enabled per plan. Customers see your brand." },
            ].map(t => (
              <div key={t.h} className="why">
                <div className="wi" style={{ fontSize: 22 }}>{t.icon}</div>
                <h4>{t.h}</h4>
                <p>{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ──────────────────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Built for your team</span>
              <h2 style={{ marginTop: 18 }}>Every role in your company gets their win</h2>
            </div>
            <p>Five personas, one platform — each getting exactly what they need without a separate tool.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }} className="reveal">
            {PERSONAS.map(p => (
              <div key={p.role} style={{ border: "1px solid var(--line)", borderRadius: 12, padding: "24px 20px", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ fontSize: 28 }}>{p.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 15, color: "var(--ink)" }}>{p.role}</div>
                <p style={{ margin: 0, fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>{p.win}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLANS ────────────────────────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Pricing</span>
              <h2 style={{ marginTop: 18 }}>Plans that grow with your install count</h2>
            </div>
            <p>Per-company SaaS. Module entitlements per plan. Talk to us for exact pricing — we size it to your team.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }} className="reveal">
            {[
              { name: "Starter", desc: "1–10 staff · Up to 50 installs/month", features: ["CRM & lead inbox", "Smart Quote (AI)", "Subsidy lifecycle tracker", "GST invoicing", "Basic dashboard", "Email support"], cta: "Book a demo" },
              { name: "Growth", desc: "10–50 staff · Up to 200 installs/month", popular: true, features: ["Everything in Starter", "Net-Meter Pre-Check (AI)", "Inventory & purchase orders", "Partner portal", "Project profitability", "Priority support"], cta: "Book a demo" },
              { name: "Scale", desc: "50–200 staff · Unlimited installs", features: ["Everything in Growth", "Underproduction Sentinel (AI)", "Follow-up Brain (AI)", "Custom workflows", "White-label", "Dedicated onboarding"], cta: "Book a demo" },
            ].map(plan => (
              <div key={plan.name} style={{ border: "1px solid", borderColor: plan.popular ? "var(--accent)" : "var(--line)", borderRadius: 14, padding: "28px 24px", position: "relative", background: plan.popular ? "rgba(236,65,23,.04)" : "var(--paper)" }}>
                {plan.popular && (
                  <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "var(--accent)", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 14px", borderRadius: 20 }}>Most popular</div>
                )}
                <div style={{ fontWeight: 800, fontSize: 22, color: "var(--ink)", marginBottom: 6 }}>{plan.name}</div>
                <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 20, lineHeight: 1.4 }}>{plan.desc}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "var(--ink-2)" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 2 }}><path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={DEMO_HREF} className={plan.popular ? "btn btn-primary" : "btn btn-ghost"} style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                  {plan.cta} ↗
                </Link>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: 13, color: "var(--muted)", marginTop: 24 }}>All plans include 2FA, audit log, DPDP/POPIA compliance, and mobile app access. Prices on request.</p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 style={{ marginTop: 18 }}>Questions we always get asked</h2>
            </div>
          </div>
          <div className="faq-layout">
            <div className="faq-list">
              {FAQS.map((item, i) => (
                <div key={i} className={`faq-item reveal${openFaq === i ? " open" : ""}`}>
                  <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {item.q}
                    <svg className="fq-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className="faq-a"><p>{item.a}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section>
        <div className="wrap">
          <div className="cta reveal">
            <div className="cta-inner">
              <span className="eyebrow" style={{ color: "rgba(255,255,255,.85)" }}>Stop losing subsidies</span>
              <h2 style={{ marginTop: 18 }}>
                Run your solar business on SolarFlow.
              </h2>
              <p>
                Lead to subsidy to after-sales — in one platform built for PM Surya Ghar, GEDA, and MGVCL. Book a 30-minute demo and see the subsidy tracker, Smart Quote, and Net-Meter Pre-Check live.
              </p>
              <div className="cta-actions">
                <Link href={DEMO_HREF} className="btn btn-primary">
                  Book a demo <span className="arr">↗</span>
                </Link>
                <a href="#features" className="btn btn-ghost">Explore features</a>
              </div>
              <div className="cta-meta">
                <span>● No commitment</span>
                <span>● 30-min live demo</span>
                <span>● Gujarat solar native</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
