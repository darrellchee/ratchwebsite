"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type LadderMember = {
  rank: number;
  name: string;
  city: string;
  flag: string;
  rating: number;
  change: "up" | "down" | "same";
  color: string;
  isYou?: boolean;
};

// Members in the "Hot" league (visible)
const hotLeagueMembers: LadderMember[] = [
  { rank: 1, name: "Jessica", city: "Miami", flag: "🇺🇸", rating: 5982, change: "up", color: "#FFB6C1" },
  { rank: 2, name: "Marcus", city: "LA", flag: "🇺🇸", rating: 5891, change: "same", color: "#87CEEB" },
  { rank: 3, name: "Sophia", city: "NYC", flag: "🇺🇸", rating: 5834, change: "up", color: "#DDA0DD" },
  { rank: 4, name: "James", city: "London", flag: "🇬🇧", rating: 5756, change: "down", color: "#98D8C8" },
  { rank: 5, name: "You", city: "Sydney", flag: "🇦🇺", rating: 5742, change: "up", color: "#FFC629", isYou: true },
  { rank: 6, name: "Emma", city: "Toronto", flag: "🇨🇦", rating: 5698, change: "same", color: "#F0E68C" },
];

// Members in the "Attractive" league (blurred for demo)
const attractiveLeagueMembers: LadderMember[] = [
  { rank: 1, name: "Alex", city: "Berlin", flag: "🇩🇪", rating: 4892, change: "up", color: "#B0C4DE" },
  { rank: 2, name: "Taylor", city: "Paris", flag: "🇫🇷", rating: 4834, change: "down", color: "#DEB887" },
  { rank: 3, name: "Jordan", city: "Tokyo", flag: "🇯🇵", rating: 4756, change: "same", color: "#E6E6FA" },
];

const MemberRow = ({ 
  member, 
  isBlurred = false,
  leagueColor,
  index
}: { 
  member: LadderMember; 
  isBlurred?: boolean;
  leagueColor: string;
  index: number;
}) => {
  const changeIcon = member.change === "up" ? "↑" : member.change === "down" ? "↓" : "—";
  const changeColor = member.change === "up" ? "#22C55E" : member.change === "down" ? "#EF4444" : "#6B7280";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`flex items-center gap-3 p-3 rounded-xl transition-all ${member.isYou ? 'ring-2' : 'hover:bg-gray-50'}`}
      style={{ 
        backgroundColor: member.isYou ? `${leagueColor}15` : "white",
        borderColor: member.isYou ? leagueColor : "transparent",
        ringColor: member.isYou ? leagueColor : "transparent"
      }}
    >
      {/* Rank */}
      <div className="w-8 text-center">
        <span className="text-sm font-bold text-bumble-gray">#{member.rank}</span>
      </div>

      {/* Avatar */}
      <div className="relative">
        <div 
          className={`w-11 h-11 rounded-full flex items-center justify-center text-white font-bold ${isBlurred ? 'filter blur-sm' : ''}`}
          style={{ backgroundColor: member.color }}
        >
          {member.name[0]}
        </div>
        {isBlurred && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-gray-800/50 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17a2 2 0 002-2V9a2 2 0 00-4 0v6a2 2 0 002 2zm6-2V9a6 6 0 10-12 0v6a6 6 0 1012 0z"/>
              </svg>
            </div>
          </div>
        )}
        {member.isYou && (
          <div 
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-white text-[8px] font-bold flex items-center justify-center"
            style={{ backgroundColor: leagueColor }}
          >
            YOU
          </div>
        )}
      </div>

      {/* Name & City */}
      <div className="flex-1 min-w-0">
        <p className={`font-medium text-bumble-black truncate ${isBlurred ? 'filter blur-sm' : ''}`}>
          {isBlurred ? "••••••••" : member.name}
        </p>
        <p className={`text-xs text-bumble-gray ${isBlurred ? 'filter blur-sm' : ''}`}>
          {isBlurred ? "••••" : `${member.flag} ${member.city}`}
        </p>
      </div>

      {/* Rank Change */}
      <div className={`w-6 text-center ${isBlurred ? 'filter blur-sm' : ''}`}>
        <span style={{ color: isBlurred ? "#6B7280" : changeColor }}>{isBlurred ? "•" : changeIcon}</span>
      </div>

      {/* Rating */}
      <div className="w-16 text-right">
        <p className={`font-bold ${isBlurred ? 'filter blur-sm text-bumble-gray' : ''}`} style={{ color: isBlurred ? undefined : leagueColor }}>
          {isBlurred ? "••••" : member.rating.toLocaleString()}
        </p>
      </div>
    </motion.div>
  );
};

