import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { databases as data } from "@/data/pages/stack/stack-pages";
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  robots: { index: false, follow: true },
  alternates: { canonical: "/stack/databases/" },
};
export default function Page() { return <ServicePage data={data} />; }
