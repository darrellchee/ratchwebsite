"use client";

import { motion } from "framer-motion";

// Locked Overlay Component
const LockedOverlay = ({ tier }: { tier: "Pro" | "Ultra" }) => (
  <div className="absolute inset-0 backdrop-blur-md bg-white/60 rounded-2xl flex flex-col items-center justify-center z-10">
    <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
      <span className="text-3xl">🔒</span>
    </div>
    <p className="text-lg font-bold text-bumble-black">{tier}+ Feature</p>
    <p className="text-sm text-bumble-gray mt-1">Upgrade to unlock audience insights</p>
    <button 
      className="mt-4 px-5 py-2 rounded-full text-sm font-medium text-white transition-colors"
      style={{ backgroundColor: tier === "Ultra" ? "#1A1A1A" : "#8B5CF6" }}
    >
      Upgrade to {tier}
    </button>
  </div>
);

// Gender Distribution Chart
const GenderDistribution = ({ isLocked = false }: { isLocked?: boolean }) => {
  const data = [
    { label: "Female", value: 62, color: "#F472B6" },
    { label: "Male", value: 35, color: "#60A5FA" },
    { label: "Non-binary", value: 3, color: "#A78BFA" },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative">
      {isLocked && <LockedOverlay tier="Pro" />}
      
      <p className="text-lg font-bold text-bumble-black mb-4">Who Views You</p>
      
      <div className="flex gap-4">
        {/* Pie Chart */}
        <div className="relative w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            {data.reduce((acc, item, i) => {
              const prevTotal = data.slice(0, i).reduce((sum, d) => sum + d.value, 0);
              const circumference = 2 * Math.PI * 40;
              const offset = (prevTotal / 100) * circumference;
              const length = (item.value / 100) * circumference;
              
              acc.push(
                <motion.circle
                  key={item.label}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={item.color}
                  strokeWidth="20"
                  strokeDasharray={`${length} ${circumference - length}`}
                  strokeDashoffset={-offset}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                />
              );
              return acc;
            }, [] as JSX.Element[])}
          </svg>
        </div>

        {/* Legend */}
        <div className="flex flex-col justify-center gap-2 flex-1">
          {data.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-sm text-bumble-gray flex-1">{item.label}</span>
              <span className="text-sm font-medium text-bumble-black">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Age Distribution Chart
const AgeDistribution = ({ isLocked = false }: { isLocked?: boolean }) => {
  const data = [
    { range: "18-24", value: 28 },
    { range: "25-30", value: 42 },
    { range: "31-35", value: 18 },
    { range: "36-40", value: 8 },
    { range: "40+", value: 4 },
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative">
      {isLocked && <LockedOverlay tier="Pro" />}
      
      <p className="text-lg font-bold text-bumble-black mb-4">Age Distribution</p>
      
      <div className="flex items-end justify-between gap-2 h-32">
        {data.map((item, i) => (
          <div key={item.range} className="flex-1 flex flex-col items-center">
            <motion.div
              className="w-full rounded-t-lg"
              style={{ backgroundColor: "#FFC629" }}
              initial={{ height: 0 }}
              whileInView={{ height: `${(item.value / maxValue) * 100}%` }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
            <p className="text-xs text-bumble-gray mt-2">{item.range}</p>
            <p className="text-xs font-medium text-bumble-black">{item.value}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Who Chooses You vs Who Passes
const ChooseVsPass = ({ isLocked = false }: { isLocked?: boolean }) => {
  const data = {
    choose: [
      { trait: "Athletic", value: 78 },
      { trait: "Educated", value: 72 },
      { trait: "Creative", value: 65 },
      { trait: "Outdoorsy", value: 58 },
    ],
    pass: [
      { trait: "Very Tall", value: 45 },
      { trait: "Older", value: 38 },
      { trait: "Far Away", value: 62 },
      { trait: "Different Religion", value: 28 },
    ],
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative">
      {isLocked && <LockedOverlay tier="Pro" />}
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Who Chooses You */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">💚</span>
            <p className="text-lg font-bold text-bumble-black">Who Chooses You</p>
          </div>
          <div className="space-y-3">
            {data.choose.map((item, i) => (
              <div key={item.trait}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-bumble-gray">{item.trait}</span>
                  <span className="font-medium text-green-600">{item.value}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-green-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who Passes */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">❌</span>
            <p className="text-lg font-bold text-bumble-black">Who Passes</p>
          </div>
          <div className="space-y-3">
            {data.pass.map((item, i) => (
              <div key={item.trait}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-bumble-gray">{item.trait}</span>
                  <span className="font-medium text-red-500">{item.value}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-red-300 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Win Rate by Demographics
const WinRateByDemographic = ({ isLocked = false }: { isLocked?: boolean }) => {
  const data = [
    { group: "Women 25-30", winRate: 82, color: "#F472B6" },
    { group: "Women 18-24", winRate: 75, color: "#F9A8D4" },
    { group: "Men 25-30", winRate: 68, color: "#60A5FA" },
    { group: "Men 31-35", winRate: 61, color: "#93C5FD" },
    { group: "Non-binary", winRate: 55, color: "#A78BFA" },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative">
      {isLocked && <LockedOverlay tier="Ultra" />}
      
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-bold text-bumble-black">Win Rate by Group</p>
        <span className="px-2 py-1 rounded-full text-xs font-medium bg-black text-white">Ultra</span>
      </div>
      
      <div className="space-y-3">
        {data.map((item, i) => (
          <div key={item.group} className="flex items-center gap-3">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: item.color }} 
            />
            <span className="text-sm text-bumble-gray flex-1">{item.group}</span>
            <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: item.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${item.winRate}%` }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
            </div>
            <span className="text-sm font-medium text-bumble-black w-10 text-right">{item.winRate}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function StatsDemographics() {
  return (
    <section id="demographics" className="py-16 lg:py-24" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: "#F3E8FF", color: "#7C3AED" }}>
            Demographics
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bumble-black">
            Know Your Audience
          </h2>
          <p className="mt-4 text-lg text-bumble-gray max-w-2xl mx-auto">
            Discover who's attracted to you. Insights into the demographics of users who view and choose your profile.
          </p>
          
          {/* Pro/Ultra badge */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">Pro Feature</span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-black text-white">Ultra Feature</span>
          </div>
        </motion.div>

        {/* Demographics Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <GenderDistribution isLocked={false} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <AgeDistribution isLocked={false} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6"
        >
          <ChooseVsPass isLocked={false} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6"
        >
          <WinRateByDemographic isLocked={false} />
        </motion.div>

        {/* Upgrade CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 rounded-3xl p-8 text-center"
          style={{ 
            background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
          }}
        >
          <span className="text-4xl">📊</span>
          <p className="text-white text-xl font-bold mt-4">
            Want to know exactly who's into you?
          </p>
          <p className="text-white/80 mt-2">
            Pro users get full demographic breakdowns. Ultra users get win rates by specific groups.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 rounded-full text-sm font-medium bg-white text-purple-600 hover:bg-gray-100 transition-colors">
              Upgrade to Pro
            </button>
            <button className="px-6 py-3 rounded-full text-sm font-medium bg-black text-white hover:bg-gray-800 transition-colors">
              Go Ultra
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
