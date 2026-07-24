import React from 'react';
import { motion } from 'framer-motion';

export const ParticleBackground: React.FC = React.memo(() => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050d1a]">
      {/* Soft gradient orb 1 */}
      <motion.div
        className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[100px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.8) 0%, rgba(56,189,248,0) 70%)',
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Soft gradient orb 2 */}
      <motion.div
        className="absolute -bottom-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[120px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, rgba(139,92,246,0) 70%)',
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle overlay to add a bit of texture/mesh feel if needed */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
});

export default ParticleBackground;
