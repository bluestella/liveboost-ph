import React from "react";
import PricingCard from "@/components/PricingCard";
import EmailCapture from "@/components/EmailCapture";
import Container from "@/components/Container";

export const metadata = {
  title: "Choose Your Growth Plan — LiveBoost PH",
  description: "Flexible monthly subscriptions. Cancel anytime.",
};

export default function PricingPage() {
  return (
    <div>
      <Container className="py-12">
        <header className="text-center">
          <h1 className="text-3xl font-extrabold text-[var(--color-secondary)]">Choose Your Growth Plan</h1>
          <p className="mt-2 text-sm text-[var(--color-text)]">Flexible monthly subscriptions. Cancel anytime.</p>
        </header>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <PricingCard
            title="Starter"
            price="₱8,999/mo"
            badge="Perfect for Testing"
            features={[
              "4 sessions/month, 2hrs each",
              "1 platform",
              "20 products",
              "Monthly report",
            ]}
          />
          <PricingCard
            title="Growth"
            price="₱16,999/mo"
            badge="⭐ Most Popular"
            highlighted
            features={[
              "12 sessions/month, 2-3hrs each",
              "2 platforms",
              "50 products",
              "Weekly reports, account manager",
              "Content planning",
            ]}
          />
          <PricingCard
            title="Premium"
            price="₱29,999/mo"
            badge="Maximum Impact"
            features={[
              "20 sessions/month, 3-4hrs each",
              "All 3 platforms",
              "Unlimited products",
              "Real-time dashboard, priority support",
              "Full strategy, custom scheduling",
            ]}
          />
        </section>

        <section className="mt-10">
          <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]">
            <table className="w-full text-sm">
              <thead className="bg-[var(--color-bg-muted)]">
                <tr>
                  <th className="p-2 text-left">Feature</th>
                  <th className="p-2 text-left">Starter</th>
                  <th className="p-2 text-left">Growth</th>
                  <th className="p-2 text-left">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-2">Sessions / month</td>
                  <td className="p-2">4</td>
                  <td className="p-2">12</td>
                  <td className="p-2">20</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">Platforms</td>
                  <td className="p-2">1</td>
                  <td className="p-2">2</td>
                  <td className="p-2">All 3</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">Products</td>
                  <td className="p-2">Up to 20</td>
                  <td className="p-2">Up to 50</td>
                  <td className="p-2">Unlimited</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">Reports</td>
                  <td className="p-2">Monthly</td>
                  <td className="p-2">Weekly</td>
                  <td className="p-2">Real-time dashboard</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">FAQ</h2>
          <div className="mt-4 space-y-4 text-sm">
            {[
              { q: "Can I switch plans?", a: "Yes, anytime." },
              { q: "What platforms supported?", a: "Shopee, Lazada, TikTok Shop." },
              { q: "How quickly can we start?", a: "Within 24–48 hours after onboarding." },
              { q: "Do you provide products?", a: "No, you provide your products." },
            ].map(({ q, a }) => (
              <details key={q} className="rounded-md border p-3">
                <summary className="cursor-pointer font-semibold">{q}</summary>
                <p className="mt-2">{a}</p>
              </details>
            ))}
          </div>
        </section>
      </Container>

      <section className="mt-8">
        <Container className="py-12">
          <div className="rounded-lg bg-[var(--color-bg-muted)] p-6">
            <h2 className="text-xl font-bold text-[var(--color-secondary)]">Get updates and early-bird deals</h2>
            <p className="mt-2 text-sm">Leave your email and we’ll reach out with launch offers.</p>
            <div className="mt-4 max-w-md">
              <EmailCapture source="pricing" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}