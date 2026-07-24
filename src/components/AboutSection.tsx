import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="snap-section flex flex-col justify-center px-6 md:px-12 py-24 min-h-screen">
      <motion.div
        className="max-w-6xl mx-auto w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="section-title text-3xl md:text-4xl font-heading font-bold text-slate-light flex items-center">
            <span className="text-cyan-accent font-mono text-xl md:text-2xl mr-3 font-normal">01.</span>
            About Me
          </h2>
          <div className="h-px bg-navy-700 flex-grow max-w-[300px]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          <div className="md:col-span-3 glass-card p-8 rounded-2xl bg-navy-800/60 backdrop-blur-xl border border-cyan-accent/10 hover:border-cyan-accent/30 hover:shadow-lg hover:shadow-cyan-accent/5 transition-all duration-300">
            <p className="text-slate-mid leading-relaxed mb-4">
              Hello! I'm <strong className="text-slate-light font-bold">Albager Abdalsalam</strong>, a Biomedical Engineer passionate about combining engineering, medicine, and modern technology to solve real-world healthcare challenges.
            </p>
            <p className="text-slate-mid leading-relaxed">
              My interests include clinical engineering, medical devices, medical imaging, artificial intelligence in healthcare, and digital health. I am committed to developing reliable, safe, and impactful solutions that enhance patient care and support healthcare professionals.
            </p>
          </div>

          <div className="md:col-span-2 flex justify-center md:justify-end items-center mt-8 md:mt-0">
            <div className="relative group w-[250px] md:w-[300px] aspect-square">
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-cyan-accent/30 rounded-2xl -z-10 transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
              <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-cyan-accent/20 relative z-10 transition-colors duration-300 group-hover:border-cyan-accent/50">
                <img 
                  src="/avatar.jpg" 
                  alt="Albager Abdalsalam" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
