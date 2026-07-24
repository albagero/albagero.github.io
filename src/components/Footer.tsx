import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 border-t border-navy-700 w-full bg-navy-900">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="italic text-slate-mid text-sm mb-4 font-body">
            "Engineering Healthcare Through Innovation."
          </p>
          <p className="text-slate-mid/60 text-xs font-mono">
            &copy; 2026 Albager Abdalsalam. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
