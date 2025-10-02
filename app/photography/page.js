"use client";
import ServicePage from "@/components/ServicePage";

export default function PhotographyPage() {
  return (
    <ServicePage
    serviveImage={"/assets/images/photographyhero.jpeg"}
      title="Photography Services"
      subtitle="Capture stunning visuals that highlight your brand, products, and events with our professional photography."
      stats={[
        { value: "10K+", label: "Photos Delivered" },
        { value: "150+", label: "Clients Served" },
      ]}
      services={[
        {name: "Product Photography", src: "/assets/images/productphotography.webp"},
        {name: "Event Photography", src: "/assets/images/eventphotography.jpeg"},
        {name: "Portraits", src: "/assets/images/portraits.jpeg"},
        {name: "Lifestyle Shoots", src: "/assets/images/lifestyleshoots.jpeg"},
        {name: "Commercial Photography", src: "/assets/images/commercialphotography.jpeg"},
        
      
  
      ]}
      features={[
        "High-Resolution Shots",
        "Studio & Outdoor Options",
        "Editing & Retouching",
      ]}
      portfolio={[
        {name: "Product Shoot for E-commerce", src: "/assets/images/productphotography.webp"},
        {name: "Corporate Event Coverage", src: "/assets/images/corporateimage.jpeg"},
        {name: "Fashion Lifestyle Shoot", src: "/assets/images/lifestyle.jpeg"},
       
      ]}
      faqs={[
        { q: "Do you provide editing?", a: "Yes, we provide full editing and retouching services." },
        { q: "Can you do outdoor shoots?", a: "Yes, we offer both studio and outdoor photography." },
        { q: "Do you provide raw files?", a: "Yes, upon request we can provide raw files too." },
      ]}
    />
  );
}
