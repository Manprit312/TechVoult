"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wallet,
  Lock,
  Cpu,
  Code2,
  Layers,
  Sparkles,
  CheckCircle2,
  Stars,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

/* --------------------------- Counter on View --------------------------- */
function Counter({ end = 0, duration = 1400, suffix = "+", className = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      const start = performance.now();
      const from = 0;
      const to = end;
      const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const current = Math.floor(from + (to - from) * p);
        setVal(current);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            animate();
          }
        });
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ------------------------------- Content ------------------------------ */
/** Swap each TODO with the exact text you have in the screenshot. */
const HERO = {
  title: "NFT Wallet Development Company",
  subtitle:
    "Secure, scalable, and feature-rich NFT wallet solutions tailored to your business.",
  // TODO: paste exact hero bullet/copy if needed
  bullets: [
    "Advanced security architecture",
    "Multi-chain compatibility",
    "User-centric UX",
  ],
  cta: "Get Free Consultation",
};

const INTRO = {
  heading: "NFT Wallet Development Overview",
  paragraph:
    // TODO: paste exact copy
    "We build reliable NFT wallet applications with seamless minting, storage, and trading experiences across leading chains.",
};

const TYPES = [
  // TODO: paste exact 3–6 types and captions
  { title: "Custodial Wallets", desc: "Managed keys for easy onboarding." },
  { title: "Non-custodial Wallets", desc: "User-owned keys and full control." },
  { title: "Multi-Chain Wallets", desc: "Support for multiple blockchains." },
];

const SERVICES = [
  // TODO: paste exact list items
  { title: "Custom NFT Wallet Development", icon: <Wallet className="w-6 h-6" /> },
  { title: "Multi-chain Integration", icon: <Layers className="w-6 h-6" /> },
  { title: "Security & Compliance", icon: <ShieldCheck className="w-6 h-6" /> },
  { title: "Smart Contract Services", icon: <Code2 className="w-6 h-6" /> },
  { title: "dApp Connectivity", icon: <Cpu className="w-6 h-6" /> },
  { title: "UX/UI Optimization", icon: <Sparkles className="w-6 h-6" /> },
];

const FEATURES = [
  // TODO: paste exact features
  { title: "Biometric/2FA", desc: "Strong authentication across devices." },
  { title: "Multi-Chain Support", desc: "Ethereum, Polygon, BSC, and more." },
  { title: "Portfolio & Activity", desc: "View collectibles and history." },
  { title: "In-app Swaps", desc: "Seamless NFT actions in wallet." },
];

const BENEFITS = [
  // TODO: paste exact benefits
  { title: "Faster Time to Market", desc: "Accelerators and best practices." },
  { title: "Enterprise-grade Security", desc: "Audited flows and infra." },
  { title: "Scalable Architecture", desc: "Built to grow with demand." },
  { title: "Great UX", desc: "Friction-less onboarding and flows." },
];

const TECH_STACK = [
  // TODO: paste exact stack list you use on the page
  "Solidity",
  "Web3.js",
  "ethers.js",
  "Node.js",
  "React/Next.js",
  "IPFS/Pinata",
];

const WORKFLOW = [
  // TODO: paste exact steps and wording
  { step: "1", title: "Discovery", desc: "Requirements & success criteria." },
  { step: "2", title: "Design", desc: "UX flows & interface prototyping." },
  { step: "3", title: "Development", desc: "Wallet, contracts, integrations." },
  { step: "4", title: "QA & Security", desc: "Manual + automated testing." },
  { step: "5", title: "Launch", desc: "Production release & handover." },
  { step: "6", title: "Support", desc: "Monitoring & enhancements." },
];

const STATS = [
  // adjust values to your screenshot numbers
  { value: 500, label: "Projects", suffix: "+" },
  { value: 100, label: "Clients", suffix: "+" },
];

const TESTIMONIALS = [
  // TODO: paste exact quotes & names
  {
    name: "Alex Carter",
    role: "Product Owner",
    quote:
      "The team delivered a secure, smooth wallet with great UX. Launch was effortless.",
  },
  {
    name: "Maria Gomez",
    role: "CTO",
    quote:
      "Their expertise in security and chain integrations saved us months.",
  },
  {
    name: "Ibrahim Al Qasim",
    role: "Founder",
    quote: "Reliable partner. Quick turnarounds and thoughtful solutions.",
  },
];

/* ----------------------------- Anim helpers ---------------------------- */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, delay },
});