const LeagueSection = ({ 
  name, 
  tagline, 
  color, 
  icon, 
  range, 
  members,
  isBlurred = false,
  isYourLeague = false,
  showUltra = false
}: { 
  name: string;
  tagline: string;
  color: string;
  icon: string;
  range: string;
  members: LadderMember[];
  isBlurred?: boolean;
  isYourLeague?: boolean;
  showUltra?: boolean;
}) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
    {/* League Header */}
    <div 
      className="p-4 flex items-center gap-3"
      style={{ 
        background: `linear-gradient(90deg, ${color}20 0%, ${color}05 100%)`,
        borderLeft: `4px solid ${color}`
      }}
    >
      <div 
        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
        style={{ backgroundColor: `${color}30` }}
      >
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="font-bold" style={{ color }}>{name}</p>
          {isYourLeague && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white" style={{ backgroundColor: color }}>
              YOUR LEAGUE
            </span>
          )}
        </div>
        <p className="text-xs text-bumble-gray">{tagline} • {range} ELO</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-medium text-bumble-black">{members.length}</p>
        <p className="text-xs text-bumble-gray">members</p>
      </div>
    </div>

    {/* Members */}
    <div className="p-3 space-y-1">
      {members.map((member, i) => (
        <MemberRow 
          key={member.rank} 
          member={member} 
          isBlurred={isBlurred && !showUltra}
          leagueColor={color}
          index={i}
        />
      ))}
    </div>

    {/* Blur overlay message */}
    {isBlurred && !showUltra && (
      <div className="px-4 pb-4">
        <div className="bg-gray-100 rounded-xl p-3 text-center">
          <p className="text-sm text-bumble-gray">
            <span className="font-medium">League below your tier</span> — Profiles are anonymous
          </p>
        </div>
      </div>
    )}
  </div>
);

export default function LadderDemo() {
  const [showUltra, setShowUltra] = useState(false);

  return (
    <section id="ladder" className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: "#FFC629", color: "#1A1A1A" }}>
            Ladder View
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bumble-black">
            Tier-Based Privacy
          </h2>
          <p className="mt-4 text-lg text-bumble-gray max-w-2xl mx-auto">
            You can see users in your league and above. Lower leagues are anonymous to protect privacy.
            Ultra members can see all leagues.
          </p>
        </motion.div>

        {/* Ultra Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-4 bg-gray-100 rounded-full p-2">
            <button
              onClick={() => setShowUltra(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${!showUltra ? 'bg-white shadow-sm text-bumble-black' : 'text-bumble-gray'}`}
            >
              Standard View
            </button>
            <button
              onClick={() => setShowUltra(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${showUltra ? 'bg-bumble-black text-white' : 'text-bumble-gray'}`}
            >
              👑 Ultra View
            </button>
          </div>
        </motion.div>

        {/* Ladder Demo */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Your League - Always Visible */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <LeagueSection
              name="Hot"
              tagline="Heating things up"
              color="#F97316"
              icon="🌶️"
              range="5000-5999"
              members={hotLeagueMembers}
              isYourLeague={true}
            />
          </motion.div>

          {/* Lower League - Blurred */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <LeagueSection
              name="Attractive"
              tagline="Turning heads"
              color="#3B82F6"
              icon="✨"
              range="4000-4999"
              members={attractiveLeagueMembers}
              isBlurred={true}
              showUltra={showUltra}
            />
          </motion.div>
        </div>

        {/* Explanation Cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-green-50 rounded-2xl p-5 border border-green-100"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                <span className="text-lg">👁️</span>
              </div>
              <p className="font-bold text-green-700">Your League & Above</p>
            </div>
            <p className="text-sm text-green-600">
              See all profiles, names, cities, and ratings in your league and higher leagues.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gray-50 rounded-2xl p-5 border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center">
                <span className="text-lg">🔒</span>
              </div>
              <p className="font-bold text-gray-700">Leagues Below You</p>
            </div>
            <p className="text-sm text-gray-600">
              Profiles are anonymous. Names, photos, and ratings are blurred to protect privacy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-yellow-50 rounded-2xl p-5 border border-yellow-100"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
                <span className="text-lg">👑</span>
              </div>
              <p className="font-bold text-yellow-700">Ultra Members</p>
            </div>
            <p className="text-sm text-yellow-600">
              See all leagues without any blur. Full visibility across the entire ladder.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
