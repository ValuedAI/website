"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";

const painPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Buried in email threads",
    description:
      "Vendor quotes, invoices, shipping updates, and questions scattered across inboxes. Finding what you need takes forever.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Manual order tracking",
    description:
      "Logging into carrier websites, asking vendors for updates, maintaining spreadsheets. \"Where's my order?\" shouldn't be this hard.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Everyone's waiting on you",
    description:
      "Engineers asking for status, finance waiting on invoices, vendors waiting on POs. You're the bottleneck. And it's not your fault.",
  },
];

const stats = [
  { value: 15, suffix: "+", label: "hrs/week wasted on emails" },
  { value: 60, suffix: "%", label: "of vendor emails are repeat queries" },
  { value: 3, suffix: "x", label: "more orders than 5 years ago" },
];

export function Problem() {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand uppercase tracking-wider mb-3">
              The Problem
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Supply chain management is stuck in the past
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Manufacturing supply chain teams manage more orders than ever, but
              the tools haven&apos;t changed in a decade.
            </p>
          </div>
        </BlurFade>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {painPoints.map((point, i) => (
            <BlurFade key={point.title} delay={0.2 + i * 0.1}>
              <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-md transition-all h-full">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-4">
                  {point.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Stats */}
        <BlurFade delay={0.5}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-slate-900 mb-1">
                  <NumberTicker value={stat.value} />
                  {stat.suffix}
                </div>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
