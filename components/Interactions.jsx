"use client";
import { useEffect } from "react";
import { initDWW } from "./behavior";

export default function Interactions() {
  useEffect(() => {
    const cleanup = initDWW();
    return cleanup;
  }, []);
  return null;
}
