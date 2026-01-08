import { motion } from "framer-motion";
import { MessageCircle, Calendar, Sparkles, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-clinic.jpg";
import { useBookingModal } from "@/hooks/useBookingModal";

const HeroSection = () => {
  const { openModal } = useBookingModal();

  return (
    <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl"
        />
        {/* Floating shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-8 h-8 bg-primary/10 rounded-lg rotate-45"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute top-1/3 right-1/3 w-6 h-6 bg-accent/10 rounded-full"
        />
      </div>

      <div className="container-custom section-padding pt-24 lg:pt-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
                {/* Trust Badges Row */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="flex flex-row flex-wrap gap-2 sm:gap-3"
                >
                  <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-[13px] sm:text-sm font-medium w-fit">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    3,000+ Happy Patients
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-600 px-3 sm:px-4 py-2 rounded-full text-[13px] sm:text-sm font-medium w-fit">
                    <Award className="w-3.5 h-3.5 sm:w-4 h-4" />
                    4.9★ Google Rating
                  </div>
                </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Gentle, Trusted &{" "}
              <span className="text-gradient relative">
                Affordable
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-3 bg-primary/20 -z-10 rounded"
                />
              </span>{" "}
              Dental Care in New Delhi
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Experience pain-free dental treatments with our expert team. 
              Modern technology, compassionate care, and transparent pricing 
              for your perfect smile.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="hero" size="xl" className="group" onClick={openModal}>
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Book Appointment
                <Sparkles className="w-4 h-4 opacity-60" />
              </Button>
              <Button variant="whatsapp" size="xl" className="group">
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                WhatsApp Now
              </Button>
            </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex flex-row flex-wrap items-center gap-x-6 gap-y-4 pt-4"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1 sm:-space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 border-2 border-background flex items-center justify-center text-xs font-medium text-primary flex-shrink-0"
                      >
                        {["A", "S", "R", "M"][i - 1]}
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    500+ patients this month
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  100% Safe & Hygienic
                </div>
              </motion.div>
          </motion.div>

            {/* Right Image - Visible on all screens, but stacked on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative lg:block"
            >
              <div className="relative">
                {/* Decorative Ring - Only on desktop for less clutter on mobile */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-8 rounded-full border-2 border-dashed border-primary/20 hidden lg:block"
                />
  
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-soft-xl">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={heroImage}
                      alt="Modern dental clinic interior with advanced equipment"
                      className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
                </div>
  
                {/* Floating Card - Experience - Hidden on small mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute -left-4 md:-left-8 bottom-10 md:bottom-20 bg-card p-3 md:p-4 rounded-2xl shadow-soft-lg border border-border/50 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <Award className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xl md:text-2xl font-bold text-foreground">10+</p>
                      <p className="text-xs md:text-sm text-muted-foreground">Years Experience</p>
                    </div>
                  </div>
                </motion.div>
  
                {/* Floating Card - Rating - Hidden on small mobile */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute -right-2 md:-right-4 top-10 md:top-20 bg-card p-3 md:p-4 rounded-2xl shadow-soft-lg border border-border/50 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-500/10 flex items-center justify-center">
                      <div className="text-amber-500 text-base md:text-lg">★</div>
                    </div>
                    <div>
                      <p className="text-xl md:text-2xl font-bold text-foreground">4.9/5</p>
                      <p className="text-xs md:text-sm text-muted-foreground">Google Rating</p>
                    </div>
                  </div>
                </motion.div>
  
                {/* Floating Badge - New */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute right-4 md:right-8 -top-4 bg-accent text-accent-foreground px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-glow-accent"
                >
                  Free Consultation
                </motion.div>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
