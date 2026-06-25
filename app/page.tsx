import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import StatsCounter from "@/components/home/StatsCounter";
import CodePanelAnimator from "@/components/home/CodePanelAnimator";
import JsonLd from "@/components/seo/JsonLd";
import FaqSection from "@/components/sections/FaqSection";

const TechStackTabs = dynamic(() => import("@/components/home/TechStackTabs"));

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://digitalwebweaver.com/#localbusiness",
  name: "Digital Web Weaver",
  image: "https://digitalwebweaver.com/icon-512.png",
  url: "https://digitalwebweaver.com",
  email: "info@digitalwebweaver.com",
  telephone: "+91-9712515105",
  foundingDate: "2013-03-18",
  address: {
    "@type": "PostalAddress",
    streetAddress: "207/208 Sanket Heights, Sunpharma Road, Atladra",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390012",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.3072,
    longitude: 73.1812,
  },
  areaServed: [
    { "@type": "City", name: "Vadodara" },
    { "@type": "State", name: "Gujarat" },
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "South Africa" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Ivory Coast" },
  ],
  priceRange: "₹₹₹",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  serviceType: [
    "Web Development",
    "Custom Software Development",
    "Mobile App Development",
    "AI Solutions",
    "SaaS Development",
    "ERP Development",
  ],
  parentOrganization: { "@id": "https://digitalwebweaver.com/#organization" },
};

const HOME_FAQ = [
  {
    q: "What does Digital Web Weaver do?",
    a: "Digital Web Weaver is a senior software engineering studio. We build custom websites, web applications, mobile apps, SaaS platforms, ERP/CRM systems, and AI automation — from idea to production — for businesses in India and worldwide.",
  },
  {
    q: "Where is Digital Web Weaver located?",
    a: "We are based in Vadodara, Gujarat, India (207/208 Sanket Heights, Sunpharma Road, Atladra, Vadodara 390012), and serve clients across India, the United Kingdom, South Africa, and Ivory Coast.",
  },
  {
    q: "How much does it cost to build a website or app?",
    a: "A business website typically costs ₹25,000–₹2,00,000, while web apps and custom software start around ₹2,00,000 and scale with complexity. We send a clear, itemised estimate within 24 hours of understanding your project.",
  },
  {
    q: "What technologies do you work with?",
    a: "We build with React, Next.js, Node.js, Python, Laravel, Vue, React Native, Flutter, PostgreSQL, AWS, and modern AI/LLM stacks — choosing the right tools for each project rather than forcing a template.",
  },
  {
    q: "Do you work with international and remote clients?",
    a: "Yes. We work remotely with clients across the UK, South Africa, West Africa, and beyond, with clear communication, documented code, and full source-code ownership handed to you.",
  },
  {
    q: "How experienced is the team?",
    a: "Digital Web Weaver has been building production software since 2013, with 200+ systems shipped across e-commerce, healthcare, fintech, education, logistics, and more.",
  },
];

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://digitalwebweaver.com/",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".faq-q", ".faq-a"],
  },
};

