"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  UserCheck,
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
    <main className="min-h-screen bg-gradient-to-br from-[#0F0C29] via-[#302B63] to-[#24243E] text-gray-100 mt-18">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00FFA3]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fade()}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Solana Blockchain Development Company
            </h1>
            <p className="mt-4 text-gray-100">
              Build high-performance, scalable blockchain apps with Solana’s lightning-fast and secure ecosystem.
            </p>
            <div className="flex gap-8 mt-6">
              <div className="text-center">
                <Counter end={500} suffix="+" className="text-3xl font-bold text-white" />
                <p className="text-sm">Projects Delivered</p>
              </div>
              <div className="text-center">
                <Counter end={100} suffix="M+" className="text-3xl font-bold text-white" />
                <p className="text-sm">Active Users</p>
              </div>
            </div>
          </motion.div>
         <motion.div
  {...fade(0.1)}
  className="h-72 w-full rounded-xl overflow-hidden relative shadow-xl"
>
  <Image
    src="/assets/images/solana.jpeg"
    alt="Solana Development"
    fill
    className="object-cover"
  />
</motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center text-white">
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
                className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-md hover:bg-white/20 transition"
              >
                <CheckCircle2 className="h-6 w-6 text-[#14F195] mb-2" />
                <h4 className="font-semibold text-white">{s}</h4>
                <p className="text-sm text-gray-300">
                  We provide expert {s.toLowerCase()} solutions on Solana.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center text-white">
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
                className="bg-white/10 border border-white/20 rounded-xl shadow p-6"
              >
                <ShieldCheck className="h-6 w-6 text-[#00FFA3] mb-2" />
                <h4 className="font-semibold text-white">{b.title}</h4>
                <p className="text-sm text-gray-300">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-16 bg-black/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 {...fade()} className="text-3xl font-bold text-white">
            Blockchain Platforms We Support
          </motion.h2>
          <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-6">
            {["Solana", "Ethereum", "Polygon", "Cardano", "Binance Smart Chain", "Avalanche"].map((tech, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white/10 border border-white/20 rounded-xl shadow-md p-6 text-white hover:bg-white/20 transition"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SLIDER */}
      <section className="py-16 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center text-white">
            Testimonials
          </motion.h2>
          <Swiper spaceBetween={20} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 3 }}} className="mt-10">
            {[
              { name: "Prakash Desai", role: "Product Owner", text: "Solana development boosted our DeFi project scalability." },
              { name: "Sahil Verma", role: "CTO", text: "NFT marketplace built on Solana was delivered seamlessly." },
              { name: "Hameed Al Lawati", role: "Business Head", text: "Reliable Solana developers for enterprise blockchain apps." },
            ].map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div {...fade(i * 0.1)} className="bg-white/10 border border-white/20 rounded-xl shadow-md p-6">
                  <UserCheck className="h-7 w-7 text-[#9945FF]" />
                  <p className="italic text-gray-200">“{t.text}”</p>
                  <p className="mt-4 font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-16 bg-black/30">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-2xl font-bold text-center text-white">
            Let’s Talk About Your Project
          </motion.h3>
          <form className="mt-6 grid gap-4 md:grid-cols-2 bg-white/10 border border-white/20 p-6 rounded-2xl shadow-md">
            <input className="border px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300" placeholder="Full Name *" />
            <input className="border px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300" placeholder="Email *" type="email" />
            <input className="border px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300" placeholder="Company" />
            <input className="border px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300" placeholder="Phone" />
            <textarea className="md:col-span-2 border px-3 py-2 h-28 rounded-lg bg-white/20 text-white placeholder-gray-300" placeholder="Your requirements *" />
            <button className="md:col-span-2 bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00FFA3] text-white px-6 py-3 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
