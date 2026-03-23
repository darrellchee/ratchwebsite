"use client";

import { motion } from "framer-motion";

type TierFeature = {
  name: string;
  free: string | boolean;
  plus: string | boolean;
  pro: string | boolean;
  ultra: string | boolean;
};

const features: TierFeature[] = [
  { name: "Daily DMs", free: "5", plus: "15", pro: "Unlimited", ultra: "Unlimited" },
  { name: "Dual Friend Request", free: false, plus: "Limited", pro: "Unlimited", ultra: "Unlimited" },
  { name: "Priority Friend Requests", free: "Limited", plus: "More", pro: "Even More", ultra: "Unlimited" },
  { name: "Boost", free: false, plus: "Limited", pro: "More", ultra: "Unlimited" },
  { name: "Premium Filters", free: false, plus: false, pro: true, ultra: true },
  { name: "Read Receipts", free: false, plus: false, pro: true, ultra: true },
  { name: "Rating Visibility", free: "Weekly", plus: "Always", pro: "Always", ultra: "Always" },
];

const tiers = [
  {
    name: "Free",
    price: "A$0",
    period: "forever",
    description: "Get started with the basics",
    highlighted: false,
    color: "#F5F5F5",
  },
  {
    name: "Plus",
    price: "A$9.99",
    period: "/month",
    description: "More features, more friends",
    highlighted: false,
    color: "#FFF8E1",
  },
  {
    name: "Pro",
    price: "A$15.99",
    period: "/month",
    description: "Unlock your full potential",
    highlighted: true,
    color: "#FFC629",
  },
  {
    name: "Ultra",
    price: "A$21.99",
    period: "/month",
    description: "The ultimate friend experience",
    highlighted: false,
    color: "#1A1A1A",
    textLight: true,
  },
];

const FeatureValue = ({ value }: { value: string | boolean }) => {
  if (value === true) {
    return (
      <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    );
  }
  if (value === false) {
    return (
      <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    );
  }
  return <span className="text-sm font-medium">{value}</span>;
};

export default function SubscriptionTiers() {
  return (
    <section id="tiers" className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span 
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: "#FFC629", color: "#1A1A1A" }}
          >
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bumble-black leading-tight">
            Choose Your
            <br />
            <span className="text-bumble-gray">Perfect Plan</span>
          </h2>
          <p className="mt-6 text-lg text-bumble-gray">
            Start free and upgrade anytime to unlock more features.
          </p>
        </motion.div>

        {/* Tier Cards - Mobile */}
        <div className="lg:hidden space-y-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`rounded-3xl p-6 ${tier.highlighted ? "ring-2 ring-bumble-black" : ""}`}
              style={{ 
                backgroundColor: tier.color,
                color: tier.textLight ? "white" : "#1A1A1A",
              }}
            >
              {tier.highlighted && (
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-bumble-black text-white mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold">{tier.name}</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold">{tier.price}</span>
                <span className={`text-sm ${tier.textLight ? "text-gray-300" : "text-bumble-gray"}`}>
                  {tier.period}
                </span>
              </div>
              <p className={`mt-2 text-sm ${tier.textLight ? "text-gray-300" : "text-bumble-gray"}`}>
                {tier.description}
              </p>
              
              <div className="mt-6 space-y-3">
                {features.map((feature) => {
                  const value = feature[tier.name.toLowerCase() as keyof TierFeature] as string | boolean;
                  return (
                    <div key={feature.name} className="flex items-center justify-between">
                      <span className={`text-sm ${tier.textLight ? "text-gray-200" : "text-bumble-gray"}`}>
                        {feature.name}
                      </span>
                      <div className={tier.textLight ? "text-white" : "text-bumble-black"}>
                        <FeatureValue value={value} />
                      </div>
                    </div>
                  );
                })}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`mt-6 w-full py-3 rounded-full font-medium transition-colors ${
                  tier.textLight 
                    ? "bg-white text-bumble-black hover:bg-gray-100"
                    : tier.highlighted
                      ? "bg-bumble-black text-white hover:bg-gray-800"
                      : "bg-bumble-black text-white hover:bg-gray-800"
                }`}
              >
                {tier.name === "Free" ? "Get Started" : "Upgrade Now"}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Tier Cards - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-6 ${
                tier.highlighted ? "ring-2 ring-bumble-black transform scale-105 z-10" : ""
              }`}
              style={{ 
                backgroundColor: tier.color,
                color: tier.textLight ? "white" : "#1A1A1A",
              }}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium bg-bumble-black text-white whitespace-nowrap">
                  Most Popular
                </span>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <div className="mt-3">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  <span className={`text-sm ${tier.textLight ? "text-gray-300" : "text-bumble-gray"}`}>
                    {tier.period}
                  </span>
                </div>
                <p className={`mt-2 text-sm ${tier.textLight ? "text-gray-300" : "text-bumble-gray"}`}>
                  {tier.description}
                </p>
              </div>

              <div className="space-y-4 mb-6">
                {features.map((feature) => {
                  const value = feature[tier.name.toLowerCase() as keyof TierFeature] as string | boolean;
                  return (
                    <div key={feature.name} className="text-center">
                      <p className={`text-xs mb-1 ${tier.textLight ? "text-gray-400" : "text-bumble-gray"}`}>
                        {feature.name}
                      </p>
                      <div className={tier.textLight ? "text-white" : "text-bumble-black"}>
                        <FeatureValue value={value} />
                      </div>
                    </div>
                  );
                })}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-full font-medium transition-colors ${
                  tier.textLight 
                    ? "bg-white text-bumble-black hover:bg-gray-100"
                    : tier.highlighted
                      ? "bg-bumble-black text-white hover:bg-gray-800"
                      : "bg-bumble-black text-white hover:bg-gray-800"
                }`}
              >
                {tier.name === "Free" ? "Get Started" : "Upgrade"}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-bumble-gray mt-12"
        >
          All plans include access to the Compare page, Inbox, and basic filtering.
          <br />
          Prices may vary by region. Cancel anytime.
        </motion.p>
      </div>
    </section>
  );
}
