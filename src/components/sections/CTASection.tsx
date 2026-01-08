import { motion } from "framer-motion";
import { Phone, MessageCircle, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBookingModal } from "@/hooks/useBookingModal";

const CTASection = () => {
  const { openModal } = useBookingModal();

  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary to-primary-dark relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/10 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-white/10 rounded-lg rotate-45"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm border border-white/10"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex h-2 w-2 rounded-full bg-white"
            />
            Limited Time: Free Consultation
          </motion.div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready for Your Perfect Smile?
          </h2>

          {/* Subtext */}
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Book your consultation today and take the first step towards healthy, 
            beautiful teeth. Our friendly team is ready to help you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              onClick={openModal}
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="whatsapp"
              size="xl"
              className="shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Now
            </Button>
            <Button
              size="xl"
              className="bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              Call: +91 98765 43210
            </Button>
          </div>

          {/* Trust Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-sm text-white/60"
          >
            No hidden charges • Flexible payment options • Same-day appointments available
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
