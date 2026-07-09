import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import data from "@/data/pages/hire/devops-engineer";
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/devops-engineer/" },
  openGraph: { url: "/devops-engineer/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
