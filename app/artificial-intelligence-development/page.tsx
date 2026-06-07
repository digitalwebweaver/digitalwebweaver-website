"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AiRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/ai-automation/");
  }, [router]);
  return null;
}
