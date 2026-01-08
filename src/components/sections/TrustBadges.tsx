import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Star, Clock, Users, ShieldCheck, Award } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  decimals?: number;
}

const AnimatedCounter = ({ end, suffix = "", duration = 2, decimals = 0 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = easeOutQuart * end;
      
      setCount(decimals > 0 ? parseFloat(currentValue.toFixed(decimals)) : Math.floor(currentValue));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration, decimals]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : count.toLocaleString()}{suffix}
    </span>
  );
};

const trustBadges = [
  {
    icon: Star,
    value: 4.9,
    suffix: "/5",
    label: "Google Rating",
    color: "text-amber-500",
    bgColor: "from-amber-500/20 to-amber-500/10",
    borderColor: "border-amber-500/20",
    decimals: 1,
  },
  {
    icon: Award,
    value: 10,
    suffix: "+",
    label: "Years Experience",
    color: "text-primary",
    bgColor: "from-primary/20 to-primary/10",
    borderColor: "border-primary/20",
    decimals: 0,
  },
  {
    icon: Users,
    value: 3000,
    suffix: "+",
    label: "Happy Patients",
    color: "text-accent",
    bgColor: "from-accent/20 to-accent/10",
    borderColor: "border-accent/20",
    decimals: 0,
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "Safe & Hygienic",
    color: "text-emerald-500",
    bgColor: "from-emerald-500/20 to-emerald-500/10",
    borderColor: "border-emerald-500/20",
    decimals: 0,
  },
];

const TrustBadges = () => {
  return (
    <section className="py-12 bg-card border-y border-border/50 relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary/5 to-transparent"
        />
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br ${badge.bgColor} border ${badge.borderColor} hover:shadow-soft transition-all duration-300`}
            >
              {/* Animated Icon Container */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className={`w-14 h-14 rounded-xl bg-card shadow-sm flex items-center justify-center flex-shrink-0`}
              >
                <badge.icon className={`w-7 h-7 ${badge.color}`} />
              </motion.div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  <AnimatedCounter 
                    end={badge.value} 
                    suffix={badge.suffix} 
                    decimals={badge.decimals}
                  />
                </p>
                <p className="text-sm text-muted-foreground">{badge.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;
