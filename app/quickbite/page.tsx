import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { quickbite as data } from "@/data/pages/products/readyApps";
export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/quickbite/" },
  openGraph: { url: "/quickbite/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
