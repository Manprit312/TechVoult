"use client";
import Link from "next/link";
import {
  Gamepad2,
  Monitor,
  Smartphone,
  Users,
  Star,
  CheckCircle,
} from "lucide-react";
import FAQAccordion from "@/components/Faq";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GameDevelopmentPage() {
  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] py-20 mt-16">
        <div className="mx-auto max-w-screen-xl grid md:grid-cols-2 gap-12 items-center px-6">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Best Game Development Company
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              We create immersive, scalable, and interactive games across
              multiple platforms.
            </p>
            <div className="mt-6">
              <Link
                href="#contact"
                className="inline-block rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-6 py-3 text-white font-semibold shadow-lg hover:opacity-90 transition"
              >
                Get Free Consultation
              </Link>
            </div>
          </motion.div>
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/assets/images/gamehero.jpeg"
              alt="Game Development"
              className="w-full h-80 rounded-xl object-cover shadow-2xl"
              width={700}
              height={600}
            />
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-black py-16 text-white">
        <div className="mx-auto max-w-screen-xl grid md:grid-cols-2 gap-12 px-6 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-72 rounded-xl overflow-hidden"
          >
            <Image
              src="/assets/images/game.jpg"
              alt="Game Development"
              fill
              className="object-cover rounded-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Gamecraft at Its Best
            </h2>
            <p className="mt-4 text-gray-300">
              Our team specializes in delivering high-quality game development
              services for console, PC, and mobile platforms.
            </p>
            <div className="mt-6 flex gap-6">
              <div>
                <p className="text-3xl font-extrabold text-pink-500">20+</p>
                <p className="text-gray-400">Game Genres</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-purple-400">120+</p>
                <p className="text-gray-400">Projects Delivered</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gradient-to-r from-[#1f1c2c] via-[#928DAB] to-[#1f1c2c] py-16 text-white">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <h2 className="text-3xl font-bold">
            Our Exclusive Game Development Services
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8 text-left">
            {[
              "AR/VR Game Development",
              "Mobile Game Development",
              "Console Game Development",
              "PC Game Development",
              "Multiplayer Game Solutions",
              "NFT Game Development",
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="p-6 bg-black/40 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition flex gap-3"
              >
                <Gamepad2 className="h-6 w-6 text-pink-500" />
                <div>
                  <h3 className="text-lg font-semibold">{service}</h3>
                  <p className="mt-1 text-gray-300 text-sm">
                    Cutting-edge {service.toLowerCase()} tailored for your
                    needs.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-black py-16 text-white">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <h2 className="text-3xl font-bold">Technologies For Greater Games</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {["/assets/images/gametech.webp", "/assets/images/gametechno.jpeg"].map(
              (src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: i * 0.2 }}
                  className="w-full h-72 relative rounded-xl overflow-hidden bg-gray-200"
                >
                  <Image
                    src={src}
                    alt="Game Technologies"
                    fill
                    className="object-cover rounded-xl"
                  />
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="bg-gradient-to-r from-[#232526] via-[#414345] to-[#232526] py-16 text-white">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <h2 className="text-3xl font-bold">
            Developing Games For Multiple Platforms
          </h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Mobile", icon: Smartphone },
              { name: "PC", icon: Monitor },
              { name: "Tablet", icon: Users },
              { name: "Consoles", icon: Gamepad2 },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 bg-black/40 rounded-xl shadow flex flex-col items-center hover:scale-105 transition"
              >
                <item.icon className="h-8 w-8 text-pink-500" />
                <p className="mt-2 font-medium">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="bg-black py-16 text-white">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <h2 className="text-3xl font-bold">Our Games Portfolio</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[
              "/assets/images/gameportfolio1.jpeg",
              "/assets/images/gameportfolio2.jpeg",
              "/assets/images/gameportfolio3.jpeg",
            ].map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="relative w-full h-60 rounded-xl overflow-hidden bg-gray-200 hover:scale-105 transition"
              >
                <Image
                  src={src}
                  alt="Game Portfolio"
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gradient-to-r from-[#000000] via-[#434343] to-[#000000] py-16 text-white">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <h2 className="text-3xl font-bold">
            Why Choose Us As Your Game Development Partner?
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8 text-left">
            {[
              "Expert Developers",
              "Cross-Platform Delivery",
              "Cutting-Edge Tech",
              "Agile Workflow",
              "Immersive Design",
              "Proven Success",
            ].map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 bg-black/40 rounded-xl shadow hover:scale-105 transition flex gap-3"
              >
                <CheckCircle className="h-6 w-6 text-pink-500" />
                <div>
                  <h3 className="text-lg font-semibold">{reason}</h3>
                  <p className="mt-1 text-gray-300 text-sm">
                    We deliver {reason.toLowerCase()} for every game project.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-black py-16 text-white">
        <div className="mx-auto max-w-screen-xl px-6">
          <h2 className="text-3xl font-bold text-center">
            Our Steps Of Game Development Process
          </h2>
          <div className="mt-10 grid md:grid-cols-4 gap-8">
            {["Planning", "Design", "Development", "Testing"].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="p-6 text-center bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-indigo-500/20 rounded-xl shadow-sm hover:scale-105 transition"
              >
                <h3 className="text-lg font-semibold">{step}</h3>
                <p className="mt-2 text-gray-300 text-sm">
                  Step {i + 1}: {step} phase in building games.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-to-r from-[#141E30] via-[#243B55] to-[#141E30] py-16 text-white">
        <div className="mx-auto max-w-screen-xl px-6 text-center">
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="p-6 bg-black/40 rounded-xl shadow hover:scale-105 transition"
              >
                <Star className="h-6 w-6 text-yellow-500 mx-auto" />
                <p className="mt-4 text-gray-300 text-sm">
                  "Amazing game development team! Exceeded expectations."
                </p>
                <p className="mt-2 font-semibold text-white">Client {i}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="bg-black py-16 text-white">
        <div className="mx-auto max-w-screen-lg px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Get In Touch With The Best Game Development Company
            </h2>
            <p className="text-gray-300">
              Fill the form to discuss your game idea and let’s bring it to
              life.
            </p>
          </div>
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 p-8 rounded-xl shadow space-y-4"
          >
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-3 py-2 bg-black/40 text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg px-3 py-2 bg-black/40 text-white placeholder-gray-400"
            />
            <textarea
              placeholder="Describe your game project"
              rows={4}
              className="w-full border rounded-lg px-3 py-2 bg-black/40 text-white placeholder-gray-400"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-pink-500 to-indigo-500 text-white py-3 font-semibold hover:scale-105 transition"
            >
              Submit
            </button>
          </motion.form>
        </div>
      </section>

      <FAQAccordion />
    </main>
  );
}
