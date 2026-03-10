import { motion } from "framer-motion";
import { Heart, Shield, Brain, MessageCircle } from "lucide-react";

const traits = [
  { icon: Shield, label: "Self Discipline" },
  { icon: Heart, label: "Confidence Building" },
  { icon: Brain, label: "Emotional Intelligence" },
  { icon: MessageCircle, label: "Constructive Feedback" },
];

const GuidanceSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 bg-gradient-section">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase">Student Support</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mt-3 mb-6">
            Guidance & Counselling
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-3xl mx-auto mb-12">
            KC Narayana E.M High School has a dedicated Department of Guidance and Counselling, led by counsellor <strong className="text-foreground">Sabeeha Parveen V</strong>.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {traits.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card rounded-xl p-6"
            >
              <t.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
              <p className="font-heading font-semibold text-foreground text-sm">{t.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidanceSection;
