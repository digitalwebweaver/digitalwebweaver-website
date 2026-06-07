import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import data from "@/data/pages/hire/react-developer";

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/react-developer/" },
  openGraph: { url: "/react-developer/", type: "website" },
};

export default function ReactDeveloperPage() {
  return <ServicePage data={data} />;
}
