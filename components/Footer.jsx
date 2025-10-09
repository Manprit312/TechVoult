import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 mt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Brand */}


        <div >
          {/* Logo */}
          <Link href="/" className="flex items-center bg-white mb-2">
            {/* Logo Image */}
            <Image
              src="/logo.png"
              alt="TechVoult Logo"
              width={70}
              height={70}
              className="pl-1"
            />

            {/* Text Wrapper */}
            <div className="flex flex-col leading-tight">
              {/* Brand Name */}
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Parwanix
              </span>
              {/* Tagline */}
              <span className="text-sm text-gray-500">
                Land of AI Butterflies
              </span>
            </div>
          </Link>

          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Transforming businesses through innovative digital solutions
            and cutting-edge technology.
          </p>
          <div className="flex space-x-4">
            <a href="#"><Facebook className="w-5 h-5 hover:text-white transition" /></a>
            <a href="#"><Twitter className="w-5 h-5 hover:text-white transition" /></a>
            <a href="#"><Linkedin className="w-5 h-5 hover:text-white transition" /></a>
            <a href="#"><Github className="w-5 h-5 hover:text-white transition" /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/webdevelopment">Web Development</Link></li>
            <li><Link href="/mobiledevelopment">App Development</Link></li>
            <li><Link href="/web3development">Blockchain</Link></li>
            <li><Link href="/gamedevelopment">Game Development</Link></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-white font-semibold mb-4"></h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/social-media">Digital Marketing</Link></li>
            <li><Link href="/social-media">SEO Services</Link></li>
            <li><Link href="/social-media">Advertisement</Link></li>
            <li><Link href="/ai-development">AI Solutions</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4"></h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/aboutUs">About Us</Link></li>
            {/* <li><Link href="/portfolio">Portfolio</Link></li> */}
            {/* <li><Link href="/careers">Careers</Link></li> */}
            <li><Link href="/contactUs">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © 2025 Land of AI butterflies. All rights reserved. |
        <Link href="/privacy" className="ml-2 hover:text-white">Privacy Policy</Link> |
        <Link href="/terms" className="ml-2 hover:text-white">Terms of Service</Link>|
        <div>
          credit to   <Link href="https://www.bharatai.store/" className="ml-2 hover:text-white"> BharatAI Store</Link>

        </div>

      </div>
    </footer>
  );
}
