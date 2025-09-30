"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

  const menus = [
    {
      title: "Services",
      href: "#services",
      dropdown: [
        { name: "Web Development", href: "#services" },
        { name: "App Development", href: "#services" },
        { name: "Blockchain", href: "#services" },
        { name: "Game Development", href: "#services" },
      ],
    },
    {
      title: "About",
      href: "#why-choose",
      dropdown: [
        { name: "Our Team", href: "#why-choose" },
        { name: "Our Vision", href: "#why-choose" },
      ],
    },
    {
      title: "Contact",
      href: "#contact",
      dropdown: [
        { name: "Email Us", href: "#contact" },
        { name: "Live Chat", href: "#contact" },
      ],
    },
  ];

  return (
    <header className="w-full bg-background shadow-md fixed top-0 left-0 z-50">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pl-8"
        >
          TechVault
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 relative">
          {menus.map((menu, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setActiveMenu(menu.title)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <a
                href={menu.href}
                className="text-[#696363] hover:text-primary font-medium transition"
              >
                {menu.title}
              </a>

              {/* Dropdown */}
              {menu.dropdown && activeMenu === menu.title && (
                <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
                  {menu.dropdown.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow hover:opacity-90 transition"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
