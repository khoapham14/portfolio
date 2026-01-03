import { cn } from '../../lib/utils';

export interface AboutBlockProps {
  duration: string;
  company: string;
  jobTitle: string;
  description: string;
  techStack: string;
}

function AboutBlock({ duration, company, jobTitle, description, techStack }: AboutBlockProps) {
  const technologies = techStack.split(' - ');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-6 lg:gap-12 relative pb-12 last:pb-0">
      {/* Timeline line (desktop only) */}
      <div className="hidden lg:block absolute left-[180px] top-0 bottom-0 w-0.5 bg-border-light" />

      {/* Date Column */}
      <div className="lg:text-right">
        <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
          {duration}
        </span>
      </div>

      {/* Content Column */}
      <div className="relative pl-0 lg:pl-8">
        {/* Timeline dot (desktop only) */}
        <div className="hidden lg:block absolute -left-1.5 top-1 w-3 h-3 bg-foreground" />

        {/* Company & Title */}
        <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
          {company}
        </h3>
        <p className="font-body text-lg italic text-muted-foreground mb-6">
          {jobTitle}
        </p>

        {/* Description */}
        <div className="space-y-6">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest mb-2">
              What I've worked on
            </h4>
            <p className="font-body text-base leading-relaxed text-muted-foreground max-w-prose">
              {description}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest mb-3">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className={cn(
                    'px-3 py-1 border border-foreground',
                    'font-mono text-xs uppercase tracking-wide'
                  )}
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider between items */}
      <div className="col-span-full border-b border-border-light mt-8 last:hidden" />
    </div>
  );
}

export default AboutBlock;
