import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ParticleBackground: React.FC = React.memo(() => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).THREE = THREE;
    }

    let effect: any = null;
    let cancelled = false;

    const initVanta = async () => {
      try {
        // @ts-ignore
        const CELLS = (await import('vanta/dist/vanta.cells.min')).default;
        
        if (cancelled || !vantaRef.current) return;

        effect = CELLS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          color1: 0x6b6d4, // Teal accent
          color2: 0x38bdf8, // Sky blue accent
          size: 1.50,
          speed: 1.50,
        });
      } catch (e) {
        console.error('Vanta.js initialization error:', e);
      }
    };

    initVanta();

    return () => {
      cancelled = true;
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 z-0 w-full h-full"
      style={{ backgroundColor: '#050d1a' }}
    />
  );
});

export default ParticleBackground;
