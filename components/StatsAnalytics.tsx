"use client";

import { motion } from "framer-motion";

// Win Rate Ring Chart
const WinRateRing = ({ winRate }: { winRate: number }) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (winRate / 100) * circumference;

  return (
    <div className="relative w-40 h-40 mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#F3F4F6"
          strokeWidth="8"
        />
        {/* Win portion */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#22C55E"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="text-4xl font-bold text-bumble-black"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {winRate}%
        </motion.span>
        <span className="text-sm text-bumble-gray">Win Rate</span>
      </div>
    </div>
  );
};

// Percentile Badge
const PercentileBadge = ({ percentile }: { percentile: number }) => {
  const getBadgeStyle = (p: number) => {
    if (p >= 95) return { color: "#FFD700", bg: "#FEF3C7", label: "Gold", icon: "👑" };
    if (p >= 80) return { color: "#C4B5FD", bg: "#EDE9FE", label: "Platinum", icon: "💎" };
    if (p >= 60) return { color: "#3B82F6", bg: "#DBEAFE", label: "Silver", icon: "🥈" };
    return { color: "#6B7280", bg: "#F3F4F6", label: "Bronze", icon: "🥉" };
  };

  const style = getBadgeStyle(percentile);

  return (
    <motion.div
      className="rounded-3xl p-6 text-center"
      style={{ backgroundColor: style.bg }}
      whileHover={{ scale: 1.02 }}
    >
      <span className="text-5xl">{style.icon}</span>
      <p className="text-2xl font-bold mt-3" style={{ color: style.color }}>
        {style.label} Badge
      </p>
      <p className="text-bumble-gray mt-1">Top {100 - percentile}% of users</p>
      
      <div className="mt-4 flex items-center justify-center gap-2">
        <div className="h-2 flex-1 bg-white/50 rounded-full overflow-hidden max-w-[150px]">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: style.color }}
            initial={{ width: 0 }}
            whileInView={{ width: `${percentile}%` }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
        <span className="text-sm font-medium" style={{ color: style.color }}>
          {percentile}%
        </span>
      </div>
    </motion.div>
  );
};

