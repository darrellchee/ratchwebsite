"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const RatingCard = () => {
  const score = 8.2;
  const percentage = (score / 10) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100, damping: 15 }}
      className="relative gpu-accelerated"
    >
      <div
        className="relative w-[400px] h-[400px] md:w-[440px] md:h-[440px] lg:w-[480px] lg:h-[480px] rounded-3xl overflow-hidden card-shadow-xl animate-float"
        style={{ animationDuration: "4s" }}
      >
        {/* Profile image */}
        <div className="absolute inset-0">
          <Image
            src="/person3.png"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 55%)",
          }}
        />

        {/* Light reflection */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.3), transparent 50%)",
          }}
        />

        {/* Score + bar overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          {/* Score text */}
          <p className="text-white drop-shadow-lg leading-none mb-3">
            <span className="font-bold text-4xl">{score}</span>
            <span className="font-medium text-lg opacity-80">/10</span>
          </p>

          {/* Progress bar */}
          <div className="relative w-full h-1.5 rounded-full bg-white/30">
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1.2, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                background: "linear-gradient(90deg, #FF6B6B 0%, #FFB347 45%, #22C55E 100%)",
              }}
            />
            {/* Thumb dot */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-md border-2 border-white/60"
              initial={{ left: "0%" }}
              animate={{ left: `calc(${percentage}% - 7px)` }}
              transition={{ duration: 1.2, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Hero() {
  const { t } = useLanguage();

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
                href="#try-compare"
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

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex flex-col items-center gap-8"
          >
            {/* Rating Card */}
            <RatingCard />
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

    </section>
  );
}
