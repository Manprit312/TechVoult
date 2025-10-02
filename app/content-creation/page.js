"use client";
import ServicePage from "@/components/ServicePage";

export default function ContentCreationPage() {
  return (
    <ServicePage
      title="Content Creation"
      subtitle="Engage your audience with high-quality blogs, graphics, and copy designed to boost visibility and conversions."
      stats={[
        { value: "500+", label: "Blogs Written" },
        { value: "200+", label: "Graphics Designed" },
      ]}
      services={[
        "Blog Writing",
        "Copywriting",
        "SEO Content",
        "Graphic Design",
        "E-Books & Whitepapers",
      ]}
      features={[
        "SEO-Optimized Writing",
        "Multi-Language Support",
        "Brand-Oriented Design",
      ]}
      portfolio={[
        "Tech Blog Series",
        "E-commerce Product Descriptions",
        "Business Infographics",
      ]}
      faqs={[
        { q: "Do you provide SEO optimized content?", a: "Yes, all our content is SEO friendly and keyword-optimized." },
        { q: "Can you handle bulk projects?", a: "Yes, we can scale according to your needs." },
        { q: "Do you do social media content too?", a: "Yes, including captions, reels scripts, and graphics." },
      ]}
    />
  );
}
