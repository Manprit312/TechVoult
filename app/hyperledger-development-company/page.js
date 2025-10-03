"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
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
    <main className="min-h-screen bg-gradient-to-br from-sky-950 via-blue-900 to-cyan-950 text-gray-200 mt-18">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-sky-900 via-blue-900 to-cyan-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fade()}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Hyperledger Development Company
            </h1>
            <p className="mt-4 text-gray-300">
              Hyperledger Development: Community Support And Transparent
              Solutions to accelerate your blockchain adoption journey.
            </p>
            <button className="mt-6 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-sky-500 to-cyan-600 hover:opacity-90">
              Get A Quote
            </button>
          </motion.div>
          <motion.div
            {...fade(0.1)}
            className="h-72 rounded-xl flex items-center justify-center overflow-hidden shadow-xl"
          >
            <Image
              src="/assets/images/hyperledger.jpeg"
              alt="Hyperledger Development"
              width={600}
              height={400}
              className="object-cover h-full w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* OUR HYPERLEDGER SERVICES */}
      <section className="py-16 bg-white/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center text-white">
            Our Hyperledger Blockchain Development Services
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              { title: "Permissioned Blockchain Networks", text: "Custom blockchain networks with Hyperledger Fabric." },
              { title: "Identity Management", text: "Robust identity management and authentication solutions." },
              { title: "Hyperledger Application Development", text: "Scalable blockchain apps tailored to your business." },
              { title: "Supply Chain Solutions", text: "Track and trace supply chain with Hyperledger." },
              { title: "Smart Contract Development", text: "Automated contracts using Hyperledger tools." },
              { title: "Migration Services", text: "Migrate existing systems to Hyperledger." },
            ].map((s, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md hover:bg-white/10 transition"
              >
                <CheckCircle2 className="h-6 w-6 text-sky-400 mb-2" />
                <h4 className="font-semibold text-white">{s.title}</h4>
                <p className="text-sm text-gray-300">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center text-white">
            Benefits Of Hyperledger Development Solutions
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: "Enhanced Security", text: "Enterprise-grade blockchain with robust encryption." },
              { title: "Transparency", text: "Greater visibility and accountability in transactions." },
              { title: "Scalability", text: "Highly scalable solutions for large-scale adoption." },
            ].map((b, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white/5 border border-white/10 rounded-xl shadow p-6"
              >
                <ShieldCheck className="h-6 w-6 text-sky-400 mb-2" />
                <h4 className="font-semibold text-white">{b.title}</h4>
                <p className="text-sm text-gray-300">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-16 bg-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center text-white">
            Our Blockchain Based Development Portfolio
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: "Project One", img: "/assets/images/hyper1.png" },
              { title: "Project Two", img: "/assets/images/hyper2.jpeg" },
              { title: "Project Three", img: "/assets/images/hyper3.jpeg" },
            ].map((p, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md"
              >
                <div className="h-40 rounded-lg mb-3 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={400}
                    height={200}
                    className="object-cover h-full w-full"
                  />
                </div>
                <h4 className="font-semibold text-white">{p.title}</h4>
                <p className="text-sm text-gray-300">
                  Hyperledger case study for {p.title}.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade()} className="text-3xl font-bold text-center text-white">
            Testimonials
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { name: "Prakash Desai", role: "Product Owner", text: "Their Hyperledger expertise streamlined our supply chain." },
              { name: "Sahil Verma", role: "CTO", text: "We achieved 40% efficiency improvement using Hyperledger." },
              { name: "Hameed Al Lawati", role: "Business Head", text: "A reliable partner for enterprise-grade blockchain solutions." },
            ].map((t, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white/5 border border-white/10 rounded-xl shadow-md p-6"
              >
                <UserCheck className="h-7 w-7 text-sky-400" />
                <p className="italic text-gray-300">“{t.text}”</p>
                <p className="mt-4 font-semibold text-white">{t.name}</p>
                <p className="text-xs text-gray-400">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-2xl font-bold text-center text-white">
            Let’s Talk About Your Project
          </motion.h3>
          <form className="mt-6 grid gap-4 md:grid-cols-2 bg-white/10 p-6 rounded-2xl shadow-md border border-white/10">
            <input className="border px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300" placeholder="Full Name *" />
            <input className="border px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300" placeholder="Email *" type="email" />
            <input className="border px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300" placeholder="Company" />
            <input className="border px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300" placeholder="Phone" />
            <textarea className="md:col-span-2 border px-3 py-2 h-28 rounded-lg bg-white/20 text-white placeholder-gray-300" placeholder="Your requirements *" />
            <button className="md:col-span-2 bg-gradient-to-r from-sky-500 to-cyan-600 text-white px-6 py-3 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
