'use client';

import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min.js';

const VantaBackground = ({ children }: { children: React.ReactNode }) => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3f84db,
          backgroundColor: 0x0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full -z-10">
      {children}
    </div>
  );
};

export default VantaBackground; 