"use client";

import { motion } from "framer-motion";

interface PricingTiersProps {
  isAnnual: boolean;
}

type Tier = {
  name: string;
  monthlyPrice: number;
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
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Get started with the basics",
    highlighted: false,
    color: "#F5F5F5",
    features: [
      "5 daily DMs",
      "Basic profile creation",
      "Weekly rating visibility",
      "Limited Super Likes",
      "Standard filters",
      "Community access",
    ],
    cta: "Get Started Free",
  },
  {
    name: "Plus",
    monthlyPrice: 9.99,
    annualPrice: 7.99,
    description: "More features, more matches",
    highlighted: false,
    color: "#FFF8E1",
    features: [
      "15 daily DMs",
      "Limited Dual Match",
      "Always-on rating visibility",
      "More Super Likes",
      "Limited Boosts",
      "Extended filters",
    ],
    cta: "Upgrade to Plus",
  },
  {
    name: "Pro",
    monthlyPrice: 19.99,
    annualPrice: 15.99,
    description: "Unlock your full potential",
    highlighted: true,
    color: "#FFC629",
    features: [
      "Unlimited DMs",
      "Unlimited Dual Match",
      "Premium Filters",
      "Read Receipts",
      "More Boosts",
      "Priority Support",
    ],
    cta: "Go Pro",
  },
  {
    name: "Ultra",
    monthlyPrice: 29.99,
    annualPrice: 23.99,
    description: "The ultimate dating experience",
    highlighted: false,
    color: "#1A1A1A",
    textLight: true,
    features: [
      "Everything in Pro",
      "Unlimited Boosts",
      "Unlimited Super Likes",
      "Incognito Mode",
      "See who likes you",
      "VIP Support",
    ],
    cta: "Go Ultra",
  },
];

export default function PricingTiers({ isAnnual }: PricingTiersProps) {
  const formatPrice = (tier: Tier) => {
    const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;
    if (price === 0) return "$0";
    return `$${price.toFixed(2)}`;
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
                    {tier.monthlyPrice === 0 ? " forever" : isAnnual ? "/mo (billed annually)" : "/month"}
                  </span>
                </div>
                {isAnnual && tier.monthlyPrice > 0 && (
                  <p className="mt-2 text-sm font-medium" style={{ color: tier.textLight ? "#FFD700" : "var(--ratch-coral)" }}>
                    Save ${((tier.monthlyPrice - tier.annualPrice) * 12).toFixed(0)}/year
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
                  {tier.monthlyPrice === 0 ? " forever" : isAnnual ? "/mo" : "/month"}
                </span>
              </div>
              {isAnnual && tier.monthlyPrice > 0 && (
                <p className="mt-1 text-sm font-medium" style={{ color: tier.textLight ? "#FFD700" : "var(--ratch-coral)" }}>
                  Save ${((tier.monthlyPrice - tier.annualPrice) * 12).toFixed(0)}/year
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
