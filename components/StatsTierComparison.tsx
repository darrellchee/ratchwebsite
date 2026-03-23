"use client";

import { motion } from "framer-motion";

type FeatureAccess = boolean | string;

type StatsFeature = {
  name: string;
  description: string;
  free: FeatureAccess;
  plus: FeatureAccess;
  pro: FeatureAccess;
  ultra: FeatureAccess;
};

const statsFeatures: StatsFeature[] = [
  {
    name: "Rating Trend Chart",
    description: "View your rating history over time",
    free: "Weekly snapshot",
    plus: "Full access",
    pro: "Full access",
    ultra: "Hourly data",
  },
  {
    name: "Current Rating",
    description: "See your exact ELO rating",
    free: "Hidden (???)",
    plus: true,
    pro: true,
    ultra: true,
  },
  {
    name: "Quick Stats",
    description: "Comparisons, views, and reach",
    free: true,
    plus: true,
    pro: true,
    ultra: true,
  },
  {
    name: "Win Rate",
    description: "Your overall win percentage",
    free: true,
    plus: true,
    pro: true,
    ultra: true,
  },
  {
    name: "Win/Loss Streaks",
    description: "Track your hot and cold streaks",
    free: "Current only",
    plus: true,
    pro: true,
    ultra: true,
  },
  {
    name: "Activity Heatmap",
    description: "Visual calendar of your activity",
    free: false,
    plus: true,
    pro: true,
    ultra: true,
  },
  {
    name: "Percentile Badge",
    description: "See how you rank vs all users",
    free: false,
    plus: false,
    pro: true,
    ultra: true,
  },
  {
    name: "Demographics Insights",
    description: "Who views and chooses you",
    free: false,
    plus: false,
    pro: true,
    ultra: true,
  },
  {
    name: "Win Rate by Group",
    description: "Performance by demographic",
    free: false,
    plus: false,
    pro: false,
    ultra: true,
  },
  {
    name: "Photo Performance",
    description: "Analytics for each photo",
    free: false,
    plus: true,
    pro: true,
    ultra: true,
  },
  {
    name: "Photo Order Tips",
    description: "AI-powered recommendations",
    free: false,
    plus: true,
    pro: true,
    ultra: true,
  },
  {
    name: "Rating Log",
    description: "Every rating change recorded",
    free: false,
    plus: false,
    pro: false,
    ultra: true,
  },
  {
    name: "Who Viewed You",
    description: "See profiles that viewed you",
    free: false,
    plus: false,
    pro: false,
    ultra: true,
  },
  {
    name: "Comparison Details",
    description: "Full comparison history",
    free: false,
    plus: false,
    pro: false,
    ultra: true,
  },
];

const tiers = [
  { 
    name: "Free", 
    price: "A$0", 
    color: "#6B7280", 
    bg: "#F9FAFB",
    description: "Basic stats access" 
  },
  { 
    name: "Plus", 
    price: "A$2.31", 
    period: "/week",
    color: "#3B82F6", 
    bg: "#EFF6FF",
    description: "Photo analytics" 
  },
  { 
    name: "Pro", 
    price: "A$3.69", 
    period: "/week",
    color: "#8B5CF6", 
    bg: "#F5F3FF",
    description: "Full analytics",
    popular: true
  },
  { 
    name: "Ultra", 
    price: "A$5.08", 
    period: "/week",
    color: "#1A1A1A", 
    bg: "#FFC629",
    description: "Everything unlocked" 
  },
];

const AccessIndicator = ({ access }: { access: FeatureAccess }) => {
  if (access === true) {
    return (
      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    );
  }
  
  if (access === false) {
    return (
      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    );
  }
  
  return (
    <span className="text-xs font-medium text-bumble-gray bg-gray-100 px-2 py-1 rounded-full">
      {access}
    </span>
  );
};

