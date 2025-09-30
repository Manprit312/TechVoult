"use client";
import { Phone, Mail, Calendar, MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="fixed top-1/6 right-0 z-50">
      <div className="flex flex-col gap-4 p-3 rounded-2xl shadow-lg">
        {/* WhatsApp */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white shadow-md">
          <MessageCircle className="w-6 h-6" />
        </div>

        {/* Calendly */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md">
          <Calendar className="w-6 h-6" />
        </div>

        {/* Contact Us */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white shadow-md">
          <Mail className="w-6 h-6" />
        </div>

        {/* Telephone */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-500 text-white shadow-md">
          <Phone className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
