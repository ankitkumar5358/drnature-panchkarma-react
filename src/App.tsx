import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { SiteHeader } from "./components/layout/SiteHeader";
import { SiteFooter } from "./components/layout/SiteFooter";
import { WhatsAppButton } from "./components/layout/WhatsAppButton";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Therapies, TherapyCategoryDetailPage } from "./pages/Therapies/Therapies";
import { WellnessPackages } from "./pages/WellnessPackages/WellnessPackages";
import { WellnessPackageDetailPage } from "./pages/WellnessPackages/WellnessPackageDetail";
import { Testimonials } from "./pages/Testimonials/Testimonials";
import { Contact } from "./pages/Contact/Contact";
import { Consultation } from "./pages/Consultation/Consultation";
import { NotFound } from "./pages/NotFound/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/therapies" element={<Therapies />} />
          <Route path="/therapies/:slug" element={<TherapyCategoryDetailPage />} />
          <Route path="/wellness-packages/:slug" element={<WellnessPackageDetailPage />} />
          <Route path="/wellness-packages" element={<WellnessPackages />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
