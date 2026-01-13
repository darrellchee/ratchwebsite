"use client";

import { motion } from "framer-motion";

export default function MemberCircle() {
  return (
    <section className="py-16 lg:py-24 bg-bumble-light-gray">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-64 lg:h-auto min-h-[400px] bg-amber-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-amber-600/50">
                  <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                  <p className="font-medium">Member photo here</p>
                </div>
              </div>
              
              {/* Member Circle Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-6 left-6"
              >
                <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#FFC629' }}>
                  <div className="text-center">
                    <div className="w-8 h-8 mx-auto mb-1 bg-bumble-black rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5" fill="#FFC629" viewBox="0 0 24 24">
                        <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"/>
                      </svg>
                    </div>
                    <p className="text-[8px] font-bold uppercase tracking-wide" style={{ color: '#1A1A1A' }}>Member Circle</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bumble-black">
                  Share your ideas
                </h2>
                <p className="mt-6 text-bumble-gray text-lg leading-relaxed">
                  Help shape the future of Bumble by joining our Member Circle. This select community of Members shares ideas directly with our team through chats, discussions, and product tests.
                </p>
                <p className="mt-4 text-bumble-gray text-lg leading-relaxed">
                  Participants get early access to new features, sneak peeks at upcoming campaigns, and the chance to help make Bumble even better for everyone.
                </p>
                <motion.a
                  href="#signup"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block mt-8 px-8 py-4 bg-bumble-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-colors"
                >
                  Sign up
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
