import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { saasStartups as data } from "@/data/pages/industries/industries";
export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/saas-startups/" },
  openGraph: { url: "/saas-startups/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
