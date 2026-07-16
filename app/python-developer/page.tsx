import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import data from "@/data/pages/hire/python-developer";
export const revalidate = 3600;
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/python-developer/" },
  openGraph: { url: "/python-developer/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
