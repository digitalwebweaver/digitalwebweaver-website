import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { openSourceDevelopment as data } from "@/data/pages/services/main-services";
export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/open-source-development/" },
  openGraph: { url: "/open-source-development/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
