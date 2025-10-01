"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import {
  Brain,
  Bot,
  Cpu,
  Settings2,
  Database,
  Sparkles,
  ShieldCheck,
  LineChart,
  Layers,
  Gauge,
  Quote,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const Stat = ({ icon: Icon, value, label }) => {
  const [n, setN] = useState(0);
  return (
    <motion.div
      {...fadeUp()}
      className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-gray-200"
      onViewportEnter={() => {
        let start = 0;
        const end = value;
        const step = () => {
          start += Math.ceil(end / 40);
          if (start >= end) {
            setN(end);
          } else {
            setN(start);
            requestAnimationFrame(step);
          }
        };
        requestAnimationFrame(step);
      }}
    >
      <div className="flex items-center gap-3">
        <Icon className="h-7 w-7 text-indigo-600" />
        <div>
          <p className="text-3xl font-extrabold">{n}+</p>
          <p className="text-gray-600 text-sm">{label}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function MachineLearningPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800 mt-16">
      {/* HERO */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          <motion.div {...fadeUp(0.1)}>
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Top Machine Learning Development Company
            </h1>
            <p className="mt-4 text-gray-600">
              Build intelligent ML-powered products with SDLC Corp. Our machine
              learning solutions help automate workflows, gain insights, and
              deliver personalized experiences.
            </p>

            {/* Counters */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <Stat icon={Brain} value={100} label="ML Projects" />
              <Stat icon={Gauge} value={70} label="Enterprise Clients" />
              <Stat icon={Sparkles} value={95} label="Client Satisfaction %" />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            {...fadeUp(0.15)}
            className="bg-white rounded-2xl shadow-lg p-6 space-y-3"
          >
            <h3 className="text-lg font-semibold">Request A Free Proposal</h3>
            <input
              placeholder="Full Name *"
              className="border w-full px-3 py-2 rounded-lg"
            />
            <input
              placeholder="Work Email *"
              type="email"
              className="border w-full px-3 py-2 rounded-lg"
            />
            <input
              placeholder="Company"
              className="border w-full px-3 py-2 rounded-lg"
            />
            <textarea
              placeholder="Project brief *"
              className="border w-full px-3 py-2 rounded-lg h-24"
            />
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg w-full">
              Get Started
            </button>
          </motion.form>
        </div>
      </section>

      {/* WHY CHOOSE SDLC */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2 {...fadeUp()} className="text-3xl font-bold">
            Why Choose SDLC Corp As Your Machine Learning Development Partner?
          </motion.h2>
          <p className="mt-4 text-gray-600">
            We help you accelerate adoption of AI & ML with expert teams,
            scalable solutions, and enterprise-ready platforms. From data prep
            to deployment, we cover it all.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 bg-white/70">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp()} className="text-3xl font-bold text-center">
            Our Machine Learning Development Services
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Cpu,
                title: "ML Model Development",
                text: "Custom ML models built for vision, NLP, predictive analytics and more.",
              },
              {
                icon: Database,
                title: "Data Engineering",
                text: "Pipelines, data lakes, warehouses and feature engineering.",
              },
              {
                icon: Bot,
                title: "AI Chatbots",
                text: "Conversational AI solutions for enterprises and startups.",
              },
              {
                icon: LineChart,
                title: "Predictive Analytics",
                text: "Forecast demand, detect anomalies, and optimize KPIs.",
              },
              {
                icon: Settings2,
                title: "MLOps & Automation",
                text: "CI/CD, monitoring, retraining and deployment pipelines.",
              },
              {
                icon: ShieldCheck,
                title: "AI Security",
                text: "Data privacy, model robustness, fairness and compliance.",
              },
            ].map((c, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.05)}
                className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-gray-200"
              >
                <c.icon className="h-7 w-7 text-indigo-600" />
                <h4 className="mt-3 font-semibold">{c.title}</h4>
                <p className="text-sm text-gray-600">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp()} className="text-3xl font-bold text-center">
            Our Machine Learning Expertise And Use Cases
          </motion.h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500 }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            className="mt-10 !pb-10"
          >
            {[
              {
                title: "Fraud Detection",
                text: "Detect anomalies and fraudulent transactions with ML.",
              },
              {
                title: "Healthcare Analytics",
                text: "Predict disease risks and assist in diagnostics.",
              },
              {
                title: "Customer Segmentation",
                text: "Understand and cluster customers for personalization.",
              },
              {
                title: "Manufacturing",
                text: "Predictive maintenance and quality control.",
              },
            ].map((u, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-gray-200 h-full">
                  <h4 className="font-semibold">{u.title}</h4>
                  <p className="text-sm text-gray-600 mt-2">{u.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-white/60">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp()} className="text-3xl font-bold text-center">
            Our Machine Learning Development Process
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {["Discovery", "Data Prep", "Modeling", "Deployment"].map(
              (step, i) => (
                <motion.div
                  key={step}
                  {...fadeUp(i * 0.05)}
                  className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-gray-200 text-center"
                >
                  <div className="h-10 w-10 rounded-full bg-indigo-100 mx-auto flex items-center justify-center font-bold text-indigo-700">
                    {i + 1}
                  </div>
                  <h4 className="mt-3 font-semibold">{step}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Description of {step}.
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 {...fadeUp()} className="text-3xl font-bold text-center">
            Client Testimonials
          </motion.h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Michael Smith",
                role: "CEO, Retail Group",
                quote:
                  "Their ML expertise transformed our operations and increased ROI.",
              },
              {
                name: "Sarah Lee",
                role: "CTO, Fintech",
                quote:
                  "Accurate fraud detection saved us millions in potential losses.",
              },
              {
                name: "Rajesh Kumar",
                role: "Director, Healthcare",
                quote:
                  "Their predictive models improved patient outcomes significantly.",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.05)}
                className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-gray-200"
              >
                <Quote className="h-6 w-6 text-indigo-600" />
                <p className="mt-3 italic text-sm text-gray-700">
                  “{t.quote}”
                </p>
                <p className="mt-4 font-semibold">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 {...fadeUp()} className="text-2xl font-bold text-center">
            Let’s Talk About Your Project
          </motion.h2>
          <form className="mt-6 grid gap-4 md:grid-cols-2 bg-white p-6 rounded-2xl shadow-sm ring-1 ring-gray-200">
            <input placeholder="Full Name *" className="border px-3 py-2 rounded-lg" />
            <input placeholder="Email *" type="email" className="border px-3 py-2 rounded-lg" />
            <input placeholder="Company" className="border px-3 py-2 rounded-lg" />
            <input placeholder="Phone" className="border px-3 py-2 rounded-lg" />
            <textarea className="md:col-span-2 border px-3 py-2 h-28 rounded-lg" placeholder="Your requirements *" />
            <button className="md:col-span-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 {...fadeUp()} className="text-2xl font-bold text-center">
            FAQs
          </motion.h2>
          <div className="mt-6 divide-y rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
            {[
              {
                q: "What industries can benefit from ML?",
                a: "Finance, retail, healthcare, manufacturing, logistics and more.",
              },
              {
                q: "Do you provide model maintenance?",
                a: "Yes, we handle retraining, monitoring and updates.",
              },
              {
                q: "How do you ensure data privacy?",
                a: "We comply with GDPR, HIPAA and enterprise-grade security.",
              },
            ].map((f, i) => (
              <details key={i} className="p-4">
                <summary className="cursor-pointer font-medium">{f.q}</summary>
                <p className="mt-2 text-sm text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-10 bg-white/70">
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
