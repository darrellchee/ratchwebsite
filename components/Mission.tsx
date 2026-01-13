"use client";

import { motion } from "framer-motion";

// iPhone mockup component
const IPhoneMockup = ({ 
  delay = 0, 
  className = "" 
}: { 
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={`relative ${className}`}
  >
    {/* iPhone Frame */}
    <div className="relative w-[180px] md:w-[200px] lg:w-[220px]">
      {/* Outer frame */}
      <div className="relative bg-[#1a1a1a] rounded-[40px] p-[10px] shadow-2xl">
        {/* Inner bezel */}
        <div className="relative bg-[#0a0a0a] rounded-[32px] overflow-hidden">
          {/* Dynamic Island - scaled to iPhone 17 Pro proportions (32% width, 3.4:1 aspect ratio) */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 bg-[#1a1a1a] z-10"
            style={{
              top: '2.8%',
              width: '32%',
              aspectRatio: '3.4 / 1',
              borderRadius: '9999px',
            }}
          />
          
          {/* Screen */}
          <div className="aspect-[9/19.5] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            {/* Placeholder for screenshot */}
            <div className="text-gray-400 text-xs font-medium">
              {/* Empty - for future screenshot */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Side buttons */}
      <div className="absolute right-[-2px] top-28 w-[3px] h-12 bg-[#2a2a2a] rounded-r-sm" />
      <div className="absolute left-[-2px] top-20 w-[3px] h-6 bg-[#2a2a2a] rounded-l-sm" />
      <div className="absolute left-[-2px] top-32 w-[3px] h-10 bg-[#2a2a2a] rounded-l-sm" />
      <div className="absolute left-[-2px] top-44 w-[3px] h-10 bg-[#2a2a2a] rounded-l-sm" />
    </div>
  </motion.div>
);

export default function Mission() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bumble-black leading-tight">
              Ratch Stats
            </h2>
            <p className="mt-6 text-lg text-bumble-gray max-w-lg">
              We want our members to gain meaningful insights into their appeal.
            </p>
            <motion.a
              href="#download"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block mt-8 px-8 py-4 bg-bumble-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-colors"
            >
              Download Bumble
            </motion.a>
          </motion.div>

          {/* Right Content - 3 iPhones */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-end gap-3 md:gap-4 lg:gap-6"
          >
            <IPhoneMockup delay={0.3} className="transform -rotate-6" />
            <IPhoneMockup delay={0.4} className="transform scale-105 z-10" />
            <IPhoneMockup delay={0.5} className="transform rotate-6" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
