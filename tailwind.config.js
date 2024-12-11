/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      colors: {
        orange: {
          500: '#FF6B00',
          600: '#E65D00',
        },
      },
    },
  },
  plugins: [],
};