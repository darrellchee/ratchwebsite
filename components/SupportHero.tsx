"use client";

import { motion } from "framer-motion";

const quickLinks = [
  {
    icon: "📧",
    title: "Contact Support",
    description: "Get help with your account",
    href: "#support-contact",
    color: "#3B82F6",
  },
  {
    icon: "🔒",
    title: "Privacy Policy",
    description: "How we protect your data",
    href: "#privacy-policy",
    color: "#22C55E",
  },
  {
    icon: "📜",
    title: "Terms of Service",
    description: "Usage terms and conditions",
    href: "#terms-of-service",
    color: "#F59E0B",
  },
  {
    icon: "💳",
    title: "Subscriptions",
    description: "Billing and payments",
    href: "#subscriptions",
    color: "#8B5CF6",
  },
];

const scrollToSection = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const id = href.replace("#", "");
  const element = document.getElementById(id);
  if (element) {
    const offset = 120; // Account for navbar + padding
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: "smooth"
    });
    
    // Update URL hash
    window.history.pushState(null, "", href);
  }
};

export default function SupportHero() {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 bg-bumble-black text-white">
            Help Center
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bumble-black mb-4">
            Support & Legal
          </h1>
          <p className="text-lg text-bumble-gray max-w-2xl mx-auto">
            Everything you need to know about using MeetMatch. Find answers to common questions, 
            understand our policies, and get in touch with our support team.
          </p>
          <p className="mt-4 text-sm text-bumble-gray">
            <span className="font-medium">Last Updated:</span> January 2, 2026
          </p>
        </motion.div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((link, i) => (
            <motion.a
              key={link.title}
              href={link.href}
              onClick={(e) => scrollToSection(link.href, e)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="block p-5 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all cursor-pointer"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3"
                style={{ backgroundColor: `${link.color}15` }}
              >
                {link.icon}
              </div>
              <h3 className="font-bold text-bumble-black mb-1">{link.title}</h3>
              <p className="text-sm text-bumble-gray">{link.description}</p>
            </motion.a>
          ))}
        </div>

        {/* Navigation hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-bumble-gray">
            Use the table of contents below to navigate to specific sections
          </p>
          <div className="mt-2 flex justify-center">
            <svg className="w-5 h-5 text-bumble-gray animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
