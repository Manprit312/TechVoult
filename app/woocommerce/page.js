"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShoppingCart,
  Code2,
  MonitorSmartphone,
  Globe2,
  Users,
  Trophy,
  Briefcase,
  Rocket,
  PanelsTopLeft,
} from "lucide-react";

/* ---------------- Number Counter (on view) ---------------- */
function Counter({ end = 0, duration = 1500, suffix = "+", className = "" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      const start = performance.now();
      const from = 0;
      const to = end;

      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const current = Math.floor(from + (to - from) * progress);
        setValue(current);
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
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
      {value.toLocaleString()}
      {suffix}
    </motion.span>
  );
}

/* ---------------- Stats band ---------------- */
function StatsBand() {
  const stats = [
    { icon: <Trophy className="w-6 h-6" />, value: 500, label: "Projects Delivered" }, // PASTE EXACT NUMBERS/TEXT IF DIFFERENT
    { icon: <Briefcase className="w-6 h-6" />, value: 100, label: "Happy Clients" },
    { icon: <Users className="w-6 h-6" />, value: 50, label: "WooCommerce Experts" },
  ];
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 shadow p-6 flex items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className="rounded-xl bg-white p-3 text-indigo-600 shadow-sm">{s.icon}</div>
            <div>
              <Counter end={s.value} suffix="+" className="text-3xl font-extrabold text-gray-900" />
              <p className="text-sm text-gray-600 mt-1">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Simple section wrappers ---------------- */
const Section = ({ children, className = "" }) => (
  <section className={`py-16 ${className}`}>{children}</section>
);
const Container = ({ children, className = "" }) => (
  <div className={`max-w-6xl mx-auto px-6 ${className}`}>{children}</div>
);

/* ---------------- Page ---------------- */
export default function WooCommercePage() {
  /* Form state */
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    // TODO: wire to API route
    setTimeout(() => {
      setStatus("Submitted ✅");
      setForm({ name: "", email: "", message: "" });
    }, 900);
  };

  /* Feature/service cards (headings from layout; replace desc with exact copy) */
  const features = [
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-indigo-600" />,
      title: "Custom Store Design",
      desc:
        "PASTE EXACT TEXT: tailored WooCommerce storefront design that reflects your brand and boosts conversions.",
    },
    {
      icon: <Code2 className="w-8 h-8 text-purple-600" />,
      title: "Plugin Development",
      desc: "PASTE EXACT TEXT: custom WooCommerce plugins for unique functionality.",
    },
    {
      icon: <Globe2 className="w-8 h-8 text-pink-600" />,
      title: "SEO Optimization",
      desc: "PASTE EXACT TEXT: technical SEO & performance tuning for Woo stores.",
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-emerald-600" />,
      title: "Payment & Shipping Setup",
      desc: "PASTE EXACT TEXT.",
    },
    {
      icon: <PanelsTopLeft className="w-8 h-8 text-sky-600" />,
      title: "Theme Customization",
      desc: "PASTE EXACT TEXT.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-500" />,
      title: "Speed Optimization",
      desc: "PASTE EXACT TEXT.",
    },
  ];

  const process = [
    { step: "1. Consultation", desc: "PASTE EXACT TEXT from 'Our WooCommerce Development Process'." },
    { step: "2. Development", desc: "PASTE EXACT TEXT." },
    { step: "3. QA Testing", desc: "PASTE EXACT TEXT." },
    { step: "4. Deployment", desc: "PASTE EXACT TEXT." },
  ];

  /* Testimonials: replace with exact quotes/names */
  const testimonials = [
    { quote: "PASTE EXACT TESTIMONIAL 1", name: "Client Name 1" },
    { quote: "PASTE EXACT TESTIMONIAL 2", name: "Client Name 2" },
    { quote: "PASTE EXACT TESTIMONIAL 3", name: "Client Name 3" },
  ];

  return (
    <main className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800 mt-16">
      {/* ================= HERO ================= */}
      <motion.section
        className="py-20 px-6 bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Container className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-extrabold">
              WooCommerce Development Services
            </h1>
            <p className="mt-4 text-gray-700">
              {/* PASTE EXACT HERO SUBTEXT */}
              We build fast, scalable, and secure WooCommerce stores tailored to your business.
            </p>

            {/* HERO IMAGE SLOT */}
            <motion.div
              className="mt-6 h-52 bg-gray-200 rounded-xl border flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              [ Hero Image ]
            </motion.div>
          </div>

          {/* HERO CONTACT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-xl space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name *"
              required
              className="w-full p-3 border rounded-lg"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email *"
              required
              className="w-full p-3 border rounded-lg"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your requirements *"
              rows={4}
              required
              className="w-full p-3 border rounded-lg"
            />
            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-95"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Submit
            </motion.button>
            {status && <p className="text-sm text-green-700">{status}</p>}
          </motion.form>
        </Container>
      </motion.section>

      {/* ================= TOP STAT BAND ================= */}
      <StatsBand />

      {/* ================= INTRO (text + image) ================= */}
      <Section className="bg-white">
        <Container className="grid md:grid-cols-2 gap-10 items-center">
          {/* IMAGE SLOT */}
          <div className="h-56 bg-gray-200 rounded-xl border flex items-center justify-center">
            [ Intro Image Left ]
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              {/* PASTE EXACT SECTION TITLE */}
              Our WooCommerce Development Company Introduction
            </h3>
            <p className="mt-4 text-gray-700">
              {/* PASTE EXACT PARAGRAPH */}
              We offer end-to-end WooCommerce development services including store setup, theme customization, plugin development, migration, and ongoing maintenance.
            </p>
          </div>
        </Container>
      </Section>

      {/* ================= SERVICES / OFFERINGS (text + image) ================= */}
      <Section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <Container className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold">
              {/* PASTE EXACT SECTION TITLE */}
              Our WooCommerce Development Services
            </h3>
            <p className="mt-4 text-gray-700">
              {/* PASTE EXACT DESCRIPTION */}
              Custom theme development, plugin creation, payment/shipping integration, performance tuning, analytics, and SEO.
            </p>
            <a href="#contact" className="inline-block mt-6 px-5 py-2 rounded-lg text-white bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold">
              Get a Free Quote
            </a>
          </div>
          {/* IMAGE SLOT */}
          <div className="h-56 bg-gray-200 rounded-xl border flex items-center justify-center">
            [ Services Image Right ]
          </div>
        </Container>
      </Section>

      {/* ================= BANNER CTA ================= */}
      <Section className="bg-white">
        <Container className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h4 className="text-xl font-semibold">
              {/* PASTE EXACT BANNER TEXT */}
              Elevate WooCommerce With Experts
            </h4>
            <p className="text-gray-600 mt-2">
              {/* PASTE EXACT SUBTEXT */}
              Get scalable solutions engineered for growth, UX, and performance.
            </p>
          </div>
          <a href="#contact" className="inline-block text-center px-5 py-3 rounded-lg text-white bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold">
            Talk to an Expert
          </a>
        </Container>
      </Section>

      {/* ================= FEATURE GRID (6 cards) ================= */}
      <Section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-10">
            {/* PASTE EXACT SECTION TITLE */}
            Features of Our WooCommerce Development
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white rounded-xl shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {f.icon}
                <h4 className="mt-4 font-semibold">{f.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ================= MID COUNTER (e.g., 1+, 17+, 16+) ================= */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <Counter end={1} suffix="+" className="text-4xl font-extrabold text-gray-900" />
              <p className="text-sm text-gray-600 mt-1">Years Experience (PASTE EXACT)</p>
            </div>
            <div>
              <Counter end={17} suffix="+" className="text-4xl font-extrabold text-gray-900" />
              <p className="text-sm text-gray-600 mt-1">Industries Served (PASTE EXACT)</p>
            </div>
            <div>
              <Counter end={16} suffix="+" className="text-4xl font-extrabold text-gray-900" />
              <p className="text-sm text-gray-600 mt-1">Core Experts (PASTE EXACT)</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ================= PORTFOLIO CAROUSEL ================= */}
      <Section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Clients’ WooCommerce Portfolio
          </h2>
          <Swiper slidesPerView={1} loop>
            {[
              "[ Portfolio Image / Slide 1 ]",
              "[ Portfolio Image / Slide 2 ]",
              "[ Portfolio Image / Slide 3 ]",
            ].map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="h-60 bg-white border rounded-xl flex items-center justify-center shadow">
                  {slide}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Section>

      {/* ================= WHY CHOOSE US ================= */}
      <Section className="bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose Us As Your WooCommerce Development Company?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                desc: "PASTE EXACT TEXT.",
              },
              {
                title: "Transparent Process",
                desc: "PASTE EXACT TEXT.",
              },
              {
                title: "Ongoing Support",
                desc: "PASTE EXACT TEXT.",
              },
            ].map((card, i) => (
              <div key={i} className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 shadow">
                <CheckCircle2 className="w-7 h-7 text-indigo-600" />
                <h4 className="mt-3 font-semibold">{card.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{card.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ================= OTHER SERVICES (two sliders in screenshot area) ================= */}
      <Section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Other WooCommerce Services
          </h2>
          <Swiper slidesPerView={1.1} spaceBetween={16} breakpoints={{ 768: { slidesPerView: 2.2 }, 1024: { slidesPerView: 3 } }}>
            {[1, 2, 3, 4].map((idx) => (
              <SwiperSlide key={idx}>
                <div className="p-6 bg-white rounded-xl shadow h-44 flex items-center justify-center">
                  [ Service Card #{idx} Image / Content ]
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Section>

      {/* ================= REGIONAL CENTERS (form block) ================= */}
      <Section id="contact" className="bg-white">
        <Container className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-3">
              Regional WooCommerce Development Centers
            </h3>
            <p className="text-gray-700">
              {/* PASTE EXACT TEXT */}
              Connect with our global delivery centers for dedicated resources and support.
            </p>
          </div>
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 rounded-2xl shadow space-y-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *" required className="w-full p-3 border rounded-lg bg-white" />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email *" required className="w-full p-3 border rounded-lg bg-white" />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your requirements *" rows={4} required className="w-full p-3 border rounded-lg bg-white" />
            <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-95">
              Submit
            </button>
            {status && <p className="text-sm text-green-700">{status}</p>}
          </form>
        </Container>
      </Section>

      {/* ================= PROCESS ================= */}
      <Section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-10">Our WooCommerce Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white rounded-xl shadow text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <CheckCircle2 className="mx-auto w-8 h-8 text-indigo-600" />
                <h4 className="mt-4 font-semibold">{p.step}</h4>
                <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ================= TESTIMONIALS ================= */}
      <Section className="bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
          <Swiper slidesPerView={1} loop>
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="italic">“{t.quote}”</p>
                  <p className="mt-4 text-sm font-semibold text-gray-700">{t.name}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Section>

      {/* ================= FINAL CTA BANNER ================= */}
      <Section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <Container className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-extrabold">Transform Your Store With WooCommerce Experts</h3>
            <p className="opacity-90 mt-1">
              {/* PASTE EXACT LINE FROM BANNER */}
              Scalable solutions. Faster performance. Better conversions.
            </p>
          </div>
          <a href="#contact" className="inline-block text-center px-5 py-3 rounded-lg font-semibold bg-white/10 backdrop-blur hover:bg-white/20">
            Get Started
          </a>
        </Container>
      </Section>

      {/* ================= FAQs ================= */}
      <Section className="bg-white">
        <Container className="max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl shadow divide-y divide-gray-200">
            {[
              { q: "Why choose WooCommerce?", a: "PASTE EXACT ANSWER" },
              { q: "Do you offer migration?", a: "PASTE EXACT ANSWER" },
              { q: "Can you build custom plugins?", a: "PASTE EXACT ANSWER" },
              { q: "Do you provide post-launch support?", a: "PASTE EXACT ANSWER" },
            ].map((f, i) => (
              <details key={i} className="p-5">
                <summary className="cursor-pointer font-medium">{f.q}</summary>
                <p className="mt-2 text-sm text-gray-700">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* ================= AWARDS STRIP ================= */}
      <Section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <Container>
          <h3 className="text-center text-xl font-semibold mb-6">Awards & Recognition</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="h-16 bg-white rounded-xl shadow flex items-center justify-center text-sm text-gray-500">
                [ Award {n} ]
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
