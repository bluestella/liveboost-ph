import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff6a33',
          50: '#fff7f3',
          100: '#ffede6',
          200: '#ffd9cc',
          300: '#ffbda3',
          400: '#ff9970',
          500: '#ff6a33',
          600: '#e6602f',
          700: '#cc5529',
          800: '#b34a24',
          900: '#99401f',
        },
        secondary: {
          DEFAULT: '#0058a3',
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9ddff',
          300: '#7cc4ff',
          400: '#36a8ff',
          500: '#0d8fff',
          600: '#0058a3',
          700: '#004d8a',
          800: '#004171',
          900: '#00375d',
        },
        accent: {
          DEFAULT: '#fff1e6',
          50: '#fffbf7',
          100: '#fff1e6',
          200: '#ffe0cc',
          300: '#ffcab3',
          400: '#ffb399',
          500: '#ff9d80',
          600: '#e68a70',
          700: '#cc7760',
          800: '#b36450',
          900: '#995140',
        },
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config