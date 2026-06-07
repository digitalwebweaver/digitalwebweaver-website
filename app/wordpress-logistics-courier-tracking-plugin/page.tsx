import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { wpLogisticsCourierPlugin as data } from "@/data/pages/products/products";
export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/wordpress-logistics-courier-tracking-plugin/" },
  openGraph: { url: "/wordpress-logistics-courier-tracking-plugin/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
