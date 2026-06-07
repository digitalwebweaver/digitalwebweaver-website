import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { educore as data } from "@/data/pages/products/readyApps";
export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/educore/" },
  openGraph: { url: "/educore/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
