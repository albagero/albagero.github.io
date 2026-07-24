import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

export const EducationSection = () => {
  return (
    <section id="education" className="snap-section flex flex-col justify-center min-h-screen">
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-sky-400 font-mono text-xl">03.</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-100">Education</h2>
          <div className="h-[1px] bg-slate-700 flex-grow ml-4 max-w-[300px]"></div>
        </motion.div>

        <div className="relative pl-8 md:pl-10">
          <div className="timeline-line absolute left-0 top-0 bottom-0 w-[2px] bg-slate-800"></div>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="timeline-dot absolute -left-[7px] md:-left-[7px] top-8 w-4 h-4 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
            
            <div className="glass-card p-7 md:p-9 w-full rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-sky-400" />
                <span className="text-xs font-mono text-sky-400 bg-sky-400/10 px-2.5 py-1 rounded-full">Degree</span>
              </div>
              
              <h3 className="font-heading text-xl font-semibold text-white">Bachelor of Biomedical Engineering</h3>
              <p className="text-slate-mid mt-2">Taibah College of Science and Technology</p>
              
              <div className="flex items-center gap-2 mt-4 text-sky-400 text-sm font-mono">
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
