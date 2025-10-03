"use client";
import ServicePage from "@/components/ServicePage";

export default function ContentCreationPage() {
  return (
    <ServicePage
      serviveImage={"/assets/images/contenthero.png"}
      title="Content Creation"
      subtitle="Engage your audience with high-quality blogs, graphics, and copy designed to boost visibility and conversions."
      stats={[
        { value: "500+", label: "Blogs Written" },
        { value: "200+", label: "Graphics Designed" },
      ]}
      services={[
        { name: "Blog Writing", src: "/assets/images/blogwriting.png" },
        { name: "SEO Content", src: "/assets/images/seocontent.png" },
        { name: "Graphic Design", src: "/assets/images/graphicdesign.png" },
        { name: "Copywriting", src: "/assets/images/copywriting.png" },
        { name: "E-Books & Whitepapers", src: "/assets/images/ebook.png" },



      ]}
      features={[
        "SEO-Optimized Writing",
        "Multi-Language Support",
        "Brand-Oriented Design",
      ]}
      portfolio={[
        {name: "Tech Blog Series", src: "/assets/images/contentport1.png"},
        {name: "E-commerce Product Descriptions", src: "/assets/images/contentport2.png"},
        {name: "Business Infographics", src: "/assets/images/contentport3.png"},
      
      ]}
      faqs={[
        { q: "Do you provide SEO optimized content?", a: "Yes, all our content is SEO friendly and keyword-optimized." },
        { q: "Can you handle bulk projects?", a: "Yes, we can scale according to your needs." },
        { q: "Do you do social media content too?", a: "Yes, including captions, reels scripts, and graphics." },
      ]}
    />
  );
}
