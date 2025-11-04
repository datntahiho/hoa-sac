import { Outlet } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar phone="0932.48.00.68" logoSrc="/images/logo.png" />
      <ScrollToTop />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
