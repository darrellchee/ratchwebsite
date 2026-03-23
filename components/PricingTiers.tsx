"use client";

import { motion } from "framer-motion";
import type { BillingPeriod } from "@/app/pricing/page";

interface PricingTiersProps {
  period: BillingPeriod;
}

type Tier = {
  name: string;
  weeklyPrice: number;
  monthlyPrice: number;
  quarterlyPrice: number;
  annualPrice: number;
  description: string;
  highlighted: boolean;
  color: string;
  textLight?: boolean;
  features: string[];
  cta: string;
};

const tiers: Tier[] = [
  {
    name: "Free",
    weeklyPrice: 0,
    monthlyPrice: 0,
    quarterlyPrice: 0,
    annualPrice: 0,
    description: "Get started with the basics",
    highlighted: false,
    color: "#F5F5F5",
    features: [
      "5 daily DMs",
      "Basic profile creation",
      "Weekly rating visibility",
      "Limited Priority Friend Requests",
      "Standard filters",
      "Community access",
    ],
    cta: "Get Started Free",
  },
  {
    name: "Plus",
    weeklyPrice: 5.99,
    monthlyPrice: 9.99,
    quarterlyPrice: 24.99,
    annualPrice: 79.99,
    description: "More features, more friends",
    highlighted: false,
    color: "#FFF8E1",
    features: [
      "15 daily DMs",
      "Limited Dual Friend Requests",
      "Always-on rating visibility",
      "More Priority Friend Requests",
      "Limited Boosts",
      "Extended filters",
    ],
    cta: "Upgrade to Plus",
  },
  {
    name: "Pro",
    weeklyPrice: 9.99,
    monthlyPrice: 15.99,
    quarterlyPrice: 39.99,
    annualPrice: 119.99,
    description: "Unlock your full potential",
    highlighted: true,
    color: "#FFC629",
    features: [
      "Unlimited DMs",
      "Unlimited Dual Friend Requests",
      "Premium Filters",
      "Read Receipts",
      "More Boosts",
      "Priority Support",
    ],
    cta: "Go Pro",
  },
  {
    name: "Ultra",
    weeklyPrice: 13.99,
    monthlyPrice: 21.99,
    quarterlyPrice: 59.99,
    annualPrice: 159.99,
    description: "The ultimate friend experience",
    highlighted: false,
    color: "#1A1A1A",
    textLight: true,
    features: [
      "Everything in Pro",
      "Unlimited Boosts",
      "Unlimited Priority Friend Requests",
      "Incognito Mode",
      "See who wants to be friends with you",
      "VIP Support",
    ],
    cta: "Go Ultra",
  },
];

const PERIOD_SUFFIX: Record<BillingPeriod, { suffix: string; isFree: (tier: Tier) => boolean }> = {
  weekly: { suffix: "/week", isFree: (t) => t.weeklyPrice === 0 },
  monthly: { suffix: "/month", isFree: (t) => t.monthlyPrice === 0 },
  quarterly: { suffix: "/quarter", isFree: (t) => t.quarterlyPrice === 0 },
  annually: { suffix: "/year", isFree: (t) => t.annualPrice === 0 },
};

