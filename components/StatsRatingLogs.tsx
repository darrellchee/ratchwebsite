"use client";

import { motion } from "framer-motion";

// Rating Log Entry
const RatingLogEntry = ({ 
  entry,
  index
}: { 
  entry: {
    timestamp: string;
    type: "win" | "loss" | "super_like" | "boost";
    ratingChange: number;
    newRating: number;
    opponent?: { name: string; age: number };
  };
  index: number;
}) => {
  const typeConfig = {
    win: { icon: "✓", color: "#22C55E", bg: "#DCFCE7", label: "Won" },
    loss: { icon: "✗", color: "#EF4444", bg: "#FEE2E2", label: "Lost" },
    super_like: { icon: "⭐", color: "#8B5CF6", bg: "#EDE9FE", label: "Super Liked" },
    boost: { icon: "⚡", color: "#F59E0B", bg: "#FEF3C7", label: "Boosted" },
  };

  const config = typeConfig[entry.type];
  const isPositive = entry.ratingChange >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-sm transition-shadow"
    >
      {/* Type Icon */}
      <div 
        className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
        style={{ backgroundColor: config.bg, color: config.color }}
      >
        {config.icon}
      </div>

      {/* Details */}
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="font-medium text-bumble-black">{config.label}</p>
          {entry.opponent && (
            <span className="text-sm text-bumble-gray">
              vs {entry.opponent.name}, {entry.opponent.age}
            </span>
          )}
        </div>
        <p className="text-xs text-bumble-gray mt-0.5">{entry.timestamp}</p>
      </div>

      {/* Rating Change */}
      <div className="text-right">
        <p 
          className="font-bold"
          style={{ color: isPositive ? "#22C55E" : "#EF4444" }}
        >
          {isPositive ? "+" : ""}{entry.ratingChange}
        </p>
        <p className="text-xs text-bumble-gray">{entry.newRating.toLocaleString()}</p>
      </div>
    </motion.div>
  );
};

// Who Viewed You List
const WhoViewedYou = () => {
  const viewers = [
    { name: "Sarah", age: 26, time: "2 min ago", color: "#FFB6C1" },
    { name: "Emily", age: 24, time: "15 min ago", color: "#87CEEB" },
    { name: "Jessica", age: 28, time: "1 hour ago", color: "#98D8C8" },
    { name: "Amanda", age: 25, time: "2 hours ago", color: "#DDA0DD" },
    { name: "Rachel", age: 27, time: "3 hours ago", color: "#F0E68C" },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-xl">👀</span>
          <p className="text-lg font-bold text-bumble-black">Who Viewed You</p>
        </div>
        <span className="px-2 py-1 rounded-full text-xs font-medium bg-black text-white">Ultra</span>
      </div>

      <div className="space-y-3">
        {viewers.map((viewer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
          >
            {/* Avatar */}
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: viewer.color }}
            >
              {viewer.name[0]}
            </div>

            {/* Info */}
            <div className="flex-1">
              <p className="font-medium text-bumble-black">{viewer.name}, {viewer.age}</p>
              <p className="text-xs text-bumble-gray">{viewer.time}</p>
            </div>

            {/* Action */}
            <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-yellow-400 text-bumble-black hover:bg-yellow-500 transition-colors">
              View
            </button>
          </motion.div>
        ))}
      </div>

      <button className="w-full mt-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-bumble-gray hover:bg-gray-50 transition-colors">
        See All Viewers
      </button>
    </div>
  );
};

