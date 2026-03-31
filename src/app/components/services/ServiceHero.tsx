import { motion } from "motion/react";

export function ServiceHero() {
  return (
    <section className="bg-gradient-to-br from-[#0A0F1E] via-[#1A2332] to-[#0A0F1E] text-white py-20 lg:py-32 relative overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#D4932D] opacity-5 rounded-full blur-3xl"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block bg-[#D4932D] text-white px-4 py-1.5 text-sm font-medium mb-6"
          >
            OUR SERVICES
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Comprehensive Solutions for{" "}
            <span className="text-[#D4932D]">Every Space</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            From premium furniture to complete interior decoration, electronics, and
            general contracting - we deliver excellence across all touchpoints.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
