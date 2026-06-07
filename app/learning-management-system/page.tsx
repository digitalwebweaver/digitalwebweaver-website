import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { learningManagementSystem as data } from "@/data/pages/products/products";
export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/learning-management-system/" },
  openGraph: { url: "/learning-management-system/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
