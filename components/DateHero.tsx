"use client";

import { motion } from "framer-motion";

type ProfileCard = {
  name: string;
  age: number;
  color: string;
  position: "top" | "bottom";
};

const profiles: ProfileCard[] = [
  { name: "Sarah", age: 26, color: "#FFB6C1", position: "top" },
  { name: "Michael", age: 29, color: "#87CEEB", position: "bottom" },
];

const ProfileCardDemo = ({ 
  profile, 
  delay = 0 
}: { 
  profile: ProfileCard; 
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.02 }}
    className="relative w-full rounded-2xl overflow-hidden cursor-pointer"
    style={{ 
      backgroundColor: profile.color,
      height: "140px",
    }}
  >
    {/* Gradient overlay */}
    <div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 60%)",
      }}
    />
    
    {/* Photo-like overlay */}
    <div
      className="absolute inset-0"
      style={{
        background: "radial-gradient(800px 400px at 30% 20%, rgba(255,255,255,0.2), transparent 50%)",
      }}
    />
    
    {/* Profile info */}
    <div className="absolute bottom-0 left-0 right-0 p-4">
      <p className="text-white font-semibold text-lg drop-shadow-lg">
        {profile.name}, {profile.age}
      </p>
    </div>

    {/* Tap indicator */}
    <motion.div
      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    </motion.div>
  </motion.div>
);

export default function DateHero() {
  return (
    <section 
      className="relative overflow-hidden pt-20"
      style={{ 
        background: "linear-gradient(135deg, #FFF8E1 0%, #FFFFFF 50%, #E8F4FD 100%)",
        minHeight: "calc(100vh - 80px)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20" style={{ backgroundColor: "#FFC629" }} />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full opacity-15" style={{ backgroundColor: "#87CEEB" }} />
      
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
              MeetMatch Dating
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-bumble-black leading-[1.1]">
              A New Way
              <br />
              <span style={{ color: "#FFC629" }}>to Date</span>
            </h1>
            
            <p className="mt-6 text-lg lg:text-xl text-bumble-gray max-w-lg leading-relaxed">
              Forget endless swiping. Choose between two profiles and watch your 
              preferences shape who you meet. Every choice matters.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#compare"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-4 bg-bumble-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-colors"
              >
                See How It Works
              </motion.a>
              <motion.a
                href="#download"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-4 border-2 border-bumble-black text-bumble-black rounded-full font-medium text-lg hover:bg-bumble-black hover:text-white transition-colors"
              >
                Download App
              </motion.a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8">
              <div>
                <p className="text-3xl font-bold text-bumble-black">A/B</p>
                <p className="text-sm text-bumble-gray mt-1">Comparison</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-bumble-black">ELO</p>
                <p className="text-sm text-bumble-gray mt-1">Rating System</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-bumble-black">0-10K</p>
                <p className="text-sm text-bumble-gray mt-1">Rating Scale</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Phone Mockup with Compare UI */}
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
                    style={{ backgroundColor: "#F5F5F5" }}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-xs font-semibold text-bumble-black">Compare</p>
                      <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-bumble-yellow flex items-center justify-center">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                          <svg className="w-3 h-3 text-bumble-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Profile Cards Stack */}
                    <div className="flex-1 flex flex-col gap-3">
                      <ProfileCardDemo profile={profiles[0]} delay={0.5} />
                      
                      {/* VS Divider */}
                      <div className="flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-bumble-black flex items-center justify-center shadow-lg">
                          <span className="text-white text-xs font-bold">VS</span>
                        </div>
                      </div>
                      
                      <ProfileCardDemo profile={profiles[1]} delay={0.7} />
                    </div>

                    {/* Bottom hint */}
                    <p className="text-center text-xs text-bumble-gray mt-3">
                      Tap to choose
                    </p>
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
