import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Building, Users, Clock, MapPin } from "lucide-react";
import { Link } from "react-router";

const categories = ["All", "Office", "Hotel", "Residential", "Corporate"];

const projects = [
  {
    title: "Lagos Corporate Hub",
    category: "Office",
    location: "Victoria Island, Lagos",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    description:
      "Complete office fit-out for a leading fintech company. 500+ workstations with premium ergonomic furniture.",
  },
  {
    title: "Executive Office Suite",
    category: "Corporate",
    location: "Ikoyi, Lagos",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    description:
      "Luxury executive office renovation featuring custom-made furniture and sophisticated lighting.",
  },
  {
    title: "Luxury Hotel Renovation",
    category: "Hotel",
    location: "Lekki, Lagos",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    description:
      "Complete furniture supply and installation for 50-room boutique hotel including lobby and restaurant.",
  },
  {
    title: "Modern Workspace Design",
    category: "Office",
    location: "Ikeja, Lagos",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    description:
      "Contemporary open-plan office design with collaborative spaces and private meeting rooms.",
  },
  {
    title: "Residential Interior",
    category: "Residential",
    location: "Banana Island, Lagos",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    description:
      "High-end residential project featuring custom furniture and complete interior decoration.",
  },
  {
    title: "Tech Startup Office",
    category: "Office",
    location: "Yaba, Lagos",
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80",
    description:
      "Creative workspace for tech startup with flexible furniture and vibrant design elements.",
  },
];

const stats = [
  { icon: Building, number: "50+", label: "Projects Completed" },
  { icon: Users, number: "100+", label: "Happy Clients" },
  { icon: Clock, number: "98%", label: "On-Time Delivery" },
  { icon: MapPin, number: "10+", label: "Cities Served" },
];

export function Projects() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A0F1E] to-[#1A2332] text-white py-20 lg:py-32 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-[#D4932D] opacity-10 rounded-full blur-3xl"
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
              OUR PROJECTS
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Delivering <span className="text-[#D4932D]">Excellence</span>,
              Exceeding Expectations
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
              Founded in 2024, TITO NIG LTD provides sophisticated bespoke
              solutions. We curate high-quality furniture and deliver unmatched
              experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 lg:py-16 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#D4932D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-[#D4932D]" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-[#D4932D] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-gray-50 py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Work & Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              From premium workstations to executive offices, we've equipped
              Nigeria's leading businesses with style and functionality.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 bg-white hover:bg-[#D4932D] hover:text-white text-gray-700 rounded-full transition-colors text-sm font-medium border border-gray-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#D4932D] text-white px-3 py-1 text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#D4932D] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-white py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              WHO WE SERVE
            </h2>
            <div className="w-20 h-1 bg-[#D4932D] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: Building, label: "Government" },
              { icon: Building, label: "Corporate" },
              { icon: Building, label: "Hotels" },
              { icon: Building, label: "Individuals" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4932D] transition-colors">
                  <item.icon className="w-8 h-8 text-[#D4932D] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-lg">{item.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#0A0F1E] text-white py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 bg-[#D4932D] rounded-full border-2 border-[#0A0F1E] flex items-center justify-center"
                  >
                    <Users className="w-6 h-6 text-white" />
                  </div>
                ))}
              </div>
              <span className="bg-[#D4932D] text-white px-3 py-1 text-sm font-medium">
                +50
              </span>
            </div>
            <blockquote className="text-xl sm:text-2xl font-medium italic mb-6">
              "The team at TITO NIG LTD transformed our workspace into a
              functional masterpiece. Their attention to detail is truly
              unparalleled in Lagos."
            </blockquote>
            <div className="text-gray-400">
              — Corporate Client, Victoria Island
            </div>
          </motion.div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Let's discuss how we can bring your vision to life with our expert
              team and quality products.
            </p>
           
            <Link
              to="/contact"
              className="inline-block bg-[#D4932D] hover:bg-[#C2841F] text-white px-8 py-4 font-medium transition-colors"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
