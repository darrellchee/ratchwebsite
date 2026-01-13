"use client";

import { motion } from "framer-motion";

// Mini chart component
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
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={`${pathD} L 100 100 L 0 100 Z`}
        fill="url(#chartGradient)"
      />
      <motion.path
        d={pathD}
        fill="none"
        stroke="#FF6B6B"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </svg>
  );
};

// Floating stat badge component
const FloatingStat = ({ 
  children, 
  className = "",
  delay = 0,
  direction = "up"
}: { 
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down";
}) => (
  <motion.div
    initial={{ opacity: 0, y: direction === "up" ? 20 : -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`absolute ${className}`}
  >
    <motion.div
      animate={{ y: direction === "up" ? [0, -8, 0] : [0, 8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  </motion.div>
);

export default function StatsTeaser() {
  return (
    <section 
      id="stats" 
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--ratch-cream)" }}
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl -translate-y-1/2" 
        style={{ background: "linear-gradient(135deg, #22C55E 0%, #FFB347 100%)" }} 
      />
      
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: "rgba(34, 197, 94, 0.1)", color: "#22C55E" }}
            >
              Detailed Analytics
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--ratch-black)] leading-tight">
              Know your
              <br />
              <span style={{ color: "#22C55E" }}>worth</span>
            </h2>
            
            <p className="mt-6 text-lg text-[var(--ratch-gray)] max-w-lg leading-relaxed">
              Data-driven insights into your dating performance. Track your rating trends, 
              analyze your wins, and understand what makes you stand out.
            </p>

            {/* Feature highlights */}
            <div className="mt-10 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white card-shadow"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                  style={{ backgroundColor: "rgba(255, 107, 107, 0.1)" }}
                >
                  📈
                </div>
                <div>
                  <p className="font-semibold text-[var(--ratch-black)]">Rating History</p>
                  <p className="text-sm text-[var(--ratch-gray)]">Track your ELO over time</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white card-shadow"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                  style={{ backgroundColor: "rgba(255, 179, 71, 0.1)" }}
                >
                  🏆
                </div>
                <div>
                  <p className="font-semibold text-[var(--ratch-black)]">Win Rate Analysis</p>
                  <p className="text-sm text-[var(--ratch-gray)]">See your performance breakdown</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white card-shadow"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                  style={{ backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                >
                  📊
                </div>
                <div>
                  <p className="font-semibold text-[var(--ratch-black)]">Photo Performance</p>
                  <p className="text-sm text-[var(--ratch-gray)]">Learn which photos work best</p>
                </div>
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
                href="/stats"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-white btn-glow"
                style={{ backgroundColor: "#22C55E" }}
              >
                Explore Stats
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - iPhone Mockup with Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center relative"
          >
            {/* Floating stats around the phone */}
            <FloatingStat 
              className="top-0 -left-4 lg:left-0 z-20"
              delay={0.6}
              direction="up"
            >
              <div className="bg-white rounded-2xl p-4 card-shadow-lg">
                <p className="text-sm text-[var(--ratch-gray)]">Win Rate</p>
                <p className="text-2xl font-bold text-green-500">72%</p>
              </div>
            </FloatingStat>

            <FloatingStat 
              className="top-20 -right-4 lg:right-0 z-20"
              delay={0.8}
              direction="down"
            >
              <div className="bg-white rounded-2xl p-4 card-shadow-lg">
                <p className="text-sm text-[var(--ratch-gray)]">This Week</p>
                <p className="text-2xl font-bold text-[#FF6B6B]">+128</p>
              </div>
            </FloatingStat>

            <FloatingStat 
              className="bottom-32 -left-4 lg:-left-8 z-20"
              delay={1}
              direction="up"
            >
              <div className="bg-white rounded-2xl p-4 card-shadow-lg flex items-center gap-2">
                <span className="text-xl">🔥</span>
                <div>
                  <p className="text-sm font-medium text-[var(--ratch-black)]">7 day streak!</p>
                </div>
              </div>
            </FloatingStat>

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
                    style={{ backgroundColor: "#FEFCF8" }}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm font-semibold text-[var(--ratch-black)]">Statistics</p>
                      <div className="flex gap-1.5">
                        {[0,1,2,3,4].map((i) => (
                          <div 
                            key={i} 
                            className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[var(--ratch-black)]' : 'bg-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Rating Card */}
                    <div className="bg-white rounded-2xl p-4 mb-3 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs text-[var(--ratch-gray)]">Current Rating</p>
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-600">+128</span>
                      </div>
                      <p className="text-3xl font-bold text-[var(--ratch-black)]">7,542</p>
                      <div className="h-16 mt-2">
                        <MiniLineChart />
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="bg-white rounded-xl p-2 text-center shadow-sm">
                        <p className="text-lg font-bold text-[var(--ratch-black)]">1.2K</p>
                        <p className="text-[10px] text-[var(--ratch-gray)]">Comparisons</p>
                      </div>
                      <div className="bg-white rounded-xl p-2 text-center shadow-sm">
                        <p className="text-lg font-bold text-[var(--ratch-black)]">892</p>
                        <p className="text-[10px] text-[var(--ratch-gray)]">Wins</p>
                      </div>
                      <div className="bg-white rounded-xl p-2 text-center shadow-sm">
                        <p className="text-lg font-bold text-[var(--ratch-black)]">72%</p>
                        <p className="text-[10px] text-[var(--ratch-gray)]">Rate</p>
                      </div>
                    </div>

                    {/* Win Rate Card */}
                    <div 
                      className="rounded-2xl p-4 shadow-sm"
                      style={{ background: "linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 179, 71, 0.1) 100%)" }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FFB347] flex items-center justify-center">
                          <span className="text-lg">🏆</span>
                        </div>
                        <div>
                          <p className="text-xs text-[var(--ratch-gray)]">Win Rate</p>
                          <p className="text-2xl font-bold text-[var(--ratch-black)]">72%</p>
                        </div>
                        <div className="ml-auto text-right">
                          <p className="text-xs font-medium text-[#FF6B6B]">On Fire! 🔥</p>
                        </div>
                      </div>
                    </div>

                    {/* Activity Streak */}
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-lg">🔥</span>
                      <p className="text-xs text-[var(--ratch-gray)]">7 day streak</p>
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
