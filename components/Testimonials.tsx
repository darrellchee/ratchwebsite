"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Marketing Manager",
    avatar: "bg-rose-400",
    quote:
      "Finally an app that feels fair! The comparison system makes so much more sense than endless swiping. I actually feel like I'm making real choices.",
    rating: 5,
  },
  {
    name: "James T.",
    role: "Software Engineer",
    avatar: "bg-blue-400",
    quote:
      "The ELO system is genius. Knowing that my matches are based on mutual interest, not just who swipes the most, makes every connection feel more genuine.",
    rating: 5,
  },
  {
    name: "Emily R.",
    role: "Photographer",
    avatar: "bg-amber-400",
    quote:
      "Met my partner in just 2 weeks! The side-by-side comparisons helped me really think about what I wanted instead of mindlessly swiping right.",
    rating: 5,
  },
  {
    name: "Michael K.",
    role: "Entrepreneur",
    avatar: "bg-emerald-400",
    quote:
      "Way better than endless swiping. The stats feature helped me improve my profile, and the leaderboard keeps things fun and competitive.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
            What Our Users Say
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Real stories from people who found meaningful connections
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${testimonial.avatar} flex items-center justify-center text-white font-medium`}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

