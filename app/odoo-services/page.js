"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CheckCircle, Server, Users, Settings, Star } from "lucide-react";

export default function OdooDevelopment() {
  const [faqs, setFaqs] = useState([
    {
      q: "What is Odoo development?",
      a: "Odoo development involves customizing and implementing Odoo ERP modules to streamline business operations.",
    },
    {
      q: "Why should I choose Odoo ERP?",
      a: "Odoo is a powerful ERP with customizable modules covering CRM, sales, HR, inventory, and more.",
    },
    {
      q: "Do you provide custom Odoo solutions?",
      a: "Yes, we develop tailored Odoo modules based on business needs.",
    },
    {
      q: "Do you offer support & maintenance?",
      a: "Yes, we provide long-term Odoo ERP support, maintenance, and upgrades.",
    },
  ]);

  const toggleFAQ = (idx) => {
    setFaqs((prev) =>
      prev.map((faq, i) => (i === idx ? { ...faq, open: !faq.open } : faq))
    );
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 mt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h1 className="text-4xl font-bold mb-4">Odoo Development Company</h1>
          <p className="mb-6">
            Comprehensive Odoo development solutions to streamline ERP workflows
            and scale your business.
          </p>
          <div className="flex space-x-8 mt-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold">20+</h2>
              <p>Industries Served</p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold">120+</h2>
              <p>Projects Delivered</p>
            </div>
          </div>
        </motion.div>

        {/* Lead Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white text-gray-900 p-6 rounded-xl shadow-lg w-full md:w-96 mt-10 md:mt-0"
        >
          <h3 className="text-xl font-semibold mb-4">Request a Proposal</h3>
          <input type="text" placeholder="Name" className="w-full border p-2 rounded mb-3" />
          <input type="email" placeholder="Email" className="w-full border p-2 rounded mb-3" />
          <textarea placeholder="Requirements" rows={3} className="w-full border p-2 rounded mb-3"></textarea>
          <button className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white py-2 rounded">
            Submit
          </button>
        </motion.form>
      </section>

      {/* Services */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-10">Our Odoo Development Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Odoo Implementation",
            "Odoo Customization",
            "Odoo Integration",
            "Odoo Support & Maintenance",
            "Odoo Migration",
            "Odoo Consultancy",
          ].map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gradient-to-r from-purple-50 to-white rounded-xl shadow"
            >
              <Server className="text-purple-600 mb-3" />
              <h3 className="font-semibold">{service}</h3>
              <p className="text-sm mt-2">End-to-end {service.toLowerCase()} solutions for businesses.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-xl font-bold mb-6">Technologies We Use for Odoo</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["Python", "PostgreSQL", "Docker", "XML", "JavaScript", "HTML5"].map((tech, i) => (
            <span key={i} className="px-4 py-2 bg-gray-100 rounded shadow text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-purple-50 to-gray-50">
        <h2 className="text-2xl font-bold text-center mb-10">Key Features of Our Odoo ERP</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Sales Management",
            "Inventory Control",
            "Accounting",
            "CRM",
            "HR Management",
            "Project Management",
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow"
            >
              <CheckCircle className="text-purple-600 mb-3" />
              <h3 className="font-semibold">{feature}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-purple-100 px-6 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-10">Client Testimonials</h2>
        <Swiper spaceBetween={20} slidesPerView={1}>
          {[
            { name: "Rajesh Kumar", review: "Great Odoo implementation for our ERP system." },
            { name: "David Lee", review: "Odoo customization was seamless & efficient." },
            { name: "Hameed Al Lamri", review: "Support team is excellent & always responsive." },
          ].map((t, idx) => (
            <SwiperSlide key={idx}>
              <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-xl shadow text-center">
                <Star className="text-yellow-500 mx-auto mb-2" />
                <p>{t.review}</p>
                <h4 className="mt-3 font-semibold">{t.name}</h4>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-lg">
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center px-4 py-3 font-medium"
              >
                {faq.q}
                <span>{faq.open ? "-" : "+"}</span>
              </button>
              {faq.open && <div className="px-4 pb-4 text-gray-600">{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-10 px-6 md:px-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-3">About Us</h3>
            <p>We provide custom Odoo ERP development, integration, and support services.</p>
          </div>
          <div>
            <h3 className="font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Global Presence</h3>
            <p>USA | UK | UAE | India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
