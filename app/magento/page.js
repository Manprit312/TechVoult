"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";

/* Lucide icons */
import {
  Code2,
  Database,
  MonitorSmartphone,
  Boxes,
  ShoppingCart,
  Users,
  CheckCircle2,
  Trophy,
  Briefcase,
} from "lucide-react";

/* ---------------- Counter (animates when visible) ---------------- */
function Counter({ end = 0, duration = 1200, suffix = "+", className = "" }) {
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

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          animate();
        }
      });
    }, { threshold: 0.3 });

    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {value.toLocaleString()}
      {suffix}
    </motion.span>
  );
}

/* ---------------- Stats Section ---------------- */
function StatsSection() {
  const stats = [
    { icon: <Trophy className="w-6 h-6" />, value: 100, label: "Projects Delivered" },
    { icon: <Briefcase className="w-6 h-6" />, value: 500, label: "Happy Clients" },
    { icon: <Users className="w-6 h-6" />, value: 70, label: "Magento Experts" },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="rounded-2xl shadow-sm bg-gradient-to-br from-orange-50 via-gray-50 to-white p-6 flex items-center gap-4"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className="rounded-xl bg-white p-3 text-orange-600 shadow-sm">
                {s.icon}
              </div>
              <div>
                <Counter
                  end={s.value}
                  suffix="+"
                  className="text-3xl font-extrabold text-gray-900"
                />
                <p className="text-sm text-gray-600 mt-1">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */
export default function MagentoPage() {
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

  const features = [
    {
      title: "Customizable Storefront",
      desc: "Tailored themes and designs for your brand.",
      icon: <MonitorSmartphone className="w-8 h-8 text-orange-600" />,
    },
    {
      title: "Magento Extensions",
      desc: "Custom modules to enhance store functionality.",
      icon: <Boxes className="w-8 h-8 text-gray-700" />,
    },
    {
      title: "UI/UX Enhancement",
      desc: "Improve user experience and conversions.",
      icon: <Users className="w-8 h-8 text-black" />,
    },
  ];

  const techStack = [
    { name: "PHP", icon: <Code2 className="w-8 h-8 text-orange-600" /> },
    { name: "JavaScript", icon: <Code2 className="w-8 h-8 text-yellow-500" /> },
    { name: "React", icon: <MonitorSmartphone className="w-8 h-8 text-blue-500" /> },
    { name: "MySQL", icon: <Database className="w-8 h-8 text-green-600" /> },
    { name: "eCommerce", icon: <ShoppingCart className="w-8 h-8 text-pink-500" /> },
  ];

  const process = [
    { step: "1. Consultation", desc: "Understanding client needs & goals." },
    { step: "2. Development", desc: "Building Magento store with custom features." },
    { step: "3. QA & Testing", desc: "Ensure bug-free and smooth performance." },
    { step: "4. Deployment", desc: "Launch your Magento store successfully." },
  ];

  return (
    <main className="bg-gradient-to-br from-orange-50 via-gray-50 to-white text-gray-800 mt-18">
      {/* HERO */}
      <motion.section
        className="py-20 px-6 bg-gradient-to-r from-orange-100 via-gray-100 to-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900">
              Magento Development Services
            </h1>
            <p className="mt-4 text-gray-700">
              Build scalable, secure, and high-performing Magento stores with our expert developers.
            </p>
            <motion.div
              className="mt-6 h-52 rounded-xl overflow-hidden shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Image
                src="/assets/images/magentohero.jpeg"
                alt="Magento Development"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-xl space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *"
              className="w-full p-3 border rounded-lg" required />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email *"
              className="w-full p-3 border rounded-lg" required />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your requirements *"
              rows={4} className="w-full p-3 border rounded-lg" required />
            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-lg font-semibold hover:opacity-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
            {status && <p className="text-sm text-green-700">{status}</p>}
          </motion.form>
        </div>
      </motion.section>

      {/* Stats */}
      <StatsSection />

      {/* WHY MAGENTO */}
      <motion.section
        className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="h-56 rounded-xl overflow-hidden shadow-lg">
          <Image src="/assets/images/magentoexpert.png" alt="Magento Expertise"
            width={600} height={400} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Magento Development Expertise</h3>
          <p className="mt-4 text-gray-700">
            Our Magento team provides complete eCommerce solutions from
            development, migration, extension building, to support & maintenance.
          </p>
        </div>
      </motion.section>

      {/* FEATURES */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Features of Magento Development</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="p-6 bg-gradient-to-br from-orange-50 via-gray-50 to-white rounded-xl shadow text-center"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              >
                <div className="mx-auto">{f.icon}</div>
                <h4 className="mt-4 font-semibold">{f.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* TECH STACK */}
      <motion.section
        className="py-16 bg-gradient-to-r from-orange-50 via-gray-50 to-white"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {techStack.map((t, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow"
                whileHover={{ scale: 1.05 }}
              >
                {t.icon}
                <p className="mt-2 text-sm font-medium">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PROCESS */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Our Magento Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-xl bg-gradient-to-br from-orange-50 via-gray-50 to-white shadow text-center"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              >
                <CheckCircle2 className="mx-auto w-8 h-8 text-orange-600" />
                <h4 className="mt-4 font-semibold">{p.step}</h4>
                <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-gradient-to-r from-orange-50 via-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Testimonials</h2>
          <Swiper slidesPerView={1} loop>
            {[
              "Excellent Magento solutions — our sales grew 45%.",
              "The migration was smooth and error-free.",
              "Their support team is available 24/7, truly reliable.",
            ].map((txt, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="italic">"{txt}"</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* FAQ */}
      <motion.section
        className="py-16 max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="bg-white rounded-2xl shadow divide-y">
          {[
            { q: "Why choose Magento for eCommerce?", a: "Magento is scalable, flexible, and supports large online businesses." },
            { q: "Do you offer Magento migration?", a: "Yes, we migrate from WooCommerce, Shopify, or custom platforms." },
            { q: "Can you build Magento extensions?", a: "Yes, we specialize in building custom Magento modules." },
            { q: "Do you provide post-launch support?", a: "Yes, we offer ongoing support, updates, and maintenance." },
          ].map((f, i) => (
            <details key={i} className="p-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
