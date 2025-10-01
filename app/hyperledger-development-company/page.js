"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  Layers,
  Server,
  Cpu,
  BarChart3,
  Database,
  CheckCircle2,
  UserCheck,
} from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay },
});

function Counter({ end = 0, duration = 1500, suffix = "+", className = "" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        setValue(Math.floor(end * progress));
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

export default function HyperledgerDevelopment() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800 mt-16">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fade()}>
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Hyperledger Development Company
            </h1>
            <p className="mt-4 text-gray-700">
              Hyperledger Development: Community Support And Transparent
              Solutions to accelerate your blockchain adoption journey.
            </p>
            <button className="mt-6 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600">
              Get A Quote
            </button>
          </motion.div>
          <motion.div
            {...fade(0.1)}
            className="h-72 bg-gray-200 rounded-xl flex items-center justify-center"
          >
            [Hero Image]
          </motion.div>
        </div>
      </section>

      {/* OUR HYPERLEDGER SERVICES */}
      <section className="py-16 bg-white/70">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center">
            Our Hyperledger Blockchain Development Services
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Permissioned Blockchain Networks",
                text: "Custom blockchain networks with Hyperledger Fabric.",
              },
              {
                title: "Identity Management",
                text: "Robust identity management and authentication solutions.",
              },
              {
                title: "Hyperledger Application Development",
                text: "Scalable blockchain apps tailored to your business.",
              },
              {
                title: "Supply Chain Solutions",
                text: "Track and trace supply chain with Hyperledger.",
              },
              {
                title: "Smart Contract Development",
                text: "Automated contracts using Hyperledger tools.",
              },
              {
                title: "Migration Services",
                text: "Migrate existing systems to Hyperledger.",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white shadow-md rounded-2xl p-6"
              >
                <CheckCircle2 className="h-6 w-6 text-indigo-600 mb-2" />
                <h4 className="font-semibold">{s.title}</h4>
                <p className="text-sm text-gray-600">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center">
            Benefits Of Hyperledger Development Solutions
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Enhanced Security",
                text: "Enterprise-grade blockchain with robust encryption.",
              },
              {
                title: "Transparency",
                text: "Greater visibility and accountability in transactions.",
              },
              {
                title: "Scalability",
                text: "Highly scalable solutions for large-scale adoption.",
              },
            ].map((b, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-gray-50 rounded-xl shadow p-6"
              >
                <ShieldCheck className="h-6 w-6 text-indigo-600 mb-2" />
                <h4 className="font-semibold">{b.title}</h4>
                <p className="text-sm text-gray-600">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-16 bg-white/60">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center">
            Technology Platforms
          </motion.h2>
          <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
            {[
              "Hyperledger Fabric",
              "Sawtooth",
              "Indy",
              "Ethereum",
              "Corda",
              "Quorum",
              "Stellar",
              "R3",
            ].map((tech, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white rounded-xl shadow-md p-6"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center">
            Our Blockchain Based Development Portfolio
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {["Project One", "Project Two", "Project Three"].map((p, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white shadow-md rounded-2xl p-6"
              >
                <div className="h-40 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                  [Image]
                </div>
                <h4 className="font-semibold">{p}</h4>
                <p className="text-sm text-gray-600">
                  Hyperledger case study for {p}.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white/70">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center">
            Testimonials
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Prakash Desai",
                role: "Product Owner",
                text: "Their Hyperledger expertise streamlined our supply chain.",
              },
              {
                name: "Sahil Verma",
                role: "CTO",
                text: "We achieved 40% efficiency improvement using Hyperledger.",
              },
              {
                name: "Hameed Al Lawati",
                role: "Business Head",
                text: "A reliable partner for enterprise-grade blockchain solutions.",
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
      <section id="contact" className="py-16 bg-white/70">
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
    </main>
  );
}
