import NavLink from "./NavLink";
import { siteNav } from "@/lib/siteNav";

const servicesCol = siteNav.groups.find((g) => g.id === "engineering").items.slice(0, 4);
const locationsCol = siteNav.groups.find((g) => g.id === "locations").items.slice(0, 4);
const companyCol = siteNav.groups.find((g) => g.id === "company").items.slice(0, 4);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <img className="footer__logo" src="/assets/dww-logo.png" alt="Digital Web Weaver" width="144" height="56" style={{ height: "56px", width: "auto" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "9px", marginTop: "20px", maxWidth: "320px" }}>
            <a href="mailto:info@digitalwebweaver.com" style={{ display: "flex", alignItems: "center", gap: "11px", color: "var(--text-3)", textDecoration: "none" }}>
              <span style={{ width: "32px", height: "32px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border)", background: "var(--panel)", borderRadius: "7px", color: "var(--teal)" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg>
              </span>
              <span><span className="mono" style={{ display: "block", fontSize: "10px", letterSpacing: "0.1em", color: "var(--muted-2)" }}>EMAIL</span><span className="mono" style={{ fontSize: "13.5px" }}>info@digitalwebweaver.com</span></span>
            </a>
            <a href="tel:+919712515105" style={{ display: "flex", alignItems: "center", gap: "11px", color: "var(--text-3)", textDecoration: "none" }}>
              <span style={{ width: "32px", height: "32px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border)", background: "var(--panel)", borderRadius: "7px", color: "var(--teal)" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2"></path></svg>
              </span>
              <span><span className="mono" style={{ display: "block", fontSize: "10px", letterSpacing: "0.1em", color: "var(--muted-2)" }}>PHONE</span><span className="mono" style={{ fontSize: "13.5px" }}>+91 97125 15105</span></span>
            </a>
            <a href="https://wa.me/919722915105" style={{ display: "flex", alignItems: "center", gap: "11px", color: "var(--text-3)", textDecoration: "none" }}>
              <span style={{ width: "32px", height: "32px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border)", background: "var(--panel)", borderRadius: "7px", color: "var(--green)" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5z"></path><path d="M8.5 9c0 3.5 3 6.5 6.5 6.5.7 0 1.3-.6 1.3-1.3l-2-1-1.2 1a5 5 0 0 1-2.8-2.8l1-1.2-1-2C9.6 7.7 9 8.3 8.5 9z"></path></svg>
              </span>
              <span><span className="mono" style={{ display: "block", fontSize: "10px", letterSpacing: "0.1em", color: "var(--muted-2)" }}>WHATSAPP</span><span className="mono" style={{ fontSize: "13.5px" }}>Chat with us · +91 97229 15105</span></span>
            </a>
          </div>
          <a href="https://www.google.com/maps?cid=11665016648672561459" target="_blank" rel="noopener" style={{ display: "flex", gap: "11px", marginTop: "12px", maxWidth: "320px", padding: "12px 13px", border: "1px solid var(--border)", background: "var(--bg)", borderRadius: "8px", textDecoration: "none" }}>
            <span style={{ width: "32px", height: "32px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border)", background: "var(--panel)", borderRadius: "7px", color: "var(--pink)" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>
            </span>
            <span><span className="mono" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "10px", letterSpacing: "0.1em", color: "var(--muted-2)" }}>HEAD OFFICE <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--green)" }}></span><span style={{ color: "var(--green)", letterSpacing: "0.04em" }}>open</span></span><span style={{ display: "block", fontSize: "13px", lineHeight: 1.55, color: "var(--text-3)", marginTop: "3px" }}>207/208 Sanket Heights, Sunpharma Road,<br />Atladra, Vadodara 390012, Gujarat · India</span></span>
          </a>
        </div>
        <nav className="mono" aria-label="Services">
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11.5px", letterSpacing: "0.12em", color: "var(--text)", marginBottom: "14px" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>services/</div>
          <div style={{ borderLeft: "1px solid var(--border)", paddingLeft: "14px", display: "flex", flexDirection: "column" }}>
            {servicesCol.map((item, i) => (
              <NavLink key={item.href} href={item.href} className="ft-link" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "5px 0", fontSize: "14px", textDecoration: "none", "--h": "var(--teal)" }}>
                <span style={{ color: "var(--border-2)" }} aria-hidden="true">{i === servicesCol.length - 1 ? "└" : "├"}</span>{item.label}
              </NavLink>
            ))}
          </div>
        </nav>
        <nav className="mono" aria-label="Locations">
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11.5px", letterSpacing: "0.12em", color: "var(--text)", marginBottom: "14px" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--pink)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>locations/</div>
          <div style={{ borderLeft: "1px solid var(--border)", paddingLeft: "14px", display: "flex", flexDirection: "column" }}>
            {locationsCol.map((item, i) => (
              <NavLink key={item.href} href={item.href} className="ft-link" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "5px 0", fontSize: "14px", textDecoration: "none", "--h": "var(--pink)" }}>
                <span style={{ color: "var(--border-2)" }} aria-hidden="true">{i === locationsCol.length - 1 ? "└" : "├"}</span>{item.label}
              </NavLink>
            ))}
          </div>
        </nav>
        <nav className="mono" aria-label="Company">
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11.5px", letterSpacing: "0.12em", color: "var(--text)", marginBottom: "14px" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 16v-4M12 8h.01"></path></svg>company/</div>
          <div style={{ borderLeft: "1px solid var(--border)", paddingLeft: "14px", display: "flex", flexDirection: "column" }}>
            {companyCol.map((item, i) => (
              <NavLink key={item.href} href={item.href} className="ft-link" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "5px 0", fontSize: "14px", textDecoration: "none", "--h": "var(--yellow)" }}>
                <span style={{ color: "var(--border-2)" }} aria-hidden="true">{i === companyCol.length - 1 ? "└" : "├"}</span>{item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
      <div className="mono" style={{ marginTop: "30px", display: "flex", alignItems: "center", flexWrap: "wrap", gap: 0, fontSize: "12px", color: "var(--text-2)", border: "1px solid var(--border)", borderRadius: "7px", overflow: "hidden" }}>
        <span style={{ display: "flex", alignItems: "center", gap: "7px", background: "var(--teal)", color: "var(--bg)", fontWeight: 700, padding: "8px 14px" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.5"></circle><circle cx="6" cy="18" r="2.5"></circle><circle cx="18" cy="8" r="2.5"></circle><path d="M6 8.5v7M8.5 6H14a4 4 0 0 1 4 4v.5"></path></svg>main</span>
        <span style={{ display: "flex", alignItems: "center", gap: "7px", padding: "8px 14px", borderRight: "1px solid var(--border)" }}><span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 8px var(--green)" }}></span>all systems operational</span>
        <span style={{ padding: "8px 14px", borderRight: "1px solid var(--border)", color: "var(--muted-2)" }}>© 2026 Digital Web Weaver</span>
        <span style={{ padding: "8px 14px", borderRight: "1px solid var(--border)", color: "var(--muted-2)" }}>built in Vadodara, India</span>
        <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "9px", padding: "8px 14px", color: "var(--muted-2)" }}><span style={{ color: "var(--teal)" }}>✓</span>ISO 27001<span style={{ color: "var(--border-2)" }}>·</span>SOC 2<span style={{ color: "var(--border-2)" }}>·</span>GDPR aligned</span>
      </div>
    </footer>
  );
}
