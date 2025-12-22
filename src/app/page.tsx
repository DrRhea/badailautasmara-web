import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AcademySection from "@/components/AcademySection";
import JOGOSection from "@/components/JOGOSection";
import CoachesSection from "@/components/CoachesSection";
import EOHeroSection from "@/components/EOHeroSection";
import EOSection from "@/components/EOSection";
import EventFlowSection from "@/components/EventFlowSection";
import BookingContactSection from "@/components/BookingContactSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    "name": "PT Badai Laut Asmara",
    "alternateName": "JOGO FOOTBALL ACADEMY",
    "url": "https://www.badailautasmara.com",
    "logo": "https://www.badailautasmara.com/logos/logo-pt-badai-laut-asmara.png",
    "description": "Professional sports training academy and event organizer in Jakarta, Indonesia. Offering football, basketball, badminton, swimming, cricket, and kick boxing training.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gedung AD Premier Lt.9, JI.TB Simatupang No.5",
      "addressLocality": "Jakarta Selatan",
      "postalCode": "12550",
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-811-8802-2607",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://www.instagram.com/jfa.idn",
      "https://www.tiktok.com/@jogoprivatetraining"
    ],
    "offers": {
      "@type": "Offer",
      "name": "JOGO FOOTBALL ACADEMY Training",
      "description": "Professional sports training programs"
    }
  };

  const sportsActivitySchema = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "JOGO FOOTBALL ACADEMY",
    "description": "Professional sports training academy offering football, basketball, badminton, swimming, cricket, and kick boxing training",
    "sport": ["Football", "Basketball", "Badminton", "Swimming", "Cricket", "Kick Boxing"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsActivitySchema) }}
      />
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Hero />
        <AcademySection />
        <JOGOSection />
        <CoachesSection />
        <EOHeroSection />
        <EOSection />
        <EventFlowSection />
        <BookingContactSection />
        <GallerySection />
        <Footer />
        </div>
    </>
  );
}
