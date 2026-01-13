"use client";

import { motion } from "framer-motion";

type Feature = {
  name: string;
  description: string;
  free: string | boolean;
  plus: string | boolean;
  pro: string | boolean;
  ultra: string | boolean;
};

const features: Feature[] = [
  {
    name: "View Global Leaderboard",
    description: "Access the top 100 worldwide",
    free: "If opted-in",
    plus: "If opted-in",
    pro: "If opted-in",
    ultra: true,
  },
  {
    name: "View Ladder",
    description: "See league rankings",
    free: "If opted-in",
    plus: "If opted-in",
    pro: "If opted-in",
    ultra: true,
  },
  {
    name: "Appear on Leaderboard",
    description: "Show up in rankings",
    free: "If opted-in",
    plus: "If opted-in",
    pro: "If opted-in",
    ultra: true,
  },
  {
    name: "Tier-Based Anonymity",
    description: "Lower leagues are blurred",
    free: true,
    plus: true,
    pro: true,
    ultra: false,
  },
  {
    name: "See All Leagues",
    description: "No blur on any league",
    free: false,
    plus: false,
    pro: false,
    ultra: true,
  },
  {
    name: "Full Visibility",
    description: "View all profiles without restrictions",
    free: false,
    plus: false,
    pro: false,
    ultra: true,
  },
];

const tiers = [
  { name: "Free", color: "#6B7280", icon: "👤" },
  { name: "Plus", color: "#3B82F6", icon: "⭐" },
  { name: "Pro", color: "#8B5CF6", icon: "💎" },
  { name: "Ultra", color: "#F59E0B", icon: "👑" },
];

const FeatureCell = ({ value }: { value: string | boolean }) => {
  if (typeof value === "string") {
    return (
      <div className="flex items-center justify-center">
        <span className="px-2 py-1 rounded-full bg-gray-100 text-xs text-bumble-gray font-medium">
          {value}
        </span>
      </div>
    );
  }
  
  return (
    <div className="flex items-center justify-center">
      {value ? (
        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
          <span className="text-green-600 text-sm">✓</span>
        </div>
      ) : (
        <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
          <span className="text-red-400 text-sm">✗</span>
        </div>
      )}
    </div>
  );
};

export default function LeaderboardTiers() {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span 
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: "#F59E0B", color: "#FFFFFF" }}
          >
            Subscription Tiers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bumble-black">
            Unlock More Visibility
          </h2>
          <p className="mt-4 text-lg text-bumble-gray max-w-2xl mx-auto">
            Ultra members get the ultimate advantage — see all leagues without any blur 
            and enjoy complete visibility across the leaderboard.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-4 p-4 bg-gray-50 border-b border-gray-100">
            <div className="text-left">
              <p className="font-medium text-bumble-black">Feature</p>
            </div>
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div 
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{ 
                    backgroundColor: tier.name === "Ultra" ? `${tier.color}20` : "transparent",
                    border: tier.name === "Ultra" ? `2px solid ${tier.color}` : "none"
                  }}
                >
                  <span className="text-lg">{tier.icon}</span>
                  <span 
                    className="font-bold text-sm"
                    style={{ color: tier.color }}
                  >
                    {tier.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-50">
            {features.map((feature, i) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-5 gap-4 p-4 hover:bg-gray-50/50 transition-colors"
              >
                <div>
                  <p className="font-medium text-bumble-black text-sm">{feature.name}</p>
                  <p className="text-xs text-bumble-gray">{feature.description}</p>
                </div>
                <FeatureCell value={feature.free} />
                <FeatureCell value={feature.plus} />
                <FeatureCell value={feature.pro} />
                <FeatureCell value={feature.ultra} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ultra Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div 
            className="rounded-2xl p-6 md:p-8"
            style={{ 
              background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)" 
            }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                  <span className="text-4xl">👑</span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Ultra: The Ultimate Advantage
                </h3>
                <p className="text-white/80 max-w-xl">
                  See every league without any blur. View all profiles across the entire ladder 
                  and gain complete visibility into the competitive landscape.
                </p>
              </div>
              <div className="flex-shrink-0">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-white rounded-full font-medium text-amber-600 shadow-lg"
                >
                  Upgrade to Ultra
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Principles */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {[
            { 
              icon: "🔐", 
              title: "Privacy First",
              desc: "Opt-in required, opt-out removes access",
              color: "#1A1A1A"
            },
            { 
              icon: "🏆", 
              title: "Competitive",
              desc: "Rankings encourage engagement",
              color: "#F97316"
            },
            { 
              icon: "⚖️", 
              title: "Fair",
              desc: "Tier-based anonymity protects users",
              color: "#3B82F6"
            },
          ].map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-5 border border-gray-100"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${principle.color}10` }}
              >
                <span className="text-2xl">{principle.icon}</span>
              </div>
              <p className="font-bold text-bumble-black mb-1">{principle.title}</p>
              <p className="text-sm text-bumble-gray">{principle.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
