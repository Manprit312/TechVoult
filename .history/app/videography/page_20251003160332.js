"use client";
import ServicePage from "@/components/ServicePage";

export default function VideographyPage() {
  return (
    <ServicePage
    serviveImage={"/assets/images/videographyhero.jpeg"}
      title="Videography Services"
      subtitle="Bring your story to life with cinematic videography that inspires, informs, and converts."
      stats={[
        { value: "300+", label: "Videos Produced" },
        { value: "100+", label: "Brands Served" },
      ]}
      services={[
        {name:"Corporate Videos",src:"/assets/images/corporatevideo.png"},
        {name:"Product Ads",src:"/assets/images/productadds.jpeg"},
        {name:"Event Videography",src:"/assets/images/eventvideo.jpeg"},
        {name:"Drone Videography",src:"/assets/images/dronevideo.jpeg"},
        {name:"Short Films",src:"/assets/images/shortfilm.jpeg"},
    
      ]}
      features={[
        "4K Video Quality",
        "Professional Editing",
        "Motion Graphics & Animation",
      ]}
      portfolio={[
        {name: "Corporate Profile Video", src: "/assets/images/videographyport1.png"},
        {name: "Drone Footage for Real Estate", src: "/assets/images/videographyport2.png"},
        {name: "E-commerce Product Ad", src: "/assets/images/videographyport3.png"},
       
      ]}
     
      faqs={[
        { q: "Do you offer editing services?", a: "Yes, including motion graphics, VFX, and color grading." },
        { q: "Can you shoot on-site?", a: "Yes, we shoot at your location or provide studio setup." },
        { q: "Do you create social media reels?", a: "Yes, we make reels, shorts, and TikTok videos." },
      ]}
    />
  );
}
