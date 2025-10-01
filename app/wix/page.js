"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Globe2,
  Code2,
  MonitorSmartphone,
  Brush,
  Layout,
  Wrench,
  CheckCircle2,
  Server,
  Award,
  Users,
  ShoppingCart,
  FolderOpen,
  MessageSquareMore,
  Rocket,
  Database,
} from "lucide-react";

/* ---------------- Counter ---------------- */
function Counter({ end = 0, duration = 1400, suffix = "+", className = "" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        setValue(Math.floor(end * p));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting && !started.current) {
            started.current = true;
            animate();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}

/* ---------------- Page ---------------- */
export default function WixPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all required fields.");
      return;
    }
    setStatus("Submitting...");
    setTimeout(() => {
      setStatus("Submitted ✅ We’ll get back to you shortly.");
      setForm({ name: "", email: "", message: "" });
    }, 900);
  };

  /* ---------------- Content (replace strings with exact copy if needed) ---------------- */
  const overview = {
    title: "Wix Website Development Services",
    // TODO: paste exact screenshot text
    desc:
      "We design, develop, and optimize fast, conversion-ready Wix websites. From business sites and portfolios to eCommerce stores — we build scalable, secure and easy-to-manage experiences on Wix.",
  };

  const services = [
    { icon: <Layout />, title: "Custom Wix Website Design" },
    { icon: <Brush />, title: "Theme Setup & Branding" },
    { icon: <Code2 />, title: "Velo (Wix Code) Development" },
    { icon: <ShoppingCart />, title: "Wix eCommerce Store Setup" },
  ];

  const benefitsList = [
    // TODO: paste exact screenshot points
    "Clean UX focused on conversions & accessibility",
    "Mobile-first responsive layouts",
    "SEO-friendly structure and content setup",
    "Fast loads, image/CDN optimization",
  ];

  const counters = [
    { value: 150, label: "Projects", suffix: "+" },
    { value: 70, label: "Industries", suffix: "+" },
    { value: 200, label: "Clients", suffix: "+" },
  ];

  const portfolio = [
    // Taken from your earlier slider content
    {
      title: "The Snus Life",
      text:
        "E-commerce platform with curated products, sleek UX, and personalized recommendations.",
    },
    {
      title: "Matchbox",
      text:
        "Modern lifestyle store: curated collections, clean browsing, and tailored product suggestions.",
    },
    {
      title: "Resanskrit",
      text:
        "Community & education portal: courses, dictionaries, and interactive tools for Sanskrit.",
    },
    {
      title: "Smart Link Home",
      text:
        "Showcase for smart home devices with easy integration and strong customer support flows.",
    },
  ];

  const otherServices = [
    {
      title: "Wix SEO Setup",
      desc: "Structured content, metadata, redirects, and indexing optimization.",
    },
    {
      title: "Wix Migrations",
      desc: "Seamless content migration from other platforms without downtime.",
    },
    {
      title: "Integrations & Automation",
      desc: "CRM, email, analytics, forms, and automation using Velo & webhooks.",
    },
  ];

  const process = [
    {
      step: "1. Discovery",
      desc: "Goals, brand, content map, and wireframes for clear scope.",
    },
    {
      step: "2. Design",
      desc: "Visual system, responsive layouts, and component library.",
    },
    {
      step: "3. Development",
      desc: "Pages, Velo coding, dynamic data, and integrations.",
    },
    {
      step: "4. QA & Launch",
      desc: "Performance, accessibility, SEO checks, and go-live.",
    },
  ];

  const caseStudies = [
    {
      title: "Retail Brand Launch",
      result:
        "Storefront optimized for mobile; +35% conversion uplift after week 4.",
    },
    {
      title: "Learning Portal",
      result:
        "Content structure + UX revamp improved session time by 41%.",
    },
    {
      title: "Consulting Website",
      result:
        "Lead form optimization lifted qualified inquiries by 52%.",
    },
  ];

  const whyChoose = [
    "Transparent communication & agile delivery",
    "Wix + Velo expertise for complex logic",
    "Post-launch support and maintenance",
  ];

  const testimonials = [
    {
      name: "Nova Tech",
      role: "Founder",
      quote:
        "Their Wix + Velo build was rock solid. We launched faster than planned.",
    },
    {
      name: "BlueLeaf",
      role: "Marketing Lead",
      quote:
        "Great design and SEO setup — organic traffic picked up within weeks.",
    },
    {
      name: "Asterix",
      role: "Operations",
      quote:
        "Smooth migration to Wix, no downtime, and our team can manage content easily.",
    },
  ];

  const faqs = [
    {
      q: "Do you build custom Wix sites with Velo?",
      a:
        "Yes. We implement custom logic, dynamic content, and integrations using Velo (Wix Code).",
    },
    {
      q: "Can you migrate my site to Wix?",
      a:
        "Absolutely — we plan redirects, content mapping, and launch without downtime.",
    },
    {
      q: "Do you provide maintenance & support?",
      a:
        "Yes. We offer ongoing updates, performance checks, and SEO/analytics assistance.",
    },
  ];

  /* ---------------- UI ---------------- */
  return (
    <main className="text-gray-800 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 mt-16">
      {/* HERO */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-extrabold">Wix Development Services</h1>
            <p className="mt-3 text-gray-700">
              Custom Wix websites, Velo integrations, and eCommerce — fast to
              launch, easy to manage, optimized to convert.
            </p>
            <div className="mt-6 h-48 bg-white/60 border rounded-xl grid place-items-center text-sm">
              [ Hero Image ]
            </div>
          </motion.div>

          {/* Lead Form */}
          <motion.form
            onSubmit={onSubmit}
            className="bg-white p-6 rounded-2xl shadow-xl space-y-4"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Full Name *"
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="Email *"
              className="w-full p-3 border rounded-lg"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows={4}
              placeholder="Tell us about your project *"
              className="w-full p-3 border rounded-lg"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 py-3 text-white font-semibold hover:opacity-95"
            >
              Get Free Consultation
            </button>
            {status && (
              <p className="text-sm text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-lg px-3 py-2">
                {status}
              </p>
            )}
          </motion.form>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 px-6 items-center">
          <div className="h-48 bg-white border rounded-xl grid place-items-center">
            [ Overview Illustration ]
          </div>
          <div>
            <h2 className="text-3xl font-bold">{overview.title}</h2>
            <p className="mt-4 text-gray-700">{overview.desc}</p>
          </div>
        </div>
      </section>

      {/* SERVICES OFFERED */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-bold text-center">
            Our Wix Development Services Include
          </h3>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className="rounded-xl p-6 shadow bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white text-indigo-600 shadow">
                  {s.icon}
                </div>
                <h4 className="mt-4 font-semibold">{s.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-bold text-center">
            Benefits of Our Wix Development Company
          </h3>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {benefitsList.map((b, i) => (
              <div
                key={b}
                className="rounded-xl p-6 bg-white shadow flex items-start gap-3"
              >
                <CheckCircle2 className="h-6 w-6 text-indigo-600 shrink-0" />
                <p className="text-sm text-gray-700">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 grid grid-cols-3 gap-4 text-center">
          {counters.map((c) => (
            <div
              key={c.label}
              className="rounded-xl p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 shadow"
            >
              <Counter
                end={c.value}
                suffix={c.suffix}
                className="text-3xl font-extrabold text-indigo-700"
              />
              <p className="text-xs mt-1">{c.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO SLIDER */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-bold text-center">
            Our Wix Development Portfolio
          </h3>
          <Swiper
            slidesPerView={1.15}
            spaceBetween={16}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="mt-10"
          >
            {portfolio.map((p, i) => (
              <SwiperSlide key={i}>
                <div className="rounded-2xl p-6 bg-white shadow h-full flex flex-col">
                  <div className="h-32 bg-gray-100 border rounded-xl grid place-items-center text-sm">
                    [ Portfolio Image ]
                  </div>
                  <h4 className="mt-4 font-semibold">{p.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{p.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* OTHER WIX SERVICES */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-bold text-center">
            Our Other Wix Development Services
          </h3>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {otherServices.map((o, i) => (
              <div
                key={o.title}
                className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 shadow"
              >
                <Wrench className="h-7 w-7 text-purple-600" />
                <h4 className="mt-3 font-semibold">{o.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-bold text-center">
            Our Wix Development Process
          </h3>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {process.map((w, i) => (
              <div key={w.step} className="rounded-2xl p-6 bg-white shadow text-center">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                  {i + 1}
                </div>
                <h4 className="mt-4 font-semibold">{w.step}</h4>
                <p className="text-sm text-gray-600 mt-1">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES SLIDER */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-bold text-center">
            Case Studies on Wix Development Projects
          </h3>
          <Swiper
            slidesPerView={1.15}
            spaceBetween={16}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="mt-10"
          >
            {caseStudies.map((c, i) => (
              <SwiperSlide key={i}>
                <div className="rounded-2xl p-6 bg-white shadow h-full flex flex-col">
                  <div className="h-32 bg-gray-100 border rounded-xl grid place-items-center text-sm">
                    [ Case Study Image ]
                  </div>
                  <h4 className="mt-4 font-semibold">{c.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{c.result}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold">Why Choose Us For Wix Development Services?</h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-700">
              {whyChoose.map((w, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-indigo-600" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="rounded-xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 shadow">
              <Counter end={10} className="text-3xl font-extrabold text-indigo-700" />
              <p className="text-xs mt-1">Years</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 shadow">
              <Counter end={200} className="text-3xl font-extrabold text-indigo-700" />
              <p className="text-xs mt-1">Projects</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 shadow">
              <Counter end={100} className="text-3xl font-extrabold text-indigo-700" />
              <p className="text-xs mt-1">Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-bold text-center">Testimonials</h3>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 shadow"
              >
                <MessageSquareMore className="h-6 w-6 text-indigo-600" />
                <p className="mt-3 text-sm italic">“{t.quote}”</p>
                <p className="mt-3 font-semibold">{t.name}</p>
                <p className="text-xs text-gray-600">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h3 className="text-3xl font-bold text-center mb-6">
            Let’s Talk About Your Project
          </h3>
          <form
            onSubmit={onSubmit}
            className="grid gap-4 md:grid-cols-2 bg-white p-6 rounded-2xl shadow"
          >
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Full Name *"
              className="p-3 border rounded-lg"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="Email *"
              className="p-3 border rounded-lg"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Your Requirements *"
              rows={5}
              className="md:col-span-2 p-3 border rounded-lg"
            />
            <button
              className="md:col-span-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 py-3 text-white font-semibold hover:opacity-95"
              type="submit"
            >
              Submit
            </button>
            {status && (
              <p className="md:col-span-2 text-sm text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-lg px-3 py-2">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <h3 className="text-3xl font-bold text-center mb-6">
            Frequently Asked Questions
          </h3>
          <div className="divide-y rounded-2xl  bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 divide-gray-200 shadow">
            {faqs.map((f, i) => (
              <details key={i} className="p-4">
                <summary className="cursor-pointer font-medium">{f.q}</summary>
                <p className="mt-2 text-sm text-gray-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h3 className="text-3xl font-bold mb-8">Awards & Recognition</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="h-16 bg-white rounded-xl shadow grid place-items-center text-xs"
              >
                <Award className="h-5 w-5 text-indigo-600" />
                <span className="mt-1">Badge {n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
