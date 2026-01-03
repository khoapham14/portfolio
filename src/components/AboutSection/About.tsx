import AboutBlock from './AboutBlock';
import { workHistory } from './AboutBlockProps';
import { SectionDivider } from '../ui/SectionDivider';
import { cn } from '../../lib/utils';

const buzzwords = [
  {
    title: 'Problem Solver',
    description:
      "I don't like problems (who does?), so I always try my best to identify & resolve them in a way that suits all parties.",
  },
  {
    title: 'Self Motivated',
    description:
      'I am able to quickly find inspiration and stay motivated whenever I want to learn or do something new.',
  },
  {
    title: 'Adaptable',
    description:
      'I can quickly adapt to new environments and learn new technologies. I also work well with people from different teams & backgrounds.',
  },
];

function About() {
  return (
    <section id="about" className="bg-muted">
      <SectionDivider thickness="thick" />

      {/* Work Experience Section */}
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-16 md:mb-20">
            Experience
          </h2>

          <div className="space-y-0">
            {workHistory.map((exp, index) => (
              <AboutBlock key={index} {...exp} />
            ))}
          </div>
        </div>
      </div>

      <SectionDivider thickness="medium" />

      {/* Buzzwords Section */}
      <div className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Quote */}
            <div className="relative">
              {/* Decorative quote mark */}
              <span
                className="absolute -top-8 -left-4 font-display text-[8rem] leading-none text-border-light select-none"
                aria-hidden="true"
              >
                "
              </span>

              <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6 relative z-10">
                I Am Not A Rockstar Developer
              </h3>

              <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-md">
                However, I am confident that I know enough to pick up any required skills and
                contribute to a project. Here are some qualities that may make me a good fit for
                your team.
              </p>
            </div>

            {/* Right Column - Skills */}
            <div className="space-y-8">
              {buzzwords.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    'pb-8',
                    index < buzzwords.length - 1 && 'border-b-2 border-foreground'
                  )}
                >
                  <h4 className="font-mono text-xs uppercase tracking-widest mb-3">
                    {item.title}
                  </h4>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
