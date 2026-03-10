import { motion } from "framer-motion";
import { GraduationCap, Calendar, ClipboardCheck } from "lucide-react";

const eligibility = [
  { grade: "Nursery", age: "2 years 10 months" },
  { grade: "LKG", age: "3 years 10 months" },
  { grade: "UKG", age: "4 years 10 months" },
];

const AdmissionsSection = () => {
  return (
    <section id="admissions" className="py-24 px-4 sm:px-6 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-highlight font-heading font-semibold text-sm tracking-widest uppercase">Enroll Now</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mt-3">
            Admissions Open <span className="text-gradient-gold">2026–27</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Pre-Primary */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 shadow-xl border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-heading font-bold text-foreground">Pre-Primary Admissions</h3>
            </div>

            <div className="flex items-center gap-3 mb-4 text-muted-foreground font-body">
              <Calendar className="w-5 h-5 text-secondary flex-shrink-0" />
              <span>Admissions begin first week of February</span>
            </div>

            <div className="bg-accent/10 rounded-xl p-4 mb-6 border border-accent/20">
              <p className="text-foreground font-body text-sm">
                <strong>Free School Experience Program</strong> – Two-month trial before Nursery (February–April)
              </p>
            </div>

            <h4 className="font-heading font-semibold text-foreground mb-3">Age Eligibility</h4>
            <div className="space-y-2">
              {eligibility.map((e) => (
                <div key={e.grade} className="flex justify-between bg-muted rounded-lg px-4 py-3">
                  <span className="font-heading font-semibold text-foreground">{e.grade}</span>
                  <span className="text-muted-foreground font-body">{e.age}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Class I-X */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 shadow-xl border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <ClipboardCheck className="w-8 h-8 text-highlight" />
              <h3 className="text-2xl font-heading font-bold text-foreground">Admissions Class I – X</h3>
            </div>

            <div className="space-y-4 text-muted-foreground font-body">
              <div className="bg-muted rounded-xl p-4">
                <p><strong className="text-foreground">Admission Test</strong> – Students must appear for an admission test.</p>
              </div>
              <div className="bg-muted rounded-xl p-4">
                <p><strong className="text-foreground">Oral Interviews</strong> – For LKG and UKG admissions.</p>
              </div>
              <div className="bg-muted rounded-xl p-4">
                <p><strong className="text-foreground">General Admissions</strong> – Start third week of March.</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block mt-8 px-8 py-4 bg-accent text-accent-foreground font-heading font-semibold rounded-lg text-lg hover:scale-105 transition-transform duration-300 glow-gold w-full text-center"
            >
              Enquire Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
