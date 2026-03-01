"use client";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Particles } from "@/components/ui/particles";
import { brand } from "@/lib/brand";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background particles */}
      <Particles
        className="absolute inset-0"
        quantity={60}
        staticity={40}
        color={brand.primary}
        ease={50}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50/50 px-4 py-1.5 backdrop-blur-sm">
            <AnimatedShinyText className="text-sm font-medium text-brand-dark">
              Your team + AI. Supply chain on autopilot.
            </AnimatedShinyText>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
          Stop chasing emails.
          <br />
          <span className="text-brand">Start running your supply chain.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Valued AI handles the busywork so your team can focus on what
          actually matters. You stay in control, we just make it easier.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#book-demo">
            <ShimmerButton
              className="h-12 px-8"
              shimmerColor={brand.accentLight}
              shimmerSize="0.1em"
              background={brand.accent}
            >
              <span className="text-sm font-medium text-white">
                Book a Demo
              </span>
            </ShimmerButton>
          </a>
          <a
            href="#how-it-works"
            className="h-12 px-8 flex items-center justify-center rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
