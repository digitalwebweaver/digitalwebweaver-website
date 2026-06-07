import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { corporateWebsites as data } from "@/data/pages/services/sub-services";
export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/services/corporate-websites/" },
  openGraph: { url: "/services/corporate-websites/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
