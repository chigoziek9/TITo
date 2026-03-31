import { motion } from "motion/react";
import { X } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Link } from "react-router";


interface ServiceModalProps {
  service: any;
  onClose: () => void;
}

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg max-w-4xl w-full my-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>

        {/* Modal Content */}
        <div className="max-h-[90vh] overflow-y-auto">
          {/* Header Image */}
          {service.image && (
            <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-lg">
              <ImageWithFallback
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  {service.icon && (
                    <div className="w-12 h-12 bg-[#D4932D] rounded-full flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {service.title}
                  </h2>
                </div>
              </div>
            </div>
          )}

          {/* Content */}
          <div className="p-6 sm:p-8">
            {service.description && (
              <p className="text-gray-700 leading-relaxed mb-6">
                {service.description}
              </p>
            )}

            {/* Items List */}
            {service.items && service.items.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {service.itemsTitle || "What We Offer"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.items.map((item: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-[#D4932D] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Images */}
            {service.additionalImages && service.additionalImages.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Gallery</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {service.additionalImages.map((img: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      className="relative h-32 sm:h-40 overflow-hidden rounded-lg group"
                    >
                      <ImageWithFallback
                        src={img}
                        alt={`${service.title} ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            {service.benefits && service.benefits.length > 0 && (
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                <div className="space-y-3">
                  {service.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#D4932D] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Button */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="flex-1 bg-[#D4932D] hover:bg-[#C2841F] text-white px-6 py-3 text-center font-medium transition-colors rounded-lg"
              >
                Request a Quote
              </Link>
              <button
                onClick={onClose}
                className="flex-1 border-2 border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 font-medium transition-colors rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
