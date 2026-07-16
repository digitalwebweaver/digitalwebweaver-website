import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { telecare as data } from "@/data/pages/products/readyApps4";
export const revalidate = 3600;
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/telecare/" },
  openGraph: { url: "/telecare/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
