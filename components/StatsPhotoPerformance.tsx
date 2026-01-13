"use client";

import { motion } from "framer-motion";

// Photo Card Component
const PhotoCard = ({ 
  photo, 
  isLocked = false 
}: { 
  photo: {
    id: number;
    color: string;
    winRate: number;
    views: number;
    position: number;
    trend: "up" | "down" | "stable";
  };
  isLocked?: boolean;
}) => {
  const trendIcon = photo.trend === "up" ? "📈" : photo.trend === "down" ? "📉" : "➡️";
  const trendColor = photo.trend === "up" ? "text-green-600" : photo.trend === "down" ? "text-red-500" : "text-gray-500";

  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative"
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Photo placeholder */}
      <div 
        className="h-48 relative"
        style={{ backgroundColor: photo.color }}
      >
        {/* Position badge */}
        <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-sm font-bold text-bumble-black">
          {photo.position}
        </div>
        
        {/* Trend indicator */}
        <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-white/90 text-sm">
          {trendIcon}
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Camera icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl opacity-50">📷</span>
        </div>
      </div>

      {/* Stats */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-bumble-gray">Photo {photo.id}</span>
          <span className={`text-sm font-medium ${trendColor}`}>
            {photo.trend === "up" ? "Improving" : photo.trend === "down" ? "Declining" : "Stable"}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-50 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-bumble-black">{photo.winRate}%</p>
            <p className="text-xs text-bumble-gray mt-1">Win Rate</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-bumble-black">{photo.views.toLocaleString()}</p>
            <p className="text-xs text-bumble-gray mt-1">Views</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Photo Order Recommendation
const PhotoOrderRecommendation = () => {
  const recommendations = [
    { from: 3, to: 1, reason: "Higher engagement when shown first" },
    { from: 5, to: 3, reason: "Performs better earlier in profile" },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">
          <span className="text-xl">💡</span>
        </div>
        <div>
          <p className="text-lg font-bold text-bumble-black">Photo Order Tips</p>
          <p className="text-sm text-bumble-gray">AI-powered recommendations</p>
        </div>
      </div>

      <div className="space-y-3">
        {recommendations.map((rec, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-3 p-3 rounded-xl bg-yellow-50 border border-yellow-100"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-sm font-bold text-bumble-black">
                {rec.from}
              </span>
              <span className="text-bumble-gray">→</span>
              <span className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-sm font-bold text-bumble-black">
                {rec.to}
              </span>
            </div>
            <p className="text-sm text-bumble-gray flex-1">{rec.reason}</p>
          </motion.div>
        ))}
      </div>

      <button className="w-full mt-4 py-3 rounded-xl bg-yellow-400 text-bumble-black font-medium hover:bg-yellow-500 transition-colors">
        Apply Recommended Order
      </button>
    </div>
  );
};

// Engagement Comparison Chart
const EngagementComparison = () => {
  const photos = [
    { id: 1, engagement: 85 },
    { id: 2, engagement: 72 },
    { id: 3, engagement: 91 },
    { id: 4, engagement: 58 },
    { id: 5, engagement: 45 },
    { id: 6, engagement: 62 },
  ];

  const maxEngagement = Math.max(...photos.map(p => p.engagement));

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <p className="text-lg font-bold text-bumble-black mb-4">Engagement by Photo</p>
      
      <div className="flex items-end justify-between gap-3 h-40">
        {photos.map((photo, i) => (
          <div key={photo.id} className="flex-1 flex flex-col items-center">
            <motion.div
              className="w-full rounded-t-lg relative"
              style={{ 
                backgroundColor: photo.engagement === maxEngagement ? "#FFC629" : "#E5E7EB",
              }}
              initial={{ height: 0 }}
              whileInView={{ height: `${(photo.engagement / maxEngagement) * 100}%` }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {photo.engagement === maxEngagement && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-lg">⭐</div>
              )}
            </motion.div>
            <p className="text-xs font-medium text-bumble-black mt-2">{photo.engagement}%</p>
            <p className="text-xs text-bumble-gray">Photo {photo.id}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
        <div>
          <p className="text-xs text-bumble-gray">Best Performer</p>
          <p className="text-lg font-bold text-bumble-black">Photo 3</p>
        </div>
        <div>
          <p className="text-xs text-bumble-gray">Needs Improvement</p>
          <p className="text-lg font-bold text-bumble-black">Photo 5</p>
        </div>
        <div>
          <p className="text-xs text-bumble-gray">Average Engagement</p>
          <p className="text-lg font-bold text-bumble-black">69%</p>
        </div>
      </div>
    </div>
  );
};

// First Photo Impact
const FirstPhotoImpact = () => (
  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-5 border border-pink-100">
    <div className="flex items-center gap-3 mb-4">
      <span className="text-3xl">👆</span>
      <div>
        <p className="text-lg font-bold text-bumble-black">First Impression Matters</p>
        <p className="text-sm text-bumble-gray">Your main photo's impact</p>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-4 text-center">
      <div className="bg-white/70 rounded-xl p-3">
        <p className="text-2xl font-bold text-bumble-black">78%</p>
        <p className="text-xs text-bumble-gray mt-1">Swipe decisions</p>
      </div>
      <div className="bg-white/70 rounded-xl p-3">
        <p className="text-2xl font-bold text-green-600">+23%</p>
        <p className="text-xs text-bumble-gray mt-1">vs. average</p>
      </div>
      <div className="bg-white/70 rounded-xl p-3">
        <p className="text-2xl font-bold text-bumble-black">2.3s</p>
        <p className="text-xs text-bumble-gray mt-1">Avg. view time</p>
      </div>
    </div>

    <p className="text-sm text-bumble-gray mt-4 text-center">
      💡 Your current first photo is performing <span className="font-medium text-green-600">above average</span>
    </p>
  </div>
);

export default function StatsPhotoPerformance() {
  const photos = [
    { id: 1, color: "#FFB6C1", winRate: 78, views: 2340, position: 1, trend: "up" as const },
    { id: 2, color: "#87CEEB", winRate: 65, views: 1890, position: 2, trend: "stable" as const },
    { id: 3, color: "#98D8C8", winRate: 82, views: 2100, position: 3, trend: "up" as const },
    { id: 4, color: "#DDA0DD", winRate: 54, views: 1450, position: 4, trend: "down" as const },
    { id: 5, color: "#F0E68C", winRate: 48, views: 980, position: 5, trend: "down" as const },
    { id: 6, color: "#E6E6FA", winRate: 61, views: 1200, position: 6, trend: "stable" as const },
  ];

  return (
    <section id="photos" className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: "#FCE7F3", color: "#BE185D" }}>
            Photo Performance
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bumble-black">
            Which Photos Work Best?
          </h2>
          <p className="mt-4 text-lg text-bumble-gray max-w-2xl mx-auto">
            See how each of your photos performs. Discover which ones drive the most engagement and optimize your profile.
          </p>
          
          {/* Plus+ badge */}
          <div className="mt-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">Plus+ Feature</span>
          </div>
        </motion.div>

        {/* First Photo Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <FirstPhotoImpact />
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <PhotoCard photo={photo} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <EngagementComparison />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <PhotoOrderRecommendation />
          </motion.div>
        </div>

        {/* Upgrade CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 rounded-3xl p-8 text-center"
          style={{ 
            background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
          }}
        >
          <span className="text-4xl">📸</span>
          <p className="text-white text-xl font-bold mt-4">
            Get detailed photo analytics
          </p>
          <p className="text-white/80 mt-2">
            Plus+ members see exactly how each photo performs. Optimize your profile for maximum matches.
          </p>
          <button className="mt-6 px-6 py-3 rounded-full text-sm font-medium bg-white text-blue-600 hover:bg-gray-100 transition-colors">
            Upgrade to Plus+
          </button>
        </motion.div>
      </div>
    </section>
  );
}
