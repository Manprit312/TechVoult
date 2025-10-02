"use client";
import ServicePage from "@/components/ServicePage";

export default function SocialMediaPage() {
  return (
    <ServicePage
      title="Social Media Management"
      subtitle="Boost your brand with powerful social media management services that drive engagement, reach, and conversions."
      stats={[
        { value: "100+", label: "Campaigns Managed" },
        { value: "50+", label: "Brands Supported" },
      ]}
      services={[
        "Social Media Strategy",
        "Paid Advertising",
        "Influencer Marketing",
        "Content Scheduling",
        "Analytics & Reporting",
      ]}
      features={[
        "24/7 Monitoring & Support",
        "Engagement Boost Techniques",
        "Cross-Platform Management",
      ]}
      portfolio={[
        "Instagram Growth for Fashion Brand",
        "LinkedIn Lead Campaign for B2B",
        "TikTok Engagement Boost",
      ]}
      faqs={[
        { q: "What platforms do you manage?", a: "Instagram, Facebook, LinkedIn, TikTok, Twitter and more." },
        { q: "Do you create content too?", a: "Yes, we create engaging posts, videos, and graphics." },
        { q: "How do you track success?", a: "We provide weekly and monthly performance reports." },
      ]}
    />
  );
}
