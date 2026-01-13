"use client";

import { motion } from "framer-motion";

// League data for the phone mockup
const leagues = [
  { name: "Irresistible", color: "#EAB308", range: "9000-9999" },
  { name: "Iconic", color: "#F59E0B", range: "8000-8999" },
  { name: "Elite", color: "#FFC629", range: "7000-7999" },
  { name: "Stunning", color: "#F43F5E", range: "6000-6999" },
  { name: "Hot", color: "#F97316", range: "5000-5999", isYou: true },
];

// Mini league bar for phone mockup
const LeagueBar = ({ 
  league, 
  index 
}: { 
  league: typeof leagues[0]; 
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    className="flex items-center gap-3 p-2 rounded-xl"
    style={{ 
      backgroundColor: league.isYou ? `${league.color}20` : "transparent",
      border: league.isYou ? `2px solid ${league.color}` : "1px solid #E5E7EB"
    }}
  >
    <div 
      className="w-3 h-full rounded-full min-h-[32px]"
      style={{ backgroundColor: league.color }}
    />
    <div className="flex-1">
      <div className="flex items-center gap-2">
        <p className="text-xs font-medium text-bumble-black">{league.name}</p>
        {league.isYou && (
          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold text-white" style={{ backgroundColor: league.color }}>
            YOU
          </span>
        )}
      </div>
      <p className="text-[10px] text-bumble-gray">{league.range} ELO</p>
    </div>
    <div className="text-right">
      <p className="text-xs font-bold text-bumble-black">{Math.floor(Math.random() * 50) + 10}</p>
      <p className="text-[10px] text-bumble-gray">members</p>
    </div>
  </motion.div>
);

export default function LeaderboardHero() {
  return (
    <section 
      className="relative overflow-hidden pt-20"
      style={{ 
        background: "linear-gradient(135deg, #FFF7ED 0%, #FFFFFF 50%, #FFFBEB 100%)",
        minHeight: "calc(100vh - 80px)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-20" style={{ backgroundColor: "#F97316" }} />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-15" style={{ backgroundColor: "#EAB308" }} />
      
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-200px)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: "#F97316", color: "#FFFFFF" }}
            >
              MeetMatch Leaderboard
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-bumble-black leading-[1.1]">
              Climb the
              <br />
              <span style={{ color: "#F97316" }}>Ranks</span>
            </h1>
            
            <p className="mt-6 text-lg lg:text-xl text-bumble-gray max-w-lg leading-relaxed">
              Compete with users worldwide. Rise through 10 unique leagues based on your ELO rating 
              and see where you stand on the global leaderboard.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#leagues"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-4 text-white rounded-full font-medium text-lg transition-colors"
                style={{ backgroundColor: "#F97316" }}
              >
                View Leagues
              </motion.a>
              <motion.a
                href="#privacy"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-4 border-2 border-bumble-black text-bumble-black rounded-full font-medium text-lg hover:bg-bumble-black hover:text-white transition-colors"
              >
                Learn More
              </motion.a>
            </div>

            {/* Stats Preview */}
            <div className="mt-12 flex gap-8">
              <div>
                <p className="text-3xl font-bold text-bumble-black">10</p>
                <p className="text-sm text-bumble-gray mt-1">Leagues</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-bumble-black">Top 100</p>
                <p className="text-sm text-bumble-gray mt-1">Global</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-bumble-black">Privacy</p>
                <p className="text-sm text-bumble-gray mt-1">First</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Phone Mockup with Ladder UI */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            {/* iPhone Frame */}
            <div className="relative w-[280px] md:w-[320px] lg:w-[340px]">
              {/* Outer frame */}
              <div className="relative bg-[#1a1a1a] rounded-[48px] p-[12px] shadow-2xl">
                {/* Inner bezel */}
                <div className="relative bg-[#0a0a0a] rounded-[38px] overflow-hidden">
                  {/* Dynamic Island */}
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 bg-[#1a1a1a] z-10"
                    style={{
                      top: "2.5%",
                      width: "32%",
                      aspectRatio: "3.4 / 1",
                      borderRadius: "9999px",
                    }}
                  />
                  
                  {/* Screen */}
                  <div 
                    className="aspect-[9/19.5] flex flex-col p-4 pt-14"
                    style={{ backgroundColor: "#FFFFFF" }}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm font-semibold text-bumble-black">Ladder</p>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 rounded-full text-[10px] font-medium bg-gray-100 text-bumble-gray">Global</span>
                        <span className="px-2 py-1 rounded-full text-[10px] font-medium text-white" style={{ backgroundColor: "#F97316" }}>Ladder</span>
                      </div>
                    </div>
                    
                    {/* Your Position Card */}
                    <div 
                      className="rounded-2xl p-3 mb-3"
                      style={{ backgroundColor: "#FFF7ED", border: "1px solid #F97316" }}
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#F97316" }}
                        >
                          #12
                        </div>
                        <div>
                          <p className="text-xs text-bumble-gray">Your Position</p>
                          <p className="text-sm font-bold text-bumble-black">Hot League</p>
                        </div>
                        <div className="ml-auto text-right">
                          <p className="text-sm font-bold" style={{ color: "#F97316" }}>5,742</p>
                          <p className="text-[10px] text-green-500">+128</p>
                        </div>
                      </div>
                    </div>

                    {/* League List */}
                    <div className="space-y-2 flex-1 overflow-hidden">
                      {leagues.map((league, i) => (
                        <LeagueBar key={league.name} league={league} index={i} />
                      ))}
                    </div>

                    {/* Bottom indicator */}
                    <div className="mt-3 flex items-center justify-center gap-1">
                      <span className="text-[10px] text-bumble-gray">5 more leagues below</span>
                      <svg className="w-3 h-3 text-bumble-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Side buttons */}
              <div className="absolute right-[-3px] top-32 w-[4px] h-14 bg-[#2a2a2a] rounded-r-sm" />
              <div className="absolute left-[-3px] top-24 w-[4px] h-7 bg-[#2a2a2a] rounded-l-sm" />
              <div className="absolute left-[-3px] top-36 w-[4px] h-12 bg-[#2a2a2a] rounded-l-sm" />
              <div className="absolute left-[-3px] top-52 w-[4px] h-12 bg-[#2a2a2a] rounded-l-sm" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
