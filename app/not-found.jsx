import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "404 — Page Not Found | Digital Web Weaver" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <nav className="activitybar mono" aria-label="Sections">
        <button className="activitybar__btn is-active" title="404">✕</button>
        <span className="activitybar__geo" title="India · UK · South Africa">◍</span>
      </nav>

      <main className="main">
        <div className="tabbar scroll mono">
          <button className="tab is-active"><span className="tdot" style={{ color: "var(--red)" }}>●</span> 404.tsx</button>
        </div>

        <div className="content scroll">
          <section className="section reveal">
            <p className="hero__meta">// 404.tsx · uncaught exception</p>
            <span className="badge" style={{ color: "var(--red)", borderColor: "var(--red)" }}>NOT FOUND</span>
            <h1 className="hero__h1">This <span className="pink">route()</span> doesn&rsquo;t <span className="teal">exist()</span>.</h1>
            <p className="hero__lead">The page you&rsquo;re looking for was moved, renamed, or never existed. Let&rsquo;s get you back on track.</p>

            <div className="code" style={{ marginTop: "28px", maxWidth: "640px" }}>
              <div className="code__head"><span className="dot dot--red" style={{ width: "8px", height: "8px" }}></span><span className="fn">terminal</span><span className="mut">— error</span></div>
              <div className="code__body">
                <span className="ln">1</span><span className="cmt">// resolving route…</span>
                <span className="ln">2</span><span className="txt">$ <span className="fnn">resolve</span>(window.location.pathname)</span>
                <span className="ln">3</span><span className="kw">Error: <span className="str">ENOENT</span></span>
                <span className="ln">4</span><span className="txt">  no such file: <span className="str">page.tsx</span></span>
                <span className="ln">5</span><span className="cmt">// 0 matches in 73 routes</span>
                <span className="ln">6</span><span><span className="caret"></span></span>
              </div>
              <div className="code__foot"><span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--red)" }}></span><span style={{ color: "var(--red)" }}>process exited with code 1</span></div>
            </div>

            <div className="btn-row" style={{ marginTop: "28px" }}>
              <Link className="btn btn--primary" href="/">▶ Back to home</Link>
              <Link className="btn btn--ghost" href="/contact/">$ contact --support</Link>
            </div>

            <div style={{ marginTop: "36px" }}>
              <p className="eyebrow">// you might be looking for</p>
              <div className="btn-row" style={{ marginTop: "14px" }}>
                <Link className="btn btn--ghost" href="/services/">Services</Link>
                <Link className="btn btn--ghost" href="/products/">Products</Link>
                <Link className="btn btn--ghost" href="/portfolio/">Portfolio</Link>
                <Link className="btn btn--ghost" href="/about/">About</Link>
              </div>
            </div>
          </section>

          <Footer />
        </div>

        <div className="statusbar">
          <span><b>⎇ main</b></span><span>✕ 1 error</span><span>⚠ 0 warnings</span>
          <span className="statusbar__spacer">404.tsx</span><span>TypeScript</span><span>Ln 1, Col 1</span>
        </div>
      </main>
    </>
  );
}
