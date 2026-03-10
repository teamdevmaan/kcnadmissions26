import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const AnimatedCounter = ({ end, label, suffix = "" }: { end: number; label: string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl sm:text-5xl font-heading font-bold text-accent">
        {count}{suffix}
      </p>
      <p className="text-muted-foreground font-body mt-2 text-sm">{label}</p>
    </div>
  );
};

const teacherCategories = [
  { label: "PGT", count: 12 },
  { label: "TGT", count: 16 },
  { label: "PRT", count: 9 },
  { label: "NTT", count: 8 },
];

const StatsSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-heading font-semibold text-sm tracking-widest uppercase">By the Numbers</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mt-3">
            Campus at a Glance
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <AnimatedCounter end={1990} label="Established" />
          <AnimatedCounter end={45} label="Total Teachers" />
          <AnimatedCounter end={36} label="Classrooms" />
          <AnimatedCounter end={8} label="Laboratories" />
          <AnimatedCounter end={4389} label="Campus Area" suffix=" Sq M" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 shadow-lg border border-border"
        >
          <h3 className="text-center font-heading font-semibold text-foreground mb-6 text-lg">Teacher Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teacherCategories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-muted rounded-xl p-4"
              >
                <p className="text-3xl font-heading font-bold text-primary">{cat.count}</p>
                <p className="text-muted-foreground font-body text-sm mt-1">{cat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
