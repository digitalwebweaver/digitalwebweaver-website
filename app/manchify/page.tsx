import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { manchify as data } from "@/data/pages/products/readyApps5";

export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/manchify/" },
  openGraph: { url: "/manchify/", type: "website" },
};

export default function Page() {
  return <ServicePage data={data} />;
}
