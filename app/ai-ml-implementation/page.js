"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import {
  Brain,
  Cpu,
  Bot,
  LineChart,
  BarChart3,
  ShieldCheck,
  Wrench,
  Workflow,
  Layers,
  Sparkles,
  Database,
  Image as ImageIcon,
  Globe2,
  BadgeCheck,
  Rocket,
} from "lucide-react";

/* -------------------- helpers -------------------- */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay },
});

function Counter({ end = 0, duration = 1200, suffix = "+", className = "" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);

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
        setValue(current);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            animate();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

/* -------------------- page -------------------- */
export default function AIMLImplementationPage() {
  const hero = {
    title: "AI & ML Development Services",
    subtitle:
      "Build, implement and scale AI/ML solutions that drive measurable business impact.",
  };

  const overview = {
    title: "Accelerate business outcomes with AI/ML implementation",
    points: [
      "End-to-end consulting to deployment",
      "Model development, training & optimization",
      "Systems integration & MLOps",
      "Security & governance best practices",
    ],
  };

  const services = [
    { icon: Brain, title: "AI Strategy & Consulting", text: "Assess, discover and prioritize high-value AI/ML use cases." },
    { icon: Cpu, title: "ML Model Development", text: "Data prep, feature engineering, training, evaluation, and tuning." },
    { icon: Bot, title: "Generative AI & Chatbots", text: "RAG, LLM orchestration, prompt engineering, safety & guardrails." },
    { icon: LineChart, title: "Predictive Analytics", text: "Forecasting, churn, propensity, recommendations and more." },
    { icon: ImageIcon, title: "Computer Vision", text: "Detection, classification, OCR, quality inspection, and AR/VR." },
    { icon: Database, title: "MLOps & DataOps", text: "Pipelines, CI/CD for models, monitoring, observability, governance." },
  ];

  const useCases = [
    { title: "Anomaly Detection", text: "Spot risks & fraud early." },
    { title: "Recommendation Systems", text: "Personalize experiences." },
    { title: "Demand Forecasting", text: "Plan inventory & supply chain." },
    { title: "Customer 360", text: "Unify data for insights." },
    { title: "NLP Automation", text: "Summarization, classification, Q&A." },
  ];

  const engagement = [
    { title: "Dedicated Team", text: "Augment with our certified AI/ML engineers and data scientists." },
    { title: "Fixed Scope", text: "Define scope & milestones; we deliver end-to-end." },
    { title: "Time & Material", text: "Iterate quickly with agile, transparent delivery." },
  ];

  const process = [
    { step: "1. Discovery & Use Case Prioritization" },
    { step: "2. Data Audit & Preparation" },
    { step: "3. Model Development & Evaluation" },
    { step: "4. Integration & MLOps" },
    { step: "5. Monitoring & Optimization" },
  ];

  const tech = ["Python", "TensorFlow", "PyTorch", "scikit-learn", "LangChain", "OpenAI", "HuggingFace", "Vertex AI", "SageMaker"];

  const whyUs = [
    { icon: ShieldCheck, title: "Enterprise-grade Security", text: "Role-based access, encryption, PII protection, audit trails." },
    { icon: BadgeCheck, title: "Battle-tested Playbooks", text: "Proven delivery patterns, reference architectures & accelerators." },
    { icon: Rocket, title: "Faster Time-to-Value", text: "From PoC to production with a focus on measurable ROI." },
  ];

  const portfolioSlides = [
    { title: "Retail – Demand Forecasting", text: "Improved forecast accuracy by 28%." },
    { title: "FinTech – Fraud Detection", text: "Reduced false positives 35%." },
    { title: "Healthcare – NLP Triage", text: "Cut response times by 40%." },
  ];

  const industriesSlides = [
    { title: "Retail & eCommerce", text: "Recommendations, pricing, returns." },
    { title: "FinTech", text: "Fraud, KYC, credit scoring." },
    { title: "Healthcare", text: "Triage, imaging, documentation." },
    { title: "Manufacturing", text: "Quality, predictive maintenance." },
    { title: "Logistics", text: "Routing, ETA, load optimization." },
  ];

  const testimonials = [
    { quote: "Their AI/ML delivery was flawless. We went from idea to production in weeks.", name: "VP Engineering", org: "Global Retailer" },
    { quote: "Quality, speed, and documentation were outstanding. Highly recommended.", name: "Head of Data", org: "FinTech Unicorn" },
    { quote: "Best partner we’ve worked with for MLOps and governance. True experts.", name: "CTO", org: "Healthcare ISV" },
  ];

  const faqs = [
    { q: "How do you start an AI/ML engagement?", a: "We run a discovery sprint to align on outcomes, data readiness, and quick-win use cases." },
    { q: "Do you provide MLOps?", a: "Yes. We set up experimentation tracking, CI/CD for models, monitoring, drift alerts, and governance." },
    { q: "What about security & compliance?", a: "We follow enterprise best practices for security, access controls, PII protection, and audit logging." },
    { q: "Can you work with our internal team?", a: "Absolutely. We can augment your team or deliver independently — your choice." },
  ];

  /* -------------------- UI -------------------- */
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-blue-50 text-gray-800 mt-16">
      {/* HERO */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-sky-100 via-indigo-100 to-blue-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
          <motion.div {...fade()}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">{hero.title}</h1>
            <p className="mt-4 text-gray-700">{hero.subtitle}</p>
            <div className="mt-6 h-52 rounded-xl overflow-hidden shadow-lg">
              <Image src="/assets/images/chatbot.jpeg" alt="AI Chatbot" width={400} height={200} className="h-full w-full object-cover rounded-xl" />
            </div>
          </motion.div>

          {/* Proposal form */}
          <motion.form {...fade(0.1)} className="bg-white shadow-xl rounded-2xl p-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-lg font-semibold">Request a Free Proposal</h3>
            <input className="w-full border rounded-lg px-3 py-2" placeholder="Full Name *" />
            <input className="w-full border rounded-lg px-3 py-2" placeholder="Work Email *" type="email" />
            <input className="w-full border rounded-lg px-3 py-2" placeholder="Phone" />
            <textarea className="w-full border rounded-lg px-3 py-2 h-24" placeholder="Your requirements *" />
            <button className="w-full px-5 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:opacity-95">
              Get Started
            </button>
          </motion.form>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 bg-white/70">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fade()}>
            <h2 className="text-3xl font-bold">{overview.title}</h2>
            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
              {overview.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </motion.div>
          <motion.div {...fade(0.1)} className="h-60 rounded-xl overflow-hidden shadow-lg">
            <Image src="/assets/images/aiml.jpg" alt="AI ML Overview" width={400} height={200} className="h-full w-full object-cover rounded-xl" />
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-3xl font-bold text-center">AI & ML Services for Every Stage of the Model Lifecycle</motion.h3>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} {...fade(i * 0.05)} className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-6">
                <s.icon className="h-7 w-7 text-sky-600" />
                <h4 className="mt-3 font-semibold">{s.title}</h4>
                <p className="mt-1 text-sm text-gray-600">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES SLIDER */}
      <section className="py-16 bg-white/60">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-3xl font-bold text-center">Top AI/ML Use Cases Driving Business Innovation</motion.h3>
          <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 2500 }} pagination={{ clickable: true }} spaceBetween={20} breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="mt-10 !pb-10">
            {useCases.map((u, i) => (
              <SwiperSlide key={i}>
                <div className="h-full rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm p-6">
                  <BarChart3 className="h-6 w-6 text-sky-600" />
                  <h4 className="mt-3 font-semibold">{u.title}</h4>
                  <p className="text-sm text-gray-600">{u.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-10 bg-gradient-to-r from-sky-600 via-indigo-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-6 items-center justify-between">
          <motion.h4 {...fade()} className="text-2xl font-bold">Ready to unlock ROI with AI?</motion.h4>
          <a href="#contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl backdrop-blur font-semibold">Schedule a Call</a>
        </div>
      </section>

      {/* FLEXIBLE ENGAGEMENT */}
      <section className="py-16 bg-white/70">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-3xl font-bold text-center">Flexible Engagement Models Tailored to Your Needs</motion.h3>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {engagement.map((e, i) => (
              <motion.div key={i} {...fade(i * 0.05)} className="bg-white rounded-2xl ring-1 ring-gray-200 shadow-sm p-6">
                <Workflow className="h-7 w-7 text-sky-600" />
                <h4 className="mt-3 font-semibold">{e.title}</h4>
                <p className="text-sm text-gray-600">{e.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-3xl font-bold text-center">Our AI/ML Development Process</motion.h3>
          <div className="mt-10 grid md:grid-cols-5 gap-6">
            {process.map((p, i) => (
              <motion.div key={i} {...fade(i * 0.05)} className="bg-white rounded-2xl ring-1 ring-gray-200 shadow-sm p-6 text-center">
                <div className="h-10 w-10 mx-auto rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold">{i + 1}</div>
                <p className="mt-2 text-sm font-medium">{p.step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-16 bg-white/70">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-3xl font-bold text-center">Core AI & ML Technologies We Specialize In</motion.h3>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {tech.map((t, i) => (
              <motion.div key={i} {...fade(i * 0.03)} className="h-16 rounded-xl bg-white ring-1 ring-gray-200 shadow-sm flex items-center justify-center text-sm font-medium">{t}</motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-3xl font-bold text-center">Why Choose Us for Your AI/ML Development Needs</motion.h3>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {whyUs.map((w, i) => (
              <motion.div key={i} {...fade(i * 0.05)} className="bg-white rounded-2xl ring-1 ring-gray-200 shadow-sm p-6">
                <h4 className="mt-3 font-semibold">{w.title}</h4>
                <p className="text-sm text-gray-600">{w.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-16 bg-white/60">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-3xl font-bold text-center">Portfolio: Innovations with AI/ML Across Domains & Industries</motion.h3>
          <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 2600 }} pagination={{ clickable: true }} spaceBetween={20} breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="mt-10 !pb-10">
            {portfolioSlides.map((s, i) => (
              <SwiperSlide key={i}>
                <div className="h-full bg-white rounded-2xl ring-1 ring-gray-200 shadow-sm p-6">
                  <Layers className="h-6 w-6 text-sky-600" />
                  <h4 className="mt-3 font-semibold">{s.title}</h4>
                  <p className="text-sm text-gray-600">{s.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* INDUSTRY SOLUTIONS + COUNTERS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-3xl font-bold text-center">
            AI-Powered Solutions For Every Industry We Serve
          </motion.h3>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[{ v: 70, label: "Experts" }, { v: 150, label: "Projects" }, { v: 200, label: "Clients" }].map(
              (c, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 text-center ring-1 ring-gray-200 shadow-sm"
                >
                  <Counter end={c.v} className="text-3xl font-extrabold text-gray-900" suffix="+" />
                  <p className="text-sm text-gray-600 mt-1">{c.label}</p>
                </div>
              )
            )}
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2400 }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="mt-10 !pb-10"
          >
            {industriesSlides.map((s, i) => (
              <SwiperSlide key={i}>
                <div className="h-full bg-white rounded-2xl ring-1 ring-gray-200 shadow-sm p-6">
                  <Globe2 className="h-6 w-6 text-indigo-600" />
                  <h4 className="mt-3 font-semibold">{s.title}</h4>
                  <p className="text-sm text-gray-600">{s.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white/70">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-3xl font-bold text-center">
            Testimonials
          </motion.h3>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} {...fade(i * 0.05)} className="bg-white rounded-2xl ring-1 ring-gray-200 p-6">
                <Sparkles className="h-6 w-6 text-indigo-600" />
                <p className="mt-3 italic text-sm text-gray-700">“{t.quote}”</p>
                <p className="mt-4 font-semibold">{t.name}</p>
                <p className="text-xs text-gray-500">{t.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-2xl font-bold text-center">
            Let’s Talk About Your Project
          </motion.h3>
          <form className="mt-6 grid gap-4 md:grid-cols-2 bg-white p-6 rounded-2xl ring-1 ring-gray-200 shadow-sm">
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

      {/* FAQ */}
      <section className="py-16 bg-white/70">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-2xl font-bold text-center">
            FAQs
          </motion.h3>
          <div className="mt-6 divide-y rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
            {faqs.map((f, i) => (
              <details key={i} className="p-4">
                <summary className="cursor-pointer font-medium">{f.q}</summary>
                <p className="mt-2 text-sm text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS STRIP */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-12 rounded-xl bg-white ring-1 ring-gray-200 shadow-sm flex items-center justify-center text-xs"
            >
              Award
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
