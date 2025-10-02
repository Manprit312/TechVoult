"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import { CheckCircle, Star } from "lucide-react";

export default function ServicePage({ title, subtitle, stats, services, features, portfolio, faqs }) {
  const [faqState, setFaqState] = useState(null);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 mt-16">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-800 to-indigo-600 text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p>{subtitle}</p>
          <div className="flex space-x-6 mt-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <h2 className="text-3xl font-bold">{s.value}</h2>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((srv, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-lg shadow">
              <CheckCircle className="text-indigo-600 mb-3" />
              <h3 className="font-semibold">{srv}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-white px-6 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-lg shadow">
              <p>{f}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Slider */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-10">Portfolio</h2>
        <Swiper spaceBetween={20} slidesPerView={1} autoplay>
          {portfolio.map((p, i) => (
            <SwiperSlide key={i}>
              <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-lg shadow text-center">
                <p>{p}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-indigo-50 px-6 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-10">Testimonials</h2>
        <Swiper spaceBetween={20} slidesPerView={1}>
          {["Amazing work!", "Boosted our brand!", "Highly recommend!"].map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-lg shadow text-center">
                <Star className="text-yellow-500 mx-auto mb-2" />
                <p>{t}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-10">FAQs</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border rounded">
              <button onClick={() => setFaqState(faqState === i ? null : i)} className="w-full flex justify-between px-4 py-3 font-medium">
                {faq.q} <span>{faqState === i ? "-" : "+"}</span>
              </button>
              {faqState === i && <div className="px-4 pb-4">{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
