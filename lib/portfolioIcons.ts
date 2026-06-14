import type { ReactNode } from "react";
import { createElement } from "react";

// ── Portfolio card icons ──────────────────────────────────────────────────────
// Single source of truth for the SVG used in the colored card header (`.case-top`).
// The admin picks one of these keys; the public card + detail page render it.
// Each entry is the inner paths only — wrapped in a <svg> by `renderIcon()`.
//
// `inner` is a function returning the path elements so the same definition serves
// both the public card and the admin picker without duplicating markup.

type IconDef = {
  label: string;
  inner: () => ReactNode;
};

export const PORTFOLIO_ICONS: Record<string, IconDef> = {
  erp: {
    label: "ERP / Factory",
    inner: () => [
      createElement("path", { key: "a", d: "M3 21V9l6 4V9l6 4V9l6 4v8z", strokeLinejoin: "round" }),
      createElement("path", { key: "b", d: "M7 21v-3M12 21v-3M17 21v-3" }),
    ],
  },
  mobile: {
    label: "Mobile / Logistics truck",
    inner: () => [
      createElement("rect", { key: "a", x: "1", y: "6", width: "14", height: "11", rx: "1" }),
      createElement("path", { key: "b", d: "M15 9h4l3 3v5h-7", strokeLinejoin: "round" }),
      createElement("circle", { key: "c", cx: "6", cy: "18", r: "1.6" }),
      createElement("circle", { key: "d", cx: "17", cy: "18", r: "1.6" }),
    ],
  },
  edtech: {
    label: "EdTech / Graduation",
    inner: () => [
      createElement("path", { key: "a", d: "M22 10v6M2 10l10-5 10 5-10 5z", strokeLinejoin: "round" }),
      createElement("path", { key: "b", d: "M6 12v5c3 2 9 2 12 0v-5" }),
    ],
  },
  fintech: {
    label: "FinTech / Bank",
    inner: () => [
      createElement("path", { key: "a", d: "M3 21V10l9-7 9 7v11", strokeLinejoin: "round" }),
      createElement("path", { key: "b", d: "M9 21v-6h6v6" }),
    ],
  },
  crm: {
    label: "CRM / Real estate",
    inner: () => [createElement("path", { key: "a", d: "M3 4h18l-7 8v7l-4 2v-9z" })],
  },
  ai: {
    label: "AI / Automation",
    inner: () => [
      createElement("circle", { key: "a", cx: "12", cy: "12", r: "3" }),
      createElement("path", {
        key: "b",
        d: "M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2",
        strokeLinecap: "round",
      }),
    ],
  },
  ecommerce: {
    label: "E-commerce / Cart",
    inner: () => [
      createElement("circle", { key: "a", cx: "9", cy: "20", r: "1.5" }),
      createElement("circle", { key: "b", cx: "18", cy: "20", r: "1.5" }),
      createElement("path", { key: "c", d: "M2 3h3l2.5 12h11", strokeLinecap: "round", strokeLinejoin: "round" }),
    ],
  },
  healthcare: {
    label: "Healthcare / Heart",
    inner: () => [
      createElement("path", {
        key: "a",
        d: "M12 21s-7-4.5-9-9a5 5 0 019-3 5 5 0 019 3c-2 4.5-9 9-9 9z",
        strokeLinejoin: "round",
      }),
    ],
  },
  logistics: {
    label: "Logistics / Package",
    inner: () => [
      createElement("path", { key: "a", d: "M9 7V3M15 7V3M7 7h10v4a5 5 0 01-10 0z", strokeLinejoin: "round" }),
      createElement("path", { key: "b", d: "M12 16v5" }),
    ],
  },
  default: {
    label: "Generic / Code",
    inner: () => [
      createElement("path", { key: "a", d: "M8 6l-6 6 6 6M16 6l6 6-6 6", strokeLinecap: "round", strokeLinejoin: "round" }),
    ],
  },
};

export const PORTFOLIO_ICON_KEYS = Object.keys(PORTFOLIO_ICONS);

// Color themes match the existing `.case-top` CSS classes (c1/c2/c3).
export const PORTFOLIO_COLORS = ["c1", "c2", "c3"] as const;
export type PortfolioColor = (typeof PORTFOLIO_COLORS)[number];

/**
 * Render a portfolio icon as a full <svg>, falling back to `default`.
 * Used by the public cards and the detail page.
 */
export function renderIcon(key: string | null | undefined): ReactNode {
  const def = PORTFOLIO_ICONS[key || "default"] ?? PORTFOLIO_ICONS.default;
  return createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.4" },
    def.inner()
  );
}
