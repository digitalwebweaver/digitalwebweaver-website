import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { businessIntelligence as data } from "@/data/pages/solutions/solutions-pages";
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/solutions/business-intelligence/" },
  openGraph: { url: "/solutions/business-intelligence/", type: "website" },
  robots: { index: false, follow: true },
};
export default function Page() { return <ServicePage data={data} />; }
