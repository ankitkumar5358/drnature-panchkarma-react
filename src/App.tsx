import { Routes, Route } from "react-router-dom";
import { SiteHeader } from "./components/layout/SiteHeader";
import { SiteFooter } from "./components/layout/SiteFooter";
import { WhatsAppButton } from "./components/layout/WhatsAppButton";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Therapies, TherapyCategoryDetailPage } from "./pages/Therapies/Therapies";
import { WellnessPackages } from "./pages/WellnessPackages/WellnessPackages";
import { Testimonials } from "./pages/Testimonials/Testimonials";
import { Contact } from "./pages/Contact/Contact";
import { Consultation } from "./pages/Consultation/Consultation";
import { NotFound } from "./pages/NotFound/NotFound";

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/therapies" element={<Therapies />} />
          <Route path="/therapies/:slug" element={<TherapyCategoryDetailPage />} />
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
