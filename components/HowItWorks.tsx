"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Compare",
    description: "Two profiles appear side by side. No endless swiping – just pick the one you find more attractive.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    color: "#FF6B6B",
    bgColor: "rgba(255, 107, 107, 0.1)",
  },
  {
    number: "02",
    title: "Climb",
    description: "Every choice updates ELO ratings. Win comparisons to rise through 10 unique leagues.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    color: "#FFB347",
    bgColor: "rgba(255, 179, 71, 0.1)",
  },
  {
    number: "03",
    title: "Connect",
    description: "Match with people in your league. Quality over quantity – find your true match.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    color: "#FF8FA3",
    bgColor: "rgba(255, 143, 163, 0.1)",
  },
];

const StepCard = ({ 
  step, 
  index 
}: { 
  step: typeof steps[0]; 
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="relative"
  >
    {/* Connector line (not on last item) */}
    {index < steps.length - 1 && (
      <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-gray-200 to-transparent z-0" />
    )}
    
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative bg-white rounded-3xl p-8 card-shadow h-full"
    >
      {/* Step number */}
      <div 
        className="absolute -top-4 -left-2 w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-white text-sm"
        style={{ backgroundColor: step.color }}
      >
        {step.number}
      </div>

      {/* Icon */}
      <div 
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mt-4"
        style={{ backgroundColor: step.bgColor, color: step.color }}
      >
        {step.icon}
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-[var(--ratch-black)] mb-3">
        {step.title}
      </h3>
      <p className="text-[var(--ratch-gray)] leading-relaxed">
        {step.description}
      </p>

      {/* Decorative corner */}
      <div 
        className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-[60px] opacity-5"
        style={{ backgroundColor: step.color }}
      />
    </motion.div>
  </motion.div>
);

export default function HowItWorks() {
  return (
    <section 
      id="how-it-works" 
      className="pt-8 pb-24 lg:pt-12 lg:pb-32 relative overflow-hidden -mt-1"
      style={{ backgroundColor: "var(--ratch-warm-white)" }}
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-30 blur-3xl" 
        style={{ background: "linear-gradient(135deg, #FFB347 0%, #FF6B6B 100%)" }} 
      />
      
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: "rgba(255, 107, 107, 0.1)", color: "#FF6B6B" }}
          >
            How It Works
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--ratch-black)] leading-tight">
            Three steps to
            <br />
            <span className="text-gradient">better dating</span>
          </h2>
          
          <p className="mt-6 text-lg text-[var(--ratch-gray)]">
            Our unique comparison system learns your preferences and matches you 
            with people who are truly compatible.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#compare-demo"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-[var(--ratch-black)] border-2 border-[var(--ratch-black)] hover:bg-[var(--ratch-black)] hover:text-white transition-colors"
          >
            See it in action
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
