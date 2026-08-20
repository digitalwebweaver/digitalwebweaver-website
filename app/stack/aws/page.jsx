import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "AWS & Cloud Infrastructure — Our Cloud Stack | Digital Web Weaver" },
  description: "AWS, GCP, and Azure cloud architecture: EC2, ECS, Lambda, RDS, EKS and more. Multi-region HA, auto-scaling, security baselines, and cost optimisation. India-based senior team.",
  alternates: { canonical: "/stack/aws/" },
  openGraph: { title: "AWS & Cloud Infrastructure — Our Cloud Stack | Digital Web Weaver", description: "AWS, GCP, and Azure cloud architecture: EC2, ECS, Lambda, RDS, EKS and more. Multi-region HA, auto-scaling, security baselines, and cost optimisation. India-based senior team.", url: "/stack/aws/", type: "website" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={serviceSchema({ name: "Hire AWS / Cloud Engineers", description: "AWS, GCP, and Azure cloud architecture: EC2, ECS, Lambda, RDS, EKS and more. Multi-region HA, auto-scaling, security baselines, and cost optimisation. India-based senior team.", href: "/stack/aws/" })} />
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-build" data-target="s-build" title="AWS services">⚙</button>
      <button className="activitybar__btn" data-scroll="s-capabilities" data-target="s-capabilities" title="Patterns">❮❯</button>
      <button className="activitybar__btn" data-scroll="s-stack" data-target="s-stack" title="Matrix">▦</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="India · UK · US">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> aws.ts</button>
        <button className="tab" data-scroll="s-stack" data-target="s-stack"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> matrix.ts</button>
        <button className="tab" data-scroll="s-faq" data-target="s-faq"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> faq.md</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// aws.ts · EC2 · Lambda · RDS · EKS · Terraform</p>
            <span className="badge">STACK · AWS &amp; CLOUD</span>
            <h1 className="hero__h1">AWS &amp; cloud infrastructure we <span className="teal">use</span></h1>
            <p className="hero__lead">We architect AWS, GCP, and Azure solutions that are scalable, secure, and cost-optimised — using managed services where they add value, not because they're trendy.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Get free estimate</a>
              <a className="btn btn--ghost" href="#s-stack" data-scroll="s-stack">$ view --matrix</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>150+</b><span>clients trusted</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>3</b><span>clouds — AWS/GCP/Azure</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>4.9/5</b><span>average rating</span></div>
            </div>
          </div>
          <div className="formcard" id="estimate">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">estimate.form</span><span className="mut">— free</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">FREE ESTIMATE</p>
              <p className="form__title">What are you building?</p>
              <p className="form__lead">Tell us what you need — scope and estimate in 24 hours, free.</p>
              <div className="field-row">
                <div className="field"><label className="label">NAME *</label><input className="input" name="name" placeholder="Your name" required /></div>
                <div className="field"><label className="label">WORK EMAIL *</label><input className="input" name="email" type="email" placeholder="you@company.com" required /></div>
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
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>150+</div><div className="lbl">CLIENTS</div><div className="sub">▲ trusted worldwide</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>4.9/5</div><div className="lbl">CLUTCH</div><div className="sub">▲ verified reviews</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>16</div><div className="lbl">AWS_SERVICES</div><div className="sub">▲ compute to DevOps</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>24h</div><div className="lbl">ESTIMATE</div><div className="sub">▲ free · no commitment</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const services = [ <span className="c">// AWS services in our stack</span></p>
          <h2 className="title mono">AWS services in our stack</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">EC2 &amp; ECS</div><p className="svc__body">Managed compute for long-running services and containers.</p><div className="svc__foot"><span>compute.tf</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">AWS Lambda</div><p className="svc__body">Serverless functions for event-driven and API workloads.</p><div className="svc__foot"><span>lambda.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">RDS &amp; Aurora</div><p className="svc__body">Managed PostgreSQL and MySQL with automated backups.</p><div className="svc__foot"><span>rds.tf</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">S3 &amp; CloudFront</div><p className="svc__body">Object storage with global CDN for static assets.</p><div className="svc__foot"><span>cdn.tf</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Route 53 &amp; ACM</div><p className="svc__body">DNS management and free SSL certificates.</p><div className="svc__foot"><span>dns.tf</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">EKS &amp; Fargate</div><p className="svc__body">Managed Kubernetes and serverless containers.</p><div className="svc__foot"><span>eks.yml</span></div></div>
          </div>
        </section>

        <section id="s-capabilities" className="section reveal">
          <p className="eyebrow">// how we architect on AWS</p>
          <h2 className="title mono">Cloud architecture patterns</h2>
          <div className="grid grid-3">
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="6" r="3"></circle><circle cx="18" cy="18" r="3"></circle><path d="M9 11l6-4M9 13l6 4"></path></svg><span className="cap__title">Multi-region HA</span></div><p className="cap__body">Active-active and active-passive failover configurations across regions.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18V9m5 9V5m5 13v-7m5 7V3"></path></svg><span className="cap__title">Auto-scaling</span></div><p className="cap__body">ECS service auto-scaling and EC2 target tracking policies tuned to real load.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg><span className="cap__title">Security baseline</span></div><p className="cap__body">VPC isolation, IAM least-privilege, and GuardDuty on every account.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15l4-8 4 5 3-4 5 9"></path><path d="M4 19h16"></path></svg><span className="cap__title">Cost optimisation</span></div><p className="cap__body">Reserved instances, Savings Plans, and spot instance usage where it's safe.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="1.5"></rect><path d="M8 20h8M12 16v4"></path></svg><span className="cap__title">CloudWatch</span></div><p className="cap__body">Metrics, logs, alarms, and dashboard setup so issues surface before customers do.</p></div>
            <div className="cap"><div className="cap__head"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8l4 4-4 4M20 8l-4 4 4 4M14 4l-4 16"></path></svg><span className="cap__title">Disaster recovery</span></div><p className="cap__body">Cross-region backup and documented RTO/RPO playbooks, tested not just written.</p></div>
          </div>
        </section>

        <section id="s-stack" className="section reveal">
          <p className="eyebrow">import &#123; matrix &#125; from "@dww/aws" <span className="c">// our AWS service matrix</span></p>
          <h2 className="title mono">AWS service matrix</h2>
          <div className="stack-tabs" data-stack>
            <button className="stack-tab" data-cat="Compute">Compute <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Data">Data <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="Network">Network <span className="n">[4]</span></button>
            <button className="stack-tab" data-cat="DevOps">DevOps <span className="n">[4]</span></button>
          </div>
          <div className="stack-grid">
            <div className="stack-cell" data-cat="Compute"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>E2</span><div className="stack-cell__name">EC2</div><div className="stack-cell__cat">Compute</div></div>
            <div className="stack-cell" data-cat="Compute"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>Ec</span><div className="stack-cell__name">ECS Fargate</div><div className="stack-cell__cat">Compute</div></div>
            <div className="stack-cell" data-cat="Compute"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>λ</span><div className="stack-cell__name">Lambda</div><div className="stack-cell__cat">Compute</div></div>
            <div className="stack-cell" data-cat="Compute"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--yellow)"}}>Ek</span><div className="stack-cell__name">EKS</div><div className="stack-cell__cat">Compute</div></div>
            <div className="stack-cell" data-cat="Data"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Rd</span><div className="stack-cell__name">RDS Aurora</div><div className="stack-cell__cat">Data</div></div>
            <div className="stack-cell" data-cat="Data"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Dy</span><div className="stack-cell__name">DynamoDB</div><div className="stack-cell__cat">Data</div></div>
            <div className="stack-cell" data-cat="Data"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>El</span><div className="stack-cell__name">ElastiCache</div><div className="stack-cell__cat">Data</div></div>
            <div className="stack-cell" data-cat="Data"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--teal)"}}>Rs</span><div className="stack-cell__name">Redshift</div><div className="stack-cell__cat">Data</div></div>
            <div className="stack-cell" data-cat="Network"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>Vp</span><div className="stack-cell__name">VPC</div><div className="stack-cell__cat">Network</div></div>
            <div className="stack-cell" data-cat="Network"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>Cf</span><div className="stack-cell__name">CloudFront</div><div className="stack-cell__cat">Network</div></div>
            <div className="stack-cell" data-cat="Network"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>53</span><div className="stack-cell__name">Route 53</div><div className="stack-cell__cat">Network</div></div>
            <div className="stack-cell" data-cat="Network"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--pink)"}}>Lb</span><div className="stack-cell__name">ALB</div><div className="stack-cell__cat">Network</div></div>
            <div className="stack-cell" data-cat="DevOps"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--green)"}}>Cp</span><div className="stack-cell__name">CodePipeline</div><div className="stack-cell__cat">DevOps</div></div>
            <div className="stack-cell" data-cat="DevOps"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--green)"}}>Ec</span><div className="stack-cell__name">ECR</div><div className="stack-cell__cat">DevOps</div></div>
            <div className="stack-cell" data-cat="DevOps"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--green)"}}>Cfn</span><div className="stack-cell__name">CloudFormation</div><div className="stack-cell__cat">DevOps</div></div>
            <div className="stack-cell" data-cat="DevOps"><span className="stack-cell__idx"></span><span className="stack-cell__mono" style={{"color":"var(--green)"}}>Sm</span><div className="stack-cell__name">Secrets Manager</div><div className="stack-cell__cat">DevOps</div></div>
          </div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// stack-aws.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">AWS, GCP, or Azure — which do you recommend?<span className="sign">[+]</span></button><div className="faq__a"><p>AWS for most projects — widest managed service selection and mature ecosystem. GCP for ML-heavy workloads. Azure for Microsoft-integrated enterprises.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you migrate our on-premise servers to AWS?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — lift-and-shift to EC2, re-platform to ECS/RDS, or re-architect to serverless. We scope the right approach per workload.</p></div></div>
            <div className="faq__item"><button className="faq__q">Do you manage cloud costs?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — we set up Cost Explorer alerts, right-size instances monthly, and identify Reserved Instance opportunities.</p></div></div>
            <div className="faq__item"><button className="faq__q">Can you set up Kubernetes on AWS?<span className="sign">[+]</span></button><div className="faq__a"><p>Yes — EKS with managed node groups, Helm charts, and autoscaler. Or ECS Fargate if K8s overhead isn't justified.</p></div></div>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --cloud-review<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Ready for a cloud architecture review?</h2>
          <p className="cta__lead">A free review of your current cloud setup with cost and security recommendations, from senior engineers — within 24 hours.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Start a project</Link>
            <Link className="btn btn--ghost" href="/portfolio/">View our work</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Senior engineers only</span><span><span className="g">●</span> 48-hr match</span><span><span className="g">●</span> No lock-in</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">aws.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
