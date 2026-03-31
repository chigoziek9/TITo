import { motion } from "motion/react";
import { Target, Eye } from "lucide-react";

export function MissionVisionSection() {
  return (
    <section className="bg-gray-50 py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white text-gray-800 p-8 lg:p-12 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <Target className="w-10 h-10 text-[#D4932D] mb-4" />
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              To be a leading provider of quality products and reliable services that
              enhance comfort, functionality, and productivity for every professional
              workspace we touch.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0A0F1E] text-white p-8 lg:p-12 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <Eye className="w-10 h-10 text-[#D4932D] mb-4" />
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Setting a precedence in Nigerian interior solutions by maintaining
              European engineering with local excellence and availability.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}