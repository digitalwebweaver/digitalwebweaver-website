import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { pesttrack as data } from "@/data/pages/products/readyApps3";
export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/pesttrack/" },
  openGraph: { url: "/pesttrack/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
