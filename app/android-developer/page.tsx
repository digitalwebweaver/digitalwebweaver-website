import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import data from "@/data/pages/hire/android-developer";
export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/android-developer/" },
  openGraph: { url: "/android-developer/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
