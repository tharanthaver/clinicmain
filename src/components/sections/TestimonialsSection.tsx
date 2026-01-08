import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Vasant Kunj, Delhi",
    rating: 5,
    text: "I was terrified of dentists, but Dr. Sharma and his team made me feel so comfortable. My root canal was completely painless! Highly recommend this clinic to anyone looking for gentle dental care.",
    treatment: "Root Canal",
    avatar: "PS",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    id: 2,
    name: "Amit Khanna",
    location: "Greater Kailash, Delhi",
    rating: 5,
    text: "Got my dental implants done here and the results are amazing. The clinic is super clean, staff is friendly, and the pricing was very transparent. No hidden costs at all!",
    treatment: "Dental Implants",
    avatar: "AK",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: 3,
    name: "Sneha Gupta",
    location: "Saket, Delhi",
    rating: 5,
    text: "Best teeth whitening experience! The results were visible immediately. The doctor explained everything beforehand and the entire process took less than an hour. Love my new smile!",
    treatment: "Teeth Whitening",
    avatar: "SG",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: 4,
    name: "Rahul Verma",
    location: "Dwarka, Delhi",
    rating: 5,
    text: "My whole family visits this clinic. The kids are no longer scared of dental checkups thanks to the friendly staff. Dr. Sharma has a wonderful way with children.",
    treatment: "Family Checkup",
    avatar: "RV",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 5,
    name: "Meera Iyer",
    location: "Gurgaon",
    rating: 5,
    text: "I got my Invisalign treatment here and the transformation is incredible. The team was very professional and kept me updated throughout the treatment journey.",
    treatment: "Invisalign",
    avatar: "MI",
    gradient: "from-violet-500 to-purple-500",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section id="testimonials" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/4 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 18, repeat: Infinity, delay: 3 }}
          className="absolute bottom-1/4 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
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
            <MessageSquare className="w-4 h-4" />
            Patient Stories
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real experiences from real patients. Their smiles speak for our care.
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-soft-xl border border-border/50 overflow-hidden">
            {/* Quote Icon with Animation */}
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-8 right-8 opacity-10"
            >
              <Quote className="w-24 h-24 text-primary" />
            </motion.div>

            {/* Content */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentTestimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative z-10"
              >
                {/* Rating with staggered animation */}
                <div className="flex gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: i * 0.1, type: "spring" }}
                    >
                      <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                  "{currentTestimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${currentTestimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                  >
                    {currentTestimonial.avatar}
                  </motion.div>
                  <div>
                    <p className="font-semibold text-foreground">{currentTestimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{currentTestimonial.location}</p>
                    <p className="text-xs text-primary font-medium mt-1 bg-primary/10 px-2 py-0.5 rounded-full inline-block">{currentTestimonial.treatment}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-border/50">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    whileHover={{ scale: 1.2 }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToPrevious}
                  className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToNext}
                  className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 bg-card px-6 py-4 rounded-2xl shadow-soft border border-border/50"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="h-8 w-px bg-border" />
            <span className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground text-lg">4.9/5</span> based on 200+ Google Reviews
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
