import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { awsCloud as data } from "@/data/pages/stack/stack-pages";
export const revalidate = 3600;
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  robots: { index: false, follow: true },
  alternates: { canonical: "/stack/aws/" },
};
export default function Page() { return <ServicePage data={data} />; }
