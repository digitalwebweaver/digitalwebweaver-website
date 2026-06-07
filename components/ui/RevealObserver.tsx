"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Wait one frame for new page content to be in the DOM
    const timer = setTimeout(() => {
      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.in)");
      if (!els.length) return;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { rootMargin: "0px 0px -60px 0px", threshold: 0.1 }
      );

      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]); // Re-run on every client-side navigation

  return null;
}
