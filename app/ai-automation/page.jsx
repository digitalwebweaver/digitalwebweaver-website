import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "AI & Automation Company India | LLM Integration Experts — Digital Web Weaver" },
  description: "AI-powered systems that work in production — LLM copilots, document processing, predictive analytics, and workflow automation. GPT-4, Claude, LangChain, RAG. India-based senior team.",
  alternates: { canonical: "/ai-automation/" },
  openGraph: { title: "AI & Automation Company India | LLM Integration Experts — Digital Web Weaver", description: "AI-powered systems that work in production — LLM copilots, document processing, predictive analytics, and workflow automation. GPT-4, Claude, LangChain, RAG. India-based senior team.", url: "/ai-automation/", type: "website" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={serviceSchema({ name: "AI & Automation", description: "AI-powered systems that work in production — LLM copilots, document processing, predictive analytics, and workflow automation. GPT-4, Claude, LangChain, RAG. India-based senior team.", href: "/ai-automation/" })} />
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-build" data-target="s-build" title="Services">⚙</button>
      <button className="activitybar__btn" data-scroll="s-capabilities" data-target="s-capabilities" title="Capabilities">❮❯</button>
      <button className="activitybar__btn" data-scroll="s-work" data-target="s-work" title="Work">◈</button>
      <button className="activitybar__btn" data-scroll="s-process" data-target="s-process" title="Process">❯</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> ai-automation.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> services.ts</button>
        <button className="tab" data-scroll="s-work" data-target="s-work"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> work.json</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// ai-automation.ts · LangChain · RAG · Python</p>
            <span className="badge">AI &amp; AUTOMATION</span>
            <h1 className="hero__h1">AI automation that replaces <span className="pink">real</span> <span className="teal">manual work</span></h1>
            <p className="hero__lead">We build AI-powered systems that actually work in production — from LLM copilots and document processing to predictive analytics and workflow automation.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Book free discovery session</a>
              <a className="btn btn--ghost" href="#s-work" data-scroll="s-work">$ view --work</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>150+</b><span>clients trusted</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>94%</b><span>extraction accuracy</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>RAG</b><span>grounded, not guessing</span></div>
            </div>
          </div>
          <div className="formcard" id="estimate">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">estimate.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE ESTIMATE</p>
              <p className="form__title">What are you building?</p>
              <p className="form__lead">Tell us what you need — scope and estimate in 24 hours, free.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME</label><input className="input" name="name" placeholder="Your name" /></div>
                <div className="field"><label className="label">WORK EMAIL</label><input className="input" name="email" type="email" placeholder="you@company.com" /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">WHAT DO YOU NEED?</label>
                <select className="select" name="need"><option>Web application / portal</option><option>SaaS product</option><option>Mobile app</option><option>Marketing / company website</option><option>AI / automation project</option><option>Other</option></select>
                </div>
                <div className="field"><label className="label">TIMELINE</label>
                <select className="select" name="timeline"><option>ASAP (1–4 weeks)</option><option>Standard (2–3 months)</option><option>Complex (3–6 months)</option><option>Not sure yet</option></select>
                </div>
              </div>
              <div className="field"><label className="label">DESCRIBE YOUR PROJECT</label><textarea className="textarea" name="desc" rows="3" placeholder="What it does, who uses it, any tech preferences…"></textarea></div>
              <button className="form__submit" type="submit">Get free estimate ↗</button>
              <p className="form__micro">No commitment · 24-hour response</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww estimate --submit</div>
              <div className="s1">✓ request received<br />✓ routed to a senior engineer<br />✓ estimate en route</div>
              <div className="s2">Thanks<span data-name-slot></span> — we'll reply within 24 hours.</div>
              <button className="s-reset" type="button">$ new --request</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ India · UK · US · Global</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>94%</div><div className="lbl">ACCURACY</div><div className="sub">▲ invoice extraction, in prod</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>10K+</div><div className="lbl">DOCS_INDEXED</div><div className="sub">▲ RAG contract assistant</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>24h</div><div className="lbl">ESTIMATE</div><div className="sub">▲ free · no commitment</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// what we build</span></p>
          <h2 className="title mono">AI &amp; automation services</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">LLM integrations</div><p className="svc__body">GPT-4, Claude, and Gemini wired into your product — RAG pipelines and copilot features that ship.</p><div className="svc__foot"><span>llm.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">AI chatbots</div><p className="svc__body">Context-aware assistants with knowledge-base retrieval, not scripted decision trees.</p><div className="svc__foot"><span>chat.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Document processing</div><p className="svc__body">OCR, extraction, classification, and data normalisation for the paperwork nobody wants to type.</p><div className="svc__foot"><span>ocr.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Predictive analytics</div><p className="svc__body">ML models for forecasting, churn, and anomaly detection built on your own historical data.</p><div className="svc__foot"><span>predict.py</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Workflow automation</div><p className="svc__body">Replace manual processes with event-driven automation triggered by real system events.</p><div className="svc__foot"><span>flow.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Computer vision</div><p className="svc__body">Image classification, object detection, and quality inspection at production throughput.</p><div className="svc__foot"><span>vision.py</span></div></div>
          </div>
        </section>

        <section id="s-capabilities" className="section reveal">
          <p className="eyebrow">// technical depth — production AI, not demos</p>
          <h2 className="title mono">AI capabilities</h2>
          <div className="grid grid-3">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.5"></circle><circle cx="18" cy="6" r="2.5"></circle><circle cx="12" cy="18" r="2.5"></circle><path d="M8 7.5 16 7.5M7 8.5 11 16M17 8.5 13 16"></path></svg><span className="cap__title">LangChain &amp; LlamaIndex</span></div><p className="cap__body">RAG pipelines, vector stores, and agent orchestration — grounded in your actual documents.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v6M12 15v6M4.5 7l5 3M14.5 14l5 3M4.5 17l5-3M14.5 10l5-3"></path><circle cx="12" cy="12" r="2.4"></circle></svg><span className="cap__title">Fine-tuning</span></div><p className="cap__body">Domain-specific model fine-tuning on your proprietary data, not generic prompts.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h9l3 3v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"></path><path d="M9 12h6M9 16h6M9 8h3"></path></svg><span className="cap__title">Document intelligence</span></div><p className="cap__body">Azure Document Intelligence, AWS Textract, and custom OCR pipelines for messy real-world input.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="7" height="7" rx="1"></rect><rect x="13" y="4" width="7" height="7" rx="1"></rect><rect x="4" y="13" width="7" height="7" rx="1"></rect><rect x="13" y="13" width="7" height="7" rx="1"></rect></svg><span className="cap__title">ML stack</span></div><p className="cap__body">PyTorch, scikit-learn, Hugging Face, and MLflow — the tools, used properly.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="10" rx="2"></rect><path d="M7 12h.01M12 12h.01M17 12h.01"></path><path d="M12 4v4"></path></svg><span className="cap__title">Model serving</span></div><p className="cap__body">FastAPI, Triton, SageMaker, and Vertex AI inference — sized for real request volume.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12a8 8 0 0 1 13.5-5.7L20 8M20 12a8 8 0 0 1-13.5 5.7L4 16"></path><path d="M17.5 4v3.5H14M6.5 20v-3.5H10"></path></svg><span className="cap__title">MLOps</span></div><p className="cap__body">MLflow experiment tracking, model versioning, and drift monitoring once it's live.</p></div>
          </div>
        </section>

        <section id="s-stack" className="section reveal">
          <p className="eyebrow">import &#123; stack &#125; from "@dww/ai" <span className="c">// the AI stack</span></p>
          <h2 className="title mono">AI tech stack</h2>
          <div className="stack-tabs" data-stack>
            <button className="stack-tab" data-cat="LLM">LLM <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="ML">ML <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Data">Data <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Serving">Serving <span className="n">[4]</span></button>
          </div>
          <div className="stack-grid">
            <div className="stack-cell" data-cat="LLM"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--text)"}}>Ai</span><div className="stack-cell__name">OpenAI GPT-4</div><div className="stack-cell__cat">LLM</div></div>
            <div className="stack-cell" data-cat="LLM"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>Cl</span><div className="stack-cell__name">Claude</div><div className="stack-cell__cat">LLM</div></div>
            <div className="stack-cell" data-cat="LLM"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Lc</span><div className="stack-cell__name">LangChain</div><div className="stack-cell__cat">LLM</div></div>
            <div className="stack-cell" data-cat="LLM"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>Li</span><div className="stack-cell__name">LlamaIndex</div><div className="stack-cell__cat">LLM</div></div>
            <div className="stack-cell" data-cat="ML"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#ee4c2c"}}>Pt</span><div className="stack-cell__name">PyTorch</div><div className="stack-cell__cat">ML</div></div>
            <div className="stack-cell" data-cat="ML"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>Sk</span><div className="stack-cell__name">scikit-learn</div><div className="stack-cell__cat">ML</div></div>
            <div className="stack-cell" data-cat="ML"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>Hf</span><div className="stack-cell__name">Hugging Face</div><div className="stack-cell__cat">ML</div></div>
            <div className="stack-cell" data-cat="ML"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Mf</span><div className="stack-cell__name">MLflow</div><div className="stack-cell__cat">ML</div></div>
            <div className="stack-cell" data-cat="Data"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>Pc</span><div className="stack-cell__name">Pinecone</div><div className="stack-cell__cat">Data</div></div>
            <div className="stack-cell" data-cat="Data"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Pg</span><div className="stack-cell__name">pgvector</div><div className="stack-cell__cat">Data</div></div>
            <div className="stack-cell" data-cat="Data"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"#c99bb4"}}>Wv</span><div className="stack-cell__name">Weaviate</div><div className="stack-cell__cat">Data</div></div>
            <div className="stack-cell" data-cat="Data"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>Es</span><div className="stack-cell__name">Elasticsearch</div><div className="stack-cell__cat">Data</div></div>
            <div className="stack-cell" data-cat="Serving"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--green)"}}>Fa</span><div className="stack-cell__name">FastAPI</div><div className="stack-cell__cat">Serving</div></div>
            <div className="stack-cell" data-cat="Serving"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--green)"}}>Tr</span><div className="stack-cell__name">Triton</div><div className="stack-cell__cat">Serving</div></div>
            <div className="stack-cell" data-cat="Serving"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>Sm</span><div className="stack-cell__name">SageMaker</div><div className="stack-cell__cat">Serving</div></div>
            <div className="stack-cell" data-cat="Serving"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--text)"}}>Cr</span><div className="stack-cell__name">Cloud Run</div><div className="stack-cell__cat">Serving</div></div>
          </div>
        </section>

        <section id="s-process" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>aiProcess</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">AI development process</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Problem definition</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Data assessment</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Model development</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Production deploy</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04 · ◷ discovery</div><div className="pipe-detail__title">Problem definition</div><p className="pipe-detail__body">We identify the specific manual task or decision to automate — and define what success looks like before touching a model.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Manual process mapped end to end</span></li><li><span className="ok">✓</span><span>Success metrics agreed up front</span></li><li><span className="ok">✓</span><span>Pilot scope, not a moonshot</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww discover --ai</div><div className="t2">✓ process mapped  ✓ metrics defined  ✓ pilot scoped</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04 · ◷ audit</div><div className="pipe-detail__title">Data assessment</div><p className="pipe-detail__body">We audit available data quality, quantity, and labelling needs — the honest bottleneck in most AI projects.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Data quality &amp; coverage audit</span></li><li><span className="ok">✓</span><span>Labelling &amp; ground-truth plan</span></li><li><span className="ok">✓</span><span>Privacy &amp; compliance check</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww audit --data</div><div className="t2">✓ quality checked  ✓ gaps flagged  ✓ plan approved</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04 · ◷ iterative</div><div className="pipe-detail__title">Model development</div><p className="pipe-detail__body">Baseline model, evaluation metrics, and iterative refinement — measured against the numbers agreed in step one.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Baseline model shipped fast</span></li><li><span className="ok">✓</span><span>Evaluation harness against real data</span></li><li><span className="ok">✓</span><span>Iterative refinement to target accuracy</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww train --evaluate</div><div className="t2">✓ baseline shipped  ✓ eval passing  ✓ accuracy tracked</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04 · ◷ launch</div><div className="pipe-detail__title">Production deploy</div><p className="pipe-detail__body">Model serving, monitoring, and a feedback loop integrated into your product — not a notebook left running on someone's laptop.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Model serving in production</span></li><li><span className="ok">✓</span><span>Drift &amp; performance monitoring</span></li><li><span className="ok">✓</span><span>Feedback loop for retraining</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww deploy --model</div><div className="t2">✓ serving live  ✓ monitoring on  ✓ feedback wired</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">WHAT_YOU_GET</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Figma design source files</span></div><div><span className="plus">+</span><span>Clean, documented codebase</span></div><div><span className="plus">+</span><span>CI/CD pipeline</span></div><div><span className="plus">+</span><span>SEO &amp; analytics setup</span></div><div><span className="plus">+</span><span>Performance report</span></div></div>
          </div>
        </section>

        <section id="s-work" className="section reveal">
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-end","gap":"20px","flexWrap":"wrap"}}>
            <div><p className="eyebrow">// selected AI builds — production systems</p><h2 className="title mono">Systems we've built</h2></div>
            <Link className="mono" href="/portfolio/" style={{"fontSize":"13px","whiteSpace":"nowrap"}}>view all ↗</Link>
          </div>
          <div className="grid grid-3 stagger">
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">invoices.fintech.io</span></div><div className="work__pad"><div className="work__tag">FINTECH · DOCUMENT AI</div><div className="work__title">Invoice data extraction</div><p className="work__desc">Replaced a 3-person data entry team extracting fields from supplier invoices. GPT-4o plus a validation pipeline processes invoices daily, with a human review queue for low-confidence cases.</p><div className="work__metrics"><div className="work__mcell"><b>94%</b><span>accuracy</span></div><div className="work__mcell"><b>500/day</b><span>invoices processed</span></div></div><div className="work__stack"><span className="tag tag--y">GPT-4o</span><span className="tag tag--y">Python</span><span className="tag tag--y">PostgreSQL</span></div></div></div>
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">contracts.legalco.com</span></div><div className="work__pad"><div className="work__tag">LEGAL · RAG</div><div className="work__title">Contract knowledge assistant</div><p className="work__desc">RAG pipeline over 10,000 legal contracts. Associates ask questions in plain English and get cited answers in seconds — replacing hours of manual search.</p><div className="work__metrics"><div className="work__mcell"><b>10K+</b><span>contracts indexed</span></div><div className="work__mcell"><b>secs</b><span>answer time</span></div></div><div className="work__stack"><span className="tag tag--y">Claude</span><span className="tag tag--y">LangChain</span><span className="tag tag--y">Pinecone</span></div></div></div>
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">triage.telehealth.io</span></div><div className="work__pad"><div className="work__tag">HEALTHTECH · TRIAGE</div><div className="work__title">Patient intake triage pipeline</div><p className="work__desc">AI triage for a telehealth platform — classifying patient symptom descriptions into urgency tiers and routing to the correct specialist queue, replacing manual admin review.</p><div className="work__metrics"><div className="work__mcell"><b>auto</b><span>manual review removed</span></div><div className="work__mcell"><b>tiers</b><span>urgency routing</span></div></div><div className="work__stack"><span className="tag tag--y">Claude</span><span className="tag tag--y">FastAPI</span><span className="tag tag--y">PostgreSQL</span></div></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// why DWW for AI</p>
          <h2 className="title mono">Production AI, not demos</h2>
          <div className="grid grid-4 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>⚙️ ENGINEERING</div><div className="cap__title" style={{"marginTop":"10px"}}>Engineering first</div><p className="cap__body">We build AI features that work in production, not just demos that impress once.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>📊 MEASURED</div><div className="cap__title" style={{"marginTop":"10px"}}>Measurable ROI</div><p className="cap__body">Every AI project is defined with measurable success metrics before we write code.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🔒 PRIVATE</div><div className="cap__title" style={{"marginTop":"10px"}}>Data privacy</div><p className="cap__body">On-premise or private cloud LLM options available for sensitive data.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🔄 MONITORED</div><div className="cap__title" style={{"marginTop":"10px"}}>MLOps included</div><p className="cap__body">Model monitoring, drift detection, and retraining pipelines — not a one-time handoff.</p></div>
          </div>
          <div className="panel-note" style={{"background":"var(--panel)"}}><p style={{"fontSize":"16px","color":"var(--text-2)","lineHeight":"1.65","maxWidth":"960px"}}>Digital Web Weaver is an AI automation and development company built around production, not demos. We define measurable success metrics before writing code, build RAG pipelines with LangChain, LlamaIndex, Pinecone, and pgvector, and integrate with your existing stack via FastAPI — including your SaaS, CRM, and ERP systems. Teams are distributed across India, the UK, South Africa, and the US, with a free discovery session available to scope what's worth automating.</p></div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// client words — AI builds</p>
          <div className="grid grid-3 stagger">
            <div className="quote"><div className="stars">★★★★★</div><p>Our invoice processing used to take three people 6 hours daily. Now one person reviews edge cases the AI flags. Accuracy surpasses manual work.</p><div className="quote__who"><div className="quote__avatar">MR</div><div><div className="quote__name">Meera R.</div><div className="quote__role">CFO · Trading Company · India</div></div></div></div>
            <div className="quote"><div className="stars">★★★★★</div><p>What impressed me was their emphasis on measuring accuracy upfront. We defined success first, built a proof-of-concept, then proceeded with validated numbers.</p><div className="quote__who"><div className="quote__avatar">JL</div><div><div className="quote__name">James L.</div><div className="quote__role">CTO · Legal Tech · UK</div></div></div></div>
            <div className="quote"><div className="stars">★★★★★</div><p>The AI triage feature is now a core product differentiator. It integrates into every patient flow and accuracy keeps improving.</p><div className="quote__who"><div className="quote__avatar">SP</div><div><div className="quote__name">Shilpa P.</div><div className="quote__role">CPO · HealthTech · India</div></div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// ai-automation.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Can AI actually replace our manual process?<span className="sign">[+]</span></button><div className="faq__a"><p>For well-defined, repetitive tasks — yes. We scope realistically: pilot one process, measure ROI, then expand.</p></div></div>
            <div className="faq__item"><button className="faq__q">How do you handle our proprietary data?<span className="sign">[+]</span></button><div className="faq__a"><p>Options include private cloud LLMs, on-premise Ollama, fine-tuning with your data on isolated infrastructure, or using only anonymised data.</p></div></div>
            <div className="faq__item"><button className="faq__q">What's a RAG pipeline?<span className="sign">[+]</span></button><div className="faq__a"><p>Retrieval-Augmented Generation — an LLM answers questions by searching your documents first, so answers are grounded in your actual data.</p></div></div>
            <div className="faq__item"><button className="faq__q">How long does an AI project take?<span className="sign">[+]</span></button><div className="faq__a"><p>Prototype with measurable results: 3–6 weeks. Production system with monitoring and feedback loop: 2–4 months.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-3">
            <Link className="svc" href="/saas-development/"><div className="svc__title" style={{"fontSize":"16px"}}>SaaS development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Build AI features into a scalable SaaS product from day one.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <a className="svc" href="https://digitalwebweaver.com/web-application-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Web application development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>AI-powered dashboards, automation portals, and data pipelines.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></a>
            <Link className="svc" href="/python-developer/"><div className="svc__title" style={{"fontSize":"16px"}}>Hire a Python developer</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Senior Python engineers for ML, data pipelines, and AI backend development.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./automate --discovery<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to replace manual work with AI?</h2>
          <p className="cta__lead">Free 1-hour discovery session. We'll map your process and tell you what's worth automating — and what's not.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Book free discovery session</Link>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Chat on WhatsApp</a>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Production AI, not demos</span><span><span className="g">●</span> Accuracy measured first</span><span><span className="g">●</span> Data privacy by design</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">ai-automation.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
