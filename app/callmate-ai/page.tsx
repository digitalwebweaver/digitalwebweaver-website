import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { callmateAi as data } from "@/data/pages/products/readyApps4";
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/callmate-ai/" },
  openGraph: { url: "/callmate-ai/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
