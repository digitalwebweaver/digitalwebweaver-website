"use client";
import { useLayoutEffect, useState } from "react";

// Mega/simple menu panels are centered on their trigger via left:50% +
// translateX(-50%), which looks right until the trigger itself sits
// off-center in the topbar (Products, Hire Resource) and a wide panel
// pushes past the viewport edge — no fixed width or transform percentage
// fixes that for every screen size, since it depends on the trigger's
// actual on-screen position. This measures the panel once it's open and
// nudges it back on-screen with a small extra translateX, recomputed on
// resize. Falls back to 0 offset (pure centering) until measured.
export function useClampedDropdown(ref, open) {
  const [offset, setOffset] = useState(0);

  useLayoutEffect(() => {
    if (!open || !ref.current) {
      setOffset(0);
      return;
    }
    function clamp() {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const margin = 16;
      // rect already reflects whatever offset is currently applied, so
      // back that out first to get the panel's true centered position —
      // otherwise repeated calls (e.g. on resize) would compound instead
      // of recomputing from scratch.
      setOffset((prevOffset) => {
        const naturalLeft = rect.left - prevOffset;
        const naturalRight = rect.right - prevOffset;
        if (naturalRight > window.innerWidth - margin) {
          return window.innerWidth - margin - naturalRight;
        }
        if (naturalLeft < margin) {
          return margin - naturalLeft;
        }
        return 0;
      });
    }
    // Measure post-paint so the rect reflects the panel's natural
    // (unclamped) position first, then correct it.
    const raf = requestAnimationFrame(clamp);
    window.addEventListener("resize", clamp);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", clamp);
    };
  }, [open, ref]);

  return offset;
}