export const metadata: Metadata = {
  title: "Custom Software Development Company in India",
  description: "Custom software development company in India — enterprise software, SaaS platforms, mobile apps, and AI solutions. 200+ projects delivered since 2013.",
  alternates: { canonical: "/" },
  openGraph: { url: "/", type: "website" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <CodePanelAnimator />
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow reveal">Senior engineering studio · est. 2013</span>
              <h1 className="reveal" style={{ marginTop: 22 }}>
                We build <span className="accent">high-performance</span> software <span className="light">that ships and scales.</span>
              </h1>
              <p className="hero-sub reveal">
                A small team of senior engineers and designers building production-grade web platforms, SaaS products, and AI systems — for founders and enterprises who care about how things are made.
              </p>
              <div className="hero-actions reveal">
                <Link href="/contact/" className="btn btn-primary">Start a project <span className="arr">↗</span></Link>
                <Link href="/portfolio/" className="btn btn-ghost">View our work</Link>
              </div>
              <div className="hero-trust reveal">
                <span className="stars">★★★★★</span>
                <b>4.9</b> avg rating
                <span className="divider-dot"></span>
                <b>200+</b> systems shipped
                <span className="divider-dot"></span>
                <b>90%</b> client retention
              </div>
            </div>

            <div className="hero-visual reveal">
              <div className="code-panel">
                <div className="code-top">
                  <span className="dot" style={{ background: "#ec4117" }}></span>
                  <span className="dot" style={{ background: "#e8c07d" }}></span>
                  <span className="dot" style={{ background: "#a3c98a" }}></span>
                  <span className="label">deploy.ts — digitalwebweaver</span>
                </div>
                <div className="code-body">
                  <span className="ln"><span className="cm">{"// shipped to production · 0 downtime"}</span></span>
                  <span className="ln"><span className="kw">export async function</span> <span className="fn">deploy</span>(<span className="vr">build</span>) {"{"}</span>
                  <span className="ln">{"  "}<span className="kw">const</span> <span className="vr">tests</span> = <span className="kw">await</span> <span className="fn">runSuite</span>(<span className="nm">1247</span>);</span>
                  <span className="ln">{"  "}<span className="kw">if</span> (<span className="vr">tests</span>.<span className="vr">passing</span>) {"{"}</span>
                  <span className="ln">{"    "}<span className="kw">await</span> <span className="fn">rollout</span>{"({ "}<span className="vr">canary</span>: <span className="nm">true</span> {"});"}</span>
                  <span className="ln">{"    "}<span className="kw">return</span> <span className="st">&quot;live in 4.1s ✦&quot;</span>;</span>
                  <span className="ln">{"  }"}</span>
                  <span className="ln">{"}"}</span>
                  <span className="ln"><span className="cm">{"// → 99.98% uptime · p95 < 120ms"}</span></span>
                </div>
              </div>
              <div className="float-badge fb-2">
                <div className="fi">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" strokeLinejoin="round"/></svg>
                </div>
                <div className="ft"><b>2-week sprints</b><span>Ship every Friday</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="marquee">
          <div className="marquee-track">
            <span>React</span><span>Next.js</span><span>TypeScript</span><span>Node</span><span>Python</span><span>Go</span><span>PostgreSQL</span><span>Kubernetes</span><span>AWS</span><span>AI / LLM Systems</span><span>React Native</span>
            <span>React</span><span>Next.js</span><span>TypeScript</span><span>Node</span><span>Python</span><span>Go</span><span>PostgreSQL</span><span>Kubernetes</span><span>AWS</span><span>AI / LLM Systems</span><span>React Native</span>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <div className="wrap">
        <StatsCounter />
      </div>

      {/* ===== SERVICES ===== */}
      <section className="sec" id="services">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">What we do</span>
              <h2 style={{ marginTop: 18 }}>Full-spectrum<br/>engineering</h2>
            </div>
            <p>One partner for every layer of your product — from first sketch to global scale.</p>
          </div>
          <div className="svc-grid">
            <div className="svc reveal">
              <span className="idx">01</span>
              <div className="si"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 6L3 12l5 6M16 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <h3>Web &amp; SaaS platforms</h3>
              <p>Robust, scalable products built on modern stacks — from MVP to enterprise-grade systems serving millions.</p>
              <div className="svc-tags"><span>Next.js</span><span>Node</span><span>Postgres</span></div>
            </div>
            <div className="svc reveal">
              <span className="idx">02</span>
              <div className="si"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2" strokeLinecap="round"/></svg></div>
              <h3>Mobile applications</h3>
              <p>Native-feeling iOS and Android apps from a single codebase, with offline-first sync and real-time updates.</p>
              <div className="svc-tags"><span>React Native</span><span>Swift</span></div>
            </div>
            <div className="svc reveal">
              <span className="idx">03</span>
              <div className="si"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" strokeLinecap="round"/></svg></div>
              <h3>AI &amp; automation</h3>
              <p>LLM-powered features, retrieval pipelines, and workflow automation wired safely into your real systems.</p>
              <div className="svc-tags"><span>LLM</span><span>RAG</span><span>Agents</span></div>
            </div>
            <div className="svc reveal">
              <span className="idx">04</span>
              <div className="si"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-6 9 6v9a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 21V13h6v8"/></svg></div>
              <h3>Cloud &amp; DevOps</h3>
              <p>CI/CD, infrastructure-as-code, and observability so deploys are boring and uptime stays above the line.</p>
              <div className="svc-tags"><span>AWS</span><span>K8s</span><span>Terraform</span></div>
            </div>
            <div className="svc reveal">
              <span className="idx">05</span>
              <div className="si"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/></svg></div>
              <h3>Product design</h3>
              <p>Interfaces that feel inevitable — research, design systems, and prototypes validated before a line is written.</p>
              <div className="svc-tags"><span>UX</span><span>Figma</span><span>Systems</span></div>
            </div>
            <div className="svc reveal">
              <span className="idx">06</span>
              <div className="si"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20" strokeLinecap="round"/><circle cx="12" cy="12" r="9"/></svg></div>
              <h3>Embedded teams</h3>
              <p>Drop a senior squad into your org — dedicated engineers and a tech lead who own outcomes, not tickets.</p>
              <div className="svc-tags"><span>Staff aug</span><span>Tech lead</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="sec" id="about" style={{ paddingTop: 30 }}>
        <div className="wrap">
          <div className="about">
            <div className="about-visual reveal">
              <div className="blob"></div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M8 6L3 12l5 6M16 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div className="about-badge"><div className="bn">8+</div><div className="bl">Years building</div></div>
            </div>
            <div className="about-copy reveal">
              <span className="eyebrow">The studio</span>
              <h2 style={{ marginTop: 18 }}>We&apos;re not an agency —<br/>we&apos;re your <span className="accent">engineering partner</span></h2>
              <p className="lead">Digital Web Weaver was founded on one belief: software should be built by people who care deeply about the craft. We&apos;re a tight team of senior engineers, designers, and architects — no juniors hidden behind the contract, no handoffs to a team you&apos;ll never meet.</p>
              <ul className="checklist">
                <li><span className="ck"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round"/></svg></span> Senior-only engineers across frontend, backend, mobile &amp; cloud</li>
                <li><span className="ck"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round"/></svg></span> A dedicated lead and full code ownership on every engagement</li>
                <li><span className="ck"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round"/></svg></span> Transparent weekly progress — you always know where things stand</li>
                <li><span className="ck"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round"/></svg></span> Security-first, standards-aligned delivery processes</li>
              </ul>
              <div className="pills"><span>SaaS experts</span><span>Cloud-native</span><span>AI-ready</span><span>Full-stack</span></div>
              <Link href="/about/" className="btn btn-primary">How we work <span className="arr">↗</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS (dark) ===== */}
      <section className="dark sec" id="process">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow on-dark">How we work</span>
              <h2 style={{ marginTop: 18 }}>From vision to<br/>production</h2>
            </div>
            <p>A tested, battle-hardened framework — built so momentum never stalls between idea and launch.</p>
          </div>
          <div className="process-layout">
            <div className="steps reveal">
              <div className="step"><span className="sn">01</span><div><h3>Discovery &amp; strategy</h3><p>Deep-dive workshops to map your business, users, and constraints — then a precise blueprint before a single line is written.</p></div></div>
              <div className="step"><span className="sn">02</span><div><h3>Architecture &amp; design</h3><p>System architecture, data models, and high-fidelity interface design reviewed and approved before development begins.</p></div></div>
              <div className="step"><span className="sn">03</span><div><h3>Agile build</h3><p>Two-week sprints with live demo sessions, CI/CD pipelines, and automated testing throughout. You see progress every Friday.</p></div></div>
              <div className="step"><span className="sn">04</span><div><h3>Launch &amp; scale</h3><p>Production deployment, performance tuning, and monitoring — plus dedicated post-launch support to keep you ahead.</p></div></div>
            </div>
            <div className="deliverables reveal">
              <h4>What you get, every week</h4>
              <div className="deliv"><div className="di"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round"/></svg></div><div><b>Status reports</b><span>Clear written progress, every week</span></div></div>
              <div className="deliv"><div className="di"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 6L3 12l5 6M16 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round"/></svg></div><div><b>Full repo access</b><span>Your code, in your org, from day one</span></div></div>
              <div className="deliv"><div className="di"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round"/></svg></div><div><b>Live demo sessions</b><span>See working software bi-weekly</span></div></div>
              <div className="deliv"><div className="di"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" strokeLinejoin="round"/></svg></div><div><b>IP &amp; NDA protection</b><span>Everything you build stays yours</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPARISON ===== */}
      <section className="sec" id="why">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Why choose us</span>
              <h2 style={{ marginTop: 18 }}>Digital Web Weaver vs.<br/>the typical vendor</h2>
            </div>
            <p>See why teams choose a focused studio over a typical IT outsourcing shop.</p>
          </div>
          <div className="cmp reveal">
            <div className="cmp-row cmp-head">
              <div className="cmp-cell feat">Feature / capability</div>
              <div className="cmp-cell mid">Digital Web Weaver</div>
              <div className="cmp-cell right">Typical vendor</div>
            </div>
            <div className="cmp-row"><div className="cmp-cell feat">Full source-code ownership</div><div className="cmp-cell mid"><span className="yes">✓</span></div><div className="cmp-cell right"><span className="no">✕</span></div></div>
            <div className="cmp-row"><div className="cmp-cell feat">Senior-only engineering team</div><div className="cmp-cell mid"><span className="yes">✓</span></div><div className="cmp-cell right">Sometimes</div></div>
            <div className="cmp-row"><div className="cmp-cell feat">Dedicated tech lead</div><div className="cmp-cell mid"><span className="yes">✓</span></div><div className="cmp-cell right"><span className="no">✕</span></div></div>
            <div className="cmp-row"><div className="cmp-cell feat">On-time delivery guarantee</div><div className="cmp-cell mid"><span className="yes">✓</span></div><div className="cmp-cell right">Rare</div></div>
            <div className="cmp-row"><div className="cmp-cell feat">Automated testing &amp; CI/CD</div><div className="cmp-cell mid"><span className="yes">✓</span></div><div className="cmp-cell right">Sometimes</div></div>
            <div className="cmp-row"><div className="cmp-cell feat">Transparent weekly reporting</div><div className="cmp-cell mid"><span className="yes">✓</span></div><div className="cmp-cell right"><span className="no">✕</span></div></div>
          </div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="sec" id="stack" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="stack-wrap">
            <div className="reveal">
              <span className="eyebrow">Technology</span>
              <h2 style={{ marginTop: 18, fontSize: "clamp(2rem,3.6vw,2.9rem)" }}>A modern, proven stack</h2>
              <p style={{ color: "var(--muted)", marginTop: 16, fontSize: 16 }}>Battle-tested tools chosen for speed, security, and scale — not for what&apos;s trendy. We pick the right tool for your problem, then go deep.</p>
            </div>
            <div className="reveal">
              <TechStackTabs />
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="sec" id="industries">
        <div className="wrap">
          <div className="sec-head reveal">
            <div><span className="eyebrow">Industries</span><h2 style={{ marginTop: 18 }}>Domain depth<br/>across sectors</h2></div>
            <p>Eight years of shipping into regulated, high-stakes industries.</p>
          </div>
          <div className="ind-grid reveal">
            <div className="ind"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.5 12h11" strokeLinecap="round" strokeLinejoin="round"/></svg><span>E-commerce</span></div>
            <div className="ind"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s-7-4.5-9-9a5 5 0 019-3 5 5 0 019 3c-2 4.5-9 9-9 9z" strokeLinejoin="round"/></svg><span>HealthTech</span></div>
            <div className="ind"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 21V10l9-7 9 7v11" strokeLinejoin="round"/><path d="M9 21v-6h6v6"/></svg><span>FinTech</span></div>
            <div className="ind"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeLinejoin="round"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></svg><span>EdTech</span></div>
            <div className="ind"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="1" y="6" width="14" height="11" rx="1"/><path d="M15 9h4l3 3v5h-7" strokeLinejoin="round"/><circle cx="6" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/></svg><span>Logistics</span></div>
            <div className="ind"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 21V8l7-5 7 5v13" strokeLinejoin="round"/><path d="M10 21v-5h4v5M21 21H3"/></svg><span>Real estate</span></div>
            <div className="ind"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6 2v6a6 6 0 0012 0V2M9 2v5M15 2v5M12 14v8" strokeLinecap="round"/></svg><span>Food &amp; retail</span></div>
            <div className="ind"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M12 18v3"/></svg><span>Media &amp; SaaS</span></div>
            <div className="ind"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 6h18M7 6V4h10v2M5 6l1 14h12l1-14" strokeLinejoin="round"/></svg><span>Manufacturing</span></div>
            <div className="ind"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2a7 7 0 00-4 13v3h8v-3a7 7 0 00-4-13z"/><path d="M12 6v4M10 10h4" strokeLinecap="round"/></svg><span>Legal tech</span></div>
            <div className="ind"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 22c5-3 8-7 8-12a8 8 0 10-16 0c0 5 3 9 8 12z" strokeLinejoin="round"/><path d="M12 11a3 3 0 100-6 3 3 0 000 6z"/></svg><span>Green tech</span></div>
            <div className="ind"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 17l6-6 4 4 6-7" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 8h6v6" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Analytics</span></div>
          </div>
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section className="sec" id="work">
        <div className="wrap">
          <div className="sec-head reveal">
            <div><span className="eyebrow">Selected work</span><h2 style={{ marginTop: 18 }}>Recent<br/>case studies</h2></div>
            <Link href="/portfolio/" className="btn btn-ghost">View all projects ↗</Link>
          </div>
          <div className="case-grid">
            <div className="case reveal">
              <div className="case-top c1"><span className="case-tag">Mobile · Logistics</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="1" y="6" width="14" height="11" rx="1"/><path d="M15 9h4l3 3v5h-7" strokeLinejoin="round"/><circle cx="6" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/></svg></div>
              <div className="case-body"><h3>Fleet dispatch platform</h3><p>Real-time booking and GPS tracking for a B2B cab operator — cut dispatch time by 40% across 2,000 daily trips.</p><div className="case-stack"><span>React Native</span><span>Node</span><span>MongoDB</span></div></div>
            </div>
            <div className="case reveal">
              <div className="case-top c2"><span className="case-tag">SaaS · EdTech</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeLinejoin="round"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></svg></div>
              <div className="case-body"><h3>Learning management system</h3><p>Full LMS with live sessions, grade tracking, and compliance reporting — serving 50k students across three regions.</p><div className="case-stack"><span>Next.js</span><span>Postgres</span><span>AWS</span></div></div>
            </div>
            <div className="case reveal">
              <div className="case-top c3"><span className="case-tag">Enterprise · ERP</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" strokeLinecap="round"/></svg></div>
              <div className="case-body"><h3>Operations ERP suite</h3><p>Custom ERP for a manufacturer — production planning, inventory, and multi-plant reporting in one live system.</p><div className="case-stack"><span>React</span><span>Python</span><span>Docker</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="sec" id="journey" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div><span className="eyebrow">The journey</span><h2 style={{ marginTop: 18 }}>Built over <span className="accent">8 years</span><br/>of focused work</h2></div>
            <p>From a two-person team to a full studio shipping across 15 countries.</p>
          </div>
          <div className="tl-layout">
            <div className="timeline reveal">
              <div className="tl-item"><div className="yr">2013 · The beginning</div><h3>Two people, one rule</h3><p>Started as a freelance pair with a single principle: never ship code we wouldn&apos;t run ourselves. First 20 projects, all referred.</p></div>
              <div className="tl-item"><div className="yr">2017 · Going full-stack</div><h3>A real studio</h3><p>Expanded to a senior team of designers and engineers serving clients on four continents. Team grew to fifteen.</p></div>
              <div className="tl-item"><div className="yr">2020 · SaaS &amp; AI focus</div><h3>Deeper, not wider</h3><p>Doubled down on product engineering. Shipped our 100th platform and our first AI features into production systems.</p></div>
              <div className="tl-item"><div className="yr">2026 · Today</div><h3>A global partner</h3><p>200+ systems shipped with senior-only teams across mobile, cloud, and AI — and a 90% client-retention rate.</p></div>
            </div>
            <div className="tl-stats reveal">
              <div className="tl-stat"><div className="n">73<span style={{ fontSize: "1.4rem" }}>+</span></div><div className="l">Projects delivered</div></div>
              <div className="tl-stat fill"><div className="n">15</div><div className="l">Countries served</div></div>
              <div className="tl-stat"><div className="n">50<span style={{ fontSize: "1.4rem" }}>+</span></div><div className="l">Expert engineers</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS (dark) ===== */}
      <section className="dark sec testi" id="clients">
        <div className="wrap">
          <div className="sec-head reveal">
            <div><span className="eyebrow on-dark">Client words</span><h2 style={{ marginTop: 18, color: "var(--on-dark)" }}>Trusted by leaders<br/>worldwide</h2></div>
            <p>The same teams keep coming back — that&apos;s the metric we care about most.</p>
          </div>
          <div className="testi-grid">
            <div className="quote reveal">
              <div className="stars">★★★★★</div>
              <p>Delivered our platform on time and under budget. Their team understood our product better than we did — a truly professional partner.</p>
              <div className="who"><div className="av">JE</div><div><b>James E.</b><span>CTO · SaaS scale-up</span></div></div>
            </div>
            <div className="quote reveal">
              <div className="stars">★★★★★</div>
              <p>Our custom ERP cut operational overhead by 40%. The team was responsive and transparent throughout, and delivered exactly what was promised.</p>
              <div className="who"><div className="av">SA</div><div><b>Sophie A.</b><span>Ops Director · Manufacturing</span></div></div>
            </div>
            <div className="quote reveal">
              <div className="stars">★★★★★</div>
              <p>From an MVP to a fully scaled product in under twelve months. Their architectural decisions saved us from costly rebuilds — they think long-term.</p>
              <div className="who"><div className="av">AM</div><div><b>Adnan M.</b><span>Founder · HealthTech</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <JsonLd data={homeFaqSchema} />
      <JsonLd data={speakableSchema} />
      <FaqSection
        eyebrow="FAQ"
        heading="Questions, answered"
        body="The things businesses most often ask us before starting a project."
        items={HOME_FAQ}
      />

      {/* ===== CTA ===== */}
      <section id="contact">
        <div className="wrap">
          <div className="cta reveal">
            <div className="cta-inner">
              <span className="eyebrow" style={{ color: "rgba(255,255,255,.85)" }}>Let&apos;s build</span>
              <h2 style={{ marginTop: 18 }}>Ready to build something extraordinary?</h2>
              <p>Get a free technical consultation and a detailed project estimate from our senior engineers — within 24 hours. No commitment required.</p>
              <div className="cta-actions">
                <Link href="/contact/" className="btn btn-primary">Start a project <span className="arr">↗</span></Link>
                <Link href="/contact/" className="btn btn-ghost">Book a call</Link>
              </div>
              <div className="cta-meta">
                <span>● Free consultation</span>
                <span>● 24-hour response</span>
                <span>● NDA signed first</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
