import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { BookOpen, Calendar, GraduationCap, MapPin } from "lucide-react";

const infoItems = [
  { icon: Calendar, label: "Established", value: "1990" },
  { icon: GraduationCap, label: "Board", value: "AP State Board (BSEAP)" },
  { icon: BookOpen, label: "Classes", value: "Nursery to Class X" },
  { icon: MapPin, label: "Location", value: "Hanumesh Nagar, Guntakal" },
];

const AboutSection = () => {
  return (
    <AnimatedSection className="py-24 px-4 sm:px-6 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-heading font-semibold text-sm tracking-widest uppercase">About Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mt-3">
            KC Narayana E.M High School
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {infoItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <item.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="text-muted-foreground text-sm font-body">{item.label}</p>
              <p className="text-foreground font-heading font-semibold text-lg mt-1">{item.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-muted-foreground text-lg leading-relaxed font-body mb-4">
            KC Narayana E.M High School has been shaping young minds since 1990. The school focuses on academic excellence, creativity, discipline and holistic student development.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed font-body">
            Students are guided by experienced teachers and a supportive learning environment that encourages curiosity, confidence and lifelong learning.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          20/184-D9, Hanumesh Nagar, Guntakal, Anantapur District, Andhra Pradesh – 515801
        </motion.p>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
