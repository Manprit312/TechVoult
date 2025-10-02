"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ autoplay
import "swiper/css";
import { motion } from "framer-motion";

/* ---------- helpers ---------- */
const SectionTitle = ({ children, sub }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-center mb-10"
  >
    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
      {children}
    </h2>
    {sub ? (
      <p className="mt-2 text-gray-600 max-w-3xl mx-auto">{sub}</p>
    ) : null}
  </motion.div>
);

/* ---------- page ---------- */
export default function AIDevelopmentPage() {
  /* form */
  const [form, setForm] = useState({ name: "", email: "", phone: "", budget: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

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

  /* data */
  const clientLogos = ["Huawei", "Verizon", "Meta", "Vodafone", "Siemens", "Bosch"];
  const services = [
    { title: "AI Consulting", desc: "Identify opportunities, assess feasibility, and define a roadmap aligned to business goals." },
    { title: "Custom AI Solutions", desc: "Bespoke AI systems for automation, analytics, personalization, and decision support." },
    { title: "Natural Language Processing", desc: "Chatbots, sentiment analysis, intent detection, RAG & LLM fine-tuning." },
    { title: "Computer Vision", desc: "Object detection, OCR, biometrics, quality inspection, video analytics." },
    { title: "Predictive Analytics", desc: "Time-series forecasting, churn prediction, anomaly detection." },
    { title: "AI Integration & MLOps", desc: "APIs, pipelines, model monitoring, CI/CD for ML deployments." },
  ];
  const domains = [
    { h: "Generative AI", p: "LLMs, text-to-image, content generation, and creativity tools." },
    { h: "Conversational AI", p: "Voice assistants, AI chatbots, customer service automation." },
    { h: "Edge AI", p: "Deploy AI on mobile, IoT, AR/VR, and embedded devices." },
  ];
  const testimonials = [
    { quote: "Their AI team delivered a production-ready solution in weeks. Huge impact on KPIs.", name: "Neha S.", role: "Head of CX, Fintech", rating: "★★★★★" },
    { quote: "Solid engineering and clear communication. We scaled inference to millions of req/day.", name: "Arjun M.", role: "CTO, Ecommerce", rating: "★★★★★" },
    { quote: "They owned the problem end-to-end — from pipelines to dashboards and MLOps.", name: "Laura K.", role: "VP Product, SaaS", rating: "★★★★★" },
  ];
  const faqs = [
    { q: "What is AI development?", a: "Building intelligent systems using ML, NLP, vision, and LLMs to automate and improve decisions." },
    { q: "Which industries do you serve?", a: "Fintech, Healthcare, Retail, Logistics, Manufacturing, EdTech, Travel, and more." },
    { q: "Do you provide end-to-end services?", a: "Yes — consulting, data work, modeling, integration, deployment, and ongoing support." },
    { q: "Can you work on-prem or with strict compliance?", a: "Absolutely. We support on-prem, VPC, private LLMs, and enterprise security." },
  ];

  return (
    <main className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800 mt-16">
      {/* HERO */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl font-extrabold">AI Development Services</h1>
            <p className="mt-4 text-lg text-white/90">
              Unlock transformation with AI: <strong>NLP</strong>, <strong>Computer Vision</strong>,{" "}
              <strong>Predictive Analytics</strong>, and <strong>Generative AI</strong>.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div><h2 className="text-3xl font-bold">120+</h2><p>AI Projects</p></div>
              <div><h2 className="text-3xl font-bold">15+</h2><p>Industries</p></div>
              <div><h2 className="text-3xl font-bold">98%</h2><p>Client Retention</p></div>
            </div>
          </motion.div>

          {/* contact form */}
         {/* contact form */}
<motion.form
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  onSubmit={handleSubmit}
  className="bg-white p-6 rounded-2xl shadow-xl space-y-4"
>
  <input
    name="name"
    value={form.name}
    onChange={handleChange}
    placeholder="Full Name *"
    className="w-full p-3 border rounded-lg bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
  />
  <input
    name="email"
    type="email"
    value={form.email}
    onChange={handleChange}
    placeholder="Email Address *"
    className="w-full p-3 border rounded-lg bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
  />
  <input
    name="phone"
    type="tel"
    value={form.phone}
    onChange={handleChange}
    placeholder="Phone Number"
    className="w-full p-3 border rounded-lg bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
  />
  <select
    name="budget"
    value={form.budget}
    onChange={handleChange}
    className="w-full p-3 border rounded-lg bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
    placeholder="Tell us about your project *"
    rows={4}
    className="w-full p-3 border rounded-lg bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
  />
  <button
    type="submit"
    className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-lg font-semibold hover:opacity-90"
  >
    Submit
  </button>
  {status && <p className="text-green-600">{status}</p>}
</motion.form>

        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Swiper slidesPerView={5} spaceBetween={18} loop autoplay={{ delay: 1500, disableOnInteraction: false }} modules={[Autoplay]}>
            {clientLogos.map((c, i) => (
              <SwiperSlide key={i}>
                <div className="h-16 rounded-md bg-gray-100 flex items-center justify-center text-gray-700">{c}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle sub="Plan, build, and scale AI with confidence.">Our AI Development Services</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                <h4 className="font-semibold">{s.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DOMAINS */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle sub="Different AI areas we specialize in.">Key AI Domains</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {domains.map((d, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-xl shadow">
                <h4 className="font-semibold">{d.h}</h4>
                <p className="text-sm text-gray-600 mt-2">{d.p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle>Testimonials</SectionTitle>
          <Swiper slidesPerView={1} loop autoplay={{ delay: 2500, disableOnInteraction: false }} modules={[Autoplay]} spaceBetween={20}>
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div whileHover={{ scale: 1.03 }} className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow">
                  <div className="text-yellow-500 text-lg">{t.rating}</div>
                  <p className="mt-2">{t.quote}</p>
                  <p className="mt-4 font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
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