export default function StatsTierComparison() {
  return (
    <section id="tiers" className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: "#FFC629", color: "#1A1A1A" }}>
            Compare Plans
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bumble-black">
            Choose Your Stats Level
          </h2>
          <p className="mt-4 text-lg text-bumble-gray max-w-2xl mx-auto">
            Unlock more insights with higher tiers. Find the plan that fits your need for data-driven friend recommendations.
          </p>
        </motion.div>

        {/* Tier Cards (Mobile) */}
        <div className="lg:hidden grid grid-cols-2 gap-4 mb-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-4 text-center ${tier.popular ? 'ring-2 ring-yellow-400' : ''}`}
              style={{ backgroundColor: tier.bg }}
            >
              {tier.popular && (
                <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-400 text-bumble-black mb-2">
                  Popular
                </span>
              )}
              <p className="font-bold text-lg" style={{ color: tier.color }}>{tier.name}</p>
              <p className="text-2xl font-bold text-bumble-black mt-1">
                {tier.price}
                {tier.period && <span className="text-sm font-normal text-bumble-gray">{tier.period}</span>}
              </p>
              <p className="text-xs text-bumble-gray mt-1">{tier.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
        >
          {/* Table Header - Desktop */}
          <div className="hidden lg:grid grid-cols-5 gap-4 p-6 bg-gray-50 border-b border-gray-100">
            <div className="col-span-1">
              <p className="text-sm font-medium text-bumble-gray">Feature</p>
            </div>
            {tiers.map((tier) => (
              <div key={tier.name} className="text-center">
                {tier.popular && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-yellow-400 text-bumble-black mb-2">
                    Most Popular
                  </span>
                )}
                <p className="font-bold text-lg" style={{ color: tier.color }}>{tier.name}</p>
                <p className="text-xl font-bold text-bumble-black">
                  {tier.price}
                  {tier.period && <span className="text-sm font-normal text-bumble-gray">{tier.period}</span>}
                </p>
              </div>
            ))}
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {statsFeatures.map((feature, i) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.02 }}
                className="grid grid-cols-5 gap-4 p-4 lg:p-6 hover:bg-gray-50 transition-colors"
              >
                {/* Feature name */}
                <div className="col-span-5 lg:col-span-1">
                  <p className="font-medium text-bumble-black">{feature.name}</p>
                  <p className="text-xs text-bumble-gray mt-0.5">{feature.description}</p>
                </div>

                {/* Access indicators - Mobile */}
                <div className="col-span-5 lg:hidden grid grid-cols-4 gap-2 mt-2">
                  {[feature.free, feature.plus, feature.pro, feature.ultra].map((access, j) => (
                    <div key={j} className="flex flex-col items-center gap-1">
                      <span className="text-xs text-bumble-gray">{tiers[j].name}</span>
                      <AccessIndicator access={access} />
                    </div>
                  ))}
                </div>

                {/* Access indicators - Desktop */}
                <div className="hidden lg:flex items-center justify-center">
                  <AccessIndicator access={feature.free} />
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <AccessIndicator access={feature.plus} />
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <AccessIndicator access={feature.pro} />
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <AccessIndicator access={feature.ultra} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Table Footer - CTAs */}
          <div className="hidden lg:grid grid-cols-5 gap-4 p-6 bg-gray-50 border-t border-gray-100">
            <div className="col-span-1" />
            {tiers.map((tier) => (
              <div key={tier.name} className="text-center">
                <button
                  className={`w-full py-3 rounded-full text-sm font-medium transition-colors ${
                    tier.name === "Free" 
                      ? "bg-gray-200 text-bumble-gray cursor-default"
                      : tier.name === "Ultra"
                      ? "bg-bumble-black text-white hover:bg-gray-800"
                      : tier.popular
                      ? "bg-yellow-400 text-bumble-black hover:bg-yellow-500"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {tier.name === "Free" ? "Current Plan" : `Get ${tier.name}`}
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile CTAs */}
        <div className="lg:hidden mt-8 grid grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="py-4 rounded-full font-medium text-white"
            style={{ backgroundColor: "#8B5CF6" }}
          >
            Get Pro
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="py-4 rounded-full font-medium bg-bumble-black text-white"
          >
            Get Ultra
          </motion.button>
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-bumble-gray mt-8"
        >
          All subscriptions auto-renew. Cancel anytime. Prices may vary by region.
        </motion.p>
      </div>
    </section>
  );
}
