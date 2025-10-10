"use client";
import React, { useState } from "react";
import { Mail, Phone, CheckCircle, Calendar } from "lucide-react";
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
    const meetingDate = formData.get("meetingDate")?.toString();
    const meetingTime = formData.get("meetingTime")?.toString();

    const payload = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      phone: `${selectedCode} ${phone}`,
      message: formData.get("message")?.toString().trim(),
      budget: formData.get("budget")?.toString(),
      meetingDate,
      meetingTime,
    };

    // ✅ Validation
    if (!payload.name || !payload.email || !selectedCode || !phone || !payload.message) {
      setLoading(false);
      setError("Please fill in all required fields.");
      return;
    }

    const phoneRegex = /^\d{7,15}$/;
    if (!phoneRegex.test(phone)) {
      setLoading(false);
      setError("Please enter a valid phone number (7–15 digits).");
      return;
    }

    if (!meetingDate || !meetingTime) {
      setLoading(false);
      setError("Please select your preferred meeting date and time.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to submit form");

      setSuccess("Thanks! Your meeting has been scheduled. We'll confirm via email soon.");
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
          Let’s discuss your dream project and schedule a meeting to get started.
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
                <Mail className="h-5 w-5 text-indigo-500" /> info@parwanix.com
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
                <input id="name" name="name" required placeholder="John Doe" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-400" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700" htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-400" />
              </div>

              {/* Phone */}
              <div className="space-y-1 sm:col-span-2">
                <label className="text-sm font-medium text-gray-700" htmlFor="phone">
                  Phone Number *
                </label>
                <div className="flex gap-2">
                  <select
                    id="countryCode"
                    name="countryCode"
                    value={selectedCode}
                    onChange={(e) => setSelectedCode(e.target.value)}
                    className="w-1/4 rounded-lg border border-gray-300 px-2 py-2 focus:ring-2 focus:ring-indigo-400 text-sm"
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
                    className="w-3/4 rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              </div>

              {/* Date & Time Pickers */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-indigo-500" /> Meeting Date *
                </label>
                <input
                  id="meetingDate"
                  name="meetingDate"
                  type="date"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-indigo-500" /> Meeting Time *
                </label>
                <input
                  id="meetingTime"
                  name="meetingTime"
                  type="time"
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              {/* Message */}
              <div className="sm:col-span-2 space-y-1">
                <label className="text-sm font-medium text-gray-700" htmlFor="message">Project Requirements *</label>
                <textarea id="message" name="message" required rows={5} placeholder="Tell us about your project goals, timeline, and must-haves." className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-400"></textarea>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700" htmlFor="budget">Budget Range</label>
                <select id="budget" name="budget" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-400">
                  <option value="1k-5k">$1,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-15k">$10,000 - $15,000</option>
                  <option value="15k-20k">$15,000 - $20,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value=">50k">$50,000+</option>
                </select>
              </div>
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
              {loading ? "Submitting..." : "Schedule Meeting"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
