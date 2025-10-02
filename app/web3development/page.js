"use client";
import Image from "next/image";
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
  UserCheck,
} from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay },
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
    <main className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#1b1f3a] to-[#2e0066] text-gray-100 mt-16">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-[#1a237e] via-[#4a148c] to-[#0d47a1]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fade()}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Blockchain Development Services
            </h1>
            <p className="mt-4 text-gray-200">
              Empower your business with secure & scalable blockchain
              development solutions for the future of Web3.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-6 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] shadow-lg"
            >
              Book a Free Consultation
            </motion.button>
          </motion.div>
          <motion.div {...fade(0.2)}>
            <Image
              src={"/assets/images/blockchain.jpeg"}
              alt="Web3 Development"
              width={500}
              height={400}
              className="rounded-xl object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* OUR BLOCKCHAIN DEVELOPMENT SERVICES */}
      <section className="py-16 bg-[#111827]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center text-white">
            Our Core Blockchain Development Services
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: "Blockchain Consulting", icon: Cpu, text: "Strategic blockchain consulting for business transformation." },
              { title: "Smart Contracts", icon: Server, text: "Build and audit self-executing smart contracts." },
              { title: "dApp Development", icon: Globe, text: "Custom decentralized applications on leading blockchains." },
              { title: "DeFi Solutions", icon: Coins, text: "Decentralized Finance platforms with advanced features." },
              { title: "NFT Marketplace", icon: Layers, text: "Launch secure & scalable NFT platforms." },
              { title: "Blockchain Security", icon: ShieldCheck, text: "Advanced security audits and compliance testing." },
            ].map((s, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.15)}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#1e1e2f] to-[#2a2a40] shadow-lg rounded-2xl p-6 text-center hover:shadow-blue-500/30 transition"
              >
                <s.icon className="h-10 w-10 text-[#00c6ff] mx-auto" />
                <h4 className="mt-3 font-semibold text-white">{s.title}</h4>
                <p className="text-sm text-gray-300">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center text-white">
            Industries We Serve
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { name: "Finance & Banking", src: "/assets/images/FinanceBanking.jpeg" },
              { name: "Healthcare", src: "/assets/images/Healthcare.jpeg" },
              { name: "Supply Chain", src: "/assets/images/Supplychain.jpeg" },
              { name: "Real Estate", src: "/assets/images/Realestate.jpeg" },
              { name: "Entertainment", src: "/assets/images/Entertainment.jpeg" },
              { name: "Public Sector", src: "/assets/images/publicsector.jpeg" },
            ].map((ind, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.15)}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-purple-500/40 transition"
              >
                <div className="h-40 bg-gray-800 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                  <Image src={ind.src} alt={ind.name} width={300} height={200} className="rounded-lg object-cover h-full w-full" />
                </div>
                <h4 className="font-semibold text-white">{ind.name}</h4>
                <p className="text-sm text-gray-300">{ind.name} blockchain transformation case study.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-[#111827]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center text-white">
            Why Choose SDLC Corp For Blockchain Development?
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: "Scalable Blockchain Apps", text: "We deliver solutions that scale with your business." },
              { title: "Full-Stack Expertise", text: "End-to-end blockchain development capabilities." },
              { title: "Trusted Globally", text: "Worked with 500+ clients worldwide." },
            ].map((c, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.15)}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#1f1f2e] to-[#2a2a40] rounded-xl shadow-md p-6 hover:shadow-indigo-500/30"
              >
                <BarChart3 className="h-7 w-7 text-[#00c6ff]" />
                <h4 className="mt-3 font-semibold text-white">{c.title}</h4>
                <p className="text-sm text-gray-300">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="py-16 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
          <motion.div {...fade(0)} className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <Counter end={500} className="text-4xl font-bold text-[#00c6ff]" />
            <p className="mt-2 text-white">Blockchain Projects Delivered</p>
          </motion.div>
          <motion.div {...fade(0.1)} className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <Counter end={100} className="text-4xl font-bold text-[#00c6ff]" />
            <p className="mt-2 text-white">Global Clients</p>
          </motion.div>
          <motion.div {...fade(0.2)} className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <Counter end={50} className="text-4xl font-bold text-[#00c6ff]" />
            <p className="mt-2 text-white">Blockchain Experts</p>
          </motion.div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="py-16 bg-[#111827]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center text-white">
            Blockchain Platforms We Specialize In
          </motion.h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {["Ethereum", "Hyperledger", "Polygon", "Binance Smart Chain", "Solana", "Tezos", "Avalanche", "Cardano"].map((tech, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.15)}
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl shadow-md p-6 text-white font-semibold hover:shadow-blue-500/40"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-gradient-to-r from-[#1a237e] via-[#4a148c] to-[#0d47a1]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center text-white">
            Client Testimonials
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { name: "John Carter", role: "CTO, FinTech", text: "The team delivered our blockchain exchange flawlessly." },
              { name: "Sophie Lee", role: "CEO, Real Estate Startup", text: "Smart contract integration was seamless and secure." },
              { name: "Raj Patel", role: "COO, Supply Chain", text: "Their blockchain solution improved our efficiency by 40%." },
            ].map((t, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.15)}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 text-white hover:shadow-purple-500/40"
              >
                <UserCheck className="h-7 w-7 text-[#00c6ff]" />
                <p className="italic">“{t.text}”</p>
                <p className="mt-4 font-semibold">{t.name}</p>
                <p className="text-xs text-gray-300">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 bg-[#111827]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-2xl font-bold text-center text-white">
            Let’s Talk About Your Blockchain Project
          </motion.h3>
          <form className="mt-6 grid gap-4 md:grid-cols-2 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <input className="border border-gray-600 bg-gray-900 text-gray-200 px-3 py-2 rounded-lg" placeholder="Full Name *" />
            <input className="border border-gray-600 bg-gray-900 text-gray-200 px-3 py-2 rounded-lg" placeholder="Email *" type="email" />
            <input className="border border-gray-600 bg-gray-900 text-gray-200 px-3 py-2 rounded-lg" placeholder="Company" />
            <input className="border border-gray-600 bg-gray-900 text-gray-200 px-3 py-2 rounded-lg" placeholder="Phone" />
            <textarea className="md:col-span-2 border border-gray-600 bg-gray-900 text-gray-200 px-3 py-2 h-28 rounded-lg" placeholder="Your requirements *" />
            <button className="md:col-span-2 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
