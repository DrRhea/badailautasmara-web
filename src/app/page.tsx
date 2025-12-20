import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AcademySection from "@/components/AcademySection";
import JOGOSection from "@/components/JOGOSection";
import CoachesSection from "@/components/CoachesSection";
import EOSection from "@/components/EOSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <AcademySection />
      <JOGOSection />
      <CoachesSection />
      <EOSection />
      <GallerySection />
      <Footer />
    </div>
  );
}
