import Navbar from './Navbar';
import { Button } from '../ui/Button';

function scrollToElement(element: string) {
  const el = document.getElementById(element);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col bg-background texture-lines">
      <Navbar />

      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              {/* Eyebrow */}
              <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
                Software Developer
              </p>

              {/* Main Headline */}
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight">
                Khoa Pham
                <span className="block text-3xl md:text-4xl lg:text-5xl font-normal text-muted-foreground mt-2">
                  (Cody)
                </span>
              </h1>

              {/* Decorative Rule */}
              <div className="flex items-center gap-4">
                <div className="w-24 md:w-32 h-1 bg-foreground" />
                <div className="w-3 h-3 border-2 border-foreground" />
              </div>

              {/* Subtitle */}
              <p className="font-body text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                I'm a JavaScript developer from Vietnam living in New Zealand.
                Currently a Software Engineer @ ArchiPro NZ.
              </p>

              {/* CTA and Location */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToElement('projects')}
                >
                  View Work →
                </Button>

                <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-foreground"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Auckland, New Zealand
                </div>
              </div>
            </div>

            {/* Decorative Element - Desktop Only */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 border-2 border-foreground">
                {/* Inner square */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 bg-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center pb-8">
        <div className="w-px h-16 bg-foreground animate-pulse" />
      </div>
    </section>
  );
}

export default Hero;
