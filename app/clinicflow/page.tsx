import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { clinicflow as data } from "@/data/pages/products/readyApps2";
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/clinicflow/" },
  openGraph: { url: "/clinicflow/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
