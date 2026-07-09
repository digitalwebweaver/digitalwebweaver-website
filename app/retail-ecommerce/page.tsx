import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { retailEcommerce as data } from "@/data/pages/industries/industries";
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/retail-ecommerce/" },
  openGraph: { url: "/retail-ecommerce/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
