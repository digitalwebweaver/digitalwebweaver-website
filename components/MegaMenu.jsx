"use client";
import { useRef, useState } from "react";
import NavLink from "./NavLink";
import MenuIcon from "./MenuIcon";
import { useClampedDropdown } from "./useClampedDropdown";

// Hover-driven dropdown. The panel sits at top:100% with zero gap (breathing
// room comes from its own padding, not margin/offset) so the mouse never
// crosses dead space between trigger and panel — a real gap there would
// fire mouseleave before the cursor reaches the dropdown.
export default function MegaMenu({ label, href, columns, footerLabel, footerHref }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);
  const panelRef = useRef(null);
  const clampOffset = useClampedDropdown(panelRef, open);

  function openNow() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }
  function closeSoon() {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }

  return (
    <div className="megamenu-wrap" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <NavLink
        href={href}
        className={`megamenu-trigger${open ? " is-active" : ""}`}
        onFocus={openNow}
        onBlur={closeSoon}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {label}<span className="chev" aria-hidden="true">▾</span>
      </NavLink>
      <div
        ref={panelRef}
        className={`megamenu${open ? " is-open" : ""} cols${Math.min(columns.length, 4)}`}
        role="menu"
        aria-label={`${label} menu`}
        style={clampOffset ? { transform: `translateX(calc(-50% + ${clampOffset}px)) translateY(${open ? "0" : "-6px"})` } : undefined}
      >
        {columns.map((col) => (
          <div className="megamenu__col" key={col.title}>
            <h4>{col.title}</h4>
            {col.items.map((item) => (
              <NavLink key={item.href} href={item.href} className="megamenu__item" role="menuitem">
                {item.icon && (
                  <span className="megamenu__ico" aria-hidden="true"><MenuIcon name={item.icon} /></span>
                )}
                {item.badge && (
                  <span className="megamenu__badge" aria-hidden="true" style={{ color: `var(--${item.badge})`, borderColor: `var(--${item.badge})` }}>{item.label[0]}</span>
                )}
                <span className="megamenu__text">
                  <span className="megamenu__label">{item.label}</span>
                  {item.desc && <span className="megamenu__desc">{item.desc}</span>}
                </span>
              </NavLink>
            ))}
          </div>
        ))}
        <div className="megamenu__foot">
          <span className="mono" aria-hidden="true">{columns.reduce((n, c) => n + c.items.length, 0)} total</span>
          <NavLink href={footerHref}>{footerLabel} →</NavLink>
        </div>
      </div>
    </div>
  );
}
