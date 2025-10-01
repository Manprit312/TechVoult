"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  ShieldCheck,
  Wallet,
  Cpu,
  Star,
  Users,
  CheckCircle2,
  Globe,
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
    <span ref={ref} className="text-4xl font-extrabold text-indigo-700">
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
    <main className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 text-gray-800">
      {/* Hero */}
      <section className="relative pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp(0)}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              DeFi Exchange Development Company
            </h1>
            <p className="mt-4 text-gray-700">
              We build secure, scalable, and customizable DeFi exchanges for
              decentralized trading across multiple blockchain ecosystems.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white shadow p-5 text-center">
                <Counter end={500} suffix="+" />
                <div className="text-sm text-gray-500">Projects Delivered</div>
              </div>
              <div className="rounded-xl bg-white shadow p-5 text-center">
                <Counter end={100} suffix="+" />
                <div className="text-sm text-gray-500">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.2)}
            className="h-64 bg-white/80 rounded-2xl border shadow flex items-center justify-center"
          >
            <span className="text-gray-400">[Hero Image Here]</span>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp(0)}>
            <h2 className="text-3xl font-bold mb-4">
              Overview of DeFi Exchange Development Company
            </h2>
            <p className="text-gray-600">
              Our DeFi exchange development solutions empower startups,
              enterprises, and blockchain innovators with high-security
              decentralized trading platforms.
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.2)}>
            <div className="h-52 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
              <span className="text-gray-500">[Overview Image]</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp(0)} className="text-3xl font-bold text-center">
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
                className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 shadow border"
              >
                <div className="p-3 rounded-xl bg-white shadow inline-flex text-indigo-600">
                  {s.icon}
                </div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Slider */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
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
            {["SushiSwap Clone", "Uniswap Clone", "Custom DEX"].map(
              (project, i) => (
                <SwiperSlide key={i}>
                  <div className="rounded-xl p-6 border shadow bg-gradient-to-r from-white to-indigo-50">
                    <h4 className="font-semibold">{project}</h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Enterprise-grade DeFi exchange platforms.
                    </p>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Us for DeFi Exchange Development?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Blockchain Expertise",
              "Customizable Solutions",
              "Robust Smart Contracts",
            ].map((reason, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="p-6 rounded-xl shadow bg-gradient-to-br from-blue-50 to-purple-50"
              >
                <h4 className="font-semibold">{reason}</h4>
                <p className="text-sm text-gray-600 mt-2">
                  We deliver enterprise-grade decentralized exchange platforms.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp(0)} className="text-3xl font-bold text-center">
            Our DeFi Exchange Development Process
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              "Requirement Gathering",
              "UI/UX Design",
              "Smart Contract Integration",
              "Security Implementation",
              "Testing & Deployment",
            ].map((step, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="rounded-xl bg-white p-6 border shadow text-center"
              >
                <h4 className="font-semibold">{step}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Prakash Verma", "Sahil Tanwar", "Hamza Al Lawati"].map(
              (name, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.1)}
                  className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 shadow"
                >
                  <div className="font-semibold">{name}</div>
                  <p className="text-sm text-gray-600 mt-2">
                    “Excellent work on our DeFi exchange project.”
                  </p>
                  <div className="flex gap-1 mt-2 text-indigo-600">
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
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Contact Us</h2>
          <form className="mt-8 grid gap-4 md:grid-cols-2 bg-gradient-to-br from-indigo-50 to-purple-50 border shadow rounded-2xl p-6">
            <input placeholder="Full Name *" className="p-3 border rounded-lg" />
            <input type="email" placeholder="Email *" className="p-3 border rounded-lg" />
            <input placeholder="Company" className="p-3 border rounded-lg" />
            <input placeholder="Phone" className="p-3 border rounded-lg" />
            <textarea
              placeholder="Your requirements *"
              className="md:col-span-2 p-3 border rounded-lg h-28"
            />
            <button className="md:col-span-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Awards */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold mb-6">Awards & Recognition</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {["Clutch", "GoodFirms", "TopDev", "AppFutura"].map((award, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.1)}
              className="p-3 rounded-xl bg-white shadow"
            >
              {award}
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
