import { MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-3 z-40">
      <motion.a
        href="https://wa.me/2348161743711"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D4932D] hover:bg-[#C2841F] text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.a>

      <motion.a
        href="tel:+2348161743711"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D4932D] hover:bg-[#C2841F] text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
        aria-label="Call Now"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.a>
    </div>
  );
}
