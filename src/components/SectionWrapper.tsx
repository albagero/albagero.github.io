import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  children,
  className = '',
  fullHeight = true,
}) => {
  const isSnapSection = fullHeight;
  
  return (
    <section
      id={id}
      className={`${isSnapSection ? 'snap-section flex items-center justify-center py-20 px-4 md:px-8' : 'py-20 px-4 md:px-8'} ${className}`}
    >
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
