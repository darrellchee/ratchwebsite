"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type ProfileCard = {
  name: string;
  age: number;
  gradientFrom: string;
  gradientTo: string;
  image: string;
};

const profiles: ProfileCard[] = [
  {
    name: "Sarah",
    age: 26,
    gradientFrom: "#FFB6C1",
    gradientTo: "#FF8FA3",
    image: "/person1.png",
  },
  {
    name: "Emma",
    age: 29,
    gradientFrom: "#87CEEB",
    gradientTo: "#5BA3D9",
    image: "/person2.png",
  },
];

const FloatingCard = ({
  profile,
  position,
  isSelected,
  isUnselected,
  onClick,
  delay = 0,
}: {
  profile: ProfileCard;
  position: "left" | "right";
  isSelected: boolean;
  isUnselected: boolean;
  onClick: () => void;
  delay?: number;
}) => {
  const yOffset = 0;
  const rotation = position === "left" ? -6 : 6;

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
        damping: 15,
      }}
      onClick={onClick}
      className="relative w-full min-w-0 max-w-[220px] md:w-[200px] lg:w-[220px] md:max-w-none cursor-pointer gpu-accelerated"
    >
      <div
        className="relative animate-float"
        style={{
          animationDelay: position === "left" ? "0s" : "2s",
        }}
      >
        <div
          className={`relative w-full aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden card-shadow-xl transition-all duration-500 ${
            isSelected ? "border-4 border-green-500" : ""
          }`}
          style={{
            background: `linear-gradient(135deg, ${profile.gradientFrom} 0%, ${profile.gradientTo} 100%)`,
            filter: isUnselected ? "grayscale(100%)" : "none",
          }}
        >
          <div className="absolute inset-0">
            <Image
              src={profile.image}
              alt={profile.name}
              fill
              className={`object-cover transition-all duration-500 ${isUnselected ? "grayscale" : ""}`}
              priority={false}
            />
          </div>

          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 60%)",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4), transparent 50%)",
            }}
          />

          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
            <p className="text-white font-bold text-base md:text-xl drop-shadow-lg">
              {profile.name}, {profile.age}
            </p>
            <div className="flex gap-1.5 mt-2">
              <div className="w-2 h-2 rounded-full bg-white/80" />
              <div className="w-2 h-2 rounded-full bg-white/50" />
              <div className="w-2 h-2 rounded-full bg-white/50" />
            </div>
          </div>

          <AnimatePresence>
            {!isSelected && !isUnselected && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center animate-pulse gpu-accelerated"
                style={{ animationDuration: "2s" }}
              >
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default function TryCompareSection() {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    if (selectedIndex === null) setSelectedIndex(index);
  };

  return (
    <section
      id="try-compare"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--ratch-cream)" }}
    >
      {/* Animated gradient blobs (match hero vibe) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute blob animate-blob w-[600px] h-[600px] -top-48 -right-48 opacity-35"
          style={{ background: "linear-gradient(135deg, #FFB347 0%, #FF6B6B 100%)" }}
        />
        <div
          className="absolute blob animate-blob-reverse w-[500px] h-[500px] -bottom-32 -left-32 opacity-25"
          style={{ background: "linear-gradient(135deg, #FF8FA3 0%, #FFB347 100%)" }}
        />
        <div
          className="absolute blob-sm animate-blob w-[320px] h-[320px] top-1/3 left-1/4 opacity-20"
          style={{
            background: "linear-gradient(135deg, #FFD700 0%, #FF69B4 100%)",
            animationDuration: "15s",
            animationDelay: "5s",
          }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 min-w-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-w-0">
          {/* Left copy */}
          <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0 min-w-0 px-1 sm:px-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: "rgba(255, 107, 107, 0.1)" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#FF6B6B] animate-pulse" />
              <span className="text-sm font-medium text-[#FF6B6B]">{t("hero.tryIt")}</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ratch-black)] leading-tight text-balance">
              Try comparing profiles
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--ratch-gray)] text-pretty max-w-prose mx-auto lg:mx-0">
              Tap the person you prefer — we learn what you like from every choice.
            </p>
          </div>

          {/* Right interactive demo */}
          <div className="relative flex flex-col items-center gap-6 w-full min-w-0 max-w-full">
            <AnimatePresence>
              {selectedIndex === null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="hidden md:block absolute -left-28 lg:-left-36 top-1/2 -translate-y-1/2 z-20"
                >
                  <div className="flex items-end gap-1 animate-float gpu-accelerated" style={{ animationDuration: "1.5s" }}>
                    <p className="text-gray-400 text-sm font-medium italic mb-6">{t("hero.tryIt")}</p>
                    <svg width="60" height="50" viewBox="0 0 60 50" fill="none" className="text-gray-400">
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

            <div
              className="relative grid w-full max-w-md md:max-w-none md:w-auto mx-auto items-center gap-2 sm:gap-4 md:gap-12 lg:gap-16 px-0 min-w-0
              grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]
              md:grid-cols-[200px_auto_200px] lg:grid-cols-[220px_auto_220px]"
            >
              <div className="min-w-0 flex justify-end">
                <FloatingCard
                  profile={profiles[0]}
                  position="left"
                  isSelected={selectedIndex === 0}
                  isUnselected={selectedIndex === 1}
                  onClick={() => handleSelect(0)}
                  delay={0.2}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="relative z-20 shrink-0 justify-self-center"
              >
                <div
                  className="w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-white text-xs md:text-sm card-shadow-lg"
                  style={{ background: "var(--gradient-coral-amber)" }}
                >
                  VS
                </div>
              </motion.div>

              <div className="min-w-0 flex justify-start">
                <FloatingCard
                  profile={profiles[1]}
                  position="right"
                  isSelected={selectedIndex === 1}
                  isUnselected={selectedIndex === 0}
                  onClick={() => handleSelect(1)}
                  delay={0.35}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              {selectedIndex === null ? (
                <motion.p
                  key="hint"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.4 }}
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
          </div>
        </div>
      </div>
    </section>
  );
}

