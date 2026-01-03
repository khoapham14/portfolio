import { cn } from '../../lib/utils';

interface SectionDividerProps {
  className?: string;
  thickness?: 'thin' | 'medium' | 'thick';
}

/**
 * Horizontal rule divider between sections
 * Sharp, black line for editorial feel
 */
export function SectionDivider({ className, thickness = 'thick' }: SectionDividerProps) {
  const thicknessStyles = {
    thin: 'border-t',
    medium: 'border-t-2',
    thick: 'border-t-4',
  };

  return (
    <div
      className={cn(
        'w-full border-foreground',
        thicknessStyles[thickness],
        className
      )}
      role="separator"
      aria-hidden="true"
    />
  );
}
