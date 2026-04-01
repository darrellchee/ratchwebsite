"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ethnicityData = [
  { label: "Asian",             pct: 80, chose: 89,  passed: 23 },
  { label: "Hispanic/Latino",   pct: 88, chose: 50,  passed: 7  },
  { label: "White",             pct: 66, chose: 36,  passed: 19 },
  { label: "Black",             pct: 84, chose: 43,  passed: 8  },
  { label: "Mixed/Multiracial", pct: 76, chose: 32,  passed: 10 },
  { label: "Other",             pct: 74, chose: 31,  passed: 11 },
  { label: "Middle Eastern",    pct: 71, chose: 25,  passed: 10 },
  { label: "Pacific Islander",  pct: 69, chose: 18,  passed: 8  },
];

const EthnicityRow = ({ item, index }: { item: typeof ethnicityData[0]; index: number }) => (
  <div className="flex flex-col justify-center min-h-0">
    <div className="flex items-center justify-between mb-1">
      <span className="text-[10px] font-semibold text-[#1a1a1a] leading-tight">{item.label}</span>
      <span className="text-[9px] font-bold text-green-500 shrink-0 ml-1">{item.pct}% chose you</span>
    </div>
    {/* Bar track: green fill + salmon remainder — thicker bar */}
    <div className="relative h-4 rounded-full overflow-hidden bg-[#FFCDD2] shadow-inner">
      <motion.div
        className="absolute left-0 top-0 h-full rounded-full bg-green-500"
        initial={{ width: "0%" }}
        whileInView={{ width: `${item.pct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.25 + index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </div>
    <div className="flex gap-3 mt-1">
      <span className="text-[8px] text-[#555] flex items-center gap-0.5">
        <span className="w-2 h-2 rounded-full bg-green-500 inline-block shrink-0" />
        {item.chose} chose
      </span>
      <span className="text-[8px] text-[#555] flex items-center gap-0.5">
        <span className="w-2 h-2 rounded-full bg-[#FF8A80] inline-block shrink-0" />
        {item.passed} passed
      </span>
    </div>
  </div>
);

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
    <div
      className="animate-float gpu-accelerated"
      style={{ 
        animationDelay: `${delay}s`,
        animationDirection: direction === "down" ? "reverse" : "normal"
      }}
    >
      {children}
    </div>
  </motion.div>
);

export default function StatsTeaser() {
  const { t } = useLanguage();
  
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
              {t("stats.badge")}
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--ratch-black)] leading-tight">
              {t("stats.title1")}
              <br />
              <span style={{ color: "#22C55E" }}>{t("stats.title2")}</span>
            </h2>
            
            <p className="mt-6 text-lg text-[var(--ratch-gray)] max-w-lg leading-relaxed">
              {t("stats.subtitle")}
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
                  👥
                </div>
                <div>
                  <p className="font-semibold text-[var(--ratch-black)]">{t("stats.feature1.title")}</p>
                  <p className="text-sm text-[var(--ratch-gray)]">{t("stats.feature1.desc")}</p>
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
                  🎂
                </div>
                <div>
                  <p className="font-semibold text-[var(--ratch-black)]">{t("stats.feature2.title")}</p>
                  <p className="text-sm text-[var(--ratch-gray)]">{t("stats.feature2.desc")}</p>
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
                  🌍
                </div>
                <div>
                  <p className="font-semibold text-[var(--ratch-black)]">{t("stats.feature3.title")}</p>
                  <p className="text-sm text-[var(--ratch-gray)]">{t("stats.feature3.desc")}</p>
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
                {t("stats.cta")}
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
            {/* Floating audience stat badges */}
            <FloatingStat 
              className="top-0 -left-4 lg:-left-2 z-20"
              delay={0.6}
              direction="up"
            >
              <div className="bg-white rounded-2xl p-4 card-shadow-lg">
                <p className="text-sm text-[var(--ratch-gray)]">Asian chose you</p>
                <p className="text-2xl font-bold text-green-500">80%</p>
              </div>
            </FloatingStat>

            <FloatingStat 
              className="top-20 -right-4 lg:right-0 z-20"
              delay={0.8}
              direction="down"
            >
              <div className="bg-white rounded-2xl p-4 card-shadow-lg">
                <p className="text-sm text-[var(--ratch-gray)]">Hispanic/Latino</p>
                <p className="text-2xl font-bold text-green-500">88%</p>
              </div>
            </FloatingStat>

            <FloatingStat 
              className="bottom-32 -left-4 lg:-left-8 z-20"
              delay={1}
              direction="up"
            >
              <div className="bg-white rounded-2xl p-4 card-shadow-lg flex items-center gap-2">
                <span className="text-xl">👍</span>
                <div>
                  <p className="text-sm font-medium text-[var(--ratch-black)]">Top performer!</p>
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
                    className="aspect-[9/19.5] flex flex-col p-4 pt-14 overflow-hidden"
                    style={{ backgroundColor: "#FEFCF8" }}
                  >
                    {/* App header */}
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#FFB347] to-[#FF6B6B] flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                        R
                      </div>
                      <div>
                        <p className="text-[12px] font-bold text-[#1a1a1a] leading-tight">Audience</p>
                        <p className="text-[8px] text-[#888] leading-tight">Who&apos;s choosing you by gender, age, ethnicity.</p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-100 mb-3" />

                    {/* WHO CHOOSES YOU label */}
                    <div className="mb-2">
                      <div className="flex items-center gap-1 mb-0.5">
                        <span className="text-[10px]">👍</span>
                        <p className="text-[9px] font-bold uppercase tracking-wider text-[#1a1a1a]">Who Chooses You</p>
                      </div>
                      <p className="text-[8px] text-[#888] leading-tight">Choice rate by ethnicity of the person exploring you</p>
                    </div>

                    {/* Ethnicity rows — equal vertical slices so the mock fills the phone */}
                    <div className="flex-1 min-h-0 flex flex-col">
                      {ethnicityData.map((item, i) => (
                        <div key={item.label} className="flex-1 flex flex-col justify-center min-h-0 py-0.5">
                          <EthnicityRow item={item} index={i} />
                        </div>
                      ))}
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
