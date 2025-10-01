"use client";

import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Code2,
  MonitorSmartphone,
  Users,
  Trophy,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

/* ---------------- Number Counter ---------------- */
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

  return <span ref={ref} className={className}>{value}{suffix}</span>;
}

/* ---------------- Page ---------------- */
export default function BigCommercePage() {
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
      <motion.section className="py-20 px-6 bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100"
        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-extrabold">BigCommerce Development Services</h1>
            <p className="mt-4 text-gray-700">
              Empowering brands with scalable, flexible, and feature-rich eCommerce stores on BigCommerce.
            </p>
            <div className="mt-6 h-52 bg-gray-200 rounded-xl flex items-center justify-center">
              [ Hero Image ]
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-xl space-y-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *"
              required className="w-full p-3 border rounded-lg" />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email *"
              required className="w-full p-3 border rounded-lg" />
            <textarea name="message" value={form.message} onChange={handleChange}
              placeholder="Your requirements *" rows={4} required className="w-full p-3 border rounded-lg"></textarea>
            <button type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-95">
              Submit
            </button>
            {status && <p className="text-sm text-green-700">{status}</p>}
          </form>
        </div>
      </motion.section>

      {/* OVERVIEW */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="h-56 bg-gray-200 rounded-xl flex items-center justify-center">[ Overview Image ]</div>
        <div>
          <h2 className="text-2xl font-bold">BigCommerce Development Overview</h2>
          <p className="mt-4 text-gray-700">
            BigCommerce is a leading eCommerce platform that provides robust solutions for businesses of all sizes...
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold">Our BigCommerce Development Services</h2>
            <p className="mt-4 text-gray-700">
              Theme customization, plugin development, store migration, and performance optimization.
            </p>
          </div>
          <div className="h-56 bg-gray-200 rounded-xl flex items-center justify-center">[ Services Image ]</div>
        </div>
      </section>

      {/* BOOST CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold">Boost Your Store with BigCommerce Development Services</h2>
            <p className="mt-4 text-gray-700">Enhance customer experiences and scale your business globally.</p>
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
          <div><Counter end={40} suffix="+" className="text-4xl font-bold text-indigo-600" /><p className="mt-2">Industries Served</p></div>
          <div><Counter end={150} suffix="+" className="text-4xl font-bold text-indigo-600" /><p className="mt-2">Projects Delivered</p></div>
          <div><Counter end={200} suffix="+" className="text-4xl font-bold text-indigo-600" /><p className="mt-2">Happy Clients</p></div>
        </div>
      </section>

      {/* OTHER SERVICES CAROUSEL */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Our Other BigCommerce Services</h2>
          <Swiper slidesPerView={1.2} spaceBetween={20} breakpoints={{768:{slidesPerView:2},1024:{slidesPerView:3}}}>
            {[1,2,3,4].map((i) => (
              <SwiperSlide key={i}>
                <div className="h-40 bg-white rounded-xl shadow flex items-center justify-center">[ Service {i} ]</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Our BigCommerce Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Consultation","Design & Development","Testing","Launch"].map((step, i) => (
              <motion.div key={i} className="p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow text-center"
                initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.1}}>
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
          <h2 className="text-3xl font-bold mb-10">Why Choose Us for BigCommerce Development?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Experienced Team","Proven Track Record","Commitment to Quality"].map((txt,i)=>(
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
            {["Client A: Amazing service","Client B: Reliable partner","Client C: Helped us scale"].map((t,i)=>(
              <SwiperSlide key={i}>
                <div className="p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow">
                  {t}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center">
        <h2 className="text-3xl font-bold">Explore Our Affordable BigCommerce Development Services</h2>
        <p className="mt-4">Get in touch today to discuss your project with our experts.</p>
        <a href="#contact" className="mt-6 inline-block px-6 py-3 rounded-lg bg-white/20 hover:bg-white/30 font-semibold">Contact Us</a>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-16 bg-white">
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
      <section className="py-16 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl shadow divide-y">
          {["Why choose BigCommerce?","What services do you offer?","Do you provide migration?","How fast can you launch a store?"].map((q,i)=>(
            <details key={i} className="p-4"><summary className="cursor-pointer font-medium">{q}</summary><p className="mt-2 text-sm text-gray-700">Answer placeholder here.</p></details>
          ))}
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-xl font-bold mb-6">Awards & Recognition</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {[1,2,3,4,5,6].map((n)=>(<div key={n} className="h-16 bg-white rounded-xl shadow flex items-center justify-center">[ Award {n} ]</div>))}
          </div>
        </div>
      </section>
    </main>
  );
}
