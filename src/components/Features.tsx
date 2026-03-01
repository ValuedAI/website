"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function DashboardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
    </svg>
  );
}

function EditIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  );
}

function TaskIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}

const features = [
  {
    name: "Smart Email Pipeline",
    description:
      "AI reads every vendor email and classifies it (quote, invoice, shipping update, question), then routes it to the right person on your team. No more digging through inboxes.",
    className: "md:col-span-2 md:row-span-1",
    Icon: EmailIcon,
    href: "#book-demo",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-cta-50 to-amber-50/30 opacity-50" />
    ),
  },
  {
    name: "Order Tracking Dashboard",
    description:
      "Every order in one view, from request to delivery. Live pipeline stages, carrier tracking, and delivery alerts. Never ask \"where's my order?\" again.",
    className: "md:col-span-1 md:row-span-2",
    Icon: DashboardIcon,
    href: "#book-demo",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-indigo-50/30 opacity-50" />
    ),
  },
  {
    name: "Auto-Draft Replies",
    description:
      "AI drafts vendor responses based on order context, past conversations, and your templates. You review, tweak if needed, and send. One click.",
    className: "md:col-span-1 md:row-span-1",
    Icon: EditIcon,
    href: "#book-demo",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-fuchsia-50/30 opacity-50" />
    ),
  },
  {
    name: "Task Engine",
    description:
      "Auto-creates tasks with assignments and timers. When a vendor sends a quote, your SC coordinator gets a task. When an invoice arrives, finance gets notified. Nobody forgets what's next.",
    className: "md:col-span-1 md:row-span-1",
    Icon: TaskIcon,
    href: "#book-demo",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-cta-50/30 opacity-50" />
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand uppercase tracking-wider mb-3">
              Features
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              AI does the grunt work. You make the calls.
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Your team stays in control. AI handles the repetitive work so
              you can focus on decisions that actually matter.
            </p>
          </div>
        </BlurFade>

        {/* Bento grid */}
        <BlurFade delay={0.3}>
          <BentoGrid className="md:grid-cols-3 md:auto-rows-[18rem]">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </BlurFade>
      </div>
    </section>
  );
}
