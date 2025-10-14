import Link from "next/link";
import { ArrowRight, BarChart3, Users, Workflow } from "lucide-react";
import Container from "@/components/Container";
import EmailCapture from "@/components/EmailCapture";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-[var(--color-secondary)] via-[#1f2b53] to-[var(--color-primary)] text-white">
        <Container className="py-20">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Grow Your E-Commerce Sales with Professional Live Selling
            </h1>
            <p className="text-base md:text-lg text-white/80">
              Professional hosts for Shopee, Lazada & TikTok Shop. No hiring hassles, just results.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/pricing">
                <Button className="gap-2" aria-label="View Plans">
                  View Plans <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#learn-more">
                <Button variant="outline" className="text-white border-white/70 hover:bg-white/10" aria-label="Learn More">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Email capture */}
      <section id="subscribe" className="bg-[var(--color-accent)]">
        <Container className="py-16 md:py-24">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text)]">Get updates and launch offers</h2>
            <p className="mt-2 text-[var(--color-muted)]">Leave your email and we&apos;ll reach out.</p>
            <div className="mt-6">
              <EmailCapture source="homepage" />
            </div>
            <p className="mt-2 text-xs text-[var(--color-muted)]">We respect your privacy. No spam.</p>
          </div>
        </Container>
      </section>

      {/* Why choose us */}
      <section id="learn-more">
        <Container className="py-16 md:py-24">
          <h3 className="text-2xl font-semibold text-[var(--color-text)]">Why choose us</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow hover:shadow-lg transition-shadow">
              <Users className="h-6 w-6 text-[var(--color-secondary)]" aria-hidden />
              <h4 className="mt-3 font-semibold text-[var(--color-text)]">Pro Hosts</h4>
              <p className="mt-1 text-[var(--color-muted)]">Engaging, persuasive sellers trained for platform best practices.</p>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow hover:shadow-lg transition-shadow">
              <BarChart3 className="h-6 w-6 text-[var(--color-secondary)]" aria-hidden />
              <h4 className="mt-3 font-semibold text-[var(--color-text)]">Performance Focus</h4>
              <p className="mt-1 text-[var(--color-muted)]">Scripts, hooks, and CTAs optimized to drive conversions.</p>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow hover:shadow-lg transition-shadow">
              <Workflow className="h-6 w-6 text-[var(--color-secondary)]" aria-hidden />
              <h4 className="mt-3 font-semibold text-[var(--color-text)]">Flexible Plans</h4>
              <p className="mt-1 text-[var(--color-muted)]">From starter tests to daily shows—scale at your pace.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section>
        <Container className="py-16 md:py-24">
          <h3 className="text-2xl font-semibold text-[var(--color-text)]">How it works</h3>
          <ol className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4">
            {["Choose Your Plan","Sign Up & Pay","Share Your Details","Setup Call","Go Live Next Day"].map((step, i) => (
              <li key={step} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-4 text-[var(--color-text)] shadow">
                <span className="text-sm text-[var(--color-muted)]">Step {i + 1}</span>
                <p className="mt-1 font-medium">{step}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <Link href="/pricing">
              <Button aria-label="View Our Plans">View Our Plans</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-primary)]">
        <Container className="py-16 md:py-24">
          <div className="md:flex md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-white">Ready to Boost Your Sales?</h2>
              <p className="mt-2 text-white/80">Start today—no hiring hassles, just results.</p>
            </div>
            <Link href="/pricing" className="mt-6 md:mt-0">
              <Button className="bg-white text-[var(--color-secondary)] hover:bg-white/90" aria-label="Get Started Today">
                Get Started Today
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}