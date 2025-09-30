import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative text-center py-30 overflow-hidden h-full">
      {/* Animated Gradient Background */}
  <div className="absolute inset-0 animate-gradient bg-[linear-gradient(270deg,#fb923c,#f472b6,#60a5fa,#4ade80)] bg-[length:400%_400%]"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        {/* Top Badge Button */}
        <div className="mb-6">
          <span className="inline-block px-6 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm  tracking-wide shadow hover:bg-white/30 transition cursor-pointer">
            Transform Your Digital Presence
          </span>
        </div>
        <h1 className="text-7xl font-extrabold mb-6 leading-tight">
          Next-Level <br />
          <span className="bg-gradient-to-r from-orange-300 via-pink-400 to-blue-300 bg-clip-text text-transparent">Digital Solutions</span>
        </h1>

        <p className="max-w-3xl mx-auto mb-8 text-lg">
          From web development to AI-powered solutions, we craft digital experiences
          that drive growth and innovation for your business.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <Link
            href="/contact"
            className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold shadow hover:shadow-lg transition"
          >
            Start Your Project
          </Link>
          <Link
            href="/portfolio"
            className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition"
          >
            View Our Work
          </Link>
        </div>

        {/* Stats Row */}
        {/* Stats Row */}
<div className="grid grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto text-lg  text-center divide-y md:divide-y-0 md:divide-x divide-white/30">
  <div className="py-4">
    <span className="text-4xl  font-semibold block bg-gradient-to-r from-orange-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
      500+
    </span>
    Projects Delivered
  </div>
  <div className="py-4">
    <span className="text-4xl font-semibold  block bg-gradient-to-r from-orange-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
      98%
    </span>
    Client Satisfaction
  </div>
  <div className="py-4">
    <span className="text-4xl font-semibold  block bg-gradient-to-r from-orange-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
      24/7
    </span>
    Support Available
  </div>
  <div className="py-4">
    <span className="text-4xl  font-semibold block bg-gradient-to-r from-orange-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
      5+
    </span>
    Years Experience
  </div>
</div>



      </div>
    </section>
  );
}
