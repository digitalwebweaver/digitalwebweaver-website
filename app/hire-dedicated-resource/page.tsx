import type { Metadata } from "next";
import HireDedicatedClient from "./HireDedicatedClient";

export const metadata: Metadata = {
  title: "Hire Dedicated Developers India",
  description:
    "Hire dedicated developers from India. Scale your team with vetted full-stack, mobile, AI, and DevOps engineers from Digital Web Weaver — flexible engagement from 1 month to 12 months.",
  alternates: { canonical: "/hire-dedicated-resource/" },
  openGraph: { url: "/hire-dedicated-resource/", type: "website" },
};

export default function HireDedicatedPage() {
  return <HireDedicatedClient />;
}
