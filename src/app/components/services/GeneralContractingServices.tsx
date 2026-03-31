import { motion } from "motion/react";
import { Hammer, Package, FileCheck, Wrench, Building, Truck } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Link } from "react-router";

const contractingServices = [
  {
    icon: Package,
    title: "Procurement & Supply Contracts",
    description:
      "Comprehensive procurement and supply services for furniture, equipment, and materials for various projects.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    items: [
      "Procurement and supply contracts",
      "Furniture furnishing contracts",
      "Equipment supply contracts",
      "Institutional equipment supply",
      "Office setup materials",
      "Commercial furnishing supplies",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
      "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=600&q=80",
    ],
    benefits: [
      "Reliable supply chain management",
      "Quality assurance on all products",
      "Timely delivery schedules",
      "Competitive pricing",
    ],
  },
  {
    icon: Wrench,
    title: "Installation Services",
    description:
      "Professional installation services for furniture, equipment, and interior fixtures with expert technicians.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    items: [
      "Furniture installation and assembly",
      "Office equipment setup",
      "Interior fixture installation",
      "Custom furniture fitting",
      "Electronic equipment installation",
      "Post-installation support",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=600&q=80",
      "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=600&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    ],
    benefits: [
      "Expert installation teams",
      "Professional uniformed technicians",
      "Quality workmanship guaranteed",
      "Safety-compliant procedures",
    ],
  },
  {
    icon: FileCheck,
    title: "Interior Furnishing Projects",
    description:
      "Complete interior furnishing and space transformation projects for residential and commercial properties.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    items: [
      "Complete interior furnishing projects",
      "Space planning and design",
      "Furniture selection and placement",
      "Decorative element installation",
      "Project management",
      "Quality control and inspection",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
    ],
    benefits: [
      "End-to-end project management",
      "Professional design consultation",
      "Timely project completion",
      "Budget-conscious solutions",
    ],
  },
  {
    icon: Building,
    title: "Corporate Procurement Support",
    description:
      "Dedicated procurement support for corporate organizations, government institutions, and large-scale projects.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    items: [
      "Corporate bulk procurement",
      "Government contract fulfillment",
      "Large-scale furniture supply",
      "Equipment leasing options",
      "Maintenance and support packages",
      "Flexible payment terms",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    ],
    benefits: [
      "Volume discount pricing",
      "Dedicated account management",
      "Priority service and support",
      "Custom contract terms",
    ],
  },
  {
    icon: Truck,
    title: "Wholesale & Retail Distribution",
    description:
      "Efficient distribution network for wholesale and retail supply of furniture and electronics.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    items: [
      "Wholesale supply to retailers",
      "Retail sales to individual customers",
      "Distribution to various locations",
      "Bulk order processing",
      "Direct sales support",
      "Inventory management",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
      "https://images.unsplash.com/photo-1615799998603-7c6270a45196?w=600&q=80",
    ],
    benefits: [
      "Wide distribution network",
      "Flexible order quantities",
      "Reliable delivery service",
      "Competitive wholesale rates",
    ],
  },
  {
    icon: Hammer,
    title: "Renovation & Space Makeover",
    description:
      "Complete renovation services to upgrade outdated interiors and transform them into modern environments.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    items: [
      "Interior remodeling",
      "Wall reconstruction and redesign",
      "Replacement of old furniture and fittings",
      "Lighting upgrades",
      "Flooring replacement",
      "Space reconfiguration and layout improvement",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
    ],
    benefits: [
      "Complete space transformation",
      "Modern design implementation",
      "Minimal disruption during work",
      "Quality finishing guaranteed",
    ],
  },
];

interface GeneralContractingServicesProps {
  onServiceClick: (service: any) => void;
}

export function GeneralContractingServices({
  onServiceClick,
}: GeneralContractingServicesProps) {
  return (
    <>
      <section className="bg-gray-50 py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Hammer className="w-8 h-8 text-[#D4932D]" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                General Contracting Services
              </h2>
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive contracting services including procurement, installation,
              project management, and efficient delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contractingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => onServiceClick(service)}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#D4932D] rounded-full flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center gap-2 text-[#D4932D] text-sm font-medium group-hover:gap-3 transition-all">
                    <span>View Details</span>
                    <span>→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0A0F1E] to-[#1A2332] text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let's discuss your project requirements and create a customized solution
              that exceeds your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-[#D4932D] hover:bg-[#C2841F] text-white px-8 py-4 font-medium transition-colors rounded-lg"
              >
                Request a Free Quote
              </Link>
              <Link
                to="/projects"
                className="inline-block bg-white hover:bg-gray-100 text-[#0A0F1E] px-8 py-4 font-medium transition-colors rounded-lg"
              >
                View Our Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
