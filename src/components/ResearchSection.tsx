import { motion } from 'framer-motion';
import { Brain, Eye, Watch, Wifi, Smartphone, Network } from 'lucide-react';

const researchInterests = [
  { id: 1, title: 'AI in Healthcare', icon: Brain },
  { id: 2, title: 'Medical Image Analysis', icon: Eye },
  { id: 3, title: 'Wearable Medical Devices', icon: Watch },
  { id: 4, title: 'Internet of Medical Things', icon: Wifi },
  { id: 5, title: 'Digital Health', icon: Smartphone },
  { id: 6, title: 'Smart Healthcare Systems', icon: Network },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const ResearchSection = () => {
  return (
    <section id="research" className="snap-section flex flex-col justify-center py-24">
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sky-400 font-mono text-lg">05.</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-light">Research Interests</h2>
            <div className="h-px bg-white/10 flex-grow ml-4 max-w-xs"></div>
          </div>
          <p className="text-slate-mid text-base max-w-2xl">
            Areas I'm passionate about exploring and contributing to.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {researchInterests.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <div className="glass-card p-6 text-center group cursor-default h-full">
                <div className="w-14 h-14 rounded-2xl bg-sky-400/8 flex items-center justify-center mx-auto mb-5 group-hover:bg-sky-400/15 group-hover:scale-105 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-sky-400" />
                </div>
                <h3 className="font-heading text-base font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
