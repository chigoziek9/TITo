import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Target,
  Eye,
  Shield,
  Award,
  Users,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Globe,
  Handshake,
  Building,
  Package,
  Home,
  Zap,
  Palette,
  ShoppingCart,
  FileCheck,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router";


const coreValues = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Honour all commitments to our customers, employees, community and shareholders while conducting business with unwavering high standards of honesty, trust, professionalism and ethical behavior.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "Put the interests of our customers first and be dedicated to providing an individualized business experience that assures customer satisfaction and earns their unwavering loyalty.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Work as one cohesive team from the smallest unit to the Board of directors while developing and retaining leaders who continually raise the bar, provide direction, remove barriers and empower people to successfully achieve goals.",
  },
  {
    icon: TrendingUp,
    title: "Growth and Profitability",
    description:
      "Dedicated to continuous innovation and pursuit of new ideas and opportunities to accelerate profitable growth. We deliver value in all we do to assure consistently high returns to our shareholders.",
  },
  {
    icon: AlertTriangle,
    title: "Safety",
    description:
      "We work hard to ensure that safety is the key mind-set established before every operation. It is a culture that is transmitted from top to bottom as a lifestyle in order to ensure the wellbeing of our employees, partners, clients, communities and varying stakeholders.",
  },
  {
    icon: CheckCircle,
    title: "Quality Service Delivery",
    description:
      "Being the core expectation of our clients, our operations are in accordance with international standards meeting or exceeding their expectations. We are inspired to do it better.",
  },
];

const objectives = [
  {
    icon: Building,
    text: "To supply high-quality home and office furniture for residential and commercial use.",
  },
  {
    icon: Zap,
    text: "To provide reliable electronic appliances and equipment to households and organizations.",
  },
  {
    icon: Palette,
    text: "To apply interior decoration settings to homes and offices.",
  },
  {
    icon: ShoppingCart,
    text: "To operate efficient wholesale and retail distribution networks.",
  },
  {
    icon: FileCheck,
    text: "To undertake procurement and supply contracts for private and government institutions.",
  },
  {
    icon: Home,
    text: "To provide modern workspace and home furnishing solutions.",
  },
  {
    icon: Award,
    text: "To maintain competitive pricing while ensuring quality service delivery.",
  },
  {
    icon: Handshake,
    text: "To build long-term relationships with customers and business partners.",
  },
];

