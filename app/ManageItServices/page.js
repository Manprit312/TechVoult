"use client";

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { ChevronDown } from "lucide-react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";

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
    <div className="mt-8 max-w-7xl w-full mx-auto divide-y rounded-2xl border border-gray-100 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-4 py-4 text-left"
            >
              <span className="font-medium text-gray-500">{item.q}</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}
            >
              <p className="px-6 pb-4 text-gray-500">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ---------------------- Page ----------------------
export default function ManagedITPage() {
  // Sliders
 const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
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
    setErrors({ ...errors, [e.target.name]: "" }); // clear error when typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", form);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  };


const animation = { duration: 40000, easing: (t) => t }

  const [logosRef] = useKeenSlider({
   loop: true,
  renderMode: "performance",
  drag: false,
  slides: {
    perView: 5,   // 👈 show 5 logos at a time
    spacing: 20,  // 👈 space between them
  },
  created(s) {
    s.moveToIdx(5, true, animation);
  },
  updated(s) {
    s.moveToIdx(s.track.details.abs + 5, true, animation);
  },
  animationEnded(s) {
    s.moveToIdx(s.track.details.abs + 5, true, animation);
  },
  });

  const [testimonialRef] = useKeenSlider({
    loop: true,
      autoPlay: { delay: 100 },
    slides: { perView: 1, spacing: 15 },
  });

  return (
    <main className="w-full">
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-20 text-center my-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900">Managed IT Services</h1>
          <p className="mt-4 text-lg text-gray-600">
            Reliable, scalable IT solutions designed to keep your business running smoothly.
          </p>
          <div className="mt-6">
            <Link
                        href="contactUs"
           className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow hover:opacity-90">
              Get a Free Consultation
          
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        <div className="rounded-xl bg-gray-100 h-64 flex items-center justify-center">
          <span className="text-gray-400">[ Intro Image Placeholder ]</span>
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
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Managed IT Service Offerings</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "24/7 IT Monitoring",
              "Help Desk Support",
              "Network Security",
              "Data Backup & Recovery",
              "Cloud Solutions",
              "System Upgrades",
            ].map((service, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-md text-center">
                <div className="h-20 w-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">[Icon]</span>
                </div>
                <h3 className="text-lg font-semibold">{service}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
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
            <div key={i} className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 shadow-sm">
              <h3 className="text-lg font-semibold">{f}</h3>
              <p className="mt-2 text-sm text-gray-600">
                Description about how this feature benefits the client.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50 py-16">
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

      {/* CLIENT LOGOS CAROUSEL */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted by Leading Enterprises</h2>
        <div ref={logosRef} className="keen-slider">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="keen-slider__slide flex items-center justify-center">
              <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-400">Logo {i + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
          <div ref={testimonialRef} className="keen-slider">
            {[1, 2, 3].map((t) => (
              <div key={t} className="keen-slider__slide">
                <div className="p-6 bg-white rounded-xl shadow max-w-md mx-auto">
                  <p className="text-gray-600">“This team transformed our IT operations. Excellent support!”</p>
                  <p className="mt-4 font-semibold text-gray-900">Client {t}</p>
                </div>
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

<section className="bg-gradient-to-r from-purple-50 via-indigo-50 to-pink-50 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Let’s Talk About Your Project
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid gap-6 md:grid-cols-2 bg-white p-8 rounded-2xl shadow-xl border-gray-200 border"
        >
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder=" "
              className={`peer w-full border px-3 pt-5 pb-2 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all 
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 
              peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm 
              peer-focus:text-indigo-500">
              Full Name *
            </label>
            {errors.name && (
              <p className="text-sm text-red-500 mt-1 text-left">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder=" "
              className={`peer w-full border px-3 pt-5 pb-2 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all 
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 
              peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm 
              peer-focus:text-indigo-500">
              Email *
            </label>
            {errors.email && (
              <p className="text-sm text-red-500 mt-1 text-left">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div className="relative md:col-span-2">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder=" "
              rows={5}
              className={`peer w-full border px-3 pt-5 pb-2 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all 
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 
              peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm 
              peer-focus:text-indigo-500">
              Your Requirements *
            </label>
            {errors.message && (
              <p className="text-sm text-red-500 mt-1 text-left">{errors.message}</p>
            )}
          </div>

          {/* Success Message */}
          {submitted && (
            <p className="md:col-span-2 text-green-600 text-sm bg-green-50 border border-green-200 p-3 rounded-lg">
              ✅ Thank you! Your message has been sent successfully.
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="md:col-span-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
    </main>
  );
}
