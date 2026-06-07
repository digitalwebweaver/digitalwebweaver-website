import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { iosDevelopment as data } from "@/data/pages/services/sub-services";
export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/services/ios-development/" },
  openGraph: { url: "/services/ios-development/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
