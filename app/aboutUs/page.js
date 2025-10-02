import Image from "next/image";
import { Lightbulb, Target, ShieldCheck, Users,  } from "lucide-react";
import Link from "next/link";
export default function AboutPage() {
  return (
    <main className="w-full">
      {/* PAGE HEADER */}
      <section className="my-16 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-12 text-center text-gray-900">
        <h1 className="text-4xl font-extrabold">About Us</h1>
        <p className="mt-2 text-base max-w-2xl mx-auto opacity-80">
          Learn more about our mission, vision, and the values that drive us forward.
        </p>
      </section>

      {/* MISSION & VISION (with images) */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-20 grid gap-10 md:grid-cols-2">
          {/* Mission text */}
          <article className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Target className="h-6 w-6 text-indigo-500" /> Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to pioneer the convergence of AI, AR/VR, Blockchain, and
              Digital Transformation—delivering cutting-edge solutions that enhance
              communication, learning, creativity, and productivity. Through relentless
              pursuit of excellence, we aim to shape a future where technology enriches
              human interactions and unlocks new possibilities.
            </p>
          </article>

          {/* Mission image */}
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/assets/images/about.jpeg"
              alt="Mission"
              width={600}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Vision image */}
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <Image
             src="/assets/images/vision.jpeg"
              alt="Vision"
              width={600}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Vision text */}
          <article className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-pink-500" /> Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our vision is to be a global leader recognized for our unwavering
              commitment to innovation, quality, and user-centric design. We strive to
              foster deeper connections between people and knowledge, creating a future
              where the physical and digital seamlessly blend for a smarter, more
              connected world.
            </p>
          </article>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-20">
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold">Our Values</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-7 shadow-sm hover:shadow-md text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100">
                <Users className="h-6 w-6 text-indigo-500" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Transparency</h3>
              <p className="mt-2 text-gray-600 text-sm">
                We believe in honesty and trust, building the best relationships with our
                clients through openness and accountability.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-7 shadow-sm hover:shadow-md text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-pink-100">
                <Lightbulb className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Innovation</h3>
              <p className="mt-2 text-gray-600 text-sm">
                We create innovative environments that help our clients reach their goals
                through creativity and new ideas.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-7 shadow-sm hover:shadow-md text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <ShieldCheck className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Quality & Support</h3>
              <p className="mt-2 text-gray-600 text-sm">
                We provide high-quality services and dependable support after delivery,
                ensuring long-term client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION WITH TEAM AVATARS */}
      <section className="relative bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
        <div className="mx-auto max-w-screen-xl px-4 py-20 text-center text-gray-900 relative z-10">
          <h2 className="text-3xl font-extrabold mb-4">Start Your Journey Today</h2>
          <p className="max-w-2xl mx-auto opacity-80">
            Achieve compliance and create an inclusive digital experience. We’ll help you
            every step of the way.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 mt-10">
            <Link
              href="contactUs"
              className="rounded-xl bg-gradient-to-r from-indigo-400 to-pink-400 px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-90"
            >
              Schedule a Meeting
            </Link>
          </div>
        </div>

        {/* Floating Team Avatars */}
        <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-6 opacity-70 z-0">
          {["/assets/team1.jpg","/assets/team2.jpg","/assets/team3.jpg","/assets/team4.jpg"].map((src, i) => (
            <Image
              key={i}
              src={"/assets/images/team.jpeg"}
              alt={`Team member ${i+1}`}
              width={100}
              height={100}
              className="rounded-full border-4 border-white shadow-md"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
