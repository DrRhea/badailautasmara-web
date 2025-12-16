import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import JOGOSection from "@/components/JOGOSection";
import CoachesSection from "@/components/CoachesSection";
import EOSection from "@/components/EOSection";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <JOGOSection />
      <CoachesSection />
      <EOSection />
      <PortfolioSection />
      <Footer />
    </div>
  );
}
