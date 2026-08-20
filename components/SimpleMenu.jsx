"use client";
import { useRef, useState } from "react";
import NavLink from "./NavLink";
import MenuIcon from "./MenuIcon";
import { useClampedDropdown } from "./useClampedDropdown";

// A lighter dropdown for triggers with too few items to justify the full
// multi-column MegaMenu treatment — single list, real brand icons where
// the item is stack-specific, MenuIcon for generic ones. Shares the trigger
// styling and hover-bridge classes with MegaMenu so both feel like one
// system in the topbar.
export default function SimpleMenu({ label, href, items, footerLabel, footerHref }) {
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
        className={`simplemenu${open ? " is-open" : ""}`}
        role="menu"
        aria-label={`${label} menu`}
        style={clampOffset ? { transform: `translateX(calc(-50% + ${clampOffset}px)) translateY(${open ? "0" : "-6px"})` } : undefined}
      >
        {items.map((item) => (
          <NavLink key={item.href} href={item.href} className="simplemenu__item" role="menuitem">
            <span className="simplemenu__ico" aria-hidden="true">
              {item.logo ? <img src={`/assets/icons/${item.logo}.svg`} alt="" /> : <MenuIcon name={item.icon} />}
            </span>
            <span className="simplemenu__label">{item.label}</span>
          </NavLink>
        ))}
        {footerLabel && (
          <div className="simplemenu__foot">
            <NavLink href={footerHref}>{footerLabel} →</NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
