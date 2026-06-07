"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import RevealObserver from "@/components/ui/RevealObserver";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import VisitorTracker from "@/components/analytics/VisitorTracker";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) return <>{children}</>;

  return (
    <>
      <VisitorTracker />
      <Header />
      <RevealObserver />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
