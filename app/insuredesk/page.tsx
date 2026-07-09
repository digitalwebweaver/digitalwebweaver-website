import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { insuredesk as data } from "@/data/pages/products/readyApps4";
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/insuredesk/" },
  openGraph: { url: "/insuredesk/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
