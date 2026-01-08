import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const MobileCTA = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
    >
      <div className="bg-background/95 backdrop-blur-md border-t border-border/50 p-3 safe-area-bottom">
        <div className="flex gap-3">
          <a
            href="tel:+919876543210"
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold shadow-soft active:scale-[0.98] transition-transform"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-xl font-semibold shadow-soft active:scale-[0.98] transition-transform"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileCTA;
