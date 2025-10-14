"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur border-b border-black/5">
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3"
      >
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          <span className="text-lg font-bold text-[var(--color-secondary)]">
            LiveBoost PH
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-secondary)]"
          >
            Home
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-secondary)]"
          >
            Pricing
          </Link>
          <a
            href="mailto:contact@liveboostph.com"
            className="text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-secondary)]"
          >
            Contact
          </a>
          <Link
            href="/pricing"
            className="inline-flex items-center rounded-md bg-[var(--color-primary)] text-white px-3 py-2 text-sm font-medium hover:bg-[#e6602f]"
          >
            View Plans
          </Link>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 border border-black/10"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden
            >
              <path d="M3 6h18" />
              <path d="M3 12h18" />
              <path d="M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5">
          <div className="px-4 py-3 space-y-2">
            <Link
              href="/"
              className="block text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-secondary)]"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="block text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-secondary)]"
              onClick={() => setOpen(false)}
            >
              Pricing
            </Link>
            <a
              href="mailto:contact@liveboostph.com"
              className="block text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-secondary)]"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-md bg-[var(--color-primary)] text-white px-3 py-2 text-sm font-medium hover:bg-[#e6602f]"
              onClick={() => setOpen(false)}
            >
              View Plans
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}