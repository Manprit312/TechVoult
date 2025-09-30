"use client";
import Link from "next/link";

export default function MobileAppDevelopmentPage() {
  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-16 mt-16">
        <div className="mx-auto max-w-screen-xl grid md:grid-cols-2 gap-12 items-center px-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Mobile App Development Services for iOS and Android
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Build powerful and scalable mobile apps that engage users and
              accelerate business growth.
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

      {/* WHY CHOOSE US */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-screen-xl grid md:grid-cols-2 gap-12 px-6 items-center">
          {/* Placeholder for Image */}
          <div className="w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
            About Image
          </div>
          <div>
            <h2 className="text-3xl font-bold">
              Why Choose Our Custom Mobile App Development Services
            </h2>
            <p className="mt-4 text-gray-600">
              We design and develop mobile apps with seamless performance,
              ensuring your business delivers the best user experience.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-16">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <h2 className="text-3xl font-bold">Our Mobile App Development Services</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8 text-left">
            {[
              "iOS App Development",
              "Android App Development",
              "Cross-Platform Apps",
              "Enterprise Mobility",
              "UI/UX Design",
              "App Maintenance",
            ].map((service, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-md"
              >
                <h3 className="text-lg font-semibold">{service}</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Scalable and high-performance {service.toLowerCase()} for your
                  business.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <h2 className="text-3xl font-bold">Key Features Of Our Mobile App Solutions</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-full h-60 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500"
              >
                Feature Image {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY SOLUTIONS */}
      <section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-16">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <h2 className="text-3xl font-bold">
            Mobile App Development Services For Every Industry We Serve
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8 text-left">
            {[
              "Healthcare",
              "Ecommerce",
              "Finance",
              "Travel",
              "Education",
              "On-Demand Apps",
            ].map((industry, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-md"
              >
                <h3 className="text-lg font-semibold">{industry}</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  End-to-end {industry.toLowerCase()} app solutions tailored for
                  growth.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <h2 className="text-3xl font-bold">Explore Our Mobile App Development Portfolio</h2>
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
      <section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-16">
        <div className="mx-auto max-w-screen-xl px-6">
          <h2 className="text-3xl font-bold text-center">
            Our Proven Mobile App Development Process
          </h2>
          <div className="mt-10 grid md:grid-cols-4 gap-8">
            {["Research", "Design", "Development", "Launch"].map((step, i) => (
              <div
                key={i}
                className="p-6 text-center bg-white rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-semibold">{step}</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Step {i + 1}: {step} phase in mobile app development.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="bg-white py-16">
        <div className="mx-auto max-w-screen-lg px-6 grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Let’s Talk About Your Project</h2>
            <p className="text-gray-600">
              Fill the form and let’s bring your mobile app idea to life.
            </p>
          </div>
          {/* Form */}
          <form className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-xl shadow space-y-4">
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
