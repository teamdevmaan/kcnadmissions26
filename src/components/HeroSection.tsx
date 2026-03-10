import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const FloatingShape = ({ className }: { className: string }) => (
  <div className={`absolute rounded-full opacity-20 ${className}`} />
);

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  // Word-by-word animation for the school name
  const schoolNameWords = ["KC", "Narayana", "E.M", "High", "School"];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        <img
          src={heroBg}
          alt="Happy students learning at KC Narayana E.M High School"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </motion.div>

      {/* Floating Shapes */}
      <FloatingShape className="floating-shape w-32 h-32 bg-accent/30 top-20 left-10 blur-2xl" />
      <FloatingShape className="floating-shape-delayed w-48 h-48 bg-secondary/20 top-40 right-20 blur-3xl" />
      <FloatingShape className="floating-shape-slow w-24 h-24 bg-highlight/20 bottom-40 left-1/4 blur-2xl" />
      <FloatingShape className="floating-shape w-36 h-36 bg-accent/20 bottom-20 right-1/3 blur-3xl" />
      <FloatingShape className="floating-shape-delayed w-20 h-20 bg-secondary/15 top-1/3 left-1/3 blur-2xl" />
      <FloatingShape className="floating-shape-slow w-40 h-40 bg-accent/10 top-1/4 right-1/4 blur-3xl" />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto"
      >
        {/* School Name - DOMINANT */}
        <div className="mb-8 overflow-hidden">
          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 md:gap-x-8">
            {schoolNameWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 80, rotateX: 40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + i * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-black text-gradient-gold tracking-wider inline-block school-name-glow"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Admissions Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-6"
        >
          <span className="inline-block px-6 py-3 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent text-lg sm:text-xl font-heading font-bold tracking-widest uppercase">
            Admissions Open 2026–27
          </span>
        </motion.div>

        {/* Supporting Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-quote italic text-xl sm:text-2xl text-primary-foreground/70 max-w-3xl mx-auto mb-4"
        >
          "Where Every Child Discovers Their True Potential"
        </motion.p>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-base sm:text-lg text-primary-foreground/60 font-body max-w-3xl mx-auto mb-3"
        >
          Building Knowledge, Confidence and Character Since 1990
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex items-center justify-center gap-2 text-primary-foreground/50 text-sm mb-10"
        >
          <MapPin className="w-4 h-4" />
          <span>Hanumesh Nagar, Guntakal, Anantapur District</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#admissions"
            className="px-8 py-4 bg-accent text-accent-foreground font-heading font-semibold rounded-lg text-lg hover:scale-105 transition-transform duration-300 glow-gold"
          >
            Apply for Admission
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-heading font-semibold rounded-lg text-lg hover:bg-primary-foreground/10 backdrop-blur-sm transition-all duration-300"
          >
            Schedule School Visit
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/50"
      >
        <span className="text-xs font-body tracking-widest uppercase">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 scroll-indicator-anim" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
