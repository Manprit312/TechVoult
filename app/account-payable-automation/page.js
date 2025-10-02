"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  CheckCircle2,
  BarChart3,
  ShieldCheck,
  Cpu,
  LineChart,
  Workflow,
  UserCheck,
  ClipboardCheck,
  Zap,
} from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay },
});

function Counter({ end = 0, duration = 1200, suffix = "%", className = "" }) {
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

export default function AccountPayableAutomation() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100 text-gray-800 mt-16">

      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-blue-100 via-indigo-100 to-teal-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fade()}>
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Accounts Payable Automation
            </h1>
            <p className="mt-4 text-gray-700">
              Save time, cut costs, and transform your invoice processing with
              AI/ML.
            </p>
            <button className="mt-6 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-700">
              Get a Demo
            </button>
          </motion.div>
          <motion.div
            {...fade(0.1)}
            className="h-72 bg-gray-200 rounded-xl flex items-center justify-center"
          >
            <Image src="/assets/images/accountpayable.jpeg" alt="Account Payable Automation"
              width={400} height={200} className="w-full h-full object-cover rounded-xl" />



          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 bg-white/70">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fade()}>
            <h2 className="text-3xl font-bold">
              AI Based Invoice Processing Application
            </h2>
            <p className="mt-4 text-gray-600">
              Intelligent invoice capture powered by AI to extract data,
              minimize errors, and streamline accounts payable.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-indigo-600" size={18} /> 24x7
                Automated Invoice Processing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-indigo-600" size={18} /> Accurate
                Extraction & Validation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-indigo-600" size={18} /> 80%
                Faster Processing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-indigo-600" size={18} /> Improved
                Compliance
              </li>
            </ul>
          </motion.div>
          <motion.div
            {...fade(0.1)}
            className="h-72 bg-gray-200 rounded-xl flex items-center justify-center"
          >    <Image src="/assets/images/accountpayable2.jpeg" alt="Account Payable Automation"
            width={400} height={200} className="w-full h-full object-cover rounded-xl" />

          </motion.div>
        </div>
      </section>

      {/* WHAT IS AUTOMATED INVOICE PROCESSING */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fade()}>
            <h2 className="text-3xl font-bold">What is Automated Invoice Processing?</h2>
            <p className="mt-4 text-gray-600">
              Automated Invoice Processing uses AI/ML to extract invoice data,
              validate against purchase orders, and push to ERP systems.
              Reducing manual data entry, human errors, and increasing financial
              accuracy.
            </p>
          </motion.div>
          <motion.div
            {...fade(0.1)}
            className="h-72 bg-gray-200 rounded-xl flex items-center justify-center"
          >
            <Image src="/assets/images/automation.jpeg" alt="Account Payable Automation"
              width={400} height={200} className="w-full h-full object-cover rounded-xl " />

          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 bg-white/70">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-3xl font-bold text-center">
            Features of Invoice Processing Automation Software
          </motion.h3>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              "Automated Data Validation",
              "Smart Invoice Extraction",
              "Integration with Accounting Systems",
              "Advanced Analytics & Reporting",
            ].map((f, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white shadow-md rounded-2xl p-6 text-center"
              >
                <FileText className="h-8 w-8 text-indigo-600 mx-auto" />
                <p className="mt-3 text-gray-700">{f}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-3xl font-bold text-center">
            Benefits of Invoice Processing Automation Software
          </motion.h3>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Eliminate Manual Work",
                text: "Cut down human data entry efforts by 75%.",
              },
              {
                title: "Error Reduction",
                text: "Automated validations reduce errors significantly.",
              },
              {
                title: "Improve Efficiency",
                text: "Accelerate invoice approvals and reduce cycle time.",
              },
              {
                title: "Quick ROI",
                text: "Save costs and improve financial accuracy instantly.",
              },
              {
                title: "Comprehensive Insights",
                text: "Analytics dashboards for better decision-making.",
              },
            ].map((b, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white shadow-md rounded-2xl p-6"
              >
                <ShieldCheck className="h-7 w-7 text-indigo-600" />
                <h4 className="mt-3 font-semibold">{b.title}</h4>
                <p className="text-sm text-gray-600">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="py-16 bg-white/60">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 shadow rounded-xl">
            <Counter end={75} className="text-4xl font-bold text-indigo-600" />{" "}
            <p className="mt-2">Faster Invoice Processing</p>
          </div>
          <div className="bg-white p-6 shadow rounded-xl">
            <Counter end={140} suffix="+" className="text-4xl font-bold text-indigo-600" />{" "}
            <p className="mt-2">Resources Saved</p>
          </div>
          <div className="bg-white p-6 shadow rounded-xl">
            <Counter end={70} suffix="+" className="text-4xl font-bold text-indigo-600" />{" "}
            <p className="mt-2">AP Departments Onboarded</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-3xl font-bold text-center">
            Why Choose Us for Invoice Processing Automation?
          </motion.h3>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Enhanced Efficiency",
                text: "Automating manual tasks to improve AP operations.",
              },
              {
                title: "Proven Accuracy",
                text: "AI-driven validations reduce financial discrepancies.",
              },
              {
                title: "Cost Savings",
                text: "Minimize operational costs and optimize cash flow.",
              },
            ].map((c, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <Zap className="h-7 w-7 text-indigo-600" />
                <h4 className="mt-3 font-semibold">{c.title}</h4>
                <p className="text-sm text-gray-600">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white/70">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-3xl font-bold text-center">
            Testimonials
          </motion.h3>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Prakash Gupta",
                role: "Finance Manager",
                text: "Invoice automation has saved us countless hours.",
              },
              {
                name: "Sunil Yadav",
                role: "Accounts Lead",
                text: "Error rates dropped by 80% after implementation.",
              },
              {
                name: "Hamza Al Lawati",
                role: "CFO",
                text: "Our AP team’s productivity skyrocketed!",
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

      {/* CONTACT */}
      <section id="contact" className="py-16">
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
      <section className="py-16 bg-white/70">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h3 {...fade()} className="text-2xl font-bold text-center">
            FAQs
          </motion.h3>
          <div className="mt-6 divide-y rounded-2xl bg-white shadow-md">
            {[
              "What is automated invoice processing?",
              "How does automated invoice processing software work?",
              "Is it possible to integrate invoice processing automation with ERP systems?",
              "Can automated invoice processing reduce compliance risks?",
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
      <section className="py-12">
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