export default function PricingTiers({ period }: PricingTiersProps) {
  const getPrice = (tier: Tier) => {
    switch (period) {
      case "weekly": return tier.weeklyPrice;
      case "monthly": return tier.monthlyPrice;
      case "quarterly": return tier.quarterlyPrice;
      case "annually": return tier.annualPrice;
    }
  };

  const formatPrice = (tier: Tier) => {
    const price = getPrice(tier);
    if (price === 0) return "A$0";
    return `A$${price.toFixed(2)}`;
  };

  const { suffix, isFree } = PERIOD_SUFFIX[period];

  const getSavingsText = (tier: Tier): string | null => {
    if (tier.weeklyPrice === 0) return null;
    switch (period) {
      case "weekly":
        return null;
      case "monthly": {
        const yearlyWeekly = tier.weeklyPrice * 52;
        const yearlyMonthly = tier.monthlyPrice * 12;
        const save = yearlyWeekly - yearlyMonthly;
        if (save <= 0) return null;
        return `Save A$${save.toFixed(0)}/year vs weekly`;
      }
      case "quarterly": {
        const yearlyMonthly = tier.monthlyPrice * 12;
        const yearlyQuarterly = tier.quarterlyPrice * 4;
        const save = yearlyMonthly - yearlyQuarterly;
        if (save <= 0) return null;
        return `Save A$${save.toFixed(0)}/year vs monthly`;
      }
      case "annually": {
        const yearlyMonthly = tier.monthlyPrice * 12;
        const save = yearlyMonthly - tier.annualPrice;
        if (save <= 0) return null;
        return `Save A$${save.toFixed(0)}/year vs monthly`;
      }
    }
  };

  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 items-start">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 h-full flex flex-col ${
                tier.highlighted 
                  ? "ring-2 ring-[var(--ratch-black)] transform scale-105 z-10 shadow-xl" 
                  : "shadow-lg"
              }`}
              style={{ 
                backgroundColor: tier.color,
                color: tier.textLight ? "white" : "var(--ratch-black)",
              }}
            >
              {tier.highlighted && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-sm font-semibold bg-[var(--ratch-black)] text-white whitespace-nowrap shadow-lg">
                  Most Popular
                </span>
              )}
              
              {/* Tier Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{formatPrice(tier)}</span>
                  <span className={`text-sm ${tier.textLight ? "text-gray-300" : "text-[var(--ratch-gray)]"}`}>
                    {isFree(tier) ? " forever" : suffix}
                  </span>
                </div>
                {getSavingsText(tier) && (
                  <p className="mt-2 text-sm font-medium" style={{ color: tier.textLight ? "#FFD700" : "var(--ratch-coral)" }}>
                    {getSavingsText(tier)}
                  </p>
                )}
                <p className={`mt-3 text-sm ${tier.textLight ? "text-gray-300" : "text-[var(--ratch-gray)]"}`}>
                  {tier.description}
                </p>
              </div>

              {/* Features List */}
              <div className="flex-1 space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <svg 
                      className={`w-5 h-5 flex-shrink-0 ${tier.textLight ? "text-green-400" : "text-green-500"}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${tier.textLight ? "text-gray-200" : "text-[var(--ratch-black)]"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-4 rounded-full font-semibold text-base transition-all ${
                  tier.textLight 
                    ? "bg-white text-[var(--ratch-black)] hover:bg-gray-100"
                    : tier.highlighted
                      ? "bg-[var(--ratch-black)] text-white hover:bg-gray-800"
                      : "bg-[var(--ratch-black)] text-white hover:bg-gray-800"
                }`}
              >
                {tier.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`rounded-3xl p-6 ${tier.highlighted ? "ring-2 ring-[var(--ratch-black)]" : ""}`}
              style={{ 
                backgroundColor: tier.color,
                color: tier.textLight ? "white" : "var(--ratch-black)",
              }}
            >
              {tier.highlighted && (
                <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-[var(--ratch-black)] text-white mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold">{tier.name}</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold">{formatPrice(tier)}</span>
                <span className={`text-sm ${tier.textLight ? "text-gray-300" : "text-[var(--ratch-gray)]"}`}>
                  {isFree(tier) ? " forever" : suffix}
                </span>
              </div>
              {getSavingsText(tier) && (
                <p className="mt-1 text-sm font-medium" style={{ color: tier.textLight ? "#FFD700" : "var(--ratch-coral)" }}>
                  {getSavingsText(tier)}
                </p>
              )}
              <p className={`mt-2 text-sm ${tier.textLight ? "text-gray-300" : "text-[var(--ratch-gray)]"}`}>
                {tier.description}
              </p>
              
              <div className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <svg 
                      className={`w-5 h-5 flex-shrink-0 ${tier.textLight ? "text-green-400" : "text-green-500"}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${tier.textLight ? "text-gray-200" : "text-[var(--ratch-black)]"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`mt-6 w-full py-3.5 rounded-full font-semibold transition-colors ${
                  tier.textLight 
                    ? "bg-white text-[var(--ratch-black)] hover:bg-gray-100"
                    : tier.highlighted
                      ? "bg-[var(--ratch-black)] text-white hover:bg-gray-800"
                      : "bg-[var(--ratch-black)] text-white hover:bg-gray-800"
                }`}
              >
                {tier.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
