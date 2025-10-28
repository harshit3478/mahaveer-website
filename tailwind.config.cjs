/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-satoshi)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        bricolage: ['var(--font-bricolage)', 'sans-serif'],
        satoshi: ['var(--font-satoshi)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'fluid-h1': ['clamp(2.75rem, 6vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'fluid-h2': ['clamp(2rem, 5vw, 3.25rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'fluid-h3': ['clamp(1.5rem, 3.8vw, 2.25rem)', { lineHeight: '1.2' }],
        'fluid-lead': ['clamp(1rem, 1.4vw, 1.125rem)', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
}
