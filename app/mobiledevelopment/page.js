"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MobileAppDevelopmentPage() {
  // Reusable animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const fade = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 py-20 mt-16 text-white overflow-hidden">
        <div className="mx-auto max-w-screen-xl grid md:grid-cols-2 gap-12 items-center px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Mobile App Development Services for iOS and Android
            </h1>
            <p className="mt-4 text-lg/7 opacity-90">
              Build powerful and scalable mobile apps that engage users and
              accelerate business growth.
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
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Image
              src="/assets/images/mobiledevelopment.jpg"
              alt="Mobile App Development"
              width={600}
              height={500}
              className="object-cover rounded-xl shadow-xl"
              priority
            />
          </motion.div>
        </div>

        {/* soft glow */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-cyan-300 blur-3xl"
        />
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-screen-xl grid md:grid-cols-2 gap-12 px-6 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <Image
              src="/assets/images/whymobile.jpeg"
              alt="Why choose us"
              width={600}
              height={500}
              className="object-cover rounded-xl shadow-md"
            />
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-bold">
              Why Choose Our Custom Mobile App Development Services
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We design and develop mobile apps with seamless performance,
              ensuring your business delivers the best user experience.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {["Native iOS & Android", "Scalable Architecture", "Robust Security", "App Store Compliance"].map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition"
                >
                  <p className="text-sm font-medium text-gray-800">{p}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gradient-to-r from-sky-50 via-indigo-50 to-violet-50 py-20">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl font-bold text-gray-900"
          >
            Our Mobile App Development Services
          </motion.h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
            {[
              "iOS App Development",
              "Android App Development",
              "Cross-Platform Apps",
              "Enterprise Mobility",
              "UI/UX Design",
              "App Maintenance",
            ].map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.01 }}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-indigo-700">{service}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  Scalable and high-performance {service.toLowerCase()} for your business.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl font-bold text-gray-900"
          >
            Key Features Of Our Mobile App Solutions
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition"
              >
                <Image
                  src="/assets/images/keyfeatures.jpeg"
                  alt={`Mobile App Feature ${i}`}
                  width={700}
                  height={700}
                  className="object-cover rounded-xl"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY SOLUTIONS */}
      <section className="bg-gradient-to-r from-sky-50 via-indigo-50 to-violet-50 py-20">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl font-bold text-gray-900"
          >
            Mobile App Development Services For Every Industry We Serve
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8 text-left">
            {["Healthcare", "Ecommerce", "Finance", "Travel", "Education", "On-Demand Apps"].map((industry, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-indigo-700">{industry}</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  End-to-end {industry.toLowerCase()} app solutions tailored for growth.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl font-bold text-gray-900"
          >
            Explore Our Mobile App Development Portfolio
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-lg"
              >
                <Image
                  src="/assets/images/mobileportfolio.jpeg"
                  alt={`Portfolio ${i}`}
                  width={600}
                  height={800}
                  className="object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gradient-to-r from-sky-50 via-indigo-50 to-violet-50 py-20">
        <div className="mx-auto max-w-screen-xl px-6">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl font-bold text-center text-gray-900"
          >
            Our Proven Mobile App Development Process
          </motion.h2>
          <div className="mt-10 grid md:grid-cols-4 gap-8">
            {["Research", "Design", "Development", "Launch"].map((step, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 text-center bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-indigo-700">{step}</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Step {i + 1}: {step} phase in mobile app development.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="bg-white py-20">
        <div className="mx-auto max-w-screen-lg px-6 grid md:grid-cols-2 gap-12">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-4">Let’s Talk About Your Project</h2>
            <p className="text-gray-600">
              Fill the form and let’s bring your mobile app idea to life.
            </p>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fade}
            className="bg-gradient-to-r from-sky-50 via-indigo-50 to-violet-50 p-8 rounded-xl shadow space-y-4"
          >
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Tell us about your project"
              rows={4}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 font-semibold hover:opacity-90 transition"
            >
              Submit
            </button>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
