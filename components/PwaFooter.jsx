"use client";
import { useEffect, useState } from "react";
import { Home, Info, Phone, MessageCircle } from "lucide-react"; // example icons
import Link from "next/link";
export default function PWAFooter() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    // Check if app is running in PWA (standalone mode)
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true; // iOS check

    // Check if device is mobile (screen width <= 768px)
    const isMobile = window.innerWidth <= 768;

    if (isStandalone && isMobile) {
      setShowFooter(true);
    }
  }, []);

  if (!showFooter) return null;

  return (
 <footer
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        background: "linear-gradient(90deg, #f0705fe7, #ff0080)",
        color: "#fff",
        padding: "7px 0",
        textAlign: "center",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Link href="/" style={buttonStyle}>
          <Home size={24} />
          <span style={labelStyle}>Home</span>
        </Link>

        <Link href="/aboutUs" style={buttonStyle}>
          <Info size={24} />
          <span style={labelStyle}>About</span>
        </Link>

        <Link href="/contactUs" style={buttonStyle}>
          <Phone size={24} />
          <span style={labelStyle}>Contact</span>
        </Link>

        <Link href="/chat" style={buttonStyle}>
          <MessageCircle size={24} />
          <span style={labelStyle}>Chat</span>
        </Link>
      </nav>
    </footer>
  );

}

const buttonStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "12px",
  color: "#fff",
  textDecoration: "none",
  cursor: "pointer",
};

const labelStyle = {
  fontSize: "10px",
  marginTop: "4px",
};