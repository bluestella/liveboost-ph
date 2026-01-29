import type { Metadata } from "next";
import Link from "next/link";
import PricingCard, { Plan } from "@/components/PricingCard";
import CompareTable from "@/components/CompareTable";

export default function PricingPage() {
  const plans: Plan[] = [
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-orange-600/10"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Choose Your 
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"> Growth </span>
            Plan
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Flexible monthly subscriptions. No contracts. Cancel anytime.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <CompareTable planLabels={[plans[0].name, plans[1].name, plans[2].name]} planPrices={[plans[0].price, plans[1].price, plans[2].price]} rows={comparison} />
        </div>
      </section>

      <section className="relative py-24 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
              Compare Features
            </h2>
            <p className="text-xl text-gray-600">See what&apos;s included in each plan</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-4 text-sm">
              {/* Labels column */}
              <section className="md:contents">
                {/* Header cell */}
                <div
                  className="p-6 bg-gradient-to-r from-slate-50 to-gray-50 font-bold text-gray-900 text-left border-b border-gray-200"
                  style={{ order: 1 }}
                >
                  Feature
                </div>
                {comparison.map((row, i) => (
                  <div
                    key={row.feature}
                    className="p-6 bg-white text-gray-800 text-left border-b border-gray-100 font-medium"
                    style={{ order: 5 + i * 4 }}
                  >
                    {row.feature}
                  </div>
                ))}
              </section>

              {/* Starter column */}
              <section className="md:contents">
                <div
                  className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 font-bold text-center border-b border-gray-200"
                  style={{ order: 2 }}
                >
                  <div className="text-lg font-bold text-gray-900">{plans[0].name}</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {plans[0].price}
                  </div>
                </div>
                {comparison.map((row, i) => (
                  <div
                    key={row.feature}
                    className="p-6 bg-blue-50/30 text-center border-b border-gray-100 font-semibold text-gray-700"
                    style={{ order: 6 + i * 4 }}
                  >
                    {row.starter}
                  </div>
                ))}
              </section>

              {/* Growth column */}
              <section className="md:contents">
                <div
                  className="p-6 bg-gradient-to-br from-orange-100 to-red-100 font-bold text-center border-b border-gray-200 relative"
                  style={{ order: 3 }}
                >
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                      Most Popular
                    </div>
                  </div>
                  <div className="text-lg font-bold text-gray-900 mt-2">{plans[1].name}</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    {plans[1].price}
                  </div>
                </div>
                {comparison.map((row, i) => (
                  <div
                    key={row.feature}
                    className="p-6 bg-orange-50/50 text-center border-b border-gray-100 font-semibold text-gray-700"
                    style={{ order: 7 + i * 4 }}
                  >
                    {row.growth}
                  </div>
                ))}
              </section>

              {/* Premium column */}
              <section className="md:contents">
                <div
                  className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 font-bold text-center border-b border-gray-200"
                  style={{ order: 4 }}
                >
                  <div className="text-lg font-bold text-gray-900">{plans[2].name}</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {plans[2].price}
                  </div>
                </div>
                {comparison.map((row, i) => (
                  <div
                    key={row.feature}
                    className="p-6 bg-purple-50/30 text-center border-b border-gray-100 font-semibold text-gray-700"
                    style={{ order: 8 + i * 4 }}
                  >
                    {row.premium}
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about our plans</p>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "Can I switch plans anytime?", a: "Yes, you can upgrade or downgrade at the end of any billing cycle. We'll prorate any differences and make the transition seamless." },
              { q: "What platforms do you support?", a: "We specialize in Shopee, Lazada, and TikTok Shop - the three major e-commerce platforms in the Philippines and Southeast Asia." },
              { q: "How quickly can we start?", a: "Typically within 3-5 business days after onboarding details are provided. We'll work with you to set up your first live session as soon as possible." },
              { q: "Do you provide the products?", a: "No, we host and sell your products during live sessions. You maintain full control over your inventory and product selection." },
              { q: "What if I need to cancel?", a: "You can cancel anytime before the next billing date. No long-term contracts or cancellation fees - we believe in earning your business every month." },
              { q: "Do you offer trial periods?", a: "We can arrange a single paid test session under the Starter plan to help you experience our service before committing to a full month." },
            ].map((item) => (
              <div key={item.q} className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Not sure which plan is right for you? Contact us for a personalized recommendation based on your business needs and goals.
          </p>
          <Link href="/contact" className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 inline-flex items-center gap-3">
            Contact Us for Recommendation
          </Link>
        </div>
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
