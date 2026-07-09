import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import data from "@/data/pages/hire/nodejs-developer";
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/nodejs-developer/" },
  openGraph: { url: "/nodejs-developer/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
