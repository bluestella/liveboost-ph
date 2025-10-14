"use client";
import Link from "next/link";
import { Menu, Rocket, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur supports-[backdrop-filter]:backdrop-blur border-b border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Rocket className="h-5 w-5 text-orange-500" aria-hidden />
          <span>LiveBoost PH</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <Link href="/pricing" className="hover:text-blue-700">Pricing</Link>
          <Link href="/contact" className="hover:text-blue-700">Contact</Link>
          <Link href="/pricing" className="ml-2 rounded-md bg-orange-500 text-white px-4 py-2 font-medium hover:bg-orange-600">Get Started</Link>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2"
          aria-label="Toggle Menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/pricing" className="rounded-md bg-orange-500 text-white px-4 py-2 font-medium" onClick={() => setOpen(false)}>Get Started</Link>
          </div>
        </div>
      )}
    </header>
  );
}