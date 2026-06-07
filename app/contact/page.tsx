import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Tell us about your project. Get a free technical consultation and a fixed estimate from a senior Digital Web Weaver engineer within 24 hours.",
  alternates: { canonical: "/contact/" },
  openGraph: { url: "/contact/", type: "website" },
};

export default function ContactPage() {
  return <ContactClient />;
}
