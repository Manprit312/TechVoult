"use client";
import Link from "next/link";
import { Briefcase, Smile, Headset, Clock } from "lucide-react";
import { useState } from "react";
export default function HeroSection() {
  const stats = [
    { number: "500+", label: "Projects Delivered", icon: <Briefcase className="w-8 h-8 text-orange-400" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Smile className="w-8 h-8 text-pink-400" /> },
    { number: "24/7", label: "Support Available", icon: <Headset className="w-8 h-8 text-blue-400" /> },
    { number: "5+", label: "Years Experience", icon: <Clock className="w-8 h-8 text-green-400" /> },
  ];
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);

    try {
      // Optional: Track download analytics
      console.log('APK download initiated');

      // Check if we're in the browser
      if (typeof window !== 'undefined') {
        // Trigger download
        const link = document.createElement('a');
        link.href = '/app-release.apk';
        link.download = 'app-release.apk'; // Name for downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      // Optional: Send to analytics
      // await fetch('/api/track-download', { method: 'POST' });

      setTimeout(() => setDownloading(false), 2000);
    } catch (error) {
      console.error('Download failed:', error);
      setDownloading(false);
    }
  };

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

            <button
              onClick={handleDownload}
              className="px-8 py-3 rounded-lg font-semibold border border-white text-white hover:bg-white hover:text-gray-900 transition flex items-center justify-center gap-2"

              disabled={downloading}
            // className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2 mb-4"
            >
              {downloading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Downloading...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                 Download Our App
                </>
              )}
            </button>


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

