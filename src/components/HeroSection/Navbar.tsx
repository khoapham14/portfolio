import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToElement = (element: string) => {
    const el = document.getElementById(element);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1000) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'credits', label: 'Credits' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-background border-b-2 border-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-2xl font-bold tracking-tight hover:text-foreground"
          aria-label="Home"
        >
          KP
        </a>

        {/* Desktop Navigation */}
        {windowWidth > 1000 ? (
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToElement(link.id)}
                className={cn(
                  'font-mono text-sm uppercase tracking-widest',
                  'text-foreground bg-transparent border-none',
                  'hover:underline underline-offset-4',
                  'transition-all duration-100',
                  'focus-visible:outline-none focus-visible:underline'
                )}
              >
                {link.label}
              </button>
            ))}
          </div>
        ) : (
          /* Mobile Hamburger */
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 bg-transparent border-none"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-foreground" />
              <div className="w-6 h-0.5 bg-foreground" />
              <div className="w-6 h-0.5 bg-foreground" />
            </div>
          </button>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-foreground text-background',
          'flex flex-col items-center justify-center',
          'transition-all duration-300',
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        )}
      >
        {/* Close Button */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className={cn(
            'absolute top-6 right-6',
            'font-mono text-2xl text-background bg-transparent border-none',
            'hover:opacity-70 transition-opacity'
          )}
          aria-label="Close menu"
        >
          X
        </button>

        {/* Mobile Nav Links */}
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToElement(link.id)}
              className={cn(
                'font-display text-4xl font-bold',
                'text-background bg-transparent border-none',
                'hover:underline underline-offset-8',
                'transition-all duration-100'
              )}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
