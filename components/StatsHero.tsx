"use client";

import { motion } from "framer-motion";

// Mini chart component for the phone mockup
const MiniLineChart = () => {
  const points = [40, 45, 42, 55, 52, 60, 58, 65, 70, 68, 75, 80];
  const maxY = Math.max(...points);
  const minY = Math.min(...points);
  const range = maxY - minY;
  
  const pathD = points
    .map((y, i) => {
      const x = (i / (points.length - 1)) * 100;
      const normalizedY = 100 - ((y - minY) / range) * 80 - 10;
      return `${i === 0 ? 'M' : 'L'} ${x} ${normalizedY}`;
    })
    .join(' ');

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFC629" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFC629" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Area fill */}
      <path
        d={`${pathD} L 100 100 L 0 100 Z`}
        fill="url(#chartGradient)"
      />
      {/* Line */}
      <motion.path
        d={pathD}
        fill="none"
        stroke="#FFC629"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </svg>
  );
};

// Page indicator dots
const PageIndicators = ({ active = 0, total = 5 }: { active?: number; total?: number }) => (
  <div className="flex gap-2 justify-center">
    {Array.from({ length: total }).map((_, i) => (
      <motion.div
        key={i}
        className={`w-2 h-2 rounded-full ${i === active ? 'bg-bumble-black' : 'bg-gray-300'}`}
        animate={{ scale: i === active ? 1.2 : 1 }}
      />
    ))}
  </div>
);

export default function StatsHero() {
  return (
    <section 
      className="relative overflow-hidden pt-20"
      style={{ 
        background: "linear-gradient(135deg, #FFF8E1 0%, #FFFFFF 50%, #F0FDF4 100%)",
        minHeight: "calc(100vh - 80px)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-20" style={{ backgroundColor: "#FFC629" }} />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-15" style={{ backgroundColor: "#22C55E" }} />
      
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
              style={{ backgroundColor: "#FFC629", color: "#1A1A1A" }}
            >
              MeetMatch Statistics
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-bumble-black leading-[1.1]">
              Know Your
              <br />
              <span style={{ color: "#22C55E" }}>Worth</span>
            </h1>
            
            <p className="mt-6 text-lg lg:text-xl text-bumble-gray max-w-lg leading-relaxed">
              Data-driven insights into your dating performance. Track your rating trends, 
              analyze your wins, and understand what makes you stand out.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#overview"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-4 bg-bumble-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-colors"
              >
                Explore Stats
              </motion.a>
              <motion.a
                href="#tiers"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-4 border-2 border-bumble-black text-bumble-black rounded-full font-medium text-lg hover:bg-bumble-black hover:text-white transition-colors"
              >
                View Plans
              </motion.a>
            </div>

            {/* Stats Preview */}
            <div className="mt-12 flex gap-8">
              <div>
                <p className="text-3xl font-bold text-bumble-black">5</p>
                <p className="text-sm text-bumble-gray mt-1">Stat Pages</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-bumble-black">20+</p>
                <p className="text-sm text-bumble-gray mt-1">Metrics</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-bumble-black">Real-Time</p>
                <p className="text-sm text-bumble-gray mt-1">Updates</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Phone Mockup with Stats UI */}
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
                      <p className="text-sm font-semibold text-bumble-black">Statistics</p>
                      <PageIndicators active={0} total={5} />
                    </div>
                    
                    {/* Rating Card */}
                    <div className="bg-gray-50 rounded-2xl p-4 mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs text-bumble-gray">Current Rating</p>
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-600">+128 this week</span>
                      </div>
                      <p className="text-3xl font-bold text-bumble-black">7,542</p>
                      <div className="h-16 mt-2">
                        <MiniLineChart />
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="bg-gray-50 rounded-xl p-2 text-center">
                        <p className="text-lg font-bold text-bumble-black">1.2K</p>
                        <p className="text-[10px] text-bumble-gray">Comparisons</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-2 text-center">
                        <p className="text-lg font-bold text-bumble-black">3.4K</p>
                        <p className="text-[10px] text-bumble-gray">Times Shown</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-2 text-center">
                        <p className="text-lg font-bold text-bumble-black">892</p>
                        <p className="text-[10px] text-bumble-gray">Reach</p>
                      </div>
                    </div>

                    {/* Win Rate Card */}
                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                          <span className="text-lg">🏆</span>
                        </div>
                        <div>
                          <p className="text-xs text-bumble-gray">Win Rate</p>
                          <p className="text-2xl font-bold text-bumble-black">72%</p>
                        </div>
                        <div className="ml-auto text-right">
                          <p className="text-xs font-medium text-green-600">On Fire! 🔥</p>
                        </div>
                      </div>
                    </div>

                    {/* Activity Streak */}
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-lg">🔥</span>
                      <p className="text-xs text-bumble-gray">7 day streak</p>
                      <div className="flex gap-1 ml-auto">
                        {[1,2,3,4,5,6,7].map((d) => (
                          <div key={d} className="w-4 h-4 rounded-sm bg-green-400" />
                        ))}
                      </div>
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
