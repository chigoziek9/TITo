import { motion } from "motion/react";
import {
  Palette,
  Home,
  Building,
  Hotel,
  ShoppingBag,
  Maximize,
  Frame,
  Lightbulb,
  Sofa as SofaIcon,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const interiorServices = [
  {
    icon: Home,
    title: "Living Room Decoration",
    description:
      "Transform your living room into a welcoming and stylish environment where families gather and guests are entertained.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    items: [
      "Luxury sofa arrangement and furniture selection",
      "Decorative wall panels and feature walls",
      "Television console and entertainment unit design",
      "Elegant curtain and drapery installation",
      "Decorative lighting and chandeliers",
      "Center tables and accent furniture placement",
      "Rug and carpet selection",
      "Wall art and decorative accessories",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&q=80",
    ],
    benefits: [
      "Perfect balance of comfort and sophistication",
      "Personalized designs reflecting your style",
      "Professional color coordination",
      "High-quality finishing materials",
    ],
  },
  {
    icon: Home,
    title: "Bedroom Interior Styling",
    description:
      "Create peaceful and elegant bedroom environments that enhance rest and relaxation with luxury and comfort.",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    items: [
      "Bed frame and mattress positioning",
      "Bedside table and lamp arrangement",
      "Wardrobe design and installation",
      "Decorative wall finishes and wallpaper",
      "Window treatments and curtains",
      "Ambient and mood lighting design",
      "Accent furniture such as lounge chairs and benches",
      "Bedroom accessories and decorative elements",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=600&q=80",
    ],
    benefits: [
      "Luxurious and cozy atmosphere",
      "Optimized for rest and relaxation",
      "Personalized to your preferences",
      "Quality materials and craftsmanship",
    ],
  },
  {
    icon: SofaIcon,
    title: "Dining Room Decoration",
    description:
      "Design dining spaces that create warm and inviting atmospheres where families and guests gather to share meals.",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80",
    items: [
      "Dining table and chair selection",
      "Decorative lighting and chandeliers",
      "Wall décor and artwork",
      "Buffet cabinets and storage units",
      "Centerpiece decoration",
      "Carpet and rug placement",
      "Dining space layout planning",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1617098900591-3f90928e8c54?w=600&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&q=80",
    ],
    benefits: [
      "Elegant and functional dining spaces",
      "Perfect lighting for dining ambiance",
      "Comfortable seating arrangements",
      "Stylish storage solutions",
    ],
  },
  {
    icon: Palette,
    title: "Kitchen Interior Decoration",
    description:
      "Enhance kitchen spaces with functional and aesthetic interior design elements for better workflow and style.",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    items: [
      "Kitchen cabinet design concepts",
      "Countertop styling and finishing ideas",
      "Lighting arrangement for cooking areas",
      "Kitchen storage solutions",
      "Decorative wall finishes and backsplashes",
      "Space optimization for better movement and workflow",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600&q=80",
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    ],
    benefits: [
      "Improved kitchen functionality",
      "Modern and stylish designs",
      "Efficient storage solutions",
      "Easy to maintain finishes",
    ],
  },
  {
    icon: Building,
    title: "Office Interior Decoration",
    description:
      "Design modern office environments that promote productivity, organization, and professionalism.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    items: [
      "Office space planning and layout design",
      "Executive office decoration",
      "Reception and front desk design",
      "Conference and meeting room setup",
      "Workstation design and arrangement",
      "Office lighting solutions",
      "Decorative wall panels and branding elements",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
    ],
    benefits: [
      "Enhanced productivity and focus",
      "Professional brand representation",
      "Optimized space utilization",
      "Modern and impressive environments",
    ],
  },
  {
    icon: Hotel,
    title: "Hotel & Hospitality Decoration",
    description:
      "Create elegant hospitality environments that provide comfort and luxury for guests in hotels and resorts.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    items: [
      "Hotel room interior decoration",
      "Lobby and reception decoration",
      "Lounge and relaxation area design",
      "Restaurant and dining area styling",
      "Guest room furniture arrangement",
      "Lighting and ambiance enhancement",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=600&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    ],
    benefits: [
      "Luxurious guest experiences",
      "Memorable first impressions",
      "Comfortable and inviting spaces",
      "Brand identity integration",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Retail & Showroom Decoration",
    description:
      "Interior environments that attract customers and enhance the shopping experience in retail spaces.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    items: [
      "Retail space layout planning",
      "Display shelf and showcase design",
      "Product display arrangement",
      "Lighting for merchandise highlighting",
      "Store entrance decoration",
      "Branding and interior signage integration",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=80",
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80",
    ],
    benefits: [
      "Increased customer engagement",
      "Better product visibility",
      "Enhanced shopping experience",
      "Strong brand presence",
    ],
  },
  {
    icon: Maximize,
    title: "Curtains & Window Treatment",
    description:
      "High-quality window decoration solutions that enhance privacy, beauty, and lighting control.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    items: [
      "Custom luxury curtains and drapery",
      "Roller blinds installation",
      "Venetian blinds",
      "Roman blinds",
      "Vertical blinds",
      "Curtain rods, rails, and accessories",
      "Window styling consultation",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=600&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80",
    ],
    benefits: [
      "Perfect light control solutions",
      "Enhanced privacy and comfort",
      "Elegant fabric selections",
      "Custom fit for any window",
    ],
  },
  {
    icon: Frame,
    title: "Wall Decoration & Finishes",
    description:
      "Creative wall decoration solutions that add elegance and visual interest to interior spaces.",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80",
    items: [
      "Decorative wall panels",
      "Wallpaper installation",
      "Textured wall finishes",
      "3D wall panels",
      "Accent walls and feature walls",
      "Interior painting and color design",
      "Stone and marble wall finishing",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
    ],
    benefits: [
      "Unique and stylish wall treatments",
      "Durable and easy to maintain",
      "Wide variety of textures and colors",
      "Professional installation",
    ],
  },
  {
    icon: Lightbulb,
    title: "Ceiling Design & Lighting",
    description:
      "Ceiling design and decorative lighting that set the mood and atmosphere of interior spaces.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    items: [
      "POP ceiling designs",
      "Gypsum ceiling installations",
      "Decorative ceiling panels",
      "Suspended ceilings",
      "Multi-level ceiling designs",
      "LED lighting systems",
      "Decorative chandeliers",
      "Pendant lighting",
      "Recessed ceiling lights",
      "Ambient and accent lighting",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
      "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&q=80",
    ],
    benefits: [
      "Enhanced ambiance and mood",
      "Energy-efficient lighting solutions",
      "Modern and elegant designs",
      "Perfect lighting for any occasion",
    ],
  },
];

interface InteriorDecorationServicesProps {
  onServiceClick: (service: any) => void;
}

export function InteriorDecorationServices({
  onServiceClick,
}: InteriorDecorationServicesProps) {
  return (
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
            <Palette className="w-8 h-8 text-[#D4932D]" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Interior Decoration Services
            </h2>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive interior decoration and space transformation services designed
            to enhance functionality and aesthetic appeal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interiorServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
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
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
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
