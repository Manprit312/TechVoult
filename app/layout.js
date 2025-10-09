import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ChatBot from "@/components/ChatBot";

export const metadata = {
  title: "A land of AI butterflies - Digital Solutions",
  description: "Next-Level Digital Solutions for your business growth",
  manifest: "/manifest.json",
  themeColor: "#000000",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "A land of AI butterflies",
  },
  icons: {
    apple: "/icons/icon-192x192.png",
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="text-gray-900">
           {/* <PwaFooter /> */}

        <Header />
  
        <FloatingCTA />
        <ChatBot />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}