import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { rideeasy as data } from "@/data/pages/products/readyApps2";
export const revalidate = 3600;
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/rideeasy/" },
  openGraph: { url: "/rideeasy/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
