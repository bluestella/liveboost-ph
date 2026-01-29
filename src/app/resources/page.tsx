import type { Metadata } from "next";
import ResourcesClient from "@/components/resources/ResourcesClient";
import { getAllResources } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Resources — LiveBoost PH",
  description: "Insights and guides on live selling and marketplace growth.",
  openGraph: {
    title: "Resources — LiveBoost PH",
    description: "Insights and guides on live selling and marketplace growth.",
    type: "website",
  },
};

export default function ResourcesPage() {
  const resources = getAllResources();

  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/10 bg-[#070A12]">
        <div className="absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#4C6FFF]/20 to-[#35D0BA]/15 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-14">
          <div className="text-xs font-semibold tracking-widest text-white/50">RESOURCES</div>
          <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Insights to help you win live commerce
          </h1>
          <p className="mt-3 text-white/70 max-w-2xl">
            Practical guides, playbooks, and notes from the Liveboost team.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <ResourcesClient resources={resources} />
      </section>
    </div>
  );
}

