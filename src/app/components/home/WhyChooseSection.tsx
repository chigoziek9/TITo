import { motion } from "motion/react";
import { Globe, Wrench, Clock } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    title: "International Components",
    description:
      "Our hardware and modular components ship directly from top-tier European firms, meeting rigorous safety standards.",
  },
  {
    icon: Wrench,
    title: "Professional Technicians",
    description:
      "Our assembly and installation teams are carefully trained, professionally uniformed and monitored for your guarantee.",
  },
  {
    icon: Clock,
    title: "Durable Longevity",
    description:
      "We provide durable products built to withstand the rigors of 24/7 corporate operations. Most of our pieces are built for years.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why Industry Leaders Choose TITO
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center space-y-4 p-6 lg:p-8 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#D4932D] transition-colors"
              >
                <reason.icon className="w-8 h-8 text-[#D4932D] group-hover:text-white transition-colors" />
              </motion.div>
              <h3 className="text-xl font-bold">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 lg:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#0A0F1E] to-[#1A2332] text-white rounded-lg p-8 lg:p-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Join the ranks of Lagos's most progressive businesses and offices. Let's
              build your vision together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-[#D4932D] hover:bg-[#C2841F] text-white px-8 py-3 font-medium transition-colors"
              >
                Request a Free Quote
              </a>
              <a
                href="/projects"
                className="inline-block bg-white hover:bg-gray-100 text-black px-8 py-3 font-medium transition-colors"
              >
                View Our Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
