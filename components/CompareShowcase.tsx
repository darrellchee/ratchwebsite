"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type Profile = {
  name: string;
  age: number;
  gradientFrom: string;
  gradientTo: string;
  rating: number;
};

const demoProfiles: Profile[] = [
  { name: "Emma", age: 25, gradientFrom: "#FFB6C1", gradientTo: "#FF8FA3", rating: 5420 },
  { name: "James", age: 28, gradientFrom: "#87CEEB", gradientTo: "#5BA3D9", rating: 5180 },
];

// Smooth spring config for natural motion
const springConfig = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
};

const smoothTransition = {
  duration: 0.5,
  ease: [0.4, 0, 0.2, 1], // Smooth ease-out curve
};

const ProfileCard = ({ 
  profile, 
  isSelected,
  ratingChange,
  showRating,
  onClick,
}: { 
  profile: Profile;
  isSelected: boolean;
  ratingChange: number;
  showRating: boolean;
  onClick: () => void;
}) => (
  <motion.div
    layout
    whileHover={{ scale: 1.02, y: -4 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    animate={{
      scale: isSelected ? 1.02 : 1,
      boxShadow: isSelected 
        ? "0 20px 40px -10px rgba(34, 197, 94, 0.3)" 
        : "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
    }}
    transition={springConfig}
    className={`relative cursor-pointer rounded-3xl overflow-hidden ${
      isSelected ? 'ring-4 ring-green-500' : ''
    }`}
    style={{ 
      background: `linear-gradient(135deg, ${profile.gradientFrom} 0%, ${profile.gradientTo} 100%)`,
    }}
  >
    <motion.div 
      className="aspect-[3/4] relative"
      animate={{ opacity: isSelected ? 1 : 0.95 }}
      transition={smoothTransition}
    >
      {/* Light overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4), transparent 50%)",
        }}
      />
      
      {/* Bottom gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 60%)",
        }}
      />

      {/* Profile info */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-white font-bold text-2xl drop-shadow-lg">
              {profile.name}, {profile.age}
            </p>
            <div className="flex gap-1.5 mt-2">
              <div className="w-2 h-2 rounded-full bg-white/80" />
              <div className="w-2 h-2 rounded-full bg-white/50" />
              <div className="w-2 h-2 rounded-full bg-white/50" />
            </div>
          </div>
          
          {/* Rating change indicator */}
          <AnimatePresence mode="wait">
            {isSelected && ratingChange !== 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                transition={{ 
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
                className={`px-3 py-1.5 rounded-full text-sm font-bold shadow-lg ${
                  ratingChange > 0 
                    ? "bg-green-500 text-white" 
                    : "bg-red-500 text-white"
                }`}
              >
                {ratingChange > 0 ? "+" : ""}{ratingChange}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Selection checkmark */}
      <AnimatePresence mode="wait">
        {isSelected && (
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            transition={{ 
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg"
          >
            <motion.svg 
              className="w-7 h-7 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={3}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>

    {/* Rating reveal bar */}
    <AnimatePresence mode="wait">
      {showRating && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ 
            height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
            opacity: { duration: 0.3 }
          }}
          className="bg-white overflow-hidden"
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.3 }}
            className="px-6 py-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--ratch-gray)]">ELO Rating</span>
              <motion.span 
                className="text-xl font-bold"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.2 }}
                style={{ color: ratingChange > 0 ? "#22C55E" : ratingChange < 0 ? "#EF4444" : "var(--ratch-black)" }}
              >
                {profile.rating + ratingChange}
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export default function CompareShowcase() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showRatings, setShowRatings] = useState(false);
  const [ratingChanges, setRatingChanges] = useState<[number, number]>([0, 0]);
  const [roundNumber, setRoundNumber] = useState(42);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-demo the selection with smoother timing
  useEffect(() => {
    const runDemo = () => {
      // Start transition - fade out current state
      setIsTransitioning(true);
      
      // Reset state with slight delay for smoother feel
      setTimeout(() => {
        setSelectedIndex(null);
        setShowRatings(false);
        setRatingChanges([0, 0]);
        setIsTransitioning(false);
      }, 400);

      // After settling, select a profile
      setTimeout(() => {
        const choice = Math.random() > 0.5 ? 0 : 1;
        setSelectedIndex(choice);
        setRatingChanges(choice === 0 ? [32, -28] : [-25, 35]);
        
        // After selection animation, show ratings
        setTimeout(() => {
          setShowRatings(true);
          setRoundNumber(prev => prev + 1);
        }, 1000);
      }, 2500);
    };

    // Run initial demo
    const initialTimeout = setTimeout(runDemo, 1000);
    
    // Continue demo loop
    const interval = setInterval(runDemo, 7000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const handleSelect = (index: number) => {
    if (selectedIndex !== null || isTransitioning) return;
    
    setSelectedIndex(index);
    setRatingChanges(index === 0 ? [32, -28] : [-25, 35]);
    
    setTimeout(() => {
      setShowRatings(true);
      setRoundNumber(prev => prev + 1);
    }, 600);
  };

  return (
    <section 
      id="compare-demo" 
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--ratch-cream)" }}
    >
      {/* Subtle pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--ratch-black) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
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
              style={{ background: "var(--gradient-coral-amber)", color: "white" }}
            >
              The Compare Experience
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--ratch-black)] leading-tight">
              Forced choices,
              <br />
              <span className="text-gradient">better matches</span>
            </h2>
            
            <p className="mt-6 text-lg text-[var(--ratch-gray)] max-w-lg leading-relaxed">
              No more endless swiping. We show you two profiles at a time — pick the one 
              you find more attractive. Your choices shape your dating pool using our 
              sophisticated ELO rating system.
            </p>

            {/* Feature list */}
            <div className="mt-10 space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(255, 107, 107, 0.1)" }}
                >
                  <svg className="w-6 h-6" style={{ color: "#FF6B6B" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[var(--ratch-black)] text-lg">Two Profiles, One Choice</p>
                  <p className="text-[var(--ratch-gray)] mt-1">
                    Profiles appear side by side. Tap on the one you prefer.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(255, 179, 71, 0.1)" }}
                >
                  <svg className="w-6 h-6" style={{ color: "#FFB347" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[var(--ratch-black)] text-lg">ELO Rating System</p>
                  <p className="text-[var(--ratch-gray)] mt-1">
                    Every choice updates both profiles&apos; ratings on a 0-10,000 scale.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(255, 143, 163, 0.1)" }}
                >
                  <svg className="w-6 h-6" style={{ color: "#FF8FA3" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[var(--ratch-black)] text-lg">Instant Feedback</p>
                  <p className="text-[var(--ratch-gray)] mt-1">
                    See rating changes after each choice. Tap to reveal exact ratings.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[480px]">
              {/* Demo container */}
              <motion.div 
                className="rounded-[32px] p-6 lg:p-8 card-shadow-lg"
                style={{ backgroundColor: "white" }}
                layout
              >
                {/* Demo header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={roundNumber}
                      initial={{ scale: 0.8, opacity: 0, y: -10 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      exit={{ scale: 0.8, opacity: 0, y: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="px-4 py-1.5 rounded-full text-sm font-medium"
                      style={{ background: "var(--gradient-coral-amber)", color: "white" }}
                    >
                      Round {roundNumber}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Profile Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {demoProfiles.map((profile, index) => (
                    <ProfileCard
                      key={profile.name}
                      profile={profile}
                      isSelected={selectedIndex === index}
                      ratingChange={selectedIndex !== null ? ratingChanges[index] : 0}
                      showRating={showRatings}
                      onClick={() => handleSelect(index)}
                    />
                  ))}
                </div>

                {/* VS Badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.div
                    animate={{ 
                      scale: selectedIndex === null ? [1, 1.08, 1] : 1,
                      rotate: selectedIndex !== null ? [0, 5, -5, 0] : 0,
                    }}
                    transition={{ 
                      scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 0.5 }
                    }}
                    className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-xl"
                    style={{ background: "var(--gradient-coral-amber)" }}
                  >
                    VS
                  </motion.div>
                </div>

                {/* Instruction text */}
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={selectedIndex === null ? "choose" : showRatings ? "revealed" : "great"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-center text-sm text-[var(--ratch-gray)] mt-6"
                  >
                    {selectedIndex === null 
                      ? "Tap a profile to choose" 
                      : showRatings 
                        ? "Ratings revealed! Next round coming..." 
                        : "Great choice!"}
                  </motion.p>
                </AnimatePresence>
              </motion.div>

              {/* Decorative elements */}
              <div 
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 blur-2xl -z-10"
                style={{ backgroundColor: "#FF6B6B" }}
              />
              <div 
                className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-20 blur-2xl -z-10"
                style={{ backgroundColor: "#FFB347" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
