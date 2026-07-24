import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, ExternalLink } from 'lucide-react';

export const ExperienceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="experience" className="snap-section flex flex-col justify-center min-h-screen">
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-sky-400 font-mono text-xl">04.</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-100">Experience</h2>
          <div className="h-[1px] bg-slate-700 flex-grow ml-4 max-w-[300px]"></div>
        </motion.div>

        <motion.div 
          className="relative pl-8 md:pl-10 space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="timeline-line absolute left-0 top-0 bottom-0 w-[2px] bg-slate-800"></div>

          <motion.div variants={itemVariants} className="relative">
            <div className="timeline-dot absolute -left-[7px] md:-left-[7px] top-8 w-4 h-4 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
            
            <div className="glass-card p-7 md:p-9 rounded-xl">
              <div className="flex items-center gap-3 mb-1">
                <Briefcase className="w-5 h-5 text-sky-400" />
                <h3 className="font-heading text-xl font-semibold text-white">Biomedical Engineering Workshop</h3>
              </div>
              
              <div className="text-sky-400 text-sm font-mono mt-1">Presenter · 2026</div>
              
              <p className="text-slate-mid mt-4 leading-relaxed text-[0.92rem]">
                Presented an Infusion Pump medical device during a biomedical engineering workshop, explaining its operating principles, safety features, clinical applications, and maintenance procedures.
              </p>
              
              <a 
                href="https://albagero.github.io/infusion-pump/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 inline-flex items-center gap-1.5 mt-4 text-sm font-medium transition-colors"
              >
                View Presentation <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="timeline-dot absolute -left-[7px] md:-left-[7px] top-8 w-4 h-4 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
            
            <div className="glass-card p-7 md:p-9 rounded-xl">
              <div className="flex items-center gap-3 mb-1">
                <TrendingUp className="w-5 h-5 text-sky-400" />
                <h3 className="font-heading text-xl font-semibold text-white">Sales & Marketing Experience</h3>
              </div>
              
              <p className="text-slate-mid mt-4 leading-relaxed text-[0.92rem]">
                Gained practical experience in sales and marketing by promoting products, communicating with customers, and building strong professional relationships.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
