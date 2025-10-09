"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShoppingCart,
  Code2,
  MonitorSmartphone,
  Globe2,
  Users,
  Trophy,
  Briefcase,
  Rocket,
  PanelsTopLeft,
} from "lucide-react";

/* ---------------- Number Counter (on view) ---------------- */
function Counter({ end = 0, duration = 1500, suffix = "+", className = "" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      const start = performance.now();
      const from = 0;
      const to = end;

      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const current = Math.floor(from + (to - from) * progress);
        setValue(current);
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          animate();
        }
      });
    }, { threshold: 0.3 });

    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {value.toLocaleString()}
      {suffix}
    </motion.span>
  );
}

/* ---------------- Stats band ---------------- */
function StatsBand() {
  const stats = [
    { icon: <Trophy className="w-6 h-6" />, value: 500, label: "Projects Delivered" },
    { icon: <Briefcase className="w-6 h-6" />, value: 100, label: "Happy Clients" },
    { icon: <Users className="w-6 h-6" />, value: 50, label: "WooCommerce Experts" },
  ];
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="rounded-2xl bg-gradient-to-br from-purple-50 via-indigo-50 to-white shadow p-6 flex items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className="rounded-xl bg-white p-3 text-purple-600 shadow-sm">{s.icon}</div>
            <div>
              <Counter end={s.value} suffix="+" className="text-3xl font-extrabold text-gray-900" />
              <p className="text-sm text-gray-600 mt-1">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Simple section wrappers ---------------- */
const Section = ({ children, className = "" }) => (
  <section className={`py-16 ${className}`}>{children}</section>
);
const Container = ({ children, className = "" }) => (
  <div className={`max-w-6xl mx-auto px-6 ${className}`}>{children}</div>
);

/* ---------------- Page ---------------- */
export default function WooCommercePage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    setTimeout(() => {
      setStatus("Submitted ✅");
      setForm({ name: "", email: "", message: "" });
    }, 900);
  };

  const features = [
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-purple-600" />,
      title: "Custom Store Design",
      desc: "Tailored WooCommerce storefront design that reflects your brand and boosts conversions.",
    },
    {
      icon: <Code2 className="w-8 h-8 text-indigo-600" />,
      title: "Plugin Development",
      desc: "Custom WooCommerce plugins for unique functionality.",
    },
    {
      icon: <Globe2 className="w-8 h-8 text-pink-600" />,
      title: "SEO Optimization",
      desc: "Technical SEO & performance tuning for Woo stores.",
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-emerald-600" />,
      title: "Payment & Shipping Setup",
      desc: "Seamless integration of payment gateways and shipping APIs.",
    },
    {
      icon: <PanelsTopLeft className="w-8 h-8 text-sky-600" />,
      title: "Theme Customization",
      desc: "Full theme customization aligned with your brand identity.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-500" />,
      title: "Speed Optimization",
      desc: "Faster loading stores optimized for conversions.",
    },
  ];

  const process = [
    { step: "1. Consultation", desc: "Understanding client needs & goals." },
    { step: "2. Development", desc: "Building WooCommerce store with custom features." },
    { step: "3. QA Testing", desc: "Ensure bug-free and smooth performance." },
    { step: "4. Deployment", desc: "Launch your WooCommerce store successfully." },
  ];

  const testimonials = [
    { quote: "They built a fast, scalable WooCommerce store that doubled our conversions.", name: "Client A" },
    { quote: "Smooth migration with zero downtime. Highly recommend.", name: "Client B" },
    { quote: "Their support team keeps our store running 24/7 flawlessly.", name: "Client C" },
  ];

  return (
    <main className="bg-gradient-to-br from-purple-50 via-indigo-50 to-white text-gray-800 mt-16">
      {/* HERO */}
      <motion.section
        className="py-20 px-6 bg-gradient-to-r from-purple-200 via-indigo-100 to-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Container className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-purple-900">Expert WooCommerce Development Services
</h1>
            <p className="mt-4 text-gray-700">BAt Parwanix, we specialize in crafting high-performance WooCommerce stores that blend WordPress flexibility with enterprise-grade functionality. Our developers design stores optimized for speed, security, and seamless user experiences to drive sales and growth</p>
            <motion.div
              className="mt-6 h-52 rounded-xl overflow-hidden shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Image
                src="/assets/images/woocom.jpeg"
                alt="WooCommerce Development"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-xl space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *"
              required className="w-full p-3 border rounded-lg" />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email *"
              required className="w-full p-3 border rounded-lg" />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your requirements *"
              rows={4} required className="w-full p-3 border rounded-lg" />
            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:opacity-95"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Submit
            </motion.button>
            {status && <p className="text-sm text-green-700">{status}</p>}
          </motion.form>
        </Container>
      </motion.section>

      {/* Stats */}
      <StatsBand />

      {/* Features */}
      <Section className="bg-gradient-to-r from-purple-50 via-indigo-50 to-white">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-10">Features of Our WooCommerce Development</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white rounded-xl shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {f.icon}
                <h4 className="mt-4 font-semibold">{f.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-10">Our WooCommerce Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-50 via-indigo-50 to-white shadow text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <CheckCircle2 className="mx-auto w-8 h-8 text-purple-600" />
                <h4 className="mt-4 font-semibold">{p.step}</h4>
                <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="bg-gradient-to-r from-purple-50 via-indigo-50 to-white">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
          <Swiper slidesPerView={1} loop>
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="italic">“{t.quote}”</p>
                  <p className="mt-4 text-sm font-semibold text-gray-700">{t.name}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Section>
    </main>
  );
}
