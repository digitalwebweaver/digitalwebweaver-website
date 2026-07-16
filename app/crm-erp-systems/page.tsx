import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { crmErpSystems as data } from "@/data/pages/services/main-services";
export const revalidate = 3600;
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/crm-erp-systems/" },
  openGraph: { url: "/crm-erp-systems/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
