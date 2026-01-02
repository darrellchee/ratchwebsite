"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface PhoneMockupProps {
  label: string;
  gradient: string;
  rotation?: number;
  delay?: number;
}

function PhoneMockup({ label, gradient, rotation = 0, delay = 0 }: PhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      style={{ rotate: rotation }}
      className="relative"
    >
      {/* Phone Frame */}
      <div className="relative w-56 sm:w-64 h-[440px] sm:h-[500px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full z-10" />
        
        {/* Screen */}
        <div className={`relative w-full h-full ${gradient} rounded-[2.5rem] overflow-hidden`}>
          {/* Screen Content Placeholder */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            {/* App UI Mockup */}
            <div className="w-full space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-full bg-white/20" />
                <div className="w-20 h-3 rounded-full bg-white/30" />
                <div className="w-8 h-8 rounded-full bg-white/20" />
              </div>
              
              {/* Main Content Area */}
              <div className="space-y-3 mt-4">
                <div className="w-full h-32 rounded-2xl bg-white/15 backdrop-blur-sm" />
                <div className="flex gap-2">
                  <div className="flex-1 h-10 rounded-xl bg-white/20" />
                  <div className="flex-1 h-10 rounded-xl bg-white/20" />
                </div>
                <div className="w-3/4 h-3 rounded-full bg-white/25" />
                <div className="w-1/2 h-3 rounded-full bg-white/20" />
              </div>
              
              {/* Bottom Action */}
              <div className="mt-8 w-full h-12 rounded-2xl bg-white/30 backdrop-blur-sm" />
            </div>
          </div>
          
          {/* Label */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              {label}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function AppPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="py-20 lg:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
            See It in Action
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            A beautiful, intuitive app designed for meaningful connections
          </p>
        </motion.div>

        {/* Phone Mockups */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0">
          {/* Left Phone */}
          <motion.div style={{ y: y1 }} className="lg:-mr-8 z-0">
            <PhoneMockup
              label="Compare"
              gradient="bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500"
              rotation={-6}
              delay={0}
            />
          </motion.div>

          {/* Center Phone */}
          <motion.div style={{ y: y2 }} className="z-10 lg:scale-110">
            <PhoneMockup
              label="Profile"
              gradient="bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600"
              rotation={0}
              delay={0.15}
            />
          </motion.div>

          {/* Right Phone */}
          <motion.div style={{ y: y3 }} className="lg:-ml-8 z-0">
            <PhoneMockup
              label="Stats"
              gradient="bg-gradient-to-br from-orange-400 via-rose-500 to-pink-500"
              rotation={6}
              delay={0.3}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

