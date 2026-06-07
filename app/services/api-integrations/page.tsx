import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { apiIntegrations as data } from "@/data/pages/services/sub-services";
export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/services/api-integrations/" },
  openGraph: { url: "/services/api-integrations/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