export function About() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A0F1E] to-[#1A2332] text-white py-20 lg:py-32 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#D4932D] rounded-full blur-3xl"
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
              ABOUT US
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Excellence in Every Detail
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
              A dynamic and customer-focused enterprise specializing in high-quality
              furniture, electronics, interior decoration, and general contracting services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story - Full Background */}
      <section className="bg-white py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-[#D4932D] mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                    alt="Modern office space"
                    className="w-full h-auto"
                  />
                </div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 bg-[#D4932D] text-white p-6 shadow-xl"
                >
                  <div className="text-4xl font-bold">2024</div>
                  <div className="text-sm">Established</div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <div className="bg-[#D4932D] text-white px-4 py-2 inline-block text-sm font-medium">
                  FOUNDED 2024
                </div>
                <p className="text-gray-700 leading-relaxed">
                  TITO NIG LTD was founded in 2024 as a private shareholding company,
                  specialized in supply and installation of different types of office
                  furniture. Despite the fact that the company has been founded recently,
                  it has achieved a tangible record in this field, and was able to build
                  bridges of confidence versus different private sector companies, and
                  local investment entities around Nigeria.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This is due to the institutional values that the company was keen to
                  maintain, of which constitutes as important factors for its existing
                  presence in the local market. On the other hand, the high quality of its
                  products as well as the competitive prices represent an added value to
                  the company.
                </p>
              </motion.div>
            </div>

            {/* Additional Story Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-gray-700 leading-relaxed"
            >
              <p>
                Through this approach, the company was able to win significant projects
                referred to the most sizable investment firms in different parts of Nigeria.
                The company has achieved a unique distinction in its products, being
                assembled locally by high professional technicians and expertise, while the
                relevant products' components and raw materials are being imported from
                reputable international European firms.
              </p>
              <p>
                Thus, TITO NIG LTD proved to be compatible to those of international
                products, in terms of quality, specifications and modern designs. While TITO
                NIG LTD emphasizes the significance of promoting the local products, the
                company was honored to build a network of business and cooperative relations
                with its local clients, an important factor behind its successful, durable,
                and sustainable existence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-gray-50 py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white p-8 lg:p-12 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#D4932D]/10 rounded-full flex items-center justify-center">
                  <Building className="w-6 h-6 text-[#D4932D]" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold">What We Do</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  TITO NIG LTD is a dynamic and customer-focused enterprise specializing in
                  the supply of high-quality home and office furniture, consumer
                  electronics, wholesale and retail trading, interior decoration and general
                  contracting services. The company is committed to providing durable
                  products and reliable services that meet the evolving needs of households,
                  corporate organizations, and government institutions.
                </p>
                <p>
                  The company operates with a strong dedication to quality, affordability,
                  and customer satisfaction, ensuring that clients receive the best value
                  for their investment. With a professional team and reliable supplier
                  network, the company strives to deliver modern solutions that enhance
                  comfort, functionality, and productivity in both residential and
                  commercial environments.
                </p>
                <p>
                  Furniture, interior decoration and electronics retail businesses commonly
                  provide integrated lifestyle and household solutions through product
                  sales, supply chains, and service support for homes and offices.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Mission & Vision
            </h2>
            <div className="w-20 h-1 bg-[#D4932D] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-white to-gray-50 p-8 lg:p-12 rounded-lg shadow-xl hover:shadow-2xl transition-shadow border-2 border-gray-100"
            >
              <div className="w-16 h-16 bg-[#D4932D] rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a leading provider of quality products and reliable services that
                enhance comfort, functionality, and productivity for every professional
                workspace we touch.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#0A0F1E] to-[#1A2332] text-white p-8 lg:p-12 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="w-16 h-16 bg-[#D4932D] rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                Setting a precedence in Nigerian interior solutions by maintaining European
                engineering with local excellence and availability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-[#D4932D] mx-auto mb-6" />
            <p className="text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every
              relationship we build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="w-14 h-14 bg-[#D4932D]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#D4932D] transition-colors">
                  <value.icon className="w-7 h-7 text-[#D4932D] group-hover:text-white transition-colors" />
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

      {/* Company Objectives */}
      <section className="bg-white py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Company Objectives
            </h2>
            <div className="w-20 h-1 bg-[#D4932D] mx-auto mb-6" />
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our key objectives that drive us toward excellence and customer satisfaction
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4932D] transition-colors shadow-sm">
                  <objective.icon className="w-6 h-6 text-[#D4932D] group-hover:text-white transition-colors" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed pt-2">
                  {objective.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-[#0A0F1E] to-[#1A2332] text-white py-12 lg:py-20 relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#D4932D] opacity-10 rounded-full blur-3xl"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Globe, number: "100%", label: "Client Satisfaction" },
              { icon: Building, number: "50+", label: "Projects Completed" },
              { icon: Users, number: "30+", label: "Corporate Clients" },
              { icon: Lightbulb, number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#D4932D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-[#D4932D]" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-[#D4932D] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Let's create exceptional workspaces together. Contact us today to discuss
              your project and experience the TITO difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-[#D4932D] hover:bg-[#C2841F] text-white px-8 py-4 font-medium transition-colors"
              >
                Get In Touch
              </Link>
              <Link
                to="/services"
                className="inline-block border-2 border-[#D4932D] hover:bg-[#D4932D] hover:text-white text-[#D4932D] px-8 py-4 font-medium transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}