import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { apiDevelopment as data } from "@/data/pages/services/sub-services";
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/services/api-development/" },
  openGraph: { url: "/services/api-development/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
