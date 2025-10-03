"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ import autoplay module
import "swiper/css";

import { useState } from "react";
import { CheckCircle, Star } from "lucide-react";
import Image from "next/image";

export default function ServicePage({ title, subtitle, stats, services, features, portfolio, faqs,serviveImage }) {
  const [faqState, setFaqState] = useState(null);

  return (
    <div className="bg-gradient-to-b from-pink-50 via-orange-50 to-indigo-50 text-gray-800 mt-16">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-pink-400 via-orange-400 to-indigo-400 text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
          <p className="mt-4 text-lg text-white/90">{subtitle}</p>
          <div className="flex space-x-6 mt-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <h2 className="text-3xl font-extrabold">{s.value}</h2>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mt-10 md:mt-0"
        >
          <Image
            src={serviveImage}
            alt="Service Hero"
            width={500}
            height={400}
            className="rounded-xl object-cover"
          />
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((srv, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition relative"
            >
              <Image
                src={srv.src}
                alt={srv}
                width={400}
                height={250}
                className="rounded-lg object-cover w-full h-40 mb-4"
              />
              <CheckCircle className="text-pink-500 mb-3" />
              <h3 className="font-semibold">{srv.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-r from-pink-100 via-orange-100 to-indigo-100 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <p>{f}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Slider */}
      <section className="py-10 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
          Portfolio
        </h2>
        <Swiper  spaceBetween={20}
      slidesPerView={1}
      modules={[Autoplay]} // ✅ register autoplay
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true} // ✅ infinite loop
      // }
      >
          {portfolio.map((p, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ scale: 1.09 }}
                className="p-6 rounded-xl  text-center"
              >
                <Image
                  src={p.src}
                  alt={`Portfolio ${i + 1}`}
                  width={700}
                  height={300}
                  className="rounded-lg object-cover mx-auto mb-4"
                />
                <p>{p.name  }</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-orange-50 via-pink-50 to-indigo-50 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Testimonials</h2>
           <Swiper
      spaceBetween={20}
      slidesPerView={1}
      modules={[Autoplay]} // ✅ register autoplay
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true} // ✅ infinite loop
    >
      {["Amazing work!", "Boosted our brand!", "Highly recommend!"].map((t, i) => (
        <SwiperSlide key={i}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow text-center max-h-[300px] flex flex-col justify-center"
          >
            <Star className="text-yellow-500 mx-auto mb-2" />
            <p className="line-clamp-3">{t}</p>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          FAQs
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className=" rounded-lg bg-white shadow">
              <button
                onClick={() => setFaqState(faqState === i ? null : i)}
                className="w-full flex justify-between px-4 py-3 font-medium text-left text-gray-900"
              >
                {faq.q} <span>{faqState === i ? "-" : "+"}</span>
              </button>
              {faqState === i && <div className="px-4 pb-4 text-gray-600">{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