// Streak Card
const StreakCard = ({ 
  label, 
  value, 
  type, 
  isBest = false 
}: { 
  label: string; 
  value: number; 
  type: "win" | "loss"; 
  isBest?: boolean;
}) => (
  <motion.div
    className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
    whileHover={{ scale: 1.02 }}
  >
    <div className="flex items-center gap-3">
      <div 
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ 
          backgroundColor: type === "win" ? "#DCFCE7" : "#FEE2E2",
        }}
      >
        <span className="text-xl">{type === "win" ? "🔥" : "❄️"}</span>
      </div>
      <div>
        <p className="text-sm text-bumble-gray">{label}</p>
        <div className="flex items-baseline gap-2">
          <p className="text-2xl font-bold text-bumble-black">{value}</p>
          {isBest && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700">
              Personal Best
            </span>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

// Activity Heatmap Calendar
const ActivityHeatmap = () => {
  // Generate 7 weeks of data
  const weeks = 7;
  const days = 7;
  
  const generateActivity = () => {
    const data: number[][] = [];
    for (let w = 0; w < weeks; w++) {
      const week: number[] = [];
      for (let d = 0; d < days; d++) {
        // Random activity level 0-4
        week.push(Math.floor(Math.random() * 5));
      }
      data.push(week);
    }
    return data;
  };

  const activityData = generateActivity();
  const dayLabels = ["", "Mon", "", "Wed", "", "Fri", ""];

  const getColor = (level: number) => {
    const colors = [
      "#F3F4F6", // 0 - no activity
      "#BBF7D0", // 1 - low
      "#86EFAC", // 2 - medium
      "#4ADE80", // 3 - high
      "#22C55E", // 4 - very high
    ];
    return colors[level];
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-lg font-bold text-bumble-black">Activity Heatmap</p>
          <p className="text-sm text-bumble-gray">Your comparison activity</p>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-xs text-bumble-gray">Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: getColor(level) }}
            />
          ))}
          <span className="text-xs text-bumble-gray">More</span>
        </div>
      </div>

      <div className="flex gap-1">
        {/* Day labels */}
        <div className="flex flex-col gap-1 mr-2">
          {dayLabels.map((label, i) => (
            <div key={i} className="h-4 text-xs text-bumble-gray flex items-center">
              {label}
            </div>
          ))}
        </div>

        {/* Heatmap grid */}
        <div className="flex gap-1 flex-1">
          {activityData.map((week, w) => (
            <div key={w} className="flex flex-col gap-1 flex-1">
              {week.map((level, d) => (
                <motion.div
                  key={`${w}-${d}`}
                  className="h-4 rounded-sm cursor-pointer"
                  style={{ backgroundColor: getColor(level) }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2, delay: (w * days + d) * 0.01 }}
                  whileHover={{ scale: 1.2 }}
                  title={`${level * 10} comparisons`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Win/Loss Stats Breakdown
const WinLossBreakdown = () => {
  const stats = {
    wins: 892,
    losses: 355,
    total: 1247,
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <p className="text-lg font-bold text-bumble-black mb-4">Win/Loss Breakdown</p>
      
      <div className="space-y-4">
        {/* Wins bar */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-green-600">Wins</span>
            <span className="text-sm text-bumble-gray">{stats.wins} ({Math.round(stats.wins / stats.total * 100)}%)</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-green-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${(stats.wins / stats.total) * 100}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>

        {/* Losses bar */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-red-500">Losses</span>
            <span className="text-sm text-bumble-gray">{stats.losses} ({Math.round(stats.losses / stats.total * 100)}%)</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-red-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${(stats.losses / stats.total) * 100}%` }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-xl font-bold text-green-600">+18</p>
          <p className="text-xs text-bumble-gray">Avg. Win Score</p>
        </div>
        <div>
          <p className="text-xl font-bold text-red-500">-12</p>
          <p className="text-xs text-bumble-gray">Avg. Loss Score</p>
        </div>
        <div>
          <p className="text-xl font-bold text-bumble-black">+892</p>
          <p className="text-xs text-bumble-gray">Net Change</p>
        </div>
      </div>
    </div>
  );
};

export default function StatsAnalytics() {
  return (
    <section id="analytics" className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: "#DBEAFE", color: "#1D4ED8" }}>
            Analytics
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bumble-black">
            Deep Dive Into Your Performance
          </h2>
          <p className="mt-4 text-lg text-bumble-gray max-w-2xl mx-auto">
            Understand your wins, losses, and how you compare to others. Pro and Ultra features included.
          </p>
        </motion.div>

        {/* Main Analytics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Win Rate Ring - Spans 2 on mobile, 1 on larger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center"
          >
            <WinRateRing winRate={72} />
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-sm text-bumble-gray">892 Wins</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-200" />
                <span className="text-sm text-bumble-gray">355 Losses</span>
              </div>
            </div>
          </motion.div>

          {/* Percentile Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <PercentileBadge percentile={87} />
          </motion.div>

          {/* Win/Loss Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <WinLossBreakdown />
          </motion.div>
        </div>

        {/* Streaks Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <StreakCard label="Current Win Streak" value={5} type="win" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <StreakCard label="Best Win Streak" value={12} type="win" isBest />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <StreakCard label="Current Loss Streak" value={0} type="loss" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <StreakCard label="Worst Loss Streak" value={4} type="loss" />
          </motion.div>
        </div>

        {/* Activity Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-6"
        >
          <ActivityHeatmap />
        </motion.div>

        {/* Pro/Ultra Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="mt-8 rounded-3xl p-6 text-center"
          style={{ 
            background: "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)",
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500 text-white">PRO</span>
            <span className="px-3 py-1 rounded-full text-xs font-medium text-white" style={{ backgroundColor: "#FFC629", color: "#1A1A1A" }}>ULTRA</span>
          </div>
          <p className="text-white text-lg font-medium">
            Unlock advanced analytics with hourly data, detailed breakdowns, and more
          </p>
          <button className="mt-4 px-6 py-3 rounded-full text-sm font-medium bg-white text-bumble-black hover:bg-gray-100 transition-colors">
            Upgrade Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
