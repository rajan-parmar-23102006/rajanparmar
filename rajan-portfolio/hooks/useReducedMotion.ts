"use client";

import { useEffect, useState } from 'react';

export function useReducedMotion() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    // Check device capabilities
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Also check for low-end devices (rough heuristic)
    const isLowEndDevice = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : false;
    
    setShouldReduceMotion(isMobile || prefersReducedMotion || isLowEndDevice);

    // Listen for changes in reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      setShouldReduceMotion(e.matches || isMobile || isLowEndDevice);
    };

    mediaQuery.addEventListener('change', handleChange);
    
    // Listen for resize to detect mobile
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768;
      setShouldReduceMotion(newIsMobile || prefersReducedMotion || isLowEndDevice);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return shouldReduceMotion;
}
