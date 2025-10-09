"use client"
import React from "react";
import { useState,useCallback,useMemo,useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import ContactSection from "../components/ContactSection";
import CTASection from "../components/CTASection";
 import { WelcomePopup } from "../components/welcome-popup";
          import { usePathname } from "next/navigation";
export default function HomePage() {
    const pathname = usePathname();
  const [activePopup, setActivePopup] = useState(null);
  const [visitTime, setVisitTime] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [popupShown, setPopupShown] = useState(false); // ✅ only one popup per render

  const isAdminRoute = useMemo(() => pathname.startsWith("/admin"), [pathname]);

  // Page-specific popup rules
  const pageRules = useMemo(
    () => ({
      "/": { welcome: 2, contact: 120, exit: true },
      "/aboutUs": { contact: 120, exit: true },
      "/service": { contact: 120, exit: true },
      "/technologies": { contact: 120, exit: true },
      "/contactuS": { exit: false },
    }),
    []
  );

  // Handle scroll % tracking
  const handleScroll = useCallback(() => {
    const scrolled =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    setScrollPercent(scrolled);
  }, []);

  // Handle exit intent
  const handleMouseLeave = useCallback(
    (e) => {
      if (popupShown) return; // prevent showing again
      const rules = pageRules[pathname] || pageRules["/"];
      if (e.clientY <= 0 && rules.exit && visitTime > 10) {
        setActivePopup("exit");
        setPopupShown(true);
      }
    },
    [visitTime, pathname, popupShown, pageRules]
  );

  // Visit timer
  useEffect(() => {
    if (isAdminRoute) return;
    const timer = setInterval(() => setVisitTime((t) => t + 1), 1000);
    return () => clearInterval(timer);
  }, [isAdminRoute]);

  // Scroll tracking
  useEffect(() => {
    if (isAdminRoute) return;

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [isAdminRoute, handleScroll]);

  // Trigger popup based on rules
  useEffect(() => {
    if (isAdminRoute || popupShown) return;
    const rules = pageRules[pathname] || pageRules["/"];

    if (rules.welcome && visitTime === rules.welcome && pathname === "/") {
      setActivePopup("welcome");
      setPopupShown(true);
      return;
    }

    if (
      rules.contact &&
      ((visitTime === rules.contact) || (scrollPercent > 70 && visitTime > 60))
    ) {
      setActivePopup("contact");
      setPopupShown(true);
      return;
    }
  }, [visitTime, scrollPercent, pathname, popupShown, isAdminRoute, pageRules]);

  // Exit intent listener
  useEffect(() => {
    if (isAdminRoute) return;
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave, isAdminRoute]);

  // Close popup manually
  const closePopup = useCallback(() => {
    setActivePopup(null);
  }, []);

  if (isAdminRoute) return null;


  return (
    <>
           <WelcomePopup isOpen={activePopup === 'welcome'} onClose={closePopup} />

      <HeroSection />
      <Services />
      <WhyChoose />
      <CTASection />
      <ContactSection />
    </>
  );
}
