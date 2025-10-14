"use client";
import React from "react";
import Button from "@/components/ui/Button";

type PricingCardProps = {
  title: string;
  price: string;
  badge?: string;
  highlighted?: boolean;
  features: string[];
  ctaLabel?: string;
};

export default function PricingCard({
  title,
  price,
  badge,
  highlighted,
  features,
  ctaLabel = "Get Started",
}: PricingCardProps) {
  return (
    <div
      className={
        "relative rounded-lg border bg-white p-6 shadow-sm flex flex-col" +
        (highlighted ? " border-[var(--color-secondary)]" : " border-black/10")
      }
    >
      {badge && (
        <span
          className={
            "absolute -top-3 left-4 rounded-full px-3 py-1 text-xs font-semibold" +
            (highlighted
              ? " bg-[var(--color-secondary)] text-white"
              : " bg-[var(--color-primary)] text-white")
          }
        >
          {badge}
        </span>
      )}
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-2 text-2xl font-extrabold text-[var(--color-secondary)]">
          {price}
        </p>
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {features.map((f) => (
          <li key={f} className="leading-6">• {f}</li>
        ))}
      </ul>
  <div className="mt-6">
    <Button
      aria-label={`${ctaLabel} for ${title}`}
      className="w-full"
      onClick={() => {
        if (typeof window !== "undefined") {
          type DataLayerEvent = { event: string; cta: string; plan: string };
          const win = window as Window & { dataLayer?: DataLayerEvent[] };
          win.dataLayer?.push({ event: "cta_click", cta: ctaLabel, plan: title });
          console.log("CTA click:", { ctaLabel, plan: title });
        }
      }}
    >
      {ctaLabel}
    </Button>
  </div>
    </div>
  );
}