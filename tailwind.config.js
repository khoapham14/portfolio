/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '#000000',
        muted: '#F5F5F5',
        'muted-foreground': '#525252',
        border: '#000000',
        'border-light': '#E5E5E5',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Rubik', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      borderRadius: {
        DEFAULT: '0',
        none: '0',
        sm: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
        full: '0',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '8': '8px',
      },
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
      },
      transitionDuration: {
        'instant': '100ms',
      },
    },
  },
  plugins: [],
}
