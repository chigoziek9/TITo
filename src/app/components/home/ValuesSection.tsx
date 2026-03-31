import { motion } from "motion/react";
import {
  Shield,
  Award,
  Users,
  TrendingUp,
  AlertTriangle,
  Package,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Conducting our transaction with transparency and candor, striving to build long-term partnerships.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "Never cutting corners in the components we install. If it's TITO, it's reliable and complete.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Fostering a culture of collaboration between our international partners and local team members.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Profitability",
    description:
      "Building responsible business revenue in a stable and resilient manner for high dividends.",
  },
  {
    icon: AlertTriangle,
    title: "Safety",
    description:
      "Prioritizing our installation and delivery team for our installations teams and our clients' environment.",
  },
  {
    icon: Package,
    title: "Quality Service Delivery",
    description:
      "Believe in excellent and professionalism in daily exceeding expectations every single time.",
  },
];

export function ValuesSection() {
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
            The Values We Live By
          </h2>
          <div className="w-20 h-1 bg-[#D4932D] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-6 lg:p-8 rounded-lg border border-gray-200 hover:border-[#D4932D] hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#D4932D] transition-colors">
                <value.icon className="w-6 h-6 text-[#D4932D] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
