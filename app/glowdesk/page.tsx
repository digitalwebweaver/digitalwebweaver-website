import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { glowdesk as data } from "@/data/pages/products/readyApps";
export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/glowdesk/" },
  openGraph: { url: "/glowdesk/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
