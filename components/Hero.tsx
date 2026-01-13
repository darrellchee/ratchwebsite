"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type ProfileCard = {
  name: string;
  age: number;
  color: string;
  gradientFrom: string;
  gradientTo: string;
};

const profiles: ProfileCard[] = [
  { 
    name: "Sarah", 
    age: 26, 
    color: "#FFB6C1",
    gradientFrom: "#FFB6C1",
    gradientTo: "#FF8FA3"
  },
  { 
    name: "Marcus", 
    age: 29, 
    color: "#87CEEB",
    gradientFrom: "#87CEEB",
    gradientTo: "#5BA3D9"
  },
];

const FloatingCard = ({ 
  profile, 
  position,
  isSelected,
  delay = 0 
}: { 
  profile: ProfileCard;
  position: "top" | "bottom";
  isSelected: boolean;
  delay?: number;
}) => {
  const yOffset = position === "top" ? -20 : 20;
  const rotation = position === "top" ? -6 : 6;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: 0 }}
      animate={{ 
        opacity: 1, 
        y: yOffset, 
        rotate: rotation,
        scale: isSelected ? 1.05 : 1,
      }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className="relative"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: position === "top" ? 0 : 2
        }}
        className="relative"
      >
        {/* Card */}
        <div 
          className={`relative w-[180px] md:w-[200px] lg:w-[220px] aspect-[3/4] rounded-3xl overflow-hidden card-shadow-xl transition-all duration-300 ${isSelected ? 'ring-4 ring-white/50' : ''}`}
          style={{ 
            background: `linear-gradient(135deg, ${profile.gradientFrom} 0%, ${profile.gradientTo} 100%)`,
          }}
        >
          {/* Overlay gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 60%)",
            }}
          />
          
          {/* Light reflection */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4), transparent 50%)",
            }}
          />
          
          {/* Profile info */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-white font-bold text-xl drop-shadow-lg">
              {profile.name}, {profile.age}
            </p>
            <div className="flex gap-1.5 mt-2">
              <div className="w-2 h-2 rounded-full bg-white/80" />
              <div className="w-2 h-2 rounded-full bg-white/50" />
              <div className="w-2 h-2 rounded-full bg-white/50" />
            </div>
          </div>

          {/* Selection indicator */}
          {isSelected && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center"
            >
              <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Hero() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showSelection, setShowSelection] = useState(false);

  // Auto-demo the selection
  useEffect(() => {
    const interval = setInterval(() => {
      setShowSelection(false);
      setSelectedIndex(null);
      
      setTimeout(() => {
        setSelectedIndex(0);
        setShowSelection(true);
      }, 2000);
      
      setTimeout(() => {
        setShowSelection(false);
        setSelectedIndex(null);
      }, 4000);
    }, 6000);

    // Initial animation
    const initialTimeout = setTimeout(() => {
      setSelectedIndex(0);
      setShowSelection(true);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <section 
      className="relative min-h-screen overflow-hidden pt-20 pb-24"
      style={{ 
        backgroundColor: "var(--ratch-cream)",
      }}
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute blob w-[600px] h-[600px] -top-48 -right-48 opacity-40"
          style={{ background: "linear-gradient(135deg, #FFB347 0%, #FF6B6B 100%)" }}
          animate={{ 
            x: [0, 30, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute blob w-[500px] h-[500px] -bottom-32 -left-32 opacity-30"
          style={{ background: "linear-gradient(135deg, #FF8FA3 0%, #FFB347 100%)" }}
          animate={{ 
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 0.95, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute blob-sm w-[300px] h-[300px] top-1/3 left-1/4 opacity-20"
          style={{ background: "linear-gradient(135deg, #FFD700 0%, #FF69B4 100%)" }}
          animate={{ 
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="min-h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 py-12">
          
          {/* Left Content - Typography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left max-w-xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: "rgba(255, 107, 107, 0.1)" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#FF6B6B] animate-pulse" />
              <span className="text-sm font-medium text-[#FF6B6B]">A new way to date</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight"
            >
              <span className="text-gradient">Dating,</span>
              <br />
              <span className="text-[var(--ratch-black)]">Decided.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-6 text-lg lg:text-xl text-[var(--ratch-gray)] max-w-md mx-auto lg:mx-0"
            >
              No more endless swiping. Compare two profiles, pick your preference, 
              and let your choices build your perfect match pool.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#download"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[var(--ratch-black)] text-white rounded-full font-medium text-lg btn-glow"
              >
                Download App
              </motion.a>
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-[var(--ratch-black)] text-[var(--ratch-black)] rounded-full font-medium text-lg hover:bg-[var(--ratch-black)] hover:text-white transition-colors"
              >
                How It Works
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-12 flex gap-8 justify-center lg:justify-start"
            >
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-[var(--ratch-black)]">10</p>
                <p className="text-sm text-[var(--ratch-gray)]">Leagues</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-[var(--ratch-black)]">ELO</p>
                <p className="text-sm text-[var(--ratch-gray)]">Rating</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-[var(--ratch-black)]">0-10K</p>
                <p className="text-sm text-[var(--ratch-gray)]">Scale</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Cards Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex flex-col items-center gap-4"
          >
            {/* Top Card */}
            <FloatingCard 
              profile={profiles[0]} 
              position="top"
              isSelected={showSelection && selectedIndex === 0}
              delay={0.6}
            />
            
            {/* VS Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="relative z-10 -my-6"
            >
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-sm card-shadow-lg"
                style={{ background: "var(--gradient-coral-amber)" }}
              >
                VS
              </div>
            </motion.div>
            
            {/* Bottom Card */}
            <FloatingCard 
              profile={profiles[1]} 
              position="bottom"
              isSelected={showSelection && selectedIndex === 1}
              delay={0.8}
            />

            {/* Tap hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-sm text-[var(--ratch-gray)] mt-4"
            >
              Tap to choose your preference
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[var(--ratch-gray)]">Scroll to explore</span>
          <svg className="w-5 h-5 text-[var(--ratch-gray)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Curved wave transition to next section */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="var(--ratch-warm-white)"
          />
        </svg>
      </div>
    </section>
  );
}
