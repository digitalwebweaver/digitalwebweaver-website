import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { cybersecurity as data } from "@/data/pages/solutions/solutions-pages";
export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: "/solutions/cybersecurity/" },
  openGraph: { url: "/solutions/cybersecurity/", type: "website" },
  robots: { index: false, follow: true },
};
export default function Page() { return <ServicePage data={data} />; }
