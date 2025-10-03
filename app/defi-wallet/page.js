"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

/* ----------------- Counter on scroll ------------------ */
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

/* ---------------- Data ---------------- */
const HERO = {
  title: "DeFi Wallet Development Company",
  subtitle:
    "Empower your business with secure, scalable, and feature-rich DeFi wallets. Our team delivers custom wallet solutions with advanced DeFi integration.",
  cta: "Get a Free Consultation",
};

const SERVICES = [
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "DeFi Wallet Development",
    desc: "Custom DeFi wallets tailored to your business requirements with advanced DeFi protocol support.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Multi-Currency Support",
    desc: "Store, send, and receive a wide range of crypto assets securely in one wallet.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Yield Farming Integration",
    desc: "Seamlessly stake assets and earn yield directly from your wallet.",
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Portfolio Management",
    desc: "Track holdings, performance, and transaction history easily.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Smart Contract Integration",
    desc: "Integrate with popular DeFi smart contracts and protocols.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "User-Centric UX",
    desc: "Clean, intuitive, and secure user interface for better adoption.",
  },
];

const FEATURES = [
  { title: "Secure Architecture", desc: "Multi-layer security and encryption." },
  { title: "Cross-Platform", desc: "Web, iOS, and Android support." },
  { title: "Fiat On-Ramp", desc: "Built-in fiat payment integration." },
  { title: "Multi-Signature", desc: "Enhanced control for businesses." },
];

const PORTFOLIO = [
  {
    title: "CrossChain Wallet",
    desc: "A secure cross-chain wallet supporting multiple DeFi protocols.",
    img: "/assets/images/crosschainwallet.jpeg",
  },
  {
    title: "Private DeFi Wallet",
    desc: "Built with advanced privacy and compliance features.",
    img: "/assets/images/privatedefi.jpeg",
  },
  {
    title: "Custodian Wallet",
    desc: "A managed wallet service for enterprises and institutions.",
    img: "/assets/images/custodianwallet.jpeg",
  },
];

/* ------------------ Anim helper ------------------ */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

/* ------------------- Component ------------------- */
export default function DeFiWalletPage() {
  return (
    <main className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#06b6d4] text-gray-100 mt-18">
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4] text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp(0)}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {HERO.title}
            </h1>
            <p className="mt-4">{HERO.subtitle}</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/10 backdrop-blur border border-white/20 p-5 text-center">
                <Counter
                  end={500}
                  suffix="+"
                  className="text-3xl font-extrabold text-cyan-300"
                />
                <div className="text-sm text-gray-200">Projects Delivered</div>
              </div>
              <div className="rounded-xl bg-white/10 backdrop-blur border border-white/20 p-5 text-center">
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
              {HERO.cta}
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.2)}
            className="h-60 rounded-2xl overflow-hidden shadow-xl relative"
          >
            <Image
              src="/assets/images/defiwallethero.jpeg"
              alt="DeFi Wallet Hero"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-black/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp(0)} className="text-3xl font-bold text-center mb-10 text-white">
            Our DeFi Wallet Development Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="rounded-2xl p-6 bg-white/10 border border-white/20 shadow text-white"
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
      <section className="py-14 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp(0)} className="text-3xl font-bold text-center mb-10 text-white">
            Key Features of DeFi Wallet Development
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="rounded-2xl p-6 bg-white/10 border border-white/20 shadow text-white"
              >
                <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                <h4 className="mt-3 font-semibold">{f.title}</h4>
                <p className="text-sm text-gray-300 mt-1">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio slider */}
      <section className="py-14 bg-black/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp(0)} className="text-3xl font-bold text-center mb-10 text-white">
            DeFi Wallet Portfolio
          </motion.h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          >
            {PORTFOLIO.map((p, i) => (
              <SwiperSlide key={i}>
                <div className="rounded-2xl bg-white/10 border border-white/20 shadow p-6 text-white">
                  <div className="h-32 rounded-lg mb-4 overflow-hidden relative">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-sm text-gray-300 mt-1">{p.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp(0)} className="text-3xl font-bold text-center mb-10 text-white">
            Testimonials
          </motion.h2>
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
                    "Great experience working with the team on our DeFi Wallet project."
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
      <section id="contact" className="py-14 bg-black/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white">Contact Us</h2>
          <form className="mt-8 grid gap-4 md:grid-cols-2 bg-white/10 border border-white/20 rounded-2xl shadow p-6">
            <input
              placeholder="Full Name *"
              className="p-3 border rounded-lg bg-white/20 text-white placeholder-gray-300"
              required
            />
            <input
              type="email"
              placeholder="Email *"
              className="p-3 border rounded-lg bg-white/20 text-white placeholder-gray-300"
              required
            />
            <input
              placeholder="Company"
              className="p-3 border rounded-lg bg-white/20 text-white placeholder-gray-300"
            />
            <input
              placeholder="Phone"
              className="p-3 border rounded-lg bg-white/20 text-white placeholder-gray-300"
            />
            <textarea
              placeholder="Your requirements *"
              className="md:col-span-2 p-3 border rounded-lg h-28 bg-white/20 text-white placeholder-gray-300"
              required
            />
            <button className="md:col-span-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 text-white font-semibold hover:opacity-90">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
