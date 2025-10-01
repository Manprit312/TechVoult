"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  Layers,
  Cpu,
  BarChart3,
  Database,
  CheckCircle2,
  UserCheck,
  Lock,
  TrendingUp,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay },
});

function Counter({ end = 0, duration = 1500, suffix = "+", className = "" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        setValue(Math.floor(end * progress));
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
    });

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

export default function SolanaBlockchain() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800 mt-16">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fade()}>
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Solana Blockchain Development Company
            </h1>
            <p className="mt-4 text-gray-700">
              Build high-performance, scalable blockchain apps with Solana’s lightning-fast and secure ecosystem.
            </p>
            <div className="flex gap-8 mt-6">
              <div className="text-center">
                <Counter end={500} suffix="+" className="text-3xl font-bold text-indigo-600" />
                <p className="text-sm">Projects Delivered</p>
              </div>
              <div className="text-center">
                <Counter end={100} suffix="M+" className="text-3xl font-bold text-indigo-600" />
                <p className="text-sm">Active Users</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            {...fade(0.1)}
            className="h-72 bg-gray-200 rounded-xl flex items-center justify-center"
          >
            [Hero Image]
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center">
            Our Solana Blockchain Development Services
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              "Solana dApp Development",
              "Solana NFT Marketplace Development",
              "Smart Contract Development",
              "DeFi Platform Development",
              "Token Development on Solana",
              "Wallet Development",
            ].map((s, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white shadow-md rounded-2xl p-6"
              >
                <CheckCircle2 className="h-6 w-6 text-indigo-600 mb-2" />
                <h4 className="font-semibold">{s}</h4>
                <p className="text-sm text-gray-600">
                  We provide expert {s.toLowerCase()} solutions on Solana.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-white/70">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center">
            Benefits of Solana Blockchain Development
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: "High Scalability", text: "Process thousands of transactions per second with low fees." },
              { title: "Energy Efficient", text: "Eco-friendly blockchain with Proof-of-History consensus." },
              { title: "Enterprise-Grade Security", text: "Robust security for enterprise adoption." },
            ].map((b, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-gray-50 rounded-xl shadow p-6"
              >
                <ShieldCheck className="h-6 w-6 text-indigo-600 mb-2" />
                <h4 className="font-semibold">{b.title}</h4>
                <p className="text-sm text-gray-600">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 {...fade()} className="text-3xl font-bold">
            Blockchain Platforms We Support
          </motion.h2>
          <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-6">
            {["Solana", "Ethereum", "Polygon", "Cardano", "Binance Smart Chain", "Avalanche"].map((tech, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white rounded-xl shadow-md p-6"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SLIDER */}
      <section className="py-16 bg-white/70">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center">
            Testimonials
          </motion.h2>
          <Swiper spaceBetween={20} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 3 }}} className="mt-10">
            {[
              { name: "Prakash Desai", role: "Product Owner", text: "Solana development boosted our DeFi project scalability." },
              { name: "Sahil Verma", role: "CTO", text: "NFT marketplace built on Solana was delivered seamlessly." },
              { name: "Hameed Al Lawati", role: "Business Head", text: "Reliable Solana developers for enterprise blockchain apps." },
            ].map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div {...fade(i * 0.1)} className="bg-white rounded-xl shadow-md p-6">
                  <UserCheck className="h-7 w-7 text-indigo-600" />
                  <p className="italic text-gray-700">“{t.text}”</p>
                  <p className="mt-4 font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-16 bg-white/80">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-2xl font-bold text-center">
            Let’s Talk About Your Project
          </motion.h3>
          <form className="mt-6 grid gap-4 md:grid-cols-2 bg-white p-6 rounded-2xl shadow-md">
            <input className="border px-3 py-2 rounded-lg" placeholder="Full Name *" />
            <input className="border px-3 py-2 rounded-lg" placeholder="Email *" type="email" />
            <input className="border px-3 py-2 rounded-lg" placeholder="Company" />
            <input className="border px-3 py-2 rounded-lg" placeholder="Phone" />
            <textarea className="md:col-span-2 border px-3 py-2 h-28 rounded-lg" placeholder="Your requirements *" />
            <button className="md:col-span-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
