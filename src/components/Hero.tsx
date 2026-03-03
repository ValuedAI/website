"use client";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Particles } from "@/components/ui/particles";
import { BlurFade } from "@/components/ui/blur-fade";
import { brand } from "@/lib/brand";
import {
  LayoutDashboard,
  Workflow,
  MapPin,
  Mail,
  ClipboardCheck,
  TrendingUp,
  Package,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

const capabilities = [
  { icon: LayoutDashboard, label: "Order Dashboard" },
  { icon: Workflow, label: "Pipeline Tracking" },
  { icon: MapPin, label: "Live Shipment Tracking" },
  { icon: Mail, label: "Smart Email Triage" },
  { icon: ClipboardCheck, label: "Auto Task Assignment" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-brand-100/60 via-brand-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Subtle dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2563eb 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Background particles */}
      <Particles
        className="absolute inset-0"
        quantity={60}
        staticity={40}
        color={brand.primary}
        ease={50}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full py-24 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: Text ── */}
          <div className="lg:pr-4">
            {/* Badge */}
            <BlurFade delay={0.1}>
              <div className="flex justify-start mb-6">
                <div className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50/50 px-4 py-1.5 backdrop-blur-sm">
                  <AnimatedShinyText className="text-sm font-medium text-brand-dark">
                    AI-Powered Supply Chain Automation
                  </AnimatedShinyText>
                </div>
              </div>
            </BlurFade>

            {/* Headline */}
            <BlurFade delay={0.25}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                <span className="bg-gradient-to-b from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Supply chain on autopilot.
                </span>
                <br />
                <span className="bg-gradient-to-r from-brand-dark via-brand to-brand-light bg-clip-text text-transparent">
                  Your team in control.
                </span>
              </h1>
            </BlurFade>

            {/* Subtitle */}
            <BlurFade delay={0.4}>
              <p className="text-lg text-slate-500 max-w-xl mb-8 leading-relaxed">
                From order intake to delivery tracking, Valued AI automates your
                supply chain workflow end-to-end&mdash;so your team can focus on
                decisions, not data entry.
              </p>
            </BlurFade>

            {/* CTAs */}
            <BlurFade delay={0.55}>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
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
            </BlurFade>

            {/* Capability pills */}
            <BlurFade delay={0.7}>
              <div className="flex flex-wrap items-start gap-2.5">
                {capabilities.map((cap) => (
                  <div
                    key={cap.label}
                    className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200/70 px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
                  >
                    <cap.icon className="w-3.5 h-3.5 text-brand" />
                    {cap.label}
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>

          {/* ── Right: Graphics ── */}
          <div className="relative flex items-center justify-center lg:pl-4">
            {/* Glow behind cards */}
            <div className="absolute inset-0 bg-gradient-radial from-brand-100/40 via-transparent to-transparent blur-2xl pointer-events-none" />

            <div className="relative w-full space-y-4">
              {/* Card 1 — Orders Dashboard */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl shadow-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-brand-50 text-brand flex items-center justify-center">
                        <LayoutDashboard className="w-[18px] h-[18px]" />
                      </div>
                      <span className="text-sm font-semibold text-slate-800">
                        Orders Dashboard
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-500">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium">+12%</span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-slate-900 mb-2">
                    24 Active Orders
                  </p>
                  <div className="flex gap-1 h-2 rounded-full overflow-hidden mb-2">
                    <div className="bg-emerald-400 flex-[10]" />
                    <div className="bg-amber-400 flex-[4]" />
                    <div className="bg-blue-400 flex-[6]" />
                    <div className="bg-slate-200 flex-[4]" />
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      On Track
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      Pending
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                      In Transit
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-slate-200" />
                      Review
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 — Order Pipeline */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl shadow-lg p-4">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-500 flex items-center justify-center">
                      <Package className="w-[18px] h-[18px]" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800">
                      Order Pipeline
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 text-center">
                      <div className="bg-amber-100 text-amber-700 rounded-lg py-2 px-1 text-xs font-semibold mb-1">
                        RFQ
                      </div>
                      <span className="text-[11px] text-slate-400">8 orders</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 shrink-0" />
                    <div className="flex-1 text-center">
                      <div className="bg-blue-100 text-blue-700 rounded-lg py-2 px-1 text-xs font-semibold mb-1">
                        PO Sent
                      </div>
                      <span className="text-[11px] text-slate-400">12 orders</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 shrink-0" />
                    <div className="flex-1 text-center">
                      <div className="bg-indigo-100 text-indigo-700 rounded-lg py-2 px-1 text-xs font-semibold mb-1">
                        Shipped
                      </div>
                      <span className="text-[11px] text-slate-400">6 orders</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 shrink-0" />
                    <div className="flex-1 text-center">
                      <div className="bg-emerald-100 text-emerald-700 rounded-lg py-2 px-1 text-xs font-semibold mb-1">
                        Delivered
                      </div>
                      <span className="text-[11px] text-slate-400">4 orders</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 — Live Tracking */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl shadow-lg p-4">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center">
                      <MapPin className="w-[18px] h-[18px]" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800">
                      Live Tracking
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {/* Shipment row 1 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                        </span>
                        <div>
                          <p className="text-sm font-medium text-slate-800">Shipment #4821</p>
                          <p className="text-xs text-slate-400">UPS Ground &middot; Chicago, IL</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-medium text-emerald-600">In Transit</p>
                        <p className="text-[11px] text-slate-400">ETA Mar 4</p>
                      </div>
                    </div>
                    {/* Divider */}
                    <div className="border-t border-slate-100" />
                    {/* Shipment row 2 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />
                        <div>
                          <p className="text-sm font-medium text-slate-800">Shipment #4819</p>
                          <p className="text-xs text-slate-400">FedEx Express &middot; Austin, TX</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-medium text-slate-500">Delivered</p>
                        <p className="text-[11px] text-slate-400">Feb 27</p>
                      </div>
                    </div>
                    {/* Divider */}
                    <div className="border-t border-slate-100" />
                    {/* Shipment row 3 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-2.5 h-2.5 text-amber-500" />
                        <div>
                          <p className="text-sm font-medium text-slate-800">Shipment #4823</p>
                          <p className="text-xs text-slate-400">DHL &middot; Newark, NJ</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-medium text-amber-600">Processing</p>
                        <p className="text-[11px] text-slate-400">ETA Mar 7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
