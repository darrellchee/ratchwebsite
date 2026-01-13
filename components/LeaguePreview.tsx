"use client";

import { motion } from "framer-motion";

type League = {
  name: string;
  tagline: string;
  range: string;
  color: string;
  icon: string;
};

const leagues: League[] = [
  { name: "Irresistible", tagline: "Simply magnetic", range: "9000-9999", color: "#EAB308", icon: "👑" },
  { name: "Iconic", tagline: "Legendary status", range: "8000-8999", color: "#F59E0B", icon: "🌟" },
  { name: "Elite", tagline: "Top tier energy", range: "7000-7999", color: "#FFC629", icon: "💎" },
  { name: "Stunning", tagline: "Making an impact", range: "6000-6999", color: "#F43F5E", icon: "🔥" },
  { name: "Hot", tagline: "Heating things up", range: "5000-5999", color: "#F97316", icon: "🌶️" },
  { name: "Attractive", tagline: "Turning heads", range: "4000-4999", color: "#3B82F6", icon: "✨" },
  { name: "Pleasant", tagline: "Easy on the eyes", range: "3000-3999", color: "#0EA5E9", icon: "😊" },
  { name: "Balanced", tagline: "Finding your groove", range: "2000-2999", color: "#14B8A6", icon: "⚖️" },
  { name: "Natural", tagline: "Keeping it real", range: "1000-1999", color: "#22C55E", icon: "🌿" },
  { name: "Low-Key", tagline: "Just getting started", range: "0-999", color: "#6B7280", icon: "🌱" },
];

// The user's current league (for demo)
const currentLeagueIndex = 4; // "Hot"

const LeagueRow = ({ 
  league, 
  index,
  isCurrentLeague,
  totalLeagues
}: { 
  league: League;
  index: number;
  isCurrentLeague: boolean;
  totalLeagues: number;
}) => {
  const delayBase = 0.05;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * delayBase }}
      whileHover={{ x: 8 }}
      className={`relative flex items-center gap-4 p-4 rounded-2xl transition-all cursor-pointer ${
        isCurrentLeague 
          ? 'bg-white card-shadow ring-2' 
          : 'hover:bg-white/60'
      }`}
      style={{ 
        ringColor: isCurrentLeague ? league.color : "transparent",
      }}
    >
      {/* Connection line to ladder */}
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-full rounded-full"
        style={{ 
          background: index === totalLeagues - 1 
            ? `linear-gradient(to bottom, ${league.color} 0%, transparent 100%)`
            : index === 0
              ? `linear-gradient(to bottom, transparent 0%, ${league.color} 100%)`
              : league.color,
        }}
      />
      
      {/* Icon */}
      <div 
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ml-4"
        style={{ backgroundColor: `${league.color}20` }}
      >
        {league.icon}
      </div>

      {/* League info */}
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="font-bold text-[var(--ratch-black)]">{league.name}</p>
          {isCurrentLeague && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="px-2 py-0.5 rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: league.color }}
            >
              YOU
            </motion.span>
          )}
        </div>
        <p className="text-sm text-[var(--ratch-gray)]">{league.tagline}</p>
      </div>

      {/* ELO range */}
      <div className="text-right">
        <p className="text-sm font-medium text-[var(--ratch-black)]">{league.range}</p>
        <p className="text-xs text-[var(--ratch-gray)]">ELO</p>
      </div>

      {/* Current league indicator */}
      {isCurrentLeague && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -right-2 top-1/2 -translate-y-1/2"
        >
          <div 
            className="w-4 h-4 rounded-full shadow-lg"
            style={{ backgroundColor: league.color }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default function LeaguePreview() {
  return (
    <section 
      id="leagues" 
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--ratch-soft-peach)" }}
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl" 
        style={{ background: "linear-gradient(135deg, #F97316 0%, #EAB308 100%)" }} 
      />
      
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content - League Ladder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            {/* Gradient progress bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-3 rounded-full mb-8 overflow-hidden origin-left"
            >
              <div className="h-full flex">
                {leagues.slice().reverse().map((league, i) => (
                  <div 
                    key={league.name}
                    className="flex-1 relative"
                    style={{ backgroundColor: league.color }}
                  >
                    {/* User position marker */}
                    {league.name === leagues[currentLeagueIndex].name && (
                      <motion.div
                        initial={{ scale: 0, y: 10 }}
                        whileInView={{ scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1, type: "spring" }}
                        className="absolute -top-1 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white shadow-lg border-2 flex items-center justify-center"
                        style={{ borderColor: league.color }}
                      >
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: league.color }}
                        />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Scale labels */}
            <div className="flex justify-between mb-8 text-xs text-[var(--ratch-gray)]">
              <span>0 ELO</span>
              <span>10,000 ELO</span>
            </div>

            {/* League list */}
            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-4 custom-scroll-container">
              {leagues.map((league, index) => (
                <LeagueRow 
                  key={league.name}
                  league={league}
                  index={index}
                  isCurrentLeague={index === currentLeagueIndex}
                  totalLeagues={leagues.length}
                />
              ))}
            </div>

            {/* Tip */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-8 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white card-shadow"
            >
              <span className="text-lg">🏆</span>
              <p className="text-sm text-[var(--ratch-gray)]">
                <span className="font-medium text-[var(--ratch-black)]">Tip:</span> Win more comparisons to climb leagues!
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: "#F97316", color: "white" }}
            >
              League System
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--ratch-black)] leading-tight">
              Climb the
              <br />
              <span className="text-gradient">ranks</span>
            </h2>
            
            <p className="mt-6 text-lg text-[var(--ratch-gray)] max-w-lg leading-relaxed">
              Compete with users worldwide. Rise through 10 unique leagues based on your ELO rating 
              and see where you stand on the global leaderboard.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-4 rounded-2xl bg-white card-shadow"
              >
                <p className="text-3xl font-bold text-[var(--ratch-black)]">10</p>
                <p className="text-sm text-[var(--ratch-gray)] mt-1">Leagues</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center p-4 rounded-2xl bg-white card-shadow"
              >
                <p className="text-3xl font-bold text-[var(--ratch-black)]">Top 100</p>
                <p className="text-sm text-[var(--ratch-gray)] mt-1">Global</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-center p-4 rounded-2xl bg-white card-shadow"
              >
                <p className="text-3xl font-bold text-[var(--ratch-black)]">24/7</p>
                <p className="text-sm text-[var(--ratch-gray)] mt-1">Updates</p>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <motion.a
                href="/leaderboard"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-white btn-glow"
                style={{ backgroundColor: "#F97316" }}
              >
                View Full Leaderboard
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
