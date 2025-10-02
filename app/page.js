import React from "react";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
    
      <HeroSection />
      <Services />
      <WhyChoose />
      <CTASection />
      <ContactSection />
    </>
  );
}
