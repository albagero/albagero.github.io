import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Eye, Watch, Wifi, Smartphone, Network } from 'lucide-react';

const researchInterests = [
  { title: 'AI in Healthcare', icon: Brain },
  { title: 'Medical Image Analysis', icon: Eye },
  { title: 'Wearable Medical Devices', icon: Watch },
  { title: 'Internet of Medical Things', icon: Wifi },
  { title: 'Digital Health', icon: Smartphone },
  { title: 'Smart Healthcare Systems', icon: Network },
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="snap-section flex flex-col justify-center min-h-screen">
      <div className="max-w-6xl mx-auto w-full px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="section-title text-3xl md:text-4xl text-slate-light font-heading font-bold">
              <span className="text-cyan-accent font-mono text-xl md:text-2xl mr-2">05.</span>
              Research Interests
            </h2>
            <div className="h-px bg-navy-700 flex-grow max-w-xs"></div>
          </div>
          <p className="section-subtitle text-slate text-lg max-w-2xl">
            Areas I'm passionate about exploring and contributing to.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {researchInterests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 text-center group cursor-default rounded-2xl bg-navy-800/60 backdrop-blur-xl border border-cyan-accent/10 hover:border-cyan-accent/30 hover:shadow-lg hover:shadow-cyan-accent/5 transition-all"
              >
                <div className="mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-navy-900/50 border border-cyan-accent/20 group-hover:border-cyan-accent/40 transition-colors">
                  <Icon className="w-10 h-10 text-cyan-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-slate-light">
                  {interest.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
