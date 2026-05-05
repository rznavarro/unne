import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary:   '#0A0A0A',
          secondary: '#111111',
          elevated:  '#1A1A1A',
        },
        accent: {
          DEFAULT: '#C9A84C',
          muted:   '#8B6F35',
        },
        gold: '#C9A84C',
        text: {
          primary:   '#F5F0E8',
          secondary: '#9A9590',
          muted:     '#5A5550',
        },
        border: {
          DEFAULT: '#2A2A2A',
          gold:    'rgba(201,168,76,0.3)',
        },
      },
      fontFamily: {
        serif:  ['Instrument Serif', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans:   ['DM Sans', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
        full:    '1440px',
      },
    },
  },
  plugins: [],
}

export default config
