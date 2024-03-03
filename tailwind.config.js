/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Great Vibes', 'cursive']
    },
    extend: {
      backgroundImage: {
        petals: 'url(/assets/petals.gif)'
      },
      cursor: {
        rose: 'url(/assets/rose.cur), pointer'
      }
    }
  },
  plugins: []
}
