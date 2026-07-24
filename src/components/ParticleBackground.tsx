import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const generateRandomValue = (min: number, max: number) => Math.random() * (max - min) + min;

export const ParticleBackground: React.FC = React.memo(() => {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => {
      const size = Math.random() > 0.8 ? 'w-3 h-3' : Math.random() > 0.5 ? 'w-2 h-2' : 'w-1 h-1';
      const xStart = generateRandomValue(0, 100);
      const yStart = generateRandomValue(0, 100);
      
      return {
        id: `particle-${i}`,
        size,
        left: `${xStart}%`,
        top: `${yStart}%`,
        yAnim: [0, generateRandomValue(-30, -60), 0],
        xAnim: [0, generateRandomValue(-20, 20), 0],
        opacityAnim: [0.2, 0.6, 0.2],
        duration: generateRandomValue(8, 15),
        delay: generateRandomValue(0, 5),
      };
    });
  }, []);

  const lines = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => {
      return {
        id: `line-${i}`,
        left: `${generateRandomValue(10, 90)}%`,
        height: `${generateRandomValue(20, 60)}px`,
        top: `${generateRandomValue(10, 80)}%`,
        yAnim: [0, generateRandomValue(-20, -40), 0],
        duration: generateRandomValue(10, 18),
      };
    });
  }, []);

  const connectors = useMemo(() => {
    return Array.from({ length: 4 }).map((_, i) => {
      return {
        id: `connector-${i}`,
        left: `${generateRandomValue(20, 70)}%`,
        top: `${generateRandomValue(20, 80)}%`,
        width: `${generateRandomValue(40, 100)}px`,
        duration: generateRandomValue(4, 8),
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-navy-900">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-radial-gradient from-navy-800/30 to-transparent opacity-50" />

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full bg-cyan-accent/40 shadow-[0_0_8px_rgba(0,212,255,0.4)] ${particle.size}`}
          style={{
            left: particle.left,
            top: particle.top,
            willChange: 'transform',
          }}
          animate={{
            y: particle.yAnim,
            x: particle.xAnim,
            opacity: particle.opacityAnim,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}

      {/* Vertical DNA-like lines */}
      {lines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute w-[1px] bg-gradient-to-b from-transparent via-mint/30 to-transparent"
          style={{
            left: line.left,
            top: line.top,
            height: line.height,
            willChange: 'transform',
          }}
          animate={{
            y: line.yAnim,
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: line.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Horizontal connectors */}
      {connectors.map((connector) => (
        <motion.div
          key={connector.id}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-cyan-accent/20 to-transparent transform -rotate-12"
          style={{
            left: connector.left,
            top: connector.top,
            width: connector.width,
          }}
          animate={{
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: connector.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
});

export default ParticleBackground;
