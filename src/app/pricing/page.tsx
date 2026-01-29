import type { Metadata } from "next";
import Link from "next/link";
import PricingCard, { type Plan } from "@/components/PricingCard";

export const metadata: Metadata = {
  title: "Pricing — LiveBoost PH",
  description: "Three flexible packages to launch, grow, or scale live selling.",
  openGraph: {
    title: "Pricing — LiveBoost PH",
    description: "Three flexible packages to launch, grow, or scale live selling.",
    type: "website",
  },
};

export default function PricingPage() {
  const plans: Plan[] = [
    {
      name: "Launch",
      price: "₱29k–₱49k / month",
      badge: "Best for starting",
      features: [
        "2–4 live sessions / week",
        "Host + producer",
        "Run-of-show + scripting",
        "Offer planning + CTA structure",
        "Basic post-live recap",
      ],
    },
    {
      name: "Growth",
      price: "₱59k–₱99k / month",
      badge: "Most popular",
      highlighted: true,
      features: [
        "4–6 live sessions / week",
        "Dedicated host pool",
        "Conversion-first scripts + prompts",
        "Weekly performance review",
        "Reporting + iteration roadmap",
      ],
    },
    {
      name: "Scale",
      price: "Custom",
      badge: "For high cadence",
      features: [
        "Daily live selling cadence",
        "Multi-platform execution",
        "Advanced run-of-show templates",
        "Full KPI dashboard + experimentation",
        "Priority support + planning",
      ],
    },
  ];

  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/10 bg-[#070A12]">
        <div className="absolute inset-0">
          <div className="absolute -top-48 left-1/2 h-[520px] w-[880px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#4C6FFF]/20 to-[#35D0BA]/15 blur-3xl" />
          <div className="absolute top-28 right-10 h-[320px] w-[320px] rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-14">
          <div className="text-xs font-semibold tracking-widest text-white/50">PRICING</div>
          <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Choose a package that matches your cadence
          </h1>
          <p className="mt-3 text-white/70 max-w-2xl">
            Indicative pricing ranges. Final quotes depend on session frequency, platforms, and production needs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        <div className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-white">Not sure which package fits?</div>
            <div className="mt-1 text-sm text-white/70">
              Apply and we’ll recommend the right cadence and team setup for your category.
            </div>
          </div>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#4C6FFF] to-[#35D0BA] px-6 py-3 font-semibold text-[#0B0F1A] hover:opacity-95 transition-opacity"
          >
            Apply
          </Link>
        </div>
      </section>
    </div>
  );
}
