import { motion } from "framer-motion";

const clubs = [
  { name: "Rukmini", color: "from-rose-500 to-pink-600" },
  { name: "Mangeshkar", color: "from-violet-500 to-purple-600" },
  { name: "Kalam", color: "from-blue-500 to-indigo-600" },
  { name: "Tendulkar", color: "from-emerald-500 to-green-600" },
  { name: "Chitra", color: "from-amber-500 to-orange-600" },
  { name: "Litverse", color: "from-cyan-500 to-teal-600" },
];

const HouseClubsSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-highlight font-heading font-semibold text-sm tracking-widest uppercase">School Spirit</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mt-3">House Clubs</h2>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto">
            House clubs promote teamwork, leadership, creativity and healthy competition through sports, cultural and literary activities.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {clubs.map((club, i) => (
            <motion.div
              key={club.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
              className={`bg-gradient-to-br ${club.color} rounded-2xl p-6 text-center cursor-default backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl font-heading font-bold text-white">{club.name[0]}</span>
              </div>
              <h3 className="text-white font-heading font-semibold text-sm">{club.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseClubsSection;
