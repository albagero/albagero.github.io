import { motion } from 'framer-motion';
import { Activity, Code, Brain, Laptop } from 'lucide-react';

const skillsData = [
  {
    title: 'Biomedical Engineering',
    icon: Activity,
    skills: ['Biomedical Instrumentation', 'Medical Equipment Maintenance', 'Device Troubleshooting', 'Healthcare Technology']
  },
  {
    title: 'Programming',
    icon: Code,
    skills: ['Python', 'C++', 'SQL']
  },
  {
    title: 'Artificial Intelligence',
    icon: Brain,
    skills: ['Machine Learning', 'Deep Learning', 'Data Analysis']
  },
  {
    title: 'Engineering Software',
    icon: Laptop,
    skills: ['MATLAB', 'AutoCAD']
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="snap-section">
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sky-400 font-mono text-lg">02.</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="h-px bg-white/5 flex-grow max-w-[300px]"></div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillsData.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="glass-card p-7 group"
              variants={cardVariants}
            >
              <div className="w-12 h-12 rounded-xl bg-sky-400/10 flex items-center justify-center mb-5 group-hover:bg-sky-400/20 transition-colors">
                <category.icon className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-white mb-5">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-pill">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
