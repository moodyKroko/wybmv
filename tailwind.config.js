/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Great Vibes', 'cursive']
    },
    theme: {
      container: {
        center: true
      }
    },
    extend: {
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to right, rgba(236, 72, 153, 0.8), rgba(159, 18, 57, 0.8)), url('assets/petals.gif')"
      },
      cursor: {
        rose: "url('assets/rose.cur'), pointer"
      }
    }
  },
  plugins: []
}
