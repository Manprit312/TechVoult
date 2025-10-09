"use client";

import { motion } from "framer-motion";
import React from "react";

export default function TermsAndServicesPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <main className="relative overflow-hidden min-h-screen text-gray-100 bg-gradient-to-br from-indigo-500 via-emerald-500 to-teal-500 py-20 px-6 mt-18">
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-green-300 via-blue-400 to-cyan-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      </div>

      {/* Header */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeIn}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 via-emerald-200 to-pink-200 bg-clip-text text-transparent drop-shadow-lg">
          Terms & Services
        </h1>
        <p className="text-gray-200 mt-4 max-w-2xl mx-auto text-lg">
          Welcome to <span className="font-semibold text-white">Parwanix</span>.  
          By using our IT solutions and services, you agree to the following terms and conditions.
        </p>
      </motion.div>

      {/* Content */}
      <div className="max-w-5xl mx-auto grid gap-10">
        {[
          {
            title: "1. Acceptance of Terms",
            content:
              "By accessing or using Parwanix services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree, please discontinue use of our services immediately.",
          },
          {
            title: "2. Scope of Services",
            content:
              "Panwanix provides IT consulting, web development, app design, and other technology solutions. The scope of services is defined in client proposals, agreements, or statements of work. Customizations may be made upon mutual consent.",
          },
          {
            title: "3. Client Responsibilities",
            content:
              "Clients must provide accurate information, required materials, and timely feedback to ensure project success. Panwanix is not liable for delays caused by incomplete or late submissions from clients.",
          },
          {
            title: "4. Payments & Billing",
            content:
              "All invoices must be paid according to the agreed schedule. Late or missed payments may result in service suspension. All project fees are non-refundable once the development process begins, unless stated otherwise in a contract.",
          },
          {
            title: "5. Intellectual Property",
            content:
              "All source code, designs, and deliverables remain the intellectual property of Panwanix until full payment is received. After payment, ownership rights are transferred to the client unless otherwise agreed.",
          },
          {
            title: "6. Confidentiality",
            content:
              "Both parties agree to maintain strict confidentiality of proprietary information, data, and materials shared during collaboration. Confidential information will not be disclosed to any third party without prior written consent.",
          },
          {
            title: "7. Limitation of Liability",
            content:
              "Panwanix shall not be held liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services. All services are provided 'as is' without any warranty beyond the agreed scope.",
          },
          {
            title: "8. Termination",
            content:
              "Either party may terminate an agreement with written notice. Panwanix reserves the right to terminate services if the client breaches these Terms or engages in unlawful or unethical activities.",
          },
          {
            title: "9. Modifications to Terms",
            content:
              "Panwanix reserves the right to modify or update these Terms at any time. Continued use of our services constitutes acceptance of the revised Terms.",
          },
          {
            title: "10. Contact Information",
            content:
              "For questions regarding these Terms or our services, please reach out at support@panwanix.com or visit our office in Mohali, India.",
          },
        ].map((section, i) => (
          <motion.div
            key={i}
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative p-8 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl hover:shadow-emerald-400/30 transition-all duration-300 hover:scale-[1.02]"
          >
            <h2 className="text-2xl font-semibold text-yellow-200 mb-3 drop-shadow">
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
        © {new Date().getFullYear()} Panwanix IT Services. All rights reserved.
      </motion.p>
    </main>
  );
}
