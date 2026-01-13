"use client";

import { motion } from "framer-motion";

export default function Events() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bumble-black leading-tight">
              Start the chat in person
            </h2>
            <p className="mt-6 text-lg text-bumble-gray leading-relaxed max-w-lg">
              Bumble IRL events mean you can stop typing and start talking. Come solo or bring a friend—and leave with a new connection.
            </p>
            <motion.a
              href="#events"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block mt-8 px-8 py-4 bg-bumble-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-colors"
            >
              Meet in person
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="w-full h-[350px] lg:h-[450px] rounded-3xl overflow-hidden bg-teal-100">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-teal-600/50">
                    <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <p className="font-medium text-lg">Event photo here</p>
                    <p className="text-sm mt-2">People at tennis court / social event</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
