/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Inter', 'Segoe UI', 'sans-serif'],
        body: ['Open Sans', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
