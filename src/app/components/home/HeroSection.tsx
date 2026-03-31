import { Link } from "react-router";
import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#0A0F1E] via-[#1A2332] to-[#0A0F1E] text-white overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#D4932D] rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4932D] rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block bg-[#D4932D] text-white px-4 py-1.5 text-xs sm:text-sm font-medium"
            >
              ESTABLISHED 2024
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Redefining the{" "}
              <span className="text-[#D4932D]">Workspace</span> Experience.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4 text-gray-300 text-sm sm:text-base"
            >
              <p>
                Founded in 2024, as a private shareholding company, TITO NIG LTD
                emerged with a clear focus: specializing in the premium supply and
                installation of sophisticated office furniture.
              </p>
              <p>
                In our short yet impactful journey, we have built a tangible record of
                excellence among the private sector and major investment firms across
                Nigeria, proving that craftsmanship and reliability are the
                cornerstones of modern corporate furnishing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="inline-block bg-[#D4932D] hover:bg-[#C2841F] text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium transition-colors text-center"
              >
                Get a Quote
              </Link>
              <Link
                to="/services"
                className="inline-block border-2 border-white hover:bg-white hover:text-[#0A0F1E] text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium transition-colors text-center"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Product Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Product 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="relative overflow-hidden rounded-lg shadow-2xl group"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80"
                  alt="Office furniture"
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-white text-sm font-medium">Office Furniture</span>
                </div>
              </motion.div>

              {/* Product 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="relative overflow-hidden rounded-lg shadow-2xl group"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80"
                  alt="Executive desks"
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-white text-sm font-medium">Executive Desks</span>
                </div>
              </motion.div>

              {/* Product 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="relative overflow-hidden rounded-lg shadow-2xl group"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&q=80"
                  alt="Office chairs"
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-white text-sm font-medium">Office Chairs</span>
                </div>
              </motion.div>

              {/* Product 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="relative overflow-hidden rounded-lg shadow-2xl group"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80"
                  alt="Conference tables"
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-white text-sm font-medium">Conference Tables</span>
                </div>
              </motion.div>
            </div>

            {/* Stats Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-[#D4932D] text-white p-6 shadow-2xl z-10"
            >
              <div className="text-3xl sm:text-4xl font-bold">100%</div>
              <div className="text-xs sm:text-sm">Client Satisfaction</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}