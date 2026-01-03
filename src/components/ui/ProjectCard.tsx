import { cn } from '../../lib/utils';

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
  projectType?: string;
  className?: string;
}

/**
 * Editorial project card with monochrome styling
 * Grayscale image that becomes color on hover
 * Full card inverts on hover with hard shadow
 */
export function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  link,
  projectType,
  className,
}: ProjectCardProps) {
  const handleClick = () => {
    try {
      const url = new URL(link);
      if (!['http:', 'https:'].includes(url.protocol)) {
        console.error('Invalid protocol:', link);
        return;
      }
      window.open(link, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Invalid URL:', link);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <article
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View project: ${title}`}
      className={cn(
        'group cursor-pointer overflow-hidden',
        'border-2 border-foreground bg-background',
        'transition-all duration-100',
        'hover:bg-foreground hover:text-background',
        'hover:shadow-[8px_8px_0_0_#000] hover:-translate-y-1',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2',
        className
      )}
    >
      {/* Image Container - no fixed aspect ratio to prevent cropping */}
      <div className="overflow-hidden border-b-2 border-foreground bg-muted">
        <img
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          loading="lazy"
          className={cn(
            'w-full h-auto',
            'grayscale transition-all duration-300',
            'group-hover:grayscale-0 group-hover:scale-105'
          )}
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h3 className="font-display text-2xl font-bold leading-tight">
          {title}
        </h3>

        {projectType && (
          <p className="font-body text-base italic text-muted-foreground group-hover:text-background/70">
            {projectType}
          </p>
        )}

        <p className="font-mono text-xs uppercase tracking-widest group-hover:opacity-60">
          {technologies.join(' • ')}
        </p>

        <p className="font-body text-sm leading-relaxed text-muted-foreground group-hover:text-background/80">
          {description}
        </p>
      </div>
    </article>
  );
}
