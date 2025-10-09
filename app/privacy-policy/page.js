"use client";

import { motion } from "framer-motion";
import React from "react";

export default function PrivacyPolicyPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <main className="relative overflow-hidden min-h-screen text-gray-100 bg-gradient-to-br from-teal-500 via-indigo-500 to-purple-500 py-20 px-6 mt-18">
      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      </div>

      {/* Header */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeIn}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 via-emerald-200 to-pink-200 bg-clip-text text-transparent drop-shadow-lg">
          Privacy Policy
        </h1>
        <p className="text-gray-200 mt-4 max-w-2xl mx-auto text-lg">
          Learn how <span className="font-semibold text-white">Parwanix</span> protects, stores, and uses your information to deliver trusted IT solutions and services.
        </p>
      </motion.div>

      {/* Content */}
      <div className="max-w-5xl mx-auto grid gap-10">
        {[
          {
            title: "1. Information We Collect",
            content:
              "We collect personal and technical information such as your name, email, phone number, company name, and service preferences. Data collected via our website or communication channels helps us deliver personalized and efficient IT solutions.",
          },
          {
            title: "2. How We Use Your Information",
            content:
              "Your information enables us to offer customized IT consulting, application development, and digital transformation services. We may also use it for analytics, communication, and service improvement purposes.",
          },
          {
            title: "3. Data Security",
            content:
              "Panwanix employs advanced encryption, firewalls, and strict access controls to protect your data. All information is processed in compliance with global privacy standards.",
          },
          {
            title: "4. Cookies & Tracking",
            content:
              "We use cookies and tracking tools to enhance your browsing experience and analyze traffic. You may adjust your browser settings to disable cookies, though this may impact some website features.",
          },
          {
            title: "5. Third-Party Services",
            content:
              "Our website and solutions may integrate with secure third-party tools such as analytics and cloud providers. These services are governed by their respective privacy policies.",
          },
          {
            title: "6. Your Rights",
            content:
              "You can request access, correction, or deletion of your personal information by contacting our privacy team. We ensure transparency and respect your data rights under applicable laws.",
          },
          {
            title: "7. Policy Updates",
            content:
              "We may update this Privacy Policy periodically to reflect new legal requirements or service updates. The latest version will always be available on our website.",
          },
          {
            title: "8. Contact Us",
            content:
              "For privacy inquiries, please reach out to us at privacy@panwanix.com or visit our head office in Mohali, India.",
          },
        ].map((section, i) => (
          <motion.div
            key={i}
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative p-8 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-[1.02]"
          >
            <h2 className="text-2xl font-semibold text-emerald-200 mb-3 drop-shadow">
              {section.title}
            </h2>
            <p className="text-gray-100 leading-relaxed">{section.content}</p>

            {/* Animated line */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-pink-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 0.2 }}
            ></motion.div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.p
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        className="text-center mt-16 text-gray-200 text-sm"
      >
        © {new Date().getFullYear()} Panwanix  All rights reserved.
      </motion.p>
    </main>
  );
}
