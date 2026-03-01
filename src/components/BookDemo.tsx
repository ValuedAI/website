"use client";
import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShineBorder } from "@/components/ui/shine-border";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { brand } from "@/lib/brand";

export function BookDemo() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="book-demo" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <BlurFade delay={0.1}>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand uppercase tracking-wider mb-3">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              See Valued AI in action
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Book a 15-minute demo. We&apos;ll show you how Valued AI can
              automate your supply chain workflow.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.3}>
          <div className="relative w-full rounded-2xl bg-white shadow-lg">
            <ShineBorder
              shineColor={[brand.primary, brand.accent, brand.purple]}
              borderWidth={2}
            />
            <div className="p-8 w-full">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Smith"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Acme Manufacturing"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@acmemfg.com"
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Your Role
                    </label>
                    <select className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand-400 transition-all bg-white text-slate-600">
                      <option>Supply Chain</option>
                      <option>Operations</option>
                      <option>Engineering</option>
                      <option>Finance</option>
                      <option>Executive / Leadership</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <ShimmerButton
                      className="w-full h-12"
                      shimmerColor={brand.accentLight}
                      shimmerSize="0.1em"
                      background={brand.accent}
                    >
                      <span className="text-sm font-medium text-white">
                        Book My Demo
                      </span>
                    </ShimmerButton>
                  </div>

                  <p className="text-xs text-slate-400 text-center">
                    No credit card required. 15-minute call with our team.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-brand-100 text-brand flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    You&apos;re all set!
                  </h3>
                  <p className="text-slate-500">
                    We&apos;ll reach out within 24 hours to schedule your demo.
                  </p>
                </div>
              )}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
