"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Shield,
  Layers,
  Sparkles,
  Boxes,
  Users,
  CheckCircle2,
} from "lucide-react";

/* ---------------------- CONTENT FROM YOUR SCREENSHOT ---------------------- */
const content = {
  hero: {
    title: "DeFi Development Company",
    subtitle:
      " DeFi development company that builds secure, scalable, and robust decentralized finance solutions like DEXs, lending platforms, staking, yield farming, wallets, and more.",
    bullets: ["100+ Projects Delivered", "500+ Clients", "10+ Years Experience"],
    cta: "Get Free Consultation",
    formTitle: "Share Your Project",
  },

  intro: {
    heading: "Our DeFi Development Company Expertise",
    body: "With years of experience in blockchain, SDLC Corp specializes in DeFi app development including decentralized exchanges, wallets, lending protocols, staking systems, and yield farming solutions.",
  },

  services: {
    heading: "Our DeFi Development Services",
    items: [
      "Decentralized Exchange (DEX) Development",
      "DeFi Staking Platform Development",
      "DeFi Yield Farming Development",
      "DeFi Wallet Development",
      "DeFi Smart Contract Development",
      "Liquidity Pool Development",
      "DeFi Lending Platforms",
      "DeFi Insurance Solutions",
    ],
  },

  comparison: {
    heading: "DeFi vs CeFi: Key Differences",
    table: [
      ["Custody", "Users control assets (DeFi)", "Exchange controls assets (CeFi)"],
      ["Transactions", "On-chain, transparent", "Off-chain, centralized"],
      ["Access", "Open to anyone", "Restricted & KYC-based"],
      ["Security", "Smart contract based", "Controlled by third party"],
    ],
  },

  portfolio: {
    heading: "DeFi Development Portfolio",
    items: [
      {
        title: "Sushiswap Clone",
        desc: "A decentralized exchange enabling liquidity pools, yield farming, and token swaps with advanced UI/UX.",
      },
      {
        title: "DeFi Staking Platform",
        desc: "A staking solution for crypto projects to allow users to stake tokens and earn rewards securely.",
      },
    ],
  },

  benefits: {
    heading: "Real-Life Benefits of DeFi Software Development",
    items: [
      "Financial Freedom – Users have full control of assets",
      "Transparency – Transactions visible on blockchain",
      "Cross-Border Payments – Global access without intermediaries",
      "No Middlemen – Peer-to-peer transactions",
      "Improved Liquidity – Liquidity pools increase market stability",
      "High Security – Smart contract–based automation",
    ],
  },

  process: {
    heading: "Our DeFi Development Process",
    steps: [
      { title: "Requirement Gathering", text: "We analyze your project scope, features, and goals." },
      { title: "Planning & Architecture", text: "Our architects design secure smart contracts and app flow." },
      { title: "Development", text: "Blockchain coding, smart contracts, frontend & backend setup." },
      { title: "Testing", text: "Smart contract audits, QA testing, and bug fixing." },
      { title: "Deployment", text: "Mainnet launch and post-launch support." },
    ],
  },

  stack: {
    heading: "Our Advanced Technology Expertise",
    items: ["Ethereum", "Polygon", "Solana", "Binance Smart Chain", "Avalanche", "Tron"],
  },

  whyChoose: {
    heading: "Why Choose SDLC Corp For Your DeFi Development?",
    points: [
      { title: "Security First", text: "We deliver fully audited smart contracts for maximum security." },
      { title: "On-Time Delivery", text: "Agile development ensures fast project delivery." },
      { title: "Scalable Solutions", text: "DeFi apps designed to grow with your business." },
    ],
  },

  testimonials: {
    heading: "Testimonials",
    items: [
      { name: "Prakash Desai", role: "Product Owner", quote: "They delivered a robust DEX for us that exceeded expectations." },
      { name: "Sahil Verma", role: "CTO", quote: "Our staking platform was launched on time and works flawlessly." },
      { name: "Hameed Al Lawati", role: "Business Head", quote: "The wallet integration was smooth and very secure." },
    ],
  },

  faq: {
    heading: "Frequently Asked Questions",
    items: [
      { q: "What is DeFi Development?", a: "DeFi development is building decentralized finance platforms like DEX, yield farming, staking, wallets, etc. using blockchain technology." },
      { q: "How secure are DeFi platforms?", a: "Our DeFi apps undergo rigorous smart contract audits to ensure security." },
      { q: "Do you provide DeFi consulting?", a: "Yes, we provide full consultation from idea to deployment." },
    ],
  },

  awards: ["Clutch", "GoodFirms", "Top Blockchain Dev", "ISO Certified"],
};

