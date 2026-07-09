import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { logistics as data } from "@/data/pages/industries/industries";
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/logistics/" },
  openGraph: { url: "/logistics/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
