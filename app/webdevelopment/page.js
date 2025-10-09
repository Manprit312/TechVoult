"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WebDevelopmentPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 py-24 mt-16 text-white">
        <div className="mx-auto max-w-screen-xl grid md:grid-cols-2 gap-12 items-center px-6">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp}>
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Top Web Development Company
            </h1>
            <p className="mt-4 text-lg opacity-90">
             At Parwanix, we craft high-performance websites that align with your business goals, deliver seamless user experiences, and scale with your success.
            </p>
            <div className="mt-6">
              <Link
                href="#contact"
                className="inline-block rounded-lg bg-white text-indigo-700 px-6 py-3 font-semibold shadow hover:bg-gray-100 transition"
              >
                Get Free Consultation
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <Image
              src="/assets/images/webdevelopment.jpg"
              alt="Web Development"
              width={600}
              height={600}
              className="object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* ABOUT COMPANY */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-screen-xl grid md:grid-cols-2 gap-12 px-6 items-center">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp}>
            <Image
              src="/assets/images/webdevelopmentexpert.jpg"
              alt="About Us"
              width={600}
              height={400}
              className="object-cover rounded-xl shadow-md"
            />
          </motion.div>
          <motion.div initial="hidden" whileInView="show" variants={fadeUp}>
            <h2 className="text-3xl font-bold text-gray-900">
      Build Websites That Drive Growth
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
             At Parwanix, we craft high-performance websites tailored to your business goals, combining cutting-edge technology with seamless user experiences. From startups to enterprises, we deliver fast, secure, and scalable digital solutions that convert visitors into customers.
            </p>
            <div className="mt-8 flex gap-12">
              <div>
                <p className="text-4xl font-extrabold text-blue-600">140+</p>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-purple-600">450+</p>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <motion.h2
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            className="text-3xl font-bold text-gray-900"
          >
            Our Website Development Services
          </motion.h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
            {[
              "Custom Web Development",
              "CMS Development",
              "Ecommerce Solutions",
              "Web App Development",
              "UI/UX Design",
              "Maintenance & Support",
            ].map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-indigo-700">
                  {service}
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  High-quality {service.toLowerCase()} tailored to business
                  needs.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="bg-white py-20" id="portfolio">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <motion.h2
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            className="text-3xl font-bold text-gray-900"
          >
            Our Portfolio
          </motion.h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We take pride in delivering innovative websites, ecommerce
            solutions, blockchain platforms, and custom applications.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[`/assets/images/portfolio1.png`, `/assets/images/portfolio2.png`, `/assets/images/portfolio3.png`].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
              >
                <Image
                  src={i}
                  alt={`Portfolio ${i}`}
                  width={400}
                  height={300}
                  className="object-cover w-full h-60 hover:scale-105 transition-transform"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Technologies We Use
          </h2>
         <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
  {[
    "react.jpeg",
    "next.jpeg",
    "node.png",
    "vue.jpeg",
    "angular.png",
    "python.jpeg",
  ].map((tech, i) => (
    <motion.div
      key={i}
      initial="hidden"
      whileInView="show"
      variants={fadeUp}
      className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden h-28 w-full"
    >
      <Image
        src={`/assets/images/${tech}`}
        alt={tech}
        width={400}
        height={100}
        className="w-full h-full object-cover"
      />
    </motion.div>
  ))}
</div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                name: "David Smith",
                feedback:
                  "Parwanix  built our ecommerce store with excellent quality. Smooth process and on-time delivery!",
              },
              {
                name: "Sophia Johnson",
                feedback:
                  "Professional team! They helped us scale our web app quickly and securely.",
              },
              {
                name: "Amit Sharma",
                feedback:
                  "Amazing UI/UX design and development. Our traffic doubled within 3 months!",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                variants={fadeUp}
                className="p-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl shadow"
              >
                <p className="text-gray-600 italic">“{t.feedback}”</p>
                <h4 className="mt-4 font-semibold text-indigo-700">{t.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="mx-auto max-w-screen-lg px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">FAQ</h2>
          <div className="mt-8 space-y-4">
            {[
              {
                q: "How long does it take to build a website?",
                a: "Depending on complexity, it can take from 4 weeks to 3 months.",
              },
              {
                q: "Do you provide support after launch?",
                a: "Yes, we provide ongoing maintenance and support plans.",
              },
              {
                q: "Which technologies do you use?",
                a: "We use React, Next.js, Node.js, Python, and other modern stacks.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                variants={fadeUp}
                className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-md"
              >
                <h3 className="font-semibold text-indigo-700">{faq.q}</h3>
                <p className="mt-2 text-gray-600 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 py-20 text-white"
      >
        <div className="mx-auto max-w-screen-lg px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-4">
              Let’s Talk About Your Project
            </h2>
            <p className="opacity-90">
              Fill the form and let’s build your dream website together.
            </p>
          </motion.div>
          <motion.form
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            className="bg-white p-8 rounded-xl shadow-md space-y-4 text-gray-900"
          >
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <textarea
              placeholder="Tell us about your project"
              rows={4}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 font-semibold hover:opacity-90 transition"
            >
              Submit
            </button>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