// Rating History Timeline
const RatingTimeline = () => {
  const milestones = [
    { rating: 7500, date: "Jan 10", label: "All-time High", icon: "🏆" },
    { rating: 7000, date: "Dec 28", label: "Hit 7K", icon: "🎉" },
    { rating: 6500, date: "Dec 15", label: "Rising Star", icon: "⭐" },
    { rating: 6000, date: "Dec 1", label: "First Boost", icon: "⚡" },
    { rating: 5500, date: "Nov 20", label: "10 Win Streak", icon: "🔥" },
    { rating: 5000, date: "Nov 1", label: "Started", icon: "🚀" },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <p className="text-lg font-bold text-bumble-black mb-4">Rating Journey</p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200" />

        <div className="space-y-4">
          {milestones.map((milestone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 relative"
            >
              {/* Dot */}
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg bg-white border-2 border-gray-200 z-10"
                style={{ borderColor: i === 0 ? "#FFC629" : "#E5E7EB" }}
              >
                {milestone.icon}
              </div>

              {/* Content */}
              <div className="flex-1 bg-gray-50 rounded-xl p-3">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-bumble-black">{milestone.label}</p>
                  <p className="text-sm font-bold text-bumble-black">{milestone.rating.toLocaleString()}</p>
                </div>
                <p className="text-xs text-bumble-gray mt-0.5">{milestone.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Comparison Details
const ComparisonDetails = () => {
  const comparisons = [
    { 
      winner: { name: "You", rating: 7542 }, 
      loser: { name: "Alex", rating: 7320 },
      ratingGain: 18,
      time: "2 min ago"
    },
    { 
      winner: { name: "Jordan", rating: 7680 }, 
      loser: { name: "You", rating: 7542 },
      ratingGain: -12,
      time: "5 min ago"
    },
    { 
      winner: { name: "You", rating: 7524 }, 
      loser: { name: "Taylor", rating: 7100 },
      ratingGain: 15,
      time: "12 min ago"
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-bold text-bumble-black">Recent Comparisons</p>
        <span className="text-xs text-bumble-gray">Last 24 hours</span>
      </div>

      <div className="space-y-3">
        {comparisons.map((comp, i) => {
          const youWon = comp.winner.name === "You";
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-3 rounded-xl bg-gray-50"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: youWon ? "#22C55E" : "#EF4444" }}
                  >
                    {youWon ? "W" : "L"}
                  </div>
                  <span className="text-sm font-medium text-bumble-black">
                    {youWon ? `Beat ${comp.loser.name}` : `Lost to ${comp.winner.name}`}
                  </span>
                </div>
                <span 
                  className="text-sm font-bold"
                  style={{ color: comp.ratingGain >= 0 ? "#22C55E" : "#EF4444" }}
                >
                  {comp.ratingGain >= 0 ? "+" : ""}{comp.ratingGain}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-bumble-gray">
                <span>Rating: {youWon ? comp.loser.rating : comp.winner.rating}</span>
                <span>{comp.time}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <button className="w-full mt-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-bumble-gray hover:bg-gray-50 transition-colors">
        View Full History
      </button>
    </div>
  );
};

export default function StatsRatingLogs() {
  const recentLogs = [
    { timestamp: "Jan 13, 2:15 PM", type: "win" as const, ratingChange: 18, newRating: 7542, opponent: { name: "Alex", age: 28 } },
    { timestamp: "Jan 13, 2:10 PM", type: "loss" as const, ratingChange: -12, newRating: 7524, opponent: { name: "Jordan", age: 26 } },
    { timestamp: "Jan 13, 2:05 PM", type: "win" as const, ratingChange: 22, newRating: 7536, opponent: { name: "Taylor", age: 25 } },
    { timestamp: "Jan 13, 1:58 PM", type: "super_like" as const, ratingChange: 50, newRating: 7514 },
    { timestamp: "Jan 13, 1:45 PM", type: "win" as const, ratingChange: 15, newRating: 7464, opponent: { name: "Morgan", age: 27 } },
    { timestamp: "Jan 13, 1:30 PM", type: "boost" as const, ratingChange: 0, newRating: 7449 },
    { timestamp: "Jan 13, 1:20 PM", type: "win" as const, ratingChange: 19, newRating: 7449, opponent: { name: "Casey", age: 24 } },
    { timestamp: "Jan 13, 1:15 PM", type: "loss" as const, ratingChange: -14, newRating: 7430, opponent: { name: "Riley", age: 29 } },
  ];

  return (
    <section id="logs" className="py-16 lg:py-24" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 bg-black text-white">
            Ultra Exclusive
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bumble-black">
            Complete Rating History
          </h2>
          <p className="mt-4 text-lg text-bumble-gray max-w-2xl mx-auto">
            Every comparison, every rating change, every viewer. The most detailed analytics available only for Ultra members.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Rating Logs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <p className="text-lg font-bold text-bumble-black">Rating Log</p>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-bumble-black text-white">
                    All
                  </button>
                  <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-bumble-gray hover:bg-gray-200">
                    Wins
                  </button>
                  <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-bumble-gray hover:bg-gray-200">
                    Losses
                  </button>
                </div>
              </div>

              <div className="space-y-2 max-h-[500px] overflow-y-auto">
                {recentLogs.map((entry, i) => (
                  <RatingLogEntry key={i} entry={entry} index={i} />
                ))}
              </div>

              <button className="w-full mt-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-bumble-gray hover:bg-gray-50 transition-colors">
                Load More
              </button>
            </div>
          </motion.div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <WhoViewedYou />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <RatingTimeline />
            </motion.div>
          </div>
        </div>

        {/* Recent Comparisons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6"
        >
          <ComparisonDetails />
        </motion.div>

        {/* Ultra CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 rounded-3xl p-8 text-center text-white"
          style={{ 
            background: "linear-gradient(135deg, #1A1A1A 0%, #374151 100%)",
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-4">
            <span className="text-xl">👑</span>
            <span className="font-medium">Ultra Exclusive</span>
          </div>
          <p className="text-2xl font-bold">
            See who views you. Know every rating change.
          </p>
          <p className="text-white/70 mt-2 max-w-lg mx-auto">
            Ultra members get complete transparency into their dating analytics. Know exactly who&apos;s interested.
          </p>
          <button className="mt-6 px-8 py-4 rounded-full text-lg font-medium bg-yellow-400 text-bumble-black hover:bg-yellow-500 transition-colors">
            Upgrade to Ultra
          </button>
        </motion.div>
      </div>
    </section>
  );
}
