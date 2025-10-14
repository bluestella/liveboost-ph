import type { Metadata } from "next";
import Link from "next/link";
import { Check, Star } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "STARTER",
      price: "₱8,999/month",
      badge: "Perfect for Testing",
      highlighted: false,
      features: [
        "4 live sessions/month",
        "2 hours per session",
        "1 platform (Shopee, Lazada, or TikTok)",
        "Up to 20 products",
        "Monthly performance report",
      ],
    },
    {
      name: "GROWTH",
      price: "₱16,999/month",
      badge: "⭐ Most Popular",
      highlighted: true,
      features: [
        "12 live sessions/month",
        "2-3 hours per session",
        "2 platforms of choice",
        "Up to 50 products",
        "Weekly reports",
        "Dedicated account manager",
        "Basic content planning",
      ],
    },
    {
      name: "PREMIUM",
      price: "₱29,999/month",
      badge: "Maximum Impact",
      highlighted: false,
      features: [
        "20 live sessions/month",
        "3-4 hours per session",
        "All 3 platforms",
        "Unlimited products",
        "Real-time dashboard",
        "Priority support",
        "Full content strategy",
        "Custom scheduling",
      ],
    },
  ];

  const comparison = [
    { feature: "Live sessions/month", starter: "4", growth: "12", premium: "20" },
    { feature: "Hours per session", starter: "2", growth: "2-3", premium: "3-4" },
    { feature: "Platforms", starter: "1", growth: "2", premium: "3" },
    { feature: "Products", starter: "Up to 20", growth: "Up to 50", premium: "Unlimited" },
    { feature: "Reports", starter: "Monthly", growth: "Weekly", premium: "Realtime + Weekly" },
    { feature: "Account manager", starter: "—", growth: "Dedicated", premium: "Dedicated" },
    { feature: "Content planning", starter: "—", growth: "Basic", premium: "Full strategy" },
    { feature: "Support", starter: "Standard", growth: "Priority", premium: "Priority" },
    { feature: "Scheduling", starter: "Fixed", growth: "Flexible", premium: "Custom" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Choose Your Growth Plan</h1>
        <p className="mt-2 text-gray-700">Flexible monthly subscriptions. No contracts. Cancel anytime.</p>
      </section>

      {/* Cards */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border p-6 shadow bg-white transition hover:shadow-lg ${
              plan.highlighted ? "md:scale-[1.03] border-blue-600" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs rounded-full bg-gray-100 px-3 py-1">
                {plan.badge}
              </span>
              {plan.highlighted && <Star className="h-4 w-4 text-yellow-500" aria-hidden />}
            </div>
            <h3 className="mt-3 text-xl font-bold">{plan.name}</h3>
            <div className="mt-1 text-2xl font-semibold">{plan.price}</div>
            <ul className="mt-4 space-y-2 text-gray-700">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-green-600" aria-hidden />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={`mt-6 inline-block rounded-md px-5 py-2 font-semibold ${
                plan.highlighted
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "border hover:bg-gray-50"
              }`}
            >
              Get Started
            </Link>
          </div>
        ))}
      </section>

      {/* Comparison Table (desktop) */}
      <section className="mt-14 hidden md:block">
        <h2 className="text-2xl font-bold text-center">Compare Features</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border px-4 py-2 text-left">Feature</th>
                <th className="border px-4 py-2">Starter</th>
                <th className="border px-4 py-2">Growth</th>
                <th className="border px-4 py-2">Premium</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.feature}>
                  <td className="border px-4 py-2 text-gray-800">{row.feature}</td>
                  <td className="border px-4 py-2">{row.starter}</td>
                  <td className="border px-4 py-2">{row.growth}</td>
                  <td className="border px-4 py-2">{row.premium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Comparison Accordion (mobile) */}
      <section className="mt-14 md:hidden">
        <h2 className="text-2xl font-bold text-center">Compare Features</h2>
        <div className="mt-6 space-y-4">
          {plans.map((plan) => (
            <details key={plan.name} className="rounded-xl border bg-white p-4 shadow">
              <summary className="cursor-pointer font-semibold">{plan.name}</summary>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                {comparison.map((row) => (
                  <li key={row.feature} className="flex justify-between">
                    <span className="text-gray-800">{row.feature}</span>
                    <span className="font-medium">
                      {plan.name === "STARTER" && row.starter}
                      {plan.name === "GROWTH" && row.growth}
                      {plan.name === "PREMIUM" && row.premium}
                    </span>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="mt-6 max-w-3xl mx-auto space-y-3">
          {[
            { q: "Can I switch plans anytime?", a: "Yes, you can upgrade or downgrade at the end of any billing cycle." },
            { q: "What platforms do you support?", a: "Shopee, Lazada, and TikTok Shop." },
            { q: "How quickly can we start?", a: "Typically within 3-5 business days after onboarding details are provided." },
            { q: "Do you provide the products?", a: "No, we host and sell your products during live sessions." },
            { q: "What if I need to cancel?", a: "You can cancel anytime before the next billing date." },
            { q: "Do you offer trial periods?", a: "We can arrange a single paid test session under the Starter plan." },
          ].map((item) => (
            <details key={item.q} className="rounded-xl border bg-white p-4 shadow">
              <summary className="cursor-pointer font-semibold">{item.q}</summary>
              <p className="mt-2 text-gray-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-16 text-center">
        <p className="text-gray-800">Not sure which plan? Contact us for a recommendation.</p>
        <Link href="/contact" className="mt-4 inline-block rounded-md bg-blue-600 text-white px-5 py-2 font-semibold hover:bg-blue-700">
          Contact Us
        </Link>
      </section>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Pricing — LiveBoost PH",
  description: "Choose a flexible monthly plan for professional live selling.",
  openGraph: {
    title: "LiveBoost PH Pricing",
    description: "Starter, Growth, and Premium plans for live selling.",
    type: "website",
  },
};