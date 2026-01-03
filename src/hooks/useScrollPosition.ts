import { useState, useEffect } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

/**
 * Track the current scroll position
 * Returns { x, y } coordinates
 */
export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    // Set initial position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
}
