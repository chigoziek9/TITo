import { motion } from "motion/react";
import {
  Tv,
  Refrigerator,
  Laptop,
  Wind,
  Microwave,
  WashingMachine,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const electronicsServices = [
  {
    icon: Tv,
    title: "Consumer Electronics",
    description:
      "Modern consumer electronics designed for entertainment and everyday use in homes and offices.",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
    items: [
      "Smart televisions (LED, OLED, QLED)",
      "Digital televisions",
      "Home theatre systems",
      "Bluetooth speakers and sound systems",
      "Satellite receivers and decoders",
      "Media streaming devices",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&q=80",
    ],
    benefits: [
      "High-quality audio and visual experiences",
      "Latest technology and features",
      "Reliable brands and warranties",
      "Professional installation support",
    ],
  },
  {
    icon: Microwave,
    title: "Kitchen Appliances",
    description:
      "Essential household appliances that make food preparation faster, easier, and more efficient.",
    image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=800&q=80",
    items: [
      "Microwave ovens",
      "Electric cookers and gas cookers",
      "Blenders and food processors",
      "Electric kettles",
      "Coffee makers",
      "Toasters",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&q=80",
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&q=80",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&q=80",
    ],
    benefits: [
      "Time-saving kitchen solutions",
      "Energy-efficient models",
      "Easy to use and maintain",
      "Durable construction",
    ],
  },
  {
    icon: Refrigerator,
    title: "Cooling Appliances",
    description:
      "Reliable cooling equipment for food preservation and comfortable indoor environments.",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80",
    items: [
      "Refrigerators",
      "Deep freezers",
      "Beverage coolers",
      "Air conditioners (split units and standing units)",
      "Air cooling systems",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80",
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&q=80",
      "https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?w=600&q=80",
    ],
    benefits: [
      "Optimal food preservation",
      "Energy-efficient cooling",
      "Quiet operation",
      "Multiple size options",
    ],
  },
  {
    icon: WashingMachine,
    title: "Laundry Appliances",
    description:
      "Modern laundry equipment designed for convenience and efficiency in fabric care.",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&q=80",
    items: [
      "Automatic washing machines",
      "Semi-automatic washing machines",
      "Clothes dryers",
      "Steam irons",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1626806707657-5942988ab2b3?w=600&q=80",
      "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=600&q=80",
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80",
    ],
    benefits: [
      "Simplified laundry processes",
      "Effective cleaning performance",
      "Multiple wash programs",
      "Gentle on fabrics",
    ],
  },
  {
    icon: Laptop,
    title: "Office Electronics",
    description:
      "Electronic equipment that supports office operations and enhances productivity.",
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80",
    items: [
      "Desktop computers",
      "Laptop computers",
      "Printers and scanners",
      "Photocopiers",
      "Projectors and presentation equipment",
      "UPS and power backup systems",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&q=80",
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&q=80",
      "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?w=600&q=80",
    ],
    benefits: [
      "Enhanced office productivity",
      "Reliable performance",
      "Professional-grade equipment",
      "Technical support available",
    ],
  },
  {
    icon: Wind,
    title: "Small Household Electronics",
    description:
      "Variety of small electrical appliances used daily for comfort and convenience.",
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=800&q=80",
    items: [
      "Electric fans",
      "Vacuum cleaners",
      "Water dispensers",
      "Humidifiers",
      "Electric heaters",
      "Hair dryers and grooming appliances",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&q=80",
      "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=600&q=80",
      "https://images.unsplash.com/photo-1600899662881-11071d711d06?w=600&q=80",
    ],
    benefits: [
      "Improved comfort and convenience",
      "Energy-efficient designs",
      "Compact and portable",
      "Easy to operate and maintain",
    ],
  },
];

interface ElectronicsServicesProps {
  onServiceClick: (service: any) => void;
}

export function ElectronicsServices({ onServiceClick }: ElectronicsServicesProps) {
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
            <Tv className="w-8 h-8 text-[#D4932D]" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Electronics & Appliances
            </h2>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Modern electronic appliances and equipment suitable for homes, offices, and
            institutions from reputable manufacturers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {electronicsServices.map((service, index) => (
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
  );
}
