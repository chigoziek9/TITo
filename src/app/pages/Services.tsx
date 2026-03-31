import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { ServiceHero } from "../components/services/ServiceHero";
import { FurnitureServices } from "../components/services/FurnitureServices";
import { InteriorDecorationServices } from "../components/services/InteriorDecorationServices";
import { ElectronicsServices } from "../components/services/ElectronicsServices";
import { GeneralContractingServices } from "../components/services/GeneralContractingServices";
import { ServiceModal } from "../components/services/ServiceModal";

export function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <div className="pt-16 sm:pt-20">
      <ServiceHero />
      <FurnitureServices onServiceClick={setSelectedService} />
      <InteriorDecorationServices onServiceClick={setSelectedService} />
      <ElectronicsServices onServiceClick={setSelectedService} />
      <GeneralContractingServices onServiceClick={setSelectedService} />

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
