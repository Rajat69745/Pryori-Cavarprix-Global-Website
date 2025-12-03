import type { FC } from "react";
import Hero from "./sections/Hero";

import StrategicPartners from "./sections/StrategicPartners";

import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import ParterShipFramework from "./sections/PartnerShipFramework";
import MessageFromCEO from "./sections/MessageFromCeo";
import PricingSection from "./sections/PricingSection";
import ServicesSection from "./sections/ServicesSection";
import OurMission from "./sections/OurMission";
import FeaturesSection from "./sections/Features";
import Navbar from "./sections/Navbar";
import PrayoryGlobalSection from "./sections/PrayoryGlobalSection";

const App: FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <PrayoryGlobalSection />

      <FeaturesSection />

      <OurMission />

      <ServicesSection />
      <PricingSection />
      <StrategicPartners />

      <MessageFromCEO />
      <ParterShipFramework />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
