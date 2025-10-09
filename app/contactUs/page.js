"use client";
import React, { useState } from "react";
import { Mail, Phone, CheckCircle } from "lucide-react";
import Image from "next/image";
export default function ContactPage() {
 const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [selectedCode, setSelectedCode] = useState("+91");
const countryCodes = [
  { code: "+1", name: "United States", flag: "🇺🇸" },
  { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
  { code: "+61", name: "Australia", flag: "🇦🇺" },
  { code: "+91", name: "India", flag: "🇮🇳" },
  { code: "+971", name: "UAE", flag: "🇦🇪" },
  { code: "+49", name: "Germany", flag: "🇩🇪" },
  { code: "+33", name: "France", flag: "🇫🇷" },
  { code: "+81", name: "Japan", flag: "🇯🇵" },
  { code: "+1-CA", name: "Canada", flag: "🇨🇦" },
];
  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const phone = formData.get("phone")?.toString().trim();

    const payload = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      phone: `${selectedCode} ${phone}`,
      message: formData.get("message")?.toString().trim(),
      budget: formData.get("budget")?.toString(),
      captcha: formData.get("captcha")?.toString(),
    };

    // ✅ Basic validation
    if (!payload.name || !payload.email || !selectedCode || !phone || !payload.message) {
      setLoading(false);
      setError("Please fill in all required fields.");
      return;
    }

    // ✅ Validate phone digits
    const phoneRegex = /^\d{7,15}$/;
    if (!phoneRegex.test(phone)) {
      setLoading(false);
      setError("Please enter a valid phone number (7–15 digits).");
      return;
    }

    // ✅ Captcha validation
    if (Number(payload.captcha) !== 6) {
      setLoading(false);
      setError("Captcha is incorrect. Please answer 1 + 5 correctly.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to submit form");

      setSuccess("Thanks! Your message has been sent. We'll get back to you soon.");
      form.reset();
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="w-full">
      {/* PAGE HEADER */}
      <section className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-16 my-15 text-center text-gray-900">
        <h1 className="text-4xl font-extrabold">Contact Us</h1>
        <p className="mt-2 text-base max-w-2xl mx-auto opacity-80">
          Feel free to talk about your dream project. We’re here to listen, help, and
          build something amazing together.
        </p>
        <div className="mt-6">
          <a
            href="#form"
            className="rounded-xl bg-gradient-to-r from-orange-400 to-pink-400 px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-90"
          >
            Book a Demo
          </a>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section id="form" className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-20 grid gap-12 md:grid-cols-2 items-start">

          {/* Info block */}
          <div className="rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-30 px-8 pt-7 shadow-sm ring-1 ring-gray-200 text-gray-800 h-fit">
            <h2 className="text-3xl font-bold mb-4">Let's Talk About Your Project</h2>
            <ul className="space-y-3 text-sm/relaxed">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-indigo-500" /> Free Consultation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-indigo-500" /> 24/7 Expert Support
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-indigo-500" /> On-Time Delivery
              </li>
            </ul>

            <div className="mt-6 space-y-2 text-gray-700 text-sm">
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-indigo-500" /> 
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-indigo-500" /> +1 (510) 630-6507
              </p>
            </div>

            <div className="mt-6 flex gap-4 text-sm font-semibold">
              <a href="#" className="text-indigo-600 underline">Facebook</a>
              <a href="#" className="text-indigo-600 underline">Twitter</a>
              <a href="#" className="text-indigo-600 underline">LinkedIn</a>
            </div>
          </div>

          {/* Form block */}
          <form onSubmit={onSubmit} className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-2xl shadow-sm ring-1 ring-gray-200">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700" htmlFor="name">Full Name *</label>
                <input id="name" name="name" required placeholder="John Doe" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700" htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              </div>

            <div className="space-y-1 sm:col-span-2">
                <label className="text-sm font-medium text-gray-700" htmlFor="phone">
                  Phone Number *
                </label>
                <div className="flex gap-2 space-x-3">
                  <select
                    id="countryCode"
                    name="countryCode"
                    value={selectedCode}
                    onChange={(e) => setSelectedCode(e.target.value)}
                    className="w-1/6 rounded-lg border border-gray-300 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>

                  <input
                    id="phone"
                    name="phone"
                    required
                    placeholder="9876543210"
                    className="w-2/3 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 space-y-1">
                <label className="text-sm font-medium text-gray-700" htmlFor="message">Please share your detailed requirements *</label>
                <textarea id="message" name="message" required rows={5} placeholder="Tell us about your project goals, timeline, and any must-haves." className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"></textarea>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700" htmlFor="budget">Budget Range</label>
                <select id="budget" name="budget" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value=">50k">$50,000+</option>
                </select>
              </div>
              {/* <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700" htmlFor="captcha">What is 1 + 5? *</label>
                <input id="captcha" name="captcha" required placeholder="6" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              </div> */}
            </div>

            {error && (
              <p className="mt-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>
            )}
            {success && (
              <p className="mt-4 text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">{success}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-orange-400 to-pink-400 px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-95 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </section>


      {/* OUR OFFICES */}
      {/* <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-20">
          <h2 className="text-3xl font-extrabold mb-6 text-center">Our Offices</h2>
          <p className="text-gray-600 mb-10 text-center">New locations coming up in Singapore and Pune, India.</p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="h-40 bg-gray-200 rounded-lg mb-4">
                <Image 
                src="/assets/images/office.jpeg"
                alt="Noida Office"
                width={400}
                height={200}
                className="h-full w-full object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-700">715, Astralis, Supernova, Sector 94 Noida, Delhi NCR India, 201301</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="h-40 bg-gray-200 rounded-lg mb-4">
                 <Image 
                src="/assets/images/office2.jpeg"
                alt="Noida Office"
                width={400}
                height={200}
                className="h-full w-full object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-700">5214f Diamond Heights Blvd, San Francisco, California, USA 94131</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="h-40 bg-gray-200 rounded-lg mb-4">
                 <Image 
                src="/assets/images/office3.jpeg"
                alt="Noida Office"
                width={400}
                height={200}
                className="h-full w-full object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-700">Unit No: 729, DMCC Business Centre, Level No 1, Jumeirah & Gemplex 3, Dubai, UAE</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* AWARDS & RECOGNITION */}
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-20 text-center">
          <h2 className="text-3xl font-extrabold mb-10">Awards & Recognition</h2>
          <p className="text-gray-600 mb-8">We are honored to receive recognition for our excellence from leading publications worldwide.</p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="h-16 w-32 bg-gray-200 rounded-lg">
              <Image
                src="/assets/images/award1.jpeg"
                alt="Clutch"
                width={128}
                height={64}
                className="h-full w-full object-cover p-2"
              />
            </div>
            <div className="h-16 w-32 bg-gray-200 rounded-lg">
              <Image
                src="/assets/images/award2.jpeg"
                alt="Clutch"
                width={128}
                height={64}
                className="h-full w-full object-cover p-2"
              />
            </div>
            <div className="h-16 w-32 bg-gray-200 rounded-lg">
              <Image
                src="/assets/images/award3.jpeg"
                alt="Clutch"
                width={128}
                height={64}
                className="h-full w-full object-cover p-2"
              />
            </div>
            <div className="h-16 w-32 bg-gray-200 rounded-lg">
              <Image
                src="/assets/images/award4.jpeg"
                alt="Clutch"
                width={128}
                height={64}
                className="h-full w-full object-cover p-2"
              />
            </div>
            <div className="h-16 w-32 bg-gray-200 rounded-lg">
              <Image
                src="/assets/images/award1.jpeg"
                alt="Clutch"
                width={300}
                height={104}
                className="h-full w-full object-cover p-2"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
