"use client";

import { motion } from "framer-motion";
import type { BillingPeriod } from "@/app/pricing/page";

interface PricingHeroProps {
  period: BillingPeriod;
  setPeriod: (value: BillingPeriod) => void;
}

const PERIODS: { value: BillingPeriod; label: string; badge?: string }[] = [
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "quarterly", label: "Quarterly" },
  { value: "annually", label: "Annually", badge: "Best value" },
];

export default function PricingHero({ period, setPeriod }: PricingHeroProps) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="blob absolute -top-40 -right-40 w-[500px] h-[500px] opacity-30 animate-blob"
          style={{ background: "var(--ratch-coral)" }}
        />
        <div 
          className="blob absolute top-20 -left-20 w-[400px] h-[400px] opacity-25 animate-blob-reverse"
          style={{ background: "var(--ratch-amber)" }}
        />
        <div 
          className="blob-sm absolute bottom-0 right-1/4 w-[300px] h-[300px] opacity-20 animate-blob-pulse"
          style={{ background: "var(--ratch-gold)" }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{ 
              background: "linear-gradient(135deg, var(--ratch-coral) 0%, var(--ratch-amber) 100%)",
              color: "white"
            }}
          >
            Simple, Transparent Pricing
          </motion.span>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--ratch-black)] leading-tight">
            Find Your Perfect
            <br />
            <span className="text-gradient">Friend Plan</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-[var(--ratch-gray)] max-w-2xl mx-auto">
            Start free and upgrade anytime. No hidden fees, no surprises.
            Cancel whenever you want.
          </p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center gap-2 p-1.5 rounded-full bg-white border border-gray-200 shadow-sm max-w-lg mx-auto"
          >
            {PERIODS.map(({ value, label, badge }) => (
              <button
                key={value}
                onClick={() => setPeriod(value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                  period === value
                    ? "bg-[var(--ratch-black)] text-white"
                    : "text-[var(--ratch-gray)] hover:text-[var(--ratch-black)]"
                }`}
              >
                {label}
                {badge && (
                  <span
                    className="px-2 py-0.5 rounded-full text-xs font-semibold"
                    style={{
                      background: period === value ? "var(--ratch-gold)" : "var(--ratch-light-gray)",
                      color: "var(--ratch-black)",
                    }}
                  >
                    {badge}
                  </span>
                )}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
