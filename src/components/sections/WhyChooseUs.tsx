import { motion, useMotionValue, useTransform } from "framer-motion";
import { 
  Zap, 
  IndianRupee, 
  Wrench, 
  Users, 
  Sparkles, 
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Pain-Free Treatments",
    description: "Advanced anesthesia techniques and gentle procedures ensure your comfort throughout every treatment.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description: "No hidden charges. Get clear cost estimates upfront so you can plan your treatment with confidence.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Wrench,
    title: "Advanced Equipment",
    description: "State-of-the-art dental technology for accurate diagnosis and effective treatments.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Users,
    title: "Friendly Staff",
    description: "Our caring team creates a welcoming environment to ease any dental anxiety.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Sparkles,
    title: "Clean & Hygienic",
    description: "International sterilization standards. Your safety is our top priority.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: ShieldCheck,
    title: "Experienced Team",
    description: "Decade of expertise with thousands of successful treatments and happy patients.",
    gradient: "from-violet-500 to-purple-500",
  },
];

const stats = [
  { value: "99%", label: "Patient Satisfaction" },
  { value: "24/7", label: "Emergency Support" },
  { value: "0%", label: "EMI Available" },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-background relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
            >
              <CheckCircle2 className="w-4 h-4" />
              Why Choose Us
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Your Comfort & Safety is Our{" "}
              <span className="text-gradient relative inline-block">
                Priority
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute bottom-1 left-0 right-0 h-3 bg-primary/20 -z-10 origin-left rounded"
                />
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We understand that visiting the dentist can be stressful. That's why 
              we've created a clinic experience focused entirely on your comfort, 
              safety, and peace of mind.
            </p>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="text-center"
                >
                  <motion.p
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                    className="text-4xl font-bold text-foreground"
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`group p-5 rounded-2xl bg-secondary/50 hover:bg-card hover:shadow-soft-lg border border-transparent hover:border-border/50 transition-all duration-300 ${
                  index === 0 || index === 5 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
