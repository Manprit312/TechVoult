"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

/* Lucide icons */
import {
  Globe2,
  Code2,
  Database,
  MonitorSmartphone,
  Layout,
  Brush,
  PlugZap,
  ShoppingCart,
  ShieldCheck,
  Users,
  Rocket,
  Wrench,
  Server,
  CheckCircle2,
  FolderOpen,
  Settings,
  Award,
  MessageSquareMore,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Counter (starts when section enters viewport)                       */
/* ------------------------------------------------------------------ */
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
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
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

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
export default function WordPressPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

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

  /* ----------------------- Content collections -------------------- */
  const services = [
    { icon: <Layout />, title: "Custom WordPress Development" },
    { icon: <Brush />, title: "Theme Design & Customization" },
    { icon: <PlugZap />, title: "Plugin Development" },
    { icon: <ShoppingCart />, title: "WooCommerce Development" },
  ];

  const features = [
    {
      title: "Custom WordPress Design",
      desc:
        "Tailored UI that reflects your brand guidelines and improves engagement.",
    },
    {
      title: "Responsive & Mobile-First",
      desc:
        "Fluid layouts that look perfect across phones, tablets, and desktops.",
    },
    {
      title: "SEO-Ready Architecture",
      desc:
        "Semantic markup, fast loads, and structured data for higher rankings.",
    },
    {
      title: "Secure & Scalable",
      desc:
        "Hardened install, roles & permissions, backups, and CDN-ready builds.",
    },
  ];

  const otherServices = [
    {
      title: "WordPress Speed Optimization",
      desc:
        "Core Web Vitals improvements using caching, image optimization, and code-splitting.",
    },
    {
      title: "Headless WordPress",
      desc:
        "Next.js frontends on top of WP REST API/GraphQL for app-like experiences.",
    },
    {
      title: "Multilingual & Multisite",
      desc:
        "Global sites with WPML/Polylang and scalable multisite architectures.",
    },
  ];

  const technologies = [
    { name: "HTML5", icon: <Code2 className="text-orange-500" /> },
    { name: "CSS3", icon: <Code2 className="text-blue-500" /> },
    { name: "JavaScript", icon: <Code2 className="text-yellow-500" /> },
    { name: "PHP", icon: <Code2 className="text-indigo-500" /> },
    { name: "MySQL", icon: <Database className="text-green-600" /> },
    { name: "WordPress", icon: <Globe2 className="text-purple-600" /> },
  ];

  const portfolio = [
    {
      title: "Wellness – Coaching Platform (LMS)",
      summary:
        "Custom course types, Stripe subscriptions, lesson progress, and student dashboards.",
    },
    {
      title: "Corporate WordPress Website",
      summary:
        "Component-driven pages with Gutenberg blocks, careers, locations, and blog.",
    },
    {
      title: "WooCommerce Storefront",
      summary:
        "Conversion-focused PDPs, one-page checkout, and shipping/payment integrations.",
    },
  ];

  const caseStudies = [
    {
      title: "B2B Portal Revamp",
      result:
        "Modernized UX reduced support tickets by 38% and increased lead MQLs by 27%.",
    },
    {
      title: "Publisher’s Blog Migration",
      result:
        "Seamless migration (1000+ posts), 0 downtime, improved SERP visibility.",
    },
    {
      title: "Nonprofit Fundraising",
      result:
        "Donations UX uplift led to +54% conversions during seasonal campaigns.",
    },
  ];

  const hostingPlans = [
    {
      title: "Managed Hosting",
      points: ["Daily backups", "Staging", "WAF / Firewall", "99.9% uptime"],
    },
    {
      title: "Redesign & Revamp",
      points: ["UX audit", "Design system", "Gutenberg blocks", "A/B tests"],
    },
    {
      title: "Ongoing Maintenance",
      points: [
        "Core & plugin updates",
        "Security monitoring",
        "Performance upkeep",
        "Monthly reports",
      ],
    },
  ];

  const workflow = [
    {
      step: "1. Discovery",
      desc:
        "Workshops to map goals, users, content, and integrations. Clear scope & backlog.",
    },
    {
      step: "2. Design & Architecture",
      desc:
        "IA, wireframes, design system, and scalable WP architecture planned for growth.",
    },
    {
      step: "3. Development",
      desc:
        "Block-based pages, custom post types, plugins, and REST/GraphQL integrations.",
    },
    {
      step: "4. QA & Launch",
      desc:
        "Accessibility & cross-browser QA, performance hardening, and guided rollout.",
    },
  ];

  const testimonials = [
    {
      name: "Mark Wilson",
      org: "Marketing Lead",
      quote:
        "Our custom WordPress site boosted engagement by 40% in the first quarter.",
    },
    {
      name: "Steve Thomas",
      org: "CTO",
      quote:
        "Plugin development and API work were flawless — shipped on time and budget.",
    },
    {
      name: "David Miller",
      org: "Founder",
      quote:
        "Maintenance & support have been rock-solid. The team is responsive and proactive.",
    },
  ];

  const faqs = [
    {
      q: "Do you build custom WordPress themes?",
      a:
        "Yes. We design and code bespoke themes (Gutenberg/ACF/Blocks) optimized for speed and SEO.",
    },
    {
      q: "Can you migrate my site to WordPress?",
      a:
        "Absolutely. We migrate from any CMS with redirects, content cleanup, and data integrity checks.",
    },
    {
      q: "Do you support WooCommerce?",
      a:
        "Yes. We implement product setups, payments, shipping, tax, and conversion-focused UX.",
    },
    {
      q: "Do you offer post-launch maintenance?",
      a:
        "Yes. Managed hosting, updates, security, and performance monitoring are available.",
    },
  ];

  /* --------------------------------- UI -------------------------------- */
  return (
    <main className="text-gray-800 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* HERO */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-extrabold">
              WordPress Development Services
            </h1>
            <p className="mt-3 text-gray-700">
              Custom WordPress design, plugins, WooCommerce, migrations, and
              maintenance — built for speed, SEO, and scale.
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
            <h2 className="text-3xl font-bold">
              Overview of WordPress Development Services
            </h2>
            <p className="mt-4 text-gray-700">
              We design, build, and maintain WordPress websites with enterprise
              attention to performance and security. From marketing sites and
              blogs to headless apps and WooCommerce stores — our solutions are
              flexible, future-proof, and easy to manage.
            </p>
          </div>
        </div>
      </section>

      {/* CUSTOM SERVICES */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-bold text-center">
            Custom WordPress Development Services
          </h3>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-xl p-6 shadow bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
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

      {/* ADVANCED FEATURES */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-bold text-center">
            Advanced WordPress Features for Engaged Users
          </h3>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="rounded-xl p-6 bg-white shadow"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <ShieldCheck className="h-7 w-7 text-indigo-600" />
                <h4 className="mt-3 font-semibold">{f.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER WP SERVICES */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-bold text-center">
            Our Other WordPress Development Services
          </h3>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {otherServices.map((o, i) => (
              <motion.div
                key={o.title}
                className="rounded-xl p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 shadow"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Wrench className="h-7 w-7 text-purple-600" />
                <h4 className="mt-3 font-semibold">{o.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{o.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-3xl font-bold text-center">
              Technologies We Use For WordPress Development
            </h3>
            <div className="mt-8 grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
              {technologies.map((t) => (
                <div
                  key={t.name}
                  className="bg-white rounded-xl p-5 text-center shadow"
                >
                  <div className="mx-auto inline-flex h-10 w-10 items-center justify-center">
                    {t.icon}
                  </div>
                  <p className="mt-2 text-sm font-medium">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO (Slider) */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-bold text-center">
            WordPress Development Portfolio
          </h3>
          <Swiper
            slidesPerView={1.15}
            spaceBetween={16}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="mt-10"
          >
            {portfolio.map((p, i) => (
              <SwiperSlide key={i}>
                <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 shadow h-full flex flex-col">
                  <div className="h-36 bg-white/70 border rounded-xl grid place-items-center text-sm">
                    [ Portfolio Image ]
                  </div>
                  <h4 className="mt-4 font-semibold">{p.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{p.summary}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* LMS / BLOG / E-COMMERCE TABLE */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-bold text-center">
            WordPress for LMS, Blogs & eCommerce
          </h3>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl shadow border">
              <thead className="text-left bg-gray-50">
                <tr className="[&>*]:px-4 [&>*]:py-3">
                  <th>Use Case</th>
                  <th>Key Plugins/Approach</th>
                  <th>Highlights</th>
                </tr>
              </thead>
              <tbody className="[&>*:nth-child(even)]:bg-gray-50/50">
                <tr className="[&>*]:px-4 [&>*]:py-3">
                  <td>LMS / Courses</td>
                  <td>LearnDash / LifterLMS + Woo + Memberships</td>
                  <td>Progress tracking, quizzes, subscriptions</td>
                </tr>
                <tr className="[&>*]:px-4 [&>*]:py-3">
                  <td>Blog / Publisher</td>
                  <td>Gutenberg blocks, custom taxonomies</td>
                  <td>Editorial workflows, SEO, AMP</td>
                </tr>
                <tr className="[&>*]:px-4 [&>*]:py-3">
                  <td>eCommerce</td>
                  <td>WooCommerce + payment/shipping/tax</td>
                  <td>Optimized PDPs, one-page checkout</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US + COUNTERS */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-bold">
                Why Choose Us for WordPress Development Services?
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-indigo-600" />
                  Transparent communication & agile delivery
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-indigo-600" />
                  Conversion-focused UX & performance best practices
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-indigo-600" />
                  Ongoing support, security, and maintenance
                </li>
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
        </div>
      </section>

      {/* CASE STUDIES (Slider) */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-bold text-center">
            Case Studies on Successful WordPress Projects
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

      {/* HOSTING / REDESIGN / MAINTENANCE */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-bold text-center">
            Hosting, Redesign & Ongoing WordPress Maintenance
          </h3>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {hostingPlans.map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 shadow"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-indigo-600 shadow">
                  {i === 0 ? <Server /> : i === 1 ? <Brush /> : <Wrench />}
                </div>
                <h4 className="mt-4 font-semibold">{p.title}</h4>
                <ul className="mt-3 text-sm text-gray-700 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-indigo-600 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-bold text-center">
            How We Build WordPress Websites (Workflow)
          </h3>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {workflow.map((w, i) => (
              <div
                key={w.step}
                className="rounded-2xl p-6 bg-white shadow text-center"
              >
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

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-bold text-center">Testimonials</h3>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 shadow">
                <MessageSquareMore className="h-6 w-6 text-indigo-600" />
                <p className="mt-3 text-sm italic">“{t.quote}”</p>
                <p className="mt-3 font-semibold">{t.name}</p>
                <p className="text-xs text-gray-600">{t.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h3 className="text-3xl font-bold text-center mb-6">
            Let’s Get Started With Your Project
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
        <div className="mx-auto max-w-4xl px-6">
          <h3 className="text-3xl font-bold text-center mb-6">
            Frequently Asked Questions
          </h3>
          <div className="divide-y rounded-2xl border bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            {faqs.map((f, i) => (
              <details key={i} className="p-4">
                <summary className="cursor-pointer font-medium">
                  {f.q}
                </summary>
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
