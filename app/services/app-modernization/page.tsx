import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { appModernization as data } from "@/data/pages/services/sub-services";
export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/services/app-modernization/" },
  openGraph: { url: "/services/app-modernization/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
