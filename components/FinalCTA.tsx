"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FinalCTA() {
  const { t } = useLanguage();
  
  return (
    <section 
      id="download" 
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--ratch-warm-white)" }}
    >
      {/* Background gradient blobs - Using CSS animations for better mobile performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute blob animate-blob w-[500px] h-[500px] -top-32 -left-32 opacity-20"
          style={{ 
            background: "linear-gradient(135deg, #FFB347 0%, #FF6B6B 100%)",
            animationDuration: "15s"
          }}
        />
        <div
          className="absolute blob animate-blob-reverse w-[400px] h-[400px] -bottom-20 -right-20 opacity-15"
          style={{ 
            background: "linear-gradient(135deg, #FFD700 0%, #FF8FA3 100%)",
            animationDuration: "18s"
          }}
        />
      </div>
      
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[40px] p-8 md:p-12 lg:p-16 overflow-hidden border border-[var(--ratch-black)]/10"
          style={{ 
            background: "linear-gradient(135deg, #FFFFFF 0%, #FDF8F3 50%, #FFF9F0 100%)",
            boxShadow: "0 4px 60px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)",
          }}
        >
          {/* Decorative gradient overlay */}
          <div 
            className="absolute top-0 right-0 w-2/3 h-full opacity-40"
            style={{ 
              background: "radial-gradient(circle at 90% 10%, rgba(255, 179, 71, 0.25) 0%, transparent 45%)",
            }}
          />
          <div 
            className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-30"
            style={{ 
              background: "radial-gradient(circle at 10% 90%, rgba(255, 107, 107, 0.2) 0%, transparent 45%)",
            }}
          />
          
          {/* Subtle pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--ratch-black)] leading-tight">
              {t("cta.title1")}
              <br />
              <span className="text-gradient">{t("cta.title2")}</span>
            </h2>

            <p className="mt-6 text-lg text-[var(--ratch-gray)] max-w-xl mx-auto">
              {t("cta.subtitle")}
            </p>

            {/* App Store button */}
            <div className="mt-10 flex justify-center">
              <motion.a
                href="#"
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 px-8 py-5 bg-[var(--ratch-black)] rounded-2xl text-left group transition-all hover:shadow-2xl"
                style={{
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
                }}
              >
                <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div>
                  <p className="text-xs text-white/70">{t("cta.downloadOn")}</p>
                  <p className="text-xl font-semibold text-white">{t("cta.appStore")}</p>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



