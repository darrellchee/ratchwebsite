"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const timeRanges = ["Day", "Week", "Month", "Quarter", "All Time"];

// Generate realistic rating data
const generateChartData = (range: string) => {
  const baseRating = 5420;
  const points: number[] = [];
  const count = range === "Day" ? 24 : range === "Week" ? 7 : range === "Month" ? 30 : range === "Quarter" ? 12 : 52;
  
  for (let i = 0; i < count; i++) {
    const variation = Math.sin(i * 0.5) * 200 + Math.random() * 150;
    points.push(Math.round(baseRating + variation + (i / count) * 300));
  }
  return points;
};

// Helper function to create smooth bezier curve path
const createSmoothPath = (points: { x: number; y: number }[], tension: number = 0.3) => {
  if (points.length < 2) return '';
  
  let path = `M ${points[0].x} ${points[0].y}`;
  
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i === 0 ? i : i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2 < points.length ? i + 2 : i + 1];
    
    // Calculate control points using Catmull-Rom to Bezier conversion
    const cp1x = p1.x + (p2.x - p0.x) * tension;
    const cp1y = p1.y + (p2.y - p0.y) * tension;
    const cp2x = p2.x - (p3.x - p1.x) * tension;
    const cp2y = p2.y - (p3.y - p1.y) * tension;
    
    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  
  return path;
};

