"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with basic features",
    features: [
      "10 comparisons per day",
      "5 DMs per week",
      "Weekly stats summary",
      "Basic profile",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Plus",
    price: "$9.99",
    period: "/month",
    description: "More features for active daters",
    features: [
      "50 comparisons per day",
      "25 DMs per week",
      "Daily stats updates",
      "Extended match history",
      "Profile boost (1x/week)",
    ],
    cta: "Start Free Trial",
    featured: false,
  },
  {
    name: "Pro",
    price: "$19.99",
    period: "/month",
    description: "For serious matchmakers",
    features: [
      "Unlimited comparisons",
      "Unlimited DMs",
      "Real-time stats",
      "Full match history",
      "Priority matching",
      "See who chose you",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Ultra",
    price: "$29.99",
    period: "/month",
    description: "The ultimate experience",
    features: [
      "Everything in Pro",
      "Exclusive leaderboard access",
      "Profile review by experts",
      "Priority support",
      "Early access to features",
      "Incognito mode",
    ],
    cta: "Start Free Trial",
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Choose the plan that fits your dating style. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                plan.featured
                  ? "border-amber-500 bg-amber-50 shadow-lg shadow-amber-100"
                  : "border-gray-100 bg-white hover:border-gray-200"
              }`}
            >
              {/* Popular Badge */}
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-lg font-semibold text-gray-900">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.featured ? "text-amber-500" : "text-gray-400"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-full font-medium transition-colors ${
                  plan.featured
                    ? "bg-amber-500 text-white hover:bg-amber-600"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

