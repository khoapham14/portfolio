import { useEffect, useRef } from 'react';

/**
 * Make an element follow the cursor position
 * Uses transform + requestAnimationFrame for performance
 * Only active on desktop (hidden on mobile via CSS)
 */
export function useCursorFollow(elementId: string = 'cursor-circle') {
  const rafIdRef = useRef<number | undefined>(undefined);
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const circle = document.getElementById(elementId);
    if (!circle) return;

    const moveCircle = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };

      // Skip if animation frame already queued
      if (rafIdRef.current !== undefined) return;

      rafIdRef.current = requestAnimationFrame(() => {
        circle.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;
        rafIdRef.current = undefined;
      });
    };

    document.addEventListener('mousemove', moveCircle, { passive: true });

    return () => {
      document.removeEventListener('mousemove', moveCircle);
      if (rafIdRef.current !== undefined) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [elementId]);
}
