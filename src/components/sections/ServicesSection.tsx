import { motion } from "framer-motion";
import { 
  Sparkles, 
  Stethoscope, 
  Smile, 
  CircleDot, 
  Layers, 
  ClipboardCheck,
  ArrowRight
} from "lucide-react";
import { useBookingModal } from "@/hooks/useBookingModal";

const services = [
  {
    icon: CircleDot,
    title: "Dental Implants",
    description: "Permanent tooth replacement with natural-looking implants. Restore your smile and confidence with our advanced implant solutions.",
    color: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    borderColor: "group-hover:border-primary/30",
  },
  {
    icon: Stethoscope,
    title: "Root Canal Treatment",
    description: "Pain-free root canal therapy using modern techniques. Save your natural tooth with our gentle and effective treatment.",
    color: "from-blue-500/20 to-blue-500/5",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    borderColor: "group-hover:border-blue-500/30",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description: "Professional teeth whitening for a brighter smile. Safe, quick, and long-lasting results in just one visit.",
    color: "from-amber-500/20 to-amber-500/5",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    borderColor: "group-hover:border-amber-500/30",
  },
  {
    icon: Layers,
    title: "Braces & Aligners",
    description: "Invisible aligners and traditional braces for perfect alignment. Customized orthodontic solutions for all ages.",
    color: "from-violet-500/20 to-violet-500/5",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
    borderColor: "group-hover:border-violet-500/30",
  },
  {
    icon: Smile,
    title: "Cosmetic Dentistry",
    description: "Veneers, bonding, and smile makeovers. Transform your smile with our expert cosmetic dental services.",
    color: "from-rose-500/20 to-rose-500/5",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-500",
    borderColor: "group-hover:border-rose-500/30",
  },
  {
    icon: ClipboardCheck,
    title: "General Checkups",
    description: "Comprehensive dental examinations and cleanings. Preventive care to keep your teeth healthy for life.",
    color: "from-emerald-500/20 to-emerald-500/5",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    borderColor: "group-hover:border-emerald-500/30",
  },
];

const ServicesSection = () => {
  const { openModal } = useBookingModal();

  return (
    <section id="services" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-60 h-60 border border-accent/10 rounded-full"
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Our Services
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Complete Dental Care Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From routine checkups to advanced procedures, we offer comprehensive 
            dental services with a focus on comfort and quality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
              onClick={openModal}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`h-full bg-card rounded-2xl p-6 lg:p-8 border-2 border-border/50 ${service.borderColor} shadow-soft hover:shadow-soft-lg transition-all duration-300 relative overflow-hidden`}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-6 transition-transform`}
                  >
                    <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Book Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
