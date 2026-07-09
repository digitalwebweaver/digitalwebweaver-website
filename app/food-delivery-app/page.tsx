import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { foodDeliveryApp as data } from "@/data/pages/products/products";
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/food-delivery-app/" },
  openGraph: { url: "/food-delivery-app/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
