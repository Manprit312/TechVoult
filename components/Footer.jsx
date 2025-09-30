import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 mt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Tech<span className="text-orange-500">Vault</span>
          </h3>
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
            <li><Link href="/services">Web Development</Link></li>
            <li><Link href="/services">App Development</Link></li>
            <li><Link href="/services">Blockchain</Link></li>
            <li><Link href="/services">Game Development</Link></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-white font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services">Digital Marketing</Link></li>
            <li><Link href="/services">SEO Services</Link></li>
            <li><Link href="/services">Advertisement</Link></li>
            <li><Link href="/services">AI Solutions</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © 2025 TechVault. All rights reserved. | 
        <Link href="/privacy" className="ml-2 hover:text-white">Privacy Policy</Link> | 
        <Link href="/terms" className="ml-2 hover:text-white">Terms of Service</Link>
      </div>
    </footer>
  );
}
