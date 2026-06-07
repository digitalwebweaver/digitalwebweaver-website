import type { Metadata } from "next";
import PartnershipClient from "./PartnershipClient";

export const metadata: Metadata = {
  title: "Partnership Programme",
  description:
    "Partner with Digital Web Weaver. Referral, reseller, and technology partner programmes — grow your business by connecting clients with senior engineering that delivers.",
  alternates: { canonical: "/partnership/" },
  openGraph: { url: "/partnership/", type: "website" },
};

export default function PartnershipPage() {
  return <PartnershipClient />;
}
