# Speed Enhancement Log

## Rules (never touch these without explicit approval)
- Fonts — Bricolage Grotesque, Hanken Grotesk, JetBrains Mono — weights, sizes, display swap
- theme.css — global 64KB stylesheet, do not split or remove
- Any visual design: colors, spacing, animations

---

## Homepage (`app/page.tsx`) — done 2026-06-07

### Changes made

| File | Change | Why |
|---|---|---|
| `components/home/CodePanelAnimator.tsx` | Created — tiny client component, fades in `.code-body .ln` lines | Isolated homepage-only animation |
| `components/ui/RevealObserver.tsx` | Removed 4-line code-panel block that ran on every page | Cleanup; animation now lives only on homepage |
| `app/page.tsx` | `TechStackTabs` → `next/dynamic()` | Code-splits large component (20+ SVGs + useState) into separate JS chunk |
| `app/page.tsx` | Imported `CodePanelAnimator` directly | Replaces the global RevealObserver hook |

### Pattern used

```tsx
// At the top of any page.tsx (server component)
import dynamic from "next/dynamic";

// Replace direct imports of heavy client components with:
const HeavyComponent = dynamic(() => import("@/components/..."));
// → Next.js still renders HTML at build time (no layout shift)
// → JS chunk loads lazily after first paint
```

### Skipped (with reason)

| Item | Reason |
|---|---|
| Font weight reduction | User said: no font compromise |
| theme.css splitting | Major refactor, design risk |
| Header server/client split | Scroll detection forces full client component; nav regression risk |
| Image optimization | Needs CDN; `output: "export"` can't use Next.js image optimizer |

---

## Pending pages (not yet done)

Apply the same `next/dynamic()` pattern to any page that imports heavy client components directly. Priority order:

1. Pages with `TechStackTabs` or similar tab/accordion components
2. Pages with inline SVG-heavy components
3. Pages with `FaqSection` (has useState) — candidate for dynamic import
4. Pages with `FormCard` (has form state) — candidate for dynamic import

### How to find candidates
```
grep -r "import.*from.*components" app/ --include="*.tsx" | grep -v "use client"
```
Server component pages (`no "use client"` at top) that import client components directly are candidates for `dynamic()`.

---

## Notes
- `next/dynamic` with default settings (`ssr: true`) keeps the pre-rendered HTML intact — no layout shift on initial load
- Only use `ssr: false` for components that render nothing visible (like `CodePanelAnimator`)
- `StatsCounter` kept as direct import — too small to benefit; animation needs to fire quickly
