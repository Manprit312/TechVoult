"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation"; // ✅ import router
import Image from "next/image";
export default function Header() {
  const router = useRouter(); // ✅ use router
  const [activeMenu, setActiveMenu] = useState("Services");
  const [activeCategory, setActiveCategory] = useState("Our Expertise");
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);

  const megaMenu = {
    categories: ["Our Expertise","Web Development","App Development" ,"AI Development", "Blockchain", "Gaming",],

    "Our Expertise": { 
      "Top Services": [
        { name: "Website Development", href: "webdevelopment" },
        { name: "App Development", href: "mobiledevelopment" },
        // { name: "Gaming Services", href: "gamedevelopment" },
        // { name: "IT Managed Services", href: "ManageItServices" },
        // { name: "AI Development", href: "ai-development" },
        { name: "Social Media Management", href: "social-media" },
        { name: "Content Writing Services", href: "content-creation" },
        { name: "Videography Services", href: "videography" },
        { name: "Photography Services", href: "photography" },
      ],
     
    },
"Web Development":{ Ecommerce: [
    { name: "Web Development", href: "webdevelopment" },
        { name: "Shopify", href: "shopify" },
        { name: "Magento", href: "magento" },
        { name: "Woocommerce", href: "woocommerce" },
        { name: "BigCommerce", href: "bigcommerce" },
        { name: "ZenCart", href: "zencart" },
        { name: "Shift4shop", href: "shift4shop" },
        { name: "Prestashop", href: "prestashop" },
      ],
      CMS: [
        { name: "Wordpress", href: "wordpress" },
        { name: "Wix", href: "wix" },
      ],},
      "App Development":{
 "Top Services": [
     
        { name: "App Development", href: "mobiledevelopment" },]
      },
    "AI Development": {
      "": [
        { name: "AI Development Company", href: "ai-development" },
        { name: "Machine Learning", href: "machine-learning" },
        { name: "AI Chatbot", href: "ai-chatbot" },
        { name: "AI & ML Implementation", href: "ai-ml-implementation" },
      ],
      "Automations": [
        { name: "Account Payable Automations", href: "account-payable-automation" },
      ],
      "IOT": [
        { name: "IOT Development", href: "iot-development" },
      ]

    },

  "Blockchain": {
      Blockchain: [
        { name: "Blockchain Development", href: "web3development" },
        { name: "HyperLedger", href: "hyperledger-development-company" },
        { name: "Solana Development", href: "solana-development" },
      ],
      Tokens: [
        { name: "Crypto Token Development", href: "crypto-token-development" },
        { name: "NFT Token", href: "nft-development" },
        { name: "DeFi Token", href: "defi-development" },
      ],
      Wallet: [
        { name: "Crypto Wallet", href: "crypto-wallet" },
        { name: "NFT Wallet", href: "nft-wallet" },
        { name: "DeFi Wallet", href: "defi-wallet" },
      ],
      NFT: [
        { name: "Crypto Development", href: "crypto-token-development" },
        { name: "NFT Development", href: "nft-development" },
        { name: "DeFi Development", href: "defi-development" },
      ],
      Exchange: [
        { name: "White Label Crypto Exchange", href: "white-label-crypto-exchange-development" },
        { name: "Centralized Exchange", href: "centralized-crypto-exchange-development" },
        { name: "DeFi Exchange", href: "defi-exchange-development" },
        { name: "Crypto Derivatives Exchange", href: "crypto-derivatives-exchange" },
        { name: "P2P Crypto Exchange", href: "p2p-crypto-exchage" },


      ],
    },

    Gaming: {
      "Game Development": [
        { name: "Unity Game Development", href: "gamedevelopment" },
        { name: "Unreal Engine", href: "gamedevelopment" },
        { name: "AR/VR Games", href: "gamedevelopment" },
      ],
    },

    "Hire Developer": {
      "Hire Experts": [
        { name: "Hire React Developer", href: "hire-react" },
        { name: "Hire Node Developer", href: "hire-node" },
        { name: "Hire Python Developer", href: "hire-python" },
      ],
    },
  };

  const menus = [
    { title: "Services", href: "", mega: true },
    {
      title: "About",
      href: "/aboutUs",

    },
    { title: "Portfolio", href: "/webdevelopment#portfolio",  },
    {
      title: "Contact",
      href: "/contactUs",

    },
  ];

  // Close menu on outside click (desktop only)
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
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50 ">
      <div className="container flex items-center justify-between mt-4">
        {/* Logo */}
       <Link href="/" className="flex items-center ">
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
                    className={`transition-transform ${activeMenu === menu.title
                        ? "rotate-180 text-primary"
                        : "text-gray-500"
                      }`}
                  />
                )}
              </Link>

              {/* Mega Menu for Services */}
              {menu.mega && activeMenu === "Services" && (
                <div className="absolute left-0 mt-6 w-[850px] bg-white shadow-xl rounded-lg border border-gray-100 p-6 grid grid-cols-4 gap-6 z-50">
                  {/* Categories List */}
                  <div>
                    {megaMenu.categories.map((cat, i) => (
                      <button
                        key={i}
                        onMouseEnter={() => setActiveCategory(cat)}
                        className={`block w-full text-left px-3 py-2 mt-2 rounded-md text-sm font-medium ${activeCategory === cat
                            ? "bg-gray-900 text-white"
                            : "text-gray-700 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white"
                          }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Submenu (groups of links) */}
                  <div className="col-span-3 grid grid-cols-3 gap-6">
                    {Object.entries(megaMenu[activeCategory] || {}).map(
                      ([group, links], idx) => (
                        <div key={idx}>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {group}
                          </h4>
                          <div className="space-y-1 text-sm text-gray-700">
                            {links.map((srv, i) => (
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
                      )
                    )}
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
          <Link
            href="contactUs"
            className="px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow hover:opacity-90 transition"
          >Schedule Online Meeting
          </Link>
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
      {/* Mobile Nav */}
   {mobileOpen && (
  <div className="md:hidden bg-white border-t shadow-lg">
    <div className="flex flex-col space-y-2 px-6 py-4">
      {menus.map((menu, idx) => (
        <div key={idx} className="flex flex-col">
          {menu.mega ? (
            <>
              <button
                onClick={() =>
                  setActiveMenu(activeMenu === menu.title ? null : menu.title)
                }
                className="flex justify-between items-center py-2 text-gray-700 font-medium hover:text-primary"
              >
                {menu.title}
                <span className="text-sm">
                  {activeMenu === menu.title ? "▲" : "▼"}
                </span>
              </button>

              {/* Mega Services - Always Open Categories */}
              {activeMenu === "Services" && (
                <div className="pl-4 mt-2 border-l border-gray-200 max-h-[400px] overflow-y-auto">
                  {megaMenu.categories.map((cat, i) => (
                    <div key={i} className="flex flex-col mb-4">
                      <p className="font-semibold text-gray-800 mb-2">{cat}</p>

                      {/* Render groups inside each category */}
                      {Object.entries(megaMenu[cat] || {}).map(
                        ([group, links], idx) => (
                          <div key={idx} className="mb-3">
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {group}
                          </h4>
                            {links.map((srv) => (
                              <button
                                key={idx}
                                onMouseEnter={(e) => {
                                  e.stopPropagation();
                                  console.log("Clicked service:", srv);
                                  setMobileOpen(false);
                                  setActiveMenu(null);
                                  router.push(srv.href);
                                }}
                                className="block py-1 text-left hover:text-primary w-full text-sm"
                              >
                                {srv.name}
                              </button>
                            ))}
                          </div>
                        )
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link
              href={menu.href}
              className="py-2 text-gray-700 font-medium hover:text-primary"
              onClick={() => {
                setMobileOpen(false);
                setActiveMenu(null);
              }}
            >
              {menu.title}
            </Link>
          )}
        </div>
      ))}

      {/* CTA */}
      <Link
        href="/contactUs"
        className="mt-4 text-center px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow hover:opacity-90 transition"
        onClick={() => {
          setMobileOpen(false);
          setActiveMenu(null);
        }}
      >
       Schedule Online Meeting
      </Link>
    </div>
  </div>
)}
    </header>
  );
}
