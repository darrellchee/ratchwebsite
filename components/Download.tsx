"use client";

import { motion } from "framer-motion";

export default function Download() {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: '#FFC629' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* QR Code Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bumble-black leading-tight">
              Get the app
            </h2>
            <p className="mt-4 text-lg text-bumble-black/80">
              Just scan the QR code to get started.
            </p>
            
            {/* QR Code */}
            <div className="mt-8 inline-block">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                  {/* QR Code Placeholder */}
                  <div className="text-center text-gray-400">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 3h6v6H3V3zm2 2v2h2V5H5zm8-2h6v6h-6V3zm2 2v2h2V5h-2zM3 13h6v6H3v-6zm2 2v2h2v-2H5zm13-2h1v1h-1v-1zm-3 0h1v1h-1v-1zm5 0h1v1h-1v-1zm-5 2h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm-4 2h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm-2 2h1v1h-1v-1zm2 0h1v1h-1v-1z"/>
                    </svg>
                    <p className="text-xs">QR Code</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-bumble-black text-center font-medium">
                  Scan the QR code to get the Ratch app
                </p>
              </div>
            </div>

            <motion.a
              href="#download"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block mt-8 ml-4 px-8 py-4 bg-bumble-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-colors"
            >
              Download now
            </motion.a>
          </motion.div>

          {/* Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center items-end gap-4"
          >
            {/* Phone 1 */}
            <div className="w-36 md:w-44 lg:w-52 h-64 md:h-80 lg:h-96 bg-white rounded-3xl shadow-2xl overflow-hidden transform -rotate-6">
              <div className="w-full h-full bg-sky-100 flex items-center justify-center">
                <div className="text-center text-sky-600/50">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                  </svg>
                  <p className="text-xs font-medium">App Screen</p>
                </div>
              </div>
            </div>

            {/* Phone 2 (Center, larger) */}
            <div className="w-40 md:w-48 lg:w-56 h-72 md:h-88 lg:h-[420px] bg-white rounded-3xl shadow-2xl overflow-hidden z-10">
              <div className="w-full h-full bg-rose-100 flex items-center justify-center">
                <div className="text-center text-rose-600/50">
                  <svg className="w-14 h-14 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                  </svg>
                  <p className="text-sm font-medium">App Screen</p>
                </div>
              </div>
            </div>

            {/* Phone 3 */}
            <div className="w-36 md:w-44 lg:w-52 h-64 md:h-80 lg:h-96 bg-white rounded-3xl shadow-2xl overflow-hidden transform rotate-6">
              <div className="w-full h-full bg-amber-100 flex items-center justify-center">
                <div className="text-center text-amber-600/50">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                  </svg>
                  <p className="text-xs font-medium">App Screen</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
