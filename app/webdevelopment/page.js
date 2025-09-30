"use client";
import Link from "next/link";

export default function WebDevelopmentPage() {
  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-16 mt-16">
        <div className="mx-auto max-w-screen-xl grid md:grid-cols-2 gap-12 items-center px-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Top Web Development Company
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We build scalable, secure, and high-performing websites tailored for your business success.
            </p>
            <div className="mt-6">
              <Link
                href="#contact"
                className="inline-block rounded-lg bg-gradient-to-r from-orange-400 to-pink-500 px-6 py-3 text-white font-semibold shadow hover:opacity-90"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
          {/* Placeholder for Hero Image */}
          <div className="w-full h-80 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
            Hero Image
          </div>
        </div>
      </section>

      {/* ABOUT COMPANY */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-screen-xl grid md:grid-cols-2 gap-12 px-6">
          {/* Image Placeholder */}
          <div className="w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
            About Image
          </div>
          <div>
            <h2 className="text-3xl font-bold">SDLC Corp – Expert Website Development Services</h2>
            <p className="mt-4 text-gray-600">
              We deliver custom websites that are fast, secure, and scalable. Our expert developers use the latest
              technologies to create seamless user experiences across devices.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6">
              <div>
                <p className="text-3xl font-extrabold text-indigo-600">140+</p>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-pink-600">450+</p>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-16">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <h2 className="text-3xl font-bold">Our Website Development Services</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8 text-left">
            {[
              "Custom Web Development",
              "CMS Development",
              "Ecommerce Solutions",
              "Web App Development",
              "UI/UX Design",
              "Maintenance & Support",
            ].map((service, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-md"
              >
                <h3 className="text-lg font-semibold">{service}</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  High-quality {service.toLowerCase()} tailored to business needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <h2 className="text-3xl font-bold">Why Choose SDLC Corp?</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8 text-left">
            {[
              "Expert Developers",
              "Agile Process",
              "On-Time Delivery",
            ].map((reason, i) => (
              <div
                key={i}
                className="p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-semibold">{reason}</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  We guarantee {reason.toLowerCase()} for every project.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-16">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <h2 className="text-3xl font-bold">Our Portfolio</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-full h-60 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500"
              >
                Portfolio Image {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-screen-xl px-6">
          <h2 className="text-3xl font-bold text-center">
            Easy & Fast Web Development Process
          </h2>
          <div className="mt-10 grid md:grid-cols-4 gap-8">
            {["Planning", "Design", "Development", "Deployment"].map((step, i) => (
              <div
                key={i}
                className="p-6 text-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-semibold">{step}</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Step {i + 1}: {step} phase in building your website.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-16">
        <div className="mx-auto max-w-screen-lg px-6 grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Let’s Talk About Your Project</h2>
            <p className="text-gray-600">
              Fill the form and let’s build your dream website together.
            </p>
          </div>
          {/* Form */}
          <form className="bg-white p-8 rounded-xl shadow space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-3 py-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg px-3 py-2"
            />
            <textarea
              placeholder="Tell us about your project"
              rows={4}
              className="w-full border rounded-lg px-3 py-2"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-orange-400 to-pink-500 text-white py-3 font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
