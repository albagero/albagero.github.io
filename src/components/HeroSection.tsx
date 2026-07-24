import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="snap-section min-h-screen relative overflow-hidden flex items-center">
      <motion.div
        className="max-w-4xl mx-auto text-center md:text-left z-10 relative px-6 md:px-12 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="text-cyan-accent font-mono text-sm tracking-widest uppercase mb-4">
          Hello, I am
        </motion.p>
        
        <motion.h1 variants={itemVariants} className="font-heading text-5xl md:text-7xl font-bold text-slate-light">
          Albager Abdalsalam
        </motion.h1>
        
        <motion.h2 variants={itemVariants} className="gradient-text font-heading text-xl md:text-2xl font-semibold mt-4">
          Biomedical Engineer | Medical Device Engineer | AI Enthusiast
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-slate-mid text-lg max-w-2xl mt-6">
          Engineering innovative healthcare solutions through biomedical technology, artificial intelligence.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-row justify-center md:justify-start gap-4 mt-8">
          <button onClick={scrollToContact} className="btn-primary flex items-center gap-2">
            <Mail size={20} />
            Contact Me
          </button>
          
          <a href="#" className="btn-outline flex items-center gap-2">
            <Download size={20} />
            Download CV
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={32} className="text-slate-light" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
