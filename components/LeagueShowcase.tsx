"use client";

import { motion } from "framer-motion";

type League = {
  name: string;
  tagline: string;
  range: string;
  color: string;
  icon: string;
  members: number;
};

const leagues: League[] = [
  { name: "Irresistible", tagline: "Simply magnetic", range: "9000-9999", color: "#EAB308", icon: "👑", members: 12 },
  { name: "Iconic", tagline: "Legendary status", range: "8000-8999", color: "#F59E0B", icon: "🌟", members: 45 },
  { name: "Elite", tagline: "Top tier energy", range: "7000-7999", color: "#FFC629", icon: "💎", members: 128 },
  { name: "Stunning", tagline: "Making an impact", range: "6000-6999", color: "#F43F5E", icon: "🔥", members: 342 },
  { name: "Hot", tagline: "Heating things up", range: "5000-5999", color: "#F97316", icon: "🌶️", members: 567 },
  { name: "Attractive", tagline: "Turning heads", range: "4000-4999", color: "#3B82F6", icon: "✨", members: 892 },
  { name: "Pleasant", tagline: "Easy on the eyes", range: "3000-3999", color: "#0EA5E9", icon: "😊", members: 1245 },
  { name: "Balanced", tagline: "Finding your groove", range: "2000-2999", color: "#14B8A6", icon: "⚖️", members: 1567 },
  { name: "Natural", tagline: "Keeping it real", range: "1000-1999", color: "#22C55E", icon: "🌿", members: 2134 },
  { name: "Low-Key", tagline: "Just getting started", range: "0-999", color: "#6B7280", icon: "🌱", members: 3456 },
];

const LeagueCard = ({ 
  league, 
  index,
  isCurrentLeague = false
}: { 
  league: League; 
  index: number;
  isCurrentLeague?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ scale: 1.02, y: -4 }}
    className={`relative bg-white rounded-2xl overflow-hidden shadow-sm border ${isCurrentLeague ? 'ring-2' : ''}`}
    style={{ 
      borderColor: isCurrentLeague ? league.color : "#E5E7EB",
      "--tw-ring-color": isCurrentLeague ? league.color : "transparent"
    } as React.CSSProperties}
  >
    {/* Gradient accent bar */}
    <div 
      className="h-2"
      style={{ 
        background: `linear-gradient(90deg, ${league.color} 0%, ${league.color}80 100%)` 
      }}
    />
    
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{ backgroundColor: `${league.color}20` }}
        >
          {league.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="font-bold text-bumble-black">{league.name}</p>
            {isCurrentLeague && (
              <span 
                className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
                style={{ backgroundColor: league.color }}
              >
                YOU
              </span>
            )}
          </div>
          <p className="text-xs text-bumble-gray">{league.tagline}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-bumble-gray">Match Score Range</p>
          <p className="text-sm font-medium text-bumble-black">{league.range}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-bumble-gray">Members</p>
          <p className="text-sm font-medium" style={{ color: league.color }}>{league.members.toLocaleString()}</p>
        </div>
      </div>

      {/* Progress indicator for current league */}
      {isCurrentLeague && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex justify-between text-xs text-bumble-gray mb-1">
            <span>Your progress</span>
            <span>742 to next</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: league.color }}
              initial={{ width: 0 }}
              whileInView={{ width: "74%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </div>
      )}
    </div>
  </motion.div>
);

export default function LeagueShowcase() {
  return (
    <section id="leagues" className="py-16 lg:py-24" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span 
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 text-white"
            style={{ backgroundColor: "#F97316" }}
          >
            League System
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bumble-black">
            10 Leagues to Climb
          </h2>
          <p className="mt-4 text-lg text-bumble-gray max-w-2xl mx-auto">
            Your match score helps determine your league. Rise through the tiers from Low-Key to Irresistible 
            and compete with users in your level.
          </p>
        </motion.div>

        {/* League progression visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative">
            {/* Gradient bar showing progression */}
            <div className="h-4 rounded-full overflow-hidden flex">
              {leagues.slice().reverse().map((league, i) => (
                <div 
                  key={league.name}
                  className="flex-1 relative"
                  style={{ backgroundColor: league.color }}
                >
                  {/* Current position marker */}
                  {league.name === "Hot" && (
                    <motion.div
                      className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-sm"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                    >
                      👤
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Labels */}
            <div className="flex justify-between mt-3">
              <span className="text-xs text-bumble-gray">0 Match Score</span>
              <span className="text-xs text-bumble-gray">10,000 Match Score</span>
            </div>
          </div>
        </motion.div>

        {/* League Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {leagues.map((league, i) => (
            <LeagueCard 
              key={league.name} 
              league={league} 
              index={i} 
              isCurrentLeague={league.name === "Hot"}
            />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200">
            <span className="text-lg">🏆</span>
            <p className="text-sm text-bumble-gray">
              <span className="font-medium text-bumble-black">Tip:</span> Win more comparisons to grow your match score and climb leagues!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
