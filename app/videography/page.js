"use client";
import ServicePage from "@/components/ServicePage";

export default function VideographyPage() {
  return (
    <ServicePage
      title="Videography Services"
      subtitle="Bring your story to life with cinematic videography that inspires, informs, and converts."
      stats={[
        { value: "300+", label: "Videos Produced" },
        { value: "100+", label: "Brands Served" },
      ]}
      services={[
        "Corporate Videos",
        "Product Ads",
        "Event Videography",
        "Drone Videography",
        "Short Films",
      ]}
      features={[
        "4K Video Quality",
        "Professional Editing",
        "Motion Graphics & Animation",
      ]}
      portfolio={[
        "Corporate Profile Video",
        "Drone Footage for Real Estate",
        "E-commerce Product Ad",
      ]}
      faqs={[
        { q: "Do you offer editing services?", a: "Yes, including motion graphics, VFX, and color grading." },
        { q: "Can you shoot on-site?", a: "Yes, we shoot at your location or provide studio setup." },
        { q: "Do you create social media reels?", a: "Yes, we make reels, shorts, and TikTok videos." },
      ]}
    />
  );
}