/* ---------------------- Animation Helper ---------------------- */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
});

/* ---------------------- PAGE ---------------------- */
export default function DefiDevelopmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800 mt-16">
      
      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          <motion.div {...fade()}>
            <h1 className="text-4xl md:text-5xl font-extrabold">{content.hero.title}</h1>
            <p className="mt-4 text-gray-700">{content.hero.subtitle}</p>
            <div className="mt-6 flex gap-6 flex-wrap">
              {content.hero.bullets.map((b, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-4 text-center">
                  <p className="font-semibold text-indigo-600">{b}</p>
                </div>
              ))}
            </div>
            <button className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold">
              {content.hero.cta}
            </button>
          </motion.div>

          {/* Hero Form */}
          <motion.div {...fade(0.1)} className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="font-semibold">{content.hero.formTitle}</h3>
            <input placeholder="Full Name *" className="border w-full px-3 py-2 rounded mt-3"/>
            <input placeholder="Email *" className="border w-full px-3 py-2 rounded mt-3"/>
            <textarea placeholder="Requirements" className="border w-full px-3 py-2 h-24 rounded mt-3"/>
            <button className="mt-3 w-full px-4 py-2 rounded-lg bg-indigo-600 text-white">Submit</button>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center">{content.services.heading}</motion.h2>
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {content.services.items.map((s, i) => (
              <motion.div key={s} {...fade(i*0.05)} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow p-6">
                <Layers className="w-6 h-6 text-indigo-600 mb-2"/>
                <h4 className="font-semibold">{s}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-2xl font-bold text-center">{content.comparison.heading}</motion.h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full border border-gray-200 text-left">
              <thead className="bg-indigo-100">
                <tr>
                  <th className="p-3">Aspect</th>
                  <th className="p-3">DeFi</th>
                  <th className="p-3">CeFi</th>
                </tr>
              </thead>
              <tbody>
                {content.comparison.table.map((row,i)=>(
                  <tr key={i} className="border-t">
                    <td className="p-3">{row[0]}</td>
                    <td className="p-3">{row[1]}</td>
                    <td className="p-3">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PORTFOLIO CAROUSEL */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center">{content.portfolio.heading}</motion.h2>
          <Swiper spaceBetween={20} slidesPerView={1} breakpoints={{768:{slidesPerView:2}}} className="mt-10">
            {content.portfolio.items.map((p,i)=>(
              <SwiperSlide key={i}>
                <motion.div {...fade(i*0.05)} className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow p-6 h-full">
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* TESTIMONIALS SLIDER */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center">{content.testimonials.heading}</motion.h2>
          <Swiper spaceBetween={20} slidesPerView={1} breakpoints={{768:{slidesPerView:3}}} className="mt-10">
            {content.testimonials.items.map((t,i)=>(
              <SwiperSlide key={i}>
                <motion.div {...fade(i*0.05)} className="bg-white rounded-2xl shadow p-6 h-full">
                  <Users className="w-6 h-6 text-indigo-600 mb-2"/>
                  <p className="italic">“{t.quote}”</p>
                  <p className="mt-2 font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-2xl font-bold text-center">{content.faq.heading}</motion.h3>
          <div className="mt-6 bg-white rounded-2xl shadow divide-y">
            {content.faq.items.map((f,i)=>(
              <details key={i} className="p-4 group">
                <summary className="cursor-pointer font-medium flex justify-between">
                  {f.q}
                  <CheckCircle2 className="w-4 h-4 text-gray-400 group-open:text-indigo-600"/>
                </summary>
                <p className="mt-2 text-sm text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
