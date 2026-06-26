/* Tailwind Play CDN config — shared across all pages.
   Loaded in <head> immediately after the Tailwind CDN script. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eef6ff',
          100: '#d9ecff',
          200: '#bcddff',
          300: '#8ec6ff',
          400: '#59a6ff',
          500: '#3385fc',
          600: '#1f66f0',
          700: '#1a52dc',
          800: '#1c44b2',
          900: '#1d3e8c',
          950: '#13284f'
        },
        ink: '#0b1b34',
        ember: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'sans-serif']
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,27,52,.04), 0 8px 24px -12px rgba(11,27,52,.18)',
        cardHover: '0 12px 40px -12px rgba(31,102,240,.35)'
      },
      maxWidth: {
        '8xl': '88rem'
      }
    }
  }
};
