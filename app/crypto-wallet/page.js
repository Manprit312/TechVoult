"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  Coins,
  UserCheck,
  TrendingUp,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

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

export default function CryptoWalletDevelopment() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0A0F1F] via-[#1A2A6C] to-[#2E1065] text-gray-100 mt-18">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-[#1A2A6C] via-[#4A00E0] to-[#00C6FF]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fade()}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Crypto Wallet Development Company
            </h1>
            <p className="mt-4 text-gray-100">
              Build secure, scalable, and feature-rich crypto wallets with our
              blockchain experts. From DeFi wallets to enterprise-grade crypto
              custody solutions, we provide end-to-end wallet development.
            </p>
            <div className="flex gap-8 mt-6">
              <div className="text-center">
                <Counter end={150} suffix="+" className="text-3xl font-bold text-white" />
                <p className="text-sm">Wallets Delivered</p>
              </div>
              <div className="text-center">
                <Counter end={12} suffix="+ Years" className="text-3xl font-bold text-white" />
                <p className="text-sm">Industry Experience</p>
              </div>
            </div>
          </motion.div>
          <motion.div {...fade(0.1)} className="h-72 rounded-xl overflow-hidden shadow-xl relative">
            <Image
              src="/assets/images/cryptowallet2.jpeg"
              alt="Crypto Wallet"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center text-white">
            Our Crypto Wallet Development Services
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              "DeFi Wallet Development",
              "Mobile Crypto Wallets",
              "NFT Wallet Development",
              "Multi-Currency Wallets",
              "Web3 Wallet Integration",
              "Custodial & Non-Custodial Wallets",
            ].map((s, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-md hover:bg-white/20 transition"
              >
                <Coins className="h-6 w-6 text-[#00C6FF] mb-2" />
                <h4 className="font-semibold text-white">{s}</h4>
                <p className="text-sm text-gray-300">
                  Expert {s.toLowerCase()} solutions for businesses & startups.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WALLET SHOWCASE (Portfolio style with images) */}
      <section className="py-16 bg-black/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center text-white">
            Wallets We’ve Built
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: "NFT Wallet Web", img: "/assets/images/nftwalletweb.jpeg" },
              { title: "DeFi Mobile Wallet", img: "/assets/images/defimobilewallet.jpeg" },
              { title: "Wallet Suite", img: "/assets/images/suite.jpeg" },
              { title: "Crypto Wallet UI Shots", img: "/assets/images/cryptowalletuishots.jpeg" },
              { title: "Enterprise Wallet", img: "/assets/images/cryptowallet2.jpeg" },
              { title: "Token Wallet Development", img: "/assets/images/cryptowallettoken.jpeg" },
            ].map((p, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white/10 border border-white/20 rounded-2xl shadow-md p-4 overflow-hidden"
              >
                <div className="h-40 rounded-lg overflow-hidden relative">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="mt-3 font-semibold text-white">{p.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 {...fade()} className="text-3xl font-bold text-white">
            Why Choose Us for Crypto Wallet Development?
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: "Expert Team", text: "Dedicated blockchain developers with deep expertise." },
              { title: "Bank-Grade Security", text: "Multi-layer security with encryption and biometrics." },
              { title: "Global Reach", text: "Delivered wallets for startups & enterprises worldwide." },
            ].map((b, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white/10 border border-white/20 rounded-xl shadow p-6"
              >
                <TrendingUp className="h-6 w-6 text-[#4A00E0] mb-2" />
                <h4 className="font-semibold text-white">{b.title}</h4>
                <p className="text-sm text-gray-300">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SLIDER */}
      <section className="py-16 bg-black/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center text-white">
            Client Testimonials
          </motion.h2>
          <Swiper spaceBetween={20} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 3 } }} className="mt-10">
            {[
              { name: "Prakash Desai", role: "Product Owner", text: "The DeFi wallet they built was seamless and secure." },
              { name: "Sahil Verma", role: "CTO", text: "Our NFT wallet launched on time with excellent UI." },
              { name: "Hameed Al Lawati", role: "Business Head", text: "Great team for enterprise crypto custody solutions." },
            ].map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div {...fade(i * 0.1)} className="bg-white/10 border border-white/20 rounded-xl shadow-md p-6">
                  <UserCheck className="h-7 w-7 text-[#00C6FF]" />
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
      <section id="contact" className="py-16 bg-black/40">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-2xl font-bold text-center text-white">
            Let’s Talk About Your Wallet Project
          </motion.h3>
          <form className="mt-6 grid gap-4 md:grid-cols-2 bg-white/10 border border-white/20 p-6 rounded-2xl shadow-md">
            <input className="border px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300" placeholder="Full Name *" />
            <input className="border px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300" placeholder="Email *" type="email" />
            <input className="border px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300" placeholder="Company" />
            <input className="border px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300" placeholder="Phone" />
            <textarea className="md:col-span-2 border px-3 py-2 h-28 rounded-lg bg-white/20 text-white placeholder-gray-300" placeholder="Your requirements *" />
            <button className="md:col-span-2 bg-gradient-to-r from-[#1A2A6C] via-[#4A00E0] to-[#00C6FF] text-white px-6 py-3 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
