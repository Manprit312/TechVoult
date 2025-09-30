// import Link from "next/link";

// export default function HeroSection() {
//   return (
//     <section className="relative text-center py-30 overflow-hidden h-full">
//       {/* Animated Gradient Background */}
//   <div className="absolute inset-0 animate-gradient bg-[linear-gradient(270deg,#fb923c,#f472b6,#60a5fa,#4ade80)] bg-[length:400%_400%]"></div>

//       {/* Content */}
//       <div className="relative z-10 text-white">
//         {/* Top Badge Button */}
//         <div className="mb-6">
//           <span className="inline-block px-6 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm  tracking-wide shadow hover:bg-white/30 transition cursor-pointer">
//             Transform Your Digital Presence
//           </span>
//         </div>
//         <h1 className="text-7xl font-extrabold mb-6 leading-tight">
//           Next-Level <br />
//           <span className="bg-gradient-to-r from-orange-300 via-pink-400 to-blue-300 bg-clip-text text-transparent">Digital Solutions</span>
//         </h1>

//         <p className="max-w-3xl mx-auto mb-8 text-lg">
//           From web development to AI-powered solutions, we craft digital experiences
//           that drive growth and innovation for your business.
//         </p>

//         {/* Buttons */}
//         <div className="flex justify-center gap-4 mb-12">
//           <Link
//             href="/contact"
//             className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold shadow hover:shadow-lg transition"
//           >
//             Start Your Project
//           </Link>
//           <Link
//             href="/portfolio"
//             className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition"
//           >
//             View Our Work
//           </Link>
//         </div>

//         {/* Stats Row */}
//         {/* Stats Row */}
// <div className="grid grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto text-lg  text-center divide-y md:divide-y-0 md:divide-x divide-white/30">
//   <div className="py-4">
//     <span className="text-4xl  font-semibold block bg-gradient-to-r from-orange-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
//       500+
//     </span>
//     Projects Delivered
//   </div>
//   <div className="py-4">
//     <span className="text-4xl font-semibold  block bg-gradient-to-r from-orange-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
//       98%
//     </span>
//     Client Satisfaction
//   </div>
//   <div className="py-4">
//     <span className="text-4xl font-semibold  block bg-gradient-to-r from-orange-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
//       24/7
//     </span>
//     Support Available
//   </div>
//   <div className="py-4">
//     <span className="text-4xl  font-semibold block bg-gradient-to-r from-orange-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
//       5+
//     </span>
//     Years Experience
//   </div>
// </div>



//       </div>
//     </section>
//   );
// }
import Link from "next/link";
import { Briefcase, Smile, Headset, Clock } from "lucide-react";

export default function HeroSection() {
  const stats = [
    { number: "500+", label: "Projects Delivered", icon: <Briefcase className="w-8 h-8 text-orange-400" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Smile className="w-8 h-8 text-pink-400" /> },
    { number: "24/7", label: "Support Available", icon: <Headset className="w-8 h-8 text-blue-400" /> },
    { number: "5+", label: "Years Experience", icon: <Clock className="w-8 h-8 text-green-400" /> },
  ];

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#22d3ee_0%,_#3b82f6_30%,_#6d28d9_100%)]"></div>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        {/* Left Column - Heading + CTA */}
        <div className="text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
            Next-Level
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Digital Solutions
          </h2>

          <p className="max-w-lg mb-8 text-lg md:text-xl text-gray-200">
            From web development to AI-powered innovation, we design digital
            experiences that accelerate growth and transform businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg hover:shadow-xl hover:scale-105 transition"
            >
              Start Your Project
            </Link>
            <Link
              href="#portfolio"
              className="px-8 py-3 rounded-lg font-semibold border border-white text-white hover:bg-white hover:text-gray-900 transition"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Right Column - Stats */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md text-center"
            >
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <span className="block text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {stat.number}
              </span>
              <span className="text-gray-200 text-sm md:text-base">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

