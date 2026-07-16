import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { aiAutomation as data } from "@/data/pages/services/main-services";
export const revalidate = 3600;
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/ai-automation/" },
  openGraph: { url: "/ai-automation/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
