"use client";
import Link from "next/link";
import { Menu, Rocket, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/site.config";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F1A]/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all duration-200">
            <Rocket className="h-5 w-5 text-white" aria-hidden />
          </div>
          <span className="text-xl font-semibold tracking-tight text-white">
            {siteConfig.siteName}
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.navigation
            .filter((i) => i.href !== "/apply")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/75 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          <div className="flex items-center gap-3">
            <Link
              href="/apply"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#4C6FFF] to-[#35D0BA] text-[#0B0F1A] font-semibold hover:opacity-95 transition-opacity"
            >
              Apply
            </Link>
          </div>
        </nav>
        
        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-3 py-2 hover:bg-white/10 transition-all duration-200"
          aria-label="Toggle Menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0B0F1A]/90 backdrop-blur-xl">
          <div className="px-6 py-6 flex flex-col gap-4">
            {siteConfig.navigation
              .filter((i) => i.href !== "/apply")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-white/80 hover:text-white py-2 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            <Link
              href="/apply"
              className="mt-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#4C6FFF] to-[#35D0BA] text-[#0B0F1A] font-semibold text-center hover:opacity-95 transition-opacity"
              onClick={() => setOpen(false)}
            >
              Apply
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
