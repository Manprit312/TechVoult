"use client";
import ServicePage from "@/components/ServicePage";

export default function ContentCreationPage() {
  return (
    <ServicePage
      serviveImage={"/assets/images/contenthero.jpeg"}
      title="Content Creation"
      subtitle="Engage your audience with high-quality blogs, graphics, and copy designed to boost visibility and conversions."
      stats={[
        { value: "500+", label: "Blogs Written" },
        { value: "200+", label: "Graphics Designed" },
      ]}
      services={[
        { name: "Blog Writing", src: "/assets/images/blogwriting.jpeg" },
        { name: "SEO Content", src: "/assets/images/seocontent.jpeg" },
        { name: "Graphic Design", src: "/assets/images/graphicdesign.jpeg" },
        { name: "Copywriting", src: "/assets/images/copywriting.jpeg" },
        { name: "E-Books & Whitepapers", src: "/assets/images/ebook.jpeg" },



      ]}
      features={[
        "SEO-Optimized Writing",
        "Multi-Language Support",
        "Brand-Oriented Design",
      ]}
      portfolio={[
        {name: "Tech Blog Series", src: "/assets/images/contentport1.jpeg"},
        {name: "E-commerce Product Descriptions", src: "/assets/images/contentport2.jpeg"},
        {name: "Business Infographics", src: "/assets/images/contentport3.jpeg"},
      
      ]}
      faqs={[
        { q: "Do you provide SEO optimized content?", a: "Yes, all our content is SEO friendly and keyword-optimized." },
        { q: "Can you handle bulk projects?", a: "Yes, we can scale according to your needs." },
        { q: "Do you do social media content too?", a: "Yes, including captions, reels scripts, and graphics." },
      ]}
    />
  );
}
