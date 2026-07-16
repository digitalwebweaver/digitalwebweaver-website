import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import data from "@/data/pages/hire/react-native-developer";
export const revalidate = 3600;
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/react-native-developer/" },
  openGraph: { url: "/react-native-developer/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
