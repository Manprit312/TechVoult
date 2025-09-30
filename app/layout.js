import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
export const metadata = {
  title: "TechVault - Digital Solutions",
  description: "Next-Level Digital Solutions for your business growth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="  text-gray-900">
        <Header />
        <FloatingCTA />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
