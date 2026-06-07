import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { aiAutomation as data } from "@/data/pages/services/main-services";
export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/ai-automation/" },
  openGraph: { url: "/ai-automation/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
