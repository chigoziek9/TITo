import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function LeadershipSection() {
  return (
    <section className="bg-gray-50 py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                alt="Managing Director"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="bg-[#D4932D] text-white px-3 py-1 text-xs font-medium inline-block mb-2">
                  OUR LEADER
                </div>
                <h3 className="text-white text-xl sm:text-2xl font-bold">
                  Ebariary Mohamed Elsayed
                </h3>
                <p className="text-gray-200 text-sm">Managing Director / CEO</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Visionary Leadership
              </h2>
              <div className="w-20 h-1 bg-[#D4932D] mb-6" />
            </div>

            <div className="border-l-4 border-[#D4932D] pl-6 py-2">
              <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">
                "At TITO NIG LTD, we aren't just selling desks and chairs. We are
                building the infrastructure where Nigeria's next big ideas will be
                born."
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-lg mb-2">Managing Director / CEO</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  With a strategic vision rooted in Egyptian's Minimalist Elegance,
                  TITO NIG LTD bridges African business culture between European design
                  standards and the West African business landscape, ensuring every
                  project receives world-class artisanal with localized support.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
