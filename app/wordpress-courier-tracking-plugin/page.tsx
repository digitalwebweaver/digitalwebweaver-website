import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { wpCourierTrackingPlugin as data } from "@/data/pages/products/products";
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/wordpress-courier-tracking-plugin/" },
  openGraph: { url: "/wordpress-courier-tracking-plugin/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
