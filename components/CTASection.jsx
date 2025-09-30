import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-orange-400 via-pink-400 to-blue-500 text-white rounded-2xl shadow-lg p-10 text-center">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Digital Transformation Today
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Join hundreds of satisfied clients who have transformed their businesses 
            with our expertise. Let’s create something amazing together.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/portfolio"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
