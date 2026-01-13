"use client";

import { motion } from "framer-motion";

type TopUser = {
  rank: number;
  name: string;
  city: string;
  flag: string;
  rating: number;
  color: string;
  wins: number;
  winRate: string;
};

const topUsers: TopUser[] = [
  { rank: 1, name: "Victoria", city: "Monaco", flag: "🇲🇨", rating: 9847, color: "#FFD700", wins: 2847, winRate: "94%" },
  { rank: 2, name: "Sebastian", city: "Dubai", flag: "🇦🇪", rating: 9723, color: "#C0C0C0", wins: 2634, winRate: "92%" },
  { rank: 3, name: "Isabella", city: "Paris", flag: "🇫🇷", rating: 9689, color: "#CD7F32", wins: 2521, winRate: "91%" },
  { rank: 4, name: "Alexander", city: "NYC", flag: "🇺🇸", rating: 9612, color: "#98D8C8", wins: 2489, winRate: "90%" },
  { rank: 5, name: "Olivia", city: "London", flag: "🇬🇧", rating: 9578, color: "#DDA0DD", wins: 2412, winRate: "89%" },
  { rank: 6, name: "William", city: "Tokyo", flag: "🇯🇵", rating: 9534, color: "#87CEEB", wins: 2378, winRate: "88%" },
  { rank: 7, name: "Sophia", city: "Sydney", flag: "🇦🇺", rating: 9501, color: "#F0E68C", wins: 2356, winRate: "88%" },
];

// Podium component for top 3
const PodiumEntry = ({ 
  user, 
  position,
  delay
}: { 
  user: TopUser; 
  position: "first" | "second" | "third";
  delay: number;
}) => {
  const heights = {
    first: "h-32",
    second: "h-24",
    third: "h-20"
  };
  
  const photoSizes = {
    first: "w-20 h-20",
    second: "w-16 h-16",
    third: "w-16 h-16"
  };

  const medalColors = {
    first: { bg: "#FFD700", border: "#FFA500", text: "#8B6914" },
    second: { bg: "#C0C0C0", border: "#A8A8A8", text: "#5C5C5C" },
    third: { bg: "#CD7F32", border: "#B87333", text: "#6B4423" }
  };

  const medal = medalColors[position];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center"
    >
      {/* Profile with medal ring */}
      <div className="relative mb-3">
        {position === "first" && (
          <motion.div
            className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl"
            initial={{ scale: 0, rotate: -30 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: delay + 0.3, type: "spring" }}
          >
            👑
          </motion.div>
        )}
        <div 
          className={`${photoSizes[position]} rounded-full p-1`}
          style={{ backgroundColor: medal.bg }}
        >
          <div 
            className="w-full h-full rounded-full flex items-center justify-center text-white font-bold text-xl"
            style={{ backgroundColor: user.color }}
          >
            {user.name[0]}
          </div>
        </div>
        {/* Medal emoji */}
        <div 
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-xl"
        >
          {position === "first" ? "🥇" : position === "second" ? "🥈" : "🥉"}
        </div>
      </div>

      {/* Name */}
      <p className="font-bold text-bumble-black">{user.name}</p>
      <p className="text-xs text-bumble-gray">{user.flag} {user.city}</p>
      
      {/* Rating */}
      <motion.p
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: delay + 0.2, type: "spring" }}
        className="mt-2 font-bold text-lg"
        style={{ color: medal.text }}
      >
        {user.rating.toLocaleString()}
      </motion.p>

      {/* Podium Stand */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "auto" }}
        transition={{ delay: delay + 0.1, duration: 0.4 }}
        className={`w-24 ${heights[position]} rounded-t-xl mt-3 flex flex-col items-center justify-center`}
        style={{ 
          background: `linear-gradient(180deg, ${medal.bg} 0%, ${medal.border} 100%)`,
        }}
      >
        <span className="text-3xl font-bold" style={{ color: medal.text }}>
          #{user.rank}
        </span>
      </motion.div>
    </motion.div>
  );
};

