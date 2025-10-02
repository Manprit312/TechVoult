"use client";
import Link from "next/link";
import { 
  Code2, Smartphone, Blocks, Gamepad2, 
  Megaphone, Search, MonitorPlay, Brain, 
  Camera, Video, PenTool, Share2 
} from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-10 h-10 text-orange-500" />,
    title: "Web Development",
    desc: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
    points: ["React & Next.js", "E-commerce Solutions", "Progressive Web Apps"],
    link: "/webdevelopment",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-pink-500" />,
    title: "App Development",
    desc: "Native and cross-platform mobile applications that deliver seamless user experiences across all devices.",
    points: ["iOS & Android", "React Native", "Flutter Development"],
    link: "/mobiledevelopment",
  },
  {
    icon: <Blocks className="w-10 h-10 text-blue-500" />,
    title: "Blockchain Development",
    desc: "Decentralized apps, smart contracts, and NFT platforms designed for secure digital transactions.",
    points: ["DeFi Applications", "Smart Contracts", "NFT Platforms"],
    link: "/web3development",
  },
  {
    icon: <Gamepad2 className="w-10 h-10 text-green-500" />,
    title: "Game Development",
    desc: "Immersive gaming experiences from concept to deployment across multiple platforms.",
    points: ["Unity & Unreal", "Mobile & PC Games", "VR/AR Experiences"],
    link: "/gamedevelopment",
  },
  {
    icon: <Megaphone className="w-10 h-10 text-yellow-500" />,
    title: "Digital Marketing",
    desc: "Strategies that amplify your brand and deliver measurable results through multiple digital platforms.",
    points: ["Social Media Marketing", "Content Strategy", "Brand Development"],
    link: "/social-media",
  },
  {
    icon: <Search className="w-10 h-10 text-indigo-500" />,
    title: "SEO Services",
    desc: "Boost visibility with advanced search engine optimization tailored to your business growth.",
    points: ["Technical SEO", "Content Optimization", "Local SEO"],
    link: "/social-media",
  },
  {
    icon: <MonitorPlay className="w-10 h-10 text-red-500" />,
    title: "Advertisement",
    desc: "Targeted ad campaigns across digital platforms to maximize reach and ROI.",
    points: ["Google Ads", "Social Media Ads", "Display Advertising"],
    link: "/social-media",
  },
  {
    icon: <Brain className="w-10 h-10 text-purple-500" />,
    title: "AI Solutions",
    desc: "AI-powered solutions to streamline operations and enhance decision-making.",
    points: ["Machine Learning", "Natural Language Processing", "Computer Vision"],
    link: "/ai-development",
  },
  {
    icon: <Share2 className="w-10 h-10 text-sky-500" />,
    title: "Social Media Management",
    desc: "End-to-end management of social media channels to grow your brand presence.",
    points: ["Strategy Planning", "Community Engagement", "Analytics & Reporting"],
    link: "/social-media",
  },
  {
    icon: <PenTool className="w-10 h-10 text-rose-500" />,
    title: "Content Creation",
    desc: "Creative and impactful content that resonates with your target audience.",
    points: ["Blogs & Articles", "Creative Copywriting", "Graphic Design"],
    link: "/content-creation",
  },
  {
    icon: <Video className="w-10 h-10 text-teal-500" />,
    title: "Videography",
    desc: "High-quality video production to tell your story visually and effectively.",
    points: ["Corporate Videos", "Promotional Ads", "Event Coverage"],
    link: "/videography",
  },
  {
    icon: <Camera className="w-10 h-10 text-amber-500" />,
    title: "Photography",
    desc: "Professional photography services to capture your brand’s best moments.",
    points: ["Product Photography", "Event Shoots", "Portrait & Lifestyle"],
    link: "/photography",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-6">
          Our{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Services
          </span>
        </h2>
        <p className="text-center text-[#696363] text-xl mx-auto mb-12 w-2/4">
          Comprehensive digital solutions designed to accelerate your business growth and digital transformation.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <Link key={idx} href={service.link}>
              <div
                className="relative p-6 rounded-xl bg-white border border-gray-200 shadow-sm transition-all duration-500 z-0 
                           hover:-translate-y-3 hover:shadow-2xl hover:z-12 hover:border-gray-300 cursor-pointer"
              >
                {service.icon}
                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{service.desc}</p>
                <ul className="mt-3 text-sm text-gray-500 list-disc list-inside">
                  {service.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
