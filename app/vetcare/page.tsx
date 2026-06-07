import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { vetcare as data } from "@/data/pages/products/readyApps2";
export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/vetcare/" },
  openGraph: { url: "/vetcare/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
