import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { useBookingModal } from "@/hooks/useBookingModal";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useBookingModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#">
              <Logo size="md" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="ghost" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </Button>
              <Button size="sm" className="gap-2" onClick={openModal}>
                <Calendar className="w-4 h-4" />
                Book Now
              </Button>
              <ThemeToggle className="ml-2" />
            </div>

            {/* Mobile Menu Actions */}
            <div className="flex items-center gap-3 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-background lg:hidden pt-20"
          >
            <nav className="container-custom px-6 py-10 flex flex-col h-full">
              <div className="space-y-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-4 text-2xl font-bold text-foreground border-b border-border/50 flex items-center justify-between group"
                  >
                    {link.label}
                    <motion.span 
                      whileHover={{ x: 5 }}
                      className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      →
                    </motion.span>
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-auto space-y-4 pb-10">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Contact Us</p>
                <div className="grid gap-3">
                  <Button variant="outline" size="lg" className="w-full gap-3 justify-start h-14 rounded-2xl">
                    <Phone className="w-5 h-5 text-primary" />
                    +91 98765 43210
                  </Button>
                  <Button size="lg" className="w-full gap-3 justify-start h-14 rounded-2xl shadow-soft" onClick={() => { setIsMobileMenuOpen(false); openModal(); }}>
                    <Calendar className="w-5 h-5" />
                    Book Appointment
                  </Button>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
