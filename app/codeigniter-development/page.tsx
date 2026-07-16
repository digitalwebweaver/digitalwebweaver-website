import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { codeigniterDevelopment as data } from "@/data/pages/products/products";
export const revalidate = 3600;
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/codeigniter-development/" },
  openGraph: { url: "/codeigniter-development/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
