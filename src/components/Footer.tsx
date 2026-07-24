import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-white/5 bg-navy-950">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col items-center text-center gap-3"
      >
        <p className="italic text-slate-dim text-sm">
          "Engineering Healthcare Through Innovation."
        </p>
        <p className="text-slate-dim/50 text-xs font-mono">
          © {new Date().getFullYear()} Albager Abdalsalam. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
