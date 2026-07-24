import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min';

export const ParticleBackground: React.FC = React.memo(() => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).THREE = THREE;
    }

    let effect: any = null;

    if (!vantaEffect && vantaRef.current) {
      try {
        effect = NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x38bdf8,
          backgroundColor: 0x050d1a,
          points: 13.00,
          maxDistance: 22.00,
          spacing: 16.00,
          showDots: true,
        });
        setVantaEffect(effect);
      } catch (e) {
        console.error('Vanta.js initialization error:', e);
      }
    }

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 z-0 pointer-events-none w-full h-full bg-[#050d1a]"
    />
  );
});

export default ParticleBackground;
