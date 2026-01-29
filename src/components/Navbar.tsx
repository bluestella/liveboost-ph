"use client";
import Link from "next/link";
import { Menu, Rocket, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/site.config";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl group-hover:shadow-lg transition-all duration-300">
            <Rocket className="h-5 w-5 text-white" aria-hidden />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {siteConfig.siteName}
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-gray-700 hover:text-gray-900 font-medium transition-colors relative group">
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <DarkModeToggle />
            <Link 
              href="/pricing" 
              className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </nav>
        
        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm px-3 py-2 hover:bg-white/80 transition-all duration-200"
          aria-label="Toggle Menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      
      {open && (
        <div className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-xl">
          <div className="px-6 py-6 flex flex-col gap-4">
            {siteConfig.navigation.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/pricing" 
              className="mt-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl text-center hover:shadow-lg transition-all duration-300" 
              onClick={() => setOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
