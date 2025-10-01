"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold">{title}</h2>
    {subtitle && <p className="mt-2 text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
  </div>
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
    <main className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800">

      {/* HERO */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-extrabold">Shopify Development Company</h1>
            <p className="mt-4 text-gray-700">
              We build scalable, secure, and feature-rich Shopify stores to take your business online and boost conversions.
            </p>
            <div className="mt-6 h-52 rounded-xl bg-gray-200 border flex items-center justify-center">
              [ Hero Image ]
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-xl space-y-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *"
              className={`w-full p-3 border rounded-lg ${errors.name ? "border-red-500" : "border-gray-300"}`} />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email *"
              className={`w-full p-3 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"}`} />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your requirements *"
              rows={4} className={`w-full p-3 border rounded-lg ${errors.message ? "border-red-500" : "border-gray-300"}`} />
            <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-95">Submit</button>
            {status && <p className="text-sm text-green-700">{status}</p>}
          </form>
        </div>
      </section>

      {/* WHY SHOPIFY */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="h-56 rounded-xl bg-gray-200 border flex items-center justify-center">[ Shopify Illustration ]</div>
        <div>
          <h3 className="text-2xl font-bold">The Best End-to-End Shopify Solutions</h3>
          <p className="mt-4 text-gray-700">
            Our Shopify developers help create stunning eCommerce websites, migrate stores, develop custom apps, and optimize your store for conversions.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle title="Our Shopify Development Services Include" />
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow">
                <h4 className="font-semibold">{s}</h4>
                <p className="text-sm text-gray-600 mt-2">Professional {s.toLowerCase()} for businesses worldwide.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USP / OFFERING */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">Why Choose Us for Shopify Solutions?</h3>
            <ul className="list-disc mt-4 pl-6 text-gray-700 space-y-2">
              <li>Certified Shopify Experts</li>
              <li>Custom Theme & App Development</li>
              <li>Migration and Maintenance Support</li>
              <li>SEO & Conversion Optimization</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold">
              Start a Project
            </a>
          </div>
          <div className="h-56 bg-gray-200 rounded-lg flex items-center justify-center">[ Shopify Project Image ]</div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle title="Our Shopify Development Process" />
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <div key={i} className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 shadow">
                <h4 className="font-semibold">{p.step}</h4>
                <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-gradient-to-r from-purple-50 via-indigo-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle title="Testimonials" />
          <Swiper slidesPerView={1} loop>
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow text-center">
                  <p className="italic">"{t.quote}"</p>
                  <p className="mt-4 font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Let’s Talk About Your Project</h3>
          <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-2xl shadow-xl">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *"
              className={`p-3 border rounded-lg ${errors.name ? "border-red-500" : "border-gray-300"}`} />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email *"
              className={`p-3 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"}`} />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your requirements *"
              rows={4} className={`md:col-span-2 p-3 border rounded-lg ${errors.message ? "border-red-500" : "border-gray-300"}`} />
            <button className="md:col-span-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-95">Submit</button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <SectionTitle title="Frequently Asked Questions" />
        <div className="bg-white rounded-2xl shadow divide-y">
          {faqs.map((f, i) => (
            <details key={i} className="p-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 text-center">
        <SectionTitle title="Awards & Recognition" />
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {["Clutch", "GoodFirms", "Top Devs", "G2", "AppFutura", "Behance"].map((a, i) => (
            <div key={i} className="h-16 bg-white rounded-xl shadow flex items-center justify-center">{a}</div>
          ))}
        </div>
      </section>

     
    </main>
  );
}
