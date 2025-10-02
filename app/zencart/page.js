"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  ShoppingCart,
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
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            animate();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {value}{suffix}
    </motion.span>
  );
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
    <main className="bg-gradient-to-br from-green-50 via-emerald-50 to-white text-gray-800 mt-18">

      {/* HERO */}
      <motion.section
        className="py-20 px-6 bg-gradient-to-r from-emerald-100 via-green-100 to-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-emerald-900">Zen Cart Development Services</h1>
            <p className="mt-4 text-gray-700">
              Build robust, scalable, and secure Zen Cart solutions to accelerate your online business growth.
            </p>
            <motion.div
              className="mt-6 h-52 rounded-xl overflow-hidden shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Image src="/assets/images/zencarthero.jpeg" alt="Zen Cart Development"
                width={600} height={400} className="w-full h-full object-cover" />
            </motion.div>
          </div>
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-xl space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *"
              className="w-full p-3 border rounded-lg" required />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email *"
              className="w-full p-3 border rounded-lg" required />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your requirements *"
              rows={4} className="w-full p-3 border rounded-lg" required></textarea>
            <motion.button type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-lg font-semibold hover:opacity-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Submit
            </motion.button>
            {status && <p className="text-sm text-green-700">{status}</p>}
          </motion.form>
        </div>
      </motion.section>

      {/* OVERVIEW */}
      <motion.section
        className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.div className="h-56 rounded-xl overflow-hidden shadow-lg" whileHover={{ scale: 1.05 }}>
          <Image src="/assets/images/zencart2.jpeg" alt="Zen Cart Development"
            width={600} height={400} className="w-full h-full object-cover" />
        </motion.div>
        <div>
          <h2 className="text-2xl font-bold">Overview - Zen Cart Development Services</h2>
          <p className="mt-4 text-gray-700">
            Zen Cart is a PHP-based, open-source shopping cart solution that is user-friendly, flexible, and robust. 
            Our team delivers scalable Zen Cart stores with custom modules, responsive themes, and secure integrations.
          </p>
        </div>
      </motion.section>

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
              <motion.div key={i}
                className="p-6 bg-gradient-to-br from-green-50 via-emerald-50 to-white rounded-xl shadow"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <ShoppingCart className="w-8 h-8 text-green-600 mb-3" />
                <h4 className="font-semibold">{service}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-50 via-emerald-50 to-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold">Elevate your Zen Cart store with expert developers</h2>
            <p className="mt-4 text-gray-700">Boost your eCommerce growth with advanced Zen Cart features and integrations.</p>
            <a href="#contact" className="inline-block mt-6 px-5 py-2 rounded-lg bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold">
              Talk to an Expert
            </a>
          </div>
          <motion.div className="h-56 rounded-xl overflow-hidden shadow-lg" whileHover={{ scale: 1.05 }}>
            <Image src="/assets/images/zencart3.jpeg" alt="Zen Cart Development"
              width={600} height={400} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div><Counter end={70} suffix="+" className="text-4xl font-bold text-green-600" /><p className="mt-2">Industries Served</p></div>
          <div><Counter end={150} suffix="+" className="text-4xl font-bold text-green-600" /><p className="mt-2">Projects Delivered</p></div>
          <div><Counter end={200} suffix="+" className="text-4xl font-bold text-green-600" /><p className="mt-2">Happy Clients</p></div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Zen Cart Development Company Portfolio</h2>
        <Swiper slidesPerView={1.2} spaceBetween={20} breakpoints={{768:{slidesPerView:2},1024:{slidesPerView:3}}}>
          {[1,2,3].map((i)=>(
            <SwiperSlide key={i}>
              <motion.div className="h-48 rounded-xl overflow-hidden shadow-lg" whileHover={{ scale: 1.05 }}>
                <Image src={`/assets/images/zenport${i}.jpeg`} alt="Zen Cart Development"
                  width={600} height={400} className="w-full h-full object-cover" />
              </motion.div>
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
              <motion.div key={i}
                className="p-6 bg-gradient-to-br from-green-50 via-emerald-50 to-white rounded-xl shadow text-center"
                initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:i*0.1}}>
                <CheckCircle2 className="mx-auto w-8 h-8 text-green-600"/>
                <h4 className="mt-4 font-semibold">{step}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-gradient-to-r from-green-50 via-emerald-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose Us As A Zen Cart Development Company?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Proven Experience","Cost-Effective Solutions","End-to-End Support"].map((txt,i)=>(
              <motion.div key={i} className="p-6 bg-white rounded-xl shadow"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                {txt}
              </motion.div>
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
                <motion.div className="p-6 bg-gradient-to-br from-green-50 via-emerald-50 to-white rounded-xl shadow"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  {t}
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-16 bg-gradient-to-r from-green-50 via-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">Let’s Talk About Your Project</h2>
          <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *" className="p-3 border rounded-lg"/>
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email *" className="p-3 border rounded-lg"/>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Requirements *" className="md:col-span-2 p-3 border rounded-lg h-32"></textarea>
            <button type="submit" className="md:col-span-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-lg font-semibold hover:opacity-90">
              Submit
            </button>
            {status && <p className="text-green-600 text-sm">{status}</p>}
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-white rounded-2xl shadow divide-y divide-gray-200">
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
      <section className="py-16 bg-gradient-to-r from-green-50 via-emerald-50 to-white">
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
