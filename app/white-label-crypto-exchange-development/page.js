"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Wallet,
  ShieldCheck,
  TrendingUp,
  BarChart,
  Cpu,
  Users,
  CheckCircle2,
  Star,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

/* Counter Animation */
function Counter({ end = 0, suffix = "+", duration = 1500, className }) {
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
    <span ref={ref} className={className}>
      {val}
      {suffix}
    </span>
  );
}

/* Fade-In Effect */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function WhiteLabelExchangePage() {
  return (
    <main className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#06b6d4] text-gray-100 mt-16">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#06b6d4] text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp(0)}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              White Label Crypto Exchange Development Company
            </h1>
            <p className="mt-4 text-gray-200">
              Launch your fully functional, secure, and scalable crypto exchange
              with our customizable white-label solutions.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/10 border border-white/20 p-5 text-center">
                <Counter
                  end={500}
                  suffix="+"
                  className="text-3xl font-extrabold text-cyan-300"
                />
                <div className="text-sm text-gray-200">Projects Delivered</div>
              </div>
              <div className="rounded-xl bg-white/10 border border-white/20 p-5 text-center">
                <Counter
                  end={100}
                  suffix="+"
                  className="text-3xl font-extrabold text-cyan-300"
                />
                <div className="text-sm text-gray-200">Happy Clients</div>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-block mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 text-white font-semibold hover:opacity-90"
            >
              Get a Free Consultation
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.2)}
            className=" rounded-2xl overflow-hidden relative"
          >
            <Image
              src="/assets/images/whitelebelcrypto.webp"
              alt="White Label Exchange"
              height={700}
              width={600}
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-14 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 {...fadeUp(0)} className="text-3xl font-bold mb-4 text-white">
            Our White Label Crypto Exchange Development Company Overview
          </motion.h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We deliver enterprise-grade white-label crypto exchange software
            with high liquidity, security, and performance to help you
            successfully enter the crypto trading market.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp(0)} className="text-3xl font-bold text-center mb-10 text-white">
            Our White Label Crypto Exchange Development Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Wallet className="w-6 h-6" />,
                title: "Exchange Platform Development",
                desc: "Custom crypto exchange platforms tailored for scalability.",
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Secure Wallet Integration",
                desc: "Multi-currency secure crypto wallet integration.",
              },
              {
                icon: <Cpu className="w-6 h-6" />,
                title: "Trading Engine",
                desc: "High-performance trading engine with low latency.",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="rounded-2xl p-6 bg-white/10 border border-white/20 shadow text-white hover:bg-white/20 transition"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 inline-flex">
                  {s.icon}
                </div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 bg-black/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 {...fadeUp(0)} className="text-3xl font-bold mb-6 text-white">
            Security Features in Our White Label Crypto Exchange Script
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "KYC & AML Compliance",
              "Anti-DDoS Security",
              "Two-Factor Authentication",
              "Cold Wallet Integration",
            ].map((feature, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="p-6 rounded-xl border shadow bg-white/10 border-white/20 text-white"
              >
                <CheckCircle2 className="w-6 h-6 text-cyan-400 mx-auto" />
                <p className="mt-2 font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Carousel */}
      <section className="py-14 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">
            Our White Label Crypto Exchange Portfolio
          </h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          >
            {["Binance Clone", "Coinbase Clone", "Kraken Clone"].map(
              (project, i) => (
                <SwiperSlide key={i}>
                  <div className="rounded-xl p-6 border shadow bg-white/10 border-white/20 text-white">
                    <h4 className="font-semibold">{project}</h4>
                    <p className="text-sm text-gray-300 mt-2">
                      High-performance exchange clone with full features.
                    </p>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 bg-black/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Prakash Verma", "Sahil Tanwar", "Hamza Al Lawati"].map(
              (name, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.1)}
                  className="rounded-2xl p-6 bg-white/10 border border-white/20 shadow text-white"
                >
                  <div className="font-semibold">{name}</div>
                  <div className="text-xs text-gray-400">Client</div>
                  <p className="text-sm text-gray-200 mt-2">
                    "Great experience with white-label exchange development."
                  </p>
                  <div className="flex gap-1 mt-2 text-cyan-400">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-14 bg-black/40">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white">Contact Us</h2>
          <form className="mt-8 grid gap-4 md:grid-cols-2 bg-white/10 border border-white/20 shadow rounded-2xl p-6">
            <input placeholder="Full Name *" className="p-3 border rounded-lg bg-white/20 text-white placeholder-gray-300" />
            <input
              type="email"
              placeholder="Email *"
              className="p-3 border rounded-lg bg-white/20 text-white placeholder-gray-300"
            />
            <input placeholder="Company" className="p-3 border rounded-lg bg-white/20 text-white placeholder-gray-300" />
            <input placeholder="Phone" className="p-3 border rounded-lg bg-white/20 text-white placeholder-gray-300" />
            <textarea
              placeholder="Your requirements *"
              className="md:col-span-2 p-3 border rounded-lg h-28 bg-white/20 text-white placeholder-gray-300"
            />
            <button className="md:col-span-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 text-white font-semibold">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
