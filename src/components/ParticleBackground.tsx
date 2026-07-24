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
        const DOTS = (await import('vanta/dist/vanta.dots.min')).default;
        
        if (cancelled || !vantaRef.current) return;

        effect = DOTS({
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
          color2: 0x06b6d4,
          backgroundColor: 0x050d1a,
          size: 3.00,
          spacing: 35.00,
          showLines: true,
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
