"use client";

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { ChevronDown } from "lucide-react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import Image from "next/image";

// ---------------------- FAQ Accordion ----------------------
function FAQAccordion() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: "What are Managed IT Services?", a: "Managed IT services are outsourced IT functions designed to support and manage your technology infrastructure..." },
    { q: "Why should I choose managed IT?", a: "It allows businesses to reduce downtime, improve security, and focus on core goals without worrying about IT issues." },
    { q: "What industries do you serve?", a: "We serve multiple industries including healthcare, finance, retail, logistics, and education." },
    { q: "Can I scale services as I grow?", a: "Yes, our services are scalable and flexible to support growing businesses." },
  ];
  return (
    <div className="mt-8 max-w-7xl w-full mx-auto divide-y rounded-2xl border border-gray-100 bg-gradient-to-br from-blue-50 via-cyan-50 to-gray-50">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-4 py-4 text-left"
            >
              <span className="font-medium text-gray-700">{item.q}</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-[max-height] duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}>
              <p className="px-6 pb-4 text-gray-600">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ManagedITPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!form.name.trim()) tempErrors.name = "Full Name is required.";
    if (!form.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Enter a valid email.";
    }
    if (!form.message.trim()) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", form);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <main className="w-full">
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-blue-900 via-cyan-800 to-gray-900 py-20 text-center my-16 text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold">Managed IT Services</h1>
          <p className="mt-4 text-lg text-gray-200">
            Reliable, scalable IT solutions designed to keep your business running smoothly.
          </p>
          <div className="mt-6">
            <Link href="contactUs"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow hover:opacity-90">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="h-64 rounded-xl overflow-hidden relative shadow-lg">
          <Image src="/assets/images/managedIt.jpeg" alt="Managed IT" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">What Are Managed IT Services?</h2>
          <p className="text-gray-600 leading-relaxed">
            Managed IT services allow businesses to outsource their IT operations and infrastructure management.
            From proactive monitoring to help desk support, we ensure your technology always works for you.
          </p>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Managed IT Service Offerings</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "24/7 IT Monitoring", img: "/assets/images/itmonitoring.jpeg" },
              { title: "Help Desk Support", img: "/assets/images/helpdesk.jpeg" },
              { title: "Network Security", img: "/assets/images/networksecurity.jpeg" },
              { title: "Data Backup & Recovery", img: "/assets/images/databackup.jpeg" },
              { title: "Cloud Solutions", img: "/assets/images/cloudsolutions.jpeg" },
              { title: "System Upgrades", img: "/assets/images/upgrades.jpeg" },
            ].map((service, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-md text-center">
                <div className="h-32 w-full relative rounded-lg overflow-hidden mb-4">
                  <Image src={service.img} alt={service.title} fill className="object-cover" />
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Professional and reliable {service.title.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features That Set Us Apart</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {["Proactive Monitoring", "Cybersecurity First", "Expert Team", "Scalability", "Data Protection", "Cost Optimization"].map((f, i) => (
            <div key={i} className="p-6 rounded-xl bg-gradient-to-br from-blue-50 via-cyan-50 to-gray-50 shadow-sm">
              <h3 className="text-lg font-semibold">{f}</h3>
              <p className="mt-2 text-sm text-gray-600">Delivering trusted IT services that scale with your business needs.</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gradient-to-r from-cyan-50 via-blue-50 to-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Our Process Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Assessment", "Implementation", "Support"].map((step, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow text-center">
                <h3 className="text-xl font-semibold mb-2">{step}</h3>
                <p className="text-sm text-gray-600">Step {i + 1} description goes here.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>
        <FAQAccordion />
      </section>

      {/* CONTACT */}
      <section className="bg-gradient-to-r from-blue-50 via-cyan-50 to-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Let’s Talk About Your Project</h2>
          <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2 bg-white p-8 rounded-2xl shadow-xl border">
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name *" className="p-3 border rounded-lg" />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email *" className="p-3 border rounded-lg" />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Requirements *" rows={5} className="md:col-span-2 p-3 border rounded-lg" />
            {submitted && <p className="md:col-span-2 text-green-600 text-sm">✅ Thank you! Your message has been sent.</p>}
            <button type="submit" className="md:col-span-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:opacity-90">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
