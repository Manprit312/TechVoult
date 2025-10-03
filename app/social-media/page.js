"use client";
import ServicePage from "@/components/ServicePage";

export default function SocialMediaPage() {
  return (
    <ServicePage
      serviveImage={"/assets/images/socialmediahero.png"}
      title="Social Media Management"
      subtitle="Boost your brand with powerful social media management services that drive engagement, reach, and conversions."
      stats={[
        { value: "100+", label: "Campaigns Managed" },
        { value: "50+", label: "Brands Supported" },
      ]}
      services={[
        { name: "Social Media Strategy", src: "/assets/images/socialmediastrategy.jpeg" },
        { name: "Paid Advertising", src: "/assets/images/paidadd.jpeg" },
        { name: "Influencer Marketing", src: "/assets/images/influencermarketing.jpeg" },
        { name:"Content Scheduling", src: "/assets/images/contentscheduling.jpeg" },

        {name:"Analytics & Reporting", src: "/assets/images/analyticreport.jpeg" },
      ]}
      features={[
        "24/7 Monitoring & Support",
        "Engagement Boost Techniques",
        "Cross-Platform Management",
      ]}
      portfolio={[
        {name: "Instagram Growth for Fashion Brand", src: "/assets/images/socialmediaport.png"},
        {name: "LinkedIn Lead Campaign for B2B", src: "/assets/images/socialport2.png"},
        {name: "TikTok Engagement Boost", src: "/assets/images/socialport3.png"},
      ]}
 
    
      faqs={[
        { q: "What platforms do you manage?", a: "Instagram, Facebook, LinkedIn, TikTok, Twitter and more." },
        { q: "Do you create content too?", a: "Yes, we create engaging posts, videos, and graphics." },
        { q: "How do you track success?", a: "We provide weekly and monthly performance reports." },
      ]}
    />
  );
}
