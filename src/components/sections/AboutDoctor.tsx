import { motion } from "framer-motion";
import { Award, GraduationCap, Heart, Stethoscope } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "BDS, MDS (Prosthodontics)",
    description: "Delhi University",
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Dental Excellence",
  },
  {
    icon: Stethoscope,
    title: "5,000+ Procedures",
    description: "Successfully Completed",
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Patient-First Approach",
  },
];

    const AboutDoctor = () => {
    const doctorImage = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop";


    return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Background Decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-soft-xl">
                <img
                  src={doctorImage}
                  alt="Dr. Rajesh Sharma - Senior Dental Surgeon"
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-primary text-primary-foreground p-4 md:p-6 rounded-2xl shadow-glow"
              >
                <p className="text-2xl md:text-4xl font-bold">10+</p>
                <p className="text-xs md:text-sm opacity-90">Years of Trust</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Meet Your Doctor
            </div>

            {/* Name & Title */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                Dr. Rajesh Sharma
              </h2>
              <p className="text-lg text-primary font-medium">
                Senior Dental Surgeon & Implantologist
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over a decade of experience in comprehensive dental care, 
              Dr. Sharma has helped thousands of patients achieve their perfect smile. 
              His patient-first approach, combined with expertise in the latest dental 
              technologies, ensures a comfortable and effective treatment experience.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              "Every patient deserves gentle, honest, and affordable dental care. 
              I believe in treating my patients like family—with transparency, 
              compassion, and the highest standards of clinical excellence."
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutDoctor;
