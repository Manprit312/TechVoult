"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Cpu,
  ShieldCheck,
  BarChart3,
  Globe,
  Server,
  Layers,
  Coins,
  Database,
  UserCheck,
} from "lucide-react";

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

export default function Web3Development() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fade()}>
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Blockchain Development Services
            </h1>
            <p className="mt-4 text-gray-700">
              Empower your business with secure & scalable blockchain
              development solutions for the future of Web3.
            </p>
            <button className="mt-6 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600">
              Book a Free Consultation
            </button>
          </motion.div>
          <motion.div
            {...fade(0.1)}
            className="h-72 bg-gray-200 rounded-xl flex items-center justify-center"
          >
            [Hero Image]
          </motion.div>
        </div>
      </section>

      {/* OUR BLOCKCHAIN DEVELOPMENT SERVICES */}
      <section className="py-16 bg-white/70">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center">
            Our Core Blockchain Development Services
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Blockchain Consulting",
                icon: Cpu,
                text: "Strategic blockchain consulting for business transformation.",
              },
              {
                title: "Smart Contracts",
                icon: Server,
                text: "Build and audit self-executing smart contracts.",
              },
              {
                title: "dApp Development",
                icon: Globe,
                text: "Custom decentralized applications on leading blockchains.",
              },
              {
                title: "DeFi Solutions",
                icon: Coins,
                text: "Decentralized Finance platforms with advanced features.",
              },
              {
                title: "NFT Marketplace",
                icon: Layers,
                text: "Launch secure & scalable NFT platforms.",
              },
              {
                title: "Blockchain Security",
                icon: ShieldCheck,
                text: "Advanced security audits and compliance testing.",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white shadow-md rounded-2xl p-6 text-center"
              >
                <s.icon className="h-8 w-8 text-indigo-600 mx-auto" />
                <h4 className="mt-3 font-semibold">{s.title}</h4>
                <p className="text-sm text-gray-600">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center">
            Industries We Serve
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              "Finance & Banking",
              "Healthcare",
              "Supply Chain",
              "Real Estate",
              "Entertainment",
              "Public Sector",
            ].map((ind, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white shadow-md rounded-2xl p-6"
              >
                <div className="h-40 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                  [Image]
                </div>
                <h4 className="font-semibold">{ind}</h4>
                <p className="text-sm text-gray-600">
                  {ind} blockchain transformation case study.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-white/70">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center">
            Why Choose SDLC Corp For Blockchain Development?
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Scalable Blockchain Apps",
                text: "We deliver solutions that scale with your business.",
              },
              {
                title: "Full-Stack Expertise",
                text: "End-to-end blockchain development capabilities.",
              },
              {
                title: "Trusted Globally",
                text: "Worked with 500+ clients worldwide.",
              },
            ].map((c, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <BarChart3 className="h-7 w-7 text-indigo-600" />
                <h4 className="mt-3 font-semibold">{c.title}</h4>
                <p className="text-sm text-gray-600">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 shadow rounded-xl">
            <Counter end={500} className="text-4xl font-bold text-indigo-600" />{" "}
            <p className="mt-2">Blockchain Projects Delivered</p>
          </div>
          <div className="bg-white p-6 shadow rounded-xl">
            <Counter end={100} suffix="+" className="text-4xl font-bold text-indigo-600" />{" "}
            <p className="mt-2">Global Clients</p>
          </div>
          <div className="bg-white p-6 shadow rounded-xl">
            <Counter end={50} suffix="+" className="text-4xl font-bold text-indigo-600" />{" "}
            <p className="mt-2">Blockchain Experts</p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="py-16 bg-white/60">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center">
            Blockchain Platforms We Specialize In
          </motion.h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              "Ethereum",
              "Hyperledger",
              "Polygon",
              "Binance Smart Chain",
              "Solana",
              "Tezos",
              "Avalanche",
              "Cardano",
            ].map((tech, i) => (
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

      {/* TESTIMONIALS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center">
            Client Testimonials
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "John Carter",
                role: "CTO, FinTech",
                text: "The team at SDLC Corp delivered our blockchain exchange flawlessly.",
              },
              {
                name: "Sophie Lee",
                role: "CEO, Real Estate Startup",
                text: "Smart contract integration was seamless and secure.",
              },
              {
                name: "Raj Patel",
                role: "COO, Supply Chain",
                text: "Their blockchain solution improved our efficiency by 40%.",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <UserCheck className="h-7 w-7 text-indigo-600" />
                <p className="italic text-gray-700">“{t.text}”</p>
                <p className="mt-4 font-semibold">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 bg-white/70">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-2xl font-bold text-center">
            Let’s Talk About Your Blockchain Project
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
