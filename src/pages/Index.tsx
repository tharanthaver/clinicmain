import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/layout/MobileCTA";
import HeroSection from "@/components/sections/HeroSection";
import TrustBadges from "@/components/sections/TrustBadges";
import LeadCaptureSection from "@/components/sections/LeadCaptureSection";
import AboutDoctor from "@/components/sections/AboutDoctor";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GallerySection from "@/components/sections/GallerySection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import { SmileTransformationSlider } from "@/components/sections/SmileTransformationSlider";
import BookingFormModal from "@/components/BookingFormModal";
import { useBookingModal } from "@/hooks/useBookingModal";

const Index = () => {
  const { isOpen, closeModal } = useBookingModal();

  return (
    <>
      <Helmet>
        <title>Best Dentist in New Delhi | Delhi Dental Care - Trusted Dental Clinic</title>
        <meta 
          name="description" 
          content="Delhi Dental Care offers gentle, trusted & affordable dental treatments in New Delhi. Expert dentist with 10+ years experience. Book your appointment today!" 
        />
        <meta 
          name="keywords" 
          content="dentist new delhi, dental clinic delhi, best dentist near me, dental implants delhi, root canal treatment, teeth whitening" 
        />
        <link rel="canonical" href="https://delhidentalcare.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Best Dentist in New Delhi | Delhi Dental Care" />
        <meta property="og:description" content="Gentle, trusted & affordable dental care in New Delhi. 10+ years experience, 3000+ happy patients." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://delhidentalcare.com" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": "Delhi Dental Care",
            "description": "Premier dental clinic in New Delhi offering comprehensive dental services",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Dental Plaza, Greater Kailash-1",
              "addressLocality": "New Delhi",
              "postalCode": "110048",
              "addressCountry": "IN"
            },
            "telephone": "+91-98765-43210",
            "openingHours": "Mo-Sa 09:00-20:00",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "200"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen overflow-x-hidden">
        <Header />
        
        <main>
          <HeroSection />
          <TrustBadges />
          <LeadCaptureSection />
          <AboutDoctor />
          <ServicesSection />
          <WhyChooseUs />
          <SmileTransformationSlider />
          <TestimonialsSection />
          <GallerySection />
          <CTASection />
          <ContactSection />
        </main>

        <Footer />
        <MobileCTA />
        
        {/* Bottom padding for mobile CTA */}
        <div className="h-20 lg:hidden" />
      </div>

      {/* Booking Form Modal */}
      <BookingFormModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default Index;
