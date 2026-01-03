import { cn } from '../../lib/utils';

interface CursorCircleProps {
  className?: string;
}

/**
 * Simplified cursor-following circle
 * White fill, black stroke, instant movement
 * Hidden on mobile via CSS
 */
export function CursorCircle({ className }: CursorCircleProps) {
  return (
    <div
      id="cursor-circle"
      className={cn(
        'fixed top-0 left-0 z-50',
        'w-8 h-8',
        'bg-foreground',
        'pointer-events-none',
        '-translate-x-1/2 -translate-y-1/2',
        'mix-blend-difference',
        'hidden md:block',
        className
      )}
      style={{ willChange: 'transform' }}
      aria-hidden="true"
    />
  );
}
