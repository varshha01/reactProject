import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logo_animate from "./components/Logo_animate";
import AboutSection from "./components/AboutSection";
import FeatureSection from "./components/FeatureSection";
import ScheduleSection from "./components/ScheduleSection";
import MonitorSection from "./components/MonitorSection";
import PricingSection from "./components/PricingSection";
import ServiceSection from "./components/ServiceSection";
import TestimonialSection from "./components/TestimonialSection";
import NewsletterSection from "./components/NewsletterSection";
import FooterSection from "./components/FooterSection";
function App() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <div className="absolute inset-0 -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-r from-pink-800/20 to-indigo-600/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <Logo_animate />
        <AboutSection />
        <FeatureSection />
        <ScheduleSection />
        <MonitorSection />
        <PricingSection />
        <ServiceSection />
        <TestimonialSection />
        <NewsletterSection />
        <FooterSection />
      </div>
    </main>
  );
}

export default App;
