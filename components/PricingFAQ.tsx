"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How does billing work?",
    answer: "We offer both monthly and annual billing options. Monthly subscriptions are charged on the same date each month. Annual subscriptions are charged once per year and include a 20% discount compared to monthly billing. All payments are processed securely through the App Store or Google Play.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. When you cancel, you'll continue to have access to your plan's features until the end of your current billing period. After that, your account will automatically switch to the Free plan.",
  },
  {
    question: "What happens to my data if I downgrade?",
    answer: "Your profile and friend history are always preserved. If you downgrade, you'll lose access to premium features but keep all your friends and conversations. You can upgrade again at any time to regain access to premium features.",
  },
  {
    question: "Can I switch plans mid-subscription?",
    answer: "Absolutely! You can upgrade or downgrade at any time. When you upgrade, you'll be charged a prorated amount for the remainder of your billing period. When you downgrade, the change takes effect at the start of your next billing cycle.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Refunds are handled through the App Store or Google Play according to their policies. Generally, you can request a refund within 48 hours of purchase. Contact our support team if you have any issues, and we'll do our best to help.",
  },
  {
    question: "Are there any hidden fees?",
    answer: "No hidden fees, ever. The price you see is the price you pay. There are no setup fees, cancellation fees, or any other surprise charges. We believe in complete transparency with our pricing.",
  },
  {
    question: "Do features vary by region?",
    answer: "Some features may have different limits or availability depending on your region due to local regulations. Pricing may also vary by country. You can always see the exact features and pricing available to you in the app.",
  },
  {
    question: "Is my payment information secure?",
    answer: "Absolutely. We never store your payment information directly. All transactions are processed securely through Apple's App Store or Google Play Store, which use industry-leading encryption and security measures.",
  },
];

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-[var(--ratch-black)] group-hover:text-[var(--ratch-gray)] transition-colors pr-8">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--ratch-light-gray)] flex items-center justify-center"
        >
          <svg className="w-5 h-5 text-[var(--ratch-black)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[var(--ratch-gray)] leading-relaxed pr-12">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: "var(--ratch-cream)" }}>
      <div className="max-w-[900px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span 
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: "var(--ratch-light-gray)", color: "var(--ratch-black)" }}
          >
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--ratch-black)]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-[var(--ratch-gray)]">
            Everything you need to know about our pricing and plans
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl p-6 lg:p-10 shadow-lg"
        >
          {faqs.map((faq, index) => (
            <FAQAccordion
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-[var(--ratch-gray)] mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <motion.a
            href="/support"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white transition-all"
            style={{ background: "var(--gradient-coral-amber)" }}
          >
            Contact Support
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
