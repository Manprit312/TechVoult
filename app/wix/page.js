"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

/* Lucide icons */
import {
  Globe2,
  Code2,
  Database,
  Layout,
  Brush,
  PlugZap,
  ShoppingCart,
  ShieldCheck,
  Wrench,
  Server,
  CheckCircle2,
  Award,
  MessageSquareMore,
} from "lucide-react";

/* Counter component */
function Counter({ end = 0, duration = 1400, suffix = "+", className = "" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        setValue(Math.floor(end * p));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            animate();
          }
        });
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}

/* Page */
export default function WixPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all required fields.");
      return;
    }
    setStatus("Submitting...");
    setTimeout(() => {
      setStatus("Submitted ✅ We’ll get back to you shortly.");
      setForm({ name: "", email: "", message: "" });
    }, 900);
  };

  /* ----------------------- Collections -------------------- */
  const services = [
    { icon: <Layout />, title: "Custom Wix Development" },
    { icon: <Brush />, title: "Theme Design & Customization" },
    { icon: <PlugZap />, title: "App Integration" },
    { icon: <ShoppingCart />, title: "Wix eCommerce Solutions" },
  ];

  const features = [
    { title: "Custom Wix Design", desc: "Tailored UI aligned with your brand to increase engagement." },
    { title: "Mobile-First Approach", desc: "Pixel-perfect responsive layouts for all devices." },
    { title: "SEO-Optimized Sites", desc: "Clean structure, fast loading, and search-friendly architecture." },
    { title: "Secure & Scalable", desc: "Secure hosting, backups, and growth-ready setups." },
  ];

  const portfolio = [
    { title: "Business Website", img: "/assets/images/wixhero.jpeg", summary: "Clean, responsive design with dynamic features." },
    { title: "eCommerce Store", img: "/assets/images/shipforshop.jpeg", summary: "Custom product pages, checkout, and payment integrations." },
    { title: "Portfolio Website", img: "/assets/images/resanskrit.jpeg", summary: "Creative portfolio with animations and galleries." },
  ];

  const caseStudies = [
    { title: "Online Services Marketplace", img: "/assets/images/matchbox.jpeg", result: "Improved UX increased conversions by 35%." },
    { title: "Education Portal", img: "/assets/images/thesnuslife.png", result: "Seamless student registration and course management." },
    { title: "Nonprofit Campaign", img: "/assets/images/fundraising.jpeg", result: "Optimized donation flow boosted contributions by 50%." },
  ];

  const hostingPlans = [
    { title: "Managed Hosting", points: ["SSL Security", "Daily Backups", "High Uptime", "CDN Support"] },
    { title: "Wix Redesign", points: ["UX/UI Audit", "Modern Redesign", "Reusable Components", "A/B Testing"] },
    { title: "Ongoing Maintenance", points: ["Content updates", "Performance monitoring", "SEO improvements", "Monthly reports"] },
  ];

  const workflow = [
    { step: "1. Discovery", desc: "Understand goals, users, and technical needs for your Wix project." },
    { step: "2. Design & Setup", desc: "Wireframes, themes, and custom UI designed in Wix Studio." },
    { step: "3. Development", desc: "Dynamic pages, Wix apps, custom APIs, and CMS integration." },
    { step: "4. Launch & Support", desc: "Testing, SEO setup, training, and long-term maintenance." },
  ];

  const testimonials = [
    { name: "Lisa Carter", org: "Entrepreneur", quote: "Our Wix store doubled sales after the redesign — fantastic work!" },
    { name: "James Lee", org: "Startup Founder", quote: "Smooth launch and fast support. Great Wix expertise." },
    { name: "Mia Johnson", org: "Artist", quote: "My Wix portfolio looks amazing, clients love the new design." },
  ];

  const faqs = [
    { q: "Do you build custom Wix themes?", a: "Yes. We create tailored themes and reusable sections optimized for speed and SEO." },
    { q: "Can you migrate my site to Wix?", a: "Yes. We handle migrations ensuring zero data loss and SEO retention." },
    { q: "Do you support Wix eCommerce?", a: "Yes. We set up products, payments, shipping, tax, and conversion-focused UX." },
    { q: "Do you provide ongoing support?", a: "Yes. Hosting, updates, SEO, and maintenance packages are available." },
  ];

  /* ----------------------- UI -------------------- */
  return (
    <main className="text-gray-800 bg-gradient-to-br from-blue-50 via-sky-50 to-white mt-18">
      
      {/* HERO */}
      <section className="py-20 px-6 bg-gradient-to-r from-sky-100 via-blue-100 to-indigo-100">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-extrabold">Wix Development Services</h1>
            <p className="mt-3 text-gray-700">
              Custom Wix websites, eCommerce, migrations, and ongoing maintenance — built for performance, SEO, and scalability.
            </p>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="mt-6 h-48 w-full overflow-hidden rounded-xl shadow-lg">
              <Image src="/assets/images/wixhero.jpeg" alt="Wix Hero" width={600} height={300} className="h-full w-full object-cover" />
            </motion.div>
          </motion.div>

          {/* Lead Form */}
          <motion.form onSubmit={onSubmit} className="bg-white p-6 rounded-2xl shadow-xl space-y-4" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12 }}>
            <input name="name" value={form.name} onChange={onChange} placeholder="Full Name *" className="w-full p-3 border rounded-lg" />
            <input type="email" name="email" value={form.email} onChange={onChange} placeholder="Email *" className="w-full p-3 border rounded-lg" />
            <textarea name="message" value={form.message} onChange={onChange} rows={4} placeholder="Tell us about your project *" className="w-full p-3 border rounded-lg" />
            <button type="submit" className="w-full rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 py-3 text-white font-semibold hover:opacity-95">Get Free Consultation</button>
            {status && <p className="text-sm text-blue-700 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2">{status}</p>}
          </motion.form>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 px-6 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="h-48 overflow-hidden rounded-xl shadow-lg">
            <Image src="/assets/images/wixservice.jpeg" alt="Wix Overview" width={500} height={250} className="h-full w-full object-cover" />
          </motion.div>
          <div>
            <h2 className="text-3xl font-bold">Overview of Wix Development Services</h2>
            <p className="mt-4 text-gray-700">We build modern Wix websites with powerful integrations, optimized for SEO, speed, and scalability.</p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-bold text-center">Wix Development Portfolio</h3>
          <Swiper slidesPerView={1.15} spaceBetween={16} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="mt-10">
            {portfolio.map((p, i) => (
              <SwiperSlide key={i}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-2xl overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-white shadow">
                  <div className="h-36 w-full overflow-hidden">
                    <Image src={p.img} alt={p.title} width={400} height={200} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="mt-2 font-semibold">{p.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{p.summary}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-bold text-center">Case Studies on Successful Wix Projects</h3>
          <Swiper slidesPerView={1.15} spaceBetween={16} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="mt-10">
            {caseStudies.map((c, i) => (
              <SwiperSlide key={i}>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-2xl overflow-hidden bg-white shadow">
                  <div className="h-32 w-full overflow-hidden">
                    <Image src={c.img} alt={c.title} width={400} height={200} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="mt-2 font-semibold">{c.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{c.result}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  );
}
