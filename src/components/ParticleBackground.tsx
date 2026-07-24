import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const ParticleBackground: React.FC = React.memo(() => {
  const orbs = useMemo(() => [
    {
      id: 1,
      className: "absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full blur-[100px] mix-blend-screen",
      style: { background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, rgba(56,189,248,0) 70%)' },
      animate: {
        x: [0, -50, 0],
        y: [0, 50, 0],
        scale: [1, 1.1, 1],
      },
      transition: { duration: 25, repeat: Infinity, ease: "easeInOut" }
    },
    {
      id: 2,
      className: "absolute bottom-0 left-0 w-[35vw] h-[35vw] rounded-full blur-[100px] mix-blend-screen",
      style: { background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, rgba(139,92,246,0) 70%)' },
      animate: {
        x: [0, 50, 0],
        y: [0, -30, 0],
        scale: [1, 1.2, 1],
      },
      transition: { duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }
    },
    {
      id: 3,
      className: "absolute bottom-[-10%] left-[40%] w-[30vw] h-[30vw] rounded-full blur-[100px] mix-blend-screen",
      style: { background: 'radial-gradient(circle, rgba(20,184,166,0.05) 0%, rgba(20,184,166,0) 70%)' },
      animate: {
        x: [-30, 30, -30],
        y: [20, -20, 20],
        scale: [0.9, 1.1, 0.9],
      },
      transition: { duration: 30, repeat: Infinity, ease: "easeInOut" }
    }
  ], []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050d1a]">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={orb.className}
          style={orb.style}
          animate={orb.animate}
          transition={orb.transition}
        />
      ))}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
});

ParticleBackground.displayName = 'ParticleBackground';

export default ParticleBackground;
