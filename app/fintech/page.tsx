import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { fintech as data } from "@/data/pages/industries/industries";
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/fintech/" },
  openGraph: { url: "/fintech/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
