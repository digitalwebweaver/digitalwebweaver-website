import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Cloud & DevOps Company India | AWS, GCP & Kubernetes Experts — Digital Web Weaver" },
  description: "Cloud architecture, CI/CD pipelines, Kubernetes, and Infrastructure as Code on AWS, GCP, and Azure. 99.9% uptime SLA, zero-downtime deploys. India-based senior DevOps team.",
  alternates: { canonical: "/cloud-devops/" },
  openGraph: { title: "Cloud & DevOps Company India | AWS, GCP & Kubernetes Experts — Digital Web Weaver", description: "Cloud architecture, CI/CD pipelines, Kubernetes, and Infrastructure as Code on AWS, GCP, and Azure. 99.9% uptime SLA, zero-downtime deploys. India-based senior DevOps team.", url: "/cloud-devops/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-build" data-target="s-build" title="What we do">⚙</button>
      <button className="activitybar__btn" data-scroll="s-capabilities" data-target="s-capabilities" title="Capabilities">❮❯</button>
      <button className="activitybar__btn" data-scroll="s-work" data-target="s-work" title="Work">◈</button>
      <button className="activitybar__btn" data-scroll="s-process" data-target="s-process" title="Process">❯</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> cloud-devops.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> services.ts</button>
        <button className="tab" data-scroll="s-work" data-target="s-work"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> work.json</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// cloud-devops.ts · Terraform · Kubernetes · CI/CD · Observability</p>
            <span className="badge">CLOUD &amp; DEVOPS</span>
            <h1 className="hero__h1">Cloud &amp; DevOps infrastructure that <span className="teal">scales</span> with your <span className="pink">product</span></h1>
            <p className="hero__lead">Infrastructure ships as code — Terraform-provisioned, code-reviewed, and auditable. No one clicking around a console at 2am hoping they remember what they last changed.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Get free estimate</a>
              <a className="btn btn--ghost" href="#s-work" data-scroll="s-work">$ view --work</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>99.9%</b><span>uptime SLA</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>150+</b><span>clients served</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>IaC</b><span>infrastructure as code</span></div>
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
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>99.9%</div><div className="lbl">UPTIME_SLA</div><div className="sub">▲ production workloads</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ served worldwide</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>Multi</div><div className="lbl">AWS · GCP · AZURE</div><div className="sub">▲ multi-cloud capable</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>IaC</div><div className="lbl">INFRA_AS_CODE</div><div className="sub">▲ Terraform · Pulumi</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// what we do</span></p>
          <h2 className="title mono">Cloud &amp; DevOps services</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Cloud architecture</div><p className="svc__body">Multi-region AWS, GCP, and Azure designs built for the traffic and growth you actually expect.</p><div className="svc__foot"><span>architecture.tf</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">CI/CD pipelines</div><p className="svc__body">GitHub Actions, GitLab CI, and ArgoCD pipelines that replace manual, error-prone deploys.</p><div className="svc__foot"><span>pipeline.yml</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">Containers &amp; K8s</div><p className="svc__body">Docker, Kubernetes, Helm, and ECS — orchestration sized to the workload, not the trend.</p><div className="svc__foot"><span>k8s.yml</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Infrastructure as Code</div><p className="svc__body">Terraform and Pulumi — every resource provisioned, reviewed, and versioned as code.</p><div className="svc__foot"><span>main.tf</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Observability</div><p className="svc__body">Prometheus, Grafana, Loki, and PagerDuty so incidents surface before customers report them.</p><div className="svc__foot"><span>observability.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Cost optimisation</div><p className="svc__body">Right-sizing and waste identification — an ongoing discipline, not a one-off review.</p><div className="svc__foot"><span>cost.ts</span></div></div>
          </div>
        </section>

        <section id="s-capabilities" className="section reveal">
          <p className="eyebrow">// technical depth — infrastructure you can audit</p>
          <h2 className="title mono">Cloud &amp; DevOps capabilities</h2>
          <div className="grid grid-3">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg><span className="cap__title">AWS certified</span></div><p className="cap__body">AWS Certified engineers architecting on the services that fit your workload, not just the popular ones.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="16" height="10" rx="2"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path></svg><span className="cap__title">Security hardening</span></div><p className="cap__body">Zero-trust networking, least-privilege IAM, and a WAF in front of anything public.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8l4 4-4 4M20 8l-4 4 4 4M14 4l-4 16"></path></svg><span className="cap__title">Zero-downtime deploy</span></div><p className="cap__body">Rolling and blue-green deploys so releases never mean a maintenance window.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="6" r="3"></circle><circle cx="18" cy="18" r="3"></circle><path d="M9 11l6-4M9 13l6 4"></path></svg><span className="cap__title">Disaster recovery</span></div><p className="cap__body">Documented RTO/RPO — recovery objectives tested, not just written down.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 1 0 9 9"></path><path d="M12 12l5-3"></path></svg><span className="cap__title">SLO/SLI monitoring</span></div><p className="cap__body">Service-level objectives tracked against real indicators, with alerts before users notice.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path><circle cx="12" cy="15.5" r="1.4"></circle></svg><span className="cap__title">Secrets management</span></div><p className="cap__body">Centralised secrets storage and rotation — nothing hardcoded, nothing in plaintext.</p></div>
          </div>
        </section>

        <section id="s-stack" className="section reveal">
          <p className="eyebrow">import &#123; stack &#125; from "@dww/cloud" <span className="c">// the cloud &amp; DevOps stack</span></p>
          <h2 className="title mono">Cloud &amp; DevOps stack</h2>
          <div className="stack-tabs" data-stack>
            <button className="stack-tab" data-cat="Cloud">Cloud <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Containers">Containers <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="IaC">IaC <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Observability">Observability <span className="n">[4]</span></button>
          </div>
          <div className="stack-grid">
            <div className="stack-cell" data-cat="Cloud"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>aws</span><div className="stack-cell__name">AWS</div><div className="stack-cell__cat">Cloud</div></div>
            <div className="stack-cell" data-cat="Cloud"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Gc</span><div className="stack-cell__name">GCP</div><div className="stack-cell__cat">Cloud</div></div>
            <div className="stack-cell" data-cat="Cloud"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>Az</span><div className="stack-cell__name">Azure</div><div className="stack-cell__cat">Cloud</div></div>
            <div className="stack-cell" data-cat="Cloud"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>Cf</span><div className="stack-cell__name">Cloudflare</div><div className="stack-cell__cat">Cloud</div></div>
            <div className="stack-cell" data-cat="Containers"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Do</span><div className="stack-cell__name">Docker</div><div className="stack-cell__cat">Containers</div></div>
            <div className="stack-cell" data-cat="Containers"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>K8</span><div className="stack-cell__name">Kubernetes</div><div className="stack-cell__cat">Containers</div></div>
            <div className="stack-cell" data-cat="Containers"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>He</span><div className="stack-cell__name">Helm</div><div className="stack-cell__cat">Containers</div></div>
            <div className="stack-cell" data-cat="Containers"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--green)"}}>Ec</span><div className="stack-cell__name">ECS Fargate</div><div className="stack-cell__cat">Containers</div></div>
            <div className="stack-cell" data-cat="IaC"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>Tf</span><div className="stack-cell__name">Terraform</div><div className="stack-cell__cat">IaC</div></div>
            <div className="stack-cell" data-cat="IaC"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Pu</span><div className="stack-cell__name">Pulumi</div><div className="stack-cell__cat">IaC</div></div>
            <div className="stack-cell" data-cat="IaC"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>Cdk</span><div className="stack-cell__name">CDK</div><div className="stack-cell__cat">IaC</div></div>
            <div className="stack-cell" data-cat="IaC"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--red)"}}>An</span><div className="stack-cell__name">Ansible</div><div className="stack-cell__cat">IaC</div></div>
            <div className="stack-cell" data-cat="Observability"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>Pr</span><div className="stack-cell__name">Prometheus</div><div className="stack-cell__cat">Observability</div></div>
            <div className="stack-cell" data-cat="Observability"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>Gr</span><div className="stack-cell__name">Grafana</div><div className="stack-cell__cat">Observability</div></div>
            <div className="stack-cell" data-cat="Observability"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Lo</span><div className="stack-cell__name">Loki</div><div className="stack-cell__cat">Observability</div></div>
            <div className="stack-cell" data-cat="Observability"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--green)"}}>Ot</span><div className="stack-cell__name">OpenTelemetry</div><div className="stack-cell__cat">Observability</div></div>
          </div>
        </section>

        <section id="s-process" className="section reveal">
          <p className="eyebrow">function <span style={{"color":"var(--text)"}}>cloudProcess</span>() &#123; <span className="c">// click a stage to inspect</span></p>
          <h2 className="title mono">Cloud &amp; DevOps engagement</h2>
          <div className="pipeline" data-pipeline>
            <div className="pipeline__track"></div><div className="pipeline__fill"></div>
            <div className="pipeline__row">
              <button className="pipe" data-num="01"><span className="pipe__dot">01</span><span className="pipe__label">Infrastructure audit</span></button>
              <button className="pipe" data-num="02"><span className="pipe__dot">02</span><span className="pipe__label">Architecture design</span></button>
              <button className="pipe" data-num="03"><span className="pipe__dot">03</span><span className="pipe__label">Migration &amp; automation</span></button>
              <button className="pipe" data-num="04"><span className="pipe__dot">04</span><span className="pipe__label">Handover &amp; support</span></button>
            </div>
          </div>
          <div className="pipe-detail" data-step-panel="0">
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 01 / 04 · ◷ kickoff</div><div className="pipe-detail__title">Infrastructure audit</div><p className="pipe-detail__body">We audit your existing infrastructure, deployment process, and monitoring setup — mapping cost, risk, and technical debt before proposing any changes.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Cost &amp; security audit</span></li><li><span className="ok">✓</span><span>Deployment pipeline review</span></li><li><span className="ok">✓</span><span>Itemised findings report</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww audit --infra</div><div className="t2">✓ cost mapped  ✓ risks flagged  ✓ report sent</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="1" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 02 / 04 · ◷ design</div><div className="pipe-detail__title">Architecture design</div><p className="pipe-detail__body">We design the target cloud architecture — compute, data, network, and CI/CD — reviewed and signed off with you before any infrastructure changes ship.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Target architecture diagram</span></li><li><span className="ok">✓</span><span>IaC module plan (Terraform/Pulumi)</span></li><li><span className="ok">✓</span><span>Rollout &amp; rollback strategy</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww design --cloud</div><div className="t2">✓ architecture signed off  ✓ IaC plan set  ✓ rollback ready</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="2" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 03 / 04 · ◷ build</div><div className="pipe-detail__title">Migration &amp; automation</div><p className="pipe-detail__body">Infrastructure is provisioned as code and rolled out in stages — CI/CD pipelines, containers, and observability wired in as we go, not bolted on afterward.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Terraform-provisioned infrastructure</span></li><li><span className="ok">✓</span><span>CI/CD pipeline built</span></li><li><span className="ok">✓</span><span>Observability wired in</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww ship --iac</div><div className="t2">✓ infra provisioned  ✓ CI/CD live  ✓ observability on</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="pipe-detail" data-step-panel="3" hidden>
            <div className="pipe-detail__left"><div className="pipe-detail__step">STEP 04 / 04 · ◷ handover</div><div className="pipe-detail__title">Handover &amp; support</div><p className="pipe-detail__body">A documented, auditable environment handed over to your team — with retainer support available for ongoing SRE work if you want us to stay embedded.</p><ul className="pipe-detail__list"><li><span className="ok">✓</span><span>Documented runbooks</span></li><li><span className="ok">✓</span><span>Team handover &amp; training</span></li><li><span className="ok">✓</span><span>Retainer support available</span></li></ul></div>
            <div className="pipe-detail__term"><div className="t0">— terminal · stage output</div><div className="t1">$ dww handover --docs</div><div className="t2">✓ runbooks delivered  ✓ team trained  ✓ retainer ready</div><div className="t3">✓ stage complete<span className="caret"></span></div></div>
          </div>
          <div className="panel-note">
            <div className="panel-note__lbl">WHAT_YOU_GET</div>
            <div className="panel-note__row"><div><span className="plus">+</span><span>Figma design source files</span></div><div><span className="plus">+</span><span>Clean, documented codebase</span></div><div><span className="plus">+</span><span>CI/CD pipeline</span></div><div><span className="plus">+</span><span>SEO &amp; analytics setup</span></div><div><span className="plus">+</span><span>Performance report</span></div></div>
          </div>
        </section>

        <section id="s-work" className="section reveal">
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-end","gap":"20px","flexWrap":"wrap"}}>
            <div><p className="eyebrow">// selected infrastructure builds — production systems</p><h2 className="title mono">Systems we've built</h2></div>
            <Link className="mono" href="/portfolio/" style={{"fontSize":"13px","whiteSpace":"nowrap"}}>view all ↗</Link>
          </div>
          <div className="grid grid-3 stagger">
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">fintech-saas.internal</span></div><div className="work__pad"><div className="work__tag">FINTECH · COST OPTIMISATION</div><div className="work__title">Cloud cost optimisation</div><p className="work__desc">Right-sized EC2 instances, moved to reserved pricing, added RDS read replicas, and put CloudFront in front of static assets for a FinTech SaaS platform spending $18k/mo on AWS.</p><div className="work__metrics"><div className="work__mcell"><b>47%</b><span>AWS cost cut</span></div><div className="work__mcell"><b>$18k/mo</b><span>prior spend</span></div></div><div className="work__stack"><span className="tag tag--y">AWS</span><span className="tag tag--y">Terraform</span><span className="tag tag--y">CloudFront</span></div></div></div>
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">logistics-ci.internal</span></div><div className="work__pad"><div className="work__tag">LOGISTICS · CI/CD OVERHAUL</div><div className="work__title">Deployment time improvement</div><p className="work__desc">Replaced a manual FTP deploy process with a GitHub Actions pipeline to AWS ECS — turning a 4-hour Friday ritual into an automated 8-minute deploy the team ships daily.</p><div className="work__metrics"><div className="work__mcell"><b>8 min</b><span>new deploy time</span></div><div className="work__mcell"><b>4 hrs</b><span>previous deploy</span></div></div><div className="work__stack"><span className="tag tag--y">GitHub Actions</span><span className="tag tag--y">Docker</span><span className="tag tag--y">AWS ECS</span></div></div></div>
            <div className="work"><div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">healthtech-eks.internal</span></div><div className="work__pad"><div className="work__tag">HEALTHTECH · K8S MIGRATION</div><div className="work__title">Kubernetes migration</div><p className="work__desc">Migrated a HIPAA-scoped HealthTech platform from EC2 to EKS with rolling deploys — zero downtime during the cutover, with SOC 2 security alignment maintained throughout.</p><div className="work__metrics"><div className="work__mcell"><b>0</b><span>downtime migration</span></div><div className="work__mcell"><b>SOC2</b><span>security aligned</span></div></div><div className="work__stack"><span className="tag tag--y">EKS</span><span className="tag tag--y">Terraform</span><span className="tag tag--y">Helm</span></div></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// why DWW for cloud &amp; DevOps</p>
          <h2 className="title mono">Everything ships as code</h2>
          <div className="grid grid-4 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>⚙ IAC</div><div className="cap__title" style={{"marginTop":"10px"}}>IaC everything</div><p className="cap__body">Code-reviewed, auditable infrastructure — every change tracked, nothing clicked into existence.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>🔒 SAFE</div><div className="cap__title" style={{"marginTop":"10px"}}>Security by design</div><p className="cap__body">Zero-trust, least-privilege, and a WAF standard — not an afterthought bolted on before audit.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>📈 VISIBLE</div><div className="cap__title" style={{"marginTop":"10px"}}>Observability first</div><p className="cap__body">Full instrumentation from day one, so problems surface on a dashboard before a customer reports them.</p></div>
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>💰 LEAN</div><div className="cap__title" style={{"marginTop":"10px"}}>Cost conscious</div><p className="cap__body">Right-sizing and optimisation as an ongoing habit, not a one-time bill-shock fire drill.</p></div>
          </div>
          <div className="panel-note" style={{"background":"var(--panel)"}}><p style={{"fontSize":"16px","color":"var(--text-2)","lineHeight":"1.65","maxWidth":"960px"}}>As a cloud and DevOps services company based in Vadodara, India and delivering across the UK, South Africa, and Ivory Coast, we build and run infrastructure for teams who are tired of firefighting production. This is for founders and engineering leads whose AWS bill keeps climbing, whose deploys are still manual, and who don't find out something is broken until a customer tells them. Our differentiator is simple: everything ships as code. Infrastructure is Terraform-provisioned, code-reviewed, and auditable, so no one is clicking around a console at 2am hoping they remember what they last changed.</p></div>
          <div className="grid grid-2" style={{"marginTop":"16px"}}>
            <div className="cap"><div className="cap__title">Infrastructure as code, observability from day one</div><p className="cap__body">Every environment we provision starts from multi-region architecture, a CI/CD pipeline, and container orchestration — Kubernetes or ECS, depending on the workload. Observability tools are wired in from day one, not bolted on after an outage, so deployment strategies stay auditable and rollbacks stay fast.</p></div>
            <div className="cap"><div className="cap__title">Right-sized cost, reliable delivery, no black boxes</div><p className="cap__body">We treat cost optimisation as an ongoing engineering discipline, not a one-off review — right-sizing instances, tracking spend, and documenting runbooks so any engineer on your team can operate what we've built. For teams that want it embedded permanently, a dedicated DevOps engineer can join your team directly.</p></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// client words — cloud &amp; DevOps builds</p>
          <div className="grid grid-3 stagger">
            <div className="quote"><div className="stars">★★★★★</div><p>They cut our AWS bill by 47% without touching a single feature. The Terraform refactor was a bonus — our infrastructure is finally legible to our own team.</p><div className="quote__who"><div className="quote__avatar">VK</div><div><div className="quote__name">Vikram K.</div><div className="quote__role">CTO · FinTech SaaS · India</div></div></div></div>
            <div className="quote"><div className="stars">★★★★★</div><p>Before Digital Web Weaver, a deployment meant a 4-hour Friday afternoon process with two engineers present. Now it's an 8-minute automated pipeline. We ship daily.</p><div className="quote__who"><div className="quote__avatar">SB</div><div><div className="quote__name">Sarah B.</div><div className="quote__role">Head of Engineering · Logistics · UK</div></div></div></div>
            <div className="quote"><div className="stars">★★★★★</div><p>Our Grafana dashboards now show us problems before users notice them. We haven't had an unplanned outage since the migration — over 18 months ago.</p><div className="quote__who"><div className="quote__avatar">DP</div><div><div className="quote__name">Dev P.</div><div className="quote__role">VP Infrastructure · HealthTech · India</div></div></div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// cloud-devops.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Can you migrate from on-premise to AWS?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — with lift-and-shift to get you off legacy hardware fast, or a full re-architect to serverless and managed services if you want to modernise at the same time.</p></div></div>
            <div className="faq__item"><button className="faq__q">Kubernetes or ECS?<span className="sign">[+]</span></button><div className="faq__a"><p>ECS Fargate for simpler workloads with less operational overhead. EKS or GKE when you need portability across clouds or already run multi-cloud.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you offer ongoing SRE support?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — retainers with monthly infrastructure reviews, patching, and support for teams that want us embedded long-term.</p></div></div>
            <div className="faq__item"><button className="faq__q">How do you handle multi-region failover?<span className="sign">[+]</span></button><div className="faq__a"><p>Route 53 health checks and failover routing, cross-region data replication, and documented runbooks your team can run without us.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// you might also need</p>
          <div className="grid grid-3">
            <Link className="svc" href="/web-development/"><div className="svc__title" style={{"fontSize":"16px"}}>Web development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Marketing sites, web portals, web apps, and API backends.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <Link className="svc" href="/saas-development/"><div className="svc__title" style={{"fontSize":"16px"}}>SaaS development</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Multi-tenant SaaS with Stripe billing, SSO, and analytics.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></Link>
            <a className="svc" href="https://digitalwebweaver.com/hire-devops-engineer/"><div className="svc__title" style={{"fontSize":"16px"}}>Hire a DevOps engineer</div><p className="svc__body" style={{"fontSize":"13.5px"}}>A dedicated senior DevOps engineer embedded in your team.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>open ↗</div></a>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --infra-audit<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready to fix your infrastructure?</h2>
          <p className="cta__lead">A free audit of your cloud setup — cost, security, and deploy process — from senior engineers, within 24 hours.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Request free audit</Link>
            <Link className="btn btn--ghost" href="/portfolio/">See our work</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> AWS &amp; GCP certified</span><span><span className="g">●</span> IaC from day one</span><span><span className="g">●</span> Ongoing retainers available</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">cloud-devops.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
