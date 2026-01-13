"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "terms-of-service", title: "Terms of Service" },
  { id: "privacy-policy", title: "Privacy Policy" },
  { id: "third-party", title: "Third-Party Services" },
  { id: "subscriptions", title: "Subscriptions" },
  { id: "user-rights", title: "User Rights" },
  { id: "support-contact", title: "Support & Contact" },
  { id: "compliance", title: "App Store Compliance" },
];

export default function SupportNav() {
  const [activeSection, setActiveSection] = useState("terms-of-service");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Handle initial hash navigation
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: "smooth", 
            block: "start" 
          });
          setActiveSection(hash);
        }, 300);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          // Update URL hash without triggering scroll
          if (window.location.hash !== `#${sections[i].id}`) {
            window.history.replaceState(null, "", `#${sections[i].id}`);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    setIsMobileOpen(false);
    
    // Use requestAnimationFrame to ensure drawer closes first on mobile
    requestAnimationFrame(() => {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          // Use scrollIntoView which respects scroll-mt CSS property
          element.scrollIntoView({ 
            behavior: "smooth", 
            block: "start" 
          });
          
          // Set focus for accessibility
          element.setAttribute("tabindex", "-1");
          element.focus({ preventScroll: true });
          
          // Update URL hash
          window.history.pushState(null, "", `#${id}`);
          setActiveSection(id);
        }
      }, 150); // Delay for mobile drawer animation
    });
  };

  return (
    <>
      {/* Desktop Navigation - Sticky Sidebar */}
      <nav className="hidden lg:block sticky top-24 h-fit">
        <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
          <h3 className="font-bold text-bumble-black mb-4 px-2">Table of Contents</h3>
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleClick(section.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeSection === section.id
                      ? "bg-bumble-yellow text-bumble-black"
                      : "text-bumble-gray hover:bg-gray-50 hover:text-bumble-black"
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation - Floating Button + Drawer */}
      <div className="lg:hidden">
        {/* Floating Button */}
        <motion.button
          onClick={() => setIsMobileOpen(true)}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-bumble-black text-white rounded-full shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isMobileOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileOpen(false)}
                className="fixed inset-0 bg-black/50 z-50"
              />
              
              {/* Drawer */}
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl max-h-[70vh] overflow-auto"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-bumble-black text-lg">Table of Contents</h3>
                    <button
                      onClick={() => setIsMobileOpen(false)}
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <ul className="space-y-2">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <button
                          onClick={() => handleClick(section.id)}
                          className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all ${
                            activeSection === section.id
                              ? "bg-bumble-yellow text-bumble-black"
                              : "text-bumble-gray hover:bg-gray-50"
                          }`}
                        >
                          {section.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Handle bar */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-gray-300 rounded-full" />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
