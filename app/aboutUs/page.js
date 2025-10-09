"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Lightbulb, Target, ShieldCheck, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="w-full text-gray-800 mt-18 overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-5xl font-extrabold text-gray-900">About Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-700">
            Empowering innovation through AI, Blockchain, and Digital Transformation —
            building tomorrow’s technology, today.
          </p>
        </motion.div>

        {/* Floating blobs */}
        <motion.div
          className="absolute top-0 left-0 w-72 h-72 bg-orange-200 rounded-full opacity-30 blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 rounded-full opacity-20 blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
      </section>
   {/* VISION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-gray-50 py-20"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/assets/images/vision.jpeg"
              alt="Our Vision"
              width={600}
              height={400}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold flex items-center gap-3 text-gray-900">
              <Lightbulb className="h-7 w-7 text-pink-500" /> Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We envision a future where technology bridges creativity and connection —
              where intelligent systems simplify life and amplify human potential.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our goal is to be a global leader recognized for our creativity,
              innovation, and human-first approach to technology.
            </p>
          </div>
        </div>
      </motion.section>
      {/* MISSION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white py-20"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <h2 className="text-3xl font-bold flex items-center gap-3 text-gray-900">
              <Target className="h-7 w-7 text-indigo-600" /> Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Parwanix, our mission is to lead the convergence of AI, AR/VR,
              Blockchain, and digital innovation. We design smart, scalable, and
              sustainable solutions that empower businesses and enhance human creativity.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By constantly pushing the boundaries of what technology can do, we aim to
              shape a connected world driven by intelligence, integrity, and impact.
            </p>
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <Image
                src="/assets/images/about.jpeg"
                alt="Our Mission"
                width={600}
                height={400}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

   

      {/* VALUES */}
      <section className="relative bg-gradient-to-br from-white via-purple-50 to-pink-50 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl font-extrabold mb-12">Our Core Values</h2>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {[
              {
                icon: <Users className="h-6 w-6 text-indigo-600" />,
                bg: "bg-indigo-100",
                title: "Transparency",
                text: "We believe in openness, trust, and accountability — building meaningful, long-term partnerships through clear communication.",
              },
              {
                icon: <Lightbulb className="h-6 w-6 text-pink-500" />,
                bg: "bg-pink-100",
                title: "Innovation",
                text: "Innovation is our heartbeat — we constantly explore creative solutions that empower businesses to stay ahead of the curve.",
              },
              {
                icon: <ShieldCheck className="h-6 w-6 text-green-600" />,
                bg: "bg-green-100",
                title: "Quality & Support",
                text: "We go beyond delivery — ensuring unmatched quality, reliability, and post-launch support that helps clients scale successfully.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="rounded-2xl bg-white shadow-md hover:shadow-xl transition p-8 border border-gray-100"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-full ${value.bg} mb-4`}
                >
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{value.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 text-white text-center py-20"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Let’s Build the Future Together 🚀
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We’re a team of thinkers, creators, and innovators. Partner with Parwanix
            Store to turn your ideas into powerful digital products.
          </p>
          <Link
            href="/contactUs#form"
            className="inline-block mt-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold px-6 py-3 rounded-xl hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            Schedule Online Meeting
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
