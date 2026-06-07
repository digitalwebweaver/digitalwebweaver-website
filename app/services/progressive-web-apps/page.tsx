import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { progressiveWebApps as data } from "@/data/pages/services/sub-services";
export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/services/progressive-web-apps/" },
  openGraph: { url: "/services/progressive-web-apps/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
