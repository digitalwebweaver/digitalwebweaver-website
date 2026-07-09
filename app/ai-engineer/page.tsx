import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import data from "@/data/pages/hire/ai-engineer";
export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/ai-engineer/" },
  openGraph: { url: "/ai-engineer/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
