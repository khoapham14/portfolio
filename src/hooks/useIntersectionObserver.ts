import { useEffect, useRef } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Observe elements and add 'visible' class when they enter viewport
 * Used for fade-in animations on scroll
 */
export function useIntersectionObserver(
  selector: string = '.fade-in',
  options: UseIntersectionObserverOptions = {}
) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const { threshold = 0.1, rootMargin = '0px', once = true } = options;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (once && observerRef.current) {
              observerRef.current.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold, rootMargin }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => observerRef.current?.observe(element));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [selector, options]);
}
