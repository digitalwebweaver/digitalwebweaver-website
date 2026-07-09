import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { uiUxDesign as data } from "@/data/pages/services/main-services";
export const metadata: Metadata = {
  title: { absolute: data.meta.title },
  description: data.meta.description,
  alternates: { canonical: "/ui-ux-design/" },
  openGraph: { url: "/ui-ux-design/", type: "website" },
};
export default function Page() { return <ServicePage data={data} />; }
