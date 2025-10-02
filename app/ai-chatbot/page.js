"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import {
  Bot,
  Brain,
  Cpu,
  Headphones,
  Globe,
  MessageSquare,
  Quote,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function AIChatbotPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50 text-gray-800 mt-18">
      {/* HERO */}
      <section className="py-16 bg-gradient-to-r from-sky-100 via-indigo-100 to-purple-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          <motion.div {...fadeUp()}>
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Best AI Chatbot Development Services
            </h1>
            <p className="mt-4 text-gray-700">
              Build intelligent AI-powered chatbots that automate workflows,
              engage customers, and scale your business.
            </p>
          </motion.div>

          {/* FORM */}
          <motion.form
            {...fadeUp(0.1)}
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
            <textarea
              placeholder="Project brief *"
              className="border w-full px-3 py-2 rounded-lg h-24"
            />
            <button className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-6 py-3 rounded-lg w-full">
              Get Started
            </button>
          </motion.form>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 bg-white/70">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp()}>
            <h2 className="text-3xl font-bold">Build Intelligent Chatbots for Business</h2>
            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
              <li>24/7 Customer Engagement</li>
              <li>Reduce operational costs</li>
              <li>Seamless integration with existing platforms</li>
              <li>Custom conversational AI tailored to your business</li>
            </ul>
          </motion.div>
          <motion.div {...fadeUp(0.2)} className="h-60 overflow-hidden rounded-xl shadow-lg">
            <Image src="/assets/images/chatbot.jpeg" alt="AI Chatbot" width={400} height={200} className="h-full w-full object-cover rounded-xl" />
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp()} className="text-3xl font-bold text-center">
            Chatbot Development Services We Offer
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { icon: Bot, title: "AI Chatbot Development", text: "Intelligent bots to handle customer queries in real-time." },
              { icon: Cpu, title: "NLP Chatbots", text: "Bots that understand and respond with natural language." },
              { icon: Brain, title: "Voice Bots", text: "AI-powered bots with voice recognition." },
              { icon: MessageSquare, title: "Omnichannel Bots", text: "Bots for WhatsApp, Messenger, Slack, and more." },
              { icon: Headphones, title: "Customer Support Bots", text: "24/7 automated assistance for customers." },
              { icon: Globe, title: "Multilingual Bots", text: "Bots that support multiple languages for global reach." },
            ].map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.05)}
                className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-md transition"
              >
                <s.icon className="h-7 w-7 text-sky-600" />
                <h4 className="mt-3 font-semibold">{s.title}</h4>
                <p className="text-sm text-gray-600">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY USE CASES SLIDER */}
      <section className="py-16 bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp()} className="text-3xl font-bold text-center">
            Industry-Specific Chatbot Solutions Powered by Generative AI
          </motion.h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500 }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mt-10 !pb-10"
          >
            {[
              { title: "Healthcare", text: "Appointment booking & patient engagement bots." },
              { title: "Retail", text: "Bots for product search, order tracking, and upselling." },
              { title: "Finance", text: "Automated support for banking and insurance." },
              { title: "Travel", text: "AI travel assistants for booking and FAQs." },
            ].map((u, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-gray-200 h-full hover:shadow-md transition">
                  <h4 className="font-semibold">{u.title}</h4>
                  <p className="text-sm text-gray-600 mt-2">{u.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp()} className="text-3xl font-bold text-center">
            Our AI Chatbot Development Process
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {["Requirement Gathering", "Design & NLP", "Development", "Testing & Deployment"].map(
              (step, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.05)}
                  className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-gray-200 text-center hover:shadow-md transition"
                >
                  <div className="h-10 w-10 rounded-full bg-sky-100 mx-auto flex items-center justify-center font-bold text-sky-700">
                    {i + 1}
                  </div>
                  <h4 className="mt-3 font-semibold">{step}</h4>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white/80">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp()} className="text-3xl font-bold text-center">
            Testimonials
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { name: "John D.", role: "CTO, Healthcare Startup", quote: "Their chatbot reduced our support costs by 50% and improved customer satisfaction." },
              { name: "Sarah L.", role: "Product Manager, eCommerce", quote: "We deployed a multilingual chatbot that boosted conversions instantly." },
              { name: "Michael K.", role: "CEO, Fintech", quote: "AI bots by SDLC Corp handle thousands of queries daily, flawlessly." },
            ].map((t, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.05)}
                className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-md transition"
              >
                <Quote className="h-6 w-6 text-sky-600" />
                <p className="mt-3 italic text-sm text-gray-700">“{t.quote}”</p>
                <p className="mt-4 font-semibold">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 bg-gradient-to-r from-sky-100 via-indigo-100 to-purple-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 {...fadeUp()} className="text-2xl font-bold text-center">
            Let’s Talk About Your Project
          </motion.h2>
          <form className="mt-6 grid gap-4 md:grid-cols-2 bg-white p-6 rounded-2xl shadow-sm ring-1 ring-gray-200">
            <input placeholder="Full Name *" className="border px-3 py-2 rounded-lg" />
            <input placeholder="Email *" type="email" className="border px-3 py-2 rounded-lg" />
            <input placeholder="Company" className="border px-3 py-2 rounded-lg" />
            <input placeholder="Phone" className="border px-3 py-2 rounded-lg" />
            <textarea className="md:col-span-2 border px-3 py-2 h-28 rounded-lg" placeholder="Your requirements *" />
            <button className="md:col-span-2 bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-6 py-3 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white/70">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 {...fadeUp()} className="text-2xl font-bold text-center">
            FAQs
          </motion.h2>
          <div className="mt-6 divide-y rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
            {[
              { q: "What platforms do you build chatbots for?", a: "WhatsApp, Messenger, Slack, Microsoft Teams, Web & Mobile Apps." },
              { q: "Do you support multilingual chatbots?", a: "Yes, our chatbots support multiple languages for global reach." },
              { q: "How secure are your chatbots?", a: "We follow enterprise-grade security and compliance." },
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
      <section className="py-10 bg-gradient-to-r from-sky-50 via-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-12 rounded-xl bg-white ring-1 ring-gray-200 shadow-sm flex items-center justify-center text-xs hover:shadow-md transition">
              Award
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
