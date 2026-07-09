import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { clinicvoiceAi as data } from "@/data/pages/products/readyApps3";
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/clinicvoice-ai/" },
  openGraph: { url: "/clinicvoice-ai/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
