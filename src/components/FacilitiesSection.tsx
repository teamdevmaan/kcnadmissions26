import { motion } from "framer-motion";
import { BookOpen, Monitor, Lightbulb, Trophy, Bus, Globe } from "lucide-react";

const facilities = [
  {
    icon: BookOpen,
    title: "Central Library",
    desc: "Well equipped central reference library with books, journals and internet access.",
    color: "text-secondary",
  },
  {
    icon: Monitor,
    title: "Computer Laboratory",
    desc: "Modern computer lab accessible to students of all classes with interactive learning tools.",
    color: "text-accent",
  },
  {
    icon: Lightbulb,
    title: "Atal Tinkering Lab",
    desc: "Innovation lab encouraging experimentation, creativity and hands-on STEM learning.",
    color: "text-highlight",
  },
  {
    icon: Trophy,
    title: "Sports Facilities",
    desc: "Basketball court, running track, volleyball and throwball courts with trained coaches.",
    color: "text-secondary",
  },
  {
    icon: Bus,
    title: "School Transport",
    desc: "School buses with GPS tracking, trained drivers and lady attendants for student safety.",
    color: "text-accent",
  },
  {
    icon: Globe,
    title: "Educational Tours",
    desc: "Educational tours to historical, scientific and cultural places.",
    color: "text-highlight",
  },
];

const FacilitiesSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-heading font-semibold text-sm tracking-widest uppercase">Our Campus</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mt-3">
            World-Class Facilities
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl bg-muted/50 backdrop-blur-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ${f.color}`}>
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
