import { Users, ShieldCheck, Zap } from "lucide-react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
const WhyChoose=()=> {
  return (
    <section className="py-20 bg-gray-50" id="why-choose">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Text */}
        <div className="flex flex-col items-start justify-start">
      {/* Heading */}
      <h2 className="text-5xl font-bold mb-6">
        Why Choose{" "}
        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
         Parwanix
        </span>
      </h2>

      {/* Paragraph */}
      <p className="text-gray-600 mb-6 max-w-xl">
        We’re not just developers – we’re digital architects who ensure that every line 
        of code, every design choice, and every user interaction contributes to your business success.
      </p>

      {/* Bullet List */}
      <ul className="space-y-4 text-gray-700">
        <li className="flex items-start gap-2">
          <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0" />
          <span>Innovation-driven approach to every project</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0" />
          <span>Transparent communication throughout development</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0" />
          <span>Scalable solutions that grow with your business</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0" />
          <span>24/7 support and maintenance services</span>
        </li>
      </ul>

      {/* Button */}
      <Link
        href="/contactUs"
        className="mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold shadow-md hover:shadow-lg transition"
      >
        Start Your Project Today 
      </Link>
    </div>

        {/* Right Highlights */}
       <div className="grid gap-6">
  {/* Expert Team */}
  <div className="relative p-6 bg-white rounded-xl shadow transition-all duration-500 z-0 
                  hover:-translate-y-3 hover:shadow-[0_8px_30px_rgba(236,72,153,0.35)] hover:z-20 
                  border border-gray-200 hover:border-pink-300 flex items-start gap-4">
    <Users className="w-8 h-8 text-blue-500" />
    <div>
      <h3 className="font-semibold text-lg">Expert Team</h3>
      <p className="text-sm text-gray-600">
        Skilled professionals with years of industry experience.
      </p>
    </div>
  </div>

  {/* Proven Track Record */}
  <div className="relative p-6 bg-white rounded-xl shadow transition-all duration-500 z-0 
                  hover:-translate-y-3 hover:shadow-[0_8px_30px_rgba(236,72,153,0.35)] hover:z-20 
                  border border-gray-200 hover:border-pink-300 flex items-start gap-4">
    <ShieldCheck className="w-8 h-8 text-green-500" />
    <div>
      <h3 className="font-semibold text-lg">Proven Track Record</h3>
      <p className="text-sm text-gray-600">
        Consistently delivering high-quality solutions on time.
      </p>
    </div>
  </div>

  {/* Cutting Edge Tech */}
  <div className="relative p-6 bg-white rounded-xl shadow transition-all duration-500 z-0 
                  hover:-translate-y-3 hover:shadow-[0_8px_30px_rgba(236,72,153,0.35)] hover:z-20 
                  border border-gray-200 hover:border-pink-300 flex items-start gap-4">
    <Zap className="w-8 h-8 text-yellow-500" />
    <div>
      <h3 className="font-semibold text-lg">Cutting-Edge Tech</h3>
      <p className="text-sm text-gray-600">
        Using the latest technologies and best practices.
      </p>
    </div>
  </div>

  {/* Extra Stats */}
  <div className="grid grid-cols-2 gap-6 mt-6 text-center">
    <div className="p-6 bg-white rounded-xl shadow border border-gray-200 hover:border-pink-300 hover:shadow-[0_6px_20px_rgba(236,72,153,0.25)] transition-all duration-500">
      <span className="block text-3xl font-bold text-orange-500">50+</span>
      <span className="text-gray-700 font-medium">Technologies</span>
    </div>
    <div className="p-6 bg-white rounded-xl shadow border border-gray-200 hover:border-pink-300 hover:shadow-[0_6px_20px_rgba(236,72,153,0.25)] transition-all duration-500">
      <span className="block text-3xl font-bold text-pink-500">15+</span>
      <span className="text-gray-700 font-medium">Team Members</span>
    </div>
  </div>
</div>


      </div>
    </section>
  );
}
export default WhyChoose;