import { motion } from "framer-motion";
import { Sparkles, Star, Palette, Microscope, Users } from "lucide-react";

const benefits = [
  { icon: Star, text: "Discover natural talents" },
  { icon: Palette, text: "Explore arts, sports & leadership" },
  { icon: Microscope, text: "Build confidence & emotional strength" },
  { icon: Users, text: "Personalized mentoring" },
];

const SpecialFeatureSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 bg-gradient-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Sparkles className="w-10 h-10 text-accent mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground">
            Beyond Academics
          </h2>
          <p className="text-primary-foreground/60 font-body mt-3 text-lg">
            Discovering Every Student's True Talent
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 p-8 sm:p-12 mb-12"
        >
          <p className="text-primary-foreground/80 font-body text-lg leading-relaxed mb-8">
            The school is implementing a dedicated <strong className="text-accent">psychology teacher and student mentor program</strong>. The psychology teacher helps students discover their natural talents, identify interests beyond academics, develop confidence and emotional strength, and build successful futures based on their passions.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-3 text-primary-foreground/70"
              >
                <b.icon className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-body">{b.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="font-quote italic text-2xl sm:text-3xl text-accent leading-relaxed max-w-3xl mx-auto">
            "Every child is unique. Our mission is to help them discover their strengths and excel in what they love."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default SpecialFeatureSection;
