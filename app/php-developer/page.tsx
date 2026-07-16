import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import data from "@/data/pages/hire/php-developer";
export const revalidate = 3600;
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/php-developer/" },
  openGraph: { url: "/php-developer/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
