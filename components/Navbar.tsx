"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Date", href: "/date" },
  { name: "Stats", href: "/stats" },
  { name: "Leaderboard", href: "/leaderboard" },
  { name: "Support", href: "/support" },
];

const languages = [
  "English (United States)",
  "English (United Kingdom)",
  "Deutsch",
  "Français",
  "Español (España)",
  "Italiano",
  "Português (Brasil)",
  "日本語",
  "한국어",
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="relative flex items-center justify-center h-20">
          {/* Logo - Absolute positioned on left */}
          <Link href="/" className="absolute left-0 flex items-center">
            <Image 
              src="/ratchtransparent2.png" 
              alt="Ratch" 
              width={136}
              height={54}
              className="h-[3.4rem] w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered pill shaped container */}
          <div className="hidden lg:flex items-center">
            <div 
              className={`flex items-center rounded-full px-2 py-1.5 border transition-all duration-300 ${
                isScrolled 
                  ? 'bg-[var(--ratch-cream)] border-gray-200' 
                  : 'bg-white/70 backdrop-blur-md border-black/10'
              }`}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-5 py-2 transition-colors font-medium text-[15px] text-[var(--ratch-black)] hover:text-[var(--ratch-gray)]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side - Language & Sign In - Absolute positioned on right */}
          <div className="hidden lg:flex absolute right-0 items-center gap-3">
            {/* Language Selector */}
            <div className="relative" ref={languageRef}>
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full border transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-[var(--ratch-cream)] border-gray-200 hover:border-gray-300' 
                    : 'bg-white/70 backdrop-blur-md border-black/10 hover:bg-white/90'
                }`}
              >
                <svg className="w-5 h-5 text-[var(--ratch-black)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <svg className={`w-4 h-4 transition-transform text-[var(--ratch-black)] ${isLanguageOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 max-h-80 overflow-y-auto"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setIsLanguageOpen(false)}
                        className="w-full text-left px-4 py-2.5 text-sm text-[var(--ratch-black)] hover:bg-gray-50 transition-colors"
                      >
                        {lang}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sign In Button */}
            <motion.a
              href="#signin"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 text-white rounded-full font-medium text-[15px] transition-all bg-[var(--ratch-black)] hover:bg-gray-800"
            >
              Sign in
            </motion.a>
          </div>

          {/* Mobile Menu Button - Absolute positioned on right */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden absolute right-0 p-2 text-[var(--ratch-black)]"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 font-medium text-lg text-[var(--ratch-black)]"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 mt-4 space-y-3">
                <button className="flex items-center gap-2 font-medium text-[var(--ratch-black)]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                  English (United States)
                </button>
                <a
                  href="#signin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center py-3 text-white rounded-full font-medium bg-[var(--ratch-black)]"
                >
                  Sign in
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
