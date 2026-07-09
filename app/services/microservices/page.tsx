import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { microservices as data } from "@/data/pages/services/sub-services";
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/services/microservices/" },
  openGraph: { url: "/services/microservices/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
