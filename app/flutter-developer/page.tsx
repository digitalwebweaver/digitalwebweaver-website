import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import data from "@/data/pages/hire/flutter-developer";
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/flutter-developer/" },
  openGraph: { url: "/flutter-developer/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
