import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1] 
      }
    },
  };

  return (
    <section 
      id="hero" 
      className="snap-section min-h-screen relative overflow-hidden flex items-center justify-center pt-20 pb-12"
    >
      <div className="container mx-auto px-6 relative z-10 w-full">
        <motion.div 
          className="max-w-5xl mx-auto text-center md:text-left flex flex-col items-center md:items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p 
            variants={itemVariants}
            className="text-sky-400 font-mono text-sm tracking-[0.25em] uppercase mb-6"
          >
            Hello, I am
          </motion.p>
          
          <motion.h1 
            variants={itemVariants}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
          >
            Albager <span className="gradient-text">Abdalsalam</span>
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants}
            className="text-slate-light text-lg md:text-xl mt-6 font-light tracking-wide"
          >
            Biomedical Engineer • Medical Devices • AI in Healthcare
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-slate-mid text-base md:text-lg max-w-2xl mt-6 leading-relaxed text-center md:text-left"
          >
            Engineering innovative healthcare solutions through biomedical technology and artificial intelligence.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-row gap-4 mt-10"
          >
            <button 
              onClick={scrollToContact}
              className="btn-primary flex items-center gap-2"
            >
              <Mail size={18} />
              Get In Touch
            </button>
            <a 
              href="#" 
              className="btn-outline flex items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce"
      >
        <ChevronDown size={28} className="text-white" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
