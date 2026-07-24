import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Code, Brain, Laptop } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const categories = [
    {
      title: 'Biomedical Engineering',
      icon: <Activity className="w-10 h-10 text-cyan-accent mb-4" />,
      skills: ['Biomedical Instrumentation', 'Medical Equipment Maintenance', 'Device Troubleshooting', 'Healthcare Technology'],
    },
    {
      title: 'Programming',
      icon: <Code className="w-10 h-10 text-cyan-accent mb-4" />,
      skills: ['Python', 'C++', 'SQL'],
    },
    {
      title: 'Artificial Intelligence',
      icon: <Brain className="w-10 h-10 text-cyan-accent mb-4" />,
      skills: ['Machine Learning', 'Deep Learning', 'Data Analysis'],
    },
    {
      title: 'Engineering Software',
      icon: <Laptop className="w-10 h-10 text-cyan-accent mb-4" />,
      skills: ['MATLAB', 'AutoCAD'],
    },
  ];

  return (
    <section id="skills" className="snap-section">
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-cyan-accent font-mono text-xl">02.</span>
          <h2 className="section-title whitespace-nowrap">Skills & Expertise</h2>
          <div className="h-px bg-navy-700 w-full md:w-64"></div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 rounded-2xl flex flex-col"
            >
              {category.icon}
              <h3 className="font-heading text-xl font-semibold text-slate-light mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm rounded-full bg-cyan-accent/10 text-cyan-accent border border-cyan-accent/20"
                  >
                    {skill}
                  </span>
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
