"use client";
import { useEffect } from "react";

export default function CodePanelAnimator() {
  useEffect(() => {
    document.querySelectorAll<HTMLElement>(".code-body .ln").forEach((ln, i) => {
      ln.style.transition = "opacity .4s ease";
      setTimeout(() => { ln.style.opacity = "1"; }, 600 + i * 160);
    });
  }, []);
  return null;
}
