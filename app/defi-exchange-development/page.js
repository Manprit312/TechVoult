"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wallet,
  Cpu,
  Star,
  CheckCircle2,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Counter Component
function Counter({ end, suffix = "+", duration = 2000 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const animate = () => {
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        setVal(Math.floor(end * progress));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animate();
        }
      });
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className="text-4xl font-extrabold text-cyan-400">
      {val}
      {suffix}
    </span>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function DefiExchangePage() {
  return (
    <main className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#9333ea] text-gray-100">
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#06b6d4]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp(0)}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
              DeFi Exchange Development Company
            </h1>
            <p className="mt-4 text-gray-200">
              We build secure, scalable, and customizable DeFi exchanges for
              decentralized trading across multiple blockchain ecosystems.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/10 border border-white/20 shadow p-5 text-center">
                <Counter end={500} suffix="+" />
                <div className="text-sm text-gray-300">Projects Delivered</div>
              </div>
              <div className="rounded-xl bg-white/10 border border-white/20 shadow p-5 text-center">
                <Counter end={100} suffix="+" />
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.2)}
            className="h-64 rounded-2xl overflow-hidden shadow-xl relative"
          >
            <Image
              src="/assets/images/defiwallethero.jpeg"
              alt="DeFi Exchange"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-14 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp(0)}>
            <h2 className="text-3xl font-bold mb-4 text-white">
              Overview of DeFi Exchange Development
            </h2>
            <p className="text-gray-300">
              Our DeFi exchange development solutions empower startups,
              enterprises, and blockchain innovators with high-security
              decentralized trading platforms.
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.2)} className="h-52 relative rounded-xl overflow-hidden">
            <Image
              src="/assets/images/defi-exchange2.jpeg"
              alt="DeFi Exchange"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp(0)} className="text-3xl font-bold text-center text-white">
            Our DeFi Exchange Development Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                icon: <Wallet className="w-6 h-6" />,
                title: "DEX Platform Development",
                desc: "Decentralized exchange with advanced liquidity pools.",
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Smart Contract Integration",
                desc: "Secure and automated smart contracts for trading.",
              },
              {
                icon: <Cpu className="w-6 h-6" />,
                title: "Liquidity Management",
                desc: "High-speed liquidity modules for efficient trading.",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="rounded-2xl p-6 bg-white/10 border border-white/20 shadow text-white hover:bg-white/20 transition"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 inline-flex">
                  {s.icon}
                </div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Slider */}
      <section className="py-14 bg-black/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">
            Our DeFi Exchange Portfolio
          </h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          >
            {[
              { img: "/assets/images/crosschainwallet.jpeg", title: "CrossChain Wallet" },
              { img: "/assets/images/privatedefi.jpeg", title: "Private DeFi Wallet" },
              { img: "/assets/images/custodianwallet.jpeg", title: "Custodian Wallet" },
            ].map((p, i) => (
              <SwiperSlide key={i}>
                <div className="rounded-xl overflow-hidden relative h-48 shadow-lg border border-white/20">
                  <Image src={p.img} alt={p.title} fill className="object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-white">
                    <h4 className="font-semibold">{p.title}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Why Choose Us for DeFi Exchange Development?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Blockchain Expertise", "Customizable Solutions", "Robust Smart Contracts"].map(
              (reason, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.1)}
                  className="p-6 rounded-xl shadow bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
                >
                  <h4 className="font-semibold">{reason}</h4>
                  <p className="text-sm text-gray-300 mt-2">
                    We deliver enterprise-grade decentralized exchange platforms.
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
