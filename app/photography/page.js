"use client";
import ServicePage from "@/components/ServicePage";

export default function PhotographyPage() {
  return (
    <ServicePage
      title="Photography Services"
      subtitle="Capture stunning visuals that highlight your brand, products, and events with our professional photography."
      stats={[
        { value: "10K+", label: "Photos Delivered" },
        { value: "150+", label: "Clients Served" },
      ]}
      services={[
        "Product Photography",
        "Event Photography",
        "Portraits",
        "Lifestyle Shoots",
        "Commercial Photography",
      ]}
      features={[
        "High-Resolution Shots",
        "Studio & Outdoor Options",
        "Editing & Retouching",
      ]}
      portfolio={[
        "Product Shoot for E-commerce",
        "Corporate Event Coverage",
        "Fashion Lifestyle Shoot",
      ]}
      faqs={[
        { q: "Do you provide editing?", a: "Yes, we provide full editing and retouching services." },
        { q: "Can you do outdoor shoots?", a: "Yes, we offer both studio and outdoor photography." },
        { q: "Do you provide raw files?", a: "Yes, upon request we can provide raw files too." },
      ]}
    />
  );
}
