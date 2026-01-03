import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

/**
 * Monochrome button component
 * Sharp corners, instant transitions
 */
export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center',
    'font-mono uppercase tracking-widest',
    'transition-colors duration-100',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none'
  );

  const variants = {
    primary: 'bg-foreground text-background border-2 border-foreground hover:bg-muted-foreground',
    outline: 'bg-transparent text-foreground border-2 border-foreground hover:bg-foreground hover:text-background',
    ghost: 'bg-transparent text-foreground border-none hover:underline underline-offset-4',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
