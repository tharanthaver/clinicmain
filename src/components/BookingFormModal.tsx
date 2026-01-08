import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, Phone, Mail, MessageSquare, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

interface BookingFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingFormModal = ({ isOpen, onClose }: BookingFormModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "Please fill required fields",
        description: "Name and phone number are required.",
        variant: "destructive",
      });
      return;
    }

    // Phone validation for Indian numbers
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid 10-digit Indian mobile number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: "Booking Request Sent!",
      description: "Our team will contact you within 30 minutes.",
    });

    // Reset after showing success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
      onClose();
    }, 2000);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-10 w-full max-w-lg mx-4 bg-card rounded-3xl shadow-2xl overflow-hidden"
          >
              {/* Decorative Header */}
              <div className="relative bg-gradient-to-br from-primary via-primary to-primary-dark p-8 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
                
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4"
                >
                  <Calendar className="w-8 h-8" />
                </motion.div>
                <h2 className="text-2xl font-bold mb-2">Book Your Appointment</h2>
                <p className="text-white/80 text-sm">Get a free consultation with our expert dentist</p>
              </div>
            </div>

            {/* Form */}
            <div className="p-6 md:p-8">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="py-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle className="w-10 h-10 text-emerald-600" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Booking Confirmed!</h3>
                    <p className="text-muted-foreground">We'll call you within 30 minutes</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="space-y-4">
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          type="text"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="pl-12 h-14 rounded-xl border-border/50 bg-secondary/30 focus:bg-background transition-colors"
                          required
                        />
                      </div>

                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          type="tel"
                          placeholder="Mobile Number *"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="pl-12 h-14 rounded-xl border-border/50 bg-secondary/30 focus:bg-background transition-colors"
                          required
                        />
                      </div>

                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          type="email"
                          placeholder="Email (Optional)"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="pl-12 h-14 rounded-xl border-border/50 bg-secondary/30 focus:bg-background transition-colors"
                        />
                      </div>

                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                        <Textarea
                          placeholder="Your concern or preferred time (Optional)"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="pl-12 min-h-[100px] rounded-xl border-border/50 bg-secondary/30 focus:bg-background transition-colors resize-none"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="xl"
                      className="w-full rounded-xl"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Booking...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5" />
                          Book Free Consultation
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      By booking, you agree to our privacy policy. We'll never spam you.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingFormModal;
