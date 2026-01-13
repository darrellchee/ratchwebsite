"use client";

import { motion } from "framer-motion";

const features = [
  { icon: "🔒", text: "Privacy First" },
  { icon: "⚡", text: "Instant Matches" },
  { icon: "🏆", text: "Competitive" },
  { icon: "📊", text: "Data Insights" },
];

export default function FinalCTA() {
  return (
    <section 
      id="download" 
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--ratch-warm-white)" }}
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute blob w-[500px] h-[500px] -top-32 -left-32 opacity-30"
          style={{ background: "linear-gradient(135deg, #FF6B6B 0%, #FFB347 100%)" }}
          animate={{ 
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute blob w-[400px] h-[400px] -bottom-20 -right-20 opacity-25"
          style={{ background: "linear-gradient(135deg, #FF8FA3 0%, #FFD700 100%)" }}
          animate={{ 
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[40px] p-8 md:p-12 lg:p-16 overflow-hidden"
          style={{ 
            background: "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)",
          }}
        >
          {/* Decorative gradient overlay */}
          <div 
            className="absolute top-0 right-0 w-1/2 h-full opacity-20"
            style={{ 
              background: "radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.6) 0%, transparent 50%)",
            }}
          />
          <div 
            className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-15"
            style={{ 
              background: "radial-gradient(circle at 20% 80%, rgba(255, 179, 71, 0.6) 0%, transparent 50%)",
            }}
          />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-white/90">Available Now</span>
            </motion.div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Ready to find your
              <br />
              <span className="text-gradient">perfect match?</span>
            </h2>

            <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
              Join thousands of singles who have discovered a better way to date. 
              Download Ratch and start comparing today.
            </p>

            {/* App store buttons */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <motion.a
                href="#"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl text-left group transition-all hover:shadow-xl"
              >
                <svg className="w-8 h-8 text-[var(--ratch-black)]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div>
                  <p className="text-xs text-[var(--ratch-gray)]">Download on the</p>
                  <p className="text-lg font-semibold text-[var(--ratch-black)]">App Store</p>
                </div>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl text-left group transition-all hover:shadow-xl"
              >
                <svg className="w-8 h-8 text-[var(--ratch-black)]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div>
                  <p className="text-xs text-[var(--ratch-gray)]">Get it on</p>
                  <p className="text-lg font-semibold text-[var(--ratch-black)]">Google Play</p>
                </div>
              </motion.a>
            </div>

            {/* Feature pills */}
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  <span>{feature.icon}</span>
                  <span className="text-sm text-white/80">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-[var(--ratch-gray)] mb-6">Trusted by thousands of singles worldwide</p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {/* Rating badge */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-semibold text-[var(--ratch-black)]">4.9</span>
              <span className="text-sm text-[var(--ratch-gray)]">App Store</span>
            </div>

            <div className="hidden md:block w-px h-8 bg-gray-200" />

            {/* Download count */}
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[var(--ratch-black)]">100K+</span>
              <span className="text-sm text-[var(--ratch-gray)]">Downloads</span>
            </div>

            <div className="hidden md:block w-px h-8 bg-gray-200" />

            {/* Matches */}
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[var(--ratch-black)]">50K+</span>
              <span className="text-sm text-[var(--ratch-gray)]">Matches Made</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
