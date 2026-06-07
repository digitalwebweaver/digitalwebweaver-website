import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { schoolhub as data } from "@/data/pages/products/readyApps2";
export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/schoolhub/" },
  openGraph: { url: "/schoolhub/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