/* --------------------------------- Page -------------------------------- */
export default function NFTWalletPage() {
  const onSubmit = (e) => {
    e.preventDefault();
    // simple demo only
    alert("Thanks! We'll get back to you.");
  };

  return (
    <main className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800">
      {/* HERO */}
      <section className="relative pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp(0)}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {HERO.title}
            </h1>
            <p className="mt-4 text-gray-700">{HERO.subtitle}</p>
            <ul className="mt-5 space-y-2 text-sm text-gray-700">
              {HERO.bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  {b}
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white shadow p-5 text-center"
                >
                  <Counter
                    end={s.value}
                    suffix={s.suffix}
                    className="text-3xl font-extrabold text-gray-900"
                  />
                  <div className="text-xs mt-1 text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:opacity-95"
            >
              {HERO.cta}
            </a>
          </motion.div>

          {/* Hero visual placeholder */}
          <motion.div
            {...fadeUp(0.1)}
            className="h-56 md:h-72 rounded-2xl bg-white/70 border border-gray-100 shadow-inner flex items-center justify-center"
          >
            {/* Replace this box with your hero image */}
            <span className="text-gray-400">[ Hero Image / Illustration ]</span>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp(0)}>
            <div className="h-48 rounded-2xl bg-white border border-gray-100 shadow-inner flex items-center justify-center">
              <span className="text-gray-400">[ Overview Image ]</span>
            </div>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <h2 className="text-2xl font-bold">{INTRO.heading}</h2>
            <p className="mt-3 text-gray-700">{INTRO.paragraph}</p>
          </motion.div>
        </div>
      </section>

      {/* TYPES */}
      <section className="py-10 bg-white/70">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3
            {...fadeUp(0)}
            className="text-2xl md:text-3xl font-bold text-center"
          >
            Types of NFT Wallets
          </motion.h3>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {TYPES.map((t, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.05)}
                className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border border-gray-100 shadow"
              >
                <Stars className="w-6 h-6 text-indigo-600" />
                <h4 className="mt-3 font-semibold">{t.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band (like screenshot “Hire NFT Wallet Developers…”) */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            {...fadeUp(0)}
            className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="text-lg font-semibold">
              Hire NFT Wallet Developers for Custom Solutions
            </div>
            <a
              href="#contact"
              className="px-5 py-2 rounded-xl bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20"
            >
              Talk to an Expert
            </a>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3
            {...fadeUp(0)}
            className="text-2xl md:text-3xl font-bold text-center"
          >
            Our NFT Wallet Development Services
          </motion.h3>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.05)}
                className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border border-gray-100 shadow"
              >
                <div className="rounded-xl bg-white p-3 text-indigo-600 shadow-sm inline-flex">
                  {s.icon}
                </div>
                <h4 className="mt-3 font-semibold">{s.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3
            {...fadeUp(0)}
            className="text-2xl md:text-3xl font-bold text-center"
          >
            Features of NFT Wallet Development
          </motion.h3>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.05)}
                className="rounded-2xl p-6 bg-white border border-gray-100 shadow"
              >
                <Lock className="w-6 h-6 text-indigo-600" />
                <h4 className="mt-3 font-semibold">{f.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-12 bg-white/70">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3
            {...fadeUp(0)}
            className="text-2xl md:text-3xl font-bold text-center"
          >
            Benefits of NFT Wallet Development with Us
          </motion.h3>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.05)}
                className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border border-gray-100 shadow"
              >
                <ShieldCheck className="w-6 h-6 text-indigo-600" />
                <h4 className="mt-3 font-semibold">{b.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3
            {...fadeUp(0)}
            className="text-2xl md:text-3xl font-bold text-center"
          >
            Technologies Used
          </motion.h3>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {TECH_STACK.map((t, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.05)}
                className="rounded-xl bg-white border border-gray-100 shadow p-3 text-center text-sm font-medium"
              >
                {t}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3
            {...fadeUp(0)}
            className="text-2xl md:text-3xl font-bold text-center"
          >
            Our Engagement Workflow
          </motion.h3>
          <div className="mt-8 grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {WORKFLOW.map((w, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.04)}
                className="rounded-2xl bg-white border border-gray-100 shadow p-4 text-center"
              >
                <div className="text-indigo-600 font-bold">{w.step}</div>
                <div className="font-semibold mt-1">{w.title}</div>
                <div className="text-xs text-gray-600 mt-1">{w.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Slider block (add your slides like screenshot) */}
      <section className="py-12 bg-white/70">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3
            {...fadeUp(0)}
            className="text-2xl md:text-3xl font-bold text-center mb-8"
          >
            Selected Work & Case Studies
          </motion.h3>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2800, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <SwiperSlide key={n}>
                <div className="rounded-2xl bg-white border border-gray-100 shadow p-5 h-full flex flex-col">
                  <div className="h-36 rounded-lg bg-gray-100 border flex items-center justify-center">
                    <span className="text-gray-400">[ Project {n} Image ]</span>
                  </div>
                  <h4 className="mt-4 font-semibold">Project {n}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {/* TODO: paste exact short case description */}
                    A brief outcome-focused description goes here.
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3
            {...fadeUp(0)}
            className="text-2xl md:text-3xl font-bold text-center"
          >
            Testimonials
          </motion.h3>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.05)}
                className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border border-gray-100 shadow"
              >
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-gray-500">{t.role}</div>
                <p className="text-sm text-gray-700 mt-3 italic">“{t.quote}”</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Form */}
      <section id="contact" className="py-14 bg-white/70">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h3
            {...fadeUp(0)}
            className="text-2xl md:text-3xl font-bold text-center"
          >
            Let’s Talk About Your Project
          </motion.h3>
          <motion.form
            {...fadeUp(0.05)}
            onSubmit={onSubmit}
            className="mt-6 grid gap-4 md:grid-cols-2 bg-white border border-gray-100 rounded-2xl shadow p-6"
          >
            <input
              placeholder="Full Name *"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
              required
            />
            <input
              type="email"
              placeholder="Email *"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
              required
            />
            <input
              placeholder="Company"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
            <input
              placeholder="Phone"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
            <textarea
              placeholder="Your requirements *"
              className="md:col-span-2 p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              required
            />
            <button className="md:col-span-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:opacity-95">
              Submit
            </button>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
