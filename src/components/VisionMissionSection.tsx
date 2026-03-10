import { motion } from "framer-motion";
import { Eye, Target, Trophy } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Vision & Mission Row */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-dark rounded-2xl p-8 sm:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <Eye className="w-10 h-10 text-accent mb-6" />

            <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-6">
              Our Vision
            </h2>

            <p className="text-primary-foreground/80 font-body leading-relaxed mb-4">
              At KC Narayana E.M High School, our vision is to ignite independent thinking,
              inspire passion, and cultivate a love for excellence in every child.
            </p>

            <p className="font-quote italic text-accent text-lg leading-relaxed">
              "We nurture lifelong learners who carry knowledge, confidence, empathy and joy
              with them, empowering them to positively impact the world."
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card rounded-2xl p-8 sm:p-12 shadow-xl border border-border relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            <Target className="w-10 h-10 text-highlight mb-6" />

            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
              Our Mission
            </h2>

            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Our mission is to achieve excellence in learning both inside and outside
              the classroom.
            </p>

            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              We empower teachers to guide students in constructing knowledge and
              building an engaging and collaborative learning environment.
            </p>

            <p className="font-quote italic text-highlight text-lg leading-relaxed">
              "We nurture curiosity, inspire growth and help every child reach their
              full potential."
            </p>
          </motion.div>
        </div>

        {/* Olympiad Section (Separate Below) */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="bg-card rounded-2xl p-10 sm:p-14 shadow-xl border border-border relative overflow-hidden text-center"
        >
          <div className="absolute top-0 left-1/2 w-60 h-60 bg-highlight/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />

          <Trophy className="w-12 h-12 text-highlight mx-auto mb-6" />

          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
            Olympiad Excellence Program
          </h2>

          <p className="text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto mb-6">
            KC Narayana E.M High School is introducing **Olympiad preparation books
            from Class 3 onwards** to strengthen students’ analytical thinking,
            problem-solving ability, and conceptual understanding.
          </p>

          <p className="text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto mb-6">
            These specially designed Olympiad programs prepare students for
            national and international level competitions in Mathematics,
            Science, Logical Reasoning, and other academic disciplines.
          </p>

          <p className="font-quote italic text-highlight text-lg max-w-2xl mx-auto">
            "Empowering young minds to think deeper, solve smarter, and achieve
            excellence beyond the classroom."
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default VisionMissionSection;