"use client";
import Link from "next/link";
import { Gamepad2, Monitor, Smartphone, Users, Star, Trophy, CheckCircle } from "lucide-react";
import FAQAccordion from "@/components/Faq";
export default function GameDevelopmentPage() {
  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-16 mt-16">
        <div className="mx-auto max-w-screen-xl grid md:grid-cols-2 gap-12 items-center px-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Best Game Development Company
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We create immersive, scalable, and interactive games across multiple platforms.
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

      {/* ABOUT */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-screen-xl grid md:grid-cols-2 gap-12 px-6 items-center">
          <div className="w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
            About Image
          </div>
          <div>
            <h2 className="text-3xl font-bold">Gamecraft at Its Best</h2>
            <p className="mt-4 text-gray-600">
              Our team specializes in delivering high-quality game development services for console, PC, and mobile platforms.
            </p>
            <div className="mt-6 flex gap-6">
              <div>
                <p className="text-3xl font-extrabold text-indigo-600">20+</p>
                <p className="text-gray-600">Game Genres</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-pink-600">120+</p>
                <p className="text-gray-600">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-16">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <h2 className="text-3xl font-bold">Our Exclusive Game Development Services</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8 text-left">
            {[
              "AR/VR Game Development",
              "Mobile Game Development",
              "Console Game Development",
              "PC Game Development",
              "Multiplayer Game Solutions",
              "NFT Game Development",
            ].map((service, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-md flex gap-3"
              >
                <Gamepad2 className="h-6 w-6 text-indigo-600" />
                <div>
                  <h3 className="text-lg font-semibold">{service}</h3>
                  <p className="mt-1 text-gray-600 text-sm">
                    Cutting-edge {service.toLowerCase()} tailored for your needs.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <h2 className="text-3xl font-bold">Technologies For Greater Games</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500"
              >
                Feature Image {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-16">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <h2 className="text-3xl font-bold">Developing Games For Multiple Platforms</h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Mobile", icon: Smartphone },
              { name: "PC", icon: Monitor },
              { name: "Tablet", icon: Users },
              { name: "Consoles", icon: Gamepad2 },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow flex flex-col items-center"
              >
                <item.icon className="h-8 w-8 text-indigo-600" />
                <p className="mt-2 font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <h2 className="text-3xl font-bold">Our Games Portfolio</h2>
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

      {/* WHY CHOOSE US */}
      <section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-16">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <h2 className="text-3xl font-bold">Why Choose Us As Your Game Development Partner?</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8 text-left">
            {[
              "Expert Developers",
              "Cross-Platform Delivery",
              "Cutting-Edge Tech",
              "Agile Workflow",
              "Immersive Design",
              "Proven Success",
            ].map((reason, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-md flex gap-3"
              >
                <CheckCircle className="h-6 w-6 text-pink-600" />
                <div>
                  <h3 className="text-lg font-semibold">{reason}</h3>
                  <p className="mt-1 text-gray-600 text-sm">
                    We deliver {reason.toLowerCase()} for every game project.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-screen-xl px-6">
          <h2 className="text-3xl font-bold text-center">Our Steps Of Game Development Process</h2>
          <div className="mt-10 grid md:grid-cols-4 gap-8">
            {["Planning", "Design", "Development", "Testing"].map((step, i) => (
              <div
                key={i}
                className="p-6 text-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-semibold">{step}</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Step {i + 1}: {step} phase in building games.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-16">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-md"
              >
                <Star className="h-6 w-6 text-yellow-500 mx-auto" />
                <p className="mt-4 text-gray-600 text-sm">
                  "Amazing game development team! Exceeded expectations."
                </p>
                <p className="mt-2 font-semibold text-gray-800">Client {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="bg-white py-16">
        <div className="mx-auto max-w-screen-lg px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get In Touch With The Best Game Development Company</h2>
            <p className="text-gray-600">
              Fill the form to discuss your game idea and let’s bring it to life.
            </p>
          </div>
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
              placeholder="Describe your game project"
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
      <FAQAccordion/>
    </main>
  );
}
