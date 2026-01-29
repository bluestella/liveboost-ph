import type { Metadata } from "next";
import ApplyForm from "@/components/ApplyForm";

export const metadata: Metadata = {
  title: "Apply — LiveBoost PH",
  description: "Tell us about your business and we’ll follow up within 24 hours.",
  openGraph: {
    title: "Apply — LiveBoost PH",
    description: "Tell us about your business and we’ll follow up within 24 hours.",
    type: "website",
  },
};

export default function ApplyPage() {
  return (
    <div>
      <section className="border-b border-white/10 bg-[#070A12]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="text-xs font-semibold tracking-widest text-white/50">APPLY</div>
          <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Get a tailored live selling plan
          </h1>
          <p className="mt-3 text-white/70 max-w-2xl">
            Share your details and we’ll respond with next steps.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-xl font-semibold text-white">Application</h2>
            <p className="mt-2 text-sm text-white/70">
              This takes about 2 minutes.
            </p>
            <div className="mt-6">
              <ApplyForm />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="text-sm font-semibold text-white">Good fit if you’re…</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {[
                "Already selling (or launching) on marketplaces",
                "Ready for a consistent live selling cadence",
                "Looking for professional hosts + operational support",
                "Focused on measurable conversion and GMV lift",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#35D0BA]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-white/10 bg-[#070A12] p-5">
              <div className="text-xs font-semibold tracking-widest text-white/50">
                WHAT YOU GET
              </div>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-white/75">
                {[
                  "Host + producer",
                  "Run-of-show",
                  "Script + prompts",
                  "Post-live review",
                  "Reporting",
                  "Optimization",
                ].map((item) => (
                  <div key={item} className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4C6FFF]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

