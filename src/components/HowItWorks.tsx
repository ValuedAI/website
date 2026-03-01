"use client";
import { BlurFade } from "@/components/ui/blur-fade";

const steps = [
  {
    number: "01",
    title: "Connect your email",
    description:
      "Link your team's inbox. Valued AI starts reading and classifying every vendor email automatically.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    color: "bg-brand",
  },
  {
    number: "02",
    title: "AI classifies & routes",
    description:
      "Our AI reads each email, identifies what it is (quote, invoice, shipping update, question), extracts key data, and routes it to the right person with a task.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "bg-brand-light",
  },
  {
    number: "03",
    title: "Your team acts from one dashboard",
    description:
      "Engineers see their orders. Supply chain manages the pipeline. Finance tracks invoices. One place for everything, no more email chaos.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    color: "bg-purple-500",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand uppercase tracking-wider mb-3">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Up and running in minutes
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              No complex setup. No months-long onboarding. Connect your email
              and Valued AI starts working immediately.
            </p>
          </div>
        </BlurFade>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <BlurFade key={step.number} delay={0.2 + i * 0.15}>
                <div
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <span className="text-xs font-bold text-brand uppercase tracking-widest">
                      Step {step.number}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Icon circle */}
                  <div className="relative z-10 shrink-0">
                    <div
                      className={`w-16 h-16 rounded-2xl ${step.color} text-white flex items-center justify-center shadow-lg`}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