// Interactive Line Chart
const RatingChart = ({ data, selectedRange }: { data: number[]; selectedRange: string }) => {
  const maxY = Math.max(...data);
  const minY = Math.min(...data);
  const range = maxY - minY || 1;
  
  const points = data.map((y, i) => {
    const x = (i / (data.length - 1)) * 100;
    const normalizedY = 100 - ((y - minY) / range) * 70 - 15;
    return { x, y: normalizedY, value: y, index: i };
  });

  // Create smooth curved path
  const pathD = createSmoothPath(points, 0.25);

  const ratingChange = data[data.length - 1] - data[0];
  const isPositive = ratingChange >= 0;

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm text-bumble-gray">Current Rating</p>
          <div className="flex items-baseline gap-3">
            <p className="text-4xl font-bold text-bumble-black">{data[data.length - 1].toLocaleString()}</p>
            <span className={`flex items-center text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {isPositive ? '↑' : '↓'} {Math.abs(ratingChange).toLocaleString()}
              <span className="text-bumble-gray ml-1">this {selectedRange.toLowerCase()}</span>
            </span>
          </div>
        </div>
        <div className="px-3 py-1.5 rounded-full text-sm font-medium" style={{ backgroundColor: isPositive ? '#DCFCE7' : '#FEE2E2', color: isPositive ? '#16A34A' : '#DC2626' }}>
          {isPositive ? 'Trending Up' : 'Trending Down'}
        </div>
      </div>

      {/* Chart */}
      <div className="h-48 relative">
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={isPositive ? "#22C55E" : "#EF4444"} stopOpacity="0.2" />
              <stop offset="100%" stopColor={isPositive ? "#22C55E" : "#EF4444"} stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Grid lines */}
          {[20, 40, 60, 80].map((y) => (
            <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#E5E7EB" strokeWidth="0.5" strokeDasharray="2,2" />
          ))}
          
          {/* Area */}
          <motion.path
            d={`${pathD} L 100 100 L 0 100 Z`}
            fill="url(#areaGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Line */}
          <motion.path
            d={pathD}
            fill="none"
            stroke={isPositive ? "#22C55E" : "#EF4444"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2 }}
          />
        </svg>
      </div>
    </div>
  );
};

// Quick Stats Card
const QuickStatCard = ({ label, value, icon, trend }: { label: string; value: string; icon: string; trend?: string }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
  >
    <div className="flex items-start justify-between">
      <span className="text-2xl">{icon}</span>
      {trend && (
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${trend.startsWith('+') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
          {trend}
        </span>
      )}
    </div>
    <p className="text-3xl font-bold text-bumble-black mt-3">{value}</p>
    <p className="text-sm text-bumble-gray mt-1">{label}</p>
  </motion.div>
);

// Rating Tier Badge
const RatingTierBadge = ({ rating }: { rating: number }) => {
  const getTier = (r: number) => {
    if (r >= 8000) return { name: "Elite", color: "#FFD700", bgColor: "#FEF3C7", percentile: "Top 5%" };
    if (r >= 6500) return { name: "Outstanding", color: "#3B82F6", bgColor: "#DBEAFE", percentile: "Top 15%" };
    if (r >= 5000) return { name: "Rising Star", color: "#8B5CF6", bgColor: "#EDE9FE", percentile: "Top 35%" };
    return { name: "Climbing", color: "#6B7280", bgColor: "#F3F4F6", percentile: "Keep going!" };
  };

  const tier = getTier(rating);

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center gap-4">
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
          style={{ backgroundColor: tier.bgColor }}
        >
          {tier.name === "Elite" ? "👑" : tier.name === "Outstanding" ? "⭐" : tier.name === "Rising Star" ? "🌟" : "📈"}
        </div>
        <div>
          <p className="text-xs text-bumble-gray">Rating Tier</p>
          <p className="text-2xl font-bold" style={{ color: tier.color }}>{tier.name}</p>
          <p className="text-sm text-bumble-gray">{tier.percentile}</p>
        </div>
      </div>
      
      {/* Progress to next tier */}
      <div className="mt-4">
        <div className="flex justify-between text-xs text-bumble-gray mb-1">
          <span>{rating.toLocaleString()}</span>
          <span>{rating >= 8000 ? "Max Tier" : (rating >= 6500 ? "8,000" : rating >= 5000 ? "6,500" : "5,000")}</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: tier.color }}
            initial={{ width: 0 }}
            whileInView={{ width: `${Math.min(100, (rating % 1500) / 15)}%` }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
};

// Activity Streak Tracker
const ActivityStreak = () => {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const activity = [true, true, true, true, true, true, true]; // 7 day streak
  
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">🔥</span>
        <div>
          <p className="text-2xl font-bold text-bumble-black">7 Day Streak</p>
          <p className="text-sm text-bumble-gray">Keep comparing to maintain!</p>
        </div>
      </div>
      
      <div className="flex justify-between gap-2">
        {days.map((day, i) => (
          <div key={i} className="flex-1 text-center">
            <motion.div
              className="w-full aspect-square rounded-lg flex items-center justify-center mb-1"
              style={{ backgroundColor: activity[i] ? "#22C55E" : "#F3F4F6" }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              {activity[i] && <span className="text-white text-xs">✓</span>}
            </motion.div>
            <p className="text-xs text-bumble-gray">{day}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
        <div>
          <p className="text-xs text-bumble-gray">Best Streak</p>
          <p className="text-lg font-bold text-bumble-black">14 days</p>
        </div>
        <div>
          <p className="text-xs text-bumble-gray">Total Active Days</p>
          <p className="text-lg font-bold text-bumble-black">45 days</p>
        </div>
      </div>
    </div>
  );
};

// Visibility Status
const VisibilityStatus = () => (
  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
        <span className="text-xl">👁️</span>
      </div>
      <div>
        <p className="text-sm text-bumble-gray">Profile Visibility</p>
        <p className="text-xl font-bold text-bumble-black">High</p>
      </div>
      <div className="ml-auto px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">
        Active
      </div>
    </div>
    
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-sm text-bumble-gray">Visibility Multiplier</span>
        <span className="text-sm font-medium text-bumble-black">1.2x</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-bumble-gray">Comparisons (7 days)</span>
        <span className="text-sm font-medium text-bumble-black">284</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-bumble-gray">Last Active</span>
        <span className="text-sm font-medium text-green-600">Just now</span>
      </div>
    </div>
  </div>
);

export default function StatsOverview() {
  const [selectedRange, setSelectedRange] = useState("Week");
  const chartData = generateChartData(selectedRange);

  return (
    <section id="overview" className="py-16 lg:py-24" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: "#FFC629", color: "#1A1A1A" }}>
            Overview
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bumble-black">
            Track Your Progress
          </h2>
          <p className="mt-4 text-lg text-bumble-gray max-w-2xl mx-auto">
            Your rating journey at a glance. See how you've performed over time and where you stand.
          </p>
        </motion.div>

        {/* Chart Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 mb-8"
        >
          {/* Time Range Selector */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {timeRanges.map((range) => (
              <button
                key={range}
                onClick={() => setSelectedRange(range)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedRange === range
                    ? 'bg-bumble-black text-white'
                    : 'bg-gray-100 text-bumble-gray hover:bg-gray-200'
                }`}
              >
                {range}
              </button>
            ))}
          </div>

          <RatingChart data={chartData} selectedRange={selectedRange} />
        </motion.div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <QuickStatCard label="Comparisons Made" value="1,247" icon="🎯" trend="+156" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <QuickStatCard label="Times Shown" value="3,892" icon="👀" trend="+412" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <QuickStatCard label="Unique Reach" value="2,156" icon="🌐" trend="+298" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <QuickStatCard label="Match Rate" value="8.4%" icon="💕" trend="+1.2%" />
          </motion.div>
        </div>

        {/* Bottom Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <RatingTierBadge rating={5720} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ActivityStreak />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <VisibilityStatus />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
