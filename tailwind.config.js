/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Great Vibes', 'cursive']
    },
    extend: {
      backgroundColor: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)'
      },
      backgroundImage: {
        petals: "url('./petals.gif')"
      },
      cursor: {
        rose: 'url(rose.cur), pointer'
      }
    }
  },
  plugins: []
}
