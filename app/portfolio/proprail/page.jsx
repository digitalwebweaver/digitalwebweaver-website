import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { caseStudySchema } from "@/lib/schema";

export const metadata = {
  title: { absolute: "PropRail — Property Management & Accounting Case Study | Digital Web Weaver" },
  description: "How Digital Web Weaver built PropRail — a cloud-based, multi-entity property management and accounting platform for a UK outsourced accounting firm. RICS-compliant, Sage 50 integrated, 190+ automated tests.",
  alternates: { canonical: "/portfolio/proprail/" },
  openGraph: { title: "PropRail — Property Management & Accounting Case Study | Digital Web Weaver", description: "How Digital Web Weaver built PropRail — a cloud-based, multi-entity property management and accounting platform for a UK outsourced accounting firm. RICS-compliant, Sage 50 integrated, 190+ automated tests.", url: "/portfolio/proprail/", type: "article" }
};

export default function Page() {
  return (
    <>
    <JsonLd data={caseStudySchema({ headline: "PropRail — Cloud-Based Commercial Property Management & Accounting System", description: "How Digital Web Weaver built PropRail — a cloud-based, multi-entity property management and accounting platform for a UK outsourced accounting firm.", href: "/portfolio/proprail/", datePublished: "2026-09-28", image: "/assets/proprail-analytics-dashboard.png" })} />
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Overview">⌂</button>
      <button className="activitybar__btn" data-scroll="s-challenge" data-target="s-challenge" title="The challenge">⚠</button>
      <button className="activitybar__btn" data-scroll="s-solution" data-target="s-solution" title="The solution">❯</button>
      <span className="activitybar__geo" title="United Kingdom">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> proprail.tsx</button>
        <button className="tab" data-scroll="s-challenge" data-target="s-challenge"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> challenge.md</button>
        <button className="tab" data-scroll="s-solution" data-target="s-solution"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> solution.md</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// proprail.tsx · portfolio case study · PropTech / accounting</p>
            <span className="badge">CASE STUDY</span>
            <h1 className="hero__h1">Property accounting that can't tolerate a <span className="pink">silent error</span></h1>
            <p className="hero__lead">PropRail is a cloud-based, multi-entity property management and accounting platform Digital Web Weaver built for a UK-based outsourced accounting firm — running multiple property-owning SPVs and a management company across a commercial property portfolio, on one shared, tested, double-entry ledger.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <Link className="btn btn--primary" href="/contact/">▶ Start a similar project</Link>
              <a className="btn btn--ghost" href="https://proprail.digitalwebweaver.com/" target="_blank" rel="noopener">↗ View live demo</a>
              <a className="btn btn--ghost teal" href="#s-solution" data-scroll="s-solution">$ see --the-solution</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>190+</b><span>automated tests</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>9-role</b><span>access model</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>Multi-entity</b><span>SPVs + management co.</span></div>
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>RICS</b><span>2nd edition compliant</span></div>
            </div>
          </div>
          <div className="code">
            <div className="code__head"><span className="fn">quick-facts.json</span><span className="mut">— live</span></div>
            <div className="code__body">
              <span className="ln">1</span><span className="cmt">// PropRail — quick facts</span>
              <span className="ln">2</span><span className="kw">export const <span className="fnn">proprail</span> = &#123;</span>
              <span className="ln">3</span><span className="txt">  client: <span className="str">"UK outsourced accounting firm"</span>,</span>
              <span className="ln">4</span><span className="txt">  role: <span className="str">"design, build, test, deploy"</span>,</span>
              <span className="ln">5</span><span className="txt">  platform: <span className="str">"cloud web app, responsive"</span>,</span>
              <span className="ln">6</span><span className="txt">  test_coverage: <span className="str">"190+ automated tests"</span>,</span>
              <span className="ln">7</span><span className="kw">&#125;;</span>
              <span className="ln">8</span><span><span className="caret"></span></span>
            </div>
            <div className="code__foot"><span className="live"></span><span>proprail.digitalwebweaver.com · live demo</span></div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>190+</div><div className="lbl">AUTOMATED_TESTS</div><div className="sub">▲ every financial module</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>9</div><div className="lbl">ROLES</div><div className="sub">▲ module-by-module permissions</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>2-layer</div><div className="lbl">DATA_ISOLATION</div><div className="sub">▲ Postgres RLS + app-layer scope</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>Zero-touch</div><div className="lbl">CI/CD</div><div className="sub">▲ tested &amp; deployed on every merge</div></div>
        </section>

        <section id="s-challenge" className="section reveal">
          <p className="eyebrow">// the challenge — what generic accounting software gets wrong</p>
          <h2 className="title mono">Five pressures generic software doesn't handle</h2>
          <p className="subtitle">Outsourced accounting firms managing several property-owning SPVs and a management company face problems that generic accounting or property software rarely addresses well.</p>
          <div className="grid grid-3 stagger">
            <div className="cap" style={{"borderTop":"3px solid var(--red)"}}><div className="cap__title">Data segregation risk</div><p className="cap__body">Spreadsheets and generic accounting packages make it easy to mix up which SPV a transaction belongs to — serious when each SPV has different owners, auditors and reporting obligations.</p></div>
            <div className="cap" style={{"borderTop":"3px solid var(--red)"}}><div className="cap__title">RICS compliance pressure</div><p className="cap__body">The RICS "Service Charges in Commercial Property" statement (2nd edition, mandatory from 31 Dec 2025) imposes strict deadlines and rules that are difficult to track consistently by hand.</p></div>
            <div className="cap" style={{"borderTop":"3px solid var(--red)"}}><div className="cap__title">Fragmented tooling</div><p className="cap__body">Property management, rent collection, service charge reconciliation, VAT and Sage bookkeeping were spread across disconnected spreadsheets and systems.</p></div>
            <div className="cap" style={{"borderTop":"3px solid var(--red)"}}><div className="cap__title">Limited real-time oversight</div><p className="cap__body">Practice principals and senior accountants lacked a single, live view of arrears, rent reviews, service charge status and compliance deadlines across the portfolio.</p></div>
            <div className="cap" style={{"borderTop":"3px solid var(--red)"}}><div className="cap__title">Inconsistent access control</div><p className="cap__body">Property managers, credit controllers, accountants and auditors all need very different, tightly scoped access — hard to enforce with shared spreadsheets or generic licences.</p></div>
          </div>
        </section>

        <section id="s-solution" className="section reveal">
          <p className="eyebrow">// the solution — one system, one tested ledger</p>
          <h2 className="title mono">The entire accounting cycle, on one ledger</h2>
          <p className="subtitle">PropRail brings leases, rent invoicing, rent reviews, service charges, recharges, accounts payable, intercompany transactions, VAT and Sage 50 UK export into a single system, built on one shared, tested, double-entry ledger. Data isolation between client entities is enforced at the database level, not just in application code — and nothing is ever silently edited or deleted; every correction is a fully traceable reversal.</p>

          <div className="grid grid-2 stagger" style={{"marginTop":"28px"}}>
            <div className="shot">
              <div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">Analytics Dashboard</span></div>
              <img className="shot__img" src="/assets/proprail-analytics-dashboard.png" alt="PropRail's analytics dashboard, showing rent roll, occupancy, arrears, collection rate, service charge variance, and a tenant concentration risk signal" width="1909" height="950" loading="lazy" decoding="async" />
              <p className="shot__caption">A live, portfolio-wide view of rent roll, arrears and collection rate — with risk signals, like tenant concentration, flagged automatically.</p>
            </div>
            <div className="shot">
              <div className="work__bar"><span className="d dot--red"></span><span className="d dot--amber"></span><span className="d dot--green"></span><span className="work__host">Service Charge Reconciliation</span></div>
              <img className="shot__img" src="/assets/proprail-service-charge-reconciliation.png" alt="PropRail's service charge reconciliation screen, showing category-by-category budget vs actual apportioned per tenant, with a RICS timescale compliance flag" width="1895" height="949" loading="lazy" decoding="async" />
              <p className="shot__caption">RICS-compliant reconciliation, apportioned per tenant by category — with RICS deadline compliance checked automatically, not tracked by hand.</p>
            </div>
          </div>

          <div className="article" style={{"marginTop":"36px"}}>
            <h3>Foundation, security &amp; user management</h3>
            <ul>
              <li>Multi-entity architecture — multiple SPVs and a management company within one system, with data fully segregated entity-by-entity.</li>
              <li>A 9-role access model (Super Admin, Practice Admin, Property Manager, Credit Controller, Accountant, Senior Accountant, Client, Tenant, Auditor), each with an independently configurable, module-by-module permission matrix.</li>
              <li>Per-entity role assignment — the same user can hold different roles on different entities, with access always evaluated per entity, never globally.</li>
              <li>Mandatory two-factor authentication enforced automatically for every financial/administrative role.</li>
              <li>Secure, email-based user invitation flow — no public self-service registration.</li>
              <li>Full audit logging of every login attempt and every financial posting.</li>
            </ul>

            <h3>Company, property &amp; lease management</h3>
            <ul>
              <li>Entity setup with registered address, company number, VAT registration, option-to-tax tracking, bank details, and chart-of-accounts templating per entity.</li>
              <li>Full property and unit register, including title numbers and addresses.</li>
              <li>Compliance certificate tracking (fire safety, EPC, and more) with automatic urgency alerts as expiry approaches.</li>
              <li>Full lease lifecycle management, including break clauses, surrenders, and automatic mid-quarter proration for leases starting or ending outside standard UK quarter days.</li>
            </ul>

            <h3>Rent invoicing &amp; rent reviews</h3>
            <ul>
              <li>Automated batch quarterly rent invoicing aligned to UK quarter days, safe to re-run without ever double-invoicing a period.</li>
              <li>Ad-hoc invoicing and credit notes, posting immediately to the ledger.</li>
              <li>VAT-aware invoicing by default — exempt unless the owning entity has opted to tax.</li>
              <li>A draft-and-approve workflow before invoices post.</li>
              <li>RPI-indexed and Open Market Value (OMV) rent reviews, with a 3-month lookahead due-list and automatic shortfall invoice generation on confirmation.</li>
            </ul>

            <h3>Tenant ledger &amp; credit control</h3>
            <ul>
              <li>Chronological, running-balance tenant ledger.</li>
              <li>Automated invoice ageing into configurable bands, feeding a live aged-debt report.</li>
              <li>Manual and automatic receipt allocation, with overpayments correctly retained as a tenant credit balance.</li>
              <li>Automated first-reminder emails for overdue invoices, sent once per eligible invoice.</li>
              <li>Manually logged, fully audit-trailed credit-control chase notes.</li>
            </ul>

            <h3>Service charges — RICS-compliant budgeting &amp; reconciliation</h3>
            <ul>
              <li>A full service charge budget builder with category-by-category apportionment (floor area, fixed share, or lease share).</li>
              <li>Vacant-unit costs correctly defaulted to landlord cost, never silently redistributed onto occupied tenants.</li>
              <li>Budget locking with full balance validation.</li>
              <li>Year-end reconciliation apportioned correctly per tenant, including time-apportionment for tenants who surrendered mid-year.</li>
              <li>Built-in RICS 2nd-edition compliance tracking — budget-issue timing, the 120-day year-end accounts deadline, the 18-month cost cut-off rule, and fixed (never percentage-based) management fees, all flagged automatically.</li>
              <li>Tenant-facing, downloadable PDF service charge certificates.</li>
              <li>Locked reconciliations are never edited in place — corrections are always a separate, traceable adjustment.</li>
            </ul>

            <h3>Recharges, accounts payable &amp; intercompany</h3>
            <ul>
              <li>Recharge tracking, separate from the main service charge cycle, each with its own VAT treatment.</li>
              <li>Accounts Payable invoice recording with an approval workflow and nominal-code mapping validation.</li>
              <li>Intercompany recharges between related SPVs and the management company, fully auditable.</li>
            </ul>

            <h3>VAT &amp; Sage 50 UK integration</h3>
            <ul>
              <li>A quarterly VAT workbook, automatically compiling output and input VAT per entity.</li>
              <li>VAT coding consistency checks that block filing on any inconsistency.</li>
              <li>Filing locks a period's transactions — later corrections are always applied forward, never retrospectively.</li>
              <li>Maker/checker VAT compilation, with senior sign-off required to file.</li>
              <li>Correctly formatted Sage 50 UK batch export for every posted period, with clean, non-duplicated adjustment exports on re-run.</li>
              <li>CSV bank statement import for manual reconciliation review.</li>
            </ul>

            <h3>Reporting, analytics &amp; search</h3>
            <ul>
              <li>Live rent roll, with current rent and upcoming review/expiry dates per unit.</li>
              <li>Budget vs. actual reporting, with strictly read-only report screens — reporting can never alter posted data.</li>
              <li>Role-specific dashboards — due-lists, arrears queues and activity feeds tailored to each of the 9 roles.</li>
              <li>A dedicated, chart-based Analytics Dashboard giving leadership a live, visual view of the whole portfolio.</li>
              <li>Fast, permission-respecting global search across tenants, leases, properties and invoices.</li>
            </ul>

            <h3>Notifications &amp; tenant self-service</h3>
            <ul>
              <li>Configurable per-user notification preferences.</li>
              <li>Automated payment-due reminders, arrears-threshold alerts, and compliance-certificate urgency alerts.</li>
              <li>A structured tenant query system for raising and tracking issues against an account or lease.</li>
            </ul>

            <h3>Technical architecture</h3>
            <p>Every technology choice was made deliberately for a system handling real financial data across multiple legal entities — favouring proven, secure, enterprise-grade components over experimental or short-lived tooling.</p>
            <table>
              <thead><tr><th>Layer</th><th>Technology</th><th>Why it was chosen</th></tr></thead>
              <tbody>
                <tr><td>Backend</td><td>Laravel 12 (PHP)</td><td>A mature, widely-adopted enterprise PHP framework with a large, active talent pool — critical for long-term maintainability.</td></tr>
                <tr><td>Frontend</td><td>Vue 3 + Inertia.js</td><td>A modern, reactive SPA feel, without the overhead and added attack surface of a fully separate front-end API layer.</td></tr>
                <tr><td>Database</td><td>PostgreSQL 16</td><td>Chosen specifically for native Row-Level Security — entity data isolation enforced at the database engine itself.</td></tr>
                <tr><td>Background jobs</td><td>Redis + Laravel Horizon</td><td>Batch invoicing, reminders and Sage exports run asynchronously and reliably, with a real-time queue dashboard.</td></tr>
                <tr><td>Automated testing</td><td>Pest (PHP)</td><td>190+ automated tests protecting the system's financial logic — every business rule checked before release.</td></tr>
                <tr><td>Access control</td><td>spatie/laravel-permission</td><td>A battle-tested role and permission engine underpinning the 9-role access model.</td></tr>
                <tr><td>Auth &amp; 2FA</td><td>Laravel Fortify</td><td>Secure authentication with enforced two-factor authentication for every financial role.</td></tr>
                <tr><td>Sage integration</td><td>maatwebsite/excel</td><td>Generates correctly formatted, Sage 50 UK compatible batch import/export files.</td></tr>
                <tr><td>Design system</td><td>Tailwind CSS</td><td>One consistent design language, fully responsive across desktop, tablet and mobile browsers.</td></tr>
                <tr><td>CI/CD</td><td>GitHub Actions</td><td>Every change is automatically tested and deployed — zero-touch, consistent releases.</td></tr>
              </tbody>
            </table>
            <p>At the core of PropRail is a <strong>double-entry, append-only ledger</strong>. Every financial transaction — rent, service charges, recharges, AP invoices, intercompany postings — flows through a single, tested posting engine. Nothing is ever silently edited or deleted: every correction is recorded as a new, fully traceable reversal, giving a complete, tamper-evident financial history for every entity by design.</p>

            <h3>Security &amp; compliance</h3>
            <ul>
              <li><strong>Two-layer entity isolation</strong> — PostgreSQL Row-Level Security combined with an independent, fail-closed application-layer permission scope, so one client entity's data can never be exposed through another's screens.</li>
              <li><strong>Server-side authorisation everywhere</strong> — every route is protected by a policy check on the server; the interface never relies on simply hiding a button.</li>
              <li><strong>Validated input, parameterised queries</strong> — all input validated through Laravel Form Requests; no raw SQL string interpolation anywhere in the system.</li>
              <li><strong>Mandatory 2FA for financial roles</strong> — enforced before those roles can use the system at all.</li>
              <li><strong>Complete audit trail</strong> — every login (successful or failed, with IP and timestamp) and every financial posting is permanently logged and attributable to a real user.</li>
              <li><strong>Safe file handling</strong> — uploaded documents validated for type and size, stored outside the public web root.</li>
              <li><strong>No secrets in code</strong> — all credentials and configuration held outside the codebase, never committed to version control.</li>
              <li>Ongoing dependency security audits before every release.</li>
            </ul>

            <h3>Quality engineering</h3>
            <p>PropRail is backed by an extensive, continuously-run automated test suite covering every financial module — rent invoicing, rent reviews, tenant ledger, service charge budgeting and reconciliation, recharges, accounts payable, intercompany transactions, VAT, and Sage export — as well as the full role-based permission matrix, verifying both what every role can and cannot do. Every change runs through this full suite, plus static analysis (Larastan) and code-style checks (Pint), before it is ever deployed.</p>

            <h3>Delivery approach</h3>
            <p>Digital Web Weaver delivered PropRail through a structured, phase-by-phase build — establishing the core system architecture (entity model, ledger design, module boundaries) before any feature work began, then working module by module through the full accounting and property management cycle, with a smoke test required to pass after every feature before moving on. The system is deployed via a fully automated CI/CD pipeline: every code change is tested and deployed to the live environment automatically on merge, with zero manual deployment steps.</p>

            <h3>Why this project matters</h3>
            <p>PropRail demonstrates Digital Web Weaver's ability to deliver a complete, production-grade, domain-specific financial system — not a generic CRUD application, but a system built around real accounting rules (double-entry, append-only posting), real regulatory requirements (RICS service charge compliance, UK VAT), and real third-party interoperability (Sage 50 UK), backed by enterprise-grade security and an extensive automated test suite from day one.</p>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --start-project<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Need a system that can't afford to get it wrong?</h2>
          <p className="cta__lead">If your business runs on numbers that have to be right — accounting, finance, compliance-heavy operations — this is exactly the kind of system we build.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Start a project</Link>
            <Link className="btn btn--ghost" href="/portfolio/">$ view --more-work</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Fixed-price quotes</span><span><span className="g">●</span> Senior engineers only</span><span><span className="g">●</span> Full test coverage</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">proprail.tsx</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
