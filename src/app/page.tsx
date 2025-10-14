"use client";
import Link from "next/link";
import { ArrowRight, BarChart3, CalendarClock, Users } from "lucide-react";
import EmailCapture from "@/components/EmailCapture";

export default function Home() {
  // Email capture moved to dedicated component using RHF+Zod

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-blue-100 via-white to-white">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Grow Your E-Commerce Sales with Professional Live Selling
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-700">
            Professional hosts for your Shopee, Lazada & TikTok Shop business. No hiring hassles, just results.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/pricing" className="rounded-lg bg-orange-500 text-white px-6 py-3 font-semibold hover:bg-orange-600 flex items-center gap-2 shadow-md hover:shadow-xl">
              View Plans <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#about" className="rounded-lg border px-6 py-3 font-semibold text-gray-800 hover:bg-gray-50 shadow-md hover:shadow-xl">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section id="subscribe" className="bg-orange-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <EmailCapture />
        </div>
      </section>

      {/* Value Proposition */}
      <section id="about" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl font-bold text-center">Why Choose LiveBoost PH?</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="rounded-xl border bg-white p-6 shadow-lg hover:shadow-xl transition">
              <Users className="h-6 w-6 text-blue-700" aria-hidden />
              <h4 className="mt-3 font-semibold">Pro Hosts</h4>
              <p className="mt-1 text-gray-700">Engaging, persuasive sellers trained for platform best practices.</p>
            </div>
            <div className="rounded-xl border bg-white p-6 shadow-lg hover:shadow-xl transition">
              <BarChart3 className="h-6 w-6 text-blue-700" aria-hidden />
              <h4 className="mt-3 font-semibold">Performance Focus</h4>
              <p className="mt-1 text-gray-700">Scripts, hooks, and CTAs optimized to drive conversions.</p>
            </div>
            <div className="rounded-xl border bg-white p-6 shadow-lg hover:shadow-xl transition">
              <CalendarClock className="h-6 w-6 text-blue-700" aria-hidden />
              <h4 className="mt-3 font-semibold">Flexible Plans</h4>
              <p className="mt-1 text-gray-700">From starter tests to daily shows—scale at your pace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl font-bold text-center">Start Selling in 5 Easy Steps</h2>
          <ol className="mt-8 grid md:grid-cols-5 gap-4 text-sm">
            {["Choose Your Plan","Sign Up & Pay","Share Your Details","Setup Call","Go Live"].map((step, i) => (
              <li key={step} className="rounded-xl border bg-white p-4 text-center shadow-lg hover:shadow-xl transition">
                <div className="text-xs text-gray-500">Step {i + 1}</div>
                <div className="font-semibold mt-1">{step}</div>
              </li>
            ))}
          </ol>
          <div className="mt-8 text-center">
            <Link href="/pricing" className="rounded-lg bg-orange-500 text-white px-6 py-3 font-semibold hover:bg-orange-600 shadow-md hover:shadow-xl">View Our Plans</Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl font-bold text-center">Trusted by Growing Businesses</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-8 md:gap-12">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-xl border bg-white p-6 shadow-lg hover:shadow-xl transition">
                <div className="flex text-yellow-500">★★★★★</div>
                <p className="mt-2 text-gray-700">“Great hosting and clear CTAs—our streams convert better!”</p>
                <p className="mt-2 text-sm text-gray-600">Owner, Local Shop</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Ready to Boost Your Sales?</h2>
          <p className="mt-2 text-gray-700">Join Philippine e-commerce businesses growing with live selling</p>
          <div className="mt-6 flex justify-center">
            <Link href="/pricing" className="rounded-lg bg-orange-500 text-white px-6 py-3 font-semibold hover:bg-orange-600 shadow-md hover:shadow-xl">Get Started Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
