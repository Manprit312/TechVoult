"use client"
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
  <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 mt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-5 gap-12">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center bg-white mb-2">
            <Image
              src="/logo.png"
              alt="TechVoult Logo"
              width={70}
              height={70}
              className="pl-1"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Parwanix
              </span>
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
          {/* <h4 className="text-white font-semibold mb-4">Solutions</h4> */}
          <ul className="space-y-2 text-sm">
            <li><Link href="/social-media">Digital Marketing</Link></li>
            <li><Link href="/social-media">SEO Services</Link></li>
            <li><Link href="/social-media">Advertisement</Link></li>
            <li><Link href="/ai-development">AI Development</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          {/* <h4 className="text-white font-semibold mb-4">Company</h4> */}
          <ul className="space-y-2 text-sm">
            <li><Link href="/aboutUs">About Us</Link></li>
            <li><Link href="/contactUs">Contact</Link></li>
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link href="/terms-of-service">Terms of Services</Link></li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h4 className="text-white font-semibold mb-4">Working Hours</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>Monday – Friday</li>
            <li className="font-medium text-gray-300">10:00 AM – 6:00 PM</li>
            <li>Saturday – Sunday: <span className="text-gray-500">Closed</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
    <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
  © 2025 All rights reserved | Parwanix | Developed by{" "}
  <Link
    href="https://www.bharatai.store/"
    className="hover:text-white font-medium transition-colors"
  >
    BharatAI Solutions
  </Link>
</div>
    </footer>
  );
}
