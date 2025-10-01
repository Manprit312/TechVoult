"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  WalletMinimal,
  Smartphone,
  PanelsTopLeft,
  CheckCircle2,
  Lock,
  Globe2,
  Star,
  Sparkles,
  Layers,
  Code2,
  BadgeCheck,
  Users2,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/* ----------------------------- helpers ----------------------------- */

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

function useCounterWhenVisible(end, duration = 1200) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const animate = () => {
      const t0 = performance.now();
      const step = (now) => {
        const p = Math.min((now - t0) / duration, 1);
        setValue(Math.floor(end * p));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            animate();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return { ref, value };
}

/* ----------------------------- page data ----------------------------- */
/** Replace every TODO with exact text from your screenshot. */

const HERO = {
  title: "Cryptocurrency Wallet Development Company",
  bullets: [
    /* TODO: paste from screenshot */
    "10+ Years of Expertise",
    "100+ Wallet Projects Delivered",
    "Global Clients & Enterprise-Grade Security",
  ],
  formTitle: "Share Your Project",
  formCta: "Get Free Quote",
};

const INTRO = {
  heading: "Overview Of Our Cryptocurrency Wallet Development Company",
  body:
    /* TODO: paste from screenshot */ `We build secure, scalable, and user-friendly crypto wallets for web and mobile—custodial and non-custodial—tailored to your business objectives.`,
};

const STATS = [
  { label: "Years Experience", value: 10 },
  { label: "Projects Delivered", value: 100 },
];

const SERVICES = [
  { icon: WalletMinimal, title: "Web Wallet Development", desc: "/* TODO: paste */" },
  { icon: Smartphone, title: "Mobile Wallet Development", desc: "/* TODO: paste */" },
  { icon: ShieldCheck, title: "DeFi Wallet Development", desc: "/* TODO: paste */" },
  { icon: Layers, title: "Multi-Currency Wallets", desc: "/* TODO: paste */" },
  { icon: PanelsTopLeft, title: "NFT Wallet Development", desc: "/* TODO: paste */" },
  { icon: Lock, title: "Custodial/Non-Custodial", desc: "/* TODO: paste */" },
];

const INDUSTRIES = [
  "Supply Chain",
  "Banking",
  "Healthcare",
  "Logistics",
  "Retail",
  "E-commerce",
  "Insurance",
];

const FEATURES = [
  { icon: Lock, title: "Advanced Security", desc: "/* TODO: paste */" },
  { icon: Layers, title: "Multi-Currency Support", desc: "/* TODO: paste */" },
  { icon: Code2, title: "Seamless Integration", desc: "/* TODO: paste */" },
  { icon: PanelsTopLeft, title: "Modern UI/UX", desc: "/* TODO: paste */" },
];

const BENEFITS = [
  { title: "User Control", desc: "/* TODO: paste */" },
  { title: "High Security", desc: "/* TODO: paste */" },
  { title: "Cross-Platform", desc: "/* TODO: paste */" },
  { title: "Speed & Transparency", desc: "/* TODO: paste */" },
];

const OTHER_SERVICES = [
  "Hardware Wallet Integration",
  "Staking & Rewards",
  "On/Off-ramp Integration",
  "KYC/AML Integration",
  "Backup & Recovery",
];

const PORTFOLIO = [
  { title: "Case: Crypto Wallet Suite", desc: "/* TODO: paste */" },
  { title: "Case: DeFi Wallet Mobile", desc: "/* TODO: paste */" },
  { title: "Case: NFT Wallet Web", desc: "/* TODO: paste */" },
];

const BLOGS = [
  { title: "How to Choose the Right Crypto Wallet", desc: "/* TODO */" },
  { title: "Custodial vs Non-Custodial", desc: "/* TODO */" },
  { title: "Security Best Practices", desc: "/* TODO */" },
];

const WHY_US = [
  {
    icon: BadgeCheck,
    title: "Proven Expertise",
    desc: "/* TODO: paste */",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade Security",
    desc: "/* TODO: paste */",
  },
  {
    icon: Sparkles,
    title: "Commitment to Quality",
    desc: "/* TODO: paste */",
  },
];

const PROCESS = [
  { step: "Discovery", desc: "/* TODO */" },
  { step: "Architecture & Design", desc: "/* TODO */" },
  { step: "Development", desc: "/* TODO */" },
  { step: "Testing & Security", desc: "/* TODO */" },
  { step: "Deployment", desc: "/* TODO */" },
  { step: "Support", desc: "/* TODO */" },
];

const TESTIMONIALS = [
  { name: "Prakash Verma", role: "Product Owner", quote: "/* TODO */", rating: 5 },
  { name: "Sahil Trivedi", role: "CTO", quote: "/* TODO */", rating: 5 },
  { name: "Hameed A. Laseef", role: "Founder", quote: "/* TODO */", rating: 5 },
];

const FAQS = [
  { q: "Why choose your team for wallet development?", a: "/* TODO */" },
  { q: "Do you build custodial & non-custodial wallets?", a: "/* TODO */" },
  { q: "How do you ensure security?", a: "/* TODO */" },
  { q: "What tech stacks do you support?", a: "/* TODO */" },
  { q: "Do you provide post-launch support?", a: "/* TODO */" },
];

/* ----------------------------- section shells ----------------------------- */

function Section({ children, className = "" }) {
  return (
    <section
      className={`py-16 ${className}`}
      style={{
        background:
          "linear-gradient(180deg, rgba(238,242,255,0.35), rgba(250,245,255,0.35), rgba(255,241,242,0.3))",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">{children}</div>
    </section>
  );
}

function Heading({ title, subtitle }) {
  return (
    <motion.div {...fadeUp} className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-3 max-w-3xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}

function ImageSlot({ label = "Image / Illustration" }) {
  return (
    <div className="image-placeholder w-full h-48 md:h-56 rounded-xl border border-dashed border-gray-300 bg-white/70 flex items-center justify-center text-sm text-gray-500">
      {label}
    </div>
  );
}

/* ----------------------------- page ----------------------------- */

export default function CryptoWalletPage() {
  /* contact form state */
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const counters = STATS.map((s) => useCounterWhenVisible(s.value));

  const submit = (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    setTimeout(() => {
      setStatus("Submitted ✅");
      setForm({ name: "", email: "", message: "" });
    }, 900);
  };

  return (
    <main className="bg-gradient-to-b from-indigo-50/40 via-purple-50/40 to-pink-50/40 text-gray-800">
      {/* HERO */}
      <section className="pt-28 pb-16 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 items-center">
          <div>
            <motion.h1
              {...fadeUp}
              className="text-4xl md:text-5xl font-extrabold text-gray-900"
            >
              {HERO.title}
            </motion.h1>

            <motion.ul {...fadeUp} className="mt-6 space-y-2">
              {HERO.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">{b}</span>
                </li>
              ))}
            </motion.ul>

            <div className="mt-6">
              <ImageSlot label="[ Hero Banner Image ]" />
            </div>
          </div>

          {/* lead form */}
          <motion.form
            {...fadeUp}
            onSubmit={submit}
            className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-6 space-y-4"
          >
            <h3 className="text-xl font-bold">{HERO.formTitle}</h3>
            <input
              placeholder="Full Name *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              placeholder="Email *"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 border rounded-lg"
              required
            />
            <textarea
              placeholder="Your message *"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-3 border rounded-lg"
              required
            />
            <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:opacity-95">
              {HERO.formCta}
            </button>
            {status && <p className="text-sm text-green-700">{status}</p>}
          </motion.form>
        </div>
      </section>

      {/* INTRO */}
      <Section>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp}>
            <h3 className="text-2xl font-bold">{INTRO.heading}</h3>
            <p className="text-gray-700 mt-4">{INTRO.body}</p>
          </motion.div>
          <ImageSlot label="[ Intro Illustration ]" />
        </div>
      </Section>

      {/* STATS */}
      <Section className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => {
            const c = counters[i];
            return (
              <motion.div
                key={i}
                {...fadeUp}
                ref={c.ref}
                className="rounded-2xl bg-white shadow-sm p-6 text-center"
              >
                <div className="text-4xl font-extrabold">{c.value}+</div>
                <div className="text-sm text-gray-600 mt-1">{s.label}</div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* SERVICES */}
      <Section>
        <Heading title="Our Cryptocurrency Wallet Development Services" />
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              className="rounded-2xl bg-white shadow p-6"
            >
              <div className="rounded-xl bg-indigo-50 w-12 h-12 grid place-items-center">
                <s.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h4 className="mt-4 font-semibold">{s.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section>
        <Heading title="Industries Leveraging Our Wallet Solutions" />
        <motion.div
          {...fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          {INDUSTRIES.map((x, i) => (
            <div key={i} className="rounded-xl bg-white p-4 shadow">
              <Users2 className="w-6 h-6 mx-auto mb-2 text-indigo-600" />
              <p className="text-sm">{x}</p>
            </div>
          ))}
        </motion.div>
      </Section>

      {/* FEATURES */}
      <Section>
        <Heading title="Features Of Our Wallet Development Service" />
        <div className="grid md:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div key={i} {...fadeUp} className="bg-white p-6 rounded-xl shadow">
              <f.icon className="w-7 h-7 text-indigo-600" />
              <h4 className="mt-3 font-semibold">{f.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <ImageSlot label="[ Feature Screens / UI Shots ]" />
        </div>
      </Section>

      {/* BENEFITS */}
      <Section>
        <Heading title="Benefits Of Cryptocurrency Wallet Development" />
        <div className="grid md:grid-cols-4 gap-6">
          {BENEFITS.map((b, i) => (
            <motion.div key={i} {...fadeUp} className="bg-white p-6 rounded-xl shadow">
              <Star className="w-6 h-6 text-indigo-600" />
              <h4 className="mt-3 font-semibold">{b.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* OTHER SERVICES */}
      <Section>
        <Heading title="Our Other Cryptocurrency Wallet Services" />
        <motion.ul {...fadeUp} className="grid md:grid-cols-3 gap-3">
          {OTHER_SERVICES.map((o, i) => (
            <li key={i} className="bg-white rounded-xl p-4 shadow flex items-center gap-3">
              <Globe2 className="w-5 h-5 text-indigo-600" /> {o}
            </li>
          ))}
        </motion.ul>
      </Section>

      {/* PORTFOLIO SLIDER */}
      <Section>
        <Heading title="Cryptocurrency Wallet Development Portfolio" />
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        >
          {PORTFOLIO.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-6 rounded-2xl shadow h-full flex flex-col">
                <ImageSlot label="[ Portfolio Image ]" />
                <h4 className="mt-4 font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>

      {/* WHY CHOOSE US */}
      <Section>
        <Heading title="Why Choose Us For Your Cryptocurrency Wallet Development?" />
        <div className="grid md:grid-cols-3 gap-6">
          {WHY_US.map((w, i) => (
            <motion.div key={i} {...fadeUp} className="bg-white p-6 rounded-xl shadow">
              <w.icon className="w-7 h-7 text-indigo-600" />
              <h4 className="mt-3 font-semibold">{w.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* BLOGS SLIDER */}
      <Section>
        <Heading title="Blogs On Cryptocurrency Wallet Development" />
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        >
          {BLOGS.map((b, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-6 rounded-2xl shadow h-full flex flex-col">
                <ImageSlot label="[ Blog Image ]" />
                <h4 className="mt-4 font-semibold">{b.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{b.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>

      {/* PROCESS */}
      <Section>
        <Heading title="Our Cryptocurrency Wallet Development Process" />
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {PROCESS.map((p, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              className="bg-white p-4 rounded-xl shadow text-center"
            >
              <div className="text-xs uppercase tracking-wide text-indigo-600">
                Step {i + 1}
              </div>
              <div className="font-semibold mt-1">{p.step}</div>
              <p className="text-xs text-gray-600 mt-2">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <Heading title="Testimonials" />
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3200, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        >
          {TESTIMONIALS.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-6 rounded-2xl shadow h-full flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 grid place-items-center">
                    <Users2 className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mt-3">“{t.quote}”</p>
                <div className="mt-3 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>

      {/* CONTACT */}
      <Section>
        <Heading title="Contact Us" />
        <form
          onSubmit={submit}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-6 grid gap-4"
        >
          <input
            placeholder="Full Name *"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-3 border rounded-lg"
            required
          />
          <input
            placeholder="Email *"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="p-3 border rounded-lg"
            required
          />
          <textarea
            placeholder="Your requirements *"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="p-3 border rounded-lg h-28"
            required
          />
          <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:opacity-95">
            Submit
          </button>
          {status && <p className="text-sm text-green-700">{status}</p>}
        </form>
      </Section>

      {/* FAQ */}
      <Section>
        <Heading title="Frequently Asked Questions" />
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow divide-y">
          {FAQS.map((f, i) => (
            <details key={i} className="p-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* AWARDS */}
      <Section>
        <Heading title="Awards & Recognition" />
        <motion.div
          {...fadeUp}
          className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-14 rounded-lg bg-white shadow grid place-items-center text-gray-400 text-sm"
            >
              [ Logo ]
            </div>
          ))}
        </motion.div>
      </Section>

      {/* FOOTER (simple stub; replace with your project footer) */}
      <footer className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
