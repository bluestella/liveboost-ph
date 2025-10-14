import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LiveBoost PH — Professional Live Selling",
  description:
    "Professional hosts for Shopee, Lazada & TikTok Shop. No hiring hassles, just results.",
};

// Navbar is a client component in src/components/Navbar

function Footer() {
  return (
    <footer className="mt-20 border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 font-bold">
            <Rocket className="h-4 w-4 text-orange-500" aria-hidden />
            LiveBoost PH
          </div>
          <p className="mt-2 text-gray-600">Your partner for professional live selling.</p>
        </div>
        <div>
          <h4 className="font-semibold">Links</h4>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li>Email: contact@liveboostph.com</li>
            <li>Location: Philippines</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Follow Us</h4>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li><a href="#" aria-label="Facebook">Facebook</a></li>
            <li><a href="#" aria-label="Instagram">Instagram</a></li>
            <li><a href="#" aria-label="TikTok">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-gray-600">
          © 2025 LiveBoost PH. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white text-gray-900`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
