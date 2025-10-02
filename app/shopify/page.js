"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const SectionTitle = ({ title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-center mb-10"
  >
    <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
    {subtitle && <p className="mt-2 text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
  </motion.div>
);

export default function ShopifyPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const err = {};
    if (!form.name) err.name = "Name required";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) err.email = "Valid email required";
    if (!form.message) err.message = "Message required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("Submitting...");
    setTimeout(() => {
      setStatus("Submitted ✅");
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  /* Data */
  const services = [
    "Shopify Store Setup",
    "Shopify Theme Development",
    "Shopify App Development",
    "Shopify Migration",
    "Shopify API Integration",
    "Shopify Maintenance & Support",
    "Shopify Plus Development",
    "Custom Shopify Solutions",
    "Shopify SEO Optimization",
  ];
  const process = [
    { step: "1. Consultation", desc: "Understanding your Shopify business needs." },
    { step: "2. Design & Development", desc: "Custom themes, apps, and integrations." },
    { step: "3. Testing & Deployment", desc: "Rigorous QA and smooth store launch." },
    { step: "4. Support", desc: "Ongoing monitoring, updates, and maintenance." },
  ];
  const faqs = [
    { q: "Why choose Shopify for eCommerce?", a: "Shopify is scalable, secure, and offers powerful tools to run online stores effectively." },
    { q: "Do you provide custom Shopify app development?", a: "Yes, we build and integrate apps tailored to your business workflows." },
    { q: "Can you migrate my WooCommerce/Magento store?", a: "Absolutely, we offer smooth migration services to Shopify." },
    { q: "Do you provide support after launch?", a: "Yes, we provide maintenance, upgrades, and technical support." },
  ];
  const testimonials = [
    { name: "Amit Sharma", role: "Founder, Fashion Brand", quote: "They created our Shopify store beautifully and sales increased by 40%." },
    { name: "Sarah Lee", role: "E-commerce Manager", quote: "The migration from WooCommerce to Shopify was seamless." },
    { name: "John D.", role: "CEO, Electronics Store", quote: "Great support team — they maintain and scale our Shopify Plus store." },
  ];

  return (
    <main className="bg-gradient-to-br from-green-50 via-emerald-50 to-white text-gray-800 mt-18">

      {/* HERO */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-100 via-emerald-100 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-extrabold text-gray-900">Shopify Development Company</h1>
            <p className="mt-4 text-gray-700">
              We build scalable, secure, and feature-rich Shopify stores to take your business online and boost conversions.
            </p>
            <div className="mt-6 h-52 rounded-xl overflow-hidden shadow-lg">
              <Image src="/assets/images/shopify.jpeg" alt="Shopify Development"
                width={400} height={200} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-xl space-y-4"
          >
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *"
              className={`w-full p-3 border rounded-lg ${errors.name ? "border-red-500" : "border-gray-300"}`} />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email *"
              className={`w-full p-3 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"}`} />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your requirements *"
              rows={4} className={`w-full p-3 border rounded-lg ${errors.message ? "border-red-500" : "border-gray-300"}`} />
            <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-lg font-semibold hover:opacity-95">
              Submit
            </button>
            {status && <p className="text-sm text-green-700">{status}</p>}
          </motion.form>
        </div>
      </section>

      {/* WHY SHOPIFY */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="h-56 rounded-xl overflow-hidden shadow"
        >
          <Image src="/assets/images/endtoendshopify.jpeg" alt="Why Shopify"
            width={400} height={200} className="w-full h-full object-cover" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h3 className="text-2xl font-bold text-gray-900">The Best End-to-End Shopify Solutions</h3>
          <p className="mt-4 text-gray-700">
            Our Shopify developers help create stunning eCommerce websites, migrate stores, develop custom apps, and optimize your store for conversions.
          </p>
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle title="Our Shopify Development Services Include" />
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-green-50 via-emerald-50 to-white rounded-xl shadow"
              >
                <h4 className="font-semibold">{s}</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Professional {s.toLowerCase()} for businesses worldwide.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
