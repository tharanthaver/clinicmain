import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  const sizes = {
    sm: { icon: 36, text: "text-base", subtext: "text-[10px]" },
    md: { icon: 44, text: "text-lg", subtext: "text-xs" },
    lg: { icon: 56, text: "text-2xl", subtext: "text-sm" },
  };

  const config = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
        className="relative"
        style={{ width: config.icon, height: config.icon }}
      >
        {/* Background Gradient Circle */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary via-primary to-primary-dark shadow-glow" />
        
        {/* Inner Design - Abstract Tooth */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3/4 h-3/4"
          >
            {/* Stylized Tooth Shape */}
            <path
              d="M20 4C14 4 10 8 10 14C10 18 11 21 12 24C13 27 14 30 14 33C14 35 15 36 17 36C19 36 20 34 20 32C20 34 21 36 23 36C25 36 26 35 26 33C26 30 27 27 28 24C29 21 30 18 30 14C30 8 26 4 20 4Z"
              fill="white"
              fillOpacity="0.95"
            />
            {/* Shine Effect */}
            <path
              d="M16 10C15 10 14 11 14 12C14 13 15 14 16 14C17 14 18 13 18 12C18 11 17 10 16 10Z"
              fill="currentColor"
              className="text-primary/30"
            />
            {/* Cross/Plus Sign for Medical */}
            <path
              d="M19 18H21V22H25V24H21V28H19V24H15V22H19V18Z"
              fill="currentColor"
              className="text-primary"
              fillOpacity="0.8"
            />
          </svg>
        </div>

        {/* Sparkle Effect */}
        <motion.div
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
          className="absolute -top-1 -right-1 w-3 h-3"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path
              d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z"
              fill="hsl(var(--primary))"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold text-foreground ${config.text} leading-tight tracking-tight`}>
            Delhi Dental
          </span>
          <span className={`text-muted-foreground ${config.subtext} -mt-0.5 tracking-wide uppercase`}>
            Care Center
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
