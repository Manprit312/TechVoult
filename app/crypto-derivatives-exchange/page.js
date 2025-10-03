"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle, Star, Users, Briefcase, Globe } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function CryptoDerivativesExchange() {
  const [faqs, setFaqs] = useState([
    {
      q: "What is a crypto derivatives exchange?",
      a: "A crypto derivatives exchange allows trading of financial contracts such as futures, options, and perpetual contracts instead of spot cryptocurrencies.",
    },
    {
      q: "What types of derivatives can be built?",
      a: "We provide Futures, Options, Swaps, and Perpetual Contracts.",
    },
    {
      q: "How secure is the platform?",
      a: "We implement KYC/AML, multi-signature wallets, and advanced security auditing.",
    },
    {
      q: "What services do you provide?",
      a: "We offer end-to-end crypto derivatives exchange development including UI/UX, smart contract integration, trading engine, and liquidity solutions.",
    },
  ]);

  const toggleFAQ = (idx) => {
    setFaqs((prev) =>
      prev.map((faq, i) => (i === idx ? { ...faq, open: !faq.open } : faq))
    );
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 mt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-blue-800 text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h1 className="text-4xl font-bold mb-4">
            Crypto Derivatives Exchange Development Company
          </h1>
          <p className="mb-6">
            We build secure, scalable, and feature-rich crypto derivatives
            exchanges with futures, options, and perpetual trading.
          </p>
          <div className="flex space-x-8 mt-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold">500+</h2>
              <p>Projects Delivered</p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold">100M+</h2>
              <p>Users Worldwide</p>
            </div>
          </div>
        </motion.div>

        {/* Lead Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white text-gray-900 p-6 rounded-xl shadow-lg w-full md:w-96 mt-10 md:mt-0"
        >
          <h3 className="text-xl font-semibold mb-4">Request a Proposal</h3>
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-2 rounded mb-3"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded mb-3"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full border p-2 rounded mb-3"
          />
          <textarea
            placeholder="Requirements"
            className="w-full border p-2 rounded mb-3"
            rows={3}
          ></textarea>
          <button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-2 rounded">
            Submit
          </button>
        </motion.form>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold">Overview Of Crypto Derivatives Exchange Development Company</h2>
          <p>
            Our expertise lies in creating world-class crypto derivatives trading platforms offering secure, scalable, and customizable solutions.
          </p>
        </motion.div>
        <motion.img
          src="/assets/images/cryptoderivative.jpeg"
          alt="overview"
          className="rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        />
      </section>

      {/* Services */}
      <section className="py-16 bg-white px-6 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-10">Our Crypto Derivatives Exchange Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Perpetual Contracts",
            "Options Trading",
            "Futures Trading",
            "Spot + Derivatives Hybrid",
            "Liquidity Integration",
            "Custom Trading UI/UX",
          ].map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl shadow"
            >
              <CheckCircle className="text-indigo-600 mb-3" />
              <h3 className="font-semibold">{service}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Slider */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-10">Our Portfolio</h2>
        <Swiper spaceBetween={20} slidesPerView={1} autoplay>
          <SwiperSlide>
            <div className="p-6 bg-white shadow rounded-xl">
              <h3 className="font-semibold">Crypto Futures Exchange</h3>
              <p>Custom-built high-frequency trading platform with futures contracts.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 bg-white shadow rounded-xl">
              <h3 className="font-semibold">Options Trading Platform</h3>
              <p>Secure & scalable options trading platform with custom dashboards.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50 px-6 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Prakash Verma", "Paul Thomson", "Hameed Al Lamri"].map((name, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow"
            >
              <Star className="text-yellow-400 mb-2" />
              <p>
                “The team built a secure and scalable derivatives exchange that exceeded our expectations.”
              </p>
              <h4 className="mt-3 font-semibold">{name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-lg">
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center px-4 py-3 font-medium"
              >
                {faq.q}
                <span>{faq.open ? "-" : "+"}</span>
              </button>
              {faq.open && <div className="px-4 pb-4 text-gray-600">{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-10 px-6 md:px-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-3">About Us</h3>
            <p>We are a leading blockchain development company building next-gen crypto derivatives exchanges.</p>
          </div>
          <div>
            <h3 className="font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Global Presence</h3>
            <p>USA | UK | UAE | India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
