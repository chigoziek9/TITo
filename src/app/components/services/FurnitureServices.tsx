import { motion } from "motion/react";
import { Building, Home, GraduationCap, Sofa } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const furnitureServices = [
  {
    icon: Building,
    title: "Office Furniture",
    description:
      "Complete range of professional office furniture designed to enhance productivity and create impressive corporate environments.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    items: [
      "Executive desks",
      "Office chairs",
      "Workstations",
      "Conference tables",
      "Office cabinets",
      "Reception furniture",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&q=80",
    ],
    benefits: [
      "Ergonomic designs for comfort and productivity",
      "Durable materials for long-lasting use",
      "Modern aesthetics that enhance office appeal",
      "Customizable configurations",
    ],
  },
  {
    icon: Home,
    title: "Home Furniture",
    description:
      "Elegant and comfortable furniture solutions for every room in your home, combining style with functionality.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    items: [
      "Sofa sets",
      "Beds and wardrobes",
      "Dining tables and chairs",
      "Living room furniture",
      "Storage furniture",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&q=80",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80",
    ],
    benefits: [
      "Stylish designs that match any home décor",
      "High-quality materials for durability",
      "Comfortable and functional pieces",
      "Wide range of styles and finishes",
    ],
  },
  {
    icon: GraduationCap,
    title: "Institutional Furniture",
    description:
      "Specialized furniture for educational institutions, hotels, healthcare facilities, and public spaces.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    items: [
      "School desks and chairs",
      "Library furniture",
      "Hotel furniture",
      "Waiting room furniture",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
    ],
    benefits: [
      "Durable construction for high-traffic areas",
      "Easy to maintain and clean",
      "Safety-compliant designs",
      "Cost-effective bulk solutions",
    ],
  },
];

interface FurnitureServicesProps {
  onServiceClick: (service: any) => void;
}

export function FurnitureServices({ onServiceClick }: FurnitureServicesProps) {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Sofa className="w-8 h-8 text-[#D4932D]" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Furniture Supply
            </h2>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We supply a wide range of furniture designed to enhance comfort,
            functionality, and aesthetics for every space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {furnitureServices.map((service, index) => (
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
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
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
  );
}
