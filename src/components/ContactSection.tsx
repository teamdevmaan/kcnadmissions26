import { motion } from "framer-motion";
import { Phone, Mail, MapPin, User } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-gradient-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-heading font-semibold text-sm tracking-widest uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground mt-3">
            Contact Us
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <User className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="text-primary-foreground font-heading font-semibold">Principal</p>
                <p className="text-primary-foreground/70 font-body">Mrs Sabiha Parveen V</p>
                <p className="text-primary-foreground/50 font-body text-sm">(M.A, M.Sc, B.Ed, HPT)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="text-primary-foreground font-heading font-semibold">Phone</p>
                <a
                  href="tel:+919652925489"
                  className="text-primary-foreground/70 font-body hover:text-accent transition-colors block"
                >
                  9652925489
                </a>
                <a
                  href="tel:+919888433309"
                  className="text-primary-foreground/70 font-body hover:text-accent transition-colors block"
                >
                  9888433309
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="text-primary-foreground font-heading font-semibold">Email</p>
                <a
                  href="mailto:veeravalsasabihaparveen@gmail.com"
                  className="text-primary-foreground/70 font-body hover:text-accent transition-colors break-all"
                >
                  veeravalsasabihaparveen@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="text-primary-foreground font-heading font-semibold">Address</p>
                <p className="text-primary-foreground/70 font-body">
                  20/184-D9, Hanumesh Nagar,<br />
                  Guntakal, Anantapur District<br />
                  Andhra Pradesh – 515801
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 p-8 flex flex-col justify-center items-center text-center"
          >
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">
              Ready to Join?
            </h3>
            <p className="text-primary-foreground/60 font-body mb-8">
              Call us today or visit the school campus to learn more about admissions.
            </p>
            <a
              href="tel:+919652925489"
              className="px-8 py-4 bg-accent text-accent-foreground font-heading font-semibold rounded-lg text-lg hover:scale-105 transition-transform duration-300 glow-gold"
            >
              Call Now
            </a>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-primary-foreground/10 text-center space-y-2"
        >
          <p className="text-primary-foreground/40 font-body text-sm">
            © 2026 KC Narayana E.M High School. All rights reserved.
          </p>

          <p className="text-primary-foreground/50 font-body text-sm">
            Designed & Developed by{" "}
            <a
              href="https://www.devmaan.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-semibold"
            >
              DevMaan Technologies
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;