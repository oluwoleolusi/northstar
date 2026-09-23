/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F5F5F3',
        ink: '#0A0A0A',
        charcoal: '#1A1A1A',
        gray: {
          DEFAULT: '#8C8C88',
          soft: '#B8B8B3',
          line: '#DEDEDA',
        },
        signal: '#2B4EFF',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightish: '-0.02em',
        tighter2: '-0.04em',
        wideish: '0.08em',
        wider2: '0.16em',
      },
      fontSize: {
        mega: ['clamp(3rem, 9vw, 8.5rem)', { lineHeight: '0.94', letterSpacing: '-0.03em' }],
        huge: ['clamp(2.25rem, 5.5vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
      },
      transitionTimingFunction: {
        studio: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      maxWidth: {
        prose: '62ch',
      },
    },
  },
  plugins: [],
}
