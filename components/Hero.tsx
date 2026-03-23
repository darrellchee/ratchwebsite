"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

type ProfileCard = {
  name: string;
  age: number;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  image: string;
  elo: string;
};

const profiles: ProfileCard[] = [
  { 
    name: "Sarah", 
    age: 26, 
    color: "#FFB6C1",
    gradientFrom: "#FFB6C1",
    gradientTo: "#FF8FA3",
    image: "/person1.png",
    elo: "7865"
  },
  { 
    name: "Emma", 
    age: 29, 
    color: "#87CEEB",
    gradientFrom: "#87CEEB",
    gradientTo: "#5BA3D9",
    image: "/person2.png",
    elo: "7925"
  },
];

const FloatingCard = ({ 
  profile, 
  position,
  isSelected,
  isUnselected,
  onClick,
  delay = 0 
}: { 
  profile: ProfileCard;
  position: "top" | "bottom";
  isSelected: boolean;
  isUnselected: boolean;
  onClick: () => void;
  delay?: number;
}) => {
  const yOffset = position === "top" ? -20 : 20;
  const rotation = position === "top" ? -6 : 6;
  
  const getScale = () => {
    if (isSelected) return 1.02;
    if (isUnselected) return 0.98;
    return 1;
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: 0 }}
      animate={{ 
        opacity: 1, 
        y: yOffset, 
        rotate: rotation,
        scale: getScale(),
      }}
      transition={{ 
        duration: 0.8, 
        delay: isSelected || isUnselected ? 0 : delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      onClick={onClick}
      className="relative cursor-pointer gpu-accelerated"
    >
      {/* Use CSS animation for continuous float - better mobile performance */}
      <div
        className="relative animate-float"
        style={{ 
          animationDelay: position === "top" ? "0s" : "2s",
        }}
      >
        {/* Card */}
        <div 
          className={`relative w-[180px] md:w-[200px] lg:w-[220px] aspect-[3/4] rounded-3xl overflow-hidden card-shadow-xl transition-all duration-500 ${
            isSelected ? 'border-4 border-green-500' : ''
          }`}
          style={{ 
            background: `linear-gradient(135deg, ${profile.gradientFrom} 0%, ${profile.gradientTo} 100%)`,
            filter: isUnselected ? 'grayscale(100%)' : 'none',
          }}
        >
          {/* Profile Image */}
          <div className="absolute inset-0">
            <Image
              src={profile.image}
              alt={profile.name}
              fill
              className={`object-cover transition-all duration-500 ${isUnselected ? 'grayscale' : ''}`}
              priority
            />
          </div>
          
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

          {/* Tap indicator - only show when not selected - Using CSS animation */}
          <AnimatePresence>
            {!isSelected && !isUnselected && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center animate-pulse gpu-accelerated"
                style={{ animationDuration: "2s" }}
              >
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default function Hero() {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    if (selectedIndex === null) {
      setSelectedIndex(index);
    }
  };

  return (
    <section 
      className="relative min-h-screen overflow-hidden pt-20 pb-24"
      style={{ 
        backgroundColor: "var(--ratch-cream)",
      }}
    >
      {/* Animated gradient blobs - Using CSS animations for better mobile performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute blob animate-blob w-[600px] h-[600px] -top-48 -right-48 opacity-40"
          style={{ background: "linear-gradient(135deg, #FFB347 0%, #FF6B6B 100%)" }}
        />
        <div
          className="absolute blob animate-blob-reverse w-[500px] h-[500px] -bottom-32 -left-32 opacity-30"
          style={{ background: "linear-gradient(135deg, #FF8FA3 0%, #FFB347 100%)" }}
        />
        <div
          className="absolute blob-sm animate-blob w-[300px] h-[300px] top-1/3 left-1/4 opacity-20"
          style={{ 
            background: "linear-gradient(135deg, #FFD700 0%, #FF69B4 100%)",
            animationDuration: "15s",
            animationDelay: "5s"
          }}
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
              <span className="text-sm font-medium text-[#FF6B6B]">{t("hero.badge")}</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight"
            >
              <span className="text-gradient">{t("hero.title1")}</span>
              <br />
              <span className="text-[var(--ratch-black)]">{t("hero.title2")}</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-6 text-lg lg:text-xl text-[var(--ratch-gray)] max-w-md mx-auto lg:mx-0"
            >
              {t("hero.subtitle")}
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
                {t("hero.download")}
              </motion.a>
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-[var(--ratch-black)] text-[var(--ratch-black)] rounded-full font-medium text-lg hover:bg-[var(--ratch-black)] hover:text-white transition-colors"
              >
                {t("hero.howItWorks")}
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
                <p className="text-sm text-[var(--ratch-gray)]">{t("hero.leagues")}</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-[var(--ratch-black)]">Match</p>
                <p className="text-sm text-[var(--ratch-gray)]">{t("hero.rating")}</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-[var(--ratch-black)]">0-10K</p>
                <p className="text-sm text-[var(--ratch-gray)]">{t("hero.scale")}</p>
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
            {/* Squiggly arrow pointing at the cards - only show when not selected */}
            <AnimatePresence>
              {selectedIndex === null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute -left-28 lg:-left-36 top-1/2 -translate-y-1/2 z-20"
                >
                  <div className="flex items-end gap-1 animate-float gpu-accelerated" style={{ animationDuration: "1.5s" }}>
                    <p className="text-gray-400 text-sm font-medium italic mb-6">{t("hero.tryIt")}</p>
                    {/* Squiggly arrow SVG */}
                    <svg 
                      width="60" 
                      height="50" 
                      viewBox="0 0 60 50" 
                      fill="none" 
                      className="text-gray-400"
                    >
                      <path 
                        d="M5 25 C10 15, 15 35, 20 25 C25 15, 30 35, 35 25 C40 15, 45 30, 50 25" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        fill="none"
                      />
                      <path 
                        d="M45 20 L52 25 L45 30" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Top Card */}
            <FloatingCard 
              profile={profiles[0]} 
              position="top"
              isSelected={selectedIndex === 0}
              isUnselected={selectedIndex === 1}
              onClick={() => handleSelect(0)}
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
              isSelected={selectedIndex === 1}
              isUnselected={selectedIndex === 0}
              onClick={() => handleSelect(1)}
              delay={0.8}
            />

            {/* Tap hint */}
            <AnimatePresence mode="wait">
              {selectedIndex === null ? (
                <motion.p
                  key="hint"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 1.5 }}
                  className="text-sm text-[var(--ratch-gray)] mt-4"
                >
                  {t("hero.tapToChoose")}
                </motion.p>
              ) : (
                <motion.p
                  key="chosen"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-green-600 font-medium mt-4"
                >
                  {profiles[selectedIndex].name} {t("hero.chosen")}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Using CSS animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 animate-float gpu-accelerated">
          <span className="text-xs text-[var(--ratch-gray)]">{t("hero.scrollToExplore")}</span>
          <svg className="w-5 h-5 text-[var(--ratch-gray)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
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
