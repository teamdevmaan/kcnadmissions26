import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxBreakProps {
  image: string;
  alt: string;
  quote?: string;
  height?: string;
}

const ParallaxBreak = ({ image, alt, quote, height = "h-[60vh]" }: ParallaxBreakProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className={`relative ${height} overflow-hidden`}>
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img
          src={image}
          alt={alt}
          className="w-full h-[130%] object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/60" />
      </motion.div>
      {quote && (
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <p className="font-quote italic text-2xl sm:text-3xl md:text-4xl text-primary-foreground text-center max-w-4xl leading-relaxed">
            "{quote}"
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default ParallaxBreak;
