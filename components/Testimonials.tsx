"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Large Quote Mark */}
            <div className="text-6xl lg:text-8xl font-bold text-bumble-black leading-none mb-4">
              &ldquo;
            </div>
            
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-bumble-black leading-tight">
              We are both naturally positive, happy-go-getters, but when you put us together, it feels like there is nothing we can&apos;t accomplish.
            </blockquote>
            
            <div className="mt-8">
              <p className="text-lg text-bumble-gray">
                <span className="text-bumble-black font-semibold">Leslie & Thomas</span>, made friends in 2025
              </p>
            </div>

            <a
              href="#stories"
              className="inline-block mt-8 text-bumble-black font-medium text-lg underline underline-offset-4 hover:no-underline transition-all"
            >
              Read more stories
            </a>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden bg-gray-100">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                  <p className="font-medium text-lg">Community photo here</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
