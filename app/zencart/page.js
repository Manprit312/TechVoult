"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  ShoppingCart,
  Code2,
  MonitorSmartphone,
  Users,
  Trophy,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

/* ---------------- Counter ---------------- */
function Counter({ end = 0, duration = 1500, suffix = "+", className = "" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const animate = () => {
      const start = performance.now();
      const from = 0;
      const to = end;
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        setValue(Math.floor(from + (to - from) * progress));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animate();
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return <span ref={ref} className={className}>{value}{suffix}</span>;
}

/* ---------------- Page ---------------- */
export default function ZenCartPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    setTimeout(() => {
      setStatus("Submitted ✅");
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <main className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800 mt-16">

      {/* HERO */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl font-extrabold">Zen Cart Development Services</h1>
            <p className="mt-4 text-gray-700">
              Build robust, scalable, and secure Zen Cart solutions to accelerate your online business growth.
            </p>
            <div className="mt-6 h-52 bg-gray-200 rounded-xl flex items-center justify-center">[ Hero Image ]</div>
          </motion.div>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-xl space-y-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *"
              className="w-full p-3 border rounded-lg" required />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email *"
              className="w-full p-3 border rounded-lg" required />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your requirements *"
              rows={4} className="w-full p-3 border rounded-lg" required></textarea>
            <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-95">
              Submit
            </button>
            {status && <p className="text-sm text-green-700">{status}</p>}
          </form>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="h-56 bg-gray-200 rounded-xl flex items-center justify-center">[ Overview Image ]</div>
        <div>
          <h2 className="text-2xl font-bold">Overview - Zen Cart Development Services</h2>
          <p className="mt-4 text-gray-700">
            Zen Cart is a PHP-based, open-source shopping cart solution that is user-friendly, flexible, and robust. 
            Our team delivers scalable Zen Cart stores with custom modules, responsive themes, and secure integrations.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Our Zen Cart Development Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Custom Zen Cart Store Development",
              "Zen Cart Plugin Development",
              "Zen Cart Migration Services",
              "Theme Design & Integration",
              "Performance Optimization",
              "Maintenance & Support",
            ].map((service, i) => (
              <motion.div key={i} className="p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <ShoppingCart className="w-8 h-8 text-indigo-600 mb-3" />
                <h4 className="font-semibold">{service}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold">Elevate your Zen Cart store with expert developers</h2>
            <p className="mt-4 text-gray-700">Boost your eCommerce growth with advanced Zen Cart features and integrations.</p>
            <a href="#contact" className="inline-block mt-6 px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold">
              Talk to an Expert
            </a>
          </div>
          <div className="h-56 bg-gray-200 rounded-xl flex items-center justify-center">[ CTA Image ]</div>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div><Counter end={70} suffix="+" className="text-4xl font-bold text-indigo-600" /><p className="mt-2">Industries Served</p></div>
          <div><Counter end={150} suffix="+" className="text-4xl font-bold text-indigo-600" /><p className="mt-2">Projects Delivered</p></div>
          <div><Counter end={200} suffix="+" className="text-4xl font-bold text-indigo-600" /><p className="mt-2">Happy Clients</p></div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Zen Cart Development Company Portfolio</h2>
        <Swiper slidesPerView={1.2} spaceBetween={20} breakpoints={{768:{slidesPerView:2},1024:{slidesPerView:3}}}>
          {[1,2,3].map((i)=>(
            <SwiperSlide key={i}>
              <div className="h-48 bg-gray-200 rounded-xl flex items-center justify-center">[ Portfolio {i} ]</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Our Zen Cart Web Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Consultation","Custom Development","Testing","Launch"].map((step, i)=>(
              <motion.div key={i} className="p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow text-center"
                initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:i*0.1}}>
                <CheckCircle2 className="mx-auto w-8 h-8 text-indigo-600"/>
                <h4 className="mt-4 font-semibold">{step}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose Us As A Zen Cart Development Company?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Proven Experience","Cost-Effective Solutions","End-to-End Support"].map((txt,i)=>(
              <div key={i} className="p-6 bg-white rounded-xl shadow">{txt}</div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Testimonials</h2>
          <Swiper slidesPerView={1} loop>
            {[
              "Zen Cart team built a flawless store for our brand!",
              "Smooth migration and excellent support.",
              "We scaled revenue by 40% with their solutions.",
            ].map((t,i)=>(
              <SwiperSlide key={i}>
                <div className="p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow">
                  {t}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">Let’s Talk About Your Project</h2>
          <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *" className="p-3 border rounded-lg"/>
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email *" className="p-3 border rounded-lg"/>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Requirements *" className="md:col-span-2 p-3 border rounded-lg h-32"></textarea>
            <button type="submit" className="md:col-span-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90">
              Submit
            </button>
            {status && <p className="text-green-600 text-sm">{status}</p>}
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="bg-white rounded-2xl shadow divide-y divide-gray-200">
          {[
            {q:"What is Zen Cart?",a:"Zen Cart is an open-source eCommerce platform built with PHP."},
            {q:"Do you migrate existing stores to Zen Cart?",a:"Yes, we provide seamless migration services."},
            {q:"Do you provide custom module development?",a:"Yes, we build tailor-made modules."},
            {q:"Is support available post-launch?",a:"Yes, we provide 24/7 support & maintenance."},
          ].map((f,i)=>(
            <details key={i} className="p-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-xl font-bold mb-6">Partners & Recognition</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {[1,2,3,4,5,6].map((n)=>(<div key={n} className="h-16 bg-white rounded-xl shadow flex items-center justify-center">[ Award {n} ]</div>))}
          </div>
        </div>
      </section>

    </main>
  );
}
