"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ChevronDown } from "lucide-react";
export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);

  const megaMenu = {
    categories: ["Core", "AI/ML", "Web3", "ERP/CRM", "Gaming", "Hire Developer"],
    topServices: [
      { name: "Website Development", href: "webdevelopment" }
      ,
      { name: "Mobile App Development", href: "mobiledevelopment" },
      { name: "Gaming Services", href: "GameDevelopmentPage" },
      { name: "IT Managed Services", href: "webdevelopment" },
      { name: "AI Development", href: "webdevelopment" }


    ],
    ecommerce: [
      "Shopify",
      "Magento",
      "Woocommerce",
      "BigCommerce",
      "ZenCart",
      "Shift4shop",
      "Prestashop",
    ],
    cms: ["Wordpress", "Wix"],
  };

  const menus = [
    { title: 'Services', href: "#services", mega: true },
    {
      title: "About",
      href: "/aboutUs",
      dropdown: [
        { name: "Our Team", href: "#why-choose" },
        { name: "Our Vision", href: "#why-choose" },
      ],
    },
    {
      title: "Contact",
      href: "/contactUs",
      dropdown: [
        { name: "Email Us", href: "#contact" },
        { name: "Live Chat", href: "#contact" },
      ],
    },
  ];

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          TechVault
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 relative" ref={menuRef}>
          {menus.map((menu, idx) => (
            <div key={idx} className="relative">
           <Link
           href={menu.href}
  onMouseEnter={() =>
    setActiveMenu(activeMenu === menu.title ? null : menu.title)
  }
  onClick={() =>
    setActiveMenu(activeMenu === menu.title ? null : menu.title)
  }
  className="flex items-center gap-1 text-[#696363] hover:text-primary font-medium transition"
>
  {menu.title}
  {menu.title === "Services" && (
    <ChevronDown
      size={16}
      className={`transition-transform ${
        activeMenu === menu.title
          ? "rotate-180 text-primary"
          : "text-gray-500"
      }`}
    />
  )}
</Link>


              {/* Mega Menu for Services */}
              {menu.mega && activeMenu === "Services" && (
                <div className="absolute left-0 mt-6 w-[700px] bg-white shadow-xl rounded-lg border border-gray-100 p-6 grid grid-cols-4 gap-6 z-50">
                  {/* Categories */}
                  <div>
                    {megaMenu.categories.map((cat, i) => (
                      <button
                        key={i}
                        className={`block w-full text-left px-3 py-2 mt-2 rounded-md text-sm font-medium ${i === 0
                          ? "bg-gray-900 text-white"
                          : "text-gray-700 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white"
                          }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Top Services */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Top Services</h4>
                    <div className="space-y-1 text-sm text-gray-700">
                      {megaMenu.topServices.map((srv, i) => (
                        <Link
                          key={i}
                          href={srv.href}
                          className="block px-2 py-1 hover:text-primary cursor-pointer transition"
                        >
                          {srv.name}
                        </Link>
                      ))}
                    </div>
                  </div>


                  {/* Ecommerce */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Ecommerce</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {megaMenu.ecommerce.map((srv, i) => (
                        <li
                          key={i}
                          className="hover:text-primary cursor-pointer transition"
                        >
                          {srv}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CMS */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">CMS</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {megaMenu.cms.map((srv, i) => (
                        <li
                          key={i}
                          className="hover:text-primary cursor-pointer transition"
                        >
                          {srv}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Regular Dropdowns */}
              {menu.dropdown && activeMenu === menu.title && (
                <div className="absolute mt-6 w-52 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100 z-50">
                  {menu.dropdown.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow hover:opacity-90 transition"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gray-700"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col space-y-2 px-6 py-4">
            {menus.map((menu, idx) => (
              <div key={idx} className="flex flex-col">
                <button
                  onClick={() =>
                    setActiveMenu(activeMenu === menu.title ? null : menu.title)
                  }
                  className="flex justify-between items-center py-2 text-gray-700 font-medium hover:text-primary"
                >
                  {menu.title}
                  {menu.dropdown && (
                    <span className="text-sm">
                      {activeMenu === menu.title ? "▲" : "▼"}
                    </span>
                  )}
                </button>
                {menu.dropdown && activeMenu === menu.title && (
                  <div className="pl-4 space-y-1">
                    {menu.dropdown.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="block py-1 text-sm text-gray-600 hover:text-primary"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#contact"
              className="mt-4 text-center px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow hover:opacity-90 transition"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
