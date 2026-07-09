import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { customWebApps as data } from "@/data/pages/services/main-services";
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/custom-web-apps/" },
  openGraph: { url: "/custom-web-apps/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
