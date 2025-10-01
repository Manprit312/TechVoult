"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

/* ---------- helpers ---------- */
const SectionTitle = ({ children, sub }) => (
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold">{children}</h2>
    {sub ? <p className="mt-2 text-gray-600 max-w-3xl mx-auto">{sub}</p> : null}
  </div>
);

/* ---------- page ---------- */
export default function AIDevelopmentPage() {
  /* form */
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Please share your requirements";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("Submitting…");
    setTimeout(() => {
      setStatus("Submitted successfully ✅");
      setForm({ name: "", email: "", phone: "", budget: "", message: "" });
    }, 1200);
  };

  /* data (written to match screenshot sections) */
  const clientLogos = ["Huawei", "Verizon", "Meta", "Vodafone", "Siemens", "Bosch"];
  const services = [
    {
      title: "AI Consulting",
      desc:
        "Identify opportunities, assess feasibility, and define a roadmap aligned to business goals.",
    },
    {
      title: "Custom AI Solutions",
      desc:
        "Bespoke AI systems for automation, analytics, personalization, and decision support.",
    },
    {
      title: "Natural Language Processing",
      desc:
        "Chatbots, intent detection, sentiment, entity extraction, RAG & LLM fine-tuning.",
    },
    {
      title: "Computer Vision",
      desc:
        "Object detection, OCR, quality inspection, biometrics, video analytics at scale.",
    },
    {
      title: "Predictive Analytics",
      desc:
        "Time-series forecasting, churn prediction, anomaly detection, and demand planning.",
    },
    {
      title: "AI Integration & MLOps",
      desc:
        "APIs, pipelines, model monitoring, CI/CD for ML and robust production deployments.",
    },
  ];
  const useCases = [
    {
      title: "Customer Support Automation",
      desc:
        "LLM-powered chat & email triage to reduce response time and boost CSAT.",
    },
    {
      title: "Fraud & Anomaly Detection",
      desc:
        "Real-time risk scoring for payments, logins, and transactions across channels.",
    },
    {
      title: "Personalized Recommendations",
      desc:
        "Deep-learning rankers for content, products, and offers that convert.",
    },
    {
      title: "Document Processing (OCR)",
      desc:
        "Auto-extract invoices, KYC, and contracts with human-in-the-loop review.",
    },
  ];
  const tools = [
    "TensorFlow",
    "PyTorch",
    "Keras",
    "scikit-learn",
    "OpenCV",
    "spaCy",
    "HuggingFace",
    "LangChain",
    "Vertex AI",
    "Azure ML",
    "SageMaker",
    "OpenAI API",
  ];
  const features = [
    "Enterprise-grade security & data privacy (encryption at rest & in transit).",
    "Production MLOps: versioning, monitoring, drift alerts, A/B testing.",
    "Scalable APIs and microservices for low-latency inference.",
    "Cloud-native: GCP, AWS, Azure — or on-prem with Kubernetes.",
    "Human-in-the-loop workflows to continuously improve accuracy.",
    "Clear documentation & handover for internal teams.",
  ];
  const process = [
    {
      step: "1. Discovery & Strategy",
      desc: "Workshops to align business goals, KPIs, and success metrics.",
    },
    {
      step: "2. Data & Feasibility",
      desc: "Audit data sources, define labeling needs, choose model approach.",
    },
    {
      step: "3. Prototype (PoC)",
      desc: "Rapid experiments to validate ROI and technical viability.",
    },
    {
      step: "4. Build & Integrate",
      desc: "Train models, build services, integrate with your stack.",
    },
    {
      step: "5. Deploy & Operate",
      desc: "CI/CD for ML, monitoring, alerts, and continuous improvement.",
    },
  ];
  const awards = ["Clutch", "GoodFirms", "G2", "Top Developers", "AppFutura", "Behance"];
  const blogs = [
    {
      title: "How to Pick the Right LLM for Your Use Case",
      tag: "Generative AI",
    },
    {
      title: "From Data to Decisions: Practical Predictive Analytics",
      tag: "Data Science",
    },
    {
      title: "Computer Vision in Manufacturing: A 2025 Playbook",
      tag: "Computer Vision",
    },
  ];
  const testimonials = [
    {
      quote:
        "Their AI team delivered a production-ready solution in weeks. Huge impact on our support KPIs.",
      name: "Neha S.",
      role: "Head of CX, Fintech",
      rating: "★★★★★",
    },
    {
      quote:
        "Solid engineering and clear communication. We scaled inference to millions of requests/day.",
      name: "Arjun M.",
      role: "CTO, Ecommerce",
      rating: "★★★★★",
    },
    {
      quote:
        "They owned the problem end-to-end — from data pipelines to dashboards and MLOps.",
      name: "Laura K.",
      role: "VP Product, SaaS",
      rating: "★★★★★",
    },
  ];
  const faqs = [
    {
      q: "What is AI development?",
      a:
        "Building intelligent systems using ML, NLP, vision, and LLMs to automate tasks, augment teams, and improve decisions.",
    },
    {
      q: "Which industries do you serve?",
      a:
        "Fintech, Healthcare, Retail, Logistics, Manufacturing, EdTech, Travel, and more.",
    },
    {
      q: "Do you provide end-to-end services?",
      a:
        "Yes — consulting, data work, modeling, integration, deployment, and ongoing support.",
    },
    {
      q: "Can you work on-prem or with strict compliance?",
      a:
        "Absolutely. We support on-prem, VPC, private LLMs, and enterprise security standards.",
    },
  ];

  return (
    <main className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800">
      {/* HERO (title + form + hero image placeholder) */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-extrabold">AI Development Services</h1>
            <p className="mt-4 text-gray-700">
              Remain truly modern — unlock transformation with AI. From{" "}
              <strong>NLP</strong> and <strong>Computer Vision</strong> to{" "}
              <strong>Predictive Analytics</strong> and <strong>Generative AI</strong>,
              we build production-ready, secure, and scalable systems.
            </p>
            <div className="mt-6 h-52 rounded-xl bg-gray-200/70 border flex items-center justify-center">
              <span className="text-gray-500">[ Hero Image Placeholder ]</span>
            </div>
          </div>

          {/* contact form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-xl space-y-4"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name *"
              className={`w-full p-3 border rounded-lg ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email *"
              className={`w-full p-3 border rounded-lg ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full p-3 border rounded-lg border-gray-300"
            />
            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg border-gray-300"
            >
              <option value="">Budget Range</option>
              <option value="10-25k">$10k–$25k</option>
              <option value="25-50k">$25k–$50k</option>
              <option value="50k+">$50k+</option>
            </select>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project"
              rows={4}
              className={`w-full p-3 border rounded-lg ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-95"
            >
              Submit
            </button>
            {Object.values(errors).length > 0 && (
              <p className="text-sm text-red-600">{Object.values(errors)[0]}</p>
            )}
            {status && <p className="text-sm text-green-700">{status}</p>}
          </form>
        </div>
      </section>

      {/* CLIENT LOGOS (slider) */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Swiper slidesPerView={5} spaceBetween={18} loop>
            {clientLogos.map((c, i) => (
              <SwiperSlide key={i}>
                <div className="h-16 rounded-md bg-gray-200 flex items-center justify-center">
                  {c}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* INTRO: AI development at TechVault */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="h-56 rounded-xl bg-gray-200/70 border flex items-center justify-center">
          [ Intro Image ]
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3">
            AI Development at TechVault
          </h3>
          <p className="text-gray-700">
            We partner with enterprises and startups to design, build, and run
            AI systems that deliver measurable outcomes — lower costs, happier
            customers, and faster decisions. Our approach is pragmatic: ship
            value quickly, then iterate with data.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle sub="Comprehensive services to plan, build, and scale AI with confidence.">
            Our AI Development Services
          </SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow">
                <h4 className="font-semibold">{s.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES slider */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle sub="Real projects that improved KPIs across support, revenue, and risk.">
            Tech Use-Cases Driving Business Growth in 2025
          </SectionTitle>
          <Swiper slidesPerView={2} spaceBetween={20} loop>
            {useCases.map((u, i) => (
              <SwiperSlide key={i}>
                <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 shadow">
                  <div className="h-40 rounded-lg bg-gray-200 flex items-center justify-center mb-4">
                    [ Case Image ]
                  </div>
                  <h4 className="font-semibold">{u.title}</h4>
                  <p className="text-sm text-gray-600 mt-2">{u.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* TOOLS & FRAMEWORKS */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <SectionTitle sub="Battle-tested stack we trust for speed, quality, and scale.">
          AI Tools and Frameworks We Trust and Deliver
        </SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((t, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow text-center">
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <SectionTitle sub="Expertise you can count on — delivery you can measure.">
          Why Choose TechVault for AI Development Services
        </SectionTitle>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            {
              h: "Proven Expertise",
              p: "100+ AI deliveries with enterprise SLAs and security.",
            },
            {
              h: "Transparent Process",
              p: "Weekly demos, clear milestones, and KPI tracking.",
            },
            {
              h: "Faster Time-to-Value",
              p: "PoCs in weeks, production roll-outs in sprints.",
            },
          ].map((c, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow text-center">
              <h4 className="font-semibold">{c.h}</h4>
              <p className="text-sm text-gray-600 mt-2">{c.p}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="#contact"
            className="inline-block rounded-lg bg-gray-900 text-white px-6 py-3 font-semibold"
          >
            Start a Project
          </a>
        </div>
      </section>

      {/* KEY FEATURES (2 cols with images) */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle sub="Everything you need to run AI safely at scale.">
            Key Features of Our AI Development Platform
          </SectionTitle>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-3">
              {features.slice(0, 3).map((f, i) => (
                <div key={i} className="p-4 rounded-lg bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
                  {f}
                </div>
              ))}
              <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                [ Feature Image A ]
              </div>
            </div>
            <div className="space-y-3">
              {features.slice(3).map((f, i) => (
                <div key={i} className="p-4 rounded-lg bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
                  {f}
                </div>
              ))}
              <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                [ Feature Image B ]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC PARTNER BANNER */}
      <section className="py-10 bg-gradient-to-r from-purple-100 via-indigo-100 to-pink-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">
              A Strategic Partner — Turning Your AI Vision into Reality
            </h3>
            <p className="text-gray-700 mt-2">
              From business case to production and beyond, we bring a hands-on
              team that ships value, not just slides.
            </p>
            <a
              href="#contact"
              className="inline-block mt-4 px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold"
            >
              Book a Consultation
            </a>
          </div>
          <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center">
            [ Mascot / Banner Image ]
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle>Our AI Development Process — Step-by-Step Guide</SectionTitle>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((p, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow text-center">
                <h4 className="font-semibold">{p.step}</h4>
                <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS & RECOGNITIONS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle>Awards & Recognitions</SectionTitle>
          <Swiper slidesPerView={5} spaceBetween={18} loop>
            {awards.map((a, i) => (
              <SwiperSlide key={i}>
                <div className="h-16 rounded-md bg-gray-200 flex items-center justify-center">
                  {a}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* BLOGS */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle>Latest Blogs in AI Development</SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((b, i) => (
              <article key={i} className="p-6 bg-white rounded-xl shadow">
                <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  [ Blog Image ]
                </div>
                <p className="text-xs uppercase tracking-wide text-indigo-600">
                  {b.tag}
                </p>
                <h4 className="font-semibold mt-1">{b.title}</h4>
                <a className="mt-3 inline-block text-sm text-indigo-600 font-semibold">
                  Read More →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle>Testimonials</SectionTitle>
          <Swiper slidesPerView={1} loop spaceBetween={10}>
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow">
                  <div className="text-yellow-500 text-lg">{t.rating}</div>
                  <p className="mt-2">{t.quote}</p>
                  <p className="mt-4 font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CONTACT (CTA) */}
      <section id="contact" className="py-16 bg-gradient-to-r from-purple-50 via-indigo-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Let’s Talk About Your Project</h3>
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 md:grid-cols-2 bg-white p-8 rounded-2xl shadow-xl"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name *"
              className={`p-3 border rounded-lg ${errors.name ? "border-red-500" : "border-gray-300"}`}
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email *"
              className={`p-3 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your requirements *"
              rows={4}
              className={`md:col-span-2 p-3 border rounded-lg ${errors.message ? "border-red-500" : "border-gray-300"}`}
            />
            <button className="md:col-span-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-95">
              Submit
            </button>
            {Object.values(errors).length > 0 && (
              <p className="md:col-span-2 text-red-600 text-sm">{Object.values(errors)[0]}</p>
            )}
            {status && (
              <p className="md:col-span-2 text-green-700 text-sm">{status}</p>
            )}
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <div className="bg-white rounded-2xl shadow divide-y divide-gray-200">
          {faqs.map((f, i) => (
            <details key={i} className="p-4">
              <summary className="font-medium cursor-pointer">{f.q}</summary>
              <p className="mt-2 text-sm text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

    
    </main>
  );
}
