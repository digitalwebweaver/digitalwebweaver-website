"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function getSessionId() {
  let id = sessionStorage.getItem("dww_sid");
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem("dww_sid", id);
  }
  return id;
}

function send(data: Record<string, unknown>) {
  try {
    const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
    navigator.sendBeacon("/api/track", blob);
  } catch {
    // ignore — analytics must never affect the visitor experience
  }
}

export default function VisitorTracker() {
  const pathname = usePathname();
  const sessionIdRef = useRef("");
  const pageViewIdRef = useRef<string | null>(null);
  const enteredAtRef = useRef(Date.now());
  const isFirstRef = useRef(true);

  function flushPing() {
    const elapsed = Math.round((Date.now() - enteredAtRef.current) / 1000);
    if (elapsed > 0 && pageViewIdRef.current) {
      send({
        type: "ping",
        sessionId: sessionIdRef.current,
        pageViewId: pageViewIdRef.current,
        seconds: elapsed,
      });
    }
    enteredAtRef.current = Date.now();
  }

  useEffect(() => {
    if (pathname?.startsWith("/admin")) return;

    sessionIdRef.current = getSessionId();
    if (!isFirstRef.current) flushPing();

    enteredAtRef.current = Date.now();

    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "pageview",
        sessionId: sessionIdRef.current,
        path: pathname,
        title: typeof document !== "undefined" ? document.title : "",
        referrer: isFirstRef.current && typeof document !== "undefined" ? document.referrer : "",
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        pageViewIdRef.current = d?.pageViewId ?? null;
      })
      .catch(() => {});

    isFirstRef.current = false;
  }, [pathname]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (document.visibilityState === "visible") flushPing();
    }, 15000);

    function onVisibility() {
      if (document.visibilityState === "hidden") flushPing();
    }
    function onPageHide() {
      flushPing();
    }

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", onPageHide);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", onPageHide);
    };
  }, []);

  return null;
}
