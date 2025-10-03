"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Wallet,
  ShieldCheck,
  Cpu,
  Star,
} from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Counter Animation
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

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function CentralizedExchangePage() {
  return (
    <main className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-gray-100 mt-18">
      {/* Hero */}
      <section className="relative pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp(0)}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
              Centralized Crypto Exchange Development
            </h1>
            <p className="mt-4 text-gray-300">
              Build a secure, scalable, and feature-rich centralized exchange to
              dominate the crypto market.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/10 shadow p-5 text-center border border-white/20">
                <Counter
                  end={500}
                  suffix="+"
                  className="text-3xl font-extrabold text-cyan-400"
                />
                <div className="text-sm text-gray-300">Projects Delivered</div>
              </div>
              <div className="rounded-xl bg-white/10 shadow p-5 text-center border border-white/20">
                <Counter
                  end={100}
                  suffix="+"
                  className="text-3xl font-extrabold text-cyan-400"
                />
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.2)}
            className="rounded-2xl overflow-hidden border border-white/20 shadow-lg"
          >
            <Image
              src="/assets/images/centralised.jpeg"
              alt="Centralized Exchange"
              height={500}
              width={700}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-14 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp(0)}>
            <h2 className="text-3xl font-bold mb-4">
              Our Centralized Crypto Exchange Development Overview
            </h2>
            <p className="text-gray-600">
              We provide high-performance centralized crypto exchanges with
              advanced trading engines, liquidity management, and institutional
              security standards.
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.2)}>
            <div className="overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/assets/images/centralised2.jpeg"
                alt="Centralized Exchange"
                height={200}
                width={700}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-gradient-to-br from-blue-50 via-cyan-50 to-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp(0)} className="text-3xl font-bold text-center">
            Our Centralized Exchange Development Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                icon: <Wallet className="w-6 h-6" />,
                title: "Wallet Integration",
                desc: "Secure multi-currency wallet system integration.",
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "High-End Security",
                desc: "DDoS, SSL, and end-to-end encryption to safeguard trading.",
              },
              {
                icon: <Cpu className="w-6 h-6" />,
                title: "Trading Engine",
                desc: "Scalable and high-speed matching engine for smooth trading.",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="rounded-2xl p-6 bg-white shadow border"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white inline-flex">
                  {s.icon}
                </div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-14 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Centralized Crypto Exchange Portfolio
          </h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          >
            {["Binance-like Exchange", "Coinbase-like Exchange", "Kraken Clone"].map(
              (project, i) => (
                <SwiperSlide key={i}>
                  <div className="rounded-xl p-6 border shadow bg-gradient-to-r from-white to-cyan-50">
                    <h4 className="font-semibold">{project}</h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Enterprise-grade centralized exchange solutions.
                    </p>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 bg-gradient-to-br from-blue-50 via-cyan-50 to-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp(0)} className="text-3xl font-bold text-center">
            Our Centralized Exchange Development Process
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              "Requirement Analysis",
              "Design & Prototyping",
              "Development & Customization",
              "Testing & QA",
              "Deployment",
              "Support & Maintenance",
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
      <section className="py-14 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Prakash Verma", "Sahil Tanwar", "Hamza Al Lawati"].map(
              (name, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.1)}
                  className="rounded-2xl p-6 bg-gradient-to-br from-blue-50 via-cyan-50 to-gray-50 shadow"
                >
                  <div className="font-semibold">{name}</div>
                  <p className="text-sm text-gray-600 mt-2">
                    “Great experience building our centralized exchange.”
                  </p>
                  <div className="flex gap-1 mt-2 text-cyan-600">
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
      <section id="contact" className="py-14 bg-gradient-to-r from-blue-900 via-cyan-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Contact Us</h2>
          <form className="mt-8 grid gap-4 md:grid-cols-2 bg-white/10 border border-white/20 shadow rounded-2xl p-6 backdrop-blur">
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
            <button className="md:col-span-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
