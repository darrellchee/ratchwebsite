"use client";

import { motion } from "framer-motion";

const features = [
  {
    slug: "super_like",
    label: "Priority Friend Request",
    description: "Give a profile a 2x ELO boost and instantly send a priority friend request. They'll know you're serious.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
    iconBg: "#EEF2FF",
    iconColor: "#6366F1",
  },
  {
    slug: "boost",
    label: "Boost Visibility",
    description: "Increase your profile visibility for 30 minutes. Appear more frequently in other users' friend discovery.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)",
    iconBg: "#FDF4FF",
    iconColor: "#A855F7",
  },
  {
    slug: "dual_connection",
    label: "Dual Friend Request",
    description: "Can't decide? React to both profiles at once. Sends friend requests to both users and boosts their ratings.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #F43F5E 0%, #FB923C 100%)",
    iconBg: "#FFF1F2",
    iconColor: "#F43F5E",
  },
];

export default function PremiumFeatures() {
  return (
    <section className="py-20 lg:py-32" style={{ backgroundColor: "#FAFAFA" }}>
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
            Premium Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bumble-black leading-tight">
            Stand Out From
            <br />
            <span className="text-bumble-gray">The Crowd</span>
          </h2>
          <p className="mt-6 text-lg text-bumble-gray">
            Unlock powerful features to strengthen your presence and make friends with more people.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Gradient border on hover */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  background: feature.gradient,
                  padding: "2px",
                }}
              >
                <div className="w-full h-full bg-white rounded-[22px]" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: feature.iconBg }}
                >
                  <div style={{ color: feature.iconColor }}>
                    {feature.icon}
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-xl lg:text-2xl font-bold text-bumble-black mb-3">
                  {feature.label}
                </h3>
                <p className="text-bumble-gray leading-relaxed">
                  {feature.description}
                </p>

                {/* Preview animation for Priority Friend Request */}
                {feature.slug === "super_like" && (
                  <motion.div
                    className="mt-6 flex items-center gap-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div 
                      className="w-12 h-16 rounded-lg flex items-center justify-center"
                      style={{ 
                        background: feature.gradient,
                        boxShadow: "0 4px 15px rgba(99, 102, 241, 0.3)",
                      }}
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-bumble-gray">2x Rating Boost</span>
                  </motion.div>
                )}

                {/* Preview animation for Boost */}
                {feature.slug === "boost" && (
                  <div className="mt-6 flex items-center gap-3">
                    <div className="relative">
                      <motion.div
                        className="w-12 h-16 rounded-lg flex items-center justify-center"
                        style={{ 
                          background: feature.gradient,
                        }}
                        animate={{ 
                          boxShadow: [
                            "0 0 0 0 rgba(168, 85, 247, 0.4)",
                            "0 0 0 10px rgba(168, 85, 247, 0)",
                          ]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                      </motion.div>
                    </div>
                    <span className="text-xs text-bumble-gray">30 min visibility boost</span>
                  </div>
                )}

                {/* Preview animation for Dual Friend Request */}
                {feature.slug === "dual_connection" && (
                  <div className="mt-6 flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <motion.div
                        className="w-10 h-14 rounded-lg"
                        style={{ backgroundColor: "#FFB6C1" }}
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-10 h-14 rounded-lg"
                        style={{ backgroundColor: "#87CEEB" }}
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                      />
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <svg className="w-6 h-6" style={{ color: "#F43F5E" }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </motion.div>
                    <span className="text-xs text-bumble-gray">Make friends with both profiles</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-bumble-gray mb-4">
            Availability varies by subscription tier
          </p>
          <motion.a
            href="#tiers"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-4 bg-bumble-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-colors"
          >
            View Subscription Plans
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
