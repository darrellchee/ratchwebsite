"use client";

import { motion } from "framer-motion";

const products = [
  {
    name: "Ratch Friends",
    description: "Whether you're new to making friends or ready to expand your circle, Ratch Friends helps you build meaningful friendships safely and confidently.",
    cta: "Find your friends",
    bgStyle: { backgroundColor: '#FFC629' },
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
  },
  {
    name: "BFF",
    description: "Whether you've moved to a new city or just want to expand your circle, BFF makes it easy to meet like-minded people who fit your vibe.",
    cta: "Find your people",
    bgStyle: { backgroundColor: '#FFC629' },
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58A2.01 2.01 0 000 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85A6.95 6.95 0 0020 14c-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
      </svg>
    ),
  },
];

export default function Products() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl p-8 lg:p-10"
              style={product.bgStyle}
            >
              {/* App Preview Placeholder */}
              <div className="mb-8">
                <div className="flex gap-4 justify-center">
                  {/* Phone mockups */}
                  <div className="w-32 h-56 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                      </svg>
                      <p className="text-xs">App Screen</p>
                    </div>
                  </div>
                  <div className="w-28 h-48 bg-white rounded-2xl shadow-lg flex items-center justify-center transform translate-y-4">
                    <div className="text-center text-gray-400">
                      <svg className="w-10 h-10 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                      </svg>
                      <p className="text-xs">App Screen</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: '#1A1A1A' }}>
                {product.name}
              </h3>
              <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(26, 26, 26, 0.8)' }}>
                {product.description}
              </p>
              <a
                href={`#${product.name.toLowerCase().replace(' ', '-')}`}
                className="inline-block mt-6 font-medium text-lg underline underline-offset-4 hover:no-underline transition-all"
                style={{ color: '#1A1A1A' }}
              >
                {product.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
