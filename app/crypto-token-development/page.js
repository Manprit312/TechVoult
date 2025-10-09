"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  Coins,
  UserCheck,
  TrendingUp,
  CheckCircle2,
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

export default function CryptoTokenDevelopment() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#2E1065] text-gray-100 mt-16">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-[#FFD700] via-[#8A2BE2] to-[#1E3A8A]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fade()}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Crypto Token Development Company
            </h1>
            <p className="mt-4 text-gray-100">
              Parwanix Corp is a top crypto token development company offering
              robust, scalable, and secure token development solutions across
              multiple blockchain platforms.
            </p>
            <div className="flex gap-8 mt-6">
              <div className="text-center">
                <Counter
                  end={100}
                  suffix="+"
                  className="text-3xl font-bold text-white"
                />
                <p className="text-sm">Projects Delivered</p>
              </div>
              <div className="text-center">
                <Counter
                  end={10}
                  suffix="+"
                  className="text-3xl font-bold text-white"
                />
                <p className="text-sm">Years Experience</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            {...fade(0.1)}
            className="h-72 rounded-xl flex items-center justify-center overflow-hidden shadow-xl"
          >
            <Image
              src="/assets/images/cryptotoken.jpg"
              alt="Crypto Token Development"
              className="object-cover w-full h-full"
              height={400}
              width={600}
            />
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 {...fade()} className="text-3xl font-bold text-white">
            Overview of Our Crypto Token Development Services
          </motion.h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            We help businesses create crypto tokens on various blockchain
            networks like Ethereum, Binance Smart Chain, Solana, and more. Our
            tokens are highly secure, scalable, and fully compliant.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center text-white">
            Our Crypto Token Development Services
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              "Utility Token Development",
              "Security Token Development",
              "NFT Token Development",
              "DeFi Token Development",
              "Stablecoin Development",
              "Governance Token Development",
            ].map((s, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-md hover:bg-white/20 transition"
              >
                <Coins className="h-6 w-6 text-[#FFD700] mb-2" />
                <h4 className="font-semibold text-white">{s}</h4>
                <p className="text-sm text-gray-300">
                  Professional {s.toLowerCase()} services tailored to your
                  project needs.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TOKEN FEATURES SLIDER */}
      <section className="py-16 bg-black/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center text-white">
            Token Features We Deliver
          </motion.h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 3 } }}
            className="mt-10"
          >
            {[
              "Fungibility",
              "Liquidity",
              "Security",
              "Transparency",
              "Interoperability",
              "Programmability",
            ].map((feature, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  {...fade(i * 0.1)}
                  className="bg-white/10 border border-white/20 rounded-xl shadow-md p-6"
                >
                  <ShieldCheck className="h-6 w-6 text-[#8A2BE2] mb-2" />
                  <h4 className="font-semibold text-white">{feature}</h4>
                  <p className="text-sm text-gray-300">
                    Essential token feature: {feature}.
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 {...fade()} className="text-3xl font-bold text-white">
            Why Choose Parwanix Corp for Crypto Token Development?
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Expert Team",
                text: "Skilled blockchain developers specializing in token creation.",
              },
              {
                title: "Security First",
                text: "We follow the best practices to ensure tokens are safe.",
              },
              {
                title: "Global Delivery",
                text: "Successfully delivered crypto solutions worldwide.",
              },
            ].map((b, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white/10 border border-white/20 rounded-xl shadow p-6"
              >
                <TrendingUp className="h-6 w-6 text-[#FFD700] mb-2" />
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
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 3 } }}
            className="mt-10"
          >
            {[
              {
                name: "Prakash Desai",
                role: "Product Owner",
                text: "Their crypto token service helped us launch a successful ICO.",
              },
              {
                name: "Sahil Verma",
                role: "CTO",
                text: "They developed a secure and scalable governance token for us.",
              },
              {
                name: "Hameed Al Lawati",
                role: "Business Head",
                text: "The NFT tokens they created were flawless and well received.",
              },
            ].map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  {...fade(i * 0.1)}
                  className="bg-white/10 border border-white/20 rounded-xl shadow-md p-6"
                >
                  <UserCheck className="h-7 w-7 text-[#8A2BE2]" />
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
            Let’s Talk About Your Project
          </motion.h3>
          <form className="mt-6 grid gap-4 md:grid-cols-2 bg-white/10 border border-white/20 p-6 rounded-2xl shadow-md">
            <input
              className="border px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300"
              placeholder="Full Name *"
            />
            <input
              className="border px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300"
              placeholder="Email *"
              type="email"
            />
            <input
              className="border px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300"
              placeholder="Company"
            />
            <input
              className="border px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300"
              placeholder="Phone"
            />
            <textarea
              className="md:col-span-2 border px-3 py-2 h-28 rounded-lg bg-white/20 text-white placeholder-gray-300"
              placeholder="Your requirements *"
            />
            <button className="md:col-span-2 bg-gradient-to-r from-[#FFD700] via-[#8A2BE2] to-[#1E3A8A] text-white px-6 py-3 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
