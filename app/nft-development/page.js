"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Shield,
  Layers,
  Sparkles,
  Boxes,
  Image,
  CheckCircle2,
  Star,
  Users,
} from "lucide-react";

/* ---------------------- CONTENT (copied from screenshot) ---------------------- */
const content = {
  hero: {
    title: "NFT Development Services",
    subtitle:
      "Build, launch, and scale secure NFT marketplaces, platforms, and collections with enterprise-grade reliability.",
    bullets: ["100+ Projects Delivered", "500+ NFT Collections", "10+ Years Experience"],
    cta: "Get Free Consultation",
    formTitle: "Share Your Project",
  },

  intro: {
    heading: "NFT Development Company",
    body: "We specialize in building NFT marketplaces, smart contracts, minting platforms, and customized solutions for gaming, art, real estate, and more.",
  },

  services: {
    heading: "Our NFT Development Services",
    items: [
      "NFT Marketplace Development",
      "NFT Smart Contracts",
      "NFT Minting Platform",
      "NFT for Gaming",
      "NFT for Real Estate",
      "NFT for Art & Music",
      "NFT Wallet Integration",
      "NFT Metaverse",
    ],
  },

  custom: {
    heading: "Custom NFT Development Solutions",
    body: "From ideation to deployment, we design end-to-end custom NFT platforms tailored for your business models with integration support.",
  },

  stack: {
    heading: "Our Technology Stack for NFT Development",
    items: [
      "Ethereum", "Polygon", "Solana", "Binance Smart Chain",
      "Flow", "Tron", "IPFS", "Pinata", "MetaMask", "WalletConnect",
    ],
  },

  whyChoose: {
    heading: "Why Parwanix Corp is the Best Choice For Your NFT Development Needs",
    points: [
      { title: "Expert Blockchain Engineers", text: "Skilled developers with deep NFT domain expertise." },
      { title: "End-to-End Development", text: "From smart contracts to UI/UX to deployment." },
      { title: "Secure & Scalable", text: "Audit-ready code with compliance and scalability in mind." },
    ],
  },

  process: {
    heading: "Our Comprehensive NFT Development Process",
    steps: [
      { title: "Requirement Analysis", text: "Gathering your NFT project needs." },
      { title: "Architecture Design", text: "Planning the smart contract and platform flow." },
      { title: "Development", text: "Smart contracts, backend, and front-end coding." },
      { title: "Testing & QA", text: "Rigorous audits, stress testing, bug fixing." },
      { title: "Deployment", text: "Mainnet launch, documentation, and handover." },
    ],
  },

  standards: {
    heading: "NFT Standards We Work With",
    items: [
      { title: "ERC-721", text: "The most popular standard for NFTs on Ethereum." },
      { title: "ERC-1155", text: "Supports multiple tokens in a single contract." },
      { title: "BEP-721", text: "NFT standard on Binance Smart Chain." },
      { title: "SPL Tokens", text: "NFTs on Solana blockchain." },
    ],
  },

  testimonials: {
    heading: "Testimonials",
    items: [
      { name: "Prakash Desai", role: "Product Owner", quote: "NFT platform was flawless, from concept to deployment." },
      { name: "Sahil Verma", role: "CTO", quote: "Impressive smart contract expertise and delivery." },
      { name: "Hameed Al Lawati", role: "Business Head", quote: "They provided a secure, scalable NFT solution for us." },
    ],
  },

  faq: {
    heading: "Frequently Asked Questions",
    items: [
      { q: "What is NFT Development?", a: "NFT development involves creating marketplaces, smart contracts, and minting platforms for unique digital assets." },
      { q: "Do you build NFT marketplaces?", a: "Yes, we build custom NFT marketplaces across blockchains." },
      { q: "Do you support cross-chain NFTs?", a: "Yes, cross-chain compatible NFTs are supported." },
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

/* ---------------------- Page ---------------------- */
export default function NFTDevelopmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800 mt-16">
      
      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          <motion.div {...fade()}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">{content.hero.title}</h1>
            <p className="mt-4 text-gray-700">{content.hero.subtitle}</p>
            <div className="mt-6 flex gap-6">
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
              <motion.div key={s} {...fade(i*0.05)} className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow p-6">
                <Layers className="w-6 h-6 text-indigo-600 mb-2"/>
                <h4 className="font-semibold">{s}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 {...fade()} className="text-3xl font-bold">{content.stack.heading}</motion.h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {content.stack.items.map((t,i)=>(
              <span key={i} className="px-4 py-2 bg-white rounded-xl shadow">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center">{content.whyChoose.heading}</motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {content.whyChoose.points.map((p, i)=>(
              <motion.div key={i} {...fade(i*0.05)} className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow p-6">
                <Shield className="w-6 h-6 text-indigo-600 mb-2"/>
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-sm text-gray-600">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 {...fade()} className="text-3xl font-bold">{content.process.heading}</motion.h2>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-10 grid md:grid-cols-3 gap-6">
          {content.process.steps.map((s,i)=>(
            <motion.div key={i} {...fade(i*0.05)} className="bg-white rounded-2xl shadow p-6">
              <Sparkles className="w-6 h-6 text-indigo-600 mb-2"/>
              <h4 className="font-semibold">{s.title}</h4>
              <p className="text-sm text-gray-600">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SLIDER */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center">{content.testimonials.heading}</motion.h2>
          <Swiper spaceBetween={20} slidesPerView={1} breakpoints={{768:{slidesPerView:3}}} className="mt-10">
            {content.testimonials.items.map((t,i)=>(
              <SwiperSlide key={i}>
                <motion.div {...fade(i*0.05)} className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow p-6 h-full">
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

      {/* AWARDS */}
      <section className="py-12 bg-white/70">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-6">
          {content.awards.map((a,i)=>(
            <span key={i} className="px-3 py-1 bg-white rounded-full shadow-sm">{a}</span>
          ))}
        </div>
      </section>

    </main>
  );
}
