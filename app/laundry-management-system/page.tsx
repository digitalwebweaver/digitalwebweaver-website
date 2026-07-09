import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { laundryManagementSystem as data } from "@/data/pages/products/products";
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/laundry-management-system/" },
  openGraph: { url: "/laundry-management-system/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
