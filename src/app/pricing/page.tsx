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
    <div className="mx-auto max-w-7xl px-4 py-16">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Choose Your Growth Plan</h1>
        <p className="mt-2 text-gray-700">Flexible monthly subscriptions. No contracts. Cancel anytime.</p>
      </section>

      {/* Cards */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-xl border p-6 shadow-lg bg-white transition hover:shadow-xl ${
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
              className={`mt-6 inline-block rounded-lg px-5 py-2 font-semibold shadow-md hover:shadow-xl ${
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

      {/* Feature Comparison (responsive grid) */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-center">Compare Features</h2>
        <div className="mt-6">
          <div className="grid md:grid-cols-4 md:-mx-6 text-sm">
            {/* Labels column */}
            <section className="md:contents">
              {/* Header cell */}
              <div
                className="p-4 md:px-6 md:py-4 border border-gray-200 bg-gray-50 font-semibold rounded-xl md:rounded-none text-left"
                style={{ order: 1 }}
              >
                Feature
              </div>
              {comparison.map((row, i) => (
                <div
                  key={row.feature}
                  className="p-4 md:px-6 md:py-4 border border-gray-200 bg-white text-gray-800 text-left"
                  style={{ order: 5 + i * 4 }}
                >
                  {row.feature}
                </div>
              ))}
            </section>

            {/* Starter column */}
            <section className="md:contents">
              <div
                className="p-4 md:px-6 md:py-4 border border-gray-200 bg-white font-semibold rounded-xl md:rounded-none text-center"
                style={{ order: 2 }}
              >
                <div className="font-bold">{plans[0].name}</div>
                <div className="text-2xl font-bold">{plans[0].price}</div>
              </div>
              {comparison.map((row, i) => (
                <div
                  key={row.feature}
                  className="p-4 md:px-6 md:py-4 border border-gray-200 bg-white text-center"
                  style={{ order: 6 + i * 4 }}
                >
                  {row.starter}
                </div>
              ))}
            </section>

            {/* Growth column */}
            <section className="md:contents">
              <div
                className="p-4 md:px-6 md:py-4 border border-gray-200 bg-orange-50 font-semibold rounded-xl md:rounded-none text-center ring-2 ring-orange-500"
                style={{ order: 3 }}
              >
                <div className="font-bold">{plans[1].name}</div>
                <div className="text-2xl font-bold">{plans[1].price}</div>
                <div className="mt-1 text-xs inline-block rounded-full bg-orange-200 text-orange-900 px-2 py-0.5">{plans[1].badge}</div>
              </div>
              {comparison.map((row, i) => (
                <div
                  key={row.feature}
                  className="p-4 md:px-6 md:py-4 border border-gray-200 bg-orange-50 text-center"
                  style={{ order: 7 + i * 4 }}
                >
                  {row.growth}
                </div>
              ))}
            </section>

            {/* Premium column */}
            <section className="md:contents">
              <div
                className="p-4 md:px-6 md:py-4 border border-gray-200 bg-white font-semibold rounded-xl md:rounded-none text-center"
                style={{ order: 4 }}
              >
                <div className="font-bold">{plans[2].name}</div>
                <div className="text-2xl font-bold">{plans[2].price}</div>
              </div>
              {comparison.map((row, i) => (
                <div
                  key={row.feature}
                  className="p-4 md:px-6 md:py-4 border border-gray-200 bg-white text-center"
                  style={{ order: 8 + i * 4 }}
                >
                  {row.premium}
                </div>
              ))}
            </section>
          </div>
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
            <details key={item.q} className="rounded-xl border bg-white p-4 shadow-lg">
              <summary className="cursor-pointer font-semibold">{item.q}</summary>
              <p className="mt-2 text-gray-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-16 text-center">
        <p className="text-gray-800">Not sure which plan? Contact us for a recommendation.</p>
        <Link href="/contact" className="mt-4 inline-block rounded-lg bg-blue-600 text-white px-5 py-2 font-semibold hover:bg-blue-700 shadow-md hover:shadow-xl">
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