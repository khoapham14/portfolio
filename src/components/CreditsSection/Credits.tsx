import { cn } from '../../lib/utils';

const credits = [
  {
    title: 'CSS-Tricks & CodePen',
    description: 'For cool CSS tricks and code snippets.',
  },
  {
    title: 'Francesco Ungaro',
    description: 'For the starry sky background picture.',
  },
  {
    title: 'Awwwards',
    description: "For inspirational portfolios, especially Peter Arendt, Martin Briceno & Jean Mazouni's work.",
  },
  {
    title: 'YouTube Creators',
    description: 'Fireship, Hyperplexed, DesignCourse & FullstackJunkie for great tutorials.',
  },
  {
    title: 'Everyone I\'ve worked with',
    description: 'For teaching me all the cool stuff.',
  },
  {
    title: 'You',
    description: 'For checking out my website.',
  },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function Credits() {
  return (
    <footer id="credits" className="bg-foreground text-background border-t-4 border-background">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Credits Header */}
          <h2 className="font-mono text-xs uppercase tracking-widest text-background/60 mb-12">
            Special Thanks To
          </h2>

          {/* Credits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {credits.map((credit, index) => (
              <div
                key={index}
                className="pb-6 border-b border-background/20"
              >
                <h3 className="font-body text-lg font-medium mb-2">
                  {credit.title}
                </h3>
                <p className="font-body text-sm text-background/60">
                  {credit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-background/20">
            {/* Copyright */}
            <p className="font-mono text-sm text-background/60">
              © {new Date().getFullYear()} Khoa Pham. All rights reserved.
            </p>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className={cn(
                'font-mono text-sm uppercase tracking-widest',
                'text-background bg-transparent border-none',
                'underline underline-offset-4',
                'hover:decoration-2 transition-all duration-100',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background'
              )}
            >
              Back to Top ↑
            </button>
          </div>

          {/* Closing Message */}
          <div className="text-center mt-16">
            <p className="font-display text-2xl md:text-3xl italic text-background/60">
              Have a great day!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Credits;
