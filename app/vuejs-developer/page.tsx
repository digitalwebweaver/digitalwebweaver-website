import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import data from "@/data/pages/hire/vue-developer";
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/vuejs-developer/" },
  openGraph: { url: "/vuejs-developer/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
