"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cpu,
  Cloud,
  Wifi,
  Database,
  ShieldCheck,
  BarChart3,
  Smartphone,
  Layers,
  UserCheck,
} from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay },
});

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
        const p = Math.min((now - start) / duration, 1);
        const current = Math.floor(from + (to - from) * p);
        setValue(current);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          animate();
        }
      });
    });
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

export default function IoTDevelopment() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 text-gray-600 mt-18">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fade()}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              IoT Development Services
            </h1>
            <p className="mt-4 text-gray-300">
              Build connected, intelligent IoT solutions that drive business
              transformation.
            </p>
            <button className="mt-6 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-blue-600 hover:opacity-90">
              Get a Free Consultation
            </button>
          </motion.div>
          <motion.div
            {...fade(0.1)}
            className="h-72 rounded-xl flex items-center justify-center overflow-hidden shadow-xl"
          >
            <Image
              src="/assets/images/iotdev.jpeg"
              alt="IoT Development"
              width={600}
              height={400}
              className="object-cover h-full w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-16 bg-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center text-white">
            Our Core IoT Development Services
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "IoT Consulting",
                icon: Cpu,
                text: "End-to-end IoT strategy & consulting services.",
              },
              {
                title: "Custom IoT Apps",
                icon: Smartphone,
                text: "Tailored IoT apps to connect devices & systems.",
              },
              {
                title: "Cloud IoT Platforms",
                icon: Cloud,
                text: "Secure & scalable IoT cloud integration.",
              },
              {
                title: "Data Analytics",
                icon: BarChart3,
                text: "Turn IoT data into actionable insights.",
              },
              {
                title: "Embedded Systems",
                icon: Layers,
                text: "Design & development for hardware integration.",
              },
              {
                title: "IoT Security",
                icon: ShieldCheck,
                text: "Secure IoT devices, networks, & applications.",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-md rounded-2xl p-6 text-center hover:bg-white/10 transition"
              >
                <s.icon className="h-8 w-8 text-indigo-400 mx-auto" />
                <h4 className="mt-3 font-semibold text-white">{s.title}</h4>
                <p className="text-sm text-gray-300">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center text-white">
            Industries We Serve With IoT Innovation
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: "Healthcare IoT Solutions", img: "/assets/images/healthcareiot.jpeg" },
              { title: "Smart Manufacturing", img:"/assets/images/manufactureiot.png" },
              { title: "Logistics & Transportation", img: "/assets/images/logisticiot.jpeg" },
            ].map((ind, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-md rounded-2xl p-6"
              >
                <div className="h-40 rounded-lg mb-3 overflow-hidden flex items-center justify-center">
                  <Image
                    src={ind.img}
                    alt={ind.title}
                    width={400}
                    height={200}
                    className="object-cover h-full w-full"
                  />
                </div>
                <h4 className="font-semibold text-white">{ind.title}</h4>
                <p className="text-sm text-gray-300">
                  {ind.title} description content from screenshot.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>     {/* TECHNOLOGIES */}
      <section className="py-16 bg-white/60">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center">
            Technologies We Use in IoT Development
          </motion.h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-700">
            {["MQTT", "AWS IoT Core", "Node.js", "Python", "ESP32", "Firebase"].map(
              (tech, i) => (
                <motion.div
                  key={i}
                  {...fade(i * 0.1)}
                  className="bg-white rounded-xl shadow-md p-6"
                >
                  {tech}
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center">
            Why Choose Us As Your IoT Development Partner?
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Proven Expertise",
                text: "10+ years in delivering IoT solutions globally.",
              },
              {
                title: "Secure Development",
                text: "Focus on IoT security and compliance.",
              },
              {
                title: "Scalable Solutions",
                text: "Solutions that grow with your business.",
              },
            ].map((c, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <Wifi className="h-7 w-7 text-indigo-600" />
                <h4 className="mt-3 font-semibold">{c.title}</h4>
                <p className="text-sm text-gray-600">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="py-16 bg-white/70">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 shadow rounded-xl">
            <Counter end={140} className="text-4xl font-bold text-indigo-600" />{" "}
            <p className="mt-2">Projects Delivered</p>
          </div>
          <div className="bg-white p-6 shadow rounded-xl">
            <Counter end={75} suffix="%" className="text-4xl font-bold text-indigo-600" />{" "}
            <p className="mt-2">Faster Time to Market</p>
          </div>
          <div className="bg-white p-6 shadow rounded-xl">
            <Counter end={70} suffix="+" className="text-4xl font-bold text-indigo-600" />{" "}
            <p className="mt-2">IoT Experts Onboard</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center">
            Success Stories from Our Happy Clients
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "David Kumar",
                role: "CEO",
                text: "IoT solution transformed our supply chain.",
              },
              {
                name: "Sarah Johnson",
                role: "CTO",
                text: "Great IoT expertise, very reliable team.",
              },
              {
                name: "John Lee",
                role: "COO",
                text: "Seamless IoT deployment across sites.",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <UserCheck className="h-7 w-7 text-indigo-600" />
                <p className="italic text-gray-700">“{t.text}”</p>
                <p className="mt-4 font-semibold">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-16 bg-white/60">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-2xl font-bold text-center">
            Let’s Talk About Your Project
          </motion.h3>
          <form className="mt-6 grid gap-4 md:grid-cols-2 bg-white p-6 rounded-2xl shadow-md">
            <input className="border px-3 py-2 rounded-lg" placeholder="Full Name *" />
            <input className="border px-3 py-2 rounded-lg" placeholder="Email *" type="email" />
            <input className="border px-3 py-2 rounded-lg" placeholder="Company" />
            <input className="border px-3 py-2 rounded-lg" placeholder="Phone" />
            <textarea className="md:col-span-2 border px-3 py-2 h-28 rounded-lg" placeholder="Your requirements *" />
            <button className="md:col-span-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-2xl font-bold text-center">
            FAQs
          </motion.h3>
          <div className="mt-6 divide-y rounded-2xl bg-white shadow-md">
            {[
              "What industries benefit the most from IoT?",
              "Can IoT solutions be customized?",
              "How secure are IoT deployments?",
              "What technologies do you use in IoT?",
            ].map((q, i) => (
              <details key={i} className="p-4">
                <summary className="cursor-pointer font-medium">{q}</summary>
                <p className="mt-2 text-sm text-gray-600">
                  Answer for {q} (replace with real content).
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-12 bg-white/70">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-xs"
            >
              Award
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}