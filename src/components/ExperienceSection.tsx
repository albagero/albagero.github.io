import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, ExternalLink } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="snap-section flex flex-col justify-center min-h-screen">
      <div className="max-w-4xl mx-auto w-full px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="section-title text-3xl md:text-4xl text-slate-light font-heading font-bold">
            <span className="text-cyan-accent font-mono text-xl md:text-2xl mr-2">04.</span>
            Experience
          </h2>
          <div className="h-px bg-navy-700 flex-grow max-w-xs"></div>
        </motion.div>

        <div className="relative pl-12 border-l border-navy-700/50 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-12 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-navy-800 border-2 border-cyan-accent flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-accent"></div>
            </div>
            <div className="glass-card p-6 md:p-8 rounded-2xl bg-navy-800/60 backdrop-blur-xl border border-cyan-accent/10 hover:border-cyan-accent/30 hover:shadow-lg hover:shadow-cyan-accent/5 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="w-6 h-6 text-cyan-accent" />
                <h3 className="font-heading text-xl font-semibold text-slate-light">Biomedical Engineering Workshop</h3>
              </div>
              <div className="text-cyan-accent text-sm font-mono mb-4">Presenter | 2026</div>
              <p className="text-slate mt-3 leading-relaxed">
                Presented an Infusion Pump medical device during a biomedical engineering workshop, explaining its operating principles, safety features, clinical applications, and maintenance procedures. Engaged with participants through technical discussions and demonstrated the device's role in accurate medication delivery and patient safety.
              </p>
              <a 
                href="https://albagero.github.io/infusion-pump/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-accent hover:text-mint inline-flex items-center gap-1 mt-4 transition-colors"
              >
                View Presentation <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-12 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-navy-800 border-2 border-cyan-accent flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-accent"></div>
            </div>
            <div className="glass-card p-6 md:p-8 rounded-2xl bg-navy-800/60 backdrop-blur-xl border border-cyan-accent/10 hover:border-cyan-accent/30 hover:shadow-lg hover:shadow-cyan-accent/5 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-6 h-6 text-cyan-accent" />
                <h3 className="font-heading text-xl font-semibold text-slate-light">Sales & Marketing Experience</h3>
              </div>
              <p className="text-slate mt-3 leading-relaxed">
                Gained practical experience in sales and marketing by promoting products, communicating with customers, and building strong professional relationships.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
