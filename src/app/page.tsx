"use client";
import Link from "next/link";
import { ArrowRight, BarChart3, CalendarClock, Users, Sparkles, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 overflow-hidden">
        <div className="spotlight"></div>
        <div className="absolute inset-0">
          <div className="bg-animated absolute -inset-20 blur-3xl opacity-40" style={{ backgroundImage: "radial-gradient(650px 350px at 20% 20%, rgba(255,153,51,.6), transparent 60%), radial-gradient(550px 300px at 80% 30%, rgba(99,102,241,.6), transparent 60%), radial-gradient(600px 300px at 40% 80%, rgba(236,72,153,.6), transparent 60%)" }} />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-white/90 text-sm font-medium mb-8">
            <Sparkles className="h-4 w-4" />
            Astronomically good live commerce experiences
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Supercharge</span>
            <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">E‑Commerce Growth</span>
            with Live Selling
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional hosts for Shopee, Lazada & TikTok Shop. 
            <span className="text-white font-semibold"> No hiring hassles, just results.</span>
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/pricing" 
              className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
            >
              Start Growing Today
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="#about" 
              className="px-8 py-4 glass-card text-white font-semibold rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
          
          <div className="mt-14 marquee">
            <div className="marquee-track">
              {["Trusted by 500+ brands","Awwwards-worthy polish","Godly-inspired details","Conversion-first strategy","Philippines #1 agency"].map((label, i) => (
                <div key={i} className="px-5 py-2 rounded-full glass-card border border-white/10 text-white/90 text-sm">
                  {label}
                </div>
              ))}
              {["Trusted by 500+ brands","Awwwards-worthy polish","Godly-inspired details","Conversion-first strategy","Philippines #1 agency"].map((label, i) => (
                <div key={`dup-${i}`} className="px-5 py-2 rounded-full glass-card border border-white/10 text-white/90 text-sm">
                  {label}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-gray-300">Successful Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">300%</div>
              <div className="text-gray-300">Average Sales Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture removed for now */}

      {/* Value Proposition */}
      <section id="about" className="relative py-24 bg-gradient-to-br from-white via-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Why Choose LiveBoost PH?
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
               We&apos;re not just another agency. We&apos;re your growth partners.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative glass-card rounded-3xl p-8 transition-all duration-500 border border-gray-100/50 dark:border-white/10 hover:-translate-y-2">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-white" aria-hidden />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Expert Hosts</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Charismatic, trained professionals who know how to engage audiences and drive sales on every major platform.</p>
              </div>
            </div>
            
            <div className="group relative glass-card rounded-3xl p-8 transition-all duration-500 border border-gray-100/50 dark:border-white/10 hover:-translate-y-2">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-white" aria-hidden />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Proven Results</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Data-driven strategies and conversion-optimized scripts that consistently deliver measurable growth.</p>
              </div>
            </div>
            
            <div className="group relative glass-card rounded-3xl p-8 transition-all duration-500 border border-gray-100/50 dark:border-white/10 hover:-translate-y-2">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <CalendarClock className="h-8 w-8 text-white" aria-hidden />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Flexible Solutions</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">From one-time campaigns to ongoing partnerships—we scale with your business needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-orange-600/10"></div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Start Selling in 5 Easy Steps
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From signup to success in less than a week
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {["Choose Your Plan","Sign Up & Pay","Share Your Details","Setup Call","Go Live"].map((step, i) => (
              <div key={step} className="relative group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {i + 1}
                  </div>
                  <div className="text-white font-semibold text-lg">{step}</div>
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"></div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/pricing" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-1 transition-all duration-300"
            >
              View Our Plans
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
              Trusted by Growing Businesses
            </h2>
            <p className="text-xl text-gray-600">Real results from real clients</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stars: "★★★★★", quote: "LiveBoost transformed our live selling game. Sales increased 400% in just 2 months!", author: "Maria Santos, Fashion Boutique" },
              { stars: "★★★★★", quote: "Professional hosts who actually understand our products. Best investment we&apos;ve made!", author: "Carlos Rivera, Electronics Store" },
              { stars: "★★★★★", quote: "From zero to hero in live selling. Their team made it look effortless.", author: "Ana Dela Cruz, Beauty Brand" }
            ].map((testimonial, i) => (
              <div key={i} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
                <div className="flex text-yellow-400 text-xl mb-4">{testimonial.stars}</div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">&quot;{testimonial.quote}&quot;</p>
                <p className="text-gray-600 font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-orange-600/20"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to 
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"> Transform </span>
            Your Sales?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            Join hundreds of Philippine businesses already growing with professional live selling
          </p>
          <Link 
            href="/pricing" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-xl rounded-2xl hover:shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-1 transition-all duration-300"
          >
            Get Started Today
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
