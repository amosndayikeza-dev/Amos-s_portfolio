import type { Config } from 'tailwindcss';

/**
 * The whole site uses ONE accent colour through the `accent-*` tokens.
 * To switch from emerald to indigo, replace the values below with the
 * indigo scale listed in README.md ("Change the accent colour").
 */
const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
      },
      fontFamily: {
        sans: [
          '"Inter Variable"',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono Variable"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(24, 24, 27, 0.04), 0 8px 24px -12px rgba(24, 24, 27, 0.12)',
        lift: '0 2px 4px rgba(24, 24, 27, 0.04), 0 16px 32px -14px rgba(24, 24, 27, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;
