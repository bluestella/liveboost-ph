import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  LineChart,
  Mic2,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative">
        <div className="absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#4C6FFF]/25 to-[#35D0BA]/20 blur-3xl" />
          <div className="absolute top-40 left-10 h-[380px] w-[380px] rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                <BadgeCheck className="h-4 w-4 text-[#35D0BA]" aria-hidden />
                Live selling teams built for conversion
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                Scale live commerce on Shopee, Lazada, and TikTok Shop
              </h1>
              <p className="mt-5 text-lg text-white/70 max-w-xl">
                We provide trained hosts, run-of-show, scripting, and performance reporting—so you can launch faster and sell more without hiring overhead.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#4C6FFF] to-[#35D0BA] px-6 py-3 font-semibold text-[#0B0F1A] hover:opacity-95 transition-opacity"
                >
                  Apply
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  View resources
                  <BookOpen className="h-4 w-4" aria-hidden />
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/60">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  <ShieldCheck className="h-4 w-4 text-white/70" aria-hidden />
                  Response within 24 hours
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  <LineChart className="h-4 w-4 text-white/70" aria-hidden />
                  Reporting + optimization
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  <Users className="h-4 w-4 text-white/70" aria-hidden />
                  Trained hosts + producers
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="rounded-2xl bg-[#070A12] border border-white/10 p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-white/90">Weekly performance snapshot</div>
                    <div className="text-xs text-white/50">Sample</div>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {[
                      { label: "Sessions", value: "12" },
                      { label: "GMV lift", value: "+38%" },
                      { label: "Conversion", value: "3.9%" },
                    ].map((kpi) => (
                      <div key={kpi.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="text-xs text-white/60">{kpi.label}</div>
                        <div className="mt-1 text-2xl font-semibold text-white">{kpi.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs text-white/60">What you get</div>
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-white/75">
                      {[
                        "Host + producer",
                        "Run-of-show",
                        "Script + prompts",
                        "Post-live review",
                      ].map((item) => (
                        <div key={item} className="inline-flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#35D0BA]" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-gradient-to-r from-[#35D0BA]/30 to-[#4C6FFF]/30 blur-3xl" />
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-10">
            <div className="text-xs font-semibold tracking-widest text-white/50">TRUSTED BY GROWING BRANDS</div>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {["Retail", "Beauty", "Electronics", "Food", "Lifestyle", "Home"].map((name) => (
                <div
                  key={name}
                  className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/60"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-widest text-white/50">WHY LIVEBOOST</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            A repeatable system for live selling
          </h2>
          <p className="mt-3 text-white/70">
            Clean execution, consistent cadence, and continuous iteration.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Trained hosts",
              desc: "On-brand delivery, high-energy pacing, confident product demos.",
              Icon: Mic2,
            },
            {
              title: "Production-ready ops",
              desc: "Run-of-show, prompts, and prep so every session runs smoothly.",
              Icon: ShieldCheck,
            },
            {
              title: "Conversion-first scripts",
              desc: "Hooks, objections, and CTAs designed for marketplace behavior.",
              Icon: BadgeCheck,
            },
            {
              title: "Measurable improvement",
              desc: "Weekly review + reporting to tighten the loop and scale wins.",
              Icon: LineChart,
            },
          ].map(({ title, desc, Icon }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                <Icon className="h-5 w-5 text-white/80" aria-hidden />
              </div>
              <div className="mt-4 text-lg font-semibold text-white">{title}</div>
              <div className="mt-2 text-sm text-white/70">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#070A12]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-xs font-semibold tracking-widest text-white/50">HOW IT WORKS</div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Go live in days, not weeks
              </h2>
              <p className="mt-3 text-white/70 max-w-xl">
                A lightweight onboarding flow designed for speed and clarity.
              </p>
              <div className="mt-8">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white text-[#0B0F1A] px-5 py-3 font-semibold hover:bg-white/90 transition-colors"
                >
                  Get started
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              {[
                {
                  step: "01",
                  title: "Apply",
                  desc: "Tell us what you sell, where you sell, and your goals.",
                },
                {
                  step: "02",
                  title: "Plan",
                  desc: "We build the run-of-show, script, and session cadence.",
                },
                {
                  step: "03",
                  title: "Execute + iterate",
                  desc: "Go live, review performance, and scale what works.",
                },
              ].map((s) => (
                <div key={s.step} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="text-xs font-semibold text-white/60">{s.step}</div>
                  <div className="mt-2 text-lg font-semibold text-white">{s.title}</div>
                  <div className="mt-2 text-sm text-white/70">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-r from-[#4C6FFF]/15 to-[#35D0BA]/15 p-10">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="text-xs font-semibold tracking-widest text-white/60">READY TO SCALE</div>
              <div className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Get a tailored live selling plan
              </div>
              <div className="mt-2 text-white/70 max-w-xl">
                Share your business details and we’ll follow up with next steps.
              </div>
            </div>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#4C6FFF] to-[#35D0BA] px-6 py-3 font-semibold text-[#0B0F1A] hover:opacity-95 transition-opacity"
            >
              Apply
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
