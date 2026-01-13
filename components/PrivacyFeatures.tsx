"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function PrivacyFeatures() {
  const [isOptedIn, setIsOptedIn] = useState(true);

  return (
    <section id="privacy" className="py-16 lg:py-24 bg-white">
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
            style={{ backgroundColor: "#1A1A1A", color: "#FFFFFF" }}
          >
            🔐 Privacy First
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bumble-black">
            You&apos;re in Control
          </h2>
          <p className="mt-4 text-lg text-bumble-gray max-w-2xl mx-auto">
            The leaderboard is opt-in by design. Choose to compete or stay private — 
            it&apos;s entirely up to you.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Opt-In/Out Demo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Interactive Toggle Card */}
            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="font-bold text-bumble-black text-lg">Leaderboard Visibility</p>
                  <p className="text-sm text-bumble-gray">Toggle to see how it works</p>
                </div>
                <button
                  onClick={() => setIsOptedIn(!isOptedIn)}
                  className={`relative w-14 h-8 rounded-full transition-colors ${isOptedIn ? 'bg-green-500' : 'bg-gray-300'}`}
                >
                  <motion.div
                    className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm"
                    animate={{ left: isOptedIn ? "calc(100% - 28px)" : "4px" }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </button>
              </div>

              {/* Status Display */}
              <motion.div
                layout
                className={`rounded-2xl p-4 border-2 transition-colors ${
                  isOptedIn 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-red-50 border-red-200'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isOptedIn ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {isOptedIn ? (
                      <span className="text-lg">✅</span>
                    ) : (
                      <span className="text-lg">🔒</span>
                    )}
                  </div>
                  <div>
                    <p className={`font-bold ${isOptedIn ? 'text-green-700' : 'text-red-700'}`}>
                      {isOptedIn ? "Opted In" : "Opted Out"}
                    </p>
                    <p className={`text-sm ${isOptedIn ? 'text-green-600' : 'text-red-600'}`}>
                      {isOptedIn ? "You appear on the leaderboard" : "Your ranking is private"}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <div className="flex items-center gap-2">
                    <span className={`text-sm ${isOptedIn ? 'text-green-600' : 'text-gray-400'}`}>
                      {isOptedIn ? "✓" : "×"} Appear on Global Leaderboard
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm ${isOptedIn ? 'text-green-600' : 'text-gray-400'}`}>
                      {isOptedIn ? "✓" : "×"} Visible in Ladder leagues
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm ${isOptedIn ? 'text-green-600' : 'text-red-600'}`}>
                      {isOptedIn ? "✓" : "×"} Can view leaderboard
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Important Note */}
              <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <div className="flex items-start gap-3">
                  <span className="text-xl">⚠️</span>
                  <div>
                    <p className="font-medium text-amber-800">Important</p>
                    <p className="text-sm text-amber-700">
                      If you opt out, you cannot view the leaderboard. This protects 
                      the privacy of participants.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Where to Manage */}
            <div className="mt-6 bg-white rounded-2xl p-5 border border-gray-200">
              <p className="font-bold text-bumble-black mb-4">Where to Manage</p>
              <div className="space-y-3">
                {[
                  { icon: "👋", title: "During Onboarding", desc: "Toggle during account creation" },
                  { icon: "⚙️", title: "Profile Settings", desc: "Settings → Profile → Visibility" },
                  { icon: "🎚️", title: "Privacy Controls", desc: "Dedicated visibility settings page" },
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-bumble-black">{item.title}</p>
                      <p className="text-xs text-bumble-gray">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Top 10% Prompt + Privacy Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Top 10% Prompt Mockup */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-6 border border-yellow-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-yellow-100 flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <p className="font-bold text-bumble-black">You&apos;re in the Top 10%!</p>
                  <p className="text-sm text-bumble-gray">of users in Sydney</p>
                </div>
              </div>

              <p className="text-sm text-bumble-gray mb-4">
                Join the leaderboard to show off your ranking and get more visibility!
              </p>

              <div className="space-y-2 mb-5">
                {[
                  "Appear on the global leaderboard",
                  "Get more profile visibility",
                  "Show your ranking to others",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</span>
                    <span className="text-sm text-bumble-black">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button 
                  className="flex-1 py-3 rounded-full font-medium text-white"
                  style={{ backgroundColor: "#F97316" }}
                >
                  Join Leaderboard
                </button>
                <button className="px-6 py-3 rounded-full font-medium text-bumble-gray border border-gray-200">
                  Not Now
                </button>
              </div>
            </div>

            {/* Privacy Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  icon: "👤", 
                  title: "Display Name Only", 
                  desc: "Real name never shown",
                  color: "#3B82F6"
                },
                { 
                  icon: "📍", 
                  title: "City Only", 
                  desc: "Exact location hidden",
                  color: "#22C55E"
                },
                { 
                  icon: "🔢", 
                  title: "Rating Visible", 
                  desc: "If you choose to share",
                  color: "#F59E0B"
                },
                { 
                  icon: "📸", 
                  title: "First Photo Only", 
                  desc: "Profile preview only",
                  color: "#EC4899"
                },
              ].map((feature) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl p-4 border border-gray-100 hover:border-gray-200 transition-colors"
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <span className="text-lg">{feature.icon}</span>
                  </div>
                  <p className="font-medium text-bumble-black text-sm">{feature.title}</p>
                  <p className="text-xs text-bumble-gray">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* What's Never Shown */}
            <div className="bg-gray-900 rounded-2xl p-5 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <span className="text-lg">🚫</span>
                </div>
                <p className="font-bold">Never Displayed</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {["Real Name", "Email", "Age", "Bio", "Contact Info", "Phone"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="text-red-400">✗</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
