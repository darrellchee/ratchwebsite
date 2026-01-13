"use client";

import { motion } from "framer-motion";

type FeatureValue = string | boolean;

type Feature = {
  name: string;
  free: FeatureValue;
  plus: FeatureValue;
  pro: FeatureValue;
  ultra: FeatureValue;
};

type FeatureCategory = {
  category: string;
  features: Feature[];
};

const featureCategories: FeatureCategory[] = [
  {
    category: "Messaging",
    features: [
      { name: "Daily DMs", free: "5", plus: "15", pro: "Unlimited", ultra: "Unlimited" },
      { name: "Read Receipts", free: false, plus: false, pro: true, ultra: true },
      { name: "Message Priority", free: false, plus: false, pro: true, ultra: true },
      { name: "Undo Send", free: false, plus: true, pro: true, ultra: true },
    ],
  },
  {
    category: "Matching",
    features: [
      { name: "Dual Match", free: false, plus: "Limited", pro: "Unlimited", ultra: "Unlimited" },
      { name: "Super Likes", free: "1/week", plus: "5/week", pro: "15/week", ultra: "Unlimited" },
      { name: "Boosts", free: false, plus: "1/month", pro: "3/month", ultra: "Unlimited" },
      { name: "See Who Likes You", free: false, plus: false, pro: false, ultra: true },
      { name: "Rewind (Undo Swipe)", free: false, plus: true, pro: true, ultra: true },
    ],
  },
  {
    category: "Filters & Discovery",
    features: [
      { name: "Basic Filters", free: true, plus: true, pro: true, ultra: true },
      { name: "Advanced Filters", free: false, plus: "Limited", pro: true, ultra: true },
      { name: "Premium Filters", free: false, plus: false, pro: true, ultra: true },
      { name: "Global Mode", free: false, plus: false, pro: true, ultra: true },
      { name: "Incognito Mode", free: false, plus: false, pro: false, ultra: true },
    ],
  },
  {
    category: "Analytics & Insights",
    features: [
      { name: "Rating Visibility", free: "Weekly", plus: "Always", pro: "Always", ultra: "Always" },
      { name: "Profile Analytics", free: "Basic", plus: "Enhanced", pro: "Full", ultra: "Full" },
      { name: "Match Insights", free: false, plus: true, pro: true, ultra: true },
      { name: "Activity Reports", free: false, plus: false, pro: true, ultra: true },
    ],
  },
  {
    category: "Support",
    features: [
      { name: "Help Center Access", free: true, plus: true, pro: true, ultra: true },
      { name: "Email Support", free: true, plus: true, pro: true, ultra: true },
      { name: "Priority Support", free: false, plus: false, pro: true, ultra: true },
      { name: "VIP Support", free: false, plus: false, pro: false, ultra: true },
    ],
  },
];

const tiers = ["free", "plus", "pro", "ultra"] as const;
const tierLabels = { free: "Free", plus: "Plus", pro: "Pro", ultra: "Ultra" };
const tierColors = { 
  free: "#F5F5F5", 
  plus: "#FFF8E1", 
  pro: "#FFC629", 
  ultra: "#1A1A1A" 
};

const FeatureCell = ({ value }: { value: FeatureValue }) => {
  if (value === true) {
    return (
      <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
  return <span className="text-sm font-medium text-[var(--ratch-black)]">{value}</span>;
};

export default function PricingComparison() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--ratch-black)]">
            Compare All Features
          </h2>
          <p className="mt-4 text-lg text-[var(--ratch-gray)]">
            See exactly what you get with each plan
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0"
        >
          <div className="min-w-[700px]">
            {/* Sticky Header */}
            <div className="sticky top-0 bg-white z-10 border-b-2 border-gray-100">
              <div className="grid grid-cols-5 gap-4 py-4">
                <div className="col-span-1"></div>
                {tiers.map((tier) => (
                  <div 
                    key={tier}
                    className="text-center"
                  >
                    <div 
                      className={`inline-block px-4 py-2 rounded-full font-semibold text-sm ${
                        tier === "ultra" ? "text-white" : "text-[var(--ratch-black)]"
                      }`}
                      style={{ backgroundColor: tierColors[tier] }}
                    >
                      {tierLabels[tier]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Categories */}
            {featureCategories.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="py-4 mt-6 border-b border-gray-100">
                  <h3 className="font-bold text-lg text-[var(--ratch-black)]">
                    {category.category}
                  </h3>
                </div>

                {/* Features */}
                {category.features.map((feature, featureIndex) => (
                  <div 
                    key={feature.name}
                    className={`grid grid-cols-5 gap-4 py-4 ${
                      featureIndex !== category.features.length - 1 ? "border-b border-gray-50" : ""
                    }`}
                  >
                    <div className="col-span-1 flex items-center">
                      <span className="text-sm text-[var(--ratch-gray)]">{feature.name}</span>
                    </div>
                    {tiers.map((tier) => (
                      <div key={tier} className="flex items-center justify-center">
                        <FeatureCell value={feature[tier]} />
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-[var(--ratch-gray)] mt-12"
        >
          All plans include access to the Compare page, Inbox, and community features.
          <br />
          Features and limits may vary. Prices may vary by region.
        </motion.p>
      </div>
    </section>
  );
}
