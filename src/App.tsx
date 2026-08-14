import { Routes, Route } from "react-router-dom";
import { SiteHeader } from "./components/layout/SiteHeader";
import { SiteFooter } from "./components/layout/SiteFooter";
import { WhatsAppButton } from "./components/layout/WhatsAppButton";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Therapies } from "./pages/Therapies/Therapies";
import { WellnessPackages } from "./pages/WellnessPackages/WellnessPackages";
import { Contact } from "./pages/Contact/Contact";
import { Consultation } from "./pages/Consultation/Consultation";
import { Location } from "./pages/Location/Location";
import { ComingSoon } from "./pages/ComingSoon/ComingSoon";
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
          <Route path="/wellness-packages" element={<WellnessPackages />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/treatments"
            element={
              <ComingSoon
                title="Treatments"
                subtitle="Disease-wise Ayurvedic Panchkarma treatments and personalised packages."
                breadcrumb="Treatments"
                hint="Browse our Wellness Packages for condition-focused programs, or contact us to discuss a personalised treatment plan."
              />
            }
          />
          <Route
            path="/testimonials"
            element={
              <ComingSoon
                title="Testimonials"
                subtitle="Patient stories and experiences."
                breadcrumb="Testimonials"
              />
            }
          />
          <Route path="/location" element={<Location />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
