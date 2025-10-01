"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  ShoppingCart,
  Users,
  CheckCircle2,
  Briefcase,
  Trophy,
  Globe2,
  MonitorSmartphone,
  Database,
  Code2,
} from "lucide-react";
import FAQAccordion from "@/components/Faq";

/* ---------------- Counter ---------------- */
function Counter({ end = 0, duration = 1500, suffix = "+", className = "" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const animate = () => {
      const start = performance.now();
      const from = 0;
      const to = end;
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        setValue(Math.floor(from + (to - from) * progress));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animate();
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return <span ref={ref} className={className}>{value}{suffix}</span>;
}

/* ---------------- Page ---------------- */
export default function PrestaShopPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    setTimeout(() => {
      setStatus("Submitted ✅");
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  const services = [
    "Custom PrestaShop Development",
    "Theme Design & Integration",
    "Plugin & Module Development",
    "Migration Services",
    "Performance Optimization",
    "Support & Maintenance",
  ];

  const benefits = [
    { title: "Agile Development", desc: "Quick and efficient project execution using agile methodology." },
    { title: "Certified Developers", desc: "Work with PrestaShop certified developers for reliable outcomes." },
    { title: "Dedicated Support", desc: "24/7 support for bug fixes, updates, and monitoring." },
    { title: "Cost Effective", desc: "Affordable packages tailored to your requirements." },
  ];

  const features = [
    { title: "Custom Storefront", desc: "Tailored store design to match your branding." },
    { title: "SEO Friendly", desc: "Optimized PrestaShop for better visibility." },
    { title: "Mobile Responsive", desc: "Designs that adapt across all devices." },
    { title: "Payment Integration", desc: "Secure and multiple payment gateway support." },
    { title: "Analytics Dashboard", desc: "Track performance with integrated analytics." },
    { title: "Easy Management", desc: "Admin-friendly dashboard to manage your store." },
  ];

  const portfolioSlides = [
    {
      title: "Matchbox",
      desc: "Fashion and lifestyle eCommerce with curated collections and modern UI.",
      img: "[ Portfolio Image ]",
    },
    {
      title: "Another PrestaShop Project",
      desc: "High-performing PrestaShop store with scalable features.",
      img: "[ Portfolio Image ]",
    },
  ];

  const techStack = [
    { name: "HTML5", icon: <Code2 className="w-8 h-8 text-orange-500" /> },
    { name: "JavaScript", icon: <Code2 className="w-8 h-8 text-yellow-500" /> },
    { name: "PrestaShop", icon: <ShoppingCart className="w-8 h-8 text-pink-500" /> },
    { name: "MySQL", icon: <Database className="w-8 h-8 text-green-500" /> },
    { name: "PHP", icon: <MonitorSmartphone className="w-8 h-8 text-indigo-500" /> },
  ];

  return (
    <main className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800 mt-16">

      {/* HERO */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-extrabold">PrestaShop Development Services</h1>
            <p className="mt-4 text-gray-700">
              Build scalable, secure, and high-performing PrestaShop stores with expert solutions.
            </p>
            <div className="mt-6 h-52 bg-gray-200 rounded-xl flex items-center justify-center">[ Hero Image ]</div>
          </motion.div>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-xl space-y-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *" className="w-full p-3 border rounded-lg" />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email *" className="w-full p-3 border rounded-lg" />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your requirements *" rows={4} className="w-full p-3 border rounded-lg"></textarea>
            <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold">Submit</button>
            {status && <p className="text-sm text-green-600">{status}</p>}
          </form>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Our PrestaShop Development Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} className="p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <ShoppingCart className="w-8 h-8 text-indigo-600 mb-3" />
                <h4 className="font-semibold">{s}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {benefits.map((b, i) => (
          <motion.div key={i} className="p-6 bg-white rounded-xl shadow"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
            <h4 className="font-semibold">{b.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{b.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* FEATURES */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Features of PrestaShop Development</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} className="p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
                <Users className="w-8 h-8 text-indigo-600 mb-3" />
                <h4 className="font-semibold">{f.title}</h4>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div><Counter end={2} suffix="+" className="text-4xl font-bold text-indigo-600" /><p>Years Experience</p></div>
          <div><Counter end={2} suffix="+" className="text-4xl font-bold text-indigo-600" /><p>Industries Served</p></div>
          <div><Counter end={2} suffix="+" className="text-4xl font-bold text-indigo-600" /><p>Projects Delivered</p></div>
        </div>
      </section>

      {/* PORTFOLIO SLIDER */}
      <section className="py-16 bg-white max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our PrestaShop Development Portfolio</h2>
        <Swiper slidesPerView={1.2} spaceBetween={20} breakpoints={{768:{slidesPerView:2},1024:{slidesPerView:3}}}>
          {portfolioSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow">
                <h3 className="font-semibold">{slide.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{slide.desc}</p>
                <div className="h-32 bg-gray-200 rounded-xl flex items-center justify-center mt-4">{slide.img}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* TECH STACK */}
      <section className="py-16 bg-gradient-to-r from-purple-50 via-indigo-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {techStack.map((t, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow flex flex-col items-center">
                {t.icon}
                <p className="mt-2">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion/>

    </main>
  );
}
