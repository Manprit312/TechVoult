"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  ShoppingCart,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import FAQAccordion from "@/components/Faq";

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

  return <motion.span ref={ref} className={className}
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
    {value}{suffix}
  </motion.span>;
}

/* ---------------- Page ---------------- */
export default function Shift4ShopPage() {
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

  const portfolioSlides = [
    {
      title: "The Snus Life",
      desc: "Premium snus products tailored for enthusiasts worldwide.",
      features: ["Wide Selection", "User-Friendly Design", "High-Quality Imagery", "Customer Reviews"],
      img: "/assets/images/thesnuslife.png",
    },
    {
      title: "Matchbox",
      desc: "An e-commerce platform specializing in fashion and lifestyle products with curated collections.",
      features: ["Curated Collections", "User Experience", "Personalized Recommendations"],
      img: "/assets/images/matchbox.jpeg",
    },
    {
      title: "Resanskrit",
      desc: "Dedicated to preserving and promoting Sanskrit with courses, texts, and forums.",
      features: ["Educational Resources", "Interactive Tools", "Community Engagement"],
      img: "/assets/images/resanskrit.jpeg",
    },
    {
      title: "Smart Link Home",
      desc: "Smart home automation products ensuring comfort and security.",
      features: ["Innovative Solutions", "Easy Integration", "Customer Support"],
      img: "/assets/images/smartlinkhome.jpeg",
    },
    {
      title: "ShipForShop",
      desc: "Logistics and shipping solutions integrated with eCommerce.",
      features: ["Seamless Integration", "Real-Time Tracking", "Multi-Carrier Support"],
      img: "/assets/images/shipforshop.jpeg",
    },
  ];

  return (
    <main className="bg-gradient-to-br from-blue-50 via-cyan-50 to-white text-gray-800 mt-16">

      {/* HERO */}
      <motion.section className="py-20 px-6 bg-gradient-to-r from-blue-100 via-cyan-100 to-white"
        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-blue-900">Shift4Shop Development Services</h1>
            <p className="mt-4 text-gray-700">
              Build powerful, scalable, and secure Shift4Shop solutions that deliver unmatched online shopping experiences.
            </p>
            <motion.div className="mt-6 h-52 rounded-xl overflow-hidden shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
              <Image src="/assets/images/shipforshop.jpeg" alt="Shift4Shop Development"
                width={600} height={400} className="w-full h-full object-cover" />
            </motion.div>
          </div>
          <motion.form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-xl space-y-4"
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }} viewport={{ once: true }}>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *"
              className="w-full p-3 border rounded-lg" required />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email *"
              className="w-full p-3 border rounded-lg" required />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your requirements *"
              rows={4} className="w-full p-3 border rounded-lg" required></textarea>
            <motion.button type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:opacity-95"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              Submit
            </motion.button>
            {status && <p className="text-sm text-green-700">{status}</p>}
          </motion.form>
        </div>
      </motion.section>

      {/* OVERVIEW */}
      <motion.section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }} viewport={{ once: true }}>
        <motion.div className="h-56 rounded-xl overflow-hidden shadow-lg" whileHover={{ scale: 1.05 }}>
          <Image src="/assets/images/shipforshopserv.webp" alt="Shift4Shop Overview"
            width={600} height={400} className="w-full h-full object-cover" />
        </motion.div>
        <div>
          <h2 className="text-2xl font-bold">Shift4Shop Development Services Overview</h2>
          <p className="mt-4 text-gray-700">
            Shift4Shop provides robust eCommerce solutions with extensive features. 
            Our team specializes in creating custom Shift4Shop stores with integrations, extensions, and support.
          </p>
        </div>
      </motion.section>

      {/* SERVICES */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Our Shift4Shop Development Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Custom Store Development",
              "Plugin & Module Development",
              "Theme Design & Integration",
              "Migration Services",
              "Performance Optimization",
              "Maintenance & Support",
            ].map((service, i) => (
              <motion.div key={i} className="p-6 bg-gradient-to-br from-blue-50 via-cyan-50 to-white rounded-xl shadow"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <ShoppingCart className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-semibold">{service}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SLIDER */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Shift4Shop Development Portfolio</h2>
        <Swiper slidesPerView={1.2} spaceBetween={20} breakpoints={{768:{slidesPerView:2},1024:{slidesPerView:3}}}>
          {portfolioSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <motion.div className="p-6 bg-white rounded-xl shadow flex flex-col"
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="h-40 rounded-xl overflow-hidden mb-4">
                  <Image src={slide.img} alt={slide.title} width={600} height={400} className="w-full h-full object-cover"/>
                </div>
                <h3 className="text-xl font-bold">{slide.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{slide.desc}</p>
                <h5 className="mt-3 font-semibold">Features:</h5>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {slide.features.map((f, idx) => <li key={idx}>{f}</li>)}
                </ul>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* COUNTERS */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-cyan-50 to-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div><Counter end={1} suffix="+" className="text-4xl font-bold text-blue-600" /><p className="mt-2">Year Experience</p></div>
          <div><Counter end={4} suffix="+" className="text-4xl font-bold text-blue-600" /><p className="mt-2">Industries Served</p></div>
          <div><Counter end={6} suffix="+" className="text-4xl font-bold text-blue-600" /><p className="mt-2">Projects Completed</p></div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Our Shift4Shop Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Consultation","Custom Development","Testing","Launch"].map((step, i)=>(
              <motion.div key={i} className="p-6 bg-gradient-to-br from-blue-50 via-cyan-50 to-white rounded-xl shadow text-center"
                initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:i*0.1}}>
                <CheckCircle2 className="mx-auto w-8 h-8 text-blue-600"/>
                <h4 className="mt-4 font-semibold">{step}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-gradient-to-r from-cyan-50 via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Testimonials</h2>
          <Swiper slidesPerView={1} loop>
            {[
              "Shift4Shop team delivered exactly what we needed.",
              "Smooth development and migration experience.",
              "Boosted our online sales with their expertise.",
            ].map((t,i)=>(
              <SwiperSlide key={i}>
                <motion.div className="p-6 bg-white rounded-xl shadow"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  {t}
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">Let’s Talk About Your Project</h2>
          <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *" className="p-3 border rounded-lg"/>
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email *" className="p-3 border rounded-lg"/>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Requirements *" className="md:col-span-2 p-3 border rounded-lg h-32"></textarea>
            <button type="submit" className="md:col-span-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:opacity-90">
              Submit
            </button>
            {status && <p className="text-green-600 text-sm">{status}</p>}
          </form>
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-cyan-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-xl font-bold mb-6">Awards & Recognition</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {[1,2,3,4,5,6].map((n)=>(<div key={n} className="h-16 bg-white rounded-xl shadow flex items-center justify-center">[ Award {n} ]</div>))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion className="mb-10"/>
    </main>
  );
}
