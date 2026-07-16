import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { salonbook as data } from "@/data/pages/products/readyApps3";
export const revalidate = 3600;
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/salonbook/" },
  openGraph: { url: "/salonbook/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
