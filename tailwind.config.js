/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          teal:    '#0a9ab9',
          'teal-dark': '#087f99',
          'teal-light': '#e6f6fa',
          mint:    '#08bda2',
          navy:    '#272f47',
          'navy-mid': '#37425d',
          blue:    '#108dc1',
          'blue-light': '#8ab3e5',
          gray:    '#f4f7f9',
          muted:   '#6b7280',
        },
      },
      fontFamily: {
        sans:    ['var(--font-body)', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0', transform: 'translateY(6px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