// Row entry for 4th-7th place
const LeaderboardRow = ({ user, index }: { user: TopUser; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.5 + index * 0.05 }}
    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
  >
    {/* Rank */}
    <div className="w-10 text-center">
      <span className="text-sm font-bold text-bumble-gray">#{user.rank}</span>
    </div>

    {/* Avatar */}
    <div 
      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
      style={{ backgroundColor: user.color }}
    >
      {user.name[0]}
    </div>

    {/* Name & City */}
    <div className="flex-1 min-w-0">
      <p className="font-medium text-bumble-black truncate">{user.name}</p>
      <p className="text-xs text-bumble-gray">{user.flag} {user.city}</p>
    </div>

    {/* Stats */}
    <div className="hidden md:flex items-center gap-6">
      <div className="text-center">
        <p className="text-xs text-bumble-gray">Wins</p>
        <p className="text-sm font-medium text-bumble-black">{user.wins.toLocaleString()}</p>
      </div>
      <div className="text-center">
        <p className="text-xs text-bumble-gray">Win Rate</p>
        <p className="text-sm font-medium text-green-500">{user.winRate}</p>
      </div>
    </div>

    {/* Rating */}
    <div className="w-20 text-right">
      <p className="font-bold text-bumble-black">{user.rating.toLocaleString()}</p>
    </div>
  </motion.div>
);

export default function GlobalLeaderboardPreview() {
  return (
    <section id="global" className="py-16 lg:py-24" style={{ backgroundColor: "#FFFBEB" }}>
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
            style={{ backgroundColor: "#FFD700", color: "#8B6914" }}
          >
            🏆 Global Leaderboard
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bumble-black">
            Top 100 Worldwide
          </h2>
          <p className="mt-4 text-lg text-bumble-gray max-w-2xl mx-auto">
            The most attractive users globally. Compete to secure your spot on the podium 
            and show the world you&apos;re simply irresistible.
          </p>
        </motion.div>

        {/* Podium for Top 3 */}
        <div className="flex justify-center items-end gap-4 md:gap-8 mb-12">
          {/* 2nd Place */}
          <PodiumEntry user={topUsers[1]} position="second" delay={0.2} />
          
          {/* 1st Place */}
          <PodiumEntry user={topUsers[0]} position="first" delay={0.1} />
          
          {/* 3rd Place */}
          <PodiumEntry user={topUsers[2]} position="third" delay={0.3} />
        </div>

        {/* Remaining top 7 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
            <p className="font-medium text-bumble-black">Continue Rankings</p>
            <span className="text-xs text-bumble-gray">Total: 10,432 participants</span>
          </div>
          
          <div className="space-y-1">
            {topUsers.slice(3).map((user, i) => (
              <LeaderboardRow key={user.rank} user={user} index={i} />
            ))}
          </div>

          {/* View Full button */}
          <div className="mt-4 pt-3 border-t border-gray-100 text-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full font-medium transition-colors"
              style={{ backgroundColor: "#FFC629", color: "#1A1A1A" }}
            >
              View Full Leaderboard
            </motion.button>
          </div>
        </div>

        {/* Tier badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {[
            { name: "Diamond", emoji: "💎", desc: "Top 1%", color: "#93C5FD" },
            { name: "Platinum", emoji: "🔮", desc: "Top 5%", color: "#C4B5FD" },
            { name: "Gold", emoji: "🏆", desc: "Top 10%", color: "#FCD34D" },
            { name: "Silver", emoji: "🥈", desc: "Top 25%", color: "#D1D5DB" },
            { name: "Bronze", emoji: "🥉", desc: "Below 75%", color: "#FDBA74" },
          ].map((tier) => (
            <div 
              key={tier.name}
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ backgroundColor: `${tier.color}40`, border: `1px solid ${tier.color}` }}
            >
              <span>{tier.emoji}</span>
              <span className="text-sm font-medium text-bumble-black">{tier.name}</span>
              <span className="text-xs text-bumble-gray">{tier.desc}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
