import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { inventoryManagementSystem as data } from "@/data/pages/products/products";
export const revalidate = 3600;
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/inventory-management-system/" },
  openGraph: { url: "/inventory-management-system/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
