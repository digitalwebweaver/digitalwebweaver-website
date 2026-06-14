"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OpenSourceDevelopmentRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/wordpress-development/");
  }, [router]);
  return null;
}
