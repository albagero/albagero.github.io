import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <motion.section 
      id="about" 
      className="snap-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sky-400 font-mono text-lg">01.</span>
          <h2 className="section-title">About Me</h2>
          <div className="h-px bg-white/5 flex-grow max-w-[300px]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-center">
          <div className="md:col-span-3">
            <div className="glass-card p-8 md:p-10">
              <p className="text-slate-mid leading-[1.8] text-[0.95rem]">
                Hello! I'm <span className="font-bold text-white">Albager Abdalsalam</span>, a Biomedical Engineer passionate about combining engineering, medicine, and modern technology to solve real-world healthcare challenges.
              </p>
              <p className="text-slate-mid leading-[1.8] text-[0.95rem] mt-5">
                My interests include clinical engineering, medical devices, medical imaging, artificial intelligence in healthcare, and digital health. I am committed to developing reliable, safe, and impactful solutions that enhance patient care and support healthcare professionals.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="relative group w-[260px] md:w-[300px] aspect-square mx-auto">
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-sky-400/20 rounded-2xl -z-10 group-hover:translate-x-[-6px] group-hover:translate-y-[-6px] transition-transform duration-500"></div>
              <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-sky-400/30 transition-all duration-500">
                <img 
                  src="/avatar.jpg" 
                  alt="Albager Abdalsalam" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
