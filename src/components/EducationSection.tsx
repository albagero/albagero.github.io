import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="snap-section">
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-cyan-accent font-mono text-xl">03.</span>
          <h2 className="section-title whitespace-nowrap">Education</h2>
          <div className="h-px bg-navy-700 w-full md:w-64"></div>
        </div>

        <div className="relative pl-12">
          {/* Vertical Timeline Line */}
          <div className="timeline-line absolute left-6 top-0 bottom-0 w-px bg-navy-700"></div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative flex items-start"
          >
            {/* Timeline Dot */}
            <div className="timeline-dot absolute -left-12 top-6 w-4 h-4 rounded-full bg-navy-900 border-2 border-cyan-accent transform translate-x-4"></div>
            
            <div className="glass-card p-6 md:p-8 rounded-2xl w-full">
              <GraduationCap className="w-8 h-8 text-cyan-accent mb-3" />
              <h3 className="font-heading text-xl font-semibold text-slate-light">
                Bachelor of Biomedical Engineering
              </h3>
              <p className="text-slate-mid mt-2 text-lg">
                Taibah College of Science and Technology
              </p>
              <div className="flex items-center gap-2 mt-3 text-cyan-accent text-sm font-mono">
                <Calendar className="w-4 h-4" />
                <span>Expected Graduation: 2027</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
